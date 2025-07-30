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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XP2GRHZU%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T141132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEfsnK3bqMj11kk4Wpdl2uB23X3tB6VntuDyMl2pj8JMAiBPD%2F%2BW4MNZPLH8C2eV4S6BM1Cghnvj%2BCrGxeUu7rWYySqIBAi%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM97bGYcps7cwvfLrQKtwDTN%2BCIszTdR15RCX0pGMdMr9PyfCEokc%2FbW9NXjsMHVZe16%2FwS35t5ILd%2FggVNydM7LktjXydNHac4PdiUuCL%2FFFjBBvWypkxnezuAqh3ZC3wiZYTO4dHHoc5kHEuBxrgcthQaJZP%2BVmmYf69FcuzBqI7%2F7WJP%2BmnAoj604bdIlLWDKu12CDe6GX3IBW28l5FEHuM6zrfDJiVaxvgtQWc1%2Bax9ZCmP2LtYq9Suopf6IdsMMBg2LXH93In%2FD1xZTLyWznPiDPVCIPC2rpwd6cnREWgEdbordA8FLaOQRmEDrV911HbhDqqWdhwqdDHSLT0VaCQoBxDH%2FB7%2FaBYbYvPwQ0DF%2BcZNw%2FPbDAnOSRsS1fxiOZatZUO4jpeUJ529D9cywuuea9CWvwM0nmpxQyt19lLS7Pi5Bp0fxRbAHP17OL%2BgrZdUVjSt9HMLKh%2F1qvrFbNI7RAgp9K7tWzcD6MnBmL6mvZJMXoWbpE8Qhtak42CiDiH74y7O0v0mVPGgebClhj4u5039%2BRei%2FDAvy1cd1D8U50ztsodIs8NUhsVn9mI8mazF%2Bzk81aFQ%2BruP%2By6yJpm89X%2BLQEmqsoF99ZJWiv0upmgkCVODrFE0s7Td5R8EsM2uMuP07TqKuQwkqOoxAY6pgEvHjGtK3Ja9oz5a%2BLNUk2U71ac7XocSv4PL%2FzP2TD5CfjD%2FM7PXQY0nWrE%2FTCYW%2Bd%2FdCeBGfC9YGZ5XhzWuibYuH39sQ26oAJPBh6NL4cWcovD6rXKkBOJ3hK0IKd5T%2BErIKRPxxGLAQi%2FpnC5bmMMwmmC0AY9a3Pa77viONsbDY2OvJFa6PZZ7XMrD%2BN2EylVk%2FPns7IDhv2csWpngpihkpqFDRqp&X-Amz-Signature=fb6383c54b4ee5ce1041ffda39500ea9ad434803a9e45239fe143ba2b072d8c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XP2GRHZU%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T141132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEfsnK3bqMj11kk4Wpdl2uB23X3tB6VntuDyMl2pj8JMAiBPD%2F%2BW4MNZPLH8C2eV4S6BM1Cghnvj%2BCrGxeUu7rWYySqIBAi%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM97bGYcps7cwvfLrQKtwDTN%2BCIszTdR15RCX0pGMdMr9PyfCEokc%2FbW9NXjsMHVZe16%2FwS35t5ILd%2FggVNydM7LktjXydNHac4PdiUuCL%2FFFjBBvWypkxnezuAqh3ZC3wiZYTO4dHHoc5kHEuBxrgcthQaJZP%2BVmmYf69FcuzBqI7%2F7WJP%2BmnAoj604bdIlLWDKu12CDe6GX3IBW28l5FEHuM6zrfDJiVaxvgtQWc1%2Bax9ZCmP2LtYq9Suopf6IdsMMBg2LXH93In%2FD1xZTLyWznPiDPVCIPC2rpwd6cnREWgEdbordA8FLaOQRmEDrV911HbhDqqWdhwqdDHSLT0VaCQoBxDH%2FB7%2FaBYbYvPwQ0DF%2BcZNw%2FPbDAnOSRsS1fxiOZatZUO4jpeUJ529D9cywuuea9CWvwM0nmpxQyt19lLS7Pi5Bp0fxRbAHP17OL%2BgrZdUVjSt9HMLKh%2F1qvrFbNI7RAgp9K7tWzcD6MnBmL6mvZJMXoWbpE8Qhtak42CiDiH74y7O0v0mVPGgebClhj4u5039%2BRei%2FDAvy1cd1D8U50ztsodIs8NUhsVn9mI8mazF%2Bzk81aFQ%2BruP%2By6yJpm89X%2BLQEmqsoF99ZJWiv0upmgkCVODrFE0s7Td5R8EsM2uMuP07TqKuQwkqOoxAY6pgEvHjGtK3Ja9oz5a%2BLNUk2U71ac7XocSv4PL%2FzP2TD5CfjD%2FM7PXQY0nWrE%2FTCYW%2Bd%2FdCeBGfC9YGZ5XhzWuibYuH39sQ26oAJPBh6NL4cWcovD6rXKkBOJ3hK0IKd5T%2BErIKRPxxGLAQi%2FpnC5bmMMwmmC0AY9a3Pa77viONsbDY2OvJFa6PZZ7XMrD%2BN2EylVk%2FPns7IDhv2csWpngpihkpqFDRqp&X-Amz-Signature=fd37278dd0669ff3c38f2f3c85fe177c2edf113d5bb7a4800413d71e27cbe9d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
