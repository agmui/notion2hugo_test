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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JGWQC7O%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T042810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCIH6yUQlhZ1%2Fo6R1y9w%2B7K7d7j8KqJKVAURzJtowvCSHVAiEA8xOV2b7LP5VVyshu8ovbjtrTB3uc7ewnAAw4XiZrTnQq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDHgHBfq54pBQMmdU%2FircAwkpktb2La9uB7hfj%2BgtpwhZumghu%2B%2FgsKiLO%2FLIzw5cs1WouK2xPylAt6NEN2nCWJAow7FlKkRa8jZLvgiSUK8ATYVSecIvDwNpGSEJC1UER%2FXLZZd%2FqCoHgv7E9FNAxoG6AcA45LL3ZUfuYMmQQt8mVurEThsG3Zoqkx1m%2BXhWKRWGytzRcJIy%2FAeTBdWs2lWGcRHbA5W3waD8I5N%2B6NYpmb94iYgBJ1sZoSTpa5jVx2XX%2BUxFVLXVLUKMcNnnU%2Fen3zHOzHSvSFQvgJ95s4hsUB6zldWJdCkyDyfZNIMObNHMtbOLhH3pTGmsm3C1pV99BqZfLNQKVVpfMVt502gqLeIiHVowltcp37U%2FJCduRpxABl%2FV8%2Bt%2FyXoSNPBDUw%2BhZZutpBlLcPMCDJtc7pBuH%2B9FYogln95xZM6MeK0SL0ntjHE%2FL7OoRid6tel1%2BaGhc%2F8rIQzc%2FJnsniZBfSfDHEryEBv%2B4E9KgKcpYFuJZbaMs14PtK5CYu%2Ffapjumo%2F27eRMtywaeAoK2weXOEeiwaa%2B4Hec%2BdRMRb3Nr39G35v4ND5DAlzFZxOKLZjlystqh2Abx5JM8sytEXrfx5yuYTOUPL%2BwPwvrZsZ7tXThgRYzPyd%2Bt3kQRbOcMOmu3MMGOqUBJxLPoRlqzuE%2BytMKQDqrZ03XdtR1gqdY3fcQ3TwbA0SybLSNWp2IAgTa%2FMZ4ooOxo5CdwjdYkttR95ZoAiHOi1tXwkv14akGf6PDNbrgVyQeRntTiwEvU3iuFJfIoBjyYuwLEyNu5uP7l16TqNLe9xmzq2MYQ2Q0yRWfYynffhvmG0rxFDHEQzEY0RFepoyR%2Bv5alKZ8NtrnUk2hukM70IQdg9RF&X-Amz-Signature=5810b40135f18af39fe3ae688b832ffa993fb9fe1a0d334c3d7b18fd0c31330c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JGWQC7O%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T042810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCIH6yUQlhZ1%2Fo6R1y9w%2B7K7d7j8KqJKVAURzJtowvCSHVAiEA8xOV2b7LP5VVyshu8ovbjtrTB3uc7ewnAAw4XiZrTnQq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDHgHBfq54pBQMmdU%2FircAwkpktb2La9uB7hfj%2BgtpwhZumghu%2B%2FgsKiLO%2FLIzw5cs1WouK2xPylAt6NEN2nCWJAow7FlKkRa8jZLvgiSUK8ATYVSecIvDwNpGSEJC1UER%2FXLZZd%2FqCoHgv7E9FNAxoG6AcA45LL3ZUfuYMmQQt8mVurEThsG3Zoqkx1m%2BXhWKRWGytzRcJIy%2FAeTBdWs2lWGcRHbA5W3waD8I5N%2B6NYpmb94iYgBJ1sZoSTpa5jVx2XX%2BUxFVLXVLUKMcNnnU%2Fen3zHOzHSvSFQvgJ95s4hsUB6zldWJdCkyDyfZNIMObNHMtbOLhH3pTGmsm3C1pV99BqZfLNQKVVpfMVt502gqLeIiHVowltcp37U%2FJCduRpxABl%2FV8%2Bt%2FyXoSNPBDUw%2BhZZutpBlLcPMCDJtc7pBuH%2B9FYogln95xZM6MeK0SL0ntjHE%2FL7OoRid6tel1%2BaGhc%2F8rIQzc%2FJnsniZBfSfDHEryEBv%2B4E9KgKcpYFuJZbaMs14PtK5CYu%2Ffapjumo%2F27eRMtywaeAoK2weXOEeiwaa%2B4Hec%2BdRMRb3Nr39G35v4ND5DAlzFZxOKLZjlystqh2Abx5JM8sytEXrfx5yuYTOUPL%2BwPwvrZsZ7tXThgRYzPyd%2Bt3kQRbOcMOmu3MMGOqUBJxLPoRlqzuE%2BytMKQDqrZ03XdtR1gqdY3fcQ3TwbA0SybLSNWp2IAgTa%2FMZ4ooOxo5CdwjdYkttR95ZoAiHOi1tXwkv14akGf6PDNbrgVyQeRntTiwEvU3iuFJfIoBjyYuwLEyNu5uP7l16TqNLe9xmzq2MYQ2Q0yRWfYynffhvmG0rxFDHEQzEY0RFepoyR%2Bv5alKZ8NtrnUk2hukM70IQdg9RF&X-Amz-Signature=da7f40ed4ed17aa533b4f8ac34c76b1b614dba1d6439032d0b415d9d3dc47245&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
