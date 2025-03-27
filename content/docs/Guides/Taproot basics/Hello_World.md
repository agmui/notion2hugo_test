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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ON3NIBB%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T190119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCFfZjAZtfrFJ%2F9ALYq2pW7IVV%2Fnub%2FQXmaPLcAwtglegIgFLNHGpubDA4xGFWY32LGktwfu2hoBEJFoFsxGITdh4Aq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDBTkE5BK2G4hzwR51SrcA%2FQiLI1HRgl7KPXwtI6eBPt0swmmKu61XCyNpd3K9fLNAdlceNSY8xn7tWlGgP1VJYULZR4T1Db3hceJPtQKfXb6u4dAuv2Ma1Yt4PFA7izjJgHc%2FH8cAfQWz%2BLNc3XmQT%2BeyKp4pvD%2BuV0BWp0tq%2BffCr%2FWAFl0KMqi7u3GTa0OTH%2Fjqu6kW7UwWV04zPma6UaBXNSZIIG6SMVCgTQ5qSNzvLrz9pouYpgXBa1Wzhl76lfIkSfD7Qm0j57ww4OiDCvU0R08FjuA2hNWnHNuewa3dkCODMQhF4aP9xSScjugSAHHxGM%2Bsw9tJe4UytKdBUQYFIsgLxs6GUlpujxvxRvMsPxKEkgnQr7ZJOQVggXttrMXMnQVK%2FTuHGDB9sFajXh2nTC8EwVZEk9dcdHCo%2FtpxHKD96HHLp0zapAA61N6b48u6JTwEgLQDZmtmPSzEjSnIFxpKFGyWlb3%2FfrUwVNaArSKZNSu1xQKJLVZoRbl7BxBLhRPymDelu10VpREOnsVHV8JdWAZlVmZ9MRiw%2BNnd0mpRy2dWgbsyQobA7gHN2ea%2F38NUY6%2BC36OcOuzZd1pkMRDhhwaiTht58kXfAzCgEnaGwMfAHmQPOu1Ls5xEsdT9%2BS%2F7ulOqUK6MMS%2Flr8GOqUB7xfasGHY%2FD8daw5EOeGP8ZAUYh4SIrH7iLKtg37ciEr2vFDkFFR7ETY%2BDDJmEBwx0xIbbRGphbjWCKJZ0%2BX%2F%2BE7XPGEj1klCFAqR5d%2BP2GyTYCq17eGjix2hmEQ1GuP8oacCs%2FcSWyThtNnMBR2kbyYWX3Fu3KkSsWWtbMKi03IxxVjeaCjCB1cRQdzMI8ZI0oAWOG4F0njcKker4btuz8ymJFIk&X-Amz-Signature=a6b035b471d4e8f026c951a7b384d3ae5b725f179ed9e5ab2f83075510bddfb0&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ON3NIBB%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T190119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCFfZjAZtfrFJ%2F9ALYq2pW7IVV%2Fnub%2FQXmaPLcAwtglegIgFLNHGpubDA4xGFWY32LGktwfu2hoBEJFoFsxGITdh4Aq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDBTkE5BK2G4hzwR51SrcA%2FQiLI1HRgl7KPXwtI6eBPt0swmmKu61XCyNpd3K9fLNAdlceNSY8xn7tWlGgP1VJYULZR4T1Db3hceJPtQKfXb6u4dAuv2Ma1Yt4PFA7izjJgHc%2FH8cAfQWz%2BLNc3XmQT%2BeyKp4pvD%2BuV0BWp0tq%2BffCr%2FWAFl0KMqi7u3GTa0OTH%2Fjqu6kW7UwWV04zPma6UaBXNSZIIG6SMVCgTQ5qSNzvLrz9pouYpgXBa1Wzhl76lfIkSfD7Qm0j57ww4OiDCvU0R08FjuA2hNWnHNuewa3dkCODMQhF4aP9xSScjugSAHHxGM%2Bsw9tJe4UytKdBUQYFIsgLxs6GUlpujxvxRvMsPxKEkgnQr7ZJOQVggXttrMXMnQVK%2FTuHGDB9sFajXh2nTC8EwVZEk9dcdHCo%2FtpxHKD96HHLp0zapAA61N6b48u6JTwEgLQDZmtmPSzEjSnIFxpKFGyWlb3%2FfrUwVNaArSKZNSu1xQKJLVZoRbl7BxBLhRPymDelu10VpREOnsVHV8JdWAZlVmZ9MRiw%2BNnd0mpRy2dWgbsyQobA7gHN2ea%2F38NUY6%2BC36OcOuzZd1pkMRDhhwaiTht58kXfAzCgEnaGwMfAHmQPOu1Ls5xEsdT9%2BS%2F7ulOqUK6MMS%2Flr8GOqUB7xfasGHY%2FD8daw5EOeGP8ZAUYh4SIrH7iLKtg37ciEr2vFDkFFR7ETY%2BDDJmEBwx0xIbbRGphbjWCKJZ0%2BX%2F%2BE7XPGEj1klCFAqR5d%2BP2GyTYCq17eGjix2hmEQ1GuP8oacCs%2FcSWyThtNnMBR2kbyYWX3Fu3KkSsWWtbMKi03IxxVjeaCjCB1cRQdzMI8ZI0oAWOG4F0njcKker4btuz8ymJFIk&X-Amz-Signature=98db5f69434375c9957522832516a335db4a686aa1d0cb5e6862dff0d43c645f&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
