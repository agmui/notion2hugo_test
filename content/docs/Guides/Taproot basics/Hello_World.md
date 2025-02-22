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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEXL37W7%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T070610Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFqAS1LBNLJYbgpI3leKbW%2F6AcNxn%2BMeO8obpkDZ2wCkAiEAkpQ2fq85jrRqO7UW8jU%2FFZTReRULNZI4MC7YBZty2D8qiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBURyJL37bmArIOKKyrcA7BSs%2BtA2kXagkdIGS6VeJelBtYG%2FxfMiwgswZLb%2FXQcaj7SUkpm%2BTaTFjnv9NihFXIMGPGjjUvzhRVwpWZVk8oIVvELaH828ALhbEazPdMOkxfV6nuHvWV8aEyd%2BClROiwcvrxXOm%2FgyAA0EIqxxbWDtS4K0Yb8%2BclwsVqA9%2Ft2o16iTseN%2FP7v2dftgnCM7z0OVFAiivXO9oXgUWXslkbJMtiypmVnxh4NANaCUhqxLlHr5uBjpH%2F8tTGWRahUDHcZc2N%2BhqE6fnLOhXAWqBkmuYX08PG33yJdzDiwDdknZ3GQbQZRi8GIOqGwwDY0qKxk7DO84E5F3ImcBMbkCMzTi%2FUAO53Vto8JbCYs92DcyzKpyhaOrSXyEEm%2F621y9Bhs3%2BeW5hb%2Fom7tFfISdWz0y74NQbj9hXFf6%2BvQX8xz%2BbUFi7eqQ5Vn8QcoJs9xDSzldAXuDkf%2FVEW65qV7AwUifVF2WcW2SbXMmb4LfT3QHr5SAhf7JehIHL8cohxKJrC5zSyjNqwWuGMWYue2kp%2FD2BFHkCGUFBbpeX5mj5ljs%2FVD5pfdkT21OoYKNzj%2FTj2ppIt60prrJXB%2Fodf6PYrG1XRGAGH5z2dInOJyXqFekN%2B2ZKo6YD0oNFbtMKzI5b0GOqUB8o07p2y%2Bd9tguOieJQ%2B6ijTrvDiDYh3WheoVbJtiVn6QUhhWfkvsiDk%2BrcL%2BXrn22jWlrbKimKOv9iDs2rP%2BJ4KZBWtcTEXpzrHRQ6DNY5CsCT7NAAKIWRffDqbyJjK0PEnV%2B6AHLvK1vsY6cTyNISHo5xxbJWck9p%2Bi5Nzye0N6NdxVgr1GZ0XnLdTPOgNzaklAJcIcooyiapBtAeNEWwH1hzyK&X-Amz-Signature=08d849e27fc61d5f0de96b8119aaec7e2ffe09e22d7504d6c8dc044a19523027&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEXL37W7%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T070610Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFqAS1LBNLJYbgpI3leKbW%2F6AcNxn%2BMeO8obpkDZ2wCkAiEAkpQ2fq85jrRqO7UW8jU%2FFZTReRULNZI4MC7YBZty2D8qiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBURyJL37bmArIOKKyrcA7BSs%2BtA2kXagkdIGS6VeJelBtYG%2FxfMiwgswZLb%2FXQcaj7SUkpm%2BTaTFjnv9NihFXIMGPGjjUvzhRVwpWZVk8oIVvELaH828ALhbEazPdMOkxfV6nuHvWV8aEyd%2BClROiwcvrxXOm%2FgyAA0EIqxxbWDtS4K0Yb8%2BclwsVqA9%2Ft2o16iTseN%2FP7v2dftgnCM7z0OVFAiivXO9oXgUWXslkbJMtiypmVnxh4NANaCUhqxLlHr5uBjpH%2F8tTGWRahUDHcZc2N%2BhqE6fnLOhXAWqBkmuYX08PG33yJdzDiwDdknZ3GQbQZRi8GIOqGwwDY0qKxk7DO84E5F3ImcBMbkCMzTi%2FUAO53Vto8JbCYs92DcyzKpyhaOrSXyEEm%2F621y9Bhs3%2BeW5hb%2Fom7tFfISdWz0y74NQbj9hXFf6%2BvQX8xz%2BbUFi7eqQ5Vn8QcoJs9xDSzldAXuDkf%2FVEW65qV7AwUifVF2WcW2SbXMmb4LfT3QHr5SAhf7JehIHL8cohxKJrC5zSyjNqwWuGMWYue2kp%2FD2BFHkCGUFBbpeX5mj5ljs%2FVD5pfdkT21OoYKNzj%2FTj2ppIt60prrJXB%2Fodf6PYrG1XRGAGH5z2dInOJyXqFekN%2B2ZKo6YD0oNFbtMKzI5b0GOqUB8o07p2y%2Bd9tguOieJQ%2B6ijTrvDiDYh3WheoVbJtiVn6QUhhWfkvsiDk%2BrcL%2BXrn22jWlrbKimKOv9iDs2rP%2BJ4KZBWtcTEXpzrHRQ6DNY5CsCT7NAAKIWRffDqbyJjK0PEnV%2B6AHLvK1vsY6cTyNISHo5xxbJWck9p%2Bi5Nzye0N6NdxVgr1GZ0XnLdTPOgNzaklAJcIcooyiapBtAeNEWwH1hzyK&X-Amz-Signature=ede3e1129830d0ebe3b560cd500271b5511c7048f9f60f2b307271ec757083fd&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
