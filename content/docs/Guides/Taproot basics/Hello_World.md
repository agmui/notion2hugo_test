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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664URCWIP2%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T100831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIEsw4cretdYhK0mbGCTPpnVMXI0hG7migCfaS4JzU4QfAiEA7TXzkHT2sfEvnYDUYXA0mm6EzbZEQeLJ6qV3SWYHNzYq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDByCvh%2BIjS%2FW45MCZCrcAyuiTVK7Afz89DLikWB74owrDPMiefocxE6MQNMNzIpvXOPLQxeki1iVmem68VA6jK%2Fjh%2FpPqUv24zn7RwAfUhL4dp8oT91mm1ErJdwWMXRAST0P%2BNgfO8l73QwYd0B5DqPGhIxYLUbWPyau44ml1umsZOaFXwsxpPQ5nUEexBXFBpjRHprQZ9nZ8xeT9kRk6nC2T1WLJq2hqxKCgvgQDUOY3DgNa%2BwrYdBnGDlRVT7mMH264fCChEXt4RlJCbZKzbplYSSA4chsjD1b9yJBuFWxn8wsTf4%2FxCUcMSUwkWyj4bB9iM9b7mpd7KZM%2BFVdapo12xwa%2Bh49A%2FZZgFFPJlnN56gpHnnX8k4DiPZOYA7%2B%2FAMBtKahVZGlk5iUeJ2Q2qcXm56unD75aja22dvs5mTTTKf7lozJA6Ekyz57Ope3dOqrZx6xKoiMidANtLTXAkvCBkrp6vg1j3s30%2FkTfZg3qC%2F0rkiP%2Bj7Yt5%2FfCUOMDQ8mSvyu%2BVi2f5zOHiIj31xS7kH6BHlH81V1AaM1AwPgDJ%2Bc5OrNrsSLdFpZyy%2FUk0HNUYzuXa5Lz6Tl%2FZKPi1EXDTpT7a%2FHi4vzHxNm6nGHj%2BlwBbfZcOspQ7MwtFLcJkTNhWo7YVd%2B58V0MOii9r0GOqUBhAn1wTPXTgQSzuB5Rz2pIYctM7AmefsUdIB0tQKkHZ%2FgBMrUMdXv0yTaKKYp%2BwB1%2Bp4loPZI5E%2FG1m9oa94kYmjBzk%2FPxaXzoJEHEkWhv1ej8T5202rD27wBIN%2BtsFurWPNau0tsCUe4YIorWEGviLbBR5ucUbV7x8LGuodh8SA9H9ia5DSHQWRvdRHMXPLzn1QR1OhMthRwXyu9b7bw5EbUZ3HV&X-Amz-Signature=699275cce895ea69906df9a3526ae2c524cd028366814750360d28271ed047ac&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664URCWIP2%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T100831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIEsw4cretdYhK0mbGCTPpnVMXI0hG7migCfaS4JzU4QfAiEA7TXzkHT2sfEvnYDUYXA0mm6EzbZEQeLJ6qV3SWYHNzYq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDByCvh%2BIjS%2FW45MCZCrcAyuiTVK7Afz89DLikWB74owrDPMiefocxE6MQNMNzIpvXOPLQxeki1iVmem68VA6jK%2Fjh%2FpPqUv24zn7RwAfUhL4dp8oT91mm1ErJdwWMXRAST0P%2BNgfO8l73QwYd0B5DqPGhIxYLUbWPyau44ml1umsZOaFXwsxpPQ5nUEexBXFBpjRHprQZ9nZ8xeT9kRk6nC2T1WLJq2hqxKCgvgQDUOY3DgNa%2BwrYdBnGDlRVT7mMH264fCChEXt4RlJCbZKzbplYSSA4chsjD1b9yJBuFWxn8wsTf4%2FxCUcMSUwkWyj4bB9iM9b7mpd7KZM%2BFVdapo12xwa%2Bh49A%2FZZgFFPJlnN56gpHnnX8k4DiPZOYA7%2B%2FAMBtKahVZGlk5iUeJ2Q2qcXm56unD75aja22dvs5mTTTKf7lozJA6Ekyz57Ope3dOqrZx6xKoiMidANtLTXAkvCBkrp6vg1j3s30%2FkTfZg3qC%2F0rkiP%2Bj7Yt5%2FfCUOMDQ8mSvyu%2BVi2f5zOHiIj31xS7kH6BHlH81V1AaM1AwPgDJ%2Bc5OrNrsSLdFpZyy%2FUk0HNUYzuXa5Lz6Tl%2FZKPi1EXDTpT7a%2FHi4vzHxNm6nGHj%2BlwBbfZcOspQ7MwtFLcJkTNhWo7YVd%2B58V0MOii9r0GOqUBhAn1wTPXTgQSzuB5Rz2pIYctM7AmefsUdIB0tQKkHZ%2FgBMrUMdXv0yTaKKYp%2BwB1%2Bp4loPZI5E%2FG1m9oa94kYmjBzk%2FPxaXzoJEHEkWhv1ej8T5202rD27wBIN%2BtsFurWPNau0tsCUe4YIorWEGviLbBR5ucUbV7x8LGuodh8SA9H9ia5DSHQWRvdRHMXPLzn1QR1OhMthRwXyu9b7bw5EbUZ3HV&X-Amz-Signature=b4817ef9493185e319ac91a05eac6d10b5a906ca4460a890a5bfe246015b0d31&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
