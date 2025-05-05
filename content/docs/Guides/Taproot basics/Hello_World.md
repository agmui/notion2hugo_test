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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YP4VEYPU%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T091019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICKF9Jb7ziHz%2BiH8XMUA3un4QRXlJ9%2BPOtRjZ3RpGDd4AiBP7i9CAHTQsbOoOgpoLwIsgMq3B9O41XkltAKs%2BSok5Sr%2FAwgoEAAaDDYzNzQyMzE4MzgwNSIMz4I7%2F%2BE5ottpc7%2B7KtwDHwihp5t%2FGfKiV2Kha%2FyWY%2Fq5OcRnNw8orz51K9zvkmytsMVysbivuZHMi4WMBxU0gHT%2Bk5SkyVUEedYY76jfTR6v%2B%2B%2FbHrjSHriladwZwak3QWNU%2BpV%2B9n4ycHGKIh0mDSNFFvz%2FW2HLKuUAtA0kzAw1KiQE%2BLBX%2Ff0suRQnZGng3bWgiAhJ2tXdpixenF6cBmbqjxPj2B2RrC37B%2BgbpaeY8k36fxJW12vadgkkZov3AuS03JHlRZiPytu6WWJSb6TAS39QQqVBVNCeqnYVUWKqOMuOuhED%2Fe61oE5q68ND%2BpmuUIorHe%2FhCSdBCdEb4WzqMHDncejt10GyFs%2FJahpeQkg%2BrLYBvdFH%2FVfwjhvLMPQFJqaOsjyjb%2Fn3dbwHDIPW3%2BG%2BmbUl1yuMBmvU2x4hhYuoaDJ%2F1MK2xvrhwTvUJdk%2BXRqmzHThP1M8daxmTB1s950ZmS%2FmGeAqAQa4sGBelms9wDUMY7BcF0vlOeY3%2FUdaAYs8i6Z9PiJI8B%2F1LdvONYxMjV59FoS1axaFNg5tRtS8k9LSAROu5K59YTB67c%2BTBFElpczAh25kg81By5JoQMn%2BQpEYGoqr%2FZaCu82lk7aUQ9nYTQJJwk8jRLfz82hziKX3S%2B7v6c0wrM%2FhwAY6pgF6wcA244WyQqWHmi4IUruFKtnBTvQwTRZSRbXmwhcHs%2BE9ZwQHhEU0umOK3wVAmKUWNy%2BEQocBRGFwd8oQm73L4LNFslPMjKtst4%2FGMM5zwhrAJ45VBiuCwi%2FzETmSpt4YGYLy%2BAIdnQq6izcAplDAgIas9kdCYvS7SGRnSBprCzvWjlpayQjQk5pOWWwPOk%2FcPymi%2Bl5pBqxCZJxPl%2FBfQK9w47RF&X-Amz-Signature=ccc23c90316982aa509e97566aad7474853957b82038b7d9ab159dff1b231b5a&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YP4VEYPU%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T091019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICKF9Jb7ziHz%2BiH8XMUA3un4QRXlJ9%2BPOtRjZ3RpGDd4AiBP7i9CAHTQsbOoOgpoLwIsgMq3B9O41XkltAKs%2BSok5Sr%2FAwgoEAAaDDYzNzQyMzE4MzgwNSIMz4I7%2F%2BE5ottpc7%2B7KtwDHwihp5t%2FGfKiV2Kha%2FyWY%2Fq5OcRnNw8orz51K9zvkmytsMVysbivuZHMi4WMBxU0gHT%2Bk5SkyVUEedYY76jfTR6v%2B%2B%2FbHrjSHriladwZwak3QWNU%2BpV%2B9n4ycHGKIh0mDSNFFvz%2FW2HLKuUAtA0kzAw1KiQE%2BLBX%2Ff0suRQnZGng3bWgiAhJ2tXdpixenF6cBmbqjxPj2B2RrC37B%2BgbpaeY8k36fxJW12vadgkkZov3AuS03JHlRZiPytu6WWJSb6TAS39QQqVBVNCeqnYVUWKqOMuOuhED%2Fe61oE5q68ND%2BpmuUIorHe%2FhCSdBCdEb4WzqMHDncejt10GyFs%2FJahpeQkg%2BrLYBvdFH%2FVfwjhvLMPQFJqaOsjyjb%2Fn3dbwHDIPW3%2BG%2BmbUl1yuMBmvU2x4hhYuoaDJ%2F1MK2xvrhwTvUJdk%2BXRqmzHThP1M8daxmTB1s950ZmS%2FmGeAqAQa4sGBelms9wDUMY7BcF0vlOeY3%2FUdaAYs8i6Z9PiJI8B%2F1LdvONYxMjV59FoS1axaFNg5tRtS8k9LSAROu5K59YTB67c%2BTBFElpczAh25kg81By5JoQMn%2BQpEYGoqr%2FZaCu82lk7aUQ9nYTQJJwk8jRLfz82hziKX3S%2B7v6c0wrM%2FhwAY6pgF6wcA244WyQqWHmi4IUruFKtnBTvQwTRZSRbXmwhcHs%2BE9ZwQHhEU0umOK3wVAmKUWNy%2BEQocBRGFwd8oQm73L4LNFslPMjKtst4%2FGMM5zwhrAJ45VBiuCwi%2FzETmSpt4YGYLy%2BAIdnQq6izcAplDAgIas9kdCYvS7SGRnSBprCzvWjlpayQjQk5pOWWwPOk%2FcPymi%2Bl5pBqxCZJxPl%2FBfQK9w47RF&X-Amz-Signature=14dc1d8caa4d886ee147709fd99b5733fbbffcd0eea8e142f32e9b68a78e85c7&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
