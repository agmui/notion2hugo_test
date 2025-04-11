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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7474YY5%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T150838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJGMEQCIAPByFJJvv%2FOhNphY7eBRoLZk2KykKSE7czHRsZBxG%2BWAiAO2w3F5GCkal8xgThz9O10XLgi4c%2FVxdCMEuO0HJ1RHiqIBAjA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuTN4ejB2uLnVvz1RKtwDvsuF9hsLKnE1MA2VzFJyPFKeJdCBp1AWKy8oD9Y9o9ytXiXlGxU3ComKxCQ83L6u9ET2TH0Wk%2BYLSNilZhtZpF46TTYDHnkJ%2BSiJueXwj3RfsWOoxiXuXEFxfBlrk0Dzky8bnipgt2XslH9%2FFReeD218vl8GSw3h2sXqVcKmb1tQUe%2BKLM7WlE9vUhGfzrqT1dyNhKOC915%2BrObygkPQ6exbcr%2BHvsfg%2BVyxYvCRPJ%2Fxu3E4pYdEZfioIPQ9%2B152mFTqmqyan5bmH%2FIeTxY2MqlC3mJL8ihXUuMiKPAt9iDFXHebhPbJM8DMqHPvEvGAV0EWeCusgpiD2H1wU5PtyyiRbr3i7bDP7f7oCYNp%2B3H6b6ZExHD%2BlkebG0oY8Gq1A69L0WjMfDQkRA0efF%2FuCRPuecjZJ3tOxcYJWlK1KfWFBtbaLDcnbbnJpIx7YUcWbnuibPRQd2I8iCA%2BS4DpJgibD3yXae1nf%2B81IRlpNgEp9363GvOtERNTjkjCTITe0X3tVMR2Ogmy5qVf5Qjz5A%2F8Kv6lyshZR95PjGplOunfyNM3r4GTlcgwctIlUZjQQnvvRAgdTzKqSTmNMqdh1yfw9%2FSVrQkiVotlsVO%2FbGiijyBDKK53NBDeYu4wwM%2FkvwY6pgFJlAD%2B5xlHI01ThPJtYK4pxzmRPZAwAsHS9SQMIrumujWKQ9mcF4EPw5Rn%2BZKiYLfom17eONqhXkJIBUI9aBpIoDHiPuJpCRjhsg95PhnDuj0UgFN3e5VZMp3XYigAGp27rSwShu1%2FeLKykUrt4ia%2Fo8UqlegmEL2NIC2qY0QRGemO%2FsCG6oy3dsYRLU6QGii8fLQigXmbmCUub5hdMjK8%2BxDLpv0t&X-Amz-Signature=875a7a234901d8a236486554ab82ff0305808e281f13f5b2a00cec963051c300&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7474YY5%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T150838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJGMEQCIAPByFJJvv%2FOhNphY7eBRoLZk2KykKSE7czHRsZBxG%2BWAiAO2w3F5GCkal8xgThz9O10XLgi4c%2FVxdCMEuO0HJ1RHiqIBAjA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuTN4ejB2uLnVvz1RKtwDvsuF9hsLKnE1MA2VzFJyPFKeJdCBp1AWKy8oD9Y9o9ytXiXlGxU3ComKxCQ83L6u9ET2TH0Wk%2BYLSNilZhtZpF46TTYDHnkJ%2BSiJueXwj3RfsWOoxiXuXEFxfBlrk0Dzky8bnipgt2XslH9%2FFReeD218vl8GSw3h2sXqVcKmb1tQUe%2BKLM7WlE9vUhGfzrqT1dyNhKOC915%2BrObygkPQ6exbcr%2BHvsfg%2BVyxYvCRPJ%2Fxu3E4pYdEZfioIPQ9%2B152mFTqmqyan5bmH%2FIeTxY2MqlC3mJL8ihXUuMiKPAt9iDFXHebhPbJM8DMqHPvEvGAV0EWeCusgpiD2H1wU5PtyyiRbr3i7bDP7f7oCYNp%2B3H6b6ZExHD%2BlkebG0oY8Gq1A69L0WjMfDQkRA0efF%2FuCRPuecjZJ3tOxcYJWlK1KfWFBtbaLDcnbbnJpIx7YUcWbnuibPRQd2I8iCA%2BS4DpJgibD3yXae1nf%2B81IRlpNgEp9363GvOtERNTjkjCTITe0X3tVMR2Ogmy5qVf5Qjz5A%2F8Kv6lyshZR95PjGplOunfyNM3r4GTlcgwctIlUZjQQnvvRAgdTzKqSTmNMqdh1yfw9%2FSVrQkiVotlsVO%2FbGiijyBDKK53NBDeYu4wwM%2FkvwY6pgFJlAD%2B5xlHI01ThPJtYK4pxzmRPZAwAsHS9SQMIrumujWKQ9mcF4EPw5Rn%2BZKiYLfom17eONqhXkJIBUI9aBpIoDHiPuJpCRjhsg95PhnDuj0UgFN3e5VZMp3XYigAGp27rSwShu1%2FeLKykUrt4ia%2Fo8UqlegmEL2NIC2qY0QRGemO%2FsCG6oy3dsYRLU6QGii8fLQigXmbmCUub5hdMjK8%2BxDLpv0t&X-Amz-Signature=16efb3489669f41c1643ba360d1e3af555d6eaadbd584f535a1b5b435d0c083a&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
