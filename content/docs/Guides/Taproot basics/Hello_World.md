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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXL5PFYY%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T090846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCKuuw2G6i%2FLGLXolksj9%2BHoMm0t1l%2BkQ6beytA47dpNgIgCyQn8SX8VcbXlltwAVQBY7HChTgPeRIIfErxXA%2Bq3vIq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDMVwVGBZ2DhVNZ0dMCrcA533aMG9R8eqI1QgJpSJcXUb1IJFIgAs2NtC1tbvB3AKMNXeD7cBePlK6XUP13kIod7dhyPAlv9%2F%2B7t6dEsGus1nhsf3i%2BfM6pjB03tDYt%2ByOgRyuPMerbI%2FUEk6W6OYHoThsnruVdioZ1%2FliBSqGIwwZYnPUv%2BZd3fPZNg9lhYQ9A33qVAvoc2wnDpufBghx%2FWuXyJZAnvnNVmGayf5jFhhTsThckZ1jMT67F%2FIhrQ2S8F18oP7GBWlTRIQb0EOSVnCSzfD2WQ3eb%2F8s2h9QJgVLyStPJmbxAMcE2pKQBzcUaMwneQs8Z%2FyyLVB06lnv1EWU9Nj%2FdmCrPKFmT1E6%2FDwYdjrpfOuYoO9nbNlADzXRtRQkjykTf483wo3MDDtVtngUuhf2IdEe%2F6uBrrZm65waCsl7XASXzZOttSzvx0UR0wJNEudZTNfQaj6synIeJ5RbCrmV5W4QEIMPpnmr22g6VHLp9ZBerVpysT4Z4TLAl1T0n5FMgcJV90FSWLNeyowTOgu5eB2s9oVZTEdQ5mNRAdtCUWIjkzk323C7vsLc%2FmvU1DXgAvSB%2B8ZlYCyK2VQPc2DJzsjFhdkf3D1olASn5JtMXf9r%2FzzQkPWga5qE3klTiG6uLm1%2ByIvMMOSiMAGOqUBhMjGY1vtVjouWuZOyjhyyas2KHHG0DJ%2FrvYSPH%2FjgkBSNJ2X2ukr5T9fIeejse1OT9X8VtbrnGNuwSehgyfMCdE23Qdea3oaV6YCNXMZdWuBlTF%2BkziEB6Wyhh8jbcvOQQBksBxWdxj9hRQyCKZwzSprYU1iIdhedBiZP4mMDG0gofxhgbXSlEKP%2BwiDuJDmuIXHRoZAwmvYgOO9fqqWGm0Fq0XI&X-Amz-Signature=121abc95326487f2cbb738db32a823b256759edcd70376937aac3db5e7a61400&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXL5PFYY%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T090846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCKuuw2G6i%2FLGLXolksj9%2BHoMm0t1l%2BkQ6beytA47dpNgIgCyQn8SX8VcbXlltwAVQBY7HChTgPeRIIfErxXA%2Bq3vIq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDMVwVGBZ2DhVNZ0dMCrcA533aMG9R8eqI1QgJpSJcXUb1IJFIgAs2NtC1tbvB3AKMNXeD7cBePlK6XUP13kIod7dhyPAlv9%2F%2B7t6dEsGus1nhsf3i%2BfM6pjB03tDYt%2ByOgRyuPMerbI%2FUEk6W6OYHoThsnruVdioZ1%2FliBSqGIwwZYnPUv%2BZd3fPZNg9lhYQ9A33qVAvoc2wnDpufBghx%2FWuXyJZAnvnNVmGayf5jFhhTsThckZ1jMT67F%2FIhrQ2S8F18oP7GBWlTRIQb0EOSVnCSzfD2WQ3eb%2F8s2h9QJgVLyStPJmbxAMcE2pKQBzcUaMwneQs8Z%2FyyLVB06lnv1EWU9Nj%2FdmCrPKFmT1E6%2FDwYdjrpfOuYoO9nbNlADzXRtRQkjykTf483wo3MDDtVtngUuhf2IdEe%2F6uBrrZm65waCsl7XASXzZOttSzvx0UR0wJNEudZTNfQaj6synIeJ5RbCrmV5W4QEIMPpnmr22g6VHLp9ZBerVpysT4Z4TLAl1T0n5FMgcJV90FSWLNeyowTOgu5eB2s9oVZTEdQ5mNRAdtCUWIjkzk323C7vsLc%2FmvU1DXgAvSB%2B8ZlYCyK2VQPc2DJzsjFhdkf3D1olASn5JtMXf9r%2FzzQkPWga5qE3klTiG6uLm1%2ByIvMMOSiMAGOqUBhMjGY1vtVjouWuZOyjhyyas2KHHG0DJ%2FrvYSPH%2FjgkBSNJ2X2ukr5T9fIeejse1OT9X8VtbrnGNuwSehgyfMCdE23Qdea3oaV6YCNXMZdWuBlTF%2BkziEB6Wyhh8jbcvOQQBksBxWdxj9hRQyCKZwzSprYU1iIdhedBiZP4mMDG0gofxhgbXSlEKP%2BwiDuJDmuIXHRoZAwmvYgOO9fqqWGm0Fq0XI&X-Amz-Signature=b6ee9b15c690b31efab57e529e6579de1805c311a8d48b175468c30c7020a4ac&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
