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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3FV3JCC%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T080936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIHwaecfClrp%2BR2icdrGW7RUa6%2Bn4SfPyeEwo2WIgFNfkAiEA%2B1IqreU0%2FB1oBotZc88sCGJ01SinqyVUNTNb2VEnK1cqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHE2kzl%2BWuZ4x15bvircA3Nb9G5FGhzGXZnKs15ydUL%2FVjgVo2aiV2MBgb6QV5l4bc5HXPJz1h3o%2BrautWQU%2FQk5kkkl%2FynoXrHeu6ABuQlVz%2BSaiI8%2FO2WgPnwG%2F37GGbH7mM78qDGsag9Sy5sQqP09Lu0yH9yUkE5VogF328Btvlss2CehesOHi39gJk2FfcEFRia5xoCIy8U371so3HSffFnvdTmIcdeiDxcXaCSAwDh6sZeXeupCuKnCCW%2BPASnGfFMdFc1BNyIa0swvlBGwKPL6suFlBvSdf905YUu7uBFoALuIgs6SB5ho%2BVf1XpLDlJOKyBgGJBrqwahphCS50D0gZJWXC6WwfX4R6oAG6S%2FPKNkMb6a9UYi77UHgSoQOAsR4OaxvlF0%2FFWOnSGc8o6aWprYTfLOHAnBcIlAC1%2B0URwE2BVBdgyeDY9uUV7sL7V1Qy9Ry0UPQCqlJkOtBoUrxYuj4wl%2FsNS7ro%2B%2BoZWFAeCErS0XIJiEZ%2BAGjyEH%2B4DaJxRPsxyf7fJn5IrILeFCGHZGVsYYiPPkVITxHt%2FaoKGulzYRQ7XpfXG61TQzVjTcOqWbhA2%2F2YE%2BOGA7Arj57kV58Q4fkZUHRI%2BfeRaXV%2FXMPvOeRktAeF270lsLqcmZj0ARtA16ZMIXz%2Fr4GOqUBeV0sZz%2BZnvPtZvseMmNyIeL3o37dxvleZRGDH9AHqFXA2yMx9mq6ZwGYl%2B%2F7%2BjKBiXwfP5tbVN523IeGKw2v6aJd6wDdbTjvVbk7ONQxrXvz2ghPL%2Fj4xcGTC2x17Een%2FO2hLHTQJZjQzDzZmEXEzW00IMy413apUIBFpEVBsqAHDtkADue0kKoDRgTa09NXmm8qw2Rg%2BkrEhFVrt62HMs6mIX9Z&X-Amz-Signature=856b2479da7100a95e96a7f043d2fa48dfc15fdc367d7550917994373fb567c6&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3FV3JCC%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T080936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIHwaecfClrp%2BR2icdrGW7RUa6%2Bn4SfPyeEwo2WIgFNfkAiEA%2B1IqreU0%2FB1oBotZc88sCGJ01SinqyVUNTNb2VEnK1cqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHE2kzl%2BWuZ4x15bvircA3Nb9G5FGhzGXZnKs15ydUL%2FVjgVo2aiV2MBgb6QV5l4bc5HXPJz1h3o%2BrautWQU%2FQk5kkkl%2FynoXrHeu6ABuQlVz%2BSaiI8%2FO2WgPnwG%2F37GGbH7mM78qDGsag9Sy5sQqP09Lu0yH9yUkE5VogF328Btvlss2CehesOHi39gJk2FfcEFRia5xoCIy8U371so3HSffFnvdTmIcdeiDxcXaCSAwDh6sZeXeupCuKnCCW%2BPASnGfFMdFc1BNyIa0swvlBGwKPL6suFlBvSdf905YUu7uBFoALuIgs6SB5ho%2BVf1XpLDlJOKyBgGJBrqwahphCS50D0gZJWXC6WwfX4R6oAG6S%2FPKNkMb6a9UYi77UHgSoQOAsR4OaxvlF0%2FFWOnSGc8o6aWprYTfLOHAnBcIlAC1%2B0URwE2BVBdgyeDY9uUV7sL7V1Qy9Ry0UPQCqlJkOtBoUrxYuj4wl%2FsNS7ro%2B%2BoZWFAeCErS0XIJiEZ%2BAGjyEH%2B4DaJxRPsxyf7fJn5IrILeFCGHZGVsYYiPPkVITxHt%2FaoKGulzYRQ7XpfXG61TQzVjTcOqWbhA2%2F2YE%2BOGA7Arj57kV58Q4fkZUHRI%2BfeRaXV%2FXMPvOeRktAeF270lsLqcmZj0ARtA16ZMIXz%2Fr4GOqUBeV0sZz%2BZnvPtZvseMmNyIeL3o37dxvleZRGDH9AHqFXA2yMx9mq6ZwGYl%2B%2F7%2BjKBiXwfP5tbVN523IeGKw2v6aJd6wDdbTjvVbk7ONQxrXvz2ghPL%2Fj4xcGTC2x17Een%2FO2hLHTQJZjQzDzZmEXEzW00IMy413apUIBFpEVBsqAHDtkADue0kKoDRgTa09NXmm8qw2Rg%2BkrEhFVrt62HMs6mIX9Z&X-Amz-Signature=4d7085290fae5c749ec9177a2dcba84629b46e9f9e53d71ed9e2a98e25d633f3&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
