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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T72CUBCJ%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T190148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA6i765x5nzHWmXesoa9N0R4IAiCxJb9ZqwBWUXnOc%2F5AiEAjetqgVIOMNwXjHQmeniN7CtWsU5Y49Ey2tJWZW25J9Eq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDL0trk2UsRe%2FBt7UqyrcA3XCnlMS2Nv4oF6LZfpfkWQpxC%2Fd0e%2B0XZv6n4G5%2BbnwyYWrAjB3jn4h%2FBIeTED4pKHTrM%2FzBLvDMr%2FzCCuL%2FY%2BlTppFDvAUcOnf%2B3WTUiO6DKinAQ9e%2F2aTfHaFvkxT67lTj7%2F98iF20MoKb5qpZc1U0e1puBtL8oNY5Jp%2FbJlJJf2O6iUSiz1VOcOiuBGEnjoH14veFNtGizvlS34SRmdVp%2F2oKeM3oYuXq0uGZCP6UYL8mUEUWYQQRtHx2CrLBPoNPMfHZScVojDoaPfzGu7dT%2B8KgdAaZJY0HNlIuqsT4B3Kuko6gkceMkPWDGHcp%2Fa6Wmm26%2BhXPQw74iMmP4QhoCV20XT77lGcc%2FXT81jBwQWt%2Fn200rt7TemsiTwsRXK5pwlOm8q3VzhLPHQ2J2LONG3KaOn6Q%2BK93ky%2BdkayNFuhCuwzoEqHWhvvx5nNMBL9c2WQGb%2FpsHkrZJijGLHg0PhFsf4rq%2BIRzvsE1cGwjPljnx7AV52HFOAau4c4xSVRLXSAzLnIqMT6oT3lxpQ%2FaSGYQs%2FCxLLjN529koB0CqdkM72DFKvDc1P2cS4W%2FXOIBJq9LeOG6mwu%2Fg5sD9sJscfNYzEIwZQVZ97ioJZoyt5avof5vrJisqgfMN3Hxb8GOqUBKd1c48ruPQxJoc7rsOfJ5nGch93SJzy7SYFv9EcyuSGbZu6K0EjhWvoZLGoyiEJbyRlaYG9zdeaZNexbLpbkplSne4c%2BTlrOgufWpvvDqSizo%2F1CVaCAPHSwoxAnszRGrTO6Ju2tmEQtQwPjM5toCuEpymQhlmolFDyRloX4OUwdciaq926X8cYLKSxnTx7gMIHcXZBL8TpvZIsAwutU%2ButZXp%2Bz&X-Amz-Signature=7aae74384ff0189aa84c8b608fbf71b95ba6b45fd8cfc1c27c3bcb2783776cb8&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T72CUBCJ%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T190148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA6i765x5nzHWmXesoa9N0R4IAiCxJb9ZqwBWUXnOc%2F5AiEAjetqgVIOMNwXjHQmeniN7CtWsU5Y49Ey2tJWZW25J9Eq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDL0trk2UsRe%2FBt7UqyrcA3XCnlMS2Nv4oF6LZfpfkWQpxC%2Fd0e%2B0XZv6n4G5%2BbnwyYWrAjB3jn4h%2FBIeTED4pKHTrM%2FzBLvDMr%2FzCCuL%2FY%2BlTppFDvAUcOnf%2B3WTUiO6DKinAQ9e%2F2aTfHaFvkxT67lTj7%2F98iF20MoKb5qpZc1U0e1puBtL8oNY5Jp%2FbJlJJf2O6iUSiz1VOcOiuBGEnjoH14veFNtGizvlS34SRmdVp%2F2oKeM3oYuXq0uGZCP6UYL8mUEUWYQQRtHx2CrLBPoNPMfHZScVojDoaPfzGu7dT%2B8KgdAaZJY0HNlIuqsT4B3Kuko6gkceMkPWDGHcp%2Fa6Wmm26%2BhXPQw74iMmP4QhoCV20XT77lGcc%2FXT81jBwQWt%2Fn200rt7TemsiTwsRXK5pwlOm8q3VzhLPHQ2J2LONG3KaOn6Q%2BK93ky%2BdkayNFuhCuwzoEqHWhvvx5nNMBL9c2WQGb%2FpsHkrZJijGLHg0PhFsf4rq%2BIRzvsE1cGwjPljnx7AV52HFOAau4c4xSVRLXSAzLnIqMT6oT3lxpQ%2FaSGYQs%2FCxLLjN529koB0CqdkM72DFKvDc1P2cS4W%2FXOIBJq9LeOG6mwu%2Fg5sD9sJscfNYzEIwZQVZ97ioJZoyt5avof5vrJisqgfMN3Hxb8GOqUBKd1c48ruPQxJoc7rsOfJ5nGch93SJzy7SYFv9EcyuSGbZu6K0EjhWvoZLGoyiEJbyRlaYG9zdeaZNexbLpbkplSne4c%2BTlrOgufWpvvDqSizo%2F1CVaCAPHSwoxAnszRGrTO6Ju2tmEQtQwPjM5toCuEpymQhlmolFDyRloX4OUwdciaq926X8cYLKSxnTx7gMIHcXZBL8TpvZIsAwutU%2ButZXp%2Bz&X-Amz-Signature=5d6524cffd84277f723423ee1168291950e277e37086e6aef3418011c37d91f7&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
