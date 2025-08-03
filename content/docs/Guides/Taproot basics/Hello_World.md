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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNKCYVAK%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T030324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCAb5sJcUj4AdIP8yf7v9CuxWaamoRKZSFFRzQyGyaPPAIhAKIh8eLg%2FEpLSoPu9e4R%2BX3NPsnpL8TiISFGLC%2F0BQG8Kv8DCB4QABoMNjM3NDIzMTgzODA1IgwaSA8%2Byc4NOtREA4Qq3AOaJ0Xmd6gneJrkF%2FnFUd3M9kqnzDelV1t%2FXHTqJnuttn7%2B6OdBMmNs6uEwZDcuW51iVwv582e0ohFVUYMLCTfw8j4j8ORKQ7Fwgo22sL%2Bw5uw1e%2BSItVRqr5i%2BoViEUgBjDpO0ZnZftnQg6cFdMo1uFwRy7rTX8EYOQ1rA887B0BedbvpP7jxMV%2Ba8Xc5lUXn07u6M1ONOowTY4ytAHdq2IWfbQUoxLkpF16Z8EVYh%2FYHd7HC1YXGpk%2FiTdwYjfrQ6vSEDWeFXopaqKC%2BVpaYokJ95gWFEZZeYrqd6dV65U7Wyn93ZIvWSvhMRatb6MRfmRLU0FmGRRTCpLT1SIsm25f%2BJtCNvjNcT6lnDOR8ODk2tYAoPgMkRRevpPaC1xEesXjzzhKpd7SIon1ImowNFTw88GmZbuxwdkGmAtwU44usw3PGsfgUXEimdxxYU5yV24q7BXuNnHJAKAuuLqEI62CK3%2F0KQPXD%2F1fIxDgHMx0uBIteY8cx7RtZRA3xkEvDkkORG%2F7yBx1KzmlbdvLT6KhHsL2b7YYg%2BTlcQzYuJCkgks3XPU6NTCA42XSWYtxHFpKwzuYoqB2bEDtQ0%2BTJdF6WV8wJlTkxJCc4x4mylSoGaoeh4A86SqUz17jCDgbrEBjqkAS6lGsXiTvqMmEtpZfMMxqENxd%2FEUTBdxA6kOIgCzYk%2BxMCtgJ29KEuguYs%2FhF76%2FDQhcnakn9cughZhAqhItqW5Ueud95zoJsqbfvplNy%2B0KxFzxGUqnwPY9g2xRjgFG0zAxzctg%2BmgphaPh5df2TJwYy5ZZG0WDZ2jAK8RvhdlNEHhrjAmGnEFRzEpy4AtOaxSiRCGfUgg2HivBjE9ptrv84tF&X-Amz-Signature=7f23854ddd412880292ffdd27da0bf40b93156ea57ced457d9c2054ca1a3cd72&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNKCYVAK%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T030324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCAb5sJcUj4AdIP8yf7v9CuxWaamoRKZSFFRzQyGyaPPAIhAKIh8eLg%2FEpLSoPu9e4R%2BX3NPsnpL8TiISFGLC%2F0BQG8Kv8DCB4QABoMNjM3NDIzMTgzODA1IgwaSA8%2Byc4NOtREA4Qq3AOaJ0Xmd6gneJrkF%2FnFUd3M9kqnzDelV1t%2FXHTqJnuttn7%2B6OdBMmNs6uEwZDcuW51iVwv582e0ohFVUYMLCTfw8j4j8ORKQ7Fwgo22sL%2Bw5uw1e%2BSItVRqr5i%2BoViEUgBjDpO0ZnZftnQg6cFdMo1uFwRy7rTX8EYOQ1rA887B0BedbvpP7jxMV%2Ba8Xc5lUXn07u6M1ONOowTY4ytAHdq2IWfbQUoxLkpF16Z8EVYh%2FYHd7HC1YXGpk%2FiTdwYjfrQ6vSEDWeFXopaqKC%2BVpaYokJ95gWFEZZeYrqd6dV65U7Wyn93ZIvWSvhMRatb6MRfmRLU0FmGRRTCpLT1SIsm25f%2BJtCNvjNcT6lnDOR8ODk2tYAoPgMkRRevpPaC1xEesXjzzhKpd7SIon1ImowNFTw88GmZbuxwdkGmAtwU44usw3PGsfgUXEimdxxYU5yV24q7BXuNnHJAKAuuLqEI62CK3%2F0KQPXD%2F1fIxDgHMx0uBIteY8cx7RtZRA3xkEvDkkORG%2F7yBx1KzmlbdvLT6KhHsL2b7YYg%2BTlcQzYuJCkgks3XPU6NTCA42XSWYtxHFpKwzuYoqB2bEDtQ0%2BTJdF6WV8wJlTkxJCc4x4mylSoGaoeh4A86SqUz17jCDgbrEBjqkAS6lGsXiTvqMmEtpZfMMxqENxd%2FEUTBdxA6kOIgCzYk%2BxMCtgJ29KEuguYs%2FhF76%2FDQhcnakn9cughZhAqhItqW5Ueud95zoJsqbfvplNy%2B0KxFzxGUqnwPY9g2xRjgFG0zAxzctg%2BmgphaPh5df2TJwYy5ZZG0WDZ2jAK8RvhdlNEHhrjAmGnEFRzEpy4AtOaxSiRCGfUgg2HivBjE9ptrv84tF&X-Amz-Signature=42e2bcb2050f51965e88794cf1da91d94c91ab621a027ec8b27c81a63b8d8bfe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
