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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ETG65Z5%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T181236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCFrKZbHfdhy1c53ny3u0pkj0%2BPWMuCVjkse0rIzbehJAIgJSL6kd7%2Fej5ql5mdKlAImDOc4WkA4I3GXCmZde1p2m8qiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJCyJ8gYhQM%2BYvp%2FsCrcA36FAIkn3Gum6BEUJ7NOcs2rkQh8CTZ%2FmDFzrdAnbKxosxTTUJ%2BLM0efW3V20IFbmjkacp6iG7Al7e%2FHdMuwhA1NMNmORWY1qSO1qnsFCOWPzeqAPQr94GppasCB22KseC9rVgEVmARDHFkeZTemoVmW4SzhGi%2BjSjwIqt23b%2FkFvifGEI3jUhcVv9k2uU3srI%2FhonBTWMakolSkeg%2BhZQcAaxbV6JfeY1NrZ8zTGySJ5GPSaKGgxQ2ZuMSHUJ2zbunZASJio9ztKmL6RHOG9pHjCXzPBFMW615Gx7Pno%2F6HFnv6AqB8V5cCau0dSWbXYi%2F7qqnrg7JBrezPay6kxhbE%2FR9P7cwisJPkNHP9m%2F2PcY1Knfj%2FfdMDx%2Fby3vkxVszf7eA57OFMXX0T%2BpEojStQgYsXfVZ0zUuok8ElJkxvRU2gPtp845r2sF3IWB5Trtfmw1cF0mNEN1aVmu74bTjwYDALdmjPHE5wKGreQVBv5lF3ViMKBoxBGEF7TSEyk8fTg6yxmTkFClZzLAmakHupw%2FfvI1NDqWKoteCKmt1kM7cYsLQEqsXz0EhVERAS3YbdWwRJb3JaUmgoRNl4bEReRRRd4sAfthWSpLIocec5DF5x2jNHhewwPlXLMIP5v8MGOqUBjhuVDpBjit0wqSFscV3lAeeTQxT%2FvEmejkA4FP%2B891AmhbtEFXnjnKSKEzCJatWir1gWkAF8dXOL%2BbBtwAF%2FN5VwTi%2BwuXZLNoPot4BWIeY35iyJpzgSeFMQN%2B08%2BB%2Bd27rnt3F0vSO9I55uoSpbFPTv6vL4CINWIHSLSjUv%2BRj2H1Fm2VvvHryrMbdVtybc62rXd%2BQ9KCkqeqM7mnvyiumEkSha&X-Amz-Signature=f7ca61ba4fd9f58c0ee3f690e0150ee29ca6f466e12c83b65535cf66daf641f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ETG65Z5%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T181236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCFrKZbHfdhy1c53ny3u0pkj0%2BPWMuCVjkse0rIzbehJAIgJSL6kd7%2Fej5ql5mdKlAImDOc4WkA4I3GXCmZde1p2m8qiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJCyJ8gYhQM%2BYvp%2FsCrcA36FAIkn3Gum6BEUJ7NOcs2rkQh8CTZ%2FmDFzrdAnbKxosxTTUJ%2BLM0efW3V20IFbmjkacp6iG7Al7e%2FHdMuwhA1NMNmORWY1qSO1qnsFCOWPzeqAPQr94GppasCB22KseC9rVgEVmARDHFkeZTemoVmW4SzhGi%2BjSjwIqt23b%2FkFvifGEI3jUhcVv9k2uU3srI%2FhonBTWMakolSkeg%2BhZQcAaxbV6JfeY1NrZ8zTGySJ5GPSaKGgxQ2ZuMSHUJ2zbunZASJio9ztKmL6RHOG9pHjCXzPBFMW615Gx7Pno%2F6HFnv6AqB8V5cCau0dSWbXYi%2F7qqnrg7JBrezPay6kxhbE%2FR9P7cwisJPkNHP9m%2F2PcY1Knfj%2FfdMDx%2Fby3vkxVszf7eA57OFMXX0T%2BpEojStQgYsXfVZ0zUuok8ElJkxvRU2gPtp845r2sF3IWB5Trtfmw1cF0mNEN1aVmu74bTjwYDALdmjPHE5wKGreQVBv5lF3ViMKBoxBGEF7TSEyk8fTg6yxmTkFClZzLAmakHupw%2FfvI1NDqWKoteCKmt1kM7cYsLQEqsXz0EhVERAS3YbdWwRJb3JaUmgoRNl4bEReRRRd4sAfthWSpLIocec5DF5x2jNHhewwPlXLMIP5v8MGOqUBjhuVDpBjit0wqSFscV3lAeeTQxT%2FvEmejkA4FP%2B891AmhbtEFXnjnKSKEzCJatWir1gWkAF8dXOL%2BbBtwAF%2FN5VwTi%2BwuXZLNoPot4BWIeY35iyJpzgSeFMQN%2B08%2BB%2Bd27rnt3F0vSO9I55uoSpbFPTv6vL4CINWIHSLSjUv%2BRj2H1Fm2VvvHryrMbdVtybc62rXd%2BQ9KCkqeqM7mnvyiumEkSha&X-Amz-Signature=ac842ffecab7608881391fcc4a821a032d5d229533db1620103369f819177bac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
