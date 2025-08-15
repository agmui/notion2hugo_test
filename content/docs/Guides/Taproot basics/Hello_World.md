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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVIRVW5N%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T161026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJGMEQCIA%2FQR2k7%2FWR1igMdT763Sfuezc7bzNJiAali9W3yHEKnAiAusIdMJEXULdE2IvGZEKmgViLvdz%2F4FmzSJDcNdE%2Ba1Cr%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIMLXhZZqkeTz5IlmyoKtwDGhdgE02eewm5URXFfxzcHwPaLT3Hq8c8IbfERjWYgGlaNh0BFD7SOVhkmK4h0JSu8rUQXn0gsg7gmaXbSf0%2Fm3k2hMMrEz6bXwhq2UqkD%2Bngwkp8M%2B%2FVuzPTnOci6YZT6jeBKgUE%2FClsWxfYeG9jqhXE99SIW7%2Bul547ZjvzhFoOIfHa1GyOgfLdIZR5F1XYa9%2Farb75oERH5yZzv7jo3ZqdsPOTNZZQzO5mP4VA%2F4gK6bCCwBV8f56PbVUAiYubN9Ge3%2BNYyjzZufGBd%2FjbkXZ7mWz%2FOPj5aWWQuXTiRcIDEFfFgEDPXsaDe5n6SITvJL9YZvfFfksckKka5yHMrMlqUCZotTgUJu2ZHi9P00fKxBNrBBZleUGFAPfhcrnx7hshIpWZ%2Fcd5l%2B1KIqDkJiWnZfRkaZq1Fj1vlbIfnIpqX2B2EoZ0vc6otQWBjZ6asWPfEyjaUs5b9gi2HrvB3y7Wag7v6PxGNOBBOxNWCc%2FMhH%2BYGiFOQlLb0NybNY7aCxwSbjKQtfHb5Cne1db9%2FddsKz2qnfrvdTZQRlT2XxGtDc2hA9vzB34boehf6%2BHu0kFmw54tPGPWrgdRr4nqkwPkkhNUxEO%2Ff7n7g1LekWLCM6fl7sR%2BbMl3jEYwqLX9xAY6pgFuefVjirrDHbaqTOeqROE9nKV6cgMQD434TZEX4Z5KS4M4%2B%2FkN9R5hzEf%2BbRQUEgavpoSYWwn7sh1huh2A51mbFD1CCxK0qSWqpppGevOzFfl0GVFP%2B7Yg5QdDlmsTALcIwNJqTcCEYGpdPNAbxrieh80A4ZcR7hvmmzmtQQGamKqh%2Fo236Qrol3wkWqy%2BL6egv2H4aIlbeaQ3gztERKYDp3q%2B6NPV&X-Amz-Signature=cd13c816b2342419fcc1f3b14d1fff82044bb00578099a13b9016c8935d50afa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVIRVW5N%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T161026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJGMEQCIA%2FQR2k7%2FWR1igMdT763Sfuezc7bzNJiAali9W3yHEKnAiAusIdMJEXULdE2IvGZEKmgViLvdz%2F4FmzSJDcNdE%2Ba1Cr%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIMLXhZZqkeTz5IlmyoKtwDGhdgE02eewm5URXFfxzcHwPaLT3Hq8c8IbfERjWYgGlaNh0BFD7SOVhkmK4h0JSu8rUQXn0gsg7gmaXbSf0%2Fm3k2hMMrEz6bXwhq2UqkD%2Bngwkp8M%2B%2FVuzPTnOci6YZT6jeBKgUE%2FClsWxfYeG9jqhXE99SIW7%2Bul547ZjvzhFoOIfHa1GyOgfLdIZR5F1XYa9%2Farb75oERH5yZzv7jo3ZqdsPOTNZZQzO5mP4VA%2F4gK6bCCwBV8f56PbVUAiYubN9Ge3%2BNYyjzZufGBd%2FjbkXZ7mWz%2FOPj5aWWQuXTiRcIDEFfFgEDPXsaDe5n6SITvJL9YZvfFfksckKka5yHMrMlqUCZotTgUJu2ZHi9P00fKxBNrBBZleUGFAPfhcrnx7hshIpWZ%2Fcd5l%2B1KIqDkJiWnZfRkaZq1Fj1vlbIfnIpqX2B2EoZ0vc6otQWBjZ6asWPfEyjaUs5b9gi2HrvB3y7Wag7v6PxGNOBBOxNWCc%2FMhH%2BYGiFOQlLb0NybNY7aCxwSbjKQtfHb5Cne1db9%2FddsKz2qnfrvdTZQRlT2XxGtDc2hA9vzB34boehf6%2BHu0kFmw54tPGPWrgdRr4nqkwPkkhNUxEO%2Ff7n7g1LekWLCM6fl7sR%2BbMl3jEYwqLX9xAY6pgFuefVjirrDHbaqTOeqROE9nKV6cgMQD434TZEX4Z5KS4M4%2B%2FkN9R5hzEf%2BbRQUEgavpoSYWwn7sh1huh2A51mbFD1CCxK0qSWqpppGevOzFfl0GVFP%2B7Yg5QdDlmsTALcIwNJqTcCEYGpdPNAbxrieh80A4ZcR7hvmmzmtQQGamKqh%2Fo236Qrol3wkWqy%2BL6egv2H4aIlbeaQ3gztERKYDp3q%2B6NPV&X-Amz-Signature=9ccc2cbf720a72090855d488fe4149bc8a37a67192b6105101d6c66d604baf04&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
