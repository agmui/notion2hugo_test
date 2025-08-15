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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNTCGEN7%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T181242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJGMEQCIA99CUsqurFW4AaW7UkcwYA%2FXaqkFbqFXJz6kpVDleDMAiAKJhXo9ts1NIo9w1NWa5cAwaDpH5lc7Vg07%2F4VNOj33Sr%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIMBU4xaQwsCao3XL6QKtwD684hRFwZrud52xbc%2F46cfvGEIZxZ68TJrZ9vBqHMrii1GYXes1H3XF9owPVpyD3evKnrG%2FnkEQsQswSTI52EWDe8UmuWg%2FES1Qn0AB8bxA7p8LnZ%2BjHleGQ%2BTsiwljKicoupCSL8wnshLcH0ImunmU4%2FdQP4bkYNXm4%2Br%2Fx870K4xGwaXUqrb3TJkBFdj9aKd3Und4s82PgttMrJHTF0G9oOq1HO36hVNuul0xvvUW31PDvLBmJ8LYyNmZ1czkLFsDTxA8diC5coCoQbi%2FOAs%2FcTbUd4MEqwo9KtcKWo2sfKXGJwnFsVtVN3HtL%2Bh%2F2KLPeQY1MHzUuPbPNgRN2JI9%2Bup%2F8tQU0UeYJUV0GTM3Lw1H3kw%2Frkdgg2MJ7CN0%2FvNqBLX0Ly6spOoXN67yG8%2BR%2BKhH%2BgafmzlFKaDX%2FBajNdlN8jUgSmMevucs4dIsE%2FRUNP2nhofM3Q%2BQQUYOt8GkIBPs2ztUQNF8f4RwCSDTPwGRZpZ1%2FsmQT3JestFl4bDOOAjOMFMTz742NMF1K9Ca40oF0a4%2F%2B%2Fz%2B5z5a35HtsgZeXvtHo7K1VYb%2F5h6CQV8pdE%2FMmKuAoFVl%2BJzlpcPITEyBGOZ7OLOglB79ooRLEpzIsXtoBd8x5AX8Ew19r9xAY6pgF2Wg12Dk3oavt3Oo2FikK36OZkT7C16Sz3GUblfdK56M%2FNftgIMHZAXeiG5yOuLyHCdv9Y940g8yuQklZrQc3OaZG6eE8gbrBodDuSF2N5evrgKtg75kjk%2FLxgzQX%2FU6s2u%2FJuLqpQ%2BrQDHPzhyOh9ggcLsJ3etsMMCbst4Yeh7u3gTvxS1n1W76dDfULthRa7ywRgoRtb5%2F408ZUZMZ10HS4u3419&X-Amz-Signature=13aca94cca2896d07373d6851336995875965d2ea91c2f93051bc54cd2914015&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNTCGEN7%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T181242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJGMEQCIA99CUsqurFW4AaW7UkcwYA%2FXaqkFbqFXJz6kpVDleDMAiAKJhXo9ts1NIo9w1NWa5cAwaDpH5lc7Vg07%2F4VNOj33Sr%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIMBU4xaQwsCao3XL6QKtwD684hRFwZrud52xbc%2F46cfvGEIZxZ68TJrZ9vBqHMrii1GYXes1H3XF9owPVpyD3evKnrG%2FnkEQsQswSTI52EWDe8UmuWg%2FES1Qn0AB8bxA7p8LnZ%2BjHleGQ%2BTsiwljKicoupCSL8wnshLcH0ImunmU4%2FdQP4bkYNXm4%2Br%2Fx870K4xGwaXUqrb3TJkBFdj9aKd3Und4s82PgttMrJHTF0G9oOq1HO36hVNuul0xvvUW31PDvLBmJ8LYyNmZ1czkLFsDTxA8diC5coCoQbi%2FOAs%2FcTbUd4MEqwo9KtcKWo2sfKXGJwnFsVtVN3HtL%2Bh%2F2KLPeQY1MHzUuPbPNgRN2JI9%2Bup%2F8tQU0UeYJUV0GTM3Lw1H3kw%2Frkdgg2MJ7CN0%2FvNqBLX0Ly6spOoXN67yG8%2BR%2BKhH%2BgafmzlFKaDX%2FBajNdlN8jUgSmMevucs4dIsE%2FRUNP2nhofM3Q%2BQQUYOt8GkIBPs2ztUQNF8f4RwCSDTPwGRZpZ1%2FsmQT3JestFl4bDOOAjOMFMTz742NMF1K9Ca40oF0a4%2F%2B%2Fz%2B5z5a35HtsgZeXvtHo7K1VYb%2F5h6CQV8pdE%2FMmKuAoFVl%2BJzlpcPITEyBGOZ7OLOglB79ooRLEpzIsXtoBd8x5AX8Ew19r9xAY6pgF2Wg12Dk3oavt3Oo2FikK36OZkT7C16Sz3GUblfdK56M%2FNftgIMHZAXeiG5yOuLyHCdv9Y940g8yuQklZrQc3OaZG6eE8gbrBodDuSF2N5evrgKtg75kjk%2FLxgzQX%2FU6s2u%2FJuLqpQ%2BrQDHPzhyOh9ggcLsJ3etsMMCbst4Yeh7u3gTvxS1n1W76dDfULthRa7ywRgoRtb5%2F408ZUZMZ10HS4u3419&X-Amz-Signature=fde9b53416095b03a202a4e69e657ef45aaaae2a2472511a21382956808b96b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
