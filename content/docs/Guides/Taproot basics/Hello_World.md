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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQVF2QTL%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T160801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEdwOgH5ClSQ9fSF4z8jzQVesYN4%2BqZKGayCCyWBSicbAiEAio9GkKaHH39WDiQ%2Fg3I5s3uYoo%2BTxXPQcAny0UxsOnkq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDJLHZOkwiGbo9TxxXircA3izoaEpsLkqTvVOhudojWDdsxt0GC%2FtQvwqbdfDVtuOzMPaqP0KjcYtp1n%2FLFIYTov2JorxxdxZosTUiXrUPVaw0%2FfSPRZqo3LvtpljIi3sSzgdVHZ%2FhNvW7w3zU4Onj6594lG3ZTPaYJHaIKwKOHhLitXsMt0VnANdx%2FUZFS6Xq0h9vFP9zoVDfipe2HW18BrbecxmhCFJu41eZjNL0x7KjL4XCpvGSLwBqK7qxuS%2BprVxjkiyan7TRWwyD4OewkmO0kgaXrdABydbMYGpNvSXsI1ZBsLsan7zIWP5%2BarVI%2FSf25CegrOiPJttnzHx9iUMD%2FtmZ6VGWXXHVKSieGKWGZJ174Wkkt%2FS%2BwORFCjVG7YXBWJSMzJyjCaX75pO3oQaaJIqu49%2BWElDulHp16QghMBPgcFsGd8SjLoN8kHhJ7QIZWIROh%2BZ4RekAlIbtlU3sItLbiBJ%2FDOEpQCIhbD4Tefz0v85FHa1e%2BXgAfVRAkoJ4D6Ea%2FalZ1IgqWQf%2BHX9BDG9Q9X7HGVCGuisAR329XDAKrDKP%2F2Qjzi9QNNG7lBeS%2FQmsqh6%2BHuekOQi0%2B68yE74lSNvZQgG1uw9Zfmt81wRAcAcD1KbOZQhTIKawcciqETi54UEwyczMLrms8AGOqUBl5TAkXkwZFr3s7OK5INfLNR6vUjyOupvcz9lfdJyE4aHqV581wwKPmYKd5S1Bo7DoNqJOcULwP9UQWw2xOU4V2KH0bQtzB6kbF8Qjz6ocdwH0%2Fp2m3zkduD6hu220k1JPH7WxwakLNXyInOZGf48AkyHFo9czmzL9pYT3ffk4sYMm2JjSVTKmqnNB6JOXz7TkHeoNn%2B1Okto%2F3ETr3PwGTa5hO1%2F&X-Amz-Signature=f2e9185909d57e165b38d6e640c1f1a3cf3fd35eaa57e1a588ac86d77381712a&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQVF2QTL%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T160801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEdwOgH5ClSQ9fSF4z8jzQVesYN4%2BqZKGayCCyWBSicbAiEAio9GkKaHH39WDiQ%2Fg3I5s3uYoo%2BTxXPQcAny0UxsOnkq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDJLHZOkwiGbo9TxxXircA3izoaEpsLkqTvVOhudojWDdsxt0GC%2FtQvwqbdfDVtuOzMPaqP0KjcYtp1n%2FLFIYTov2JorxxdxZosTUiXrUPVaw0%2FfSPRZqo3LvtpljIi3sSzgdVHZ%2FhNvW7w3zU4Onj6594lG3ZTPaYJHaIKwKOHhLitXsMt0VnANdx%2FUZFS6Xq0h9vFP9zoVDfipe2HW18BrbecxmhCFJu41eZjNL0x7KjL4XCpvGSLwBqK7qxuS%2BprVxjkiyan7TRWwyD4OewkmO0kgaXrdABydbMYGpNvSXsI1ZBsLsan7zIWP5%2BarVI%2FSf25CegrOiPJttnzHx9iUMD%2FtmZ6VGWXXHVKSieGKWGZJ174Wkkt%2FS%2BwORFCjVG7YXBWJSMzJyjCaX75pO3oQaaJIqu49%2BWElDulHp16QghMBPgcFsGd8SjLoN8kHhJ7QIZWIROh%2BZ4RekAlIbtlU3sItLbiBJ%2FDOEpQCIhbD4Tefz0v85FHa1e%2BXgAfVRAkoJ4D6Ea%2FalZ1IgqWQf%2BHX9BDG9Q9X7HGVCGuisAR329XDAKrDKP%2F2Qjzi9QNNG7lBeS%2FQmsqh6%2BHuekOQi0%2B68yE74lSNvZQgG1uw9Zfmt81wRAcAcD1KbOZQhTIKawcciqETi54UEwyczMLrms8AGOqUBl5TAkXkwZFr3s7OK5INfLNR6vUjyOupvcz9lfdJyE4aHqV581wwKPmYKd5S1Bo7DoNqJOcULwP9UQWw2xOU4V2KH0bQtzB6kbF8Qjz6ocdwH0%2Fp2m3zkduD6hu220k1JPH7WxwakLNXyInOZGf48AkyHFo9czmzL9pYT3ffk4sYMm2JjSVTKmqnNB6JOXz7TkHeoNn%2B1Okto%2F3ETr3PwGTa5hO1%2F&X-Amz-Signature=42f7b6d7bb12e73c5b2da01d3aee1a437da9f398d5b652bcae69cbfea56ddd96&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
