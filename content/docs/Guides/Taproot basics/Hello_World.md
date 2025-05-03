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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUY6O3BL%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T003909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJGMEQCIB6A4GyxW%2FUyUOXdGr2H1fV8qhYUaEa95gJSs%2FG8GTL7AiBwaWQpkGkRqdZN1%2BOjMbNFqEpZa5mpq%2FDh8qhG3RuqOSqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAVcCAE8NBRZLd38ZKtwD3rmei1f%2FKC8HnNssanUNaVU0vmYujgW3qP%2FE2jkMIxNRO2chwvHP7Z2smcPU9dzIkWnlXIwbMb%2FD88plcGT1aXzCACrA1ShTW%2FF8SJKjWqnuC6ey83fCq%2BssCXq9mBlMzRkgcM7YfR%2FsaUr%2B%2Bw55dLVBTtYthOaxGTZwAxkrUKT89lShpicGnP%2FXN5MDFuoBiPG2jmoOpAqFDz8DvWMQVuDUBuiYGE7v81M2ZoKcsLxiIqtMvmeWZGOeK1PyOU%2BrgiMzmhjQ853Ed2zP%2BIok6w7akd1XLA851EQ3u0MM1n8Maj4%2FrHPFuY7nGPbxnGUkwyy732Agn7feD3l7UQ1zpCvr3BZ1vT8tDPYoHJ3GQ8w173EqiLWYd7bz7aT5MPTC4%2B3z%2FjyR%2BFFbveBK%2Fc4xGR3eS%2BCzUA9fEsVYiCxCU%2F5mWoO%2BKet%2FaCfB5I%2BkPRz0X%2B0rdieGETUImH1spZqcZ9w8sv8gKzUbquFC0NERWApMsMwErlBrniTuDfNVt8IUssLAFQnVLR6cTu832htkGdP%2FoJFiOeOuH%2BcuNYyRaqRq%2Fodskh4h92GUif77%2FhScpR2yq4NpIqQ09XBz1s%2FD6JHGuDigVuBBSNes0yesW%2B%2F5vNU64BYjc%2BT4pMUwsL%2FVwAY6pgE7NTdQhQXexpnO%2BcOVhejizIDWufSboRZ6O5Qxk%2Bx31YKcrTZWPprmUcotyGfOFxWhvbklGtdrj0M%2FUgMeUqbgloUeu4usLKqzALQziD6hcPwC8GEWAUF7xvdVVsb%2FmsP33sfPj4x0SwaW9Xxl30vkKNFuY0hC5zrIyPo69oaOS6TAJme0LiLkSsax2Y%2FBoR5WExV8Fv%2BxqfzHsrt9E%2BkiF15QfIsm&X-Amz-Signature=a9409af7a7c5c46468dfbaee26e65b26b344da8f7449ce7fe5bafe954a950323&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUY6O3BL%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T003909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJGMEQCIB6A4GyxW%2FUyUOXdGr2H1fV8qhYUaEa95gJSs%2FG8GTL7AiBwaWQpkGkRqdZN1%2BOjMbNFqEpZa5mpq%2FDh8qhG3RuqOSqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAVcCAE8NBRZLd38ZKtwD3rmei1f%2FKC8HnNssanUNaVU0vmYujgW3qP%2FE2jkMIxNRO2chwvHP7Z2smcPU9dzIkWnlXIwbMb%2FD88plcGT1aXzCACrA1ShTW%2FF8SJKjWqnuC6ey83fCq%2BssCXq9mBlMzRkgcM7YfR%2FsaUr%2B%2Bw55dLVBTtYthOaxGTZwAxkrUKT89lShpicGnP%2FXN5MDFuoBiPG2jmoOpAqFDz8DvWMQVuDUBuiYGE7v81M2ZoKcsLxiIqtMvmeWZGOeK1PyOU%2BrgiMzmhjQ853Ed2zP%2BIok6w7akd1XLA851EQ3u0MM1n8Maj4%2FrHPFuY7nGPbxnGUkwyy732Agn7feD3l7UQ1zpCvr3BZ1vT8tDPYoHJ3GQ8w173EqiLWYd7bz7aT5MPTC4%2B3z%2FjyR%2BFFbveBK%2Fc4xGR3eS%2BCzUA9fEsVYiCxCU%2F5mWoO%2BKet%2FaCfB5I%2BkPRz0X%2B0rdieGETUImH1spZqcZ9w8sv8gKzUbquFC0NERWApMsMwErlBrniTuDfNVt8IUssLAFQnVLR6cTu832htkGdP%2FoJFiOeOuH%2BcuNYyRaqRq%2Fodskh4h92GUif77%2FhScpR2yq4NpIqQ09XBz1s%2FD6JHGuDigVuBBSNes0yesW%2B%2F5vNU64BYjc%2BT4pMUwsL%2FVwAY6pgE7NTdQhQXexpnO%2BcOVhejizIDWufSboRZ6O5Qxk%2Bx31YKcrTZWPprmUcotyGfOFxWhvbklGtdrj0M%2FUgMeUqbgloUeu4usLKqzALQziD6hcPwC8GEWAUF7xvdVVsb%2FmsP33sfPj4x0SwaW9Xxl30vkKNFuY0hC5zrIyPo69oaOS6TAJme0LiLkSsax2Y%2FBoR5WExV8Fv%2BxqfzHsrt9E%2BkiF15QfIsm&X-Amz-Signature=c72ebac61d83b37f1abc5984610a1bed2ec4e8f4385112932b28614a8250abdc&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
