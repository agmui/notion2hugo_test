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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THM4ZKPZ%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T070908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIQC0rMcKumwv32Nz2vF%2BFUxNTo21TkGNNJwdszzlUxorFwIgZOoS2hBoXMtP%2BVVhOvl5tVwPKUzsoAMWgxFTeEto3WUqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLTwpw%2BkrkNemUo16ircA9XobWzFBxQu5WH%2Bbn%2BTWyKNPK%2BXTm0TY5njfc3%2BUQ9x%2Bk%2FjsyjbdmfT12a1CdY%2FuV1y5lyCh3KuOj7a1M2SEvuQDS5CfTWCAnysx1WdVdSp%2Fot51Rm%2BP0kueN90BUiP2wqHuUvtN7GLmt%2FUS1%2FQAvaQy26K1n%2BR5RuhlecyQiExVX3qyjFCe2y2gbgytEwn9P1qGZ%2ByCD2Mgw%2FG2x4BqT7ZLA8KVmTooxihXQEpYOtSxs3ng3VtgfTK4n0gglDSjQDhd2fxVyjABKb6fzYu5V%2FeBVQqgnNgdTmeO3uWb6hvc0dR0pQRKHXlkJfy8idSZrcOtIh1%2Bg7yrTN0qTJaRXqZBkn8W7cu4ViGDDQTojm6IhZQYiyebi5wrH%2BlJXbdY81VE1uB3nLwFVpOK5DRRPLeAD%2BlPGU2UVWyQ4PPc%2FeSj778P46bYbArPLLkXUoWSflDBKyMLajFafw4%2FrtxY6J81TaLVFO2VLq0foWWWWzdqrtXevsJ6%2BaonvcuqSAZm9Ja6oYlXmj8wOMyiiLagmCA0s1UD3McJAUY1nVASwVk%2FQyvlKmMi3k7jRm7iUt%2BdFw2377NtHu1zJmP7rM2uaUFFE0%2F7%2BGOBbNZXy1Ag2y9nYCFo9saqHxOZ6MHMOfBv8EGOqUBCyIdHToeYihEszS%2B45p1Ozwk3FjmB430yagGN26Aa%2FkDckkh8tD0xxy9T7gEUAD%2Frjo5IHTlUB6gBvXdFCLmT7POw9YCNGRPBrB7evchhmdFRkHTt%2FhneLMnIWlK%2FMBZnD12hw8zpTk%2Fb51nRbEvJV1qbFKmREFb6z84Y2tuRMB3ly6Vfg4c8YzH4qrjwfPNIAYzHOtg%2B0M7h4jVvGX0Z9AX4axM&X-Amz-Signature=5a30282a4a82000f799bda11e8ca4570fbb2a17de891215bcb62c362599e4c6e&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THM4ZKPZ%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T070908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIQC0rMcKumwv32Nz2vF%2BFUxNTo21TkGNNJwdszzlUxorFwIgZOoS2hBoXMtP%2BVVhOvl5tVwPKUzsoAMWgxFTeEto3WUqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLTwpw%2BkrkNemUo16ircA9XobWzFBxQu5WH%2Bbn%2BTWyKNPK%2BXTm0TY5njfc3%2BUQ9x%2Bk%2FjsyjbdmfT12a1CdY%2FuV1y5lyCh3KuOj7a1M2SEvuQDS5CfTWCAnysx1WdVdSp%2Fot51Rm%2BP0kueN90BUiP2wqHuUvtN7GLmt%2FUS1%2FQAvaQy26K1n%2BR5RuhlecyQiExVX3qyjFCe2y2gbgytEwn9P1qGZ%2ByCD2Mgw%2FG2x4BqT7ZLA8KVmTooxihXQEpYOtSxs3ng3VtgfTK4n0gglDSjQDhd2fxVyjABKb6fzYu5V%2FeBVQqgnNgdTmeO3uWb6hvc0dR0pQRKHXlkJfy8idSZrcOtIh1%2Bg7yrTN0qTJaRXqZBkn8W7cu4ViGDDQTojm6IhZQYiyebi5wrH%2BlJXbdY81VE1uB3nLwFVpOK5DRRPLeAD%2BlPGU2UVWyQ4PPc%2FeSj778P46bYbArPLLkXUoWSflDBKyMLajFafw4%2FrtxY6J81TaLVFO2VLq0foWWWWzdqrtXevsJ6%2BaonvcuqSAZm9Ja6oYlXmj8wOMyiiLagmCA0s1UD3McJAUY1nVASwVk%2FQyvlKmMi3k7jRm7iUt%2BdFw2377NtHu1zJmP7rM2uaUFFE0%2F7%2BGOBbNZXy1Ag2y9nYCFo9saqHxOZ6MHMOfBv8EGOqUBCyIdHToeYihEszS%2B45p1Ozwk3FjmB430yagGN26Aa%2FkDckkh8tD0xxy9T7gEUAD%2Frjo5IHTlUB6gBvXdFCLmT7POw9YCNGRPBrB7evchhmdFRkHTt%2FhneLMnIWlK%2FMBZnD12hw8zpTk%2Fb51nRbEvJV1qbFKmREFb6z84Y2tuRMB3ly6Vfg4c8YzH4qrjwfPNIAYzHOtg%2B0M7h4jVvGX0Z9AX4axM&X-Amz-Signature=c9eb8507b818c96a07dd729725ae1068531de9e736821b9e3a3db12eb5f0ed3c&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
