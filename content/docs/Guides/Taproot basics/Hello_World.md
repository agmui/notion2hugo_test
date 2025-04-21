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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NKYL7DZ%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T210742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIA3YDwqORH%2BuHMkDCh09CzkJ4wN%2FnMOyOhz%2BH4USsto2AiEAq6bFB80SFyjRMmDIJLKhndvqSNJAmG%2Ba1rbD%2FHoARSkqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCrk0TEDvQD7R9IFvyrcAyxTy5304gBLa0F0ZAkZ5nDfQfn4dPMGly5%2BJvy7ClZhiqVDBZ%2FxoOivLx2sXTPuvh1JFY1jSG85FVsvq8%2F6vuMnFijREfm2h6Y%2Fd3dSCUYnNksHoXBddkHf9vLJF8rS83sO3Qg2uKozXqVzedXf%2BZkOTgA4CUtIqV3ITLdrF7SCgamuoJHjFEYcP1w1j%2FmUXhNLPDlXMxBifhchTajG8oFXtSxbdwLLuxWtugd9X6ujG%2B8lBRymHbVwN5BrD2IsQt7tLgrFuV82zA8zL6lazfE%2B6sER7RBPgrPIcw7B1%2BTty9A1z%2Bn5lmxNcwI2OzJCVpaDg%2BaewBNofZdXKUu%2BVZDvF5K7RDSlKL7U650uLW5ERoI2gYdm2ZlpgyR9dEf60mtav8jDMm2AFE9k2B72RatBU0tMir2DbEJ1klEAPTVNc7ePKOj4RyRq%2F%2BJmSFgLh33m3eb5iXVjOrbOEXbBuVvKTbT6EbICQS6c1EA%2F0UejbS%2BbPwXRqS4VXFXcRgMnhzo9kdeJfKyaicf5muJFHGKI3mW2tz0%2BpzCFiKv9laH7rdxoRfsSyiV7zvgjWalkIfo90V8YpBQOFxjnKm%2Ffa6QSkovj8pm9h%2F7wOCCqpiLpisReuqhdbdtqQgFjMIXTmsAGOqUBN0%2B3Zu3Yjo4Q5oOTPxKp0v67LlIKdggKYz%2Bbr2hW7qQMMtaygpfpL5dT5zIN6ErRkceICl%2FkLW0Ms%2FBzXvNphttoePVVm6WJ54idskDQNRv556dbIppOK%2BhbblgbASzP0J98Ud%2BpzySq91VvpnkXi2TBWWaUW%2B292XcAYjBJG61WuP2ExHMiuuTewG25I2ysIPjtv6giWzqzHPVg9LITjl8T0p4x&X-Amz-Signature=f8489a449809f7a9768fb5f7343c6c56a7e1285a2574a7428b3f87b0e934deaa&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NKYL7DZ%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T210742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIA3YDwqORH%2BuHMkDCh09CzkJ4wN%2FnMOyOhz%2BH4USsto2AiEAq6bFB80SFyjRMmDIJLKhndvqSNJAmG%2Ba1rbD%2FHoARSkqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCrk0TEDvQD7R9IFvyrcAyxTy5304gBLa0F0ZAkZ5nDfQfn4dPMGly5%2BJvy7ClZhiqVDBZ%2FxoOivLx2sXTPuvh1JFY1jSG85FVsvq8%2F6vuMnFijREfm2h6Y%2Fd3dSCUYnNksHoXBddkHf9vLJF8rS83sO3Qg2uKozXqVzedXf%2BZkOTgA4CUtIqV3ITLdrF7SCgamuoJHjFEYcP1w1j%2FmUXhNLPDlXMxBifhchTajG8oFXtSxbdwLLuxWtugd9X6ujG%2B8lBRymHbVwN5BrD2IsQt7tLgrFuV82zA8zL6lazfE%2B6sER7RBPgrPIcw7B1%2BTty9A1z%2Bn5lmxNcwI2OzJCVpaDg%2BaewBNofZdXKUu%2BVZDvF5K7RDSlKL7U650uLW5ERoI2gYdm2ZlpgyR9dEf60mtav8jDMm2AFE9k2B72RatBU0tMir2DbEJ1klEAPTVNc7ePKOj4RyRq%2F%2BJmSFgLh33m3eb5iXVjOrbOEXbBuVvKTbT6EbICQS6c1EA%2F0UejbS%2BbPwXRqS4VXFXcRgMnhzo9kdeJfKyaicf5muJFHGKI3mW2tz0%2BpzCFiKv9laH7rdxoRfsSyiV7zvgjWalkIfo90V8YpBQOFxjnKm%2Ffa6QSkovj8pm9h%2F7wOCCqpiLpisReuqhdbdtqQgFjMIXTmsAGOqUBN0%2B3Zu3Yjo4Q5oOTPxKp0v67LlIKdggKYz%2Bbr2hW7qQMMtaygpfpL5dT5zIN6ErRkceICl%2FkLW0Ms%2FBzXvNphttoePVVm6WJ54idskDQNRv556dbIppOK%2BhbblgbASzP0J98Ud%2BpzySq91VvpnkXi2TBWWaUW%2B292XcAYjBJG61WuP2ExHMiuuTewG25I2ysIPjtv6giWzqzHPVg9LITjl8T0p4x&X-Amz-Signature=7df9a1ba17192f6bcffe074cfef2350174d9d69a6b1c5b0f1ead373c4b007330&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
