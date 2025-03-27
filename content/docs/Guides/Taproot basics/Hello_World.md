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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBYNK4YB%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T220724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDfVYgDkPNLXY%2B%2B8MFxnoEsLSNO%2F1DDoAuabmpAr1lhogIgPre49Yw%2BbIw24BXw%2BJDGP40TbHYao%2F9culS53eLpS2sq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDD96uv9ndlnuuwZXwyrcA1TuzA5PBTtl%2FK3cmhPOVzlDMWjmr77JQ5HG3yFoPCKx9YS8LWWGbShyhYv%2FW7cyjzIwihyzUsIZYnYgCrGtCajoK9Tvr4lFdMHYsn1ChUqN6TScp98Xu0Md9I02rtIuyBTDhyUXCT9820H7RM33TnEjtB0JwCxImYQ4qqmuRD3X6SRYmSA0HbPFr4aGPzJn2cR3YezNLj3Z5EsxaeJ6tWeKpm4u5d7IIc36CKfR3VQTPfjuB6OjQT%2BtEpmNp2kBhlnH716GwGZ0C1nPP%2BDbeIYXi4OfASB45oJ7Vuo4kujJd8rDkP5hFlleT9BOpOWj5WJ09KuG6bh61ywcs2%2Be%2BZlZO0KvOsIjOQn%2BkV%2BUs2T5fq7FVu%2BPoCK2nMU2BI6s%2F2NO%2Fjwi0XlFFq0bj77axWTxKOet%2FzaEl1MMTUZizYEqn1Syur9RV3fT3LQNR8ggIa%2FHEJB6kOwVUMN%2FjW9u09PBDDMX4JsxZRxQe1oTsQj8XdoKnuB%2FIlPxZup%2FiYo027ZsiWniniYJ5bRM2Q7MX3NGiP%2FAuDuYo8ybZ%2Bi81tJyPXWvpDBv9bwPWyJD57FL%2FDkXKyKydHcWI96Bc7f73cSY9CM%2BalcUNh84dU8W8P1%2BQ8GuG8l7e5%2B4ug8yMODclr8GOqUBEeV1%2BNDpZI8ueXfjOHLjHf2bwnISGh6xgMVF1AHkBL79bTedIDXOWibVXFbUELE%2FWxTfGfCANAmVPl4sM2%2FNxWNqMbN12tvZjNmmu7o%2FDP7Nqt8lTVo3BT0yxncoT%2FuwBaf2Wi%2FhpMNF4tFtsXIeX8kSQT9wLhIndhDDJBGyCBgsCgYrI9UlAyoBgpm0k7IY13SnubJi5deBnaKuGITTTmHQcur%2F&X-Amz-Signature=31a35e86029f8ff90aba919e0498fc06cee0c59283600d36951bfb1d78bf9045&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBYNK4YB%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T220724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDfVYgDkPNLXY%2B%2B8MFxnoEsLSNO%2F1DDoAuabmpAr1lhogIgPre49Yw%2BbIw24BXw%2BJDGP40TbHYao%2F9culS53eLpS2sq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDD96uv9ndlnuuwZXwyrcA1TuzA5PBTtl%2FK3cmhPOVzlDMWjmr77JQ5HG3yFoPCKx9YS8LWWGbShyhYv%2FW7cyjzIwihyzUsIZYnYgCrGtCajoK9Tvr4lFdMHYsn1ChUqN6TScp98Xu0Md9I02rtIuyBTDhyUXCT9820H7RM33TnEjtB0JwCxImYQ4qqmuRD3X6SRYmSA0HbPFr4aGPzJn2cR3YezNLj3Z5EsxaeJ6tWeKpm4u5d7IIc36CKfR3VQTPfjuB6OjQT%2BtEpmNp2kBhlnH716GwGZ0C1nPP%2BDbeIYXi4OfASB45oJ7Vuo4kujJd8rDkP5hFlleT9BOpOWj5WJ09KuG6bh61ywcs2%2Be%2BZlZO0KvOsIjOQn%2BkV%2BUs2T5fq7FVu%2BPoCK2nMU2BI6s%2F2NO%2Fjwi0XlFFq0bj77axWTxKOet%2FzaEl1MMTUZizYEqn1Syur9RV3fT3LQNR8ggIa%2FHEJB6kOwVUMN%2FjW9u09PBDDMX4JsxZRxQe1oTsQj8XdoKnuB%2FIlPxZup%2FiYo027ZsiWniniYJ5bRM2Q7MX3NGiP%2FAuDuYo8ybZ%2Bi81tJyPXWvpDBv9bwPWyJD57FL%2FDkXKyKydHcWI96Bc7f73cSY9CM%2BalcUNh84dU8W8P1%2BQ8GuG8l7e5%2B4ug8yMODclr8GOqUBEeV1%2BNDpZI8ueXfjOHLjHf2bwnISGh6xgMVF1AHkBL79bTedIDXOWibVXFbUELE%2FWxTfGfCANAmVPl4sM2%2FNxWNqMbN12tvZjNmmu7o%2FDP7Nqt8lTVo3BT0yxncoT%2FuwBaf2Wi%2FhpMNF4tFtsXIeX8kSQT9wLhIndhDDJBGyCBgsCgYrI9UlAyoBgpm0k7IY13SnubJi5deBnaKuGITTTmHQcur%2F&X-Amz-Signature=025c249d33df15a8ad138e79fa1530d1872e8e44f412ad253f35a612542cd5aa&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
