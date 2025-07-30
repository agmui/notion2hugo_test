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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EJO7ZRC%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T101117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEJDE4Q6mG8rD4ic13%2BN5oZnI7amPmYO7ZVc%2F3bkl6gWAiBimflOhVeTC9kvq%2FyDTk9Y8MwPttlIysc%2FASZI0OaoNCqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLhq5Zu1QEz54bkTaKtwDegPKegVthef1uOtM0GPzE%2BUxKV3m8aanLoKRFpQ0d%2F1PE0ojM%2BRp3z20W%2Be41FWZ5RN7EDftdl76DX6J3GkjQjL%2BfOaC%2FQwYbWzyk5qLgeOqdPHI4nsjPPcNGwcsHkWx7GjlyCRzCL0Gl6rEiGQZPtBJN6ME5Xa0ayvK7xUymm4oV357WGD4EMFsk3KedrrbLuYW1g%2FQeL%2Fs65P3fehFLgjpVyAZA%2FEkDKvNwoHibLoZgsqJmIZsT3zxn1il8KqCeFVfUrRmX8lEihFvwIKwf6Ckl5lApKb8EYvuC5%2FmPUaE19aHIwimlFedMxYteR%2FkP02QaMF3Yk2YdYpntew40XxqD0tlAIY33TN%2BgbhqI3BgzsppFNjT6bcCxl%2BDakPkMhoIh%2F209y%2B9eJmLUixBwGIZjuHy8e1jS%2FLWMNcR2bYv%2Fgh%2Bod94Xj%2BzpZ3azB9L4UnABxacCxxwhX%2F95%2FNiVY3TuqTN%2BbNTzHAG6gldnzSkFMkv8CokYC9g%2Bmr2HF0PaHlS0VPI0RNcBsy41XuRuGYTjV4WJrcS0JAB2ggwphZdhfzrKvNzYn%2F6lXZBn94Pud8%2BEjFhc%2Bq5Zpre2UAPifxFCxVltwyq0%2BHyGicLxbeQaPUfdIYuMGfGbnswksCnxAY6pgE875XdjupKp2V1S9SfbbP6f4UjwEFK1t%2FeJEaeSpIqLMJQsV8dTQmhNpvuRYkzVNL09DsC%2FJQIMqaJ9NN5xoQRHIPc2rd0ExEZYHo0iSd364lZJtKusAbioENEbnjuS9OMXBTUhLq7eCqsjKN8HbD%2BphmMyY247fvPdkgktcFopu22ALaVHGDYLVAG%2BII3QQvjq1HJsdbRSJuAl9MnXWUgrq52ycKK&X-Amz-Signature=2857fd3afff216657d0136ef8ef12529972074682ec9d67cb1780631e6d982e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EJO7ZRC%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T101117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEJDE4Q6mG8rD4ic13%2BN5oZnI7amPmYO7ZVc%2F3bkl6gWAiBimflOhVeTC9kvq%2FyDTk9Y8MwPttlIysc%2FASZI0OaoNCqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLhq5Zu1QEz54bkTaKtwDegPKegVthef1uOtM0GPzE%2BUxKV3m8aanLoKRFpQ0d%2F1PE0ojM%2BRp3z20W%2Be41FWZ5RN7EDftdl76DX6J3GkjQjL%2BfOaC%2FQwYbWzyk5qLgeOqdPHI4nsjPPcNGwcsHkWx7GjlyCRzCL0Gl6rEiGQZPtBJN6ME5Xa0ayvK7xUymm4oV357WGD4EMFsk3KedrrbLuYW1g%2FQeL%2Fs65P3fehFLgjpVyAZA%2FEkDKvNwoHibLoZgsqJmIZsT3zxn1il8KqCeFVfUrRmX8lEihFvwIKwf6Ckl5lApKb8EYvuC5%2FmPUaE19aHIwimlFedMxYteR%2FkP02QaMF3Yk2YdYpntew40XxqD0tlAIY33TN%2BgbhqI3BgzsppFNjT6bcCxl%2BDakPkMhoIh%2F209y%2B9eJmLUixBwGIZjuHy8e1jS%2FLWMNcR2bYv%2Fgh%2Bod94Xj%2BzpZ3azB9L4UnABxacCxxwhX%2F95%2FNiVY3TuqTN%2BbNTzHAG6gldnzSkFMkv8CokYC9g%2Bmr2HF0PaHlS0VPI0RNcBsy41XuRuGYTjV4WJrcS0JAB2ggwphZdhfzrKvNzYn%2F6lXZBn94Pud8%2BEjFhc%2Bq5Zpre2UAPifxFCxVltwyq0%2BHyGicLxbeQaPUfdIYuMGfGbnswksCnxAY6pgE875XdjupKp2V1S9SfbbP6f4UjwEFK1t%2FeJEaeSpIqLMJQsV8dTQmhNpvuRYkzVNL09DsC%2FJQIMqaJ9NN5xoQRHIPc2rd0ExEZYHo0iSd364lZJtKusAbioENEbnjuS9OMXBTUhLq7eCqsjKN8HbD%2BphmMyY247fvPdkgktcFopu22ALaVHGDYLVAG%2BII3QQvjq1HJsdbRSJuAl9MnXWUgrq52ycKK&X-Amz-Signature=bbd039c9f7d389be3bb774813b81c20183a21e5c20433290f97f33dca954b664&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
