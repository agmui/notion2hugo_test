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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MKHQ2ZP%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T210750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJGMEQCIG87RBe%2F3zH7iToklm38%2FEfWTGKYd%2FSm9Ad21g03pg9DAiAZW2gFvPAM1Z5TmbePnw9IkWZCSNaneOk7TlvigOMK%2BiqIBAjF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMr34G6akeBOhQPZVKKtwDdQJFOMFeRih2m%2B4QR8Hi1DUrkkr7BioqbnSMr3wislOaLLMz9TqkzLi95ZlGAVVtsXVlHfV4LiKxG3H0%2BA2c770my7YVTsg8ZB5%2BO%2FutoO2sF7qTcohGB8CxOyrYB%2FEUjrEDsqEMzKNGFHcCASRZCCxn0fMPru8CDpoQ%2B9DN0Te0vSLrZvhZbM1lbbO49jnIe%2Bo%2FR4KcYik2p2H4bLYEB7CJDazX6WvNAuw1o0WTew%2F0MDynYMsl28tJuMh7u%2FRpogS9tZ5%2F%2F%2F3f7YDLLzgS%2Btn8eXpgVcuAlcr2W9hlxaEYXeBiWVKLavgDWB9zsvuwYYgcSZrspQm5WmCgVfjYNKkKiRQ3jlY82nQm%2BNU7Ry9iEQJx%2FXkl%2FTu2rhJx0AHNj%2BrO3dnO%2FiTUtL7SkSJeMST%2FJ0ecx3spFYFqGBrqaR7KW8bcZdgR6KXlCfFAGQ3B0dRtOzd2i0jnDBe6HMWUEyhDnhYZMX9k2sGTkqIA8t1IAuq3TzSDlUkeDHYd0ITKvBItTLQguR3MQe3n49z3QTLvRolcHr4gnVWY%2F1y2p6Ge0%2BPR%2B78HZFAyAc8cRe%2BRsbCVv7ORSo0iVTnn58wccRFOQm7kFeD0Eb0bch%2FY1sw17oigR69wZPCqwQkwsKvPwAY6pgEjiuT2aKDFpIcq7PQRvga9VSbF5kiUSPyUlsRf1gOkw9KNv68li8pMHPjbuBtdtue82%2BRPMLvaTMHGKMOuEWtHZQ5TCzDgsTJXwfgENc7ti57hPL0Ea%2F3eWl2yevZyC6UFGWrjAHKDKFPVL9Pc6gl3bKUGL037FpcDfub5WJJ6TXutqeU5zd6PEkJqFNsFUd6fg1U9hq4%2FIXX2pWQ4JVN3ML8Tl0Ml&X-Amz-Signature=e2748243d86721111012f696dcb9add3e8b17585716e5b16f652ec53b8ee1192&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MKHQ2ZP%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T210750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJGMEQCIG87RBe%2F3zH7iToklm38%2FEfWTGKYd%2FSm9Ad21g03pg9DAiAZW2gFvPAM1Z5TmbePnw9IkWZCSNaneOk7TlvigOMK%2BiqIBAjF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMr34G6akeBOhQPZVKKtwDdQJFOMFeRih2m%2B4QR8Hi1DUrkkr7BioqbnSMr3wislOaLLMz9TqkzLi95ZlGAVVtsXVlHfV4LiKxG3H0%2BA2c770my7YVTsg8ZB5%2BO%2FutoO2sF7qTcohGB8CxOyrYB%2FEUjrEDsqEMzKNGFHcCASRZCCxn0fMPru8CDpoQ%2B9DN0Te0vSLrZvhZbM1lbbO49jnIe%2Bo%2FR4KcYik2p2H4bLYEB7CJDazX6WvNAuw1o0WTew%2F0MDynYMsl28tJuMh7u%2FRpogS9tZ5%2F%2F%2F3f7YDLLzgS%2Btn8eXpgVcuAlcr2W9hlxaEYXeBiWVKLavgDWB9zsvuwYYgcSZrspQm5WmCgVfjYNKkKiRQ3jlY82nQm%2BNU7Ry9iEQJx%2FXkl%2FTu2rhJx0AHNj%2BrO3dnO%2FiTUtL7SkSJeMST%2FJ0ecx3spFYFqGBrqaR7KW8bcZdgR6KXlCfFAGQ3B0dRtOzd2i0jnDBe6HMWUEyhDnhYZMX9k2sGTkqIA8t1IAuq3TzSDlUkeDHYd0ITKvBItTLQguR3MQe3n49z3QTLvRolcHr4gnVWY%2F1y2p6Ge0%2BPR%2B78HZFAyAc8cRe%2BRsbCVv7ORSo0iVTnn58wccRFOQm7kFeD0Eb0bch%2FY1sw17oigR69wZPCqwQkwsKvPwAY6pgEjiuT2aKDFpIcq7PQRvga9VSbF5kiUSPyUlsRf1gOkw9KNv68li8pMHPjbuBtdtue82%2BRPMLvaTMHGKMOuEWtHZQ5TCzDgsTJXwfgENc7ti57hPL0Ea%2F3eWl2yevZyC6UFGWrjAHKDKFPVL9Pc6gl3bKUGL037FpcDfub5WJJ6TXutqeU5zd6PEkJqFNsFUd6fg1U9hq4%2FIXX2pWQ4JVN3ML8Tl0Ml&X-Amz-Signature=4b9f7e4b9fb2252a744f1735b929730d0c76c542237af1dfd60479af17427d56&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
