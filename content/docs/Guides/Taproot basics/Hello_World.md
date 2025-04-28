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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNDYVIAF%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T104246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC7fktus%2BAII6Z6dsbmFafz3l1VI%2BDEnNJo1nCHH20wAAIhAJvVFrpJ%2B%2BKX0K6eRicdGuZyqrhe3wYeReZBpkzfY5XIKv8DCHMQABoMNjM3NDIzMTgzODA1IgwpPJT0njh9xfdSJJgq3AO2AlC09iG0S0Yx%2Bo%2Btj2KFizlHIns29IhOPMeC75g%2F2h08rWlVEfo3%2FO9vuf7cMghQKySQuvQ%2B3M9y8vUrEPUR%2FLPOpxkH6KKgDHm0dJz6hnt60lOxUAgwMpDu5L8plFb3Bor7WCXLONwkdnd9tBppfbLMLF%2BQQPNgIbdIV5MXsiAQI68Gv6lb7dYEoQ4McxxmYPCp6aN%2BO%2B87nwJO0cfWqD8QsozY4yCFblON2IcjEfJJirkKp%2BY8uMvgg5P5%2B94AW6Sog3nnJhCgot%2BAnc3tCqCMJ8BLoxmaEUe7JMUSfM9rwG%2BITiHRSqVyoEoFgIWWC%2BvJdnid4ZbKcE6lfNOfsO5xx0UZ8JOciR1iATzffCNUt8NvBdoWAzs%2B3EC0GHIuIDN%2BP%2BszoB1R%2BukRRiHdryjJ2eQwgkVuX0Gn%2F7drT8ljH5vjkfXlGhFBYi6iQXMpPtEAwKeL9ooxqAO8IzYwYH9EebbEPUKbkTdVQ1yT9D0O%2BU2HIbsk%2B5ETu%2BCpU%2FDf%2FTTCNdDhbeTeWRnxUUgcFVjQeVNicC5tD1Edp0DKEbrF6aR7BuwVUMxUQ9Towldmph2T%2Btgayx0p%2F42q3vPybXLesuHzbuppOmP3D2mEZXArrcY0KOqdoH6ptzCiq73ABjqkAe07T1YVef%2B6OcGlE8GLnaXDDspBLvgSQvacmualu53IB7NK77DLGIHTe8XWCax7Rq34AyZYzedUZvKH%2FeHLS2jwvekATwC7P5KJg%2Fd7c5ke7HmPE7E2doADNGaM6cmyALjLVxotSJoTqHMp0aiULv3ofZc1sO7oSclvUyhweUmi38%2BK%2Fdd5mXngw5c7%2FEaWviErflt%2BxWnsa95jGPa4%2B1g8AJSX&X-Amz-Signature=e1f521aca1d15d83d79491308430dad897c326ff6f704252c80da0b681aa2720&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNDYVIAF%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T104246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC7fktus%2BAII6Z6dsbmFafz3l1VI%2BDEnNJo1nCHH20wAAIhAJvVFrpJ%2B%2BKX0K6eRicdGuZyqrhe3wYeReZBpkzfY5XIKv8DCHMQABoMNjM3NDIzMTgzODA1IgwpPJT0njh9xfdSJJgq3AO2AlC09iG0S0Yx%2Bo%2Btj2KFizlHIns29IhOPMeC75g%2F2h08rWlVEfo3%2FO9vuf7cMghQKySQuvQ%2B3M9y8vUrEPUR%2FLPOpxkH6KKgDHm0dJz6hnt60lOxUAgwMpDu5L8plFb3Bor7WCXLONwkdnd9tBppfbLMLF%2BQQPNgIbdIV5MXsiAQI68Gv6lb7dYEoQ4McxxmYPCp6aN%2BO%2B87nwJO0cfWqD8QsozY4yCFblON2IcjEfJJirkKp%2BY8uMvgg5P5%2B94AW6Sog3nnJhCgot%2BAnc3tCqCMJ8BLoxmaEUe7JMUSfM9rwG%2BITiHRSqVyoEoFgIWWC%2BvJdnid4ZbKcE6lfNOfsO5xx0UZ8JOciR1iATzffCNUt8NvBdoWAzs%2B3EC0GHIuIDN%2BP%2BszoB1R%2BukRRiHdryjJ2eQwgkVuX0Gn%2F7drT8ljH5vjkfXlGhFBYi6iQXMpPtEAwKeL9ooxqAO8IzYwYH9EebbEPUKbkTdVQ1yT9D0O%2BU2HIbsk%2B5ETu%2BCpU%2FDf%2FTTCNdDhbeTeWRnxUUgcFVjQeVNicC5tD1Edp0DKEbrF6aR7BuwVUMxUQ9Towldmph2T%2Btgayx0p%2F42q3vPybXLesuHzbuppOmP3D2mEZXArrcY0KOqdoH6ptzCiq73ABjqkAe07T1YVef%2B6OcGlE8GLnaXDDspBLvgSQvacmualu53IB7NK77DLGIHTe8XWCax7Rq34AyZYzedUZvKH%2FeHLS2jwvekATwC7P5KJg%2Fd7c5ke7HmPE7E2doADNGaM6cmyALjLVxotSJoTqHMp0aiULv3ofZc1sO7oSclvUyhweUmi38%2BK%2Fdd5mXngw5c7%2FEaWviErflt%2BxWnsa95jGPa4%2B1g8AJSX&X-Amz-Signature=fbf21d9f1c7b8e740191594f8a59e96bc109ce66066b4777bf2de9b54918102c&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
