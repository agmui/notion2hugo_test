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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676U73F4O%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T140734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJGMEQCICkL9RLltUwLAYZ1cXB0IME0wWuZaj2iyIi7cWfLOEd6AiBOORqYAHaK8Y0cTZZUHty99O6bOfoa1ODMzLkASMUMVCqIBAi7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvMvH9bEAJ8plow13KtwDoUeFFKyyt%2FruFhs2LFskXtOxvylpUFDN9mS%2FSFKD6fxMPHlesuTT9fh%2BTFRkaeWyUh4HwYJzcD6z1C61XdJj2cfXPRcC8omFtxwrUOPZ2v3rYRVDzVTtOW7Hgk2WaUdcWRmfOWuvNjg5ChM83pVgaE1k86Ksce4PNmGNoU5FnutmC7K9GkwIACuo5SH9dCYjLMvemttg3MIXcPhbN4vIVcMI8sdzq4LwV%2F%2Fx0Xd21AAKD8KCVqHZYXF9OANrVrfNjXabhHTKGHmJ1MJ6tAqZqm8SucXDfrro3Sjve3jfvwMGERom5LJ%2FIZl9kw1Z24yfWhhD1AVKiT9L459vgBmoI4mhh%2BfXkH6txgijEoC8nQm11FlyX90Nn55sQt%2Fvuu4DqCiK9sQqqjsTRbM2%2BaJKZ8QugLTtR%2BJKUunY3IExcKHS9B0Aky53cuF0pkWx5OyFOzVb8%2B513CEpivszPJVsYKLS0FJtsvkOpvL06RdXr9EteFmhMnWs3TjJZBhXb7iF9fs%2Fp2G78lJH3NZVd9nGZkbn13F6WHukH1rlhe09EHzdp33%2BzsT8V%2FnsM4vc5TcfRVC9ooEKH%2FoI%2BTvoYHOZr%2BPSssjaqp93Kil9V7MTqOU%2FxaQj0ErPz3BPR1Mw5eiBwQY6pgE6vnOYKJeVC3Wj7FzLFusTD1Rvc8i%2F48vPjMd6kzU%2BGptLZY7RBY%2F8H4VTP8JGBUKUIEYOZySUN78lXHKxaW0aDK9emgaMT%2FOfKMkr93pQ5j2uWcPdp%2BPTgTCMfJQctJKJt7SFCmn%2BG2gPWbLHT%2Fg%2BhnFEKm9FMkYJhUqrN4QkMZWTNtCob2P1C2jQKziIccWMvyxUgGliyrLWYtwwH27QzJihPsaT&X-Amz-Signature=88f92204b9abc08fc610c0e721a6dc064dc67381c69a9c01be0204c72a380004&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676U73F4O%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T140734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJGMEQCICkL9RLltUwLAYZ1cXB0IME0wWuZaj2iyIi7cWfLOEd6AiBOORqYAHaK8Y0cTZZUHty99O6bOfoa1ODMzLkASMUMVCqIBAi7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvMvH9bEAJ8plow13KtwDoUeFFKyyt%2FruFhs2LFskXtOxvylpUFDN9mS%2FSFKD6fxMPHlesuTT9fh%2BTFRkaeWyUh4HwYJzcD6z1C61XdJj2cfXPRcC8omFtxwrUOPZ2v3rYRVDzVTtOW7Hgk2WaUdcWRmfOWuvNjg5ChM83pVgaE1k86Ksce4PNmGNoU5FnutmC7K9GkwIACuo5SH9dCYjLMvemttg3MIXcPhbN4vIVcMI8sdzq4LwV%2F%2Fx0Xd21AAKD8KCVqHZYXF9OANrVrfNjXabhHTKGHmJ1MJ6tAqZqm8SucXDfrro3Sjve3jfvwMGERom5LJ%2FIZl9kw1Z24yfWhhD1AVKiT9L459vgBmoI4mhh%2BfXkH6txgijEoC8nQm11FlyX90Nn55sQt%2Fvuu4DqCiK9sQqqjsTRbM2%2BaJKZ8QugLTtR%2BJKUunY3IExcKHS9B0Aky53cuF0pkWx5OyFOzVb8%2B513CEpivszPJVsYKLS0FJtsvkOpvL06RdXr9EteFmhMnWs3TjJZBhXb7iF9fs%2Fp2G78lJH3NZVd9nGZkbn13F6WHukH1rlhe09EHzdp33%2BzsT8V%2FnsM4vc5TcfRVC9ooEKH%2FoI%2BTvoYHOZr%2BPSssjaqp93Kil9V7MTqOU%2FxaQj0ErPz3BPR1Mw5eiBwQY6pgE6vnOYKJeVC3Wj7FzLFusTD1Rvc8i%2F48vPjMd6kzU%2BGptLZY7RBY%2F8H4VTP8JGBUKUIEYOZySUN78lXHKxaW0aDK9emgaMT%2FOfKMkr93pQ5j2uWcPdp%2BPTgTCMfJQctJKJt7SFCmn%2BG2gPWbLHT%2Fg%2BhnFEKm9FMkYJhUqrN4QkMZWTNtCob2P1C2jQKziIccWMvyxUgGliyrLWYtwwH27QzJihPsaT&X-Amz-Signature=b893d2c5533459224fb866e38e95ffb4491688177eb2c0310aaf36efc6736450&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
