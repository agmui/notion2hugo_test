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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WJUG7YJ%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T161119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDmmRLGlJtlmxjXvtZ1eAHO1HV1VvawZH9rJv78QflKIgIgZx9pbhbwcnXNvzlDvKnp%2Fq5W4D14jx66GQOsWi6mYkIqiAQI2f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG%2Bx1cYr5%2FM1gl3OPSrcA00hSRLYy6rO799JoCRMAGTsr2Cb3xBPBWJ%2FeTcrKEP4MQMCmCdTj8QuESj%2Fs0Px65%2FJzu8zBSu9tnl7g%2FGmHcHgZXuSWJ47vhSu6hI%2FpAruim196Di3eW9ShyUB7cqZM0Iopavjiik7MhAOs6SrPNF0Fjrd4GoBP6eD0rMkpzeBPk%2BoVOrw5dWEI74SgWx3Z6Uy0%2FIrfO542Dzq3BuBqI5ndKnX4pI52W5wAwMcDnk1bV%2BdX9k7p0DeOKBzjg9AhJp9Rpom%2BW2nXYSlN6MGaGU7xanJlPm8VDNoGKe5K8IFT0i0u3JNGzM%2F1ivvMVbOXdjE7LWnL2VlM6FEaIE2mVeNpWN9aPGBRV2C%2BqSFsHctDLw4Vv51vyfW9HqlWIG4wP8lqdigI9RHvoxXQxBbIejXGI%2F7JmCQFCSLcj298E31ylUEUhao10%2BXLXzoxsefjR%2FnpspohZzX7bAkQUa0IN1MOyQnVRCeGTkMaIfkJewWuJW1NeCtUI9cNTFfV%2Bm1F8BbSs%2BDMNBIXf8HX3oDcJ8F1y7YmA158rd%2FZLbSXdfuk2RR0DB0YfbX2%2FmJlpvcg7IzqjgBgDQ8HTXuX8t86Yw8rkoGFh2h28w3SSkRtEa1UPc00srCL%2Fmzpu%2BtMOuHkMMGOqUB9HvuJdg3j%2BOJ%2F%2FQnXvL%2B3ZAlJ6O6igO8My6Ny8H7a%2F%2FOSoAxvJb0eg6A5U2y7px%2B0FCaAyPNbi3XW9f73DJ8AlEGpZWlCOL9ZGPH92F%2BgrPCG1HkYoSQfPBkfZuB10QKIDOvpQAjX59HIKfaA4njjBwZIcPGjz9Q9dunGCv8qxzxyG7mzBgxJqMyQgRwvmP55mC5lADf2INMU9lbCRqGU4FOcI0%2B&X-Amz-Signature=db3e1790e9f7f5ec98b50150cde7064073491f7012d50e39aee847d4853c9a8e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WJUG7YJ%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T161119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDmmRLGlJtlmxjXvtZ1eAHO1HV1VvawZH9rJv78QflKIgIgZx9pbhbwcnXNvzlDvKnp%2Fq5W4D14jx66GQOsWi6mYkIqiAQI2f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG%2Bx1cYr5%2FM1gl3OPSrcA00hSRLYy6rO799JoCRMAGTsr2Cb3xBPBWJ%2FeTcrKEP4MQMCmCdTj8QuESj%2Fs0Px65%2FJzu8zBSu9tnl7g%2FGmHcHgZXuSWJ47vhSu6hI%2FpAruim196Di3eW9ShyUB7cqZM0Iopavjiik7MhAOs6SrPNF0Fjrd4GoBP6eD0rMkpzeBPk%2BoVOrw5dWEI74SgWx3Z6Uy0%2FIrfO542Dzq3BuBqI5ndKnX4pI52W5wAwMcDnk1bV%2BdX9k7p0DeOKBzjg9AhJp9Rpom%2BW2nXYSlN6MGaGU7xanJlPm8VDNoGKe5K8IFT0i0u3JNGzM%2F1ivvMVbOXdjE7LWnL2VlM6FEaIE2mVeNpWN9aPGBRV2C%2BqSFsHctDLw4Vv51vyfW9HqlWIG4wP8lqdigI9RHvoxXQxBbIejXGI%2F7JmCQFCSLcj298E31ylUEUhao10%2BXLXzoxsefjR%2FnpspohZzX7bAkQUa0IN1MOyQnVRCeGTkMaIfkJewWuJW1NeCtUI9cNTFfV%2Bm1F8BbSs%2BDMNBIXf8HX3oDcJ8F1y7YmA158rd%2FZLbSXdfuk2RR0DB0YfbX2%2FmJlpvcg7IzqjgBgDQ8HTXuX8t86Yw8rkoGFh2h28w3SSkRtEa1UPc00srCL%2Fmzpu%2BtMOuHkMMGOqUB9HvuJdg3j%2BOJ%2F%2FQnXvL%2B3ZAlJ6O6igO8My6Ny8H7a%2F%2FOSoAxvJb0eg6A5U2y7px%2B0FCaAyPNbi3XW9f73DJ8AlEGpZWlCOL9ZGPH92F%2BgrPCG1HkYoSQfPBkfZuB10QKIDOvpQAjX59HIKfaA4njjBwZIcPGjz9Q9dunGCv8qxzxyG7mzBgxJqMyQgRwvmP55mC5lADf2INMU9lbCRqGU4FOcI0%2B&X-Amz-Signature=72076b7d60113b65236ad42ac41e2763550fe8b873aae461daa26d8e529561ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
