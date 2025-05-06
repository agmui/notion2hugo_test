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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYGK6TFW%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T230810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBzQwfFTLY%2FqhDY2NqZ2v5FPT5DnKn2PTBbzChVyJCebAiEAqnaweEIGgbi3BQmrP5T6ChcG0rFwdECXKZQmj05Tzjoq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDCtQHGP0hbFthEVo5CrcA5B8iqoZRYm17kRIe7dswPMJt4tld2ZYmXUQvA6FfIh2L%2BtqKwuX12rIaPFzWC8eqqoOAWls00RgNpNpB%2B7fbZ%2FnON7%2BcQoUe8v7LdDRBGhKCJVJSD3sSsn0NOh1epzXbHyOn6SP3yo6TiQyBzBK8Jmk%2FG4sukfhY3sxtq9WqeU5Pn%2BTOQxbCtm3OpsoOMqjvjH19J%2BGdm9ChGqJQ2otncLn7Hr8rnXYHmt5nW%2FIyg%2F5%2B2k4AdkOI5ojWbbrtq61zJAoo5DSAFfS1pRNNBULkqOhSLwb7TCN2h8kecALl8A7Jkx4sXvUbQgDe%2Fmts%2FpXCWrJ%2BapQH3dtCgroxWok%2FZiRnKjwTvzPkZzLQQilVdyo%2BX1dn%2FrQXMXehXKD6sVXlfpM97jMSZYKzkhSDsqcYEVZpIjbrHSmUnH33TxuqNCxNzEoUvFhH800PwQnJ1zI1A3FSSRZ3vRWKe2u3YJvAOexhzaueJd1x6%2B5V%2BLYZoKNqbwUcOB6DF1PuSu86v99XbRbBvF1rNW%2FOihWo9UaPf1ExnLCeJFQpLv9g%2FR48x2P8%2ByWVelMSkClZ3b7hye3Nemjty4qdl5DO6Pz6U0fyUSSK4iPSKyEnSReKvstoKcIl4WmCIagzJfc89QkMPmV6sAGOqUBFAUzfBjopSL1ByAW3N9dHK4OIft1joXM%2FlQgbIFcudUxoe%2FHqcAXUpJpjUjS9XZhWyrEMmgtT5KFqe77aoBUtgKRgh9BfF1PyKtYkpY8zN02kqpSSKHwG7PqwhJjPM1W12JqN%2BDzHgwU6U6e7z8MeYx079yAKrcLz6VttnJr%2FgtWuGCzmOLL%2Bzao2NXK262YJeauZwZjV%2Bka4meGoRppfDVFvCxj&X-Amz-Signature=8c83575c8ff45b4f7f501bc1230a102870d1c5a38f6a9819c736692daad958ff&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYGK6TFW%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T230810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBzQwfFTLY%2FqhDY2NqZ2v5FPT5DnKn2PTBbzChVyJCebAiEAqnaweEIGgbi3BQmrP5T6ChcG0rFwdECXKZQmj05Tzjoq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDCtQHGP0hbFthEVo5CrcA5B8iqoZRYm17kRIe7dswPMJt4tld2ZYmXUQvA6FfIh2L%2BtqKwuX12rIaPFzWC8eqqoOAWls00RgNpNpB%2B7fbZ%2FnON7%2BcQoUe8v7LdDRBGhKCJVJSD3sSsn0NOh1epzXbHyOn6SP3yo6TiQyBzBK8Jmk%2FG4sukfhY3sxtq9WqeU5Pn%2BTOQxbCtm3OpsoOMqjvjH19J%2BGdm9ChGqJQ2otncLn7Hr8rnXYHmt5nW%2FIyg%2F5%2B2k4AdkOI5ojWbbrtq61zJAoo5DSAFfS1pRNNBULkqOhSLwb7TCN2h8kecALl8A7Jkx4sXvUbQgDe%2Fmts%2FpXCWrJ%2BapQH3dtCgroxWok%2FZiRnKjwTvzPkZzLQQilVdyo%2BX1dn%2FrQXMXehXKD6sVXlfpM97jMSZYKzkhSDsqcYEVZpIjbrHSmUnH33TxuqNCxNzEoUvFhH800PwQnJ1zI1A3FSSRZ3vRWKe2u3YJvAOexhzaueJd1x6%2B5V%2BLYZoKNqbwUcOB6DF1PuSu86v99XbRbBvF1rNW%2FOihWo9UaPf1ExnLCeJFQpLv9g%2FR48x2P8%2ByWVelMSkClZ3b7hye3Nemjty4qdl5DO6Pz6U0fyUSSK4iPSKyEnSReKvstoKcIl4WmCIagzJfc89QkMPmV6sAGOqUBFAUzfBjopSL1ByAW3N9dHK4OIft1joXM%2FlQgbIFcudUxoe%2FHqcAXUpJpjUjS9XZhWyrEMmgtT5KFqe77aoBUtgKRgh9BfF1PyKtYkpY8zN02kqpSSKHwG7PqwhJjPM1W12JqN%2BDzHgwU6U6e7z8MeYx079yAKrcLz6VttnJr%2FgtWuGCzmOLL%2Bzao2NXK262YJeauZwZjV%2Bka4meGoRppfDVFvCxj&X-Amz-Signature=f68a0565e72c2dd96ec6d20d3b6db3fac1a15c10b2c4b2e2609fcc78ca47f502&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
