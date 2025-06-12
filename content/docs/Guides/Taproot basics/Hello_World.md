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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HF6QET6%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T004210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIQCjEhWBySt%2BxGr5JTlArrb4FU3qeZySaEPwlBi9xOGXmQIgdu3wU0Tp49t6jdRTCqcEhVzzWIrdRcWQ7pzUpBE5qqIqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCYxNc6WSnVt4aN%2B5SrcAxuTjFxXaZI3REVGnyv3GrKBErk5bLJDv5fWvrEILJ2zH4crYmb6f1%2FOOq2etZrpzQddPA05%2FoCaksdqesBD5%2BAOCHhBPdPK70d7C%2BeRCreGwsZiyw3mN8NnR9wdaDUmWSmsYSn%2BGoTP1WdFjOVFW4VsgqmF52%2BGFcvOAwTDBJbHkdaagT7pRuCV0nZm1pN3RHwzTsRFCY%2FKYUol3LXyPx3U7chhkwlSOJBR0x56QuZ6kJCFZxRRJHI3MxH2jY5XsBlOqJgXdtpxarWe1XpVxSOJH0Thm7Qk1uCY5RnRKkpiCOdrWoh9gCiBcmSne2DE00i07AVCc8P1UVXFMXNz5kS5EMMEve%2B%2FGQxsWFiT5bodW9mqUJMxJkw8hiQT1X0mYUsB%2FxZ0zdNwTlKAzy7OXHDssuIKjd9vZftbPazazY24Fg2Rv14A5GOfOl78%2Fd%2FOSGnXA3mdLbypVGwQA%2Bgdr2HZ8OeRLwF1m5X9ph%2FnQ2LSx89xdyZ6TeWwL1XP9jeFkv4kBCuhlPuxB8L5QFSQAW4KaEoUh39JrXVzD5Bq2KU1Svg49EbrD7E%2Brte5T1qcZShmnnzNfvg6wzmzghrBMmnbnzrhrvbu8WPLldKHIiS7%2FDNVjnEajXzt0WFzMOy2qMIGOqUB2GgJKoCEVq34lCl%2FV9XgMa26jgJvDHTPg8%2Feq5YCvHyWux2Dfko6GRwLiR9At6chv67Wg8d3QyCi286Zio%2BsAFZn8nhLnRlM3E42LIEP8Q181Oi5liS2pKh3qufyV5fqlFJ045VQH5%2FJFL1Y7tvQmEr8pgyFlzrqfkFcPdVCgkRDUhE0reb7vwvo21mxsrPAB3tyl33JYOWeUqc%2BXUac5gHJtHPP&X-Amz-Signature=c00ad3fbab166213e37a3e81e7f1f4f0ee17df6cc5ec5bda2f54ca46b66083ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HF6QET6%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T004210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIQCjEhWBySt%2BxGr5JTlArrb4FU3qeZySaEPwlBi9xOGXmQIgdu3wU0Tp49t6jdRTCqcEhVzzWIrdRcWQ7pzUpBE5qqIqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCYxNc6WSnVt4aN%2B5SrcAxuTjFxXaZI3REVGnyv3GrKBErk5bLJDv5fWvrEILJ2zH4crYmb6f1%2FOOq2etZrpzQddPA05%2FoCaksdqesBD5%2BAOCHhBPdPK70d7C%2BeRCreGwsZiyw3mN8NnR9wdaDUmWSmsYSn%2BGoTP1WdFjOVFW4VsgqmF52%2BGFcvOAwTDBJbHkdaagT7pRuCV0nZm1pN3RHwzTsRFCY%2FKYUol3LXyPx3U7chhkwlSOJBR0x56QuZ6kJCFZxRRJHI3MxH2jY5XsBlOqJgXdtpxarWe1XpVxSOJH0Thm7Qk1uCY5RnRKkpiCOdrWoh9gCiBcmSne2DE00i07AVCc8P1UVXFMXNz5kS5EMMEve%2B%2FGQxsWFiT5bodW9mqUJMxJkw8hiQT1X0mYUsB%2FxZ0zdNwTlKAzy7OXHDssuIKjd9vZftbPazazY24Fg2Rv14A5GOfOl78%2Fd%2FOSGnXA3mdLbypVGwQA%2Bgdr2HZ8OeRLwF1m5X9ph%2FnQ2LSx89xdyZ6TeWwL1XP9jeFkv4kBCuhlPuxB8L5QFSQAW4KaEoUh39JrXVzD5Bq2KU1Svg49EbrD7E%2Brte5T1qcZShmnnzNfvg6wzmzghrBMmnbnzrhrvbu8WPLldKHIiS7%2FDNVjnEajXzt0WFzMOy2qMIGOqUB2GgJKoCEVq34lCl%2FV9XgMa26jgJvDHTPg8%2Feq5YCvHyWux2Dfko6GRwLiR9At6chv67Wg8d3QyCi286Zio%2BsAFZn8nhLnRlM3E42LIEP8Q181Oi5liS2pKh3qufyV5fqlFJ045VQH5%2FJFL1Y7tvQmEr8pgyFlzrqfkFcPdVCgkRDUhE0reb7vwvo21mxsrPAB3tyl33JYOWeUqc%2BXUac5gHJtHPP&X-Amz-Signature=004680d6be88793b824d8ee1af9af05c684dd859a5a51b3e655621e08daf7f13&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
