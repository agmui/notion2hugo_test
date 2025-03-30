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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSZ4HOAP%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T121258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCICdfqVHP3aAIrDxyE0Xl%2BgX%2FUUkDH3IzhQSoycVuZauUAiEAlPcjoWXkjP4OQX8MHvn3s%2FHE7ATCIAVbiXc70j6w0GEqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI%2FE42OVMU%2BIdRq7USrcAzdhhrX1GBE7C7HdJfGSWYzOjUnJgSO5uh1hCXUYLyfWv%2BFkyrs4SLCUKCm%2FyrnnCr%2FHWk6pZ8hJsWioI%2B4vIs1iqT0YikV72FPVl%2FBPJHnNVQwEWmLDmgZmWWquHvYVoBf3FX53aoaNxfuCwYd5JpTYG6Y7Z9%2FZ8Kprlzf6qxM3PsAyFbV3KfGN8JjR0CzDQZh%2B1xCTZ8izJvH7uuARoHS4RBYSX7TvtKMj0nBdnvUx09JojgnaL6G7%2FJqjomBZO434B0pEhk%2BQjEF50NIybwBJuxJEwwFSqfvSkhUf8iiSWwC4jgQpBpLs8Fx4alI6uoNYrLv3S6lvV3NBxmxpTa%2FZ7TENrQs%2FL9nlJBIZ%2BNHVYBx%2FFptWBNgoIOYjIOj%2FBvhyuby4L3ujROgIl8TLO%2F%2BRSoXv976c0xMbmC513Bk8auLeFSNydBWIROGHswM%2FtpeCpdEy8hABhZ9bG9KQRcAc0vYSF%2BT9jrMoT%2ByQl96caF%2BXCrR%2FOyTDWhCX0wNp2krcr84uys7Jq7ccPZ2ZIgOVylGZpfpzFWd1ZfdfrNhHHNXloJ6Hs225G6OGS8Vj%2BdX08by%2BrFtOPn2%2BGzx73KBkyzARg6k7WcNSF62T5W1UQ8Z6E9ZKWUhLvVKTMIPwo78GOqUB1q2pkhhEdTRx3sjthL8eo1o3igjfqXcYGl0fuXeCV9rf%2F7lG4pYTUBeI5sS12CDaukDBjozPyxmppsuI5dim2OX1WariHQdAPfOLy1yXnRoUc9hJFHDUx8KkyQ4K5rDqOGgYVxrezBLhNrBeud25pLZoDQHj3ctfVovduVOcmf2noKrBKbs%2FBoSqnzdIHlwPDlW9Eac0sRVSN%2BsnnZzaYdC4F4dE&X-Amz-Signature=e10086272ccec54c1f8870bb61a7ede6351f6409010aebeb4e54bb2a67756526&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSZ4HOAP%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T121258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCICdfqVHP3aAIrDxyE0Xl%2BgX%2FUUkDH3IzhQSoycVuZauUAiEAlPcjoWXkjP4OQX8MHvn3s%2FHE7ATCIAVbiXc70j6w0GEqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI%2FE42OVMU%2BIdRq7USrcAzdhhrX1GBE7C7HdJfGSWYzOjUnJgSO5uh1hCXUYLyfWv%2BFkyrs4SLCUKCm%2FyrnnCr%2FHWk6pZ8hJsWioI%2B4vIs1iqT0YikV72FPVl%2FBPJHnNVQwEWmLDmgZmWWquHvYVoBf3FX53aoaNxfuCwYd5JpTYG6Y7Z9%2FZ8Kprlzf6qxM3PsAyFbV3KfGN8JjR0CzDQZh%2B1xCTZ8izJvH7uuARoHS4RBYSX7TvtKMj0nBdnvUx09JojgnaL6G7%2FJqjomBZO434B0pEhk%2BQjEF50NIybwBJuxJEwwFSqfvSkhUf8iiSWwC4jgQpBpLs8Fx4alI6uoNYrLv3S6lvV3NBxmxpTa%2FZ7TENrQs%2FL9nlJBIZ%2BNHVYBx%2FFptWBNgoIOYjIOj%2FBvhyuby4L3ujROgIl8TLO%2F%2BRSoXv976c0xMbmC513Bk8auLeFSNydBWIROGHswM%2FtpeCpdEy8hABhZ9bG9KQRcAc0vYSF%2BT9jrMoT%2ByQl96caF%2BXCrR%2FOyTDWhCX0wNp2krcr84uys7Jq7ccPZ2ZIgOVylGZpfpzFWd1ZfdfrNhHHNXloJ6Hs225G6OGS8Vj%2BdX08by%2BrFtOPn2%2BGzx73KBkyzARg6k7WcNSF62T5W1UQ8Z6E9ZKWUhLvVKTMIPwo78GOqUB1q2pkhhEdTRx3sjthL8eo1o3igjfqXcYGl0fuXeCV9rf%2F7lG4pYTUBeI5sS12CDaukDBjozPyxmppsuI5dim2OX1WariHQdAPfOLy1yXnRoUc9hJFHDUx8KkyQ4K5rDqOGgYVxrezBLhNrBeud25pLZoDQHj3ctfVovduVOcmf2noKrBKbs%2FBoSqnzdIHlwPDlW9Eac0sRVSN%2BsnnZzaYdC4F4dE&X-Amz-Signature=6b2dba21d4e7028f187cfe91384e1ea38ff1a94c3b4e59fe93aeafdb17e8a8b9&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
