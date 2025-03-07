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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQ77GC35%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T041015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDHFDEQzceG6K9fIRNwI%2BEdzufOXvUyukumRmTTuaygvAiA0q0MakjxZBCtEOSpV0geDYBL0j%2BTqLZ1c%2BEJiHvH3Hir%2FAwg4EAAaDDYzNzQyMzE4MzgwNSIMlUenKxbF7wt6hLLqKtwDS4HpXDVCBdNXNDNUyrXfpkhu3%2FsLhlfhOJcQzfdz61UAUmimLOLEwonFV65OmekQ04UyvwI64qtpszWXzLmBPR1EPevUizAnD4Q393LIRal%2B%2BoZ8stNrDRzjGuFBe1NUYclICak4frRCDbW9tsslhCuiYexnsD8xpb5D%2BPqW4MPzodV3Tj6XvOoVnuCNoEEpE1vzaW4%2F760pFMh50OL%2BjadiKmOd%2Fi97vr7UFeXnOHjcESy1BLQa7gCfRgd2BgMJdttp10tcJnzco0Ah%2BjaTK0vr1w%2FQzAEBejBdIP37NmjuakGpbUIaSKjgozMbKUPaAARwoPoUgyWsk%2ByFGpxAt%2FIZGgvfiokNEx5gRjja9lBwFes06vf9XFyO8%2FFR6V0ZcLvoGEX5uYLcPoqrztSeiEu8QT2b0p4sI2ELuVO4CNqwfDJFY6VZsWahGEibVZzqYgoewOQVdCPFDKtijmmaO6za5mqxMaVs8nYpYsCwNbR%2FF2jLVTM4nS0kn0TAChTf5SGm56dS7Dn6mbNZ7cCdtxM1yT5C3oRRegKwaPcRM%2B1MoshQouFPEl5ar61vP0TubHBCEgt1IQzSxzAGH9DuwftURi%2FDxG06oT2J0rFzes10xrCe2tL8fV0lrCMw9MmovgY6pgG4vw0bc0iVc8NBa5eCgBdzRRwsfX1h23gFyhx6hxogd0zJPzIjU%2FmpviMHrMYq%2F4d2qUZSNXwYOd2YFHf3K1IL%2F0Rw0iOWbr3iqGDi7GfQf19g3%2BNN4cjjdQeCLvmFbJ4Mv%2FFlWlEeTdrLoMQe%2FXQ0E1VpSLjf6lR3nJiy53wXd2SBlreImlNhcBI7Ism8H4vMYUowqJfKnuGCUt7tAm6y%2FMQW1H%2Fo&X-Amz-Signature=2385e0dbd6052f89479b767e97edf13153e7af576b04b9be162b483d94fc163f&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQ77GC35%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T041015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDHFDEQzceG6K9fIRNwI%2BEdzufOXvUyukumRmTTuaygvAiA0q0MakjxZBCtEOSpV0geDYBL0j%2BTqLZ1c%2BEJiHvH3Hir%2FAwg4EAAaDDYzNzQyMzE4MzgwNSIMlUenKxbF7wt6hLLqKtwDS4HpXDVCBdNXNDNUyrXfpkhu3%2FsLhlfhOJcQzfdz61UAUmimLOLEwonFV65OmekQ04UyvwI64qtpszWXzLmBPR1EPevUizAnD4Q393LIRal%2B%2BoZ8stNrDRzjGuFBe1NUYclICak4frRCDbW9tsslhCuiYexnsD8xpb5D%2BPqW4MPzodV3Tj6XvOoVnuCNoEEpE1vzaW4%2F760pFMh50OL%2BjadiKmOd%2Fi97vr7UFeXnOHjcESy1BLQa7gCfRgd2BgMJdttp10tcJnzco0Ah%2BjaTK0vr1w%2FQzAEBejBdIP37NmjuakGpbUIaSKjgozMbKUPaAARwoPoUgyWsk%2ByFGpxAt%2FIZGgvfiokNEx5gRjja9lBwFes06vf9XFyO8%2FFR6V0ZcLvoGEX5uYLcPoqrztSeiEu8QT2b0p4sI2ELuVO4CNqwfDJFY6VZsWahGEibVZzqYgoewOQVdCPFDKtijmmaO6za5mqxMaVs8nYpYsCwNbR%2FF2jLVTM4nS0kn0TAChTf5SGm56dS7Dn6mbNZ7cCdtxM1yT5C3oRRegKwaPcRM%2B1MoshQouFPEl5ar61vP0TubHBCEgt1IQzSxzAGH9DuwftURi%2FDxG06oT2J0rFzes10xrCe2tL8fV0lrCMw9MmovgY6pgG4vw0bc0iVc8NBa5eCgBdzRRwsfX1h23gFyhx6hxogd0zJPzIjU%2FmpviMHrMYq%2F4d2qUZSNXwYOd2YFHf3K1IL%2F0Rw0iOWbr3iqGDi7GfQf19g3%2BNN4cjjdQeCLvmFbJ4Mv%2FFlWlEeTdrLoMQe%2FXQ0E1VpSLjf6lR3nJiy53wXd2SBlreImlNhcBI7Ism8H4vMYUowqJfKnuGCUt7tAm6y%2FMQW1H%2Fo&X-Amz-Signature=125b0795c114115af56e051e357b29df1370fe8ba6d483ff5376d275719f1c96&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
