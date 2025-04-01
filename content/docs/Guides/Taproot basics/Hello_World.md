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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SFAKL5M%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T033553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIHiOmh4z4uDrHlkw%2FqacdwvPpuwM2mfEkfSxc3sYOorCAiEAghImIp2y0tCu6LFvadG3lCX5efddnmFO6OdU5SxH4ugqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDItyc5CSFcyAYg1KKSrcA%2FjhcbfkOSqmfhSvbmBxel6MUICI4AyLgkZmMId19pmePhLbBlM1AD%2FWdZMfT4VWjIea28Zw%2Brb%2FsNLFuNeBEPtRmCZN3A5DRKJavahuJxmhAmCFuSatIXXFkougGkXibMuOTnnSHnZjWtao1n3U229cFVdqWB5208Mu26rCXXad3TbCwpNC8QIsrnLSTOuWQxuBJ%2F5w0DeODd7ZvejA7i72vID2T6WkmTc%2FGZYrngaAqFdCanAYOst0eyXvwo19akpd2ZcSYZdAvYgHCaBedca5wY6P6Em0qTzdIXSi%2FdH9WSlCASmvfwPrPvD1Unk5EJuSbcFeGVCt4jY0LkZ9HDb7P1xKzj3HxjiRM%2FPeCnP96NEN5T5WxW24RcQsT5ShieH2LXcg5nOr89jsbWbkbNnB1%2Bw8Mdb1mT92LEVrhyHZVQz3VwEDc0Exf%2F15K2xOSCUZ3kbL1TrNJL%2FtyeLhW5jEJJR8Z0594gJ4Eshxew4sQNffiTu4jabV5JYepWD%2BkQEiT4KlkiBityAnVU62pXNiVsJwzyxQoRvEqh94VPny%2FbXb9XpGgxR1%2FMMFg4VlOw%2BKxs3MD2t3kSnnW2IdCDyck20POQEREwvusO2evRIB0JmE%2BL1zchV6GZZ3MLukrb8GOqUBRmD6iOoUgd7lqkQ0uogiMSH80veRo4AYz78S4Ry0ZzRI7bfkkvopFBzuf%2FBYaHhBz2xmYleARIagsfv%2F61jmuEvhYqv3oPlSNqZGK88%2BxSPk5XXLFfiwKSP8RvrYeBqnzRH3KfjyH5cdg4xX7m2WPFKvvSIa4YaECTTWPw8U4F0sz5%2BWQKQYedbeEfs0EJBhkqn7IVAiHVynrE%2BuTA7FDWcfl6hF&X-Amz-Signature=e1217e2fcd7a9a2d4298d4601f383728c3b2e190a84904a3e001f5ac82fac875&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SFAKL5M%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T033553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIHiOmh4z4uDrHlkw%2FqacdwvPpuwM2mfEkfSxc3sYOorCAiEAghImIp2y0tCu6LFvadG3lCX5efddnmFO6OdU5SxH4ugqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDItyc5CSFcyAYg1KKSrcA%2FjhcbfkOSqmfhSvbmBxel6MUICI4AyLgkZmMId19pmePhLbBlM1AD%2FWdZMfT4VWjIea28Zw%2Brb%2FsNLFuNeBEPtRmCZN3A5DRKJavahuJxmhAmCFuSatIXXFkougGkXibMuOTnnSHnZjWtao1n3U229cFVdqWB5208Mu26rCXXad3TbCwpNC8QIsrnLSTOuWQxuBJ%2F5w0DeODd7ZvejA7i72vID2T6WkmTc%2FGZYrngaAqFdCanAYOst0eyXvwo19akpd2ZcSYZdAvYgHCaBedca5wY6P6Em0qTzdIXSi%2FdH9WSlCASmvfwPrPvD1Unk5EJuSbcFeGVCt4jY0LkZ9HDb7P1xKzj3HxjiRM%2FPeCnP96NEN5T5WxW24RcQsT5ShieH2LXcg5nOr89jsbWbkbNnB1%2Bw8Mdb1mT92LEVrhyHZVQz3VwEDc0Exf%2F15K2xOSCUZ3kbL1TrNJL%2FtyeLhW5jEJJR8Z0594gJ4Eshxew4sQNffiTu4jabV5JYepWD%2BkQEiT4KlkiBityAnVU62pXNiVsJwzyxQoRvEqh94VPny%2FbXb9XpGgxR1%2FMMFg4VlOw%2BKxs3MD2t3kSnnW2IdCDyck20POQEREwvusO2evRIB0JmE%2BL1zchV6GZZ3MLukrb8GOqUBRmD6iOoUgd7lqkQ0uogiMSH80veRo4AYz78S4Ry0ZzRI7bfkkvopFBzuf%2FBYaHhBz2xmYleARIagsfv%2F61jmuEvhYqv3oPlSNqZGK88%2BxSPk5XXLFfiwKSP8RvrYeBqnzRH3KfjyH5cdg4xX7m2WPFKvvSIa4YaECTTWPw8U4F0sz5%2BWQKQYedbeEfs0EJBhkqn7IVAiHVynrE%2BuTA7FDWcfl6hF&X-Amz-Signature=486db7ab819af3e1995dabcea0681f92289f49d111cf731ca4058fbe39ac9408&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
