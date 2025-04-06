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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3C2A5NK%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T160807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCs0fP1TlIEU1ZGyN40vEgud5JX6qxocKw6Bte5QtesngIgFapFPlvBTgjx0DQsx8Fyb2yfyWrmLuG2qM59xaCZtskq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDJgJtxOXLAx7L4x3pircAy6jaklOlRdHVrOcihMzXWcNFMLE%2Fq9kYI4B%2BsgN6Y0hQxaoEzghC5AxiV393cftjFNZ%2FLmBlSzfiTEJLM3Q86LIvGL59EKCaZ%2BFt2m6N3CCY72FSs7XWxBPvYCM3SbZXhIV%2BKHgcbxmJVaLvg9zai3sAYejUgwN21iaQFFOHRlfYrEq%2Bq5IUwUn6e4BoEmwbHNSFXpN%2FDUMjyKWpEybywhghNVmId6ctkiQe9hV1K4TsdCxlv3I5245sQaEvKnjObZ2PdjzsP1AYLBR0M1OHkKgX%2BG9FjqGcS2UvuM%2FdGMX5nvNjv7m5Zwxf5o1ccaXMekhtPfzG3ahNROsnCLaXpGFK5CxWM7II%2Fwk3SNS7hwoIvullKYR%2FaDdYEXyaVTSB1hoDfA5X%2F3E2NYw1aD%2BUay8bmx1mKJLKwaC1yT9DqKRdvpLCywUV%2FaNCVbu2ran3gvRoiXzwsZeqltVId3wHMc8fIDg2cEPuARiS9ZQfIr5uiZ5g3NkFf3liHR255QY6DPuW050jnN%2F4BF8pSbcKb5FNDLLfR3hGEZSr2XA5AsD8XF0rqZG0q5zZOJhTx9otDvq3O9qY3O98o6IdmEj52A21sEMcswfvXwBzNEB2oZKMQ8aQdTN0rfZjWmhMP6hyr8GOqUBhKlZlEvxSqyCbGRulBXqygbCNuWLptOYhBEyP0Qp8H%2FHs0euVBD5%2FniiKPPpkl16AZ%2F4fHLR2zYxX5atq2ayynxnD2Fst5Zum8L5Jj08Yr1EpsHjrosT5KH%2B%2BQfe%2FTTwRdf4Q1h1vN42ChXsYy%2BDPLK2KEnru9eJLF6Xq7dppq9uK47q%2B1NvFoJkXRAAhXlT4Qbmz4gm5Iptqn%2B%2Fna4jZDrw8V1i&X-Amz-Signature=3ae3c6fae2d5498c607b026ac31f7bcb9a926845e08b64a3fd945f1d30c1fdba&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3C2A5NK%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T160807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCs0fP1TlIEU1ZGyN40vEgud5JX6qxocKw6Bte5QtesngIgFapFPlvBTgjx0DQsx8Fyb2yfyWrmLuG2qM59xaCZtskq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDJgJtxOXLAx7L4x3pircAy6jaklOlRdHVrOcihMzXWcNFMLE%2Fq9kYI4B%2BsgN6Y0hQxaoEzghC5AxiV393cftjFNZ%2FLmBlSzfiTEJLM3Q86LIvGL59EKCaZ%2BFt2m6N3CCY72FSs7XWxBPvYCM3SbZXhIV%2BKHgcbxmJVaLvg9zai3sAYejUgwN21iaQFFOHRlfYrEq%2Bq5IUwUn6e4BoEmwbHNSFXpN%2FDUMjyKWpEybywhghNVmId6ctkiQe9hV1K4TsdCxlv3I5245sQaEvKnjObZ2PdjzsP1AYLBR0M1OHkKgX%2BG9FjqGcS2UvuM%2FdGMX5nvNjv7m5Zwxf5o1ccaXMekhtPfzG3ahNROsnCLaXpGFK5CxWM7II%2Fwk3SNS7hwoIvullKYR%2FaDdYEXyaVTSB1hoDfA5X%2F3E2NYw1aD%2BUay8bmx1mKJLKwaC1yT9DqKRdvpLCywUV%2FaNCVbu2ran3gvRoiXzwsZeqltVId3wHMc8fIDg2cEPuARiS9ZQfIr5uiZ5g3NkFf3liHR255QY6DPuW050jnN%2F4BF8pSbcKb5FNDLLfR3hGEZSr2XA5AsD8XF0rqZG0q5zZOJhTx9otDvq3O9qY3O98o6IdmEj52A21sEMcswfvXwBzNEB2oZKMQ8aQdTN0rfZjWmhMP6hyr8GOqUBhKlZlEvxSqyCbGRulBXqygbCNuWLptOYhBEyP0Qp8H%2FHs0euVBD5%2FniiKPPpkl16AZ%2F4fHLR2zYxX5atq2ayynxnD2Fst5Zum8L5Jj08Yr1EpsHjrosT5KH%2B%2BQfe%2FTTwRdf4Q1h1vN42ChXsYy%2BDPLK2KEnru9eJLF6Xq7dppq9uK47q%2B1NvFoJkXRAAhXlT4Qbmz4gm5Iptqn%2B%2Fna4jZDrw8V1i&X-Amz-Signature=e85a1c6981ec523b02fe6ce9682b2e546d1dd1419ec5c8ef1da3d74d6b8d2ba8&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
