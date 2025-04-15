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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNMF6GRN%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T004024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCzgCEBGbhVIHDmZxKWhoEXDHQU66Zrnnn3mztnoymC8AIhAO8qfmnfe5TPqOegNPN2TrEoOiVmKoRUl81nj6OJWmzPKv8DCCIQABoMNjM3NDIzMTgzODA1IgwGy9AEhPvaCBAwRKUq3AOmLnWbnpelb1IuSDd6Ii%2FX%2F3T7nLHBtlfnLQ4o7av4MM5Qe%2F0pdmbwBidTK2j0hdH3UiJWaM1aIu5Hr1%2B1kfhb8fQuar4Fa7twRFfRYXaK3l6FeXTGw168eXYSksifYmFNtCSwSq%2BgSpHnUUrUJts7RL29nNVcLlEFuizJ27QERgBjkj7u5oSE0B200g5tLOTl25nzCB1Q5oZYoFuDKm0309QIsWG39kJy6n%2B5CBBxBhzbXz8m%2FTRrx%2BE4TCQvZKanmfQBAFCH8bRlSJzdX9l1xF9Yz1p%2BefGVRMgt1D1DimjcVnw%2Fa3C2kMRPbR7hnndJt8O8dZ8iuud%2BnbAMBxc%2BG3aUcOSNhT3E1EoDOswMe%2BolsgDydrjovYoRWr6y5zDhxRRxL%2B9gxvf4OAzGX0nbcOhqESBwHeGRrsUzsUuqxeN22irTDkAQB07JxwCOQedIGWz22VGTefnhy2XKYUQFPhXjPUVgc3Z7VFougbufOKxWLmK33uxAgyg9xZ2Km4ybTVZk5AF70VNinf%2FvdWg9agmWizo6DacK%2FS%2FCnI9pGIXKniAe8Nqr1W8A13jCdyIF9UYwz%2FUr0crSJeDuGVKi2LrVUCaeAzapGUy3INW6GYIu8xMx0CW8wRjESzCE0va%2FBjqkAZdeUE1Fil24Zo%2BMJUiynY2j53DfkKLtsufePO1Q9FmdIAhRgQGFeAaTw1SHCbeBIVsxWvK8iy6Iq8ObQ5DpZFeaRBN09o4TUfR90BIICkQDm%2BQOGnwBpkWdWLdTk%2BKmMR5VCiTJo%2BXM5vQ02VekKV3iRQvOaUMmeQVhjJVqJUuYe2jUF4mSRspXDkabLU6BY5ACiBODj2XgV8s4K%2B7WMx3KbXRg&X-Amz-Signature=9797f7ef50c114e6aba35db10bfe10093fa9fa42c6b8fac2e06bf219658e9ee3&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNMF6GRN%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T004024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCzgCEBGbhVIHDmZxKWhoEXDHQU66Zrnnn3mztnoymC8AIhAO8qfmnfe5TPqOegNPN2TrEoOiVmKoRUl81nj6OJWmzPKv8DCCIQABoMNjM3NDIzMTgzODA1IgwGy9AEhPvaCBAwRKUq3AOmLnWbnpelb1IuSDd6Ii%2FX%2F3T7nLHBtlfnLQ4o7av4MM5Qe%2F0pdmbwBidTK2j0hdH3UiJWaM1aIu5Hr1%2B1kfhb8fQuar4Fa7twRFfRYXaK3l6FeXTGw168eXYSksifYmFNtCSwSq%2BgSpHnUUrUJts7RL29nNVcLlEFuizJ27QERgBjkj7u5oSE0B200g5tLOTl25nzCB1Q5oZYoFuDKm0309QIsWG39kJy6n%2B5CBBxBhzbXz8m%2FTRrx%2BE4TCQvZKanmfQBAFCH8bRlSJzdX9l1xF9Yz1p%2BefGVRMgt1D1DimjcVnw%2Fa3C2kMRPbR7hnndJt8O8dZ8iuud%2BnbAMBxc%2BG3aUcOSNhT3E1EoDOswMe%2BolsgDydrjovYoRWr6y5zDhxRRxL%2B9gxvf4OAzGX0nbcOhqESBwHeGRrsUzsUuqxeN22irTDkAQB07JxwCOQedIGWz22VGTefnhy2XKYUQFPhXjPUVgc3Z7VFougbufOKxWLmK33uxAgyg9xZ2Km4ybTVZk5AF70VNinf%2FvdWg9agmWizo6DacK%2FS%2FCnI9pGIXKniAe8Nqr1W8A13jCdyIF9UYwz%2FUr0crSJeDuGVKi2LrVUCaeAzapGUy3INW6GYIu8xMx0CW8wRjESzCE0va%2FBjqkAZdeUE1Fil24Zo%2BMJUiynY2j53DfkKLtsufePO1Q9FmdIAhRgQGFeAaTw1SHCbeBIVsxWvK8iy6Iq8ObQ5DpZFeaRBN09o4TUfR90BIICkQDm%2BQOGnwBpkWdWLdTk%2BKmMR5VCiTJo%2BXM5vQ02VekKV3iRQvOaUMmeQVhjJVqJUuYe2jUF4mSRspXDkabLU6BY5ACiBODj2XgV8s4K%2B7WMx3KbXRg&X-Amz-Signature=8c76f1b05017798d4d68e6749ebebe27e7da41077c1aa9e0b2da9224b73ce8bb&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
