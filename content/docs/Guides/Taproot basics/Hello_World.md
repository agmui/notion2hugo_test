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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWXUW34H%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T090905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJGMEQCIH4WZ9n396tnSlcu4cfHySs7Wfoy%2FgJrpmihNjf7iooIAiAkJo3hnL4TmmL%2BVmJDyKZYhhJT8aZ9bVWKzqPOno9UUyqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfxrlmJW8a2afPkWxKtwD3pbdGUbzClDJWTcik6T%2FzqJAFlAr%2BtPNJE83UlBqrroofn5M3ap%2BrVg8KV0n49Y2WHSiuugWtZ4RcT%2B3GDqJSQfrifSwaWaKo6iwXaiUIhL4xJZDufejbl3ro%2BR%2F0Ydzi9OeGWqA9b5Tv1klci0K25T%2BGCvB1r8TJQfDloEvgu44xwRBmOI%2Fy%2F%2Fwc2KRlkLwXQnjnYcg%2BknV4TcNk1P7MPIdfp9KSWDbz8BTOsDH0704mcOKDdrivDfHq8LZWDQ6MNY84HNtUW7htcSjq8FAJYur1rbh7Lk%2BqQletVh4PVfdWlJNFELAysWwkjSl%2FUN7gtN5gpA2x9J6RkIt%2B11qER77ZLtPArr%2FWTAQkfUHTUYskeeAwGovf89WMiohzt303u92b8BBfGjhkTi8rW3A6JfAsvYdsHKiW534YkqHXGmDezVRIZhnm2LCBcoevC3wTOLVzhI7F9kBGeJukL1GlXHk%2FXIqyI37oVBGX6lNV%2BxBe6deqLNyUM7I1uBKs643tp5LVjgD8g1B%2BhLbGg0Ne3Iz8mgCqrOKlyngHcvdwLVNFKaaAzdVMZwAtb%2BF9FGPXZsPE3Bn9AzhOjxVYVGThM9RjkubaDsD1dejXW5XCkh%2FGjCiYUCEqKko%2FA8w6OnMwAY6pgHQtlGRykcYxrQDNcWzIn7DSd8KUr9amYHIjRnY5aPWETQ4k0DrXi7LzuiOI%2B4CJZlzxi%2FVoOTyrS5HXMz2Y%2BALRggbdJLbZwbSKT6UOKoJcVbSWZA0TWXbEgHQ3kqw7zQ82XbkgpqTbrXuc2TWgoDchhfS7txhc6cNwMvj%2BUb%2FocYl4yk84qdZaK39rtiXRQsrsSmDoVVR6ASN%2BZYtZHh8PrSu5OAa&X-Amz-Signature=e7f885e0407ae4f4f5c7fdda23678a7b9b1ced62ee443e7ea91293d41e8bf8e0&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWXUW34H%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T090905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJGMEQCIH4WZ9n396tnSlcu4cfHySs7Wfoy%2FgJrpmihNjf7iooIAiAkJo3hnL4TmmL%2BVmJDyKZYhhJT8aZ9bVWKzqPOno9UUyqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfxrlmJW8a2afPkWxKtwD3pbdGUbzClDJWTcik6T%2FzqJAFlAr%2BtPNJE83UlBqrroofn5M3ap%2BrVg8KV0n49Y2WHSiuugWtZ4RcT%2B3GDqJSQfrifSwaWaKo6iwXaiUIhL4xJZDufejbl3ro%2BR%2F0Ydzi9OeGWqA9b5Tv1klci0K25T%2BGCvB1r8TJQfDloEvgu44xwRBmOI%2Fy%2F%2Fwc2KRlkLwXQnjnYcg%2BknV4TcNk1P7MPIdfp9KSWDbz8BTOsDH0704mcOKDdrivDfHq8LZWDQ6MNY84HNtUW7htcSjq8FAJYur1rbh7Lk%2BqQletVh4PVfdWlJNFELAysWwkjSl%2FUN7gtN5gpA2x9J6RkIt%2B11qER77ZLtPArr%2FWTAQkfUHTUYskeeAwGovf89WMiohzt303u92b8BBfGjhkTi8rW3A6JfAsvYdsHKiW534YkqHXGmDezVRIZhnm2LCBcoevC3wTOLVzhI7F9kBGeJukL1GlXHk%2FXIqyI37oVBGX6lNV%2BxBe6deqLNyUM7I1uBKs643tp5LVjgD8g1B%2BhLbGg0Ne3Iz8mgCqrOKlyngHcvdwLVNFKaaAzdVMZwAtb%2BF9FGPXZsPE3Bn9AzhOjxVYVGThM9RjkubaDsD1dejXW5XCkh%2FGjCiYUCEqKko%2FA8w6OnMwAY6pgHQtlGRykcYxrQDNcWzIn7DSd8KUr9amYHIjRnY5aPWETQ4k0DrXi7LzuiOI%2B4CJZlzxi%2FVoOTyrS5HXMz2Y%2BALRggbdJLbZwbSKT6UOKoJcVbSWZA0TWXbEgHQ3kqw7zQ82XbkgpqTbrXuc2TWgoDchhfS7txhc6cNwMvj%2BUb%2FocYl4yk84qdZaK39rtiXRQsrsSmDoVVR6ASN%2BZYtZHh8PrSu5OAa&X-Amz-Signature=134adae4cc6a9b9e3c5e7c5a4d961793dc76aa1879ef9e338ed17c4b33742658&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
