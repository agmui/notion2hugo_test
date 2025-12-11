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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PMMHF42%2F20251211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251211T014432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQD7WErbvWSqHN3SY9GS2lnhy3v7b9PkAjo68hsKcny1XAIhAMzjAYwWg7Du9DqjAAeHX9ARdM%2FTseQev7V7vx5kGSVeKogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxKLX70AMfXud0C71Aq3AO7fNX4beUOI5OKLpiHSv4xNjSFnE5ISpsdATVQXSPrVLpE4oDFc%2B8CiPidzsO4JMbEAzeIMve5YpP7Dqr%2BiHzdsB5BLXPXbbVBOev1OJXnJfLFOttjjJNcGoirqM6l2JJ3dYUtoa%2BDeZHZEPp7l8L4BvS7ltxFt9Y0Dt8AhnAK0hM5ox4ZGYYLl3BaQecOYut4Te3DMFTBRyQr3OEKQUeHDrCiAEnIpXQVG9wnBBpGdLm7IvDhxMZdaKbzV5JeMaask0LM36mOpurgbLRwJb8owDBmI9gYBfYGTbfVp05tMGs8Fzy5sovSaIM9Iw%2BfsdOqX4rZKicV3FmQaprz7PeOXt9HmabqxXR6p3F1owUmb9%2FF4OP0%2FwOpOtCV%2BjxC4p3wlb5m3XUHsxpXtUhev3zY3Jgm8qQ1OQIcz50ZSA8vKQuqtHfu6MkNV7yfRRqzAuf58hn3TAkuFurRuVaIDm1GHXav9Tw5qGiI1eZCGLHWMAGf%2BeHEQHwXz02JukBrzXwEc7V7X25wKtaw74H4ebW77TbiaQITPv8wm7KL3%2FD%2FEMrxCXskvCfuq7uYnOueiyvLj0XEjCXii8thvzDPTTXgHSsctC%2FD4NsRU0H66to04DxYjL%2FzFlW7%2BfWl8jDxtejJBjqkARJCyH1NeCKHsXKnPU1HQ%2FDDISuPd8axOWDLOth8kBJHB48pA3rvVeAsa22Ksr1AkmUhH1xkMvulpwSmpn5PrbQQuSHGm3CqwE03iXHqWuv%2BOzxZ6QsRNpdOkrBHPGnx1hS3vGxC9GlUiQOftCbXv11FTzwGXNYeWzbodVEaN4Ukb%2BWRSZh%2BmgfOF0NgdC7eIH1%2FxpOs5ninRNk%2Fg8hm9IVXqp4G&X-Amz-Signature=716ce3cab16c30a9ed858c8c9878d5178fcf9e2a93ac0494ae495f7b84654285&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PMMHF42%2F20251211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251211T014432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQD7WErbvWSqHN3SY9GS2lnhy3v7b9PkAjo68hsKcny1XAIhAMzjAYwWg7Du9DqjAAeHX9ARdM%2FTseQev7V7vx5kGSVeKogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxKLX70AMfXud0C71Aq3AO7fNX4beUOI5OKLpiHSv4xNjSFnE5ISpsdATVQXSPrVLpE4oDFc%2B8CiPidzsO4JMbEAzeIMve5YpP7Dqr%2BiHzdsB5BLXPXbbVBOev1OJXnJfLFOttjjJNcGoirqM6l2JJ3dYUtoa%2BDeZHZEPp7l8L4BvS7ltxFt9Y0Dt8AhnAK0hM5ox4ZGYYLl3BaQecOYut4Te3DMFTBRyQr3OEKQUeHDrCiAEnIpXQVG9wnBBpGdLm7IvDhxMZdaKbzV5JeMaask0LM36mOpurgbLRwJb8owDBmI9gYBfYGTbfVp05tMGs8Fzy5sovSaIM9Iw%2BfsdOqX4rZKicV3FmQaprz7PeOXt9HmabqxXR6p3F1owUmb9%2FF4OP0%2FwOpOtCV%2BjxC4p3wlb5m3XUHsxpXtUhev3zY3Jgm8qQ1OQIcz50ZSA8vKQuqtHfu6MkNV7yfRRqzAuf58hn3TAkuFurRuVaIDm1GHXav9Tw5qGiI1eZCGLHWMAGf%2BeHEQHwXz02JukBrzXwEc7V7X25wKtaw74H4ebW77TbiaQITPv8wm7KL3%2FD%2FEMrxCXskvCfuq7uYnOueiyvLj0XEjCXii8thvzDPTTXgHSsctC%2FD4NsRU0H66to04DxYjL%2FzFlW7%2BfWl8jDxtejJBjqkARJCyH1NeCKHsXKnPU1HQ%2FDDISuPd8axOWDLOth8kBJHB48pA3rvVeAsa22Ksr1AkmUhH1xkMvulpwSmpn5PrbQQuSHGm3CqwE03iXHqWuv%2BOzxZ6QsRNpdOkrBHPGnx1hS3vGxC9GlUiQOftCbXv11FTzwGXNYeWzbodVEaN4Ukb%2BWRSZh%2BmgfOF0NgdC7eIH1%2FxpOs5ninRNk%2Fg8hm9IVXqp4G&X-Amz-Signature=e99d71c32471275ff2a5cd59b41cbc83f1fff04193429d5bd28f0bbca947ca59&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
