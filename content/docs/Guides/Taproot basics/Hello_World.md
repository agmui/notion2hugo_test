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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQMZEQBX%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T040946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIEZ2yHsnEu7ePvcgAwmHuG8d5HqxVPH%2FS%2FauJClz4VdJAiEA7p7np7C3ZTETbVsL671iYPB1Eq9z%2Br%2FnQaVcBr1I7IQqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBi919ow4byCaTOtOSrcA8WiA9iYqNrz6h%2BwLo2bZ1x2AlDHFZN3f9fXqhnSidHa5tRJIBA1Df6NJTyAO4odf6XZFi43mHacSXuirfIa1LoF0aDX9CAXTDrEFi8FZ9K6RZnmamAmHVYAy3hIkaffdfKV3EWKfeoafZRR4L1BawISMzvAR0SOAmIxuQGmr0gPnr3qNk17S6padkTLRCI0WvScLiHU1BijdrrMrPGOoYXRuudgxBXinGYa%2Bcm56a%2Fdm2Rm2mgIaBzZqViT%2BK4nOE2pw%2FfrGxpEZ0Du4WhblVQlIS3wavQ43DyCKXsOSJLHcLh3FdjD07cclpW%2FznCdexIPZ1l1vOlm9CSrq1vuSEi6towXSEsKIdKBCpajs2d%2BVT8PHKxIn2Z9WTl6odXEq%2FkYTXOc%2FnCTYnrfOvGctEmLSaUK%2BkzdX8CkN9T87VU9%2BQUGmyI0yV%2F%2FrcVr8yRN%2BGve4NKZ8dCu4%2BhyBkrwu6h13%2BiGbOadrNcpdAImPQSYek%2FrR8SQl1q91y1KSel5CvuSfOpMeEIHJ5NEL1DUjwmfV2Ajw%2B8dU8beOoh9in1Im5wSROV0qQG1k9N%2BZ7Nd1a89brVLwLjrMTcFHRUlX9r8D%2B952FfNjxGcqiPv2%2BIsOuNIA6hcMzjZap3EMMOG1sAGOqUB7yJ61cWsI6Ks%2FKap8CY14MEABcFi8zNBEeH4FaEcHChpHbMKQzLjkqtfcJKgFDwVIhn3c0S%2BXN1483edmKXsFBZOm8hVuXZ1bN5DnRi9GUaDiOIb3Kdz1K2Mkz3J7T%2F490wEjREGUhBmQMryDopcFX5GuuP9MIujoIbQxd0d7q0d5jsMTN%2FIj%2F%2FMJ9Fz6B%2BmeS4DlsBs%2Bh66snixzl1yzl6rLZQp&X-Amz-Signature=531328ffe3d39b682adfe4fe66c9e1811ae00bdad020f572bd6220a8754ccb20&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQMZEQBX%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T040946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIEZ2yHsnEu7ePvcgAwmHuG8d5HqxVPH%2FS%2FauJClz4VdJAiEA7p7np7C3ZTETbVsL671iYPB1Eq9z%2Br%2FnQaVcBr1I7IQqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBi919ow4byCaTOtOSrcA8WiA9iYqNrz6h%2BwLo2bZ1x2AlDHFZN3f9fXqhnSidHa5tRJIBA1Df6NJTyAO4odf6XZFi43mHacSXuirfIa1LoF0aDX9CAXTDrEFi8FZ9K6RZnmamAmHVYAy3hIkaffdfKV3EWKfeoafZRR4L1BawISMzvAR0SOAmIxuQGmr0gPnr3qNk17S6padkTLRCI0WvScLiHU1BijdrrMrPGOoYXRuudgxBXinGYa%2Bcm56a%2Fdm2Rm2mgIaBzZqViT%2BK4nOE2pw%2FfrGxpEZ0Du4WhblVQlIS3wavQ43DyCKXsOSJLHcLh3FdjD07cclpW%2FznCdexIPZ1l1vOlm9CSrq1vuSEi6towXSEsKIdKBCpajs2d%2BVT8PHKxIn2Z9WTl6odXEq%2FkYTXOc%2FnCTYnrfOvGctEmLSaUK%2BkzdX8CkN9T87VU9%2BQUGmyI0yV%2F%2FrcVr8yRN%2BGve4NKZ8dCu4%2BhyBkrwu6h13%2BiGbOadrNcpdAImPQSYek%2FrR8SQl1q91y1KSel5CvuSfOpMeEIHJ5NEL1DUjwmfV2Ajw%2B8dU8beOoh9in1Im5wSROV0qQG1k9N%2BZ7Nd1a89brVLwLjrMTcFHRUlX9r8D%2B952FfNjxGcqiPv2%2BIsOuNIA6hcMzjZap3EMMOG1sAGOqUB7yJ61cWsI6Ks%2FKap8CY14MEABcFi8zNBEeH4FaEcHChpHbMKQzLjkqtfcJKgFDwVIhn3c0S%2BXN1483edmKXsFBZOm8hVuXZ1bN5DnRi9GUaDiOIb3Kdz1K2Mkz3J7T%2F490wEjREGUhBmQMryDopcFX5GuuP9MIujoIbQxd0d7q0d5jsMTN%2FIj%2F%2FMJ9Fz6B%2BmeS4DlsBs%2Bh66snixzl1yzl6rLZQp&X-Amz-Signature=427c0bcfcfb4bf4c6335323924822554974b43de68610511daf51bd72633d208&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
