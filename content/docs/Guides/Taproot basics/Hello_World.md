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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5M4O5PA%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T160812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIQC%2FfC%2BQd%2FdY1M6f99M%2ByDtkwPnG6cbNof%2Bf0vDuMbopEAIgNq%2BdfktblFLBlvXf6l0I%2FL%2FtMixPJ2gLBOF%2F6a0BNBIqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCBRodQnALioXd5PyCrcAxNECkcV8Ej1%2FS7wNC50I3YKWBNi3SDPSNLqzMm%2Fc2iCyf0jcV9PxRRKYxV7PZCNquZrnILzLyWi%2FMq9ygcZ4nP3wRAm526qY9rUAhKJ3D1rEkmreC3sIuZ7A%2BzxSnQ%2FSanF33olwDcDnzK%2FJ1bn6%2B7uTwZn6LxDSThAQbyir%2FMHzj78xaXGaxZgThwg7J6jNsq9NbW0%2BSoNSrZDge2pDRP71Dbo2LjZgIYyZxRcbJ61qg%2BliOwFAiJm2NOCp76S412LABeYzdZcrUHR3173GB%2BxSVKd4YwS5Sqs0wKPrwO0uS1sE%2FrVB%2F4DatvcYPLSJbhpMNRre9XBKdnThblN7xEb1i25joCeEicuAUUsM0Eoylyew562Yy85s1arHwGgkjULyAJjChC%2BBjBqs%2Btr2XteIFeuD%2BF080AB%2F7kcvEDE9J67%2BK%2BCfmLgrg8GBoYJjrjXmKSf5%2FawIiqefXgJICFSFj2FhSnprP%2FYhk%2F55Dkt9s2lyvybIbjhzFkSGcliMd4p79CQUTA9OKveTLJdF5tUaXniCRwLyW9CilFROYFhhrXEEnLvbcHPNtHXs%2FBxRcUDCRZrtUo9Tt1nin2zyuGY9fu4pGJmHanyvwLs%2Fn%2BaD%2BMN4bCDL7%2Flh8pFMIbEk8AGOqUB7qYgo4UZV4pRDrygB8nthDP5HWzmmjNVkwsMCYIZJyxjyVPCAvbtDmq5%2F9eW%2FSDMiSOWMc7dq5WpNWTjMAcegxiYgIP3E2Gb1QoRZq7Hz%2F%2F5JmIc%2Bj6iSSDBE3z4WwlKutEeU8rgFzpV8QihyJrmVZ3CclVcAUCYyHqTRjoCh3IMTHFEIoSeD%2F5%2BpTrLtC1XZo%2Fykh8F%2FtQ6Q6UHL6LELlwq59bd&X-Amz-Signature=9adc33d4171b54bfa26fd3e23f60bcd3620dd2f878375715934d82ca155e2eaa&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5M4O5PA%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T160812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIQC%2FfC%2BQd%2FdY1M6f99M%2ByDtkwPnG6cbNof%2Bf0vDuMbopEAIgNq%2BdfktblFLBlvXf6l0I%2FL%2FtMixPJ2gLBOF%2F6a0BNBIqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCBRodQnALioXd5PyCrcAxNECkcV8Ej1%2FS7wNC50I3YKWBNi3SDPSNLqzMm%2Fc2iCyf0jcV9PxRRKYxV7PZCNquZrnILzLyWi%2FMq9ygcZ4nP3wRAm526qY9rUAhKJ3D1rEkmreC3sIuZ7A%2BzxSnQ%2FSanF33olwDcDnzK%2FJ1bn6%2B7uTwZn6LxDSThAQbyir%2FMHzj78xaXGaxZgThwg7J6jNsq9NbW0%2BSoNSrZDge2pDRP71Dbo2LjZgIYyZxRcbJ61qg%2BliOwFAiJm2NOCp76S412LABeYzdZcrUHR3173GB%2BxSVKd4YwS5Sqs0wKPrwO0uS1sE%2FrVB%2F4DatvcYPLSJbhpMNRre9XBKdnThblN7xEb1i25joCeEicuAUUsM0Eoylyew562Yy85s1arHwGgkjULyAJjChC%2BBjBqs%2Btr2XteIFeuD%2BF080AB%2F7kcvEDE9J67%2BK%2BCfmLgrg8GBoYJjrjXmKSf5%2FawIiqefXgJICFSFj2FhSnprP%2FYhk%2F55Dkt9s2lyvybIbjhzFkSGcliMd4p79CQUTA9OKveTLJdF5tUaXniCRwLyW9CilFROYFhhrXEEnLvbcHPNtHXs%2FBxRcUDCRZrtUo9Tt1nin2zyuGY9fu4pGJmHanyvwLs%2Fn%2BaD%2BMN4bCDL7%2Flh8pFMIbEk8AGOqUB7qYgo4UZV4pRDrygB8nthDP5HWzmmjNVkwsMCYIZJyxjyVPCAvbtDmq5%2F9eW%2FSDMiSOWMc7dq5WpNWTjMAcegxiYgIP3E2Gb1QoRZq7Hz%2F%2F5JmIc%2Bj6iSSDBE3z4WwlKutEeU8rgFzpV8QihyJrmVZ3CclVcAUCYyHqTRjoCh3IMTHFEIoSeD%2F5%2BpTrLtC1XZo%2Fykh8F%2FtQ6Q6UHL6LELlwq59bd&X-Amz-Signature=d823716db3ad24808e4a9bfd5c561df53e99d6731d150085b1fb377272a78ddf&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
