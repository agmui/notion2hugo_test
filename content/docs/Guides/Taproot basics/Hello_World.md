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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOYRVTIK%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T160853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDV9%2B98LVw3rAT1tUBot5uBOhF4sN60mfehhxfJzTxzhQIhALvhdmvjVS3ArdHqdEUXJiD1m3POe5ypRsUQo3nqfs5uKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwazi9RwTWIvnWMrCQq3AMMQAqLwk0ZvOSPnK3BHZmJj8CsRLOnezjAfxir5lz1Rg3MGXZdBJZcgLgr6WnecLUY5CtuTmHqdUJJ%2B3iTQJ4ZXDYYJK9REw%2BDN54ev8o44c6chmXv%2FrqjogI4h8NnFfMydgiTYSgWXmAg%2BPiENHHarz7PuY838xuD5%2BZqJQ94BSz4akL7VOTxct3IFVw0yVuMwX4gfG7aDTaivrILIO%2FUtYnIX8kfFIfg5PiRlJvv9MwQ3Ep9Y4Zm8uPybAjm4UCBA8ibFedfVx%2Fy0MxtiC6JQDJPog%2FsYRW8b%2Bwtrqq5BHVeTOZnm%2FPeJx1AEgVrWgpS8etYgHHIiZemeXdf6mO5IANF%2BOwpynKdPkHryYl4wg8kO3WChNxTa1xOgRMsSdpdbwTLNPWwZVq5cN1J6%2FbWyWPZoYVnRz3UZ6uIrStqg8cETB0MR%2F8dyFEwI5Nn3qOYvs1hkN7X7GiZPfh6UWkyv3Y4kZdY%2BcHr%2Fv8twrRZLvYrEW1h5zBnxinNs9rEz96dt%2B0JsqaoAjj%2ByUXxSD1ddZkIkM5XlkqhqCCAH1hZuOadBZS1YubeABqplMYBNRc7QWguKFPdKjUpdo8GN6CECYsf2aZLEh%2Fwlg8zaBsAweajkqlDNfsd5%2BB0zTDgrf3ABjqkAarFv2N3qalLk5f7ytp62TM%2BCPAa9crTV5VzwJR1FPKlc6Sht1BJpwRkVYa4QR2gS3jkmxBc0KMfTb6hqeEqSPlPVg4VJHMVdb%2BVR1tiz8f3C4ISsQEu4dF3Ij6JFc5hYSQpAmxN2i1gIRnTLWSlToC7XOTmUyjvWWqrJN1NUiTy4CbQ0ef%2BWCPPOvDoWpVOYeSBlcCECosRpeVZBeXikycsZ%2Far&X-Amz-Signature=6f021f1122886abe2d403b0c96bee1e5ce8f1653afc9f57bfce2d139d4405f07&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOYRVTIK%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T160853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDV9%2B98LVw3rAT1tUBot5uBOhF4sN60mfehhxfJzTxzhQIhALvhdmvjVS3ArdHqdEUXJiD1m3POe5ypRsUQo3nqfs5uKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwazi9RwTWIvnWMrCQq3AMMQAqLwk0ZvOSPnK3BHZmJj8CsRLOnezjAfxir5lz1Rg3MGXZdBJZcgLgr6WnecLUY5CtuTmHqdUJJ%2B3iTQJ4ZXDYYJK9REw%2BDN54ev8o44c6chmXv%2FrqjogI4h8NnFfMydgiTYSgWXmAg%2BPiENHHarz7PuY838xuD5%2BZqJQ94BSz4akL7VOTxct3IFVw0yVuMwX4gfG7aDTaivrILIO%2FUtYnIX8kfFIfg5PiRlJvv9MwQ3Ep9Y4Zm8uPybAjm4UCBA8ibFedfVx%2Fy0MxtiC6JQDJPog%2FsYRW8b%2Bwtrqq5BHVeTOZnm%2FPeJx1AEgVrWgpS8etYgHHIiZemeXdf6mO5IANF%2BOwpynKdPkHryYl4wg8kO3WChNxTa1xOgRMsSdpdbwTLNPWwZVq5cN1J6%2FbWyWPZoYVnRz3UZ6uIrStqg8cETB0MR%2F8dyFEwI5Nn3qOYvs1hkN7X7GiZPfh6UWkyv3Y4kZdY%2BcHr%2Fv8twrRZLvYrEW1h5zBnxinNs9rEz96dt%2B0JsqaoAjj%2ByUXxSD1ddZkIkM5XlkqhqCCAH1hZuOadBZS1YubeABqplMYBNRc7QWguKFPdKjUpdo8GN6CECYsf2aZLEh%2Fwlg8zaBsAweajkqlDNfsd5%2BB0zTDgrf3ABjqkAarFv2N3qalLk5f7ytp62TM%2BCPAa9crTV5VzwJR1FPKlc6Sht1BJpwRkVYa4QR2gS3jkmxBc0KMfTb6hqeEqSPlPVg4VJHMVdb%2BVR1tiz8f3C4ISsQEu4dF3Ij6JFc5hYSQpAmxN2i1gIRnTLWSlToC7XOTmUyjvWWqrJN1NUiTy4CbQ0ef%2BWCPPOvDoWpVOYeSBlcCECosRpeVZBeXikycsZ%2Far&X-Amz-Signature=72c8d5680a6ad21e32dae97b5bd26dda0d4d733cffcedef8580a61ef6023cd99&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
