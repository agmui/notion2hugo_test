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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPRFVCRI%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T091025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCTga3%2Fx64BbSIkF57nVUjKOiTv4wy1UGwT0feCdqatqwIgMcakLhhoYqyz%2Fl2eDVTRe6LqM47Radp4stohbIvtWmUq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDHu4mY52%2FtbZC1UVdircA0LcAnZt7ZFU8V58WojiYqYDDd7Y%2BEY0kyTcBdtBv6uI0feOFki4ox8wkI%2B2wyuxrK%2FJKFrGC1d74R3W4UoNjGg0MdE0LSRE9fjCc138zwIhlJpSJremJuQOU8ODZ8uTc5pjsxRsmQWh8v0WcGfZeqMgSO5QRbURgz3qfmIvot66G1Q5TXcr4DguKas65L46tEAO%2FOiWhLpIaDIIkBdUdUWbbzUnTADNrOS%2FWfLFm%2Bq%2Fh8nYHaoe7U8VrzBdQxUdKc3iToqh%2BKwagaMwaAip8MzT7eyrT1UEcMYUbFlA7qF%2FK0iThYU%2BY23LWHZnZ80gIojjjGtErgIqa8C24STj5HR6eaCjuXOaYJgv8EK0Js1FFWHAORBmYFpBx12LINuvRLmxKsdMv0hs6PutTRXE9uIKFxgj15AR5A%2FnOIgTTtN6Ll7Hhxo08l%2FJgkhjketmBT4BEHKrzjP7ghrNXHu7OxummMYjddsjEWVh%2BtRffm%2Fq4B3E63pPZvoAPC%2BZlwbKYoDUqyDbmdrh9TsctOB5y1Mkbe%2BRaGmnvM49eHigoF%2BPNKF2ofGtVyOHUToTtoOJJruZfjR75TCOOualLLF9Wwif5Xz1EBXEDGSk7WVkG7c3FUOr7LH17rLMzvUzMM7vtsQGOqUBW2NZ7IGUMHPUDOdAO%2BvM88F%2B0xVERIia1kXKPERzD4i99y%2Bb%2ByxjugjS0L7KpHiCEJaEEWazmUBefG5IGveDDrbAjuDRZxGEkW7rITlA2OVGIB9RWBkagdRt5ym6xS5ccy8oY%2FOMrcg6Rzw32rIfA2I6zCmPVapN4H%2FOd%2FrbXOVyr2CsKnBdgmpIGRH4F6nVF91zwTWY%2BmFTD9gX0XBAVluZOwSz&X-Amz-Signature=7b7e731541026d5c4ce5aece4e37bf394d5567c55c3dcfc33df7b9e39ca94bcb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPRFVCRI%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T091025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCTga3%2Fx64BbSIkF57nVUjKOiTv4wy1UGwT0feCdqatqwIgMcakLhhoYqyz%2Fl2eDVTRe6LqM47Radp4stohbIvtWmUq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDHu4mY52%2FtbZC1UVdircA0LcAnZt7ZFU8V58WojiYqYDDd7Y%2BEY0kyTcBdtBv6uI0feOFki4ox8wkI%2B2wyuxrK%2FJKFrGC1d74R3W4UoNjGg0MdE0LSRE9fjCc138zwIhlJpSJremJuQOU8ODZ8uTc5pjsxRsmQWh8v0WcGfZeqMgSO5QRbURgz3qfmIvot66G1Q5TXcr4DguKas65L46tEAO%2FOiWhLpIaDIIkBdUdUWbbzUnTADNrOS%2FWfLFm%2Bq%2Fh8nYHaoe7U8VrzBdQxUdKc3iToqh%2BKwagaMwaAip8MzT7eyrT1UEcMYUbFlA7qF%2FK0iThYU%2BY23LWHZnZ80gIojjjGtErgIqa8C24STj5HR6eaCjuXOaYJgv8EK0Js1FFWHAORBmYFpBx12LINuvRLmxKsdMv0hs6PutTRXE9uIKFxgj15AR5A%2FnOIgTTtN6Ll7Hhxo08l%2FJgkhjketmBT4BEHKrzjP7ghrNXHu7OxummMYjddsjEWVh%2BtRffm%2Fq4B3E63pPZvoAPC%2BZlwbKYoDUqyDbmdrh9TsctOB5y1Mkbe%2BRaGmnvM49eHigoF%2BPNKF2ofGtVyOHUToTtoOJJruZfjR75TCOOualLLF9Wwif5Xz1EBXEDGSk7WVkG7c3FUOr7LH17rLMzvUzMM7vtsQGOqUBW2NZ7IGUMHPUDOdAO%2BvM88F%2B0xVERIia1kXKPERzD4i99y%2Bb%2ByxjugjS0L7KpHiCEJaEEWazmUBefG5IGveDDrbAjuDRZxGEkW7rITlA2OVGIB9RWBkagdRt5ym6xS5ccy8oY%2FOMrcg6Rzw32rIfA2I6zCmPVapN4H%2FOd%2FrbXOVyr2CsKnBdgmpIGRH4F6nVF91zwTWY%2BmFTD9gX0XBAVluZOwSz&X-Amz-Signature=565af6c4102f0ca8ee015916cecc1d2141577e04499cfac16082aa27686f492e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
