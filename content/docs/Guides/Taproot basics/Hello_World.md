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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6OMYG4K%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T003548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIHBsJ2DHRS1g%2FkVIxBhQXPSHGBD7Z9BEXlxOCbSrv95jAiBjLV3kxRHFSDhATISRhoLi1HPOi7WxooDij3JuB85CPSr%2FAwhREAAaDDYzNzQyMzE4MzgwNSIMahYQJnaLZeYUjf51KtwDTeRn1FbCAXkNDWMOS1uPg%2BODc1FdDBGzjXTFHK%2Bmn3eUyXfErVLPks7CXMJfFwI71lqvxIHmflOcY6bcLRA105gdPEAEsf3BO9%2Bt8XdFI9b5GznNrcYC8yTvbymxh2S%2BMS722n8bEMywdEpfdadxmePlKTu3ootSQzglBEg1hm%2FRIvUKVDvD9K0oZdUruVUr7yNoMJ03Q%2FRfLUTWkkbxFxm4yAxjtuwGFIR2FkWIUxPXbmEykHWL4w04P65ltUlzK8%2FY1nBGafvDbLnxwe12mFfbg4TF2ofIuhSg7VGvZSWcuMGmc%2BNwp395WFcAzsSf%2B1hB%2F9mnoXRk8nynYugAdQMUqp2ie%2FkneWIRzGyjToc9dTJ3hf%2BkXX%2FKhj3CLwK%2Bov8vhETLAbuFprKEAhOOR0fEEfW1GDEwzeupAlznlHCrYiQxUScAw7dj2i4zDY4T%2BfhhJZKR95kgoJLxks%2B6Zkm%2F%2BlK0vRnsTdYsTOHl06b1OAJUcAOpqCNlIuVyIuKYzsm5km1i2f12rf1w6hac7Ze3dvUwyNC1DCJRo63UbpSvJCw8ngHcbsLpWE8BixM4PBMVsx1RjlFlFrF368kIY6J90rA3SQW0A2ZmvLAeiVSR5TJ6xwRPDPIAELIw0uyPvQY6pgHvIdAb%2FImDeMWkc4q5BjEp2aCD1u4bAEuDibtOU1OGxyR%2BMLcXqV0T7%2B2j1r7Lz7QyoSbcUtgDiQ33rJ6NIR6iJc02qRuQw2JFM62jkyqCEuyefC2GzVCQtQyeNB9VcEcHYSrxhgFrNOb%2F4cqkzkI8PSOMa3jB58CrhP18TqWf8TI0zZDShcW32cRsC155%2B7KUiXV%2Bf3hS%2FuKaMqqX0uon1yDy0sV6&X-Amz-Signature=397d1d904e133d5d59c01a1e281e81e78a63c0d2b053ab9b1dea3a2e21ed248f&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6OMYG4K%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T003548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIHBsJ2DHRS1g%2FkVIxBhQXPSHGBD7Z9BEXlxOCbSrv95jAiBjLV3kxRHFSDhATISRhoLi1HPOi7WxooDij3JuB85CPSr%2FAwhREAAaDDYzNzQyMzE4MzgwNSIMahYQJnaLZeYUjf51KtwDTeRn1FbCAXkNDWMOS1uPg%2BODc1FdDBGzjXTFHK%2Bmn3eUyXfErVLPks7CXMJfFwI71lqvxIHmflOcY6bcLRA105gdPEAEsf3BO9%2Bt8XdFI9b5GznNrcYC8yTvbymxh2S%2BMS722n8bEMywdEpfdadxmePlKTu3ootSQzglBEg1hm%2FRIvUKVDvD9K0oZdUruVUr7yNoMJ03Q%2FRfLUTWkkbxFxm4yAxjtuwGFIR2FkWIUxPXbmEykHWL4w04P65ltUlzK8%2FY1nBGafvDbLnxwe12mFfbg4TF2ofIuhSg7VGvZSWcuMGmc%2BNwp395WFcAzsSf%2B1hB%2F9mnoXRk8nynYugAdQMUqp2ie%2FkneWIRzGyjToc9dTJ3hf%2BkXX%2FKhj3CLwK%2Bov8vhETLAbuFprKEAhOOR0fEEfW1GDEwzeupAlznlHCrYiQxUScAw7dj2i4zDY4T%2BfhhJZKR95kgoJLxks%2B6Zkm%2F%2BlK0vRnsTdYsTOHl06b1OAJUcAOpqCNlIuVyIuKYzsm5km1i2f12rf1w6hac7Ze3dvUwyNC1DCJRo63UbpSvJCw8ngHcbsLpWE8BixM4PBMVsx1RjlFlFrF368kIY6J90rA3SQW0A2ZmvLAeiVSR5TJ6xwRPDPIAELIw0uyPvQY6pgHvIdAb%2FImDeMWkc4q5BjEp2aCD1u4bAEuDibtOU1OGxyR%2BMLcXqV0T7%2B2j1r7Lz7QyoSbcUtgDiQ33rJ6NIR6iJc02qRuQw2JFM62jkyqCEuyefC2GzVCQtQyeNB9VcEcHYSrxhgFrNOb%2F4cqkzkI8PSOMa3jB58CrhP18TqWf8TI0zZDShcW32cRsC155%2B7KUiXV%2Bf3hS%2FuKaMqqX0uon1yDy0sV6&X-Amz-Signature=678fc13ac7e56e445a2615fd3d7b852ead3487475e3c68eea14403f58118a78b&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
