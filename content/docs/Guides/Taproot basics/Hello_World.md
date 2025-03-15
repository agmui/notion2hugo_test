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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VOHGVRD%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T150515Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCExYLN8Td0Z3YbnPrOaYX8E%2FiCJ2JOA74ZywAx96TOrwIhAIH4zLHHXSMTiK2stAhbwAuce6XYqT7%2BqvNwnXOBTb1tKv8DCBYQABoMNjM3NDIzMTgzODA1Igy2z8aAErza9hQ27ZEq3AO%2F7SPxdfPHof%2FprXbCJQKLPGEm0WpmsfGRNRWPu7BJKzQHHsb4Yf1ZtybRzc2s5WBPVLf9CFsIq0V6BQQXL1vzLh2GqQA88WoXZjp5pfSK9wtaEmQMTtKGz0al2EOLZ%2BPPjBJl%2BqoTzuTP87wNtf1BCDRdqgZh3ExhEWSoBln2MVMhU3fyh7hrjoPAmk4YqywvDIkGHyZNEPhdVpgb0tFxqlq0sn6HVUWyMDHgC2xhN0CpyrYieiP6atKpUSWi0e83qy%2FrBrh3VBeSEHJUZXJavftIJw1Xb31HunTd6H5FF7keYh2sJ%2Bo64m%2Ful9fPTNaw1aPN0LJPPt%2F3NKI7ZkBfFyGoXY8vFkXr5V9Foo%2F3U1bOIk24i3EXHv6xxlPbzu5K4ZH8j3U7aEO4QY1%2FGrvDX8eknXfSCcxgSFPEcjbSYXZ5CUEhkXfHXGVk1U%2BBj%2FPPtJzK%2FLyA4AZUtTjIxu1vLbzFk1yX9ke%2FiRLF1OzpyWVMaC5NuQsxvyRtm0GGk78IjNkqGb13HwrUOdnYjT0tpw%2FPdioDO%2F5ocUyk5JgT6XyI77ECdHB44C36eHk%2FI3Z48P41b4gT%2FoTa4RbYjGgU5F%2BMx0609kWmBanNS%2B5UsCYRamS4vhKTypuUxDD57tW%2BBjqkAaLvC6kfJzXy7gQwqVkR8zk4V%2F5s7PtXCvr8yVErQ9SkyoCODUuXeZlrPGT4zPRv5w6LxqtoN0pp%2FCs7N9Nb%2F%2FQp%2FLfOLNNtj4MpWTUFer7VPp1ui4H9Y6rVKsZGqSHk3ydzP1mpDygZ3qrAmjRzGPRwqmlK5IuRczI7GTYw6icbYx8Q6%2Bz5qUsIo92gT8paLDkcTMvhendAwK5lI%2F6%2Big%2BkeWPg&X-Amz-Signature=fadd2ab75755fdaf9bd9e9d35195caecf34d06b06b3e57f4336453e3ede9e125&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VOHGVRD%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T150515Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCExYLN8Td0Z3YbnPrOaYX8E%2FiCJ2JOA74ZywAx96TOrwIhAIH4zLHHXSMTiK2stAhbwAuce6XYqT7%2BqvNwnXOBTb1tKv8DCBYQABoMNjM3NDIzMTgzODA1Igy2z8aAErza9hQ27ZEq3AO%2F7SPxdfPHof%2FprXbCJQKLPGEm0WpmsfGRNRWPu7BJKzQHHsb4Yf1ZtybRzc2s5WBPVLf9CFsIq0V6BQQXL1vzLh2GqQA88WoXZjp5pfSK9wtaEmQMTtKGz0al2EOLZ%2BPPjBJl%2BqoTzuTP87wNtf1BCDRdqgZh3ExhEWSoBln2MVMhU3fyh7hrjoPAmk4YqywvDIkGHyZNEPhdVpgb0tFxqlq0sn6HVUWyMDHgC2xhN0CpyrYieiP6atKpUSWi0e83qy%2FrBrh3VBeSEHJUZXJavftIJw1Xb31HunTd6H5FF7keYh2sJ%2Bo64m%2Ful9fPTNaw1aPN0LJPPt%2F3NKI7ZkBfFyGoXY8vFkXr5V9Foo%2F3U1bOIk24i3EXHv6xxlPbzu5K4ZH8j3U7aEO4QY1%2FGrvDX8eknXfSCcxgSFPEcjbSYXZ5CUEhkXfHXGVk1U%2BBj%2FPPtJzK%2FLyA4AZUtTjIxu1vLbzFk1yX9ke%2FiRLF1OzpyWVMaC5NuQsxvyRtm0GGk78IjNkqGb13HwrUOdnYjT0tpw%2FPdioDO%2F5ocUyk5JgT6XyI77ECdHB44C36eHk%2FI3Z48P41b4gT%2FoTa4RbYjGgU5F%2BMx0609kWmBanNS%2B5UsCYRamS4vhKTypuUxDD57tW%2BBjqkAaLvC6kfJzXy7gQwqVkR8zk4V%2F5s7PtXCvr8yVErQ9SkyoCODUuXeZlrPGT4zPRv5w6LxqtoN0pp%2FCs7N9Nb%2F%2FQp%2FLfOLNNtj4MpWTUFer7VPp1ui4H9Y6rVKsZGqSHk3ydzP1mpDygZ3qrAmjRzGPRwqmlK5IuRczI7GTYw6icbYx8Q6%2Bz5qUsIo92gT8paLDkcTMvhendAwK5lI%2F6%2Big%2BkeWPg&X-Amz-Signature=d6ca32cd886a86455f1767027aacd34484d9bb36142041ca91ec7f3edc836ea8&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
