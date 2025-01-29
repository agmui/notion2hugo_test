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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QF5IVR77%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T230721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC%2BuhvEhIqvqF7mxHx6G3E8rzv1TGwn7qwxNUKMtU%2FnzAiA5dzZVf1cWb%2FlmYVa06MXsyS%2F%2FscMg0rMCdp3EUNmFrCqIBAiX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMK6oIhC5Y1e%2Buac8pKtwDAuYF2bsPiqPJSFgFsC6dTIr3iHmvd7%2FoxSU3KdxMI4qXBYUA1jjSvZdJoe4ZicjxLwBlfCdFvLCvFlDSBD33YVMA3YBgk335qEwHN%2BbcOh3Mb5CT%2FLwIbVK0TRsSDdUviDgrKuTAQebFvMU6ibBW2%2FuEgGkNE2uYWq1mz4pQyc6pawAyuDXBATNp7KJRQIRgsxQJ2d1ELHx%2FYukRBQwNzVoSMTfYZFezr%2FIrp%2FjJJOjE01TlaJlUUBd1Z8SIgXWjWz0vM8%2Fw5AdyPI0M1Z1HJ4mnvDfMAoEkMY4u5HPowrlFI4bQcf7CtKgixnC1AuZidBUXduLVYtQA4eFSX5jTY8lBp%2BReYk6PltMa4r6txbYkW%2BF5WO5F6f3cQL%2Fa6d%2FjjE7D3mRBi59u%2B9wA9HdOiY4P6Q0Tz0Uso9Xg41gjxOF3rTEW9uFSG00yMlmEdL2q%2BNI3P4BEI9IivIp%2FDEGCjZD4kPlFNYF2AnE8MZ3qbExpo9uxv%2FD1frg7%2BXM9L1BJ85rjqgVMzrc%2F0Z7xsjRysVkIOZgRi3EIhC6bhp7PfMfBUNlO%2FqGwEAgwdUVOpm%2B71MEHck5e95Yo5jWHPDmSaYQJ18GD1%2BBjxcfbC8CVo0c9AlxSl%2B5diTCNxOkw0cfqvAY6pgGyD8Lpf7B5wBQHAWlD5Tws%2B89Py1YXm%2FXqbrdrSqHH5CeYBBpMDybQAlwyASbysHxejj1DOOHM%2FnKlzCAGagA9O68mayqODvou6E71wt10Y3pC%2FIqGdHaxKz7s7mFk90j1OG0rG5zFw02WW0vsBBOAc4Psy94Z4fmQYxVb5ib8Hi84Pdz0R2iTHMRqkkrAkIWrb55W0xfq2BtGCK2yEVJB4Rr0I7Dw&X-Amz-Signature=cf3f645754d0e9918cc3497426832e59d9ee5fe676731c37c76932f5ff8d6f10&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QF5IVR77%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T230721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC%2BuhvEhIqvqF7mxHx6G3E8rzv1TGwn7qwxNUKMtU%2FnzAiA5dzZVf1cWb%2FlmYVa06MXsyS%2F%2FscMg0rMCdp3EUNmFrCqIBAiX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMK6oIhC5Y1e%2Buac8pKtwDAuYF2bsPiqPJSFgFsC6dTIr3iHmvd7%2FoxSU3KdxMI4qXBYUA1jjSvZdJoe4ZicjxLwBlfCdFvLCvFlDSBD33YVMA3YBgk335qEwHN%2BbcOh3Mb5CT%2FLwIbVK0TRsSDdUviDgrKuTAQebFvMU6ibBW2%2FuEgGkNE2uYWq1mz4pQyc6pawAyuDXBATNp7KJRQIRgsxQJ2d1ELHx%2FYukRBQwNzVoSMTfYZFezr%2FIrp%2FjJJOjE01TlaJlUUBd1Z8SIgXWjWz0vM8%2Fw5AdyPI0M1Z1HJ4mnvDfMAoEkMY4u5HPowrlFI4bQcf7CtKgixnC1AuZidBUXduLVYtQA4eFSX5jTY8lBp%2BReYk6PltMa4r6txbYkW%2BF5WO5F6f3cQL%2Fa6d%2FjjE7D3mRBi59u%2B9wA9HdOiY4P6Q0Tz0Uso9Xg41gjxOF3rTEW9uFSG00yMlmEdL2q%2BNI3P4BEI9IivIp%2FDEGCjZD4kPlFNYF2AnE8MZ3qbExpo9uxv%2FD1frg7%2BXM9L1BJ85rjqgVMzrc%2F0Z7xsjRysVkIOZgRi3EIhC6bhp7PfMfBUNlO%2FqGwEAgwdUVOpm%2B71MEHck5e95Yo5jWHPDmSaYQJ18GD1%2BBjxcfbC8CVo0c9AlxSl%2B5diTCNxOkw0cfqvAY6pgGyD8Lpf7B5wBQHAWlD5Tws%2B89Py1YXm%2FXqbrdrSqHH5CeYBBpMDybQAlwyASbysHxejj1DOOHM%2FnKlzCAGagA9O68mayqODvou6E71wt10Y3pC%2FIqGdHaxKz7s7mFk90j1OG0rG5zFw02WW0vsBBOAc4Psy94Z4fmQYxVb5ib8Hi84Pdz0R2iTHMRqkkrAkIWrb55W0xfq2BtGCK2yEVJB4Rr0I7Dw&X-Amz-Signature=6ac95ba8ac40c61ee7b2a44dd4b08bdeebfc4f986137954397a276ea5b0f2822&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
