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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SA2TI3NZ%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T110113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCpa7RWwaR56BFZEC76uUPRFyV7hKN9bJDu9krdjljV5AIhAJv4ZIfgL5B7gp2Q5DER70mf2%2BOhaFBsE1OyeG7XL%2FpFKogECOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxkyf0fAn4FfH2WPGoq3AOWYRaMIbuQ%2B0c8g%2B9qo9ruao6hdTtC4RTzCm%2FT6Mfw3%2F5%2BNHpiPH43BVF14qfVkN%2BaEDi2M%2Bps2A8%2BZD6dmdnVva4b4F6TH3wyXZtePZFc%2B5r%2FwIrSHluSHd3SWX9CiQx2dHij%2B66bXVXpX%2BMUkfsLbvD7OZABMydF9NIX%2BsqVxcvncszfSkzjuuH8bDj7Sd9eINHx%2F7b8He6N0EHYkRWjnBKphcbcd7wq7KKlcu15BrhjVs9WZDgCqOEgWJf2U1cco2SFrUyQxhALfaZ25bKMZIwAi3HRv2it3YgRGzfXuTLKGrP6RWykFdMxUGzhcxSnkx1MFMboZLmxLtnO5FNuvnSwUpyqbjKu6YCL2iXQ8cXEAAa2MH9V933MEbigoowkHCZ2GDkd1RpPK93VQ50arpcLKPmn8O5OlD5y4Qo9ObMdoVTIwKp8zc%2FF%2F18oVaf7BqHO1N%2FHy94dQeKgMeWnNK4wRnn%2BSgqsc2T7sHXSSuiEWHmTiDf6U4JMX%2FJo3MYrsB5qUdCsk7lOujMa0NQQ9IcdAuj%2FhdDcbo0C3kkmpMauKhV83mWNRK09irznL8oalrGxDJvfJSCAGjazvumDjiraY6akFAfYPSb1kT5QsnWXc2XOSf7PzmBlhDDl6%2BW9BjqkAdHdU4UA%2BiZxIE5oF6C%2BjuJBiwvvb%2FKhHnIcPx%2Fk2mQnRoE3wmhrMHl53q%2B%2FoPMgGyhO3AZavM5qiNJbBR97rPeiiByQ4RBGjh12SmE7sZtWW1NXDY1ud9pPz0g8dgr%2FOXcHqQI%2FBAXqPnSFogkI2tz%2BwRcLc12ZUN9%2FS6cckuVqZ7g41yCIJoaqk03aVDtS1UTrpsq6Pi906dfC5isQIOxxL%2BM7&X-Amz-Signature=8ba17b50314f17bdbf86de4b8f61fd7c13029912df78d4a280ec724921cb4ee5&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SA2TI3NZ%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T110113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCpa7RWwaR56BFZEC76uUPRFyV7hKN9bJDu9krdjljV5AIhAJv4ZIfgL5B7gp2Q5DER70mf2%2BOhaFBsE1OyeG7XL%2FpFKogECOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxkyf0fAn4FfH2WPGoq3AOWYRaMIbuQ%2B0c8g%2B9qo9ruao6hdTtC4RTzCm%2FT6Mfw3%2F5%2BNHpiPH43BVF14qfVkN%2BaEDi2M%2Bps2A8%2BZD6dmdnVva4b4F6TH3wyXZtePZFc%2B5r%2FwIrSHluSHd3SWX9CiQx2dHij%2B66bXVXpX%2BMUkfsLbvD7OZABMydF9NIX%2BsqVxcvncszfSkzjuuH8bDj7Sd9eINHx%2F7b8He6N0EHYkRWjnBKphcbcd7wq7KKlcu15BrhjVs9WZDgCqOEgWJf2U1cco2SFrUyQxhALfaZ25bKMZIwAi3HRv2it3YgRGzfXuTLKGrP6RWykFdMxUGzhcxSnkx1MFMboZLmxLtnO5FNuvnSwUpyqbjKu6YCL2iXQ8cXEAAa2MH9V933MEbigoowkHCZ2GDkd1RpPK93VQ50arpcLKPmn8O5OlD5y4Qo9ObMdoVTIwKp8zc%2FF%2F18oVaf7BqHO1N%2FHy94dQeKgMeWnNK4wRnn%2BSgqsc2T7sHXSSuiEWHmTiDf6U4JMX%2FJo3MYrsB5qUdCsk7lOujMa0NQQ9IcdAuj%2FhdDcbo0C3kkmpMauKhV83mWNRK09irznL8oalrGxDJvfJSCAGjazvumDjiraY6akFAfYPSb1kT5QsnWXc2XOSf7PzmBlhDDl6%2BW9BjqkAdHdU4UA%2BiZxIE5oF6C%2BjuJBiwvvb%2FKhHnIcPx%2Fk2mQnRoE3wmhrMHl53q%2B%2FoPMgGyhO3AZavM5qiNJbBR97rPeiiByQ4RBGjh12SmE7sZtWW1NXDY1ud9pPz0g8dgr%2FOXcHqQI%2FBAXqPnSFogkI2tz%2BwRcLc12ZUN9%2FS6cckuVqZ7g41yCIJoaqk03aVDtS1UTrpsq6Pi906dfC5isQIOxxL%2BM7&X-Amz-Signature=3c6eec6b3191e9c91872851eff25d4eeb619f89f55969439e632ea270ae3780b&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
