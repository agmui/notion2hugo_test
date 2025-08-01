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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IBGESZ6%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T061645Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDvNUXD1x1OkxJBV888hElDM024qeu6orSUWH2nho%2BEZAIgUW%2F%2FVlW2WDjWTVcde%2B5sW3HuUtV6ROXEY5yGdAq%2F2d8qiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDcpgRWOQrArCM9BGSrcAxzb61%2BgOIIV5gMSKFMb5GMsreIajtMFjsSTVzXH5j57oWla%2FWSO8z4O3L5pKXLbNTvIoCXrjVrWLHdLHsSQVTwYYPE0yGxf0qDUCgtaU8p8U6viBkjM%2F%2Ft3OyRkTFzKMZX7gDK8VNT9JwyX0U%2BsXhSOA5rVLQC40MnLSQr5XjcmzyuYmBfZzQ2FxwRYctjR2ziDKL7X5aRMX3Gzc0iyQY9ohwob80xQngzk9IzB2btf5RjXV2NqBSU%2FP16GjH1Qpk%2FJAd2k%2FFtiz6yHh0bG%2FTj3fL2lyq1j%2Fuj3o2wiDBp2aU18zezHQeviVe6giqKXVkOzS9mHOa%2BqSMzuvlvMJfZPjraENQ7KGscdAZaFdJ6oXDclp2EfkSmR29WPnZ62HW87BeFu%2F9coW3LjfghiayyFqQJNmuTvhkzRfMswMp8L%2F60aft0TpmiuEgsr6CM2Aio5yz%2BnnrTT8IGhhygaQLPyf0P0EWyybSfXKQaaB9L3oXw95VR4jVZ5cwbVI8fjawl4o0e%2BqXpfiuS7AuNdm8wLfuyrTnd4BYw3EGLa5g2QnuODvMTP2ugHe9SIHQELeEfb5yC0T6UkXyM61M1erjJzI7owN8jasDYBIs04ig4wwfv3QauFMc7E5iLeML%2BbscQGOqUB5Co%2BTc4343OXyiqbsLq8I3Y44gKPAGm8cXTimX%2FxLCm5Dsg4p%2BmexW%2BSatMz7ANdobMrPfXXbo37i80pSw0T0LceCAtHt%2FR1m8LZX37feJWiRb9Dm8U6y%2BaynNx0YVp3GdY1LiM7rWpZQn3yZHs%2F3lRJLuAc2syHqiGdrRZma0puBpQxXRh4I8wD%2BxksuNbdAC%2F91xfAndjjl%2FXf6sj2uioZRFjZ&X-Amz-Signature=5ee3956c41601686dcdde087ba69ba70777f3f94e67fe933b2051ba6361c1af8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IBGESZ6%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T061645Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDvNUXD1x1OkxJBV888hElDM024qeu6orSUWH2nho%2BEZAIgUW%2F%2FVlW2WDjWTVcde%2B5sW3HuUtV6ROXEY5yGdAq%2F2d8qiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDcpgRWOQrArCM9BGSrcAxzb61%2BgOIIV5gMSKFMb5GMsreIajtMFjsSTVzXH5j57oWla%2FWSO8z4O3L5pKXLbNTvIoCXrjVrWLHdLHsSQVTwYYPE0yGxf0qDUCgtaU8p8U6viBkjM%2F%2Ft3OyRkTFzKMZX7gDK8VNT9JwyX0U%2BsXhSOA5rVLQC40MnLSQr5XjcmzyuYmBfZzQ2FxwRYctjR2ziDKL7X5aRMX3Gzc0iyQY9ohwob80xQngzk9IzB2btf5RjXV2NqBSU%2FP16GjH1Qpk%2FJAd2k%2FFtiz6yHh0bG%2FTj3fL2lyq1j%2Fuj3o2wiDBp2aU18zezHQeviVe6giqKXVkOzS9mHOa%2BqSMzuvlvMJfZPjraENQ7KGscdAZaFdJ6oXDclp2EfkSmR29WPnZ62HW87BeFu%2F9coW3LjfghiayyFqQJNmuTvhkzRfMswMp8L%2F60aft0TpmiuEgsr6CM2Aio5yz%2BnnrTT8IGhhygaQLPyf0P0EWyybSfXKQaaB9L3oXw95VR4jVZ5cwbVI8fjawl4o0e%2BqXpfiuS7AuNdm8wLfuyrTnd4BYw3EGLa5g2QnuODvMTP2ugHe9SIHQELeEfb5yC0T6UkXyM61M1erjJzI7owN8jasDYBIs04ig4wwfv3QauFMc7E5iLeML%2BbscQGOqUB5Co%2BTc4343OXyiqbsLq8I3Y44gKPAGm8cXTimX%2FxLCm5Dsg4p%2BmexW%2BSatMz7ANdobMrPfXXbo37i80pSw0T0LceCAtHt%2FR1m8LZX37feJWiRb9Dm8U6y%2BaynNx0YVp3GdY1LiM7rWpZQn3yZHs%2F3lRJLuAc2syHqiGdrRZma0puBpQxXRh4I8wD%2BxksuNbdAC%2F91xfAndjjl%2FXf6sj2uioZRFjZ&X-Amz-Signature=0c3403ebba69b6f194377dfd16913f1cce2a2830807e9dc401aa514d357ab9f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
