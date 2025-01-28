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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFKVNKY6%2F20250128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250128T210101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIQDQsIjIX52MZqimSZlysodsi1kvaRpCTZLxIREfaEhNfgIgQYznujuiok8dC5l%2BJUJAq3ZnYivF50WI8qDpXd7OYrYq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDCm9NBTTtbdJmGkLuircA8HKV025BicKJ42WUs8YQLn33MhVY5HMYd1EsCve3gRTB%2BmYjjf3vqyYPewx57FG1hCYZ6cfxUHefKK9P4CityXwAYLbBz4mgWrQ7J2W0uXzNW%2B1cwkv%2FXC2KFQGvJn%2BqJ%2FCILQ4MAvnKqNMNhYplBqYgDmg%2F5XfV9p9TpaYmxsLNelYsGzD5xbvdzGbgfEu40vD1Px05zTOmyjkqoPG5wbZAW%2BK65KiDmtrDvoQOYGrPkztPtjSNQ%2FWDm7yPVime65OzKSkOyHh%2BNVxvf%2FgVpqd%2BYho7tR7DBROx%2Fm2XlY8DUgd6InmxZFTuiNF%2FVCmakuTt%2FZddVFMe6nTXikrpbifzRl5jM96hRqyD7sGwa9Em5XoGgtL01izQ3aPu3XcNe8ooJ8ltE38g2LJG%2BYK%2FVJqTkSCQpTPfON897MTtwHAqk0K5ScE6StspqczLe7eec52Y4sSrCRAtAUMnjUil1maop8ElG7YuDI16QWXIzdbNKRqpIZnWtXCPV3KVqm2r%2Bog0jSvtBPoNiXt%2BfYoh94hMSzjvJV4cyTYEoqsUguWi0KjWwRfEwElrgloXy3Q1LdVtKttPt%2FtcS%2Bfcd6aJMtZXdZ7NMz89WCpYtw1RxbnDdDlzyOrcQ7PRyBMMMv85LwGOqUBs6IQnrZq6WVvq1h5vXbj5%2FZv6EO0xm6Ss6POrP3lht503q0V91OYJKVEGYV5n0TI2HaZ5oAFNwZfjx%2B%2FbwRxcj%2FRWDFGZuIqe0TelMgAiR1DYQf7jBv7VNLr41i7uM3aPakpucS6OZ3pKAllCmKEjNLHLCtoU1FZVwFQEnC%2FjK%2BcEU3Kov9dgG%2B319Xemqq2u5H7gSGIBhvsYsSUJu0ryL50lIRl&X-Amz-Signature=852ffac70070081fce1f0a6a3597443c8caf290fac66fe3c5a88ee1591e74320&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFKVNKY6%2F20250128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250128T210101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIQDQsIjIX52MZqimSZlysodsi1kvaRpCTZLxIREfaEhNfgIgQYznujuiok8dC5l%2BJUJAq3ZnYivF50WI8qDpXd7OYrYq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDCm9NBTTtbdJmGkLuircA8HKV025BicKJ42WUs8YQLn33MhVY5HMYd1EsCve3gRTB%2BmYjjf3vqyYPewx57FG1hCYZ6cfxUHefKK9P4CityXwAYLbBz4mgWrQ7J2W0uXzNW%2B1cwkv%2FXC2KFQGvJn%2BqJ%2FCILQ4MAvnKqNMNhYplBqYgDmg%2F5XfV9p9TpaYmxsLNelYsGzD5xbvdzGbgfEu40vD1Px05zTOmyjkqoPG5wbZAW%2BK65KiDmtrDvoQOYGrPkztPtjSNQ%2FWDm7yPVime65OzKSkOyHh%2BNVxvf%2FgVpqd%2BYho7tR7DBROx%2Fm2XlY8DUgd6InmxZFTuiNF%2FVCmakuTt%2FZddVFMe6nTXikrpbifzRl5jM96hRqyD7sGwa9Em5XoGgtL01izQ3aPu3XcNe8ooJ8ltE38g2LJG%2BYK%2FVJqTkSCQpTPfON897MTtwHAqk0K5ScE6StspqczLe7eec52Y4sSrCRAtAUMnjUil1maop8ElG7YuDI16QWXIzdbNKRqpIZnWtXCPV3KVqm2r%2Bog0jSvtBPoNiXt%2BfYoh94hMSzjvJV4cyTYEoqsUguWi0KjWwRfEwElrgloXy3Q1LdVtKttPt%2FtcS%2Bfcd6aJMtZXdZ7NMz89WCpYtw1RxbnDdDlzyOrcQ7PRyBMMMv85LwGOqUBs6IQnrZq6WVvq1h5vXbj5%2FZv6EO0xm6Ss6POrP3lht503q0V91OYJKVEGYV5n0TI2HaZ5oAFNwZfjx%2B%2FbwRxcj%2FRWDFGZuIqe0TelMgAiR1DYQf7jBv7VNLr41i7uM3aPakpucS6OZ3pKAllCmKEjNLHLCtoU1FZVwFQEnC%2FjK%2BcEU3Kov9dgG%2B319Xemqq2u5H7gSGIBhvsYsSUJu0ryL50lIRl&X-Amz-Signature=e0001013bc6f88aa599569db1fb1e68b1fc57490c4af8515e7b5efec04663ee3&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
