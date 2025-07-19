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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQSSM2OD%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T090849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCh%2BnFE3aFjRvwH%2FkcTslppJPH8OMkXHnKSSm5C%2BTIlHQIhAJV9KzJZjhvSv6tKLoZAXiFvP8uiGgsAx83yynZWwEn2KogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw%2FniRsQ4j65vr8Y6gq3AP0ZUsD4QYSBbXyOD2w16MHOBSxYdZo%2FnjSNLRW%2FpFTwlTACxomBnLINnqsWbjDUQ3nmDn37Zt8JioxnAZHM9Tbac3ZBRzPL3SYW8%2Bx28Qs494NxGXlWlOay872CL3KThU6ywNAosFzVq8Ux6XDw%2Fg3Vx8HHFAW%2FC60e3EyPh0ePH1pVe3rl2kxxZqM%2Fy1ptx3urg6oxKs8ROZFaEIP54XRBGK34zoq4iKao4dUiRjXaXOq8akXy9b%2FxtJTzLiuwj4CiqwQGohmrZ7i4zn%2F1owu3qf9WLN2ZeO06WwYBmGqJesHpxtQFCd9eBVQMHMwhkvFkSy19tlyOza2P1LZcqO6b%2F2A3SQj7fThvE3O56bE5%2Bh9zgo3cQr%2B9E2px94iaddMajOujs6%2FhaXh854cGbIfbgWlB%2FPbmE2y5Lxo44VnK6dPGfzp9YTRbHgff1aSnCJr5ozR1ymtl5HPoraHoRRxUiMaFnmsYcLxJQIlGTGvYLMyAdnGjFc4cfPffiWNeBysWoLc%2F7Ha6gwI7lxbQaFqoLXQIn1mTW%2Bm93BWb8XyikMKNDtDP0mxM0R7ovUEgje0kGb3OM1LW%2FaFW8JyO%2FJtuLWe%2BMUgkG%2ByitFSa1P4sYpstYZWbtnSplYDmDDdxezDBjqkAfHGEGHh9Oc1vz43mpWiSGzrwKe%2FGCUusp4GNtsvlyDroBd2Z1l2yKLvet%2BGPnITG2HcKwK8daQcfGXJ2zWlJizEVQ3S1LEA5EMBVdymWFN5ZDdKP0e7q%2FQo5rY7RCRlL8wDsbCQveQ9pb9%2FFQnuMpdVP%2F43XbyF9b2vNpg6Nro6811OKcx7VQ9UMt9tv%2BCApF%2FpfpSUMqgFgFIJt2LH3lakyeML&X-Amz-Signature=8ce4de8326eabadf20dae0adcf39f4504cb5ba7132c46b1f3fd0d95cf97fb68d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQSSM2OD%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T090849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCh%2BnFE3aFjRvwH%2FkcTslppJPH8OMkXHnKSSm5C%2BTIlHQIhAJV9KzJZjhvSv6tKLoZAXiFvP8uiGgsAx83yynZWwEn2KogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw%2FniRsQ4j65vr8Y6gq3AP0ZUsD4QYSBbXyOD2w16MHOBSxYdZo%2FnjSNLRW%2FpFTwlTACxomBnLINnqsWbjDUQ3nmDn37Zt8JioxnAZHM9Tbac3ZBRzPL3SYW8%2Bx28Qs494NxGXlWlOay872CL3KThU6ywNAosFzVq8Ux6XDw%2Fg3Vx8HHFAW%2FC60e3EyPh0ePH1pVe3rl2kxxZqM%2Fy1ptx3urg6oxKs8ROZFaEIP54XRBGK34zoq4iKao4dUiRjXaXOq8akXy9b%2FxtJTzLiuwj4CiqwQGohmrZ7i4zn%2F1owu3qf9WLN2ZeO06WwYBmGqJesHpxtQFCd9eBVQMHMwhkvFkSy19tlyOza2P1LZcqO6b%2F2A3SQj7fThvE3O56bE5%2Bh9zgo3cQr%2B9E2px94iaddMajOujs6%2FhaXh854cGbIfbgWlB%2FPbmE2y5Lxo44VnK6dPGfzp9YTRbHgff1aSnCJr5ozR1ymtl5HPoraHoRRxUiMaFnmsYcLxJQIlGTGvYLMyAdnGjFc4cfPffiWNeBysWoLc%2F7Ha6gwI7lxbQaFqoLXQIn1mTW%2Bm93BWb8XyikMKNDtDP0mxM0R7ovUEgje0kGb3OM1LW%2FaFW8JyO%2FJtuLWe%2BMUgkG%2ByitFSa1P4sYpstYZWbtnSplYDmDDdxezDBjqkAfHGEGHh9Oc1vz43mpWiSGzrwKe%2FGCUusp4GNtsvlyDroBd2Z1l2yKLvet%2BGPnITG2HcKwK8daQcfGXJ2zWlJizEVQ3S1LEA5EMBVdymWFN5ZDdKP0e7q%2FQo5rY7RCRlL8wDsbCQveQ9pb9%2FFQnuMpdVP%2F43XbyF9b2vNpg6Nro6811OKcx7VQ9UMt9tv%2BCApF%2FpfpSUMqgFgFIJt2LH3lakyeML&X-Amz-Signature=cd60630765162955a93d4fad39b70cdadcb42d53b126f5ec5bba6ecf756d70b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
