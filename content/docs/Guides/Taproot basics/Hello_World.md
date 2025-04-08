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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHTDGKUJ%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T210738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJIMEYCIQCjAx%2F3A1IhQeOhu1O7oDO%2Bzrcct4YaDEyJjiW8%2BejdEwIhALnI%2FYx11BP9WOp3O4EhcXyxIrhNT91wN06ep0PSZcXkKv8DCH0QABoMNjM3NDIzMTgzODA1IgwlkPhjT3wnlOFBjMMq3AN%2BpjcwSSIlbp9f3ZbgPI4yjLwSeHy6TeISbGWIBvdSezGkIIRnKaUKI6eSxBnJcx1kjEYKJxgOIaceVLbVP5mOad8Ov%2FMMAYwQndrp7wAK87dCmgmyRCKl9dCJ12dvlJlKs8e3PlnulFpxouDxuZxfQj5yg9lMcFh%2BT9xsJWeeTSdz9pcKTZaYeY8LiRN277ZlcgdjmMaLZu%2F2nb5P%2FcseOZt2D%2FpEFtmkoGulXyp2R%2FG9Rg7I7DAR1xVQAacGZp6mM1Nk%2BOO8G9N9rK7ztNbkvKYoP9NFmS%2FKOUQREqH8RMwmiF4q0rQGq%2BP1lvDxO9maNmjV8Ivr2QI07VY70bzwnZIqVQnEeBi0kNBA2GDDpwjvenSFset5yHBGX2c9EwgfsqBkvzzHia30lMvKC8%2FklWijIcUu8bmn4dYmmo%2FiBpzlIcNoF%2BmYK%2BbVfVU5YkUgnP21GteF4RsqFagYzFj0bd3oMz0ojPJL%2F4KPexwCtHd9mA7Jv6M3wGUss1l5%2FL0bzX7QAEIzNhuWdB0QTENvDK2VDZq3SK0xjNgOjZDtHZceBrwEE8bC0siVAYwIb8k97qNNaHdah63mzTjTzw3GutgRx9u6xCI4%2BYeHZaPy4zH5UkH7CynqsF0g%2BjCoi9a%2FBjqkAdRH8mnf16ZZuClbYaWsMB2NEi68ZVBluqCglpbjW3Yq%2Fz4rsQnN4f%2FiDA1zzXcTiPA7aYLo%2FUNvbl2iIBW4icvIm%2FwdenCxlQzSAJBMVBwOF86TuIqsqqIdZyMDip4OqMxqoJ1ZeWDHlmqHsOyhmdRB2Sf57V509mYugYMSQRJhp3Y%2Bj%2FGUs1J1HsPHPD8bvj2LqUkkEAWhLX%2B%2FHTjnHxUvO96D&X-Amz-Signature=25726f672bf227850641abd8325f4d70e639f87ea4139de95640ba6ef99f1d5b&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHTDGKUJ%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T210738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJIMEYCIQCjAx%2F3A1IhQeOhu1O7oDO%2Bzrcct4YaDEyJjiW8%2BejdEwIhALnI%2FYx11BP9WOp3O4EhcXyxIrhNT91wN06ep0PSZcXkKv8DCH0QABoMNjM3NDIzMTgzODA1IgwlkPhjT3wnlOFBjMMq3AN%2BpjcwSSIlbp9f3ZbgPI4yjLwSeHy6TeISbGWIBvdSezGkIIRnKaUKI6eSxBnJcx1kjEYKJxgOIaceVLbVP5mOad8Ov%2FMMAYwQndrp7wAK87dCmgmyRCKl9dCJ12dvlJlKs8e3PlnulFpxouDxuZxfQj5yg9lMcFh%2BT9xsJWeeTSdz9pcKTZaYeY8LiRN277ZlcgdjmMaLZu%2F2nb5P%2FcseOZt2D%2FpEFtmkoGulXyp2R%2FG9Rg7I7DAR1xVQAacGZp6mM1Nk%2BOO8G9N9rK7ztNbkvKYoP9NFmS%2FKOUQREqH8RMwmiF4q0rQGq%2BP1lvDxO9maNmjV8Ivr2QI07VY70bzwnZIqVQnEeBi0kNBA2GDDpwjvenSFset5yHBGX2c9EwgfsqBkvzzHia30lMvKC8%2FklWijIcUu8bmn4dYmmo%2FiBpzlIcNoF%2BmYK%2BbVfVU5YkUgnP21GteF4RsqFagYzFj0bd3oMz0ojPJL%2F4KPexwCtHd9mA7Jv6M3wGUss1l5%2FL0bzX7QAEIzNhuWdB0QTENvDK2VDZq3SK0xjNgOjZDtHZceBrwEE8bC0siVAYwIb8k97qNNaHdah63mzTjTzw3GutgRx9u6xCI4%2BYeHZaPy4zH5UkH7CynqsF0g%2BjCoi9a%2FBjqkAdRH8mnf16ZZuClbYaWsMB2NEi68ZVBluqCglpbjW3Yq%2Fz4rsQnN4f%2FiDA1zzXcTiPA7aYLo%2FUNvbl2iIBW4icvIm%2FwdenCxlQzSAJBMVBwOF86TuIqsqqIdZyMDip4OqMxqoJ1ZeWDHlmqHsOyhmdRB2Sf57V509mYugYMSQRJhp3Y%2Bj%2FGUs1J1HsPHPD8bvj2LqUkkEAWhLX%2B%2FHTjnHxUvO96D&X-Amz-Signature=f858d3f02a979149915df9b4f4ba3efffebc928abf127988fe2f4abf1312685a&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
