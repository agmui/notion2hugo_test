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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJHKTWDU%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T220722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCIAQkibzbm84poVmY5THNEtK4%2BIpNlLseMCqZj3gfgundAiBsngakcpAIL479cuXxIe15pKxyQqfMO8NMULmdg6uaEir%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIM66hQxkyFcmimdHYRKtwDWTEQ9aq0DJ%2FJQkgRkhjRsXiTTm%2Fu0dQ%2Fw5L%2BThFs%2Bvn1l6EN%2Bkve%2BoRvL1oRuZ5fnhJRljmhAB1%2BGSbFofnJKpDbtXtZr0C0RykE%2B4c0LDIy3EnX99zVANJmMJ4KmFN158ClKkSRC%2BEheLMzfoCqehPqy2sLzSk%2BTv0s%2BZJENfQ%2FMi4ZLBygtdtQmL94b5sh85UrKK13Vsx%2Bd7t6RpiuQO3QPy5IB%2BhPselU4KQ8jAy60K6FW0I11Bfi0zov2rW%2BDU091luT87xLFPNqDaIC6cuvDVEdtNNWtqXD8fVZC2rDiim8oKsn5qmXbB3iFptbda2Wep17aMN%2BTqPxZXY9wntsEyp7XxVwMbV2zOuPhrx0P8bc7Tm7vDXBhExJVVagU4XHjMfrr0DCGjQzM0w4LCwhzcSZEKofFxHYwqfIffnQhwXvyEvVpM%2FHKHuEqGzCLntjsDlYPt0mzrKQmclD%2Bxz5nvO2TUAL0%2FT%2BGj1izUX4i%2FElCLKJvdemQDyiZmLfKvQB60vs%2F8J%2BxeIoufvbhIR3trlBx95EWwimEGp2PYe1TzA%2BzA6HsNoNBPx6f3heqqML60dzxe5j3PsH1ZPQZeT%2FQduXLGYrFlDocdbpQ4i4TfuNWSz2kLMNBBMwttnsvgY6pgF%2FDBOaUVyRt3oE%2FB0NpTm6QmA8J1auE%2FpTvN3PmAQQuswielLF3ueuPMpwifS1cKU6lQqtfXQl8HhL2GT1QNld8HBVaMjzCJQfEHHR4RODBv0%2F544OiCh7c6iQLgPVwRaigOgvEG6JWLRfdFC2DRUJJPHH6Ev%2F0NcZod7B%2F6h%2Fa2%2B0KBsMvc%2BRY55pDNGPPdwZ0OvkAqooKH2L%2BdZra3mAipWBerOI&X-Amz-Signature=c6566972ebfa869746bbc0eaf0daea04b3f2961472eafce8915233ccbce287ee&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJHKTWDU%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T220722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCIAQkibzbm84poVmY5THNEtK4%2BIpNlLseMCqZj3gfgundAiBsngakcpAIL479cuXxIe15pKxyQqfMO8NMULmdg6uaEir%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIM66hQxkyFcmimdHYRKtwDWTEQ9aq0DJ%2FJQkgRkhjRsXiTTm%2Fu0dQ%2Fw5L%2BThFs%2Bvn1l6EN%2Bkve%2BoRvL1oRuZ5fnhJRljmhAB1%2BGSbFofnJKpDbtXtZr0C0RykE%2B4c0LDIy3EnX99zVANJmMJ4KmFN158ClKkSRC%2BEheLMzfoCqehPqy2sLzSk%2BTv0s%2BZJENfQ%2FMi4ZLBygtdtQmL94b5sh85UrKK13Vsx%2Bd7t6RpiuQO3QPy5IB%2BhPselU4KQ8jAy60K6FW0I11Bfi0zov2rW%2BDU091luT87xLFPNqDaIC6cuvDVEdtNNWtqXD8fVZC2rDiim8oKsn5qmXbB3iFptbda2Wep17aMN%2BTqPxZXY9wntsEyp7XxVwMbV2zOuPhrx0P8bc7Tm7vDXBhExJVVagU4XHjMfrr0DCGjQzM0w4LCwhzcSZEKofFxHYwqfIffnQhwXvyEvVpM%2FHKHuEqGzCLntjsDlYPt0mzrKQmclD%2Bxz5nvO2TUAL0%2FT%2BGj1izUX4i%2FElCLKJvdemQDyiZmLfKvQB60vs%2F8J%2BxeIoufvbhIR3trlBx95EWwimEGp2PYe1TzA%2BzA6HsNoNBPx6f3heqqML60dzxe5j3PsH1ZPQZeT%2FQduXLGYrFlDocdbpQ4i4TfuNWSz2kLMNBBMwttnsvgY6pgF%2FDBOaUVyRt3oE%2FB0NpTm6QmA8J1auE%2FpTvN3PmAQQuswielLF3ueuPMpwifS1cKU6lQqtfXQl8HhL2GT1QNld8HBVaMjzCJQfEHHR4RODBv0%2F544OiCh7c6iQLgPVwRaigOgvEG6JWLRfdFC2DRUJJPHH6Ev%2F0NcZod7B%2F6h%2Fa2%2B0KBsMvc%2BRY55pDNGPPdwZ0OvkAqooKH2L%2BdZra3mAipWBerOI&X-Amz-Signature=74abb63b5e25e3182c150fc8c6b6cf15a4865490a89aafece1cc69a36b47ad91&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
