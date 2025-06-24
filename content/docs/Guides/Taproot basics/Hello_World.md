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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFSJRKZK%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T161045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQD1NdeGl02NCEVf9T7wiu%2FmDNHDwnnRt8hKsGf1h95dDgIgPnTeublaKAih0rjUoq%2FlszsnCWEXxWmyNKsTCXSWB%2Bcq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDBmAoYtlBWDPMc16VyrcA3z7qTUxMoix6JkfE6u4SFEir9lhY5UO61ATWfhRDfYeGRkunWUY0ihKZHXIbkwGCbA2uqStoLgEUYxnGmwj0dGSEc%2BV8Xn6TknYt11aZ%2BnjcUm%2FTsjVFTtWEqtPsdFW17I%2F3RRXMBx0QdY1fxRyt%2BeWlo90ecyKCdQdsgcPwqwA41L82veL5jadlbbUC0kP%2B9KCrysodlgrnk%2BxZh30Qz%2B2VA9ILeeagow%2Fo%2FNHbJetioSEQTggR8gduLSfAh0Oq8uxmJdKfFyy4MVGTA3zeyJPHgLqFb0dBuMfSqkjLINTsPw8cT6vhyr2RHrgpgxtlzz80fd9tmv2DA5ijMioMh5C2Mf48x8btGKgyVw5DTAvQeJhKkDLduiYmqSw9L%2FrP2op0R4HpiYNRhkFu0lGK20zQl%2B1JffYa3wnBKWppB6BkQm7gMc1TJ0k9AgooneAVBo8ynBeEzp%2FhDeWjKukMrRat338ondiIOF%2BPfEdKfaC4ilDlBV6%2B49mHAf%2FVCSRG8JtX89OdBI5kTdBghgeeOBweltjQa%2BcDMlEMJyQog%2FaTFEIfmX%2BD%2BhPuT2zVp1KrJE3FDT8RjwgAHfwacnp55d%2Fa19KuMfwyhEpZGW0xpnwPBJkNOQCqS74QJJtMMuQ68IGOqUB8wm7rM1ZKLQSpk%2B%2Fg4ZWzkxae7vkzkESGOyxh%2F5EESndkWarwtChWJ4WCYv9P%2BfeE0dJRIioZZC9019bAuIzNBP7zSLcSmnwEHM5OQMFtboBdLYuDbkUKSgbe9f6voi9p%2FMYZeaHua7zor586LSSoyc57UVR6VcVW9x4J%2BVu2dkZ73sSUpPCKiJL0HREjS8D0fbhEAzhBaImKkB086R3RVpGxq6i&X-Amz-Signature=39ea8076dc411a8900cd7d0eb4d6e3ce2a2446e0bd61f10c38ecef52642a89b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFSJRKZK%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T161045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQD1NdeGl02NCEVf9T7wiu%2FmDNHDwnnRt8hKsGf1h95dDgIgPnTeublaKAih0rjUoq%2FlszsnCWEXxWmyNKsTCXSWB%2Bcq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDBmAoYtlBWDPMc16VyrcA3z7qTUxMoix6JkfE6u4SFEir9lhY5UO61ATWfhRDfYeGRkunWUY0ihKZHXIbkwGCbA2uqStoLgEUYxnGmwj0dGSEc%2BV8Xn6TknYt11aZ%2BnjcUm%2FTsjVFTtWEqtPsdFW17I%2F3RRXMBx0QdY1fxRyt%2BeWlo90ecyKCdQdsgcPwqwA41L82veL5jadlbbUC0kP%2B9KCrysodlgrnk%2BxZh30Qz%2B2VA9ILeeagow%2Fo%2FNHbJetioSEQTggR8gduLSfAh0Oq8uxmJdKfFyy4MVGTA3zeyJPHgLqFb0dBuMfSqkjLINTsPw8cT6vhyr2RHrgpgxtlzz80fd9tmv2DA5ijMioMh5C2Mf48x8btGKgyVw5DTAvQeJhKkDLduiYmqSw9L%2FrP2op0R4HpiYNRhkFu0lGK20zQl%2B1JffYa3wnBKWppB6BkQm7gMc1TJ0k9AgooneAVBo8ynBeEzp%2FhDeWjKukMrRat338ondiIOF%2BPfEdKfaC4ilDlBV6%2B49mHAf%2FVCSRG8JtX89OdBI5kTdBghgeeOBweltjQa%2BcDMlEMJyQog%2FaTFEIfmX%2BD%2BhPuT2zVp1KrJE3FDT8RjwgAHfwacnp55d%2Fa19KuMfwyhEpZGW0xpnwPBJkNOQCqS74QJJtMMuQ68IGOqUB8wm7rM1ZKLQSpk%2B%2Fg4ZWzkxae7vkzkESGOyxh%2F5EESndkWarwtChWJ4WCYv9P%2BfeE0dJRIioZZC9019bAuIzNBP7zSLcSmnwEHM5OQMFtboBdLYuDbkUKSgbe9f6voi9p%2FMYZeaHua7zor586LSSoyc57UVR6VcVW9x4J%2BVu2dkZ73sSUpPCKiJL0HREjS8D0fbhEAzhBaImKkB086R3RVpGxq6i&X-Amz-Signature=56508c5fe556d5843ec0c63d2bf9a49df5108ceaac923b39c33f05dfd3cbac8e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
