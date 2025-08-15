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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQYRMLLT%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T121557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJIMEYCIQDsaHN51Stx%2F%2F72RH0hIySmtpfL7d4a6M1BhHyE43rJegIhAJG9PqUOmfT1VYHxExS4rkBkdujeapc0bcyf%2BD2QAU46Kv8DCF0QABoMNjM3NDIzMTgzODA1IgxQcjWLlsHRotYehYcq3AOQr1WqFqfLBZYSRTZfR9w9kpKP55oZlCyn5OcJox1ZLgylZs3R20WljULi%2BwbWbLqIVGzhU3cFDQGpLXCWMWdSvEfNs3vdSf2gsQAXieb9iZYIsMGmhEWWDEh7Uy1L7LuYuIMGeUFrvCFReN6mWyuF7sk7MnS1nPPez%2BG3QkfZaz1ctV6em87a7SwPVXRiiS54unbWgY2dbuDqVqr%2Fw7r0rekLrtEwtueHT6jc7Dkj%2BSVD7clzeVnE%2Farfuth5nhXGCODCzDSZ12dOaaxVhDeshyPEcWkzkdu4qR1Ufquw%2B6N7QcudrxyyepN8ODfuMGDXnrNCFTjkbSbSvgchvwIvB8g8PUrUex%2B2%2BjlnRzXwa8aSRsmwMLPQisoac8HJGOo1XIBzhwPhPbJHBaMg3UyzgyqKTIrHIvsrOS2D12ZV8flJnap7uGxrmV4WZV5Xae1yjvMZLH6vDtANapVtU0gqIdIe7GIhMEHVy%2B4HZhpS4BHr4D5cg72SaBYomKjKGTtp4GTQW6aAci%2BXZPinx6LeQriNpROr9SKKG1lLFC6WzzNCqkyiylIwaKc7Zy0m9TVGdOJ6vpQzDG8pl8MOBDdwzq6XUUWXbwJuuO%2FKTRHXl3iwS%2BGXJmHuUURdTzD0t%2FzEBjqkAdjQRh83ApAED%2F4wXrC7NbMdCzBiwloFBCHuyqCRXe5yoydDVoELcFJUJTo3l6j8Dcj8TgoXIrs73xQZhIIkZpKJOLIVwePtDmhKUb6hCSAxXTeu3PQEcW2wTjNqVax5Hm%2FUD2nFf1Ufcv4jmcLQYHUUNjaIbIIz8XHW2p7UTVvbBss3W4kNoxs%2FYjJKxP8v7sdNp0RFyvGEAdzhK7JbSFRsRI5w&X-Amz-Signature=b1722bab1cf892f67adfce6e02ac1c516ba08d3e3b93c58613eeea5ae0fb77aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQYRMLLT%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T121557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJIMEYCIQDsaHN51Stx%2F%2F72RH0hIySmtpfL7d4a6M1BhHyE43rJegIhAJG9PqUOmfT1VYHxExS4rkBkdujeapc0bcyf%2BD2QAU46Kv8DCF0QABoMNjM3NDIzMTgzODA1IgxQcjWLlsHRotYehYcq3AOQr1WqFqfLBZYSRTZfR9w9kpKP55oZlCyn5OcJox1ZLgylZs3R20WljULi%2BwbWbLqIVGzhU3cFDQGpLXCWMWdSvEfNs3vdSf2gsQAXieb9iZYIsMGmhEWWDEh7Uy1L7LuYuIMGeUFrvCFReN6mWyuF7sk7MnS1nPPez%2BG3QkfZaz1ctV6em87a7SwPVXRiiS54unbWgY2dbuDqVqr%2Fw7r0rekLrtEwtueHT6jc7Dkj%2BSVD7clzeVnE%2Farfuth5nhXGCODCzDSZ12dOaaxVhDeshyPEcWkzkdu4qR1Ufquw%2B6N7QcudrxyyepN8ODfuMGDXnrNCFTjkbSbSvgchvwIvB8g8PUrUex%2B2%2BjlnRzXwa8aSRsmwMLPQisoac8HJGOo1XIBzhwPhPbJHBaMg3UyzgyqKTIrHIvsrOS2D12ZV8flJnap7uGxrmV4WZV5Xae1yjvMZLH6vDtANapVtU0gqIdIe7GIhMEHVy%2B4HZhpS4BHr4D5cg72SaBYomKjKGTtp4GTQW6aAci%2BXZPinx6LeQriNpROr9SKKG1lLFC6WzzNCqkyiylIwaKc7Zy0m9TVGdOJ6vpQzDG8pl8MOBDdwzq6XUUWXbwJuuO%2FKTRHXl3iwS%2BGXJmHuUURdTzD0t%2FzEBjqkAdjQRh83ApAED%2F4wXrC7NbMdCzBiwloFBCHuyqCRXe5yoydDVoELcFJUJTo3l6j8Dcj8TgoXIrs73xQZhIIkZpKJOLIVwePtDmhKUb6hCSAxXTeu3PQEcW2wTjNqVax5Hm%2FUD2nFf1Ufcv4jmcLQYHUUNjaIbIIz8XHW2p7UTVvbBss3W4kNoxs%2FYjJKxP8v7sdNp0RFyvGEAdzhK7JbSFRsRI5w&X-Amz-Signature=ca2ddf7f0404c43d2d497b1cb39c68a403a7c17eb19a721101579cc1bb053384&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
