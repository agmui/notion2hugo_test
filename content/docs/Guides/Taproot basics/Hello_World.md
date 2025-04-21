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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRJNRNV6%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T230752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIQDZYjN0OniuvAnsljmrms4MJnTYfaoPUf14CxYbNx31AQIgKiBQbr6QryQkOUPO9Cc9dxm7rMdjiiAUWep9CssgXUkqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOTntTxJ5Eh5VY0Y9yrcA9yJH2Pp9%2B2fXa9QgnhxTs6nBDKOue95BJRNpzE07Hhs9%2BTFDGt%2BL3ou1qOcOWas4oBv4nts5Wj91U4TgPULkJH%2FTNWq6P72BOal3zfXlFuYefb0MyHnPgc4qCRumiS1JmygOqA9RP%2FevuUvt3016XsUFv%2FgdIOAamSoWcV6zCouU6uH3JJeScXKQ6G0z5vPyLTNqNNcnsWU7Qar1bWY5E9v81I8KAddTrqAcZqVvc%2BcBaOxV5oUiclchbkhGYfqsikxobj5pD%2BIHVWvK%2BiFAbwyfsBLiH%2BsZJPl7QroAHdeHA5rzpVSAjfkB7MIOQqg7DPh4yWlWnDFpIob2eGOWkLRC%2B%2BTfwPNghiFVC2PJcLbiqez4FzgwJ2chzIVwYPPvREcGppSgfJuXVoYbM0YRPM9CTPFSmOWaQuYiw52NSgAnN9kiHwzfE1SkbunjH4Q9s0YBxSGFKbcFcCIm%2FS5rz%2FAyB1X9PgVe8l4rv%2FfiDCZIo%2FuEFQdPyiGN1OvbkH%2BsgYBQ2M1TgEq3ippza5FApSfRyiEZMh%2Be3oLVF893ZaXKxgEyLRQz2UhqMf2O5m%2FHe8z1za2qU6XiQLBQpxCW40gZgDMHveWlb5tfwZF9WlFEkpfNAWLubQZFvQwMJyHm8AGOqUBOm4OR%2FYmE988SENsHxCj8WDa9ns7nVNuGCV%2BOK1QzzTw2tJ8KMRGfgcyttpAw9kKWCN7aASSwb7DA8OjXR%2F7jx6ey55bZD9U2051ShsSoxn1YzO3lNnXSSvDzUTI3EibmZ1gm9V2fskO9fHdvWp%2FIL4Zt9xDtzHpIBunrzr8kXu3Q%2F4ch36SWin5wWAFskcmQ9YDJWwdGkGfRFGrXBzWWEUrFZpK&X-Amz-Signature=187e1948a3d34efafef161046588694d4cc0f0a9f5d70ebaabaf16e99834fcd9&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRJNRNV6%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T230752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIQDZYjN0OniuvAnsljmrms4MJnTYfaoPUf14CxYbNx31AQIgKiBQbr6QryQkOUPO9Cc9dxm7rMdjiiAUWep9CssgXUkqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOTntTxJ5Eh5VY0Y9yrcA9yJH2Pp9%2B2fXa9QgnhxTs6nBDKOue95BJRNpzE07Hhs9%2BTFDGt%2BL3ou1qOcOWas4oBv4nts5Wj91U4TgPULkJH%2FTNWq6P72BOal3zfXlFuYefb0MyHnPgc4qCRumiS1JmygOqA9RP%2FevuUvt3016XsUFv%2FgdIOAamSoWcV6zCouU6uH3JJeScXKQ6G0z5vPyLTNqNNcnsWU7Qar1bWY5E9v81I8KAddTrqAcZqVvc%2BcBaOxV5oUiclchbkhGYfqsikxobj5pD%2BIHVWvK%2BiFAbwyfsBLiH%2BsZJPl7QroAHdeHA5rzpVSAjfkB7MIOQqg7DPh4yWlWnDFpIob2eGOWkLRC%2B%2BTfwPNghiFVC2PJcLbiqez4FzgwJ2chzIVwYPPvREcGppSgfJuXVoYbM0YRPM9CTPFSmOWaQuYiw52NSgAnN9kiHwzfE1SkbunjH4Q9s0YBxSGFKbcFcCIm%2FS5rz%2FAyB1X9PgVe8l4rv%2FfiDCZIo%2FuEFQdPyiGN1OvbkH%2BsgYBQ2M1TgEq3ippza5FApSfRyiEZMh%2Be3oLVF893ZaXKxgEyLRQz2UhqMf2O5m%2FHe8z1za2qU6XiQLBQpxCW40gZgDMHveWlb5tfwZF9WlFEkpfNAWLubQZFvQwMJyHm8AGOqUBOm4OR%2FYmE988SENsHxCj8WDa9ns7nVNuGCV%2BOK1QzzTw2tJ8KMRGfgcyttpAw9kKWCN7aASSwb7DA8OjXR%2F7jx6ey55bZD9U2051ShsSoxn1YzO3lNnXSSvDzUTI3EibmZ1gm9V2fskO9fHdvWp%2FIL4Zt9xDtzHpIBunrzr8kXu3Q%2F4ch36SWin5wWAFskcmQ9YDJWwdGkGfRFGrXBzWWEUrFZpK&X-Amz-Signature=f97b8bc0279136abab9b8b65fa28370641e97b222750668a70a0ab042749517a&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
