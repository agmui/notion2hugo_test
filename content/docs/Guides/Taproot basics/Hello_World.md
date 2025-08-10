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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSREBL5U%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T230825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC21FxkoJHiyyYJuMNeSu2OUbTaaxbXbLkjv%2BVoQIIUtQIhAOjq2j4McpDG%2FjT7QERfrL7%2FkQYia026JwgKt5zriheGKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzzkyG86W4NZxVBM%2F4q3AOxB405MV%2F8NG485bqZ4%2BYblpWYYBJO8LMlDLMz2PeiQRLtWP9rnp16Yx7ArNuIp4%2BV484%2BOrZe6a9f0%2B%2B1OEkjik%2BAoPfgKLMlTekLOrCwznOqA9U3Jg%2F2%2BMdwpAAnJrHW3fzY66YNiKGG0vTE%2Fy7Uz6N3WgHqqqHWUZxBcd0ES8rI6x%2FCXmImB%2B6NmhUe%2F5JZlB0Ge2qqA2o8%2F%2Fzf8THjDygh9TM2s%2BuxnYPFGHDuBEQXjMZMUK3qZDgl8%2BKuBUhXodgIQupVHRgzy8A3RdXReP%2FzB1O%2F9vRQtEhzLyh9UwZrNKiEL5EC9JJbBe79XUuz%2F2CTiHBampndOoGT2KOUJAGmybukpfMZpP5hunKf85Ap8ua%2BTGy5Ppig4SG2%2BqGOZDH9JNADpOZLVflZmPu1iRNljvwF9wi31LaYfg4istgdB1MygqVLjTvZ3NuzL0dP2u73FEijDvc9%2FUcEyJ%2FmrkZQvi1ZX24S%2BGxuZcW2fWMGmt%2B6AFJ%2BxIeH1r0WAY7vEARrA0a4vLBDU6BfVDiAnMcefYwOVSlpVLEmoLlCRhjlnMWkRopUW22vjkLdf%2BUrynaF%2FXIMOWjAAkswOAlN%2FQrn0xDnprRSQsMIQkx4PqrV0%2BaHehWE%2BnmyZDDtuuPEBjqkAVIj6Toev2GP%2FION2ntxguZ%2Bc6k%2Bg52S9SmgtNEQGChqoqRKlhQB6sX6%2Bmr9p9f7m0RV06%2BHztSZUE9HauHnTvIJ2n7jGqqqIz%2F9tALycXLEgd2Htm2Rk%2BA3Jb289Fe4MbUtX5jcqTMJiY1FMTtGy2tg08d3VWLSSUjrvjeJOdUxxmYIOdZYmUFPDPrRiteCekC8S4vpt9JLzWP9ac3lVt4zfY%2FM&X-Amz-Signature=5b2129fa2043aebfc1537f2ced600f89cc3ef093c9f4416d92b64236215fe781&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSREBL5U%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T230825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC21FxkoJHiyyYJuMNeSu2OUbTaaxbXbLkjv%2BVoQIIUtQIhAOjq2j4McpDG%2FjT7QERfrL7%2FkQYia026JwgKt5zriheGKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzzkyG86W4NZxVBM%2F4q3AOxB405MV%2F8NG485bqZ4%2BYblpWYYBJO8LMlDLMz2PeiQRLtWP9rnp16Yx7ArNuIp4%2BV484%2BOrZe6a9f0%2B%2B1OEkjik%2BAoPfgKLMlTekLOrCwznOqA9U3Jg%2F2%2BMdwpAAnJrHW3fzY66YNiKGG0vTE%2Fy7Uz6N3WgHqqqHWUZxBcd0ES8rI6x%2FCXmImB%2B6NmhUe%2F5JZlB0Ge2qqA2o8%2F%2Fzf8THjDygh9TM2s%2BuxnYPFGHDuBEQXjMZMUK3qZDgl8%2BKuBUhXodgIQupVHRgzy8A3RdXReP%2FzB1O%2F9vRQtEhzLyh9UwZrNKiEL5EC9JJbBe79XUuz%2F2CTiHBampndOoGT2KOUJAGmybukpfMZpP5hunKf85Ap8ua%2BTGy5Ppig4SG2%2BqGOZDH9JNADpOZLVflZmPu1iRNljvwF9wi31LaYfg4istgdB1MygqVLjTvZ3NuzL0dP2u73FEijDvc9%2FUcEyJ%2FmrkZQvi1ZX24S%2BGxuZcW2fWMGmt%2B6AFJ%2BxIeH1r0WAY7vEARrA0a4vLBDU6BfVDiAnMcefYwOVSlpVLEmoLlCRhjlnMWkRopUW22vjkLdf%2BUrynaF%2FXIMOWjAAkswOAlN%2FQrn0xDnprRSQsMIQkx4PqrV0%2BaHehWE%2BnmyZDDtuuPEBjqkAVIj6Toev2GP%2FION2ntxguZ%2Bc6k%2Bg52S9SmgtNEQGChqoqRKlhQB6sX6%2Bmr9p9f7m0RV06%2BHztSZUE9HauHnTvIJ2n7jGqqqIz%2F9tALycXLEgd2Htm2Rk%2BA3Jb289Fe4MbUtX5jcqTMJiY1FMTtGy2tg08d3VWLSSUjrvjeJOdUxxmYIOdZYmUFPDPrRiteCekC8S4vpt9JLzWP9ac3lVt4zfY%2FM&X-Amz-Signature=57c578f2db51fb84279fb90478c747eb82ac7274240c1155a45631c2f989f47e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
