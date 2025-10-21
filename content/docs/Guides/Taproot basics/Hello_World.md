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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6FYQBME%2F20251021%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251021T012749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJIMEYCIQCL1vcCq73t%2BcofltHYG44abgn7xWpssLdpojsd%2Fe9HIAIhAM6Hg1V8zvJRzV4Cb9Z4nSKpAprnq2xnullKcXdMS8kHKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwcfRj7RI6223fVXB4q3AN7FsgRoIqveg%2BJMFJi6qC5X9M04EYWQLzBmZZCCVE6r1fJ8Ekj24d7497YZtkjUC%2BQO1C9v8aaAqgfeYTZUIBRr%2Bx1830wVIeqtEYupdAz1ZAO%2F3boFSdHsxqiGxDUAT6OQkxJrPKmFj6tWhJkMTgo7VkwJFUNet%2Bp1yeJjbtL%2FcvdaKtbp7UIv6Whv8CXs%2Fhxn3KEcAUNKBhCxREX88eyLOTPFkvwHB8VZQqGIykCO7q%2FpqA2qzMpdubLb%2F46pDsNjnJohmGInkUUE7008XwahypxqkKQV%2FyquCg7414NFPVoWyXC%2BuaOZRBVLc4sWIjnTkQGgurJzeTARkhsFmsPcThaaAllR%2FalZZKP6%2BoaFyy8NNTEoitfDujDimZD%2BzKNXsmzQXZxGl8oLWX0UmmcPdtcyG0SFCAVaWEIr5No8dBAGjq8Wb8bbY5N2Z2ZauQUnjicic7sU7jBfaaEiMy4SyHYdpmdjS40viJf76uOyG6FIqdv2Wk%2Boo2Yo1rtbfBCrtHcvm67FQKUko8jTvBhrfUyVG3skhV9YKDso2ZxZhFnm0GHHTtTYJ6Vw2PFEQF%2FW4qz99bGXM1S8QJUq%2FYII0BMltItqEImoJdAhn5W9JTaXshqCf8BUdYsgTC9rdvHBjqkAW00fm2XYZuCW37Pjeh5Oec%2BsWoF5u7b4klfCEBspGfd4%2BxYna9ppoxk46Vzuc9pWw%2FiBnXiZURbi2Gn7PSXCVmrEV0a1oMrE3Dgyzfq%2Fb%2F08Ck2W9V9OveLozE958HcGiyLhbK2qrVW%2FEnqq%2B9ba7MjDvcSxpR4DeTgPoEU%2F7Fc0ubOO0ub2lbA%2BXhpKXoBpm3g3xkXXWF1g9AdPgBWF8YIKwXs&X-Amz-Signature=50c368e68042b3dcb4b209cf7a74b7fd0525633c7e452fd34541e35f45b04e05&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6FYQBME%2F20251021%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251021T012749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJIMEYCIQCL1vcCq73t%2BcofltHYG44abgn7xWpssLdpojsd%2Fe9HIAIhAM6Hg1V8zvJRzV4Cb9Z4nSKpAprnq2xnullKcXdMS8kHKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwcfRj7RI6223fVXB4q3AN7FsgRoIqveg%2BJMFJi6qC5X9M04EYWQLzBmZZCCVE6r1fJ8Ekj24d7497YZtkjUC%2BQO1C9v8aaAqgfeYTZUIBRr%2Bx1830wVIeqtEYupdAz1ZAO%2F3boFSdHsxqiGxDUAT6OQkxJrPKmFj6tWhJkMTgo7VkwJFUNet%2Bp1yeJjbtL%2FcvdaKtbp7UIv6Whv8CXs%2Fhxn3KEcAUNKBhCxREX88eyLOTPFkvwHB8VZQqGIykCO7q%2FpqA2qzMpdubLb%2F46pDsNjnJohmGInkUUE7008XwahypxqkKQV%2FyquCg7414NFPVoWyXC%2BuaOZRBVLc4sWIjnTkQGgurJzeTARkhsFmsPcThaaAllR%2FalZZKP6%2BoaFyy8NNTEoitfDujDimZD%2BzKNXsmzQXZxGl8oLWX0UmmcPdtcyG0SFCAVaWEIr5No8dBAGjq8Wb8bbY5N2Z2ZauQUnjicic7sU7jBfaaEiMy4SyHYdpmdjS40viJf76uOyG6FIqdv2Wk%2Boo2Yo1rtbfBCrtHcvm67FQKUko8jTvBhrfUyVG3skhV9YKDso2ZxZhFnm0GHHTtTYJ6Vw2PFEQF%2FW4qz99bGXM1S8QJUq%2FYII0BMltItqEImoJdAhn5W9JTaXshqCf8BUdYsgTC9rdvHBjqkAW00fm2XYZuCW37Pjeh5Oec%2BsWoF5u7b4klfCEBspGfd4%2BxYna9ppoxk46Vzuc9pWw%2FiBnXiZURbi2Gn7PSXCVmrEV0a1oMrE3Dgyzfq%2Fb%2F08Ck2W9V9OveLozE958HcGiyLhbK2qrVW%2FEnqq%2B9ba7MjDvcSxpR4DeTgPoEU%2F7Fc0ubOO0ub2lbA%2BXhpKXoBpm3g3xkXXWF1g9AdPgBWF8YIKwXs&X-Amz-Signature=0b1998d149374f2b0c4fff96f3d023488135244a8786f88b37ca0d79e176d4bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
