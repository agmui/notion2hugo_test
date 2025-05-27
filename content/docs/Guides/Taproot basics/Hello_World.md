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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R56MSMDX%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T061245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBSgiym0YMnmD%2FWNM42Frj7WxzIyGIqqBL%2BKgKR2lqkRAiBKh6tOnFTZjOPUJNIzDJG%2FDieNI8Amof3%2BTYAMbNoVoyr%2FAwhWEAAaDDYzNzQyMzE4MzgwNSIMw5ovhfaJxkzC2POyKtwDL3xi%2Ft4zV3BTTkpe%2BYTo7TO4IE7auA5GDhhqrKqtrDGWlCgMaTFf6IArizCA38aExuFclBDFe1sG0Owu5hyzWlfWO3xnb5JsSxTJxGa4TQUwGtHYAW78AljWqg1TgIZsjC1DNS%2BxSIng9V5eSAZ0pRbjUxuAdkuvUTZktdg%2BSzpUp79VXWWs7UMBQOkf94cyI14a87Ip4vIQg4yhbVYe%2BD2Jgd%2F%2FEYG6UZ7VJdWtLMZHxICWLf4q%2FfD5gjJEvK0jkUEgHNU%2FnKCjnqNsgFTlpG%2FrUP82EgF4MRAF8rX7sVjJ7vT%2FBhB0nCCHhFiahwY45hX7nJM5DzSYU7Og0WFrsJV5xup8taVtfOO3jIbOcJmi7oTxYE12j%2FnTOdE3DykRnE0fh%2FuEaMTyWAxSE%2FujC43CGEk0vQGRqNSu%2B9o2XuXfUTdzwXfkDrkgwGEeHIwouiMcoek5xn%2FegxqR7jF53sXi89nGkM4boesX5g702%2F7D5bzESdwqSsCPxrGdHRyJ52afiwgGvicceM7pFGRjtFXGQcrbsAEUNh%2B2YSuYHSUy5m9uUBrxXvDza4sZvl%2FwLWLfht8xjJ11xABCrcbxYpOtZeQNmLnnlTACBNljY3QRjaTuGGQV%2F7Bhs%2Bkw4pDVwQY6pgEa%2B7wqPGQAXlpU4YxnuJmZsXeUdDDZnCAqbQwJjoWBYE%2B%2BKLrtihKiY7z40vbmYSgq3%2F2xdDviXJPwu5d0zAwHz%2F24abq3v5bqQdyyWlzviblTQPBwq9GFbQbhQiQ2J0bBcgTCBGmiA4LVFxvvkgFghAK93%2FVVxzdMbpqj8C%2B1Fu3MIy6bWg945Mj3R%2BxMQxNRm6HQiosllJWY8b7lcgwKn0m1OW14&X-Amz-Signature=2a6eab56736f66bd41affc9411af934106d933af47125b32836052d1d1977229&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R56MSMDX%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T061245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBSgiym0YMnmD%2FWNM42Frj7WxzIyGIqqBL%2BKgKR2lqkRAiBKh6tOnFTZjOPUJNIzDJG%2FDieNI8Amof3%2BTYAMbNoVoyr%2FAwhWEAAaDDYzNzQyMzE4MzgwNSIMw5ovhfaJxkzC2POyKtwDL3xi%2Ft4zV3BTTkpe%2BYTo7TO4IE7auA5GDhhqrKqtrDGWlCgMaTFf6IArizCA38aExuFclBDFe1sG0Owu5hyzWlfWO3xnb5JsSxTJxGa4TQUwGtHYAW78AljWqg1TgIZsjC1DNS%2BxSIng9V5eSAZ0pRbjUxuAdkuvUTZktdg%2BSzpUp79VXWWs7UMBQOkf94cyI14a87Ip4vIQg4yhbVYe%2BD2Jgd%2F%2FEYG6UZ7VJdWtLMZHxICWLf4q%2FfD5gjJEvK0jkUEgHNU%2FnKCjnqNsgFTlpG%2FrUP82EgF4MRAF8rX7sVjJ7vT%2FBhB0nCCHhFiahwY45hX7nJM5DzSYU7Og0WFrsJV5xup8taVtfOO3jIbOcJmi7oTxYE12j%2FnTOdE3DykRnE0fh%2FuEaMTyWAxSE%2FujC43CGEk0vQGRqNSu%2B9o2XuXfUTdzwXfkDrkgwGEeHIwouiMcoek5xn%2FegxqR7jF53sXi89nGkM4boesX5g702%2F7D5bzESdwqSsCPxrGdHRyJ52afiwgGvicceM7pFGRjtFXGQcrbsAEUNh%2B2YSuYHSUy5m9uUBrxXvDza4sZvl%2FwLWLfht8xjJ11xABCrcbxYpOtZeQNmLnnlTACBNljY3QRjaTuGGQV%2F7Bhs%2Bkw4pDVwQY6pgEa%2B7wqPGQAXlpU4YxnuJmZsXeUdDDZnCAqbQwJjoWBYE%2B%2BKLrtihKiY7z40vbmYSgq3%2F2xdDviXJPwu5d0zAwHz%2F24abq3v5bqQdyyWlzviblTQPBwq9GFbQbhQiQ2J0bBcgTCBGmiA4LVFxvvkgFghAK93%2FVVxzdMbpqj8C%2B1Fu3MIy6bWg945Mj3R%2BxMQxNRm6HQiosllJWY8b7lcgwKn0m1OW14&X-Amz-Signature=17a0f2c35766411169c6e9226eab2a8d398f1e70889374cdc02f0eaee2a5ee42&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
