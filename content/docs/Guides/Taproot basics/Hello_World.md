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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SU5YD7SW%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T051005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIQDUxOlMHaV1gUbjADY2qkOwezLYJjkupYGHmuFllPH0SwIgMqahPPCf%2FRuEabkodt3qydhWnvybWcLsTNu1Qb7%2F5NQqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI%2BkhTbwc3Gac2XndircAyprjy%2BRLQZdVgVN%2Bth1XhTdvO78IAzq4M%2FYWyqVz%2FL2Y25lGWzRLxDwrikmwTbinsdExQDwOKc3zbYMUHoj4mZQUTeskvc1%2FEVfqG9SJaLUuAJUNfqm%2BSoYcmaN%2FqRDKcP8W6XCV6s7Xt%2BwtR61BO5k7bKKpRu9ELI8d5mU7dT47%2Bn8%2BKv7zvZx5eon0J4Ce0yszm7DzKPfSWc6ndCu6Z1msFXo2n8XzOEn0lmuw%2BX6b2cgch31ukbJmBch0fNiI7V4ooeEjoiJMxJxHRCV2oB%2F99NkSBntoj%2BoXLbmih%2BOFdr%2Bbm6PVvmBUU5EAt687jU8R5NpPva7OMhReJXSSTRrm9344p%2Bd6gysVkaTbkrGyuoCNgYmv74wB3tKxVGKDEDO9Iz74z3Zrglx0JhpQ6DMg5SmXeDaB98o5nluUh4s4RCFbLVVK%2Fx3txbndFsb1KrAr0hycIKharsISE%2BR6rIbAZtHggCIaCYuHi3e1eKqajlJHgRkq1tOufGjqqt5XJGdYRQS2akSJuqBvRBuDCaCXyPdScTv4oSh5vNBAtEQLsy3LN%2BxOCL1D33eKvxQ%2FFvWpKOzZyjORoF9REJEdVQpG2fzZ8QSRw0SbRa861XH6dxeP9TlZKlEJnZfMP2f28QGOqUB55Mtb5wU1iTHmuIPF1UcsVAPBtY94JimpLVQvlUsgnQNB0Ey%2FMe%2FS252qZX1nsMYZoFqHS0X%2BL%2F9D9KxxsKhBEwP3dVw4x5CX6%2B5dwSiXzXTnUFCUxdCkq77U0hTy0pRwEfes9Lqnk0wtP97wNNtJZjUJk0eT3QE1JnkHUIcsIFkBxpkVN3MJNL6l0bmvi2xirqKdHdyD7ifB%2FjU7p7Oih8frh%2B9&X-Amz-Signature=971df7b939a1791d1d18efd2474daa90a33c450e2ff43bcf5ad21a1332437b87&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SU5YD7SW%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T051005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIQDUxOlMHaV1gUbjADY2qkOwezLYJjkupYGHmuFllPH0SwIgMqahPPCf%2FRuEabkodt3qydhWnvybWcLsTNu1Qb7%2F5NQqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI%2BkhTbwc3Gac2XndircAyprjy%2BRLQZdVgVN%2Bth1XhTdvO78IAzq4M%2FYWyqVz%2FL2Y25lGWzRLxDwrikmwTbinsdExQDwOKc3zbYMUHoj4mZQUTeskvc1%2FEVfqG9SJaLUuAJUNfqm%2BSoYcmaN%2FqRDKcP8W6XCV6s7Xt%2BwtR61BO5k7bKKpRu9ELI8d5mU7dT47%2Bn8%2BKv7zvZx5eon0J4Ce0yszm7DzKPfSWc6ndCu6Z1msFXo2n8XzOEn0lmuw%2BX6b2cgch31ukbJmBch0fNiI7V4ooeEjoiJMxJxHRCV2oB%2F99NkSBntoj%2BoXLbmih%2BOFdr%2Bbm6PVvmBUU5EAt687jU8R5NpPva7OMhReJXSSTRrm9344p%2Bd6gysVkaTbkrGyuoCNgYmv74wB3tKxVGKDEDO9Iz74z3Zrglx0JhpQ6DMg5SmXeDaB98o5nluUh4s4RCFbLVVK%2Fx3txbndFsb1KrAr0hycIKharsISE%2BR6rIbAZtHggCIaCYuHi3e1eKqajlJHgRkq1tOufGjqqt5XJGdYRQS2akSJuqBvRBuDCaCXyPdScTv4oSh5vNBAtEQLsy3LN%2BxOCL1D33eKvxQ%2FFvWpKOzZyjORoF9REJEdVQpG2fzZ8QSRw0SbRa861XH6dxeP9TlZKlEJnZfMP2f28QGOqUB55Mtb5wU1iTHmuIPF1UcsVAPBtY94JimpLVQvlUsgnQNB0Ey%2FMe%2FS252qZX1nsMYZoFqHS0X%2BL%2F9D9KxxsKhBEwP3dVw4x5CX6%2B5dwSiXzXTnUFCUxdCkq77U0hTy0pRwEfes9Lqnk0wtP97wNNtJZjUJk0eT3QE1JnkHUIcsIFkBxpkVN3MJNL6l0bmvi2xirqKdHdyD7ifB%2FjU7p7Oih8frh%2B9&X-Amz-Signature=fb3cde2285232623d7ce31a4a60cc6fe3b23fd61fe11a5e17d3915b0b41e7a86&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
