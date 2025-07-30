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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUPZQ4F4%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T004553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBNxZfzY%2FxCamM%2BGgFEo%2BXwB4FVVnmPD74D1RhjqDTVwAiEAr4OiMdR3SO957AGGGbFsNoB6KVfWPXCEPPGCcKaT%2FW8qiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLf8ZM5ZrjKwePohQCrcAy2BwVTuXLpEPaVLTdKp2fjqRx6KKxnGj4YJnzuSsoen1oGgKZV4bICuh8E8Ji8pyQSvcfQIjHfDopLIi%2B8FqGn7cTtRQtvK0NmJhGDtiElb%2FeIuCL7xMPairw3Kp87RO5C%2B6syR0fdv45ksBBo1zWmym9Y%2FkLzzRRT8r%2BDZTTwjN8iLCpzYyCG0GQe2I6ilpJS0f%2BGUxsHhcPdZJNBZ6ZO2nhE%2FedrUSCl95TC5QuYQkLX%2BZfFTIoW2g3ST9IWfn%2B3FX1F%2F2Ovqh3khya2Y76JW5tNkGHTeQaV98f5QtXohGm7i0%2F%2FxwP379sLnfUNEA0pkeuCJCgKqiQv%2F4AjSymLEQgbsyGcAuXhOFBB%2BUAFQNMpnWtQ3Siknja8wylVy4neOWDOMkuZz1Oq7M4uygLVGs9Y3j8c7Wo6s437s7EXeOOBSbEI%2FqSTyO5U5hn0W6JqvygAeXEXqEq7p%2BYAkYar%2FyRBR%2BdDjILnlfm7jrdDGZ5dLKsmN6DEnD4X%2F7vvRAPEoyBJZuRrBqcR%2F1ssEz2DBTbXiQ%2BGPNwsdg9E4wkSj6ppgYlLvheqEC9y7O%2BllQflA7ywzO52Whazcuy7%2BoVk5LUdSxauaDXwJzIuoMeMLiZNer%2Fm1sDTQAPaaMIK4pcQGOqUBo%2BTiItztqpdk2liMk95TKleoqPr7T%2B33%2Ftutoad1GiGCA6jH9juV2%2Bu0j9Ulo%2FzK81GpVvkVNW%2FoZtkejHxV4NatOatXP%2FYpHYQaQBW1v%2B1WENv%2Fc3nuFYHmuBonlWP84nmZ5s5LcCekb8NKgtK4alNFhxoNstnamXc9VgTKkiGJJVM49QM3sOTORTv6A%2FVD%2FTTZmkrXESZtxjHf2uSFZwSuR450&X-Amz-Signature=213966a84a6bacc6548aafe23d3d6b3a8766a6d57324d3993acbc919d9ddb325&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUPZQ4F4%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T004553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBNxZfzY%2FxCamM%2BGgFEo%2BXwB4FVVnmPD74D1RhjqDTVwAiEAr4OiMdR3SO957AGGGbFsNoB6KVfWPXCEPPGCcKaT%2FW8qiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLf8ZM5ZrjKwePohQCrcAy2BwVTuXLpEPaVLTdKp2fjqRx6KKxnGj4YJnzuSsoen1oGgKZV4bICuh8E8Ji8pyQSvcfQIjHfDopLIi%2B8FqGn7cTtRQtvK0NmJhGDtiElb%2FeIuCL7xMPairw3Kp87RO5C%2B6syR0fdv45ksBBo1zWmym9Y%2FkLzzRRT8r%2BDZTTwjN8iLCpzYyCG0GQe2I6ilpJS0f%2BGUxsHhcPdZJNBZ6ZO2nhE%2FedrUSCl95TC5QuYQkLX%2BZfFTIoW2g3ST9IWfn%2B3FX1F%2F2Ovqh3khya2Y76JW5tNkGHTeQaV98f5QtXohGm7i0%2F%2FxwP379sLnfUNEA0pkeuCJCgKqiQv%2F4AjSymLEQgbsyGcAuXhOFBB%2BUAFQNMpnWtQ3Siknja8wylVy4neOWDOMkuZz1Oq7M4uygLVGs9Y3j8c7Wo6s437s7EXeOOBSbEI%2FqSTyO5U5hn0W6JqvygAeXEXqEq7p%2BYAkYar%2FyRBR%2BdDjILnlfm7jrdDGZ5dLKsmN6DEnD4X%2F7vvRAPEoyBJZuRrBqcR%2F1ssEz2DBTbXiQ%2BGPNwsdg9E4wkSj6ppgYlLvheqEC9y7O%2BllQflA7ywzO52Whazcuy7%2BoVk5LUdSxauaDXwJzIuoMeMLiZNer%2Fm1sDTQAPaaMIK4pcQGOqUBo%2BTiItztqpdk2liMk95TKleoqPr7T%2B33%2Ftutoad1GiGCA6jH9juV2%2Bu0j9Ulo%2FzK81GpVvkVNW%2FoZtkejHxV4NatOatXP%2FYpHYQaQBW1v%2B1WENv%2Fc3nuFYHmuBonlWP84nmZ5s5LcCekb8NKgtK4alNFhxoNstnamXc9VgTKkiGJJVM49QM3sOTORTv6A%2FVD%2FTTZmkrXESZtxjHf2uSFZwSuR450&X-Amz-Signature=8a697622998bbbd426638911e854d77bb4cda9683f844441d566e6386d4a3587&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
