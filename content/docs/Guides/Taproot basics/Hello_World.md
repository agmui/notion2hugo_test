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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SA7FTVXC%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T121749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCZYCuoHzS7kYqK1UWwees4f6gZ7f6tp7rvOaFel5vMxgIgP2anWuBJHgJHbNeBAF%2Bj3veDAhWZ1%2FRfVBWpfOrN%2BSMqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNbvs5rG0B%2Bw1XUrDyrcA6Qtqb8hmw%2F%2B362Nbm1O3%2Blg%2Fh1IR2%2FhhxxsVfj66MLh%2F%2FcA0pz76TspdGlgItBW%2FCmlBoYVysd7wDjA2RXL5Ub0lAj4HP0g0fhyWVjuQ8zX1sd8QGE2EKjG4UZ91FPYelfgLT0b6NZ0G4CoW%2F1mWXNBn15w%2F3V%2BtJcW6g9GqlGSsmHtq9H%2BqxMz7neBuz98wFnNreezkhcTMoC7eHEFRPrmDQ4kll3OJWb%2FQY9GyguPMLp42Po3kfsL4Hqb7UG5kFafGzU3oiO31MutajxhpoTjSrbomgFUnsw7OP2nxMtAl4Kmzy1iYTjtlvDsxgy99DusOdckdpj7zZZOFfhka2RbOWUpZ0HKm0bqJs3HiiWawm1W%2BcZ0w7qwffsA0G%2F3IpVAnC%2BiHVyoFOfDg3OOolNW1%2FQqGZ1iCiKbWX6L1mZfqjiAhYCixJzuHKxVActC1c7YC9TJZA5MjGqNmeQHteR1Yy2Fcw1G3FxpsTPKgaRK57ZJ04cn5xMQOegJPU%2Bg43ivCqwlWwo8OXC0c%2BeTHoUYuDVfSJaoEPWPhC4cG4sd%2Btfax8bFwdHA2o7wGcd0%2FPqweWHOVCCPYLFcZsGu1sSaWK2qLbqCdaPl7nAuMimUhssLe2263i9lQwMWMIGk58QGOqUBo3%2BInB3NRlOucg93lUFyccoT0SDOcl46RCLrtxdBcqs4t2T1xIJJBOJxB0qTtLtS8ObMqW4fiSKhe3oQu4h2xj4tFJZQDyxIuGT%2FyM2YLZTmmCAFpCSjJpt1wWQWOI5XjJ48RW7y%2Bx%2BwMdmJSvfhBSMGdY1klFCAC81HYqlpzRbXtv4J2aL%2FvbNctyQ%2FwxvcFi1S9wSUcxIy%2BlJQZwpQ%2FmkmhGHL&X-Amz-Signature=eeed2d3cc08f76cfc781dbeb9a5f944a538ec6dc0515768e271cbbc5a31c04da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SA7FTVXC%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T121749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCZYCuoHzS7kYqK1UWwees4f6gZ7f6tp7rvOaFel5vMxgIgP2anWuBJHgJHbNeBAF%2Bj3veDAhWZ1%2FRfVBWpfOrN%2BSMqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNbvs5rG0B%2Bw1XUrDyrcA6Qtqb8hmw%2F%2B362Nbm1O3%2Blg%2Fh1IR2%2FhhxxsVfj66MLh%2F%2FcA0pz76TspdGlgItBW%2FCmlBoYVysd7wDjA2RXL5Ub0lAj4HP0g0fhyWVjuQ8zX1sd8QGE2EKjG4UZ91FPYelfgLT0b6NZ0G4CoW%2F1mWXNBn15w%2F3V%2BtJcW6g9GqlGSsmHtq9H%2BqxMz7neBuz98wFnNreezkhcTMoC7eHEFRPrmDQ4kll3OJWb%2FQY9GyguPMLp42Po3kfsL4Hqb7UG5kFafGzU3oiO31MutajxhpoTjSrbomgFUnsw7OP2nxMtAl4Kmzy1iYTjtlvDsxgy99DusOdckdpj7zZZOFfhka2RbOWUpZ0HKm0bqJs3HiiWawm1W%2BcZ0w7qwffsA0G%2F3IpVAnC%2BiHVyoFOfDg3OOolNW1%2FQqGZ1iCiKbWX6L1mZfqjiAhYCixJzuHKxVActC1c7YC9TJZA5MjGqNmeQHteR1Yy2Fcw1G3FxpsTPKgaRK57ZJ04cn5xMQOegJPU%2Bg43ivCqwlWwo8OXC0c%2BeTHoUYuDVfSJaoEPWPhC4cG4sd%2Btfax8bFwdHA2o7wGcd0%2FPqweWHOVCCPYLFcZsGu1sSaWK2qLbqCdaPl7nAuMimUhssLe2263i9lQwMWMIGk58QGOqUBo3%2BInB3NRlOucg93lUFyccoT0SDOcl46RCLrtxdBcqs4t2T1xIJJBOJxB0qTtLtS8ObMqW4fiSKhe3oQu4h2xj4tFJZQDyxIuGT%2FyM2YLZTmmCAFpCSjJpt1wWQWOI5XjJ48RW7y%2Bx%2BwMdmJSvfhBSMGdY1klFCAC81HYqlpzRbXtv4J2aL%2FvbNctyQ%2FwxvcFi1S9wSUcxIy%2BlJQZwpQ%2FmkmhGHL&X-Amz-Signature=3437df19cd636daf721c197f984a3b73c143fc0cefafa02a8708b995cda6657c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
