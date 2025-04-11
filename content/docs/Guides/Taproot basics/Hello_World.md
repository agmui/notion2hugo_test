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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UO2VUL3R%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T061211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIQDqYcIjFr2iTLFw%2BfH5C%2BkM7P2PPfcyNBUiJ8L1rBPN2gIgVk89hhIhL39bDNQRXD7Urxl6f1CAIx0i8rsr2Xarq7IqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDICjWhG56wq7le8AaSrcAxM%2BpDH0Ct%2BPjyqXexkt1m9hHGuDt%2FxbNaC80jjPznEwMIffa4iPE2fJWQeCvk38v5oGqngb%2FHGR57UIPxRYkNhJ7I1QMq7M6YERKxw98QTct9E%2Fwc%2Fi%2Bmy%2Bn8z%2FigMpzDupTn2dfWQMd4estztdTtgzVFTbmVnMzhbedkWWXmjai6Z2q2paPJFQjIgiJjPyS85mzgMPN4TS5747IUzaPJaJmDSLs%2BRPmoZ8oWXlIJhm5oZsUaOn%2Fiq%2BMMkyKD9q7HZwiO2JKd%2BSl%2B1Nsb9wSZqbiyaJpNE8OOTrP6pH9PKTivFVtatZ5P2FHRyzFUT3uKY4OuYEkAv66vp3DWFpuu9S9fexavWqnQofAOAm7GFREw9P6Gdb5SrGP34EWTf6aPOjpHixq3%2FR5nYy0YRmdVM3x%2Bb%2FsHsKZYNHUhlpOaUoZ3fa%2F0LziT1QhPcRj%2FSyXYjDloIYECBqjnpy6GV352A8nNp5mvPQfT7FWbErTStzMVf2zNT6xL7UPAAiaxtHEXpFhuiwsB9UUahsh6eG8epl3g46avAH%2FLE7bzdPr1Op05td9SK4Kk3Lz2obRAuYDtFXLsqcdv6iUXfyql6CYBmj50nAqk97%2BpvfmWwCMfMBD3ce63bfzZXhLY7GMLLd4r8GOqUBxbbS9el3q1QPKLshuereC03o3a2Oam%2Fjl1O8NsPk%2Bwc3JKzaLXtjFjggJ8lDQeB8TBnTrOYup3joraYHk4BfRiaBM0GLsgsM21JIIxFCZyfdwvgLJECqSlUgbwx5QX%2BYkfiFHzyihvJdSqxpf9MDc8Q%2B0njYg4HDirBqJ9ggR1YVlQz1y7sC6Nf6c2mnhDByinPUZCTYTvctNm%2BcG9iVUH5x5M91&X-Amz-Signature=54429cad397fd1bba3fb929af675de59151d7344a649a9a6ecae94bc7b80b02b&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UO2VUL3R%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T061211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIQDqYcIjFr2iTLFw%2BfH5C%2BkM7P2PPfcyNBUiJ8L1rBPN2gIgVk89hhIhL39bDNQRXD7Urxl6f1CAIx0i8rsr2Xarq7IqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDICjWhG56wq7le8AaSrcAxM%2BpDH0Ct%2BPjyqXexkt1m9hHGuDt%2FxbNaC80jjPznEwMIffa4iPE2fJWQeCvk38v5oGqngb%2FHGR57UIPxRYkNhJ7I1QMq7M6YERKxw98QTct9E%2Fwc%2Fi%2Bmy%2Bn8z%2FigMpzDupTn2dfWQMd4estztdTtgzVFTbmVnMzhbedkWWXmjai6Z2q2paPJFQjIgiJjPyS85mzgMPN4TS5747IUzaPJaJmDSLs%2BRPmoZ8oWXlIJhm5oZsUaOn%2Fiq%2BMMkyKD9q7HZwiO2JKd%2BSl%2B1Nsb9wSZqbiyaJpNE8OOTrP6pH9PKTivFVtatZ5P2FHRyzFUT3uKY4OuYEkAv66vp3DWFpuu9S9fexavWqnQofAOAm7GFREw9P6Gdb5SrGP34EWTf6aPOjpHixq3%2FR5nYy0YRmdVM3x%2Bb%2FsHsKZYNHUhlpOaUoZ3fa%2F0LziT1QhPcRj%2FSyXYjDloIYECBqjnpy6GV352A8nNp5mvPQfT7FWbErTStzMVf2zNT6xL7UPAAiaxtHEXpFhuiwsB9UUahsh6eG8epl3g46avAH%2FLE7bzdPr1Op05td9SK4Kk3Lz2obRAuYDtFXLsqcdv6iUXfyql6CYBmj50nAqk97%2BpvfmWwCMfMBD3ce63bfzZXhLY7GMLLd4r8GOqUBxbbS9el3q1QPKLshuereC03o3a2Oam%2Fjl1O8NsPk%2Bwc3JKzaLXtjFjggJ8lDQeB8TBnTrOYup3joraYHk4BfRiaBM0GLsgsM21JIIxFCZyfdwvgLJECqSlUgbwx5QX%2BYkfiFHzyihvJdSqxpf9MDc8Q%2B0njYg4HDirBqJ9ggR1YVlQz1y7sC6Nf6c2mnhDByinPUZCTYTvctNm%2BcG9iVUH5x5M91&X-Amz-Signature=5f740ca9fec91784c2b0b57b3ba0b129b83b49e2a98a6711d319961a2a4985ec&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
