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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWKLTK26%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T190659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIG%2FEbPfXpdRfOU6Ws60OZtu5uUbRmZgPWHAModmNjDMtAiEA3589oLbCLK%2B5v7ReQiUPQvKgYg1dRXvSRlJ0zJg5A%2BYq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDJWNZjUMYEbPNNzVgircA7SkamGF1QW0BdKBOI9gsl1nvXAUAjeuXyg1%2F4BUHe5muhBZF5dW4mZH6vYVSZWeOVJ6Xb8SZKZg%2BIPuvV6NMljsIaC5HetcsYboclhGiIvZL0CL%2FN25jmRrMdJngFthi7goe98G2ZtN%2Fr6eRKy7S1R47%2FZGARgyR4p4f2kGZTtlQyM4ZNWWMjtfNGILajKgE%2BwAQyVonT49BswQxlz7zyJyQoyEMFOk8dlPb3a3l7rQXPGKIQ6HsZH1aPSwlsrPzXM0hcqRfY%2BhzIWR00%2B%2Bv2N78IXbNZ0TFy64BFJEzpXIPREfsYvuMdX46ZecOFVintNSmni9QTAX5gixLWt7yFX4%2B5Zq3EYX6cvKSFtnOR0iYrFC6jNhR65G4UOA4GzhOuqh5aC0y4BfYYo0XjYtVrq3f4zipJdfLHIeqJHR4J5hJjeE1aTq4W2pjYfV%2FHSfwx6ChsjFpQPwH02mHSAzGgEfr7785%2Fokp%2ByZuYkoFEQujlxmjpJph4FjQqpoUF9SvtavSrjHE3gPK45IdQk41rYXxDzxM3GcfC%2FhXzmbc0z3MB0GBnt12e2vdy1fNe6QuIwf3XY5viNGahczgJORt9QGIt2PkKGGCmRdsYeYY3vBhgthfrtSeKsYmYGzMNnSscIGOqUBPTEZeXUAA6RX%2B29g6MmhUF3hnS3hCO7%2F6zPSy3p33%2Bn5UsAOi9i2rk%2FAWJQ7H1pKEDSjMyClx9i5yYegyjOFl5vRYaozrxWt%2Fr05aFYoxZXvULrmES9XMlHUDwSvyrInA5k3wZJcAxipdYtEEiIlWNfJYTZRVKr6in3YaI6uJ0yhhPHbnclqK2Kp%2FzoCokOuuPyvwfmyFME9QEfgcEnV9QDJhoHq&X-Amz-Signature=5b13567f4dc38c14ee6ca55066116b599b6045fbe27c8ab465726675cf880c9a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWKLTK26%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T190659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIG%2FEbPfXpdRfOU6Ws60OZtu5uUbRmZgPWHAModmNjDMtAiEA3589oLbCLK%2B5v7ReQiUPQvKgYg1dRXvSRlJ0zJg5A%2BYq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDJWNZjUMYEbPNNzVgircA7SkamGF1QW0BdKBOI9gsl1nvXAUAjeuXyg1%2F4BUHe5muhBZF5dW4mZH6vYVSZWeOVJ6Xb8SZKZg%2BIPuvV6NMljsIaC5HetcsYboclhGiIvZL0CL%2FN25jmRrMdJngFthi7goe98G2ZtN%2Fr6eRKy7S1R47%2FZGARgyR4p4f2kGZTtlQyM4ZNWWMjtfNGILajKgE%2BwAQyVonT49BswQxlz7zyJyQoyEMFOk8dlPb3a3l7rQXPGKIQ6HsZH1aPSwlsrPzXM0hcqRfY%2BhzIWR00%2B%2Bv2N78IXbNZ0TFy64BFJEzpXIPREfsYvuMdX46ZecOFVintNSmni9QTAX5gixLWt7yFX4%2B5Zq3EYX6cvKSFtnOR0iYrFC6jNhR65G4UOA4GzhOuqh5aC0y4BfYYo0XjYtVrq3f4zipJdfLHIeqJHR4J5hJjeE1aTq4W2pjYfV%2FHSfwx6ChsjFpQPwH02mHSAzGgEfr7785%2Fokp%2ByZuYkoFEQujlxmjpJph4FjQqpoUF9SvtavSrjHE3gPK45IdQk41rYXxDzxM3GcfC%2FhXzmbc0z3MB0GBnt12e2vdy1fNe6QuIwf3XY5viNGahczgJORt9QGIt2PkKGGCmRdsYeYY3vBhgthfrtSeKsYmYGzMNnSscIGOqUBPTEZeXUAA6RX%2B29g6MmhUF3hnS3hCO7%2F6zPSy3p33%2Bn5UsAOi9i2rk%2FAWJQ7H1pKEDSjMyClx9i5yYegyjOFl5vRYaozrxWt%2Fr05aFYoxZXvULrmES9XMlHUDwSvyrInA5k3wZJcAxipdYtEEiIlWNfJYTZRVKr6in3YaI6uJ0yhhPHbnclqK2Kp%2FzoCokOuuPyvwfmyFME9QEfgcEnV9QDJhoHq&X-Amz-Signature=00de3f38a21dcf86a516941147f2bb328cfcc8b8b5a5f35b83412e545c6e315b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
