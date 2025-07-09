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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5NIRTFR%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T051447Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIENJj02joGe%2BcNh46Umldqoq2l7CKmBsQCWTLqODLe0BAiEA1V7c7M2LdcSpDbyg44YnPqf4ACQqDRb4drOJtJKiREgqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDQ6QcIknD4CbW1IhCrcA0FtnyzEEeqRjhfKYmxq4YXeWhmU%2Becj%2BOQHWuXEjUdARPCC3NPA6Cu2h%2BLhz26BkC5E3Ws0mmY9m93780FUANwa28Nj60xQNORpbOmrg%2FFi%2BHHNt6qaW9Hg2Go84NjA2LUXPuQTYjbdGOtJa5xNlsrJriLPbnfiEfYLZjsvZtOBpUGrdu4qwzdtje3pg26EDlScMksDcoGrHEJ753K3wwCInoxduPcQxLZnhu52Ef8oIFR2qokMDs9a0V18xiPPPDsQRGmLvBY4pAmcuICK9YLu049VFapmEpgQCTRqyScwodjSMafjnv1qY0LZ64khRf0QvK0hHI2fjsnFaDCLV9%2Fmfp9cICp6cb54Iwwq7srfL3uB5V%2FsWN1bb6RHuqpp1bq10M%2FU0MJTL8hK%2FUY8saDcW5RVD1gMy7SyMihuucb539uo7gXaQWvaoARH7%2FCOretK4MMAsX4SN6iSQjlep5B2PtLopGVSTl2LT%2BdLaEqeZ3KOkWl09B5JTuNHd9%2F6M2Iuk9q3UGAke6JgeeZx7uWv1Q83rwThBLy9ACxVXQjbFaYxGfVeUyMYoMxJ4OkZunSFxBTlTXzUu1b8I89utTmzFxzU7qCIBoSFLCBnY418RFzCnoF3iAVzy8ErMJzLt8MGOqUBGnOgLxQl%2Fnsh1ZwMgXjbBbUc5AnfAh%2F7ZMAcEfmzrrPUbOJaSwLvXThk%2FOf%2B%2B0Klh%2Bi1bVi8vA4WbQMb0Fl5YMHJeaMMX1wtd7RduwpRV13brQOKqkSb%2Bv9ZFDZTolzvzNJitRkJ7fW%2FrMeNLckXNNu1%2FuHFi4iddh1Oo21e3i%2Bzrmn7IP07PSDocli78H%2BYlb25LT%2F83eFxU36e2S9oVrIKKNHX&X-Amz-Signature=09526614af482aa882f3e9124d23d5987a17ab9e085503d0273cd478676ff5e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5NIRTFR%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T051447Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIENJj02joGe%2BcNh46Umldqoq2l7CKmBsQCWTLqODLe0BAiEA1V7c7M2LdcSpDbyg44YnPqf4ACQqDRb4drOJtJKiREgqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDQ6QcIknD4CbW1IhCrcA0FtnyzEEeqRjhfKYmxq4YXeWhmU%2Becj%2BOQHWuXEjUdARPCC3NPA6Cu2h%2BLhz26BkC5E3Ws0mmY9m93780FUANwa28Nj60xQNORpbOmrg%2FFi%2BHHNt6qaW9Hg2Go84NjA2LUXPuQTYjbdGOtJa5xNlsrJriLPbnfiEfYLZjsvZtOBpUGrdu4qwzdtje3pg26EDlScMksDcoGrHEJ753K3wwCInoxduPcQxLZnhu52Ef8oIFR2qokMDs9a0V18xiPPPDsQRGmLvBY4pAmcuICK9YLu049VFapmEpgQCTRqyScwodjSMafjnv1qY0LZ64khRf0QvK0hHI2fjsnFaDCLV9%2Fmfp9cICp6cb54Iwwq7srfL3uB5V%2FsWN1bb6RHuqpp1bq10M%2FU0MJTL8hK%2FUY8saDcW5RVD1gMy7SyMihuucb539uo7gXaQWvaoARH7%2FCOretK4MMAsX4SN6iSQjlep5B2PtLopGVSTl2LT%2BdLaEqeZ3KOkWl09B5JTuNHd9%2F6M2Iuk9q3UGAke6JgeeZx7uWv1Q83rwThBLy9ACxVXQjbFaYxGfVeUyMYoMxJ4OkZunSFxBTlTXzUu1b8I89utTmzFxzU7qCIBoSFLCBnY418RFzCnoF3iAVzy8ErMJzLt8MGOqUBGnOgLxQl%2Fnsh1ZwMgXjbBbUc5AnfAh%2F7ZMAcEfmzrrPUbOJaSwLvXThk%2FOf%2B%2B0Klh%2Bi1bVi8vA4WbQMb0Fl5YMHJeaMMX1wtd7RduwpRV13brQOKqkSb%2Bv9ZFDZTolzvzNJitRkJ7fW%2FrMeNLckXNNu1%2FuHFi4iddh1Oo21e3i%2Bzrmn7IP07PSDocli78H%2BYlb25LT%2F83eFxU36e2S9oVrIKKNHX&X-Amz-Signature=0c781de657005e8413131bfed931ec787c658d9a4ba3e00379b15c9047449a72&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
