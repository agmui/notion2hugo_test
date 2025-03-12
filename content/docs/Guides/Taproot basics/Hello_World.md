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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGCYJ2YH%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T121409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIEe8gkAEdlCcO0o8YnNTE16rDbr836d3GWazxVD8LyhUAiEAqlFOAOjvSPWDv%2BLBz1c60EBCHI%2FLhZEYaksPez5LTjYqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNlOEentd4h%2B4B5zkSrcA8l1BAIZ6usSIhYgXzFAc3uxfJzfi2Y%2F4vQd3cLDInD2OiwO3GpS%2FuSR5QODh7JOhWUS9wxJsBBwUdTywT8QdRd5D9tAg%2Fjla9nU8Dj4cV8%2BAo4O%2FcbZg%2BbqxNEWqWpf0oJjvxLCsufiIqITF0UouyYxWDXIggYE9v0xwg5iCrxeybReNPwe5Vjk%2BFLs3cOAZkWcF3Y0YxxPnSPMg7477YdR2Qvj%2FUbxhKRpCwJ8VHsnybn%2BzNVyJhhy5ar%2BxHpzykshaSwWl7zg5J%2Fpz8lXD2PaYxx1MYVL9F1db2%2FjflVYj4nTZ0y%2B4Hl0f9voaQ24L8CDwwcAEFP80w13AtUzldWYiGSSsLbPwrUzLeXqIQRchaZjdCtJufroa1eWi98PQNSAID5R04ZcxO6RanFkx5WZDAySn32GJ0SrM%2B248T8azmq7Ip5E3n9xc1%2B5dGbSv5F%2BO9j2UQm5vW1XoqvI6%2BkHA2hrEte0y9q9oXmsaJwUY2i%2BQOYUN6baZXR8q1KnBul2FLIo1WEL9UC2UFk0XOjU44Yu7EZuHWXDb57BXrdJ2JfH0I9oKB7Z%2Box9V1wpUJONuwpLmJ58PEs5Pc1UygOECeKNqSTHVQbK1f4hF5Aj16FpCSwXm3V7rxO0MJLdxb4GOqUBGWWoLzJ%2F3iQl44qa2Q9lVaJW%2B4IJrLu1kCz5z6AKXcHWfgAHvc2cu7jjom9JEtd%2Baph5rNrvV4%2FiSA%2BGZ6s5IZ4uUFTF5qAbasfg3QCUjeuAxZJv9uYbA5p0TEtSyER%2F%2FXaZK%2BoJ5yAGu0ZxXG2lMH6wusXBj29e6NZtFbrGPNWzvRDfoynqQP0zc75zRUfLJCJPcVX0hMMILI0IXAZX7bdnTagg&X-Amz-Signature=6b813cb846b24fe68eff53e428b218fcff1049eb53af70408f2286a4c69dc110&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGCYJ2YH%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T121409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIEe8gkAEdlCcO0o8YnNTE16rDbr836d3GWazxVD8LyhUAiEAqlFOAOjvSPWDv%2BLBz1c60EBCHI%2FLhZEYaksPez5LTjYqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNlOEentd4h%2B4B5zkSrcA8l1BAIZ6usSIhYgXzFAc3uxfJzfi2Y%2F4vQd3cLDInD2OiwO3GpS%2FuSR5QODh7JOhWUS9wxJsBBwUdTywT8QdRd5D9tAg%2Fjla9nU8Dj4cV8%2BAo4O%2FcbZg%2BbqxNEWqWpf0oJjvxLCsufiIqITF0UouyYxWDXIggYE9v0xwg5iCrxeybReNPwe5Vjk%2BFLs3cOAZkWcF3Y0YxxPnSPMg7477YdR2Qvj%2FUbxhKRpCwJ8VHsnybn%2BzNVyJhhy5ar%2BxHpzykshaSwWl7zg5J%2Fpz8lXD2PaYxx1MYVL9F1db2%2FjflVYj4nTZ0y%2B4Hl0f9voaQ24L8CDwwcAEFP80w13AtUzldWYiGSSsLbPwrUzLeXqIQRchaZjdCtJufroa1eWi98PQNSAID5R04ZcxO6RanFkx5WZDAySn32GJ0SrM%2B248T8azmq7Ip5E3n9xc1%2B5dGbSv5F%2BO9j2UQm5vW1XoqvI6%2BkHA2hrEte0y9q9oXmsaJwUY2i%2BQOYUN6baZXR8q1KnBul2FLIo1WEL9UC2UFk0XOjU44Yu7EZuHWXDb57BXrdJ2JfH0I9oKB7Z%2Box9V1wpUJONuwpLmJ58PEs5Pc1UygOECeKNqSTHVQbK1f4hF5Aj16FpCSwXm3V7rxO0MJLdxb4GOqUBGWWoLzJ%2F3iQl44qa2Q9lVaJW%2B4IJrLu1kCz5z6AKXcHWfgAHvc2cu7jjom9JEtd%2Baph5rNrvV4%2FiSA%2BGZ6s5IZ4uUFTF5qAbasfg3QCUjeuAxZJv9uYbA5p0TEtSyER%2F%2FXaZK%2BoJ5yAGu0ZxXG2lMH6wusXBj29e6NZtFbrGPNWzvRDfoynqQP0zc75zRUfLJCJPcVX0hMMILI0IXAZX7bdnTagg&X-Amz-Signature=78974422d5f29f83a7d5dcdff3995e0fec78a0e6b450e1658adbcb0ce4dea536&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
