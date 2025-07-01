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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZ3K7NZ4%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T005024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDCHzuUA%2FuiMeKOxzO4STb0cJycCpu6vTWyvK0t5xqFIQIgY3UG2ucpo7%2BJEclNMN6EIN5DGtk171rxt1A0IVhD0Q4qiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHvWAsw9b5Y109greircA4lusI%2Fh2H%2FACj0Hhnd3X7rkaVYe3ZZgCnJnF6IKCgC%2B4puRZBfA%2BtfC%2Bf%2BVzQpTCHQNlcpSogoNzWK8qLco1AjgBfrOiCulGpkDwm0dAi0zwfqnHwWJ1tVps88acQ8QMckI5DGDsxu6eCqKBmY8qyyYGaOdYiRTklGAo3AxQtKnLosL7jyckzsscr5f2kQQniOcaeKhCtHUkjZgql7hzI8vBm8xEIUi5TY1IFta12BZfPECOTv%2FqFex%2FRJWFVZy7sAacLrnSayOHh8YpmL5miDUMkKZfbFY3%2BPiKthlPnKSUPCpzoL%2FotyIUeuoTvnbpQuWXA5d2kSB7xkBRJudrdfawkbswts211AC8i9eJdAF%2FotDYc0nvtA6diYwWqK2Jnh4KdYC4DMevJYMV8P7I7eTn5cqyFiVg9wrRg6k9JUHQOVZqK6Zgyme2j74Mmj0SePHGCq4xzMs1dUaXRiDCgj%2B9FooE17GZp8PyPqDnScYaESDyW5BmhhksbR89K0Wsll4JmE04hglLxLJa1DMkkocRdYJcdDw0IXpiHQfimDJl%2BOqEQW5AJJhEt5oEr5tCh0xeCe66Yn%2Fs9qv6ukM%2F%2FcBGIiUYKWVne1Sg1u0COXu9rHB9q8%2Bc%2B%2BJdJWfMLXMjMMGOqUBhpc2xIkYw4m5eQoHXgDkRa5xS3xm7cycEFmeDn6vKV8hU%2F%2BNb2F%2FphS%2Fzy1RrUEQcTzd9A4%2FcMCveeL6qdTCbbiiRLbVfYJvshuzExCIhwnno4%2BRGzD4cd4K14JrUe2J3WUxZ5KMFeyNbDN8JlzqSimIHicEV3zMw8zeGipi1js51R7qXSjsd7eLTB8mH1voF8h7dKjYoYD27k%2FlUwr8bldrSUFx&X-Amz-Signature=034115e9e6e6b231de747ab8426d34e74467893183e4d7091454354141c5552f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZ3K7NZ4%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T005024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDCHzuUA%2FuiMeKOxzO4STb0cJycCpu6vTWyvK0t5xqFIQIgY3UG2ucpo7%2BJEclNMN6EIN5DGtk171rxt1A0IVhD0Q4qiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHvWAsw9b5Y109greircA4lusI%2Fh2H%2FACj0Hhnd3X7rkaVYe3ZZgCnJnF6IKCgC%2B4puRZBfA%2BtfC%2Bf%2BVzQpTCHQNlcpSogoNzWK8qLco1AjgBfrOiCulGpkDwm0dAi0zwfqnHwWJ1tVps88acQ8QMckI5DGDsxu6eCqKBmY8qyyYGaOdYiRTklGAo3AxQtKnLosL7jyckzsscr5f2kQQniOcaeKhCtHUkjZgql7hzI8vBm8xEIUi5TY1IFta12BZfPECOTv%2FqFex%2FRJWFVZy7sAacLrnSayOHh8YpmL5miDUMkKZfbFY3%2BPiKthlPnKSUPCpzoL%2FotyIUeuoTvnbpQuWXA5d2kSB7xkBRJudrdfawkbswts211AC8i9eJdAF%2FotDYc0nvtA6diYwWqK2Jnh4KdYC4DMevJYMV8P7I7eTn5cqyFiVg9wrRg6k9JUHQOVZqK6Zgyme2j74Mmj0SePHGCq4xzMs1dUaXRiDCgj%2B9FooE17GZp8PyPqDnScYaESDyW5BmhhksbR89K0Wsll4JmE04hglLxLJa1DMkkocRdYJcdDw0IXpiHQfimDJl%2BOqEQW5AJJhEt5oEr5tCh0xeCe66Yn%2Fs9qv6ukM%2F%2FcBGIiUYKWVne1Sg1u0COXu9rHB9q8%2Bc%2B%2BJdJWfMLXMjMMGOqUBhpc2xIkYw4m5eQoHXgDkRa5xS3xm7cycEFmeDn6vKV8hU%2F%2BNb2F%2FphS%2Fzy1RrUEQcTzd9A4%2FcMCveeL6qdTCbbiiRLbVfYJvshuzExCIhwnno4%2BRGzD4cd4K14JrUe2J3WUxZ5KMFeyNbDN8JlzqSimIHicEV3zMw8zeGipi1js51R7qXSjsd7eLTB8mH1voF8h7dKjYoYD27k%2FlUwr8bldrSUFx&X-Amz-Signature=5457b0e9551c44e1680149843c8ee73430956a11bc7ca29b6f8a220534d13c0c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
