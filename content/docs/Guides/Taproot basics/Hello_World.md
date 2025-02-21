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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWOKECSH%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T090800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQChogXGcPkvFdp8S7uWLtVfGixi0Vvzt7tMZ9O7mRXRxQIhAJPR%2F5k7VFRFpovTNlO%2Bv0YF5iGh80J0E5c3zTvxm0ivKogECNL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwZ9X3F3oyuNciMoxAq3AO%2FYiDWi8nPbJcc3XNcE60sgA%2BHrYQS29IBi34YBrlybtYtGvkgMbEilSyoKev8qKR8JM%2FpsRZIyYuVADcW0pCuC2eACUF9deYaidHryb4u1s9ARjahTX4uuAI79cpJFVGI9wFNnVp7E84epAeXPHzcqUwjlwbFG1UGPoDELSqap96GhclfklJ3plNP1b1wJT3rwdT9KpcvRzLSO34MYi420JECwxrbzV1v0w%2BBOWcvF6oUFV5MR4megV9CUQ2u4epQ4%2FOsVDbJZdCphc99D7hAFXq8U%2FNpNcyo0mhmjNchUFTqoTd49RfEIYMlq5lhzCDHgQzYeiL%2FWfUf%2BLnkDpD9f5W6Vy6W2ZG%2B9G2w8k9UhzAWUYQnGU7RkCzbcXVSJUG7u5zR7iVAqQ%2BKAPL%2FhptsjnsarVqja3kqw2xsVVDa9hQMxCUgmf1Gd5l4Eqa1JyS%2BKH7xyKsr0W84m4%2B8Ha3ulXRQGU6kajddpMVD4DvXPu7Sz6pS7%2BEaDPbfNQXCx8E4yLnfMvagOoR6ti3m6ZLkHaQ%2F81eT9wT7FOubhIvYZQ8t2wNrv5Qh96q3Re1mI%2BOJFPd%2BEe4oEaD%2B3FtN%2BGqDymB40eAKaSYTx1N6VHRVidh3AZ69VxrfO5IfETCq%2B%2BC9BjqkAWG6eEqNtWNL0X%2BB6mS1rXUYsGWwVLzJpXnn%2B3g%2BfE6yfUGsBzaFLttNWzeYRtAUESY64cTrG9x2aMTbxZgejDYa8Hk%2FTzTC39ZCZ3as18XHsXYjj1ezVgxHWngOg7caNkVce9RmkVBehZH%2BYwz7KSW9d9fvEXCjJxSGZTfDkde8s7jxbPH6lr2vSvNOZ3C0iiqji7nghGtddAVGf0d5WzcppvrO&X-Amz-Signature=6554361d3e5f09d6b12663005abb493d2b0af4c3d60182b8319dc0c3a279d842&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWOKECSH%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T090800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQChogXGcPkvFdp8S7uWLtVfGixi0Vvzt7tMZ9O7mRXRxQIhAJPR%2F5k7VFRFpovTNlO%2Bv0YF5iGh80J0E5c3zTvxm0ivKogECNL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwZ9X3F3oyuNciMoxAq3AO%2FYiDWi8nPbJcc3XNcE60sgA%2BHrYQS29IBi34YBrlybtYtGvkgMbEilSyoKev8qKR8JM%2FpsRZIyYuVADcW0pCuC2eACUF9deYaidHryb4u1s9ARjahTX4uuAI79cpJFVGI9wFNnVp7E84epAeXPHzcqUwjlwbFG1UGPoDELSqap96GhclfklJ3plNP1b1wJT3rwdT9KpcvRzLSO34MYi420JECwxrbzV1v0w%2BBOWcvF6oUFV5MR4megV9CUQ2u4epQ4%2FOsVDbJZdCphc99D7hAFXq8U%2FNpNcyo0mhmjNchUFTqoTd49RfEIYMlq5lhzCDHgQzYeiL%2FWfUf%2BLnkDpD9f5W6Vy6W2ZG%2B9G2w8k9UhzAWUYQnGU7RkCzbcXVSJUG7u5zR7iVAqQ%2BKAPL%2FhptsjnsarVqja3kqw2xsVVDa9hQMxCUgmf1Gd5l4Eqa1JyS%2BKH7xyKsr0W84m4%2B8Ha3ulXRQGU6kajddpMVD4DvXPu7Sz6pS7%2BEaDPbfNQXCx8E4yLnfMvagOoR6ti3m6ZLkHaQ%2F81eT9wT7FOubhIvYZQ8t2wNrv5Qh96q3Re1mI%2BOJFPd%2BEe4oEaD%2B3FtN%2BGqDymB40eAKaSYTx1N6VHRVidh3AZ69VxrfO5IfETCq%2B%2BC9BjqkAWG6eEqNtWNL0X%2BB6mS1rXUYsGWwVLzJpXnn%2B3g%2BfE6yfUGsBzaFLttNWzeYRtAUESY64cTrG9x2aMTbxZgejDYa8Hk%2FTzTC39ZCZ3as18XHsXYjj1ezVgxHWngOg7caNkVce9RmkVBehZH%2BYwz7KSW9d9fvEXCjJxSGZTfDkde8s7jxbPH6lr2vSvNOZ3C0iiqji7nghGtddAVGf0d5WzcppvrO&X-Amz-Signature=e6b1eb590a03c4fa56bbeaee560eeba2de33b3a507f7d3700d41718e6c9dfa1b&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
