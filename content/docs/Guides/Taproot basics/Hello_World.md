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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5A42Q7H%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T140840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDZlpdYjkdiIXeZQc9S4yA50jvWxAgSwwet2P8L9ADfawIhAN17xSNvEKBuJ2EQD7mNNHifiXMOu0D3HxB%2F6%2Br2s9cPKv8DCC8QABoMNjM3NDIzMTgzODA1IgyhYB3wvteD02dcim4q3ANvroSL9uw7jrj7nnf%2FAaFm6mtAICpg3NO3czLFn0pFzNg8vgcRdzsbnNyaiosySfrwoGU31FYwdbJbqkoyhcbqiSgzH4Bp8dGksJE1VknSJvzcS4i5kVgQoIagBXiLBKBmLwg5SYVHd4NJo5HDDz28IM6J6FisFvbzG%2BQYWc1uZaNZJzxuwVzpZ6blRXCn6JjUfiAE0isGSFZJSAqZGN5T8RuhLe1qEGnc%2FwbyZDpgMlZUCYa6RPteK6m9u7OgzyzgfvBFpii2JF86H2D1QoaTUhIPgxKOnEwQLGBFX8kcJLZrUHyiJq5r52emv3Gs4Eu1eG3pgfQ3P9hyYqwJEcZL2954obsTZyrFCEa3rrl%2Be4IXK%2BL6X%2FjkVg9PhgjibOhn3ksx2yCCP9QdDuCFrCnH38I8FDxu6iN9DBWILdE5CsuamdFfeNdHzlIKjPZWXGZh5SynT54xtyk47QJIXWHI6ngOI%2FrLViEcBZ1FqIJVzjQVjdzjTDKl6BcQ4CgNgZ38nnByGGrQtcziCWK%2BaAZwMFCOOo7Ui6qJmU2wHqLrpx73yQ6q2zYhXuXzoM2wmNnPgkkLs6nzk%2BFkyspr1JYzb38v5rtYNPKxX4xjmz8I2M0lMDsv%2BC2%2F0V6txzDw%2FuLABjqkAfBQ9wzS%2BsLrE%2B41krSKId1rduXxvI5UWkhM9pLHrI1G9fMNrLZpUfKMsOySJ9se9OOq4iMR1S6UAOxkrSq6zqazZ0UDRESXf%2BFsZzLjkgbTBEVXPdB5XhmQKkO2t3XrIP3OBTbJs5LXeLxYJ4GldDiOPSCJ6uImAQddXTRcpf4zbOIYSmsdpFEJpFCcrcLHNlq0vfs0rDP5JlJCQ6KszgkWLtNO&X-Amz-Signature=a009f01a216af319d83a474ebefcc805e2979e03a7d7c38886e821e0625ec9cb&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5A42Q7H%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T140840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDZlpdYjkdiIXeZQc9S4yA50jvWxAgSwwet2P8L9ADfawIhAN17xSNvEKBuJ2EQD7mNNHifiXMOu0D3HxB%2F6%2Br2s9cPKv8DCC8QABoMNjM3NDIzMTgzODA1IgyhYB3wvteD02dcim4q3ANvroSL9uw7jrj7nnf%2FAaFm6mtAICpg3NO3czLFn0pFzNg8vgcRdzsbnNyaiosySfrwoGU31FYwdbJbqkoyhcbqiSgzH4Bp8dGksJE1VknSJvzcS4i5kVgQoIagBXiLBKBmLwg5SYVHd4NJo5HDDz28IM6J6FisFvbzG%2BQYWc1uZaNZJzxuwVzpZ6blRXCn6JjUfiAE0isGSFZJSAqZGN5T8RuhLe1qEGnc%2FwbyZDpgMlZUCYa6RPteK6m9u7OgzyzgfvBFpii2JF86H2D1QoaTUhIPgxKOnEwQLGBFX8kcJLZrUHyiJq5r52emv3Gs4Eu1eG3pgfQ3P9hyYqwJEcZL2954obsTZyrFCEa3rrl%2Be4IXK%2BL6X%2FjkVg9PhgjibOhn3ksx2yCCP9QdDuCFrCnH38I8FDxu6iN9DBWILdE5CsuamdFfeNdHzlIKjPZWXGZh5SynT54xtyk47QJIXWHI6ngOI%2FrLViEcBZ1FqIJVzjQVjdzjTDKl6BcQ4CgNgZ38nnByGGrQtcziCWK%2BaAZwMFCOOo7Ui6qJmU2wHqLrpx73yQ6q2zYhXuXzoM2wmNnPgkkLs6nzk%2BFkyspr1JYzb38v5rtYNPKxX4xjmz8I2M0lMDsv%2BC2%2F0V6txzDw%2FuLABjqkAfBQ9wzS%2BsLrE%2B41krSKId1rduXxvI5UWkhM9pLHrI1G9fMNrLZpUfKMsOySJ9se9OOq4iMR1S6UAOxkrSq6zqazZ0UDRESXf%2BFsZzLjkgbTBEVXPdB5XhmQKkO2t3XrIP3OBTbJs5LXeLxYJ4GldDiOPSCJ6uImAQddXTRcpf4zbOIYSmsdpFEJpFCcrcLHNlq0vfs0rDP5JlJCQ6KszgkWLtNO&X-Amz-Signature=e4772adf65f58ca394f9f787e3bfa8562250b339b0343ff953a765a857c659d3&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
