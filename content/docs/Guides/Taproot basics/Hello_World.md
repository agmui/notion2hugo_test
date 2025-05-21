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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TK57HQKN%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T190708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJGMEQCIE6DhvnN8LrBevL3JpdoB0AdTxRggliv5nmfFsjVKSYtAiB28ATXb9z8EHkixynoim3GbG8vjx5ILMAhtGxG0sTPHCqIBAjE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6grdcg9xCEYqPdPdKtwDBd2cGtB15u4cxw1f80wUGXYtYkzB72Xy276Fhn6geUMcq7gDKkHfKM%2FJBaSbJ4YFgJr0KB8gJJtdAURjCTsQexVSC4bzcJqag%2F5bewh5l5x4c0ZgIxD28%2BInUISWCukrNTgokigrWqS%2B6CyGEkZh61C6pNzCGYbMfdDJHZMhlGikP7V%2B0jx563ZrMJEoQDDlDC8iG%2FE%2F9aTfKWSZPs214AtB1jlxhQpLmAmwKa%2B2HMqyx69%2BmPCMmMI1inm81QyTET1K196gXLhlHyf57hUwtj1xHgUSlpv8HIRhzL%2BgJ1Bjw2bVZ8WOCG5qjeOb0E7OTod9vzZiE2yTdjmDZhX%2FiPPyHPjUOWUcapexZ7s2vPabme6qxll%2FaHhOUtdRuMfLkA4Zp3B7F5uq4UR9psdiaMzjEzPLnrg8tKXpcYJh4JqB2qzBQWI4M7fRS7nQWKygXBkVTFZExJjhmR7pnoXRo4DpuOqE0cyhR4bqX6UQjb0HTd6uS9V3W4PTaBbBx2kArhTYjQm7qlIiM%2FIigxgyBF%2FZtP3UDRKqL06eLr794EF9X5Ct7AKY6vbIekfdg%2FhOZYFgDuxCfhym0%2FHNxM0AoEfL8y0nTNQTMe%2Fm%2BgrUyNucwaCDdyfr5ckx3HcwqcC4wQY6pgFEnTEP%2FrplO13svTL7QbfSbdlRInpNKCaAFjq3cy6k1LD9awPXD9JKOVzgxSnOueR2dj4mi9qt0I8ofWPYWk9OvdLS3GBjgSgKXdA9gZDED%2FOeC2ydn9Qs5w4Ym49Ks0Hhd1XaN6ASVMDUa3fDPjv0QDEP48gq2BbaQmeWjfx%2FxB%2FF3rb30ysiucvO8eBff%2F6VwIKWh05LEPd8cSbOiEEMS30bC3EH&X-Amz-Signature=66b3b70e07d08578ef0bcef286799a817cdb409289a7e644d9b315d101ed7556&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TK57HQKN%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T190708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJGMEQCIE6DhvnN8LrBevL3JpdoB0AdTxRggliv5nmfFsjVKSYtAiB28ATXb9z8EHkixynoim3GbG8vjx5ILMAhtGxG0sTPHCqIBAjE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6grdcg9xCEYqPdPdKtwDBd2cGtB15u4cxw1f80wUGXYtYkzB72Xy276Fhn6geUMcq7gDKkHfKM%2FJBaSbJ4YFgJr0KB8gJJtdAURjCTsQexVSC4bzcJqag%2F5bewh5l5x4c0ZgIxD28%2BInUISWCukrNTgokigrWqS%2B6CyGEkZh61C6pNzCGYbMfdDJHZMhlGikP7V%2B0jx563ZrMJEoQDDlDC8iG%2FE%2F9aTfKWSZPs214AtB1jlxhQpLmAmwKa%2B2HMqyx69%2BmPCMmMI1inm81QyTET1K196gXLhlHyf57hUwtj1xHgUSlpv8HIRhzL%2BgJ1Bjw2bVZ8WOCG5qjeOb0E7OTod9vzZiE2yTdjmDZhX%2FiPPyHPjUOWUcapexZ7s2vPabme6qxll%2FaHhOUtdRuMfLkA4Zp3B7F5uq4UR9psdiaMzjEzPLnrg8tKXpcYJh4JqB2qzBQWI4M7fRS7nQWKygXBkVTFZExJjhmR7pnoXRo4DpuOqE0cyhR4bqX6UQjb0HTd6uS9V3W4PTaBbBx2kArhTYjQm7qlIiM%2FIigxgyBF%2FZtP3UDRKqL06eLr794EF9X5Ct7AKY6vbIekfdg%2FhOZYFgDuxCfhym0%2FHNxM0AoEfL8y0nTNQTMe%2Fm%2BgrUyNucwaCDdyfr5ckx3HcwqcC4wQY6pgFEnTEP%2FrplO13svTL7QbfSbdlRInpNKCaAFjq3cy6k1LD9awPXD9JKOVzgxSnOueR2dj4mi9qt0I8ofWPYWk9OvdLS3GBjgSgKXdA9gZDED%2FOeC2ydn9Qs5w4Ym49Ks0Hhd1XaN6ASVMDUa3fDPjv0QDEP48gq2BbaQmeWjfx%2FxB%2FF3rb30ysiucvO8eBff%2F6VwIKWh05LEPd8cSbOiEEMS30bC3EH&X-Amz-Signature=c3b607c8ad2ba9815e43fb5e192d50f6b8e7f38445a77bb66b1c383042883586&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
