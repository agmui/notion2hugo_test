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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUGIYSTZ%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T110201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIEmjy6I%2F74bjcCbWykT1qv9Ykes3XmTTL1IP3zdaUBiRAiBZjbmqpRHkQ%2FRy%2BWECJUWpqQ3a%2BYCO9%2F097jCbfpFwBSqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNCAkRgMgjBnMP72%2FKtwD7h2wlorNyaNir2Q0O107DC1878d1nScUhw8Mq%2BG80WOfwhibnbtsKwwA%2BTNFRB7yUaKhNgwehDUO5VZdP1dbUDPxjku2vvJCoa1xNZWe%2FyP5Q3j23%2FBQxF8L6uF43g1TWiUGdmNzJ%2FTsaN%2Bo3TtqP7d4l9tUM6%2BMeKhiabPIK17WNTquzrqQ%2BJZVPluoigce%2BW2mVuE6SERPOhxQPhqDIbUD3iDxaE5KXEhrJNGxvkmitJeUJarIuenByPudIX06hceHbFf08x%2BqOHM2%2Bwyih5SVSLOUUTfH%2FVKk%2Bo7yEE%2Fj1AM4Qyp4KEA09sbeivNiZ2c0lT17JcWdcecz24IpnHdDVNScYMyJ5WbEgMM3%2B%2FjyDzfcADJvBSKISaOz82gpWk4bi3WFrfckoL7%2BEI%2FvOLhD%2BfI%2B%2BMIWtDToxOIVkImSq4qmPcOdzMKz6KGF0nv7e6HdSMTjuor6Qk4GgPR1OPt9W3FxFQ%2FFdpKn267omfSsftNV2qtm%2F5G7yNCkE%2FnztImMYVgzSK5H5xus6Ir3IpMxWpKz7bZ%2FoLrIZmx0x%2BKL%2F92efgX4vDwosfYVY8akwMY%2FE2vZoobdK3MUBfy4uGpEtP%2FFppDQ%2FG5Pk0HogmyjuKp4dA5qve5prp0wzb%2FRvQY6pgGvQ6mkpDBORHZttneTINLT8Qs5DxbQfhx12m%2F7hYESLmeVG2qCNSdORFljh62kadDHUCtMspFOvsgyntdKl0F9G5NGIgxAafKd1UamqKokMLwvTXxkXSOgHFlG2FYAFO%2Flk%2FT9gS5acdbU2qCSUccW9DcIK%2Fl7H9Uy4MEjlk9lruKSi8Eyzd7RY4Pqm%2F7ZelBujbicr%2B5MGuJQOk%2Fa3%2FCkHNDcvA7E&X-Amz-Signature=36f9bb8d901033afcb85317f3433613819057167e4464f3693019f70fc326dc2&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUGIYSTZ%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T110201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIEmjy6I%2F74bjcCbWykT1qv9Ykes3XmTTL1IP3zdaUBiRAiBZjbmqpRHkQ%2FRy%2BWECJUWpqQ3a%2BYCO9%2F097jCbfpFwBSqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNCAkRgMgjBnMP72%2FKtwD7h2wlorNyaNir2Q0O107DC1878d1nScUhw8Mq%2BG80WOfwhibnbtsKwwA%2BTNFRB7yUaKhNgwehDUO5VZdP1dbUDPxjku2vvJCoa1xNZWe%2FyP5Q3j23%2FBQxF8L6uF43g1TWiUGdmNzJ%2FTsaN%2Bo3TtqP7d4l9tUM6%2BMeKhiabPIK17WNTquzrqQ%2BJZVPluoigce%2BW2mVuE6SERPOhxQPhqDIbUD3iDxaE5KXEhrJNGxvkmitJeUJarIuenByPudIX06hceHbFf08x%2BqOHM2%2Bwyih5SVSLOUUTfH%2FVKk%2Bo7yEE%2Fj1AM4Qyp4KEA09sbeivNiZ2c0lT17JcWdcecz24IpnHdDVNScYMyJ5WbEgMM3%2B%2FjyDzfcADJvBSKISaOz82gpWk4bi3WFrfckoL7%2BEI%2FvOLhD%2BfI%2B%2BMIWtDToxOIVkImSq4qmPcOdzMKz6KGF0nv7e6HdSMTjuor6Qk4GgPR1OPt9W3FxFQ%2FFdpKn267omfSsftNV2qtm%2F5G7yNCkE%2FnztImMYVgzSK5H5xus6Ir3IpMxWpKz7bZ%2FoLrIZmx0x%2BKL%2F92efgX4vDwosfYVY8akwMY%2FE2vZoobdK3MUBfy4uGpEtP%2FFppDQ%2FG5Pk0HogmyjuKp4dA5qve5prp0wzb%2FRvQY6pgGvQ6mkpDBORHZttneTINLT8Qs5DxbQfhx12m%2F7hYESLmeVG2qCNSdORFljh62kadDHUCtMspFOvsgyntdKl0F9G5NGIgxAafKd1UamqKokMLwvTXxkXSOgHFlG2FYAFO%2Flk%2FT9gS5acdbU2qCSUccW9DcIK%2Fl7H9Uy4MEjlk9lruKSi8Eyzd7RY4Pqm%2F7ZelBujbicr%2B5MGuJQOk%2Fa3%2FCkHNDcvA7E&X-Amz-Signature=eb1dff566191a7006c7dff260bb60a50a8ed5e4c3bdcf09cf2d3c524c1647ce5&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
