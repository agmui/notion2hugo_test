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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FGREVW5%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T190651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBTlUBqCzG%2Fmw6n%2F1vcer9F3vQlPuxf5W0hW1eBmArJDAiBjdWa1eBy3TcV45qbV8onrfrs11R7CSzlAOCsOWk9maSqIBAiT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHIQ0DmRnU6GqwnpjKtwDmpq19i1H1DbsdmQbJI%2FfnAgq3bbm51oQtRrE%2BD8eoWOP4BzIJB2aWrJOrhMynZiR%2Ffq4zFIr0W9UDe1qdcLJH9UzSKikPOFoHtWzSRMWlT4ICgPC3Nfo9ievTn8SsQfIPnA2f3Aj4CMncvLlGhfcodLb%2BIcAeVW3lTJiBV9HdhMPEQ7g8mw3oSPov0OIkemtV7u%2FSBslFRogLl1XiGWHvadzGq1grPITJrffwGq%2FGhoP8HgWjc1DoxKMTnIHu5Ub6AJVDP8SYXjvqVtpC7SCsYoRDg6mxCj7YVwggmiOCVmCCx%2FmkSqg4y%2FJ0yfYX1Ugy1NbMO1GjFBAJAIY17hMlz5RBkGRXR2QFnlfNYa2O5g3yagvtNfVuWVn3MWvLaf9npIay9X2nXglq%2BxcEI4wXx%2B3wMBCehSHkcJqEcuWZHgX3oTdwgYgqglIZjEbmZRv914%2BcaTa4GLn9UzEvddoC4u0lOWyiDioKfnalcqQsBFzx5dQnMNeLv5mp62rdzhKVzh0%2FL0IJgkcniXajQOybSj2hEYnuvvKS1ClEGMejJfJGzHvHEiu0roM4wU08ksK2YLdQ%2Bhj%2BCXypfEUCiDuv6wt6t7MZBbPgrNEdvjZUlL8G77wUV%2FHZt008b8wl4jMwgY6pgF3pR4ZiWjKCTOl%2BY34XPyAfmmZ%2F0xyE7JmVJON7rMBJp7E7TITLSallWJbg7WuKlyw64vRgraZPdAdIKJ5BVH5jxt0uU%2FfjIFrvN4ZdZVe2PawB%2BRGLR4npWiwAH7FXa3zlQmFTcrGyhLtyzSsDwOmUByD%2B2lhZHLT5ojN0WNxQprQEv3Yy5PrPYU2WBYzEXPKonwSVzM%2BzKBkXdVDNNKoXLgadBRw&X-Amz-Signature=97fa29f4d4ce4241d13bba4b68370f740e0c2abf336740564ef78e0ea546b73a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FGREVW5%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T190651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBTlUBqCzG%2Fmw6n%2F1vcer9F3vQlPuxf5W0hW1eBmArJDAiBjdWa1eBy3TcV45qbV8onrfrs11R7CSzlAOCsOWk9maSqIBAiT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHIQ0DmRnU6GqwnpjKtwDmpq19i1H1DbsdmQbJI%2FfnAgq3bbm51oQtRrE%2BD8eoWOP4BzIJB2aWrJOrhMynZiR%2Ffq4zFIr0W9UDe1qdcLJH9UzSKikPOFoHtWzSRMWlT4ICgPC3Nfo9ievTn8SsQfIPnA2f3Aj4CMncvLlGhfcodLb%2BIcAeVW3lTJiBV9HdhMPEQ7g8mw3oSPov0OIkemtV7u%2FSBslFRogLl1XiGWHvadzGq1grPITJrffwGq%2FGhoP8HgWjc1DoxKMTnIHu5Ub6AJVDP8SYXjvqVtpC7SCsYoRDg6mxCj7YVwggmiOCVmCCx%2FmkSqg4y%2FJ0yfYX1Ugy1NbMO1GjFBAJAIY17hMlz5RBkGRXR2QFnlfNYa2O5g3yagvtNfVuWVn3MWvLaf9npIay9X2nXglq%2BxcEI4wXx%2B3wMBCehSHkcJqEcuWZHgX3oTdwgYgqglIZjEbmZRv914%2BcaTa4GLn9UzEvddoC4u0lOWyiDioKfnalcqQsBFzx5dQnMNeLv5mp62rdzhKVzh0%2FL0IJgkcniXajQOybSj2hEYnuvvKS1ClEGMejJfJGzHvHEiu0roM4wU08ksK2YLdQ%2Bhj%2BCXypfEUCiDuv6wt6t7MZBbPgrNEdvjZUlL8G77wUV%2FHZt008b8wl4jMwgY6pgF3pR4ZiWjKCTOl%2BY34XPyAfmmZ%2F0xyE7JmVJON7rMBJp7E7TITLSallWJbg7WuKlyw64vRgraZPdAdIKJ5BVH5jxt0uU%2FfjIFrvN4ZdZVe2PawB%2BRGLR4npWiwAH7FXa3zlQmFTcrGyhLtyzSsDwOmUByD%2B2lhZHLT5ojN0WNxQprQEv3Yy5PrPYU2WBYzEXPKonwSVzM%2BzKBkXdVDNNKoXLgadBRw&X-Amz-Signature=1f39989a250727dd8c415f589f433c5efccba2f11eb7461b75cea2ed7aec3493&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
