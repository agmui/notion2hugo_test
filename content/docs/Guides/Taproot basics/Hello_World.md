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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XPEVHDH%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T101007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxX12AxFA4ENGdAet0XBmsxOqnXwZVnT7SRW7DOMzkVQIgD7WSd%2FY1hd4FK40hPe9WCCqJpdlhEGGB6%2FkHSnqqAo0qiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEeqxrEXA%2FzSn%2BKFRCrcA5EU%2Fvl6HhES14a2fTQ2CaSlm2kUhxzYY%2FG0IuCoFKmKYukDp3U4ZjVNS9T2%2B4PgJt1UkgrHQyaGQPQnlY24KerNYsZCBIN%2B145mw%2Fu5hgqMv1VUJW6lCNN8dvBh5xVEk1F3U7OdigMe0%2FHxTN9bZJAG6s8uztgz8d4HunoskqvaCg%2FTPRPWYSMSz2ciKEDBxQ7kdhoJXOGar7B0bybvIE0Dj2ZEMWmD%2BurzPLRUUOD7Jme4%2FJdBBK7uenKQZhb2QjlMyjdjrWSzbTGCvPrFB3JMC%2FBEqaGu2JwxPynCxcmVGRiVIEGpep%2FZX1GshGjl6UUxg3is8YC75CzreeluQEdow67v1XNXQLAR0FuZ3r%2FOprne9TfCmQGyacu%2FVGUuRJeyhXcuPMivjxJPU42m6B8TE5XL%2Fp465dZebZh1oym%2FfQbXZLADNJTsWbvVFiWgAqH8SJWTTGWBuv7y5Y%2B1pMYBJOmpWI%2FDSnmYDqCKX3Lww07yDEpEz7COH9sPSQ3TMbg71TPVI%2FimgEZrsZ%2BoeTCgLdBOhIn4rHVWirFr8zgX2Y82bd%2BOcKO%2Fs%2Fr5Vy%2BR00aiIkQWhErxL%2FHA3n2YVtPX2%2FxosqpswRnntxIJ9LaABkm0hldUBh0ENvvJMPzdmsIGOqUBnHoeOPbmCAXqQiRNl%2FzozVGIy4SmG3CNRZvDsiH0VvxIpOyE2vhUb7HU011cRtQVoixfrwpN9s6csPWua9OZqeKjWWFgY2GptiNxn1vwyVII%2FrHf078eEBi3X%2BQCmYwUuYKdNAWUszJyxEmMmjbVooVRsZUY48NenSbE3G0VDZG96cmlbnZ9HoIZhTKEFX60VxKTmXUsm7nX%2FmHQwSR%2FBccggN%2Fg&X-Amz-Signature=efca9dd3f852a5d4b04614a20b21638d4d1349bef94464564e2f1b7e0a21d8fc&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XPEVHDH%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T101007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxX12AxFA4ENGdAet0XBmsxOqnXwZVnT7SRW7DOMzkVQIgD7WSd%2FY1hd4FK40hPe9WCCqJpdlhEGGB6%2FkHSnqqAo0qiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEeqxrEXA%2FzSn%2BKFRCrcA5EU%2Fvl6HhES14a2fTQ2CaSlm2kUhxzYY%2FG0IuCoFKmKYukDp3U4ZjVNS9T2%2B4PgJt1UkgrHQyaGQPQnlY24KerNYsZCBIN%2B145mw%2Fu5hgqMv1VUJW6lCNN8dvBh5xVEk1F3U7OdigMe0%2FHxTN9bZJAG6s8uztgz8d4HunoskqvaCg%2FTPRPWYSMSz2ciKEDBxQ7kdhoJXOGar7B0bybvIE0Dj2ZEMWmD%2BurzPLRUUOD7Jme4%2FJdBBK7uenKQZhb2QjlMyjdjrWSzbTGCvPrFB3JMC%2FBEqaGu2JwxPynCxcmVGRiVIEGpep%2FZX1GshGjl6UUxg3is8YC75CzreeluQEdow67v1XNXQLAR0FuZ3r%2FOprne9TfCmQGyacu%2FVGUuRJeyhXcuPMivjxJPU42m6B8TE5XL%2Fp465dZebZh1oym%2FfQbXZLADNJTsWbvVFiWgAqH8SJWTTGWBuv7y5Y%2B1pMYBJOmpWI%2FDSnmYDqCKX3Lww07yDEpEz7COH9sPSQ3TMbg71TPVI%2FimgEZrsZ%2BoeTCgLdBOhIn4rHVWirFr8zgX2Y82bd%2BOcKO%2Fs%2Fr5Vy%2BR00aiIkQWhErxL%2FHA3n2YVtPX2%2FxosqpswRnntxIJ9LaABkm0hldUBh0ENvvJMPzdmsIGOqUBnHoeOPbmCAXqQiRNl%2FzozVGIy4SmG3CNRZvDsiH0VvxIpOyE2vhUb7HU011cRtQVoixfrwpN9s6csPWua9OZqeKjWWFgY2GptiNxn1vwyVII%2FrHf078eEBi3X%2BQCmYwUuYKdNAWUszJyxEmMmjbVooVRsZUY48NenSbE3G0VDZG96cmlbnZ9HoIZhTKEFX60VxKTmXUsm7nX%2FmHQwSR%2FBccggN%2Fg&X-Amz-Signature=dc325b73d81933a07b2323c9b21b4abe8b6838ee4fd233b2e94ad42f7dd3ed1a&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
