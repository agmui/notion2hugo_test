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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7GOY4PI%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T024727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG14RmT%2FZqZXv15nkPQS6lh7Nxw0kjpK1FsxbtcWzUiOAiEAhBKv%2F%2BaVsjtisHkGc25ttWYIbTsQ5NcvVwlWWncwZhYqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAhe3nGYt2FNxhX7MSrcA2uO25F3wn%2BWVrln1p0DmYG2c8Rc6aIIDkoU3R8jfpWfVdCB91c1A4a1nAJtOq9Wg4eM6flizjPHtN2C8HfYszJaMHg19iBMZUYXkkM0mn8Ht%2FIOaC69zR096sUswHqyofRz2df9JI2x3Oc%2Br9o8QH%2BRldgPuvuZNt3IAz9WBJCK8CJ5QKI0DuWNSQ5%2F5DBbH5kc1UtsaE7Ddry3qsPS3rko%2B1TqnMuuOZCL%2FmrfB3eey%2FC8LPhENW%2B8rklc5Hn9xzAvJNfIgT25UDnmyGvd4M1A9fYu7pufClGVWCn1JU1NmQVQlqMiLYs4JFQOTISceZQqUEPriB1LK7UUQRE4cSaqIAS568%2F6upExytJmhY5WdBhjhAvsqwjXHqS56sv2%2BRzXWEFoKyOMqAFbPyweTNU8oXZ7AlSc2gdF8WqIrCtrHmY7pewFk6acbk43lwoj0UgYU%2BtHl99wwkgz9Nh3VenVZFkFFLwyDxv%2F%2BJWcF0b29vJZsoVxoGGMq6b5XWJrFrDbeegYZFFfvT2J1Un0IVZKxjcuKAh325QUaJ%2F2m7RS6wqEg8kzg%2FpHrSHE7ohc1%2FgTSPxsh%2B%2BGYEZNUnL%2F8CNYopnBiH9KiZnddjxsg1P9ClbpEJGa4P39xoIhMJvywMMGOqUB%2FsP%2BIK8ZRQOmZezeMLGc4M7Eiqu5GFzp7yRLwSsI6QSmuRpVp6kl9Dl9uL9sUDNhIKJgB%2Bpy8kKPuXQjGKWbZFkbKX7HFB0XvmyT%2FA0Wl5PmsbBcb%2FsPSOr%2FHSFFiooXs%2BjFRNg5rT4GXM8G80%2FatHI4BiV%2ByACPpFUOePTF8VdND0apFn2fvSe2yVkFGhjV3e3DbZhyQwWLhVkQ0ATVOum7ISLP&X-Amz-Signature=61f307ab18bf8d2fa73b08317b7163cc0218b76b8b12158a04f5d9b0dfdbf4f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7GOY4PI%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T024727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG14RmT%2FZqZXv15nkPQS6lh7Nxw0kjpK1FsxbtcWzUiOAiEAhBKv%2F%2BaVsjtisHkGc25ttWYIbTsQ5NcvVwlWWncwZhYqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAhe3nGYt2FNxhX7MSrcA2uO25F3wn%2BWVrln1p0DmYG2c8Rc6aIIDkoU3R8jfpWfVdCB91c1A4a1nAJtOq9Wg4eM6flizjPHtN2C8HfYszJaMHg19iBMZUYXkkM0mn8Ht%2FIOaC69zR096sUswHqyofRz2df9JI2x3Oc%2Br9o8QH%2BRldgPuvuZNt3IAz9WBJCK8CJ5QKI0DuWNSQ5%2F5DBbH5kc1UtsaE7Ddry3qsPS3rko%2B1TqnMuuOZCL%2FmrfB3eey%2FC8LPhENW%2B8rklc5Hn9xzAvJNfIgT25UDnmyGvd4M1A9fYu7pufClGVWCn1JU1NmQVQlqMiLYs4JFQOTISceZQqUEPriB1LK7UUQRE4cSaqIAS568%2F6upExytJmhY5WdBhjhAvsqwjXHqS56sv2%2BRzXWEFoKyOMqAFbPyweTNU8oXZ7AlSc2gdF8WqIrCtrHmY7pewFk6acbk43lwoj0UgYU%2BtHl99wwkgz9Nh3VenVZFkFFLwyDxv%2F%2BJWcF0b29vJZsoVxoGGMq6b5XWJrFrDbeegYZFFfvT2J1Un0IVZKxjcuKAh325QUaJ%2F2m7RS6wqEg8kzg%2FpHrSHE7ohc1%2FgTSPxsh%2B%2BGYEZNUnL%2F8CNYopnBiH9KiZnddjxsg1P9ClbpEJGa4P39xoIhMJvywMMGOqUB%2FsP%2BIK8ZRQOmZezeMLGc4M7Eiqu5GFzp7yRLwSsI6QSmuRpVp6kl9Dl9uL9sUDNhIKJgB%2Bpy8kKPuXQjGKWbZFkbKX7HFB0XvmyT%2FA0Wl5PmsbBcb%2FsPSOr%2FHSFFiooXs%2BjFRNg5rT4GXM8G80%2FatHI4BiV%2ByACPpFUOePTF8VdND0apFn2fvSe2yVkFGhjV3e3DbZhyQwWLhVkQ0ATVOum7ISLP&X-Amz-Signature=c5f2caac9bbb5de4f899c47b9daea89ffa12ec1f94e8eafc01894f644352a907&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
