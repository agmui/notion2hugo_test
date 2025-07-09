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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYINASRO%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T110828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAWBNfgCMpobymU%2FPdk%2FELg2YTEGAAUdGgwvDluRWUwCAiEArLBzcwAS0IvK71mH9Quh8QgJgI5EauWOAx0nmIbkh00qiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJBBOV%2FoiRNeCN7%2FbCrcA2ZkJWcBGvXISxcBIxG3gO7j1TBozVWh%2B%2FO9bIlcMmkrq1G2zLDgUsX3hL%2FSrHvZnV13U%2FBfgj1faHe1IBiF2TuRJoGDI%2B4%2B0RjnAK0xQmpFokz%2F6z7zvI4Y8meP7hy%2F9qwDeAO5KhP1CY5zp%2BukyuenBuaze0LAX5L8ILk4znUmV%2Fz1v1NrTrar%2F3cng10oV%2Bodc9o6mQ34LMAsTUH9xQiuq11E5aDJ%2BwXW%2Bj5RvfVOCj2KZxwuMrCBc6XqdLBPTnbbQ2TUMEKrEVW5NNch1a%2B7jxuZ1%2BT0Hr4Wuf1dcdYJWwpt8Qx8n%2FvENfGMH%2BDCy0kdO2bERekVp8AL6zoSXUujsnX%2Bb4HAdS1%2FcCgT3pksAPxYO2Pr5LLArnHkJ2rEIY0XcGtFZ6k5flfFbIjEeKd9eUtix%2BleJesy1lMEgxbdMw7DM92WW0oWickYnKWaFXZCjC8wMlOHO0PChryFH3gMlaw0qdu8P8i8lwyN%2F%2FEoP0rk0dZwMCQOII34FK6h5iR4%2FCTH3yruZUPyTIuEC%2FoQPwMclgDuIAqdyW968jkDtcMaKEDEcmNTa1whPf%2FBMZQeSgj5TaKIKF1ZD%2B8Een81gC09CKNjXAE1G4XPyg4hewq7z0yKIQlu1G24MJyLucMGOqUB1qG5D2k8QEjTOx0hq9OY4Fngg08djbFFJ3BGGZ7bBX8uMbHopYDnR90jHofJSeNuUYTLL8Q3PqhLIByW3SFqcFRltkJbXIipLHX%2Brp5XXlu3SL%2F0VJHBUyFFofYUM7aym9ZSjpUxV4sOpSIf0Clj2lxQFEhoty6tVpYaPllY1C2fyOKOqENuF3uIPSL2YDOBCzade12RMNwyoHuOSj3m4HXyKX42&X-Amz-Signature=9478fb2a122a29dc08041aa80b9a50ff7e91c09cefcb82403b7b0f3aeb74df2a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYINASRO%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T110828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAWBNfgCMpobymU%2FPdk%2FELg2YTEGAAUdGgwvDluRWUwCAiEArLBzcwAS0IvK71mH9Quh8QgJgI5EauWOAx0nmIbkh00qiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJBBOV%2FoiRNeCN7%2FbCrcA2ZkJWcBGvXISxcBIxG3gO7j1TBozVWh%2B%2FO9bIlcMmkrq1G2zLDgUsX3hL%2FSrHvZnV13U%2FBfgj1faHe1IBiF2TuRJoGDI%2B4%2B0RjnAK0xQmpFokz%2F6z7zvI4Y8meP7hy%2F9qwDeAO5KhP1CY5zp%2BukyuenBuaze0LAX5L8ILk4znUmV%2Fz1v1NrTrar%2F3cng10oV%2Bodc9o6mQ34LMAsTUH9xQiuq11E5aDJ%2BwXW%2Bj5RvfVOCj2KZxwuMrCBc6XqdLBPTnbbQ2TUMEKrEVW5NNch1a%2B7jxuZ1%2BT0Hr4Wuf1dcdYJWwpt8Qx8n%2FvENfGMH%2BDCy0kdO2bERekVp8AL6zoSXUujsnX%2Bb4HAdS1%2FcCgT3pksAPxYO2Pr5LLArnHkJ2rEIY0XcGtFZ6k5flfFbIjEeKd9eUtix%2BleJesy1lMEgxbdMw7DM92WW0oWickYnKWaFXZCjC8wMlOHO0PChryFH3gMlaw0qdu8P8i8lwyN%2F%2FEoP0rk0dZwMCQOII34FK6h5iR4%2FCTH3yruZUPyTIuEC%2FoQPwMclgDuIAqdyW968jkDtcMaKEDEcmNTa1whPf%2FBMZQeSgj5TaKIKF1ZD%2B8Een81gC09CKNjXAE1G4XPyg4hewq7z0yKIQlu1G24MJyLucMGOqUB1qG5D2k8QEjTOx0hq9OY4Fngg08djbFFJ3BGGZ7bBX8uMbHopYDnR90jHofJSeNuUYTLL8Q3PqhLIByW3SFqcFRltkJbXIipLHX%2Brp5XXlu3SL%2F0VJHBUyFFofYUM7aym9ZSjpUxV4sOpSIf0Clj2lxQFEhoty6tVpYaPllY1C2fyOKOqENuF3uIPSL2YDOBCzade12RMNwyoHuOSj3m4HXyKX42&X-Amz-Signature=ff5da927bb6e0288677b5611be5996076a344debebf6216cadf4028b4c1e1a82&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
