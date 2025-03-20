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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SINNDRUE%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T110714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJGMEQCIBOe%2BZtbvNqjJbMxaepL%2BwHBNK1UEVUnhO0Lu6qUH%2B%2B%2FAiAKc%2Fi5ZO3%2FfX5TY1n1zaNi1bl6phqpXR2%2B69uvuIalzCqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqg%2FRq4FwvhgKKp%2B%2BKtwDsqW1mTnlgK6B0JiigsbmqC%2FnWX157C0o%2BIp0OFsiivbUfq42%2FygOUjoWfkLAqZ3Zi6lyu6aEvcRjWN6uLOauzgK6%2BWNmTmhj5tipo2x1PM4ppbM8l22kgkcd8sgKa2EfRZw0371EAS14JUQvFhENaa8BnIq60mJ8HOR7jtV9I1XqOkxJj6EKNqKRokzM8rZ1b3SU30fozknliLqGczTSrnavSNiPS1IM7OdHT1YHnbIGpSo2JXfBbyWeQZCp%2F4JU6fVJFIOIYdAnbMnlt5GsOfxQYZVuH1DcNSI%2Fjy7PcrPkylflkfExS6sbOU0ZJucinzHXmZFqyHa2AMf8sUn4hGrVv0jd1G5ooo2NesvsFSFHBz1VEqwvnhvANdk%2BRzn%2B6C%2Bwn31hkrR3qr6PhX1VUC2HSkjo0OmmR3adaxnTG%2BTDJ1f7wp253%2BDqkQoLSdiuWproIqXoirQp5x9pKka%2B%2FIVeHva4bVzVZn%2FVRypy%2Bl%2FjdVjLInRJOgnNA1a1XA0HMSimJ6Kg59bPJVqXpcr7fwvT2LYXM%2FeZy51dWszCP8wkUWt02QdAX57KBsiPWSN2KXMCQnu%2Fx1ofZh7KI14j1J%2BgUVbtzjcciF%2Fbt9QMP0uGh%2FgYhGUQD7j%2Bx6swxObvvgY6pgF8ljULFLFhXQkEKW8Y2sdvuGGtfCfPIpiCsGgaYioaSABHM6SN35v63SZ49TumUYng%2BQSkeElq1i5AXxWr10EcQZgJjR%2FBGvPMx1SiZPVic6VPfE5dCyXS4ADFkBTlXe4SXpXo9lq%2BbdGy2H6a7SE%2BrP3K9ZtQG%2BQX89eHsaiTXRhPTdoGpvre2zUxFCvx%2BlAyjEgtbRbAefmvK4HIycRjdmeYe8Dv&X-Amz-Signature=b33bd7d5ebcdba83baf9abcc780d7977a09e42256b9b7339d3bc8ab153ef8a0c&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SINNDRUE%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T110714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJGMEQCIBOe%2BZtbvNqjJbMxaepL%2BwHBNK1UEVUnhO0Lu6qUH%2B%2B%2FAiAKc%2Fi5ZO3%2FfX5TY1n1zaNi1bl6phqpXR2%2B69uvuIalzCqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqg%2FRq4FwvhgKKp%2B%2BKtwDsqW1mTnlgK6B0JiigsbmqC%2FnWX157C0o%2BIp0OFsiivbUfq42%2FygOUjoWfkLAqZ3Zi6lyu6aEvcRjWN6uLOauzgK6%2BWNmTmhj5tipo2x1PM4ppbM8l22kgkcd8sgKa2EfRZw0371EAS14JUQvFhENaa8BnIq60mJ8HOR7jtV9I1XqOkxJj6EKNqKRokzM8rZ1b3SU30fozknliLqGczTSrnavSNiPS1IM7OdHT1YHnbIGpSo2JXfBbyWeQZCp%2F4JU6fVJFIOIYdAnbMnlt5GsOfxQYZVuH1DcNSI%2Fjy7PcrPkylflkfExS6sbOU0ZJucinzHXmZFqyHa2AMf8sUn4hGrVv0jd1G5ooo2NesvsFSFHBz1VEqwvnhvANdk%2BRzn%2B6C%2Bwn31hkrR3qr6PhX1VUC2HSkjo0OmmR3adaxnTG%2BTDJ1f7wp253%2BDqkQoLSdiuWproIqXoirQp5x9pKka%2B%2FIVeHva4bVzVZn%2FVRypy%2Bl%2FjdVjLInRJOgnNA1a1XA0HMSimJ6Kg59bPJVqXpcr7fwvT2LYXM%2FeZy51dWszCP8wkUWt02QdAX57KBsiPWSN2KXMCQnu%2Fx1ofZh7KI14j1J%2BgUVbtzjcciF%2Fbt9QMP0uGh%2FgYhGUQD7j%2Bx6swxObvvgY6pgF8ljULFLFhXQkEKW8Y2sdvuGGtfCfPIpiCsGgaYioaSABHM6SN35v63SZ49TumUYng%2BQSkeElq1i5AXxWr10EcQZgJjR%2FBGvPMx1SiZPVic6VPfE5dCyXS4ADFkBTlXe4SXpXo9lq%2BbdGy2H6a7SE%2BrP3K9ZtQG%2BQX89eHsaiTXRhPTdoGpvre2zUxFCvx%2BlAyjEgtbRbAefmvK4HIycRjdmeYe8Dv&X-Amz-Signature=05aff39b499a7f665874271812a1a94dd050f4ce10dbd4407b29fadd2a636ba2&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
