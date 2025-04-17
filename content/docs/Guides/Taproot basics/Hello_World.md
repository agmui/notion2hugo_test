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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6FEKMMH%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T150829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC3M1XeNv9dfpIKm48S49%2FL4mojHR7SLbiEEcBPWWjGiAIgIQnm1%2FFNtxyT2%2FSYuDX6diSQ0ZKot%2FNlUE1MKurjRwYq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDHEh8X5VIPpaiwXgcCrcA9Me5HfOdXUuxGWug4y%2BGVylco6JfpnyPp6GyYr8DNc2066rLVsxKYZZZpMOsvc2doCmtvtl1BqqERxZoO7A8NHN8jAIHK4As%2BGfDw7gXwonbONCN9aMsS11cYrJKbPF3YU5FNjq5Yj2TtJ7kMtn0ALgaDtLPcINR%2BBHK7XhztqPEs97UvLSJgIyK6obk9jcIaXZ9FQNx%2FwScQ%2BVyWPB7dSCSyLNvZaQopBaYrVV6u28EOtpasnfsECS9PMjKTegUBGcfGRoMkZaKpy0xacmCckTLDmzYFPogJMKGD4Dep37lQHtw6JZul63jb6%2FVIG3ztPrSgQst6L%2BrzIQeYwJLO6ejjUTDysqb95sAJWIbMXZQCrWmTNtJZ161mVU7%2BymKKGR6JFkH1VVlv0plSwpL21cfDrgsagUjw3OLUS24I%2FKm4undTHFZtsWZLDF79Nf6u25A54HsF2LIHUKsgddjQf4In2bVIxBSUX%2FZ%2FQ9zgLQ7HxS9AXx1tmscyA1J08R77tPKZAos0HPNtgw5XEh89192mps4jVbz7FtQf7l5bIEsXUQT19r614qxHXc93I1thcaCI9sauDGghr9bw%2BOwk%2FwNLowUaj8Otp49KJrUXYaIqiqWeXjGL3tG48pMMavhMAGOqUBAZdZ3cZO7MP9btnk7WM2i13PkyMQbu%2F%2Foas9gcVhRXgC8ItcgugwtE5IpqHHELuITU38OzM2XJ28taNzjLjn8Y8jMZOAyhKlsMo%2Fi90v3Qd4PbreqhpDXOfflDxM4wWqz2D5VZH%2F154%2BJw01pgdeQ196JD6bFQJAdgP03105FupeBEtngf%2BMnFQu4akgY0wHCYCsdMAF0h6gAaibqG%2Bn9iva%2FYI9&X-Amz-Signature=93f6d06a5d867b8430cb6aa06c9c44869c937c6dd8a12e9d080ccaa4f733a89d&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6FEKMMH%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T150829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC3M1XeNv9dfpIKm48S49%2FL4mojHR7SLbiEEcBPWWjGiAIgIQnm1%2FFNtxyT2%2FSYuDX6diSQ0ZKot%2FNlUE1MKurjRwYq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDHEh8X5VIPpaiwXgcCrcA9Me5HfOdXUuxGWug4y%2BGVylco6JfpnyPp6GyYr8DNc2066rLVsxKYZZZpMOsvc2doCmtvtl1BqqERxZoO7A8NHN8jAIHK4As%2BGfDw7gXwonbONCN9aMsS11cYrJKbPF3YU5FNjq5Yj2TtJ7kMtn0ALgaDtLPcINR%2BBHK7XhztqPEs97UvLSJgIyK6obk9jcIaXZ9FQNx%2FwScQ%2BVyWPB7dSCSyLNvZaQopBaYrVV6u28EOtpasnfsECS9PMjKTegUBGcfGRoMkZaKpy0xacmCckTLDmzYFPogJMKGD4Dep37lQHtw6JZul63jb6%2FVIG3ztPrSgQst6L%2BrzIQeYwJLO6ejjUTDysqb95sAJWIbMXZQCrWmTNtJZ161mVU7%2BymKKGR6JFkH1VVlv0plSwpL21cfDrgsagUjw3OLUS24I%2FKm4undTHFZtsWZLDF79Nf6u25A54HsF2LIHUKsgddjQf4In2bVIxBSUX%2FZ%2FQ9zgLQ7HxS9AXx1tmscyA1J08R77tPKZAos0HPNtgw5XEh89192mps4jVbz7FtQf7l5bIEsXUQT19r614qxHXc93I1thcaCI9sauDGghr9bw%2BOwk%2FwNLowUaj8Otp49KJrUXYaIqiqWeXjGL3tG48pMMavhMAGOqUBAZdZ3cZO7MP9btnk7WM2i13PkyMQbu%2F%2Foas9gcVhRXgC8ItcgugwtE5IpqHHELuITU38OzM2XJ28taNzjLjn8Y8jMZOAyhKlsMo%2Fi90v3Qd4PbreqhpDXOfflDxM4wWqz2D5VZH%2F154%2BJw01pgdeQ196JD6bFQJAdgP03105FupeBEtngf%2BMnFQu4akgY0wHCYCsdMAF0h6gAaibqG%2Bn9iva%2FYI9&X-Amz-Signature=d94a59d6a105779b51d1572d497d3d4056b59e64f27aa665dfdd4c57b859942c&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
