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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WJWUTOX%2F20260119%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260119T015326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEuUGHroXKLa3f7l2W1eOo8Fdm6fKB79gUfxuCfeZ4XDAiEAqTWXNyn3GzvJsK3EZ5njgp63SCBLwfiDa6SwggbSWpYqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNwEmzAFDKMEnRRpxCrcAx722pBphzSakLTECj2xHZ%2B06KuJOjjxyGqUhSFqUFSx90vmhfpTUijYxGohIWSl9XPySDLv9EvVIOcL6Clf5KxbOrEGwxU3MEXQdQT1n7unCONrtg%2BPyp%2FNFVhIzaSQApgaOIzIc4sYHDMHR%2F7%2FpUtbzlBjJK%2F%2Bfq0Wzg6JEc0Hl1neaD7wfkGOY%2BAQBsFVXIg9stYi2VdS%2FYH%2F2QZAns9%2FU8cgbmfFgLX%2FdfZ5mNdkmSKsSGhjJURNMEUSmOFQU%2Bx8dYWXh7E%2Bv5kxz8v%2B%2Bt0JtJQl0rJx2rLrhGeD05MVpcJxUpaTTSZUpxA0aDtGq%2FwzOHTC4oIKL0lcw9MNlRlAfptL2lHTYt4hpJi%2FXMJGxqWYSSL1Amt2eZ3TVL4GeKZSN8kBTwZpD1Jyw72bPlETgC9Hy9jrmHvHS5Ynr3in3npZOBTjTP%2FIb8aCS3UQm1L7cKNVIzZHqEWQaPgvynhkYIWaDWYLi4nqzxajh6qth7sO2dVd8o7vH8YxGE9ZTfE6T6MbSAK0ZLWJRYhKIDWrgUBkI%2FkM4cpG8Xp%2BYLEd7XntPf1XpuSEN4agKBhkxMVzwEEz7taBeWFoepxKyzjkHM57dbXBcTHMQ%2FWmQ0aX%2BeXV00H5wNxZCxe4MJLdtcsGOqUBMv944RNv3k1h0SS8PlNhK5yRImuAL12gVRKtwkfiTlDtwBz7RU3nQm3cjvAszX%2BxPA5miC0HUYUDo5%2BUicq1JZCUcwHOGCxBQFifUwfu5ZPVofFGIIfyTQfiDdBBud%2FsZG1%2BrGWmsuGcxuOykbkHJwE5ktT3TNBQciR0wT0bYGgGM5dV0Ofis1ZPP0l7kl7lBCikT%2BNFIJi%2BDmaDRrUKOr6LyrZu&X-Amz-Signature=d1548b6af4020c6fb2495a2011b6a3f84f5d336561c54e60ce92f79dfb1fcef3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WJWUTOX%2F20260119%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260119T015326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEuUGHroXKLa3f7l2W1eOo8Fdm6fKB79gUfxuCfeZ4XDAiEAqTWXNyn3GzvJsK3EZ5njgp63SCBLwfiDa6SwggbSWpYqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNwEmzAFDKMEnRRpxCrcAx722pBphzSakLTECj2xHZ%2B06KuJOjjxyGqUhSFqUFSx90vmhfpTUijYxGohIWSl9XPySDLv9EvVIOcL6Clf5KxbOrEGwxU3MEXQdQT1n7unCONrtg%2BPyp%2FNFVhIzaSQApgaOIzIc4sYHDMHR%2F7%2FpUtbzlBjJK%2F%2Bfq0Wzg6JEc0Hl1neaD7wfkGOY%2BAQBsFVXIg9stYi2VdS%2FYH%2F2QZAns9%2FU8cgbmfFgLX%2FdfZ5mNdkmSKsSGhjJURNMEUSmOFQU%2Bx8dYWXh7E%2Bv5kxz8v%2B%2Bt0JtJQl0rJx2rLrhGeD05MVpcJxUpaTTSZUpxA0aDtGq%2FwzOHTC4oIKL0lcw9MNlRlAfptL2lHTYt4hpJi%2FXMJGxqWYSSL1Amt2eZ3TVL4GeKZSN8kBTwZpD1Jyw72bPlETgC9Hy9jrmHvHS5Ynr3in3npZOBTjTP%2FIb8aCS3UQm1L7cKNVIzZHqEWQaPgvynhkYIWaDWYLi4nqzxajh6qth7sO2dVd8o7vH8YxGE9ZTfE6T6MbSAK0ZLWJRYhKIDWrgUBkI%2FkM4cpG8Xp%2BYLEd7XntPf1XpuSEN4agKBhkxMVzwEEz7taBeWFoepxKyzjkHM57dbXBcTHMQ%2FWmQ0aX%2BeXV00H5wNxZCxe4MJLdtcsGOqUBMv944RNv3k1h0SS8PlNhK5yRImuAL12gVRKtwkfiTlDtwBz7RU3nQm3cjvAszX%2BxPA5miC0HUYUDo5%2BUicq1JZCUcwHOGCxBQFifUwfu5ZPVofFGIIfyTQfiDdBBud%2FsZG1%2BrGWmsuGcxuOykbkHJwE5ktT3TNBQciR0wT0bYGgGM5dV0Ofis1ZPP0l7kl7lBCikT%2BNFIJi%2BDmaDRrUKOr6LyrZu&X-Amz-Signature=86482b2756bcc76c8fc989dcf2884118e1d420d4d5266e2bc7588aabd8141128&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
