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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2O55WHT%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T210741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIQD4LuuoKPNs9tO%2F10DORe06qmw%2Bju70h%2BMcBMoOoVCRPQIgPpdWpH5pAFMnOSSJQZpPO7xDpER0MbCWyVUujGRI6PsqiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLo5MHPEkdnWWkpk5yrcA%2FKThbwhY4befZzifGKSdRFNQOtZRUa2xxbn75qnHuPxPQWtVFsG2EcLxL6vnghW1kfGsPZr0MFMYp9TQF7fwp8JTtgRrjva%2FvcZboDIFDUSY90wQDtTWWz6gGFql3K4icIREBGnTclGkKevmWfw%2FtxB5rQb7Z5WLZY9u0Meor3%2FP8IMyaOBHYEi675Ug80Ok%2FpW2zgD5wnxjoVQrT9NociP1HWeRkair18nq9aWok4Bvhw07tuO1hn91tdERB7t2mYZ0RpO7F4%2Bx%2FilMwVvC7rglw0FgTXauhzG4qRi5yItCnRtXIESIBT2ZV1w0eDXOAKFJXyJmaqvE%2F%2BeRpORgO%2B2CgaZpZEfBq3dl6X5BWQyTMGJv2ubDk4qJ7EjX0mQG2%2FyNEV8cfzu6KksuScDHV6LpceMVLL0MtrrndvN9XGLj010ColEqfDAOCd0zBROJ5%2BZOxVZTEZVbp8j14IAjfhDsPRdvZZrKJHAg0L2gPRuAlRITODFtqtp%2B7z4z1H5%2F6MwuzPdhG4pkAYsEXO9YJfNrQpCnYbCqXCqbWC1D648TPE4%2F%2FkBaRenXxhHX%2FFvqtkPsUBfaIUggoLCN3pdEg%2BUqfRdmYHQrIjdJiASQURNMJFvVRgoGh3ctf5xMKnbjsEGOqUB4Td7XUywfBkWpNL1eggt81sES8ncTm9pltD47MPhRPqp%2FtHKSg9%2FNuzmEqj8gwb1kvxJ7mD3F8%2BPhd2vj9Do0hBVQnVFvY5Ne7yFM6273fJOUutVNrgJ4DSsODY1Hkya0gz9nGkEEhfr5iqPqwn1iLcmpp%2B3jvPsipeR5FNNsTA1y4pA4HXfcbahV1ysIjU0QBR1jnDdFfpJTTVenpla41IlE89j&X-Amz-Signature=dd80bb320a79bd92e6c4ca267806c3eb05148a53d71b064d9e73750249dac6fa&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2O55WHT%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T210741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIQD4LuuoKPNs9tO%2F10DORe06qmw%2Bju70h%2BMcBMoOoVCRPQIgPpdWpH5pAFMnOSSJQZpPO7xDpER0MbCWyVUujGRI6PsqiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLo5MHPEkdnWWkpk5yrcA%2FKThbwhY4befZzifGKSdRFNQOtZRUa2xxbn75qnHuPxPQWtVFsG2EcLxL6vnghW1kfGsPZr0MFMYp9TQF7fwp8JTtgRrjva%2FvcZboDIFDUSY90wQDtTWWz6gGFql3K4icIREBGnTclGkKevmWfw%2FtxB5rQb7Z5WLZY9u0Meor3%2FP8IMyaOBHYEi675Ug80Ok%2FpW2zgD5wnxjoVQrT9NociP1HWeRkair18nq9aWok4Bvhw07tuO1hn91tdERB7t2mYZ0RpO7F4%2Bx%2FilMwVvC7rglw0FgTXauhzG4qRi5yItCnRtXIESIBT2ZV1w0eDXOAKFJXyJmaqvE%2F%2BeRpORgO%2B2CgaZpZEfBq3dl6X5BWQyTMGJv2ubDk4qJ7EjX0mQG2%2FyNEV8cfzu6KksuScDHV6LpceMVLL0MtrrndvN9XGLj010ColEqfDAOCd0zBROJ5%2BZOxVZTEZVbp8j14IAjfhDsPRdvZZrKJHAg0L2gPRuAlRITODFtqtp%2B7z4z1H5%2F6MwuzPdhG4pkAYsEXO9YJfNrQpCnYbCqXCqbWC1D648TPE4%2F%2FkBaRenXxhHX%2FFvqtkPsUBfaIUggoLCN3pdEg%2BUqfRdmYHQrIjdJiASQURNMJFvVRgoGh3ctf5xMKnbjsEGOqUB4Td7XUywfBkWpNL1eggt81sES8ncTm9pltD47MPhRPqp%2FtHKSg9%2FNuzmEqj8gwb1kvxJ7mD3F8%2BPhd2vj9Do0hBVQnVFvY5Ne7yFM6273fJOUutVNrgJ4DSsODY1Hkya0gz9nGkEEhfr5iqPqwn1iLcmpp%2B3jvPsipeR5FNNsTA1y4pA4HXfcbahV1ysIjU0QBR1jnDdFfpJTTVenpla41IlE89j&X-Amz-Signature=0392b952f15465c125d28f951a9807c374e4182937fde428244a62574df9746b&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
