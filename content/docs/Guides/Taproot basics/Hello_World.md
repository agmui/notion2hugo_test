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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HTPS4FQ%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T004258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDiiR76pX0ILZxExrdHT6%2B0ANhJ%2BC%2Be0tlBqXOSC3Gw%2FwIgcYeEfLdYyjaPpnHbXRNRJ904yicKTc7CfDP9AnkQ%2FzgqiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDydv07Umnfkt2n9aCrcA1wLaWO%2BlEr8CalfKqHNfiM4RFJilN4TJroyN%2BE1dpDRnr74W4AEliCQIyN4BstVSyk3LhtN0xjKnMlorDMC2nZPMAEwUyyaZF6FcLHXwhMCGycBYtKjsPNR48%2FiPZX%2BeTGYy479sdIP6dnSMZfAMDtYUE8ZMT%2BpjRC1OFWc10WwhUKe4Nro3msr0U%2FG9qKpKu8q1%2B%2BZfYWMPMTBljO4%2BZaSsaNs7yRQO%2FWgnjklkoprxoS7x0M%2FuaBXt4NJRslB2%2BqPfcRrCcOhCqG9RkkMruOPT7AVo6y%2BlLYHYnEptznKtqByGkM5e16Ov%2BeQCdKLVrLUURrfFUqfqyyIof9fnNzTCk%2F6HCKD%2FpIHGw8gZHZDSB%2BZe8IBFg37gHqrDxjkfT2QXB6FwodnpzJf4Y2iLSDXsD%2BLIq%2Fx3VZoO9VFxLWFLruE9Pd9l6BXP3B5CSW8sRNcbmKPzyHWJD30MT5a2cHFMcfQVvnIYdzU3VH6OhUFjLfFsPIryA6JdQ84uaKLBsd%2BE2fW4JZPsGTDhG66yZMr2CUU%2Fi7p1AO1%2BZiciPC7AMFOd9TvZhmpzjpzijw9HrkUu5QFCv4mXj%2FAWhVCFpn%2BzjE1R6RmlWMaz1MKjgQyok8IU4s%2BVmA8fGzgMIy9lsMGOqUBScfzCZkC76VJGpjLzUZptMKex7%2Bhx4FIb4O%2BpuTP4laWBZl7TQs%2F2TGELcsH75dKpfwaPl8bSTVoivAAz8Xk7sW9HHZuT8B6rRq%2BAT2ovDteijZuNsog0%2Bw1gpABX9OgToHY7zI9joItjFQ64JbCjXDv%2F0XVSy8%2FdX%2FuKpufCqoalIXTIr%2BE3pLzeXNEQumnB9VveAtncLlrYEnArRbEPut4AINk&X-Amz-Signature=6fac354ced6b515ac0469e63d7e271ef992ad4ea395262b9e2fbef3ddd4480f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HTPS4FQ%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T004258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDiiR76pX0ILZxExrdHT6%2B0ANhJ%2BC%2Be0tlBqXOSC3Gw%2FwIgcYeEfLdYyjaPpnHbXRNRJ904yicKTc7CfDP9AnkQ%2FzgqiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDydv07Umnfkt2n9aCrcA1wLaWO%2BlEr8CalfKqHNfiM4RFJilN4TJroyN%2BE1dpDRnr74W4AEliCQIyN4BstVSyk3LhtN0xjKnMlorDMC2nZPMAEwUyyaZF6FcLHXwhMCGycBYtKjsPNR48%2FiPZX%2BeTGYy479sdIP6dnSMZfAMDtYUE8ZMT%2BpjRC1OFWc10WwhUKe4Nro3msr0U%2FG9qKpKu8q1%2B%2BZfYWMPMTBljO4%2BZaSsaNs7yRQO%2FWgnjklkoprxoS7x0M%2FuaBXt4NJRslB2%2BqPfcRrCcOhCqG9RkkMruOPT7AVo6y%2BlLYHYnEptznKtqByGkM5e16Ov%2BeQCdKLVrLUURrfFUqfqyyIof9fnNzTCk%2F6HCKD%2FpIHGw8gZHZDSB%2BZe8IBFg37gHqrDxjkfT2QXB6FwodnpzJf4Y2iLSDXsD%2BLIq%2Fx3VZoO9VFxLWFLruE9Pd9l6BXP3B5CSW8sRNcbmKPzyHWJD30MT5a2cHFMcfQVvnIYdzU3VH6OhUFjLfFsPIryA6JdQ84uaKLBsd%2BE2fW4JZPsGTDhG66yZMr2CUU%2Fi7p1AO1%2BZiciPC7AMFOd9TvZhmpzjpzijw9HrkUu5QFCv4mXj%2FAWhVCFpn%2BzjE1R6RmlWMaz1MKjgQyok8IU4s%2BVmA8fGzgMIy9lsMGOqUBScfzCZkC76VJGpjLzUZptMKex7%2Bhx4FIb4O%2BpuTP4laWBZl7TQs%2F2TGELcsH75dKpfwaPl8bSTVoivAAz8Xk7sW9HHZuT8B6rRq%2BAT2ovDteijZuNsog0%2Bw1gpABX9OgToHY7zI9joItjFQ64JbCjXDv%2F0XVSy8%2FdX%2FuKpufCqoalIXTIr%2BE3pLzeXNEQumnB9VveAtncLlrYEnArRbEPut4AINk&X-Amz-Signature=f038624aaec1b761bd21f4d01670d9c24bf947d5bc6aceb781db81520e879b14&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
