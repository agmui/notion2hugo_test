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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636SGUHY2%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T100816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIQC094szZcA79%2FrGbIPfmHHbTQIcz%2BD7c4LzdrHqm8tb9gIgBKd8JRbmZF569VWhcpDfL7d5lxNLEp4acPaCv6wgHqsq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDN2q%2FJcSMKet5Vy%2B5ircA7ImCfT6%2B472loHDfk60cjKMXUmCtlJtwDx0DLJD%2Fw9dzzuVOBsmOusGLnQ9VGQlvoCgTpZ5EuaARtPI%2FswY5%2Bi%2BCoJKwJSCcyzLgew1TbH2An%2BAZXo3OOU5ziR%2B2%2FHDKw2Vy3NjXkQBFsQmj%2FcZadT2GvoiqyE%2FmGV3Kf73DJMGvOC2UGCJ4WeYh8wUsZ7k85o8TCREvOMAF55z4fFkeZKSQNnVB3pFtLhqJkCPu51kMgl4VIzklS0EJVQUVrd%2FTzFjtdSSC%2Bt%2F6ut9vXqr6pBcnOKUljGXhK4B1vyV%2B3xIcCHLQx4fEdguw%2BB0S0BvTCRqbjCcMFzKOD1%2FXfaryJ9EC33c9fvlaF7YDF%2Fll52MOzz30rccN0NA9Bqf%2B0v1yOJxm5GPTLq2zuR%2BP0ddHLQTE5VyBGBaPTCkpXpuCEuJEfEfOqiC7AgVgisbr8%2Fb4B6NmuTVW35%2Fy4azhN2AgaWmb7%2FKn010ASfgt03xzDP%2BuZ4XkjH4MxKZJ2PgjEftYUbuvzHM9cgwO0kqnZ%2Fmy1dTY9UIvuoat%2FquaNinj95qZ%2BP%2FTd9BALgSkNuQPvMHk70Qq1j9ZnEnetwGimIdFvn4%2BK6ccx3eIqj7wJiYeQT8iIYbSekMaT39Fej1MPnptMIGOqUBI%2B5G%2FyWM%2Fi1z%2FJu807IsNn6CEj0hJDVygnFlyjDAh9nSWBFphjSVkUFE%2F2xzQ1Oi2P4i2MqwJb%2BOl8VGtihbKP5s%2Ft3tzhEwpGTmyzQqAw6FRD3mKFGZZO804vZi4gmEYTEqTAYTtQWNthLLVpX0%2F3DPfaLXQ4Bk0yRlnkKX1%2BuV5VPQFUuoPiGwecMzJKEGT4GKIISMTz%2FHbVzPPB9EJL2H5qd%2F&X-Amz-Signature=228214a7fd8ec093b083363918abb3ca8c7fa5c4b9972b6bdc241e3cbc5f6262&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636SGUHY2%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T100816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIQC094szZcA79%2FrGbIPfmHHbTQIcz%2BD7c4LzdrHqm8tb9gIgBKd8JRbmZF569VWhcpDfL7d5lxNLEp4acPaCv6wgHqsq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDN2q%2FJcSMKet5Vy%2B5ircA7ImCfT6%2B472loHDfk60cjKMXUmCtlJtwDx0DLJD%2Fw9dzzuVOBsmOusGLnQ9VGQlvoCgTpZ5EuaARtPI%2FswY5%2Bi%2BCoJKwJSCcyzLgew1TbH2An%2BAZXo3OOU5ziR%2B2%2FHDKw2Vy3NjXkQBFsQmj%2FcZadT2GvoiqyE%2FmGV3Kf73DJMGvOC2UGCJ4WeYh8wUsZ7k85o8TCREvOMAF55z4fFkeZKSQNnVB3pFtLhqJkCPu51kMgl4VIzklS0EJVQUVrd%2FTzFjtdSSC%2Bt%2F6ut9vXqr6pBcnOKUljGXhK4B1vyV%2B3xIcCHLQx4fEdguw%2BB0S0BvTCRqbjCcMFzKOD1%2FXfaryJ9EC33c9fvlaF7YDF%2Fll52MOzz30rccN0NA9Bqf%2B0v1yOJxm5GPTLq2zuR%2BP0ddHLQTE5VyBGBaPTCkpXpuCEuJEfEfOqiC7AgVgisbr8%2Fb4B6NmuTVW35%2Fy4azhN2AgaWmb7%2FKn010ASfgt03xzDP%2BuZ4XkjH4MxKZJ2PgjEftYUbuvzHM9cgwO0kqnZ%2Fmy1dTY9UIvuoat%2FquaNinj95qZ%2BP%2FTd9BALgSkNuQPvMHk70Qq1j9ZnEnetwGimIdFvn4%2BK6ccx3eIqj7wJiYeQT8iIYbSekMaT39Fej1MPnptMIGOqUBI%2B5G%2FyWM%2Fi1z%2FJu807IsNn6CEj0hJDVygnFlyjDAh9nSWBFphjSVkUFE%2F2xzQ1Oi2P4i2MqwJb%2BOl8VGtihbKP5s%2Ft3tzhEwpGTmyzQqAw6FRD3mKFGZZO804vZi4gmEYTEqTAYTtQWNthLLVpX0%2F3DPfaLXQ4Bk0yRlnkKX1%2BuV5VPQFUuoPiGwecMzJKEGT4GKIISMTz%2FHbVzPPB9EJL2H5qd%2F&X-Amz-Signature=75ff3d466c97e8be0c7ea4770def3355e2ba65ef10671016d72c5c076e08fc6a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
