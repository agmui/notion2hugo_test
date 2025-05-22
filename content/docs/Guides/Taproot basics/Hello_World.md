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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYKPVUWT%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T050925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIQDThl7sNaCWue25rvhGxYcXH08D3EDx3XIeQa58Qj%2BSmgIgLZyQLmQWFWAVFjGDtXN2QBbWuHZSSyxZGXXfNodOtuwqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDu89DJKcK2ua%2FycwyrcA34tdnv9opxzU8rdZA2Ru1Qu4mfX9phDmztc9V73XTuyoU48Y3%2F8jl5DwpdZ5GjToCe%2BwnChHYSlEWPHOnGyaw74AJpnhUH6ktQHeOb5wE5MkuW%2BGZ%2BNw5x3i5H8ocaZPZ%2FSdL1dnn2hy7BvHSCA%2BDKw7XNtQrwoJ%2BzblZScfvQVdHPLCluFMGZqmZu3wJ2F7oA9RWjVC0C0S5RSOXFdDCeR3eVwfOepVKtLFUe3IXpdOp2hCFrTdQVSt8%2FQ%2B0Q8BE1EUmvO4tj%2FQXc05AvZHhzDib%2B5aeV2lPGBKRqYMSmPtRCQvf2C2AxyrJczZ3BWbhd4%2FRho%2Bhf7jrFDSLXuNqmISCpSMwCTGSp4u%2FVGBDV2K6ndm59F1DoSD%2FcLY3U73TlNMP%2BkLjbGItMsrH20s5Gw7VH6BV0y8uZ97EjXlVsSE0dbCBL8Z%2BFjTsMGj2TLvbQAhAY5fi4Uw1m0fNtse5l7DHLvmx0%2FTt4sVRo5qAmqLFQptDZsf6ZTDiR%2FFRzs%2BEukPETVhUO3fyci9t7x3pBWqbzxR2cXeEJVOL1hiUUYNtQx2p8aupcGV5x1bEKy%2F3UfinedeMhiSDR%2BirYFo7E68mGqY7U3VFsXXPNDKNtA3%2Fzy6ztFADCch8WeMKqTusEGOqUBGH28Tr7uyozVeyZVV15YNK%2BWdabvuk7ReagMP4gapJc%2FAtOXTDefCBQELf4z91vR7fIkj0Cmo5rVZVoHU3mcD58HONdQrNMNbSsHaow4l1l3HHp6zLaAc%2FDSAgn5TMo8RyyjiLqRSp6nL9R9XTRCwK6XfDWKKrCzuENmvDP0ecrIlz39xeDVgTlSkZ28oAYCmlhHF9Ah2aq%2Bkxgc5BIbNEEZqIrl&X-Amz-Signature=9bb7ab2b59da74cc72c43ab17e341938f5c84876b627a002aef6a1e028767986&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYKPVUWT%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T050925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIQDThl7sNaCWue25rvhGxYcXH08D3EDx3XIeQa58Qj%2BSmgIgLZyQLmQWFWAVFjGDtXN2QBbWuHZSSyxZGXXfNodOtuwqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDu89DJKcK2ua%2FycwyrcA34tdnv9opxzU8rdZA2Ru1Qu4mfX9phDmztc9V73XTuyoU48Y3%2F8jl5DwpdZ5GjToCe%2BwnChHYSlEWPHOnGyaw74AJpnhUH6ktQHeOb5wE5MkuW%2BGZ%2BNw5x3i5H8ocaZPZ%2FSdL1dnn2hy7BvHSCA%2BDKw7XNtQrwoJ%2BzblZScfvQVdHPLCluFMGZqmZu3wJ2F7oA9RWjVC0C0S5RSOXFdDCeR3eVwfOepVKtLFUe3IXpdOp2hCFrTdQVSt8%2FQ%2B0Q8BE1EUmvO4tj%2FQXc05AvZHhzDib%2B5aeV2lPGBKRqYMSmPtRCQvf2C2AxyrJczZ3BWbhd4%2FRho%2Bhf7jrFDSLXuNqmISCpSMwCTGSp4u%2FVGBDV2K6ndm59F1DoSD%2FcLY3U73TlNMP%2BkLjbGItMsrH20s5Gw7VH6BV0y8uZ97EjXlVsSE0dbCBL8Z%2BFjTsMGj2TLvbQAhAY5fi4Uw1m0fNtse5l7DHLvmx0%2FTt4sVRo5qAmqLFQptDZsf6ZTDiR%2FFRzs%2BEukPETVhUO3fyci9t7x3pBWqbzxR2cXeEJVOL1hiUUYNtQx2p8aupcGV5x1bEKy%2F3UfinedeMhiSDR%2BirYFo7E68mGqY7U3VFsXXPNDKNtA3%2Fzy6ztFADCch8WeMKqTusEGOqUBGH28Tr7uyozVeyZVV15YNK%2BWdabvuk7ReagMP4gapJc%2FAtOXTDefCBQELf4z91vR7fIkj0Cmo5rVZVoHU3mcD58HONdQrNMNbSsHaow4l1l3HHp6zLaAc%2FDSAgn5TMo8RyyjiLqRSp6nL9R9XTRCwK6XfDWKKrCzuENmvDP0ecrIlz39xeDVgTlSkZ28oAYCmlhHF9Ah2aq%2Bkxgc5BIbNEEZqIrl&X-Amz-Signature=99abf0ed2803f196af7ebea99f8012913c43581371b90c4d7bc0880b47eb2512&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
