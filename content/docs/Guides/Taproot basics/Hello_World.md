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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPCKSGFL%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T090915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQChMGiCXQ8NnscGSTWx6ESNWS2AR9nQSOWxn2LxFTTrgQIgVFZRAKBZEs6WlO6QcpDg%2Bo7MLaJQnvQujvarzcPsXKsqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDXZVsjDYw%2FDnLMthCrcA8FGRy0ccxzIYme%2Bpt8SISPcQDhW%2BqDQSBj9CkLNZ%2FcshnBAg85pyh0UspKxvm6CgFaL%2F3KDwues0%2Fr2OoIzTqlwKSSaBwflg2dw%2Fz%2FFe1Mbk2qJ1jgmNS73PG68pHvzKTZ%2F%2FS0svwMl5AuBCt83WlZdlgJSADfYemJw39Jk6517AubNMh9OKwqhRMz8gfD37H1TlLxz%2FXHlBuzYqDhtY9W2o8stOoCN6namiLdk50yMh%2FT5UNE5wBfWF6ydB53Xo4IahZfoMwbboqn%2FrNIpfMwHsjasookjvYpulFpxQxqbCkjEEJgPqBJ%2Brje77y9iT5RUkLQdiuqG7zmxJyu4fzRnW2qRRJRzdAJfvvlH0aAm1D98RYt7kV6ec5fTN3mP9HsQ7Bmb4wSjZvIVcvwY5SDeiN9XdumUTfb1ifOjCLfe0R2VtunzzqXX1TYqh5E27TxXlV%2Fb4PisKsxHFEDJxh3ODNu9pRZ1%2BalietrW6t2bRLYtvX%2FmLAtTlP%2FgnA8qTLAGVfzMYuRI4ErEeBoOC7Z%2BPU1olmEAq%2FTsMd22LDc2JpPBeW50gqhghgSqd3SsuO0GD9h5w7nnb9vF%2BOGEWSzwo%2B1or5FVsdqB1Zi%2Fqhv8FKSJQNlW2l3%2F2LgkMNPk2L8GOqUBEDSodATnl24Z2Zpheeq1t%2F7DLZJUTSzRkt7dKire0Zt9fmG9dqTwuAV6xzBNpdMWA8%2BoD3f4iP3eYBQD1S4ms0dPiu364n1SjUp1IaLbtEKFcfTE7ovaRR6ZoJVf2ap12mPduoM9pSUudhpZyK8nNn6ny9r7ry%2Fyflg8L24LL3ufMCPcAJZMOmWgF4ornox8ZhzA8Y53uGmBQ7lGJ1qrOQjcsGKV&X-Amz-Signature=38b7ada6a850993989f8ae9e275c1ba083ace759fd8de351b8eda26eedc9b1fc&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPCKSGFL%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T090915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQChMGiCXQ8NnscGSTWx6ESNWS2AR9nQSOWxn2LxFTTrgQIgVFZRAKBZEs6WlO6QcpDg%2Bo7MLaJQnvQujvarzcPsXKsqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDXZVsjDYw%2FDnLMthCrcA8FGRy0ccxzIYme%2Bpt8SISPcQDhW%2BqDQSBj9CkLNZ%2FcshnBAg85pyh0UspKxvm6CgFaL%2F3KDwues0%2Fr2OoIzTqlwKSSaBwflg2dw%2Fz%2FFe1Mbk2qJ1jgmNS73PG68pHvzKTZ%2F%2FS0svwMl5AuBCt83WlZdlgJSADfYemJw39Jk6517AubNMh9OKwqhRMz8gfD37H1TlLxz%2FXHlBuzYqDhtY9W2o8stOoCN6namiLdk50yMh%2FT5UNE5wBfWF6ydB53Xo4IahZfoMwbboqn%2FrNIpfMwHsjasookjvYpulFpxQxqbCkjEEJgPqBJ%2Brje77y9iT5RUkLQdiuqG7zmxJyu4fzRnW2qRRJRzdAJfvvlH0aAm1D98RYt7kV6ec5fTN3mP9HsQ7Bmb4wSjZvIVcvwY5SDeiN9XdumUTfb1ifOjCLfe0R2VtunzzqXX1TYqh5E27TxXlV%2Fb4PisKsxHFEDJxh3ODNu9pRZ1%2BalietrW6t2bRLYtvX%2FmLAtTlP%2FgnA8qTLAGVfzMYuRI4ErEeBoOC7Z%2BPU1olmEAq%2FTsMd22LDc2JpPBeW50gqhghgSqd3SsuO0GD9h5w7nnb9vF%2BOGEWSzwo%2B1or5FVsdqB1Zi%2Fqhv8FKSJQNlW2l3%2F2LgkMNPk2L8GOqUBEDSodATnl24Z2Zpheeq1t%2F7DLZJUTSzRkt7dKire0Zt9fmG9dqTwuAV6xzBNpdMWA8%2BoD3f4iP3eYBQD1S4ms0dPiu364n1SjUp1IaLbtEKFcfTE7ovaRR6ZoJVf2ap12mPduoM9pSUudhpZyK8nNn6ny9r7ry%2Fyflg8L24LL3ufMCPcAJZMOmWgF4ornox8ZhzA8Y53uGmBQ7lGJ1qrOQjcsGKV&X-Amz-Signature=8296ee853052eb53f7f97918abb420d06b094b813e14431fe19200cce174997a&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
