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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAQEQQ4Q%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T070953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCICVwmZI73rs%2Bid3JTxEZLVGvfgmXNPIMgH7ISyR1sQ5aAiBi4jkhUHNiyHZrnitX9IZp%2BJ1%2B5bGl69pxVtaBDfLJ2Sr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMdfqc82F5dykLxpCTKtwDhpXGY0Ekwl7JAB9J13p%2BCYlzju67umfBMd6J9IvLC6azHyOyP7qKZNwsbnaxGmtjtWenG0mT6VNnf31c6Tq8lmtOVyDjDL8QN6mJw1DuphrdQCvMp2vMonYOKIlROhdDFzYUneW2ulnKQTA48SEjlKuuY1Vgwhkzfy0rLl2e1c403rYn1GWyR9IagyHnSDkbWtGovRCWFmHUe9FGDZZj7DVnGRLpNOEXGPO8ZsSp82FjEle3rN9FdnLJmHxCSKJBES7TSqtRiDPyoR77%2FnQUgkj%2BQnpS%2BaNEEJL3X9EZOQl1ldqQikolMD%2BnB3rdFbWwIClzFpj818s5siHiZ3%2Bh3rVAJ8UGy0e%2F4KWQvEYClt6KKJ%2BStjyY1Lb4itn7LFbTiqzzNiypBtrUIEUw8%2B%2Ft4RDewSE%2F4WaKm%2BXn7sZ%2FHbhYsEAj6zWVYoXwfJJgtVlhfrGNHWMFBbVEoYJcWrvcRWQQTh7uhKIBBhC86029p8RJWNYQO3OqbHAxCPOUsLGFOBcVK7h4zMl7fn6XIaBFNhP0WgOrSxcTirzJ1gi0t7T7wffmirPB7YTfWn6A4yyGkmxNrdCsIt8BL3GwhLb0ZTbLAd%2BXY3ID059U7VDfmVvG7%2FtQV6jPdBM%2BFzQw5rqWxAY6pgGLb%2FwRaemDWPfCFdMO2ZSB6nrPXhtmonF6F7YgRCRKfX49axJOZZlpY8%2FSCdcD6%2FxaWohf4iwJ4fxStkPV1KdY0WskINy1Ri%2BeygY8Ti3hSkKowQ2PrZLblDqmVz%2Bduo%2FTEXFb%2FzhVBdK7p%2Fjjqdi%2Fr2g3S5Fhtc%2BFi7puxcd%2FCj%2BsKw2RAafEx06jrHBjrjuRqXeQqsJrTSvwLU%2BaOPe9atf2nqnz&X-Amz-Signature=a6e54abf1f03eab2c2abc47ffaba9b3d08ae7ab320b0a1e00188e57d5f88bd61&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAQEQQ4Q%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T070953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCICVwmZI73rs%2Bid3JTxEZLVGvfgmXNPIMgH7ISyR1sQ5aAiBi4jkhUHNiyHZrnitX9IZp%2BJ1%2B5bGl69pxVtaBDfLJ2Sr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMdfqc82F5dykLxpCTKtwDhpXGY0Ekwl7JAB9J13p%2BCYlzju67umfBMd6J9IvLC6azHyOyP7qKZNwsbnaxGmtjtWenG0mT6VNnf31c6Tq8lmtOVyDjDL8QN6mJw1DuphrdQCvMp2vMonYOKIlROhdDFzYUneW2ulnKQTA48SEjlKuuY1Vgwhkzfy0rLl2e1c403rYn1GWyR9IagyHnSDkbWtGovRCWFmHUe9FGDZZj7DVnGRLpNOEXGPO8ZsSp82FjEle3rN9FdnLJmHxCSKJBES7TSqtRiDPyoR77%2FnQUgkj%2BQnpS%2BaNEEJL3X9EZOQl1ldqQikolMD%2BnB3rdFbWwIClzFpj818s5siHiZ3%2Bh3rVAJ8UGy0e%2F4KWQvEYClt6KKJ%2BStjyY1Lb4itn7LFbTiqzzNiypBtrUIEUw8%2B%2Ft4RDewSE%2F4WaKm%2BXn7sZ%2FHbhYsEAj6zWVYoXwfJJgtVlhfrGNHWMFBbVEoYJcWrvcRWQQTh7uhKIBBhC86029p8RJWNYQO3OqbHAxCPOUsLGFOBcVK7h4zMl7fn6XIaBFNhP0WgOrSxcTirzJ1gi0t7T7wffmirPB7YTfWn6A4yyGkmxNrdCsIt8BL3GwhLb0ZTbLAd%2BXY3ID059U7VDfmVvG7%2FtQV6jPdBM%2BFzQw5rqWxAY6pgGLb%2FwRaemDWPfCFdMO2ZSB6nrPXhtmonF6F7YgRCRKfX49axJOZZlpY8%2FSCdcD6%2FxaWohf4iwJ4fxStkPV1KdY0WskINy1Ri%2BeygY8Ti3hSkKowQ2PrZLblDqmVz%2Bduo%2FTEXFb%2FzhVBdK7p%2Fjjqdi%2Fr2g3S5Fhtc%2BFi7puxcd%2FCj%2BsKw2RAafEx06jrHBjrjuRqXeQqsJrTSvwLU%2BaOPe9atf2nqnz&X-Amz-Signature=4f8cb53ceeb0426d77ebda22f585be7f54fa13849d818faf67793c6679372a04&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
