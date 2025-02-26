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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRXPRFYR%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T160942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQDERnyCfjnRHdyxn9YBmbO7ZFDs7O2bBX%2BB0%2FUtde5ACwIhANY4wGGQJQGmA1dhVBmMMg%2BObjsHDY10NfuPCgyDHIlXKv8DCF0QABoMNjM3NDIzMTgzODA1IgzanR9eRc09jpf2Bf8q3APc1XQrOqzPKfoTxRVQFT2YuyIRcWm3gWQwhgpxhinKoatEC1P8RYAzVtXsbgpMPa57VOws0WCzV6vf1Cozs7pvSSdFSgevTxLsCqFVaiuSKvW3IToUzhWRWwZ4AdjjBbHUQVEsn2%2F8GX0aglW518V9Tnj98JC9zUjp1UD7LPVsFVAt1MDbluQ9gVqx16tX5eP7KXZDc%2BQs0ZBZ2Nm4x8dO%2BS8sOeqjQp8IsqRqS9qzOWsvXLm5UPlDgNgrFlSkxxvF9SRocfn3aIOhU9VhXtqqELbrewhGK5fxy50u18OcgL53M3A1TNCyniwkTBN2eMnBH37A6YO7DWUZj39wHlpN%2BQwJlE68XYdPLLsWYE%2BeBobGTicpQOY9bqgRcHJmhWWeAXBI1GaTErh9VWr5o8ZbOhngUQKdSojisa8YguEyDEvpfWtsbqgHFmnXPqH%2BT%2FMpz1fMT1heMmRcUnmOI4TFL20HlqjMRMDsFkPBsOVuaqEAAPiYHAziaMociLjOCSSHu9Ax2dmJfzip%2FKZKOTVG7FuBa30%2FLt78U7VS%2BZMljeWZ65xzsz84wqUtLs%2F3R7h6f4NiX4uLVh3y4s2DhOrDogzXHTLlmLojg5czvd74nu6jJRcwCVL9VXfbczCziPy9BjqkAQ6Dl2QLii81KNwcpRRXBj1lmh%2FIC6Ylb6FdJUS7E7ZlgdnGKpZz%2BGrrCkC%2BZ9UfcACgbSYKt37yG60GKRKMOeNwj2RmzJ5iTWxTfGmY2QvswwNxMr7Oouj008XEa%2Fp4ULHF1dgjTsFpS7pLSHzmoDyZIpZLch%2BR8m6RnRCFUZPlm19oLTULVxMHxNF%2Fu0zgEfvcLymkASb0T3IwEpVJc%2B6O7%2Fy3&X-Amz-Signature=359338681e7d58acb82e5b8111524ae58566c15a88ec5f2214585fb5d4e22cb9&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRXPRFYR%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T160942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQDERnyCfjnRHdyxn9YBmbO7ZFDs7O2bBX%2BB0%2FUtde5ACwIhANY4wGGQJQGmA1dhVBmMMg%2BObjsHDY10NfuPCgyDHIlXKv8DCF0QABoMNjM3NDIzMTgzODA1IgzanR9eRc09jpf2Bf8q3APc1XQrOqzPKfoTxRVQFT2YuyIRcWm3gWQwhgpxhinKoatEC1P8RYAzVtXsbgpMPa57VOws0WCzV6vf1Cozs7pvSSdFSgevTxLsCqFVaiuSKvW3IToUzhWRWwZ4AdjjBbHUQVEsn2%2F8GX0aglW518V9Tnj98JC9zUjp1UD7LPVsFVAt1MDbluQ9gVqx16tX5eP7KXZDc%2BQs0ZBZ2Nm4x8dO%2BS8sOeqjQp8IsqRqS9qzOWsvXLm5UPlDgNgrFlSkxxvF9SRocfn3aIOhU9VhXtqqELbrewhGK5fxy50u18OcgL53M3A1TNCyniwkTBN2eMnBH37A6YO7DWUZj39wHlpN%2BQwJlE68XYdPLLsWYE%2BeBobGTicpQOY9bqgRcHJmhWWeAXBI1GaTErh9VWr5o8ZbOhngUQKdSojisa8YguEyDEvpfWtsbqgHFmnXPqH%2BT%2FMpz1fMT1heMmRcUnmOI4TFL20HlqjMRMDsFkPBsOVuaqEAAPiYHAziaMociLjOCSSHu9Ax2dmJfzip%2FKZKOTVG7FuBa30%2FLt78U7VS%2BZMljeWZ65xzsz84wqUtLs%2F3R7h6f4NiX4uLVh3y4s2DhOrDogzXHTLlmLojg5czvd74nu6jJRcwCVL9VXfbczCziPy9BjqkAQ6Dl2QLii81KNwcpRRXBj1lmh%2FIC6Ylb6FdJUS7E7ZlgdnGKpZz%2BGrrCkC%2BZ9UfcACgbSYKt37yG60GKRKMOeNwj2RmzJ5iTWxTfGmY2QvswwNxMr7Oouj008XEa%2Fp4ULHF1dgjTsFpS7pLSHzmoDyZIpZLch%2BR8m6RnRCFUZPlm19oLTULVxMHxNF%2Fu0zgEfvcLymkASb0T3IwEpVJc%2B6O7%2Fy3&X-Amz-Signature=89dc4899d17a5fbef8dfbfd105c9335eeec17cdd200e5ce13ac809676f9f236e&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
