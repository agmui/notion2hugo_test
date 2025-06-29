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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUTC772L%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T025122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCzXj%2FPfv%2BeXtZN5BMsWRS7%2FUU0PeMt6jVsbTipmSMDxAIgYionn4Jx484RboW6rgFb5HZMDEmLD8h4Cs%2FZcePsphQqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKI2nCldce7C1Uhm%2FircA5elxworzp311oPhemsQr%2B61IS8DxZY5x0hVC%2BGCL4EgdJVXIWcelOOCR8t1EubbW2jaKRP%2BhQaepuFdTHhoufZh0EzdmFIIR9eWabW3%2FqptqjOagNWvOzn%2BTNTRgNjym41AuZa7LMKT1JwwFihTozH8ZxAFk5wV3%2Fdm4muFiWEnQoSFJkfdqnMDuSLzJM1kHhd3fD7cQ2h9Rk7BFrFBh85xEafsPIQOq2wS2Svlf3JSr3giTXqTZD0ZYrY%2BSobDITF4ws3uMagCQ7Oqeyrdixs35IbZ5yd2RvUD3IJ1NkLAnTEARv1OyYbq%2FfubPFt640vFejMS4fksUCq1awKIQf3UL6vLnYYfhge9pPG%2B8DryJzDhP%2BKRyJCa%2BhGs%2Fkif2mwD5i7tEhYueTHYlWYZ2GjLZeG6VWcT%2B6vgoweuB%2BjMldTI%2BT1x5EQAXFLtmbCyO91bbXLa6tCab8F6oroJifPT6NjCPDZh%2F%2FlDK9nh4NVz2Dzp8lvxhBdb8E1aIIkFiKvIXJYIS6qx2EY1SPqYlGu44zameRzU3Pt5EPIdb1b4nDMQVcYcxb9Tne1u9aNCZr8U5YehrScTLqI2v6tb3YugmtK5jfoUd%2B00WMuCEkuD6lKoya%2FfxNTSH%2BMGMIuWgsMGOqUBhSsOzw%2Fh9eIcPdxLEvUuants1kNsuYOEj%2FfrAwc4wVKwrx%2BMcya9nS33mm6aukR7m6CimUKS0bkkm%2BnbhA7p422vsgfhyOAZuinMOoIkb6CVvmP0AHE1O6uc9iiFIv7f43V9YcYjZLwf05sqshXkC%2BnX2iO1xphOUDu73bauIM%2BGlKPHdT7qjMvT6QzyJg9Ox9VclBEorbnc%2B0xIu9TlvoFmVFb6&X-Amz-Signature=dd75c385f3086d834ae9c9e4c7c262e863b63f1a5bca2acfc59f70de948d5f82&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUTC772L%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T025122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCzXj%2FPfv%2BeXtZN5BMsWRS7%2FUU0PeMt6jVsbTipmSMDxAIgYionn4Jx484RboW6rgFb5HZMDEmLD8h4Cs%2FZcePsphQqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKI2nCldce7C1Uhm%2FircA5elxworzp311oPhemsQr%2B61IS8DxZY5x0hVC%2BGCL4EgdJVXIWcelOOCR8t1EubbW2jaKRP%2BhQaepuFdTHhoufZh0EzdmFIIR9eWabW3%2FqptqjOagNWvOzn%2BTNTRgNjym41AuZa7LMKT1JwwFihTozH8ZxAFk5wV3%2Fdm4muFiWEnQoSFJkfdqnMDuSLzJM1kHhd3fD7cQ2h9Rk7BFrFBh85xEafsPIQOq2wS2Svlf3JSr3giTXqTZD0ZYrY%2BSobDITF4ws3uMagCQ7Oqeyrdixs35IbZ5yd2RvUD3IJ1NkLAnTEARv1OyYbq%2FfubPFt640vFejMS4fksUCq1awKIQf3UL6vLnYYfhge9pPG%2B8DryJzDhP%2BKRyJCa%2BhGs%2Fkif2mwD5i7tEhYueTHYlWYZ2GjLZeG6VWcT%2B6vgoweuB%2BjMldTI%2BT1x5EQAXFLtmbCyO91bbXLa6tCab8F6oroJifPT6NjCPDZh%2F%2FlDK9nh4NVz2Dzp8lvxhBdb8E1aIIkFiKvIXJYIS6qx2EY1SPqYlGu44zameRzU3Pt5EPIdb1b4nDMQVcYcxb9Tne1u9aNCZr8U5YehrScTLqI2v6tb3YugmtK5jfoUd%2B00WMuCEkuD6lKoya%2FfxNTSH%2BMGMIuWgsMGOqUBhSsOzw%2Fh9eIcPdxLEvUuants1kNsuYOEj%2FfrAwc4wVKwrx%2BMcya9nS33mm6aukR7m6CimUKS0bkkm%2BnbhA7p422vsgfhyOAZuinMOoIkb6CVvmP0AHE1O6uc9iiFIv7f43V9YcYjZLwf05sqshXkC%2BnX2iO1xphOUDu73bauIM%2BGlKPHdT7qjMvT6QzyJg9Ox9VclBEorbnc%2B0xIu9TlvoFmVFb6&X-Amz-Signature=ce762b333ed67d7b603dd57182d0ba08479b4cff28fe2b5e3160dde283825be1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
