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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662T2XYC6H%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T090904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIQDVqY%2BzL%2FbI1p5MNPABcrstJbUc3rM5HDSZQdjwsOhBSwIgQVZt3BKMEj35tuKHOPyHCdOhSLWLLb1X1LkRWwPMVIkqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG7rorjLky3whilvfCrcAze3tK6qhG2BGsvdoi3wKEk6QVfkl07YSO%2BS8IfTRocSqEVwy3DD3LBKGjqEOWBtTcsCVYeW0JrRbNrCQb6cea2%2BsphRDsE%2BSFDJF1C%2FcCM7ZZhp5tu%2BZRe8FmbR53nFFpCT0IdbJVeGQ2GZf2k%2F0CiUClj5eSIKtaObcYVi%2BeJJiFRzBAKTNrm9Ad9I6pQjekNgpMUH6DGKJ4xruBkOx6PRZqveyh5MipQa9CWoHn%2Fi8NZtaY%2BDkEB%2B04qm%2ByG31jNLEOObbDwDOY34%2Fd7tW6G0DlQ4KG%2B6k9He2qwfmqRDO3e0RIB%2B4m%2FjK2LN6LrteHInf8jqNpbZLLrQZZQH91CIf8UDfZJUjRWD%2BejVg6ypKvNqSWmH7PV9en3c4%2FxZLosDLHgpj92k%2BKkGoI3TKZ%2BOXQo9SkzAKp7Sxdwy64HZP0IDc6n1CFWD0t2DQQTfah607GRrvG8mwyh5KvKgWK1YttYrJLpjF9yaQXEb1RN9DQ7eo%2BOZQfQ7KhBXp4hfX7gu3dxrWMoEn%2FhbOzUfs7cDW%2FHyCG9gSvhDoa41QNdWZTXu61cml4HPtZQIDfBu3tBtqntkMWHPl3U1DSincbAvm3x43VwdlkAICGSJfGk6zGwVklNmjDBESrRsMOGKncAGOqUBVUWB8uM25fAKOGMu7oCOwCYc1lWadvyorBB0a7bQbfEjWuVTrClieOG1wXoeNxQTPM6IEzBsQXpzcMV6ohc%2BKm8ZEl%2FzBeuBqPclWX2PQiZCH9tj8SrTDMKVBvaAgHzzEMelVWtS0%2B1iMZ6TT2dJ8P8VF16nvtIRT0Q6fWBPO0SaP8gRlP7oUfEa56BrC%2F9M4Lso9%2Bw8M2iZ5dM9O5%2FJBa2zdekT&X-Amz-Signature=5ef71c774bd83b41ab625ec285170e25706597e04717706a04fc8bad8eb338d9&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662T2XYC6H%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T090904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIQDVqY%2BzL%2FbI1p5MNPABcrstJbUc3rM5HDSZQdjwsOhBSwIgQVZt3BKMEj35tuKHOPyHCdOhSLWLLb1X1LkRWwPMVIkqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG7rorjLky3whilvfCrcAze3tK6qhG2BGsvdoi3wKEk6QVfkl07YSO%2BS8IfTRocSqEVwy3DD3LBKGjqEOWBtTcsCVYeW0JrRbNrCQb6cea2%2BsphRDsE%2BSFDJF1C%2FcCM7ZZhp5tu%2BZRe8FmbR53nFFpCT0IdbJVeGQ2GZf2k%2F0CiUClj5eSIKtaObcYVi%2BeJJiFRzBAKTNrm9Ad9I6pQjekNgpMUH6DGKJ4xruBkOx6PRZqveyh5MipQa9CWoHn%2Fi8NZtaY%2BDkEB%2B04qm%2ByG31jNLEOObbDwDOY34%2Fd7tW6G0DlQ4KG%2B6k9He2qwfmqRDO3e0RIB%2B4m%2FjK2LN6LrteHInf8jqNpbZLLrQZZQH91CIf8UDfZJUjRWD%2BejVg6ypKvNqSWmH7PV9en3c4%2FxZLosDLHgpj92k%2BKkGoI3TKZ%2BOXQo9SkzAKp7Sxdwy64HZP0IDc6n1CFWD0t2DQQTfah607GRrvG8mwyh5KvKgWK1YttYrJLpjF9yaQXEb1RN9DQ7eo%2BOZQfQ7KhBXp4hfX7gu3dxrWMoEn%2FhbOzUfs7cDW%2FHyCG9gSvhDoa41QNdWZTXu61cml4HPtZQIDfBu3tBtqntkMWHPl3U1DSincbAvm3x43VwdlkAICGSJfGk6zGwVklNmjDBESrRsMOGKncAGOqUBVUWB8uM25fAKOGMu7oCOwCYc1lWadvyorBB0a7bQbfEjWuVTrClieOG1wXoeNxQTPM6IEzBsQXpzcMV6ohc%2BKm8ZEl%2FzBeuBqPclWX2PQiZCH9tj8SrTDMKVBvaAgHzzEMelVWtS0%2B1iMZ6TT2dJ8P8VF16nvtIRT0Q6fWBPO0SaP8gRlP7oUfEa56BrC%2F9M4Lso9%2Bw8M2iZ5dM9O5%2FJBa2zdekT&X-Amz-Signature=b12c6deff77fd91f4db678e133d99c7daa0888d2b70be0b79fab65976c8ca3d2&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
