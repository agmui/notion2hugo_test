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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULCGV6WM%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T160759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCICQmntDfP0nPobZ3p0APwASSy6otQWbjyLvwwW8kX25NAiAr9HsBXcL2imFQdJx%2F4g7hv3dAjWuQzRE5op1%2BzVU%2FmyqIBAi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMA9S0FqULjzoR48ugKtwDt4ViKIZG96P%2BaQDZ28E8vSfuDwwsO4ggeFD99A3w4BGrtWpA0yKPbO7VVaIQRUUJl6oZX9aDNw8B5%2BUl9MhdTnXG5I%2FkSzYf3%2F0bPxa1IDn4vo%2FAecbaxAfKTbFCulWnUQ1N7OLpN8KjM3iaZAhUu56QVPEhSI1pYQIEfE5Zyu9VaU65nxjY34Sh%2B6AHZWaDkxFFbIAVKs0P9NH1wBEdhZqXjC4ppFSk9efyEREMt1k%2FEuC3D%2FGz2lWQZGk2NSPRLZ2M1q6wjF1nssgPWE0BZxoOro8hDu%2BBShkSYlUSm2BPy5KDhQsj4k4hGvMBUycJdsnSHQQm6UWPk3UjgWTQE4PddUOH7W758VoEUKhX%2B59YebwF5q8fHCKlP6CzgXVH0Yknp91SFtgb4JxwJhmgXlSS4OYea3Rc%2FvqQUyfVLqdtzLyVJqQTJYRE5e2F8uVzmwtYCiFzmLb2TUVK337mZsaE8se1pI2jCV6b5iERQhXa47KXmwB1IlkfUPqDfoI9EXa859ZAs%2BA69DhKOT9tWGUcDcqAUoUcAxLlBPbqgQuIDoiAsREkACFV%2BDaKct7XgvwnksCa9d2uuIqvUz7%2F12IemCYylXviNcs9%2Bd6OMEtUn5WqcFrtKf05yokw%2FvX6vgY6pgGf5Lor8uwHmJNrNXkz9xUwtHAingWWTuGCzmI7cQ9uLl30H03%2Bs8JprUK6tcujzY9g51tvmWFM7Gk445LZEN%2BlDQ5qPwRCA69Sukk1BZwLVqyJRh75L7M1VeppyWxQvllPtLw2km10PM5dxvwzireEm%2BCtOsT6FyzCGLe7bd7XTJXDaCPKDF7qSeJd479JTlKdpJazsM2LcN5wWM1HznM6oh7iSKoT&X-Amz-Signature=6fa9fc3be76e022a47f72849a7d7e15687dcf5a7bfc0c9c4d457bd9d51d52387&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULCGV6WM%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T160759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCICQmntDfP0nPobZ3p0APwASSy6otQWbjyLvwwW8kX25NAiAr9HsBXcL2imFQdJx%2F4g7hv3dAjWuQzRE5op1%2BzVU%2FmyqIBAi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMA9S0FqULjzoR48ugKtwDt4ViKIZG96P%2BaQDZ28E8vSfuDwwsO4ggeFD99A3w4BGrtWpA0yKPbO7VVaIQRUUJl6oZX9aDNw8B5%2BUl9MhdTnXG5I%2FkSzYf3%2F0bPxa1IDn4vo%2FAecbaxAfKTbFCulWnUQ1N7OLpN8KjM3iaZAhUu56QVPEhSI1pYQIEfE5Zyu9VaU65nxjY34Sh%2B6AHZWaDkxFFbIAVKs0P9NH1wBEdhZqXjC4ppFSk9efyEREMt1k%2FEuC3D%2FGz2lWQZGk2NSPRLZ2M1q6wjF1nssgPWE0BZxoOro8hDu%2BBShkSYlUSm2BPy5KDhQsj4k4hGvMBUycJdsnSHQQm6UWPk3UjgWTQE4PddUOH7W758VoEUKhX%2B59YebwF5q8fHCKlP6CzgXVH0Yknp91SFtgb4JxwJhmgXlSS4OYea3Rc%2FvqQUyfVLqdtzLyVJqQTJYRE5e2F8uVzmwtYCiFzmLb2TUVK337mZsaE8se1pI2jCV6b5iERQhXa47KXmwB1IlkfUPqDfoI9EXa859ZAs%2BA69DhKOT9tWGUcDcqAUoUcAxLlBPbqgQuIDoiAsREkACFV%2BDaKct7XgvwnksCa9d2uuIqvUz7%2F12IemCYylXviNcs9%2Bd6OMEtUn5WqcFrtKf05yokw%2FvX6vgY6pgGf5Lor8uwHmJNrNXkz9xUwtHAingWWTuGCzmI7cQ9uLl30H03%2Bs8JprUK6tcujzY9g51tvmWFM7Gk445LZEN%2BlDQ5qPwRCA69Sukk1BZwLVqyJRh75L7M1VeppyWxQvllPtLw2km10PM5dxvwzireEm%2BCtOsT6FyzCGLe7bd7XTJXDaCPKDF7qSeJd479JTlKdpJazsM2LcN5wWM1HznM6oh7iSKoT&X-Amz-Signature=f7db2c5baec3ee02150a60184b3c5a22f8a419ac50d87fdbde9c3f28b6db17ed&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
