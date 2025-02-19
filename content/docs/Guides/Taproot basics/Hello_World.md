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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632UXBYUR%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T190152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCRj8co4Gz%2BGCl%2FQ5fCXF0nTiYmrG%2B%2B5hEIBmJUVkllngIgPuipwNhz9vujfnMRORT0KtcObUSQriqXynpNecvXJXEqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKC2z57wAFa0cKaowircA70uO4AT7DXviv20mh%2FqsZwnfQ6aPbP%2Bvapqyq8ivvXZctSLn3jG%2FRIAZAlyX76BZH9I6uLReGSWfe2zZRm3PsqGHpuDrWSa1fU3n2Ix14dhrX%2FXe14uOdLSyv9ztefWH3tR2xbcczeqV%2BsNREtEML0V8JlkSSB4mUrJ48saRxv%2FIHQouB79UF1PgOkRI3cZMwFXZgxq6dfYi2zfFs7HZNb9kqmze%2FTKU%2FrNN8CWUitQatW%2BMEIKuW2E2fO9DvLle103wtR3xParxTvgYVURqMZIihMfbIbI4ZuwKUCyg3mF%2BQC%2FiMbQENHTGFT6mp0vZODLkoByQuHO4qvojPu5iKFQQAVQELAuF15Wj18OTBpCrEzAvBp9bs5u0hAcQgu1cgpXJZQNMasBWb8iWL4kvdly9GmSJMg7jezmK9rB2YOFMng9x1e1%2Fq%2B6GhRe791i4HaqN73aqL8A0p26RZnjhzdtCEyIeBwEKAmN4wR8hORwAra6hDrqmUjloWHI%2BSLYstzZGp7quik%2BKSA1f7SB6PnfNjCXIybXvrFqXC%2Fi39mrFzG4v1pakryUF8RIlb7J8GkHB5g52grvFYhJWuL1h6W0Ao04KezVBfuBWn6iwH6Ckazq2cMSyzqpJol3MPjS2L0GOqUBMNMC6UWMoOFW4QI25X4uiJ0c5AmU%2B09%2FhMLY5om4K2fcAfGc0a3kFYiv8DSOWLXEhSQ%2B%2BrJW5QqYvgFApiqxjP67G5rtPCpiX8ZQ13agQVhCMfPTu86v6WwnadBfcEZybzHC4tDL609sOhfCRprWh9lLiWgP7aPmu4F606IUPrHeW%2FooNsC2F2dMT3Vkl3bKTyMGpfpxMZD1lumZSzBi9TFXlAUh&X-Amz-Signature=cf5f90fb2e420c25476b63bda6e1fae4b76c1111c6e00dce1c2501757a324553&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632UXBYUR%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T190152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCRj8co4Gz%2BGCl%2FQ5fCXF0nTiYmrG%2B%2B5hEIBmJUVkllngIgPuipwNhz9vujfnMRORT0KtcObUSQriqXynpNecvXJXEqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKC2z57wAFa0cKaowircA70uO4AT7DXviv20mh%2FqsZwnfQ6aPbP%2Bvapqyq8ivvXZctSLn3jG%2FRIAZAlyX76BZH9I6uLReGSWfe2zZRm3PsqGHpuDrWSa1fU3n2Ix14dhrX%2FXe14uOdLSyv9ztefWH3tR2xbcczeqV%2BsNREtEML0V8JlkSSB4mUrJ48saRxv%2FIHQouB79UF1PgOkRI3cZMwFXZgxq6dfYi2zfFs7HZNb9kqmze%2FTKU%2FrNN8CWUitQatW%2BMEIKuW2E2fO9DvLle103wtR3xParxTvgYVURqMZIihMfbIbI4ZuwKUCyg3mF%2BQC%2FiMbQENHTGFT6mp0vZODLkoByQuHO4qvojPu5iKFQQAVQELAuF15Wj18OTBpCrEzAvBp9bs5u0hAcQgu1cgpXJZQNMasBWb8iWL4kvdly9GmSJMg7jezmK9rB2YOFMng9x1e1%2Fq%2B6GhRe791i4HaqN73aqL8A0p26RZnjhzdtCEyIeBwEKAmN4wR8hORwAra6hDrqmUjloWHI%2BSLYstzZGp7quik%2BKSA1f7SB6PnfNjCXIybXvrFqXC%2Fi39mrFzG4v1pakryUF8RIlb7J8GkHB5g52grvFYhJWuL1h6W0Ao04KezVBfuBWn6iwH6Ckazq2cMSyzqpJol3MPjS2L0GOqUBMNMC6UWMoOFW4QI25X4uiJ0c5AmU%2B09%2FhMLY5om4K2fcAfGc0a3kFYiv8DSOWLXEhSQ%2B%2BrJW5QqYvgFApiqxjP67G5rtPCpiX8ZQ13agQVhCMfPTu86v6WwnadBfcEZybzHC4tDL609sOhfCRprWh9lLiWgP7aPmu4F606IUPrHeW%2FooNsC2F2dMT3Vkl3bKTyMGpfpxMZD1lumZSzBi9TFXlAUh&X-Amz-Signature=b201316de2afc3204adaaddbd387fd76452842a2acc0a913e48f3ff03e7d2c3c&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
