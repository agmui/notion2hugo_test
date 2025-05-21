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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDNGEQ2Q%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T161046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIQDXV5fgjthgYdAS89xqZi8wa%2F4eqd9M9UkZ1pBgHy49PwIgelCnOB9qC7vfA%2FwnOx8%2F0CzYiQy9FXNT8LW5DvcRky4qiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDA3FVDGtXbXeRWgFyrcA%2BsNZ6MvFNS617X2jTbct7NETEe9Y4DQB3NV5o0F7%2FQNbO6Qy%2F6A7EzCHVuifwHyEkl5Tn%2Fo2CQx%2Br0htowc4d6Tvl%2B209TvmBoLHcFCRBv8N%2FOWGzVHHu6u7LWAgkpQRBtFdTEptGveG52F1L4UOSj5YiMQD6UKD7wfT9whyYRyK835LRhgc34sn0F%2BqgTNhyC5L1R7BVMHgt8Fbe%2FAoQxMw67d%2Br%2Few3idgkZrvythF26hhu0nC2Haoq2x4rIECrrSXecWYYhJqncolB6AqUy0mzMRsRcPrVj8NjebXYlqDRkmp%2Fn1T6M%2BH4IuTOCyuB2t2zCz2x%2Bkm7I2iBBQY8P8REqXKcHXyuTX1b9F43EvRmSGw1FTG8vb7YQ1N%2F%2FFwRv174k4Sz819Z8PyTLlCJFi8lurAAJ5Q3c5eRMaYwqcL4SCNvYpq%2BQ8q4EmXw0Q1fe5rJRLm2reWGvH5s3FPDtQXLNajPgaukfJQmVhxZiwPsuR3S3TEq5%2Fe%2BpLgBnZI5d1uJKvzIetFxJHcX92hgXWWr9goqA%2BZmnjufv%2F13tx3hrz%2FleToDiMl%2F7PlRBLvN7wYxZEHjI34luHs2gX404AY7d4Y5ECV1oSB5Uccq%2BPAI3gGs%2B7wZlQIwauMM%2Fyt8EGOqUB1p3ekv7I8TUllLbRgsz25VUU7ZKhdiN%2FaXXxha8%2BEVjLFhxCVRYEpz0sQhsMkbgvacJKedM536HTxRd7pQVGdGoafnkBNBeEhbYHZBkjIo8hFjf9CfJCpDRZ1XdjSZgpaEnpcLvkRlFNpGlanA6TzCasP22FHWxC0sEdNN0fguLdeNC8qo5bxb4EH16EJd3YGllBmSXMZarBpjK5fenT%2BZhRlIFR&X-Amz-Signature=4b6d830ffa9c4d9c0d3f1cfe0aa9dd11d0e4a5602aaee4938c58351f8f87cd68&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDNGEQ2Q%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T161046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIQDXV5fgjthgYdAS89xqZi8wa%2F4eqd9M9UkZ1pBgHy49PwIgelCnOB9qC7vfA%2FwnOx8%2F0CzYiQy9FXNT8LW5DvcRky4qiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDA3FVDGtXbXeRWgFyrcA%2BsNZ6MvFNS617X2jTbct7NETEe9Y4DQB3NV5o0F7%2FQNbO6Qy%2F6A7EzCHVuifwHyEkl5Tn%2Fo2CQx%2Br0htowc4d6Tvl%2B209TvmBoLHcFCRBv8N%2FOWGzVHHu6u7LWAgkpQRBtFdTEptGveG52F1L4UOSj5YiMQD6UKD7wfT9whyYRyK835LRhgc34sn0F%2BqgTNhyC5L1R7BVMHgt8Fbe%2FAoQxMw67d%2Br%2Few3idgkZrvythF26hhu0nC2Haoq2x4rIECrrSXecWYYhJqncolB6AqUy0mzMRsRcPrVj8NjebXYlqDRkmp%2Fn1T6M%2BH4IuTOCyuB2t2zCz2x%2Bkm7I2iBBQY8P8REqXKcHXyuTX1b9F43EvRmSGw1FTG8vb7YQ1N%2F%2FFwRv174k4Sz819Z8PyTLlCJFi8lurAAJ5Q3c5eRMaYwqcL4SCNvYpq%2BQ8q4EmXw0Q1fe5rJRLm2reWGvH5s3FPDtQXLNajPgaukfJQmVhxZiwPsuR3S3TEq5%2Fe%2BpLgBnZI5d1uJKvzIetFxJHcX92hgXWWr9goqA%2BZmnjufv%2F13tx3hrz%2FleToDiMl%2F7PlRBLvN7wYxZEHjI34luHs2gX404AY7d4Y5ECV1oSB5Uccq%2BPAI3gGs%2B7wZlQIwauMM%2Fyt8EGOqUB1p3ekv7I8TUllLbRgsz25VUU7ZKhdiN%2FaXXxha8%2BEVjLFhxCVRYEpz0sQhsMkbgvacJKedM536HTxRd7pQVGdGoafnkBNBeEhbYHZBkjIo8hFjf9CfJCpDRZ1XdjSZgpaEnpcLvkRlFNpGlanA6TzCasP22FHWxC0sEdNN0fguLdeNC8qo5bxb4EH16EJd3YGllBmSXMZarBpjK5fenT%2BZhRlIFR&X-Amz-Signature=50a2ee7de57ea4b8f183eca2719e36e0dc81ca2ebfc4aa74ef29e2a4cc4c9d6e&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
