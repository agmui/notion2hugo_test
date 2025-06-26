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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLTQ5T2J%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T024038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIQCRbR00gBXuNIfd0WGxp%2Bx3evevufQomC7H8HmwxOTpFAIgIh88qObUEn0s5kc%2B44%2BjRZFN%2FYEe2yZgav2%2BRFBphWsq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDGSEKq5GZFSBG2ieCSrcAwfCLwwNpurp0W3oVLWOF0Q%2FyDGspkW5dnP1Tnva6Ljz6REnOudOOdnPHwX8BzM4Wn2WTANm79ZrZ7Zl7X7xUlKfCb2YOc06p9%2BdL99Zh%2BNtkAlmUzDFKKsRwEhNzmei59CWzfL1X9nZOUP6pgPMQR4loayHNzVCy%2B737Ag3ittrPGXbQlav8OLNg3VtUnm%2B9IPN87HRXxCdDazggVco2PcQRb8qFuy2fslhT4xwrVAgW0aGAjvt%2FMCreBe%2FotEJJlJBT%2Bt6BWvZI2JMS37PNoElWu4K2FFDIzE3DxxxuujYUOoBoM2yvPnHeDfeCNod1EGUtVp1FDlK9MtYN2uG6bgYKMI57DzfIanQKkIhJ0%2FIOo6xwtjAxYgZlnMrByx5pYlyuN8KGaSYoXwTMyAdgt0zLixnv3xqBK%2BljuskV2c6gwe2j4wLBZjdpdGXEuHjwBrP1eTW9kDfkD7SQO%2FVYxv86ofYha%2BIZ1wlERrkhhgR%2BHIIN1nHMicY5TsagNgEwoHdch4iWVbks%2BAGf6OlqlHGFpeUardBIF3JD1o5vxNvHCZmnMWivjeg3PQ3gg98%2F8i4W67qb6fpbQO4LqllQM4GrX0xxKhi%2FEyDFuhN%2FgdLPAQrPiH61lPqVScFMJvf8sIGOqUBCIFsCAuZUWNFdPKnmmalaZ%2B3S6enxMADua%2BkKMrsbRKm2dauq14MegUs9zSH0gYMw8CnaGQOHPutyX5gSx8RilUpxTnUv5VCDOJBP3cWlhidETjpoTR5SgvMHzyVBgewriWy0YK%2BVr5KeGyXvoaZbZy8gUk206g%2BlaguGaPIy9qqxHyfBFSWkF6TpPzbZsUxku320Tq2UX0aySoPVqHrFRVajvIZ&X-Amz-Signature=96c0b5183fe14fa3b903f55cdfa8413b4cdb4a5429ee73f5785a5b230aacf927&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLTQ5T2J%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T024038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIQCRbR00gBXuNIfd0WGxp%2Bx3evevufQomC7H8HmwxOTpFAIgIh88qObUEn0s5kc%2B44%2BjRZFN%2FYEe2yZgav2%2BRFBphWsq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDGSEKq5GZFSBG2ieCSrcAwfCLwwNpurp0W3oVLWOF0Q%2FyDGspkW5dnP1Tnva6Ljz6REnOudOOdnPHwX8BzM4Wn2WTANm79ZrZ7Zl7X7xUlKfCb2YOc06p9%2BdL99Zh%2BNtkAlmUzDFKKsRwEhNzmei59CWzfL1X9nZOUP6pgPMQR4loayHNzVCy%2B737Ag3ittrPGXbQlav8OLNg3VtUnm%2B9IPN87HRXxCdDazggVco2PcQRb8qFuy2fslhT4xwrVAgW0aGAjvt%2FMCreBe%2FotEJJlJBT%2Bt6BWvZI2JMS37PNoElWu4K2FFDIzE3DxxxuujYUOoBoM2yvPnHeDfeCNod1EGUtVp1FDlK9MtYN2uG6bgYKMI57DzfIanQKkIhJ0%2FIOo6xwtjAxYgZlnMrByx5pYlyuN8KGaSYoXwTMyAdgt0zLixnv3xqBK%2BljuskV2c6gwe2j4wLBZjdpdGXEuHjwBrP1eTW9kDfkD7SQO%2FVYxv86ofYha%2BIZ1wlERrkhhgR%2BHIIN1nHMicY5TsagNgEwoHdch4iWVbks%2BAGf6OlqlHGFpeUardBIF3JD1o5vxNvHCZmnMWivjeg3PQ3gg98%2F8i4W67qb6fpbQO4LqllQM4GrX0xxKhi%2FEyDFuhN%2FgdLPAQrPiH61lPqVScFMJvf8sIGOqUBCIFsCAuZUWNFdPKnmmalaZ%2B3S6enxMADua%2BkKMrsbRKm2dauq14MegUs9zSH0gYMw8CnaGQOHPutyX5gSx8RilUpxTnUv5VCDOJBP3cWlhidETjpoTR5SgvMHzyVBgewriWy0YK%2BVr5KeGyXvoaZbZy8gUk206g%2BlaguGaPIy9qqxHyfBFSWkF6TpPzbZsUxku320Tq2UX0aySoPVqHrFRVajvIZ&X-Amz-Signature=834506d2142f3691caa65409a52ba39314fd4848dc848d15263f26410bbb685c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
