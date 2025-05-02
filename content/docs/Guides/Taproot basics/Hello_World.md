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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7IRC3U3%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T140810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJIMEYCIQCfquqqKjmfPluy6wMSjusnOt3Bh3o9DSsC3w%2FR12Ak%2BwIhAIo1xLcemUCXwLjKsQq1HSqvDlRULByYH487EderAfj4KogECNb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxRf0CpiODeC2U3v4sq3APJdxQGD0FWlUJ4MZw8FSCH%2BsSVvri51v7omtFMkKQ9dNauiCqNTnYC%2FUf77vvGgEFTonIzrb6HtoQ9AmEr0Rz201GQirfllbVRqqMMdVQC%2ByhjOPoSmGC6Pb01xX4pu669snxAKqG0Vq5yY3%2FAyU%2FhQzfEDpsisttzFvr%2Fo43Ojx3QgRJqA2R3TCc8U1koA3c8M4Jnpe11iIvBwsHYmkKjvTkghdZldgKQpWWC9mVFH%2FyTpkrd1%2FowWxc5%2FW1PbwRybhFAV3Pbie8ou6e%2FLt%2B98LluxOZj3aDarnh4aYo5VTjfyRnha7%2ByTSPGmfcFBHtzo%2F5eyBr%2BY9J1rJHxmhyqnW1mGu5%2BvCV0QU%2FRWgAM2hw0PNLHtE0GgWowNqKjjEIC0iqGUcH0WFKA1e6F0ux519qaL%2FHLFGdWR1LLfvhxXMa0Uumc6w%2FCW7%2FM0X0PxKHyboxD48mpxlXH8iPEOItHl6MQi%2BZnN6R4%2FKONaZ46aT90D%2Be4cvU9XMZcxqAEL34bhpIwTrirTfgliwDdxexfo461baaMlgGkC617YX2DyweuAjaf3szHOOXSGxBIyGoQbObYC3kE0hCIAN5f4l7IE4zhNq7rOOCTKLHsB%2Fm8Ef2m5ovFp%2Fl27Dt%2FrDCXjtPABjqkAVcKT8g1AbEga4sO3T9bQM0L7Qhzu4cquo%2BG9Uu6wi0EE%2FME2hQ%2FBYYtEE1glN1OCKIp5s%2FzD4fhrk3XXKV8xiECcUqRsTxAud%2FSe7K4%2BemqozLmkm6C6nHotXveET2p2HEO%2F6HXRJa4qZWirl33KgK1o5wVtX88qfLSPqH6SzkQz2ZK9xkCku4W%2FRJFlluSqQ7Z6oh8IWWGQ6pgKW7q6tUy19n%2B&X-Amz-Signature=dada34c96549cfde6d0f9d281e2ae6334eec10d7f50c9ff277b407bc3297c0bc&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7IRC3U3%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T140810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJIMEYCIQCfquqqKjmfPluy6wMSjusnOt3Bh3o9DSsC3w%2FR12Ak%2BwIhAIo1xLcemUCXwLjKsQq1HSqvDlRULByYH487EderAfj4KogECNb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxRf0CpiODeC2U3v4sq3APJdxQGD0FWlUJ4MZw8FSCH%2BsSVvri51v7omtFMkKQ9dNauiCqNTnYC%2FUf77vvGgEFTonIzrb6HtoQ9AmEr0Rz201GQirfllbVRqqMMdVQC%2ByhjOPoSmGC6Pb01xX4pu669snxAKqG0Vq5yY3%2FAyU%2FhQzfEDpsisttzFvr%2Fo43Ojx3QgRJqA2R3TCc8U1koA3c8M4Jnpe11iIvBwsHYmkKjvTkghdZldgKQpWWC9mVFH%2FyTpkrd1%2FowWxc5%2FW1PbwRybhFAV3Pbie8ou6e%2FLt%2B98LluxOZj3aDarnh4aYo5VTjfyRnha7%2ByTSPGmfcFBHtzo%2F5eyBr%2BY9J1rJHxmhyqnW1mGu5%2BvCV0QU%2FRWgAM2hw0PNLHtE0GgWowNqKjjEIC0iqGUcH0WFKA1e6F0ux519qaL%2FHLFGdWR1LLfvhxXMa0Uumc6w%2FCW7%2FM0X0PxKHyboxD48mpxlXH8iPEOItHl6MQi%2BZnN6R4%2FKONaZ46aT90D%2Be4cvU9XMZcxqAEL34bhpIwTrirTfgliwDdxexfo461baaMlgGkC617YX2DyweuAjaf3szHOOXSGxBIyGoQbObYC3kE0hCIAN5f4l7IE4zhNq7rOOCTKLHsB%2Fm8Ef2m5ovFp%2Fl27Dt%2FrDCXjtPABjqkAVcKT8g1AbEga4sO3T9bQM0L7Qhzu4cquo%2BG9Uu6wi0EE%2FME2hQ%2FBYYtEE1glN1OCKIp5s%2FzD4fhrk3XXKV8xiECcUqRsTxAud%2FSe7K4%2BemqozLmkm6C6nHotXveET2p2HEO%2F6HXRJa4qZWirl33KgK1o5wVtX88qfLSPqH6SzkQz2ZK9xkCku4W%2FRJFlluSqQ7Z6oh8IWWGQ6pgKW7q6tUy19n%2B&X-Amz-Signature=ee952f00ba9228e1e38a1e64177b81949e2e8f981b4073c4007085faef6ab77a&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
