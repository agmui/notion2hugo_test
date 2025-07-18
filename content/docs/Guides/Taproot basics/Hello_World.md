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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SU4RDALA%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T171213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJIMEYCIQD3CZiKKmwc37WYdiS%2BYXHVoo3eMbKRclNwWRimGi9DhQIhAK9bQ6SmT93l%2FCSL7fF2gypiK1eBm6O0%2FA3hn4UhHd66KogECJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwhRjKq%2Bn9JfyjLLJUq3ANUltkQtQKy0h2bYfp%2BoU3hZ7DRsOmZfewgjt9eDklLCczfnaoQh%2BjvKjfzlUN%2BVgw7R9xAMY1vt0IJltJphT8cY82AYOoM8bAHab7WxTsTO%2FyzcSZCl0I1eVhjeF%2BbWYWp9mmon0AqAoQMdGReII6twGMVlPSMaMXie7QESb%2F1R2z1hdtuasfxyXTJofpfrEb%2FheaCduV8o%2Fua5xGodCCAOHQQJlfBW7O8zxgk2MDgXNIbLY3bX8jt5aa5danVGnYjTmhBPzD4xFggxqgJ54Gw0MY11MSpLYzjtpx%2BjkpjIyXpR5f9cOlK8RCGaj2YK2Oinpky7wGaGtaTnjrf1G2z8N7V9Kkm26sd%2BxRwy3dsWDAyZItjxRKKtp3I6qlftEKbGzXnJBWiNOHrCWplCsFky36z3DbD2rA%2BZrj1Mexu4ts7rv6MYq1KmNAFMi57pa4IsgwJoNHicre7FK99TA%2FEvUgt4RJoz3mz9Mt9cHhhpUgRm95OGMxuc%2F44BooW8Ge%2BfBZW0Ok1mAMpndyLN98SvLu5rna7xJEwODqaIO0D3i2GIuyBb1mEO5GKoJPFoQ3aXoLpP8WV3ek58zJLkP1CLEJalCM%2BR6kOxLt2B0yzRTulEowc9TaoSnUqAzCV6unDBjqkASTl5oDcqtPeXdvGKckR9uRDJnoBj2IluFEjwiTYaJ5emxdpt5nHxq4QPdzbYXLlYwiSWPSBW1vSPv9u2MSbPaR3VvEqkv1FPtj2UEav%2FC4cSsqSMDuIoRt8e6JEbNUA%2F6K0WXWmqx3WxtoZyodYqZwKzvnAbcwjapnvhCRMbdPtPsxH4rvXmPKFgGPWQy1L7i0WNsOHwOTOsBb03wKdr%2FYYQ%2FoK&X-Amz-Signature=40fb743cdbaeb960fb7f6aa5413a1f54bbd381dc05bad5f39992e4075bb1d74a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SU4RDALA%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T171213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJIMEYCIQD3CZiKKmwc37WYdiS%2BYXHVoo3eMbKRclNwWRimGi9DhQIhAK9bQ6SmT93l%2FCSL7fF2gypiK1eBm6O0%2FA3hn4UhHd66KogECJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwhRjKq%2Bn9JfyjLLJUq3ANUltkQtQKy0h2bYfp%2BoU3hZ7DRsOmZfewgjt9eDklLCczfnaoQh%2BjvKjfzlUN%2BVgw7R9xAMY1vt0IJltJphT8cY82AYOoM8bAHab7WxTsTO%2FyzcSZCl0I1eVhjeF%2BbWYWp9mmon0AqAoQMdGReII6twGMVlPSMaMXie7QESb%2F1R2z1hdtuasfxyXTJofpfrEb%2FheaCduV8o%2Fua5xGodCCAOHQQJlfBW7O8zxgk2MDgXNIbLY3bX8jt5aa5danVGnYjTmhBPzD4xFggxqgJ54Gw0MY11MSpLYzjtpx%2BjkpjIyXpR5f9cOlK8RCGaj2YK2Oinpky7wGaGtaTnjrf1G2z8N7V9Kkm26sd%2BxRwy3dsWDAyZItjxRKKtp3I6qlftEKbGzXnJBWiNOHrCWplCsFky36z3DbD2rA%2BZrj1Mexu4ts7rv6MYq1KmNAFMi57pa4IsgwJoNHicre7FK99TA%2FEvUgt4RJoz3mz9Mt9cHhhpUgRm95OGMxuc%2F44BooW8Ge%2BfBZW0Ok1mAMpndyLN98SvLu5rna7xJEwODqaIO0D3i2GIuyBb1mEO5GKoJPFoQ3aXoLpP8WV3ek58zJLkP1CLEJalCM%2BR6kOxLt2B0yzRTulEowc9TaoSnUqAzCV6unDBjqkASTl5oDcqtPeXdvGKckR9uRDJnoBj2IluFEjwiTYaJ5emxdpt5nHxq4QPdzbYXLlYwiSWPSBW1vSPv9u2MSbPaR3VvEqkv1FPtj2UEav%2FC4cSsqSMDuIoRt8e6JEbNUA%2F6K0WXWmqx3WxtoZyodYqZwKzvnAbcwjapnvhCRMbdPtPsxH4rvXmPKFgGPWQy1L7i0WNsOHwOTOsBb03wKdr%2FYYQ%2FoK&X-Amz-Signature=065edff6505541ae4aff6bf7795fbe85388eb48892fc9761134bc0b1eb67c4f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
