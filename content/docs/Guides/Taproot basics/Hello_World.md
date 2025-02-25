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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TO63N35S%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T170803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQCZwkRtDUeQYr0DQDWT%2FizI7zAhfOqni59Jj6GPZRS8dQIgMNnEMDNieGVxt2X40QtnaMK0s%2Bz4TDco8IJuM1rYHB4q%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDPOgs8tQ94H%2BUOrEmyrcA6Rg2JEfajUhl%2B1C15Af3lLBE7wEYGHsMU4j9QgAEcJrZuuiVBgjqeHAxqPvOjL64qDaw9aPjrHerc44NsHsA6BjJLbKAQvZcOgAc32wwG%2B6lHIBgWTaGQgamqPxiLhcE9JMGoSNRJkMx9TMqdXbydAjoR5JAKUTfqTXNRmZG%2BV80dniIbW%2FyH92HwhXjawyAXrTH7byK66PQVqBH7KHbaJJR%2F9fnN6FtECA3kFW9xHVbcZHHTjCuNQ5S0e%2FEFztrvOe%2FvAe9usTJkD3wQk98%2BQ5ThTI5Zk14EOlp%2FDndPWR%2FKlbDAP16u5HliUvOvkWZ7ywpvaBAdiWmNJl69ixXX4aWQdwAcV4oGpP58tRKdodG5B%2FPT0aWjK%2BB4c3DDStEOrz1JKXjQmwKVpmJMNDud38%2FNFVfSbQzah4IrRzU%2F7QaPv8OlNYZhGtGtROWjW9ZkiLJ053PM%2BUN7uVj%2Fv8HSn9B%2F6hdoRBX9q9PoXp%2FVXS%2FTtMX5j6Xw1gCOmJiWYUAYBQ5MQnpgXtmwsf6mZmrwHmYnsSYEJ%2B%2BS3HeG3IMfhxZauJdEBJhScI%2FutMj%2BX0a7T%2BJmyTwszUz7eFOGnQ1cq2Zx0QYoJAiemMnjU3ylGYYnkuCRY63r5D%2FalWMOvu970GOqUBB%2BzTEaLgKW%2FD3otnfmTlikEpDLoQ%2Fq0WbBPRRI1Wfft3pNngHXBVcGYNamXQoGFXG2AZF75JB%2B2FCQpK6zbMJx9ufTb70c%2Fz76QnwHUxCvMaNXXUlPRRPQCF%2FTNw3BRIjibjSIZPVxBhieIK%2F05XAWzVZ%2BUzfO%2FJyENMmWGksCUJ4pGy%2F85om9ZPpY5xmxvZSxO5fVjR2NQeOEpEdXzWO%2B6hswIJ&X-Amz-Signature=109d97877a4150394b92788f8701a54e49288aa8535c57402da3c7d180c706d5&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TO63N35S%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T170803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQCZwkRtDUeQYr0DQDWT%2FizI7zAhfOqni59Jj6GPZRS8dQIgMNnEMDNieGVxt2X40QtnaMK0s%2Bz4TDco8IJuM1rYHB4q%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDPOgs8tQ94H%2BUOrEmyrcA6Rg2JEfajUhl%2B1C15Af3lLBE7wEYGHsMU4j9QgAEcJrZuuiVBgjqeHAxqPvOjL64qDaw9aPjrHerc44NsHsA6BjJLbKAQvZcOgAc32wwG%2B6lHIBgWTaGQgamqPxiLhcE9JMGoSNRJkMx9TMqdXbydAjoR5JAKUTfqTXNRmZG%2BV80dniIbW%2FyH92HwhXjawyAXrTH7byK66PQVqBH7KHbaJJR%2F9fnN6FtECA3kFW9xHVbcZHHTjCuNQ5S0e%2FEFztrvOe%2FvAe9usTJkD3wQk98%2BQ5ThTI5Zk14EOlp%2FDndPWR%2FKlbDAP16u5HliUvOvkWZ7ywpvaBAdiWmNJl69ixXX4aWQdwAcV4oGpP58tRKdodG5B%2FPT0aWjK%2BB4c3DDStEOrz1JKXjQmwKVpmJMNDud38%2FNFVfSbQzah4IrRzU%2F7QaPv8OlNYZhGtGtROWjW9ZkiLJ053PM%2BUN7uVj%2Fv8HSn9B%2F6hdoRBX9q9PoXp%2FVXS%2FTtMX5j6Xw1gCOmJiWYUAYBQ5MQnpgXtmwsf6mZmrwHmYnsSYEJ%2B%2BS3HeG3IMfhxZauJdEBJhScI%2FutMj%2BX0a7T%2BJmyTwszUz7eFOGnQ1cq2Zx0QYoJAiemMnjU3ylGYYnkuCRY63r5D%2FalWMOvu970GOqUBB%2BzTEaLgKW%2FD3otnfmTlikEpDLoQ%2Fq0WbBPRRI1Wfft3pNngHXBVcGYNamXQoGFXG2AZF75JB%2B2FCQpK6zbMJx9ufTb70c%2Fz76QnwHUxCvMaNXXUlPRRPQCF%2FTNw3BRIjibjSIZPVxBhieIK%2F05XAWzVZ%2BUzfO%2FJyENMmWGksCUJ4pGy%2F85om9ZPpY5xmxvZSxO5fVjR2NQeOEpEdXzWO%2B6hswIJ&X-Amz-Signature=b23bc9b5c51d4aad42468f94c69719054f648ae738ddc5dbcafbcc97b76df9f2&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
