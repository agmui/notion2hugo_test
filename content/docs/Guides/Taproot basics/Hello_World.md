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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUUTRJVO%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T160820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCPmGjDv8NcJO7JJUxrM6JKUHhge5%2BPbcMShKIDVTb%2BpAIgG3bZWhkXJ%2Bq43fIipvO6jM3M9b76q5sFnL1ha2bH8PYq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDErKmwBlznXFmPxUpircA8iLuQA58NILpq6jOwsnI4jD3CchNKEx%2F6yt2LDpB8M7oXPze1g48tT%2FuUwQulrbEF1NDJFaDvwX7HWuacQf7d%2FzK4SKxzF8yMf3JD4g8DxuUSrFcGtR4IC3NRF%2Bboqp8GqkqP1T1Ytlh5m4ULmcZnxhKVuibZfuBcJPsFFiNmO5LzLOaQtghHz1CHIbnaK2BNYX1IayrE%2FNA49mb95x0ypfUPY5gsQlZx22JM1T1PggkX00ZxsVc8Lx%2BjGEo7BZRDJ06BNoRs0QoeY74RXLAJ0QY4ZEH0s3%2FV0FZAm9lt5sJBP0dFaTTU0ySobrlMDBLyu9LJzMjkwLM6jjkUJrbAJUpDePVIJ9hKWrLxetpvEo0MixgEjhooSkxuL9wBqMzMYi1f6L7%2Fa45Yy3bTTn3%2BM1dObaW%2BB%2Bf9pvp%2Bh7yzKeZBBx1KbSPoeJjI6QK8HXAV96VF7wQxTQAg3RBOnTJVmWULAN8rLdYavH2Kuk6MfT%2F4GbQNXPYgLx%2FCTC%2FZ9DxtqhsMSdjnyBtY341OWjlAlN2Urq2QsdhaK1n67l4Ld8QzSTOPs%2FZoCyN0NDrh2zQxJXKrUA8skXvQtjBSam1U%2BYbn1b8dzTSRtNLf%2FPXIkYadZNQjx50k91twrgMKzwuMAGOqUB1wgTNy9jNwJvt4CKs5TXaC40UVjfzA235m1qoNabuYHwIjXJWeRsoEMXwwmXUAYe5r0aMhVfD4svgo8yE1grZBuBaj%2BxUBry3phuk0XMin%2FoV%2FKSeiw21dqbin0P6MlKCaAEqV9x1R0jgJoe2VqIRAh2YcF%2B37dz2a5WSnCLfI1km6p1aX3lAnBFRX202g5XLl%2FM0PQ%2FNSPsjMtBUEHQ9gFRX93A&X-Amz-Signature=f9855c0403734932433b6e18bce997eb4524dca7d7150cc3a7ccb10277a559e0&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUUTRJVO%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T160820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCPmGjDv8NcJO7JJUxrM6JKUHhge5%2BPbcMShKIDVTb%2BpAIgG3bZWhkXJ%2Bq43fIipvO6jM3M9b76q5sFnL1ha2bH8PYq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDErKmwBlznXFmPxUpircA8iLuQA58NILpq6jOwsnI4jD3CchNKEx%2F6yt2LDpB8M7oXPze1g48tT%2FuUwQulrbEF1NDJFaDvwX7HWuacQf7d%2FzK4SKxzF8yMf3JD4g8DxuUSrFcGtR4IC3NRF%2Bboqp8GqkqP1T1Ytlh5m4ULmcZnxhKVuibZfuBcJPsFFiNmO5LzLOaQtghHz1CHIbnaK2BNYX1IayrE%2FNA49mb95x0ypfUPY5gsQlZx22JM1T1PggkX00ZxsVc8Lx%2BjGEo7BZRDJ06BNoRs0QoeY74RXLAJ0QY4ZEH0s3%2FV0FZAm9lt5sJBP0dFaTTU0ySobrlMDBLyu9LJzMjkwLM6jjkUJrbAJUpDePVIJ9hKWrLxetpvEo0MixgEjhooSkxuL9wBqMzMYi1f6L7%2Fa45Yy3bTTn3%2BM1dObaW%2BB%2Bf9pvp%2Bh7yzKeZBBx1KbSPoeJjI6QK8HXAV96VF7wQxTQAg3RBOnTJVmWULAN8rLdYavH2Kuk6MfT%2F4GbQNXPYgLx%2FCTC%2FZ9DxtqhsMSdjnyBtY341OWjlAlN2Urq2QsdhaK1n67l4Ld8QzSTOPs%2FZoCyN0NDrh2zQxJXKrUA8skXvQtjBSam1U%2BYbn1b8dzTSRtNLf%2FPXIkYadZNQjx50k91twrgMKzwuMAGOqUB1wgTNy9jNwJvt4CKs5TXaC40UVjfzA235m1qoNabuYHwIjXJWeRsoEMXwwmXUAYe5r0aMhVfD4svgo8yE1grZBuBaj%2BxUBry3phuk0XMin%2FoV%2FKSeiw21dqbin0P6MlKCaAEqV9x1R0jgJoe2VqIRAh2YcF%2B37dz2a5WSnCLfI1km6p1aX3lAnBFRX202g5XLl%2FM0PQ%2FNSPsjMtBUEHQ9gFRX93A&X-Amz-Signature=25cbe456f9a261f3084de62b25b5224ea7161313f563d8807b1b07ac8f96304f&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
