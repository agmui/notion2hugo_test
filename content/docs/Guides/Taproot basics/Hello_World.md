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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQCZ5OVM%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T170714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIQDIvBCwXg3Jyl9hLDZF3P0sHHlfc18%2Bmt9%2BtCOVZzG9NQIgBZ9ITdKsN1A%2FTT85rGwWhORzFCtm9VPDQL0q4cCxe6Yq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDNfcwqIr7sGMmvjqlSrcA21bywrMecJIPQe8PxTECs0FbZLyrDA1K3olHko76WSi4dgIlVW7oVhhZu8r1cbAOyt0thuIMu4gVdNFSMl7Fks9IEZqpkyMFhwfCFeQ%2B2GR5AgNTqwu7gGWa8WJGRFDr8Rue7xVraZ6EaSLZ6ZDf15MoVN5tFphJnAxBzoNwskB0s8jQhH2jOT3RM%2Bm2ErQTbsU7PxgyH1ETS%2Ffn2j2RtU%2FUysPzRS3nF16XtXgNlc%2FLUojd06h3BTgjFEcqxSOb2bCsF0opMSkHYnAtQIfeJ1PHaGQVGI2sEgTlryhbHgSiCx3bMnUpPcy83DnPOVRuSDNUaxCmYswt7hvc12jxXCj81yd6nVcfqyaI25FLQqnjNmS5nr1T%2BlOxFH4WHBOMbmYQaMzUFRF4TOxEkOx7NhP7L7UXFMlgXa1qQFsmzO93O7riI9traxicP9U%2FfSP01qH7qRD0yKX7o6Zvmn4q%2F4Z%2BpNcSzbypufHQoq20MDuqSODJ8WjkFqYJRQGlOU9tPt8bh2k2nUl0UAQjCVGK0MG%2Bw9Zu8t1q8kXGYBWjOnzCGQMmb8MgDvslhWbI95YaDJqPvUkUNYTExP%2FWqqehroXf0i9wbi%2Bci1uFog3WyKyzrYJ9%2Fh3VJ%2Ff8df3MNWzgr4GOqUBCvLtlZcHfTeyv%2F30Y3GkWjxBEHRm19yTcmacpZqiEXQLn4pdiYC49fkbyuSPw8EHoMaUGS87SySPrO89gcAt8TdPupb9J%2F%2B7zpBb6xwf8P3lpC8zr%2Frvm9vCtSQ2niLcetpHkAYtpMYOzh1aAcMHfP1hZzH05m5kZNjn%2F4bpQfJjt2FNk9tV6u9wKFCNasA%2BizaNrOHWet3rKWZjXOUK6%2FYBDAek&X-Amz-Signature=5ebb7d69be5545c1d7b8f71b7647725a1d03e65e2e50ae31bff7f5d1e25a32e7&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQCZ5OVM%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T170713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIQDIvBCwXg3Jyl9hLDZF3P0sHHlfc18%2Bmt9%2BtCOVZzG9NQIgBZ9ITdKsN1A%2FTT85rGwWhORzFCtm9VPDQL0q4cCxe6Yq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDNfcwqIr7sGMmvjqlSrcA21bywrMecJIPQe8PxTECs0FbZLyrDA1K3olHko76WSi4dgIlVW7oVhhZu8r1cbAOyt0thuIMu4gVdNFSMl7Fks9IEZqpkyMFhwfCFeQ%2B2GR5AgNTqwu7gGWa8WJGRFDr8Rue7xVraZ6EaSLZ6ZDf15MoVN5tFphJnAxBzoNwskB0s8jQhH2jOT3RM%2Bm2ErQTbsU7PxgyH1ETS%2Ffn2j2RtU%2FUysPzRS3nF16XtXgNlc%2FLUojd06h3BTgjFEcqxSOb2bCsF0opMSkHYnAtQIfeJ1PHaGQVGI2sEgTlryhbHgSiCx3bMnUpPcy83DnPOVRuSDNUaxCmYswt7hvc12jxXCj81yd6nVcfqyaI25FLQqnjNmS5nr1T%2BlOxFH4WHBOMbmYQaMzUFRF4TOxEkOx7NhP7L7UXFMlgXa1qQFsmzO93O7riI9traxicP9U%2FfSP01qH7qRD0yKX7o6Zvmn4q%2F4Z%2BpNcSzbypufHQoq20MDuqSODJ8WjkFqYJRQGlOU9tPt8bh2k2nUl0UAQjCVGK0MG%2Bw9Zu8t1q8kXGYBWjOnzCGQMmb8MgDvslhWbI95YaDJqPvUkUNYTExP%2FWqqehroXf0i9wbi%2Bci1uFog3WyKyzrYJ9%2Fh3VJ%2Ff8df3MNWzgr4GOqUBCvLtlZcHfTeyv%2F30Y3GkWjxBEHRm19yTcmacpZqiEXQLn4pdiYC49fkbyuSPw8EHoMaUGS87SySPrO89gcAt8TdPupb9J%2F%2B7zpBb6xwf8P3lpC8zr%2Frvm9vCtSQ2niLcetpHkAYtpMYOzh1aAcMHfP1hZzH05m5kZNjn%2F4bpQfJjt2FNk9tV6u9wKFCNasA%2BizaNrOHWet3rKWZjXOUK6%2FYBDAek&X-Amz-Signature=a1d6b805535daa03e65fcee0d125afd90b6076c9682bbdb008a1f9800049e90e&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
