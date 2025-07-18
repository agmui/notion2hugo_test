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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXTZAYHJ%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T081309Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJGMEQCIG5do7f2DOVqKE%2F%2FPPg0A%2BXqXIS9lUi5KwkBkYIWB0mHAiACbMBveEW%2BRI2y7m%2FbKykMx53xw3gF5SyPRBrpocXENyqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgElu6f01Cua4GPv6KtwDz6Mqwxx5PEK0xbsptdm5vdl2hi%2BJVw7f3SaywsE0S6i2Ha0t1GFFpFmQZKuSLk4dh23uYpfij45JRCGvFjfuQXgHwcfyKuxjuIZK%2FzoT1bxLgFvV2o7K%2ByfPplhmalc%2FWOP4%2FJyiUiL6A2aL37aj43m%2BJlLHyl0YdAuIr5%2Bg%2FoDz5uN45cUaBtgCXQ0CLlYRR8fdmKl5q8eRNwzGWLx%2FpW92u3hteja8VpLaPxv8zJaf7VhHxGjLnt33YhJZUjJ3PGCgq3%2F18qTpsJQsjhTrAiRzciPjCFhIpjV%2F0ty6W6F7h96zUo7lV6cdsJlIVnzFf%2B8BQW6pDsMwk0Z%2BBN0LaTN4EoWZaouo5XYflQVw8q5ZBoIH%2F7Kp5srMmopAON4aUkAMGqyX2aVXZzYy8IMn1vI4Ge%2BHHBw9HJwTsG8r51AxVLKaogNlJa3ABLsvqMhj6AV6t9BgFxtOcB2dqLv16R9HJpJrJSvNW4OH00Tb%2Flb%2BNS%2BAE8nC5pLlRZmGJunURf0e0zjT5oKgzTrxJ3bPFpdvGCHG3T%2FThXms4kYcBt5CjfGn20dKG%2B7xaKMEwq%2F9bsQs3AzzgAccbNeilbcPxwX%2FJK8m1R%2Bdm8FBVPBKXKq8XVDKOJSO%2FXux1n8wlv3nwwY6pgGo7J188HGghuzXpq9jXODIgC0205wjoXEX5nJPqbUSIKTdeQE32xL%2BjKE2wpi6JX5LqeCtRneGRmKc3ssNISYkhU8RzmR%2FTTmMBJLk2LwwadD2f0JG8tBK7PyiCNPe5gFpMOKLs4FWThC%2BXC8jWkUsafDloKe8Nx0nN4D%2FNqN3g5WOVIc884Fk5tuxmZeFMexBXCdd84cTO7hpjSmTh7LtOGC2WOg2&X-Amz-Signature=361599488e7015586d0bd24763a93927bcead881cd72efe284abf2160ca4b599&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXTZAYHJ%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T081309Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJGMEQCIG5do7f2DOVqKE%2F%2FPPg0A%2BXqXIS9lUi5KwkBkYIWB0mHAiACbMBveEW%2BRI2y7m%2FbKykMx53xw3gF5SyPRBrpocXENyqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgElu6f01Cua4GPv6KtwDz6Mqwxx5PEK0xbsptdm5vdl2hi%2BJVw7f3SaywsE0S6i2Ha0t1GFFpFmQZKuSLk4dh23uYpfij45JRCGvFjfuQXgHwcfyKuxjuIZK%2FzoT1bxLgFvV2o7K%2ByfPplhmalc%2FWOP4%2FJyiUiL6A2aL37aj43m%2BJlLHyl0YdAuIr5%2Bg%2FoDz5uN45cUaBtgCXQ0CLlYRR8fdmKl5q8eRNwzGWLx%2FpW92u3hteja8VpLaPxv8zJaf7VhHxGjLnt33YhJZUjJ3PGCgq3%2F18qTpsJQsjhTrAiRzciPjCFhIpjV%2F0ty6W6F7h96zUo7lV6cdsJlIVnzFf%2B8BQW6pDsMwk0Z%2BBN0LaTN4EoWZaouo5XYflQVw8q5ZBoIH%2F7Kp5srMmopAON4aUkAMGqyX2aVXZzYy8IMn1vI4Ge%2BHHBw9HJwTsG8r51AxVLKaogNlJa3ABLsvqMhj6AV6t9BgFxtOcB2dqLv16R9HJpJrJSvNW4OH00Tb%2Flb%2BNS%2BAE8nC5pLlRZmGJunURf0e0zjT5oKgzTrxJ3bPFpdvGCHG3T%2FThXms4kYcBt5CjfGn20dKG%2B7xaKMEwq%2F9bsQs3AzzgAccbNeilbcPxwX%2FJK8m1R%2Bdm8FBVPBKXKq8XVDKOJSO%2FXux1n8wlv3nwwY6pgGo7J188HGghuzXpq9jXODIgC0205wjoXEX5nJPqbUSIKTdeQE32xL%2BjKE2wpi6JX5LqeCtRneGRmKc3ssNISYkhU8RzmR%2FTTmMBJLk2LwwadD2f0JG8tBK7PyiCNPe5gFpMOKLs4FWThC%2BXC8jWkUsafDloKe8Nx0nN4D%2FNqN3g5WOVIc884Fk5tuxmZeFMexBXCdd84cTO7hpjSmTh7LtOGC2WOg2&X-Amz-Signature=138d779064a36e47f638d37b32e1ea6601d1cf787b6622e18ce614de6528588c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
