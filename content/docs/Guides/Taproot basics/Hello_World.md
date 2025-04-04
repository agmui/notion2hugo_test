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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJMVRQTT%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T070821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAner8yfj8AbC62Bn0GQIQVLdV4AIz1mWtxtyuHzYZC0AiEAxwLA51wmrUf89ogVOmy2iywFNl6o1o668FJlX85Q1gAq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDOSIisv%2FOyKYAQc9MyrcA8HXp8VWVaJwdluL%2BdacvH01zwDJlid8A5o68NjOCiVqZRFMPRM99cfmbi5S0rIQptJC%2BPRa0AUVVQChcfd0rY9dMQBCxYl%2BkWnaEHSYE9tZtgXEqdOH2FEuTxcwAI5vfQdXmzkFlPSeis06uuV9i18IjvoO0FOkEjgqTz88KSJR5O9OAR9%2FeB9o7MQort67pGrLYuup3KJzJWkWUvYVpthr%2FC4OYl1jOrnQxkCgnt%2FzOVgK0XG2gsvSTArKMsVL7zvL5vQLy%2BtUIZxxQ7E5FV4mfPDoaOVASwFSo2q%2FGcKgRwbQlXgBd2EwVXt9s0tR6FVCMckOcalJ7oIASpgpImaHmfh4%2FVdHbwtMFUcXqOD9dERYbkIp2hX8ZVZ7To4wb7xcfvGnKhE%2F5miJRsmNupTx2fOSMl%2BkFazRR8RMp5dCQscQvMc60WKEXnyFcVHtu%2FfdL6WkGo8G8BtdKIQQr9j5cxfygl9jTBEy71bzHv%2BtJDqh9ECJR8QepRZJ3w6mc1DDoU%2F1aM1Ye427H4BH%2Fk9fq0gJ6SVaPZZEhioF2P41iKCdOP2bRp%2F4a4Tz%2B2%2BAxaFUfpVeSK5gqeRKMSgtuScT%2F%2F9byGHW4ibjsqpaadaPkfkBdc%2FISrbRWSx1MJz4vb8GOqUBHyGEgm0rE%2BOwWTo5dLIfe4lD3vyAewSZX4ijlA72233XdsXx9cw9rfosRaCYhSWVPXCqlVk8i1gajPC01zMnIL8e6spFrFIM0IkaCEC3ZjKLVpHsgx6kqavSSEGIIfpUb4tR%2Fqy72Mzq7XhxncTGWlj9%2FrcpmF369O3ySmM9oL6DhcwhX3ATC8IhE8KTzUJmdyJ9%2BMvW4z41ocKWhIkeygWl8O%2Bi&X-Amz-Signature=4b8249c3f4bac14bf8ff2491bad78d4626f3684c09b7d1ccbccaad71d06e39c1&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJMVRQTT%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T070821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAner8yfj8AbC62Bn0GQIQVLdV4AIz1mWtxtyuHzYZC0AiEAxwLA51wmrUf89ogVOmy2iywFNl6o1o668FJlX85Q1gAq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDOSIisv%2FOyKYAQc9MyrcA8HXp8VWVaJwdluL%2BdacvH01zwDJlid8A5o68NjOCiVqZRFMPRM99cfmbi5S0rIQptJC%2BPRa0AUVVQChcfd0rY9dMQBCxYl%2BkWnaEHSYE9tZtgXEqdOH2FEuTxcwAI5vfQdXmzkFlPSeis06uuV9i18IjvoO0FOkEjgqTz88KSJR5O9OAR9%2FeB9o7MQort67pGrLYuup3KJzJWkWUvYVpthr%2FC4OYl1jOrnQxkCgnt%2FzOVgK0XG2gsvSTArKMsVL7zvL5vQLy%2BtUIZxxQ7E5FV4mfPDoaOVASwFSo2q%2FGcKgRwbQlXgBd2EwVXt9s0tR6FVCMckOcalJ7oIASpgpImaHmfh4%2FVdHbwtMFUcXqOD9dERYbkIp2hX8ZVZ7To4wb7xcfvGnKhE%2F5miJRsmNupTx2fOSMl%2BkFazRR8RMp5dCQscQvMc60WKEXnyFcVHtu%2FfdL6WkGo8G8BtdKIQQr9j5cxfygl9jTBEy71bzHv%2BtJDqh9ECJR8QepRZJ3w6mc1DDoU%2F1aM1Ye427H4BH%2Fk9fq0gJ6SVaPZZEhioF2P41iKCdOP2bRp%2F4a4Tz%2B2%2BAxaFUfpVeSK5gqeRKMSgtuScT%2F%2F9byGHW4ibjsqpaadaPkfkBdc%2FISrbRWSx1MJz4vb8GOqUBHyGEgm0rE%2BOwWTo5dLIfe4lD3vyAewSZX4ijlA72233XdsXx9cw9rfosRaCYhSWVPXCqlVk8i1gajPC01zMnIL8e6spFrFIM0IkaCEC3ZjKLVpHsgx6kqavSSEGIIfpUb4tR%2Fqy72Mzq7XhxncTGWlj9%2FrcpmF369O3ySmM9oL6DhcwhX3ATC8IhE8KTzUJmdyJ9%2BMvW4z41ocKWhIkeygWl8O%2Bi&X-Amz-Signature=2ca4bf866f690537004371e75730aa6e1406009d3683a5194c10a740e1fbb2c4&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
