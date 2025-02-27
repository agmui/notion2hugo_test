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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663U243ISW%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T021308Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIC9U8H8Vr8ieYedS7uGKQxaMeHrYA2dF9M7B1IpuiALHAiEA6Wuqxwt8Bh9xD8sSgFr49jiCN4ilDsO7eIkEe9S%2B4u0q%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDCxpGhKSQkqONoW91ircA2QznxnA%2BKfNFWxJB9v5ddfTxVJb10i4jvoOSEBLtzu%2F3tUIWcukFiqunrzvTDZW0ocuAHy7%2FJ8G8vXyvlF9uKpvvjnZiD7RvAUTLs6uCMCsg9aDB5nDWSDg9GItcYH1RJaemtgyi9ZjeP0a6XHxCmRj0kNyEyki8iMU8oYfVug6XlNmkUQhYDkI%2BRb4zIs%2FltSoHs%2FfKOokVHHyb4Ixg2oXKcL5vp9VMEsvL1Am2W2UajVZ3jEEAcCqxLJPqj1vqkdyFQ28spPKUPTzp5vMRH%2FEDRcrMLBv712lEEV3CTleRTRRorwOMnMtH2S%2FNmjUHsGcjPB5HWnu7Hcr33Ep1upJ247r9SN1lwFi3yz3Hkrmq%2BdpvZoVV3ahZ1uKVuNsDksUJY0l2gFz5CW59tkbBBXz9ROgEwFW8z3wB9jYZpT384gpx2Dw7c%2BRylPKbAxDFmubQBO%2FZZtHPx07QjbP%2FyX1jyhMkgbsgOTlCadNFqGgQuEP1K2ZcgYKmpGjGHi8mP68oe2JydUvM3jj3luS4H99VXoJag8neWCVvj1KYwuATfnSExeRwk4hz5WfL5EPu5nPs%2B76VlQeych4EAkKlVWMFB8RAG2aknbwQQOSiEuBT%2BbKKuih6F5p8x58MLn3%2Fr0GOqUBvvvWPf7lWJkSdFYxqK%2FM5NIQmjEjkG6nPBE%2F40xfrI9D1cge2KZZjgtqHIRjraJ%2B3UAu809Uq%2FvEQfgRyorh1LARWca%2FMppUuSBpJyD44s5c4boForj6%2FTCS7Xl0uLiJv%2F61Mof0D1vgL5cmaIdPorDmj4%2Bs1mZEZYmCHNpUl27%2FRvJcHL7atg5Icfk8fw1eGbobEVizPTllJei%2FJb6xgm8GWBz7&X-Amz-Signature=556898cca38e6a779166330136de9187f6a5fe22783ab991d84bf8e27fe59b15&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663U243ISW%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T021308Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIC9U8H8Vr8ieYedS7uGKQxaMeHrYA2dF9M7B1IpuiALHAiEA6Wuqxwt8Bh9xD8sSgFr49jiCN4ilDsO7eIkEe9S%2B4u0q%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDCxpGhKSQkqONoW91ircA2QznxnA%2BKfNFWxJB9v5ddfTxVJb10i4jvoOSEBLtzu%2F3tUIWcukFiqunrzvTDZW0ocuAHy7%2FJ8G8vXyvlF9uKpvvjnZiD7RvAUTLs6uCMCsg9aDB5nDWSDg9GItcYH1RJaemtgyi9ZjeP0a6XHxCmRj0kNyEyki8iMU8oYfVug6XlNmkUQhYDkI%2BRb4zIs%2FltSoHs%2FfKOokVHHyb4Ixg2oXKcL5vp9VMEsvL1Am2W2UajVZ3jEEAcCqxLJPqj1vqkdyFQ28spPKUPTzp5vMRH%2FEDRcrMLBv712lEEV3CTleRTRRorwOMnMtH2S%2FNmjUHsGcjPB5HWnu7Hcr33Ep1upJ247r9SN1lwFi3yz3Hkrmq%2BdpvZoVV3ahZ1uKVuNsDksUJY0l2gFz5CW59tkbBBXz9ROgEwFW8z3wB9jYZpT384gpx2Dw7c%2BRylPKbAxDFmubQBO%2FZZtHPx07QjbP%2FyX1jyhMkgbsgOTlCadNFqGgQuEP1K2ZcgYKmpGjGHi8mP68oe2JydUvM3jj3luS4H99VXoJag8neWCVvj1KYwuATfnSExeRwk4hz5WfL5EPu5nPs%2B76VlQeych4EAkKlVWMFB8RAG2aknbwQQOSiEuBT%2BbKKuih6F5p8x58MLn3%2Fr0GOqUBvvvWPf7lWJkSdFYxqK%2FM5NIQmjEjkG6nPBE%2F40xfrI9D1cge2KZZjgtqHIRjraJ%2B3UAu809Uq%2FvEQfgRyorh1LARWca%2FMppUuSBpJyD44s5c4boForj6%2FTCS7Xl0uLiJv%2F61Mof0D1vgL5cmaIdPorDmj4%2Bs1mZEZYmCHNpUl27%2FRvJcHL7atg5Icfk8fw1eGbobEVizPTllJei%2FJb6xgm8GWBz7&X-Amz-Signature=3d3307dae500331742779acb8463b9ed4068267b119d1f17e74af41bde86bd61&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
