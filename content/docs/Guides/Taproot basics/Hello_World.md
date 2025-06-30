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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EBUJQNQ%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T091155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDu3LclmjDN8P4OcBAEMWlOYAJ9Lm2CmiCkNIcD%2FVvJjwIhAOJxDB2lUS7%2FmUW5S0%2F%2F4C8nKDBUtnq6gsDY9oq2a7uLKogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxmrbMuiCt4M1pG0zYq3ANt9QmwO6MCugIAksc%2F%2FiCeTSEy%2FJM4fvwWEk2nf4braOk8FjKACytCwkph%2BG81jSHdV5G0oFVVu7rRBMrdiCD5I1Wnq%2BWTGdch0SoHq9Ys3FrzklVleXBWqppkiKLi9dyDaoX%2F5h96Onu9eVMI1RoCY%2FezlD2yVqil4nlzRxxqvNXFIkAfxnlXl1N9pMaWvE%2FkY%2BXEeJhi0n9g3jgEUGr08yHtmGPIawBCPXdaNQs9UfToC6f1vxq7oroHlggrxaK6r1gQy%2BySB4AAB4EGst%2BwD%2F0CXsUDN2B0usNxM4OrsJXU4T%2Fua3moLt5MqOIXR3G7Xx5erYunc3fdTrerWupNMDsJUsfPYEh0w6rLYjNpEWnW5fzDm9abPz88VngheYqiuOp0EEJymyuM%2F5mHB9czl2PuxHHorf9uIws6Cr0GpXWshpB%2BOfLZVOP7kmK%2FiBUo1KgXGsTCwY1UAsJRypTIV4Y94NzXMCVm899XPhAW6WzrrIyagRhWk5lbtvNWkTrobgxxljawTZ6hd0hrPrYLMIfGk7oMuuToSSTrJkmKrtkbJeOP%2F7sN%2BDFJEF6zjtOaq%2BIG5zcCFgNYbypl3zdu8O3HpSIw9Dx233bcrnD%2F%2FcWev0%2F6HuzhovTGATCoo4nDBjqkAbWp6TfuCC00zHmZQYmT%2BY397spMyVTzKCvNHCORTgbvzroNZ0IG4koZTVTua5F6ubkKWFcdkxKhvhZ3akYJ2RUrTZPMc7xQ1pCzhegWHDHl53%2B1FJ3KIll3rSuQpduy2j3xXQiH7rikUqqHq83ZVsi0%2FjJx4G7n7KOnFwfbNX%2BCg%2BzaoX%2Ba8kklHwtxMaxnXUynmI95709J20Mn2EewL6bQOFTj&X-Amz-Signature=da2a3c89fac256176a3186f949cce23bd0fb44709086320a6545c82298fae4fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EBUJQNQ%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T091155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDu3LclmjDN8P4OcBAEMWlOYAJ9Lm2CmiCkNIcD%2FVvJjwIhAOJxDB2lUS7%2FmUW5S0%2F%2F4C8nKDBUtnq6gsDY9oq2a7uLKogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxmrbMuiCt4M1pG0zYq3ANt9QmwO6MCugIAksc%2F%2FiCeTSEy%2FJM4fvwWEk2nf4braOk8FjKACytCwkph%2BG81jSHdV5G0oFVVu7rRBMrdiCD5I1Wnq%2BWTGdch0SoHq9Ys3FrzklVleXBWqppkiKLi9dyDaoX%2F5h96Onu9eVMI1RoCY%2FezlD2yVqil4nlzRxxqvNXFIkAfxnlXl1N9pMaWvE%2FkY%2BXEeJhi0n9g3jgEUGr08yHtmGPIawBCPXdaNQs9UfToC6f1vxq7oroHlggrxaK6r1gQy%2BySB4AAB4EGst%2BwD%2F0CXsUDN2B0usNxM4OrsJXU4T%2Fua3moLt5MqOIXR3G7Xx5erYunc3fdTrerWupNMDsJUsfPYEh0w6rLYjNpEWnW5fzDm9abPz88VngheYqiuOp0EEJymyuM%2F5mHB9czl2PuxHHorf9uIws6Cr0GpXWshpB%2BOfLZVOP7kmK%2FiBUo1KgXGsTCwY1UAsJRypTIV4Y94NzXMCVm899XPhAW6WzrrIyagRhWk5lbtvNWkTrobgxxljawTZ6hd0hrPrYLMIfGk7oMuuToSSTrJkmKrtkbJeOP%2F7sN%2BDFJEF6zjtOaq%2BIG5zcCFgNYbypl3zdu8O3HpSIw9Dx233bcrnD%2F%2FcWev0%2F6HuzhovTGATCoo4nDBjqkAbWp6TfuCC00zHmZQYmT%2BY397spMyVTzKCvNHCORTgbvzroNZ0IG4koZTVTua5F6ubkKWFcdkxKhvhZ3akYJ2RUrTZPMc7xQ1pCzhegWHDHl53%2B1FJ3KIll3rSuQpduy2j3xXQiH7rikUqqHq83ZVsi0%2FjJx4G7n7KOnFwfbNX%2BCg%2BzaoX%2Ba8kklHwtxMaxnXUynmI95709J20Mn2EewL6bQOFTj&X-Amz-Signature=e8f877a131d05d6ab005aecc6bf085360165a1c8effbe53f01c8faa1747e2cdb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
