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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466537V2PN6%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T220825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJIMEYCIQD0WQpqsG2vSBMJ%2FTMk0XXkXud7RX6PmQqJBKiC3blMhwIhAMvhd1PqvVZr3uspp1r9VMakecDaIy4M%2FZC8tsNU16tMKogECMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyc4htqYVTh5rZFFqIq3AMWbmxdOox8j8OZ2Q3GMZ1DVVV8grHjCEqMg59jpez95il9wcynDx7WShMa5wKRlaPU7XWgNXbbyQg6LiuMjr%2B4FawtDZQlCh6Ij%2FvbgQVY5BUylXi5OS6Mm9j%2FuM76wHqp35BBq1rwcj1Ng%2BGM%2B0aqNb%2F50f2p9bvxBmR7dcWl3P37LIwRoiRmRbi7zpKLYohq1CrXrAhsk64fbT5W2EZt1SLhxBXTrSdsWPYDtMK%2FV0nqbC68GwZkyUTNX7b1BZFMOYwQQ%2FtlwAGfUYwkTNIg8VOCSEr6zXRNT%2FvIHPSxl8UFI178zOxh3Omdq0MESFaUNn2pASYX9BzxBjBK9kbJhR0UEyWnUbCYseqDLXAISvtbbax7iaioIA%2Fu3pOilaQa1Vvl%2FwdncLCYpbu9AQq%2Bj1DmAevzaCb441XYf4nyAcHRgMtQb%2B2PGOQ%2FrpSw47ezRe01Zvd9ieq0TYuDoCKG3pUjtpvLzrvSMmPEHpFf6QzQ8jBzVjfEKij8ThgT7qLMPA7gKFHuAzB%2BRF7Z0Q5XKOJjRtNgLwRdSHHVBoVumkR9MbNk2OfQS73neMutH%2F6DxdOYqeA4ITF6i9OHj1jfmVuPQUZrad8%2B1LMzPy0WAx2OZB5%2FvmrSgpvjyjDu7ZrABjqkAfX9KU5mWzLIZJH3ncFsI1h6nfKJO%2F2YB2S1lnO5xOI%2FGSosZs6OOZyve5c6u5xO%2FJUrRV%2Fyozthvu66tmI1zQh97YvSZFnoACE2j0dopnJzTNvIXTsMke%2F%2F2H4W0OqWnR5ZYuCbEWEbWpDMvmrYaoM0iV3ieb8x2xKpTTAWsCKLGpFnfJt513FaGmSq7%2FkXGDg6C23wUHNoc2zfjrqFrN0kQMob&X-Amz-Signature=244eb9ed9fccf820c5f17174307811e8cd6d8ded961d9c8bfb16165d7c9251a4&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466537V2PN6%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T220825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJIMEYCIQD0WQpqsG2vSBMJ%2FTMk0XXkXud7RX6PmQqJBKiC3blMhwIhAMvhd1PqvVZr3uspp1r9VMakecDaIy4M%2FZC8tsNU16tMKogECMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyc4htqYVTh5rZFFqIq3AMWbmxdOox8j8OZ2Q3GMZ1DVVV8grHjCEqMg59jpez95il9wcynDx7WShMa5wKRlaPU7XWgNXbbyQg6LiuMjr%2B4FawtDZQlCh6Ij%2FvbgQVY5BUylXi5OS6Mm9j%2FuM76wHqp35BBq1rwcj1Ng%2BGM%2B0aqNb%2F50f2p9bvxBmR7dcWl3P37LIwRoiRmRbi7zpKLYohq1CrXrAhsk64fbT5W2EZt1SLhxBXTrSdsWPYDtMK%2FV0nqbC68GwZkyUTNX7b1BZFMOYwQQ%2FtlwAGfUYwkTNIg8VOCSEr6zXRNT%2FvIHPSxl8UFI178zOxh3Omdq0MESFaUNn2pASYX9BzxBjBK9kbJhR0UEyWnUbCYseqDLXAISvtbbax7iaioIA%2Fu3pOilaQa1Vvl%2FwdncLCYpbu9AQq%2Bj1DmAevzaCb441XYf4nyAcHRgMtQb%2B2PGOQ%2FrpSw47ezRe01Zvd9ieq0TYuDoCKG3pUjtpvLzrvSMmPEHpFf6QzQ8jBzVjfEKij8ThgT7qLMPA7gKFHuAzB%2BRF7Z0Q5XKOJjRtNgLwRdSHHVBoVumkR9MbNk2OfQS73neMutH%2F6DxdOYqeA4ITF6i9OHj1jfmVuPQUZrad8%2B1LMzPy0WAx2OZB5%2FvmrSgpvjyjDu7ZrABjqkAfX9KU5mWzLIZJH3ncFsI1h6nfKJO%2F2YB2S1lnO5xOI%2FGSosZs6OOZyve5c6u5xO%2FJUrRV%2Fyozthvu66tmI1zQh97YvSZFnoACE2j0dopnJzTNvIXTsMke%2F%2F2H4W0OqWnR5ZYuCbEWEbWpDMvmrYaoM0iV3ieb8x2xKpTTAWsCKLGpFnfJt513FaGmSq7%2FkXGDg6C23wUHNoc2zfjrqFrN0kQMob&X-Amz-Signature=c555171303c2d5304099ec472d42f6f33d2faf2552715e2f204cdafb093eb271&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
