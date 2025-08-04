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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466735FNJXS%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T071939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJIMEYCIQCOQ99IdDAbSQNP2jKLpZCoFki18x9yKMus2xNZgrk2cwIhANVkc2hAGNzTuoOXZVNYNsfNK58DILoCltUnlcDykh8UKv8DCEAQABoMNjM3NDIzMTgzODA1IgwfuPG%2FcRcJ2tz292cq3ANs6XOEkBgvFmGReefKVeXRxgzXN7T8aWVjNelvRMF7Fp%2BnqhKzLS2tZCRp7qDmEkeX%2F1GDhKSs%2BeyCyEVHlKhhlHZSjYVXLD5pYRGEoAldhjoXNvTlNKma%2BO1%2FXr3zk%2FfWKg0%2F05VUeq5xqRd1bdq9SjiRNvpj5gQY8j%2FYXGjp6yBk70hVYueXbO%2Bu1chu%2FQiEQxCqa1zgnlwKecS1xRPyXOO5eKzQfH3a8sUVYkCA1ZddPwf9S2dTnrD%2BAMrympsW9NWQRAv0uEYJmRt0hGETwznxX0u6nkA%2F4Nta%2FXlGmGZsvmH8O%2FuP2O4j9P6mSodtrK3fK3aAxfcWKk7YiHu8jDPy5dJxMy0XA79gKB6CpZJPvItOi4nRFMgbA5uHM2T3sV8X6Qn6NPxOd2KPZp%2FaJ4tY3srbOR2yUhVYLseEwErFChq4q8GvVkceki2EWr7Yn897xzHaTggRnMU60avC8xTrp4eg%2FYe9O1AACi4MG%2BFDfhPRTUFE2eD4yTdDhL75WQJV3qE1IyKFuCCAUtZVNwL51Je3Y69UdB5PNXl5SBa0%2BYS1I2yg5Pz6PbfEmvGP3Kw8At3%2B0WmUqDSwBpJuRJ446GxOa%2FrOmkkTw0rKovmkpEkoCYk5V2xoZDCjt8HEBjqkATnq5CN63v1B3JMAs2xUyBFGenY0ZpjDfvmmxBzu%2BnyEq9NhtVAB%2FG%2Bx3hqo6J6PhYW0aEInwyUMknkUKf7OtXkc7nLiyO6MO8cA3vywU9ll0ADyDo4nDDWDfNet6N45qbUtL02zww%2FVOsXPFyumh9T5gB%2F1bkHs2rURxLzW3hHa4RDDtLzP%2FiTz9tyrO4cM1pw1jPgLNw%2BwmEXkQlV9KCrP9utK&X-Amz-Signature=d25994da55304aff40efc8d61ba68df6c3839054506fa3d54ded730c9c903bd7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466735FNJXS%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T071939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJIMEYCIQCOQ99IdDAbSQNP2jKLpZCoFki18x9yKMus2xNZgrk2cwIhANVkc2hAGNzTuoOXZVNYNsfNK58DILoCltUnlcDykh8UKv8DCEAQABoMNjM3NDIzMTgzODA1IgwfuPG%2FcRcJ2tz292cq3ANs6XOEkBgvFmGReefKVeXRxgzXN7T8aWVjNelvRMF7Fp%2BnqhKzLS2tZCRp7qDmEkeX%2F1GDhKSs%2BeyCyEVHlKhhlHZSjYVXLD5pYRGEoAldhjoXNvTlNKma%2BO1%2FXr3zk%2FfWKg0%2F05VUeq5xqRd1bdq9SjiRNvpj5gQY8j%2FYXGjp6yBk70hVYueXbO%2Bu1chu%2FQiEQxCqa1zgnlwKecS1xRPyXOO5eKzQfH3a8sUVYkCA1ZddPwf9S2dTnrD%2BAMrympsW9NWQRAv0uEYJmRt0hGETwznxX0u6nkA%2F4Nta%2FXlGmGZsvmH8O%2FuP2O4j9P6mSodtrK3fK3aAxfcWKk7YiHu8jDPy5dJxMy0XA79gKB6CpZJPvItOi4nRFMgbA5uHM2T3sV8X6Qn6NPxOd2KPZp%2FaJ4tY3srbOR2yUhVYLseEwErFChq4q8GvVkceki2EWr7Yn897xzHaTggRnMU60avC8xTrp4eg%2FYe9O1AACi4MG%2BFDfhPRTUFE2eD4yTdDhL75WQJV3qE1IyKFuCCAUtZVNwL51Je3Y69UdB5PNXl5SBa0%2BYS1I2yg5Pz6PbfEmvGP3Kw8At3%2B0WmUqDSwBpJuRJ446GxOa%2FrOmkkTw0rKovmkpEkoCYk5V2xoZDCjt8HEBjqkATnq5CN63v1B3JMAs2xUyBFGenY0ZpjDfvmmxBzu%2BnyEq9NhtVAB%2FG%2Bx3hqo6J6PhYW0aEInwyUMknkUKf7OtXkc7nLiyO6MO8cA3vywU9ll0ADyDo4nDDWDfNet6N45qbUtL02zww%2FVOsXPFyumh9T5gB%2F1bkHs2rURxLzW3hHa4RDDtLzP%2FiTz9tyrO4cM1pw1jPgLNw%2BwmEXkQlV9KCrP9utK&X-Amz-Signature=c5f1fbe92e86075f6ef045f0e18fac19cec6b09f6b23a8d715b8fbb94e554d8f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
