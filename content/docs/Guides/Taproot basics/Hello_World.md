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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZH4T2TRA%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T200806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDpeQipb9EyRTgWprXE4aAO%2BVlRnkp8Q5ZQPEkx3BgckgIhALUg18OvjLM%2FR4QT5Twp3RezrBfcFOBEWMGUryPs%2Bi2SKv8DCEwQABoMNjM3NDIzMTgzODA1Igy88lWPAIx34IVs17Yq3AN4Ii%2FRkMBVgGtdREzPrfplkJ58ntuGm%2Fl4vl0v1T31sIbbu%2BQUW8V8lEHyoU2SoYtViXNbHe994rpl5a6fYs5ZSnkRMwWAVszaTRwL3wehfHSVJ6qgVK%2Bh7A5AXiElj3NQapid4bbmvqnrUXhmSIt9SDdIUZ2AXruMuVK3Sac43mqByoaxoBpBbOGjib575dVZdu0PJHrud7tdDmuQJ91AsP%2BEWexoe0RpqACV2%2FnReL1TBqTBdC3Rgq7O30O0j%2BmL2RCgE6GyWeubm48FXy3qtP3t9rxhQbVqSlfLey2f8TvcyFKnHXMT%2FUp2ie4lSWYn3gY7SKPlnDjRCJWQ6NJi8pKc9A5fkFD4RyzFB0clWTnMdxdhnkurzTarhXowSjS9E%2F8UtoFy8qY03w4RKOevWWGHKTdWu27%2BEWCvhAxddVBgRolJx3JTcDFaNNifZBQi9t35dlHdye79RRjQz2qHdBUf8GnEQJBqKMkRhweYjlSLGmJ92NxFlqj73IqQADBEDnQ6Lf%2BDO6vDSuGKFYAPHw3ia2JLgbvW6Nk0n6AmrVBXi2mQvb4IkREMCMZKFl7Y5Jyu%2BHyrGtL0WAX2AXJVAlF7B7HIP4ZErnO7WGrARBD5uKKZfshHafZDYjCq3bTABjqkAQSqqmTAhNc3JAd3LbU8CTx1Psga8vOnF5G53i2ua7uQtTo0NPVwqvdj4LBpj%2B99ovYwLrdOkohmJj%2FLukKBf6NE5gJOz4EN9T7UItb%2Fc6lNp6nPUM7fcLc4fArN0%2Bj7HYzwmqvsprty%2F0zOOzTJQHsZp18AO6Ey4SUZMMkXWgmKjHbKYwgQWFNprNfgXcd%2FJ%2FS4FpSyvz41lBqjH6XAde8TuJap&X-Amz-Signature=ea37471aef2e049339ae4ad0d38699ea0d288d1e2e043af980b0eabcad2767fe&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZH4T2TRA%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T200806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDpeQipb9EyRTgWprXE4aAO%2BVlRnkp8Q5ZQPEkx3BgckgIhALUg18OvjLM%2FR4QT5Twp3RezrBfcFOBEWMGUryPs%2Bi2SKv8DCEwQABoMNjM3NDIzMTgzODA1Igy88lWPAIx34IVs17Yq3AN4Ii%2FRkMBVgGtdREzPrfplkJ58ntuGm%2Fl4vl0v1T31sIbbu%2BQUW8V8lEHyoU2SoYtViXNbHe994rpl5a6fYs5ZSnkRMwWAVszaTRwL3wehfHSVJ6qgVK%2Bh7A5AXiElj3NQapid4bbmvqnrUXhmSIt9SDdIUZ2AXruMuVK3Sac43mqByoaxoBpBbOGjib575dVZdu0PJHrud7tdDmuQJ91AsP%2BEWexoe0RpqACV2%2FnReL1TBqTBdC3Rgq7O30O0j%2BmL2RCgE6GyWeubm48FXy3qtP3t9rxhQbVqSlfLey2f8TvcyFKnHXMT%2FUp2ie4lSWYn3gY7SKPlnDjRCJWQ6NJi8pKc9A5fkFD4RyzFB0clWTnMdxdhnkurzTarhXowSjS9E%2F8UtoFy8qY03w4RKOevWWGHKTdWu27%2BEWCvhAxddVBgRolJx3JTcDFaNNifZBQi9t35dlHdye79RRjQz2qHdBUf8GnEQJBqKMkRhweYjlSLGmJ92NxFlqj73IqQADBEDnQ6Lf%2BDO6vDSuGKFYAPHw3ia2JLgbvW6Nk0n6AmrVBXi2mQvb4IkREMCMZKFl7Y5Jyu%2BHyrGtL0WAX2AXJVAlF7B7HIP4ZErnO7WGrARBD5uKKZfshHafZDYjCq3bTABjqkAQSqqmTAhNc3JAd3LbU8CTx1Psga8vOnF5G53i2ua7uQtTo0NPVwqvdj4LBpj%2B99ovYwLrdOkohmJj%2FLukKBf6NE5gJOz4EN9T7UItb%2Fc6lNp6nPUM7fcLc4fArN0%2Bj7HYzwmqvsprty%2F0zOOzTJQHsZp18AO6Ey4SUZMMkXWgmKjHbKYwgQWFNprNfgXcd%2FJ%2FS4FpSyvz41lBqjH6XAde8TuJap&X-Amz-Signature=581672d500a9a768f076624406ef2a2fc3ec1f78d9b5795786ce0237bf7b0d99&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
