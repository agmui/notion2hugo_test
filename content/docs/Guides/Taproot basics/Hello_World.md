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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNPYO6RA%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T003632Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2B7qpQ0ncKFwe3tMLwZKdE%2BdEuUG1MYW3SuHkM2%2BJYRgIgBeeE2YfgdU8XXjm1aVuZJtuirrCsCyFcYpOY3yk8WOcqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFVLuMNQzidJs1TX3yrcA5B2pA%2B3MGNbYXjDYcbex9k7xNP7chFPH84pdcvGq1dvKDBkKPDeYcfZa2W4ta9DP2MQ6fyWr%2BevkSMtLmwQ9Uwkp5FmHIFDtTfs%2FTj32Vf0NJXaYpO9%2F%2Bl02oqR%2FBW8iNAL7DRuDN1%2BTlSeERWqhxsQ6MSTCiWvmN1SRjiBgjFT8PBRGVhnUtQ3ARjwFnDqlfdHwAJnJ3hvwnNrHno0ibBzPOi0e9gE3f%2F3AAgWHjYww6YSvnDqJ5aFCPbsYzGOpHiWvRTqxCf1vxeVKjuMsBV23aV3DQ2Z019EkxiZ4J%2FosZl0GBF8%2FMxeliXsVRe8ZfYkuYZnLcz107j0Qy69Ghtr2l36vHPBWdgI6I9I9lg3%2BwuyCfIrR6KPgSgmy8VzJni%2FL3pZ0U2NuikAFlTdrPfBDzIZX59raPDicQjOMeYeNmgUBVt%2BfHnDiUt%2BHbqiA6TUDtE9XmKtcWB7W%2BcigkMvHXLTL1zwQbc5%2BUgUqU2bNQNdTAuPinYmiN7%2B3uXAxMfl%2FDUlMDSPFJLd%2BlsTpm1QBR8PuvavgC9BB5TZIRx5K9OcUdDNPj3Rwh2%2BoRSf7JaSxXL5ykSpCBa2wtEgCsLcRu9NVc30W6lvGfVLTZaDgWWCjcMun6DQbxA8ML6E370GOqUBtc46w5r96eE6qHyKZRou8tBiuz9zWDFynQIF0DCCX3ZSceACM6M8UDUOID9UQVBaA8ygIGC50LUv1xiMeCfbn%2B476h07KlFtnsJ2l33yX0Te0MwhGKEK8QQ2yEHrAPj%2BVKK3mK5sUYoiOUyFv1xE4CN7Vk%2FK2Rn7%2BGK7diePJPdPppnvNy9VbpeFMkHX9BeufsUw0SSbHkJXeffo5d8Y%2FGSLmaJR&X-Amz-Signature=5aeae22503ebd77a9d2e907d52611351580b13532943d97c45420250b9187b1e&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNPYO6RA%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T003632Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2B7qpQ0ncKFwe3tMLwZKdE%2BdEuUG1MYW3SuHkM2%2BJYRgIgBeeE2YfgdU8XXjm1aVuZJtuirrCsCyFcYpOY3yk8WOcqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFVLuMNQzidJs1TX3yrcA5B2pA%2B3MGNbYXjDYcbex9k7xNP7chFPH84pdcvGq1dvKDBkKPDeYcfZa2W4ta9DP2MQ6fyWr%2BevkSMtLmwQ9Uwkp5FmHIFDtTfs%2FTj32Vf0NJXaYpO9%2F%2Bl02oqR%2FBW8iNAL7DRuDN1%2BTlSeERWqhxsQ6MSTCiWvmN1SRjiBgjFT8PBRGVhnUtQ3ARjwFnDqlfdHwAJnJ3hvwnNrHno0ibBzPOi0e9gE3f%2F3AAgWHjYww6YSvnDqJ5aFCPbsYzGOpHiWvRTqxCf1vxeVKjuMsBV23aV3DQ2Z019EkxiZ4J%2FosZl0GBF8%2FMxeliXsVRe8ZfYkuYZnLcz107j0Qy69Ghtr2l36vHPBWdgI6I9I9lg3%2BwuyCfIrR6KPgSgmy8VzJni%2FL3pZ0U2NuikAFlTdrPfBDzIZX59raPDicQjOMeYeNmgUBVt%2BfHnDiUt%2BHbqiA6TUDtE9XmKtcWB7W%2BcigkMvHXLTL1zwQbc5%2BUgUqU2bNQNdTAuPinYmiN7%2B3uXAxMfl%2FDUlMDSPFJLd%2BlsTpm1QBR8PuvavgC9BB5TZIRx5K9OcUdDNPj3Rwh2%2BoRSf7JaSxXL5ykSpCBa2wtEgCsLcRu9NVc30W6lvGfVLTZaDgWWCjcMun6DQbxA8ML6E370GOqUBtc46w5r96eE6qHyKZRou8tBiuz9zWDFynQIF0DCCX3ZSceACM6M8UDUOID9UQVBaA8ygIGC50LUv1xiMeCfbn%2B476h07KlFtnsJ2l33yX0Te0MwhGKEK8QQ2yEHrAPj%2BVKK3mK5sUYoiOUyFv1xE4CN7Vk%2FK2Rn7%2BGK7diePJPdPppnvNy9VbpeFMkHX9BeufsUw0SSbHkJXeffo5d8Y%2FGSLmaJR&X-Amz-Signature=1a84e7ba33e7a0d5b78491da098e4b3c5fce3aac94b48e98ae237001901785d3&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
