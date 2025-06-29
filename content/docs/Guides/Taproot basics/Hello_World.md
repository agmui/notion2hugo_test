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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLR5QAI7%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T110540Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICi8FEHlA4ZWYhVJ%2FYpleRKrO7bVXv26lfdCwP%2Fwu2dOAiBUfFY17H59HoEoJ9%2BMMjkgj5mn4daWKQvztheWBiSplyqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVoef3pc8xKJlfCtbKtwD0VUS7I7H31zo4md6AILaQYleogMv6fIqXbsQ99cFETE1rpdfx9QGBh9VnCoMg3PFb1k6GQkXi%2BtqMUSjJezx5f7tJUWBf%2BBZKQ%2B4a7VvrDg0ipGtSxOWMjy6TAgWiOuODUY4Okyapq9rmHc1xShiy2TM1b50wFmNh8jT1rSG9%2FDcNcOXTUQU508DciCA4s8nfX5nVh%2FmIzRrkuiwaX%2BttLrLx393DGm0GKe1f%2F9kuOcR9T%2BMVxigY%2Bpa0%2B109rG2ZFhd69YrYKrJb5POlDN5yz1iEPRMerUkbrlMNZGn3FpE3lMGKOFG4erILpzwtg2Y3G4CHDOnR6rF5f%2Bjz9ymQecqGw8x1pJrDDvW0ambEf%2BlN9MiT2%2BnH%2BQQdO77A%2FR0aphUQAa%2BCvnY%2Bp%2Bte1OsCpP0HHRq%2BHF%2BeteKNK2Pw0CPnHPS5mIjlq2QW%2FWfWwI9EDkob7pPTlCo%2BrIanh%2FZqUGh2QNL21NH19FnWZ6V3UF92TxzqnluJcYsbkqe%2FFk7sDl47sEofU1f4vjh9oW7REaLcA4jDq97FtEeUfY%2BW4C1vHVY8Vr9XNB5Cx4roZPfYIrS2404PHPnAEbjEFuNJjhYTPPwAA%2Fxmj%2BQCoUqiJVZXIZcwZzORzMQC8cwuYGEwwY6pgGO3926u%2F6ojkQTTMLUmkbBGXYQSFj4ISkr8B5DuEPRqZWfcQdHLbML%2Bi8OjHbrmPLJBrFVl0dHdo%2BHUrTTaDYgk%2FA%2F30CGyWZRA5Q2Bs4HebON76v2hVVA2WBY9QcABlP4YlyhwcuFr3RmzsoX5ZJyYbBAYoxW24hYu34dxmnpmHKIEokXWwikerckwadRkAdTY4vD1Q%2F1bPD3E6wLsjvNuvH6axTF&X-Amz-Signature=296ba44ca3b87e92c309cd1295d15c14154e5141d17d9171fb8a34424e171d36&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLR5QAI7%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T110540Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICi8FEHlA4ZWYhVJ%2FYpleRKrO7bVXv26lfdCwP%2Fwu2dOAiBUfFY17H59HoEoJ9%2BMMjkgj5mn4daWKQvztheWBiSplyqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVoef3pc8xKJlfCtbKtwD0VUS7I7H31zo4md6AILaQYleogMv6fIqXbsQ99cFETE1rpdfx9QGBh9VnCoMg3PFb1k6GQkXi%2BtqMUSjJezx5f7tJUWBf%2BBZKQ%2B4a7VvrDg0ipGtSxOWMjy6TAgWiOuODUY4Okyapq9rmHc1xShiy2TM1b50wFmNh8jT1rSG9%2FDcNcOXTUQU508DciCA4s8nfX5nVh%2FmIzRrkuiwaX%2BttLrLx393DGm0GKe1f%2F9kuOcR9T%2BMVxigY%2Bpa0%2B109rG2ZFhd69YrYKrJb5POlDN5yz1iEPRMerUkbrlMNZGn3FpE3lMGKOFG4erILpzwtg2Y3G4CHDOnR6rF5f%2Bjz9ymQecqGw8x1pJrDDvW0ambEf%2BlN9MiT2%2BnH%2BQQdO77A%2FR0aphUQAa%2BCvnY%2Bp%2Bte1OsCpP0HHRq%2BHF%2BeteKNK2Pw0CPnHPS5mIjlq2QW%2FWfWwI9EDkob7pPTlCo%2BrIanh%2FZqUGh2QNL21NH19FnWZ6V3UF92TxzqnluJcYsbkqe%2FFk7sDl47sEofU1f4vjh9oW7REaLcA4jDq97FtEeUfY%2BW4C1vHVY8Vr9XNB5Cx4roZPfYIrS2404PHPnAEbjEFuNJjhYTPPwAA%2Fxmj%2BQCoUqiJVZXIZcwZzORzMQC8cwuYGEwwY6pgGO3926u%2F6ojkQTTMLUmkbBGXYQSFj4ISkr8B5DuEPRqZWfcQdHLbML%2Bi8OjHbrmPLJBrFVl0dHdo%2BHUrTTaDYgk%2FA%2F30CGyWZRA5Q2Bs4HebON76v2hVVA2WBY9QcABlP4YlyhwcuFr3RmzsoX5ZJyYbBAYoxW24hYu34dxmnpmHKIEokXWwikerckwadRkAdTY4vD1Q%2F1bPD3E6wLsjvNuvH6axTF&X-Amz-Signature=02d46c45a4b7573c8668f74a103b78625f09f17aaf474f759899b445a0ca3eb8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
