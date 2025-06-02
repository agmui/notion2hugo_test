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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R65MJVQE%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T132502Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIHYs5hu0DHwnXxLmPSPNn5sBsD7LydQby8C17cHfEhuFAiEAz%2BPeHXjTrNbsepfmW%2F1ok7W85aeJw4ukEndcXQEzNAcqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHE01FZGGPbLvXaZUCrcA70Do2HPcGoRtgW0csZy4jHlANBIzFKZ4fokMMTh00b5nmy3uGKFvhvBXFjXhpl6izyZ0xvEcio%2FjK1C%2Bi6szSt1Foi0P87lJf%2BoG6RdvV6i0Dm2ULGWtPe7XiZa%2BUs%2FXysglFfsT9a0cgksxYKEyDe9A1gvUd1S%2F8YeCQuBkUFIvwpqWuq9Dd63%2BnjUruLAhSlpwOM7DjYRUW043Rv79cE8BiMdR7un%2FWIeGRM80Yp3R2wlBkj7Mfyo5Jc9xBh8j2c9hrfXYcE96khYcmXseErV55lQQgCGDrh7h3heQDavxRaqC9cVez8eN6902vl9aLNvOnxzUcr1x8AgyDwaVYFFM63c0ZWfSoi8EGCpfJkiBg59HZU%2BcPt2zbozXcKhR400s9GZOeubmKaJVnolqEfqaS00guHk6%2Fqgn8k92kjhw3N8rQQ%2BlRjWbmUTHycKyGjFJ%2FwbVDVeTRIHXPFyDdQ%2Fn%2FJq9F5MpH09HtHEkyfVYFor738b0o%2FlPzSjMLoT5bv%2BTEvp7ZwV3fbhQYsY8PjVJ2gSPqOiRrt1aZXLYLZ4mMfogjQvlifi296kSVx7hKvBjJZ%2FQT0O7UIdijWKhtxJt6VPzudafz7OTGWa0HHasSRsPpgLr%2FiKvv7cMLW09sEGOqUBD4V0HRyLhYYY82nCSSV%2BzLsk1MKyxc%2BFtIs5duI3jKgXtdPUsYOZC5MYkL%2BIjwu70o4axbg4afwE26A0VnQhkOSSTGZILckKRp7Qb7lNrFqnlz%2BpV6jXgVaqW2EhhIJP4Q4934zYcot3kLN3TH21zy7ArTxh%2F1qCW%2FUAqgoUNdMxPs5wnNq1%2Bmni21yFv9Dgg4Tnx5OeprxOON%2FyoM0Nw9tbz%2B3M&X-Amz-Signature=f701297d24c5075916ca8edb3cc36c6b8ea1f850c15fd4cbe4e7826bbab042b5&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R65MJVQE%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T132502Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIHYs5hu0DHwnXxLmPSPNn5sBsD7LydQby8C17cHfEhuFAiEAz%2BPeHXjTrNbsepfmW%2F1ok7W85aeJw4ukEndcXQEzNAcqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHE01FZGGPbLvXaZUCrcA70Do2HPcGoRtgW0csZy4jHlANBIzFKZ4fokMMTh00b5nmy3uGKFvhvBXFjXhpl6izyZ0xvEcio%2FjK1C%2Bi6szSt1Foi0P87lJf%2BoG6RdvV6i0Dm2ULGWtPe7XiZa%2BUs%2FXysglFfsT9a0cgksxYKEyDe9A1gvUd1S%2F8YeCQuBkUFIvwpqWuq9Dd63%2BnjUruLAhSlpwOM7DjYRUW043Rv79cE8BiMdR7un%2FWIeGRM80Yp3R2wlBkj7Mfyo5Jc9xBh8j2c9hrfXYcE96khYcmXseErV55lQQgCGDrh7h3heQDavxRaqC9cVez8eN6902vl9aLNvOnxzUcr1x8AgyDwaVYFFM63c0ZWfSoi8EGCpfJkiBg59HZU%2BcPt2zbozXcKhR400s9GZOeubmKaJVnolqEfqaS00guHk6%2Fqgn8k92kjhw3N8rQQ%2BlRjWbmUTHycKyGjFJ%2FwbVDVeTRIHXPFyDdQ%2Fn%2FJq9F5MpH09HtHEkyfVYFor738b0o%2FlPzSjMLoT5bv%2BTEvp7ZwV3fbhQYsY8PjVJ2gSPqOiRrt1aZXLYLZ4mMfogjQvlifi296kSVx7hKvBjJZ%2FQT0O7UIdijWKhtxJt6VPzudafz7OTGWa0HHasSRsPpgLr%2FiKvv7cMLW09sEGOqUBD4V0HRyLhYYY82nCSSV%2BzLsk1MKyxc%2BFtIs5duI3jKgXtdPUsYOZC5MYkL%2BIjwu70o4axbg4afwE26A0VnQhkOSSTGZILckKRp7Qb7lNrFqnlz%2BpV6jXgVaqW2EhhIJP4Q4934zYcot3kLN3TH21zy7ArTxh%2F1qCW%2FUAqgoUNdMxPs5wnNq1%2Bmni21yFv9Dgg4Tnx5OeprxOON%2FyoM0Nw9tbz%2B3M&X-Amz-Signature=48cb3d98f55e722c9f72f7f1be10acfdfd2d40a126e9f58a4aae388a32eacac3&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
