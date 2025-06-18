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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S47JJBX2%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T051028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCht6iX%2BKI235uCeXNaDozPAtLL%2FX4l%2F03f%2Bvs1cXaRzwIgKxFZiqpO%2FBbSFs9njodNiLHOMASRfQ99HXTSlYpyDpYqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMBo6amFfH8b8dvWMCrcA6q5RidK43NbdgpkWXyf13I6KWk5QPhiTfNYvVd1DrZz8WEKMYC1pvTSwgP3G8w7xwxWuSf0ohIY01gsj2fx5CdZYEtit9IRTjz69bNMnwEkqo%2BDG7dVMKfFZ1TZ60TPp3ynTqxklNCnjSauwiyF7dhn1eCll2yK6jwv7adGxaUY%2BEtNHz39iD8wnws8%2BTqU8cCAu1ZDmvUTkiqL%2BYseHcy4Y1kP4dGDnBV4imuCDLlG5Fel0wuoCq%2BbS%2BdRZk6UgAPQ4VQKh%2F%2BE%2F%2BBEpHPtANEWjzoaGQH2nNqUrKPgeaJuqSzH5TakUtVkoJUR0%2FgQggBAbtuYaQa5DZjSG2GAqNEgSwb07CfNo0jwbRLVGA3bjwp20o66rh6ADM3ISfO2qFEv%2F0G6svhGdzJ%2FSyN6R0KSE3pCS8e3IM2Hdg9caKpHzTrhSXfgNa0eTAMMMXFj4mS1iVr%2FbDXsFyR5w31AjquUhFBl0YYHgrPay6eqCu5ff7R2Kqtl5mtqs%2BSmUrQ9YebEhX0K7n4963VnVRQn5eRfPe4h33Cg66vlSIRSfaJTEgewYapjAtg6rztGbyN%2FWJM6VLE6HQekGSpPBM2EHV3O46tsL%2Bo5TnVd4Pfb3sDnTl2sVOidd0kJMbQGMMjSyMIGOqUBoRZtQtzkXqLfEf3gjejbGVfMXG3%2B6wO5oRHNYL7Lafh7RflokdntBTDGtiCfqhe3%2B1Cfs1vKDztc%2Bz%2FRKqGrdKpShnpGxmUThyQxnOMu4j4Fd9tmfmpSjTsDOQVdK5wIvbhhtfZlfMUHof%2FSFkoXUmDcelK66o6mFKSPeeIcNafm2ioD0Fqux36XA9VabxVRBJYoNQqlJw43ibOdIS3ihm5D6Ppl&X-Amz-Signature=c8c456aff97dfa2bfd2518d5994046480d86f7c5382e1966758bbf13260be9b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S47JJBX2%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T051028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCht6iX%2BKI235uCeXNaDozPAtLL%2FX4l%2F03f%2Bvs1cXaRzwIgKxFZiqpO%2FBbSFs9njodNiLHOMASRfQ99HXTSlYpyDpYqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMBo6amFfH8b8dvWMCrcA6q5RidK43NbdgpkWXyf13I6KWk5QPhiTfNYvVd1DrZz8WEKMYC1pvTSwgP3G8w7xwxWuSf0ohIY01gsj2fx5CdZYEtit9IRTjz69bNMnwEkqo%2BDG7dVMKfFZ1TZ60TPp3ynTqxklNCnjSauwiyF7dhn1eCll2yK6jwv7adGxaUY%2BEtNHz39iD8wnws8%2BTqU8cCAu1ZDmvUTkiqL%2BYseHcy4Y1kP4dGDnBV4imuCDLlG5Fel0wuoCq%2BbS%2BdRZk6UgAPQ4VQKh%2F%2BE%2F%2BBEpHPtANEWjzoaGQH2nNqUrKPgeaJuqSzH5TakUtVkoJUR0%2FgQggBAbtuYaQa5DZjSG2GAqNEgSwb07CfNo0jwbRLVGA3bjwp20o66rh6ADM3ISfO2qFEv%2F0G6svhGdzJ%2FSyN6R0KSE3pCS8e3IM2Hdg9caKpHzTrhSXfgNa0eTAMMMXFj4mS1iVr%2FbDXsFyR5w31AjquUhFBl0YYHgrPay6eqCu5ff7R2Kqtl5mtqs%2BSmUrQ9YebEhX0K7n4963VnVRQn5eRfPe4h33Cg66vlSIRSfaJTEgewYapjAtg6rztGbyN%2FWJM6VLE6HQekGSpPBM2EHV3O46tsL%2Bo5TnVd4Pfb3sDnTl2sVOidd0kJMbQGMMjSyMIGOqUBoRZtQtzkXqLfEf3gjejbGVfMXG3%2B6wO5oRHNYL7Lafh7RflokdntBTDGtiCfqhe3%2B1Cfs1vKDztc%2Bz%2FRKqGrdKpShnpGxmUThyQxnOMu4j4Fd9tmfmpSjTsDOQVdK5wIvbhhtfZlfMUHof%2FSFkoXUmDcelK66o6mFKSPeeIcNafm2ioD0Fqux36XA9VabxVRBJYoNQqlJw43ibOdIS3ihm5D6Ppl&X-Amz-Signature=cc10e1821d2abea59cd92e7dbf3e1e97ff0247c45c6686a4c80b7439b3412b3f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
