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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FTL7NJW%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T161000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIQDQsjToPRoWxetFIDkF%2F8jrObH29lIox6O4iUM2ZJcoEwIgCrHDGaygfB1sozR9sE2dazGL77eYrZ2UYh8u1rPSY4Eq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDBEM2NgRqJGKWDIpqyrcAxoJUfgSRpAbDOB0exR2CiUwq1gSwQSbEQwC3wqdPE6VkrgVjPHI%2BSKOC1q7aKrMiOaPyJvHOLhmpzVdmSzj91hEtl06hLvUrHBem7BIawvtp4XWJ0Qae0jVH3usDN3lrada%2Bg30tEbbnLlmuVDck5jPXdW3rLGUeWxSYgE7feaTBA62uY67uA22OEAps2sYGkb5H8A5IMI%2BBtISmdJWDPVSaQfNrlvkUGscu3CNseDquHC2XDeyDTY37KOvrokLKllOfwV9XvH8VX4i4km5cGxKeXW32yonp%2BAE2DXDWRdEdkpIRHoMlO1rXWM5sLvKCxZpjRaAPXSbtfi43W5JzojTCcctwYUflkP68TPY8rFHYogWTu%2BT22Em7%2F0Fj25%2Bjyz9xRB5cE0hP6NQq4BOA%2BAHdhFZf3%2FxQ8oUCjQtVbkuD6UCMOYQbyxZoVwQ5oFldXkKmdC26%2BSs48lhx5kdjODhcCABQh7itU4OSXEPTb%2F1bNqrCARx7ejKTwQBBmBZLHWvu%2B1h1tM%2BnWpGdDe1QaVHIqIp1ql800K%2Bq1KDU0ZkOmSlAJiB1SBqbhE%2F3hdImxTeohqtmJ85cW1JNzXqZ8lrufMNT7Mi9FMtabQqADnNmoulNCcKLTqBMtivMM6U5r4GOqUBLxf3fRbmPFFRAR2QhyPhmI3M1cgQBIFM2T27FlvWk6%2BIS1Tu%2FTLVHIsgrG%2BL8vgVpajOAIrcYZ%2Ffj1AZHDQgBA6hnSJPpyTRVnBPtg2h28vfVaYdSiNvqfYdbCvpSpW8VvzrvXqHX0tfVOo%2FBbv3%2BZfv1tu463IU13Brrm%2FBg6oH6ZzGcaoqreFpxMmHTcfEAdtmMjyMAUEaltdJkpQnEDml0SLS&X-Amz-Signature=be74d4ae9e987c63f36ad5b2b3b0b6e672e42eca7faa3161356d7d942a47cff2&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FTL7NJW%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T161000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIQDQsjToPRoWxetFIDkF%2F8jrObH29lIox6O4iUM2ZJcoEwIgCrHDGaygfB1sozR9sE2dazGL77eYrZ2UYh8u1rPSY4Eq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDBEM2NgRqJGKWDIpqyrcAxoJUfgSRpAbDOB0exR2CiUwq1gSwQSbEQwC3wqdPE6VkrgVjPHI%2BSKOC1q7aKrMiOaPyJvHOLhmpzVdmSzj91hEtl06hLvUrHBem7BIawvtp4XWJ0Qae0jVH3usDN3lrada%2Bg30tEbbnLlmuVDck5jPXdW3rLGUeWxSYgE7feaTBA62uY67uA22OEAps2sYGkb5H8A5IMI%2BBtISmdJWDPVSaQfNrlvkUGscu3CNseDquHC2XDeyDTY37KOvrokLKllOfwV9XvH8VX4i4km5cGxKeXW32yonp%2BAE2DXDWRdEdkpIRHoMlO1rXWM5sLvKCxZpjRaAPXSbtfi43W5JzojTCcctwYUflkP68TPY8rFHYogWTu%2BT22Em7%2F0Fj25%2Bjyz9xRB5cE0hP6NQq4BOA%2BAHdhFZf3%2FxQ8oUCjQtVbkuD6UCMOYQbyxZoVwQ5oFldXkKmdC26%2BSs48lhx5kdjODhcCABQh7itU4OSXEPTb%2F1bNqrCARx7ejKTwQBBmBZLHWvu%2B1h1tM%2BnWpGdDe1QaVHIqIp1ql800K%2Bq1KDU0ZkOmSlAJiB1SBqbhE%2F3hdImxTeohqtmJ85cW1JNzXqZ8lrufMNT7Mi9FMtabQqADnNmoulNCcKLTqBMtivMM6U5r4GOqUBLxf3fRbmPFFRAR2QhyPhmI3M1cgQBIFM2T27FlvWk6%2BIS1Tu%2FTLVHIsgrG%2BL8vgVpajOAIrcYZ%2Ffj1AZHDQgBA6hnSJPpyTRVnBPtg2h28vfVaYdSiNvqfYdbCvpSpW8VvzrvXqHX0tfVOo%2FBbv3%2BZfv1tu463IU13Brrm%2FBg6oH6ZzGcaoqreFpxMmHTcfEAdtmMjyMAUEaltdJkpQnEDml0SLS&X-Amz-Signature=49d765f7102b1e3b77e2352279affadfaa4809b36cc96ebc11a02c2f600ad5a5&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
