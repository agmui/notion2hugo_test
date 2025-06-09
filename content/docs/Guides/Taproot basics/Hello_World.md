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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUSARMJU%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T110811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBAvrrSdeSjEETSE%2BC7VHC2pmKW4G8OUYeOJhobuI1o%2BAiEAzhs5obyn1LB8mmdXFhrnFRAyG8B%2B7L6jx1pcGQbADxsqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEGw0PK1PCLUp2MfWSrcA1aUzW0YyfRmimvs76W67ghErRBmWHaluYgpf24wMLp4JGAg%2FzpS64oi5dsFpi3Xlm4twBekpYYYXZbyBKbv9jSaZWrMxiIKNM1Xw5%2FkUGwFSJaHUjpHGpLCvDgz0mBLNMKZrSgXZcOU8GN%2BDcCaHe9rwnLelN%2F%2FxBEJ%2F1L7nr5tZXqmQOeAST0HBYdO1Y6GSQ6x2LpEjuG5QQMTbUCXKx1VpnipnXPjwYjLWDo7eT3fQXlFFIeiZCPv2OqoqcaF8JclhDypdpK1InN1pl547y0QHlj%2BwTAPHNz7%2BXErtc%2FltIxvGhHAXAXBaylZ9X4IGW26R5H1L5Mv8IqcqvAJGdOEYGFhzC2VlQ%2FwC8VcKOiG11Mr7yU86mQgBBVjel93Odd%2Bz2jKF2jZW6di8Jf48IoUoW%2FMCGToAbiZ3RW6dx0%2B%2BisNK2U8kd84hs33AnbO7o%2FnYVTFZwVccKckLC6meJ4xCxun6kriIac4ctre7U6e%2Bg0s8fChWcA9QUq%2BJPmmhml78lq0H3URZSB7WTV0QIt9ph9XvUssjEJqCNtS%2Fpav19M8RTewF7c2HnC%2BtRUADMQn572bhAbbj4Zipltdd2tTktshjEspJBeqIjDcChbZ4%2Bcx%2BgHu2gMxrIDjMKremsIGOqUBKgnxEHv%2BXgEfK4Mbv3b8jRxaWZSNiqufctabYT9z4sGx8DKPLexJYe%2Ftr9fwyfehyCfTDtDPWoW26aRe8HrPCzsoJrQ3UNqLW%2F354%2FZzQEZwugkzUQ%2B6o37LP2d3AMa0ybPjyKl7apwdUdfTe8pQudVluAoZ%2BoxUbmVVqyRyMpMvMKDxxGM9pcjaqETDeXJ8XIc0k8MO1R%2BfAQxwPt8NiMlX6x%2FO&X-Amz-Signature=be9ded4d3b937dc4603164a94593e28bd710e9095910fc33fb954a14054a553c&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUSARMJU%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T110811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBAvrrSdeSjEETSE%2BC7VHC2pmKW4G8OUYeOJhobuI1o%2BAiEAzhs5obyn1LB8mmdXFhrnFRAyG8B%2B7L6jx1pcGQbADxsqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEGw0PK1PCLUp2MfWSrcA1aUzW0YyfRmimvs76W67ghErRBmWHaluYgpf24wMLp4JGAg%2FzpS64oi5dsFpi3Xlm4twBekpYYYXZbyBKbv9jSaZWrMxiIKNM1Xw5%2FkUGwFSJaHUjpHGpLCvDgz0mBLNMKZrSgXZcOU8GN%2BDcCaHe9rwnLelN%2F%2FxBEJ%2F1L7nr5tZXqmQOeAST0HBYdO1Y6GSQ6x2LpEjuG5QQMTbUCXKx1VpnipnXPjwYjLWDo7eT3fQXlFFIeiZCPv2OqoqcaF8JclhDypdpK1InN1pl547y0QHlj%2BwTAPHNz7%2BXErtc%2FltIxvGhHAXAXBaylZ9X4IGW26R5H1L5Mv8IqcqvAJGdOEYGFhzC2VlQ%2FwC8VcKOiG11Mr7yU86mQgBBVjel93Odd%2Bz2jKF2jZW6di8Jf48IoUoW%2FMCGToAbiZ3RW6dx0%2B%2BisNK2U8kd84hs33AnbO7o%2FnYVTFZwVccKckLC6meJ4xCxun6kriIac4ctre7U6e%2Bg0s8fChWcA9QUq%2BJPmmhml78lq0H3URZSB7WTV0QIt9ph9XvUssjEJqCNtS%2Fpav19M8RTewF7c2HnC%2BtRUADMQn572bhAbbj4Zipltdd2tTktshjEspJBeqIjDcChbZ4%2Bcx%2BgHu2gMxrIDjMKremsIGOqUBKgnxEHv%2BXgEfK4Mbv3b8jRxaWZSNiqufctabYT9z4sGx8DKPLexJYe%2Ftr9fwyfehyCfTDtDPWoW26aRe8HrPCzsoJrQ3UNqLW%2F354%2FZzQEZwugkzUQ%2B6o37LP2d3AMa0ybPjyKl7apwdUdfTe8pQudVluAoZ%2BoxUbmVVqyRyMpMvMKDxxGM9pcjaqETDeXJ8XIc0k8MO1R%2BfAQxwPt8NiMlX6x%2FO&X-Amz-Signature=73e2b3c5f574e30c390e4edf3a525ced6278de3250261ad9f2fd42b2b5168ce0&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
