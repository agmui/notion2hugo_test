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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHR5NUPJ%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T181253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCFf2lsOLOBm1ucCzwFZdo3Q%2Baj0r1KrFsuk7q1UArE6gIhAPpwyOTvyq3G5NyjvktoVqYrnWZUhMxrSkbfa%2FQOUdBTKv8DCHoQABoMNjM3NDIzMTgzODA1IgwAAGws6xkKJc1BXtIq3AM71npkWfHPycq%2B4J3MlNRDmkyluT9SRYIY%2FMyWY5Z%2FNxtQnvplsLivuDQxguN92IrL%2FGx%2FegoFawphAvLgw12hswO8KI8IA12TJOYev2mE7fXgVk8p6pA82PeTkPAvujct%2Fd5vO1gFMPd9oe2T%2FOr3gjzXvo3QnEBMdI1NQxj9oq5T6WLKmVggY%2BUXgQqvw7yQXbF2l6HqMrOV%2FeDEi16N7Nx6so1sv1w1xPmd6ZLjvg7kpImjPfDibdg8wbPFrgoEo4AbnKXiSM1y33J1u5G2wUQXqhhR8ltPALZJS4N1PSWhYpntudbXEVWkr1U4ylcxZ0C8iOMa3GHBUlIckKahaq%2FFyFQCCLtOOGDkhmhQnP1lxmx7O2W%2F6rMBrVaMMdamlQ8RfGKmquhWuob84pskBTnXArb4zJfxBtJb3IT1i6EkBdc1HmYsEWgvQj3vhqSRZ0FxkNr3eUawmusvzJ04VwaEatoq27SeTI6MCN%2Br9s%2BJeGqAi73hPtNpPjVH22ts0gDFz8TanYMFlljuJXSuzPaAxnFdeUPndLajnZLBP7Hmz3ZS1J8nFtaBZfO8%2FI1wqbX507xzQz%2Fy7sMsj4CVGLFvb5UGM0MwAF3h4mCVZgskZkinBiIEosuiHTCttMbCBjqkAQ1vA332wTv1tX7tUHazO1%2F7xJrHwZB66qv751yyjrze3BqEfVj68SZhWklc3LBwBlaOb64b7V8jMVDnreQ3rcn5RyzM7fIjL8TBfRXgNwYzSi3oQGz7OBfZQAx%2BGsVR%2FKcbTHg8dY%2B5MSCff1u7W%2FA9CYbOVr4%2BdcHUuolAy0ouk%2BfCY4RDhtdZT0D1pyy5t3KvzURkPWCMnknBYX2lgZJvf8TZ&X-Amz-Signature=70a7964bd24fc4bda13196908967fb5f8dd7318c8519f4a536fab5f8777bf42f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHR5NUPJ%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T181253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCFf2lsOLOBm1ucCzwFZdo3Q%2Baj0r1KrFsuk7q1UArE6gIhAPpwyOTvyq3G5NyjvktoVqYrnWZUhMxrSkbfa%2FQOUdBTKv8DCHoQABoMNjM3NDIzMTgzODA1IgwAAGws6xkKJc1BXtIq3AM71npkWfHPycq%2B4J3MlNRDmkyluT9SRYIY%2FMyWY5Z%2FNxtQnvplsLivuDQxguN92IrL%2FGx%2FegoFawphAvLgw12hswO8KI8IA12TJOYev2mE7fXgVk8p6pA82PeTkPAvujct%2Fd5vO1gFMPd9oe2T%2FOr3gjzXvo3QnEBMdI1NQxj9oq5T6WLKmVggY%2BUXgQqvw7yQXbF2l6HqMrOV%2FeDEi16N7Nx6so1sv1w1xPmd6ZLjvg7kpImjPfDibdg8wbPFrgoEo4AbnKXiSM1y33J1u5G2wUQXqhhR8ltPALZJS4N1PSWhYpntudbXEVWkr1U4ylcxZ0C8iOMa3GHBUlIckKahaq%2FFyFQCCLtOOGDkhmhQnP1lxmx7O2W%2F6rMBrVaMMdamlQ8RfGKmquhWuob84pskBTnXArb4zJfxBtJb3IT1i6EkBdc1HmYsEWgvQj3vhqSRZ0FxkNr3eUawmusvzJ04VwaEatoq27SeTI6MCN%2Br9s%2BJeGqAi73hPtNpPjVH22ts0gDFz8TanYMFlljuJXSuzPaAxnFdeUPndLajnZLBP7Hmz3ZS1J8nFtaBZfO8%2FI1wqbX507xzQz%2Fy7sMsj4CVGLFvb5UGM0MwAF3h4mCVZgskZkinBiIEosuiHTCttMbCBjqkAQ1vA332wTv1tX7tUHazO1%2F7xJrHwZB66qv751yyjrze3BqEfVj68SZhWklc3LBwBlaOb64b7V8jMVDnreQ3rcn5RyzM7fIjL8TBfRXgNwYzSi3oQGz7OBfZQAx%2BGsVR%2FKcbTHg8dY%2B5MSCff1u7W%2FA9CYbOVr4%2BdcHUuolAy0ouk%2BfCY4RDhtdZT0D1pyy5t3KvzURkPWCMnknBYX2lgZJvf8TZ&X-Amz-Signature=baf0fafaa8d06ca4703caf59501cae5f2222ca5eedba3b1a6cd49d1713d5205f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
