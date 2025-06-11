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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BXOEMT2%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T121629Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCeORNyIZNnMKLy0Gfd%2Fc7JLRrT54z%2Bvw82Tt5wbzt0IgIgUZNO%2BCJob5htWB1VvQgh2oqrDjDZ90tN4MksY49SJfMqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOSIanOoCjOIGsKKRircA3ewrPXHh5RsfN8TnWYyk0cluSsGcq14c11%2FnaK32Ox7EVDdFZ4vsyg5j4wZ%2BfVYgmri6PebwIfimA4i7INTg03F2LBxHiI5xAyG9F7JjrhC8V22NlIKaKQB6wjAqDF4O5oX7KuYbZMC5hMPEVzIL3emCDTr8B3ZxON7shG9KBNMBnrH7cMHM7HpnBsoITrZS%2BFLtH9pi%2BM2DrmaxiS%2BfqYk66K%2BBRVkPkw3PvyHUdFyTZpPCvdGOGYq31jT4n%2BTdnZhhqQTmBexsM0vtZIcH3UAseWaBkncnqUJlq%2BP4PlvGxsGCMfw%2BEc91pExBHKYd9M%2BSm%2BO5HK4VkAzHvI63t5HoovMuVMMC3GrtSlKHdM%2FCi%2F%2BvWhzH5Tdn3JdLMxL2feJSam2N1Cu5OE2mynVve385bkTYFI6cHp0DiO00c795hR%2Br9%2Fzwq3LPjG5k4E2AWEHiBVR1YQ41ki2Isisca3abufqeXm49NHiThRLCtymwkS79agDkh6v3YwRFWtKx1w4gPr0%2BWjgsPEUbUKa%2BUxcVs0FTqo1%2Fnfn03PPERBB3uh02fH0GCRMKvx%2Fc%2BQgzArhflQofcrXtQ1i6uUS8OttsgvY7XPBe8BswT7xEJPqIGMajCiY41nrMkXAMOLlpcIGOqUB0%2BMg3TbJydHnu3lljMpipQ8mMls%2BYr6TnoH%2BJ6DfPVE%2F4U63MjiV5FJfZAVadP9440YMYirQWfvIogc9rTDcuGgH26QQF1g6G4T3NyoO8GiPsNhmiJtCM4%2FtdN344CN4ucvlVGWE15F9yQH1vLuqRl%2F651g6VOlx4HeVj5ZIIgW4I2mSROVj8UeomM%2F8d6V4fwb%2BiuKYCqFOPSprfRjbeWYXBh2x&X-Amz-Signature=b5f50cd3fa287395aed9b9b3120bf36ca5363db34cc0fb58f67f27dc0eedec26&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BXOEMT2%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T121629Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCeORNyIZNnMKLy0Gfd%2Fc7JLRrT54z%2Bvw82Tt5wbzt0IgIgUZNO%2BCJob5htWB1VvQgh2oqrDjDZ90tN4MksY49SJfMqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOSIanOoCjOIGsKKRircA3ewrPXHh5RsfN8TnWYyk0cluSsGcq14c11%2FnaK32Ox7EVDdFZ4vsyg5j4wZ%2BfVYgmri6PebwIfimA4i7INTg03F2LBxHiI5xAyG9F7JjrhC8V22NlIKaKQB6wjAqDF4O5oX7KuYbZMC5hMPEVzIL3emCDTr8B3ZxON7shG9KBNMBnrH7cMHM7HpnBsoITrZS%2BFLtH9pi%2BM2DrmaxiS%2BfqYk66K%2BBRVkPkw3PvyHUdFyTZpPCvdGOGYq31jT4n%2BTdnZhhqQTmBexsM0vtZIcH3UAseWaBkncnqUJlq%2BP4PlvGxsGCMfw%2BEc91pExBHKYd9M%2BSm%2BO5HK4VkAzHvI63t5HoovMuVMMC3GrtSlKHdM%2FCi%2F%2BvWhzH5Tdn3JdLMxL2feJSam2N1Cu5OE2mynVve385bkTYFI6cHp0DiO00c795hR%2Br9%2Fzwq3LPjG5k4E2AWEHiBVR1YQ41ki2Isisca3abufqeXm49NHiThRLCtymwkS79agDkh6v3YwRFWtKx1w4gPr0%2BWjgsPEUbUKa%2BUxcVs0FTqo1%2Fnfn03PPERBB3uh02fH0GCRMKvx%2Fc%2BQgzArhflQofcrXtQ1i6uUS8OttsgvY7XPBe8BswT7xEJPqIGMajCiY41nrMkXAMOLlpcIGOqUB0%2BMg3TbJydHnu3lljMpipQ8mMls%2BYr6TnoH%2BJ6DfPVE%2F4U63MjiV5FJfZAVadP9440YMYirQWfvIogc9rTDcuGgH26QQF1g6G4T3NyoO8GiPsNhmiJtCM4%2FtdN344CN4ucvlVGWE15F9yQH1vLuqRl%2F651g6VOlx4HeVj5ZIIgW4I2mSROVj8UeomM%2F8d6V4fwb%2BiuKYCqFOPSprfRjbeWYXBh2x&X-Amz-Signature=36509ad5a48b8ca37932d7ce509a5c43b0f8e7b63d239c0ca5a6233d5f3e3511&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
