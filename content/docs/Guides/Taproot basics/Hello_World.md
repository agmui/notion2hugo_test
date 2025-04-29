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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USBQFGK2%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T170746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHJY4m8Vs4lK%2FundJPncRfqLl10LYPVPxiuR6KH%2BuceLAiAeh3p%2Fy25EbZINirXsy1ggEeI%2BCyv%2BqTluC%2BuA0euELyqIBAiR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiIr9gnVXfpw%2FtluCKtwDDKFoFUbEswvdwGUxkMApFKDHKtzKYIxXkblGLOcYMMffX7cwjxv7sQnNSM6Twv8weDaS0p5g58uVTcHhGofce40RxQLRRwHVCzTq0VVlmR18WbRArmvA5T8TjW%2BxEH8daDGTbpyfHVwCM6qIDKXuLbDyYqSSstfygmZtewOj0tWIzVDCd9cRphZf4JC9xBv6Y2n1eSBNxBnpsSnN9a2M9POa2aOPNIWK31%2FgKNJ%2FgG%2FG6uLjq67fh%2Fn2vXcxCKIBV5DKg6NlEgGgGy20ryX%2FkV27KUgRV50vCLnUlv3oppiSR%2B%2BxFr%2FClXGf9oI%2FRmTugDoPZ787i15%2BE3jp4WNCNgaRmyl1v8ra7O7vq24rH%2F%2FCJdon9Ga97HAdU5AcBMkdSui3hvZ33z1HJ6MSdnqGx8a17pTIYCpxSK%2BlVSHP%2FEGNvJJgRKmA8oqlcJwsJ5EXyzBtQ%2BJ4LtxaQW8zwDNBMZxkq2RKtFv2yF5eFIDjhMyUoaTxHz1J81t%2F5A3DMyepXUmmTeXNjziXYDMGeQPfewW%2B6LIc5uKO6hqrtJOhJumMGCp%2FoO67I4HdUd5LIDuFv6pJx2%2Fkf9Bke0Q8AVGjcFMrdDBAUUdzMkT9a%2F6PJ0XGP6%2Bg5DTAJ3MvbZIwifnDwAY6pgFlhVAoiWh9%2FtVT3aJZezFx97Xo5JfXsVby4OvYtpodqcHEdharPPTWWj9VaMlCVquZiebVUEaBlG3pmKCQz9Km7KHZI3Rfjzj6pg1SnJcO49M0Lps8m4w%2BBeHWQR%2F8EuHbJJVCUa0704QlLH1o5Mruvoced18OOdUW336xnNQ0Dmm412y4CUPzVqcKKvrphywR9nQPBKtIw8LQKmgq5M0uuSqdEMtY&X-Amz-Signature=169f8370aa47f920d8f000c884bd80647b76d4053847f4e3754061aa5729ae31&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USBQFGK2%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T170746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHJY4m8Vs4lK%2FundJPncRfqLl10LYPVPxiuR6KH%2BuceLAiAeh3p%2Fy25EbZINirXsy1ggEeI%2BCyv%2BqTluC%2BuA0euELyqIBAiR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiIr9gnVXfpw%2FtluCKtwDDKFoFUbEswvdwGUxkMApFKDHKtzKYIxXkblGLOcYMMffX7cwjxv7sQnNSM6Twv8weDaS0p5g58uVTcHhGofce40RxQLRRwHVCzTq0VVlmR18WbRArmvA5T8TjW%2BxEH8daDGTbpyfHVwCM6qIDKXuLbDyYqSSstfygmZtewOj0tWIzVDCd9cRphZf4JC9xBv6Y2n1eSBNxBnpsSnN9a2M9POa2aOPNIWK31%2FgKNJ%2FgG%2FG6uLjq67fh%2Fn2vXcxCKIBV5DKg6NlEgGgGy20ryX%2FkV27KUgRV50vCLnUlv3oppiSR%2B%2BxFr%2FClXGf9oI%2FRmTugDoPZ787i15%2BE3jp4WNCNgaRmyl1v8ra7O7vq24rH%2F%2FCJdon9Ga97HAdU5AcBMkdSui3hvZ33z1HJ6MSdnqGx8a17pTIYCpxSK%2BlVSHP%2FEGNvJJgRKmA8oqlcJwsJ5EXyzBtQ%2BJ4LtxaQW8zwDNBMZxkq2RKtFv2yF5eFIDjhMyUoaTxHz1J81t%2F5A3DMyepXUmmTeXNjziXYDMGeQPfewW%2B6LIc5uKO6hqrtJOhJumMGCp%2FoO67I4HdUd5LIDuFv6pJx2%2Fkf9Bke0Q8AVGjcFMrdDBAUUdzMkT9a%2F6PJ0XGP6%2Bg5DTAJ3MvbZIwifnDwAY6pgFlhVAoiWh9%2FtVT3aJZezFx97Xo5JfXsVby4OvYtpodqcHEdharPPTWWj9VaMlCVquZiebVUEaBlG3pmKCQz9Km7KHZI3Rfjzj6pg1SnJcO49M0Lps8m4w%2BBeHWQR%2F8EuHbJJVCUa0704QlLH1o5Mruvoced18OOdUW336xnNQ0Dmm412y4CUPzVqcKKvrphywR9nQPBKtIw8LQKmgq5M0uuSqdEMtY&X-Amz-Signature=3f8b6cd8677f9182a628ab6c59af224c1150d30903963ebcde5085db0afec34b&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
