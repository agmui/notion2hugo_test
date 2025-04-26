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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466345L2JFX%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T230717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIClXqJsm4AfiN5zGWEeZZP%2BY7hHKlPVZtMwKrh5VS1GJAiEAvPIYt27kXtzGzVXc2SX7aY524yl%2BFO%2Bb213f%2FcKL6SIq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDHXq6DJb7Mn8%2BBbjByrcAzDnncAR9BnUQMd29eoHDCxOKdbQ3Jr7mg5OS7VwlwXXEyo0fUi3BJfMFuEzGZsThu402uU2BHxHhA7LC0PnDs1Q%2Bs%2BYWNy06Ln2AQO5qaKk58wJOe3Q2nsEsfBgV9gnm9joZvNM3YkiHz%2FO9fzU5hlIraYh%2BZY0j4ZZnwbYAeH52Akcq1HTxS0rmOQf%2FQDte9KQsAnQfIVls8s%2BSVvZhic4yxYBLFSH0e384WxmpVP%2FzK4ZKJPvgbm6qAsKr8jRk1ErY5ilug9BkrYYT9tQuXlowBtlztMZraDt6QYUITEtk%2BGxd21Y36yDb%2BaQBJXf5EG6vkeHSmohMGfBqM59XLpcQgr5Vv6quHK4C0u5N8Cz16HyBTQlYQUf%2F8ZnKAa3VECOPRjfMHZ7dn6mdicH8LrWPJyjGwNL8VMZfMMFQoSV2lxWf3zohfMjIxzNGc1mOWCCyqSg8E9gPiUoeKFuF4B5ELrL1e%2Bk0hpfeySNXU%2Ft7U8mO8mTJpEwcpbpxavk8KJ4xCarNCldUZvdjnKb3nTfkErKHJdTZTny7V2n67VzIfgUNysLHStb7aThoOMOtmsuhWbRw9YUaP9G%2Fy1WphJa72WSUtgvard%2BDA0mFHdEaYZnWkRdIjibtAuZMP6%2FtcAGOqUBVvjfrb8KQsE1SoAagD4ohnFM69FWZHne9BVdtfdO7%2F4OQuNWC3Mi5GNF0LqzYsHv%2BuGt3SdNTNCrUWBxzdREB3lPS3Vg3MDf%2FZCm%2BCyNwDgNqQ6DvzW5sap7lyphpk3unimAM2OAqALVwzR08%2F9okeS8M3QH%2FmyFExtdKP19LRexdTcBSjBdOI3UW9w7PcBV%2F5u946Ih1w3ATjNYC7ibB7vyz6Vr&X-Amz-Signature=cf94884f32da028a32d0135c5cd33148897cd37d9da079c4d523cd659b79c8b1&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466345L2JFX%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T230717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIClXqJsm4AfiN5zGWEeZZP%2BY7hHKlPVZtMwKrh5VS1GJAiEAvPIYt27kXtzGzVXc2SX7aY524yl%2BFO%2Bb213f%2FcKL6SIq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDHXq6DJb7Mn8%2BBbjByrcAzDnncAR9BnUQMd29eoHDCxOKdbQ3Jr7mg5OS7VwlwXXEyo0fUi3BJfMFuEzGZsThu402uU2BHxHhA7LC0PnDs1Q%2Bs%2BYWNy06Ln2AQO5qaKk58wJOe3Q2nsEsfBgV9gnm9joZvNM3YkiHz%2FO9fzU5hlIraYh%2BZY0j4ZZnwbYAeH52Akcq1HTxS0rmOQf%2FQDte9KQsAnQfIVls8s%2BSVvZhic4yxYBLFSH0e384WxmpVP%2FzK4ZKJPvgbm6qAsKr8jRk1ErY5ilug9BkrYYT9tQuXlowBtlztMZraDt6QYUITEtk%2BGxd21Y36yDb%2BaQBJXf5EG6vkeHSmohMGfBqM59XLpcQgr5Vv6quHK4C0u5N8Cz16HyBTQlYQUf%2F8ZnKAa3VECOPRjfMHZ7dn6mdicH8LrWPJyjGwNL8VMZfMMFQoSV2lxWf3zohfMjIxzNGc1mOWCCyqSg8E9gPiUoeKFuF4B5ELrL1e%2Bk0hpfeySNXU%2Ft7U8mO8mTJpEwcpbpxavk8KJ4xCarNCldUZvdjnKb3nTfkErKHJdTZTny7V2n67VzIfgUNysLHStb7aThoOMOtmsuhWbRw9YUaP9G%2Fy1WphJa72WSUtgvard%2BDA0mFHdEaYZnWkRdIjibtAuZMP6%2FtcAGOqUBVvjfrb8KQsE1SoAagD4ohnFM69FWZHne9BVdtfdO7%2F4OQuNWC3Mi5GNF0LqzYsHv%2BuGt3SdNTNCrUWBxzdREB3lPS3Vg3MDf%2FZCm%2BCyNwDgNqQ6DvzW5sap7lyphpk3unimAM2OAqALVwzR08%2F9okeS8M3QH%2FmyFExtdKP19LRexdTcBSjBdOI3UW9w7PcBV%2F5u946Ih1w3ATjNYC7ibB7vyz6Vr&X-Amz-Signature=896594822f14d0baae8e78d2c76d43a4bfd1893e2d371fb6cd3a1460efa8b88e&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
