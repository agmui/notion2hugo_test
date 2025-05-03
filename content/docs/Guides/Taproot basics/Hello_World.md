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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674DBJLDD%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T131619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJGMEQCICGk8VVwMVIjeJZw%2Fp7jPdqLVsLejztL4WH0w8a8w92iAiAzehdKhAf3PezCs%2FIz1SuB1Xoneq2a6U54CEd8bRxcaSqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5w2FBulCpyI2BqXEKtwDdIScnezDkS3B10wDPOCrw5t0Ru5XpnBFTLJTMVab1BYO9A9bf53QzvFEID178uf1eDzBjmDiKQGgcL7%2BVzuDA0cAefDj3MVgJaDkaxZcboMYsbTy%2Fq6tN8r3D7RBZhewCmf%2FfjR5oBIMASGk6r2VvfGXc5poLzGL%2BqQsleJulq4DTFwR8aTNMuLYf%2FzDHVi%2Fp2h4C%2FhiRoWmXT2UzZdN6w3VjgCkBG3Zgee4%2FRMhcSemBWihOf9JteA5kri%2BqKZrzLBfRO1hsCRSI5tmNfKGAK%2B8eP3e0f%2FX5f2o9iqoEY4CY0O%2FaJ1FZl7hONvHVlfvDZWKeJjLOcDsmLknPQGJLJg%2FiVNuPIG%2FeWB%2BaB5jyg050LuleYEUkDqcGdRQ85eQLpyCkgGr3xXO8sHZ1Dc6z6LW7Adzs7wMXgXyy7MpT8DgzfzTz4RIA06jH7%2FENyseugKqCx1Fa%2F7WMQ5LXVblmqfeOOCNh6JOvCtB%2BUhbYu%2B%2Fjikii3vRRODzlmPc6dkaxSPliu3Vqrjyh4Ei97NhGSl0KrLh3YhvwtwXa%2B6YTFDC8UyWAqqXDkAAMX6jIRfqdxoOU%2BLnqRa3DJjIUfdZCcctFaACM7SwJvJ%2B2rXe%2FuD9qpb6YVxkVUNjTYUwj%2BnXwAY6pgGEoe0YFeU%2BmPtUFZHqnxHcJ5hikZzje%2Bj7148G7X7TJ8dZdrbzR37Xb2Kc45wiotujX%2FDZnkupagTfATM%2BwAxnRiSjm%2BYSiaRKR3qzrv7Aa50Ke9H8nAtkDlwC5S8bZmadr1SF6SOBCXAbgDqMOUHoe0mRjecp3x%2F4Cd9GGuIHjQTPhRfzHzx9DTkN6LO5BRW5PsBdoVuyKC2Kfx9ejkml7Cd8HzUt&X-Amz-Signature=4f6bbe6672be4a717fe837f00b237ba1c4479cda0c5f235f42140004b4f9dfee&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674DBJLDD%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T131619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJGMEQCICGk8VVwMVIjeJZw%2Fp7jPdqLVsLejztL4WH0w8a8w92iAiAzehdKhAf3PezCs%2FIz1SuB1Xoneq2a6U54CEd8bRxcaSqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5w2FBulCpyI2BqXEKtwDdIScnezDkS3B10wDPOCrw5t0Ru5XpnBFTLJTMVab1BYO9A9bf53QzvFEID178uf1eDzBjmDiKQGgcL7%2BVzuDA0cAefDj3MVgJaDkaxZcboMYsbTy%2Fq6tN8r3D7RBZhewCmf%2FfjR5oBIMASGk6r2VvfGXc5poLzGL%2BqQsleJulq4DTFwR8aTNMuLYf%2FzDHVi%2Fp2h4C%2FhiRoWmXT2UzZdN6w3VjgCkBG3Zgee4%2FRMhcSemBWihOf9JteA5kri%2BqKZrzLBfRO1hsCRSI5tmNfKGAK%2B8eP3e0f%2FX5f2o9iqoEY4CY0O%2FaJ1FZl7hONvHVlfvDZWKeJjLOcDsmLknPQGJLJg%2FiVNuPIG%2FeWB%2BaB5jyg050LuleYEUkDqcGdRQ85eQLpyCkgGr3xXO8sHZ1Dc6z6LW7Adzs7wMXgXyy7MpT8DgzfzTz4RIA06jH7%2FENyseugKqCx1Fa%2F7WMQ5LXVblmqfeOOCNh6JOvCtB%2BUhbYu%2B%2Fjikii3vRRODzlmPc6dkaxSPliu3Vqrjyh4Ei97NhGSl0KrLh3YhvwtwXa%2B6YTFDC8UyWAqqXDkAAMX6jIRfqdxoOU%2BLnqRa3DJjIUfdZCcctFaACM7SwJvJ%2B2rXe%2FuD9qpb6YVxkVUNjTYUwj%2BnXwAY6pgGEoe0YFeU%2BmPtUFZHqnxHcJ5hikZzje%2Bj7148G7X7TJ8dZdrbzR37Xb2Kc45wiotujX%2FDZnkupagTfATM%2BwAxnRiSjm%2BYSiaRKR3qzrv7Aa50Ke9H8nAtkDlwC5S8bZmadr1SF6SOBCXAbgDqMOUHoe0mRjecp3x%2F4Cd9GGuIHjQTPhRfzHzx9DTkN6LO5BRW5PsBdoVuyKC2Kfx9ejkml7Cd8HzUt&X-Amz-Signature=c0ee383579f6e53206672434e47e82aa4bc3db41fa7aee3b1f8fc960a8716988&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
