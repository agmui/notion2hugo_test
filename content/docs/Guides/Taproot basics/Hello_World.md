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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFFBRADQ%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T150353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH93N%2F9CdvWOjaXrt9LzjLrIkAjH79Fn4v55qxeCRrHEAiBx0kItdOX2Hd0Ey%2FCPwV8Xqgv3fSPOeRoA2rx%2B55zThCqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMndLfcQ4M2Yq%2BoiFIKtwDhuIvmkvivejM88fb1kqiboNKhAvdqBGNCmTsVXzX5JxD856wcGPX3lYUYLiYZw9N03Pi5A%2FK8MCAExSit4IN9n7cvY2Q2PEXqTDhD3stGmO%2FTaa1hjcZyzVCxCZxtfyE%2ByNSRYHrDcZcejZJCO4JIR9KlFJHyG7fnvBugZ6ywikZAP%2F%2B0xv9aVOetwqwksMRyRl35k4rYDZ2%2Bq61QWpVF2gmplfUd1UDPMDvr%2FQ5tFtxasJOlgFy%2Bv6mYZuIHWMq6EGz4o3rNlIhSLbApgkjO0YqrJ9xZ7uvU0synYwo2qCnGAsZn0MrbHuAd9uJP6eJFrHfkO9O1e44i2RBOJ810XcDoEyxrj8vwGktLPsav5%2BZtfiT3Vk%2Br%2FUUQHZnYzsw9TeKce2n4Ez9t%2Fuy%2B3c%2BpBiiS%2B%2FcybigkIrFnJlanRXmafS0lwMroTEoUgzrMgCE6nWp4gUav7OUlgspvhB0bHWd9OtzrbVp0BBntnTL3AV9jVQ0R2xHYm58q2mwvOU%2BQOw%2BGqyWmkJ5QmKjuBk%2FoP8es3RlmvTmb1ZpXK62FMg7LQeqWI%2BgMD%2FUaovY6kYI4tdF4rcHj7c3ZIYHf6WqgKHk%2F5Vi%2Be5fBSLWg%2FJPVT9bfUUAPt2yarZSCY8wr8D9vAY6pgEye686BjrCQbGwO7xK2T92Q9HoH8U7BqFdzL0znhE3KUUcV5AyP9BY9PELIlepVbKD%2FZLDiINGRV4HGfAFQF8jvII5yyzpLJvJWIXKBDubapOTHR7MdeKf0WZDTr3FVvVdJVE0AcHZmv6cGhDihTI8CdfWn%2FO%2BlbR5s%2BQ0HMFgZykeHnRtGL4HbMyzqWFUcy8s%2BGp5oYfT3vNgYrO76I%2FseMjsbqBj&X-Amz-Signature=7d94331032f1664b0da3b2f6814e01e3e2e29274dae3c499a7fb90341fc71afd&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFFBRADQ%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T150353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH93N%2F9CdvWOjaXrt9LzjLrIkAjH79Fn4v55qxeCRrHEAiBx0kItdOX2Hd0Ey%2FCPwV8Xqgv3fSPOeRoA2rx%2B55zThCqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMndLfcQ4M2Yq%2BoiFIKtwDhuIvmkvivejM88fb1kqiboNKhAvdqBGNCmTsVXzX5JxD856wcGPX3lYUYLiYZw9N03Pi5A%2FK8MCAExSit4IN9n7cvY2Q2PEXqTDhD3stGmO%2FTaa1hjcZyzVCxCZxtfyE%2ByNSRYHrDcZcejZJCO4JIR9KlFJHyG7fnvBugZ6ywikZAP%2F%2B0xv9aVOetwqwksMRyRl35k4rYDZ2%2Bq61QWpVF2gmplfUd1UDPMDvr%2FQ5tFtxasJOlgFy%2Bv6mYZuIHWMq6EGz4o3rNlIhSLbApgkjO0YqrJ9xZ7uvU0synYwo2qCnGAsZn0MrbHuAd9uJP6eJFrHfkO9O1e44i2RBOJ810XcDoEyxrj8vwGktLPsav5%2BZtfiT3Vk%2Br%2FUUQHZnYzsw9TeKce2n4Ez9t%2Fuy%2B3c%2BpBiiS%2B%2FcybigkIrFnJlanRXmafS0lwMroTEoUgzrMgCE6nWp4gUav7OUlgspvhB0bHWd9OtzrbVp0BBntnTL3AV9jVQ0R2xHYm58q2mwvOU%2BQOw%2BGqyWmkJ5QmKjuBk%2FoP8es3RlmvTmb1ZpXK62FMg7LQeqWI%2BgMD%2FUaovY6kYI4tdF4rcHj7c3ZIYHf6WqgKHk%2F5Vi%2Be5fBSLWg%2FJPVT9bfUUAPt2yarZSCY8wr8D9vAY6pgEye686BjrCQbGwO7xK2T92Q9HoH8U7BqFdzL0znhE3KUUcV5AyP9BY9PELIlepVbKD%2FZLDiINGRV4HGfAFQF8jvII5yyzpLJvJWIXKBDubapOTHR7MdeKf0WZDTr3FVvVdJVE0AcHZmv6cGhDihTI8CdfWn%2FO%2BlbR5s%2BQ0HMFgZykeHnRtGL4HbMyzqWFUcy8s%2BGp5oYfT3vNgYrO76I%2FseMjsbqBj&X-Amz-Signature=1815f8b53a37a20d2948f861102ff5a75d5e346d518de9d3dd3b1e3899c1f6ef&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
