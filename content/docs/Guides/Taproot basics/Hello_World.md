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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIOXT7VA%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T170637Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIQDkzis9EQgFfnBggxK6a5%2FHUhkDC1wjF8GYnTSYfumHyQIgCSpUiSDup%2BN6Sxl8zie6%2FoMBBf%2Ff8Bqln0gnS5pULh0q%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDM5XPiWjut8UwiE9UyrcA%2FPzNciNki7%2F6W%2FDiZJbKTtp7qOLe0y5c3jjEDayLmPRnmAF6L768eEQV%2FJ%2Bnu%2FQ%2BzYt1ijbhS3kiDHXI9zOPmJhk0fI5fuGOBiMyqJwm26%2FQInD%2FzYYbmqxqEzxpt0DK5ZFcs61ar3zw3R4erJIR0oR6oHEdNR1HFxtgbOwD6%2BpjF4XZgvRRNzjp4k%2FHtQsh%2FE3%2BpIw0Eo8N445eb8MzCnlPHNh0HSNkzj3XM3aBjzieo22s8ohYHUjGZi%2BemyfsahNT7SE%2FEt2Jb5stjdwEChRRWSATSNbybEgHX0x7dxm9P36sp%2Bx9%2F8owRyeMLCACx80zDGXTOImGxpxFsKVgl3wCyRWbQW5FKp993DWQqphg5WXdDNnqu1ChZQbswUCOM1RC%2B4EeMt8uedrOszLSvQIl2MFWuN1GHhKvez8JjHy3iWwsi7vllJvncFuHTjynU7wNKdJKLLk8iQVbmst%2F2vR9VOJC4t9%2BJw%2FBNGaQiPVB9UL6D8zycIyfClh6e%2BlNgJRciY5xNq9cynsXaePs2HnC4Het%2F9OC%2BjsHj%2FiFUkIWEjj%2BS3%2BpzgspUPoegeoEMD71a9XUXgOmoCByXzm%2FTgANoR%2B1ZKkUP8DAvigXY9wGWCZ92UfIqHI5t5iMMO7tsIGOqUB%2FFmHaaFVsx4lywlc1TpdI%2F2XHxBHWeEbHdh8hE0IkS8RqWxqvDKU6GLFYHDtygaGLn1XokZ12iQPwDbyAEm9bBDbIkd3pdw0dUkSGgZaOLPnA1RQ%2FqYFfuvIlTdZ2c62Ej%2BCaYAHr8WipWzLNvv8iu8XJcoa9nvDXFLr2gbRQX%2F66wQ4wAYUQZUe3B%2FPjSd%2BbOUpNbsPIPVEAnIEC48w3v8Uefeo&X-Amz-Signature=6d28c8932d7580e432698fe03c195e5c2b39cc56a874b6afdea1d609832720d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIOXT7VA%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T170637Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIQDkzis9EQgFfnBggxK6a5%2FHUhkDC1wjF8GYnTSYfumHyQIgCSpUiSDup%2BN6Sxl8zie6%2FoMBBf%2Ff8Bqln0gnS5pULh0q%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDM5XPiWjut8UwiE9UyrcA%2FPzNciNki7%2F6W%2FDiZJbKTtp7qOLe0y5c3jjEDayLmPRnmAF6L768eEQV%2FJ%2Bnu%2FQ%2BzYt1ijbhS3kiDHXI9zOPmJhk0fI5fuGOBiMyqJwm26%2FQInD%2FzYYbmqxqEzxpt0DK5ZFcs61ar3zw3R4erJIR0oR6oHEdNR1HFxtgbOwD6%2BpjF4XZgvRRNzjp4k%2FHtQsh%2FE3%2BpIw0Eo8N445eb8MzCnlPHNh0HSNkzj3XM3aBjzieo22s8ohYHUjGZi%2BemyfsahNT7SE%2FEt2Jb5stjdwEChRRWSATSNbybEgHX0x7dxm9P36sp%2Bx9%2F8owRyeMLCACx80zDGXTOImGxpxFsKVgl3wCyRWbQW5FKp993DWQqphg5WXdDNnqu1ChZQbswUCOM1RC%2B4EeMt8uedrOszLSvQIl2MFWuN1GHhKvez8JjHy3iWwsi7vllJvncFuHTjynU7wNKdJKLLk8iQVbmst%2F2vR9VOJC4t9%2BJw%2FBNGaQiPVB9UL6D8zycIyfClh6e%2BlNgJRciY5xNq9cynsXaePs2HnC4Het%2F9OC%2BjsHj%2FiFUkIWEjj%2BS3%2BpzgspUPoegeoEMD71a9XUXgOmoCByXzm%2FTgANoR%2B1ZKkUP8DAvigXY9wGWCZ92UfIqHI5t5iMMO7tsIGOqUB%2FFmHaaFVsx4lywlc1TpdI%2F2XHxBHWeEbHdh8hE0IkS8RqWxqvDKU6GLFYHDtygaGLn1XokZ12iQPwDbyAEm9bBDbIkd3pdw0dUkSGgZaOLPnA1RQ%2FqYFfuvIlTdZ2c62Ej%2BCaYAHr8WipWzLNvv8iu8XJcoa9nvDXFLr2gbRQX%2F66wQ4wAYUQZUe3B%2FPjSd%2BbOUpNbsPIPVEAnIEC48w3v8Uefeo&X-Amz-Signature=6ca9a9aafe156f65a1b30eb52379fd653158b2eae1e971369bc3926917e90bce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
