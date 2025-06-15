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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VIB37BXX%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T121412Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQCtHxHUkrYRCFWwKUvDVXFCUIpPKIkriqqox2VlMnZMrQIhAOj%2Bv%2FqDWR2BaaDkxsr5GTQmBTw5zX%2BzJfHJzGaGGL0IKv8DCEEQABoMNjM3NDIzMTgzODA1IgwxinrO49Kq5GkVVAYq3ANm5HVASp%2FzFb0l5jbBe5hSNjXVAdrXk1tLevXttpRi3RoJHl%2FMfi%2FPhCpXKXpH2YAoNEdeBa4%2B0IBROh3pYKgE5AF6z%2BNUE4JBVS9U7m67h%2Fb%2FYFBQzWJfMu9apMzxL%2BUNZdJQy3v5vi0c%2FD9H%2BvqbST3Pslw2eVL7upiGsKTlut1w2pOEuQDpqmH7DuiswzK9eBpiWsANxum8jcruQIMtbilB%2F6WKHN%2B7mIsS7ELNbEJqS30DlzrLquVD6ktnj%2Bz6%2FD1WP1Fv4rCcFwZ%2BVqN6TPR%2BpFf6i52q7cmzh58j4qAo65JGs26jdJc06uN3z%2F1qS1ndcXGvLOyfXSq88DPChQWUSWzh5BMTQG3N9dF09Pf43ho3US8Og5Nn1JedIpvl9W6jJUc3JyXa5KmXTGd5D7gWUhywQcauaZEXg5L3lChGgCf%2FJw3v9jMM1YunWudMJ9Ujxuqb4ikDm9CF%2Fd2gU4Hm8vdNeNGa7dWaaikrPntJIGYhnGGCsLVH1jo0%2Fu%2FujP%2Bnu%2FDObvD7QBzfa8wYcqe4y%2BpMoSU9H4Q2h7vp5RR7L%2FyX1xo1tw0rXl%2BhwkbCHfYGKsVYU2RyQb82%2BDGlSW5hWyhCnch%2B8ZzrsE7vv39fdv8QkVbTcIbNLDC7hLrCBjqkAY2FEsMc7yI7%2B7xbQMcgoaZsOlWjqT3NAmTYq%2FFviDIZw9YewDM0pmrmr78cjb2%2BJojbwVGPVUoWhDosvZWJq3Vav%2F0LmSz1O8mDsCsPJgLsHpBrDdElsKdMxwwKkQcK%2BrtSnZE4hDw9MMhZfO%2BKAPDt1pLlPAMno%2FrXM07j2X%2FXPZKN4QrmvzhInjxYIBDp6M3J68AgpnakWNOBmQpgH6JL%2Bdvu&X-Amz-Signature=cbc0a37c088d6da26ca2742bb96bc0f30fc635d21df69d2cfbffcc3af6d77710&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VIB37BXX%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T121412Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQCtHxHUkrYRCFWwKUvDVXFCUIpPKIkriqqox2VlMnZMrQIhAOj%2Bv%2FqDWR2BaaDkxsr5GTQmBTw5zX%2BzJfHJzGaGGL0IKv8DCEEQABoMNjM3NDIzMTgzODA1IgwxinrO49Kq5GkVVAYq3ANm5HVASp%2FzFb0l5jbBe5hSNjXVAdrXk1tLevXttpRi3RoJHl%2FMfi%2FPhCpXKXpH2YAoNEdeBa4%2B0IBROh3pYKgE5AF6z%2BNUE4JBVS9U7m67h%2Fb%2FYFBQzWJfMu9apMzxL%2BUNZdJQy3v5vi0c%2FD9H%2BvqbST3Pslw2eVL7upiGsKTlut1w2pOEuQDpqmH7DuiswzK9eBpiWsANxum8jcruQIMtbilB%2F6WKHN%2B7mIsS7ELNbEJqS30DlzrLquVD6ktnj%2Bz6%2FD1WP1Fv4rCcFwZ%2BVqN6TPR%2BpFf6i52q7cmzh58j4qAo65JGs26jdJc06uN3z%2F1qS1ndcXGvLOyfXSq88DPChQWUSWzh5BMTQG3N9dF09Pf43ho3US8Og5Nn1JedIpvl9W6jJUc3JyXa5KmXTGd5D7gWUhywQcauaZEXg5L3lChGgCf%2FJw3v9jMM1YunWudMJ9Ujxuqb4ikDm9CF%2Fd2gU4Hm8vdNeNGa7dWaaikrPntJIGYhnGGCsLVH1jo0%2Fu%2FujP%2Bnu%2FDObvD7QBzfa8wYcqe4y%2BpMoSU9H4Q2h7vp5RR7L%2FyX1xo1tw0rXl%2BhwkbCHfYGKsVYU2RyQb82%2BDGlSW5hWyhCnch%2B8ZzrsE7vv39fdv8QkVbTcIbNLDC7hLrCBjqkAY2FEsMc7yI7%2B7xbQMcgoaZsOlWjqT3NAmTYq%2FFviDIZw9YewDM0pmrmr78cjb2%2BJojbwVGPVUoWhDosvZWJq3Vav%2F0LmSz1O8mDsCsPJgLsHpBrDdElsKdMxwwKkQcK%2BrtSnZE4hDw9MMhZfO%2BKAPDt1pLlPAMno%2FrXM07j2X%2FXPZKN4QrmvzhInjxYIBDp6M3J68AgpnakWNOBmQpgH6JL%2Bdvu&X-Amz-Signature=3e6115d34c32420fd581c3fc2b6d4040c9cb9b98afe9e4ca46c93ba8e54de2c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
