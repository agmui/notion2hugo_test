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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIGSLKLE%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T100902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD2Lv9ucujGVAJr9UmF%2BDWQe4%2BkmqK%2BccJBhjgY2%2BpYuAIhALytJXIvAKQ5nwp1%2FlnT5OCfOrADcfvfuQwwkobazJQRKogECLn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzwSiXt2W9rRkgTpSsq3ANH9IO%2FGDm1i%2BSfliRaOKoi0d2FnHLCsznPKL51%2BuOB7SkkKfsJcS10IN1%2BzJVD0KJaz%2FnGcGu688Y3Q%2Fcz3yXb3pdViI2mcsV4YEYA05IVgmzjGyMzj2K6zXbXIjg12%2Bwt6mr6el%2Bhen%2FXVJ69QBzNiLJGKJUIDlVRcI9CAZ8Q6GvXpQ%2FEzeCUw%2FiubPPI96OqQNAks8n0r0jCzbJDT2wFB1FJPe4TrxWc%2BADzKI5oOTEPFl3gx5WJD%2FAwlYqoJSc3lpJ2Co9o0KvdSATSUq4jNtycgDQtUp1UwSBJi0I%2Fzi5vcymPuhYoFQR4E1Xf2%2FklIo9Ds%2FbPgftqoIVmymJDZYLvZCrbc4U3OKiUlanrWr0lmn96OHH0Zu%2B55psk3HXrDBhlqC1jdH3VAqzncmKCLWnH33XVKaERAwjtdSMDMjR5XZv9Fgr6uAVi%2BQ2VZc15dfyFpdhvVmqIFkyv%2BwtfAya4XlhsgiaVEstFnMa62YDV2m1etKZTB5y%2F54wDCq4w5NUHvKmkqY0Qu3mfgQnt%2BT0ojp0QY5n6OkumHPQGG8JIerx%2F4nPztWS5J9rQ4KM882J0EHqrDTvQwCJjXhdXDaWb64zUYnMrSSBVatAtLMjeIoexUtqa1ekiXTDov%2FLDBjqkAQQgLI9BpViBT%2Bvaxb0UubMc%2BHmUKHYNCIRra%2Fuve0xBBg%2FjG%2F6LGIaeiKNXXRgLSga5iTr3HeOjWxROAgEou8tbsqPT7K3d1EXuSFFs3DjIwVpl0mwR6qbyY4ekN8zgXt%2BCZCTkDUZHys0S3VGfhjAbIuezBBdmnDlPvyxtWZmRobORBnznlydMqjW%2BysG3P8U628Z1BKrtMmFgojOGJx4%2FNT6L&X-Amz-Signature=64b30cd9eb01c23e955fdce4250a37649bc0313bfa0d78d3b35b096a526f6a29&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIGSLKLE%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T100902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD2Lv9ucujGVAJr9UmF%2BDWQe4%2BkmqK%2BccJBhjgY2%2BpYuAIhALytJXIvAKQ5nwp1%2FlnT5OCfOrADcfvfuQwwkobazJQRKogECLn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzwSiXt2W9rRkgTpSsq3ANH9IO%2FGDm1i%2BSfliRaOKoi0d2FnHLCsznPKL51%2BuOB7SkkKfsJcS10IN1%2BzJVD0KJaz%2FnGcGu688Y3Q%2Fcz3yXb3pdViI2mcsV4YEYA05IVgmzjGyMzj2K6zXbXIjg12%2Bwt6mr6el%2Bhen%2FXVJ69QBzNiLJGKJUIDlVRcI9CAZ8Q6GvXpQ%2FEzeCUw%2FiubPPI96OqQNAks8n0r0jCzbJDT2wFB1FJPe4TrxWc%2BADzKI5oOTEPFl3gx5WJD%2FAwlYqoJSc3lpJ2Co9o0KvdSATSUq4jNtycgDQtUp1UwSBJi0I%2Fzi5vcymPuhYoFQR4E1Xf2%2FklIo9Ds%2FbPgftqoIVmymJDZYLvZCrbc4U3OKiUlanrWr0lmn96OHH0Zu%2B55psk3HXrDBhlqC1jdH3VAqzncmKCLWnH33XVKaERAwjtdSMDMjR5XZv9Fgr6uAVi%2BQ2VZc15dfyFpdhvVmqIFkyv%2BwtfAya4XlhsgiaVEstFnMa62YDV2m1etKZTB5y%2F54wDCq4w5NUHvKmkqY0Qu3mfgQnt%2BT0ojp0QY5n6OkumHPQGG8JIerx%2F4nPztWS5J9rQ4KM882J0EHqrDTvQwCJjXhdXDaWb64zUYnMrSSBVatAtLMjeIoexUtqa1ekiXTDov%2FLDBjqkAQQgLI9BpViBT%2Bvaxb0UubMc%2BHmUKHYNCIRra%2Fuve0xBBg%2FjG%2F6LGIaeiKNXXRgLSga5iTr3HeOjWxROAgEou8tbsqPT7K3d1EXuSFFs3DjIwVpl0mwR6qbyY4ekN8zgXt%2BCZCTkDUZHys0S3VGfhjAbIuezBBdmnDlPvyxtWZmRobORBnznlydMqjW%2BysG3P8U628Z1BKrtMmFgojOGJx4%2FNT6L&X-Amz-Signature=1c722e38329058e1e3fd92d27523f5cd582aa5e11d5c8c3c84cf891996c5fb33&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
