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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDFBXQ2P%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T220730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICObzvTmbCmCHwUqaJLWSEegJMxdmjfpA0R5FG8XhnYvAiBKndUNimojjkebrm84at6xPvm9ksd2yxvgQ530tvz2USqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMksE9K6MqGwdOBLTcKtwDqxjKi4D2QNXewxw8IyUzFbVwIs8m1kQmqBMoICCbGoEuzmhwkmsX%2BrjJK0eQgKkCJuwB5I0NJnxXZqfm8G64THiAO%2B23YUg7%2FnHqTBqyVCPOeNSxUZwKEfPtduWsjvrMNk%2BXlAwMMDX4AT8VJqoY5eXIvTwcD1LbalYRZ%2FI3CjZrXKLLURQXeF3MPlvLrdy7jA5sLzAuKmADCVIT2z232P5zU1Q%2F2vBcXmn7aLxU9Ux6%2FWz3tg3dhKMy%2BO1u6et%2BMTjSG67IG9%2FWoYm4nBAQGE%2FsxXIlWpXvcFEappxO4WVUNAIrmLpDiZPmMmq0L%2Fk9GV36C89oVHofgTQcreLAuP1k50GMGvXCacwoPoO1rksE3pnA7WR8US4ADxqrE1DeLOSQv7TiRMg69ArLLqjd5qT0io9xOkaVMF0yoD4SNFBArjmqBTlDoeM38gUnIuQTmpkm60vJSb9mBH%2BI3izPkhyrP351tCkS6SgaeLjbYPJ7XtL6b4EMBbND8vj%2FJ%2BXzmEH2J5J7cfkAJy%2FxCae2cQNtjyAhK7kGKe63cKdgwyfwT7uhjjMehc3su4%2FXWW08PaY89Wmg%2BapaOEhWTMalJPOkR%2FRs1jAPdBQbvwjO51cdnIbb770JrDSDOlowpeKXwgY6pgGomyCS2DygzXCtXAaBYjfYgewfbjimzYWb44M47ljl6CxNKd%2FFD6l2P4AEYdC%2FhG88Z137kAtg3wP8oSkjILlKUV6FSZKAZmI19jKA0x0gPEtmnL%2BrsLmtXnWfQVuoyrtXnAoieXHH25RUtfDBtuxEuAt9htO9N1Feq5VfOv49dimcOrsFpwRek72Ha7HsuD2dSGBXOEhW%2BZ0LW5CURWuCng%2Fd5ENs&X-Amz-Signature=806bc8856718606c99630ef43114261d22b285518ade20c93fb290c16102ed62&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDFBXQ2P%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T220730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICObzvTmbCmCHwUqaJLWSEegJMxdmjfpA0R5FG8XhnYvAiBKndUNimojjkebrm84at6xPvm9ksd2yxvgQ530tvz2USqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMksE9K6MqGwdOBLTcKtwDqxjKi4D2QNXewxw8IyUzFbVwIs8m1kQmqBMoICCbGoEuzmhwkmsX%2BrjJK0eQgKkCJuwB5I0NJnxXZqfm8G64THiAO%2B23YUg7%2FnHqTBqyVCPOeNSxUZwKEfPtduWsjvrMNk%2BXlAwMMDX4AT8VJqoY5eXIvTwcD1LbalYRZ%2FI3CjZrXKLLURQXeF3MPlvLrdy7jA5sLzAuKmADCVIT2z232P5zU1Q%2F2vBcXmn7aLxU9Ux6%2FWz3tg3dhKMy%2BO1u6et%2BMTjSG67IG9%2FWoYm4nBAQGE%2FsxXIlWpXvcFEappxO4WVUNAIrmLpDiZPmMmq0L%2Fk9GV36C89oVHofgTQcreLAuP1k50GMGvXCacwoPoO1rksE3pnA7WR8US4ADxqrE1DeLOSQv7TiRMg69ArLLqjd5qT0io9xOkaVMF0yoD4SNFBArjmqBTlDoeM38gUnIuQTmpkm60vJSb9mBH%2BI3izPkhyrP351tCkS6SgaeLjbYPJ7XtL6b4EMBbND8vj%2FJ%2BXzmEH2J5J7cfkAJy%2FxCae2cQNtjyAhK7kGKe63cKdgwyfwT7uhjjMehc3su4%2FXWW08PaY89Wmg%2BapaOEhWTMalJPOkR%2FRs1jAPdBQbvwjO51cdnIbb770JrDSDOlowpeKXwgY6pgGomyCS2DygzXCtXAaBYjfYgewfbjimzYWb44M47ljl6CxNKd%2FFD6l2P4AEYdC%2FhG88Z137kAtg3wP8oSkjILlKUV6FSZKAZmI19jKA0x0gPEtmnL%2BrsLmtXnWfQVuoyrtXnAoieXHH25RUtfDBtuxEuAt9htO9N1Feq5VfOv49dimcOrsFpwRek72Ha7HsuD2dSGBXOEhW%2BZ0LW5CURWuCng%2Fd5ENs&X-Amz-Signature=acff59886bbcc1f853469a71b4b63e41f4fcd639d52f6dcea1a02c58906d86b2&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
