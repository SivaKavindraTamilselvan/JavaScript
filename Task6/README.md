## TASK6
Implement a list that allows users to reorder items using drag and drop functionality.

## REQUIREMENTS
- Leverage the HTML5 Drag and Drop API to manage drag events.
- Update the DOM to reflect the new order of items after a drop.
- Provide visual feedback during drag operations (e.g., highlight potential drop targets).

## TECHNOLOGIES USED
HTML
CSS
JS

## FEATURES
Add the task
Delete the task
Popup for confirmation for delte
Two List 
One for completed task
one for ongoing task
Drag and drop the list order
change the list order

## JS USED

.textContent
.createElement
.appendChild
.addEventListener
.classList
.innerHTML
.querySelector
document.getElementById
arrow functions with parameter
conditonal statement
click event
dragstart event
dragend event
dragover event
drop event
dragleave event

## SCREENSHOTS
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/17a555e5-8918-446e-a6e3-59a18de7a237" />
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/59c0a4bc-ed6a-4e51-8596-460796712d51" />
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/38556192-c9a5-42a1-bd59-5db6fef7d970" />



// Step 1: Select the container that holds all draggable items
const container = document.getElementById("list");

Explanation:

container stores the parent element that contains all items we want to reorder.
All drag-and-drop logic happens inside this container.
// Step 2: Variable to store the currently dragged item
let draggedItem = null;

Explanation:

draggedItem keeps a reference to the item being dragged.
Needed because during dragover, we must know which item is moving.
// Step 3: Select all draggable items inside the container
const draggableItems = container.querySelectorAll(".draggable");

Explanation:

querySelectorAll(".draggable") selects all children with class .draggable.
These are the items users can move.
// Step 4: Add drag events to each draggable item
draggableItems.forEach(item => addDragEvents(item));

Explanation:

For each draggable item, we attach all necessary drag-and-drop event listeners using the addDragEvents() function.
// Step 5: Function to add drag event listeners to an item
function addDragEvents(item) {
    // Step 5a: Make the item draggable
    item.setAttribute("draggable", true);

Explanation:

HTML5 requires the draggable attribute for drag-and-drop.
Setting draggable=true allows the item to be picked up by the user.
    // Event: Drag starts
    item.addEventListener("dragstart", () => {
        draggedItem = item;             // Store the dragged item
        item.classList.add("dragging"); // Add visual feedback
    });

Explanation:

Fires when the user starts dragging.
Stores the item being dragged in draggedItem.
Adds a .dragging class for visual feedback (like making it semi-transparent).
    // Event: Drag ends
    item.addEventListener("dragend", () => {
        draggedItem = null;                   // Clear the reference
        item.classList.remove("dragging");    // Remove visual feedback
        // Remove .over class from all items
        container.querySelectorAll(".draggable").forEach(el => el.classList.remove("over"));
    });
}

Explanation:

Fires when dragging finishes, either by dropping or cancelling.
Clears draggedItem to prevent bugs.
Removes .dragging class.
Removes .over class from all items so no drop indicator remains.
// Step 6: Handle dragover event on container
container.addEventListener("dragover", (e) => {
    e.preventDefault(); // Must prevent default to allow drop

Explanation:

dragover fires continuously while the dragged item is over the container.
e.preventDefault() is required; otherwise the drop is not allowed.
    // Step 6a: Find the element the dragged item should go before
    const afterElement = getDragAfterElement(container, e.clientY);

Explanation:

We calculate the closest element under the mouse where the dragged item should be inserted.
Pass e.clientY (current vertical mouse position) to compare with each item's bounding box.
    // Step 6b: Clear previous visual drop indicators
    container.querySelectorAll(".draggable").forEach(el => el.classList.remove("over"));

Explanation:

Removes .over class from all items to update visual drop indicator in real time.
    // Step 6c: Insert dragged item at the correct position
    if (afterElement == null) {
        container.appendChild(draggedItem); // Insert at the end
    } else {
        container.insertBefore(draggedItem, afterElement); // Insert before calculated element
        afterElement.classList.add("over"); // Visual feedback
    }
});

Explanation:

If no element found above mouse, append to the end of the container.
Otherwise, use insertBefore to reorder dynamically.
Add .over class for a visual cue where the item will drop.
// Step 7: Function to determine which element the dragged item should be inserted before
function getDragAfterElement(container, y) {
    const draggableElements = [...container.querySelectorAll(".draggable:not(.dragging)")];

Explanation:

Get all draggable items except the one currently dragged.
Spread operator [...] converts NodeList to an array for easy manipulation.
    return draggableElements.reduce((closest, child) => {
        const box = child.getBoundingClientRect();      // Element position & size
        const offset = y - box.top - box.height / 2;   // Distance from element center

Explanation:

getBoundingClientRect() returns element’s coordinates and dimensions.
offset calculates how far the mouse is from the center of the element.
        if (offset < 0 && offset > closest.offset) {
            return { offset: offset, element: child }; // Closest element above mouse
        } else {
            return closest;
        }
    }, { offset: Number.NEGATIVE_INFINITY }).element;
}

Explanation:

Finds the closest element above the mouse pointer.
Returns that element so insertBefore() can place the dragged item at the right spot.
Number.NEGATIVE_INFINITY ensures any valid offset will replace it on the first iteration.
Step 8: Visual Classes
.dragging → Applied to the item being dragged (semi-transparent, or different border).
.over → Applied to the element where the dragged item will be inserted.
Step 9: Key Concepts
HTML5 Drag-and-Drop API → draggable, dragstart, dragend, dragover.
Bounding Box Logic → Calculates insertion point dynamically using element center.
Dynamic Reordering → Items are moved in the DOM in real-time.
Real-Time Visual Feedback → Shows the user where the item will drop.

