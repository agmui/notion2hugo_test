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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664EURHEO%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T110738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBJZzLT9dQdgnnIzvcODfUWR0OXdqNggLeA2estRPhhVAiBzeAAJevQSZklrUVHPwGv6m8EL6p7Zq%2Fl3BK69wJlS4iqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbSbeOcdkJZ3d9yb2KtwD%2FzDyFxSHuBNK%2FCNAO0og5C54IIAgVQ6jgOj5cOigqGZ0Sfbk6LjHvPfufbhqmAXngsDt9fJUEnTUVtCUVm053tn8IW9nET%2BSOleVhNeCoJs55ZwTTm%2BfGF0sR3vVIEQom5WBzHksen1F0xh%2BEgZWfMoVo2DSgeVEmENjKPUO4nzUWuRuz6FBzc6rMZpkHizDT4cFRy55uPAVBSlXvPBcH7VZKKrhbbCM%2F5PDxV6oB%2BH2cME6jsW7ESby2wNe4Gb0u0q9bWNN3vnS9WA3QPrOmmpdgtapnuwEloKNoGm9FGdlX41vbZ1mq%2FZvKyVK0TAr7gTCM0n7u0Ab1Hqb%2Ft4xRurRVnoo5R05lpIVQS%2FD3IwrGK4tVWwfn9rJXVEPH2pnPYOnHotTOkH1iPlUJ9lmU%2BWd74QMkIqHgd%2FTNiTseZJoiDmuuFEN65mAgNzlP9kp9BZ1hjBG2Gsm09TtMoiFgpina3lsgUc%2BvMnifVfk8k1ne3v9qs34%2BNwPZAeqD9nXBLekbZODdU7ZKLn0Aq48w3w2jK3PK9sjB4RyrgtJrsvzS5X%2FpLTiaidSgnQ7tyCUtwofzkrSKzVPTP8mmY8QV1WEeodXIgSG%2FAEO7%2FR2%2FkomjhUZwx4uSficaXow69vgwQY6pgHaJQebKt8pIO7PUQJHD9OwLnV0uB87l3VKGo%2FyD6VZ5hYZtcQOdNWr0Q3rCg7p72dwwO6e7QCwiAep4Pq%2BqFXpZ4WR1Rnrc9uwaL33Mf5Xxv6MxqvYc%2FeixzEeFzrl%2FhsNgEUOwnTO1yE1jQ00YFPODEcGDOXmLdHhC4LYkp9jrXpbREEC%2F5iISEce9NyvWHx3rRnx7HItTeGimvH9akIRU%2FEWhDPW&X-Amz-Signature=b48ae8fcf2172f0686a27078e51ad27f35b0eec8cd5b4f4840a75fd8601d47d8&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664EURHEO%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T110738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBJZzLT9dQdgnnIzvcODfUWR0OXdqNggLeA2estRPhhVAiBzeAAJevQSZklrUVHPwGv6m8EL6p7Zq%2Fl3BK69wJlS4iqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbSbeOcdkJZ3d9yb2KtwD%2FzDyFxSHuBNK%2FCNAO0og5C54IIAgVQ6jgOj5cOigqGZ0Sfbk6LjHvPfufbhqmAXngsDt9fJUEnTUVtCUVm053tn8IW9nET%2BSOleVhNeCoJs55ZwTTm%2BfGF0sR3vVIEQom5WBzHksen1F0xh%2BEgZWfMoVo2DSgeVEmENjKPUO4nzUWuRuz6FBzc6rMZpkHizDT4cFRy55uPAVBSlXvPBcH7VZKKrhbbCM%2F5PDxV6oB%2BH2cME6jsW7ESby2wNe4Gb0u0q9bWNN3vnS9WA3QPrOmmpdgtapnuwEloKNoGm9FGdlX41vbZ1mq%2FZvKyVK0TAr7gTCM0n7u0Ab1Hqb%2Ft4xRurRVnoo5R05lpIVQS%2FD3IwrGK4tVWwfn9rJXVEPH2pnPYOnHotTOkH1iPlUJ9lmU%2BWd74QMkIqHgd%2FTNiTseZJoiDmuuFEN65mAgNzlP9kp9BZ1hjBG2Gsm09TtMoiFgpina3lsgUc%2BvMnifVfk8k1ne3v9qs34%2BNwPZAeqD9nXBLekbZODdU7ZKLn0Aq48w3w2jK3PK9sjB4RyrgtJrsvzS5X%2FpLTiaidSgnQ7tyCUtwofzkrSKzVPTP8mmY8QV1WEeodXIgSG%2FAEO7%2FR2%2FkomjhUZwx4uSficaXow69vgwQY6pgHaJQebKt8pIO7PUQJHD9OwLnV0uB87l3VKGo%2FyD6VZ5hYZtcQOdNWr0Q3rCg7p72dwwO6e7QCwiAep4Pq%2BqFXpZ4WR1Rnrc9uwaL33Mf5Xxv6MxqvYc%2FeixzEeFzrl%2FhsNgEUOwnTO1yE1jQ00YFPODEcGDOXmLdHhC4LYkp9jrXpbREEC%2F5iISEce9NyvWHx3rRnx7HItTeGimvH9akIRU%2FEWhDPW&X-Amz-Signature=ea129b3afc5e371fa33042bfba89831c131ef626b5982befdf51b98d8446665b&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
