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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVXDHIOZ%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T181002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJGMEQCIDesdQvLlQrTjH9NGuxf6eK7wup8vyiwawwSedhERKzOAiAYJZW5OqUGIzm2jSZzDzVDraNMToxZCxExGHi0fLhQyCqIBAjw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvYq%2FFaos95h2ovHGKtwDy9bkU5bmtTJ8ug5y3iCzFlgn07ZCSD4py9tHW%2Bcbpxp%2BC2oaAZQmNomjmySB%2BFK9VvAK11mXv3pJiIkYEkie3n9otmTGLmzx0O49GtvGz506lYNfTqNwj%2BlRmyRdkyFaA%2BuSTBrz8V6XZHffM0ogEozur%2Bys1CPISK9tAY5ke13iTgR7BrgqWRGkZmIcY13UZ40MmcimK1E3ZNVtxp7a2bkLseFHzia8AgO5RhsLiGYAgHoAEGgSY0FpQl78zziSFXE8W7J66oToSydopsSRRiX2yAAzZplIMUhVBahHiljTBUMmsxfE9kkHG9UxqC6JlA6pv1gKpDTc7zK3fepEOobMCeuAQbLw%2F9s7aE4rLXMFajDavLDNNVADE6ZdlR7%2FXCv03WSNtpt5fsC5TSy7%2BgkvnUgFkIhjfmJnphc5PwOjN0rN8BLRGptfMltVCboDmIc%2B%2FxQWEvHnbGosAlQFkWOdoZHFYobSTgX4HnuVxmZ%2FwcAcMMpBWtukQsk6OT1BdLALEmq1f3VFm1dvJu6ACWF3r7w018SJnpXjxt8cFfvqGDv87rA%2FhPHX1YBkgzEZNtObTSQUASO0vcoNp%2Fn4oW0uFU5jtWro%2F3YHVz6VRkn0rLE9VEkpjaMiPy0wp6nvvwY6pgFXH94p%2F6jANrvc%2BXhsI%2BIjxTf3fnGQVdhY8pyDmIhYG6OBaAMxWhDitrmwVOelIvhSfk4sdEYwyz0karEflswxCqw7tg%2BI721hYx7BnzBvpnsSmJCjtzR9vUUwzQbbteEkfbXCFmm2OfdvCDjWBHg9YRtB2gFDHUbSaJfA4h09vbQF6NTRBNX4nBairCXKqhe%2FZ1FylH%2Buq32OxYjT8%2BZsh9%2BQwyyH&X-Amz-Signature=ce6273469081c8b5563f6181586d3dc7e1ba19d539ba1da0538e831058399666&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVXDHIOZ%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T181002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJGMEQCIDesdQvLlQrTjH9NGuxf6eK7wup8vyiwawwSedhERKzOAiAYJZW5OqUGIzm2jSZzDzVDraNMToxZCxExGHi0fLhQyCqIBAjw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvYq%2FFaos95h2ovHGKtwDy9bkU5bmtTJ8ug5y3iCzFlgn07ZCSD4py9tHW%2Bcbpxp%2BC2oaAZQmNomjmySB%2BFK9VvAK11mXv3pJiIkYEkie3n9otmTGLmzx0O49GtvGz506lYNfTqNwj%2BlRmyRdkyFaA%2BuSTBrz8V6XZHffM0ogEozur%2Bys1CPISK9tAY5ke13iTgR7BrgqWRGkZmIcY13UZ40MmcimK1E3ZNVtxp7a2bkLseFHzia8AgO5RhsLiGYAgHoAEGgSY0FpQl78zziSFXE8W7J66oToSydopsSRRiX2yAAzZplIMUhVBahHiljTBUMmsxfE9kkHG9UxqC6JlA6pv1gKpDTc7zK3fepEOobMCeuAQbLw%2F9s7aE4rLXMFajDavLDNNVADE6ZdlR7%2FXCv03WSNtpt5fsC5TSy7%2BgkvnUgFkIhjfmJnphc5PwOjN0rN8BLRGptfMltVCboDmIc%2B%2FxQWEvHnbGosAlQFkWOdoZHFYobSTgX4HnuVxmZ%2FwcAcMMpBWtukQsk6OT1BdLALEmq1f3VFm1dvJu6ACWF3r7w018SJnpXjxt8cFfvqGDv87rA%2FhPHX1YBkgzEZNtObTSQUASO0vcoNp%2Fn4oW0uFU5jtWro%2F3YHVz6VRkn0rLE9VEkpjaMiPy0wp6nvvwY6pgFXH94p%2F6jANrvc%2BXhsI%2BIjxTf3fnGQVdhY8pyDmIhYG6OBaAMxWhDitrmwVOelIvhSfk4sdEYwyz0karEflswxCqw7tg%2BI721hYx7BnzBvpnsSmJCjtzR9vUUwzQbbteEkfbXCFmm2OfdvCDjWBHg9YRtB2gFDHUbSaJfA4h09vbQF6NTRBNX4nBairCXKqhe%2FZ1FylH%2Buq32OxYjT8%2BZsh9%2BQwyyH&X-Amz-Signature=fcd7b142b296101788df919f8b806c4d93da417e9c5747733854ea3f48c64e7c&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
