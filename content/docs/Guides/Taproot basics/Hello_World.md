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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667J6DKVHH%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T150716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCID7t6s%2FtSEPeBg20DipGxRF4CghYZ%2BlRDBMSajOiJp5dAiEA0n2lSPVZ5p0NcBZCt6t6GRAkQ15bZoHXetku%2BLK2Ttkq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDHw86kxF1VK4RkdfUCrcA%2B1Db6CDK8RAl10RsJcD3huqCivO%2Fi05Ji4axxVmXZ%2FhaDMqwQFPqdRmu2HtN%2BSDrjiv2%2BEygvK1u8DRbYnk0nlDa4NNMiIKlh3OrtJfJKK2%2BnnN336H0p4nsmMC1hqFkAeaHlsJApLSbvH20SfpUbV%2B4PyjN4VNlPRJJdullV9oGqI2VZKV5Bw4gbG6DDQPhRigbPjTAojXldcS7AZPeeA5ESmpA%2BtKhX%2BbOtkYlWeiWZl%2BxQu6EHGfsL6TpsTC7GHIJvJE76inWhQqJfAsXadEVaOqDXCFcV5Nxjx4cmjkTzerRsiAqBa8BchXuXhCCGlDWUva8Hr%2FB0OJthNLdU0hrmI%2BY2rFVdh4rx4GZUbn6wMTAdL3O8dwka1euFnNh0%2FO%2BfqcqLA73c31u%2BusyVpJNK5Sp18IwLUTso2356V59cPudfzgggKmbgLQtUN69V1h2WqQgcm5YgO51D2FhKycdysI%2FXAeFW7lIKC70hXrFDVSwMVPk3xY2mlTfN%2FCqLZ8aKLJ%2BLlZ2tgGNl4p5PAFZ3YjEgxprymay4JRESfu3MuvC7GupaIpgg7trIF2Db8VLstivY%2FU0NsU%2BV2d6ag%2BsK24gIu7X3v4yfElripZJSvQPKAEWCWW5dJMMMKlu8IGOqUB0%2BDoPRxIgi5UTUrIB7fQEjtFMEZbtzPIY51vnRLsnp67EJILkpvcrpstJly%2FD1Gk3oEPTfDerOeY%2BB4e5c1pvPDnJ97BYY8NicEv%2FQTRbsLgxz%2B4m7HAPu9O0SMi%2Brs29%2B8yv1wudmZ2u7S1mE9OLzByF%2Bif34ibtnikuNY2PH%2FIh3r9LKT2Y1EozcY4Yolzb1RtRMrwcv3KboBPHnC5sMrjyuIu&X-Amz-Signature=c640c69f90649b5c04803745f81af28d1c69c954613e661f58ec3d89e566a1e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667J6DKVHH%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T150716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCID7t6s%2FtSEPeBg20DipGxRF4CghYZ%2BlRDBMSajOiJp5dAiEA0n2lSPVZ5p0NcBZCt6t6GRAkQ15bZoHXetku%2BLK2Ttkq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDHw86kxF1VK4RkdfUCrcA%2B1Db6CDK8RAl10RsJcD3huqCivO%2Fi05Ji4axxVmXZ%2FhaDMqwQFPqdRmu2HtN%2BSDrjiv2%2BEygvK1u8DRbYnk0nlDa4NNMiIKlh3OrtJfJKK2%2BnnN336H0p4nsmMC1hqFkAeaHlsJApLSbvH20SfpUbV%2B4PyjN4VNlPRJJdullV9oGqI2VZKV5Bw4gbG6DDQPhRigbPjTAojXldcS7AZPeeA5ESmpA%2BtKhX%2BbOtkYlWeiWZl%2BxQu6EHGfsL6TpsTC7GHIJvJE76inWhQqJfAsXadEVaOqDXCFcV5Nxjx4cmjkTzerRsiAqBa8BchXuXhCCGlDWUva8Hr%2FB0OJthNLdU0hrmI%2BY2rFVdh4rx4GZUbn6wMTAdL3O8dwka1euFnNh0%2FO%2BfqcqLA73c31u%2BusyVpJNK5Sp18IwLUTso2356V59cPudfzgggKmbgLQtUN69V1h2WqQgcm5YgO51D2FhKycdysI%2FXAeFW7lIKC70hXrFDVSwMVPk3xY2mlTfN%2FCqLZ8aKLJ%2BLlZ2tgGNl4p5PAFZ3YjEgxprymay4JRESfu3MuvC7GupaIpgg7trIF2Db8VLstivY%2FU0NsU%2BV2d6ag%2BsK24gIu7X3v4yfElripZJSvQPKAEWCWW5dJMMMKlu8IGOqUB0%2BDoPRxIgi5UTUrIB7fQEjtFMEZbtzPIY51vnRLsnp67EJILkpvcrpstJly%2FD1Gk3oEPTfDerOeY%2BB4e5c1pvPDnJ97BYY8NicEv%2FQTRbsLgxz%2B4m7HAPu9O0SMi%2Brs29%2B8yv1wudmZ2u7S1mE9OLzByF%2Bif34ibtnikuNY2PH%2FIh3r9LKT2Y1EozcY4Yolzb1RtRMrwcv3KboBPHnC5sMrjyuIu&X-Amz-Signature=760f09004780e708e13981ac745ea571d8274e3186350e73838c2788af5aa40d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
