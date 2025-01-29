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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466556RA3JC%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T210248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGCravNa0Vx7I3Ud9%2BZvM5BDpLyh04PHGOnB41fyo0%2FuAiAFQZHXy33OTSqiTkCjMvPjVKhd2XJD4G9Wq6ardkrjRiqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIML%2FNiM%2BcKSw5JDC1LKtwDKxA8C3ga19KYyZHgXpAHEKFS7GkK0botDZZaJJAJ%2BueajBBoBTwwlZL17%2BY3%2FNfu3onGiIVwGzySg7arDR%2FsLcYvGj3D0FVKYAOYIavEPzxefhb30v4s1zXOXfc%2FU46wdZjdb8PNxfNi3k79oauSqYBEn16tFbyyQg0fpEW536I2R7hvRhZBiKzGsVHiG7h6XzzKwOR%2FL0j9MWW4ts9Y1xL%2BFVSVX%2FJVs8D4OvWnXXzwk%2FFz4Zan1km%2BqjDNW1xlXrA%2FZCPdUfq3ng5f5hIGcDmjp7mYPvSejGjgd%2Fu7YDAZJdEqk%2BXuG6C65zkkl5d3SFB6wCSr0GvBAgeCgDfOFv%2FeofS5RuPYZ7xluYu5DvCGTNZBVOEc0UOUTlmYWDGnyw5U%2BotCNmUk4sTRqsJnE4US5rU9i%2FrUsH2LkJCBNSNYx%2FGk6wqcOSmjGmr5SO6NIL4jxJzXn1UQlBZg%2FpD%2BvWHfuOt%2BqqmyF6Wimn6qNUx%2BqVxIPWdxyRccpyZeZ6eOvMzktU7WsdoTLnqFQNsuBRPXUOONiAKcKSlCLT7QCaKPU4TMWN54%2FuBC%2BULR1QlHq7NVZML%2BVDFRUKo7cDDFnYL3pb4tnqe%2F5vyBtEd7xyHvMh%2BVCQlXfqIVuoQwhqrqvAY6pgF68oRhR%2BvnNfOjMSdxrRrPnbtxV3SDpBnQN6UlFYb7aOAqwQf9AIAYLk7ixdvK4H9aFAgGth8BK%2F6DXg%2FIWeJQFaW2N7lvYr6TLnUkf2V11sIDPE6oxsSGMsXJh%2FC8q5FtmSTFbdslHL2%2F%2FAv2XFKH%2B1wvXGIgqx8ECCvQc52K5LkhW84jmZ7HyTC%2F52geEhGstW6S9kH4mATV%2B2FwAsgjrzQj6gE9&X-Amz-Signature=6f60b529bd2345d5883baccf11c7e92c315663d696c044bc3838ad0f19b7cd84&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466556RA3JC%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T210248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGCravNa0Vx7I3Ud9%2BZvM5BDpLyh04PHGOnB41fyo0%2FuAiAFQZHXy33OTSqiTkCjMvPjVKhd2XJD4G9Wq6ardkrjRiqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIML%2FNiM%2BcKSw5JDC1LKtwDKxA8C3ga19KYyZHgXpAHEKFS7GkK0botDZZaJJAJ%2BueajBBoBTwwlZL17%2BY3%2FNfu3onGiIVwGzySg7arDR%2FsLcYvGj3D0FVKYAOYIavEPzxefhb30v4s1zXOXfc%2FU46wdZjdb8PNxfNi3k79oauSqYBEn16tFbyyQg0fpEW536I2R7hvRhZBiKzGsVHiG7h6XzzKwOR%2FL0j9MWW4ts9Y1xL%2BFVSVX%2FJVs8D4OvWnXXzwk%2FFz4Zan1km%2BqjDNW1xlXrA%2FZCPdUfq3ng5f5hIGcDmjp7mYPvSejGjgd%2Fu7YDAZJdEqk%2BXuG6C65zkkl5d3SFB6wCSr0GvBAgeCgDfOFv%2FeofS5RuPYZ7xluYu5DvCGTNZBVOEc0UOUTlmYWDGnyw5U%2BotCNmUk4sTRqsJnE4US5rU9i%2FrUsH2LkJCBNSNYx%2FGk6wqcOSmjGmr5SO6NIL4jxJzXn1UQlBZg%2FpD%2BvWHfuOt%2BqqmyF6Wimn6qNUx%2BqVxIPWdxyRccpyZeZ6eOvMzktU7WsdoTLnqFQNsuBRPXUOONiAKcKSlCLT7QCaKPU4TMWN54%2FuBC%2BULR1QlHq7NVZML%2BVDFRUKo7cDDFnYL3pb4tnqe%2F5vyBtEd7xyHvMh%2BVCQlXfqIVuoQwhqrqvAY6pgF68oRhR%2BvnNfOjMSdxrRrPnbtxV3SDpBnQN6UlFYb7aOAqwQf9AIAYLk7ixdvK4H9aFAgGth8BK%2F6DXg%2FIWeJQFaW2N7lvYr6TLnUkf2V11sIDPE6oxsSGMsXJh%2FC8q5FtmSTFbdslHL2%2F%2FAv2XFKH%2B1wvXGIgqx8ECCvQc52K5LkhW84jmZ7HyTC%2F52geEhGstW6S9kH4mATV%2B2FwAsgjrzQj6gE9&X-Amz-Signature=976731e8cd068e167cf1e10b591d25c26fde3f83c4bc8941d6a4f892a581b132&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
