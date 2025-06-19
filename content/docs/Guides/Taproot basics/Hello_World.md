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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRHBFOCY%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T024003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFBBFzahF8PP3%2BS6dA5CzR0KiLM%2B4NK7tuIerRcQ0Bk4AiEAgW5GhIp4%2FstWxWVuaJ50FqKnZEcGhAw%2BoTtkuYWIKOMqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCULzsOP8Lq0juvCGyrcA5WHcUuHwHtBmZ05PPfsJGU%2BbIHqqFLHJstgAnhfY0qEoSElfZnnyxs3pu3%2BeAW5SZHNJGAI3dgCM7Qmfy0ZtGOqSrh8MkdrqxxUvKtmjGvgCmmR0nCgPShIXXUm0GaRgpXXy6Lw%2FLrcu9kZSRIR8oWvVS%2FBNBz2DIT7lYOUK%2BQbSdtFUAe7ykry8eHm7d03bQ3UFQUUx319XrmjyEne5B0XvrdCYXDDasBXqlFcfSzr%2FJSye9wTJluOIEgu2tPtLOsAeDmYPQsWIvlrnYvP7KtPb9Y2yitHDp6zuXutwrLcdNDuZfcdSoyq8334fT9XNkeawTDIsj2RPE%2BlBn%2BlgSOry7HmHpwHjSEX25%2BuVM5m9UB%2FK6EbSMZYe4qjm89rVvt%2F6DoXXE5%2BYv1SdtK83FNQHfyv6DXwrDAyVe7rumZ%2FMhIPOI2yBhjYxyv9rWyzFQ%2BhRk5UhnWjg2dfNPx%2BvXmgHkl2omPEkhira7IuSGlVKPwCUdt8HyYUmO5Su0GJdfe7X7eTe3mW5qo6mcgkEDDSt7uUIXmoZ0aBxanv2yrvrsQCONE4N5FOmHy9PjhnrGXyHCHLRkbKEDTTljQILVl8MrAiJAFOy3GecDX4W7pP4PbsljNoaaj7a4q%2FMOjKzcIGOqUB2aaqYpcFNETRnQq77FfoitUzRYWF4Rg8LjMuej%2FRzM%2FdYTmi8UhVppaSUonRWgDfrSpkvh8CN%2F3JYs1lJhu2RuP2qNt6buJTrexUIc4GzB4AaJXUMMMXg8%2BufOD5E1Sii%2FT5Yuf3%2BARdYEYt%2B7itR%2BwGnGeFlJ37V%2By0FtiSigHymcUiM0CJQHoJg%2Bp6HPm%2Bwb1ty35%2FN3uwij7vJu35Ot%2FQzxs7&X-Amz-Signature=0a6b6fb0dceca247737020c1fb0d6eea11cc18abccc58f20bcafd8441f632c95&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRHBFOCY%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T024003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFBBFzahF8PP3%2BS6dA5CzR0KiLM%2B4NK7tuIerRcQ0Bk4AiEAgW5GhIp4%2FstWxWVuaJ50FqKnZEcGhAw%2BoTtkuYWIKOMqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCULzsOP8Lq0juvCGyrcA5WHcUuHwHtBmZ05PPfsJGU%2BbIHqqFLHJstgAnhfY0qEoSElfZnnyxs3pu3%2BeAW5SZHNJGAI3dgCM7Qmfy0ZtGOqSrh8MkdrqxxUvKtmjGvgCmmR0nCgPShIXXUm0GaRgpXXy6Lw%2FLrcu9kZSRIR8oWvVS%2FBNBz2DIT7lYOUK%2BQbSdtFUAe7ykry8eHm7d03bQ3UFQUUx319XrmjyEne5B0XvrdCYXDDasBXqlFcfSzr%2FJSye9wTJluOIEgu2tPtLOsAeDmYPQsWIvlrnYvP7KtPb9Y2yitHDp6zuXutwrLcdNDuZfcdSoyq8334fT9XNkeawTDIsj2RPE%2BlBn%2BlgSOry7HmHpwHjSEX25%2BuVM5m9UB%2FK6EbSMZYe4qjm89rVvt%2F6DoXXE5%2BYv1SdtK83FNQHfyv6DXwrDAyVe7rumZ%2FMhIPOI2yBhjYxyv9rWyzFQ%2BhRk5UhnWjg2dfNPx%2BvXmgHkl2omPEkhira7IuSGlVKPwCUdt8HyYUmO5Su0GJdfe7X7eTe3mW5qo6mcgkEDDSt7uUIXmoZ0aBxanv2yrvrsQCONE4N5FOmHy9PjhnrGXyHCHLRkbKEDTTljQILVl8MrAiJAFOy3GecDX4W7pP4PbsljNoaaj7a4q%2FMOjKzcIGOqUB2aaqYpcFNETRnQq77FfoitUzRYWF4Rg8LjMuej%2FRzM%2FdYTmi8UhVppaSUonRWgDfrSpkvh8CN%2F3JYs1lJhu2RuP2qNt6buJTrexUIc4GzB4AaJXUMMMXg8%2BufOD5E1Sii%2FT5Yuf3%2BARdYEYt%2B7itR%2BwGnGeFlJ37V%2By0FtiSigHymcUiM0CJQHoJg%2Bp6HPm%2Bwb1ty35%2FN3uwij7vJu35Ot%2FQzxs7&X-Amz-Signature=a93a6d2e60beca699d8f5fced7cd874b515faa620e745ad3d7256b16d57fcaa7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
