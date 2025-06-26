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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627D35YLN%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T170821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQCWN%2FvjbF3IvuPAKz%2FqAXlXfMajP7hqEgg20Zfo0LRtqAIgYcx9Mi7QgdqYUwX8S37aKt2inIo8tJNC99Votls9gFIq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDKM%2B9hAo6k2UPXhS8CrcAwuYzK88XrfshZnC6MHv3Exy3p2HlOj2WYKY%2Fs65bdN3iYqkYr4%2BCI29DV3gsozfDfsJzGIfpykuFKHAjWOOJGs1az4rNBkPF3r%2FgaOMmg4AM%2FIfHJ%2FdVXMah21kw7GksZNnovPuAOq4gXpIxtARBfDD4y9NlLB4ScAwrKAbD62v7EiA8GzHKJqFppFCNleMSrhOOA4MP0toixeIkwi9EjKLhZzI0uyfyHXlUMROpaoh2QuVOToyne8LMkv0GKCOOb6PCuCSVDP9ErztzGhp%2BpAEGre3oz%2BanerGsrlf5vIVHkzGkmuYxXYtDYVgm3LmNs45X2Ns9xV3uiH%2FbaAQCHOm9gUAd6xE6bpA4XU10ZL4pkd7S8DmF89sKBScWRQ7SaFPzPH8yLj1wHajO8foXt8gwTN2FmBftCZDTQCUY4rvP38iDzvF22iiY%2FhfpysuF67Lxka1LyNkeyXgBun%2BtjHQhbl3k%2FJbPCKgpSE5M9biKAV3rn1pHEv13SkNKmK7fZ0NdflXxPwd1kfGPn87EDJjUXA4M8FSam5ZFv8MZPqQAgdoxHYDYv9mdEPAl4H83JEhg6wL%2FrSUwRv9mJXPNIQxp4lJ5vlsTI52o9oTcMiE7%2Be54VgCnZz5F9B0MPqd9cIGOqUBKwfRwtQ87E1HWrw8ZImKRtPjOOA%2BzMxqXuGcyHx7ilOdomTcT6QY6TUvi2bu%2BA2KIWUHuD2mR299iE%2Bvqou4OBUc2GlRqd9v6FYJwXxKEhAT1pACZvmkhyX3lFXso1mJJk311JGAdwmBm72BpAcvOyJs6m08Fyr5Vj6yRRSv3DZcO72ydAMkiWOLEU3UGEQy8AjrT0RHUDe8EYh7r6Wm4BxpE5%2Ff&X-Amz-Signature=c21a7a18cdffd3a340808b7bf26979c94d2b01858b0c360567d396976f39b4e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627D35YLN%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T170821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQCWN%2FvjbF3IvuPAKz%2FqAXlXfMajP7hqEgg20Zfo0LRtqAIgYcx9Mi7QgdqYUwX8S37aKt2inIo8tJNC99Votls9gFIq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDKM%2B9hAo6k2UPXhS8CrcAwuYzK88XrfshZnC6MHv3Exy3p2HlOj2WYKY%2Fs65bdN3iYqkYr4%2BCI29DV3gsozfDfsJzGIfpykuFKHAjWOOJGs1az4rNBkPF3r%2FgaOMmg4AM%2FIfHJ%2FdVXMah21kw7GksZNnovPuAOq4gXpIxtARBfDD4y9NlLB4ScAwrKAbD62v7EiA8GzHKJqFppFCNleMSrhOOA4MP0toixeIkwi9EjKLhZzI0uyfyHXlUMROpaoh2QuVOToyne8LMkv0GKCOOb6PCuCSVDP9ErztzGhp%2BpAEGre3oz%2BanerGsrlf5vIVHkzGkmuYxXYtDYVgm3LmNs45X2Ns9xV3uiH%2FbaAQCHOm9gUAd6xE6bpA4XU10ZL4pkd7S8DmF89sKBScWRQ7SaFPzPH8yLj1wHajO8foXt8gwTN2FmBftCZDTQCUY4rvP38iDzvF22iiY%2FhfpysuF67Lxka1LyNkeyXgBun%2BtjHQhbl3k%2FJbPCKgpSE5M9biKAV3rn1pHEv13SkNKmK7fZ0NdflXxPwd1kfGPn87EDJjUXA4M8FSam5ZFv8MZPqQAgdoxHYDYv9mdEPAl4H83JEhg6wL%2FrSUwRv9mJXPNIQxp4lJ5vlsTI52o9oTcMiE7%2Be54VgCnZz5F9B0MPqd9cIGOqUBKwfRwtQ87E1HWrw8ZImKRtPjOOA%2BzMxqXuGcyHx7ilOdomTcT6QY6TUvi2bu%2BA2KIWUHuD2mR299iE%2Bvqou4OBUc2GlRqd9v6FYJwXxKEhAT1pACZvmkhyX3lFXso1mJJk311JGAdwmBm72BpAcvOyJs6m08Fyr5Vj6yRRSv3DZcO72ydAMkiWOLEU3UGEQy8AjrT0RHUDe8EYh7r6Wm4BxpE5%2Ff&X-Amz-Signature=e6174bccda51883579dbc9dcb98f5c92571528e7a6753733208d4c4bfc5b21fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
