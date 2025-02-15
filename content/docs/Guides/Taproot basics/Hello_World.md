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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KRJKJSY%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T020744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQDOwkpgIM%2BfLvZsd8KgVxkPMI3dMPq6q2xqX%2F4iKcX6MAIhAJgKTxSkrSkdiyYCf5s00tN82HrxMWtuSo7D96bZK4luKv8DCDkQABoMNjM3NDIzMTgzODA1IgyEkGpesTi9JHBBZwoq3AMNwnFQF8KunW8Ohbm45Zt7GRbk2n3C0I%2FGqwQNs7ezogP9RgjnTCnZiI8dhxcSIQuUDOj0WktPD%2Bv5y6g8JURjNX86BXjQ%2F1T%2FZmVsmTOWtP%2F6Ay4APKa9Cnn%2BOd1XT56O%2BaB9Mhd14t3ecValKhC0%2BxoL7topNtWMdJQk14%2B4QQ66nlNH%2Fbepy2G1i%2BKR1R9JJ4o5G%2F%2BrA9zP2VOAuLORRT48hftjWuPTOj32QmqCDWKHpKqovcRYxQGHAAtJ7ZgqATlvzMkB0mDBexpmF30hTlrHihUp0BJaED5svaYBwyELLCqLYVQvvKqaB7f9OdcG49tfqScdTKU2T1ivxvLR0RI22QX6H25c8ybeJvt8lcNyjeLXhBadq2o%2Bu734y3vdvnJVI9dSRAHlXYny2bqXh%2BeTbnKIDRSd8W4zth4IPxoue1u1t54aQPpPnFWkRMcpYzzQHGCpTJg3wET0Hi2K69IfgYmSArcyVtrHt8l5fnumc%2B96UueOKmqoS4MmDftTF%2BR5hkLs25VmjFHx75%2FGRo9JK0cMoXE5g1HiNVrrgZ1%2FFp9zUhkEskYPTM7CRWgRPD9oQc4sjnfXYUTkh4NFVEOhEdHF36ecpNl%2FPzEHmFk%2FSiX0P4ZVMwNsvDDxtL%2B9BjqkAfGdD%2Bdk4MWWBVv80FbJUg9AlJ5sjqYfmPiC1z%2B1Hx6%2BKrAtLozquAKl9xKK%2B%2B9Hu5LuV2IkyU%2Bzn5oI4zd3U6JW0vGAizTGI5cqK7z0lNJngYKhVIDsi3KfJx%2BEdA8eLIt2yYl2GAdq2VdsbLoxPDfmlwdRM6EOZdH%2FmzCayK0xb21JetDFLzUZ9Qjla4ViKxYkcK3B1MEnpmB0LrmQWoMzmtOJ&X-Amz-Signature=a89da27fcd3a4a96d0cbfd774c06cc5a4c7b2d990762c09086a2fdd4f62c2513&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KRJKJSY%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T020744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQDOwkpgIM%2BfLvZsd8KgVxkPMI3dMPq6q2xqX%2F4iKcX6MAIhAJgKTxSkrSkdiyYCf5s00tN82HrxMWtuSo7D96bZK4luKv8DCDkQABoMNjM3NDIzMTgzODA1IgyEkGpesTi9JHBBZwoq3AMNwnFQF8KunW8Ohbm45Zt7GRbk2n3C0I%2FGqwQNs7ezogP9RgjnTCnZiI8dhxcSIQuUDOj0WktPD%2Bv5y6g8JURjNX86BXjQ%2F1T%2FZmVsmTOWtP%2F6Ay4APKa9Cnn%2BOd1XT56O%2BaB9Mhd14t3ecValKhC0%2BxoL7topNtWMdJQk14%2B4QQ66nlNH%2Fbepy2G1i%2BKR1R9JJ4o5G%2F%2BrA9zP2VOAuLORRT48hftjWuPTOj32QmqCDWKHpKqovcRYxQGHAAtJ7ZgqATlvzMkB0mDBexpmF30hTlrHihUp0BJaED5svaYBwyELLCqLYVQvvKqaB7f9OdcG49tfqScdTKU2T1ivxvLR0RI22QX6H25c8ybeJvt8lcNyjeLXhBadq2o%2Bu734y3vdvnJVI9dSRAHlXYny2bqXh%2BeTbnKIDRSd8W4zth4IPxoue1u1t54aQPpPnFWkRMcpYzzQHGCpTJg3wET0Hi2K69IfgYmSArcyVtrHt8l5fnumc%2B96UueOKmqoS4MmDftTF%2BR5hkLs25VmjFHx75%2FGRo9JK0cMoXE5g1HiNVrrgZ1%2FFp9zUhkEskYPTM7CRWgRPD9oQc4sjnfXYUTkh4NFVEOhEdHF36ecpNl%2FPzEHmFk%2FSiX0P4ZVMwNsvDDxtL%2B9BjqkAfGdD%2Bdk4MWWBVv80FbJUg9AlJ5sjqYfmPiC1z%2B1Hx6%2BKrAtLozquAKl9xKK%2B%2B9Hu5LuV2IkyU%2Bzn5oI4zd3U6JW0vGAizTGI5cqK7z0lNJngYKhVIDsi3KfJx%2BEdA8eLIt2yYl2GAdq2VdsbLoxPDfmlwdRM6EOZdH%2FmzCayK0xb21JetDFLzUZ9Qjla4ViKxYkcK3B1MEnpmB0LrmQWoMzmtOJ&X-Amz-Signature=58e6988a903537851e59baae9c5d73202aaf71dcea31e68cb297428791548dcd&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
