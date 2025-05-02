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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIDRBDWY%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T190656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJIMEYCIQDygdQILySzi5kYSCDWT0boZ7Oax3BebG6T1KY8UjWE%2BgIhAMeBk9IChMYixdJqQyOsrM3GfMJWoYkP%2BaJd1PqXQi8NKogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwfoNc9KDt2CJ5nfcEq3ANWK8Jt%2BuY7yprtyk0FbySQ6NLNzO4kwDvfMfWSh39H%2B9rSXQnXkGudVX82uf0ODlu2%2F%2BShcWxY88qaL8JysBFzXJfzd0uMmC0XNQ7KJ%2Bn8642VR4jtQOtbX4IwFZZ30D1gylVqFDnhTk8JQooDjVq0Ch7GSE2PaoxSwiRhw6Wm3BXlOP3A%2FwGpWEk1TgVvxWxMcFXyOScRiRojMhsE6Dn6NcftvwxTqtDa0InjHKRrGkmVC2z7hKQmLyF4CtCCPOEW5rGxp7ukm3mCFLLE72Cfx6jKBJiQ8kNKMcWvYJCnvLIOxMM7lX18TFH4wJj4jnJ8bZdOI1vyt%2BUcneBtQtEkwD4FYSvYlKfRwT3E1aIlq0kPdwZK6nTXX%2Fvk4jlAIO9UmqW6OFb5zeq%2BTBQRACe5P28wxRbUQHAj9iaSnZdFUrgwjdZbjEMM%2BnMi2Rp3W1lhldbwqgTp5rj3%2FRVNGuAHdnhz01jvTej0Y47muWQGUkfXKm%2B8Vx7CNa8vhK%2F2fE4UKSHHxVaaEKL4ehqaOIK6N4ckbaAja%2Fxdgmh2tdPVrR7TEqYyz0pvXJllU%2BoB10zA%2BgTIJtmJj8Uxhin9NsxCG7cPdRzPhv4GzmM49GO%2FV%2BtsQb%2Bxz8w4s2c18TCM5dPABjqkAZUXWEHduRHZ%2FqQRcr2OubSYEWJeFyMnIVUZ9C3FMzlM8jxNXK%2BD4PU1FPm9GbGLVCm5XrDIJqOAReTKqAWNNS6UUVAUyTVnKj7I0VVcYWDL2v4bXwGeUB9ontGOpE4IMjKq9P%2F7iaTGHMv7ltXCr1XBVxaoqyce6LpOmG2JYE%2FH%2Fiv8WTVkxGzrIyab4Pc8nQlVrt29STEExBr300T15%2BJkSFzC&X-Amz-Signature=c9fb27c134eaeaafd9cd86d2e17840ee011bba15ccf75ddfce9ce80fa3decda2&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIDRBDWY%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T190656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJIMEYCIQDygdQILySzi5kYSCDWT0boZ7Oax3BebG6T1KY8UjWE%2BgIhAMeBk9IChMYixdJqQyOsrM3GfMJWoYkP%2BaJd1PqXQi8NKogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwfoNc9KDt2CJ5nfcEq3ANWK8Jt%2BuY7yprtyk0FbySQ6NLNzO4kwDvfMfWSh39H%2B9rSXQnXkGudVX82uf0ODlu2%2F%2BShcWxY88qaL8JysBFzXJfzd0uMmC0XNQ7KJ%2Bn8642VR4jtQOtbX4IwFZZ30D1gylVqFDnhTk8JQooDjVq0Ch7GSE2PaoxSwiRhw6Wm3BXlOP3A%2FwGpWEk1TgVvxWxMcFXyOScRiRojMhsE6Dn6NcftvwxTqtDa0InjHKRrGkmVC2z7hKQmLyF4CtCCPOEW5rGxp7ukm3mCFLLE72Cfx6jKBJiQ8kNKMcWvYJCnvLIOxMM7lX18TFH4wJj4jnJ8bZdOI1vyt%2BUcneBtQtEkwD4FYSvYlKfRwT3E1aIlq0kPdwZK6nTXX%2Fvk4jlAIO9UmqW6OFb5zeq%2BTBQRACe5P28wxRbUQHAj9iaSnZdFUrgwjdZbjEMM%2BnMi2Rp3W1lhldbwqgTp5rj3%2FRVNGuAHdnhz01jvTej0Y47muWQGUkfXKm%2B8Vx7CNa8vhK%2F2fE4UKSHHxVaaEKL4ehqaOIK6N4ckbaAja%2Fxdgmh2tdPVrR7TEqYyz0pvXJllU%2BoB10zA%2BgTIJtmJj8Uxhin9NsxCG7cPdRzPhv4GzmM49GO%2FV%2BtsQb%2Bxz8w4s2c18TCM5dPABjqkAZUXWEHduRHZ%2FqQRcr2OubSYEWJeFyMnIVUZ9C3FMzlM8jxNXK%2BD4PU1FPm9GbGLVCm5XrDIJqOAReTKqAWNNS6UUVAUyTVnKj7I0VVcYWDL2v4bXwGeUB9ontGOpE4IMjKq9P%2F7iaTGHMv7ltXCr1XBVxaoqyce6LpOmG2JYE%2FH%2Fiv8WTVkxGzrIyab4Pc8nQlVrt29STEExBr300T15%2BJkSFzC&X-Amz-Signature=62ab72cfeb783febd49bf993cb96e6c2abe116fe56fbcc9756ecfbbde1e9a977&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
