---
sys:
  pageId: "b2ee05fb-e371-436a-9c42-fdfc687f0bf6"
  createdTime: "2024-06-24T23:51:00.000Z"
  lastEditedTime: "2024-10-06T19:58:00.000Z"
  propFilepath: "docs/Guides/Taproot basics/Hello_World.md"
title: "Hello_World"
date: "2024-10-06T19:58:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 124
toc: false
icon: ""
---

> Make sure you have the the TTL to usb adapter connected to uart2 on the `type-c` 

	[link_to_page](3b7f0872-f00d-41cf-857e-646938c49bd0)

imports all the libraries that will be used

```cpp
#include "tap/board/board.hpp"
#include "drivers_singleton.hpp"
#include "tap/communication/serial/uart_terminal_device.hpp"// allows for printf
```

use namespace `tap::communication::serial` for ease of use

```cpp
using namespace tap::communication::serial;
```

get drivers and initialize the type-c

```cpp
    src::Drivers *drivers = src::DoNotUse_getDrivers();  // gets the driver object
    Board::initialize();     // initialize the whole board
```

initialize the `UartTerimalDevice` object and `IOStream` object.

These two objects are what allow us to print through `Uart2` on the type-c

```cpp
    UartTerminalDevice ter(drivers);
    ter.initialize();
    modm::IOStream s(ter);
```

print “Hello world” and sleep for 500ms

```cpp
s.printf("Hello world\n"); // print hello world
modm::delay_ms(500);       // sleep for 500 ms
```

### Code:

```cpp
#include "tap/board/board.hpp"
#include "drivers_singleton.hpp"
#include "tap/communication/serial/uart_terminal_device.hpp"

using namespace tap::communication::serial;

int main(){
    src::Drivers *drivers = src::DoNotUse_getDrivers();// gets the driver object
    Board::initialize();     // intalize the whole board

    UartTerminalDevice ter(drivers);
    ter.initialize();
    modm::IOStream s(ter);

    while(true){
        s.printf("Hello world\n");
        modm::delay_ms(500);
    }
}
```

{{< alert context="info" text="to upload to the type-c press `ctrl+shift+B`" />}}

click on `serial monitor` on the bottom bar

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNUAEQ62%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T090747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDz5ii%2FMKSX6yY%2FU6jCUWKGUjDL9lbM4F9bUmkjAz5hCAIgRbBYqQ6ixVQJC7kzwskLlGtlnrKKlTFWXCLvRSz4XBsqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLcZr4FWzNfVTHHjiCrcAxH47cmveZMhiAFQ2nQ7M%2FGfNR6vlggKlG85XwavxZfg5Kh9AI%2BqZCWMjE7%2BQjPHdSlHWrkMruCp82RPT5ovBOqGLmIqAaszlOTv8G5%2BXbY6aRuYX%2BVJeiyN9u2RQOcAHlNPWGHkgYSBEOJc6XmOP%2Fzyi8jUqHCtBWgvOmxoBWKqJAWd%2FL%2BoB7pBbKENyB5uJvG3XJqjvevmhgeP%2Bo9x471joNtXPxlyEwbUcAFBJiuDlSnv1vOPV3vHBogVr7Ho7E7cRvN06KQfopkuhLarMsrkqb%2BMmKDdrN7YN7cuieYeRHuGYrXNlQ0RvCJS4suGYy0QCv82tEbVE3%2FROLrXqBYxEXx44JYylRFwJVWVwpqdYT0VmgUqw9TSFY1V5OlUMVauqqcdG6alJSFR785DqYU0pQYKuvdCiyLRP%2FfakgSCjdcOzMhF8KRCFzTjQ0q56R302MR4u8u8yFzDVhSOc0iZFlwddsZidxBQQHMY3JgxEZQGUR5LWMMOPD2XebIQjhZiCuE3bvInwbrwVmqzGf%2FkcV4KCYy6plfBCfY2SPYg%2FPqkRWZ%2B739beCMeJ9hm68beSn8oikpmzZfOgEg8duQUuywoXtcdZ%2BrOmhmKqoj8KKk4MVD11ouW75kIMNzylMIGOqUBsfyMEr1ieAwE5DY07t%2FfKyOq%2F5KMFrEa5%2FBJXQFRepMitBs5i%2FU8AeyBBKTZF9CK0Kl4udReXN8YP%2Bj5omiYPZLvgs1JLpckop5cjcEexvAxgYOvXM710LQ%2FpWiFg%2FYJ8SzPqViCH1aQ7hpcDQ4gSeweGKk6TLvod9hFikBpmZGrgvRGypgeWNCTi5QuWwJOvwBMP55Gr02Fyw2kcB9n1kBZB%2F%2FS&X-Amz-Signature=229cfb00789187dca81b06c5520b84485e451fe469ce1942ff7e8e4465f8c609&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNUAEQ62%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T090747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDz5ii%2FMKSX6yY%2FU6jCUWKGUjDL9lbM4F9bUmkjAz5hCAIgRbBYqQ6ixVQJC7kzwskLlGtlnrKKlTFWXCLvRSz4XBsqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLcZr4FWzNfVTHHjiCrcAxH47cmveZMhiAFQ2nQ7M%2FGfNR6vlggKlG85XwavxZfg5Kh9AI%2BqZCWMjE7%2BQjPHdSlHWrkMruCp82RPT5ovBOqGLmIqAaszlOTv8G5%2BXbY6aRuYX%2BVJeiyN9u2RQOcAHlNPWGHkgYSBEOJc6XmOP%2Fzyi8jUqHCtBWgvOmxoBWKqJAWd%2FL%2BoB7pBbKENyB5uJvG3XJqjvevmhgeP%2Bo9x471joNtXPxlyEwbUcAFBJiuDlSnv1vOPV3vHBogVr7Ho7E7cRvN06KQfopkuhLarMsrkqb%2BMmKDdrN7YN7cuieYeRHuGYrXNlQ0RvCJS4suGYy0QCv82tEbVE3%2FROLrXqBYxEXx44JYylRFwJVWVwpqdYT0VmgUqw9TSFY1V5OlUMVauqqcdG6alJSFR785DqYU0pQYKuvdCiyLRP%2FfakgSCjdcOzMhF8KRCFzTjQ0q56R302MR4u8u8yFzDVhSOc0iZFlwddsZidxBQQHMY3JgxEZQGUR5LWMMOPD2XebIQjhZiCuE3bvInwbrwVmqzGf%2FkcV4KCYy6plfBCfY2SPYg%2FPqkRWZ%2B739beCMeJ9hm68beSn8oikpmzZfOgEg8duQUuywoXtcdZ%2BrOmhmKqoj8KKk4MVD11ouW75kIMNzylMIGOqUBsfyMEr1ieAwE5DY07t%2FfKyOq%2F5KMFrEa5%2FBJXQFRepMitBs5i%2FU8AeyBBKTZF9CK0Kl4udReXN8YP%2Bj5omiYPZLvgs1JLpckop5cjcEexvAxgYOvXM710LQ%2FpWiFg%2FYJ8SzPqViCH1aQ7hpcDQ4gSeweGKk6TLvod9hFikBpmZGrgvRGypgeWNCTi5QuWwJOvwBMP55Gr02Fyw2kcB9n1kBZB%2F%2FS&X-Amz-Signature=291c49dc30eb955cbca3d1e516bf68381e87042fce36db23a608fd4696eb5d54&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
