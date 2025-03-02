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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XP2XJZ3%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T110116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQCfT%2F9hP8hm02dt98kv%2BydDr2N8RMbiALFwKQ6CLvdkmgIgUuBEIrUId7K88o%2BxxzYk20EaNkuVxGPQALQrCXnrU2EqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDImF5oEMkxJ3GWNm9SrcA4J%2BNfcg7x9SkWiKocfylDts1Lenc8MpOPKN8t%2BrE%2F8oimIGxg1BjQB0XxG%2FDpCe1sYyxZ%2BiUlbab9hnUOp9kgfHmwFw7AqfkmPJd4VjxsiuuQVY2ZdMR8X83FQbK0mZq6AoSMQyuc%2BgvoYTYdr%2BRHv6SEwz4lhtFJKZtEiMCgCoBM5I8T%2F5itM5Y%2BLyCdu8Tr0gRfa4zj3Ts5NeEYhDuuZSXj2oRgvozV3OZ%2FalPPXVTukk9YbFmH6ZA%2BfdUQKHtHFDPgXGlPflqcH7%2FWNTtkuwZyAYAiKWtdWdepQN22k1oFDiSz6ws8ZBCvq06iYskLvh%2BKXhFE6xG7Z%2BHaRb4TM%2Bd4NeSJNNLi9OOG8ICPxGVy62pYlAtIqgW2Yeuw6CNACDGHxtVO%2F66sXIM8bJD1rHu28fp6AXedJVLEMWsbkzVZ%2FqzqqqKEcYREPsXrKuc%2BBIS0YLv5v5bVVkAjsupB8ez1hU5KIyUeSgLORhs6%2BB3yKf2KC7rmnMPMJZK029ms4ASIvPy4c4b4nREA6a5piua8p7nGTF7di8%2BKamjpZW9nH%2FI502PW1Vz69joNzYr6WwMqlnTMR%2BjE6zEGZMTOaP4%2FBbXHInMO0FpddD1FAWOh1ws4v7hj%2BNnnRnMIfYj74GOqUBnC8qzHzvu6TsyPJWWX37v%2Bdhi81GFikQjQfyk%2FXr8Z5jD51RRz%2BMXLyOZzWhnWBwGtLJ2OuE5o9%2F77GE7sxQEFmiVI68KQZ3YHSzq5eg2Faya%2B%2FB5O3uaq%2BSVm1p%2FZAb20Ldr1sgXF6kOCtLpOyD7r35UXDFURWg2dSyd8tgIq8E7MNM5%2FBCsFQPQAuw3tVR9hVivJ9Wm4o5elfTG9wB4gqSN8sD&X-Amz-Signature=2ac715ffbf426bb0b5efb4b3ca5abd4626db9a3bb0282930df8d5cae9fe1143a&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XP2XJZ3%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T110116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQCfT%2F9hP8hm02dt98kv%2BydDr2N8RMbiALFwKQ6CLvdkmgIgUuBEIrUId7K88o%2BxxzYk20EaNkuVxGPQALQrCXnrU2EqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDImF5oEMkxJ3GWNm9SrcA4J%2BNfcg7x9SkWiKocfylDts1Lenc8MpOPKN8t%2BrE%2F8oimIGxg1BjQB0XxG%2FDpCe1sYyxZ%2BiUlbab9hnUOp9kgfHmwFw7AqfkmPJd4VjxsiuuQVY2ZdMR8X83FQbK0mZq6AoSMQyuc%2BgvoYTYdr%2BRHv6SEwz4lhtFJKZtEiMCgCoBM5I8T%2F5itM5Y%2BLyCdu8Tr0gRfa4zj3Ts5NeEYhDuuZSXj2oRgvozV3OZ%2FalPPXVTukk9YbFmH6ZA%2BfdUQKHtHFDPgXGlPflqcH7%2FWNTtkuwZyAYAiKWtdWdepQN22k1oFDiSz6ws8ZBCvq06iYskLvh%2BKXhFE6xG7Z%2BHaRb4TM%2Bd4NeSJNNLi9OOG8ICPxGVy62pYlAtIqgW2Yeuw6CNACDGHxtVO%2F66sXIM8bJD1rHu28fp6AXedJVLEMWsbkzVZ%2FqzqqqKEcYREPsXrKuc%2BBIS0YLv5v5bVVkAjsupB8ez1hU5KIyUeSgLORhs6%2BB3yKf2KC7rmnMPMJZK029ms4ASIvPy4c4b4nREA6a5piua8p7nGTF7di8%2BKamjpZW9nH%2FI502PW1Vz69joNzYr6WwMqlnTMR%2BjE6zEGZMTOaP4%2FBbXHInMO0FpddD1FAWOh1ws4v7hj%2BNnnRnMIfYj74GOqUBnC8qzHzvu6TsyPJWWX37v%2Bdhi81GFikQjQfyk%2FXr8Z5jD51RRz%2BMXLyOZzWhnWBwGtLJ2OuE5o9%2F77GE7sxQEFmiVI68KQZ3YHSzq5eg2Faya%2B%2FB5O3uaq%2BSVm1p%2FZAb20Ldr1sgXF6kOCtLpOyD7r35UXDFURWg2dSyd8tgIq8E7MNM5%2FBCsFQPQAuw3tVR9hVivJ9Wm4o5elfTG9wB4gqSN8sD&X-Amz-Signature=87a22bb0c0e2474e29c62bf0ddae30ababc5822694265838560818e82f03b7f0&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
