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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXTETOL7%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T200120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCIGT%2BjfJR8Ior6mqHw2vCnZhRSdG75zPxvVQm9jaBxv0uAiAPGX6KE1FqTU8w6cCrr2Hi7v2PQrqqqyQGKpfM4aS8gCr%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIM9Ikgy2JZCURGvLHBKtwDsl18iAuz3Pq1phwhFWHNyxB4HOCN7fkVfC2tElaKMRIhor5ybZ9RnMT9Wsao2LnwoFYJgezC7b4eiTeaBtXf7j4BMSsatBG%2FtaN7PuoRvvrCJ39U2tq0XkWYichLlYE%2FzfcfbDVjj%2FPCWfZ6KfYeJI%2BOfvv9iPV%2BZxYiZrGu2SSmxKJbkI0ymFaeOTH6giOqHY%2BHpDzpzahJwBSJdjWzz0PHrR%2B%2FQ4hDQ0nSV8qLFChUKkI%2FAtIuk3KsTqXsBD4M47nKBNUsJKqdqF5CWq66BsFqwfqFkn7bTw0cHkN6z0Ic2OmnivogPkcpDj0y%2Ff7q0zl4L38p9DVSgoXzjgoyw%2BaHk863L25nMQ903wgtoj0X5G%2BDPJgFaOI9qYDROaYc0eMQ4v3KZEqRSuTv1RVJXBOsc%2FlNYgOY5A5RIOysYnAZIIVCd%2FzbvIIrQXZCUYf6MwRI1PeCcABF294cNQM0ERbC%2F%2BPlJRt063ZRw%2Bd57rudxhsDz2dCFkcU9W4p49iFRN5%2FvDJc8k9CqZ838%2BVkRzQddSNnTmiBI3CKejRjbmYHSjFndsC3AvM5BbtzbDATPOG6AUCuGgxC6CpojpBT1Vs7Cf9X9MGaeEqyCbJQ6FUPB9gl%2FyzfStQH3aswg%2BG3vgY6pgHz597L%2Fj3g%2FWVfxbfGRseERV%2Bn%2BcebS9ffk6lnIkj%2FfMkZaj4neOlBuUsY%2BSneQIvJyNVAJIWgXW1REYjrQ%2F2gfeIJOIfRmYbXtjkyRe99i6%2FrrycTKTt0GmleDVovbCN3PBVMD16jfDZIls5dNrfRpvfvEfb%2Fc0cvsCTIKuW8eLjPxRBFrDChwMAIUrlMdO0pNrhRvvNzLGyck9t%2B2o4EHmKYK04y&X-Amz-Signature=6d53ec29c71dd419401c9da3694e83b8eb73ed5d61b61b308694d63e80daf074&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXTETOL7%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T200120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCIGT%2BjfJR8Ior6mqHw2vCnZhRSdG75zPxvVQm9jaBxv0uAiAPGX6KE1FqTU8w6cCrr2Hi7v2PQrqqqyQGKpfM4aS8gCr%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIM9Ikgy2JZCURGvLHBKtwDsl18iAuz3Pq1phwhFWHNyxB4HOCN7fkVfC2tElaKMRIhor5ybZ9RnMT9Wsao2LnwoFYJgezC7b4eiTeaBtXf7j4BMSsatBG%2FtaN7PuoRvvrCJ39U2tq0XkWYichLlYE%2FzfcfbDVjj%2FPCWfZ6KfYeJI%2BOfvv9iPV%2BZxYiZrGu2SSmxKJbkI0ymFaeOTH6giOqHY%2BHpDzpzahJwBSJdjWzz0PHrR%2B%2FQ4hDQ0nSV8qLFChUKkI%2FAtIuk3KsTqXsBD4M47nKBNUsJKqdqF5CWq66BsFqwfqFkn7bTw0cHkN6z0Ic2OmnivogPkcpDj0y%2Ff7q0zl4L38p9DVSgoXzjgoyw%2BaHk863L25nMQ903wgtoj0X5G%2BDPJgFaOI9qYDROaYc0eMQ4v3KZEqRSuTv1RVJXBOsc%2FlNYgOY5A5RIOysYnAZIIVCd%2FzbvIIrQXZCUYf6MwRI1PeCcABF294cNQM0ERbC%2F%2BPlJRt063ZRw%2Bd57rudxhsDz2dCFkcU9W4p49iFRN5%2FvDJc8k9CqZ838%2BVkRzQddSNnTmiBI3CKejRjbmYHSjFndsC3AvM5BbtzbDATPOG6AUCuGgxC6CpojpBT1Vs7Cf9X9MGaeEqyCbJQ6FUPB9gl%2FyzfStQH3aswg%2BG3vgY6pgHz597L%2Fj3g%2FWVfxbfGRseERV%2Bn%2BcebS9ffk6lnIkj%2FfMkZaj4neOlBuUsY%2BSneQIvJyNVAJIWgXW1REYjrQ%2F2gfeIJOIfRmYbXtjkyRe99i6%2FrrycTKTt0GmleDVovbCN3PBVMD16jfDZIls5dNrfRpvfvEfb%2Fc0cvsCTIKuW8eLjPxRBFrDChwMAIUrlMdO0pNrhRvvNzLGyck9t%2B2o4EHmKYK04y&X-Amz-Signature=ef53e0d024ce878dbfde38123d7d2eba15eb14396c93049d64c12c9728557261&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
