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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627NINCTC%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T081051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIE7AUP0TsjDDgWIoajeJJuTrKznJ9XfWZAOdWymAezwCAiA%2BSdvJh6DePC0x11Wtn6dLm5Of4hzskR6YK6F%2BnHkp4Sr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMehSRaq2spgfeTUA3KtwDm%2BnOLZ3JXoyHbxpms2AGPa%2Fizdg3hV6PEww2F73j9qx3D9x1ggrK4Rv%2FA0DqkYHvtx3VS37Do5gKaH8RnGJgg6t7uwb2mrpvNzQKw1zI4miX8f%2BNUtoHeJldlKNebLs6NJ%2BPXZeOr%2BgWRumVDugp3ufIJbBdUi53wWI5Nm28LOFDZxLiw7Z1Jlf0YWeHwdW5u6t3kZZaKA6El6%2FbByg4ePB0nGLl7VkvJgEy%2B4%2BXio9A2a8D5HQg%2FASVXVJ79%2Bft%2FrgbrY3uZBO7dV0mSEeGpU%2BCBda1Xf6SL2H7RcOJqcv9ZmrIUBwCC217WLrddHyzw8pbeTQT8Aaxq30InsYXQLzOun9n%2B6DD8wUTqZBzRQeUxnACdQFRdq2YUm9N11Hf3s%2FFn%2FY2sIKslQxymwwq9kYA6DUDXbxVaUpfEKQPHf%2FhSRi8OCjFWjrnRBKuz8Gs1Qvp1o0Hn9hUhpA4T7qmWA7wD%2FS01yTTJBrKXr2GdQER2PDG0%2BCoGa9X9Bk9dnk6xW0Z1UxCdD5w7x%2BpmNpgXWSxW7W26Fjip7aWsvkhC6PGhO4jTQQS8LkCK%2FHhQspWK0cscLJjGfFTFqSc7Y%2F6j63xjNanOfFes0t7U7nUCFPlaWVPv%2BHRQI0yZp4wmKqjwwY6pgH%2BZC8sz46Pjvd9vIRM%2FnipeRyoBPmbXUaKcxDl9FFJZ8JNSmw01KhbbLXGRzMBeAXqpijsykQ0Yh1IiokmfeN7S3yvUMYO49olk8LgFofRQu6dQIk9%2FChD%2FmWd1Sa40wGZnhkYWlQft0VDrgtT55TxKWi2kBaGCXWkpOvtaPe8e%2BMOzB72dEWXANrsMHzKVxMy0w2dScSnToDbhnw5fuY0GBPJbkWg&X-Amz-Signature=2b0f19dd9a89c6d6de63484ac8123afbae131dea39721e28159113015982b8f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627NINCTC%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T081051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIE7AUP0TsjDDgWIoajeJJuTrKznJ9XfWZAOdWymAezwCAiA%2BSdvJh6DePC0x11Wtn6dLm5Of4hzskR6YK6F%2BnHkp4Sr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMehSRaq2spgfeTUA3KtwDm%2BnOLZ3JXoyHbxpms2AGPa%2Fizdg3hV6PEww2F73j9qx3D9x1ggrK4Rv%2FA0DqkYHvtx3VS37Do5gKaH8RnGJgg6t7uwb2mrpvNzQKw1zI4miX8f%2BNUtoHeJldlKNebLs6NJ%2BPXZeOr%2BgWRumVDugp3ufIJbBdUi53wWI5Nm28LOFDZxLiw7Z1Jlf0YWeHwdW5u6t3kZZaKA6El6%2FbByg4ePB0nGLl7VkvJgEy%2B4%2BXio9A2a8D5HQg%2FASVXVJ79%2Bft%2FrgbrY3uZBO7dV0mSEeGpU%2BCBda1Xf6SL2H7RcOJqcv9ZmrIUBwCC217WLrddHyzw8pbeTQT8Aaxq30InsYXQLzOun9n%2B6DD8wUTqZBzRQeUxnACdQFRdq2YUm9N11Hf3s%2FFn%2FY2sIKslQxymwwq9kYA6DUDXbxVaUpfEKQPHf%2FhSRi8OCjFWjrnRBKuz8Gs1Qvp1o0Hn9hUhpA4T7qmWA7wD%2FS01yTTJBrKXr2GdQER2PDG0%2BCoGa9X9Bk9dnk6xW0Z1UxCdD5w7x%2BpmNpgXWSxW7W26Fjip7aWsvkhC6PGhO4jTQQS8LkCK%2FHhQspWK0cscLJjGfFTFqSc7Y%2F6j63xjNanOfFes0t7U7nUCFPlaWVPv%2BHRQI0yZp4wmKqjwwY6pgH%2BZC8sz46Pjvd9vIRM%2FnipeRyoBPmbXUaKcxDl9FFJZ8JNSmw01KhbbLXGRzMBeAXqpijsykQ0Yh1IiokmfeN7S3yvUMYO49olk8LgFofRQu6dQIk9%2FChD%2FmWd1Sa40wGZnhkYWlQft0VDrgtT55TxKWi2kBaGCXWkpOvtaPe8e%2BMOzB72dEWXANrsMHzKVxMy0w2dScSnToDbhnw5fuY0GBPJbkWg&X-Amz-Signature=9e092b59c05fa711293c4d41085500d7a3eee28852a6711b2d7ca4b8922d87de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
