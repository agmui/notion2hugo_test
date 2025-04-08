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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6IZ3EHX%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T041023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFyFGXO9qv2HznseSZNR9NJuyVs8pnYrrkKyEAFw7oMsAiA%2Fwuuo0cHlZdMFL9rHdvvK0vGRvnBrr89GL69G%2BYGVpir%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMXCCWm%2B8IUxcL7FAeKtwDpS1R%2FSb5fK6B0Hw5LIm0wSb%2FyRyoeMmLZaONV82MeI91uACl5FX77Y%2FXiGd9yxb4h%2FJ2kIlFiurJoTulVgE1yRb5OUYCqqWyUlYxpsbGZrV1QlK7hqP8K0%2FCloYeBiYIOoMUqhT3AE%2BUC36SvXSAjUON77%2F7XvgGYcD8kYBu0LjzWLpi9yWdGhIVfJYhY9GeWQrD5cmWOaDde%2F24DG5PRHvQr23MWVwJW0eKmDkra6E2G%2FnL7%2FTGhcJzMpRKVKNFJOdHoQ%2FQ7ByUMwpave835JfSaMD%2Fyx3NNgjEgtr4gf9H43AogiyOX22dOwex7R0rf7Z%2FGz7vnSDv5mqFCSRjDzUHjgFK7yyyDmnP5jZq0H5j%2BTVBL3CGzQtCM7e1WDF64OMrEzEQNyLaf8kmBNOXmCZcpopTfdjvMzMCNXr0qYCLyf%2FC26Q%2F2HF%2FQ3So7uz%2FXFpEFf4BnBb%2BkcXxXac9p8Y8SZikWsTf%2F6v%2BmblIuMDe1c9aq%2FtGf%2FLBGicGQmst6YzB0RTRwOcOizsfrbk%2FEmkLs1xBpSus6HcFGZYfVb7cVbZ9vlxgkV3Tn6yZFWBvLe2q0FQ8deqiw2FS0HcuZ4KZcY9a1jQ7jYCPz82wHc3gVTKG2y%2FY4TTePMQw%2BrjSvwY6pgHhMLyV3tHdr%2FpGmK6B9Whlvmg%2FNbZMnpgIyNXBlTwiXdo1eR8XCqjUgcF9B4YzGUDBx5bAcUllLxhJpgRS5b3mElfCG8Y0DQwGkCf4KyrYeAlpZKIAfohckv4WKIvpozp8qD8WAlq%2BYo2hoqHPX8H%2FCczF0CFJg3hBnCqZ8zORhf7Ze2mDo41VMKvcpaYnFerft5mjE%2FEbtSG6Ctl%2BvdgXG4q5VHPk&X-Amz-Signature=536553d2a061d2edd76f4c46c52c74143f016b07b716e3c8209f2ae18cdbcc94&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6IZ3EHX%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T041023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFyFGXO9qv2HznseSZNR9NJuyVs8pnYrrkKyEAFw7oMsAiA%2Fwuuo0cHlZdMFL9rHdvvK0vGRvnBrr89GL69G%2BYGVpir%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMXCCWm%2B8IUxcL7FAeKtwDpS1R%2FSb5fK6B0Hw5LIm0wSb%2FyRyoeMmLZaONV82MeI91uACl5FX77Y%2FXiGd9yxb4h%2FJ2kIlFiurJoTulVgE1yRb5OUYCqqWyUlYxpsbGZrV1QlK7hqP8K0%2FCloYeBiYIOoMUqhT3AE%2BUC36SvXSAjUON77%2F7XvgGYcD8kYBu0LjzWLpi9yWdGhIVfJYhY9GeWQrD5cmWOaDde%2F24DG5PRHvQr23MWVwJW0eKmDkra6E2G%2FnL7%2FTGhcJzMpRKVKNFJOdHoQ%2FQ7ByUMwpave835JfSaMD%2Fyx3NNgjEgtr4gf9H43AogiyOX22dOwex7R0rf7Z%2FGz7vnSDv5mqFCSRjDzUHjgFK7yyyDmnP5jZq0H5j%2BTVBL3CGzQtCM7e1WDF64OMrEzEQNyLaf8kmBNOXmCZcpopTfdjvMzMCNXr0qYCLyf%2FC26Q%2F2HF%2FQ3So7uz%2FXFpEFf4BnBb%2BkcXxXac9p8Y8SZikWsTf%2F6v%2BmblIuMDe1c9aq%2FtGf%2FLBGicGQmst6YzB0RTRwOcOizsfrbk%2FEmkLs1xBpSus6HcFGZYfVb7cVbZ9vlxgkV3Tn6yZFWBvLe2q0FQ8deqiw2FS0HcuZ4KZcY9a1jQ7jYCPz82wHc3gVTKG2y%2FY4TTePMQw%2BrjSvwY6pgHhMLyV3tHdr%2FpGmK6B9Whlvmg%2FNbZMnpgIyNXBlTwiXdo1eR8XCqjUgcF9B4YzGUDBx5bAcUllLxhJpgRS5b3mElfCG8Y0DQwGkCf4KyrYeAlpZKIAfohckv4WKIvpozp8qD8WAlq%2BYo2hoqHPX8H%2FCczF0CFJg3hBnCqZ8zORhf7Ze2mDo41VMKvcpaYnFerft5mjE%2FEbtSG6Ctl%2BvdgXG4q5VHPk&X-Amz-Signature=6d9877832863bf19b1913763f5a6271f7a9466bd6fbc91dafbd5a0e28e603637&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
