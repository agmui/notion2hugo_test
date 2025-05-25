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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLARVARE%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T210703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJIMEYCIQCS2VdTpFluMqP66ewxLIPPpJ4uUJRN4Hz48u%2FqIQA7SQIhAJX%2B%2BiE2VsHWrPPptOu7uMNvdnZFVTeg9UaYPSYifOxcKv8DCDUQABoMNjM3NDIzMTgzODA1IgzC%2FUcg3iyAo9gA7IMq3AOESB%2B5BtmXjOfsTFsR8QmlmZ%2Fw55qOhbdtHT789kKhLFtWyuS36ZlLkIMAgh6hcxgBCfj5QW1GpA%2FoJ%2FoCeEyMbozjra4g4tZTJjTiLpuBqgIvgENpSotnnrP9WQEBwH7Wa%2BvEHbskdsZA37V3vKNNr2LAnwQf0uee0rRKHRYeXter7xzDPf9J%2BoDp51%2BGPJlPdtTeJUPedsPQntoathr%2Ffec%2FH9fjpdx1g2U%2BrH920DX104eZAl%2BRZiwB3GBBI3xg4G6xBGJov955TDyvTA6kK6vWy%2FzhPwBT0762ewCi1kaOA3XwFwyFcyQJo%2BDxm7uS5SemrHy%2Fkvf5Menhed%2BO1QqWE976dntTB7s9sRxRhcEu5U7RPbURaiDUzKYbm7YonJggitAj%2BG%2FRduI7QR3WcHAMo7t3CdzRdYc1%2Fv%2BhTOP3IW05%2Fbweu7gegjQpD7GdRPU8LMIZs7r%2FcGuVBMlZLsN2IkEyWsqFj3sb%2FGu7xmI9BG%2BYqwkGNgLmE8k2PKF%2BdukBiMRzmwB8JI9NoGB7FtN%2BkzkDZyT6hdWbgdyaZOvv3%2BUB6TJBBYds3etXFUPB2ovZZUfX5W1gLzKDpz5WMvtZQi2iCdB%2FfJSkS3up5jCyrtincdE%2BG8pdyTCW9c3BBjqkAUfnF4Q3aW17xkj7jamCpzuBg7XnlvYSnqLVNDZYOycoAtEvD%2B%2FeHRMQsSnehPgMcoLerriXAyHjQUFKLX89ruzAYKF7Pe2Al7O2A3x%2B5u0wI%2FszgNxiGiJ7fGGePmUb9H1v88z3s%2BaYJgXMUUpCIR3is05Du0r8HDYY5FmamQH773ky4pygcrlm3HWh2ptip6sKR1FDd2hXVxXBsaXOaLAzzTwB&X-Amz-Signature=d6adb84740fa7fcc2aeccf6a670c5853c76753281a83416662ad9ad6a2946c94&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLARVARE%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T210703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJIMEYCIQCS2VdTpFluMqP66ewxLIPPpJ4uUJRN4Hz48u%2FqIQA7SQIhAJX%2B%2BiE2VsHWrPPptOu7uMNvdnZFVTeg9UaYPSYifOxcKv8DCDUQABoMNjM3NDIzMTgzODA1IgzC%2FUcg3iyAo9gA7IMq3AOESB%2B5BtmXjOfsTFsR8QmlmZ%2Fw55qOhbdtHT789kKhLFtWyuS36ZlLkIMAgh6hcxgBCfj5QW1GpA%2FoJ%2FoCeEyMbozjra4g4tZTJjTiLpuBqgIvgENpSotnnrP9WQEBwH7Wa%2BvEHbskdsZA37V3vKNNr2LAnwQf0uee0rRKHRYeXter7xzDPf9J%2BoDp51%2BGPJlPdtTeJUPedsPQntoathr%2Ffec%2FH9fjpdx1g2U%2BrH920DX104eZAl%2BRZiwB3GBBI3xg4G6xBGJov955TDyvTA6kK6vWy%2FzhPwBT0762ewCi1kaOA3XwFwyFcyQJo%2BDxm7uS5SemrHy%2Fkvf5Menhed%2BO1QqWE976dntTB7s9sRxRhcEu5U7RPbURaiDUzKYbm7YonJggitAj%2BG%2FRduI7QR3WcHAMo7t3CdzRdYc1%2Fv%2BhTOP3IW05%2Fbweu7gegjQpD7GdRPU8LMIZs7r%2FcGuVBMlZLsN2IkEyWsqFj3sb%2FGu7xmI9BG%2BYqwkGNgLmE8k2PKF%2BdukBiMRzmwB8JI9NoGB7FtN%2BkzkDZyT6hdWbgdyaZOvv3%2BUB6TJBBYds3etXFUPB2ovZZUfX5W1gLzKDpz5WMvtZQi2iCdB%2FfJSkS3up5jCyrtincdE%2BG8pdyTCW9c3BBjqkAUfnF4Q3aW17xkj7jamCpzuBg7XnlvYSnqLVNDZYOycoAtEvD%2B%2FeHRMQsSnehPgMcoLerriXAyHjQUFKLX89ruzAYKF7Pe2Al7O2A3x%2B5u0wI%2FszgNxiGiJ7fGGePmUb9H1v88z3s%2BaYJgXMUUpCIR3is05Du0r8HDYY5FmamQH773ky4pygcrlm3HWh2ptip6sKR1FDd2hXVxXBsaXOaLAzzTwB&X-Amz-Signature=5136d7c3eb033646edfc6ed52fbc961c7beec3922d6c5963b736bf01c0a09b0e&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
