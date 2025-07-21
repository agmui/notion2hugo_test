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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKEWWME5%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T230856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDxmUHDt3KCx8Dp5eGyCX66f4nEnxw5fiT5AqirlCRDWAiAf9%2Fcf8Nr4B759cChqxSlv5hbajJ6%2BUxuIeZbXLrfU9CqIBAjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2za4qIHiXonwaEFFKtwDURoVl4yk%2BC6V1zJWaZ%2FZ9COeJrMig3zmkoLhrIxXeFWia1mBpXIMxJcrBjdm%2Brs%2FNEWEP3isSkJB%2BR3D2FPNrCC%2FIn15AF5GqSVwN8t8tAfcvISNvzu29POGw61FDpAr9gygTTi0sFVkG%2FxAR9Cz6qh2a0ttH4hwEQ%2BkvKpvpRTcXwP%2FBqNRA1NWoJqlq2oH0z4Za5mb2fs%2FmGyXFh2xyMcL7geFqeJdvkEAjQFucaqCnWDHM8ZIaUJJkJeKGjn7XXKgkTRBHOxth31SKnK8H1dUWokW8T6abCh1rx6aHx64nZAmRQtxxKNPpaKpKQGCSzTNnzXvGO%2FG3vcdIwhUHtu3B4XenO%2B3JZ8Xhxyn4FZVFV56%2FnkxiPjxWFqX%2BKG1VuBpRRL8Tfyz2A5Y2Cat3EmiYUfqSxFkcHwNs1wOw72YuqiJ9pN7NRskWafnS0AZTX6E6eNciMbtsxT4fjMMfYjZtIhhko7d%2BODJfLn%2BBn4AuCkxMkhH9%2FQve%2FSyf20DYm4QSxPTbWRD5xKNTOfGjUdz8JkpscXPTqCuHqImppYFJFHDKdy5cd3E0WlyffIibFiwY9hOA%2B%2FOzPQhpfhQqkW7vS5JXVKgr%2FQoji4qtVvsDMbwHoLWgrLwpcswq%2Fv6wwY6pgGDXKQfjMQgPRd78rY4AKrROyXgsOFtXKHBqOkZxLyEyF%2FVc7LKKvEURKmxnXsd1kbC7NBbtnjIqhvFfD31pndJsf6Vep3yEbLzJ5bABDniRr330rebq0zE3lL4YdSXv7N9iaYufUblquZ8WfZfkYfNFoGFHrQC0EuhZtOnuKTyDCLNJpZFy8DZDs351upRhoMhJkB2D7RuEBgCO%2BCFvU6EKIuXTn4j&X-Amz-Signature=7a4000e22c88052ff564e9b621bac26c9d0f7719bb79f23eb9b5ebf81a7667ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKEWWME5%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T230856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDxmUHDt3KCx8Dp5eGyCX66f4nEnxw5fiT5AqirlCRDWAiAf9%2Fcf8Nr4B759cChqxSlv5hbajJ6%2BUxuIeZbXLrfU9CqIBAjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2za4qIHiXonwaEFFKtwDURoVl4yk%2BC6V1zJWaZ%2FZ9COeJrMig3zmkoLhrIxXeFWia1mBpXIMxJcrBjdm%2Brs%2FNEWEP3isSkJB%2BR3D2FPNrCC%2FIn15AF5GqSVwN8t8tAfcvISNvzu29POGw61FDpAr9gygTTi0sFVkG%2FxAR9Cz6qh2a0ttH4hwEQ%2BkvKpvpRTcXwP%2FBqNRA1NWoJqlq2oH0z4Za5mb2fs%2FmGyXFh2xyMcL7geFqeJdvkEAjQFucaqCnWDHM8ZIaUJJkJeKGjn7XXKgkTRBHOxth31SKnK8H1dUWokW8T6abCh1rx6aHx64nZAmRQtxxKNPpaKpKQGCSzTNnzXvGO%2FG3vcdIwhUHtu3B4XenO%2B3JZ8Xhxyn4FZVFV56%2FnkxiPjxWFqX%2BKG1VuBpRRL8Tfyz2A5Y2Cat3EmiYUfqSxFkcHwNs1wOw72YuqiJ9pN7NRskWafnS0AZTX6E6eNciMbtsxT4fjMMfYjZtIhhko7d%2BODJfLn%2BBn4AuCkxMkhH9%2FQve%2FSyf20DYm4QSxPTbWRD5xKNTOfGjUdz8JkpscXPTqCuHqImppYFJFHDKdy5cd3E0WlyffIibFiwY9hOA%2B%2FOzPQhpfhQqkW7vS5JXVKgr%2FQoji4qtVvsDMbwHoLWgrLwpcswq%2Fv6wwY6pgGDXKQfjMQgPRd78rY4AKrROyXgsOFtXKHBqOkZxLyEyF%2FVc7LKKvEURKmxnXsd1kbC7NBbtnjIqhvFfD31pndJsf6Vep3yEbLzJ5bABDniRr330rebq0zE3lL4YdSXv7N9iaYufUblquZ8WfZfkYfNFoGFHrQC0EuhZtOnuKTyDCLNJpZFy8DZDs351upRhoMhJkB2D7RuEBgCO%2BCFvU6EKIuXTn4j&X-Amz-Signature=3d634f63a6925844d50489f748ae155d663e9074e21099742bf37e22912446fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
