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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WY65RHN%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T061132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJIMEYCIQDJAKDOJ7qDGt6agfDW%2B13AS5TCzyZsUFDOFgekroe6WwIhAKrTkcwW%2BQLvrHg06xw5iJrdwvuW10sjUxu%2FlmM%2BUx5VKv8DCFcQABoMNjM3NDIzMTgzODA1IgzfNW7xamdCsytpv5gq3AMDqD5RVOw4dsipPie%2FV%2BepOH5GHpQpoRIJLpRw64Si%2FKyY5kSYi93Ie9w2lmjpSGfrStQG9H5xovqcsqmrCd4zqTdeVwQrSIoDdJb%2FJlCcIls4h6C83002Vc6SdSq08x0oSq1URkHAgfQxGEmjJ1naAHAd1ff7A1qqN2mKup1NEUcZJJdR6IA0ygJpQ3wvSO7ZBhQdtwDi9JZgfMGBfnxpWX1SH3c6PVhFT2iRawvE3LWdzR6hsEdAt5tbdVNFFmsdriv5BLod2BBl3q8v%2FFmNOsEkNtKpPsSip0%2F9T0JeIehMyVlo3A%2B%2BKxcoI6adSaQcl36ZzzxJ%2F0kNh1IOe2zidSQ2Dh0XwEp8Gu%2BxpcNu1BMHDmg1q1EJC2q6XcLf9I74Zgf0%2FOIHurBSA3nxPlMqwCBBPphi1ppMYieLtc47RWZoWjQ2Y1Q%2Fr81ddSau7OrYqN%2F9Z5Bs%2B6z6%2BLqYViOrl5mHHFIH8ZA8xjiZkk4f6T4IQWGjYYSw5c%2FJIBIWYTg0bxzpW%2BiEWDJ1uhclgh1sGdlK%2BBE%2FsuUVPUB97vQypLhFqkwMXcJUGAwHzM6VSJ%2BWFo%2F3kv5y6P0KezcKgvDOvkGphbcc1r74tlKUmqGjwWiXJ5gO4SPtvR5KhDD9mpG9BjqkAbyPtFixiQeEgU95I1yH5r29ffPZAAnnlof5eTEkEWmezgchAy2e4x6HgfuLLcvRKxjS%2F6dxQwmPF%2FDB0NQ9y0nBJA5awKfiP9CBElkf8gjf4y26NVVwpcoz8H46KrR91Tm2PK7jIlU7LVDLV7o1Cf2hnWJ5HkN5DBDWCmuh0nNF%2B6Nv4UUrquwuYW5NXycfJ2NM8JubDenFf80B59SWYdej7m0i&X-Amz-Signature=1f786e07b1999724a33478acde5f1dda5994bb30bcd988c5f4b73de76a91b347&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WY65RHN%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T061132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJIMEYCIQDJAKDOJ7qDGt6agfDW%2B13AS5TCzyZsUFDOFgekroe6WwIhAKrTkcwW%2BQLvrHg06xw5iJrdwvuW10sjUxu%2FlmM%2BUx5VKv8DCFcQABoMNjM3NDIzMTgzODA1IgzfNW7xamdCsytpv5gq3AMDqD5RVOw4dsipPie%2FV%2BepOH5GHpQpoRIJLpRw64Si%2FKyY5kSYi93Ie9w2lmjpSGfrStQG9H5xovqcsqmrCd4zqTdeVwQrSIoDdJb%2FJlCcIls4h6C83002Vc6SdSq08x0oSq1URkHAgfQxGEmjJ1naAHAd1ff7A1qqN2mKup1NEUcZJJdR6IA0ygJpQ3wvSO7ZBhQdtwDi9JZgfMGBfnxpWX1SH3c6PVhFT2iRawvE3LWdzR6hsEdAt5tbdVNFFmsdriv5BLod2BBl3q8v%2FFmNOsEkNtKpPsSip0%2F9T0JeIehMyVlo3A%2B%2BKxcoI6adSaQcl36ZzzxJ%2F0kNh1IOe2zidSQ2Dh0XwEp8Gu%2BxpcNu1BMHDmg1q1EJC2q6XcLf9I74Zgf0%2FOIHurBSA3nxPlMqwCBBPphi1ppMYieLtc47RWZoWjQ2Y1Q%2Fr81ddSau7OrYqN%2F9Z5Bs%2B6z6%2BLqYViOrl5mHHFIH8ZA8xjiZkk4f6T4IQWGjYYSw5c%2FJIBIWYTg0bxzpW%2BiEWDJ1uhclgh1sGdlK%2BBE%2FsuUVPUB97vQypLhFqkwMXcJUGAwHzM6VSJ%2BWFo%2F3kv5y6P0KezcKgvDOvkGphbcc1r74tlKUmqGjwWiXJ5gO4SPtvR5KhDD9mpG9BjqkAbyPtFixiQeEgU95I1yH5r29ffPZAAnnlof5eTEkEWmezgchAy2e4x6HgfuLLcvRKxjS%2F6dxQwmPF%2FDB0NQ9y0nBJA5awKfiP9CBElkf8gjf4y26NVVwpcoz8H46KrR91Tm2PK7jIlU7LVDLV7o1Cf2hnWJ5HkN5DBDWCmuh0nNF%2B6Nv4UUrquwuYW5NXycfJ2NM8JubDenFf80B59SWYdej7m0i&X-Amz-Signature=36f623db882fad3d9dd6364bd6d8b883689fcb65010dd3607dc03dafacdc8c32&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
