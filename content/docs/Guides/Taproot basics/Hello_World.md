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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663O33767V%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T091227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIAXmy6%2Bb0A8Yzp%2B2JNbLur9%2FlmS1xv%2Bnn7Lyz1gQ0z8FAiEAy8l2ZywkyVL98z2d%2F%2BpRgBRgICmSEHDGeIRYgUECWAwq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDNSwUD%2BSh0Nri8RTMyrcA8LmTMfTWdUZN5nnnpHFvjoW2COjoEk83PDORsY3L61eKn6tEqdFRaIrpHsJUjXHO3Klb6lub3T3rjI2r52tYipVn7Js7yNcbVN4wwEtkUAwMKqNa4m58rtbhkEZvM5bjLKORzQnxKPSatpeO%2BBR6fP3%2B8e9i0h0Fqb8MeZiRnir0%2FrVM3wSsJWqraLIgwHcTwBFCz8j08d4b5F%2FjoSP1Z1qQX4r0%2FVsuE7oiNmTFcnFSArBtuG%2FIAJYuv12cXAa1g%2FlxAjpCxX3t16tInEN7USLR99CSiDTn1nGz7uG4o4FWUIPDByFVhWWSSYjTbr2lWHRey%2FkuEbMJYUC%2FyASYLxWysUq%2BQdpr0LNCezfJCEZTWDOZ8OPC%2FdE12MvSp5IIL3GAaQlkm76ARJHJ8ehryAujPXbudP%2Bfo3xbSsPyg2g6juzeqHwaHDq9RymMSPhZrQ9rnAKQ8yLIg9K8U2AcMHonNWVTxuJ8MLrPN7%2BihwXlJfYzli87NGrpmfMUDn5tZ9L%2F2frBtt2aRcYScUdVV%2BnbLwmLbVZgxoMRMFh8Eae4AKhAV1ba3%2Bh%2BZ0rI3FUch36Lg9aw9PBtNc%2BUYpZZ5VL1ejmM1SI8VHGDwd64GveDGhhOao5TQmHt8IkMNSw5MIGOqUBAkuR%2FL1V980YqswalP9tJjc44dyYhlsmiKTrxqeoum0hCvcSuQOJRiWx8%2BTrW9jYW7UaE8w6ijBP3433ePYK6DG1c6ABvx7j49k2J3QuRh2YYDnCtvpfhr9roqgIJaBGNxgDPmiI%2F8scBAEG47GOvhaj%2B1wSM41jYeut4KAnn%2B0o1GIiqq451%2BoDEI%2BwS9QWfNkWxBYkNIdda2%2Bz2AtXjVTxydjR&X-Amz-Signature=ad89ad2396be094486b9d6539594fb8805adf0f3fb2cae676921aeedf2993a17&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663O33767V%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T091227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIAXmy6%2Bb0A8Yzp%2B2JNbLur9%2FlmS1xv%2Bnn7Lyz1gQ0z8FAiEAy8l2ZywkyVL98z2d%2F%2BpRgBRgICmSEHDGeIRYgUECWAwq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDNSwUD%2BSh0Nri8RTMyrcA8LmTMfTWdUZN5nnnpHFvjoW2COjoEk83PDORsY3L61eKn6tEqdFRaIrpHsJUjXHO3Klb6lub3T3rjI2r52tYipVn7Js7yNcbVN4wwEtkUAwMKqNa4m58rtbhkEZvM5bjLKORzQnxKPSatpeO%2BBR6fP3%2B8e9i0h0Fqb8MeZiRnir0%2FrVM3wSsJWqraLIgwHcTwBFCz8j08d4b5F%2FjoSP1Z1qQX4r0%2FVsuE7oiNmTFcnFSArBtuG%2FIAJYuv12cXAa1g%2FlxAjpCxX3t16tInEN7USLR99CSiDTn1nGz7uG4o4FWUIPDByFVhWWSSYjTbr2lWHRey%2FkuEbMJYUC%2FyASYLxWysUq%2BQdpr0LNCezfJCEZTWDOZ8OPC%2FdE12MvSp5IIL3GAaQlkm76ARJHJ8ehryAujPXbudP%2Bfo3xbSsPyg2g6juzeqHwaHDq9RymMSPhZrQ9rnAKQ8yLIg9K8U2AcMHonNWVTxuJ8MLrPN7%2BihwXlJfYzli87NGrpmfMUDn5tZ9L%2F2frBtt2aRcYScUdVV%2BnbLwmLbVZgxoMRMFh8Eae4AKhAV1ba3%2Bh%2BZ0rI3FUch36Lg9aw9PBtNc%2BUYpZZ5VL1ejmM1SI8VHGDwd64GveDGhhOao5TQmHt8IkMNSw5MIGOqUBAkuR%2FL1V980YqswalP9tJjc44dyYhlsmiKTrxqeoum0hCvcSuQOJRiWx8%2BTrW9jYW7UaE8w6ijBP3433ePYK6DG1c6ABvx7j49k2J3QuRh2YYDnCtvpfhr9roqgIJaBGNxgDPmiI%2F8scBAEG47GOvhaj%2B1wSM41jYeut4KAnn%2B0o1GIiqq451%2BoDEI%2BwS9QWfNkWxBYkNIdda2%2Bz2AtXjVTxydjR&X-Amz-Signature=f2abd6ef758daf957ff8994d3cacfa5cbef056708f207a451fec43f4375846ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
