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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBAJ2AEZ%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T220713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQDiV7ovDcu4UP2RlKSVkt9s4%2Fyd9yk5UbwXkBZkOyzLjAIgF9dDfLEtD18c45mWNWzT8YObK3E9VOqQ6NyNPcpFKboqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOKBLBdNgoh8KsVO0SrcA8z3BIQmcCygcJL0gsuy0KmnYbLK%2Bn3VXdCorhj%2FlxJOsaX8lH9DYxjk9MPijOGdHxbQq0fsykgRffyP41WiOhNzYwQ3qoxYTc02hDSX6JJWYQzHKdjEVFlRhOUoWelxQpgKMsHCID8CSZLkQP3tlAlH2ST13GZCBTYbXBqgSfx4ns28HTopS9Tfq6a5bstunCR0GiGS4aRLDrt%2FbVBz%2FWJArIRvMchO4w%2FwFfvQfN3E8j%2B%2Fv5WzKRv5U1phopeeSdW%2BkEsaDwNn%2BwFrIc3JFKvInDE8qrqe39IG%2Fs%2BcP7pJ8A8a%2B2OZ0BMS%2B8P75GSNKqc5ZFfIc51kA1a3ZEaes7HUk50vyQDR0TgDw7AblDfyGm476Pjmvr9CFN1XoptgEBggy9NMnAAs1F%2BSvCOkb1r8UMnqXMir6DJQyq0Jw%2BHrAa2PV7R9l%2B6sazOPFP5Ozhz9ofzKsyQ3c0oDfvo5YtMYwH5D6ezPo05HdhuZ%2FN%2BJ2rv9S9JSPTGZyVLElIUtDznPW9%2FZdQY7jP%2Bqppr95TEb2MFbsnYMF6ORNQPgmncF7BGne5Ep9XkyArGyqMSoTpAYmlvFkGS7n6U8uysDps5tTNVvpuEUjFK2lEsE%2BkvSl%2BuX%2FHsk%2BtofIqyMMIrSwr4GOqUBfg0EC5weFUw5skVk69TaQX3BzvyLGZNfnkd91UxuxyNBi7jgO2HsZpr6UP1xiPpYYdAZkIal2YbPueSkcHvbu4o9C5zIHq7JlBWMnvs3TzoGEfX6j2gTNW%2FXpMXYHBqRzP%2BK26VtqYgWpnQ6e7hp0%2BDyTdYO5%2B5GI41PLonFs0InsCt138o3cEFdRF6pk1d13W7ERWNih9mlhHmgIvc1twF1lm1R&X-Amz-Signature=67c6b14cfa82202c6d05e1acb3401ac0b006c160c375b3481e33e94e1994fe2f&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBAJ2AEZ%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T220713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQDiV7ovDcu4UP2RlKSVkt9s4%2Fyd9yk5UbwXkBZkOyzLjAIgF9dDfLEtD18c45mWNWzT8YObK3E9VOqQ6NyNPcpFKboqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOKBLBdNgoh8KsVO0SrcA8z3BIQmcCygcJL0gsuy0KmnYbLK%2Bn3VXdCorhj%2FlxJOsaX8lH9DYxjk9MPijOGdHxbQq0fsykgRffyP41WiOhNzYwQ3qoxYTc02hDSX6JJWYQzHKdjEVFlRhOUoWelxQpgKMsHCID8CSZLkQP3tlAlH2ST13GZCBTYbXBqgSfx4ns28HTopS9Tfq6a5bstunCR0GiGS4aRLDrt%2FbVBz%2FWJArIRvMchO4w%2FwFfvQfN3E8j%2B%2Fv5WzKRv5U1phopeeSdW%2BkEsaDwNn%2BwFrIc3JFKvInDE8qrqe39IG%2Fs%2BcP7pJ8A8a%2B2OZ0BMS%2B8P75GSNKqc5ZFfIc51kA1a3ZEaes7HUk50vyQDR0TgDw7AblDfyGm476Pjmvr9CFN1XoptgEBggy9NMnAAs1F%2BSvCOkb1r8UMnqXMir6DJQyq0Jw%2BHrAa2PV7R9l%2B6sazOPFP5Ozhz9ofzKsyQ3c0oDfvo5YtMYwH5D6ezPo05HdhuZ%2FN%2BJ2rv9S9JSPTGZyVLElIUtDznPW9%2FZdQY7jP%2Bqppr95TEb2MFbsnYMF6ORNQPgmncF7BGne5Ep9XkyArGyqMSoTpAYmlvFkGS7n6U8uysDps5tTNVvpuEUjFK2lEsE%2BkvSl%2BuX%2FHsk%2BtofIqyMMIrSwr4GOqUBfg0EC5weFUw5skVk69TaQX3BzvyLGZNfnkd91UxuxyNBi7jgO2HsZpr6UP1xiPpYYdAZkIal2YbPueSkcHvbu4o9C5zIHq7JlBWMnvs3TzoGEfX6j2gTNW%2FXpMXYHBqRzP%2BK26VtqYgWpnQ6e7hp0%2BDyTdYO5%2B5GI41PLonFs0InsCt138o3cEFdRF6pk1d13W7ERWNih9mlhHmgIvc1twF1lm1R&X-Amz-Signature=18709c27b9c2a1a9c5f4ea5a48eed719c739e76c030cb4a1c5f4fe9c8103850e&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
