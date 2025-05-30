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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3GGNLIC%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T004150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHK7dzG9dtSj5dFHUDstJSSvQaUACyXK%2FHzl3vCutHMeAiBsgEmzo4oFd6yuEQwm1NOrHzXVTOUMh7huaPUWKRIeLSqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmyktXhgLz72bm2lpKtwDUjmZ4vFu1NCxIt3sDHKzKTjBHe%2FRqHN5bcxQ43h46jrCBFU0yh3%2Byb4uTGOJtvCNy2NYuwTR%2BHFvmA5wE6BGmqEs7qSDibTwUHgseamLr8FynGSBJQtnESBcppUmYHwHJUGa2Im32VWJqAZfcqIxY%2B4Bsi1MT7%2BlNxhHmsMDvMJN5oZ97jkZjItjQSuq5abe2km0yEu40eb1d0OBCU23gPF3iOsAeoysu%2BXnIXJx9lN86dBA%2F23fwwtxOjAyeBfgOdkcne7Z9ysYJXYp7%2F1o5hBZbd2Olw4GfENL50VooQp59E9YufrLc9gtnwMQQtVbqsq9c99ZcK9DZRCy7Dh6CHihSVYAh%2FWp05mfkttZNXLBdJa6UQoC4I83M8kEn4C2i1BQKiRS2ifdJ0kP8X9mAiuBUCJchnYfCS1etgqtvBKAeVCxiGKgzDr9S7NXlu3tlGTOHLl%2F%2FZbzqGB6afgmyLvfPsRjb4%2BvfBUAY0%2BrvS%2BsZEAH03zmvuufQt2t2laznc%2BieT6Vp10zZUZrwk5b47fxq9nYLLLsxEioPaRhYtQ7fnuCjoqIjJFuFJHsIJIlw1l0bmzo61wsRKIiJe8tCIfdkQIfZ%2FcNjhqmIjjKuya3JFXGhQOvV2s9gQQwx97jwQY6pgHVu1P5GA19mfIZ4r2TY9Moy15qbQnBlsMB00E1CapJaqtl4krB9d0QKIo8GBS6SJj1rmCHuofDIaVZWAZtM24fGCZh9QI8%2BVxBmagGt9RWql38IUfhPu7MOaXBEcUfeBUo4IpVuMV6VbK%2B6obvXcLHqU8nSsH1sCH8OlSmYVGvPKByyQywtBcsxea3XRL1l4rftE34Z6dSQo3F%2Bu284mdjHMMKOyKN&X-Amz-Signature=416537a9bafe95a6f8f6f555de4a74ea94d588ffb2bc36c0607d364aee902466&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3GGNLIC%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T004150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHK7dzG9dtSj5dFHUDstJSSvQaUACyXK%2FHzl3vCutHMeAiBsgEmzo4oFd6yuEQwm1NOrHzXVTOUMh7huaPUWKRIeLSqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmyktXhgLz72bm2lpKtwDUjmZ4vFu1NCxIt3sDHKzKTjBHe%2FRqHN5bcxQ43h46jrCBFU0yh3%2Byb4uTGOJtvCNy2NYuwTR%2BHFvmA5wE6BGmqEs7qSDibTwUHgseamLr8FynGSBJQtnESBcppUmYHwHJUGa2Im32VWJqAZfcqIxY%2B4Bsi1MT7%2BlNxhHmsMDvMJN5oZ97jkZjItjQSuq5abe2km0yEu40eb1d0OBCU23gPF3iOsAeoysu%2BXnIXJx9lN86dBA%2F23fwwtxOjAyeBfgOdkcne7Z9ysYJXYp7%2F1o5hBZbd2Olw4GfENL50VooQp59E9YufrLc9gtnwMQQtVbqsq9c99ZcK9DZRCy7Dh6CHihSVYAh%2FWp05mfkttZNXLBdJa6UQoC4I83M8kEn4C2i1BQKiRS2ifdJ0kP8X9mAiuBUCJchnYfCS1etgqtvBKAeVCxiGKgzDr9S7NXlu3tlGTOHLl%2F%2FZbzqGB6afgmyLvfPsRjb4%2BvfBUAY0%2BrvS%2BsZEAH03zmvuufQt2t2laznc%2BieT6Vp10zZUZrwk5b47fxq9nYLLLsxEioPaRhYtQ7fnuCjoqIjJFuFJHsIJIlw1l0bmzo61wsRKIiJe8tCIfdkQIfZ%2FcNjhqmIjjKuya3JFXGhQOvV2s9gQQwx97jwQY6pgHVu1P5GA19mfIZ4r2TY9Moy15qbQnBlsMB00E1CapJaqtl4krB9d0QKIo8GBS6SJj1rmCHuofDIaVZWAZtM24fGCZh9QI8%2BVxBmagGt9RWql38IUfhPu7MOaXBEcUfeBUo4IpVuMV6VbK%2B6obvXcLHqU8nSsH1sCH8OlSmYVGvPKByyQywtBcsxea3XRL1l4rftE34Z6dSQo3F%2Bu284mdjHMMKOyKN&X-Amz-Signature=d4fc17a483a3f4203b91df0e7907b115b891c06a5281d597e9c4f51b227ab90e&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
