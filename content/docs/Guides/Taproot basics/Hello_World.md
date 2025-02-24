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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPSU2GJ4%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T220100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGMoOwT2e0BS7QHET1NZr3aYNLwHa12xiGRaNWvb1d2BAiBAktKKI7U796bvfKPetJw1iA4UBYgNy23vHZuqEoLeuSr%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIMrQAslIymjv91SGzdKtwD1Ijt0pGazEiRpUG6DxajUBYgKexfedT3DWSfP4YFfb6aF7zV5w141l895VPrXOQT4g0Kzi1FZf8C89XVPAJcUjdSgAq464xepSDZLWfNcek1o1NrWbBenZYDWBlidC8Wsjd95k%2FY%2FALDXVzS6se0OK4jUJ%2FFX8gAqaGFGPHQ%2F7NLOaQwcr5LwLU6KBotdai7l4Tz6YUEF9UmJHCBOpurFazyLQzSys6AV0evOqY3h3B8mHIlH%2FhUWlMLyEq6ckdakKkpnV9Wcu1uQNS1hof%2BTWvDdF2vxFETvMh05OAA6skFY1ocTzAHh7HJ3KWc83SXpZNIXnevCTpV1YsLhgGqAOd0KCYdDl97WOJF2tOhGkbEJVoxtohZz85O00ULaeTb8fj62AvH5vEdE%2BKu2DwRT5%2F6RfTFMB%2FlGstOs1zXWlnpHAW5wqT7tARJYIbkvjozUQqx7hrsZoVrmag0xdSMx83Wo7MbzdH4LHh%2FHYvBiU8bDjCwSSGrWGkuksbPfvVHe%2FH%2FA1p968P%2BgjRpQWDRMwPJi6uj7LIS8yF1ptKNlcH9ozQFbcdgpl1UcbBnV62yRWsNRe3JgkFiQK30RuJ9SmpFjbzXDmKy%2F%2Bkncke55WzMjSGZZB6rnUnlqMkw8dXzvQY6pgFbg6ad02bxM51X4qAwuWgayn33xTo%2BawYAKKbfvxf88mFibUOjV717xIgM6xowANP92x88m84emoxLM7Z9DhK0pVV2KVehygpiTNYtvqiIgVXpJ%2BbL7MGLRGhZ7423dMNc3kmXc4ht%2Fbj9of9l1Gsp4RSwZEaF9Be2czscD%2FE9Sjalqd%2B2w3UCst1Tpy%2B6oqz8%2BUE2feFewvzIDNHRYVUSlUXHIyhp&X-Amz-Signature=2289f965af226b64691da6581f1d19ba83c717ce2f3d2f233ed6e20b576f8252&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPSU2GJ4%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T220100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGMoOwT2e0BS7QHET1NZr3aYNLwHa12xiGRaNWvb1d2BAiBAktKKI7U796bvfKPetJw1iA4UBYgNy23vHZuqEoLeuSr%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIMrQAslIymjv91SGzdKtwD1Ijt0pGazEiRpUG6DxajUBYgKexfedT3DWSfP4YFfb6aF7zV5w141l895VPrXOQT4g0Kzi1FZf8C89XVPAJcUjdSgAq464xepSDZLWfNcek1o1NrWbBenZYDWBlidC8Wsjd95k%2FY%2FALDXVzS6se0OK4jUJ%2FFX8gAqaGFGPHQ%2F7NLOaQwcr5LwLU6KBotdai7l4Tz6YUEF9UmJHCBOpurFazyLQzSys6AV0evOqY3h3B8mHIlH%2FhUWlMLyEq6ckdakKkpnV9Wcu1uQNS1hof%2BTWvDdF2vxFETvMh05OAA6skFY1ocTzAHh7HJ3KWc83SXpZNIXnevCTpV1YsLhgGqAOd0KCYdDl97WOJF2tOhGkbEJVoxtohZz85O00ULaeTb8fj62AvH5vEdE%2BKu2DwRT5%2F6RfTFMB%2FlGstOs1zXWlnpHAW5wqT7tARJYIbkvjozUQqx7hrsZoVrmag0xdSMx83Wo7MbzdH4LHh%2FHYvBiU8bDjCwSSGrWGkuksbPfvVHe%2FH%2FA1p968P%2BgjRpQWDRMwPJi6uj7LIS8yF1ptKNlcH9ozQFbcdgpl1UcbBnV62yRWsNRe3JgkFiQK30RuJ9SmpFjbzXDmKy%2F%2Bkncke55WzMjSGZZB6rnUnlqMkw8dXzvQY6pgFbg6ad02bxM51X4qAwuWgayn33xTo%2BawYAKKbfvxf88mFibUOjV717xIgM6xowANP92x88m84emoxLM7Z9DhK0pVV2KVehygpiTNYtvqiIgVXpJ%2BbL7MGLRGhZ7423dMNc3kmXc4ht%2Fbj9of9l1Gsp4RSwZEaF9Be2czscD%2FE9Sjalqd%2B2w3UCst1Tpy%2B6oqz8%2BUE2feFewvzIDNHRYVUSlUXHIyhp&X-Amz-Signature=845ff7998189815c822c3ca0f4426638082482495e50ddea46521dfb664e73ae&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
