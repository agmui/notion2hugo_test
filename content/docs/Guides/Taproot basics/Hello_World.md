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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7D5FLUJ%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T230749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCa9p16ilcPAdfgDLrNYA%2B5Oc7t%2FB5wQrU9qPnvmq5FQwIhANwQCqIoJZZ6dqWKZBuVXNRwMCeHmmo2NIxTwAuBrOrRKv8DCCAQABoMNjM3NDIzMTgzODA1Igzc%2B%2BGU26dFiVqUY88q3AMUsPk8bqNBiATJXVqh6lsJFob%2F1Qg04TLpKu8sqzHxo5%2B1Xz2WmEIn47Mc9agRLhDLim%2FhareYTOITCZSwQDvyoySvha6jRI9vpQE1%2BktStb28yrFY5aVlv7s8tDfmyjRJv5kHKlvLg%2FY%2BVS7sMNKcIKV1gBATecYJyU7fUeEpdwZU7xmwVP0sDk0CgIUd1vSeN9FIyWUgRgAzkXa6TI5YFk4wbEWxkqEGq5Vk57NRhHNhMbdZkKoUS70Fz%2BxU%2B0fjvEsSc5241r3QpfbLAVqJ%2Bdiz2Fe6Zx9gv8kVE3eCOOS%2FqjfjZHfLsc91QkCaa7BeSYqkY3QgZlum9dou2l8rH9vPINBKpgKV5NUSIbYDSLo%2B%2BmtrMHOHTZdVGSt%2B9gZFJRBA%2FC0G7CVQsIqc%2BDUoSlJzHJpmrhm0tNRAP58zTkSUDe6tBwLH7J%2Bm1i5KRCO0eZpZ7WU2wJldVzHJxJwJL5LHm%2FjEBxFbLTtxwfCwHLk98XPsbnJI%2Frv0byvQcBS%2FVUv2io4CA8zJ5P8ysX965v%2BgazOOoWGn4HF7Fi%2BW1rvR3yWQokZ0V1hBbrV0L154z3fTALNajeYRjTKQze4g2TKw4Xx5eBgY%2BfEglehnaKb6oX6NkzVSxKIh%2FTCim%2Fa%2FBjqkAR0LylbMkUKZCiAZGYCYA32pEQ4h2ONL6kaO018r2bND9EcPCpVDNqeJnoZ6Pw%2BdzQEw81Vy1ugNL6eVTfdZBSuBXgYnF39AdLpAM91KFUQ1YugnztZF6AghFFv0YQwsv6oaZzx691XY%2FUk%2BDEOX%2BcTP70XqilTNuAJ9WwDObLQetOpFmRQCO%2F47d%2FirB0MWu%2BcU2WvDHy6UeVkRNb5ZWzi1VWG3&X-Amz-Signature=0878f2e81f3fa3571af1057caf884b01b16cac3f0e1d314b50b0b61330451497&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7D5FLUJ%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T230749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCa9p16ilcPAdfgDLrNYA%2B5Oc7t%2FB5wQrU9qPnvmq5FQwIhANwQCqIoJZZ6dqWKZBuVXNRwMCeHmmo2NIxTwAuBrOrRKv8DCCAQABoMNjM3NDIzMTgzODA1Igzc%2B%2BGU26dFiVqUY88q3AMUsPk8bqNBiATJXVqh6lsJFob%2F1Qg04TLpKu8sqzHxo5%2B1Xz2WmEIn47Mc9agRLhDLim%2FhareYTOITCZSwQDvyoySvha6jRI9vpQE1%2BktStb28yrFY5aVlv7s8tDfmyjRJv5kHKlvLg%2FY%2BVS7sMNKcIKV1gBATecYJyU7fUeEpdwZU7xmwVP0sDk0CgIUd1vSeN9FIyWUgRgAzkXa6TI5YFk4wbEWxkqEGq5Vk57NRhHNhMbdZkKoUS70Fz%2BxU%2B0fjvEsSc5241r3QpfbLAVqJ%2Bdiz2Fe6Zx9gv8kVE3eCOOS%2FqjfjZHfLsc91QkCaa7BeSYqkY3QgZlum9dou2l8rH9vPINBKpgKV5NUSIbYDSLo%2B%2BmtrMHOHTZdVGSt%2B9gZFJRBA%2FC0G7CVQsIqc%2BDUoSlJzHJpmrhm0tNRAP58zTkSUDe6tBwLH7J%2Bm1i5KRCO0eZpZ7WU2wJldVzHJxJwJL5LHm%2FjEBxFbLTtxwfCwHLk98XPsbnJI%2Frv0byvQcBS%2FVUv2io4CA8zJ5P8ysX965v%2BgazOOoWGn4HF7Fi%2BW1rvR3yWQokZ0V1hBbrV0L154z3fTALNajeYRjTKQze4g2TKw4Xx5eBgY%2BfEglehnaKb6oX6NkzVSxKIh%2FTCim%2Fa%2FBjqkAR0LylbMkUKZCiAZGYCYA32pEQ4h2ONL6kaO018r2bND9EcPCpVDNqeJnoZ6Pw%2BdzQEw81Vy1ugNL6eVTfdZBSuBXgYnF39AdLpAM91KFUQ1YugnztZF6AghFFv0YQwsv6oaZzx691XY%2FUk%2BDEOX%2BcTP70XqilTNuAJ9WwDObLQetOpFmRQCO%2F47d%2FirB0MWu%2BcU2WvDHy6UeVkRNb5ZWzi1VWG3&X-Amz-Signature=1fc83e52f6fecb86e90517cef5b0d95bccb81869ba96876e0cbafaa88f66181e&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
