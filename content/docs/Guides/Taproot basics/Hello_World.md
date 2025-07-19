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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDJS6ZXD%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T190052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFQfQuoju1VzapGHzxtMvIL9A%2Fv5ROx8RMqGphrAoNNHAiBmA7tF7a3tk4bfO4KhqybVGiJCtIOWJL981zi%2BhFzRpCqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfgrna9CkXZlsijw8KtwDJh6CWRvpmjnBm1uQbhyMZK%2BUdZlXrF3U%2Fkg8vJrYLf367FD%2BljhOW%2FTXi7DtJJ6RX9aB5byBukvId22hSu2o85bpLtVNEofVnnqi0ItNUx4gbtVi2UlObGHYvLSjY9VkxOjqHH8JQpwItTSK2XKD8BhKHO9VT7W%2BfgOvqpNwHjw2dby327Xta0cQFqniPCYwxHTIqtDm47FefBx73rJSov9m%2FfJA76T463PSuhIEUlfvRVOdnmHgGEJ%2FD%2BvVIURlei8DP5BfYGQEf0KwSHnc9TmH%2FSkQG3acJqp4x9burBeHTVEptd8EOHzwv5YNxCYbLVZmd6HlsAKho%2F%2BPhwQTHPDeYlAQvbAE3oeQGFLHrAcujKO%2BP5pHqAi%2BjNeHPGfAS5%2FcLUkAGwYsTCIikdvGGVZfoUhG2BmEogkzRDILWc%2FBAjM9zofmYtDodF8cRd%2FwV77Jxjs%2BovgfIUEBnuTTsLhgEHM8FlHGeOutQ0DOPeGyJD1sP8lYTT6ZxRmbporZ1XNr5d4FgPotcFRVY9xkhaWf57sZA3Lt6%2F%2BL4UnrAYpd4AuMgZPwqW5SgVOfL%2F%2F68n9855Nz74iHRaeo4FypuCOTyla2A0hf7gY7PSWkznqKevKPJfc4T8KvOfAw1LjuwwY6pgG0Ru2mqlqofqsJBPT8QtgVgaRsmauWVFoGsWc79YKet6MtO77S68aZ1XdOrsXKgbDc2oK8K%2FwIb8mI1UbeA64yr1ea9atLguh%2Fm4294sSv%2FN%2FzjL3vIuDH%2Fha1NpwMj%2Bz1LXcY9sSyzvO3qTEQobgFTI90Q7%2BJbJruDb7VJWAUaxWSAiadx5zC1wemjkC4YkiUiiPWa3FOMQ9cnaIF4K2bV4M96UlQ&X-Amz-Signature=49720bda815485dd760828c2f649afbbc7d2f7bc6d0bab038a70534491ccf939&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDJS6ZXD%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T190052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFQfQuoju1VzapGHzxtMvIL9A%2Fv5ROx8RMqGphrAoNNHAiBmA7tF7a3tk4bfO4KhqybVGiJCtIOWJL981zi%2BhFzRpCqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfgrna9CkXZlsijw8KtwDJh6CWRvpmjnBm1uQbhyMZK%2BUdZlXrF3U%2Fkg8vJrYLf367FD%2BljhOW%2FTXi7DtJJ6RX9aB5byBukvId22hSu2o85bpLtVNEofVnnqi0ItNUx4gbtVi2UlObGHYvLSjY9VkxOjqHH8JQpwItTSK2XKD8BhKHO9VT7W%2BfgOvqpNwHjw2dby327Xta0cQFqniPCYwxHTIqtDm47FefBx73rJSov9m%2FfJA76T463PSuhIEUlfvRVOdnmHgGEJ%2FD%2BvVIURlei8DP5BfYGQEf0KwSHnc9TmH%2FSkQG3acJqp4x9burBeHTVEptd8EOHzwv5YNxCYbLVZmd6HlsAKho%2F%2BPhwQTHPDeYlAQvbAE3oeQGFLHrAcujKO%2BP5pHqAi%2BjNeHPGfAS5%2FcLUkAGwYsTCIikdvGGVZfoUhG2BmEogkzRDILWc%2FBAjM9zofmYtDodF8cRd%2FwV77Jxjs%2BovgfIUEBnuTTsLhgEHM8FlHGeOutQ0DOPeGyJD1sP8lYTT6ZxRmbporZ1XNr5d4FgPotcFRVY9xkhaWf57sZA3Lt6%2F%2BL4UnrAYpd4AuMgZPwqW5SgVOfL%2F%2F68n9855Nz74iHRaeo4FypuCOTyla2A0hf7gY7PSWkznqKevKPJfc4T8KvOfAw1LjuwwY6pgG0Ru2mqlqofqsJBPT8QtgVgaRsmauWVFoGsWc79YKet6MtO77S68aZ1XdOrsXKgbDc2oK8K%2FwIb8mI1UbeA64yr1ea9atLguh%2Fm4294sSv%2FN%2FzjL3vIuDH%2Fha1NpwMj%2Bz1LXcY9sSyzvO3qTEQobgFTI90Q7%2BJbJruDb7VJWAUaxWSAiadx5zC1wemjkC4YkiUiiPWa3FOMQ9cnaIF4K2bV4M96UlQ&X-Amz-Signature=8a2757901abcd073ea4b4d7628789bd19f6c2c74ae976803ae7dec1dced6c54c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
