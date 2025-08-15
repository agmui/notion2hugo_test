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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHEOCG7O%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T051049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQCH9X1XNwNhPUBVbGuTqDD5sSt8W48ABwISSL1WxQN8DAIhAKqVQjxeB1NnW%2BmZ5KMZkU1RdCCHSEvtnm9HrcMvQlvzKv8DCFMQABoMNjM3NDIzMTgzODA1IgySqq8NfJJHjt6xtGUq3APwcVOPjUbr%2Blr5%2FbjhYe8ztAeuEjrk%2FpVjalK82jlL7JFQmzjL5%2BJT5wjmW2pZaoJPd6MBbr%2FL%2FfpOs9IUi00oEWOobOJgbjrM8QqyqJ%2BrFA2nkC5BjVFylVKah%2B3cMvRHJn%2FwBdiaU5Egbsq3bvsuYOVXF0tXGDJF18jA2IYxhCBk0u13pY5o7mp8i1VQ7sWpomDJDUAPr8iGu2nQdEBZhALLGQPFF8ff2UUbD2Aa6D3F%2BMznGTdzEFiUG4cT7uEoRbOoHHHTmYXaR9MOG9xeKgoPkNNrBTDbuIoNfQXHZPzFqmycqhI%2FBXOyhwEy%2BBsjFR8cdejT3Q2I66R5UqtoaNx6FBRezoLFGT30zyYr3MI9SGfqLQiQj1QCpvm6GKSRHnvVu5dvcNxYnAO0CbYzDgAIcKyFMQfM1j%2BUkVwch38GQgSJOIYMpJW378B8rLCPi44unCNrHDGB1bmA5T9cZQ5kM1S%2FJu2ZUBfO3S92c9CLgJD9SCGzSVpamCF3IGAgTKZhOFDnVh3svF3JggazR%2BIgW0qAwnxx%2F96NlNoP3MbJ9f1ds8fRls7s7YaMe67Fqx%2B7CG0jaFgfJgr%2BzOJ%2FCTLrcyfTxpNkMkszNzbjNDMSF1khhh8vkiAzXTCto%2FrEBjqkASbr05oIa4f3%2BfSgOVC1CO6pmtYCtuZ5DWtWM2s0jcURZ7wNQWSYQrfXEzceu9kaRgER8zRAfwqc9iYS4fK6sArMFetWPbfM58L5T9TgjzXwuLzVgZVyrR%2FeAUeGHJ2BII7a7ffax929hwkHO5ukUnUivbD%2F7r2eiFEnOBUochNhLLNeTzHOcf44MpjbPVVT0Xvt5mdUJI%2B%2BQo5BP8hexOLbv0Jx&X-Amz-Signature=993d2e7b7f4de900992ed23a354434ef380d41ca0fed495c077c9878e90045d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHEOCG7O%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T051049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQCH9X1XNwNhPUBVbGuTqDD5sSt8W48ABwISSL1WxQN8DAIhAKqVQjxeB1NnW%2BmZ5KMZkU1RdCCHSEvtnm9HrcMvQlvzKv8DCFMQABoMNjM3NDIzMTgzODA1IgySqq8NfJJHjt6xtGUq3APwcVOPjUbr%2Blr5%2FbjhYe8ztAeuEjrk%2FpVjalK82jlL7JFQmzjL5%2BJT5wjmW2pZaoJPd6MBbr%2FL%2FfpOs9IUi00oEWOobOJgbjrM8QqyqJ%2BrFA2nkC5BjVFylVKah%2B3cMvRHJn%2FwBdiaU5Egbsq3bvsuYOVXF0tXGDJF18jA2IYxhCBk0u13pY5o7mp8i1VQ7sWpomDJDUAPr8iGu2nQdEBZhALLGQPFF8ff2UUbD2Aa6D3F%2BMznGTdzEFiUG4cT7uEoRbOoHHHTmYXaR9MOG9xeKgoPkNNrBTDbuIoNfQXHZPzFqmycqhI%2FBXOyhwEy%2BBsjFR8cdejT3Q2I66R5UqtoaNx6FBRezoLFGT30zyYr3MI9SGfqLQiQj1QCpvm6GKSRHnvVu5dvcNxYnAO0CbYzDgAIcKyFMQfM1j%2BUkVwch38GQgSJOIYMpJW378B8rLCPi44unCNrHDGB1bmA5T9cZQ5kM1S%2FJu2ZUBfO3S92c9CLgJD9SCGzSVpamCF3IGAgTKZhOFDnVh3svF3JggazR%2BIgW0qAwnxx%2F96NlNoP3MbJ9f1ds8fRls7s7YaMe67Fqx%2B7CG0jaFgfJgr%2BzOJ%2FCTLrcyfTxpNkMkszNzbjNDMSF1khhh8vkiAzXTCto%2FrEBjqkASbr05oIa4f3%2BfSgOVC1CO6pmtYCtuZ5DWtWM2s0jcURZ7wNQWSYQrfXEzceu9kaRgER8zRAfwqc9iYS4fK6sArMFetWPbfM58L5T9TgjzXwuLzVgZVyrR%2FeAUeGHJ2BII7a7ffax929hwkHO5ukUnUivbD%2F7r2eiFEnOBUochNhLLNeTzHOcf44MpjbPVVT0Xvt5mdUJI%2B%2BQo5BP8hexOLbv0Jx&X-Amz-Signature=25b9448ecca498303f196622a53e9dec54b9b8cd8978b2c20308cd2a6155a78c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
