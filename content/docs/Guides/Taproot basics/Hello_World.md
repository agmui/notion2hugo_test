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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U55DDKHL%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T110112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQDrMySa9Vn3ONq%2BWCCQo%2BqqmjmgsRNx0pEAxRzE6xIj1QIgDAqEHmkdTUno0d4XLGU%2BlTcy1euyW%2FpzWZsV8s%2FIIQ8q%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDN%2Bea%2F%2BOdz%2BMLJtZ8yrcA7bdLFEnuQtzx2upF4TKTg1tT%2FGricL0qagqSLXB9oSDRyI32H8nXVaWUd3Ql5zEyAKaSLQFU9t6fyJ%2F4AX8rNp%2BrIdyRn2X21Bwx73g9jxgYSFqsjDUW4nfuI60H0efVx9VC8hxeuQZ3nu4fEhcYQQiPdruXZFjzX%2B1UihobLGioA%2Bdefq8h7H3vLR1QzDsYXfdhk2WztkDWhpNyFvJkUZgcmdXJefx%2F4SwbQnzhAjHq%2Bt%2BPCVU1QHrtCx0bFxREWsoCzSHOOI61szY2gPgotxwi7VlwJ%2BtnvlRF76tW2Rvq1A5pYT2whDQvuX3GTuf7Msqz3kMazEQo0HuEGXkgqIKzmKlPSmZURLqbvYiRa%2BbBCRdBxJLJP8FE0EzCJAq0vN5JEGK%2BT76K5bBJEoso6uWK6RPgRkW7tnarDQN0kbE7mD7mAZJfM%2BOc09SGsyL%2FwzbviREufHJ%2Fv6X8GyvSkN%2FLNA%2FMb0NNOeRjSpiOTys8o7ucBQKoAP4vu8l9wztWHgZgW4s1NB6p523VkElTqPOxZb3kbu9QcffLSYACNQEcGsbDIGuvgv5BMKiHkDfQXZyz7IoppDQOU28fMS60SuLr5vQkje8hfRKNIMPf0sRqXkRp8D3iFqHSnTUMLq%2Bwb0GOqUBjGD%2Bjat%2BWQ1oK4m0Hxw6LXNlI%2Bdm0B%2BGnpj9m8s99B3dqCfOuHtJg2m947X4nj6Jv0mHQyErmyXgW2ho7%2FgChDrcf8DppvcBY4bC8JNkaPQTGQ%2BALpSaZkwf2RWu2oQKHawc%2BXdyeqS08f56Z6%2Fm5uMjW30mYbFMkj6UuuBTrsmXmcfnM%2FaReKe1b5IqrqFD7t%2BgdhNZvJk8yoc5Dm2W4FHg0yh%2F&X-Amz-Signature=ca68e837a46f35b4050b1e5d038845047236db6ead38a69f699c6328b1c72a69&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U55DDKHL%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T110112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQDrMySa9Vn3ONq%2BWCCQo%2BqqmjmgsRNx0pEAxRzE6xIj1QIgDAqEHmkdTUno0d4XLGU%2BlTcy1euyW%2FpzWZsV8s%2FIIQ8q%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDN%2Bea%2F%2BOdz%2BMLJtZ8yrcA7bdLFEnuQtzx2upF4TKTg1tT%2FGricL0qagqSLXB9oSDRyI32H8nXVaWUd3Ql5zEyAKaSLQFU9t6fyJ%2F4AX8rNp%2BrIdyRn2X21Bwx73g9jxgYSFqsjDUW4nfuI60H0efVx9VC8hxeuQZ3nu4fEhcYQQiPdruXZFjzX%2B1UihobLGioA%2Bdefq8h7H3vLR1QzDsYXfdhk2WztkDWhpNyFvJkUZgcmdXJefx%2F4SwbQnzhAjHq%2Bt%2BPCVU1QHrtCx0bFxREWsoCzSHOOI61szY2gPgotxwi7VlwJ%2BtnvlRF76tW2Rvq1A5pYT2whDQvuX3GTuf7Msqz3kMazEQo0HuEGXkgqIKzmKlPSmZURLqbvYiRa%2BbBCRdBxJLJP8FE0EzCJAq0vN5JEGK%2BT76K5bBJEoso6uWK6RPgRkW7tnarDQN0kbE7mD7mAZJfM%2BOc09SGsyL%2FwzbviREufHJ%2Fv6X8GyvSkN%2FLNA%2FMb0NNOeRjSpiOTys8o7ucBQKoAP4vu8l9wztWHgZgW4s1NB6p523VkElTqPOxZb3kbu9QcffLSYACNQEcGsbDIGuvgv5BMKiHkDfQXZyz7IoppDQOU28fMS60SuLr5vQkje8hfRKNIMPf0sRqXkRp8D3iFqHSnTUMLq%2Bwb0GOqUBjGD%2Bjat%2BWQ1oK4m0Hxw6LXNlI%2Bdm0B%2BGnpj9m8s99B3dqCfOuHtJg2m947X4nj6Jv0mHQyErmyXgW2ho7%2FgChDrcf8DppvcBY4bC8JNkaPQTGQ%2BALpSaZkwf2RWu2oQKHawc%2BXdyeqS08f56Z6%2Fm5uMjW30mYbFMkj6UuuBTrsmXmcfnM%2FaReKe1b5IqrqFD7t%2BgdhNZvJk8yoc5Dm2W4FHg0yh%2F&X-Amz-Signature=a60e0ea97345671f115ba8eb36e36502a5cd76319ec2571b241657811fae9e2b&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
