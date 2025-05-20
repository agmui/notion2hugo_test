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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZLM2IVH%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T004223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDwl7txbBmXxHIFZUm2MDRzVqK9091JmtN63F70OieDPQIgWpizYnCrbO6sqTSLUX%2BuGGzpM%2BxXeMBQtPY1sW7xGnwqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJWRTEqVtgcb%2Fl8nxircA5vsA2DnSY0x10KtOzwloiSeEVgN4dv6cxQvcYhZpb0y3blpmSBVFvs%2BNf2HIXKFnD28szyRLxXfrFi2cVFiOHWBqKkik1SjSvKWDLTiQs3xqB2om3q5hcmZJrA3rrX5GM6uNI1yc2726mEJ1N7rvKEzk8Zi6cH7S14zKNkuJ5gMzDv36AJZYkZBZP6iQFWU1Cx4e4xqS0O0kJ%2FSg5GhjAJPBOUu8WvfTg1RRsGkyjxOVsc%2BTsbcxAZp9FaaFbcPymxh5OmN%2FJ94rKkg4ETv3EZjVTj09RF7ZpyYWFBv3XmRiNxFqQ6VX5v%2BVHH%2F4PIQUKIDIY9hS4ksSf0%2FFbN6IGZMJX7dWd8EGrebqVFWM8vy0yNoQT05otThEN0D5%2FcHK61nn42xGbwl%2BxLysPBG2TW%2BwnN3RmSNPBT8ccRgcCIQIX8pnbWbVbWG4xcddqgwpynPlFI%2FmGjJfJWOncJjJeTFwq0%2Bke8raUUzPteuHW0Fwg0KxQxoGSnXZrk6H8scXOsa7gdMtIczrrrVTgeDs9zrm8cMBjPO73Oa%2F4pJk3OaS%2FTSfOYiqOTxrpC5uiSk162MY8vRGj%2BpsHUEnSnXC7X2FC6OOlu0KLnF6BnS626wa1oyJh1ExIQDxRDIMPOZr8EGOqUBoDfFEPCxR%2FITT6bLeASa0MI2GsfuV147w%2FwgsUYRIR49E3eIXfJlbo7TcRkEFZChLjGQlfxYzagDJlRvr23CE2bUZedOJXMld%2Brl4zuwQTQ5cjMjFMl6pnsI0izkV0I5O6lsNkfnlKBopGULIyecJgavnWPCG%2F3B8c52IY%2Bp%2BrwUDzTqHvBik7KH9yRRzNIfBqfyN8X1sW9a5OKv9diTj73PgybS&X-Amz-Signature=3845e507ee31d3259b81b538670c920bc09fce7e3b03fd7809d86d65de9584ee&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZLM2IVH%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T004223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDwl7txbBmXxHIFZUm2MDRzVqK9091JmtN63F70OieDPQIgWpizYnCrbO6sqTSLUX%2BuGGzpM%2BxXeMBQtPY1sW7xGnwqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJWRTEqVtgcb%2Fl8nxircA5vsA2DnSY0x10KtOzwloiSeEVgN4dv6cxQvcYhZpb0y3blpmSBVFvs%2BNf2HIXKFnD28szyRLxXfrFi2cVFiOHWBqKkik1SjSvKWDLTiQs3xqB2om3q5hcmZJrA3rrX5GM6uNI1yc2726mEJ1N7rvKEzk8Zi6cH7S14zKNkuJ5gMzDv36AJZYkZBZP6iQFWU1Cx4e4xqS0O0kJ%2FSg5GhjAJPBOUu8WvfTg1RRsGkyjxOVsc%2BTsbcxAZp9FaaFbcPymxh5OmN%2FJ94rKkg4ETv3EZjVTj09RF7ZpyYWFBv3XmRiNxFqQ6VX5v%2BVHH%2F4PIQUKIDIY9hS4ksSf0%2FFbN6IGZMJX7dWd8EGrebqVFWM8vy0yNoQT05otThEN0D5%2FcHK61nn42xGbwl%2BxLysPBG2TW%2BwnN3RmSNPBT8ccRgcCIQIX8pnbWbVbWG4xcddqgwpynPlFI%2FmGjJfJWOncJjJeTFwq0%2Bke8raUUzPteuHW0Fwg0KxQxoGSnXZrk6H8scXOsa7gdMtIczrrrVTgeDs9zrm8cMBjPO73Oa%2F4pJk3OaS%2FTSfOYiqOTxrpC5uiSk162MY8vRGj%2BpsHUEnSnXC7X2FC6OOlu0KLnF6BnS626wa1oyJh1ExIQDxRDIMPOZr8EGOqUBoDfFEPCxR%2FITT6bLeASa0MI2GsfuV147w%2FwgsUYRIR49E3eIXfJlbo7TcRkEFZChLjGQlfxYzagDJlRvr23CE2bUZedOJXMld%2Brl4zuwQTQ5cjMjFMl6pnsI0izkV0I5O6lsNkfnlKBopGULIyecJgavnWPCG%2F3B8c52IY%2Bp%2BrwUDzTqHvBik7KH9yRRzNIfBqfyN8X1sW9a5OKv9diTj73PgybS&X-Amz-Signature=be6d6e0cc58c66e1ba230d6dcf15c874b0ea171c07220b7fbd05d11f3f21378b&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
