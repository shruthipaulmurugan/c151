AFRAME.registerComponent("cursor-listener", {
    schema: {
        selectedItemId: {
            default: "", type: "string"
        },
        init: function(){
            this.handleMouseEnterEvent()
            this.handleMouseLeaveEvent()
        },
        handlePlacesListState: function(){
            const id = this.el.getAttribute("id");
            const placesId = ["car_scene"];

            if(placesId.includes(id)){
                const placesContainer = document.querySelector("#places-container");
                placesContainer.setAttribute("cursor-listener", {
                    selectedItemId: id
                });
                this.el.setAttribute("material", {
                    color: "#d76b30",
                    opacity: 1,
                })
            }
        },
        handleMouseEnterEvent: function(){
            this.el.addEventListener("mouseenter", () => {
                this.handlePlacesListState()
            })
        },
        handleMouseLeaveEvent: function(){
            this.el.addEventListener("mouseleave", () => {
                const {selectedItemId} = this.data;
                if(selectedItemId){
                    const el = document.querySelector(`#${selectedItemId}`);
                    const id = el.getAttribute("id");
                    if(id == selectedItemId){
                        el.setAttribute("material", {
                            color: "#0077cc",
                            opacity: 1,
                        })
                    }
                }
            })
        }
    }
})