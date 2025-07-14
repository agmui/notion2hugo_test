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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662R6LC3CE%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T171037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIADMttOM47NwFPCkDktlUmEuVmm2Imppkzj2TD%2B6i%2FP1AiEA%2BxkuEGPZfj6LcrbCmbWE3hlMIofmaqB1tgDhWKyLtQsq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDPDZOnz3ZYECv6bllCrcAwIvS%2FNWXu%2F10anvmB3UNl%2FVvLaz926QEo%2FCVFpjZRqY4As2vj1kzKkS17sJVyR4fuRD4G1CeF3wOme9nMrwPyDL6jIWtfm4VqiZSTK7XpSgEvhwLA4%2FnFpdqOORvhfAa3w0sDX%2FjjC5lMe0VwjGaijTvt0%2BYVDxqG9olHoWMqDguT8k09hd6rsYjlh9Jgp0fwhYSleI9mhYclIsmI9cDFTHbRoKHvWzicCpeSoMvFgrZ9JOfsf9p5Osti75TPzYmlYyBmHG3%2BfZ0TrdtKuFLw40Z%2BYXtCdieCIjL22hqElQICaQozdulKXEZt96Tph6q191m9vi2uzMZZpGmgUFxYSmnPMyQcKG9fzg6uCOPX%2FDjcDWEE21ckrA%2F7Wniwiee2ADGOjpVFE52gC%2B9Csaj4QSCEDd0H99lYvf4okSjl%2Fn4ygDJPemBldz%2B16W2tFY2NQGAsWzWmDV%2Bf9rW6J%2FvO6SrqhfwwAv5P%2F2GvL0cjiXytmNDXOsZrrXNzVP8W2qDU2ZOAkUnrD6cZ3Mw0cFJU70t8KzL6%2FCciP2w%2BrrB2GNAHsX8cJcXap4iya%2BI8Leuy9U3YZ7vLDLto%2BSspJud%2BZuIuvIhbvBzBjbLHR0tA3ldQ97Vz2HPVZp%2FADKMJ2F1MMGOqUBL%2FND7byqde9xfWH%2F%2B%2BpDqC5GYvJUH0JLCIvbCG78N1Z7urAfKCcl1MKy%2Ft1wjF9DUPcwMle635Ft2HHPwD2QBWo3KGOnnE2iQlta0E63EkP3R9MaGonQ8FUhhPc5CXlj%2FJn%2F2B1HlGWhMIuW9Wcqei4rltDJHwjgWhwstDG2aN4lB4%2B3zQ%2FBH7mCSVzcSkBNPhXZAKun5MJhmLED408j8q3lFWz4&X-Amz-Signature=299b778a84ebe073dc762fbb69d1496f22507019b0675b6e10c3494790e7640d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662R6LC3CE%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T171037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIADMttOM47NwFPCkDktlUmEuVmm2Imppkzj2TD%2B6i%2FP1AiEA%2BxkuEGPZfj6LcrbCmbWE3hlMIofmaqB1tgDhWKyLtQsq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDPDZOnz3ZYECv6bllCrcAwIvS%2FNWXu%2F10anvmB3UNl%2FVvLaz926QEo%2FCVFpjZRqY4As2vj1kzKkS17sJVyR4fuRD4G1CeF3wOme9nMrwPyDL6jIWtfm4VqiZSTK7XpSgEvhwLA4%2FnFpdqOORvhfAa3w0sDX%2FjjC5lMe0VwjGaijTvt0%2BYVDxqG9olHoWMqDguT8k09hd6rsYjlh9Jgp0fwhYSleI9mhYclIsmI9cDFTHbRoKHvWzicCpeSoMvFgrZ9JOfsf9p5Osti75TPzYmlYyBmHG3%2BfZ0TrdtKuFLw40Z%2BYXtCdieCIjL22hqElQICaQozdulKXEZt96Tph6q191m9vi2uzMZZpGmgUFxYSmnPMyQcKG9fzg6uCOPX%2FDjcDWEE21ckrA%2F7Wniwiee2ADGOjpVFE52gC%2B9Csaj4QSCEDd0H99lYvf4okSjl%2Fn4ygDJPemBldz%2B16W2tFY2NQGAsWzWmDV%2Bf9rW6J%2FvO6SrqhfwwAv5P%2F2GvL0cjiXytmNDXOsZrrXNzVP8W2qDU2ZOAkUnrD6cZ3Mw0cFJU70t8KzL6%2FCciP2w%2BrrB2GNAHsX8cJcXap4iya%2BI8Leuy9U3YZ7vLDLto%2BSspJud%2BZuIuvIhbvBzBjbLHR0tA3ldQ97Vz2HPVZp%2FADKMJ2F1MMGOqUBL%2FND7byqde9xfWH%2F%2B%2BpDqC5GYvJUH0JLCIvbCG78N1Z7urAfKCcl1MKy%2Ft1wjF9DUPcwMle635Ft2HHPwD2QBWo3KGOnnE2iQlta0E63EkP3R9MaGonQ8FUhhPc5CXlj%2FJn%2F2B1HlGWhMIuW9Wcqei4rltDJHwjgWhwstDG2aN4lB4%2B3zQ%2FBH7mCSVzcSkBNPhXZAKun5MJhmLED408j8q3lFWz4&X-Amz-Signature=c5386f78ccd887147f88a3ba6453c6407fceeda8b0ee15dd0bab2fe3ca3fa93a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
