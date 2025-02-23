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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUSUG6D3%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T080930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCvJP2GeBuEVU%2F8T4Hr%2FZ%2FaiKvauf2zdJGf5eqoGOQ37wIhAMk%2FI1RV%2B%2FMb6QwdJ94aP0OwQU1Gub9%2FW2%2FNB8asfY58KogECP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxedh%2BGxnPzWy3%2FxLsq3AOP7xESrdRahZfwEFpGwDRxxcKrcvNe9ZUPlm2AtZGb0cTaxIAQnHFNKM%2Br1PvDpgsHn1hMXekN%2BTlmeOn8UaezeFdhJx4lGDIy%2FgPwHhycgPKkRCZO5AsgQTxPNKFbH0cWpotHP88noKaUxIM8jebCUNVhRZkCev95GbvRP%2FQvqwCbMA4wfDjFbJSygffzlqQGJ1IhBeQvIr6W0%2Bh%2FZBbxifUVlhuiuc0eK1qUJ4W5Jc%2FIR5jTJWG53JPddS1rteqJMPMuQqJaJHd%2By7NVba0SXy9Q3A4Hts6LlqgdEnfqgDlJiLDmI72M7p%2Bt4%2Fb52tNXzyxd8irpPsNlDaOJm6EdD9oAzfrXqywZRihV01N1GxtH3bL2Tnkv4VH07L31uvknPz%2FcVqPWik0xkQVxckQF0OG1v9SNICDvJglQ3CeWULqLk3YL%2F7MUKUrUN0cMPulj1IgsZaJkg8f1MWQH3d7m%2FDHPtWxj4qm0i31E7K0kKbvvRM9h2BhvS4AdXiY7w%2B51RQIbLnIVa5qByEyv01yYYZl3HhHzQhsP5RlVBUETd%2BxSCDXVN7bCInxQOW01yfGm52f1EY7FW%2BJJrPInZCui8GJQ0JKaQB3%2BscbpIeY387yBJZ1U%2F4k4IqB3KTCB1eq9BjqkAQcmWlDLLUwax7Q8FrpstN3jk6JrNbpwozTjKBdEy%2FaX7DYiB0K50xJN%2FMHzdcwO0iUe2jyGazGPXK8Qfo3Lxh5yKco%2BisBqctgOw9U%2Ft9s1t9CE9kn8L9Iz5ZnX6zLc%2B6Bv5sJ3yejr%2FNit9Ew8%2BKtYtN1cp2I060MJM8dRf5CeLeyKLz3CJCJMS0VRMkiNfL7syeo75ez8SHfONDyjr4ekuzhw&X-Amz-Signature=5f34a2790ae789da6b13b5ff74a111e337d606e6aefc9781f9645d31ee39fe22&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUSUG6D3%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T080930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCvJP2GeBuEVU%2F8T4Hr%2FZ%2FaiKvauf2zdJGf5eqoGOQ37wIhAMk%2FI1RV%2B%2FMb6QwdJ94aP0OwQU1Gub9%2FW2%2FNB8asfY58KogECP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxedh%2BGxnPzWy3%2FxLsq3AOP7xESrdRahZfwEFpGwDRxxcKrcvNe9ZUPlm2AtZGb0cTaxIAQnHFNKM%2Br1PvDpgsHn1hMXekN%2BTlmeOn8UaezeFdhJx4lGDIy%2FgPwHhycgPKkRCZO5AsgQTxPNKFbH0cWpotHP88noKaUxIM8jebCUNVhRZkCev95GbvRP%2FQvqwCbMA4wfDjFbJSygffzlqQGJ1IhBeQvIr6W0%2Bh%2FZBbxifUVlhuiuc0eK1qUJ4W5Jc%2FIR5jTJWG53JPddS1rteqJMPMuQqJaJHd%2By7NVba0SXy9Q3A4Hts6LlqgdEnfqgDlJiLDmI72M7p%2Bt4%2Fb52tNXzyxd8irpPsNlDaOJm6EdD9oAzfrXqywZRihV01N1GxtH3bL2Tnkv4VH07L31uvknPz%2FcVqPWik0xkQVxckQF0OG1v9SNICDvJglQ3CeWULqLk3YL%2F7MUKUrUN0cMPulj1IgsZaJkg8f1MWQH3d7m%2FDHPtWxj4qm0i31E7K0kKbvvRM9h2BhvS4AdXiY7w%2B51RQIbLnIVa5qByEyv01yYYZl3HhHzQhsP5RlVBUETd%2BxSCDXVN7bCInxQOW01yfGm52f1EY7FW%2BJJrPInZCui8GJQ0JKaQB3%2BscbpIeY387yBJZ1U%2F4k4IqB3KTCB1eq9BjqkAQcmWlDLLUwax7Q8FrpstN3jk6JrNbpwozTjKBdEy%2FaX7DYiB0K50xJN%2FMHzdcwO0iUe2jyGazGPXK8Qfo3Lxh5yKco%2BisBqctgOw9U%2Ft9s1t9CE9kn8L9Iz5ZnX6zLc%2B6Bv5sJ3yejr%2FNit9Ew8%2BKtYtN1cp2I060MJM8dRf5CeLeyKLz3CJCJMS0VRMkiNfL7syeo75ez8SHfONDyjr4ekuzhw&X-Amz-Signature=62c14f845ba84842290e9005601c0381c56aa3cebf02c0eec1b3edba203763f3&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
