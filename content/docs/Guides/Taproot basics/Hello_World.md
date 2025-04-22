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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2GJK22R%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T220807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJGMEQCIE8kiFVp%2BXBnprx7oF2SZ5uoKnclz8tHYonDFHsoqTWpAiA03GohqptlHIN9fzY0m9sPjmn%2FUv8F74QuKipeK1Ov5SqIBAjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhjIDOxxaoDbwR5xoKtwDflypsCI%2FRtT52Fx8yDiM4%2B6mCJZyhQJn5nfCnc0%2FIVrCUkYgznVSmcBPASq1A2cMbEWomCqE3MBGR7iQR4QFTwF42TgWnhX85dH%2B2a6MxD95Hzo0TZ4pJqWKu53tUIaBGoIlf%2FKjZzotHT%2BOZtCYRXGGkyEp%2FcaQPPIJPE8QeR2zB2KPTlBpsYqdcu2QnJXFbooxYtMtoE81HoL1lWQ66mOFHRhLmGBm5Pk9h8oUJu7pzoZ6C6YntW%2B6faU02Fv6EdcE36r0I95aMGDR%2FV5AAHarQIIQkYr0%2F2eJXyv8buY1apy%2FQ4JvuLlHLhPKEuUpWjjRguDhfopzw2LJuGpN9l%2BXHvHjV41Cm0OdeHvigVrX9RaPmU3f0HFpGQ%2BYRgvzl1W%2B8fsd97OKZQUudM9yONzt9m2lDh0Yb8ZKGqb3HYYAlj%2FuwAYKPV2X3QRRV0wlb1LZe41DU9zov21bHQo2u3MXoPNzr%2F%2Bd8p8Qc2%2BcmA1w8qukZzNfK346JBKYGYUukgfx9%2FxPKFLItPVtitR8Uze%2BcpXntNQTnEWKxa%2BUqHLT4fz3hS%2FJFnnVNLKh%2BDnF63%2F0usDv09U3q4s2JmEYlCWwoiqtK83fuh0tBTnm1tmWAiSLy1g0W4buB5ww3qOgwAY6pgGzN76MbT8RKNv9is20p3ZgMhUVpmyWKlLkcT959Y8KVIph8prDtN3xrjJDMFBv9DHI5l%2BmgxKy7Xid32BKPfX0w%2B%2FS%2B7DPLz3jGFsHJyBKIXZmLGtRVyikAjUsR%2FsdM7pz32Lt5ngx8ykgflCt7oxEUusTIS42Mi6Z71RUwpwD%2FYkso9NnM286UUlCq5Rp5ZhaPcv9GbNI%2FqnEnfV6NeHEsvNoduqD&X-Amz-Signature=4a40d3e34b14245d1dae5bc7449cacd72274c89b935f164be77f9069f1654c9c&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2GJK22R%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T220807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJGMEQCIE8kiFVp%2BXBnprx7oF2SZ5uoKnclz8tHYonDFHsoqTWpAiA03GohqptlHIN9fzY0m9sPjmn%2FUv8F74QuKipeK1Ov5SqIBAjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhjIDOxxaoDbwR5xoKtwDflypsCI%2FRtT52Fx8yDiM4%2B6mCJZyhQJn5nfCnc0%2FIVrCUkYgznVSmcBPASq1A2cMbEWomCqE3MBGR7iQR4QFTwF42TgWnhX85dH%2B2a6MxD95Hzo0TZ4pJqWKu53tUIaBGoIlf%2FKjZzotHT%2BOZtCYRXGGkyEp%2FcaQPPIJPE8QeR2zB2KPTlBpsYqdcu2QnJXFbooxYtMtoE81HoL1lWQ66mOFHRhLmGBm5Pk9h8oUJu7pzoZ6C6YntW%2B6faU02Fv6EdcE36r0I95aMGDR%2FV5AAHarQIIQkYr0%2F2eJXyv8buY1apy%2FQ4JvuLlHLhPKEuUpWjjRguDhfopzw2LJuGpN9l%2BXHvHjV41Cm0OdeHvigVrX9RaPmU3f0HFpGQ%2BYRgvzl1W%2B8fsd97OKZQUudM9yONzt9m2lDh0Yb8ZKGqb3HYYAlj%2FuwAYKPV2X3QRRV0wlb1LZe41DU9zov21bHQo2u3MXoPNzr%2F%2Bd8p8Qc2%2BcmA1w8qukZzNfK346JBKYGYUukgfx9%2FxPKFLItPVtitR8Uze%2BcpXntNQTnEWKxa%2BUqHLT4fz3hS%2FJFnnVNLKh%2BDnF63%2F0usDv09U3q4s2JmEYlCWwoiqtK83fuh0tBTnm1tmWAiSLy1g0W4buB5ww3qOgwAY6pgGzN76MbT8RKNv9is20p3ZgMhUVpmyWKlLkcT959Y8KVIph8prDtN3xrjJDMFBv9DHI5l%2BmgxKy7Xid32BKPfX0w%2B%2FS%2B7DPLz3jGFsHJyBKIXZmLGtRVyikAjUsR%2FsdM7pz32Lt5ngx8ykgflCt7oxEUusTIS42Mi6Z71RUwpwD%2FYkso9NnM286UUlCq5Rp5ZhaPcv9GbNI%2FqnEnfV6NeHEsvNoduqD&X-Amz-Signature=ce69f43ce56bc2fa85496414ebb5c2151a317ac4cd50ccf5c58e2e752c1fcc4c&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
