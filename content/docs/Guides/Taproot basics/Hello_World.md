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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDYI6UWX%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T110107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJIMEYCIQCavFQUDYODDB2ec6ICjmOkyeasENUUBW6H3xhEgD%2FRRAIhAInsAK%2FX4QYH%2FksQuxhWR%2BQCo9YoQGOgHljGXh4JzHJEKv8DCCsQABoMNjM3NDIzMTgzODA1Igxzou9nc7%2BK1Bl8ASYq3APqKwVm4CHvzhEAzN4t5HLNcTEbb%2BXpk13CFj9n9EzS81qSjICHXnQh1pBg3pJnXMxQlDSYn1MZ6E7PWQiC5ZyZLR9eTe6Iy7XUtyakgYNh6Tqy1PqtSYSODKS3Lr3%2FZEDdi185KWnHQeKDIDaICYf4%2BKq1Q%2FkL5CH6S1U0FyvJAgNCPt7JD5DnFD8x3TKh9W08JyaqJACojUjc2Fc7olxwMEpLuhks65%2FsPs09UTdsLsVHYSYr1ZNKwsBFaWUq9y7M0Ez2IiwUiyJ7BZXElfE%2FhWAdlaWX7GeKRQvFfvKTAC%2FforpQy7OJyS1EGoiNDvW61v3AUdkJwEtJmYQS44NFkXIYACxqC%2BnBxN%2BhxKmUdhFZm%2BcJPOFukjHKjUeZIwPh2ZUZWKzoFQ62rzNkicdnvyga8LYakHq0p0EHZSUroxHOG67EL3fS6ZB6v%2B%2Fus4MtyN9H8ANTH%2FKlvLiRIjT5cb%2BydgaN%2Fslzi8mas2ys5ffOVaHFg1yDp4R6pglF2dCTNg6JIsW5qmwUoi6lVOkzwDfE9iPAc%2FUHk%2BB910OyuzVTRcbFQBfvLmFq4MHd7XqCkrPUPWkVjC%2FysnPufrG68IPbki9bceKRKT%2Fnw75h1aaoFBmqzsPGHpCbxTDjsby9BjqkAXmsyubdsRcveSaPD2qwCf%2BmASezjaZSOsDe3J1or52yUAirnVWp82Hue7jLq56SavlC8oAenzeE0jzOyeQTAowAc66ARt2QCJM66wTIlQixXDH9qbUnExfDNro1F8YrL6CG4mxzNAKGtj1udfakgE%2F6EK%2BAcWQxevTgnCYaq%2FnTDe2oH%2F9bBfcVoCt0crUtPMUacNezU%2BleioEHxizsG1aj2yBt&X-Amz-Signature=7671f15f525bd6889ee2f611c59512f3c878d0a13e0602ee31b3e5c04e792b0e&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDYI6UWX%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T110107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJIMEYCIQCavFQUDYODDB2ec6ICjmOkyeasENUUBW6H3xhEgD%2FRRAIhAInsAK%2FX4QYH%2FksQuxhWR%2BQCo9YoQGOgHljGXh4JzHJEKv8DCCsQABoMNjM3NDIzMTgzODA1Igxzou9nc7%2BK1Bl8ASYq3APqKwVm4CHvzhEAzN4t5HLNcTEbb%2BXpk13CFj9n9EzS81qSjICHXnQh1pBg3pJnXMxQlDSYn1MZ6E7PWQiC5ZyZLR9eTe6Iy7XUtyakgYNh6Tqy1PqtSYSODKS3Lr3%2FZEDdi185KWnHQeKDIDaICYf4%2BKq1Q%2FkL5CH6S1U0FyvJAgNCPt7JD5DnFD8x3TKh9W08JyaqJACojUjc2Fc7olxwMEpLuhks65%2FsPs09UTdsLsVHYSYr1ZNKwsBFaWUq9y7M0Ez2IiwUiyJ7BZXElfE%2FhWAdlaWX7GeKRQvFfvKTAC%2FforpQy7OJyS1EGoiNDvW61v3AUdkJwEtJmYQS44NFkXIYACxqC%2BnBxN%2BhxKmUdhFZm%2BcJPOFukjHKjUeZIwPh2ZUZWKzoFQ62rzNkicdnvyga8LYakHq0p0EHZSUroxHOG67EL3fS6ZB6v%2B%2Fus4MtyN9H8ANTH%2FKlvLiRIjT5cb%2BydgaN%2Fslzi8mas2ys5ffOVaHFg1yDp4R6pglF2dCTNg6JIsW5qmwUoi6lVOkzwDfE9iPAc%2FUHk%2BB910OyuzVTRcbFQBfvLmFq4MHd7XqCkrPUPWkVjC%2FysnPufrG68IPbki9bceKRKT%2Fnw75h1aaoFBmqzsPGHpCbxTDjsby9BjqkAXmsyubdsRcveSaPD2qwCf%2BmASezjaZSOsDe3J1or52yUAirnVWp82Hue7jLq56SavlC8oAenzeE0jzOyeQTAowAc66ARt2QCJM66wTIlQixXDH9qbUnExfDNro1F8YrL6CG4mxzNAKGtj1udfakgE%2F6EK%2BAcWQxevTgnCYaq%2FnTDe2oH%2F9bBfcVoCt0crUtPMUacNezU%2BleioEHxizsG1aj2yBt&X-Amz-Signature=3eed5a85f51ed10962110f2dbe2e7022f70c25770c1c30c99b37292983992ee1&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
