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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRXBU6XU%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T131908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDtpGcznrTazOoIJo9vfSIpiG5vSZ7z8uRSKjl49fGFNQIhAPdjygyzs5m%2BcA8xor7pIewv1SZrOhzpk5tiKdN%2BXT%2BTKv8DCC4QABoMNjM3NDIzMTgzODA1IgxzxL1Hxq5CkxOSJq8q3ANTZAHPgKQHMxcMC6zS18wDX9MTqrGo1cxIrHy7Qra96Y9FyMR8ri2Wucflls2%2FrK35ar5xifEZPdYScGqo8%2Bvfg8K2yrciS2x7snqpJIU2mpEifV4XaZbhingim8aI%2BSHTp%2BiUnqz9v3ZQhCnF7JigfJiKPFaTCEzFudYY%2FqPhFZZ2zHDEjbwdkiyqN4FDYELfbPOWsmHXqcCZp7XYXZ%2Fc5aqSzJUGVpSN%2FDkfjupkLTUUR9QmuSVsF5rEfEMRbyt8TlCr5j4PENHhRtGAarswNWl8yj1DTI%2BfimCJtobTKK7V3iL6DoNDocEb8oUs%2B88ylLxRrrMHzTe1O4wc%2FSq3kPoR96zj8jMrwQvSsYRX9aUz3GfdZM%2BoBuWBlEa6489sggcMhbV9h5XCJZ%2FprmiTn%2Bo2lEXjtmy%2FYWuG5%2FwLqSfYzRBoYOG2YJMkCX0vTnLP4NAQTwwW9hQS6ST4sLFLs8Pxq8qwjvuDGjmmNAsNhoTmqLMyeKXcOmfpOWq60eP69rHlfT%2FFQrE8dr5y2GLvXuqJEiREEW%2FjsU35q3jtUwHDJFpX8BNqo6wVZphdQLrGjtty9bJ4z8BXcv%2Bz1R5NCrhx42ExriYAS4NuPreRqQXHXXP3P%2B%2F9wXLUOjCn%2FI%2B%2FBjqkAaLi12rD0a9v%2By0wTdGMTLe7ybTe4jU%2FBY3INRDk70Aai1j0fNfGKXVmJIUWyJYnrzFhJRwKHWX1NfZQ2yoPjajq0g7%2BB%2FBSujSdnF9FlBQHxCh41t0JMD3aktmCCwsmUU6%2B1gdHXazIdOP7RiilJWS85jCdIKCfCIg%2FYw%2BwY2JXNDwa%2B5v6Vf5QX0ZbIQ6J5P5qYA8DjeTSKhjVFGf%2BNZlVi3Z3&X-Amz-Signature=1d2eb3a234dc690926096647f507e5f0db2fa0ec41050bbc09f707c82c968ae0&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRXBU6XU%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T131908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDtpGcznrTazOoIJo9vfSIpiG5vSZ7z8uRSKjl49fGFNQIhAPdjygyzs5m%2BcA8xor7pIewv1SZrOhzpk5tiKdN%2BXT%2BTKv8DCC4QABoMNjM3NDIzMTgzODA1IgxzxL1Hxq5CkxOSJq8q3ANTZAHPgKQHMxcMC6zS18wDX9MTqrGo1cxIrHy7Qra96Y9FyMR8ri2Wucflls2%2FrK35ar5xifEZPdYScGqo8%2Bvfg8K2yrciS2x7snqpJIU2mpEifV4XaZbhingim8aI%2BSHTp%2BiUnqz9v3ZQhCnF7JigfJiKPFaTCEzFudYY%2FqPhFZZ2zHDEjbwdkiyqN4FDYELfbPOWsmHXqcCZp7XYXZ%2Fc5aqSzJUGVpSN%2FDkfjupkLTUUR9QmuSVsF5rEfEMRbyt8TlCr5j4PENHhRtGAarswNWl8yj1DTI%2BfimCJtobTKK7V3iL6DoNDocEb8oUs%2B88ylLxRrrMHzTe1O4wc%2FSq3kPoR96zj8jMrwQvSsYRX9aUz3GfdZM%2BoBuWBlEa6489sggcMhbV9h5XCJZ%2FprmiTn%2Bo2lEXjtmy%2FYWuG5%2FwLqSfYzRBoYOG2YJMkCX0vTnLP4NAQTwwW9hQS6ST4sLFLs8Pxq8qwjvuDGjmmNAsNhoTmqLMyeKXcOmfpOWq60eP69rHlfT%2FFQrE8dr5y2GLvXuqJEiREEW%2FjsU35q3jtUwHDJFpX8BNqo6wVZphdQLrGjtty9bJ4z8BXcv%2Bz1R5NCrhx42ExriYAS4NuPreRqQXHXXP3P%2B%2F9wXLUOjCn%2FI%2B%2FBjqkAaLi12rD0a9v%2By0wTdGMTLe7ybTe4jU%2FBY3INRDk70Aai1j0fNfGKXVmJIUWyJYnrzFhJRwKHWX1NfZQ2yoPjajq0g7%2BB%2FBSujSdnF9FlBQHxCh41t0JMD3aktmCCwsmUU6%2B1gdHXazIdOP7RiilJWS85jCdIKCfCIg%2FYw%2BwY2JXNDwa%2B5v6Vf5QX0ZbIQ6J5P5qYA8DjeTSKhjVFGf%2BNZlVi3Z3&X-Amz-Signature=3b4d9c3e219979df08041ab4a2f9d999efc2f803bb9ffadacc14839a872ce45b&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
