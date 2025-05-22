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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIJMYUGQ%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T220823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJGMEQCIEGJShEKqdLY24Wo5DzroD%2FpksrF3c4Sh4f0HExQHvuFAiBnawdA65hyIV8t53Mosjy%2FzgjubYZT0AgCD4uvvIkgRyqIBAje%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMj1%2Baa2hKmo1lBO1gKtwDQJ%2F9k3B3IzgKa%2FyLtHwTL2aqi0p4GEeDVY9p0sDKMsDsT0QHekvWHs%2BizHCWlsl6PNNVTDAMxgAbmP2HOv%2BaxTtqc0tGfr50jjcvqeobN7Ezyd7dwE7aWtHjYTRXL6d0G4fIiLm9UVJxmCflPShm7kknMjdEfjey0Q7gXlmH7tJqubFooOGEntIguH0Jue3i8SWMCE3hNo%2BtEIND1MQ1hfpBzN93cmOLC%2B8yRDpiYfcVd0xURxCSV3nYRMc94%2BrRERKWT%2FBgYE9gVuCHcHpDaxILqFhJDzx74yN9DwEuq%2B17crQYCJZS8ZwWKFNVcWLsIcOeFbIJB9n9Gm3KGuXiOnuwJDY%2FrxBlzptu3kfFtEQXY5A%2B8mipoemb9XDBGamNh0lxLanWj4R8yyP9RWxVqUXI9%2F36ZPJkTqqE%2Bxks51aM5lDem1K8BNY%2BaPe55oMWiRY7faKfeu7qtEzvhL%2Fu2W4I3dgx3xI47QLzs4jeo4pjXDdg1AfF8dXsUMPSoyJI7vLIpgC3pN%2BSQJb%2F7inf1F5oPsoAmmernVwP%2FZ%2B9pbC9HED1a36ABSbDbdK0nN95VkZBPsJBj8U0zm4EYwZxcvk9Ekh8VBhqgeRj6S1zkP42IdbFR4bYA2GkTF0whaq%2BwQY6pgE3TYC6iRZtVKitIGLy7vqc7SqyaWI%2BLZ0oaEUTCYkq80sPeb2%2FaasEsl9ZsWazzgr63yoQhrGsc%2FZce1apAZMHSIzvvQzmv25GMv8J%2BNmYJU3V%2FQXmY72cm3XoPzK%2FOjhGLvW5I8GpFnSpTQAAeCd%2BbGDS%2FUy97A%2B%2FnJm8Y5vgk5eSZLhzuXzYBJ%2FC7joWe4ILQ9Vv2rWhFJNMH47ipSYmrmwNGtI6&X-Amz-Signature=c8872d29eced51630f45b3fbdc31bfbc61d42ca05ffda25b7b8abeb803dbf386&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIJMYUGQ%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T220823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJGMEQCIEGJShEKqdLY24Wo5DzroD%2FpksrF3c4Sh4f0HExQHvuFAiBnawdA65hyIV8t53Mosjy%2FzgjubYZT0AgCD4uvvIkgRyqIBAje%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMj1%2Baa2hKmo1lBO1gKtwDQJ%2F9k3B3IzgKa%2FyLtHwTL2aqi0p4GEeDVY9p0sDKMsDsT0QHekvWHs%2BizHCWlsl6PNNVTDAMxgAbmP2HOv%2BaxTtqc0tGfr50jjcvqeobN7Ezyd7dwE7aWtHjYTRXL6d0G4fIiLm9UVJxmCflPShm7kknMjdEfjey0Q7gXlmH7tJqubFooOGEntIguH0Jue3i8SWMCE3hNo%2BtEIND1MQ1hfpBzN93cmOLC%2B8yRDpiYfcVd0xURxCSV3nYRMc94%2BrRERKWT%2FBgYE9gVuCHcHpDaxILqFhJDzx74yN9DwEuq%2B17crQYCJZS8ZwWKFNVcWLsIcOeFbIJB9n9Gm3KGuXiOnuwJDY%2FrxBlzptu3kfFtEQXY5A%2B8mipoemb9XDBGamNh0lxLanWj4R8yyP9RWxVqUXI9%2F36ZPJkTqqE%2Bxks51aM5lDem1K8BNY%2BaPe55oMWiRY7faKfeu7qtEzvhL%2Fu2W4I3dgx3xI47QLzs4jeo4pjXDdg1AfF8dXsUMPSoyJI7vLIpgC3pN%2BSQJb%2F7inf1F5oPsoAmmernVwP%2FZ%2B9pbC9HED1a36ABSbDbdK0nN95VkZBPsJBj8U0zm4EYwZxcvk9Ekh8VBhqgeRj6S1zkP42IdbFR4bYA2GkTF0whaq%2BwQY6pgE3TYC6iRZtVKitIGLy7vqc7SqyaWI%2BLZ0oaEUTCYkq80sPeb2%2FaasEsl9ZsWazzgr63yoQhrGsc%2FZce1apAZMHSIzvvQzmv25GMv8J%2BNmYJU3V%2FQXmY72cm3XoPzK%2FOjhGLvW5I8GpFnSpTQAAeCd%2BbGDS%2FUy97A%2B%2FnJm8Y5vgk5eSZLhzuXzYBJ%2FC7joWe4ILQ9Vv2rWhFJNMH47ipSYmrmwNGtI6&X-Amz-Signature=e87fa03c7754372cb2bff10b9c7e065600d4e3c86b25930d307fded5894b2c52&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
