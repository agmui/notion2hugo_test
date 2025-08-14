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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667M5ZQYRY%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T061412Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBhXhpIEpB%2F%2BKx2cwOTxAqRFt2KgRgGaTDkgALdeOnofAiEAgN%2FtYt%2BhE48OFDrvCWwmn0F8jlJdv4isCAqkH%2FLzTycq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDOrOYDc7RJu3jDNE%2BircA%2FP9P8sPfsoXGY9PN8ArXEWtne6NnT7xH%2F6KgRCn8IS5z47UYYmCDWzjxChEIcriGAbLYOmLRuIySkgYihtT1EX4lo8PowSpVin9EWyQSQ79Bcb4y5kYEldrF6t%2Fs69oqi83o3zSr107sE3BQLjwvUXJrHBX70p5ETKqNPhJDW5I73UfL9LuvaGhpHKpnIAQrVl0jcatGn6u3dQPHchWqJsfJfpltsEwOnwYQUUokS9HOMGXd11xuZQWa7gqrKjlJYJmthky80GJ2N5ZAFZgkkXw6e5IN84XKc1LACj9k3jnkZ6ZSqueXupzJxFE1Box3yxYeYwyD7SSXZYQCAANIYOjFz7HMswI7i3N91tBBgUiQjIAHPBb1OCYTX4KVcO%2BkYbMHacDaKhVIYyienulrgZ%2FlS%2FgQy2C7EBsdi1Aekqkzy3poygMtBVfLHbfb%2FhC7Q4Ty7cDXPCHPbcqs%2BQsulXR2AkpkFb5Tpp2B0AOki%2FsJkN95HAnBbUQcNE85lKOTfi%2FWcOYhyid%2B%2FCKozX4YT5qLIgT9IZZ5ZwBhLpX3vOotEsqa658h1pBEEG6aSi6o2ig2%2B%2FNZ7QvwOGh3DlOFIHabKZ9qd%2Fd9HRqm9H042q75f7eZO8xiQ%2FiNlbhMKS69cQGOqUBdMrJSjh9gY5KCjn3GosnZg1u6YdMlgLkdXVIFZ4Mq1g93ugaDNPdX8E8gSAdpidfrX04z9hKCJaT8o%2BNuI76qjmHkWoEj8hGGYjoq0pGm4Cy0n%2F%2F1Rob2rej7E7gmIiVts3iq0dKDhLKbQvm3ugzcN%2FmNkiDlocbZ5DMSmoYEBg5jnJmAc9fr5P8vQO8eNetIMwcdPwrOLA61l7mcrIcrbgmBVdY&X-Amz-Signature=8b681058da8c600aa95b219960861c9396cd8d8d0eab6ed62435b846a3629b65&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667M5ZQYRY%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T061412Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBhXhpIEpB%2F%2BKx2cwOTxAqRFt2KgRgGaTDkgALdeOnofAiEAgN%2FtYt%2BhE48OFDrvCWwmn0F8jlJdv4isCAqkH%2FLzTycq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDOrOYDc7RJu3jDNE%2BircA%2FP9P8sPfsoXGY9PN8ArXEWtne6NnT7xH%2F6KgRCn8IS5z47UYYmCDWzjxChEIcriGAbLYOmLRuIySkgYihtT1EX4lo8PowSpVin9EWyQSQ79Bcb4y5kYEldrF6t%2Fs69oqi83o3zSr107sE3BQLjwvUXJrHBX70p5ETKqNPhJDW5I73UfL9LuvaGhpHKpnIAQrVl0jcatGn6u3dQPHchWqJsfJfpltsEwOnwYQUUokS9HOMGXd11xuZQWa7gqrKjlJYJmthky80GJ2N5ZAFZgkkXw6e5IN84XKc1LACj9k3jnkZ6ZSqueXupzJxFE1Box3yxYeYwyD7SSXZYQCAANIYOjFz7HMswI7i3N91tBBgUiQjIAHPBb1OCYTX4KVcO%2BkYbMHacDaKhVIYyienulrgZ%2FlS%2FgQy2C7EBsdi1Aekqkzy3poygMtBVfLHbfb%2FhC7Q4Ty7cDXPCHPbcqs%2BQsulXR2AkpkFb5Tpp2B0AOki%2FsJkN95HAnBbUQcNE85lKOTfi%2FWcOYhyid%2B%2FCKozX4YT5qLIgT9IZZ5ZwBhLpX3vOotEsqa658h1pBEEG6aSi6o2ig2%2B%2FNZ7QvwOGh3DlOFIHabKZ9qd%2Fd9HRqm9H042q75f7eZO8xiQ%2FiNlbhMKS69cQGOqUBdMrJSjh9gY5KCjn3GosnZg1u6YdMlgLkdXVIFZ4Mq1g93ugaDNPdX8E8gSAdpidfrX04z9hKCJaT8o%2BNuI76qjmHkWoEj8hGGYjoq0pGm4Cy0n%2F%2F1Rob2rej7E7gmIiVts3iq0dKDhLKbQvm3ugzcN%2FmNkiDlocbZ5DMSmoYEBg5jnJmAc9fr5P8vQO8eNetIMwcdPwrOLA61l7mcrIcrbgmBVdY&X-Amz-Signature=8c1cd2bd82bf10ac917afb7eab716847d540e55ca5f5ac1be906d92adca6f396&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
