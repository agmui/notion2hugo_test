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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSRZGRI3%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T050203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJGMEQCIGpx%2BzCkyZlRqRhoPWRfnIYrKguFDHxzra7Ea6%2B9E38XAiAlunfKjy1HVmi3uK8RF16cHICGPPGtrPaM5Dqj4FsdSCr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMBVkQof70I4F3j44EKtwDp6u9orVUnqB8y%2FdW7UFxgmq%2FGEr619BMR03%2FhAuoYraM7%2F8lxDu3rKGMWnjovAhOUljqZeHKFyYchXVh%2F8r9eHV6MASnrOhieArOxNOWWTpy0iGu4qvozESaXja%2BZE%2Ffy8Te7ZwreluOQND9mPAcEQNOnPvqKer%2B3LLn1dLr%2B7yPoDVXRcUZ0ToJouY5Sxi6Qct9z4imdWMNAOcB%2FbJmpryjB2n9zfiAHalbmT7uyYLY%2FAysUeEpXlZB2yITVwTGpzmG1AlinGKduqgsp8utdNiUDHKOMCOG46rwl186sVml%2FPSVSePkj1mrafyc%2BsMBvDgPLey74uwo9P839zikxyUlmEik%2BAgFOm%2BL%2FljIWLGhALIv6LEQDu%2FtYIkSk7NTN07b4%2FIhJ3ImsjZWY%2BbCRKsH%2BnoSwmzLdEkmqfkQxpnwcFoDIgqcdZ1cxd6Y7hJJ6ziIyseKDFyXzM%2BKIsITudCfxh6TXLU1Agpt8IedL01TGtuGmOjr2Ku8ZzvNSbl3hiMTC91dIxWKyWpAsi26fM6xEX8hWlUVBugJHloEDr9n7p1hhsqUCUYVCk3dIzLIUIl%2FjxuxSISnHcAYYyUaimyA4HNG%2BS9kktTgxpZKenVL2VJfMoUTWzm2%2F2MwlvuuvgY6pgHjY%2FkkRHVPPI6%2BRd36LJaMKVYzh0q5kfuBS9QxP2W29bYzHZOkrlxEhENbFEP4F1OMGPnVcoBxwKWsB1b616eOIvoNOF5mUkKpkoTe8RQHUodyBdy2xJoiWb%2BR5NU05mpJEcL9eUldGoeatotZTbXGkCtSzQ31sxtk7GqA%2Fs%2BTRhnmM%2ByaSSMQtGxqx%2BcdkRmCg13NhGXA3M9jO3NCoBznMvEiVZ2%2F&X-Amz-Signature=daab502985c662b0da44df1e702100a477fc08acc4f6d06877dfaf540b46f163&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSRZGRI3%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T050203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJGMEQCIGpx%2BzCkyZlRqRhoPWRfnIYrKguFDHxzra7Ea6%2B9E38XAiAlunfKjy1HVmi3uK8RF16cHICGPPGtrPaM5Dqj4FsdSCr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMBVkQof70I4F3j44EKtwDp6u9orVUnqB8y%2FdW7UFxgmq%2FGEr619BMR03%2FhAuoYraM7%2F8lxDu3rKGMWnjovAhOUljqZeHKFyYchXVh%2F8r9eHV6MASnrOhieArOxNOWWTpy0iGu4qvozESaXja%2BZE%2Ffy8Te7ZwreluOQND9mPAcEQNOnPvqKer%2B3LLn1dLr%2B7yPoDVXRcUZ0ToJouY5Sxi6Qct9z4imdWMNAOcB%2FbJmpryjB2n9zfiAHalbmT7uyYLY%2FAysUeEpXlZB2yITVwTGpzmG1AlinGKduqgsp8utdNiUDHKOMCOG46rwl186sVml%2FPSVSePkj1mrafyc%2BsMBvDgPLey74uwo9P839zikxyUlmEik%2BAgFOm%2BL%2FljIWLGhALIv6LEQDu%2FtYIkSk7NTN07b4%2FIhJ3ImsjZWY%2BbCRKsH%2BnoSwmzLdEkmqfkQxpnwcFoDIgqcdZ1cxd6Y7hJJ6ziIyseKDFyXzM%2BKIsITudCfxh6TXLU1Agpt8IedL01TGtuGmOjr2Ku8ZzvNSbl3hiMTC91dIxWKyWpAsi26fM6xEX8hWlUVBugJHloEDr9n7p1hhsqUCUYVCk3dIzLIUIl%2FjxuxSISnHcAYYyUaimyA4HNG%2BS9kktTgxpZKenVL2VJfMoUTWzm2%2F2MwlvuuvgY6pgHjY%2FkkRHVPPI6%2BRd36LJaMKVYzh0q5kfuBS9QxP2W29bYzHZOkrlxEhENbFEP4F1OMGPnVcoBxwKWsB1b616eOIvoNOF5mUkKpkoTe8RQHUodyBdy2xJoiWb%2BR5NU05mpJEcL9eUldGoeatotZTbXGkCtSzQ31sxtk7GqA%2Fs%2BTRhnmM%2ByaSSMQtGxqx%2BcdkRmCg13NhGXA3M9jO3NCoBznMvEiVZ2%2F&X-Amz-Signature=681d638527eb6f76e56eedebeb31b003f3da6e73100313cefa626d45e1890b42&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
