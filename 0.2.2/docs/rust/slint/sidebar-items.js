initSidebarItems({"enum":[["Brush","A brush is a data structure that is used to describe how a shape, such as a rectangle, path or even text, shall be filled. A brush can also be applied to the outline of a shape, that means the fill of the outline itself."],["CloseRequestResponse","This enum describes whether a Window is allowed to be hidden when the user tries to close the window. It is the return type of the callback provided to [Window::on_close_requested]."],["GraphicsAPI","This enum describes a low-level access to specific graphics APIs used by the renderer."],["RenderingState","This enum describes the different rendering states, that will be provided to the parameter of the callback for `set_rendering_notifier` on the `slint::Window`."],["SetRenderingNotifierError","This enum describes the different error scenarios that may occur when the applicaton registers a rendering notifier on a `crate::Window`."],["TimerMode","The TimerMode specifies what should happen after the timer fired."]],"fn":[["invoke_from_event_loop","Adds the specified function to an internal queue, notifies the event loop to wake up. Once woken up, any queued up functors will be invoked."],["quit_event_loop","Schedules the main event loop for termination. This function is meant to be called from callbacks triggered by the UI. After calling the function, it will return immediately and once control is passed back to the event loop, the initial call to [`run_event_loop()`] will return."],["run_event_loop","Enters the main event loop. This is necessary in order to receive events from the windowing system in order to render to the screen and react to user input."]],"macro":[["include_modules","Include the code generated with the slint-build crate from the build script. After calling `slint_build::compile` in your `build.rs` build script, the use of this macro includes the generated Rust code and makes the exported types available for you to instantiate."],["slint","This macro allows you to use the `.slint` design markup language inline in Rust code. Within the braces of the macro you can use place `.slint` code and the named exported components will be available for instantiation."]],"mod":[["docs","This is a pseudo module which only exist for documentation purposes as a way to show the Slint documentation as part of rustdoc."],["testing","This module contains functions useful for unit tests"]],"struct":[["Color","Color represents a color in the Slint run-time, represented using 8-bit channels for red, green, blue and the alpha (opacity). It can be conveniently converted using the `to_` and `from_` (a)rgb helper functions:"],["Image","An image type that can be displayed by the Image element. You can construct Image objects from a path to an image file on disk, using [`Self::load_from_path`]."],["LoadImageError","Error generated if an image cannot be loaded for any reasons."],["ModelNotify","Dispatch notifications from a [`Model`] to one or several [`ModelPeer`]. Typically, you would want to put this in the implementation of the Model"],["ModelPeer","Represent a handle to a view that listens to changes to a model."],["ModelRc","A Reference counted [`Model`]."],["RgbaColor","RgbaColor stores the red, green, blue and alpha components of a color with the precision of the generic parameter T. For example if T is f32, the values are normalized between 0 and 1. If T is u8, they values range is 0 to 255. This is merely a helper class for use with [`Color`]."],["SharedPixelBuffer","SharedPixelBuffer is a container for storing image data as pixels. It is internally reference counted and cheap to clone."],["SharedString","A string type used by the Slint run-time."],["SharedVector","SharedVector holds a reference-counted read-only copy of `[T]`."],["StandardListViewItem","Represent an item in a StandardListView"],["Timer","Timer is a handle to the timer system that allows triggering a callback to be called after a specified period of time."],["VecModel","A model backed by a `Vec<T>`"],["Weak","Struct that’s used to hold weak references of a Slint component"],["Window","This type represents a window towards the windowing system, that’s used to render the scene of a component. It provides API to control windowing system specific aspects such as the position on the screen."]],"trait":[["ComponentHandle","This trait describes the common public API of a strongly referenced Slint component. It allows creating strongly-referenced clones, a conversion into/ a weak pointer as well as other convenience functions."],["Global","This trait is used to obtain references to global singletons exported in `.slint` markup. Alternatively, you can use [`ComponentHandle::global`] to obtain access."],["Model","A Model is providing Data for the Repeater or ListView elements of the `.slint` language"],["ModelExt","Extension trait with extra methods implemented on types that implements [`Model`]"],["ModelTracker","This trait defines the interface that users of a model can use to track changes to a model. It is supplied via [`Model::model_tracker`] and implementation usually return a reference to its field of [`ModelNotify`]."],["RenderingNotifier","Internal trait that’s used to map rendering state callbacks to either a Rust-API provided impl FnMut or a struct that invokes a C callback and implements Drop to release the closure on the C++ side."]],"type":[["Rgb8Pixel","Convenience alias for a pixel with three color channels (red, green and blue), each encoded as u8."],["Rgba8Pixel","Convenience alias for a pixel with four color channels (red, green, blue and alpha), each encoded as u8."]]});