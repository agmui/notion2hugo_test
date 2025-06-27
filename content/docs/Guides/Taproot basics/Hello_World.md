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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EHFTQ4X%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T121559Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQCuSIhrdy%2BfUE7wOwgboSX1IikZmYPJBQcgN2QXPAnJ%2BgIgQrIiQcaMiFnuvpbYhb8kFWIzLspEpG6Fu57tlqNueesq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDMYHw0dPJ4TDkld4XCrcA5RZQF4BcyTqlcJq3RV08wz4cdvWN%2FPPlIGeDcz7JWh4oZuH41AHGw59qNk8l%2BxMr1Cw7arKEYk%2Bd8Wk5bw0gRgDkcNbXkVPo%2Fah6oqyoPM0EjPPwviHoES8cbBBjH2ee2hdda50%2B2RWGBa8OE1iZEEW0pG2l679%2BLFp%2BLLpHdWvLw6Mr72Ul1H9218TJFomCVNOWjdKADrbpAGGQpjKkIjBfhEsenn%2FfG0oQplrhR5kqYVOViQGczTasHsK0baKklo5zfp%2BDCWdaaoU34JXE9l4JhHninC4iyqA8cMk5jfOXjJB24JaTwf4pCHOm4rWJmMDQ0QRU9mLLZVcHN52gGDPNsWQd%2BfwRcnQ4P1huJt8CmE%2BZlVaaeKzYYnDhDORTUUKD9%2B4vWpY3u7zoFkbp3c225UT2PcYxCfX0TuNwYoQKwKfuWu%2BpxNg%2F%2BF7fnXmtO8SSZdEozUXZFXSbkLdn0aJJLuGXPLn3BcOoVD1C8KRY3zEIWSayB7Noiukcx9onvI6Qga8eJf83LaKZN6K8M4Jgd1KETGf%2FnGndrFrmZzuZ6VZFuW%2FhewQDkee8f6DpgbiHcGboIySy3DZ5nsNNnnyA9m7P%2BGhjpEzXVRYMK1f%2F1rUP6zet2X%2BlLfhMJj%2B%2BcIGOqUBhtIuZKHcPVehN5OYjILor0cSLU5P9UpSZXY1VefliOjaYT4Yg%2BclagzsXZXN37hdU86ELnjZZfia1McoWjZNndnSw1zR3Zj90sIqH%2F5acjfxAR7uHq4n5ygLeC6y6Rlmv0GL87enhZQ3Cpswo58YMXACbyf6s8lBW1S%2BwQzvN9zac%2FVvw1pP7Nc3XDcaaW0ii%2B2eb87vteKLgbucr79M%2BGGoUYGO&X-Amz-Signature=eb9c358eae071cbc9a9abb79b025a6c17fce57ba889047158bf4fca4d9e42d6f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EHFTQ4X%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T121559Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQCuSIhrdy%2BfUE7wOwgboSX1IikZmYPJBQcgN2QXPAnJ%2BgIgQrIiQcaMiFnuvpbYhb8kFWIzLspEpG6Fu57tlqNueesq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDMYHw0dPJ4TDkld4XCrcA5RZQF4BcyTqlcJq3RV08wz4cdvWN%2FPPlIGeDcz7JWh4oZuH41AHGw59qNk8l%2BxMr1Cw7arKEYk%2Bd8Wk5bw0gRgDkcNbXkVPo%2Fah6oqyoPM0EjPPwviHoES8cbBBjH2ee2hdda50%2B2RWGBa8OE1iZEEW0pG2l679%2BLFp%2BLLpHdWvLw6Mr72Ul1H9218TJFomCVNOWjdKADrbpAGGQpjKkIjBfhEsenn%2FfG0oQplrhR5kqYVOViQGczTasHsK0baKklo5zfp%2BDCWdaaoU34JXE9l4JhHninC4iyqA8cMk5jfOXjJB24JaTwf4pCHOm4rWJmMDQ0QRU9mLLZVcHN52gGDPNsWQd%2BfwRcnQ4P1huJt8CmE%2BZlVaaeKzYYnDhDORTUUKD9%2B4vWpY3u7zoFkbp3c225UT2PcYxCfX0TuNwYoQKwKfuWu%2BpxNg%2F%2BF7fnXmtO8SSZdEozUXZFXSbkLdn0aJJLuGXPLn3BcOoVD1C8KRY3zEIWSayB7Noiukcx9onvI6Qga8eJf83LaKZN6K8M4Jgd1KETGf%2FnGndrFrmZzuZ6VZFuW%2FhewQDkee8f6DpgbiHcGboIySy3DZ5nsNNnnyA9m7P%2BGhjpEzXVRYMK1f%2F1rUP6zet2X%2BlLfhMJj%2B%2BcIGOqUBhtIuZKHcPVehN5OYjILor0cSLU5P9UpSZXY1VefliOjaYT4Yg%2BclagzsXZXN37hdU86ELnjZZfia1McoWjZNndnSw1zR3Zj90sIqH%2F5acjfxAR7uHq4n5ygLeC6y6Rlmv0GL87enhZQ3Cpswo58YMXACbyf6s8lBW1S%2BwQzvN9zac%2FVvw1pP7Nc3XDcaaW0ii%2B2eb87vteKLgbucr79M%2BGGoUYGO&X-Amz-Signature=69abdfdf864eb7cbd5a7476ef45440e595b2c44011e5bc12a0c26fb92ecf7c6c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
