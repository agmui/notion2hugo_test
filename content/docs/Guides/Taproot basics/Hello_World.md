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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USYPA7EA%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T131421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEISfYI%2FHu9xzFe7rqOXBzr9JHW0nIWpslg5usGL6pEOAiA0poDw2rEoZjsQh%2Flvk9v6lAFYwvTgc3sGehyxc0EV6yr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMcKLbezVHqJ0sZtvYKtwDR8TT1oLrX6uGKgPYSiQKH%2FqlAvyXVEoPZkCw1pqq1idmo2ovFobzzk5W3%2BX3NIkUTMG1mQ3hToPotVCMzzyfepg87clP4vRme6McX7eYedhFUCGZsOCnu4IrioHkr71UnAxSOU%2BqIwThWTbV%2FznFLWvTM71lZ2RJCm9Itg2Be%2B7SerBdacAkEaW2CSLWuOenWFLfIex5ITar3nvHE6dOON6t151yhuOj%2B9aU0r4BL%2BTZkP4kJlo4bHn7F8nf3UEDRFRkEeqaZcvNwrGPS%2FEcA3fGYleGBgxTFisPwzB3O7KfMBGk2KX43AcK426cApKl%2B8kizYU30WWvfN6KDQJ%2BQcN0eVW4GQQnoEakTNAhYtWW07rpAFEQ2OY2ekWov7YLyUy%2B4hE1ZTohcWBL0M9UdOfWNwkU22XVWFetjwe5VDAorU8NzOCckQtG%2FO9rsVDa4dwp8nzlRTLiF1eZsI4kL1%2BJsxtJ9Dszgl6c7iBFFvLAa5pyxc%2FcELYE%2FC6jPD2uF6EJiG9yxvmyD4ZkC8zjJ8KJTEfFOE5PcsElQRk658WFdP%2BnUbtdRYOplASyXSH%2FrFdp6t3xD1Y%2FnJjtDN7M7twxKR9u%2BQ22lcjmD%2Fezvd8oTvav%2BLytamn2XzAwseTDvwY6pgFNkGoym2bR%2BPAvAExbFBEGueiBrfUKn87rdJ0dK%2FwEq1%2FLOiWJ%2BAwIkPAL4nsaWbtVMnKGeroR44XHSx4PZa4J6KT41s1yuXSTRjt9jeDbMZW8jjdnBwSTCUktFCl5X%2FLrl1tTdr%2FsQ0t6K6c5RupqQhtmy1i92T9AMrDma1uyIgFP8vtjNpTCjkBCQ16m8iiklmTHyurS5RLDbryZP6yWQqC8rsoI&X-Amz-Signature=2cb0e899338c75c0ab9729bb07ab8be7c375767a0fef62eb50552f1400f982e9&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USYPA7EA%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T131421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEISfYI%2FHu9xzFe7rqOXBzr9JHW0nIWpslg5usGL6pEOAiA0poDw2rEoZjsQh%2Flvk9v6lAFYwvTgc3sGehyxc0EV6yr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMcKLbezVHqJ0sZtvYKtwDR8TT1oLrX6uGKgPYSiQKH%2FqlAvyXVEoPZkCw1pqq1idmo2ovFobzzk5W3%2BX3NIkUTMG1mQ3hToPotVCMzzyfepg87clP4vRme6McX7eYedhFUCGZsOCnu4IrioHkr71UnAxSOU%2BqIwThWTbV%2FznFLWvTM71lZ2RJCm9Itg2Be%2B7SerBdacAkEaW2CSLWuOenWFLfIex5ITar3nvHE6dOON6t151yhuOj%2B9aU0r4BL%2BTZkP4kJlo4bHn7F8nf3UEDRFRkEeqaZcvNwrGPS%2FEcA3fGYleGBgxTFisPwzB3O7KfMBGk2KX43AcK426cApKl%2B8kizYU30WWvfN6KDQJ%2BQcN0eVW4GQQnoEakTNAhYtWW07rpAFEQ2OY2ekWov7YLyUy%2B4hE1ZTohcWBL0M9UdOfWNwkU22XVWFetjwe5VDAorU8NzOCckQtG%2FO9rsVDa4dwp8nzlRTLiF1eZsI4kL1%2BJsxtJ9Dszgl6c7iBFFvLAa5pyxc%2FcELYE%2FC6jPD2uF6EJiG9yxvmyD4ZkC8zjJ8KJTEfFOE5PcsElQRk658WFdP%2BnUbtdRYOplASyXSH%2FrFdp6t3xD1Y%2FnJjtDN7M7twxKR9u%2BQ22lcjmD%2Fezvd8oTvav%2BLytamn2XzAwseTDvwY6pgFNkGoym2bR%2BPAvAExbFBEGueiBrfUKn87rdJ0dK%2FwEq1%2FLOiWJ%2BAwIkPAL4nsaWbtVMnKGeroR44XHSx4PZa4J6KT41s1yuXSTRjt9jeDbMZW8jjdnBwSTCUktFCl5X%2FLrl1tTdr%2FsQ0t6K6c5RupqQhtmy1i92T9AMrDma1uyIgFP8vtjNpTCjkBCQ16m8iiklmTHyurS5RLDbryZP6yWQqC8rsoI&X-Amz-Signature=0f5fa22cda1e4eb32d55795ba51258e59934e9f1f081b5a5f84ad416937c30cf&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
