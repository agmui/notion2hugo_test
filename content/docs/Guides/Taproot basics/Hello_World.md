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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LIIWZT3%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T040309Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJBBFwmCZCpyMstfk9PfZlt0DcpQQtPcrsN8%2BBuBHEyAIhAL%2BHMwAkmU9AZg4PieIAH2RLkHRpi%2B%2FNmzLOdWJRt1rLKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwEcjG5CW%2BOd%2F5lJWwq3AORpciVJQCS1yg7Ry3yZcpsKaF%2FzucNmmCPjb4pdJonWoOkadl1U%2FDMObqrF5pN02pAOjPpNIxdt4lw7SbKM33hmWOABeTikJt6kVsyC8J6Xj%2Fzu%2FyVilkIxPoJQPZZHbsYqhNFuQWs7Cvz6lzwqvI%2BbZiPuV8p5oVYfcRrRgDVSAoVHJv8ABG2iILnICe0uSbXyqvuQy%2FCJ40N9O0e96R%2BoRorihlyFEf%2Fydu2F%2F3bjxav7mq0A7jQuh4w1AjugdBIsY4TJFlGtp8TC1lMSnsi1ql86gsUPGLzmAgOGsvNcvCYARA60ISI2J6eEQ6dRrZZB6feqK%2BQR9goTz%2BO9EOx4Ss4tBpy%2FELh66zVslnKXPaSUmQZ%2B99M2dfZQUiqFVaGVLwd4wk7YRez1u6Qdb4fV88Zh75Clcy6dIUXyxHxQl3uBn0lnVweC00S0InEFsBK1plOAaRDMCRLTnP0sEUqgvMf2uW%2BCrqlkJxUHGPgWRGGF8Th9JMdQ24382gctEQzaihoBPdQ1hELXqf4RFcpYHMmKdt2ETUfcK6mi741%2BU21%2FQ091juEOEwZWxl5%2FAYH1l3mQ5hmz6%2FJsppNIkk3oZDvi8%2B1xC%2BYHbo2b3ZsL46RmSqC7F7LRnP27jC8k%2FHDBjqkAdYJjJ8kI5BL9jx8Z638DIRkgaR2ORuOtc8QgE3FhBRG3bbU3XAuZNW4Zk5dREwrYqQ4vVxs008iRSvIPSJZsNGUFfFFHMATfY1F6aCQBmQwBL91M81p58c2gHNMIOUMCW9hG6ZpL7Xnh%2FolB5mhfBX5w1ufNRHn%2B2IvCGRlsEYxj16QfHgce15ZwqBlZpCo211sOVd2%2Fbbaj5AgfUKpafTDjrHU&X-Amz-Signature=2c5613e513843dcbaad0cd1c3af33c1ef5734caf5ad0f78d8837ab06f097bf6c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LIIWZT3%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T040309Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJBBFwmCZCpyMstfk9PfZlt0DcpQQtPcrsN8%2BBuBHEyAIhAL%2BHMwAkmU9AZg4PieIAH2RLkHRpi%2B%2FNmzLOdWJRt1rLKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwEcjG5CW%2BOd%2F5lJWwq3AORpciVJQCS1yg7Ry3yZcpsKaF%2FzucNmmCPjb4pdJonWoOkadl1U%2FDMObqrF5pN02pAOjPpNIxdt4lw7SbKM33hmWOABeTikJt6kVsyC8J6Xj%2Fzu%2FyVilkIxPoJQPZZHbsYqhNFuQWs7Cvz6lzwqvI%2BbZiPuV8p5oVYfcRrRgDVSAoVHJv8ABG2iILnICe0uSbXyqvuQy%2FCJ40N9O0e96R%2BoRorihlyFEf%2Fydu2F%2F3bjxav7mq0A7jQuh4w1AjugdBIsY4TJFlGtp8TC1lMSnsi1ql86gsUPGLzmAgOGsvNcvCYARA60ISI2J6eEQ6dRrZZB6feqK%2BQR9goTz%2BO9EOx4Ss4tBpy%2FELh66zVslnKXPaSUmQZ%2B99M2dfZQUiqFVaGVLwd4wk7YRez1u6Qdb4fV88Zh75Clcy6dIUXyxHxQl3uBn0lnVweC00S0InEFsBK1plOAaRDMCRLTnP0sEUqgvMf2uW%2BCrqlkJxUHGPgWRGGF8Th9JMdQ24382gctEQzaihoBPdQ1hELXqf4RFcpYHMmKdt2ETUfcK6mi741%2BU21%2FQ091juEOEwZWxl5%2FAYH1l3mQ5hmz6%2FJsppNIkk3oZDvi8%2B1xC%2BYHbo2b3ZsL46RmSqC7F7LRnP27jC8k%2FHDBjqkAdYJjJ8kI5BL9jx8Z638DIRkgaR2ORuOtc8QgE3FhBRG3bbU3XAuZNW4Zk5dREwrYqQ4vVxs008iRSvIPSJZsNGUFfFFHMATfY1F6aCQBmQwBL91M81p58c2gHNMIOUMCW9hG6ZpL7Xnh%2FolB5mhfBX5w1ufNRHn%2B2IvCGRlsEYxj16QfHgce15ZwqBlZpCo211sOVd2%2Fbbaj5AgfUKpafTDjrHU&X-Amz-Signature=fa36b80e124d96464a78ed3f82145b393d802769499e3d58650205dcdbd2047e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
