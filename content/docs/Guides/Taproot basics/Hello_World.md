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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VW6UBFO%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T033540Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHX47gWyDlLsay%2F44vPm06pv2bSnJTFx3RyXzZP%2B0w4yAiEAhGncff0C2RaTnHXfZuRr2PJ%2BPDMRPz%2FGSAd8CnAS3Poq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDKy9Vvx478Q0Lc6LIyrcA17awYdMoXgniRVCrNkDJDJv%2FhV675HY0%2FUXDhzoxpfMysunoQ2N2bSgnuFHXC1C4X2w4nd4yY%2BOkytLbQ0AflihhLf49jt8JsOD7Tl%2FseFh7xhuPKwaTC8OS3kdl%2BFqNSw%2FXH1FwDXWnI2W7bVuFNT1envInKM%2BIicPmcM0X0XrfDXf27UEdVeteEBOj%2FfCvnRmQ4Mn61xfYyC%2BkqZAsX1Fhz%2FfO29z%2FkNI3BPlwApkwRbnUgV14mAGoz%2FYtMojTHM4deKzuAVL4dSGY9PtCTmkPmyap2QsH4Aq6eNBq3z2bVikV%2FlCQm%2BorOn4z1WFH5%2BIqZwEgSsWytGdSEFdb4W3s6sWZ4YD29c4O0tuAsEdVq21VFo1SfLsRt7t557qhB9EVpRiu3CQ65smL%2FyYpT0p25RGliGiwY%2Fd9AmgzrYKz%2BOa0ZEDSq9PSmR7MTOjDrn5YiJ872re3y8OmuCPEdQwwSV1oMVQdsuzOxw7rsRDIOvfKzRIt0hY1XLl1XqON3rKNKD6n03PI2IVH1e0VEvmx1kprWTLBRF56OFp7QQQddfkiMpeVBkddhIF7imouJH0%2FkmwznugyR0PDSxXksm2c46iTugFKmg5qdyqAi40DKq4lfTA8XDeLOZRMPyW1MEGOqUB3u1VVTpBkjAxdTdCxSNh%2F5UekCofVPYoX1lsdN254Qv%2FQPzKSst03rfqptfpe9RfCUIyK7zL46RBdUHQCsPoAZrkMMqo8r7ORdZuzLPSjLJiLWR53u46%2BxEhtJBlMWzJ26lc70qv7099G5vEJYK3B3VtsMc4yQzck6H2CXkn2CnAB%2FbbVAqdafTlu3zHQiJfwTXyHhV%2FQuFEHKLafTdsY6k8i%2FJF&X-Amz-Signature=395697e00617a28b7b1eaabd9cd79dcddc9863d7587bb86883589ffe7898d5cf&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VW6UBFO%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T033540Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHX47gWyDlLsay%2F44vPm06pv2bSnJTFx3RyXzZP%2B0w4yAiEAhGncff0C2RaTnHXfZuRr2PJ%2BPDMRPz%2FGSAd8CnAS3Poq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDKy9Vvx478Q0Lc6LIyrcA17awYdMoXgniRVCrNkDJDJv%2FhV675HY0%2FUXDhzoxpfMysunoQ2N2bSgnuFHXC1C4X2w4nd4yY%2BOkytLbQ0AflihhLf49jt8JsOD7Tl%2FseFh7xhuPKwaTC8OS3kdl%2BFqNSw%2FXH1FwDXWnI2W7bVuFNT1envInKM%2BIicPmcM0X0XrfDXf27UEdVeteEBOj%2FfCvnRmQ4Mn61xfYyC%2BkqZAsX1Fhz%2FfO29z%2FkNI3BPlwApkwRbnUgV14mAGoz%2FYtMojTHM4deKzuAVL4dSGY9PtCTmkPmyap2QsH4Aq6eNBq3z2bVikV%2FlCQm%2BorOn4z1WFH5%2BIqZwEgSsWytGdSEFdb4W3s6sWZ4YD29c4O0tuAsEdVq21VFo1SfLsRt7t557qhB9EVpRiu3CQ65smL%2FyYpT0p25RGliGiwY%2Fd9AmgzrYKz%2BOa0ZEDSq9PSmR7MTOjDrn5YiJ872re3y8OmuCPEdQwwSV1oMVQdsuzOxw7rsRDIOvfKzRIt0hY1XLl1XqON3rKNKD6n03PI2IVH1e0VEvmx1kprWTLBRF56OFp7QQQddfkiMpeVBkddhIF7imouJH0%2FkmwznugyR0PDSxXksm2c46iTugFKmg5qdyqAi40DKq4lfTA8XDeLOZRMPyW1MEGOqUB3u1VVTpBkjAxdTdCxSNh%2F5UekCofVPYoX1lsdN254Qv%2FQPzKSst03rfqptfpe9RfCUIyK7zL46RBdUHQCsPoAZrkMMqo8r7ORdZuzLPSjLJiLWR53u46%2BxEhtJBlMWzJ26lc70qv7099G5vEJYK3B3VtsMc4yQzck6H2CXkn2CnAB%2FbbVAqdafTlu3zHQiJfwTXyHhV%2FQuFEHKLafTdsY6k8i%2FJF&X-Amz-Signature=c840682854428689b25611a72fad617800dfa6ff1cb52b617ebf73ac6dccca62&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
