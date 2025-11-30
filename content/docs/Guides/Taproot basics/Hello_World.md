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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYFRNHKT%2F20251130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251130T014900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJIMEYCIQC%2BeRhrEIVPdus56SNp5c1C80wj1BDEeQBripaiCC4Y8gIhAOzVzESaoiNLBODC83yem1eNziEhhTGC7X2LngBI9QylKogECNb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxF1hJAPr0QwbciWmQq3ANgvqWgzKxfOAAc8HW8AixBpsAojQD%2FGIMHak7WeI4uhxcyTUuJseM3hPXjV%2Ff%2FIdKYc2iuVp5kdiqK%2FiymWbYcbhSadVwwuhF4hpq5nsxwNxlvv61KzOFiD%2BN6qYpnxXoSSUffS7VKON9x0ZPsSRrgVJkvivNywRxBorG3epoZbP%2FI0hdkAhKnd9Pr7MYCHPQ7RbNsG8wcqcIYwOGIi%2F3IpqGXzMd%2FfBhs66tQu2nHADHQUnChFml8jLuzLbO3381I0C94nltUk1Cl8x%2FEo5N5XOXwvkDgxNcErBCCjIG6SHO%2Be%2FN%2BpFhoHPeJsCbcWou3FEbh%2FlCFhg2scq6ksaxTlBodSEgFbIQKlLJc5KkhgvGVVWFt3cgWNOc3%2FLIL6vebD%2Bi68pXafcwu7RdVGUXBSUMHwc2dC6Rg%2BSdyBQf7nP3UahHcCAHoJJuC95fU4W%2Bh4FfdWanbfh9TDWq1%2BIAqzr2yLziw05hc4ybtMuxItErOhpUJX6ovnx7ORnpFmaQ%2B2bFad3L3dCdet4EvCH8B7Dzx6%2F2goiCNAD51Q1yD5r1WUFpE81fKukHViklz%2B3mGAONaSnfSsKOdrOQfz32XD4jB8ZBRaTml6hwfEnLqyVMxlN9xY%2BlYafqT4DCFyq3JBjqkAfUOAuYNy163QPWFm02tL6AkpYyFTMLECzrqnmq%2Bn83Qp2sttCWzJ75QdlAbtLgYykPWoWD5UaOSbIUMe0KcKKldJphbMvoRg2YJcopidtwpEUpI05HCCil%2BeRlR0l1hr7xBdfnJ7ug41wFKHNk6CqmfpEDZVoRZ5kv2K%2BUL8rd%2F4IsAK0hPweBg99jeQHJfhFKUDVKnossqnWxCaviyevi6YkoE&X-Amz-Signature=1869ebcc32853c7022c49b2c6302aadcdecaf31ab2ad2617be9b9537c5ae874e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYFRNHKT%2F20251130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251130T014900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJIMEYCIQC%2BeRhrEIVPdus56SNp5c1C80wj1BDEeQBripaiCC4Y8gIhAOzVzESaoiNLBODC83yem1eNziEhhTGC7X2LngBI9QylKogECNb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxF1hJAPr0QwbciWmQq3ANgvqWgzKxfOAAc8HW8AixBpsAojQD%2FGIMHak7WeI4uhxcyTUuJseM3hPXjV%2Ff%2FIdKYc2iuVp5kdiqK%2FiymWbYcbhSadVwwuhF4hpq5nsxwNxlvv61KzOFiD%2BN6qYpnxXoSSUffS7VKON9x0ZPsSRrgVJkvivNywRxBorG3epoZbP%2FI0hdkAhKnd9Pr7MYCHPQ7RbNsG8wcqcIYwOGIi%2F3IpqGXzMd%2FfBhs66tQu2nHADHQUnChFml8jLuzLbO3381I0C94nltUk1Cl8x%2FEo5N5XOXwvkDgxNcErBCCjIG6SHO%2Be%2FN%2BpFhoHPeJsCbcWou3FEbh%2FlCFhg2scq6ksaxTlBodSEgFbIQKlLJc5KkhgvGVVWFt3cgWNOc3%2FLIL6vebD%2Bi68pXafcwu7RdVGUXBSUMHwc2dC6Rg%2BSdyBQf7nP3UahHcCAHoJJuC95fU4W%2Bh4FfdWanbfh9TDWq1%2BIAqzr2yLziw05hc4ybtMuxItErOhpUJX6ovnx7ORnpFmaQ%2B2bFad3L3dCdet4EvCH8B7Dzx6%2F2goiCNAD51Q1yD5r1WUFpE81fKukHViklz%2B3mGAONaSnfSsKOdrOQfz32XD4jB8ZBRaTml6hwfEnLqyVMxlN9xY%2BlYafqT4DCFyq3JBjqkAfUOAuYNy163QPWFm02tL6AkpYyFTMLECzrqnmq%2Bn83Qp2sttCWzJ75QdlAbtLgYykPWoWD5UaOSbIUMe0KcKKldJphbMvoRg2YJcopidtwpEUpI05HCCil%2BeRlR0l1hr7xBdfnJ7ug41wFKHNk6CqmfpEDZVoRZ5kv2K%2BUL8rd%2F4IsAK0hPweBg99jeQHJfhFKUDVKnossqnWxCaviyevi6YkoE&X-Amz-Signature=a2d78cf227614ca9b198aa1d917b1b96e319861499f39d72e8b2c5a04c428f0c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
