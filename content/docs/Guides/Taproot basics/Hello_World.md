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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657V6BCRG%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T061334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOhu6FRR8ftUq67hHU9wzA0O6%2FaBTU2nllm6XyaC%2BbdwIhAMormOR8EwK%2BXLC0sePkJPGprnXjld3QuBbbJmw%2BgiGvKogECIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxfrpYhkuwJtFNR%2F0Eq3APisPfIv%2Bdgo5HHR4K98BJH8KRPeDZBY6bHJBzWaa0fzXAJCAlKOdJWJOwo5JeLBNZz5lkvH%2FR7eoED484Rl0o7ctQ%2FS0NE7EWDVVlGn7ZOXTHu5xFmkGc9GKffNINLdFUbpYtQve38N6vxiJjhFO3j8kn0VGuv0U9mEcGvVX0A9XpIc7YkJJ%2BcoK7jk8TiTpQjr5j7N56fSXI0t9qB8xV0tUyn%2FpHVDi%2BSqNR2pqc3OuZiMqd5Vq7%2B7HhEvkvLUec14k9hcOLnxsdHd%2BQm59XTZP2weM%2Bo4kYBeG08suraGs7OSzh2HS4fx26CYLP9RaqqKF24CQn1ANrdtMRmbonSauMqAeFObA4bICwsTm4dSJRKdVkVlgNIdQ8Fx%2B4vD2lgLQsMitLOYaMAgDJLKR4fDFKMr%2BYOVmW3i4J3SUV2GuwQQglEJE35hrWH%2BwsSZhsoKYDaySsBPknKnkFBbxVusZhP48Oph42zTI3chJlDPHyn7g2xBCuys2Rq%2FGc8CpQ54lZyvu%2FxGUxzw108iXkqPeQXotOUw8i%2B7iFzeAfaR4bvqqg4b%2BHT61dteZFOHL8M07IRVluadJfTMLos%2B%2F2Z%2BLIay8OsOoa8eRyMEKC60Ri4qfQXmbh%2Ffr%2Fr8DC1iKvBBjqkASIUI39nsTqgyqMqtvc6kAOJ%2BGhG0qTSZHjeua7Dp7mj2qWxbZau5Mue0bfG8CVVkHC%2BIklcX51zgwiFKHpvZIzRn8xPVlPSCgmhrkC7tv6j7luOIMQsyGOgbvghCvd0leXpH3IHeeSkDfKjN9t02i3NTK4BOJrmDp9ldQzgR4ynvgj%2BBQMEz0rYKKGQN5OWt0e2Rwmug5TRcIUxu3Bjqlsj%2FCh9&X-Amz-Signature=487cbfe9ac16ba928896f724d15cfe8bbd93c808158462dfaba80d8dfc17a9b5&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657V6BCRG%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T061334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOhu6FRR8ftUq67hHU9wzA0O6%2FaBTU2nllm6XyaC%2BbdwIhAMormOR8EwK%2BXLC0sePkJPGprnXjld3QuBbbJmw%2BgiGvKogECIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxfrpYhkuwJtFNR%2F0Eq3APisPfIv%2Bdgo5HHR4K98BJH8KRPeDZBY6bHJBzWaa0fzXAJCAlKOdJWJOwo5JeLBNZz5lkvH%2FR7eoED484Rl0o7ctQ%2FS0NE7EWDVVlGn7ZOXTHu5xFmkGc9GKffNINLdFUbpYtQve38N6vxiJjhFO3j8kn0VGuv0U9mEcGvVX0A9XpIc7YkJJ%2BcoK7jk8TiTpQjr5j7N56fSXI0t9qB8xV0tUyn%2FpHVDi%2BSqNR2pqc3OuZiMqd5Vq7%2B7HhEvkvLUec14k9hcOLnxsdHd%2BQm59XTZP2weM%2Bo4kYBeG08suraGs7OSzh2HS4fx26CYLP9RaqqKF24CQn1ANrdtMRmbonSauMqAeFObA4bICwsTm4dSJRKdVkVlgNIdQ8Fx%2B4vD2lgLQsMitLOYaMAgDJLKR4fDFKMr%2BYOVmW3i4J3SUV2GuwQQglEJE35hrWH%2BwsSZhsoKYDaySsBPknKnkFBbxVusZhP48Oph42zTI3chJlDPHyn7g2xBCuys2Rq%2FGc8CpQ54lZyvu%2FxGUxzw108iXkqPeQXotOUw8i%2B7iFzeAfaR4bvqqg4b%2BHT61dteZFOHL8M07IRVluadJfTMLos%2B%2F2Z%2BLIay8OsOoa8eRyMEKC60Ri4qfQXmbh%2Ffr%2Fr8DC1iKvBBjqkASIUI39nsTqgyqMqtvc6kAOJ%2BGhG0qTSZHjeua7Dp7mj2qWxbZau5Mue0bfG8CVVkHC%2BIklcX51zgwiFKHpvZIzRn8xPVlPSCgmhrkC7tv6j7luOIMQsyGOgbvghCvd0leXpH3IHeeSkDfKjN9t02i3NTK4BOJrmDp9ldQzgR4ynvgj%2BBQMEz0rYKKGQN5OWt0e2Rwmug5TRcIUxu3Bjqlsj%2FCh9&X-Amz-Signature=2c9276777e702f777635dc5673d8e969174938d52dcf444918a6aaa5b943a2f9&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
