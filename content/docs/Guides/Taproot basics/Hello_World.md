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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRSB3GSU%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T170736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDid7fn2dUjJ0%2BHMUoevPs5Z4Bfz3NFzClLFc4ateF7lAIgIHNPFV6143Bjba0txEDO7Zv%2BJVP3SJtnSXemtWABCbEqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPTnzsB3OGlwWRIFCyrcA3FO0X%2FTn5ypsRv9WsgpdMaU9%2FpLBW5VzaE0w8Q2nQOaim3Y5AhUGFw%2FS6N7HY2OhJRhGfVs5nZuQM%2BHV1vdJu%2FYkBs%2FQn5TJVmRe5qYHbAOE3EdRuRTix50eBE5fuaW6TAj17aXHHpw9mjYxVaN6Ysqq3dGaYeoMhrE%2BKPYd%2F6ZO%2BN95F9OZak6SMcO02wpQfRM5Zmb7DIc5oaly6qgilRHga%2BB%2BFLi3hPgZR7khqSaqlN0dllGs4W0f7muE87R1%2BAJunZ0upVe4WT7i7z9dyiDMelkMIrOxnz9cSvc1quo0kSx2aoCPtJngqJEU7xnBLdL%2Bh9qARvUXrOTO3zkvwnM2icsnr%2FDIz%2BgwGmRqnBYYzjX6FKq9WKpVZrwKqrw7me6jw9QzBv3VqB0SrcKwHz6ZBJtebfuwBeQYknlkdrC0GG9BP%2BN%2F%2FKZuAQbvLWA%2FvfCAoHLAM78hduPg0pvZtMSLNDTaRcUG9uXQmmxezgI4qbnq%2BkYvM99qLRvtoPzbbPsUylOkN7%2BMmndPSxXgUhGbl5nkrRfaj0JUrZAXgBYEE0bxTP2pI%2F8PWo0i8nOegmqRwMnbGS8g4Wv%2BDgmGyguIyqb56zkkg58Fbl%2FYQH40OY86VoI9l%2FIodP0MN3d0MIGOqUBPG73BObjhbM%2BhCFWAkZTnfd6EVTd22PlCC4mO%2FJpAjS%2BulLWSkm%2BB2vCKhn1DlmJhBbr7%2B%2F%2F63OlAxVR12QvBu9z5W%2Bbkgg4ZCzYGKNx9hV5ymmVHBgBMFH4CrR2%2B9TFgD23mhRrNUvrI1Tdr2NURn8Z%2BN8e9cpz9U5WTe4UTh6VcP%2FqKIfLP1qLwR9%2FKt0w47itPbRosYDvbGFCMtS%2BV5uajQC5&X-Amz-Signature=028b1df99f608edcd5e1ac19cfcbcf874c107bc5f7bf6c87336a6e45594a17f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRSB3GSU%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T170736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDid7fn2dUjJ0%2BHMUoevPs5Z4Bfz3NFzClLFc4ateF7lAIgIHNPFV6143Bjba0txEDO7Zv%2BJVP3SJtnSXemtWABCbEqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPTnzsB3OGlwWRIFCyrcA3FO0X%2FTn5ypsRv9WsgpdMaU9%2FpLBW5VzaE0w8Q2nQOaim3Y5AhUGFw%2FS6N7HY2OhJRhGfVs5nZuQM%2BHV1vdJu%2FYkBs%2FQn5TJVmRe5qYHbAOE3EdRuRTix50eBE5fuaW6TAj17aXHHpw9mjYxVaN6Ysqq3dGaYeoMhrE%2BKPYd%2F6ZO%2BN95F9OZak6SMcO02wpQfRM5Zmb7DIc5oaly6qgilRHga%2BB%2BFLi3hPgZR7khqSaqlN0dllGs4W0f7muE87R1%2BAJunZ0upVe4WT7i7z9dyiDMelkMIrOxnz9cSvc1quo0kSx2aoCPtJngqJEU7xnBLdL%2Bh9qARvUXrOTO3zkvwnM2icsnr%2FDIz%2BgwGmRqnBYYzjX6FKq9WKpVZrwKqrw7me6jw9QzBv3VqB0SrcKwHz6ZBJtebfuwBeQYknlkdrC0GG9BP%2BN%2F%2FKZuAQbvLWA%2FvfCAoHLAM78hduPg0pvZtMSLNDTaRcUG9uXQmmxezgI4qbnq%2BkYvM99qLRvtoPzbbPsUylOkN7%2BMmndPSxXgUhGbl5nkrRfaj0JUrZAXgBYEE0bxTP2pI%2F8PWo0i8nOegmqRwMnbGS8g4Wv%2BDgmGyguIyqb56zkkg58Fbl%2FYQH40OY86VoI9l%2FIodP0MN3d0MIGOqUBPG73BObjhbM%2BhCFWAkZTnfd6EVTd22PlCC4mO%2FJpAjS%2BulLWSkm%2BB2vCKhn1DlmJhBbr7%2B%2F%2F63OlAxVR12QvBu9z5W%2Bbkgg4ZCzYGKNx9hV5ymmVHBgBMFH4CrR2%2B9TFgD23mhRrNUvrI1Tdr2NURn8Z%2BN8e9cpz9U5WTe4UTh6VcP%2FqKIfLP1qLwR9%2FKt0w47itPbRosYDvbGFCMtS%2BV5uajQC5&X-Amz-Signature=55b87895777251d47c344592f02f48ae1867635ee07530b96baaab829ef10205&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
