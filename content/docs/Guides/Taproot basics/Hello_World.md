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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642BXQXNZ%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T110714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFtbKO9lTvtuc9FU0AqtgfZyVyzTO06vdIVk%2BxegY4eGAiEAoE4kxcf84Eqbg0oVJj5D0Wlhz07unnxHQa%2BkxHP8Kn0q%2FwMIExAAGgw2Mzc0MjMxODM4MDUiDBhDWLvSrQED5dve%2FyrcA6SH9gNGYRRYE3PabdbRLe3yp4LLx2Ke4VYNYa8Ce%2FCoAdqtJnXAnPBsll0a8RQGcOmvH04m3lpoBcjVYW6HQWRCGBhORomvZqqfasQVGXSTEXIfvL43y9a7StDZuLSLgS70u7EVN6sFvlK6m5T0FAXOFDVgL107hmzOJc22YfgcYrJxh%2FS55vbpKIjDZLa8nXvmXE0RXkuf5IMCXJxK3biCyYNRoTQ4hdlcqNODdeNSAEXs%2FBqtmhn1gSbLkC4Lssx4NpRzfyeoC1kvTwq9hYS4hn68VDk9%2FFFFH1M9poIQpDBJF3T0IRkBmPi7IhNfscL2OxFnqebxOZiTp3f7F8n6f%2BNzJ8Wuin4BqZ0UMYxaXnRuQMKC7JkyOQrdC18iTk%2FOIddiLjv66V7U0PqHNCa9bakl43tKZu7ZbGZeM0Yv%2FPGjZOv6CFi%2FhclFlN5PXY%2FQVHi3bgrfxHDoQB6TROjW8R3b8jMdrs5RBqn911uWJt6VirTboObGiXxma2ajW4P6zIIiOhZZzqWIeeYaCcmWrcuihByT2vhjGUZfUe66DYR2YiDPz%2Bxb3QKSNfcys6pqRu%2F2JiowQoUm0sanfTzpgxpoKp%2Faeh1vxHfPstzWsgu3SJPb7TW37px0MKjkvr8GOqUBHp4XhHQ5q3QtDdmSDLCZ0g4WNj28nOiWvvoh5wOSD2pi4I4YhzRQ5mLErBxk4B2634IT6wZ0q928WBE%2Fh9IkXrqWyPIvvSNckRH0khoDQBT82IO%2FTAlf7rkr%2BfSxTQdv4jNMyXUVG%2FUA334N%2B9Kq6tfPaEQB4NAOQ4zb5cw%2BUHCgr5KDx5EbSL%2Bu45qu4szLKKSifPeQIeXhGVC13rM67RSFRoso&X-Amz-Signature=558ace953383e9358e0b2bb39be166e04a1c90237bd409985208a3014fd0680a&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642BXQXNZ%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T110714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFtbKO9lTvtuc9FU0AqtgfZyVyzTO06vdIVk%2BxegY4eGAiEAoE4kxcf84Eqbg0oVJj5D0Wlhz07unnxHQa%2BkxHP8Kn0q%2FwMIExAAGgw2Mzc0MjMxODM4MDUiDBhDWLvSrQED5dve%2FyrcA6SH9gNGYRRYE3PabdbRLe3yp4LLx2Ke4VYNYa8Ce%2FCoAdqtJnXAnPBsll0a8RQGcOmvH04m3lpoBcjVYW6HQWRCGBhORomvZqqfasQVGXSTEXIfvL43y9a7StDZuLSLgS70u7EVN6sFvlK6m5T0FAXOFDVgL107hmzOJc22YfgcYrJxh%2FS55vbpKIjDZLa8nXvmXE0RXkuf5IMCXJxK3biCyYNRoTQ4hdlcqNODdeNSAEXs%2FBqtmhn1gSbLkC4Lssx4NpRzfyeoC1kvTwq9hYS4hn68VDk9%2FFFFH1M9poIQpDBJF3T0IRkBmPi7IhNfscL2OxFnqebxOZiTp3f7F8n6f%2BNzJ8Wuin4BqZ0UMYxaXnRuQMKC7JkyOQrdC18iTk%2FOIddiLjv66V7U0PqHNCa9bakl43tKZu7ZbGZeM0Yv%2FPGjZOv6CFi%2FhclFlN5PXY%2FQVHi3bgrfxHDoQB6TROjW8R3b8jMdrs5RBqn911uWJt6VirTboObGiXxma2ajW4P6zIIiOhZZzqWIeeYaCcmWrcuihByT2vhjGUZfUe66DYR2YiDPz%2Bxb3QKSNfcys6pqRu%2F2JiowQoUm0sanfTzpgxpoKp%2Faeh1vxHfPstzWsgu3SJPb7TW37px0MKjkvr8GOqUBHp4XhHQ5q3QtDdmSDLCZ0g4WNj28nOiWvvoh5wOSD2pi4I4YhzRQ5mLErBxk4B2634IT6wZ0q928WBE%2Fh9IkXrqWyPIvvSNckRH0khoDQBT82IO%2FTAlf7rkr%2BfSxTQdv4jNMyXUVG%2FUA334N%2B9Kq6tfPaEQB4NAOQ4zb5cw%2BUHCgr5KDx5EbSL%2Bu45qu4szLKKSifPeQIeXhGVC13rM67RSFRoso&X-Amz-Signature=03e0ca4262ef0798ed74dfcc06b726e976aee59c91123a6f037a796d9ba58ffd&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
