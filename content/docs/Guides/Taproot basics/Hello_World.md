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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YUJTTP5%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T110122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDwwzFbEm3I%2FxwugH49RNOq0p%2FeyWiN9%2ByIAJLNBNIkzgIgV7PSwgLCxABahT70CLuDy9xYInD8%2BN5r0Y4uGGUR948qiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPFHOVD5lHE2t%2FCiMSrcAyDQUcWDn5Wt49bIAEx9cSiNNQNpYtWNVPb880av2E0Z%2By6dXzJ7Luhbgbzl96HJ2eAc8x8aq7wsS4MlnOvXn862G6xtXmKPlifzM25LbgUeDC0HAf2B69mu%2FInM%2BKvFIkil0SYMF9orQPwECg3Vf%2BN5T2jXxBJJL1cC73qovQm5waobMyYFraX5CDIkvO8JSqUTEAFtpuEPdcvrZfeBOE0JXOpTaWJJ0ecldTUCui8ouL%2FTuGzqDHruW19z0uiTWhTKRO0iOtHTxEJOuyKjTqobaRcwVyZDfvYuuHvA6kIxWkGjf%2FtEQHbwn9nKJjZ5C5BP09tXXbLp2Wr5A2hXvV24gHbbFBOfnl86gZ0LCKYuyPNA8sd9L1uSAXhQRZPYZcE2lyPaqQMh88YqnsjIpcS4zMs3Jk8Qbq9LGYPji4QKR05tDQdoby%2FmCUAai8TxKJVSp4mfBwfyrbFDur71ZWy7KwDX6EV6mtkV1%2F5lemidF6Pbkrbsa%2F%2BSVMzkUXMcxGABBOBczCZIOguBJ39CXerGK31ZJi6IJSniYSR8CFN1HdAgzJSvGYREbVlf9AVMklN2aFiyzkyX6UhwxvNvd2lsCDwTgvO1cqaM%2BxEdCdqNUOVk2U9jyJzWofABMJqGsb0GOqUBcWOaXpIEM5WYAswwX9Yd667WO8%2BHp9bkT5aKKGSwxkE5PYh1OjcknIa5DBEL%2FUvQPd2KTpyktguN0o9i6sFaD2Al%2FFDFzyqJzlN4Er5OIbG6BYj2DNd0kqNuocS2RRNjI2vmzj1VdgOnakAiyG3P9IxtMERd1sMvtkRERNDw0NMwrseI9qVq9rfDPrmQsY8eyB8U7q1IuohfyKm2mJxcdc3sPTj2&X-Amz-Signature=6cd4bb8352d0d08ca1b91dec6051bf02dc0c150e5d32c94d202b72959088be11&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YUJTTP5%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T110122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDwwzFbEm3I%2FxwugH49RNOq0p%2FeyWiN9%2ByIAJLNBNIkzgIgV7PSwgLCxABahT70CLuDy9xYInD8%2BN5r0Y4uGGUR948qiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPFHOVD5lHE2t%2FCiMSrcAyDQUcWDn5Wt49bIAEx9cSiNNQNpYtWNVPb880av2E0Z%2By6dXzJ7Luhbgbzl96HJ2eAc8x8aq7wsS4MlnOvXn862G6xtXmKPlifzM25LbgUeDC0HAf2B69mu%2FInM%2BKvFIkil0SYMF9orQPwECg3Vf%2BN5T2jXxBJJL1cC73qovQm5waobMyYFraX5CDIkvO8JSqUTEAFtpuEPdcvrZfeBOE0JXOpTaWJJ0ecldTUCui8ouL%2FTuGzqDHruW19z0uiTWhTKRO0iOtHTxEJOuyKjTqobaRcwVyZDfvYuuHvA6kIxWkGjf%2FtEQHbwn9nKJjZ5C5BP09tXXbLp2Wr5A2hXvV24gHbbFBOfnl86gZ0LCKYuyPNA8sd9L1uSAXhQRZPYZcE2lyPaqQMh88YqnsjIpcS4zMs3Jk8Qbq9LGYPji4QKR05tDQdoby%2FmCUAai8TxKJVSp4mfBwfyrbFDur71ZWy7KwDX6EV6mtkV1%2F5lemidF6Pbkrbsa%2F%2BSVMzkUXMcxGABBOBczCZIOguBJ39CXerGK31ZJi6IJSniYSR8CFN1HdAgzJSvGYREbVlf9AVMklN2aFiyzkyX6UhwxvNvd2lsCDwTgvO1cqaM%2BxEdCdqNUOVk2U9jyJzWofABMJqGsb0GOqUBcWOaXpIEM5WYAswwX9Yd667WO8%2BHp9bkT5aKKGSwxkE5PYh1OjcknIa5DBEL%2FUvQPd2KTpyktguN0o9i6sFaD2Al%2FFDFzyqJzlN4Er5OIbG6BYj2DNd0kqNuocS2RRNjI2vmzj1VdgOnakAiyG3P9IxtMERd1sMvtkRERNDw0NMwrseI9qVq9rfDPrmQsY8eyB8U7q1IuohfyKm2mJxcdc3sPTj2&X-Amz-Signature=9f66d83d29eaeda5d5361b94e97f4b83992cf511c1aa9f2a8c038b3197a12cf8&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
