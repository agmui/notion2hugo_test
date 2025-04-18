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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SBFOMBA%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T061214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDUsAam9stxSx8tO6x2FDJu7MH2y76EJuSCZBFIYaLh2QIgbsxj0xYM9BB10OCQ%2FZFhrzyr%2BTGoWke9L5lgPO7jts0q%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDLhzPIJHFG9eipRXgircAyq%2FtVNfoRQTH8Wr1jGqLfz5r6Hx3nmd1WsP55rs0Bson46U4viWNGgFkf8Tdp1CgFLyYXL59oH1t7yszZKLzxn9HjvGR5ebJej0Ar6Y3L%2Fv39m0EWB1y8kA6fciQI6wBcivmXCQUc7PNH9ZomRgPGsLEqHOB2O0IdKq%2BP%2BEZyjjtxYFVQ2UabhAdRnul0dH8giuxhUXNTW8w%2BP1xxxwo90xLpHUoeypHuCsZWbBHXJgzqHQfrSv6GBVQQ9Q7LPbe%2Fcr4fzn8sohclp0WhF9x3ul1KI6qPs6QLCSbgIdf21wKuI3GJdToW5EkxUyYchwKc5hVCvLzDl2aG%2BHbFAL3Dz%2FCMNs30iZaHyDMCSyJlsrPCzEl7DC3cG1BGYPrcq3WNBx6t2pw6icFtBUyY%2B9nsv6BCy4QrEFfpxZm2Yz7zFeJzqfj8W3Qa3Ntopn58EmvEiNr3RVXB59TFecRNOEtHk1aRnqxaVtAsx9aHcnjTgg3bzvb2L2jgEjQ4x2aOKvzTtGUHq0MqDVu%2FdNLLbByEnhgadgc8GDNg0g86S91JZxbj9ZzBsPQCGLxeNco7uj6Tiudq%2Fyms1mP6ThEhex3TOZqa6uanlDhYou0cDAkU41vGgT9B8A5VRViLg6MJ7Dh8AGOqUBUykEobnya%2FhvuvEckDEun4G9Pf5btRo07rcipy9dcL%2BI96B5nMIBR1Keut7tA3F%2F5lTlWiqfwuqHHhyzHwqpzO%2BWTqFr3mZFRqIZVAlrhXakFZmgZTi7KjGrdkHntw555HYjvkAU6NIZl9gmXuPxd7h6cSXf%2FuNx0V04PvJVO7rZ4EI3cjFYgIIy%2FrE6iLUbVvx8qRJe2QtZKTgFSc0Rv6tLCmrj&X-Amz-Signature=2efb90604e1de54a6dcf5f58634c730ccce44dcd5e9ef6bb0371395cd5467858&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SBFOMBA%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T061214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDUsAam9stxSx8tO6x2FDJu7MH2y76EJuSCZBFIYaLh2QIgbsxj0xYM9BB10OCQ%2FZFhrzyr%2BTGoWke9L5lgPO7jts0q%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDLhzPIJHFG9eipRXgircAyq%2FtVNfoRQTH8Wr1jGqLfz5r6Hx3nmd1WsP55rs0Bson46U4viWNGgFkf8Tdp1CgFLyYXL59oH1t7yszZKLzxn9HjvGR5ebJej0Ar6Y3L%2Fv39m0EWB1y8kA6fciQI6wBcivmXCQUc7PNH9ZomRgPGsLEqHOB2O0IdKq%2BP%2BEZyjjtxYFVQ2UabhAdRnul0dH8giuxhUXNTW8w%2BP1xxxwo90xLpHUoeypHuCsZWbBHXJgzqHQfrSv6GBVQQ9Q7LPbe%2Fcr4fzn8sohclp0WhF9x3ul1KI6qPs6QLCSbgIdf21wKuI3GJdToW5EkxUyYchwKc5hVCvLzDl2aG%2BHbFAL3Dz%2FCMNs30iZaHyDMCSyJlsrPCzEl7DC3cG1BGYPrcq3WNBx6t2pw6icFtBUyY%2B9nsv6BCy4QrEFfpxZm2Yz7zFeJzqfj8W3Qa3Ntopn58EmvEiNr3RVXB59TFecRNOEtHk1aRnqxaVtAsx9aHcnjTgg3bzvb2L2jgEjQ4x2aOKvzTtGUHq0MqDVu%2FdNLLbByEnhgadgc8GDNg0g86S91JZxbj9ZzBsPQCGLxeNco7uj6Tiudq%2Fyms1mP6ThEhex3TOZqa6uanlDhYou0cDAkU41vGgT9B8A5VRViLg6MJ7Dh8AGOqUBUykEobnya%2FhvuvEckDEun4G9Pf5btRo07rcipy9dcL%2BI96B5nMIBR1Keut7tA3F%2F5lTlWiqfwuqHHhyzHwqpzO%2BWTqFr3mZFRqIZVAlrhXakFZmgZTi7KjGrdkHntw555HYjvkAU6NIZl9gmXuPxd7h6cSXf%2FuNx0V04PvJVO7rZ4EI3cjFYgIIy%2FrE6iLUbVvx8qRJe2QtZKTgFSc0Rv6tLCmrj&X-Amz-Signature=64bff71e126eb78bdc63d2650df5d163a8d7daa42a6600504b017fb2b368e88b&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
