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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMP45ASY%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T180917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIBhUnSiiV2N7mgsfjI6dd71cEMr1ubntScb0OtnOOzndAiEA3Qc67Orl4TYfLUzddLY8phz1dyqAcpPKDUP1gh9DAdIqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEJZRKSLrLuBhxiasCrcA2BDZYq17YbabEVlKI5Q55YdIu4iURIv%2Beu7DSi4wc%2Bz1PuZlDQZNhxq5eS%2FZOsaZvO1fVbIR5YVEnJdzbFX4kgJ8pH3r5uqrzbgjWwu%2FMcOdogohyqKROyNrWRqF2K%2FR4ktL4FzCbb13uf1LoRhPWkTomYWf9tEL3BoeGNsQhEtsLgBLtgp0qRNSuZz51%2FG%2FpkwkFPr4ngi4cBxws2sHul%2FF7Ia5jmgz5K3j7OdhFJydVBsVQQTYBhpg43tpEJtEZDECXTcPIrUhfzBwxxsNWqm67SB64faKyHpAALc%2B9NED1hbRMRsPNkhj2dLF%2B6PvBDsfze1krpwkNfbr%2FTQOm1seSq4VGA7OOvHWKQm6QeSF%2FfnJQ6EnevBcl7ZwZT44i4P0pcmBwlLYEPCmvlSuJmwsP44V%2BEPeBgmfg8zd0pjHR6UFu%2B2Dm3NVTdF%2BRksjmaXSxsNr9G2ncOqY7GqYeOzBt41zivI5Kuhvm2uFXDttEIufK2Ehy27E7F4dj7oFrKkLrw3YJYfrJkHT7p1ehi6fpnq5dibSjVSBUBYaX%2FckFvhieSFVailAYr4mkIOcGaQ%2F7F5zeY2KnHuyVSmm%2Bz9D6zdUkB0mpDK0LqRTI48rSg4osaKwwbvICpRMPXu%2B74GOqUBwmT%2BY6JC8bIdHCw7z%2FhzBO2dFsg%2BFOmKInGSGScJ3F7NpWzGujHz3Q77xhh1P3r1urN5zxq%2FmvF89k%2BSYJkLXDjImEBgRU8L5qrwulCQZwwZsoY2PRI4AT6hwSuE5Kzb25TnADG5K8sIaERPvBxr32MvLZBmJiAqfWZxSKTXLErFTbl9NqFbKXcqzOroxQ5H3qs0TewMHrFIN0mP9fGozIgQD2B7&X-Amz-Signature=170c90c0633adc4fa3629884d2cdb5bc4bbd752e2de5009326541528c0ee0267&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMP45ASY%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T180917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIBhUnSiiV2N7mgsfjI6dd71cEMr1ubntScb0OtnOOzndAiEA3Qc67Orl4TYfLUzddLY8phz1dyqAcpPKDUP1gh9DAdIqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEJZRKSLrLuBhxiasCrcA2BDZYq17YbabEVlKI5Q55YdIu4iURIv%2Beu7DSi4wc%2Bz1PuZlDQZNhxq5eS%2FZOsaZvO1fVbIR5YVEnJdzbFX4kgJ8pH3r5uqrzbgjWwu%2FMcOdogohyqKROyNrWRqF2K%2FR4ktL4FzCbb13uf1LoRhPWkTomYWf9tEL3BoeGNsQhEtsLgBLtgp0qRNSuZz51%2FG%2FpkwkFPr4ngi4cBxws2sHul%2FF7Ia5jmgz5K3j7OdhFJydVBsVQQTYBhpg43tpEJtEZDECXTcPIrUhfzBwxxsNWqm67SB64faKyHpAALc%2B9NED1hbRMRsPNkhj2dLF%2B6PvBDsfze1krpwkNfbr%2FTQOm1seSq4VGA7OOvHWKQm6QeSF%2FfnJQ6EnevBcl7ZwZT44i4P0pcmBwlLYEPCmvlSuJmwsP44V%2BEPeBgmfg8zd0pjHR6UFu%2B2Dm3NVTdF%2BRksjmaXSxsNr9G2ncOqY7GqYeOzBt41zivI5Kuhvm2uFXDttEIufK2Ehy27E7F4dj7oFrKkLrw3YJYfrJkHT7p1ehi6fpnq5dibSjVSBUBYaX%2FckFvhieSFVailAYr4mkIOcGaQ%2F7F5zeY2KnHuyVSmm%2Bz9D6zdUkB0mpDK0LqRTI48rSg4osaKwwbvICpRMPXu%2B74GOqUBwmT%2BY6JC8bIdHCw7z%2FhzBO2dFsg%2BFOmKInGSGScJ3F7NpWzGujHz3Q77xhh1P3r1urN5zxq%2FmvF89k%2BSYJkLXDjImEBgRU8L5qrwulCQZwwZsoY2PRI4AT6hwSuE5Kzb25TnADG5K8sIaERPvBxr32MvLZBmJiAqfWZxSKTXLErFTbl9NqFbKXcqzOroxQ5H3qs0TewMHrFIN0mP9fGozIgQD2B7&X-Amz-Signature=5f98d4c4384b662efe432bbbe58ddb70f0b2eefd39514741ab4b5e041699a9ab&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
