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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4UOWEM5%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T210735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJIMEYCIQCOkZtvmk63PtLLT%2FCS8IC80hmf2%2Bcc1TWRdk1RndgDSwIhAPIvFsKEFnHgwXBcLLVQcbHsILvgxBQKyLnAAeFJE74eKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxzE%2Bf2hfYOUdH0Cqoq3AO3OCEitE8khCaAquyLJ20NRbOhLbPYw6TZxMGDbXZy4hpVnsc0OyOCXGt2VIOC7itMqIk5ls3uJuOn8AUfyzlVCl1GU4IJkxeEznlcYlw2JqR8k%2FZvD7llEJosYbVAyX8CMU9JfcCtdzvF6oGAhahdXZ7K%2FIZ5QH%2Ffp8qTj5NSKEdpXRBMNix1%2B4jS7hzRAKiFRUcA0aiUfdAPWQiehVZVlBenPieIuAPnmnxN8D5470YEcox3nflqePPQHwDoJe%2Bt3c04MyWomXsGU%2Bp3hhKPNxZhtfzlCjz3jpSjv3zRoG7Zm6Ru7bmvat4dgJSGSyShY3DUgXax0SIlA5wlSoJG4tUGLW00OsxUHuDTthaAPlsHIyOCi08RCTJZEyCPjgxWlWsEkl1u6XQ6NtA2qQfjZi2PdisS9Crd6ftaY%2F535l3XkQ6vYY22JCOsu4uoExH%2Fc5%2FwQOO6LpsRvyjdT3FcBYtRZM%2B3maUmR8VJxzYV8%2BefnOv%2F7N3BiOUPdTNuYBB0rn4z2ByJ%2BoChjAziRieLys0zPRDOfBgp2VaMlAqrzpXaWEc2w%2BvOkezXFeQVY%2B934t3TPkA0CNOLzPwfE1F1eBuyEdo%2BDNdXC%2FxNEPwpKtLBIsUChqNwp%2FPoxjC%2FseC%2FBjqkAf%2F5%2FHnFJ2SEWqCHr5l2A9APVCU5iVfeBsA5upUaGgG8cC6AMv8DixU9n5cULw3cZjEcQpwrGHa4Ljo1I8m462KQY6iS7bKm6AqxJaMQSfsf0KBws9DALcJIdjSlabZz2Kz1rBAwfYZV1m7z40Q2fR%2Bz5%2BmRMxkOS6VUg1vQ4vrEIRwSbFqp9fY%2FYtAzf3RJaVGJ5l6qYF2EShmUnxMb4K9T%2BC2Y&X-Amz-Signature=599e8f45d9eb66f4df952d1ff165e43a6b7393f1b041f685dc741ee663f9b938&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4UOWEM5%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T210735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJIMEYCIQCOkZtvmk63PtLLT%2FCS8IC80hmf2%2Bcc1TWRdk1RndgDSwIhAPIvFsKEFnHgwXBcLLVQcbHsILvgxBQKyLnAAeFJE74eKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxzE%2Bf2hfYOUdH0Cqoq3AO3OCEitE8khCaAquyLJ20NRbOhLbPYw6TZxMGDbXZy4hpVnsc0OyOCXGt2VIOC7itMqIk5ls3uJuOn8AUfyzlVCl1GU4IJkxeEznlcYlw2JqR8k%2FZvD7llEJosYbVAyX8CMU9JfcCtdzvF6oGAhahdXZ7K%2FIZ5QH%2Ffp8qTj5NSKEdpXRBMNix1%2B4jS7hzRAKiFRUcA0aiUfdAPWQiehVZVlBenPieIuAPnmnxN8D5470YEcox3nflqePPQHwDoJe%2Bt3c04MyWomXsGU%2Bp3hhKPNxZhtfzlCjz3jpSjv3zRoG7Zm6Ru7bmvat4dgJSGSyShY3DUgXax0SIlA5wlSoJG4tUGLW00OsxUHuDTthaAPlsHIyOCi08RCTJZEyCPjgxWlWsEkl1u6XQ6NtA2qQfjZi2PdisS9Crd6ftaY%2F535l3XkQ6vYY22JCOsu4uoExH%2Fc5%2FwQOO6LpsRvyjdT3FcBYtRZM%2B3maUmR8VJxzYV8%2BefnOv%2F7N3BiOUPdTNuYBB0rn4z2ByJ%2BoChjAziRieLys0zPRDOfBgp2VaMlAqrzpXaWEc2w%2BvOkezXFeQVY%2B934t3TPkA0CNOLzPwfE1F1eBuyEdo%2BDNdXC%2FxNEPwpKtLBIsUChqNwp%2FPoxjC%2FseC%2FBjqkAf%2F5%2FHnFJ2SEWqCHr5l2A9APVCU5iVfeBsA5upUaGgG8cC6AMv8DixU9n5cULw3cZjEcQpwrGHa4Ljo1I8m462KQY6iS7bKm6AqxJaMQSfsf0KBws9DALcJIdjSlabZz2Kz1rBAwfYZV1m7z40Q2fR%2Bz5%2BmRMxkOS6VUg1vQ4vrEIRwSbFqp9fY%2FYtAzf3RJaVGJ5l6qYF2EShmUnxMb4K9T%2BC2Y&X-Amz-Signature=a13855dc0293a6366f317b8850aaa4ee8eb9a89d4018b754374e95b655c7afe2&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
