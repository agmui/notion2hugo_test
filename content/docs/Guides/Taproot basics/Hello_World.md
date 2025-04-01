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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMB2JNTD%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T200937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJIMEYCIQD%2B8YjkYliODbxv5JFDES4IKlu13tvm2G1unTGscSSkXgIhAIW60yCggKI7V%2BDctjb9%2BRYm7wlytc2pzIvLWmzrPQecKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxn7fvxm%2FGdLyG6vUMq3AP4Fp7wsuJFfQQbTL809pxinGxzDGjVr5Fnb9Ue3tpCXY%2FdnDzkVwtbUJaqatofULXMJv1deahDBUeQvMWoMbZ36gIHjY%2F2PPfxfxIL9r%2F3W2M5MgKkXTlZjeESqYA5Af%2F3UgfG4e1LBHGpAWKdaRlqgz9Q0YetCk6wIbcioxRznXj4HitqlC9e4VA%2B4NKCntDS0%2BL7rZ4R3WNQEztarDeBZLucCa%2FLfBkOUiwvLMr4x0cuoDZo3lkc%2B73hO%2F3Cn8AGvDDC22vuUm34Do0TIUpAtGLT7NIE72Bi6WfRf4pmZnVkCBKuxTlPqTjASfZQkMtpeZCQmOH9dBNirakaHNqmGi6%2Fb6BVwE8CSSEiRere04n6ZI8zA3uLLbJ8KVoIYR2nm2XPKO4CVOuFGDY%2BlQaR7Nq69oe78dYAsG7%2B2IqnGJ%2FfBUCYTaWWjRAKn7JH74CauWNRNxMznz3FbFn3wxCW4%2BWIpu9CPB2eZjv4rTr%2BPD%2BtJdD9PtJi7kj3QVatK%2FtzHDY1IUUU0c5vs1KdLL2wMP3pOiUGy5teljjQlHZeOKtpqM5G2blz2urq4g%2BO4KWhK4rdH6G7PO7Pl6PdlZbcoWQ%2B%2BqiRw5fnxZuXa%2F6koR3ZugbuapPkAJMXvTC7jrG%2FBjqkAQeVySFxqM%2FLOKlWYCLrBpd5dacsIm%2BeUdaX%2BzCwQxcLKgq88p0M6yH2RkPf%2BvHo7qpcS6qCYExS3GguwnMkOdd1P2o46qtKlGvHXiJMu0aosiCk%2BsNhWjw5a%2FU2n9hKeG27SQ03MKMUI1Qtro2ck0NRRkl7NfaendAmxbBLdZV26urB16%2FDk2yvAFjkqlB9h8SGnQ4YmHdb8JgWey%2BQulqqUzX4&X-Amz-Signature=24751dab5d9b93089d415bb7247a86b88ce4fdf7f6bb9b3aad9541190e50fd76&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMB2JNTD%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T200937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJIMEYCIQD%2B8YjkYliODbxv5JFDES4IKlu13tvm2G1unTGscSSkXgIhAIW60yCggKI7V%2BDctjb9%2BRYm7wlytc2pzIvLWmzrPQecKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxn7fvxm%2FGdLyG6vUMq3AP4Fp7wsuJFfQQbTL809pxinGxzDGjVr5Fnb9Ue3tpCXY%2FdnDzkVwtbUJaqatofULXMJv1deahDBUeQvMWoMbZ36gIHjY%2F2PPfxfxIL9r%2F3W2M5MgKkXTlZjeESqYA5Af%2F3UgfG4e1LBHGpAWKdaRlqgz9Q0YetCk6wIbcioxRznXj4HitqlC9e4VA%2B4NKCntDS0%2BL7rZ4R3WNQEztarDeBZLucCa%2FLfBkOUiwvLMr4x0cuoDZo3lkc%2B73hO%2F3Cn8AGvDDC22vuUm34Do0TIUpAtGLT7NIE72Bi6WfRf4pmZnVkCBKuxTlPqTjASfZQkMtpeZCQmOH9dBNirakaHNqmGi6%2Fb6BVwE8CSSEiRere04n6ZI8zA3uLLbJ8KVoIYR2nm2XPKO4CVOuFGDY%2BlQaR7Nq69oe78dYAsG7%2B2IqnGJ%2FfBUCYTaWWjRAKn7JH74CauWNRNxMznz3FbFn3wxCW4%2BWIpu9CPB2eZjv4rTr%2BPD%2BtJdD9PtJi7kj3QVatK%2FtzHDY1IUUU0c5vs1KdLL2wMP3pOiUGy5teljjQlHZeOKtpqM5G2blz2urq4g%2BO4KWhK4rdH6G7PO7Pl6PdlZbcoWQ%2B%2BqiRw5fnxZuXa%2F6koR3ZugbuapPkAJMXvTC7jrG%2FBjqkAQeVySFxqM%2FLOKlWYCLrBpd5dacsIm%2BeUdaX%2BzCwQxcLKgq88p0M6yH2RkPf%2BvHo7qpcS6qCYExS3GguwnMkOdd1P2o46qtKlGvHXiJMu0aosiCk%2BsNhWjw5a%2FU2n9hKeG27SQ03MKMUI1Qtro2ck0NRRkl7NfaendAmxbBLdZV26urB16%2FDk2yvAFjkqlB9h8SGnQ4YmHdb8JgWey%2BQulqqUzX4&X-Amz-Signature=3a45f828097e737e645b9728edd63429cbef9980aafe7c17dbff8d7a90c50011&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
