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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNEMHU73%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T190643Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJIMEYCIQCyTQjb5qxncI9BaceslQDfh8cA2eSfCdknPCxhGye%2B1gIhAKe7whhT7m%2BVR131EFN0DtTjzH5GqtSKAzz5VDV8pl8SKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzbbW%2FiN%2FAHA5%2BR2S8q3AP4tXqkLQlesel3%2B%2FOuAF9nZOtz6t1k7NNzXd%2FsxCTGrDnPlM9XOEYmtT%2BYvE51p5GIE%2BsIxAod0m8rtfWrNJzX5iET6wolQowgZVrKXMmBZy6HlGjbM8J3c9xYAoiozTtEMOD8E6uh6TWqs6fwALeRyxNxlZNboOJeyhyB%2FIIR%2FfflP6LsE9KPtsczCc%2BkcKszeI8z9cGqnAayE96iJsG%2FUEibjQvo9%2Br4EFKIlkQzbCX0k1Cb2h0OLM%2BpcZiymXaylNM%2FzRfzD71F2AUrNJyBys4CVGteKiUcA2IFg5I4ook9lPlViwYqgPFXppc2%2BEFt6TDAeAPEJdoDGuCWsS5FVog%2FoKxuIrmeWxuGVdtbe0WdRbaL5O7raCw1UqLEbcJUZ%2BqfqsKfotnonVPHr032kBNRj7%2FEFeI4gPEXaQn5A4DrQaIsyNrJOLgU%2BZdycA8CN4g6mChCugqZn9GKrvmGdwcT86W2%2B0KvtwZ4kpfpS%2BNNKxyeWJVjITBSX6FtldHsjQFA7w8TIXHQu%2BtFvWB1TyN9%2F9PVXkIyO7A223m0Q8mFUKnILNLKsT%2Bu6AIEza%2Fr8oI7l%2Fmz29WgrSGbLEqh71DAutOJuvps3ae5zxKtv4GRTv6%2FkhKuzUvNqjCF%2B9q%2FBjqkAZTGBkK5bnaf%2BRF1IG6bn2T4UJlQvi3XtKm7EVjfsfS%2BxX2x02xN8K2m77ikLqAjkfAca9Lz0hjq8H02PjM7d3tSmvecJz1F3UHBHKcbLpVvc7PE96EZlRBC8JWK8PFX3IbRiNsrJ9MbH5t%2Bdl2ZZGkOpjHRaSJbfSD2ga2PC%2B1dJbJQNYIgMEdbLGygjKzW1Wew7Xef0FWbBpp1yqVTfEcfYTq1&X-Amz-Signature=1f0bfd9670f60e2d40fb0268eeb85f0e38250eddf0fb94c43250c2ee5f378a3b&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNEMHU73%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T190643Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJIMEYCIQCyTQjb5qxncI9BaceslQDfh8cA2eSfCdknPCxhGye%2B1gIhAKe7whhT7m%2BVR131EFN0DtTjzH5GqtSKAzz5VDV8pl8SKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzbbW%2FiN%2FAHA5%2BR2S8q3AP4tXqkLQlesel3%2B%2FOuAF9nZOtz6t1k7NNzXd%2FsxCTGrDnPlM9XOEYmtT%2BYvE51p5GIE%2BsIxAod0m8rtfWrNJzX5iET6wolQowgZVrKXMmBZy6HlGjbM8J3c9xYAoiozTtEMOD8E6uh6TWqs6fwALeRyxNxlZNboOJeyhyB%2FIIR%2FfflP6LsE9KPtsczCc%2BkcKszeI8z9cGqnAayE96iJsG%2FUEibjQvo9%2Br4EFKIlkQzbCX0k1Cb2h0OLM%2BpcZiymXaylNM%2FzRfzD71F2AUrNJyBys4CVGteKiUcA2IFg5I4ook9lPlViwYqgPFXppc2%2BEFt6TDAeAPEJdoDGuCWsS5FVog%2FoKxuIrmeWxuGVdtbe0WdRbaL5O7raCw1UqLEbcJUZ%2BqfqsKfotnonVPHr032kBNRj7%2FEFeI4gPEXaQn5A4DrQaIsyNrJOLgU%2BZdycA8CN4g6mChCugqZn9GKrvmGdwcT86W2%2B0KvtwZ4kpfpS%2BNNKxyeWJVjITBSX6FtldHsjQFA7w8TIXHQu%2BtFvWB1TyN9%2F9PVXkIyO7A223m0Q8mFUKnILNLKsT%2Bu6AIEza%2Fr8oI7l%2Fmz29WgrSGbLEqh71DAutOJuvps3ae5zxKtv4GRTv6%2FkhKuzUvNqjCF%2B9q%2FBjqkAZTGBkK5bnaf%2BRF1IG6bn2T4UJlQvi3XtKm7EVjfsfS%2BxX2x02xN8K2m77ikLqAjkfAca9Lz0hjq8H02PjM7d3tSmvecJz1F3UHBHKcbLpVvc7PE96EZlRBC8JWK8PFX3IbRiNsrJ9MbH5t%2Bdl2ZZGkOpjHRaSJbfSD2ga2PC%2B1dJbJQNYIgMEdbLGygjKzW1Wew7Xef0FWbBpp1yqVTfEcfYTq1&X-Amz-Signature=858e73eec5d439fe2ba7d4ec2dad6fe4f2a2fdd2f6db6d2d28b077f29ef2dd98&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
