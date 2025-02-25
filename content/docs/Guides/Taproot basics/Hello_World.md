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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KPQ2PSR%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T040951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJIMEYCIQCMeaBy5CMLcC1StPilWdjnrz2y4CrV3iEhw6IzgwqHfwIhANzozDwjAXwhfo9PjBolrhPCT6nfwmGOQwogYh1dAzjlKv8DCDkQABoMNjM3NDIzMTgzODA1Igwu67yJdSVX0Akk4HUq3AOgjUX6R%2FGmtWbXOe%2FBLs%2F7rBQ4A%2FeOkc%2FhFrCB2IZJUDzrzAqAeXYFv%2Fk05jq0ims5vQ4FJIfjSl%2FlIUJ%2F4QWF7kIHgK7Ng80axFAgjRgKtP5vmEvA337lEwJteZGYF0QfN95XMmqWQyTHO9xrnwuXgVsSCPSVwKGID9cS1a6qq3z47MSCOPhh%2BrhqDERAc5RA3vhP7Tx5XRfM%2B4KRI3bC%2B0bi%2Fax%2FIGZDIQxEugaOsXDgVlJM4K3%2BW0RCXFUvNdm%2Fhbc%2F9ukNcTXWxpWh2cVilx5k3567vPExxMxIVVQS9Vwp0526XpjBHkxfO6SoTZFXnEwU6YvlmChLRlWF07O3ldK%2Bcad%2FOJRWIUK6GCFy3CS54oYI0Iz3ym7kjnewmOAL8M168u2LHcLnGidU6%2BGeGc7hfK9ssxTSpXnFL1nr1h6HiWOE8MdXxvFoAlZ0YPoZXGRYyCqLP5A7%2FflTnUgD0EjLMVizjG8V3h968N9kgwjneQZ3uoF%2FSg%2BUyTGTOSLIbRPv2HzulRX12UHPAe7GRMfY1u7f1fw%2BZGK%2Bs3RxMut58WDeuaGoxP53Ona4MgE61xM3Tc3rrJQsX%2B7rYAUk0FIHEuSsm27IJOB4N3wf2WJkakMCDT7stlICDjCTg%2FS9BjqkAeUVk%2F3sifJtzX6L1x%2FDG7sF6XUb8MSfqw3L0AidupWgp599hTuyUfkozUBusxaOUcNAw7bWkhIvuxlEa%2BCTNatbQ4dTfKhf4TW7oMomMhgRuATuaL%2BUNQVnM1ae9MdptxoKRDfCXUk63sjK3HUFrNuwjOxIwCgi4LdABxihViCoRq7rId8cmVey1eZ6W3nrb90P%2BJ0GDGkGVWR6RxisMHMIFn2y&X-Amz-Signature=854314cb80de51def2315000450bc1e3b48c36bfb97bb01afacbad7eb68a84d4&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KPQ2PSR%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T040951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJIMEYCIQCMeaBy5CMLcC1StPilWdjnrz2y4CrV3iEhw6IzgwqHfwIhANzozDwjAXwhfo9PjBolrhPCT6nfwmGOQwogYh1dAzjlKv8DCDkQABoMNjM3NDIzMTgzODA1Igwu67yJdSVX0Akk4HUq3AOgjUX6R%2FGmtWbXOe%2FBLs%2F7rBQ4A%2FeOkc%2FhFrCB2IZJUDzrzAqAeXYFv%2Fk05jq0ims5vQ4FJIfjSl%2FlIUJ%2F4QWF7kIHgK7Ng80axFAgjRgKtP5vmEvA337lEwJteZGYF0QfN95XMmqWQyTHO9xrnwuXgVsSCPSVwKGID9cS1a6qq3z47MSCOPhh%2BrhqDERAc5RA3vhP7Tx5XRfM%2B4KRI3bC%2B0bi%2Fax%2FIGZDIQxEugaOsXDgVlJM4K3%2BW0RCXFUvNdm%2Fhbc%2F9ukNcTXWxpWh2cVilx5k3567vPExxMxIVVQS9Vwp0526XpjBHkxfO6SoTZFXnEwU6YvlmChLRlWF07O3ldK%2Bcad%2FOJRWIUK6GCFy3CS54oYI0Iz3ym7kjnewmOAL8M168u2LHcLnGidU6%2BGeGc7hfK9ssxTSpXnFL1nr1h6HiWOE8MdXxvFoAlZ0YPoZXGRYyCqLP5A7%2FflTnUgD0EjLMVizjG8V3h968N9kgwjneQZ3uoF%2FSg%2BUyTGTOSLIbRPv2HzulRX12UHPAe7GRMfY1u7f1fw%2BZGK%2Bs3RxMut58WDeuaGoxP53Ona4MgE61xM3Tc3rrJQsX%2B7rYAUk0FIHEuSsm27IJOB4N3wf2WJkakMCDT7stlICDjCTg%2FS9BjqkAeUVk%2F3sifJtzX6L1x%2FDG7sF6XUb8MSfqw3L0AidupWgp599hTuyUfkozUBusxaOUcNAw7bWkhIvuxlEa%2BCTNatbQ4dTfKhf4TW7oMomMhgRuATuaL%2BUNQVnM1ae9MdptxoKRDfCXUk63sjK3HUFrNuwjOxIwCgi4LdABxihViCoRq7rId8cmVey1eZ6W3nrb90P%2BJ0GDGkGVWR6RxisMHMIFn2y&X-Amz-Signature=e72a1235a9ba5073ac630b6afa8a6fc853abd1a6318b88935260f6c34edc6f72&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
