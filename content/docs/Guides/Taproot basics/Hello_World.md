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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJVGHCUU%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T190912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJIMEYCIQDkPsnF3a%2FnW1bXJbE8Evtb810l66i5jUejxTxKOUTssgIhAIOF3cx7UPVMaU0%2B1ggQgBvznoQ53uFL26Ih7d3V7dcYKv8DCEwQABoMNjM3NDIzMTgzODA1IgyFGU0XuzVO95neH%2Bcq3ANI5Gvam7FOoyavgGErUVlKVoyueFlUt0ZtQfrg07%2F83qFHzLkSiMPQ8H86hoe4ywN7FQbuDeo1SumEGd3GmaRlVE6WOT8WIq%2BBef22qejsANG%2FSGkhjiYfSfm%2BaiLyyAOdN06h25XkEo4hb2YJN9UcT5Ell8jR7%2FA7EKL2WQA2bifvtyFDaIlf6p2SIDDfSZ66EJCWwQUHS322XtrADpW7ADA0Ls47j%2FQ8KMtjH54HzownhsW3cSwAlfeEbbId4kxsbOHBksFp1U1UAyMJFrO14W81zEg4oHuqWJKif4lAYSkf7ZXWUfRkAnNTqAGmyqBWLpokHzdR303jlSKomUZjTLp%2BCLjo5D83Y%2BLKfheC0q8ytQcHcVG6qwyOOQcQFR6BTBfreiRrinQp2jpmwKILTQ5hGP233PgIp9%2BYUjGuTpZXjPjuNPjxiYHu51m%2BBS%2BPXWKqcjZvvrbW8LKBB7yci32iIQt4HB2bV1Idhn8v4VkkYae33K%2BD9SdN95pBmY5vCDEHCu1gZV3ik3ZnL5tNlMD8Jad5%2BWUGl6h6iU2XDWCiEHd8yjPIuvN0z7gPqxUd6B9XV%2FFe%2F4VPEb011rxSN0Gtt2jGqj1Z8YlDD8gXRNxJcqcZNBfrJRU6aDCjqo%2FEBjqkAa3qeylDw6plESpEWFe%2FMIK4TCpdHD%2B3avEELTRn1AKsIxSgIvmWppWSjKquMEy8oM%2Bsk0VNfqrVb4zpUPjv8vR2ELpAZXOZFld1xw5QYY269%2FwXtgP0cCsOijYPaFQmcFLOkgk3ECa%2BirB6heROXYcJIeKg2QG8Khh4yxjZqqH4wzI8UTIY2jvDv3NWS%2B6HXiksXkCP0E3UHUtlsjBHqzediIyR&X-Amz-Signature=c2215b974f350e3f878da0aefa3218e63ab9d51eb37ef1fcc1e003a8e0d1f564&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJVGHCUU%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T190912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJIMEYCIQDkPsnF3a%2FnW1bXJbE8Evtb810l66i5jUejxTxKOUTssgIhAIOF3cx7UPVMaU0%2B1ggQgBvznoQ53uFL26Ih7d3V7dcYKv8DCEwQABoMNjM3NDIzMTgzODA1IgyFGU0XuzVO95neH%2Bcq3ANI5Gvam7FOoyavgGErUVlKVoyueFlUt0ZtQfrg07%2F83qFHzLkSiMPQ8H86hoe4ywN7FQbuDeo1SumEGd3GmaRlVE6WOT8WIq%2BBef22qejsANG%2FSGkhjiYfSfm%2BaiLyyAOdN06h25XkEo4hb2YJN9UcT5Ell8jR7%2FA7EKL2WQA2bifvtyFDaIlf6p2SIDDfSZ66EJCWwQUHS322XtrADpW7ADA0Ls47j%2FQ8KMtjH54HzownhsW3cSwAlfeEbbId4kxsbOHBksFp1U1UAyMJFrO14W81zEg4oHuqWJKif4lAYSkf7ZXWUfRkAnNTqAGmyqBWLpokHzdR303jlSKomUZjTLp%2BCLjo5D83Y%2BLKfheC0q8ytQcHcVG6qwyOOQcQFR6BTBfreiRrinQp2jpmwKILTQ5hGP233PgIp9%2BYUjGuTpZXjPjuNPjxiYHu51m%2BBS%2BPXWKqcjZvvrbW8LKBB7yci32iIQt4HB2bV1Idhn8v4VkkYae33K%2BD9SdN95pBmY5vCDEHCu1gZV3ik3ZnL5tNlMD8Jad5%2BWUGl6h6iU2XDWCiEHd8yjPIuvN0z7gPqxUd6B9XV%2FFe%2F4VPEb011rxSN0Gtt2jGqj1Z8YlDD8gXRNxJcqcZNBfrJRU6aDCjqo%2FEBjqkAa3qeylDw6plESpEWFe%2FMIK4TCpdHD%2B3avEELTRn1AKsIxSgIvmWppWSjKquMEy8oM%2Bsk0VNfqrVb4zpUPjv8vR2ELpAZXOZFld1xw5QYY269%2FwXtgP0cCsOijYPaFQmcFLOkgk3ECa%2BirB6heROXYcJIeKg2QG8Khh4yxjZqqH4wzI8UTIY2jvDv3NWS%2B6HXiksXkCP0E3UHUtlsjBHqzediIyR&X-Amz-Signature=83ce252c0133f68d72f69bb80be6e46a03d432bcd734d9bc22f841d18a4040b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
