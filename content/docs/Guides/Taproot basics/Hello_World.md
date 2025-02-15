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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466257VMOBL%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T150137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQDlcaEV%2BvMoiHLmwULLu8dXS83BUvU7v0W8vmRFOzRd7wIgLxlh%2FIkiRu7UXQiymcnZGU4pKIHB6bF1%2BFBilPldoPAq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDKd%2BL%2BSQ2g0A%2BULkuyrcA6v9qOCeNXw%2B04ZVB3QwUpUZc%2FKJMlqb9jv8Y22a%2Fi3snAEl5Kx6XEGAjgAVS5cjy57lR6wynIudkR1yD9oiBatSXZJFm1Supm0QGc0n5DD9QGnC7XDZ%2BDrfOdVUG%2FCNYgYlkGWWJYpdt9rHfVpXjfQc5QIlZ8jDITO%2BLkOgy%2FBPS%2FEadRdzMT%2FCNrP8zc6wUyce%2FZaTlbIB%2BOmjUO%2BYizKazzLzlcJxozT0wUWGyAbMHPFkfg%2Fq0UZhmWGzGQpz6iMU59J3vS3qjuFxVkntYNDauOIoodsTmC09%2BDVOZInD9KvBjo2bw6WLOxYMhbQ7WZtyS%2FwVuHqDXrQzHiNu1nPZiBe81iTn%2BLnkUpWLoJsL0dumgS8yg4%2FLEI%2Bo%2FakYyWlABHiyKKBTFC9KHocEAuPXG82aFoh5VQGG9FKpBltsQQt83jLgsENHuyGKrVSmhF2aKdPytS3JOYJLFdHLvFQ8lixvEGvbzFnYBHyJdCYWLTpYNMMrsCpHs0LB86UmaBDb7PqwWogZ0hc0AiswG4FEaNqxefLDLAxkzjehl1ToZI6gmr9yJQeKbqh7T2c%2BScK0lhGZRXgm6MltFuBtbPc66g4DR%2BMb0N86zQZfoIwBBkmoXLjwIsDaUD72MIXHwr0GOqUBRbBlNr8OMwrYAZz7crzdCWYLwZegf%2F%2FpnescYffyrJhaYyC%2F6YeiMg%2FQvXubEmpxfXk0L73ozouqResY6efry9RSLpFjeKeOOCFS22QZKh9aOGBQlsK2L7pPHmYntCC5a5VdsTdNgZ0hMmKM8%2BU30geE4T6HAl%2F5URE30kVZm31qktwKPUIJFdf7rPTwWv0MehYLqTw7rs%2Bk8%2BowCue%2B0P32m908&X-Amz-Signature=6871d12ffd81ffcf0a43faeb65d35f278eb0a98c8bbc382ae80a1df2a06a07fc&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466257VMOBL%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T150137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQDlcaEV%2BvMoiHLmwULLu8dXS83BUvU7v0W8vmRFOzRd7wIgLxlh%2FIkiRu7UXQiymcnZGU4pKIHB6bF1%2BFBilPldoPAq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDKd%2BL%2BSQ2g0A%2BULkuyrcA6v9qOCeNXw%2B04ZVB3QwUpUZc%2FKJMlqb9jv8Y22a%2Fi3snAEl5Kx6XEGAjgAVS5cjy57lR6wynIudkR1yD9oiBatSXZJFm1Supm0QGc0n5DD9QGnC7XDZ%2BDrfOdVUG%2FCNYgYlkGWWJYpdt9rHfVpXjfQc5QIlZ8jDITO%2BLkOgy%2FBPS%2FEadRdzMT%2FCNrP8zc6wUyce%2FZaTlbIB%2BOmjUO%2BYizKazzLzlcJxozT0wUWGyAbMHPFkfg%2Fq0UZhmWGzGQpz6iMU59J3vS3qjuFxVkntYNDauOIoodsTmC09%2BDVOZInD9KvBjo2bw6WLOxYMhbQ7WZtyS%2FwVuHqDXrQzHiNu1nPZiBe81iTn%2BLnkUpWLoJsL0dumgS8yg4%2FLEI%2Bo%2FakYyWlABHiyKKBTFC9KHocEAuPXG82aFoh5VQGG9FKpBltsQQt83jLgsENHuyGKrVSmhF2aKdPytS3JOYJLFdHLvFQ8lixvEGvbzFnYBHyJdCYWLTpYNMMrsCpHs0LB86UmaBDb7PqwWogZ0hc0AiswG4FEaNqxefLDLAxkzjehl1ToZI6gmr9yJQeKbqh7T2c%2BScK0lhGZRXgm6MltFuBtbPc66g4DR%2BMb0N86zQZfoIwBBkmoXLjwIsDaUD72MIXHwr0GOqUBRbBlNr8OMwrYAZz7crzdCWYLwZegf%2F%2FpnescYffyrJhaYyC%2F6YeiMg%2FQvXubEmpxfXk0L73ozouqResY6efry9RSLpFjeKeOOCFS22QZKh9aOGBQlsK2L7pPHmYntCC5a5VdsTdNgZ0hMmKM8%2BU30geE4T6HAl%2F5URE30kVZm31qktwKPUIJFdf7rPTwWv0MehYLqTw7rs%2Bk8%2BowCue%2B0P32m908&X-Amz-Signature=47ec2ab8fc91a82171af6db47215b498994fa9c12d9bcceb2c9d6eb32b465c91&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
