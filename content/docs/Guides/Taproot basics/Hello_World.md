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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DKVJ3ID%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T081132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIQDqOSM58g%2BDqpEGKz9k4T%2FktnXqFHncYaY%2BmRxk5r57agIgUNmxBnkse2OgllR65uafs3LjM32im3gs7T%2BQ4o4eFicqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJnENK4k%2FuLFpaNpjyrcAza043LYXD8a0laOhlx%2F%2FH5G9GrELor4NDaTHYWcKx7SLLOoeIzzeYo5j5ukubXndnYpKchawMxF%2FJzC%2BhTdM7vEaxCkGjrphDe4Rvy8jaZ9IMwZJzzJJ3RPrrLvkKIe90Lo7XWo4xVtBNax79kyGUPMyOmezja2Uxq8EHUt5Q6OQiyt0PWntwcJiDpKEGyF39qsJJJMFqIvbgi8%2FWn0BDGtU28d91xcLVRX24lX6cXwau%2BzEvLyeLi4JKxyTIaKYt1WF%2BNDQ7GdaGC2cXFDSAQSb%2BBBRcPQ8rD8rF34sF1dJX8k%2BU9HmsmdU9iRYY%2BPK995kvvI0dcWcEDPNYfVSHuENHVwkSyY7KPi6uQ0scCfg%2F1ZvdF1vh2ZhHraWCyHc4JI7wCLOYTjcZWl86O65BhEYtXpsk93Qu%2F%2FYNn7tWnHhIuiS2n%2BeRuk3kunQHpojdc6eZRMP6aKP0oqby2VXI%2FKYKq3HlmSjcRelpt7KrhYl6lyiH6TuGHs57BDnwzzvSasjUd1W8aBAs2f%2FjAMwk1pIBGYzIunYyNXlRrYQg2P8c5C9%2FvKLH4C7G5mT%2F2VXPRbIxPJwOjgocv30eOEp596a13RBeRTwv2e2rWvWlV3C0bH1pfE7XBm9nHNMLOZ478GOqUBr0PTrIu9UT5tPuAWn9c7QtnqyMucJypIvitGTjbHn3Bzt7ZetjvY1x8GqnrpNx%2BJQtWh%2BKCU9EVMgZYKRuL2DzXBGXOf0vw1nC77LbYbdsZwGHi1KXRawJgRONpNUUiuPIyVglCbRYkYFguRAelatKeU13f%2FrKVv0BFdJ%2FnJcLpjUMiuAD4nHGfcemxTEVADwK05dAZAgdJqKRruOyZ8zMD6wBUl&X-Amz-Signature=968302638b6ad37dbbbf76118898013dd49e77695ede835ecc5c74ac6d93103d&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DKVJ3ID%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T081132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIQDqOSM58g%2BDqpEGKz9k4T%2FktnXqFHncYaY%2BmRxk5r57agIgUNmxBnkse2OgllR65uafs3LjM32im3gs7T%2BQ4o4eFicqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJnENK4k%2FuLFpaNpjyrcAza043LYXD8a0laOhlx%2F%2FH5G9GrELor4NDaTHYWcKx7SLLOoeIzzeYo5j5ukubXndnYpKchawMxF%2FJzC%2BhTdM7vEaxCkGjrphDe4Rvy8jaZ9IMwZJzzJJ3RPrrLvkKIe90Lo7XWo4xVtBNax79kyGUPMyOmezja2Uxq8EHUt5Q6OQiyt0PWntwcJiDpKEGyF39qsJJJMFqIvbgi8%2FWn0BDGtU28d91xcLVRX24lX6cXwau%2BzEvLyeLi4JKxyTIaKYt1WF%2BNDQ7GdaGC2cXFDSAQSb%2BBBRcPQ8rD8rF34sF1dJX8k%2BU9HmsmdU9iRYY%2BPK995kvvI0dcWcEDPNYfVSHuENHVwkSyY7KPi6uQ0scCfg%2F1ZvdF1vh2ZhHraWCyHc4JI7wCLOYTjcZWl86O65BhEYtXpsk93Qu%2F%2FYNn7tWnHhIuiS2n%2BeRuk3kunQHpojdc6eZRMP6aKP0oqby2VXI%2FKYKq3HlmSjcRelpt7KrhYl6lyiH6TuGHs57BDnwzzvSasjUd1W8aBAs2f%2FjAMwk1pIBGYzIunYyNXlRrYQg2P8c5C9%2FvKLH4C7G5mT%2F2VXPRbIxPJwOjgocv30eOEp596a13RBeRTwv2e2rWvWlV3C0bH1pfE7XBm9nHNMLOZ478GOqUBr0PTrIu9UT5tPuAWn9c7QtnqyMucJypIvitGTjbHn3Bzt7ZetjvY1x8GqnrpNx%2BJQtWh%2BKCU9EVMgZYKRuL2DzXBGXOf0vw1nC77LbYbdsZwGHi1KXRawJgRONpNUUiuPIyVglCbRYkYFguRAelatKeU13f%2FrKVv0BFdJ%2FnJcLpjUMiuAD4nHGfcemxTEVADwK05dAZAgdJqKRruOyZ8zMD6wBUl&X-Amz-Signature=9e6a060fb0f1e7e96df00afe95fbe9b61e3c3cd62f9056a5206c24ff636f01a4&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
