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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XCIFAUY%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T071536Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBK9lf3YCDJeEoMLQu6l3Ri12zHCLaVQUUuDo8LKC4fJAiEA%2FfmmvMtVYGZ1631GSLbceMtUCcEgJMjNvLUVJvHKClEqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDZaQe4y5tXW73utpircA6D1te4aFRKRF2KedoN%2FYTC2gmMP1GGuAbEBmVb6LPpH5Z56dmaFyLVaUGYI6yO2GucCIbQV0F8Wrg%2FeG2jxRXeo2p0tw%2FMxB9xexIAZqZRthmF5QdMbiLyC%2FuwOlm%2BP09JYED3kcLxbaNW9VJ7VYBJS4kXgCWVwNJuHSAaKt%2BKlznKXb687Mz4QfGCgJ5mjU9L2cufyVfODwtAGR6GOTrNC41ySaBe%2B56D9H%2BKDa8kd7a36xuilxFFYAkFCXPC%2Fxty8BnvUyJeehNeophXHpStJ8%2FMbjFxV7q1Gz%2BaLkopEG6JHzVeVR6JagDxMycEwpTENmBmg%2BEYPPtnoqqORYy0yNq6XHmgX%2Fkp%2BUpMTcq10eUGwC%2BNUdFAc%2By2ei6NkysTjuOxQMFWYM1J1fdP%2FgvYOXN5VU2FOplhSC1O7aMoCjVowD2KWSvDFq0%2Femt2vqqoCUA1Dn4o3JuZhN5UQX5%2BZTDU2n6s3gjPZIQMTR%2F8DWCHLULpYBFVD0QFx266qgD4%2FpHv0rg419xcjhg79RmCEbq9xx41zT9KWgn%2BBwj5nV3zmzNguoZaLGy1CDJtD8Iscc%2BmG%2BCWc4oQ8jz1VxVyn6aMq9g8Lc0Ft%2B8WDcSqlYSDOuvqTzGj6DG1pMK6r5sQGOqUB9FR2VeHVJm739%2FhLbfvQYouBa43mEtvWpaveC3G7wLdkdNngC%2F4Q%2Fqjth2V779InCaWdVzCPvM6TqE3JaT454lqmB6qyooVrMdbag89alCFKQRlpHZYreBzdRAuVNWq%2F%2FLEIfWntpJjiBLQWtB%2B%2BJlee7hcZalLpL%2Be9dYTm7KwFWxo0%2BLDhtk2UkVYJVeLAuY3%2Fn1pf1bmyBA%2Bhju8gnLGsJx6A&X-Amz-Signature=5486dfe83f2e4df25b15338473e31146a225ae6ac6dacdcd5d77326208c04cce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XCIFAUY%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T071536Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBK9lf3YCDJeEoMLQu6l3Ri12zHCLaVQUUuDo8LKC4fJAiEA%2FfmmvMtVYGZ1631GSLbceMtUCcEgJMjNvLUVJvHKClEqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDZaQe4y5tXW73utpircA6D1te4aFRKRF2KedoN%2FYTC2gmMP1GGuAbEBmVb6LPpH5Z56dmaFyLVaUGYI6yO2GucCIbQV0F8Wrg%2FeG2jxRXeo2p0tw%2FMxB9xexIAZqZRthmF5QdMbiLyC%2FuwOlm%2BP09JYED3kcLxbaNW9VJ7VYBJS4kXgCWVwNJuHSAaKt%2BKlznKXb687Mz4QfGCgJ5mjU9L2cufyVfODwtAGR6GOTrNC41ySaBe%2B56D9H%2BKDa8kd7a36xuilxFFYAkFCXPC%2Fxty8BnvUyJeehNeophXHpStJ8%2FMbjFxV7q1Gz%2BaLkopEG6JHzVeVR6JagDxMycEwpTENmBmg%2BEYPPtnoqqORYy0yNq6XHmgX%2Fkp%2BUpMTcq10eUGwC%2BNUdFAc%2By2ei6NkysTjuOxQMFWYM1J1fdP%2FgvYOXN5VU2FOplhSC1O7aMoCjVowD2KWSvDFq0%2Femt2vqqoCUA1Dn4o3JuZhN5UQX5%2BZTDU2n6s3gjPZIQMTR%2F8DWCHLULpYBFVD0QFx266qgD4%2FpHv0rg419xcjhg79RmCEbq9xx41zT9KWgn%2BBwj5nV3zmzNguoZaLGy1CDJtD8Iscc%2BmG%2BCWc4oQ8jz1VxVyn6aMq9g8Lc0Ft%2B8WDcSqlYSDOuvqTzGj6DG1pMK6r5sQGOqUB9FR2VeHVJm739%2FhLbfvQYouBa43mEtvWpaveC3G7wLdkdNngC%2F4Q%2Fqjth2V779InCaWdVzCPvM6TqE3JaT454lqmB6qyooVrMdbag89alCFKQRlpHZYreBzdRAuVNWq%2F%2FLEIfWntpJjiBLQWtB%2B%2BJlee7hcZalLpL%2Be9dYTm7KwFWxo0%2BLDhtk2UkVYJVeLAuY3%2Fn1pf1bmyBA%2Bhju8gnLGsJx6A&X-Amz-Signature=026a0e514e04b9b005d2432a6c118454aaf2f8980d95a12907a6c08f3fc6eb5a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
