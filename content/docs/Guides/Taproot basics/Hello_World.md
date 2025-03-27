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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627H2GQFL%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T110718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJLvUWf%2Fgkk0%2FcqvsnbAfRcF4dbIp0gSJe34xL3%2FB8xAIgE53qJAQ8Ly2N4GdlfLw1SGjCdViq6SSrhq84AQdD7oIq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDN7NbDl6hL3s3dF%2BtSrcAz6D6j2W8vKhfu3%2BX%2BuN8XqK%2BhlEpMn7xv7wMMfOtYYb%2BXw6mC8qXeZZiPWkBS6ii6nrqukh7Gm4rqip4aqoXZ%2BVjVZaf%2BlZYV0AjmWDHfOrsw7NB%2FaEZP3ORXR%2FXF1nSYttQjHfqqtebykKZ9zSX9Vd5z94XgK0GVFTWf9mcQtuWeC110fZPHwFmF7NEhaK2jpQH1Br82peuMf45ACLsel4IopFpdens%2FR6qu9IPwa0JX8Ia9CTsyDy39drtKW1TWozDP1geGEzrir5ch3Qa48odrulXtmyXo7kJg%2BQ4Z7cRWWOcWKy1YLRbc6Qz5XpO4cet8Oij2qnCj8L%2BGHHZJx%2B%2FPEFRoa%2BGsyg%2BcmUsHciCs59cv8tBmlM6r3q%2B%2BHDSySqN1rPVGsEO%2Bis2cGns%2Bj79eGB0AA3ogD0YazcutrKEW7ANW6OlkJldsaDAIqGtrCHMCC611z0ZR7sIPuq%2BrAo8F5QBtMm03ib22kDvfBM27sTN5%2BXPAd9gDJlpZMZg3mqyWXHr37XgXCNJqZRq6TGxyiUVLfOIGTNUQEKNcM0P6d8yly6x83P7URca%2BkTolynAqC3ZJZIiDrNtlVe4E%2FS7Is5FWnENSx4XGBxG9R9f2TZf1S5Eo8BnqesMLPblL8GOqUBEIT%2BC3OF23T76nE9vfJiKlfjPe7SpLv%2BAyTJXi8xtT1GASHRhcNWb7Ti6RDmTNOpQlkmjSUX96BuTRlT%2BrHDrY2zAKnXDSBRMmMzEGG7UF%2FUMRe3xZs%2FP7MnyqWUC3sdmAMVVpxEgf%2BodmMH7x2itUozS6Rn4xYxrxjYxlON9WaHINymznLXHZKfN87H3R65PSIHTZQCAZ%2Fx1iPFvPBNOMXPBqef&X-Amz-Signature=0c06cef1bac54eed9d775e18b4067aa48983e5acd8fc050ed58ed67f92c38fc8&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627H2GQFL%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T110718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJLvUWf%2Fgkk0%2FcqvsnbAfRcF4dbIp0gSJe34xL3%2FB8xAIgE53qJAQ8Ly2N4GdlfLw1SGjCdViq6SSrhq84AQdD7oIq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDN7NbDl6hL3s3dF%2BtSrcAz6D6j2W8vKhfu3%2BX%2BuN8XqK%2BhlEpMn7xv7wMMfOtYYb%2BXw6mC8qXeZZiPWkBS6ii6nrqukh7Gm4rqip4aqoXZ%2BVjVZaf%2BlZYV0AjmWDHfOrsw7NB%2FaEZP3ORXR%2FXF1nSYttQjHfqqtebykKZ9zSX9Vd5z94XgK0GVFTWf9mcQtuWeC110fZPHwFmF7NEhaK2jpQH1Br82peuMf45ACLsel4IopFpdens%2FR6qu9IPwa0JX8Ia9CTsyDy39drtKW1TWozDP1geGEzrir5ch3Qa48odrulXtmyXo7kJg%2BQ4Z7cRWWOcWKy1YLRbc6Qz5XpO4cet8Oij2qnCj8L%2BGHHZJx%2B%2FPEFRoa%2BGsyg%2BcmUsHciCs59cv8tBmlM6r3q%2B%2BHDSySqN1rPVGsEO%2Bis2cGns%2Bj79eGB0AA3ogD0YazcutrKEW7ANW6OlkJldsaDAIqGtrCHMCC611z0ZR7sIPuq%2BrAo8F5QBtMm03ib22kDvfBM27sTN5%2BXPAd9gDJlpZMZg3mqyWXHr37XgXCNJqZRq6TGxyiUVLfOIGTNUQEKNcM0P6d8yly6x83P7URca%2BkTolynAqC3ZJZIiDrNtlVe4E%2FS7Is5FWnENSx4XGBxG9R9f2TZf1S5Eo8BnqesMLPblL8GOqUBEIT%2BC3OF23T76nE9vfJiKlfjPe7SpLv%2BAyTJXi8xtT1GASHRhcNWb7Ti6RDmTNOpQlkmjSUX96BuTRlT%2BrHDrY2zAKnXDSBRMmMzEGG7UF%2FUMRe3xZs%2FP7MnyqWUC3sdmAMVVpxEgf%2BodmMH7x2itUozS6Rn4xYxrxjYxlON9WaHINymznLXHZKfN87H3R65PSIHTZQCAZ%2Fx1iPFvPBNOMXPBqef&X-Amz-Signature=9cb01604a8bc24082a71f6dc068cdc01156ccc9ceb9ba4685584fa7ba870d8aa&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
