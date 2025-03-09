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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLUDMNGD%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T170100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJGMEQCIDVBVYTOgkiEEvlpZ7hdjjtD%2Bk7r2MtLW%2Bzx1GCEGP%2BUAiAXePCtYuH3W7i1UyqW0U5oZbYfb9AUyvjgRVMI%2FF%2BGrSr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMvzrI3lLsKRtPnVbQKtwD%2BjeSHgZFJnJcDlUDQ%2BEg52w1V%2BiTo8WuvbSq89UKMeRpEQsnFm3dgBPHnqgx8bMzkU8vsRLPfL2iTQ2ZTIFXAyceG3U3ZVVwH9vKzy6122oh7QoCqXJIVtbULbQJm3aF4wmZtaoBl3behrT0%2FW317a8mAHaMyDAOfpSxxGE7KcKQP72j9k4LU%2BLx2BPcfvhSus8JC7uFhOd7xtCYe2dP58Cex4SmZHqDU1Vzc3M3%2BtWd5liIB%2B6rm4aREEf6M%2Bvd3EPW15F4r8yuA7BCVVPRz61vPNxMtr5YfZRewQOmbSePwoxTlYQsKm6XtVYpMY3kQi%2BTsocvEKGPHUy1QN3fjyfvR1JkDGNo23u%2B56pgFFbl6B5ZOhZ4rFWu%2B0h1xM0kAUH2VlbhiDCjflSDkPNfxq0MNvf2GOpZUappBjYDqTkumlGdo2s%2FKw8drgDLlFapERjI9dG8E9eoGjPjiXypiPVAtX3BxOP9Ac6WIkIFG4m68Jx4ukjJbyL1dNBSM%2B%2FCCaEvz2AbsprJxKoo98WaMfVDBcGTV4YM8Oj0Y%2FAHzS6DzRHeEx44OEKITvKJr149%2BjQeyjnY3yPnQN1mCy%2F0DJrgbUzs1gAFVb1Fqd0uJo7vbhPYCpbLiuFTBrYwt4y2vgY6pgFv%2Bg%2FzxeR3Oy1ZSexOnMRHJWASRuhRwXYUs9jLevkOP%2F83%2BcGNA9V%2FQ%2Fuw9R04u6al0%2FMscBiMWWl5IbvqO3elUCnR%2FxwI1Tn00o3ltfBapFvruc3Kis7ip59T9PPk3yt0NCi9wwVMiiQcPQ8DVD%2F3SUb45kd7dNVCK7LBr383k6LhXWzJ%2FobIuNbSM1lGoGiicWFlrPsaqFC7iHWtsszKcit8P%2Bx3&X-Amz-Signature=2f8c755173c942b71d1c5e0e23470c87d23859a3d564e8ee60583955ac05b18a&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLUDMNGD%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T170100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJGMEQCIDVBVYTOgkiEEvlpZ7hdjjtD%2Bk7r2MtLW%2Bzx1GCEGP%2BUAiAXePCtYuH3W7i1UyqW0U5oZbYfb9AUyvjgRVMI%2FF%2BGrSr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMvzrI3lLsKRtPnVbQKtwD%2BjeSHgZFJnJcDlUDQ%2BEg52w1V%2BiTo8WuvbSq89UKMeRpEQsnFm3dgBPHnqgx8bMzkU8vsRLPfL2iTQ2ZTIFXAyceG3U3ZVVwH9vKzy6122oh7QoCqXJIVtbULbQJm3aF4wmZtaoBl3behrT0%2FW317a8mAHaMyDAOfpSxxGE7KcKQP72j9k4LU%2BLx2BPcfvhSus8JC7uFhOd7xtCYe2dP58Cex4SmZHqDU1Vzc3M3%2BtWd5liIB%2B6rm4aREEf6M%2Bvd3EPW15F4r8yuA7BCVVPRz61vPNxMtr5YfZRewQOmbSePwoxTlYQsKm6XtVYpMY3kQi%2BTsocvEKGPHUy1QN3fjyfvR1JkDGNo23u%2B56pgFFbl6B5ZOhZ4rFWu%2B0h1xM0kAUH2VlbhiDCjflSDkPNfxq0MNvf2GOpZUappBjYDqTkumlGdo2s%2FKw8drgDLlFapERjI9dG8E9eoGjPjiXypiPVAtX3BxOP9Ac6WIkIFG4m68Jx4ukjJbyL1dNBSM%2B%2FCCaEvz2AbsprJxKoo98WaMfVDBcGTV4YM8Oj0Y%2FAHzS6DzRHeEx44OEKITvKJr149%2BjQeyjnY3yPnQN1mCy%2F0DJrgbUzs1gAFVb1Fqd0uJo7vbhPYCpbLiuFTBrYwt4y2vgY6pgFv%2Bg%2FzxeR3Oy1ZSexOnMRHJWASRuhRwXYUs9jLevkOP%2F83%2BcGNA9V%2FQ%2Fuw9R04u6al0%2FMscBiMWWl5IbvqO3elUCnR%2FxwI1Tn00o3ltfBapFvruc3Kis7ip59T9PPk3yt0NCi9wwVMiiQcPQ8DVD%2F3SUb45kd7dNVCK7LBr383k6LhXWzJ%2FobIuNbSM1lGoGiicWFlrPsaqFC7iHWtsszKcit8P%2Bx3&X-Amz-Signature=907a0ab6a94c93123064a6c7d7f8e1803a3113755edf6072004a7551a3e5d930&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
