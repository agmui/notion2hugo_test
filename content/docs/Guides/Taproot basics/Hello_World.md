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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VFBZE7O%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T033005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIENuV%2FKcxflD1by%2BOGhb%2Fg%2Bxc8RJl2piAfTBKPwz3854AiBHOmKvdAriMc%2FczMXNtyIPGQcZoh6S9rK2gouQw83mISr%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIMBskLiF%2BeL0QGwPc%2BKtwD1mlXgDgMZ%2FH5a%2FHoWwmx%2Fm36mjiQ7uUlIhrrNp%2BIWSP7aDbVpP%2F%2F3TYMsDDCL6%2BgnpUkv4YdrIQcHqZaa1eaiLack63qvV%2B3dhPa9%2B5Kj%2BNcwH%2BGR%2B%2BjGwkIwS56LSwng1cmOFzUXFJZq1A7V1bDxpKGb9Jv79Ws70ZZF8DGpce3y5U13oVGLsjE4wPq0tCwcVankIWyCkX8n77p%2F%2F3tYfMzE%2Bjo%2BnbuMxKOQ7ih%2BIKUKF5NFBwvhD8KQJ0mAIg4owDdhxqc8vveSuAfXE%2BLYuxH3P0kDZTorUM%2BIkEKSDBHLdkIgy4BGMItiqt8UyYO2Kjyc1i%2BUuYv0Pq3zTs3flh6S6QEMlKbtFNyLqlubyxaEhlwY9Xb9HEfUANz5pJ1pj7d8CByqi905McqotxvjB7FP9%2F5aUjOsWEIPfYyBUbE%2FxX3XySkuFzMvM1iXU8B4rchqEh9SJa09ux2F4Jbfzyz4c3%2B8imidWlnt3SiY6Z6JNJtrokdNvzbl9IdGItrHuvkRwNZnk21XokhPoaqqkwmwmHjBoCuvQ7FUr%2FP%2FQqIDkJF%2FtdD3EOgqoXz93lr%2F3zwxuwK6Zol4jTdJuCMo1A6ONcFKm1fP0LXuFw%2FGxQ4%2BIRCGdowJ76gOl0wwfqrwAY6pgEsMZHCK22R4%2BEubY57EClLfTPvsfUCv08WgPbAfl16ZsGEc5v4iGFelqS6mjGX%2FNFJSlJC%2FwMhKNR1DS2w7Y1S9O9RF4%2F5XatbDFlZwBc%2FP%2BKG5QNbxF9Mx240pv8rSe6y%2Fk0qDKYQhXmAkbZrve2xDiLMfFd%2BWtwkR%2FgeSpod%2Fp7r0%2FI0vZFqE5uroUQ1EM4dHP%2F4Qg59okZ8%2FNaJZgvRafaE1QS2&X-Amz-Signature=35fb3be05cc5b16b63e018d701db4a2bc26381ce5ee3cb041e6ca6d21bcf25c9&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VFBZE7O%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T033005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIENuV%2FKcxflD1by%2BOGhb%2Fg%2Bxc8RJl2piAfTBKPwz3854AiBHOmKvdAriMc%2FczMXNtyIPGQcZoh6S9rK2gouQw83mISr%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIMBskLiF%2BeL0QGwPc%2BKtwD1mlXgDgMZ%2FH5a%2FHoWwmx%2Fm36mjiQ7uUlIhrrNp%2BIWSP7aDbVpP%2F%2F3TYMsDDCL6%2BgnpUkv4YdrIQcHqZaa1eaiLack63qvV%2B3dhPa9%2B5Kj%2BNcwH%2BGR%2B%2BjGwkIwS56LSwng1cmOFzUXFJZq1A7V1bDxpKGb9Jv79Ws70ZZF8DGpce3y5U13oVGLsjE4wPq0tCwcVankIWyCkX8n77p%2F%2F3tYfMzE%2Bjo%2BnbuMxKOQ7ih%2BIKUKF5NFBwvhD8KQJ0mAIg4owDdhxqc8vveSuAfXE%2BLYuxH3P0kDZTorUM%2BIkEKSDBHLdkIgy4BGMItiqt8UyYO2Kjyc1i%2BUuYv0Pq3zTs3flh6S6QEMlKbtFNyLqlubyxaEhlwY9Xb9HEfUANz5pJ1pj7d8CByqi905McqotxvjB7FP9%2F5aUjOsWEIPfYyBUbE%2FxX3XySkuFzMvM1iXU8B4rchqEh9SJa09ux2F4Jbfzyz4c3%2B8imidWlnt3SiY6Z6JNJtrokdNvzbl9IdGItrHuvkRwNZnk21XokhPoaqqkwmwmHjBoCuvQ7FUr%2FP%2FQqIDkJF%2FtdD3EOgqoXz93lr%2F3zwxuwK6Zol4jTdJuCMo1A6ONcFKm1fP0LXuFw%2FGxQ4%2BIRCGdowJ76gOl0wwfqrwAY6pgEsMZHCK22R4%2BEubY57EClLfTPvsfUCv08WgPbAfl16ZsGEc5v4iGFelqS6mjGX%2FNFJSlJC%2FwMhKNR1DS2w7Y1S9O9RF4%2F5XatbDFlZwBc%2FP%2BKG5QNbxF9Mx240pv8rSe6y%2Fk0qDKYQhXmAkbZrve2xDiLMfFd%2BWtwkR%2FgeSpod%2Fp7r0%2FI0vZFqE5uroUQ1EM4dHP%2F4Qg59okZ8%2FNaJZgvRafaE1QS2&X-Amz-Signature=79b4df5b9ac973e4635562cb8b3a43218d11fde7173465f4f66df8202a27bc82&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
