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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656F3BIDM%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T003555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICFyiHB11THsY8cKqJdJmOOXIiFzIDNMfNJOZ71Ul1lHAiEAtLFx%2B9oCt7Ry6bmcRU%2FLntDej39BoR9oWlGDpk4OV7Iq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDD2I3xium96%2BwahxkircA96m3QwqlDJwDKf%2FQXm6L1%2FqSTWe56K%2FwxuGRP40HVCyEUpC3tfTtRj8gc7ugWTm57kBgkmkKfWefVJX5pVqr0md6bpJ1q88HQEzpYOvgORELD7epLuyaQJGyJuJX7rwYvQo0wJJrCOdKQdIXcZRn8EV%2FGdtvIqu5kacCUyzJWNve0e6bErv%2Fcj7%2BnXkYroTriDF3E2HMSZgJJ4%2BIsCqu1Y04he%2B7FGRKDUjlkw8ZviuONeA4fm8vIo85p%2BNXX%2F6a7%2F0DydPFLL0UkuNck%2BDZU6T7JSeeIKAEtC3a422dMp6i%2F78mYZfHOh5KDWyGxgdug4izT8EqMyfAWGFtVq4I%2BJYpMpUeioBYzK%2BWWsPMnE3q%2F9ajkUrFjDJpQ33ox7%2BFBc%2FHtjAGyPPx24fSHOKs9Udwz5SrvCKWhW4xR9JHpY2fpiHYg6zCgPawgpcTYMRSsnNb4tv9TA5voy09xnYdPR%2BiwF86yKclgx84p0NLI6HyXZQANmzrw7wFgazTFsd%2FTHbqH4xFrkNN%2BjhRww3vRe9yKpjkSqXbvQfmbcetTa5V82n9RTRhye%2FofsbgiCe%2F0k3YRzKFWO9zE9TH8Y3Y7ROcG1IdGS6ff%2FmWEa3KwW3lkPdO94TbFQV1XL3MIuEur0GOqUBk6meZrWvGviFOO5Eu3smyZAVEA6rHxA4LjsxOevW2B8ibso7vj6OvOlYRtzFUigsjB8SjBLe5vFZHtYd9%2BCW7t53g7ABuGyMVxd1oJJSpgU2thRQVdmGArbj0Hthp1eVbhnvCApU67RDEjjGKkpptZd80W9EGCk6WgO79DRnkb5HqhZc2n788zNSu6rTYgBKcRE4ZRvTzaSUUSV9A%2FL0vpHLiYDC&X-Amz-Signature=398c99d39af2501a7628ecc677fe3c90e59985728888e511a422c58fa7924848&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656F3BIDM%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T003555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICFyiHB11THsY8cKqJdJmOOXIiFzIDNMfNJOZ71Ul1lHAiEAtLFx%2B9oCt7Ry6bmcRU%2FLntDej39BoR9oWlGDpk4OV7Iq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDD2I3xium96%2BwahxkircA96m3QwqlDJwDKf%2FQXm6L1%2FqSTWe56K%2FwxuGRP40HVCyEUpC3tfTtRj8gc7ugWTm57kBgkmkKfWefVJX5pVqr0md6bpJ1q88HQEzpYOvgORELD7epLuyaQJGyJuJX7rwYvQo0wJJrCOdKQdIXcZRn8EV%2FGdtvIqu5kacCUyzJWNve0e6bErv%2Fcj7%2BnXkYroTriDF3E2HMSZgJJ4%2BIsCqu1Y04he%2B7FGRKDUjlkw8ZviuONeA4fm8vIo85p%2BNXX%2F6a7%2F0DydPFLL0UkuNck%2BDZU6T7JSeeIKAEtC3a422dMp6i%2F78mYZfHOh5KDWyGxgdug4izT8EqMyfAWGFtVq4I%2BJYpMpUeioBYzK%2BWWsPMnE3q%2F9ajkUrFjDJpQ33ox7%2BFBc%2FHtjAGyPPx24fSHOKs9Udwz5SrvCKWhW4xR9JHpY2fpiHYg6zCgPawgpcTYMRSsnNb4tv9TA5voy09xnYdPR%2BiwF86yKclgx84p0NLI6HyXZQANmzrw7wFgazTFsd%2FTHbqH4xFrkNN%2BjhRww3vRe9yKpjkSqXbvQfmbcetTa5V82n9RTRhye%2FofsbgiCe%2F0k3YRzKFWO9zE9TH8Y3Y7ROcG1IdGS6ff%2FmWEa3KwW3lkPdO94TbFQV1XL3MIuEur0GOqUBk6meZrWvGviFOO5Eu3smyZAVEA6rHxA4LjsxOevW2B8ibso7vj6OvOlYRtzFUigsjB8SjBLe5vFZHtYd9%2BCW7t53g7ABuGyMVxd1oJJSpgU2thRQVdmGArbj0Hthp1eVbhnvCApU67RDEjjGKkpptZd80W9EGCk6WgO79DRnkb5HqhZc2n788zNSu6rTYgBKcRE4ZRvTzaSUUSV9A%2FL0vpHLiYDC&X-Amz-Signature=4d392738a86b82757da4c81e64db0dc57a18c5ef4e02771dfd56d984c724c257&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
