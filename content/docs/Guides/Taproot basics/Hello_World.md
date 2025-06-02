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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOILCLSS%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T140852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIFLLorw7nZ2H2jQMR4%2FzASIPFbpvuEPbgTBNhGLG1q6%2FAiEA5JUe6ekWR0oxc1%2BH5noLnoajAEgoT%2Bl6uOjZ90FZWVgqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN4hn8bw8QoewJQanyrcAxLdAcucuR%2Fd1YX%2B98fWxFul5v8u%2BNhj%2B0ycjCp7U64n4%2BpBXhyNvfHjTNLmg1NY8g1k6xmOsiiFdvNge%2B2KlheKOt6a%2Bf1RWfY3YPHN3674d870Ku8OvH7MSOreNVvfDNk2W4gEzbAdPBzngs%2BtP35Xg8CGwRlnDxF%2Bd%2FFxDgSSf%2FKR4clNVdebMKVyIhzh%2B3mElOGOeco4PbhM%2F3fiEBM%2FchRwKlz4oJrsywAow6DZ4R6zv6OxvK56Q5eVM6%2B2aKfr0qlYsXChbAVSCahRZWVVi3Sz6oMRfV9gGRJPtGBxInWQjysjmtDrHW4Cm21nmf84C116RdihOjU9HbBSEgIY9DEzndh0RawdcXvBpkrdUdqRB8f5hqCHUHzlpdF3RiMKbTO61i5VWGKrzLoauPO8FoD4eQJxUokiNyBG04LuQR7WmIIFR6OcNOKVFpWBTnW3bKPI8yrJXqJ7C9mctt6X4l6so5NQSzE2YELe3kFuOA1w%2Fkl5c0dxYmf798nQ4K802F60LePaUT9ngtf%2Bt1bwt0lPHxK3gRkqg%2FCOswC45OR7kFYFJSdcyz1etQOrDoWpCGReYS1Z6F3QYZarnfYY6LPAe8hP5o09cyo8V%2F2szgEFhVn312%2BTyMEzMI%2B09sEGOqUBmhWU8AwBOt2XJLtqBsQLDEOKGPw9mFlemSLPx5vnqdexKjuJfVskPu05jFT1Nj5e%2FIM5vpVWtlEkjxD75EtgoKo7qJWNXIH%2FgXvmplqA2GFVw13S46bJpsV82MIFYxUZEKvmgz5hD9x4d05j2IjBg2bDo3affFzUEnquPYz%2FFRbjG6wEnmcmDUVZmIr6NE6PJdBkp8mkIbR4FcV8RzimrXkUHI5H&X-Amz-Signature=1b210c9e676795270ccbeb5eb289b6d4e0e376263376ff2c5eda6ce8d9837b38&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOILCLSS%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T140852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIFLLorw7nZ2H2jQMR4%2FzASIPFbpvuEPbgTBNhGLG1q6%2FAiEA5JUe6ekWR0oxc1%2BH5noLnoajAEgoT%2Bl6uOjZ90FZWVgqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN4hn8bw8QoewJQanyrcAxLdAcucuR%2Fd1YX%2B98fWxFul5v8u%2BNhj%2B0ycjCp7U64n4%2BpBXhyNvfHjTNLmg1NY8g1k6xmOsiiFdvNge%2B2KlheKOt6a%2Bf1RWfY3YPHN3674d870Ku8OvH7MSOreNVvfDNk2W4gEzbAdPBzngs%2BtP35Xg8CGwRlnDxF%2Bd%2FFxDgSSf%2FKR4clNVdebMKVyIhzh%2B3mElOGOeco4PbhM%2F3fiEBM%2FchRwKlz4oJrsywAow6DZ4R6zv6OxvK56Q5eVM6%2B2aKfr0qlYsXChbAVSCahRZWVVi3Sz6oMRfV9gGRJPtGBxInWQjysjmtDrHW4Cm21nmf84C116RdihOjU9HbBSEgIY9DEzndh0RawdcXvBpkrdUdqRB8f5hqCHUHzlpdF3RiMKbTO61i5VWGKrzLoauPO8FoD4eQJxUokiNyBG04LuQR7WmIIFR6OcNOKVFpWBTnW3bKPI8yrJXqJ7C9mctt6X4l6so5NQSzE2YELe3kFuOA1w%2Fkl5c0dxYmf798nQ4K802F60LePaUT9ngtf%2Bt1bwt0lPHxK3gRkqg%2FCOswC45OR7kFYFJSdcyz1etQOrDoWpCGReYS1Z6F3QYZarnfYY6LPAe8hP5o09cyo8V%2F2szgEFhVn312%2BTyMEzMI%2B09sEGOqUBmhWU8AwBOt2XJLtqBsQLDEOKGPw9mFlemSLPx5vnqdexKjuJfVskPu05jFT1Nj5e%2FIM5vpVWtlEkjxD75EtgoKo7qJWNXIH%2FgXvmplqA2GFVw13S46bJpsV82MIFYxUZEKvmgz5hD9x4d05j2IjBg2bDo3affFzUEnquPYz%2FFRbjG6wEnmcmDUVZmIr6NE6PJdBkp8mkIbR4FcV8RzimrXkUHI5H&X-Amz-Signature=2cbb8fd5276fcb2df70681a0b1ceb1e4b457871f5f741e8f69d910082f56f6b1&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
