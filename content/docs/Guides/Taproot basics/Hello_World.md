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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663A4GP56D%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T132357Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIHj%2F2oDW06Wfq7DsIirii%2Fx5biOAHc49OP87ozVmFGB1AiEApf%2FFXyfVUlLoelWwyrPMPOfudtLMY0H3l3BME5%2FVgrgq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDMiFEGEoVgWBjvKgRircA1HQNTbraXJcJFyCr%2FuJLMzhIJqx5KYVB%2FL%2Bm4H9E%2B3ffrorntI0gUv5%2FpzDBsXTE79IlAeZP4fCRnLUhcbGw4rm3n1bDzmTRD%2BqCZuRU%2BMBkVLssGHoiplvQwuWkG8%2FDMgnfWFylntBDCLuubK0JsrDDBZA9B7PKt%2FyhMTkvrAeRBVLaSdDBa64gTg8bIXc6Clhxf4N28QSketDGqGn%2F4BIrylzH3oMU3FVbN57dNoEsZyqHUIBHsrxp%2FYHmaquIYRQon%2BBcFHKwJUHXslMNqFRk8U6HT%2Fon3y8h4zmMF1UVwOQKbWR2V6A8zSgyaJwUzDiAtkn2mwxvCqhpdKLrRZVkVStXmwdSujw5sC%2FfunIzL4Ums6drETmYQuLO9XoHns%2F0%2FIs%2BY8iXGI23oTxTA7X3FTPaRGlAraUn6Zs%2BmyN4wQUzCT4A8UxzV8ObY8KiygdiGE7p8MWWl%2FEr1lZ8V8oaK15NhGgrHqgYzCeuGR8VETWzmhKtlA9QgvDuNUYfm4gEtI310nhtASgJ7mhLuGmnJ4WoIozhvkr%2FbmLzU%2F8s1z4j5vJjAfwh%2BLrezp6%2F8bDAo1M5JtEY%2BAozh5%2FdmHokbKg5ypxvqe429RKkqTpjwzqvE6fUWkxRHKHMOypsMIGOqUB2B%2Bhl4eLUJDj7QUbyv3aE9CAkMBE1IHu5Os%2FyG2FohMLuXfTRgHni%2BcyVL0Q1ZoZ6K%2F5Av%2F%2FL2Qki2%2BUa%2Byf6a26SFa7ybKvoBeDlXrFjjWK%2BlyDHAvqadZq9Z%2BReNFXicyTnnJhtrmu4%2FGbnymqRjtUuAjHUfUD%2BD6Fq0Bb9NrhkOWJ7lBQ1tO8bu2pczuq8urMAsqWRT2%2Fd1Xo4XmSWt7s327i&X-Amz-Signature=93a928678763240efb4822faf5ccdba26184f16e293d66cb55a49c60b94810fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663A4GP56D%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T132357Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIHj%2F2oDW06Wfq7DsIirii%2Fx5biOAHc49OP87ozVmFGB1AiEApf%2FFXyfVUlLoelWwyrPMPOfudtLMY0H3l3BME5%2FVgrgq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDMiFEGEoVgWBjvKgRircA1HQNTbraXJcJFyCr%2FuJLMzhIJqx5KYVB%2FL%2Bm4H9E%2B3ffrorntI0gUv5%2FpzDBsXTE79IlAeZP4fCRnLUhcbGw4rm3n1bDzmTRD%2BqCZuRU%2BMBkVLssGHoiplvQwuWkG8%2FDMgnfWFylntBDCLuubK0JsrDDBZA9B7PKt%2FyhMTkvrAeRBVLaSdDBa64gTg8bIXc6Clhxf4N28QSketDGqGn%2F4BIrylzH3oMU3FVbN57dNoEsZyqHUIBHsrxp%2FYHmaquIYRQon%2BBcFHKwJUHXslMNqFRk8U6HT%2Fon3y8h4zmMF1UVwOQKbWR2V6A8zSgyaJwUzDiAtkn2mwxvCqhpdKLrRZVkVStXmwdSujw5sC%2FfunIzL4Ums6drETmYQuLO9XoHns%2F0%2FIs%2BY8iXGI23oTxTA7X3FTPaRGlAraUn6Zs%2BmyN4wQUzCT4A8UxzV8ObY8KiygdiGE7p8MWWl%2FEr1lZ8V8oaK15NhGgrHqgYzCeuGR8VETWzmhKtlA9QgvDuNUYfm4gEtI310nhtASgJ7mhLuGmnJ4WoIozhvkr%2FbmLzU%2F8s1z4j5vJjAfwh%2BLrezp6%2F8bDAo1M5JtEY%2BAozh5%2FdmHokbKg5ypxvqe429RKkqTpjwzqvE6fUWkxRHKHMOypsMIGOqUB2B%2Bhl4eLUJDj7QUbyv3aE9CAkMBE1IHu5Os%2FyG2FohMLuXfTRgHni%2BcyVL0Q1ZoZ6K%2F5Av%2F%2FL2Qki2%2BUa%2Byf6a26SFa7ybKvoBeDlXrFjjWK%2BlyDHAvqadZq9Z%2BReNFXicyTnnJhtrmu4%2FGbnymqRjtUuAjHUfUD%2BD6Fq0Bb9NrhkOWJ7lBQ1tO8bu2pczuq8urMAsqWRT2%2Fd1Xo4XmSWt7s327i&X-Amz-Signature=9a3f44b34f891ac967dfa350abe2dcdb08b8831d4ec0ba0c93210eb85537414e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
