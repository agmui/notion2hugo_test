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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5MG5S2F%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T030612Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH3OzxHSqDC62fpklfQS66jyio%2FsTFhPrm3fjmby7l8NAiBme0xnOD3Z71v4yTnriKGFkIGJA8UNWm7J1HZHKLptOSqIBAjk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9ey%2FzP6%2FycrhYAxlKtwDFdL2nDPe2f2dyBUp5pQmmAFPFnbzWeByXvt9mgZYGVEI%2BSJqW8D9rr2X1PGQ29tKHxlRFbMnWxQjixwP%2B6acfONFG6fi9ER1D30RsjyaAE8%2BNSFjdHYtVQe2N1b5JRT9QjGveS2D597IwhjDWy2eZGUED2Eyv46GtYGBl%2FD7zQDLdWVIUm%2F9Pac9cLSaTO50wZIkBgSjkovoJBldgaFIlW%2FGp6AqhBx7IXfDJSW%2FOTLIhUV5GwBMkhSilnxpL%2BDnIOyH0Qr8mFALMWC0PyoW1ejvc9dpQ7lFvs4KEWG%2Bt7K0BopkJuQUMAqnwD9AfJLmx70iZVN8KnhWoX2lkc%2Fzdey1snFFddaFt%2Fzf%2BkbmmS0DuPI3RkK56Rw791VMRdM575u1FUlYfkeJSNZE9g2kH2Je4S3mL%2BD%2BpMFZ9RbaA2YbNvES%2BkOEp%2BoxvsyMtjc5Atch4o5pmjmR4nxmFNJAMZIUNeZFjlsJgNrtpGlOKuz5JFbcqWpPV4NGzO9HHvh4yGwSOW%2FYIZtgNxTmvshMhspuPorp0ff6A944Frtb1QEFen8J2VeUTNnchOHiqItVQ%2BRh4y6NddfZ41elh4zKfapyceS2ujAY1P%2BXvGWFueWH0bCoGAL1JU8NtIswpcuwxAY6pgE8g%2BfNBnUsyQoO4qA3EPX3Pz%2BeLriW7S77wGdIIC3LteeXMJh6V9Ad9AZ%2FHdIkNjwvPH3ClRojuiE%2FhaR7LfJgLwlrRBaxs7bp7AiZHtinMl5JtDm4rQyzMH5k8qOrl7JuW2MVr8htPZUxe15LsV6qyFlO%2FIMEwQSzVrLC6de%2BkCsgYfTLPPqO%2B1KYCYryjOg%2F7LPRPqT61nPXCdhv6ktImoDh8XfL&X-Amz-Signature=8c57b1ec545922960d02ed53f17b2ebddd251dbf0378cc96287eef5122b7e5f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5MG5S2F%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T030612Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH3OzxHSqDC62fpklfQS66jyio%2FsTFhPrm3fjmby7l8NAiBme0xnOD3Z71v4yTnriKGFkIGJA8UNWm7J1HZHKLptOSqIBAjk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9ey%2FzP6%2FycrhYAxlKtwDFdL2nDPe2f2dyBUp5pQmmAFPFnbzWeByXvt9mgZYGVEI%2BSJqW8D9rr2X1PGQ29tKHxlRFbMnWxQjixwP%2B6acfONFG6fi9ER1D30RsjyaAE8%2BNSFjdHYtVQe2N1b5JRT9QjGveS2D597IwhjDWy2eZGUED2Eyv46GtYGBl%2FD7zQDLdWVIUm%2F9Pac9cLSaTO50wZIkBgSjkovoJBldgaFIlW%2FGp6AqhBx7IXfDJSW%2FOTLIhUV5GwBMkhSilnxpL%2BDnIOyH0Qr8mFALMWC0PyoW1ejvc9dpQ7lFvs4KEWG%2Bt7K0BopkJuQUMAqnwD9AfJLmx70iZVN8KnhWoX2lkc%2Fzdey1snFFddaFt%2Fzf%2BkbmmS0DuPI3RkK56Rw791VMRdM575u1FUlYfkeJSNZE9g2kH2Je4S3mL%2BD%2BpMFZ9RbaA2YbNvES%2BkOEp%2BoxvsyMtjc5Atch4o5pmjmR4nxmFNJAMZIUNeZFjlsJgNrtpGlOKuz5JFbcqWpPV4NGzO9HHvh4yGwSOW%2FYIZtgNxTmvshMhspuPorp0ff6A944Frtb1QEFen8J2VeUTNnchOHiqItVQ%2BRh4y6NddfZ41elh4zKfapyceS2ujAY1P%2BXvGWFueWH0bCoGAL1JU8NtIswpcuwxAY6pgE8g%2BfNBnUsyQoO4qA3EPX3Pz%2BeLriW7S77wGdIIC3LteeXMJh6V9Ad9AZ%2FHdIkNjwvPH3ClRojuiE%2FhaR7LfJgLwlrRBaxs7bp7AiZHtinMl5JtDm4rQyzMH5k8qOrl7JuW2MVr8htPZUxe15LsV6qyFlO%2FIMEwQSzVrLC6de%2BkCsgYfTLPPqO%2B1KYCYryjOg%2F7LPRPqT61nPXCdhv6ktImoDh8XfL&X-Amz-Signature=3c6fa15d0d6c78231a6fdc36b635ba237ef1e904bb89c6b7754b4eae94dfd111&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
