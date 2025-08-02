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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJZFKCY5%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T220815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHfPykF5cI%2F6y3Fp9SfYVwGK8P0w%2BzmmocE2zpSYveG6AiEAiiI%2F9BRUr1HwSQV1r9mU0GTu5TByqDOJsTK3fCdP9Igq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDKu3C%2BawORo92PNitCrcAwWCBR0xohOpHldxUspk7vASyLAZlW6TfIi5LDV%2FTf56HV02myhRJCgO0VuRF50n0mfXeHB%2FuyHnchOE3TL%2F%2F%2FpH70BG283HL2jeTMjyvpIWbjK0nN%2F4xYLBiCZVrBZ7ScxDTIcBRrQr54%2FLvBmEefd3nGDmYysS401hYQ4A0I8gb3oyG84DbIBS58%2BbwIKw8LCi5zNwOy3cREE%2BOX9Y2bMT9sSbF%2BTSKDvwViNhf6Qt2rphpYLS5uwj4J9%2BwQjNRayD3EGSjBcMjf9XjtC3AuARCeIhVS47rD3GT6dAk0FXU0ue6FSSvdlKtbrwhVsug6kID569AfxSvNkSqc0kmxExE6SNC%2FY775aaX0fmiSWeen7bOYOCVQeqZ0Nw0wjcaP18jVOkExME4o8bi%2BGr3eETW4gJ%2FZpOOybeoxJHpklVCvJuJuD1aoKy4fAVseWs1Kdhv0vIQ0cW%2FmH0jZralhgX3cB1mD6jaagjEGmgArIq%2BFSryxsnzh2vT9nPaWMZpbyB2P9rF7jRVkhBxwBeVutD%2BATwTALF80%2BIkkAt536T4xN924T0aOI%2FJLwDmIDcvSaY2SDILvONG3aKi1pkvZto6iiqjRoP2e3G8Lw%2FJcBkebLNOf7Z2G7tzLNhMLuAusQGOqUBLwZ8OymJZBUE2AsoEoyKvKmGNMhkf2DyA%2FzRsm22AsQwmWPUBPQkCtLxjnrjhBGTdo3F6QahnlXiCek9tLIpjNvWhnmPsjvlIaoxfpXGa9%2BCtVaWq7x1juh2QotdlrGdP1pslxcIWQIS4qbmTDDwa2so%2Ba7%2F%2B4LRuj4%2Bfrji4LDkGBLX9Po0MASWybCEOvXFc4NWojF1maIt4iCpHY9Vh6bempqL&X-Amz-Signature=5d794d3b04fb69ab02fa6693488eae6c2e1f356d59019bad178fbe75692617d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJZFKCY5%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T220815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHfPykF5cI%2F6y3Fp9SfYVwGK8P0w%2BzmmocE2zpSYveG6AiEAiiI%2F9BRUr1HwSQV1r9mU0GTu5TByqDOJsTK3fCdP9Igq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDKu3C%2BawORo92PNitCrcAwWCBR0xohOpHldxUspk7vASyLAZlW6TfIi5LDV%2FTf56HV02myhRJCgO0VuRF50n0mfXeHB%2FuyHnchOE3TL%2F%2F%2FpH70BG283HL2jeTMjyvpIWbjK0nN%2F4xYLBiCZVrBZ7ScxDTIcBRrQr54%2FLvBmEefd3nGDmYysS401hYQ4A0I8gb3oyG84DbIBS58%2BbwIKw8LCi5zNwOy3cREE%2BOX9Y2bMT9sSbF%2BTSKDvwViNhf6Qt2rphpYLS5uwj4J9%2BwQjNRayD3EGSjBcMjf9XjtC3AuARCeIhVS47rD3GT6dAk0FXU0ue6FSSvdlKtbrwhVsug6kID569AfxSvNkSqc0kmxExE6SNC%2FY775aaX0fmiSWeen7bOYOCVQeqZ0Nw0wjcaP18jVOkExME4o8bi%2BGr3eETW4gJ%2FZpOOybeoxJHpklVCvJuJuD1aoKy4fAVseWs1Kdhv0vIQ0cW%2FmH0jZralhgX3cB1mD6jaagjEGmgArIq%2BFSryxsnzh2vT9nPaWMZpbyB2P9rF7jRVkhBxwBeVutD%2BATwTALF80%2BIkkAt536T4xN924T0aOI%2FJLwDmIDcvSaY2SDILvONG3aKi1pkvZto6iiqjRoP2e3G8Lw%2FJcBkebLNOf7Z2G7tzLNhMLuAusQGOqUBLwZ8OymJZBUE2AsoEoyKvKmGNMhkf2DyA%2FzRsm22AsQwmWPUBPQkCtLxjnrjhBGTdo3F6QahnlXiCek9tLIpjNvWhnmPsjvlIaoxfpXGa9%2BCtVaWq7x1juh2QotdlrGdP1pslxcIWQIS4qbmTDDwa2so%2Ba7%2F%2B4LRuj4%2Bfrji4LDkGBLX9Po0MASWybCEOvXFc4NWojF1maIt4iCpHY9Vh6bempqL&X-Amz-Signature=d885fdd8243b839663c6a0ae82b403d5ec387c9488014d4ff0eda422379c4cee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
