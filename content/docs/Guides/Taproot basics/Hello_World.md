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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UV4V7C5Y%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T021801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBfdhwMhqKb%2BdjeruBNS%2F4jByFC7PNrZQk8IO2kiZfVhAiBxhcKTc9TuJankh3v65s20yd0cG97powXMo5OTx6TqGSr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMtFLhGUN6TP9fjSVAKtwDFgvJlnT0%2FhRvGB7RGm2JlAQJ4B4qbDqxWe8dnl6v8len9mpYqnnqQuln08A3AaLN%2BqclVPT7As8aiJ0cUMnFsv4DbNBJsvbBC46sDiAakyklMrzpZ%2FnjiimmK6on6nZDfpM%2F7ZP3rFB%2BC9wLBbG2L4Qr26qnKs1j7kFCByPyFXsJDQhJ3Ip%2BYCjGwy3LhcPhSiVfnMuh5L9%2FT54b0R0L0t8wig8iGUyF%2B5HWhKtjdlytFYY5I0ppfHHuDAQxTKKW%2FZkEPmJD70KA%2FI44LtLZqswGE%2BwUWqEHoUDtKDgVHO0p2nUxFEpk3yhEerXj13GcuS4qKC4fwqxR5T99PKZG%2Bm4Nv7WgAVPP34G5UMQ8TWd0VexUlgef23I4z328HV7B1AbDs60Ht3JNkfTrSNPm%2FhiayX7fqQb96WkSSN1Wlg88yfwtwz%2BMy7Jn%2F1YpeDwTX%2F%2BeNjoNa3QO9p4%2BHeEseWbGKAj3h6ZgRu1FfIeM0ywtIwqPkNVpUBRkZXmsLMpGsIvt5FLl%2FZGdyCw1jfXADslAx7atA1Sg0bcs4XSFXp9prdPf9pqusGd%2FVlt8ifX9PzTPCd4oelPQ1kCXg24qBVAB4LUhSXsZSShlSGBSBjLpBrqJEygrRAqXiZYw%2BvOwwAY6pgGhM8PxwlZS%2FJxh8eraA7jDNFq8AUSaSoTbiNBRA4xS95T2VUiIhM5kb3vjhMM3XUJRsVRHA%2FXvY4G9VJqiXSWqPWCi21%2BasYdXOk7VrxNObFla%2FYyvhjKxt6nwdl4iHkRrsYgp%2FHXEaoBm%2BuQ2Bg%2B9ogrXNiJi2aggDQAIU959KWjz2jWhkzmcamJYvWj5A7e%2FH56AgtQ2auMSxXsUkVTytpAs6DjX&X-Amz-Signature=14a00a5f834e625258a9695ad7251ec9f6e443bbda739f8965c1bf56587bc21a&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UV4V7C5Y%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T021801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBfdhwMhqKb%2BdjeruBNS%2F4jByFC7PNrZQk8IO2kiZfVhAiBxhcKTc9TuJankh3v65s20yd0cG97powXMo5OTx6TqGSr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMtFLhGUN6TP9fjSVAKtwDFgvJlnT0%2FhRvGB7RGm2JlAQJ4B4qbDqxWe8dnl6v8len9mpYqnnqQuln08A3AaLN%2BqclVPT7As8aiJ0cUMnFsv4DbNBJsvbBC46sDiAakyklMrzpZ%2FnjiimmK6on6nZDfpM%2F7ZP3rFB%2BC9wLBbG2L4Qr26qnKs1j7kFCByPyFXsJDQhJ3Ip%2BYCjGwy3LhcPhSiVfnMuh5L9%2FT54b0R0L0t8wig8iGUyF%2B5HWhKtjdlytFYY5I0ppfHHuDAQxTKKW%2FZkEPmJD70KA%2FI44LtLZqswGE%2BwUWqEHoUDtKDgVHO0p2nUxFEpk3yhEerXj13GcuS4qKC4fwqxR5T99PKZG%2Bm4Nv7WgAVPP34G5UMQ8TWd0VexUlgef23I4z328HV7B1AbDs60Ht3JNkfTrSNPm%2FhiayX7fqQb96WkSSN1Wlg88yfwtwz%2BMy7Jn%2F1YpeDwTX%2F%2BeNjoNa3QO9p4%2BHeEseWbGKAj3h6ZgRu1FfIeM0ywtIwqPkNVpUBRkZXmsLMpGsIvt5FLl%2FZGdyCw1jfXADslAx7atA1Sg0bcs4XSFXp9prdPf9pqusGd%2FVlt8ifX9PzTPCd4oelPQ1kCXg24qBVAB4LUhSXsZSShlSGBSBjLpBrqJEygrRAqXiZYw%2BvOwwAY6pgGhM8PxwlZS%2FJxh8eraA7jDNFq8AUSaSoTbiNBRA4xS95T2VUiIhM5kb3vjhMM3XUJRsVRHA%2FXvY4G9VJqiXSWqPWCi21%2BasYdXOk7VrxNObFla%2FYyvhjKxt6nwdl4iHkRrsYgp%2FHXEaoBm%2BuQ2Bg%2B9ogrXNiJi2aggDQAIU959KWjz2jWhkzmcamJYvWj5A7e%2FH56AgtQ2auMSxXsUkVTytpAs6DjX&X-Amz-Signature=d92ea6c85ceebfdba5651b3158983164476985d1917b1006a2cc70928d4451a9&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
