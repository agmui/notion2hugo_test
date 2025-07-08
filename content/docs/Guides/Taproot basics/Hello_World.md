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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWWTAOFL%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T041954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIB7AEa%2FKTl6T94DNA3MD0l1kdpmt51GZTm0SnWTU1QWpAiA3wregwVcGONOYHAIhG9VQlrm4Kf4vy3joB9fOdWsEvSqIBAiE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMm6h4FSFRmXyau%2BFFKtwDgl3Muf0QntSAlMQ4Kn0ARXKAkIg9GZucjFvaGM7boG9nK4dURrM3DbN1dQBekrbn00sL3Raz5uZvTksmyORUIj0pVBPddBiPQQ6I8ItDN4tg%2FwRSecAaA1oGsF97Ap5nA1OvJ%2FGmJ3MmyoPUa8fPggzkrhIt0xDcDfozllnyf9ah2tW%2FQPx8TV4lxRLLBmCPd3ATI%2FTqFKHGZyFaUb%2Fns0vVm3J%2BXfLCmfrqT4Z%2FEvkf%2FWujI2XMzUJSeeVo69P%2FPXkDAqhg5g8D0TTnGeCo49BpL2dJZr33SmzlYh1pZLzsIxL579TlDlhOmj7aNyzcvJiQAHjsSEVEFo2Vwga9VwcD%2B4eJi2aAcbf%2Boizlb9SP3tI89ANN25j%2FWgAtneuiTWmjITjRqx%2BMeSJhAxLM5kFvo%2B0zdR6mUQV7wt4fB1tmqlxQbMavmBqYHDM9gLydSAg0nZ6fBgSZwHRb2H%2FkLgU4OHAUJq5eniyZ%2BKRK04C%2F7M78WILzL5V5Tex8URiGlkQEfcQT28tStiEu7eK4%2FxMvbwo15%2BE0aSmJO5taBGD78yK7iZWPQBT8GOMNY6WSE4dk8eWqRmrVx1isJg0dvBJOr9BdRg8D49i2TM2U2sxdXVdxfXuoqzSWGOAw%2FIOywwY6pgFWmNWEjrWA17K9ZTSIU6L8PTuPJoVqVf%2Bji5SdmCLoRVZRPj2Le4b2Xz0d7H0PNQFqAHBfewjlL43OETrbslNZXYL5QbX79yvaWL18X96kBVsSxXa1RJ%2Bmh%2FXRWAHpjjMLKfSXmjCnwb2eIbqLswVhG8JahRkE8vxPrthffN3KSpfmqdh7daERMZEQn2AcE5HgP7dgB6Ps5100nc7WophwGf%2BvucqP&X-Amz-Signature=edd951ec895344b5560cd7dc5f69d711b45705e7d10f8b13772115d6bd1a903c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWWTAOFL%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T041954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIB7AEa%2FKTl6T94DNA3MD0l1kdpmt51GZTm0SnWTU1QWpAiA3wregwVcGONOYHAIhG9VQlrm4Kf4vy3joB9fOdWsEvSqIBAiE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMm6h4FSFRmXyau%2BFFKtwDgl3Muf0QntSAlMQ4Kn0ARXKAkIg9GZucjFvaGM7boG9nK4dURrM3DbN1dQBekrbn00sL3Raz5uZvTksmyORUIj0pVBPddBiPQQ6I8ItDN4tg%2FwRSecAaA1oGsF97Ap5nA1OvJ%2FGmJ3MmyoPUa8fPggzkrhIt0xDcDfozllnyf9ah2tW%2FQPx8TV4lxRLLBmCPd3ATI%2FTqFKHGZyFaUb%2Fns0vVm3J%2BXfLCmfrqT4Z%2FEvkf%2FWujI2XMzUJSeeVo69P%2FPXkDAqhg5g8D0TTnGeCo49BpL2dJZr33SmzlYh1pZLzsIxL579TlDlhOmj7aNyzcvJiQAHjsSEVEFo2Vwga9VwcD%2B4eJi2aAcbf%2Boizlb9SP3tI89ANN25j%2FWgAtneuiTWmjITjRqx%2BMeSJhAxLM5kFvo%2B0zdR6mUQV7wt4fB1tmqlxQbMavmBqYHDM9gLydSAg0nZ6fBgSZwHRb2H%2FkLgU4OHAUJq5eniyZ%2BKRK04C%2F7M78WILzL5V5Tex8URiGlkQEfcQT28tStiEu7eK4%2FxMvbwo15%2BE0aSmJO5taBGD78yK7iZWPQBT8GOMNY6WSE4dk8eWqRmrVx1isJg0dvBJOr9BdRg8D49i2TM2U2sxdXVdxfXuoqzSWGOAw%2FIOywwY6pgFWmNWEjrWA17K9ZTSIU6L8PTuPJoVqVf%2Bji5SdmCLoRVZRPj2Le4b2Xz0d7H0PNQFqAHBfewjlL43OETrbslNZXYL5QbX79yvaWL18X96kBVsSxXa1RJ%2Bmh%2FXRWAHpjjMLKfSXmjCnwb2eIbqLswVhG8JahRkE8vxPrthffN3KSpfmqdh7daERMZEQn2AcE5HgP7dgB6Ps5100nc7WophwGf%2BvucqP&X-Amz-Signature=bdb7cdae450720019fe91af69399cf512d6b896c852d6d3f01852fc2c93849a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
