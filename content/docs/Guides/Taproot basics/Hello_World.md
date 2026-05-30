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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGMICPEC%2F20260530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260530T032752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJGMEQCICkBg5lDgCVIyT9n3vh%2FwDsP8r1JlL1NoUjcv5a6EfwoAiAC5BXBCKDeTvCxFmbaex%2BLPGaYTxW3SH6%2BomwXnJg8bCqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7uU9LeoSRI%2FmI4fUKtwDUN97spO2akR%2F7K2wFHoLkRx3otqxuJ9pyUMK4sTNC7Kx3QJ4Bh0f4b3lmPBuAUa4AdtqhEWGzgE2%2Brx9Xx36RkmSxN%2BZbU0YZ42EBuzgs4YPi9W4ptF6dAEBGH6jyDA5ZIKBUtA6OrbCf6cnx5tn1Oe2HQK0Xnsz1d6BC3ENGJ%2Fl0aFNKMj1kZWLivRNL%2BDrxFu2LXGzQ0FJybAEpbIzfBV3%2F%2BUbQ8kJ5XusTfSxS80e9CPCi8agIxGi8Rw8d6AeafE2qZvM83RmADILyY3qOBMOKEsIZyG7I%2FjT0N8jX5g1T4t%2Boaw4GB1UXYjnwHhGz13plYOtwN6VF8YJkCywHWHixJl6bkiXtINWmfs21qwcHPNFdkUHnor2Pt4WN7huORwgQjFOaKgKo7j6iAtmYxjex30enPk12VStYo7QHkPLTl15tJA82R3NXmsTpprmSMYk1lVfdY2wdB688%2Fk8mCofSBIMlRKHEy8pn80xYdgnkhBa2%2FSgFRpDUxDByLJijeJa5J7Z6LMYRxVMqRZUaycM3zrN5gqD4da%2BxmhH3kbNeoJoltSXAk1mHSjv%2FyF9oh5lPhqponrP2RcJ25%2FLBrqg2wo5479LI4Z8atFsYpdpH%2BK9FldKXT2loJkw%2Fqjp0AY6pgGXvX3S11xIFgfF8kUH%2B8t%2BLW4JOqsvLqmC4Z7dLh8GQaDSXDI9Xrutk5GbzBIZd2qnU9l5a1pc4etB6t6A2K%2BOv0WtrwUxE1q4VAq1wkbBzAx%2FeHzO6XcedKXMtmKxKLmLfAIurAfQ3OY9FfWH%2By%2FDQwP%2Bk34fkx6rOMa0glBdmsr7jsxpLQCAHKOEKkUiqJY0c2bkvGroZY1hEWst%2BNQrKikP%2FRTK&X-Amz-Signature=b229e3f67fafec9781e9bce6b1a4c46db8a76d3e78d9fda652dc175f6a69fcfd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGMICPEC%2F20260530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260530T032752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJGMEQCICkBg5lDgCVIyT9n3vh%2FwDsP8r1JlL1NoUjcv5a6EfwoAiAC5BXBCKDeTvCxFmbaex%2BLPGaYTxW3SH6%2BomwXnJg8bCqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7uU9LeoSRI%2FmI4fUKtwDUN97spO2akR%2F7K2wFHoLkRx3otqxuJ9pyUMK4sTNC7Kx3QJ4Bh0f4b3lmPBuAUa4AdtqhEWGzgE2%2Brx9Xx36RkmSxN%2BZbU0YZ42EBuzgs4YPi9W4ptF6dAEBGH6jyDA5ZIKBUtA6OrbCf6cnx5tn1Oe2HQK0Xnsz1d6BC3ENGJ%2Fl0aFNKMj1kZWLivRNL%2BDrxFu2LXGzQ0FJybAEpbIzfBV3%2F%2BUbQ8kJ5XusTfSxS80e9CPCi8agIxGi8Rw8d6AeafE2qZvM83RmADILyY3qOBMOKEsIZyG7I%2FjT0N8jX5g1T4t%2Boaw4GB1UXYjnwHhGz13plYOtwN6VF8YJkCywHWHixJl6bkiXtINWmfs21qwcHPNFdkUHnor2Pt4WN7huORwgQjFOaKgKo7j6iAtmYxjex30enPk12VStYo7QHkPLTl15tJA82R3NXmsTpprmSMYk1lVfdY2wdB688%2Fk8mCofSBIMlRKHEy8pn80xYdgnkhBa2%2FSgFRpDUxDByLJijeJa5J7Z6LMYRxVMqRZUaycM3zrN5gqD4da%2BxmhH3kbNeoJoltSXAk1mHSjv%2FyF9oh5lPhqponrP2RcJ25%2FLBrqg2wo5479LI4Z8atFsYpdpH%2BK9FldKXT2loJkw%2Fqjp0AY6pgGXvX3S11xIFgfF8kUH%2B8t%2BLW4JOqsvLqmC4Z7dLh8GQaDSXDI9Xrutk5GbzBIZd2qnU9l5a1pc4etB6t6A2K%2BOv0WtrwUxE1q4VAq1wkbBzAx%2FeHzO6XcedKXMtmKxKLmLfAIurAfQ3OY9FfWH%2By%2FDQwP%2Bk34fkx6rOMa0glBdmsr7jsxpLQCAHKOEKkUiqJY0c2bkvGroZY1hEWst%2BNQrKikP%2FRTK&X-Amz-Signature=aa3792a37fbe8aa8163129730c250803072384d1397fbae2412b637a06364981&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
