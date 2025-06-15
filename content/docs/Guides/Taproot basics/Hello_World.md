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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674DELIEA%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T190255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIB7DURFR1cKKBt%2BlIS7gYHl7EuyCL4KvvZNsGljtVuB5AiEA21xcYPisr2Ros3UaqaOnuDLomchcFHa5u17%2FdW4oKZ8q%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDJcAKXk95xztcv3moircA5W%2B83lYk1RGfaQwoG9806tpBUnogjPb5zN5ptnBKPHZ6t9v8Y1g%2FuaCbMYtiSs6upccbR13uShJO%2FkCrPJcNxYn1AzJ%2BC38z6eTH9EKG5YTihIV%2Fr0arh3HjS0qiSwl8G25DFvo%2F0i%2BbeP49u3wWLg8OHEmLcraI857Nlen7h2FEa%2FLkAgYz420uyY7UA72WqvCIGiJEfgMe6XPFivTMgfihBRHdSDAmZno4DkneiMVZQiMiwtGjBuaOuJ00nXImnXV99kyHVhWRSkVMgFrXu%2FBDEVhV3ch%2Fs3QSDzIQUDX2iN%2BgKmmNw%2BefWfqFqxCQX9wl7dviHHQK%2FfHf9qXWr9hxHNaRZFYM6O2UhelHP43DZUcPfWxhUojAO5JbBTV8WidwmwyaBflRcljIfLjAWby2uXh9WZIEdgijwb8lWezYBi7c5QQeDHUY4n5EUC76BgglG6ZfmmKMaOi%2FiBrnQo3tw8bDfh6gircDwFAf4JZn3FRGwFr03JMTPkMMH04Ok%2FyACJPL5gymxQyxqEQz21LfAd4a5%2B9QPqKRijHEwZAetkfEKbWT%2F%2FcU2DLEIUtcZ9KmdCktc71Z0w2s8lp4bc%2Fh8THJ7chojZus9mzw%2FRgCx%2FHZG30sBpcSqHhMMqnvMIGOqUB23lgL%2FNuJtMfjcrUNr%2BbYyCQsyiaMionatqVDDoLn2LAJ4O8wr6I7c%2BeNdM1PGfHNANAOmnQN5x%2Bav0zbKPh%2FFo%2Bb3r19cCC60ocYhqvl9r6GLuKbRJkh4YBJTYhb7WG0GRk1c0lkzgypES45s42exR90MwXBcXdaA1U54EqTlCc9zccnsZ02pTsoaBZ3RrJdVK6Y0AhVxy12w1SWZCiJvXKLuf1&X-Amz-Signature=92e2526d8e5c36d706b41a8d178066143552bc865d556ac5ada765c6f26269a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674DELIEA%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T190255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIB7DURFR1cKKBt%2BlIS7gYHl7EuyCL4KvvZNsGljtVuB5AiEA21xcYPisr2Ros3UaqaOnuDLomchcFHa5u17%2FdW4oKZ8q%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDJcAKXk95xztcv3moircA5W%2B83lYk1RGfaQwoG9806tpBUnogjPb5zN5ptnBKPHZ6t9v8Y1g%2FuaCbMYtiSs6upccbR13uShJO%2FkCrPJcNxYn1AzJ%2BC38z6eTH9EKG5YTihIV%2Fr0arh3HjS0qiSwl8G25DFvo%2F0i%2BbeP49u3wWLg8OHEmLcraI857Nlen7h2FEa%2FLkAgYz420uyY7UA72WqvCIGiJEfgMe6XPFivTMgfihBRHdSDAmZno4DkneiMVZQiMiwtGjBuaOuJ00nXImnXV99kyHVhWRSkVMgFrXu%2FBDEVhV3ch%2Fs3QSDzIQUDX2iN%2BgKmmNw%2BefWfqFqxCQX9wl7dviHHQK%2FfHf9qXWr9hxHNaRZFYM6O2UhelHP43DZUcPfWxhUojAO5JbBTV8WidwmwyaBflRcljIfLjAWby2uXh9WZIEdgijwb8lWezYBi7c5QQeDHUY4n5EUC76BgglG6ZfmmKMaOi%2FiBrnQo3tw8bDfh6gircDwFAf4JZn3FRGwFr03JMTPkMMH04Ok%2FyACJPL5gymxQyxqEQz21LfAd4a5%2B9QPqKRijHEwZAetkfEKbWT%2F%2FcU2DLEIUtcZ9KmdCktc71Z0w2s8lp4bc%2Fh8THJ7chojZus9mzw%2FRgCx%2FHZG30sBpcSqHhMMqnvMIGOqUB23lgL%2FNuJtMfjcrUNr%2BbYyCQsyiaMionatqVDDoLn2LAJ4O8wr6I7c%2BeNdM1PGfHNANAOmnQN5x%2Bav0zbKPh%2FFo%2Bb3r19cCC60ocYhqvl9r6GLuKbRJkh4YBJTYhb7WG0GRk1c0lkzgypES45s42exR90MwXBcXdaA1U54EqTlCc9zccnsZ02pTsoaBZ3RrJdVK6Y0AhVxy12w1SWZCiJvXKLuf1&X-Amz-Signature=0d0cc5fc06d12dc613d081dec2d87908ddb1004a656bffa5a14ddf70c70495ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
