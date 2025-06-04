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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OM53FLR%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T070925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIEZgf8J3BSH9GMgZFoIlBXuee27oMIuztfGnPTbx%2Fmn%2BAiEAlKBvPKaupuaVAz1Ps7kpI%2B5LdD%2FBvKdNzaS8B9vOG9Eq%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDGoqf2ZANajKY%2BnEjCrcA%2FLEyR8lvTqCWRtbapBt0Wg4xCUK93kYr65ygLC4TZUn27Xeh1liPoErkvshRRZx2l11%2Fn%2BbJIaTywydgN8dSI0tCwqliMe3k3gWoheYXJECSFEnU1z3UkzEKSCvfWfGca4tv5up5hyf8Yf2q3MjfZpHO%2BptW7%2BsM1GEG0TBX18uCNJE6kGR%2FLT61ZEA7mjOcEsHXQW3%2Fg0UlUVejjItq5eOIQbPb7MZ8VkOmQyc6ftfzW%2BndzgkgePDe43uZSUA4XMyx5SoOH0GnEM2Il48pOg70%2FB1LRgaT5GWn%2FMD1nMG1%2BhzrcKo4yAOHEq5%2BzXEt25px4oNIoZbZE6n2igeMHnNWyeyyhQhMOpE5LqN7jyWiCXa%2FaP4LXPukJSQjik%2BL2zCIncgeGPksU8MvE3CwWd3VfTd7z%2Bh8Uh%2Bqwv%2FpZSNa0ClkRsu2XhJ87JY2zw2syKdhKAHr9YAvq8PDQqyarRfRmobkApMEsTDBEfq7YQxidcbOIUiRW3tE%2B4ZPAvJ%2B2d9uIcT0y0gepq4D2vpAKpE%2BeGEitPIrDV5akiBFCIk%2FjnB7%2BYj6F5j8yE%2FXHXqJYS9BsIqGfA%2FXPAhQ9UYJV10FxNiV618q2v5vyi7hDqgLOFIVE15cgja55B8MIOJ%2F8EGOqUBDPbsjlvsGt0ggyxw7Bqfou1phw8NRHs2h9SsZlp4hgU1lzUPFYASj%2BzQKnfq4KevmiGuI8Ulq0QcrMQezASJMHOIRqiNrxAPfvh0bnpPQhVWIMmFv7IjFxlG%2FBTQ5h%2FACtuRdA4DID%2BK202oO7Ah59JoE0xQxYA7cr98WWmGOTpZk%2FhOzdiN61Ck8sIDoy6CiyKL89UgOow1a5W6xnPHOp%2FVGp5Z&X-Amz-Signature=8bfd14589026812b8cf6ba773c901528201270a8a21a867c54be54da0bec61fc&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OM53FLR%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T070925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIEZgf8J3BSH9GMgZFoIlBXuee27oMIuztfGnPTbx%2Fmn%2BAiEAlKBvPKaupuaVAz1Ps7kpI%2B5LdD%2FBvKdNzaS8B9vOG9Eq%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDGoqf2ZANajKY%2BnEjCrcA%2FLEyR8lvTqCWRtbapBt0Wg4xCUK93kYr65ygLC4TZUn27Xeh1liPoErkvshRRZx2l11%2Fn%2BbJIaTywydgN8dSI0tCwqliMe3k3gWoheYXJECSFEnU1z3UkzEKSCvfWfGca4tv5up5hyf8Yf2q3MjfZpHO%2BptW7%2BsM1GEG0TBX18uCNJE6kGR%2FLT61ZEA7mjOcEsHXQW3%2Fg0UlUVejjItq5eOIQbPb7MZ8VkOmQyc6ftfzW%2BndzgkgePDe43uZSUA4XMyx5SoOH0GnEM2Il48pOg70%2FB1LRgaT5GWn%2FMD1nMG1%2BhzrcKo4yAOHEq5%2BzXEt25px4oNIoZbZE6n2igeMHnNWyeyyhQhMOpE5LqN7jyWiCXa%2FaP4LXPukJSQjik%2BL2zCIncgeGPksU8MvE3CwWd3VfTd7z%2Bh8Uh%2Bqwv%2FpZSNa0ClkRsu2XhJ87JY2zw2syKdhKAHr9YAvq8PDQqyarRfRmobkApMEsTDBEfq7YQxidcbOIUiRW3tE%2B4ZPAvJ%2B2d9uIcT0y0gepq4D2vpAKpE%2BeGEitPIrDV5akiBFCIk%2FjnB7%2BYj6F5j8yE%2FXHXqJYS9BsIqGfA%2FXPAhQ9UYJV10FxNiV618q2v5vyi7hDqgLOFIVE15cgja55B8MIOJ%2F8EGOqUBDPbsjlvsGt0ggyxw7Bqfou1phw8NRHs2h9SsZlp4hgU1lzUPFYASj%2BzQKnfq4KevmiGuI8Ulq0QcrMQezASJMHOIRqiNrxAPfvh0bnpPQhVWIMmFv7IjFxlG%2FBTQ5h%2FACtuRdA4DID%2BK202oO7Ah59JoE0xQxYA7cr98WWmGOTpZk%2FhOzdiN61Ck8sIDoy6CiyKL89UgOow1a5W6xnPHOp%2FVGp5Z&X-Amz-Signature=491447ec20ad28aaa8b34dad74cd69babde1c69a87f92fc53d1cd97b9666a188&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
