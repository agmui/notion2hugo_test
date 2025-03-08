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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOW27KOH%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T140111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJGMEQCICObKJNickPSE0SJTlZ7qNmCl%2B4t0blsK3iZOQfr%2Fhk%2FAiBNNhCIguyfnlu3bjsxjIQ8S8yM6VCNOe7CmAjk06iq9Sr%2FAwheEAAaDDYzNzQyMzE4MzgwNSIMWiW89fS63tNeb2khKtwDRSTdYsyH%2Bu30K%2BQmn5bCJZes8fan5fDVoEMeRJYpssEr0r%2FoLQZrSos09FDuFwIPUWTMaw4bmHSikuQNR5ZPOkTFjOlmVgl8QPjqH6b1j7OGnJX5VP4EQhZR6D1rf%2B8mnlqeqBjgFv91GEjcaphuoIhp245Ok3iqRE0VeOW5mrbfSM4B%2F3SEBZer1cP%2F5vf%2FY7Hg75OoyAPE3XdYPextmFbIoZwlBAhwdjU%2BANs%2FRU6pmnVtlnUoicX1H7bEWN1N%2B1%2F6jEnovN6iYeng51FKeEnKoba8M9vEjqh%2FKtO8RnoISpjyDFVjbALu4DVqCz62OP4NPL%2FugbM9UPHUUZbnhpYsPqbz3eg1auZvrAoYUpziwNjQyi0kDPYk6PgfLaHGpOU1dVVxU3Cy9s7ppGvP%2Bqey7Tz74RU9%2FPh0um8syuWVEnP%2F48%2FZVFdZMP6GJE5jloJZIxqACftLJJqBueIWyRxdAbJ3wOZL2VuHLQJ7XpbzQY6cVbeDWYm95bASokQ0w0uGVwHa8FGgCkPjjjVywLaEkqCIKsRDGIPK011lbNW7kw6Dlz8LpauA9RLsf4scJmcnkMnviS7HFU8priyFVwUZrAD%2F1YhD79YyTai4ccnIoPXO3igmKIMb8sAwv%2F%2BwvgY6pgEU7oEn1wiocaysMynREvBZabVoZgroK8AxVStACF9QWh2uhRBzFtOd%2BtL0oB%2BVthHMWFWjVBUwyOoDsK5cXExUP%2F2H9%2Bukd387570hhQFTXzgK%2BbromKpODza%2BMf%2BXnf3Bww2zKKBK0J0hCK41xB6D8R7e4vXt9T8mByTpWZs2Tnrb6xbp%2FsPfyUrWwPlKQxXxlZN0VvksRbuJNKzThsRUk2Yv5cVQ&X-Amz-Signature=9f223e0f6208dc4ada3a3a7520d933dfd882dfa7162fee682d6189bad8643f83&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOW27KOH%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T140111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJGMEQCICObKJNickPSE0SJTlZ7qNmCl%2B4t0blsK3iZOQfr%2Fhk%2FAiBNNhCIguyfnlu3bjsxjIQ8S8yM6VCNOe7CmAjk06iq9Sr%2FAwheEAAaDDYzNzQyMzE4MzgwNSIMWiW89fS63tNeb2khKtwDRSTdYsyH%2Bu30K%2BQmn5bCJZes8fan5fDVoEMeRJYpssEr0r%2FoLQZrSos09FDuFwIPUWTMaw4bmHSikuQNR5ZPOkTFjOlmVgl8QPjqH6b1j7OGnJX5VP4EQhZR6D1rf%2B8mnlqeqBjgFv91GEjcaphuoIhp245Ok3iqRE0VeOW5mrbfSM4B%2F3SEBZer1cP%2F5vf%2FY7Hg75OoyAPE3XdYPextmFbIoZwlBAhwdjU%2BANs%2FRU6pmnVtlnUoicX1H7bEWN1N%2B1%2F6jEnovN6iYeng51FKeEnKoba8M9vEjqh%2FKtO8RnoISpjyDFVjbALu4DVqCz62OP4NPL%2FugbM9UPHUUZbnhpYsPqbz3eg1auZvrAoYUpziwNjQyi0kDPYk6PgfLaHGpOU1dVVxU3Cy9s7ppGvP%2Bqey7Tz74RU9%2FPh0um8syuWVEnP%2F48%2FZVFdZMP6GJE5jloJZIxqACftLJJqBueIWyRxdAbJ3wOZL2VuHLQJ7XpbzQY6cVbeDWYm95bASokQ0w0uGVwHa8FGgCkPjjjVywLaEkqCIKsRDGIPK011lbNW7kw6Dlz8LpauA9RLsf4scJmcnkMnviS7HFU8priyFVwUZrAD%2F1YhD79YyTai4ccnIoPXO3igmKIMb8sAwv%2F%2BwvgY6pgEU7oEn1wiocaysMynREvBZabVoZgroK8AxVStACF9QWh2uhRBzFtOd%2BtL0oB%2BVthHMWFWjVBUwyOoDsK5cXExUP%2F2H9%2Bukd387570hhQFTXzgK%2BbromKpODza%2BMf%2BXnf3Bww2zKKBK0J0hCK41xB6D8R7e4vXt9T8mByTpWZs2Tnrb6xbp%2FsPfyUrWwPlKQxXxlZN0VvksRbuJNKzThsRUk2Yv5cVQ&X-Amz-Signature=a0ba86eee149153924dcc687f04fe4fe5ee2ea0a8e4d77de62c090ff29e5ac1d&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
