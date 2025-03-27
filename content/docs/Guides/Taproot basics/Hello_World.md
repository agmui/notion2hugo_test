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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672HTHELX%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T070819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEZbCgAqWCwZSS6N8poYuEit5dgYbPwT1mS5gV1Yn8vpAiEAuJeZS6mg%2B%2BG4mo2qG9MJuKbwIgaapoUO9Hzw3YDxpj4q%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDIjgDEP9qiFn6Saj%2BCrcA0Jdp%2Bg5dhvnmWhpNOF0w1GELMRB%2BVc0yC64YBnkfJGrvaylR5o9vbPm0wfSUgqtIqr3YnoDFem1WP4GXDHu3LMSP8ovbTZqK6uWqtgdtNh48uSxNWo5K%2FvRAuJZb3p39OhtT4VSIbg1tPDIkrupM6iolgJxFnwbt%2FeQNMwI6U7tbIYqRWWPs6yDBy%2B%2BuFgz%2B6W58WPKxTFliUlhFx2Lf3fvEwGhOQvLl8SZsisz4QXfk06nwhFxzNVLFMOd5DLOvOX0mV6VRMOIosDVw%2FrOPw4sFGyyIRy5tF1QKkAftuUYoiiDXOHergBAdq5ab8E2I3f7ZZDfnR7OvqCdKW9tlC4nPJcMpVZ4pAfdXyhWRxlMVyeeL7JvgZirR40jIxEm3PKFlqjwtolaHMe3dSattfbPui%2FReoDUXCkmMgRqTNElO8gNUKWCzvx%2FX7N7U9kxlSI1Uz%2F1XuthkvpKZxJ8s1lJeCPi6UmDPSk17Lg9B4ktc040f8HaJyuPO%2BA911HWXARUqCXqzazeQUMUfKnj7wAtF%2F3DEyYGkaccFMvTO3SwWT916e4H%2BK6RP%2BTKjoqlf%2BQAbQ0URELHF%2B5WFUV3WjO4TSE%2FxTgAT576dvpOIAHY%2FMQbV9GTvzEvBmjFMMLnk78GOqUBGJ%2FPgoPBGkITSy191kipPSjuMDhcN8ZQMBpem%2BgT43zE5lbsyi6NxMnjKy52SyKKt%2FCMwNym6n0uSgwK6IryzTRmO1%2FkJcMnDhSgal9%2BPeLuNVa6pIr1pKbTdPJpbCLhaIwPuwiRBubs%2FOk4dAdO2iA%2B8ldo3Dp50EVraDh6cOflf%2BA7XK4pSzLFNBjj1CpSSf%2F9HowloKDlCrQ3pnl6z6Q%2Fpq9x&X-Amz-Signature=76732794ff5276570a86b8e3e3c3446c98ea7b33cbc2638ba7bcd235797e10c3&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672HTHELX%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T070819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEZbCgAqWCwZSS6N8poYuEit5dgYbPwT1mS5gV1Yn8vpAiEAuJeZS6mg%2B%2BG4mo2qG9MJuKbwIgaapoUO9Hzw3YDxpj4q%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDIjgDEP9qiFn6Saj%2BCrcA0Jdp%2Bg5dhvnmWhpNOF0w1GELMRB%2BVc0yC64YBnkfJGrvaylR5o9vbPm0wfSUgqtIqr3YnoDFem1WP4GXDHu3LMSP8ovbTZqK6uWqtgdtNh48uSxNWo5K%2FvRAuJZb3p39OhtT4VSIbg1tPDIkrupM6iolgJxFnwbt%2FeQNMwI6U7tbIYqRWWPs6yDBy%2B%2BuFgz%2B6W58WPKxTFliUlhFx2Lf3fvEwGhOQvLl8SZsisz4QXfk06nwhFxzNVLFMOd5DLOvOX0mV6VRMOIosDVw%2FrOPw4sFGyyIRy5tF1QKkAftuUYoiiDXOHergBAdq5ab8E2I3f7ZZDfnR7OvqCdKW9tlC4nPJcMpVZ4pAfdXyhWRxlMVyeeL7JvgZirR40jIxEm3PKFlqjwtolaHMe3dSattfbPui%2FReoDUXCkmMgRqTNElO8gNUKWCzvx%2FX7N7U9kxlSI1Uz%2F1XuthkvpKZxJ8s1lJeCPi6UmDPSk17Lg9B4ktc040f8HaJyuPO%2BA911HWXARUqCXqzazeQUMUfKnj7wAtF%2F3DEyYGkaccFMvTO3SwWT916e4H%2BK6RP%2BTKjoqlf%2BQAbQ0URELHF%2B5WFUV3WjO4TSE%2FxTgAT576dvpOIAHY%2FMQbV9GTvzEvBmjFMMLnk78GOqUBGJ%2FPgoPBGkITSy191kipPSjuMDhcN8ZQMBpem%2BgT43zE5lbsyi6NxMnjKy52SyKKt%2FCMwNym6n0uSgwK6IryzTRmO1%2FkJcMnDhSgal9%2BPeLuNVa6pIr1pKbTdPJpbCLhaIwPuwiRBubs%2FOk4dAdO2iA%2B8ldo3Dp50EVraDh6cOflf%2BA7XK4pSzLFNBjj1CpSSf%2F9HowloKDlCrQ3pnl6z6Q%2Fpq9x&X-Amz-Signature=afcc85df150d68ebcd5de1b2bc2009f2edbc6227d11036681508b9d22da81eef&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
