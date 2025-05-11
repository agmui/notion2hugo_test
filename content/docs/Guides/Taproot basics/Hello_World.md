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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XW7V2R5O%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T070757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJHMEUCIQDBZSSpOIt%2FaEGzlOzgmeshwPrZva0fNiZY8%2FhFP2OIMAIgaOkvqGqbEpnuB6q5LMcCRGU9%2FGPJQaJesPw%2B5Pe4MpMqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD6PQ60TUwfsd6YepircA2EyHJuTWSWmdywFs7c%2FOtbnE0cAe3%2F1yGYC59EeBNwD4iTWUjPHQqBfopmWmnFDAede5RpC%2Bbfl8SXK77BQsD2ayjW5Q8Rs83dUBjFTK4OgdJXNjO0I529cQFFHysGSb3GucpPRo%2FpxBbD3A7xHC%2F%2BKst7CVEEk3aDd16IP4%2FoI8ZwYRQR2sgofvvUrZLCoOgsGdbKx20hI7OtAYVq%2BiXwrPRA1BIYAfyRYPiPC%2BImv%2FmLAGh1vXYPUDHf4SrELmBepHnpY7qXGZW5jqcWWy%2Fi3TjPkSjGUrRCQWkrxg3d0VQBpXmZnAUrkYPmM0R4GfKk%2Fk0eJdqUo3mC6mNou6jQry%2FOM4NnfHhjalupMP3UQA7IAtgPRcYqL61UtDWa3kPzFxE8jsQLZtfiRmRcSwS5NSsFq3MHPC1AS6FvuqlHpKqptGgoXLqoRVxpuFeGTq4iPdqfcHlNi4tBJATS9Xh0h%2FdV5%2FpHvrhFueibr8EEq3AxScRj4IxvhmEwFTk%2FhTpE2xmdP38lxV%2FZYbwuhnoItdckm%2BjuwJO5FVY%2FC1080UAR47wksl8Vw3Po9rU%2FTRzlSYNDwtnGQZsbvQ5gAZcwC8tOuqTvE0gVZ9eeD4yEbD9cXv47OyY1R79jCMJCJgcEGOqUBO6KP571WXFSJyKOCm%2FLgBVyfMT0fkaswJbDuAsHEdyKj0rZ%2BdTA5j0QnSNDpSCqAaSxDxIRnl5KRPZkY3fmWQub4jYhBqL8gHhiyOQTm6cs5f%2BUVLbVWzmpZEH2XD64VPDVPDO5KbIJLEAlWs4jKxTx%2BN95WpALcwVNOe7ecnc0%2BRPijtLJyDVmqdyJ2Gz4gEHkErQOZN0kQF05ESPGV9GAW7kuO&X-Amz-Signature=0aa4f915c7493cb87482728bcc81ddb1741d3ba44eab667f6b59d9526185b69c&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XW7V2R5O%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T070757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJHMEUCIQDBZSSpOIt%2FaEGzlOzgmeshwPrZva0fNiZY8%2FhFP2OIMAIgaOkvqGqbEpnuB6q5LMcCRGU9%2FGPJQaJesPw%2B5Pe4MpMqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD6PQ60TUwfsd6YepircA2EyHJuTWSWmdywFs7c%2FOtbnE0cAe3%2F1yGYC59EeBNwD4iTWUjPHQqBfopmWmnFDAede5RpC%2Bbfl8SXK77BQsD2ayjW5Q8Rs83dUBjFTK4OgdJXNjO0I529cQFFHysGSb3GucpPRo%2FpxBbD3A7xHC%2F%2BKst7CVEEk3aDd16IP4%2FoI8ZwYRQR2sgofvvUrZLCoOgsGdbKx20hI7OtAYVq%2BiXwrPRA1BIYAfyRYPiPC%2BImv%2FmLAGh1vXYPUDHf4SrELmBepHnpY7qXGZW5jqcWWy%2Fi3TjPkSjGUrRCQWkrxg3d0VQBpXmZnAUrkYPmM0R4GfKk%2Fk0eJdqUo3mC6mNou6jQry%2FOM4NnfHhjalupMP3UQA7IAtgPRcYqL61UtDWa3kPzFxE8jsQLZtfiRmRcSwS5NSsFq3MHPC1AS6FvuqlHpKqptGgoXLqoRVxpuFeGTq4iPdqfcHlNi4tBJATS9Xh0h%2FdV5%2FpHvrhFueibr8EEq3AxScRj4IxvhmEwFTk%2FhTpE2xmdP38lxV%2FZYbwuhnoItdckm%2BjuwJO5FVY%2FC1080UAR47wksl8Vw3Po9rU%2FTRzlSYNDwtnGQZsbvQ5gAZcwC8tOuqTvE0gVZ9eeD4yEbD9cXv47OyY1R79jCMJCJgcEGOqUBO6KP571WXFSJyKOCm%2FLgBVyfMT0fkaswJbDuAsHEdyKj0rZ%2BdTA5j0QnSNDpSCqAaSxDxIRnl5KRPZkY3fmWQub4jYhBqL8gHhiyOQTm6cs5f%2BUVLbVWzmpZEH2XD64VPDVPDO5KbIJLEAlWs4jKxTx%2BN95WpALcwVNOe7ecnc0%2BRPijtLJyDVmqdyJ2Gz4gEHkErQOZN0kQF05ESPGV9GAW7kuO&X-Amz-Signature=769eae504a0a61204172f1c40b6af0255fb1edea9d0305f67604b23382a69ca1&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
