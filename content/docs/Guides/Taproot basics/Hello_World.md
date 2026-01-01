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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWFSCFUJ%2F20260101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260101T015616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJIMEYCIQCHCXcIMQHAuWMG%2F0K4A4big1w2Ybt%2BWcAt2ZldAlX%2BMgIhAPZevI%2BqzhXsdXYmgBBwqnXBMHnyQDKx%2FuhTYGSaFQijKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy3H0b7nU5%2BtRlRlbgq3AMTQc2tBKmPnImR1MJrKNF1g8qTAW5Wr00RZ9gfrzs26x98N2woxx4PGC5bekTWpXavlPEyMcu5%2FDgO4bIZ8LxXbo8q387rydymvx2G4cYs1wQpxKsFwhAyaJpVMN1BtDHsHgYKt59WvyRnQxqsDksmQFI70QsUKkdGBgBpNu5kGF9NBNpKtEjY80P6tn0PfBoWJyhfLEdLYyP%2BqzOEpL3ThhK%2BrQ2NH%2FQaChXgDl%2FLhe85T3Dwkwq%2FE19PsU272qFQJ7dTEDxN6UmyKCYqJ6YLCIpbIHi7MSEAkXadhtZBtESCZbq2L6vyo6Rwd2fpzxZd1SwwVjwc0nARH%2FzVGCcZsic7WeqMr4wciYLxjtn4%2BhAn4Dn%2B0zbkCO160nEyoc%2BT%2Fzeq4RRV7CiOLxfrm2mLunnUdO2L25OggBz65BHnmFROHuRPl7SNuJxoXSOy78f7zOlWzmkXD6eOLtzjZ2IC672FSbowAFGTYX28kVDQL8TIB9r1ESUpGsAovYuzsLyjUbUsBrq8t1fi%2Bzq2TXixOeoUPPvBBH8DrmHbW0zrRsGYYlQNjjXMLHs5x8cBtB%2BqQp20voT8lvIVfbtJdtJ%2BRuGhVifwUUH3ZfVroXdoI0y9IFD0mWa2BfOpEzCOodfKBjqkAREYsh25v3Yk%2FWT2uIQREFZGJzlAb0jKRnBRq%2FYO2GWpflC7b9zj9ckCEcmozPd15FSvidaa%2BP%2BARU7Rn3RmNNqeviBwXGEK3y0UOY9B9Am%2FYP0vsBYuAzH8n79Bg6WFgcgfMniKxfwNCbF%2FIyUQHZP4sd%2BOJt%2FHDTpdZ3w55UH%2Ff2qq34At3WJgiY8Q%2Bi8AIXGZpQC5kTqZHuVW9dkQfwbOCsHo&X-Amz-Signature=3ebd37bfb12427ac37360c3ee604fe89019abe1fe7fbdbe583f5155c6094f805&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWFSCFUJ%2F20260101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260101T015616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJIMEYCIQCHCXcIMQHAuWMG%2F0K4A4big1w2Ybt%2BWcAt2ZldAlX%2BMgIhAPZevI%2BqzhXsdXYmgBBwqnXBMHnyQDKx%2FuhTYGSaFQijKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy3H0b7nU5%2BtRlRlbgq3AMTQc2tBKmPnImR1MJrKNF1g8qTAW5Wr00RZ9gfrzs26x98N2woxx4PGC5bekTWpXavlPEyMcu5%2FDgO4bIZ8LxXbo8q387rydymvx2G4cYs1wQpxKsFwhAyaJpVMN1BtDHsHgYKt59WvyRnQxqsDksmQFI70QsUKkdGBgBpNu5kGF9NBNpKtEjY80P6tn0PfBoWJyhfLEdLYyP%2BqzOEpL3ThhK%2BrQ2NH%2FQaChXgDl%2FLhe85T3Dwkwq%2FE19PsU272qFQJ7dTEDxN6UmyKCYqJ6YLCIpbIHi7MSEAkXadhtZBtESCZbq2L6vyo6Rwd2fpzxZd1SwwVjwc0nARH%2FzVGCcZsic7WeqMr4wciYLxjtn4%2BhAn4Dn%2B0zbkCO160nEyoc%2BT%2Fzeq4RRV7CiOLxfrm2mLunnUdO2L25OggBz65BHnmFROHuRPl7SNuJxoXSOy78f7zOlWzmkXD6eOLtzjZ2IC672FSbowAFGTYX28kVDQL8TIB9r1ESUpGsAovYuzsLyjUbUsBrq8t1fi%2Bzq2TXixOeoUPPvBBH8DrmHbW0zrRsGYYlQNjjXMLHs5x8cBtB%2BqQp20voT8lvIVfbtJdtJ%2BRuGhVifwUUH3ZfVroXdoI0y9IFD0mWa2BfOpEzCOodfKBjqkAREYsh25v3Yk%2FWT2uIQREFZGJzlAb0jKRnBRq%2FYO2GWpflC7b9zj9ckCEcmozPd15FSvidaa%2BP%2BARU7Rn3RmNNqeviBwXGEK3y0UOY9B9Am%2FYP0vsBYuAzH8n79Bg6WFgcgfMniKxfwNCbF%2FIyUQHZP4sd%2BOJt%2FHDTpdZ3w55UH%2Ff2qq34At3WJgiY8Q%2Bi8AIXGZpQC5kTqZHuVW9dkQfwbOCsHo&X-Amz-Signature=4ee946e8872238a8bf3d79bd472f89576827a6032b0d5e86899322455a4c78cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
