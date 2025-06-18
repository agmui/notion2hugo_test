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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X62IA6WG%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T061323Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICN5b%2Fnu6sC7gnVIMPfQcMaTZze2DF5kqdCTuTdfDAyOAiEA761E%2BJZucdaCkuW60ywrGSWCQJGVOe%2Bx%2F%2Bb56lOjlekqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEpx1WHCugGcO%2FgjTircAx255do0A9VvTdmZ7Ptm8Da9F7nBd2rLEfVVn2vdBNo1ZjQS6U1dhZnKgLVlAXpVD9vRBhEursKfvyb8ayEVrl79hy2JDkCZ2oIuWvQWf6o8iALR5OuUzhY32STnuF0GamrCuFQXfR65wMvz9pA7zMyxTwjXJJ9%2FibDcpyEQ3JQDvuqtXqExvtCa4bsx0E8Oxiej2EF%2B%2Bh0IBqyOR8Hud2E8LTQgpTPhm7uvAW9AADv4t6fwRv5nU5pgJx0Ck9ZrHHTJf2QGlXDy0nYbFNDE2UkrIqU5GPT2O0lAQLmYWpofmgXCjGgydrzo12nULQFai9mnY6ePn3nsMdegoFo8YpkVkLYR312oVBy0%2BJlTSNPDg2TpAy5Wxod9dsd%2BVfcJSPtyKhjNIoDbfMaZ%2FN%2BSPodIm2EA9WdPsY9LkUEujG39RBZ9HI%2FZhEGP6ehJx%2BObmpXDS5qXXRLMgfaYP9ZMZ4xTUyCX1prIUw99mXHUmDk0Hzx%2BRN1Hipi89vzPXxotbpy3irlh%2BJ0BR4yu%2FIi%2FL8gEiSEJqAVIFQU%2B4wd2fiyKCFh1AR7dVhFP7oVLNNKj3X5mmvatOMmn3Gqf90oh59Xs4gEm6XliJoZ8zLlfNW5lepKde4Hvdxr69MaSMPOiycIGOqUB4DsVyueYAhxgFsnqlwpXFQwqTFdAX0zX8HZHVg8rBHh%2BN5Usjpooq%2F4jksI0X40E%2Fh5HSZY7qxKRBwvdQNi7srC%2BPhqbjg98LFgWytuRICNB24lCX67ZBSssonx6FXKwjzUx719eWW42FSDO%2FnvrshFT0ale%2FYIrJzf5wy%2F4Bi6%2FQeE9vJHcI3oC%2FZyKKiOzHsAvLEKwWSviTG014tBqFZLPkqh1&X-Amz-Signature=ac478e8a0b64a0c0653e6165386fec3a453abc13deae7dd131eab41bd966c7fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X62IA6WG%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T061323Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICN5b%2Fnu6sC7gnVIMPfQcMaTZze2DF5kqdCTuTdfDAyOAiEA761E%2BJZucdaCkuW60ywrGSWCQJGVOe%2Bx%2F%2Bb56lOjlekqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEpx1WHCugGcO%2FgjTircAx255do0A9VvTdmZ7Ptm8Da9F7nBd2rLEfVVn2vdBNo1ZjQS6U1dhZnKgLVlAXpVD9vRBhEursKfvyb8ayEVrl79hy2JDkCZ2oIuWvQWf6o8iALR5OuUzhY32STnuF0GamrCuFQXfR65wMvz9pA7zMyxTwjXJJ9%2FibDcpyEQ3JQDvuqtXqExvtCa4bsx0E8Oxiej2EF%2B%2Bh0IBqyOR8Hud2E8LTQgpTPhm7uvAW9AADv4t6fwRv5nU5pgJx0Ck9ZrHHTJf2QGlXDy0nYbFNDE2UkrIqU5GPT2O0lAQLmYWpofmgXCjGgydrzo12nULQFai9mnY6ePn3nsMdegoFo8YpkVkLYR312oVBy0%2BJlTSNPDg2TpAy5Wxod9dsd%2BVfcJSPtyKhjNIoDbfMaZ%2FN%2BSPodIm2EA9WdPsY9LkUEujG39RBZ9HI%2FZhEGP6ehJx%2BObmpXDS5qXXRLMgfaYP9ZMZ4xTUyCX1prIUw99mXHUmDk0Hzx%2BRN1Hipi89vzPXxotbpy3irlh%2BJ0BR4yu%2FIi%2FL8gEiSEJqAVIFQU%2B4wd2fiyKCFh1AR7dVhFP7oVLNNKj3X5mmvatOMmn3Gqf90oh59Xs4gEm6XliJoZ8zLlfNW5lepKde4Hvdxr69MaSMPOiycIGOqUB4DsVyueYAhxgFsnqlwpXFQwqTFdAX0zX8HZHVg8rBHh%2BN5Usjpooq%2F4jksI0X40E%2Fh5HSZY7qxKRBwvdQNi7srC%2BPhqbjg98LFgWytuRICNB24lCX67ZBSssonx6FXKwjzUx719eWW42FSDO%2FnvrshFT0ale%2FYIrJzf5wy%2F4Bi6%2FQeE9vJHcI3oC%2FZyKKiOzHsAvLEKwWSviTG014tBqFZLPkqh1&X-Amz-Signature=1641be6797878964ad9282fac83f6d122262c982a1ee43e79070697e02789a1e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
