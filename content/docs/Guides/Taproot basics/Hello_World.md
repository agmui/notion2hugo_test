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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2HAP2T6%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T050810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCNC6jic%2BB2py9O%2BImduq5lEzmJXoEzyYi5KFymH2WqoQIhAP1%2FPAVGxrtAFvwxkvb3ASEFlQw6oJFV4UrM%2FRHcl2DPKogECPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzfvcCqgab5G6BFgQYq3AMVkLN7A04G7gIAPFo77TMBPX53usN32caJxr4LzkBuYDIOFG1LR3%2BuoodNjP%2BbmJP%2B2n1VmPs0ypenehzd51ovwVlZHpF%2B9mF2tVraLpejpmIDbE1zzP9FDBFtIU8HrxyFu0dPLQCHhqBsOjEYy%2BV5FqbcT6eTGzs8W2sBU%2FmwhjCuCFA6vTInELw1eYtnAXpIYpXX6bG2WvajYn52cJVty4go7SgRo8QS4ZI%2Ff87RskN3UUTXX4cAGNOYYeuQvrs06FHowCyvIT4OD1K607aNssTcLPL49zkwof0WmITy4UNsf5j3UPauOhrMxuVUxvbTdimzlYo2VaPHZfNniEnGOu5HayrKlGspaBNYMJa67E2Zjne33PWeqAnZ8HfM1QEBWVPGWVNUulK5PckphjQVXMv3u26Gqx20d9pHHrjyFu7mB6WKHQuHeeuj%2FC8jI7UOei597t%2B7jErjsEkTjNMoAyGy9PtKnrSEwmONmLbmne7FRUISC1PmuHU5t1INRykXzyJuhDxeHxbpYPd7cwjhPLLjk1NQ9F%2BVI0pS3VkEWhkTmFjAWxWOaK4aJ9Ja8KQHOWOfYkFZuEe9NcZKW9rZR9exd8k%2BoLBZXLp9QD8UKB2RyuNG%2BSiiy7RRdTDPwYC9BjqkAbIDJSWGHyy5APv5d6SI9WOoSjcxbdq1DHQpzCiCyXSJ1cqdy4D%2B9o%2FATwdPjVMD%2BzzHWAfHWV1%2BdDnw%2FS1ym4igb6XhxddvK2JalOtszxvEACwhgkDOiC7CqwjFsdwGE6u0G%2FRTkhRULoP2%2BTP07qumLTG7OOQlgT6jEI%2BP30W3kQHNvHfO%2FDqLjfr014vUJmPy8wtlexVGv1kJJOaSpJFJL%2FnK&X-Amz-Signature=6e0bd5f01049f3e3fa64cc0523d061f462df414afb886652a75e125a20cd3007&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2HAP2T6%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T050810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCNC6jic%2BB2py9O%2BImduq5lEzmJXoEzyYi5KFymH2WqoQIhAP1%2FPAVGxrtAFvwxkvb3ASEFlQw6oJFV4UrM%2FRHcl2DPKogECPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzfvcCqgab5G6BFgQYq3AMVkLN7A04G7gIAPFo77TMBPX53usN32caJxr4LzkBuYDIOFG1LR3%2BuoodNjP%2BbmJP%2B2n1VmPs0ypenehzd51ovwVlZHpF%2B9mF2tVraLpejpmIDbE1zzP9FDBFtIU8HrxyFu0dPLQCHhqBsOjEYy%2BV5FqbcT6eTGzs8W2sBU%2FmwhjCuCFA6vTInELw1eYtnAXpIYpXX6bG2WvajYn52cJVty4go7SgRo8QS4ZI%2Ff87RskN3UUTXX4cAGNOYYeuQvrs06FHowCyvIT4OD1K607aNssTcLPL49zkwof0WmITy4UNsf5j3UPauOhrMxuVUxvbTdimzlYo2VaPHZfNniEnGOu5HayrKlGspaBNYMJa67E2Zjne33PWeqAnZ8HfM1QEBWVPGWVNUulK5PckphjQVXMv3u26Gqx20d9pHHrjyFu7mB6WKHQuHeeuj%2FC8jI7UOei597t%2B7jErjsEkTjNMoAyGy9PtKnrSEwmONmLbmne7FRUISC1PmuHU5t1INRykXzyJuhDxeHxbpYPd7cwjhPLLjk1NQ9F%2BVI0pS3VkEWhkTmFjAWxWOaK4aJ9Ja8KQHOWOfYkFZuEe9NcZKW9rZR9exd8k%2BoLBZXLp9QD8UKB2RyuNG%2BSiiy7RRdTDPwYC9BjqkAbIDJSWGHyy5APv5d6SI9WOoSjcxbdq1DHQpzCiCyXSJ1cqdy4D%2B9o%2FATwdPjVMD%2BzzHWAfHWV1%2BdDnw%2FS1ym4igb6XhxddvK2JalOtszxvEACwhgkDOiC7CqwjFsdwGE6u0G%2FRTkhRULoP2%2BTP07qumLTG7OOQlgT6jEI%2BP30W3kQHNvHfO%2FDqLjfr014vUJmPy8wtlexVGv1kJJOaSpJFJL%2FnK&X-Amz-Signature=dab437125422fb70703778c76d823931a211e4d996be10b95dd61f2b70c17ff8&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
