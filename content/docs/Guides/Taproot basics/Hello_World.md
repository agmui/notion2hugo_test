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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPZH3FUO%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T210702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHXYSKP9WMMoe5SfmZL%2FzpP2sJJ2awQEq9JdfUsm3uQvAiEAhzTGopW61b3Tn%2BucdXAWjGKTcVXWIMFHHq3jyNMLT3Qq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDBa4gdcjXqUS1ymtfircA7O0ok2l8K35ZEk6Na8b0N7FdrLXLE3By%2BA5WXBLEOxVXTAQiSI7DN6Mz6MOEt%2FkuzVcZYMoqac7nmWdkl4arUNRpyTRw691gutjba4R6jRxkqZeTqEEyh0S0tj7eMNIZfC9C5bNcQWrMp45TmeT2M3WPqHVHdL7mtU50gUK8IhMnYlVMPwofmLBLqG8ugVQmeEVONEx9LYr6b766sAm9VVy5t0m3LBAoFOL6TeZyyyBTnaP6cXrZbHxs5iMeXU0X2WmHoFMbtBZ9Bpg9Wx3aCQOX67BkOaamV4UguoJvQGvGaIKmtiaTfV4IVymbhNOZslCFUWoOVTXGmuTHWKyb%2FCPJiXoMrvMZJ76Glc8DWyqfnJwUgfHJ2WTtWHRgWIcwWhPuu%2BfOypTZWbAzr5cRP8PvA4YKklciQkEMn7LENnB9ytjel%2BEZx1mIkem3C09B9%2F9C0fc1%2By6zVCQ7UeoFSssFVf1ddoYoFyBvWD6YgBcsnxQ3VyLF%2F3J7fh%2Fj2u2h8K4ag%2FKXtq60NN5sCSlXXIrycJO4rVuUFQ3hwTHXcNaiV0WcqeazWzb7KMXyJVsOxWDN%2BQVyUrby32l6A%2F1UE9N5wqKxquTQDkb0%2FMyhjCYoCSV5RPCcPs3A9Z7MN7Rv8AGOqUBOihY%2BGwqNIpb7vSeb6LksqR8wrTaplaxkot7b5KeLn7ZX7HFsrDWLYGaNx4mspov0xUSqhLKVDYNqzcgT1TjK1Vgyiq5guPOX9frGKNlYrhQEwjs02eLr7HerSg6lLMJm8VZXeh4QsTk5cyEQDcjsh0QFurS3yD6MJDhCqZogLW7dEKY0tgf43nTPjnZELDTO0e%2BOr0odxWP5M1v9VmvAAAzCJB8&X-Amz-Signature=d037d15c58047fe3100f02dda50c800706ce10dd38a0bd7c7c40c5322f65385a&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPZH3FUO%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T210702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHXYSKP9WMMoe5SfmZL%2FzpP2sJJ2awQEq9JdfUsm3uQvAiEAhzTGopW61b3Tn%2BucdXAWjGKTcVXWIMFHHq3jyNMLT3Qq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDBa4gdcjXqUS1ymtfircA7O0ok2l8K35ZEk6Na8b0N7FdrLXLE3By%2BA5WXBLEOxVXTAQiSI7DN6Mz6MOEt%2FkuzVcZYMoqac7nmWdkl4arUNRpyTRw691gutjba4R6jRxkqZeTqEEyh0S0tj7eMNIZfC9C5bNcQWrMp45TmeT2M3WPqHVHdL7mtU50gUK8IhMnYlVMPwofmLBLqG8ugVQmeEVONEx9LYr6b766sAm9VVy5t0m3LBAoFOL6TeZyyyBTnaP6cXrZbHxs5iMeXU0X2WmHoFMbtBZ9Bpg9Wx3aCQOX67BkOaamV4UguoJvQGvGaIKmtiaTfV4IVymbhNOZslCFUWoOVTXGmuTHWKyb%2FCPJiXoMrvMZJ76Glc8DWyqfnJwUgfHJ2WTtWHRgWIcwWhPuu%2BfOypTZWbAzr5cRP8PvA4YKklciQkEMn7LENnB9ytjel%2BEZx1mIkem3C09B9%2F9C0fc1%2By6zVCQ7UeoFSssFVf1ddoYoFyBvWD6YgBcsnxQ3VyLF%2F3J7fh%2Fj2u2h8K4ag%2FKXtq60NN5sCSlXXIrycJO4rVuUFQ3hwTHXcNaiV0WcqeazWzb7KMXyJVsOxWDN%2BQVyUrby32l6A%2F1UE9N5wqKxquTQDkb0%2FMyhjCYoCSV5RPCcPs3A9Z7MN7Rv8AGOqUBOihY%2BGwqNIpb7vSeb6LksqR8wrTaplaxkot7b5KeLn7ZX7HFsrDWLYGaNx4mspov0xUSqhLKVDYNqzcgT1TjK1Vgyiq5guPOX9frGKNlYrhQEwjs02eLr7HerSg6lLMJm8VZXeh4QsTk5cyEQDcjsh0QFurS3yD6MJDhCqZogLW7dEKY0tgf43nTPjnZELDTO0e%2BOr0odxWP5M1v9VmvAAAzCJB8&X-Amz-Signature=3fbead327f10f7909f0c637b2f7a3c0bf0cf5ed52b37fec81a0396ba38517bb4&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
