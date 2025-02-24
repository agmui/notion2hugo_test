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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCZHTGTO%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T190157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBFAYMTn6Q59URBzypLhdjMrZ86g3s5%2BS8Ss9ln4eCXmAiAsRldwv1YJZB2ygvw51T%2B0yWbYggs13Yyr3ogoIIWZ%2FSr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMXhyftBFOHa2MypNjKtwDK%2F0KSMsj9tiGUkiff9skbTsqVIghLImq27OR6fjdDpVFGu6bvHS1jtE8SRzix1%2BdOnZ%2B8HqiGzMz2mZB20%2FvIqnHYxTxLwXJtWTQDKPQNtnC9hAC0b%2FHcFGVl9i0ht0r2UyaQMRjpU623Y7b44nj1ZYziSzwEH5rdd4MhqjhPHse48v94N6TdFAXwx0x%2Bxy4I5TXJWxhvUy1%2BqF4QEm%2Fw00PnfeNZNTeGMLpjy4b%2F3Bpr4fiQCWtXn65lNfWvpLrs%2FdQs6n%2BB3pkkdsObkP6CAgqmEeUNVpGfo%2FiYKUgc%2FEuXncar0WZxev9PZKyW2mjLboLEXqGP%2Bivv0OlqMRLqC11l3BX7%2F2nkrMnebMOCBpGG3YZb6i6ubt%2BwdT20Obw8yZnA0w2K45ltfDzO9xDwNdPzVJ2gm%2FLKGdMYKoX13kI9sG%2FKO%2FfGu8LhIWknevQX7FqzWtvBZlJFmIXIqPqivQ668B1z2m1TKzdjucJ5kyjP6a79pEWuAUFC%2B9JdZsxAMFiAP2gaF0AFnw7FrziQ11hKQ%2BjFtQnn33Y667l825MEQMuGbc2ZuNEUhJ8UKMC8EJHXcUqTBqSQlFoc%2FrNpedb9pAfCvD%2FzKgew%2FoAOfsFREypHW39JJLhB8Uwh%2F3yvQY6pgH5i2oNP4Uzd1JRTyIawaSP21oYSf60g15Ez2mfThTxFwLcYfrORwEZs3t9FTlJ108YRnLiyZrjWaGTWj%2BODbmlJmHEUESHLyJA4c3Mq0QVspZQGqT6QM6MtptVnhPC0aBvp6b8FkBSti%2Bs5tNF5sThty8RuloDE%2B4BizgTGKf42se7EDi3rEIE6PHhidDVYyvpZoN1K%2BdPWOJ33KROaILE07tr2tE7&X-Amz-Signature=0cb2e32b79336fe1935e711a51a611a7107bb6937c56efbe1c7060bb7b914fd5&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCZHTGTO%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T190157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBFAYMTn6Q59URBzypLhdjMrZ86g3s5%2BS8Ss9ln4eCXmAiAsRldwv1YJZB2ygvw51T%2B0yWbYggs13Yyr3ogoIIWZ%2FSr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMXhyftBFOHa2MypNjKtwDK%2F0KSMsj9tiGUkiff9skbTsqVIghLImq27OR6fjdDpVFGu6bvHS1jtE8SRzix1%2BdOnZ%2B8HqiGzMz2mZB20%2FvIqnHYxTxLwXJtWTQDKPQNtnC9hAC0b%2FHcFGVl9i0ht0r2UyaQMRjpU623Y7b44nj1ZYziSzwEH5rdd4MhqjhPHse48v94N6TdFAXwx0x%2Bxy4I5TXJWxhvUy1%2BqF4QEm%2Fw00PnfeNZNTeGMLpjy4b%2F3Bpr4fiQCWtXn65lNfWvpLrs%2FdQs6n%2BB3pkkdsObkP6CAgqmEeUNVpGfo%2FiYKUgc%2FEuXncar0WZxev9PZKyW2mjLboLEXqGP%2Bivv0OlqMRLqC11l3BX7%2F2nkrMnebMOCBpGG3YZb6i6ubt%2BwdT20Obw8yZnA0w2K45ltfDzO9xDwNdPzVJ2gm%2FLKGdMYKoX13kI9sG%2FKO%2FfGu8LhIWknevQX7FqzWtvBZlJFmIXIqPqivQ668B1z2m1TKzdjucJ5kyjP6a79pEWuAUFC%2B9JdZsxAMFiAP2gaF0AFnw7FrziQ11hKQ%2BjFtQnn33Y667l825MEQMuGbc2ZuNEUhJ8UKMC8EJHXcUqTBqSQlFoc%2FrNpedb9pAfCvD%2FzKgew%2FoAOfsFREypHW39JJLhB8Uwh%2F3yvQY6pgH5i2oNP4Uzd1JRTyIawaSP21oYSf60g15Ez2mfThTxFwLcYfrORwEZs3t9FTlJ108YRnLiyZrjWaGTWj%2BODbmlJmHEUESHLyJA4c3Mq0QVspZQGqT6QM6MtptVnhPC0aBvp6b8FkBSti%2Bs5tNF5sThty8RuloDE%2B4BizgTGKf42se7EDi3rEIE6PHhidDVYyvpZoN1K%2BdPWOJ33KROaILE07tr2tE7&X-Amz-Signature=e36a28c099c6e4b3be6260d780fcb74d4c9509d59056a5012822e7279f56a37b&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
