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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2AQBECS%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T041238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIARZ5Q0eTBls3ZvmI9ZTQIu1KV1ztVW2s0ZyRKkusSeIAiBLySrPS%2FKUUPSwLDYtBydhe4upXwgbyp%2BqN3YWYLy9ZSqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrq7MNaX25ASyZVUiKtwDOLu%2Fj065koghMc1aVVpQ%2BMdmmsGTCM7vAFgw%2BmAiv8Twkiliy8meh3ww1jVt%2Fjt9Yv%2BlGNcKN4gONytuZorn1%2BdwN4%2BhSrcANdLmnU33%2FUL8EaGuK28yjMbO%2Bd1xi7aWuFXmZWO5FBJDg02JGMly57JawH32STtNKh6Mh8HVwqPxHw6QyAMuILtlQLwAFcLH3H19qET%2B452KPE8b3UOuFGRhvLjdKnHgWBHawmqoYHcJOLxlEeJTUAQ4AQgUxoYsyt6Z5HlnyQ6DY5k0qXpUf%2FTHheiUpDyuWG37vm1RtSOG%2BUnITtPJ9uRFywlvmKCibO3l3Hr%2BTpLbT8CxWFclpb3zH3aE2HLXmdz7folDfXJ34B80%2BM77o1uwbSvZhZn5hmzaYRgZP4LL1BsYi1dInpPyy4kK9dj4filmR%2B587%2BHyS2V5zJIB9tUutefYBeeBb6AGHvVNKohC8QZOsqiVHnBwf3lx6ZsI5tgTR82OfEyyLllZGS%2BSfxE2ydQ9wqnTukm%2FeEgWZozagpRZCdsKAwynWGryAdTbbGEGX6p6XKivWSPlvm977GU1AcdKN1BorfrVea29fEPjZtLppr6Q7%2Fp3lPs8Dly9H20ww0tqPi9p%2FrpLWWUk1QEUhFcw4fDawAY6pgFLvahwVeTpf%2F1oU2zubx2ovhO%2BMzoxmBYtpDWF%2F9Y6Ku%2FN%2Bbq%2BWw%2BMvmPNEc3dH7Ra%2F7fUN7GihfDiL8125QaQh0Fa5HAGTmReAoUkUXAKSrjZYgkX20OoUWSIsRv0xmcd7fbnOjSMgX8LMNf4ighx8SNt8siRsXZkUq9bzOtuwLa95sbN6mY37FE1nOFHsRAHZgq6n82qJkHSATnNjA5pq%2BmgiPUr&X-Amz-Signature=ba706d01a28ae93b43994110ca6fba80e5bfa8999fe1f862aefad38c3355b101&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2AQBECS%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T041238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIARZ5Q0eTBls3ZvmI9ZTQIu1KV1ztVW2s0ZyRKkusSeIAiBLySrPS%2FKUUPSwLDYtBydhe4upXwgbyp%2BqN3YWYLy9ZSqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrq7MNaX25ASyZVUiKtwDOLu%2Fj065koghMc1aVVpQ%2BMdmmsGTCM7vAFgw%2BmAiv8Twkiliy8meh3ww1jVt%2Fjt9Yv%2BlGNcKN4gONytuZorn1%2BdwN4%2BhSrcANdLmnU33%2FUL8EaGuK28yjMbO%2Bd1xi7aWuFXmZWO5FBJDg02JGMly57JawH32STtNKh6Mh8HVwqPxHw6QyAMuILtlQLwAFcLH3H19qET%2B452KPE8b3UOuFGRhvLjdKnHgWBHawmqoYHcJOLxlEeJTUAQ4AQgUxoYsyt6Z5HlnyQ6DY5k0qXpUf%2FTHheiUpDyuWG37vm1RtSOG%2BUnITtPJ9uRFywlvmKCibO3l3Hr%2BTpLbT8CxWFclpb3zH3aE2HLXmdz7folDfXJ34B80%2BM77o1uwbSvZhZn5hmzaYRgZP4LL1BsYi1dInpPyy4kK9dj4filmR%2B587%2BHyS2V5zJIB9tUutefYBeeBb6AGHvVNKohC8QZOsqiVHnBwf3lx6ZsI5tgTR82OfEyyLllZGS%2BSfxE2ydQ9wqnTukm%2FeEgWZozagpRZCdsKAwynWGryAdTbbGEGX6p6XKivWSPlvm977GU1AcdKN1BorfrVea29fEPjZtLppr6Q7%2Fp3lPs8Dly9H20ww0tqPi9p%2FrpLWWUk1QEUhFcw4fDawAY6pgFLvahwVeTpf%2F1oU2zubx2ovhO%2BMzoxmBYtpDWF%2F9Y6Ku%2FN%2Bbq%2BWw%2BMvmPNEc3dH7Ra%2F7fUN7GihfDiL8125QaQh0Fa5HAGTmReAoUkUXAKSrjZYgkX20OoUWSIsRv0xmcd7fbnOjSMgX8LMNf4ighx8SNt8siRsXZkUq9bzOtuwLa95sbN6mY37FE1nOFHsRAHZgq6n82qJkHSATnNjA5pq%2BmgiPUr&X-Amz-Signature=764b974dab6362170d3c7b5e8847e6dee9ab2f9ebe90c56a99d16db5014b923d&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
