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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5BJPWKS%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T024129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIFqpQ8AIm8zegxYe7v9WdnXfXDH%2F%2FXHNDRaRPUCXK6D%2FAiBaV8BRbPVmltYQyNiDlaQb1ZKvtUcpYZH1QS0tr8e%2BlSr%2FAwhrEAAaDDYzNzQyMzE4MzgwNSIMxyUcw%2FWIoL%2FzFbnvKtwDR%2BjJcRRTKZ%2B1Y7DdFbt%2B5DKVrXXTk8wNjB3c3zKle18ugGKxursaap%2Fl1aKumj6PE0UxaT4d18ojuEUE3BjZcj7zC2JqZSBgBC7rUX1zVPoI02zVjEmkW7AeQb8DUTS0ER3eA6k2g8nOAMVfw3C7kqaCEJegN%2BFMhucADmE0PTZyQ64rni9zpdCc4VGfrjeFGKTTs%2FRFEbxzgbkiAjuQE5ZGhBXk1pIT48s4xb7sqXk3RcFFDsW7tE8NxsL%2B7MeVbwqqiw0zcAo%2Fd%2F5AMKOw9Kki3q2%2BXKnoLhDds0fJg6IYLOzJAE197ZUlPZJCkdVy63ATuy9ghWiaCnpsEQMHsO67%2FTCbyOaSst8F26DVckBVO2oSj36PMstYJ5Zbry2uOGpPzV02bp4OvOPdBqRdBhcyvBqlZMYHXLgS1jLBu%2FHRIwrAE6HmKv3A%2FxnIN%2Fcbe9nTHrnzPZjkmpB3PdVefpdOO4XnonICo4yQZFpQTSXVgW88rNXunR1niKm7nUZO6VS3%2B5ZkLMudnhqkc%2FdebqRG3LklNRjvUzCBCKMmznPzDP9uVQT2hqumtpMQwXUvF4%2Fym0PwfQS1%2BWL%2BrJ7SoPOw5c31ewNzStSAp%2BM%2Fo%2B2A5oya1rEY1XnMfPUwgfb3wgY6pgEcY4QSj2fw6nt4Pew3x1S3%2Bo%2BUuMOUjSMn5DMurJ30lkuX2ePa2LtyrQn%2BOhxE2pyZZFq3YKzuqY6aNoyozx9CIDJUHuCGJbxEQmCgbT8QAwSVcebKAZ8HshBrRelO%2BAuE0yfgsDzGwcmc6wxq5mE9DUeXyyRtnGNFAtnvU7AH2aoftbDxWlZLoClzTjmlZUAbpuRRyasvdWDry2hGGArhQcOOYLmx&X-Amz-Signature=2924e1f2b1320ba11e235f97841686158b504bd2e26a340bdb47cba012240ee7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5BJPWKS%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T024129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIFqpQ8AIm8zegxYe7v9WdnXfXDH%2F%2FXHNDRaRPUCXK6D%2FAiBaV8BRbPVmltYQyNiDlaQb1ZKvtUcpYZH1QS0tr8e%2BlSr%2FAwhrEAAaDDYzNzQyMzE4MzgwNSIMxyUcw%2FWIoL%2FzFbnvKtwDR%2BjJcRRTKZ%2B1Y7DdFbt%2B5DKVrXXTk8wNjB3c3zKle18ugGKxursaap%2Fl1aKumj6PE0UxaT4d18ojuEUE3BjZcj7zC2JqZSBgBC7rUX1zVPoI02zVjEmkW7AeQb8DUTS0ER3eA6k2g8nOAMVfw3C7kqaCEJegN%2BFMhucADmE0PTZyQ64rni9zpdCc4VGfrjeFGKTTs%2FRFEbxzgbkiAjuQE5ZGhBXk1pIT48s4xb7sqXk3RcFFDsW7tE8NxsL%2B7MeVbwqqiw0zcAo%2Fd%2F5AMKOw9Kki3q2%2BXKnoLhDds0fJg6IYLOzJAE197ZUlPZJCkdVy63ATuy9ghWiaCnpsEQMHsO67%2FTCbyOaSst8F26DVckBVO2oSj36PMstYJ5Zbry2uOGpPzV02bp4OvOPdBqRdBhcyvBqlZMYHXLgS1jLBu%2FHRIwrAE6HmKv3A%2FxnIN%2Fcbe9nTHrnzPZjkmpB3PdVefpdOO4XnonICo4yQZFpQTSXVgW88rNXunR1niKm7nUZO6VS3%2B5ZkLMudnhqkc%2FdebqRG3LklNRjvUzCBCKMmznPzDP9uVQT2hqumtpMQwXUvF4%2Fym0PwfQS1%2BWL%2BrJ7SoPOw5c31ewNzStSAp%2BM%2Fo%2B2A5oya1rEY1XnMfPUwgfb3wgY6pgEcY4QSj2fw6nt4Pew3x1S3%2Bo%2BUuMOUjSMn5DMurJ30lkuX2ePa2LtyrQn%2BOhxE2pyZZFq3YKzuqY6aNoyozx9CIDJUHuCGJbxEQmCgbT8QAwSVcebKAZ8HshBrRelO%2BAuE0yfgsDzGwcmc6wxq5mE9DUeXyyRtnGNFAtnvU7AH2aoftbDxWlZLoClzTjmlZUAbpuRRyasvdWDry2hGGArhQcOOYLmx&X-Amz-Signature=15182eba37aa900faa37e64a7c3e3dc916e603409b88595255c5d56627688ae5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
