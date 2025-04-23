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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTX4AWYZ%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T032909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQD9LB%2BQokZOqItrc0%2FLmatvHQDNdaidI6MQ5twtYsvhewIhAII8bKo6KkzXjk%2BGw%2FK84fkskyYcFOcJWge1EnF0EgpmKogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzqJcSsAJqCq3afEg8q3AOMxEMmmfwvOZATirgOkYpEdFx1QUhYvqCYATI03eHFTQ4A3hflx6SeVllBZXLgiXbBbv8y6ei7Q2PHkHpI1y746KXXqdaLLBDfNxewHnvYS8ogJAS%2FfnZx8ze%2B8zjCnddR38K1HKoO1krIsPR7JIvMJ5T8piB0%2FBWByTWKiuyl%2BeiamSwLDmDF5CsbQf9qDcWYO2bf8QF1sRkKdGKqwKhLTyW0ZRYSX3gzZZK5djpflsTSmhODYV%2FnnjUGcUMz9Pk%2Bu3b2W%2Fb3BGA549QKfPJmQicKtGFx5kOvqGy7Rm5p4lTBTgV5qYBmLLS0r1Kq6ARyUgDNRjUG7lM4vJkgoRS7FJK%2FWmgvLe%2F2qqn426kR8FUuHvvcgjI%2BooHroan7kTt4pGGIlkvR8b0q9Y3KhS68witDXKG6ZO8nwrlb4LR%2BRIcqDaqn8JiCLZK44vnxLuS%2Baehp62Qyyq1R3PaTFR5JC0ditcr0bDH1r8QrHts6PJHxPJUDtSOkPwWRfByQzkZje9GHEntw7uJtbVyuCtKnJiRJmd22EmVxbKaCAcTz%2Bd6VYDRwy8bydltMB3Gy6fH7CiL9P%2FMdoN68f74C6fDGVeaeDiyEr2kD16y5zeCfC%2FQYoPnFelyCiZ5qZDDx8qDABjqkASBy0YrKTaJcixiyMMcbKKML%2BF3u3cbAjdvs%2BGn8Vh0pemqqvfxI4ex9XGpsu55ZKjUYqv8Kc10B8%2BSyW2WyY327ZaYdWvRJtSj8nCJVu27YaQbVslqZRPfUNRGxBU%2F4Y3RxFJe7yUGEnZfsyTw64LGQrtK98AmLNBkrtu3yj0kpuL9eS7N%2B5WKVLbrXwfRCeyo9FnJ4qwdAkzrlui5ojr8CB7lF&X-Amz-Signature=42a09e8e31d2bfec618a658f1d2ea71f91965697fdb0f84740d224cf2f1f3ace&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTX4AWYZ%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T032909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQD9LB%2BQokZOqItrc0%2FLmatvHQDNdaidI6MQ5twtYsvhewIhAII8bKo6KkzXjk%2BGw%2FK84fkskyYcFOcJWge1EnF0EgpmKogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzqJcSsAJqCq3afEg8q3AOMxEMmmfwvOZATirgOkYpEdFx1QUhYvqCYATI03eHFTQ4A3hflx6SeVllBZXLgiXbBbv8y6ei7Q2PHkHpI1y746KXXqdaLLBDfNxewHnvYS8ogJAS%2FfnZx8ze%2B8zjCnddR38K1HKoO1krIsPR7JIvMJ5T8piB0%2FBWByTWKiuyl%2BeiamSwLDmDF5CsbQf9qDcWYO2bf8QF1sRkKdGKqwKhLTyW0ZRYSX3gzZZK5djpflsTSmhODYV%2FnnjUGcUMz9Pk%2Bu3b2W%2Fb3BGA549QKfPJmQicKtGFx5kOvqGy7Rm5p4lTBTgV5qYBmLLS0r1Kq6ARyUgDNRjUG7lM4vJkgoRS7FJK%2FWmgvLe%2F2qqn426kR8FUuHvvcgjI%2BooHroan7kTt4pGGIlkvR8b0q9Y3KhS68witDXKG6ZO8nwrlb4LR%2BRIcqDaqn8JiCLZK44vnxLuS%2Baehp62Qyyq1R3PaTFR5JC0ditcr0bDH1r8QrHts6PJHxPJUDtSOkPwWRfByQzkZje9GHEntw7uJtbVyuCtKnJiRJmd22EmVxbKaCAcTz%2Bd6VYDRwy8bydltMB3Gy6fH7CiL9P%2FMdoN68f74C6fDGVeaeDiyEr2kD16y5zeCfC%2FQYoPnFelyCiZ5qZDDx8qDABjqkASBy0YrKTaJcixiyMMcbKKML%2BF3u3cbAjdvs%2BGn8Vh0pemqqvfxI4ex9XGpsu55ZKjUYqv8Kc10B8%2BSyW2WyY327ZaYdWvRJtSj8nCJVu27YaQbVslqZRPfUNRGxBU%2F4Y3RxFJe7yUGEnZfsyTw64LGQrtK98AmLNBkrtu3yj0kpuL9eS7N%2B5WKVLbrXwfRCeyo9FnJ4qwdAkzrlui5ojr8CB7lF&X-Amz-Signature=64e8f22c203142cc033ef81b46a6de1b6b655e978ccc6716ad16d9e6281ad914&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
