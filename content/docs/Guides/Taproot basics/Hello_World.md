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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFBCUMFB%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T170715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDALTbrFOsLA1bfU%2BuKD0Z3kV7LuoBtPO44Q06wE1o5FQIhALpgl8ijbb%2BpH1badZPN453CqsEXhcqRCD4Eqc0e0IOaKv8DCDEQABoMNjM3NDIzMTgzODA1IgzCBYMf3BEAqoTkqcQq3APR7MCwMCraABOLohQomgF%2Bd3SfJweLZ%2FmhKdg5a8D8vjEgPLNw2ZtC1vkURUTfmzGOZgN0s0nD0qtm%2F2HhAAGulxlENiS%2F%2FB7f5mi6C4QzC5admv1xRugNqThEr4nBttb1zInKHJ8tSc2h4su563GasuaLIHlXIgO3zjLhHwKmZ3ZeiJNWOjzf3Zs6rW2ourYdgi2dH1J0ym0x40n27hKvN2gevaUqzaYqmYK9ME4Cw9rzSuudaRGdt%2FOizrvGl%2B1o9NMXrAgyN9xHeD%2FRyw3eB4eGg7w%2B7GsGB909pTqkRug4cG8yO87KoIvvmGnnxH9I5PmHS7H36BAMPl%2BtvDXs3TnmU5gKav%2FBBcoYIuiOZhLaA%2BOAhHsSScKTfwtwyJiO0HMriJAZ7QxQTdRCiJGgeqxy2AZ%2Frhiq7i7PqJa7RgE7bsVqm5Ns7Kwxa2jUX%2FsXx17rSXJMeoBE60OWFX3qXvthY3Q%2B5Xi8El0W3JFHS%2FiS%2BX2z11tE1Qo3oUtqTA642y2gPWs3yLSgxqd5S4UvakA8yG2yFtkKiJdXCAFTV4z29vB2Qwh0Gw738PQl3VUG9ILvH7pEXArCYWNsLi%2Flr4fkvs4oeUIoaZXQiXADNPXwnP4jXQVHUiQnuTCWj6e%2BBjqkAZ%2Bil2hWx2jChqBcKdIP19UwOWf2hpVi4GcBJu0MOEDPUi74oKok64oxD78jx67NL222UF20tBKVN8Qvtrg3%2BektVVW2Lwz2CiH3x48%2FnxczKCLMUD8uEoX9ab0yg5VsGggY%2FTH3T3InowIpGuhoTmi26jcBluAef97Vn7T%2FV6eEO0Q8ms1dM%2FPSP%2F5Ssb26Z1KbLOSCAicewhaKRVlT9yMC8WZl&X-Amz-Signature=dffbff6ce4d7f29edaa37ea4370b172b153d63b762150aa97751244ea65f5f0f&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFBCUMFB%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T170715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDALTbrFOsLA1bfU%2BuKD0Z3kV7LuoBtPO44Q06wE1o5FQIhALpgl8ijbb%2BpH1badZPN453CqsEXhcqRCD4Eqc0e0IOaKv8DCDEQABoMNjM3NDIzMTgzODA1IgzCBYMf3BEAqoTkqcQq3APR7MCwMCraABOLohQomgF%2Bd3SfJweLZ%2FmhKdg5a8D8vjEgPLNw2ZtC1vkURUTfmzGOZgN0s0nD0qtm%2F2HhAAGulxlENiS%2F%2FB7f5mi6C4QzC5admv1xRugNqThEr4nBttb1zInKHJ8tSc2h4su563GasuaLIHlXIgO3zjLhHwKmZ3ZeiJNWOjzf3Zs6rW2ourYdgi2dH1J0ym0x40n27hKvN2gevaUqzaYqmYK9ME4Cw9rzSuudaRGdt%2FOizrvGl%2B1o9NMXrAgyN9xHeD%2FRyw3eB4eGg7w%2B7GsGB909pTqkRug4cG8yO87KoIvvmGnnxH9I5PmHS7H36BAMPl%2BtvDXs3TnmU5gKav%2FBBcoYIuiOZhLaA%2BOAhHsSScKTfwtwyJiO0HMriJAZ7QxQTdRCiJGgeqxy2AZ%2Frhiq7i7PqJa7RgE7bsVqm5Ns7Kwxa2jUX%2FsXx17rSXJMeoBE60OWFX3qXvthY3Q%2B5Xi8El0W3JFHS%2FiS%2BX2z11tE1Qo3oUtqTA642y2gPWs3yLSgxqd5S4UvakA8yG2yFtkKiJdXCAFTV4z29vB2Qwh0Gw738PQl3VUG9ILvH7pEXArCYWNsLi%2Flr4fkvs4oeUIoaZXQiXADNPXwnP4jXQVHUiQnuTCWj6e%2BBjqkAZ%2Bil2hWx2jChqBcKdIP19UwOWf2hpVi4GcBJu0MOEDPUi74oKok64oxD78jx67NL222UF20tBKVN8Qvtrg3%2BektVVW2Lwz2CiH3x48%2FnxczKCLMUD8uEoX9ab0yg5VsGggY%2FTH3T3InowIpGuhoTmi26jcBluAef97Vn7T%2FV6eEO0Q8ms1dM%2FPSP%2F5Ssb26Z1KbLOSCAicewhaKRVlT9yMC8WZl&X-Amz-Signature=7ac135e9803ba705c0f6ac8f11cd04c548910a1d5285b3ab376165850b13a48a&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
