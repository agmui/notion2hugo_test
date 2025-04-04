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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWK45KDN%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T061209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC4lkfW6aLTQqNzdQ%2Bw3plF3p5efnREm8HafnDxmn4ALgIgWqHHhwFusdEk9Sl9VS0UsVBJGbuaeClYgt1IE4wciKAqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHrwCJbvVH28UYntDSrcA506ts65NR4XQvU0%2Bapma8ALZ53vxdzQE1tQljP48eeMA55%2FZtDyvbO3fK0ujSFkvRENvy4x8FMlH1vUGbXWcW8iwnzHMGpgxcqNy4PlpvbZ%2FcviAKOG15pdgYh4EdsZjJZvWvzWBZLMwYwI3CY3Ga1UTYNN9tx%2FWgQ7MCOBeXrNXvAMYnG6lTMbaBS3nQabpLvnahr7ycx9jrEFQhvcupuxzG82ssXCn0bpRwPV4YQWi1iadwxqXbnRbVHU4YLXR4TIW4USNAY63cUXp9u%2Bp6wqc40xQXgL3iQl0LfP5Ul2jOjxJKUMdzZXVOYP1Omqr9cUPYzcBeKV5vPtYNPVnsNUnctQLvdX3PU9WzYbMarRD1F70ima32SE1Nm%2F9av4G7VOcMsG1Sz89lW8CiQPR3z3vxlWn3I7Ec%2BJt%2BRu7T8g8blbNkxj5Jh%2F7NRiJtnrCu6L25yF3VsohgrGUa9ENG5QFBCyvzvVwZIdqqbyDSfTiChNuSeemfHBhCGUiJsnQCT26P4Pr%2BB3xWf9mEul1VkvLuJwcN1H4NUcshaRB3ckVK9t6%2F2SD3toQ0K8aDqe4OOuFRIt3d2p%2BvgWsaZ8ptEM5yZ4Ac9TIbAtDgwzlhQBQ%2BGDGGrF%2FXKlj9CiMLTevb8GOqUBjD%2F%2F7aJMI8V3AWAMkxJXk1t9T%2BrZiKqR7W%2FtKHp6sT7wBRMcPk5hOVlcYqsLn7f4yktv89tI%2FVWNFTeFqVRYYjqeM8JV8PefskewZsdgpFLg5%2B5HampNgrKKKgG6CTv%2BfwLDdQiUQmcSTrrnEF57BNPxhYSSXVrqlMeh90MJ3iRMJF3C9HUp%2FP5V%2B6rpZEQM8OjLP%2ByL05ehvBp4fnEk7r%2FTHgVC&X-Amz-Signature=9f1528eef92d46e9cb1efb821e66f8eb5b52d95a6674cdd9550130d1baf9dfa3&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWK45KDN%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T061209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC4lkfW6aLTQqNzdQ%2Bw3plF3p5efnREm8HafnDxmn4ALgIgWqHHhwFusdEk9Sl9VS0UsVBJGbuaeClYgt1IE4wciKAqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHrwCJbvVH28UYntDSrcA506ts65NR4XQvU0%2Bapma8ALZ53vxdzQE1tQljP48eeMA55%2FZtDyvbO3fK0ujSFkvRENvy4x8FMlH1vUGbXWcW8iwnzHMGpgxcqNy4PlpvbZ%2FcviAKOG15pdgYh4EdsZjJZvWvzWBZLMwYwI3CY3Ga1UTYNN9tx%2FWgQ7MCOBeXrNXvAMYnG6lTMbaBS3nQabpLvnahr7ycx9jrEFQhvcupuxzG82ssXCn0bpRwPV4YQWi1iadwxqXbnRbVHU4YLXR4TIW4USNAY63cUXp9u%2Bp6wqc40xQXgL3iQl0LfP5Ul2jOjxJKUMdzZXVOYP1Omqr9cUPYzcBeKV5vPtYNPVnsNUnctQLvdX3PU9WzYbMarRD1F70ima32SE1Nm%2F9av4G7VOcMsG1Sz89lW8CiQPR3z3vxlWn3I7Ec%2BJt%2BRu7T8g8blbNkxj5Jh%2F7NRiJtnrCu6L25yF3VsohgrGUa9ENG5QFBCyvzvVwZIdqqbyDSfTiChNuSeemfHBhCGUiJsnQCT26P4Pr%2BB3xWf9mEul1VkvLuJwcN1H4NUcshaRB3ckVK9t6%2F2SD3toQ0K8aDqe4OOuFRIt3d2p%2BvgWsaZ8ptEM5yZ4Ac9TIbAtDgwzlhQBQ%2BGDGGrF%2FXKlj9CiMLTevb8GOqUBjD%2F%2F7aJMI8V3AWAMkxJXk1t9T%2BrZiKqR7W%2FtKHp6sT7wBRMcPk5hOVlcYqsLn7f4yktv89tI%2FVWNFTeFqVRYYjqeM8JV8PefskewZsdgpFLg5%2B5HampNgrKKKgG6CTv%2BfwLDdQiUQmcSTrrnEF57BNPxhYSSXVrqlMeh90MJ3iRMJF3C9HUp%2FP5V%2B6rpZEQM8OjLP%2ByL05ehvBp4fnEk7r%2FTHgVC&X-Amz-Signature=c48942e788410732c47ba372789bd2f65eeeb90c7a643f111c841f125e4b776e&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
