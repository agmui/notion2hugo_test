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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXWE4V4X%2F20260705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260705T032622Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQDzr%2Fvii27UIZKL5buPddX0kJmmaT3yd7B%2FJ9kTsMDfjQIhAOL2%2BQDD3A5%2FwzKHfrxX0%2FD59oKdTc%2BOv9AiurDZv5kLKv8DCDIQABoMNjM3NDIzMTgzODA1IgwybaZFLaxKnxxdvSEq3APfJAh4ptNChA3b41nIyx6x0iTCfWElMq%2FXaXlEOg8JsUvpxGvPyPtwiagLjeAVWRdCgf%2BrMc%2FqQhfYiPEEa7eFuEISDPH6MEXt9eT8xEgAWr5KOkSq9Bvv28EA4cqvxA85W9PsumNmk%2BtVosWIirEZm%2BDY1zcO2qzC1etFoK1BliiiG3jV3I7HVIvZ2Fp9rsiR%2ForL7Df2xKZX39a1isNPQf15DcyQBurcprb69bvNLaHP11wi3fPHVFOWpDCVMivDu3qllG4jz1Pfgvk6eNW7OSVv%2Fqp4uWep1yb0vSZZgnLkO%2FCeepCAxfKX0FndCLtgSOnpmE8i%2Bku0sV6cn90JOCHCxFdGBzjqRxSM8DkpVYMgRzfBN%2F%2Fa%2BHUI3fXFynGzylSfudu9L9PTUC5sZYU5wQvS9yD0Q6ToEFGuqVjAXeEzItxsyUg%2BuEVsAWWwZbKdAlTuJyyns6%2FeA9uVw%2FZKjw99SpQMwSZMMFYOEZFZ%2FtHd2bw67ovBckx2Ahss%2BsLbnACSwIkaq%2BbqOud4tBCUE3i7LCqXshTy9hJw3ErvpORea77qAIlntMuN3tSFDS3ITnX5DVLrUzFzeZvO5SbqRjshsCUWajxPNajT8jyoXdIVCXd6RlbHFVP9mzD426bSBjqkAcH%2F2EwwPezvPCzJOnhmTWPjVhMdHJ1yzgXGoj69QCdV%2BjRj%2FmdfqlemK2gCHMjFD1fpDNI%2BOOygZQAm%2Fh%2FmSM%2F0cHDC4PzhiAt0uykhKthzgmExnJWnLR1mmXtXg3gCxQiGfa%2FqpZErzFokdbpYymHzaNnjVEmymcPrvllyCV%2F1xtNYNg2dvTdc8bjP1Cks%2FkUl3n08nJveqtP6hacPPBPTmk7p&X-Amz-Signature=2801cb5069c1880d307fb3ada43d25aeb20c825825b75c31df232834cc0be347&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXWE4V4X%2F20260705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260705T032622Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQDzr%2Fvii27UIZKL5buPddX0kJmmaT3yd7B%2FJ9kTsMDfjQIhAOL2%2BQDD3A5%2FwzKHfrxX0%2FD59oKdTc%2BOv9AiurDZv5kLKv8DCDIQABoMNjM3NDIzMTgzODA1IgwybaZFLaxKnxxdvSEq3APfJAh4ptNChA3b41nIyx6x0iTCfWElMq%2FXaXlEOg8JsUvpxGvPyPtwiagLjeAVWRdCgf%2BrMc%2FqQhfYiPEEa7eFuEISDPH6MEXt9eT8xEgAWr5KOkSq9Bvv28EA4cqvxA85W9PsumNmk%2BtVosWIirEZm%2BDY1zcO2qzC1etFoK1BliiiG3jV3I7HVIvZ2Fp9rsiR%2ForL7Df2xKZX39a1isNPQf15DcyQBurcprb69bvNLaHP11wi3fPHVFOWpDCVMivDu3qllG4jz1Pfgvk6eNW7OSVv%2Fqp4uWep1yb0vSZZgnLkO%2FCeepCAxfKX0FndCLtgSOnpmE8i%2Bku0sV6cn90JOCHCxFdGBzjqRxSM8DkpVYMgRzfBN%2F%2Fa%2BHUI3fXFynGzylSfudu9L9PTUC5sZYU5wQvS9yD0Q6ToEFGuqVjAXeEzItxsyUg%2BuEVsAWWwZbKdAlTuJyyns6%2FeA9uVw%2FZKjw99SpQMwSZMMFYOEZFZ%2FtHd2bw67ovBckx2Ahss%2BsLbnACSwIkaq%2BbqOud4tBCUE3i7LCqXshTy9hJw3ErvpORea77qAIlntMuN3tSFDS3ITnX5DVLrUzFzeZvO5SbqRjshsCUWajxPNajT8jyoXdIVCXd6RlbHFVP9mzD426bSBjqkAcH%2F2EwwPezvPCzJOnhmTWPjVhMdHJ1yzgXGoj69QCdV%2BjRj%2FmdfqlemK2gCHMjFD1fpDNI%2BOOygZQAm%2Fh%2FmSM%2F0cHDC4PzhiAt0uykhKthzgmExnJWnLR1mmXtXg3gCxQiGfa%2FqpZErzFokdbpYymHzaNnjVEmymcPrvllyCV%2F1xtNYNg2dvTdc8bjP1Cks%2FkUl3n08nJveqtP6hacPPBPTmk7p&X-Amz-Signature=b9ed77eee0f82c66acfa5782839d281f358a6b1d1b49b15dd6bd186a3b5c02d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
