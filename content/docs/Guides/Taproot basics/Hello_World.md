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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665A5JXBMM%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T070755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDvGM0Ra7pEKWjAapGJEC8OHCui6rS5Enk9SCO6NYZsUAiEAslCVqgYj8gTsNhz9XtT42eeI0Mnmtgwd4X7t1zGDijUqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLMXM29vnWVIWrsgsyrcAxeS0wi0%2BJ96TRAEcYS3Cv9nmnWRtBBNlrQ4ujdnPfBhlAsHf21Mct4oF1QjgNwAsXv2KwrZKygqEEKSS3wTkwe5Fb5a5P3QkxTQiIrjQGJLtGLop48492r3mI9mgBzj39Kb%2BFFk00cAxAPEVgaTyT8%2BxnaTw2qoFDcq7hencXoGI%2ByxeqOGEH9pfpJvu9Z3K%2BVAFoD7Z%2FIPW27qIe0Er3U9fitc%2B5ClSYJUGXV%2FkmqiM2eNGqZZ29cHT9J2wXAR%2BY46djQzjwvocepOGEWOqP5QpRvDFa9PHjqhRjpfnF9skSEev01191CBQv%2FZYoyQEMP0mBEUfFMopqSzyr%2FNfx3tXuoVF4PdHVxFuky4A2T6XQHeCrM4j4UNfisdWeDZEV7vwrmAhYUo7zvngqFvXvWlJ0g0bhAKPhql5FRaFClqd18gDetIE76eHq5zw0LXIkoK36svsMGO06Ig%2Bh2X2h%2BYY9BPISkCKmbx5osugpWQd6iAGDPqwqjuF31iAFRSjCGlz%2FLfikoD3EpIpOsX4U84der%2BFx9gXgFXvjr97MSbtJDrSzE2Tf1h2GgMjPuyaV%2FPrcNEAX%2Bko33vjYsQsBDQfEagMnDIdTJFxlD%2B4e%2Fb8cZ2qQ6wEhWAc3OVMLWz6sEGOqUB6q27gZ%2FJmtZQr7JWOin%2BevDahcwQvgGoRAcb%2F0P417S4mccn7p64gklC7oBXUznShmAo9NOrsj%2FNcIfJfIoPutyhQg%2FwC%2FIQO7%2FdN%2F%2FzLNGT4ExqaWGeFUmFBpVKjCwoEqE%2Btkkqs3sB8Wdq8Z9dqBioLkjP0dzGxnXHoe3A92bteVKQMOEDYHEFeYaruk09w6RRiNj7dmuqVFS1xo2fOwUU9RTI&X-Amz-Signature=d9fed246d6dac73080172a660f52f1d9da061878eb6911a767768dfbe89d14a2&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665A5JXBMM%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T070755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDvGM0Ra7pEKWjAapGJEC8OHCui6rS5Enk9SCO6NYZsUAiEAslCVqgYj8gTsNhz9XtT42eeI0Mnmtgwd4X7t1zGDijUqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLMXM29vnWVIWrsgsyrcAxeS0wi0%2BJ96TRAEcYS3Cv9nmnWRtBBNlrQ4ujdnPfBhlAsHf21Mct4oF1QjgNwAsXv2KwrZKygqEEKSS3wTkwe5Fb5a5P3QkxTQiIrjQGJLtGLop48492r3mI9mgBzj39Kb%2BFFk00cAxAPEVgaTyT8%2BxnaTw2qoFDcq7hencXoGI%2ByxeqOGEH9pfpJvu9Z3K%2BVAFoD7Z%2FIPW27qIe0Er3U9fitc%2B5ClSYJUGXV%2FkmqiM2eNGqZZ29cHT9J2wXAR%2BY46djQzjwvocepOGEWOqP5QpRvDFa9PHjqhRjpfnF9skSEev01191CBQv%2FZYoyQEMP0mBEUfFMopqSzyr%2FNfx3tXuoVF4PdHVxFuky4A2T6XQHeCrM4j4UNfisdWeDZEV7vwrmAhYUo7zvngqFvXvWlJ0g0bhAKPhql5FRaFClqd18gDetIE76eHq5zw0LXIkoK36svsMGO06Ig%2Bh2X2h%2BYY9BPISkCKmbx5osugpWQd6iAGDPqwqjuF31iAFRSjCGlz%2FLfikoD3EpIpOsX4U84der%2BFx9gXgFXvjr97MSbtJDrSzE2Tf1h2GgMjPuyaV%2FPrcNEAX%2Bko33vjYsQsBDQfEagMnDIdTJFxlD%2B4e%2Fb8cZ2qQ6wEhWAc3OVMLWz6sEGOqUB6q27gZ%2FJmtZQr7JWOin%2BevDahcwQvgGoRAcb%2F0P417S4mccn7p64gklC7oBXUznShmAo9NOrsj%2FNcIfJfIoPutyhQg%2FwC%2FIQO7%2FdN%2F%2FzLNGT4ExqaWGeFUmFBpVKjCwoEqE%2Btkkqs3sB8Wdq8Z9dqBioLkjP0dzGxnXHoe3A92bteVKQMOEDYHEFeYaruk09w6RRiNj7dmuqVFS1xo2fOwUU9RTI&X-Amz-Signature=b8e91b84da8ca70c94b76a23e8aa67f0b116077a1dc2a596492024ea97e77d5e&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
