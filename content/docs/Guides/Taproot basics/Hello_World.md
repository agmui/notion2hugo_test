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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKDCLVC7%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T161018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIET0zMhRKXS3%2BzXPLwm8%2FeAK%2FgHj5PQYo0S%2B6YgiAbcZAiEA4xZdpAnWFJKYFRhL16YxXAuMzo9y39%2BIupPALRk0o3YqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAIpfU9SbDHvTb8YoCrcA%2FqIWWEgARD%2FgiWJzd0FkYSAE4EfYvJFHkoDju7LebYHmvoIyPd8X3rnnQ%2Bk4%2BBS%2BBEoKJrVk5%2FzkOmJEGCvowUmvhNrvSkewH0QD1Mcs2uUp66kktcmA%2FCHK6w7Sk9tJNRC4VQrH5SlgbCFo4Tl%2BqIfCqQtgvOwhWxaOCSAlLw3z5CA%2BM6MGkjp%2BPSvBhVbOyCWszEuH8lMY%2BUY2z3HeTQ5n%2FW1s3U%2FkNFswW85pfCI8Q9g%2FQIKgm214L5%2FbW%2BcyTpaMCDzSLvNwDr5VlqLM7UKxkstsFMjGUUa%2FL7Nsn3SLaik2gXoCZq%2BC8sJrRK9uo3Sik0n2r4s%2BO51WMtzS94G7KAd%2BRC66meILMDJ6vTbg%2BKZnbUdhFsjKCc%2FyME3ooCCNTjBCyBn6BSahqxgvWuFkP4Vg%2BjjHAtcrPv79oFk2%2BgADCwXa6bQEkZu7%2F0JDg%2B433XUNjBowoPPv7yB7v2gpHQLARjNM4gHm07SJTo6dN09ffaUFFyvzQOEqikKW6DwPtcR1VZ1MKrpWkG1B7byknr7HsRuJo0S3cHBJ%2FhLPnfx834JSkhzWEuOhfcPx92ygkXclKiJmtPrM%2BbUOI9TchxfTFW0tNJ%2BL1FQNNWTBSj6YNtt9YTL2XnpMMbf0MIGOqUBaiRJxpSwZhzJyEFDzpdY1AMjHPpBJ4dlAiU5Tu518mx7NSUyjTnccb%2BZGq60VtmJyMDCUh4jUM1b4cWbMLsE1Ux1dL7Qyd3TLT1ValoSB2QmunLXnJqaBwxS%2Bnsw7lFFJerMKxtbm1x0GJkdTRrmThhOCb8ZxcDXTR%2FL7WsTTLFM%2FOzkU1oSEzCuLNHGjwA4HIwanM2cHYJS7o%2B4Erfo0CBuU2WQ&X-Amz-Signature=3bd6e97f19c2ca4634c40c427a93c66372fe3201755603f6d5ff5be338519ad8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKDCLVC7%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T161018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIET0zMhRKXS3%2BzXPLwm8%2FeAK%2FgHj5PQYo0S%2B6YgiAbcZAiEA4xZdpAnWFJKYFRhL16YxXAuMzo9y39%2BIupPALRk0o3YqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAIpfU9SbDHvTb8YoCrcA%2FqIWWEgARD%2FgiWJzd0FkYSAE4EfYvJFHkoDju7LebYHmvoIyPd8X3rnnQ%2Bk4%2BBS%2BBEoKJrVk5%2FzkOmJEGCvowUmvhNrvSkewH0QD1Mcs2uUp66kktcmA%2FCHK6w7Sk9tJNRC4VQrH5SlgbCFo4Tl%2BqIfCqQtgvOwhWxaOCSAlLw3z5CA%2BM6MGkjp%2BPSvBhVbOyCWszEuH8lMY%2BUY2z3HeTQ5n%2FW1s3U%2FkNFswW85pfCI8Q9g%2FQIKgm214L5%2FbW%2BcyTpaMCDzSLvNwDr5VlqLM7UKxkstsFMjGUUa%2FL7Nsn3SLaik2gXoCZq%2BC8sJrRK9uo3Sik0n2r4s%2BO51WMtzS94G7KAd%2BRC66meILMDJ6vTbg%2BKZnbUdhFsjKCc%2FyME3ooCCNTjBCyBn6BSahqxgvWuFkP4Vg%2BjjHAtcrPv79oFk2%2BgADCwXa6bQEkZu7%2F0JDg%2B433XUNjBowoPPv7yB7v2gpHQLARjNM4gHm07SJTo6dN09ffaUFFyvzQOEqikKW6DwPtcR1VZ1MKrpWkG1B7byknr7HsRuJo0S3cHBJ%2FhLPnfx834JSkhzWEuOhfcPx92ygkXclKiJmtPrM%2BbUOI9TchxfTFW0tNJ%2BL1FQNNWTBSj6YNtt9YTL2XnpMMbf0MIGOqUBaiRJxpSwZhzJyEFDzpdY1AMjHPpBJ4dlAiU5Tu518mx7NSUyjTnccb%2BZGq60VtmJyMDCUh4jUM1b4cWbMLsE1Ux1dL7Qyd3TLT1ValoSB2QmunLXnJqaBwxS%2Bnsw7lFFJerMKxtbm1x0GJkdTRrmThhOCb8ZxcDXTR%2FL7WsTTLFM%2FOzkU1oSEzCuLNHGjwA4HIwanM2cHYJS7o%2B4Erfo0CBuU2WQ&X-Amz-Signature=392b01daf22be85d529e33665a9db1fa8fcaea105f803c050dab22ce1b3c39be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
