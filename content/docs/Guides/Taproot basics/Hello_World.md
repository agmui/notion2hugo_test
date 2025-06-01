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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGWHI3QW%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T210705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIQCxSvbFA1LnDH4uRVOtjnxZN0AKaLoPjPKK%2FzzXVACR%2FAIgDMATHr1EsH214forpNsaOpOeVhG0N%2B6ZyM5M91o9OT8qiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHK%2BW3JM5HwBoRa1GCrcA4HlrSTnyN24hoQXkak6tCu9y%2F1odKqQPIpL%2F78SBNtGohwEOOa%2BLhl1KG6ZqaEcmmoQM4MltUWBddzTsIrWrlGoZ72HfnrmYOONRHYAq7Ywg5xq7euoMHpv5Gu8OTyeCZVmY85fxBvArmjwstajSg0zL%2B5SJ8AiKXjABO4CQE%2BsS1tx%2BhuphiwJYYdlMTwWN%2BeazvneO1gmUkoGop1aKPCFE0GcNJOHvFnwW4aVE0tnb8OrxwVucyktUZ2wiqi6OpfLrVmiwKEPZMGicgLtowb3BQUHUcAKf%2BK6zX8yOQcTMBGfAvYXuCWbtdUExe4ANxp2Kf1FgqQxef2yV%2Fi7ykMNAirvS7JLfrlExzLAmB6FfbCss71Unydivd4O2a4CnXhGAZx2H4Dy0TcFQ4CIs1KYIvi5pj%2F8rS6s6KR56zsG5HU5vUWb5Etc%2B0iUrYVWHxBmTo1q9veSB%2F8hHct4erowwuqcJJlxhE7BZw%2FaVV32tNKN3LwQE4tUAECKNmeAxkfOvw%2FTnFr4SONuJf7COIGm362rPuae6PImiICCTuEcCOrXosJ%2F0zlzuWmp%2FBL%2BoURGSqAVGM5EQJVg%2B6yER09k%2FrHUk%2BgQppsskvaNgW6z4%2FSeWwx8cE%2FwqBPNMJ6B88EGOqUBbnVGuNAVtQ%2BzurcXRbjlrNddWAKaDxJmfZEM1ALkYHSa5L7HCmCovYNE9IF3qBFsF1KJZMNxznPNt42veLb1W0WFTsjvahtBPQSUx1U83yC7zACTTPoxHbbBRFYtMfjjeJZOTe2aMVCyzKkweV2Jg4A6w71wMVO8dnpNEe3MGvnJAgA9HcEXcPykiZiM4IQEHu8xxOHv1h3Zin1%2FVVhDYXEYzisg&X-Amz-Signature=13f989efce99de87839d5824b541d7d7b1dc442e72206f587eebf162151898da&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGWHI3QW%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T210705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIQCxSvbFA1LnDH4uRVOtjnxZN0AKaLoPjPKK%2FzzXVACR%2FAIgDMATHr1EsH214forpNsaOpOeVhG0N%2B6ZyM5M91o9OT8qiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHK%2BW3JM5HwBoRa1GCrcA4HlrSTnyN24hoQXkak6tCu9y%2F1odKqQPIpL%2F78SBNtGohwEOOa%2BLhl1KG6ZqaEcmmoQM4MltUWBddzTsIrWrlGoZ72HfnrmYOONRHYAq7Ywg5xq7euoMHpv5Gu8OTyeCZVmY85fxBvArmjwstajSg0zL%2B5SJ8AiKXjABO4CQE%2BsS1tx%2BhuphiwJYYdlMTwWN%2BeazvneO1gmUkoGop1aKPCFE0GcNJOHvFnwW4aVE0tnb8OrxwVucyktUZ2wiqi6OpfLrVmiwKEPZMGicgLtowb3BQUHUcAKf%2BK6zX8yOQcTMBGfAvYXuCWbtdUExe4ANxp2Kf1FgqQxef2yV%2Fi7ykMNAirvS7JLfrlExzLAmB6FfbCss71Unydivd4O2a4CnXhGAZx2H4Dy0TcFQ4CIs1KYIvi5pj%2F8rS6s6KR56zsG5HU5vUWb5Etc%2B0iUrYVWHxBmTo1q9veSB%2F8hHct4erowwuqcJJlxhE7BZw%2FaVV32tNKN3LwQE4tUAECKNmeAxkfOvw%2FTnFr4SONuJf7COIGm362rPuae6PImiICCTuEcCOrXosJ%2F0zlzuWmp%2FBL%2BoURGSqAVGM5EQJVg%2B6yER09k%2FrHUk%2BgQppsskvaNgW6z4%2FSeWwx8cE%2FwqBPNMJ6B88EGOqUBbnVGuNAVtQ%2BzurcXRbjlrNddWAKaDxJmfZEM1ALkYHSa5L7HCmCovYNE9IF3qBFsF1KJZMNxznPNt42veLb1W0WFTsjvahtBPQSUx1U83yC7zACTTPoxHbbBRFYtMfjjeJZOTe2aMVCyzKkweV2Jg4A6w71wMVO8dnpNEe3MGvnJAgA9HcEXcPykiZiM4IQEHu8xxOHv1h3Zin1%2FVVhDYXEYzisg&X-Amz-Signature=364d4c165f7fce22c5b3bd5fd03f1e1df590e482ea66f4ab6705b1709540372c&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
