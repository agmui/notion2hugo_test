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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662POT4G4L%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T100902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIDwgQyujrwrXayVJ2l0qBIxa5DbfU5GwMmFu2Jk1qz5WAiEA1eH%2F%2B5jt4pCIMYX4BmnCPVfdr2p%2Bmk5AQjYcF6WuMJwq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDCUaSz0zr2NbiGXnVSrcA0AQU%2FRSQ%2F84O0VosdA6t4En75WilgxDaMW1JuqMS1%2BxgFWofBf7R1NQzLtqv2nH86OmcOq9nH5wbjwfXhEhCf93XBwLKEqXZgIbh0s4jn%2Bxma5PEcB9xrX5C5%2BIEEqd1RXgA6xtQ3dh7lt2fOx45XhLp3ObIR8cnqSAlIlfPyy1o0oQoau2aV07bQi8HPXz%2FIAPg7hkdfoTP5aDpHM4hMBhJzvjK53Rp%2BvnQ6T5FSbIgFERqAKz%2Bt4ZRjbA3eYJE2bkGl0KjTxq9hHmJN2peLRv7lqpB6%2FSLjGXRDH8axC33etWMDOyTCDN2XJrEUSuz98UT5d4WsAXRnLkFp4Noa300KRv9KHHSBLtrYo1swkBa1RBv8W4zEyc%2Fyqg%2FwDRreab7Gj6uNhAqomRUyb%2ByTHGmXX21rQ9ka8DhpP5OhZAGN%2BJH5fRJsfRJXkr9W0lyD4gRoH8vYTPTULGhu3C1quHuPFXqxCQiWZWcwdOIqoblEXE6EQvLtAxgWBMc1oyGUwmGikr8xiko4fhfqvtV8Hpn3doMwdbg9k53U5xF83D%2B9udCOEGPiZbxOEF%2BihaHSDZScaoRNMSjsDb06pg6nRsldaaLb8ZKDkwcgkRky1HorDIXb%2B1zePDcjstMNu%2F%2B70GOqUBBgIzEaIcHJizZxCvhFl2Yl0OnCRq6dyOCytsuc49QL7wa7lMGvdnoXGMZJz6enVwI%2Bs%2F5S4Alk6akwnhSXiBULePyQaAGH3IidyzwLQDR0n2WfO9EElAKud5nWrYOjiiN9nPu41VvxuEQ15GUSGS04OpHxhiaGyGnBkxC1j4lJXUu3jegk5jlpe7bK1nkXfvalRoGnTNf07PNwAodevJQ90kOu1C&X-Amz-Signature=4a0284f56187a156338ec98957bf49f9f351626ecaa7ce50525b5cf2ea46161a&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662POT4G4L%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T100902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIDwgQyujrwrXayVJ2l0qBIxa5DbfU5GwMmFu2Jk1qz5WAiEA1eH%2F%2B5jt4pCIMYX4BmnCPVfdr2p%2Bmk5AQjYcF6WuMJwq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDCUaSz0zr2NbiGXnVSrcA0AQU%2FRSQ%2F84O0VosdA6t4En75WilgxDaMW1JuqMS1%2BxgFWofBf7R1NQzLtqv2nH86OmcOq9nH5wbjwfXhEhCf93XBwLKEqXZgIbh0s4jn%2Bxma5PEcB9xrX5C5%2BIEEqd1RXgA6xtQ3dh7lt2fOx45XhLp3ObIR8cnqSAlIlfPyy1o0oQoau2aV07bQi8HPXz%2FIAPg7hkdfoTP5aDpHM4hMBhJzvjK53Rp%2BvnQ6T5FSbIgFERqAKz%2Bt4ZRjbA3eYJE2bkGl0KjTxq9hHmJN2peLRv7lqpB6%2FSLjGXRDH8axC33etWMDOyTCDN2XJrEUSuz98UT5d4WsAXRnLkFp4Noa300KRv9KHHSBLtrYo1swkBa1RBv8W4zEyc%2Fyqg%2FwDRreab7Gj6uNhAqomRUyb%2ByTHGmXX21rQ9ka8DhpP5OhZAGN%2BJH5fRJsfRJXkr9W0lyD4gRoH8vYTPTULGhu3C1quHuPFXqxCQiWZWcwdOIqoblEXE6EQvLtAxgWBMc1oyGUwmGikr8xiko4fhfqvtV8Hpn3doMwdbg9k53U5xF83D%2B9udCOEGPiZbxOEF%2BihaHSDZScaoRNMSjsDb06pg6nRsldaaLb8ZKDkwcgkRky1HorDIXb%2B1zePDcjstMNu%2F%2B70GOqUBBgIzEaIcHJizZxCvhFl2Yl0OnCRq6dyOCytsuc49QL7wa7lMGvdnoXGMZJz6enVwI%2Bs%2F5S4Alk6akwnhSXiBULePyQaAGH3IidyzwLQDR0n2WfO9EElAKud5nWrYOjiiN9nPu41VvxuEQ15GUSGS04OpHxhiaGyGnBkxC1j4lJXUu3jegk5jlpe7bK1nkXfvalRoGnTNf07PNwAodevJQ90kOu1C&X-Amz-Signature=fd9cc0988197aa07330fddff9f1b8aa56bd4e0fc8b03b3fd0ecc8e3cae48e822&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
