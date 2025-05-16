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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZJJ2OFH%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T033621Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICSmZMigeQT7lKg53jgLf3eHPRdxiZ0FBEx4GLvvIEtEAiBaHZo%2BU0b2gRuSwLfQzsZgpVU51mWhO%2BGanUjEmGtMASr%2FAwg8EAAaDDYzNzQyMzE4MzgwNSIMDihX2ZtA6v3aNMiMKtwD5AtWfk6KwAauoSypimGUUWAvMPTcKzINFIVvRTWRgjVbOjCNwgyHIQbb1TXTYkYhjly2O8LqwQ7fJCNXZZzIbzGXWPvUxJEfHE9HZxAUJYz1WzsKXt%2FEZw8djlQBKz4bumAWPkFy7dfMgeP6E3Ec%2BiVIzKvdcaR17yJdFJ6ZPSR4hf%2B4E%2FwKVsGqD7J3Lkza%2BLsR8FOymAK6uCbdPb6b8M4QZugQ013Z9aXrW9ZVR%2BLoNuW1XiAWp%2BZU%2BKFdsau9b%2FIv5bmAyB8nyv5lmIaDXx4Vf8328d%2FXFg%2FOSMTJNvHfgYP6acXwYYRrD59NnJQ7VzykLRtNh%2FQMD7z9eAkDcy4w2LZVQUHgryXNU3KaHSU68aVDJFXdMraVEY%2F3N8LXhJqXcm8s6H93gzvbKdu24USOBVHelZ3oHqNACyOwDdmT8ZDmkPFQXngekrBfQl1OcGbqyCi2qE71p0o3a6Bo0kAU%2Fsyc6ray%2F%2FV18te4kpn1Oi2%2BqsqWGaj7EbK%2BUgakm5yg4d9ED8t1CcBB57Jp3XgFyasyBSpj1Npl8R6vsmVqTgi075njZc2Opr%2FZ5cwQ%2FkXaQ9NkLqxR4dog7IB24dKbKzJr%2BRdCv6B3YF2a5Nq27WrK%2FcHl3ngqbMcwv92awQY6pgHzHzkaqkYFpv9ghntQm%2BNAZt7MCP04DeeXZo1VLEBz5wD5xNDY9plO3sJVTGQ39%2F53mSqg8ZQZFxFUoxCutdHfI5MpVLBQuQCW%2FQNhkzt83AoezlNVB4ieIJBSBEKBP%2Fp%2F8AyU0zPZA%2FXMGzD2%2FFyhsWB67VNcZc92iJyGuxHIG7mJ6rT%2BNAmJGJ4USCSqGQVvLP2HwXO1eBSIn%2Bj%2Fo2U60vu9SeOZ&X-Amz-Signature=9458207bc5428e5bb4646ee2f08a80ca636f2c187b3420794709ec3350402da8&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZJJ2OFH%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T033621Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICSmZMigeQT7lKg53jgLf3eHPRdxiZ0FBEx4GLvvIEtEAiBaHZo%2BU0b2gRuSwLfQzsZgpVU51mWhO%2BGanUjEmGtMASr%2FAwg8EAAaDDYzNzQyMzE4MzgwNSIMDihX2ZtA6v3aNMiMKtwD5AtWfk6KwAauoSypimGUUWAvMPTcKzINFIVvRTWRgjVbOjCNwgyHIQbb1TXTYkYhjly2O8LqwQ7fJCNXZZzIbzGXWPvUxJEfHE9HZxAUJYz1WzsKXt%2FEZw8djlQBKz4bumAWPkFy7dfMgeP6E3Ec%2BiVIzKvdcaR17yJdFJ6ZPSR4hf%2B4E%2FwKVsGqD7J3Lkza%2BLsR8FOymAK6uCbdPb6b8M4QZugQ013Z9aXrW9ZVR%2BLoNuW1XiAWp%2BZU%2BKFdsau9b%2FIv5bmAyB8nyv5lmIaDXx4Vf8328d%2FXFg%2FOSMTJNvHfgYP6acXwYYRrD59NnJQ7VzykLRtNh%2FQMD7z9eAkDcy4w2LZVQUHgryXNU3KaHSU68aVDJFXdMraVEY%2F3N8LXhJqXcm8s6H93gzvbKdu24USOBVHelZ3oHqNACyOwDdmT8ZDmkPFQXngekrBfQl1OcGbqyCi2qE71p0o3a6Bo0kAU%2Fsyc6ray%2F%2FV18te4kpn1Oi2%2BqsqWGaj7EbK%2BUgakm5yg4d9ED8t1CcBB57Jp3XgFyasyBSpj1Npl8R6vsmVqTgi075njZc2Opr%2FZ5cwQ%2FkXaQ9NkLqxR4dog7IB24dKbKzJr%2BRdCv6B3YF2a5Nq27WrK%2FcHl3ngqbMcwv92awQY6pgHzHzkaqkYFpv9ghntQm%2BNAZt7MCP04DeeXZo1VLEBz5wD5xNDY9plO3sJVTGQ39%2F53mSqg8ZQZFxFUoxCutdHfI5MpVLBQuQCW%2FQNhkzt83AoezlNVB4ieIJBSBEKBP%2Fp%2F8AyU0zPZA%2FXMGzD2%2FFyhsWB67VNcZc92iJyGuxHIG7mJ6rT%2BNAmJGJ4USCSqGQVvLP2HwXO1eBSIn%2Bj%2Fo2U60vu9SeOZ&X-Amz-Signature=e655b7237cb57072d48629566a1f8f1a7c44101cb926698077a1ce82e8b6ddae&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
