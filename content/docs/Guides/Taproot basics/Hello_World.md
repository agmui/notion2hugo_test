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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636WN23KR%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T210753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDFYsD1aHpfMHsQKuvbrOR5w03wnfEMTjkaNel9YU97ewIhAPDR3Kk4iTH10JAZ3KT3g7kAMMD93T%2FTcpbZPkHsECN9KogECJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzRX1iSmTlki%2FxXa9gq3AMED%2FuCZrRAoJGkPN4wfBjchS1G5YMZPHdDE2O2BPVOvQ3CNdN%2BRkeGfYqjz2F8xC4bQpdO07LCfgqiodb%2FRpwwbXM94JnThaxwXHkcC1chchc5NdH6ZFh3aXU6p67EQi7zJsmJ%2FJEnpwMZ1u%2Bj3VflAlwch6bu4MMFf1nJkHOfTEJH5bee3Cz%2BksPg8sOwLE194Lj5UCSWF5rq%2FyVXzizjRgTD1K4ZsLEvG6S4JAFUlxLlR%2FSgaNZlb8RB5mawWnHGn6Ir10sxZFrJzesw%2BGYXRmST%2B7PfqBIAXGjwJmvwLPlcsJT4z8wzt55HLGa5vM9aDGf%2FiBiN2lTwhlu5eW%2F13wPdHExPN3I3E7%2BZWAm4XbiZ8Y2MNwpygPXrGjORWZbeDgupfPJY3eAM9ICPgWboDOIOfDzpepHhBwbkpicDAcizlvzCJcrk%2B8ttvkM8x9Ih2N7rDKD0UVNUUcTm85XzNVLaFXu3qZXX0aJ0uGBkRle8UKObK7ksDuYwIsN2oJgDyXCSqGNpOmbkpfwvfnMtqECwzB2utOkYl0TnJNE9c4EnmHJZEymR2%2BQbj6BlWYXCMhfXumk4%2BfAi%2Fe%2FF8jtb%2BdQX0I8gAWr7AiBBfRDP4xn2BdfIppIOLKzq0TCPkePBBjqkAREjtSB1Y0dPKCU95C9wJmMNsT%2FBQyxrezuYMunu1I%2BlQRI9R%2BedTlra4gor6Rtzo85JL9T0jwGSA%2BS%2FyGOrvXBD8GG%2ByZt8Woqt6zLzEfRRQfDZ5DCL7kE%2B%2FQsi18SEpOmDjLRPvpTnRmy1yxo632Jsxv8NAoLpwBbFKtb%2Bc7iA5o%2FTpAwmvMqzPC%2BgjLJkUIFp6c1hIYQ1tilW5%2FiI2UUjsWgP&X-Amz-Signature=47ed977dda25dfc7d832acafa25c4edebfc5d1c5c50eb42ee8604aab8e7fb51c&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636WN23KR%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T210753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDFYsD1aHpfMHsQKuvbrOR5w03wnfEMTjkaNel9YU97ewIhAPDR3Kk4iTH10JAZ3KT3g7kAMMD93T%2FTcpbZPkHsECN9KogECJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzRX1iSmTlki%2FxXa9gq3AMED%2FuCZrRAoJGkPN4wfBjchS1G5YMZPHdDE2O2BPVOvQ3CNdN%2BRkeGfYqjz2F8xC4bQpdO07LCfgqiodb%2FRpwwbXM94JnThaxwXHkcC1chchc5NdH6ZFh3aXU6p67EQi7zJsmJ%2FJEnpwMZ1u%2Bj3VflAlwch6bu4MMFf1nJkHOfTEJH5bee3Cz%2BksPg8sOwLE194Lj5UCSWF5rq%2FyVXzizjRgTD1K4ZsLEvG6S4JAFUlxLlR%2FSgaNZlb8RB5mawWnHGn6Ir10sxZFrJzesw%2BGYXRmST%2B7PfqBIAXGjwJmvwLPlcsJT4z8wzt55HLGa5vM9aDGf%2FiBiN2lTwhlu5eW%2F13wPdHExPN3I3E7%2BZWAm4XbiZ8Y2MNwpygPXrGjORWZbeDgupfPJY3eAM9ICPgWboDOIOfDzpepHhBwbkpicDAcizlvzCJcrk%2B8ttvkM8x9Ih2N7rDKD0UVNUUcTm85XzNVLaFXu3qZXX0aJ0uGBkRle8UKObK7ksDuYwIsN2oJgDyXCSqGNpOmbkpfwvfnMtqECwzB2utOkYl0TnJNE9c4EnmHJZEymR2%2BQbj6BlWYXCMhfXumk4%2BfAi%2Fe%2FF8jtb%2BdQX0I8gAWr7AiBBfRDP4xn2BdfIppIOLKzq0TCPkePBBjqkAREjtSB1Y0dPKCU95C9wJmMNsT%2FBQyxrezuYMunu1I%2BlQRI9R%2BedTlra4gor6Rtzo85JL9T0jwGSA%2BS%2FyGOrvXBD8GG%2ByZt8Woqt6zLzEfRRQfDZ5DCL7kE%2B%2FQsi18SEpOmDjLRPvpTnRmy1yxo632Jsxv8NAoLpwBbFKtb%2Bc7iA5o%2FTpAwmvMqzPC%2BgjLJkUIFp6c1hIYQ1tilW5%2FiI2UUjsWgP&X-Amz-Signature=3a63ab1ffe998e341b6f185a07605e9e5f8eefe31acd812f443b0504f60aa21f&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
