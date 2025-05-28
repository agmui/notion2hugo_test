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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ICK47QE%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T230831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCHh0dervj8ufEUdoNb5dPt0mNvCxGpyzhiqQNQkMauJQIhAIEMtNjXXyNbe0kND8Wm9Y759YAUxJ0rWdZ7wtX2xifNKv8DCH8QABoMNjM3NDIzMTgzODA1IgwiEW3O3YVkNnCGacAq3AMXMSP7vwncPWVrq743kacHxw14sfiT0m3O03TjrfX9thrJi3RMHbLY0pClw8Jo5Ois98LEV3sc3FIXpvJvfXF5wORIQrID1%2BWoLhIFV0cQDBBh7Bz3Ko8wT56hNyESynNwVlF1%2BQBzTM4xN3cwEM97W2HOX9EXZVmE3iS40QOABFxIMOQWH3OpBR%2BDPPeNUPhouqEPoIWHmTorIXYbCRu3QnqiPBdi9WMo4%2B2quPAP%2FSGgNJ1O3RlFjya3dMpcLmrQvDnX%2Foe75sCiMoHTfbrMN04NwMlRbIOKLZx%2FreiAhl0ECB%2BhpbYshgam%2FnON4Dsq0tm9SYtJxiNv1r8X%2F6gH5eSdnxtVFB6P%2Fp5q7kwSRFykS98%2FPh88u0MoB4HB1wd13WxrPKLHE5dQIk8HflT5YeVEu7MPKs34ANOT72qkL9Bgl%2BP1LRnNDFkuhKD3kh3l0FH%2BTm3kZdxV%2Flx2inl2L%2FJdt7tdy9kYWH9xnQM0midswTem3%2BXVdMAlifLNyyFXtreZQ9TVxqrFRVKyijzDUU0ihkPRcbdeYxZJOoD5t4AfDnBTnaREpQq1Qy%2BEE%2BxsIe9v1QZvQ1MpFbHeUNcYAOm5JrsFPCA8BlhkUC2Uz89EgKw6b4jxJ%2Fg64jCjkd7BBjqkAdhidCtppR12Ds7uBCfKeGBTUbKqEicqpFm83k80FftZE8Hp3SLtMLetoFKu4JqxaIJ7QyeHJMUjVcnOJHCJWrOSDxKlTljv2V82LUpKT4l0%2BH8xR%2FglNWfB2NgyKu9P2oDpgPCjJuj8OljLeT%2B0CIbLSkIj3td4uick3CpHtk7VzK9iXPMaVJ%2BeWCd8mwR2g05GP28mTgzaL42hAvWrMIK3pcE7&X-Amz-Signature=b81e02f9fc172f98c11759dc5160d473d422cc49655da9993b51a708b24d5e73&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ICK47QE%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T230831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCHh0dervj8ufEUdoNb5dPt0mNvCxGpyzhiqQNQkMauJQIhAIEMtNjXXyNbe0kND8Wm9Y759YAUxJ0rWdZ7wtX2xifNKv8DCH8QABoMNjM3NDIzMTgzODA1IgwiEW3O3YVkNnCGacAq3AMXMSP7vwncPWVrq743kacHxw14sfiT0m3O03TjrfX9thrJi3RMHbLY0pClw8Jo5Ois98LEV3sc3FIXpvJvfXF5wORIQrID1%2BWoLhIFV0cQDBBh7Bz3Ko8wT56hNyESynNwVlF1%2BQBzTM4xN3cwEM97W2HOX9EXZVmE3iS40QOABFxIMOQWH3OpBR%2BDPPeNUPhouqEPoIWHmTorIXYbCRu3QnqiPBdi9WMo4%2B2quPAP%2FSGgNJ1O3RlFjya3dMpcLmrQvDnX%2Foe75sCiMoHTfbrMN04NwMlRbIOKLZx%2FreiAhl0ECB%2BhpbYshgam%2FnON4Dsq0tm9SYtJxiNv1r8X%2F6gH5eSdnxtVFB6P%2Fp5q7kwSRFykS98%2FPh88u0MoB4HB1wd13WxrPKLHE5dQIk8HflT5YeVEu7MPKs34ANOT72qkL9Bgl%2BP1LRnNDFkuhKD3kh3l0FH%2BTm3kZdxV%2Flx2inl2L%2FJdt7tdy9kYWH9xnQM0midswTem3%2BXVdMAlifLNyyFXtreZQ9TVxqrFRVKyijzDUU0ihkPRcbdeYxZJOoD5t4AfDnBTnaREpQq1Qy%2BEE%2BxsIe9v1QZvQ1MpFbHeUNcYAOm5JrsFPCA8BlhkUC2Uz89EgKw6b4jxJ%2Fg64jCjkd7BBjqkAdhidCtppR12Ds7uBCfKeGBTUbKqEicqpFm83k80FftZE8Hp3SLtMLetoFKu4JqxaIJ7QyeHJMUjVcnOJHCJWrOSDxKlTljv2V82LUpKT4l0%2BH8xR%2FglNWfB2NgyKu9P2oDpgPCjJuj8OljLeT%2B0CIbLSkIj3td4uick3CpHtk7VzK9iXPMaVJ%2BeWCd8mwR2g05GP28mTgzaL42hAvWrMIK3pcE7&X-Amz-Signature=d415d3212844c87ebca0234b9965ad208619b68e87716117fb67bef61e557ecc&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
