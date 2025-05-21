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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQWCROBL%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T110729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIQCNuM8Vb3v0Bbqq1kvW4xehTdIvx3mxG1ZdaA71gCKVPgIgNqnht7g%2FDNYdaHuNrRfIOzIc26JEL7J0Xlpayt0Vn90qiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDQ%2B2R3JBGoDfm5RtCrcAx4nxVsxrTPzQqOGBs%2BRYTS857gFV%2BNhpCrN3efP%2BTxwePqIJqj%2FND6qojAFOcb0u5N1gUmEMqfWi%2F4P5jZj4Es9jN0mgkKTQ06FVB0NJ5CTTFA1RbezdiotAfwLJs0MGlf1V3dFaEFdH66zr6%2BWNWBPTvhDCU6qb%2FsaKOQhf2YbnAnYx8jZzDgigeDyJHDvBIcWMSgpDw9t4aZ8JDe0ttbk8Fr5ZUEvOwLpT0tFTUJNRsh%2BN6sf0zxNSkIwrN80GuWeKdppsqcYEQFp6olp8f4Tx54yFZ%2BQEL9QTxFvJTliYPj%2BNYI6xv%2BleDGmcRKtUlusJr%2F3AnGZBlxeDeBs57Na4noXQfp9%2FAR%2FswODDLUVeuqJYVx0%2FSyTK5MYKrCbnG3WFjR4pvkWaoSsHp%2FsiYhy3oqKuNEasQm%2BWvOL%2BqflpsKtdZiZ3Y7FZpXrr5gVzbtBPVNiYKaT07FPIGWkMFGubuYcVgBOi%2FUV44BbNAwL2JkSXGTjkIUYLsgEZzJNqBVCXnCW59tcE53Hs759viqMuyDOprHY9UrGs3%2FmkafRpJhdWm64tUNHK24AeVtZEdri%2BjB%2FhxOmS5f8qSumMOTAeqDC6kIgAdAzhb4bRGf%2BeWNgm3DqnxsY9KZnMMTUtsEGOqUBHpqriMndWe7SGE2USeyL7Xb%2FP3yveoAR8K6hbURRkH%2FwDfwkk%2FC7PY62Oq%2BJD7x%2FVasqUejFDj6eeNhy1zbfLEXR9sPJV0FQUU1VtOhrpInV3zY%2FcOarspWdn5Q%2ByqYJVX7Yv6fQYmskOJAwORyWvWwgebUX9whsDe5xSjAgs2MGf4X7GNHBdqwNxpLvpQMJEwLFWiklsJLrOqPVmGT15NVjM9Ko&X-Amz-Signature=c1a9fa2cd75053cb885497c77156eb2718136457f90ae9997c2cad83a19d2f71&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQWCROBL%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T110729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIQCNuM8Vb3v0Bbqq1kvW4xehTdIvx3mxG1ZdaA71gCKVPgIgNqnht7g%2FDNYdaHuNrRfIOzIc26JEL7J0Xlpayt0Vn90qiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDQ%2B2R3JBGoDfm5RtCrcAx4nxVsxrTPzQqOGBs%2BRYTS857gFV%2BNhpCrN3efP%2BTxwePqIJqj%2FND6qojAFOcb0u5N1gUmEMqfWi%2F4P5jZj4Es9jN0mgkKTQ06FVB0NJ5CTTFA1RbezdiotAfwLJs0MGlf1V3dFaEFdH66zr6%2BWNWBPTvhDCU6qb%2FsaKOQhf2YbnAnYx8jZzDgigeDyJHDvBIcWMSgpDw9t4aZ8JDe0ttbk8Fr5ZUEvOwLpT0tFTUJNRsh%2BN6sf0zxNSkIwrN80GuWeKdppsqcYEQFp6olp8f4Tx54yFZ%2BQEL9QTxFvJTliYPj%2BNYI6xv%2BleDGmcRKtUlusJr%2F3AnGZBlxeDeBs57Na4noXQfp9%2FAR%2FswODDLUVeuqJYVx0%2FSyTK5MYKrCbnG3WFjR4pvkWaoSsHp%2FsiYhy3oqKuNEasQm%2BWvOL%2BqflpsKtdZiZ3Y7FZpXrr5gVzbtBPVNiYKaT07FPIGWkMFGubuYcVgBOi%2FUV44BbNAwL2JkSXGTjkIUYLsgEZzJNqBVCXnCW59tcE53Hs759viqMuyDOprHY9UrGs3%2FmkafRpJhdWm64tUNHK24AeVtZEdri%2BjB%2FhxOmS5f8qSumMOTAeqDC6kIgAdAzhb4bRGf%2BeWNgm3DqnxsY9KZnMMTUtsEGOqUBHpqriMndWe7SGE2USeyL7Xb%2FP3yveoAR8K6hbURRkH%2FwDfwkk%2FC7PY62Oq%2BJD7x%2FVasqUejFDj6eeNhy1zbfLEXR9sPJV0FQUU1VtOhrpInV3zY%2FcOarspWdn5Q%2ByqYJVX7Yv6fQYmskOJAwORyWvWwgebUX9whsDe5xSjAgs2MGf4X7GNHBdqwNxpLvpQMJEwLFWiklsJLrOqPVmGT15NVjM9Ko&X-Amz-Signature=df994916bbbf4a809358533d9d7fa995d845affe7d1eabdbe53a1c6fb72e9c2f&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
