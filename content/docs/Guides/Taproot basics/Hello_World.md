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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USFKSA7C%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T140906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCkkL1%2BcmOWYyz0bsjBYUeYpWpoSSbRnVHhJZzRuenTtgIhALNU0Hw77R1WPxv9io5EptIAlir5P0jLkooFL1HWTr4pKogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyqt13mTzWCJUicY5Qq3AMEvuGgZ%2Fu6FqkAF5A2Tyz21vUI9ipFqep%2BJJ14kQRoqcwAMKBTYjnZTvEnxUym9slM6G67fm7uKHRvywfpNJhbL27Huk%2BcBGJu%2F9i%2F9QmecWTc2hW1PpcjH0hdoPh8l1Tp8ThJ%2F5IKKMsD7AOetF3sGX7%2B88uwQQ3rjnSnPGOPP3KVubbxpyVctNEZ%2FiZSnssYNqKTdZvRcnXOqj6qksOT5JeQROfUcF1mRSG%2FkACw8RlzxPQ5QJgqqVFb7UGUaxCN%2F7%2B8LZZ5efmtvtaG5CJSqHcEdnlqE1i56tebo6UR3b256W3wWOitBWcc8FvukLkw1XdLj7HAdMGkrRghrwBYq%2BcqCvistZYHF90VIjTsarBqQQDDRe%2FtYc%2F1msltnNcVN9dxYFC7VwLfz%2FeypONYLqh0BZ0GEid5Limqoy6WzGfxVJW0Bp36hZWSEm40NZp9w5BccNjQWOKf8QtFKwosDMPT1gGIcCw09rmJ%2F5gTC8ql18GyvfYHHUYlxBAcGwLxEBFt%2Fyu%2FE%2BCa4rAbozd3a9snUv6j%2F7xWBS18NBB3K86XWdZLdbASfZMOyiTardtfTv5MHTVoRnr4pnvyivr75whkSJRAcHH814RMue5FS4wuJhb%2Bh4a6WVUmqDC688rCBjqkAVs5T26MrKM8%2BIF9EJX1j5zQ4%2FAJZaXyt06OaDRPfRMW9u8fZdQtInvCzsPIvRo8%2Fn5scWT4SNIPRXC1DLI1FU9%2FbNooH5CWqso4Lt%2F6GJSc0pm1OctjBz3rFZvZFlmE%2FXrZGMuL44qDlvHAclhanilHsmDWmus3C6OasxrTOMTCv6Cf2fPyhivYgfv%2BqnHODc7usqk7bfRWR6DyNprr9S3Vxh59&X-Amz-Signature=5d385f5c73938d6e0c2b368ac6dcd12980929dae1ccaf63c83df470a219c53b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USFKSA7C%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T140906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCkkL1%2BcmOWYyz0bsjBYUeYpWpoSSbRnVHhJZzRuenTtgIhALNU0Hw77R1WPxv9io5EptIAlir5P0jLkooFL1HWTr4pKogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyqt13mTzWCJUicY5Qq3AMEvuGgZ%2Fu6FqkAF5A2Tyz21vUI9ipFqep%2BJJ14kQRoqcwAMKBTYjnZTvEnxUym9slM6G67fm7uKHRvywfpNJhbL27Huk%2BcBGJu%2F9i%2F9QmecWTc2hW1PpcjH0hdoPh8l1Tp8ThJ%2F5IKKMsD7AOetF3sGX7%2B88uwQQ3rjnSnPGOPP3KVubbxpyVctNEZ%2FiZSnssYNqKTdZvRcnXOqj6qksOT5JeQROfUcF1mRSG%2FkACw8RlzxPQ5QJgqqVFb7UGUaxCN%2F7%2B8LZZ5efmtvtaG5CJSqHcEdnlqE1i56tebo6UR3b256W3wWOitBWcc8FvukLkw1XdLj7HAdMGkrRghrwBYq%2BcqCvistZYHF90VIjTsarBqQQDDRe%2FtYc%2F1msltnNcVN9dxYFC7VwLfz%2FeypONYLqh0BZ0GEid5Limqoy6WzGfxVJW0Bp36hZWSEm40NZp9w5BccNjQWOKf8QtFKwosDMPT1gGIcCw09rmJ%2F5gTC8ql18GyvfYHHUYlxBAcGwLxEBFt%2Fyu%2FE%2BCa4rAbozd3a9snUv6j%2F7xWBS18NBB3K86XWdZLdbASfZMOyiTardtfTv5MHTVoRnr4pnvyivr75whkSJRAcHH814RMue5FS4wuJhb%2Bh4a6WVUmqDC688rCBjqkAVs5T26MrKM8%2BIF9EJX1j5zQ4%2FAJZaXyt06OaDRPfRMW9u8fZdQtInvCzsPIvRo8%2Fn5scWT4SNIPRXC1DLI1FU9%2FbNooH5CWqso4Lt%2F6GJSc0pm1OctjBz3rFZvZFlmE%2FXrZGMuL44qDlvHAclhanilHsmDWmus3C6OasxrTOMTCv6Cf2fPyhivYgfv%2BqnHODc7usqk7bfRWR6DyNprr9S3Vxh59&X-Amz-Signature=a69ff614b71b25a58d6ab223d44203ea087f36e49f58d36fda9573a1c7b176f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
