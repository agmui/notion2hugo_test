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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HHGKAOP%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T060930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIQDw0VN7lkrgjSCjN%2BWazd3hENFS3urZmWR2EosKnOoq%2FwIgUc7j67zxPGOFl2hJ2CFEkP46aVfiHmymPs%2FCpITFRZkq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDBlvVSTi3Lw0amUAcCrcA0jXWre90gc8v3iBdMkcLzBMjdlGCaMFkuGEu0SKcSqrBgcdvFYeaxILVyNYQlQLtdsxMMLZ4TQth23nhbETIfQADxvGhMIfBvOJ4hCapO%2FJyzWZUZKRkZmzk4tPD5w2kMUQsCFCGjJspgeuFxVOMGjX2EwHgoN5x1Do45VPiwWIP94QSKXryAGzSZj7qQnVQBZcWPUrYFihSxppVSU0AlXpCKSFkb%2FiXsAghZmqX%2FzcHGS6tkPoQegIdJe9e4azTDFgKwZFw69WuMxuFG2tE1PTgdHUQ56FCoErvT6M%2FeWENNN9WIZmpbpAf7TGX51yrin9XrltZn9TueNSyclCloS0xcsFYM%2BbZ0hl2t0kytPgvjXGEQ9CMPej8tlABkJjd4eMFGmGKMFBeqMKkOpr6MSzEVuBDYRMJLKXswniOkXCUGiyZlijB7BkWJeJe9DlIpL82V8ZVaquGTrRfYL4gMyG3O3A7QftHmY81I7L9EsskTXAPJ%2BWrXlLz6oh%2F04a3GMMt6Cal4kafKaD7I0LFV4oZr5c1pLYu2wGDdpFSXiSsWK6p7XqShv4P49fkcKv%2BGUYeucuJoBV6O0mabcs1l1YnEVhwouILa0Wh%2B%2B58iyoIpzUA%2BlvTBJsDpw1MNrMwL0GOqUBB8Twx3GQm0ZF9%2FbnDx4O9vPDEfT0d1FIX3uUhx%2FgEAkX3ddRbq%2F5v9crG8hzRIkXc05XTywsfE58tZ3jaoLMsPh9WUFu1B0xSeBMcMuPhoNgxH6avaIEkw9OhMZapY24Y2VXrVYRNRJKDQ4RKblHiTdn6CUHX1EhRqPnhHXodX%2FYP2xotgbtjlvAyUtUzU0xpVzkqbnARgMB%2FIJAlbimcQ7g%2FnWo&X-Amz-Signature=4f0cc5359fc949ad540d61ca11bc064639ef3c0318ffa93ece10ec24db08061a&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HHGKAOP%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T060930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIQDw0VN7lkrgjSCjN%2BWazd3hENFS3urZmWR2EosKnOoq%2FwIgUc7j67zxPGOFl2hJ2CFEkP46aVfiHmymPs%2FCpITFRZkq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDBlvVSTi3Lw0amUAcCrcA0jXWre90gc8v3iBdMkcLzBMjdlGCaMFkuGEu0SKcSqrBgcdvFYeaxILVyNYQlQLtdsxMMLZ4TQth23nhbETIfQADxvGhMIfBvOJ4hCapO%2FJyzWZUZKRkZmzk4tPD5w2kMUQsCFCGjJspgeuFxVOMGjX2EwHgoN5x1Do45VPiwWIP94QSKXryAGzSZj7qQnVQBZcWPUrYFihSxppVSU0AlXpCKSFkb%2FiXsAghZmqX%2FzcHGS6tkPoQegIdJe9e4azTDFgKwZFw69WuMxuFG2tE1PTgdHUQ56FCoErvT6M%2FeWENNN9WIZmpbpAf7TGX51yrin9XrltZn9TueNSyclCloS0xcsFYM%2BbZ0hl2t0kytPgvjXGEQ9CMPej8tlABkJjd4eMFGmGKMFBeqMKkOpr6MSzEVuBDYRMJLKXswniOkXCUGiyZlijB7BkWJeJe9DlIpL82V8ZVaquGTrRfYL4gMyG3O3A7QftHmY81I7L9EsskTXAPJ%2BWrXlLz6oh%2F04a3GMMt6Cal4kafKaD7I0LFV4oZr5c1pLYu2wGDdpFSXiSsWK6p7XqShv4P49fkcKv%2BGUYeucuJoBV6O0mabcs1l1YnEVhwouILa0Wh%2B%2B58iyoIpzUA%2BlvTBJsDpw1MNrMwL0GOqUBB8Twx3GQm0ZF9%2FbnDx4O9vPDEfT0d1FIX3uUhx%2FgEAkX3ddRbq%2F5v9crG8hzRIkXc05XTywsfE58tZ3jaoLMsPh9WUFu1B0xSeBMcMuPhoNgxH6avaIEkw9OhMZapY24Y2VXrVYRNRJKDQ4RKblHiTdn6CUHX1EhRqPnhHXodX%2FYP2xotgbtjlvAyUtUzU0xpVzkqbnARgMB%2FIJAlbimcQ7g%2FnWo&X-Amz-Signature=05ab9558736e1af83f1064d50953fd25e9e5a728ae44131a44fe0afd4fd7c798&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
