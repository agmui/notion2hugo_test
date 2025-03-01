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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BHD7447%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T121218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQDViTU4SUfC7BGKcXSsqA8BOUxS5T876li9a%2FzNtScbJAIgGkvbiyoEPK819Zbr5gwUc4HOPXAmXWglDlsUDfRuj%2BgqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN65lmsyu%2Fdu0xYvIircA0uRULnZOVQ3VS7A%2BCTe0yMP8aRYGKQ7eTDJgjGh89QilBhHE2TMwsffy4GwPbkWao9xbUTghPE4YnyR1HCg%2BRo%2BOoEuAOQpbdeqi%2Bed9C6YeCrKrLYuDOwSAKsMiY1xVz3ruPnHATUEOetXX0xtbFG8XwZ1qoArx86MHjhLtE%2BauUGup51xSNk1Q3FFF5T3o7B070J8JJy6VfrSb%2FRz5g1k2b921OQY3nn1hCjhee3i4r5CCa8V%2FpcD54bb6O3%2B9YtE9o9YyjWx8GUYgWvWQKe%2B4hXv4rQtOoLIhFRG%2BFzc9q20oUgmoEXe4SdXuJkcwgsQkwldEaoycOWMSwQugCZ0syUA1yrU4qNlVpjXp6njiDe%2BS5j0HJogzeNyXwJVZx%2Bs704K9Rl4Mc1mYch0o%2B0qL%2BtQuDvfWZHq46gfJlA4wC7sTsiGhJyKiTO%2BVj2%2FZl7ibtmGfgsZurv8sjHSNc72irDZYBIM%2BR8c3CXMAn0wWro%2FV3tJGFAQAXk8jxMf7BCMu8HUrEe4RCtROsJt0%2BT1DyPduiWdxcKXUiMdeaSGwIQ9QY4QkvOjJZrEHenaS8aYvgZlCA8Od14Pf3Fu205iusrUXM7omfEv5DfeDfuA%2Fx1%2FU08tbVeR6DWtMKO6i74GOqUBK1%2FPlI6mJNTPG1RbW9nFx5hcQ3jgVYW7mBT3MSfWw5yWoMcHbKeIgjc5kVsLf92ZL5YH0XbI5bNhPMXDJnjes5A6La8k5QKas0KLYN1tg2aLLwB1pC4bRgLLKfKmW9%2FPj0tudQNpu1FDMXB0VyGKFjBmiUQDJm8p%2Bg8a9bhv%2BZmmep%2Bf1CAcTljjNIceaA4Jwi53aktgcWVxWZMlFfyR4oKHmoJD&X-Amz-Signature=5442ffd47d85055a03b8da7dcb3ef73a7d42dbb810298d89de1ec03cb132bb35&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BHD7447%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T121218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQDViTU4SUfC7BGKcXSsqA8BOUxS5T876li9a%2FzNtScbJAIgGkvbiyoEPK819Zbr5gwUc4HOPXAmXWglDlsUDfRuj%2BgqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN65lmsyu%2Fdu0xYvIircA0uRULnZOVQ3VS7A%2BCTe0yMP8aRYGKQ7eTDJgjGh89QilBhHE2TMwsffy4GwPbkWao9xbUTghPE4YnyR1HCg%2BRo%2BOoEuAOQpbdeqi%2Bed9C6YeCrKrLYuDOwSAKsMiY1xVz3ruPnHATUEOetXX0xtbFG8XwZ1qoArx86MHjhLtE%2BauUGup51xSNk1Q3FFF5T3o7B070J8JJy6VfrSb%2FRz5g1k2b921OQY3nn1hCjhee3i4r5CCa8V%2FpcD54bb6O3%2B9YtE9o9YyjWx8GUYgWvWQKe%2B4hXv4rQtOoLIhFRG%2BFzc9q20oUgmoEXe4SdXuJkcwgsQkwldEaoycOWMSwQugCZ0syUA1yrU4qNlVpjXp6njiDe%2BS5j0HJogzeNyXwJVZx%2Bs704K9Rl4Mc1mYch0o%2B0qL%2BtQuDvfWZHq46gfJlA4wC7sTsiGhJyKiTO%2BVj2%2FZl7ibtmGfgsZurv8sjHSNc72irDZYBIM%2BR8c3CXMAn0wWro%2FV3tJGFAQAXk8jxMf7BCMu8HUrEe4RCtROsJt0%2BT1DyPduiWdxcKXUiMdeaSGwIQ9QY4QkvOjJZrEHenaS8aYvgZlCA8Od14Pf3Fu205iusrUXM7omfEv5DfeDfuA%2Fx1%2FU08tbVeR6DWtMKO6i74GOqUBK1%2FPlI6mJNTPG1RbW9nFx5hcQ3jgVYW7mBT3MSfWw5yWoMcHbKeIgjc5kVsLf92ZL5YH0XbI5bNhPMXDJnjes5A6La8k5QKas0KLYN1tg2aLLwB1pC4bRgLLKfKmW9%2FPj0tudQNpu1FDMXB0VyGKFjBmiUQDJm8p%2Bg8a9bhv%2BZmmep%2Bf1CAcTljjNIceaA4Jwi53aktgcWVxWZMlFfyR4oKHmoJD&X-Amz-Signature=5c2678253359cdbf61fae45c168da238d359f5e1f967a9f9699875bce8d187a2&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
