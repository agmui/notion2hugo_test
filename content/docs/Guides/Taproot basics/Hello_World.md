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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZCAM6MA%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T181153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDGCf2wxItNMqdcdICHwQFEyhXltK7YLkow%2FMSZ46B4qgIhALigtDi8yFaWpM1LXtxOft5LAYdCU3cLsHNZwAHz19LxKv8DCDIQABoMNjM3NDIzMTgzODA1Igw%2FtjDo1xYdOgVCrUgq3APmMZPsTxarqdp9%2BbGkUHB8tFG1Ptcvp6xPW%2FfZObxl1xI%2BGGp%2BimW9BJZNnnch4TWWwJCmIIIsSc%2FABQ63EmfRZdLJ9jduxc6tWLxhscve5BjIZuBZ3Z67tGtILWZQL0XTO35n2CcBunDVeE4kAep4M75rtYChITSeLa%2BtVPKcg2k2fk4XSx22v%2FK5z1SU%2BBM%2BeoQ5lDxKDlF5PXaVWyV4lN1idimOeJ%2BXM8KqZjcDNDxYpXTr1jXNVkxAOvL6OTo6kxRbW2S50j60BRQmuP5%2BmZFeDzU5aMH7RrsdFcE21OsHM%2BB9k2fbw4jPobwcEWAriNUfi%2BaewhOejLM5AAoA9M0LFVtcSFtRiL0xTelRKybsq8vjazu7%2FGpFhVxsseY3X06dXBI6fFCcPpQ%2B4GqX6p%2FSO9A1DdGTeq0EojNb3xSCDLLrTGGP5KkypmiqL6L7zajbdy%2F7JzkBukBR54aPQhLIjDwYuwSq5iJSDxf10LQOPS6ZBa5tFIDLH3b7aDaNxPfnWvtXk0uaerAQETX%2BKF3Hww%2B6DoP827Upm0ssmx8sQfbYTalfskYUAO4WrCTamPxfkBIkiKfY04V0NjsNVxLcTeiPswpGsPwm%2BZRbmcOjbpa5O%2BJ251NWSDDMqr7EBjqkARWwRguxTY3Bglpnh8ziAmq4sZw4PbmLCRsZ7ZYytjAWv5RTO%2Fz3bd%2B9rGRwm9Jj%2F5DCiEh8Y5TE725ppkcUE2kzzrfykVqI5qE%2BMbwRStpihOBUUJuQlXTMN3nlloMJ8hx0F8MOAAmTHHP93KZShf5%2B4RFkARZrgj2CnO3WR9Hw6YdIEHuSM6JccJ9wJi6fI6sRdd%2BzGdArbw9Uk7V0rcPvbvAa&X-Amz-Signature=5502d49644594fc0626f5fb31a0345716ad983231919800c7d8e8d8fc02cdac5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZCAM6MA%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T181153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDGCf2wxItNMqdcdICHwQFEyhXltK7YLkow%2FMSZ46B4qgIhALigtDi8yFaWpM1LXtxOft5LAYdCU3cLsHNZwAHz19LxKv8DCDIQABoMNjM3NDIzMTgzODA1Igw%2FtjDo1xYdOgVCrUgq3APmMZPsTxarqdp9%2BbGkUHB8tFG1Ptcvp6xPW%2FfZObxl1xI%2BGGp%2BimW9BJZNnnch4TWWwJCmIIIsSc%2FABQ63EmfRZdLJ9jduxc6tWLxhscve5BjIZuBZ3Z67tGtILWZQL0XTO35n2CcBunDVeE4kAep4M75rtYChITSeLa%2BtVPKcg2k2fk4XSx22v%2FK5z1SU%2BBM%2BeoQ5lDxKDlF5PXaVWyV4lN1idimOeJ%2BXM8KqZjcDNDxYpXTr1jXNVkxAOvL6OTo6kxRbW2S50j60BRQmuP5%2BmZFeDzU5aMH7RrsdFcE21OsHM%2BB9k2fbw4jPobwcEWAriNUfi%2BaewhOejLM5AAoA9M0LFVtcSFtRiL0xTelRKybsq8vjazu7%2FGpFhVxsseY3X06dXBI6fFCcPpQ%2B4GqX6p%2FSO9A1DdGTeq0EojNb3xSCDLLrTGGP5KkypmiqL6L7zajbdy%2F7JzkBukBR54aPQhLIjDwYuwSq5iJSDxf10LQOPS6ZBa5tFIDLH3b7aDaNxPfnWvtXk0uaerAQETX%2BKF3Hww%2B6DoP827Upm0ssmx8sQfbYTalfskYUAO4WrCTamPxfkBIkiKfY04V0NjsNVxLcTeiPswpGsPwm%2BZRbmcOjbpa5O%2BJ251NWSDDMqr7EBjqkARWwRguxTY3Bglpnh8ziAmq4sZw4PbmLCRsZ7ZYytjAWv5RTO%2Fz3bd%2B9rGRwm9Jj%2F5DCiEh8Y5TE725ppkcUE2kzzrfykVqI5qE%2BMbwRStpihOBUUJuQlXTMN3nlloMJ8hx0F8MOAAmTHHP93KZShf5%2B4RFkARZrgj2CnO3WR9Hw6YdIEHuSM6JccJ9wJi6fI6sRdd%2BzGdArbw9Uk7V0rcPvbvAa&X-Amz-Signature=6d5b8f511661ec0cd93b3334ef56e07377bb499cf3d83e39b2847e45dbb7b088&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
