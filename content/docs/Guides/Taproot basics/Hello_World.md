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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YMCAM47%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T220709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQColYIBuYcicP%2Fbq5%2FtMwsKBxcyD%2B0OZNW01UA5ByVx%2FAIgUPeWiFkImvhFE%2F%2BFxMwYk1usC97rlBB4537xG7mreuAq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDLJMs%2BwGf41RDaoKvyrcAxnJYRczLTz%2BtOd6PbboUU34lQrudWLphfbmJGdhOpFebClpffcnUAQa8OUQKOl91og6DyfA8ZHO7ZbZqVooBAt0TbPj63rqVmL1J1eifmDZ%2B8FvOgs3LNX4ptu4tykW93GxydPNf6SCDde6lGJC4%2BXR%2FppR7emxnhJ1qDIZdfoDwWfqE%2BDOevZYpG1lWac16wQonCNYwPmOQvKmXTGQNuFRJ1ax2Dmo2JuSXwDn4fsV2iXQkYcHU2Q%2FRLtkK0YKbvnYbBL4icpC5Jmal1ZBpPn65aM7X%2F3a1vsgi4JdFubGch5PmGaVHgmw6YmCjvVCyVkGeunMD07h713eyGeYZ2kKvD4hqFJwEussFX8x%2BaMLGRc4nQWX%2Fvb4UcP8MN8RQ%2FgvPNt1BrFeK3I9DM0K3ZGHemhRCN0ok%2FEtJdjntJKbfierp9%2BFdwkDKaTY%2BbDYO1XKU4LG7gKY3cs0Ry%2FaJTtiUu4a0YDvR0UAT6GbwXUkjfQNprzfv5HclUC9jB0yDK7K6rNV9TaL%2F9WTbDnuboal42bQqQpdIMdep9ayqDqHfoRyYrVWYw0tTvfGElVwaxiz5%2By3NMepdcfBExUF8iDonFpRK1tyDZmSuRjYEWAdSth%2BFQO%2BrYXPx5d4ML73o8EGOqUBUoTevdtjdUdLN3ol%2F75ZIcZn%2FaHxY03ANPek49RjpMVjBXWLULvb7EHa4NDrL8vsTyggDWy%2F0EO1E3HLQKkiHaAgZQwZpPhNMgtWlfrvYSZQfoNo8F3HAnPkeqiu66QQSBaYq%2FmMKb7B%2B8NWmabAKn3vrv03kcVWS%2BgEPJ0Quu2W3oGhRd8k0H%2F3h4bbHK0zxZo3iIB%2BEAc8pBHp9J3zT69IEX95&X-Amz-Signature=3efcdceaa6b6b281cb44f3f804c7175d96bfd5a51ba49c063e91bc03232c6f6b&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YMCAM47%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T220709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQColYIBuYcicP%2Fbq5%2FtMwsKBxcyD%2B0OZNW01UA5ByVx%2FAIgUPeWiFkImvhFE%2F%2BFxMwYk1usC97rlBB4537xG7mreuAq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDLJMs%2BwGf41RDaoKvyrcAxnJYRczLTz%2BtOd6PbboUU34lQrudWLphfbmJGdhOpFebClpffcnUAQa8OUQKOl91og6DyfA8ZHO7ZbZqVooBAt0TbPj63rqVmL1J1eifmDZ%2B8FvOgs3LNX4ptu4tykW93GxydPNf6SCDde6lGJC4%2BXR%2FppR7emxnhJ1qDIZdfoDwWfqE%2BDOevZYpG1lWac16wQonCNYwPmOQvKmXTGQNuFRJ1ax2Dmo2JuSXwDn4fsV2iXQkYcHU2Q%2FRLtkK0YKbvnYbBL4icpC5Jmal1ZBpPn65aM7X%2F3a1vsgi4JdFubGch5PmGaVHgmw6YmCjvVCyVkGeunMD07h713eyGeYZ2kKvD4hqFJwEussFX8x%2BaMLGRc4nQWX%2Fvb4UcP8MN8RQ%2FgvPNt1BrFeK3I9DM0K3ZGHemhRCN0ok%2FEtJdjntJKbfierp9%2BFdwkDKaTY%2BbDYO1XKU4LG7gKY3cs0Ry%2FaJTtiUu4a0YDvR0UAT6GbwXUkjfQNprzfv5HclUC9jB0yDK7K6rNV9TaL%2F9WTbDnuboal42bQqQpdIMdep9ayqDqHfoRyYrVWYw0tTvfGElVwaxiz5%2By3NMepdcfBExUF8iDonFpRK1tyDZmSuRjYEWAdSth%2BFQO%2BrYXPx5d4ML73o8EGOqUBUoTevdtjdUdLN3ol%2F75ZIcZn%2FaHxY03ANPek49RjpMVjBXWLULvb7EHa4NDrL8vsTyggDWy%2F0EO1E3HLQKkiHaAgZQwZpPhNMgtWlfrvYSZQfoNo8F3HAnPkeqiu66QQSBaYq%2FmMKb7B%2B8NWmabAKn3vrv03kcVWS%2BgEPJ0Quu2W3oGhRd8k0H%2F3h4bbHK0zxZo3iIB%2BEAc8pBHp9J3zT69IEX95&X-Amz-Signature=28f3e7766ed5289d4bc05b4dfe4ad9f768315847edd4c6fbc0dfa88059e8391d&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
