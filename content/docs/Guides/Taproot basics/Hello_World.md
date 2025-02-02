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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4S7OKDB%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T130915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAsN8hg8bmq2tLGi%2FkjAwctuYeslH5efQqLxyINN2qjtAiEAkMI0QviOYaUFogLs0Saag0XN2s6bmNMhKBEKeVjtNVsqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCqKt98jADxG3WFBVircA0m%2BcSkHItxcgH5S7OqbqVpLQZ2nWmtCrf17ym0vrxEc8b%2BhnOLda6GmtDOo22MetwGFIVb9ujNM70q9nMrGLI6Be2J2rYJj0Mw5rvDjwCsqLJk04GvfItcZoPAF4c307Y2esItPPsvcEOpK%2FoSkC%2BE%2FJ5gjyG72MvG8wlMcJThlVDnCkophsXQrzerI%2BBbHPwiB1eWmRaGobhzAQQEzHca6owy%2BZov9fiZVK%2FtwCJZTDuTu1pz6FzU6WFwjiWYvAP0kFaiNfwTK9d1yK7sS2ckoIbpBgWro9AKBkX8MfePJJhieu6p9%2F43tnhTbI8jMnQwYAwt2XtgFP7BZ520uJK5Se4pyiMYOzI2YJRl19M52G0xvR1lVhuu1GTmWIWLVE3msTnwa4iJqQyxqaFKwF2S3HiXAR0Ez8XN6WYrKvoofObFdjhrnsk2fLweYmtl%2FDrt5ghwJxBNa4uBGgGuVpxGlUX51sP5iHnqEvOAAUn8Y9crecjl2eumI3vmMJYHBOreMLyGivJ0dtQFiD0px6E7nt0v2XQEtLWGZ2PPZ7pjLY7aMdXepLYOe%2BS5ORwhBe5PdFPRrFWIN%2F3BqS%2BpWVCmPF8qMJsC%2BPyV%2BhFZlo%2FIrElHlwLd63KTn7RIbMKnP%2FbwGOqUBCVrP2Ivs5g7dR0W32HAg16v83f8VyOOfIsmtxwmuvMgolTP9tDyVWTQPSbbDwoPXiwXVbipz0PNtuBk9BmCkYyRfkGW4pcUI0SV7mAj3RtkpDPsvYcNrdA1LvQnu0smPWAurMfC3Z25eJDLHxuppbJxuxzQyhXEdV98biYBow8VEyqTsEN5ZgsrFAH%2BZRF%2Fs%2FRYIqOKhFRB2ekQNL0Ue2qWMsYpd&X-Amz-Signature=16e161a68846d598573f35b7225a1b5105ba2446350e111528d59ffbc5907e90&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4S7OKDB%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T130915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAsN8hg8bmq2tLGi%2FkjAwctuYeslH5efQqLxyINN2qjtAiEAkMI0QviOYaUFogLs0Saag0XN2s6bmNMhKBEKeVjtNVsqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCqKt98jADxG3WFBVircA0m%2BcSkHItxcgH5S7OqbqVpLQZ2nWmtCrf17ym0vrxEc8b%2BhnOLda6GmtDOo22MetwGFIVb9ujNM70q9nMrGLI6Be2J2rYJj0Mw5rvDjwCsqLJk04GvfItcZoPAF4c307Y2esItPPsvcEOpK%2FoSkC%2BE%2FJ5gjyG72MvG8wlMcJThlVDnCkophsXQrzerI%2BBbHPwiB1eWmRaGobhzAQQEzHca6owy%2BZov9fiZVK%2FtwCJZTDuTu1pz6FzU6WFwjiWYvAP0kFaiNfwTK9d1yK7sS2ckoIbpBgWro9AKBkX8MfePJJhieu6p9%2F43tnhTbI8jMnQwYAwt2XtgFP7BZ520uJK5Se4pyiMYOzI2YJRl19M52G0xvR1lVhuu1GTmWIWLVE3msTnwa4iJqQyxqaFKwF2S3HiXAR0Ez8XN6WYrKvoofObFdjhrnsk2fLweYmtl%2FDrt5ghwJxBNa4uBGgGuVpxGlUX51sP5iHnqEvOAAUn8Y9crecjl2eumI3vmMJYHBOreMLyGivJ0dtQFiD0px6E7nt0v2XQEtLWGZ2PPZ7pjLY7aMdXepLYOe%2BS5ORwhBe5PdFPRrFWIN%2F3BqS%2BpWVCmPF8qMJsC%2BPyV%2BhFZlo%2FIrElHlwLd63KTn7RIbMKnP%2FbwGOqUBCVrP2Ivs5g7dR0W32HAg16v83f8VyOOfIsmtxwmuvMgolTP9tDyVWTQPSbbDwoPXiwXVbipz0PNtuBk9BmCkYyRfkGW4pcUI0SV7mAj3RtkpDPsvYcNrdA1LvQnu0smPWAurMfC3Z25eJDLHxuppbJxuxzQyhXEdV98biYBow8VEyqTsEN5ZgsrFAH%2BZRF%2Fs%2FRYIqOKhFRB2ekQNL0Ue2qWMsYpd&X-Amz-Signature=23e4394724a35f528ab94e074f8f5ec1f9cfa74199c4e280dc7b3f700865b058&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
