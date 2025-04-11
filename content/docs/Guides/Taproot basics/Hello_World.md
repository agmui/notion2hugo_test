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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6Z2KYFB%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T070833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJIMEYCIQCMgCfNLD2%2B46nwEAzUGJX1OOxm5UcJt%2FPWDmyjXc1EqAIhALL7MNoK8Wdztu%2Fff96YVD1ER6T7qeH1j81II%2FwRgWO2KogECLj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxA%2BaB1syHRzzx182wq3AMD4ptQExVUg94Q8NETzrmoKIT1YdV04O83qzL0O7QjvknVQ4Sqg%2BOaQ%2Bl7V4%2BtUSlTSVrNTxWFZrCSEM6DoB1ZZPGv%2FKUCpD4PjajU%2B7JVX5bEMvhj2LYc94tzxIkUtSlYTYP1V0lpKrJcOVHgjYxIPKCjGFTwGU8G%2FOqPGNrqFL%2BfwpUWhtHnWsotHOeonKwqCtup3kaiQqkoW086lJXiJFOsEP2D3eX%2BjAvFLCbKdVrSubtWVFjFKM4bjuV%2FniUVvCxxQKM1eha7hz3jO%2FAlpc76BFqR5QC8APUbglRuv3tVK4P6Pp7KDQJhHfuWQxIueqx7rRgm4mGaY3%2BplMiz5TuseoWXn6plT5Jr3Tua9RWVHdl9RfR5ASio908P15cqednL3frFDgDPU1ddNSGQ5hEpMbX2UnTCQYWVvnOB6B%2BuMJc5in8knrRBmV3qzHxxjllnMg1H0z7Rog1CxIxL3NPm9IPcsqdWk0skom9GT%2F%2Fx7hYZcifVDQ8f2zpLTcdJ57TejCVd6bMVXLkridZvuqm4X6VGqmsk5INztNdHlc6Uj%2FUCWLAln70dqDL4FiQ0uw0hM5kRbusYwhu%2BhTDZo2xlTq2vGqBj%2Fc5%2FHXO%2BoKEdLZSaWY3zaaPGdTCW9%2BK%2FBjqkActOX7ahrbsE7Rl4nNjTai05RrXLfVPEf1D2g48aGBfpSG9QscgnXD1mR2a%2F0GydLy%2FEMeEI9nWY00xJYhjIUK6chIrfsF6QVe1jHNQ59i8UEemF%2FBkJjUQCfQvu0Pg%2BEtde%2B21MtvUNqM7x6J9Kw9yEZkjOKWRLC1yGMTfyMx0%2FP5LtoMjbRnWYfdBPK4QOLyJ0ZEPvhAVyfOk2QrSuqS5WDm66&X-Amz-Signature=a41639b7e2656f7e6c3acb796cd75f2f423bc92ebe72201c005ee5e6eac3bac6&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6Z2KYFB%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T070833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJIMEYCIQCMgCfNLD2%2B46nwEAzUGJX1OOxm5UcJt%2FPWDmyjXc1EqAIhALL7MNoK8Wdztu%2Fff96YVD1ER6T7qeH1j81II%2FwRgWO2KogECLj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxA%2BaB1syHRzzx182wq3AMD4ptQExVUg94Q8NETzrmoKIT1YdV04O83qzL0O7QjvknVQ4Sqg%2BOaQ%2Bl7V4%2BtUSlTSVrNTxWFZrCSEM6DoB1ZZPGv%2FKUCpD4PjajU%2B7JVX5bEMvhj2LYc94tzxIkUtSlYTYP1V0lpKrJcOVHgjYxIPKCjGFTwGU8G%2FOqPGNrqFL%2BfwpUWhtHnWsotHOeonKwqCtup3kaiQqkoW086lJXiJFOsEP2D3eX%2BjAvFLCbKdVrSubtWVFjFKM4bjuV%2FniUVvCxxQKM1eha7hz3jO%2FAlpc76BFqR5QC8APUbglRuv3tVK4P6Pp7KDQJhHfuWQxIueqx7rRgm4mGaY3%2BplMiz5TuseoWXn6plT5Jr3Tua9RWVHdl9RfR5ASio908P15cqednL3frFDgDPU1ddNSGQ5hEpMbX2UnTCQYWVvnOB6B%2BuMJc5in8knrRBmV3qzHxxjllnMg1H0z7Rog1CxIxL3NPm9IPcsqdWk0skom9GT%2F%2Fx7hYZcifVDQ8f2zpLTcdJ57TejCVd6bMVXLkridZvuqm4X6VGqmsk5INztNdHlc6Uj%2FUCWLAln70dqDL4FiQ0uw0hM5kRbusYwhu%2BhTDZo2xlTq2vGqBj%2Fc5%2FHXO%2BoKEdLZSaWY3zaaPGdTCW9%2BK%2FBjqkActOX7ahrbsE7Rl4nNjTai05RrXLfVPEf1D2g48aGBfpSG9QscgnXD1mR2a%2F0GydLy%2FEMeEI9nWY00xJYhjIUK6chIrfsF6QVe1jHNQ59i8UEemF%2FBkJjUQCfQvu0Pg%2BEtde%2B21MtvUNqM7x6J9Kw9yEZkjOKWRLC1yGMTfyMx0%2FP5LtoMjbRnWYfdBPK4QOLyJ0ZEPvhAVyfOk2QrSuqS5WDm66&X-Amz-Signature=ca65406efc97be071c97251449cf6e3216b2d5dd5bfb1bdf96eee2f2bef090d4&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
