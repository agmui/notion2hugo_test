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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675N66GWA%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T110640Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD18Ywq5HsPNJfo55WxaBXCYUt4WUHIAor%2FtbsUTDDcYgIgZfKaevPf5t5HjGt%2FUR2OStv9tkCWb3h%2FbyQdwYQOaLwqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBmqLvJNWUhIjFEAEircA2rdm2gt7gggkgytm68tYCLloVluwLKGHLqavi5ZG9Hv8u9szR68SuGPdlT9LIjA1Da5PsrJC4i67pNXLCeEIbkZhEoMWhvYs0WVxhqrw6y55VrWTGXH%2F4M%2BCPZUY4u7UE546PTyT3YDcwgA9oltJM0JXg350%2FgCiQmiOZK7xJtZVRjrk%2FDEZQEhdCPor3KyKg214I7RhKQ45WYDQu1xxMFhN4u0T%2BVtK4zbqBQrnmuAEUVhA2uSkcD%2BZXAZ5ues7KcVUOAPL7Xj7KRfnVFyo2H5qZOzo97YQWcvdzp%2BF%2BsEfriFUvsZKXU8wJlSC6dmgdkDu5vT8d9sAUDz%2F5olf%2BY%2Bwnc0GQ4KLRY8kpMIyRjeIglAUpJBxEaUEkIB8Ob05%2B%2BxPTqcdyTitYEngksOgCQDquG4VrDozRV36g%2Bg9yd7xxmWZ338MyYtL4HRzNjVVk6bPv2s2kW5mbjy0acj7tPg593yFZK96jQaZ55wGvbJz0uPfi2RYkvLkUelLb0rFaWkhlyMPwyaBEa2QK8bqjZukQN1GQHXQ9jtrjwpgtngo1yiobyG8kkwzF%2FwmcxUwql%2BnjUkKFCuPtY2oKr6OyvtF6yKkZh0eNVgm4MOzylsCOAggJF6HApAigaKMN2G0L4GOqUBJJfxB7sU2vn7CZGRS8WKZ5uvXIVnuI9TkrB0kZq4pB24UoqcrtZX0fabt%2FvTuzIhhFeejZh7I06kHfGh5pizB%2B2w%2BSzTvQae5C2kyST7JEsYZqKkGe7gDmP9HenLvTgqyE5ZtG8Fm8HTkz28g6lo%2B1ZzXPH7Ar7B4OF1NBK4vSCuCxd2TYAUMcdQ3wjeDt5d4IHMwYKRTLQa0nTiDo5Qmd5VkZ73&X-Amz-Signature=08b81b614311e70e3e746f780a4b9336246009e77bfd72985ec0aedefdc9a7d8&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675N66GWA%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T110640Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD18Ywq5HsPNJfo55WxaBXCYUt4WUHIAor%2FtbsUTDDcYgIgZfKaevPf5t5HjGt%2FUR2OStv9tkCWb3h%2FbyQdwYQOaLwqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBmqLvJNWUhIjFEAEircA2rdm2gt7gggkgytm68tYCLloVluwLKGHLqavi5ZG9Hv8u9szR68SuGPdlT9LIjA1Da5PsrJC4i67pNXLCeEIbkZhEoMWhvYs0WVxhqrw6y55VrWTGXH%2F4M%2BCPZUY4u7UE546PTyT3YDcwgA9oltJM0JXg350%2FgCiQmiOZK7xJtZVRjrk%2FDEZQEhdCPor3KyKg214I7RhKQ45WYDQu1xxMFhN4u0T%2BVtK4zbqBQrnmuAEUVhA2uSkcD%2BZXAZ5ues7KcVUOAPL7Xj7KRfnVFyo2H5qZOzo97YQWcvdzp%2BF%2BsEfriFUvsZKXU8wJlSC6dmgdkDu5vT8d9sAUDz%2F5olf%2BY%2Bwnc0GQ4KLRY8kpMIyRjeIglAUpJBxEaUEkIB8Ob05%2B%2BxPTqcdyTitYEngksOgCQDquG4VrDozRV36g%2Bg9yd7xxmWZ338MyYtL4HRzNjVVk6bPv2s2kW5mbjy0acj7tPg593yFZK96jQaZ55wGvbJz0uPfi2RYkvLkUelLb0rFaWkhlyMPwyaBEa2QK8bqjZukQN1GQHXQ9jtrjwpgtngo1yiobyG8kkwzF%2FwmcxUwql%2BnjUkKFCuPtY2oKr6OyvtF6yKkZh0eNVgm4MOzylsCOAggJF6HApAigaKMN2G0L4GOqUBJJfxB7sU2vn7CZGRS8WKZ5uvXIVnuI9TkrB0kZq4pB24UoqcrtZX0fabt%2FvTuzIhhFeejZh7I06kHfGh5pizB%2B2w%2BSzTvQae5C2kyST7JEsYZqKkGe7gDmP9HenLvTgqyE5ZtG8Fm8HTkz28g6lo%2B1ZzXPH7Ar7B4OF1NBK4vSCuCxd2TYAUMcdQ3wjeDt5d4IHMwYKRTLQa0nTiDo5Qmd5VkZ73&X-Amz-Signature=9a1bbc25e8e4a348945a91b31a583eff5de69d610aefe1aab32e608cff4eb20d&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
