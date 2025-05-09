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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZKSX4UL%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T230752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCiA446h2FXTP6T%2F15gVh73uba3%2FFDMbc%2Fn5itt66CFGQIhAJpIG%2BAH%2Bpmbg9YjOXw8K1N9GgQ41vxb5HYL931QmaqZKogECJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyPBvpySfP4YCMN9Jkq3ANsOGYToQX1aJ9kQU8Id7INnTRbleVDjewfpGNvERCYdzRlefp32nHW7SipbjSEdypIyHYxRLN%2Bf%2BTdg0epmt3FY27Qv36HeS6xgaWd8ua8r7hSCyH%2Bs1n21rwSzzQM7lydsG3ajFQyYOOuJIZT8RznZl3TzZrx9U0Ue0asJIBItpb3bW%2BAZxYEBUYHuhuv6tpAFXYDxYLCJbbMrPAOI7U8n8UP7rw%2FXftQVK12PxDHAdpSpGemzB9KPpBkw2IrSQSg6gzZWeLLGdFunFpWxOkmvGRO9uDAO%2BhSmVSW2Pc0rgACozOywKUDgXJF9Df3cFFPV3xTjzkKnYVXmKnjf5%2Fp26LSyU4pFnIeWudZKJDWTnu45G7MQ0Rh83kE9%2B41vCq4h81ned95zk4Be4YCLyEzQHug8Yf21aCFDzaPV%2BNR8YK7i%2BWgmw3pvSBAIw0yrh20KFmJcKNcv5cOPjCRXHKpKfJtUF1bYlRK9uvpY0HfIFeshPlMRubcpDe2mqwHrpyRNuAMBaKgduX2xI98ektoEUHZ3nSG7%2BC2Fs8MYu976u5G7pRhO3VmDS%2FbJFpFyFaX%2FMDjjtcRzFQvwlXkHRrPZyLazKAMeWhjVdJTz%2BdRT0s%2F%2BdXiDRLZBqOkXTCVgfrABjqkAXeCwnc%2FUxs4smH9SNU1DMwy8nZxWK9zRctqQuiJJGyKzgeZ8ESFQhAf0DLCM9oxYgqq8ef7%2F5I9tLWRcX23EfsWeZVh9HmzMxw8VA%2F7uqInRS7Kwde8t51Da7eAEBn4njIkGi1EvKb4EWtzdpnri%2FT9xobuEHRJmjH8NRB4HMiwnIV3dSZ0za5hurXVr57z9pR%2BA5NNMeozpBtbOcn96SESEfoF&X-Amz-Signature=403204b53f5cc3344dedb2f5e0e220ecc79d09643a9e70fae5440515a96b9a5e&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZKSX4UL%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T230752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCiA446h2FXTP6T%2F15gVh73uba3%2FFDMbc%2Fn5itt66CFGQIhAJpIG%2BAH%2Bpmbg9YjOXw8K1N9GgQ41vxb5HYL931QmaqZKogECJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyPBvpySfP4YCMN9Jkq3ANsOGYToQX1aJ9kQU8Id7INnTRbleVDjewfpGNvERCYdzRlefp32nHW7SipbjSEdypIyHYxRLN%2Bf%2BTdg0epmt3FY27Qv36HeS6xgaWd8ua8r7hSCyH%2Bs1n21rwSzzQM7lydsG3ajFQyYOOuJIZT8RznZl3TzZrx9U0Ue0asJIBItpb3bW%2BAZxYEBUYHuhuv6tpAFXYDxYLCJbbMrPAOI7U8n8UP7rw%2FXftQVK12PxDHAdpSpGemzB9KPpBkw2IrSQSg6gzZWeLLGdFunFpWxOkmvGRO9uDAO%2BhSmVSW2Pc0rgACozOywKUDgXJF9Df3cFFPV3xTjzkKnYVXmKnjf5%2Fp26LSyU4pFnIeWudZKJDWTnu45G7MQ0Rh83kE9%2B41vCq4h81ned95zk4Be4YCLyEzQHug8Yf21aCFDzaPV%2BNR8YK7i%2BWgmw3pvSBAIw0yrh20KFmJcKNcv5cOPjCRXHKpKfJtUF1bYlRK9uvpY0HfIFeshPlMRubcpDe2mqwHrpyRNuAMBaKgduX2xI98ektoEUHZ3nSG7%2BC2Fs8MYu976u5G7pRhO3VmDS%2FbJFpFyFaX%2FMDjjtcRzFQvwlXkHRrPZyLazKAMeWhjVdJTz%2BdRT0s%2F%2BdXiDRLZBqOkXTCVgfrABjqkAXeCwnc%2FUxs4smH9SNU1DMwy8nZxWK9zRctqQuiJJGyKzgeZ8ESFQhAf0DLCM9oxYgqq8ef7%2F5I9tLWRcX23EfsWeZVh9HmzMxw8VA%2F7uqInRS7Kwde8t51Da7eAEBn4njIkGi1EvKb4EWtzdpnri%2FT9xobuEHRJmjH8NRB4HMiwnIV3dSZ0za5hurXVr57z9pR%2BA5NNMeozpBtbOcn96SESEfoF&X-Amz-Signature=94f94b94dd353d258dc2a34e9ae35ef6d10f8b5b654423378e8a08e32606be90&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
