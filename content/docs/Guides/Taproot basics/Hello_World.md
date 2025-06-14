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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VLAMODS%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T022627Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJIMEYCIQCvLc9dcv7A1KBjQJJhSxvp%2Bq2Rtj9cNDvjxs2YJU5kFQIhAL%2FeOCkG4weSqKpnwaWtTUTs%2B96ceqJIf1K1IfJBtQyPKv8DCCIQABoMNjM3NDIzMTgzODA1IgyxdE0x7q7839HGQ%2BMq3APJUccXtO7LduaTnZ8PT1BQ0CAOm96pkZwTSiBRrRZ0YoUAChFSSiLegYTZiRWElT9DMgXtN%2FmrrlqxOo9EkIVepgZEFmdFuKn%2F37UMcjGjaxKYnmOiZWaU8oHw687QOrEq4PVL6ke%2FC5LthOGN1wOVxDwHlmpEo2M1FvNpbNvoJV2mnCcdWAUCGI6pj3NLeE%2BUnDpJx7H6iz3W6aix%2FN054UD1fiJDKrnWYtLrwpSoCOc82BkMai83CogxhnA8s9MdFDTch35hkNzc2J526TlQteobM8zpuuq15R5ljlfZL9IdfdlfTyvCQejybBn3ZY5lFbJ4JEulzbU0uSZrzMypDFXvOpWzED1Pf5vHxGz9dp2JCmRnOhzZVkxM3OBKtwps6X%2FkI8ZbXKgmVwLRqxmOAcJYUjOjWc8z61T0fZTWLYp58vgu9RtRglIIW28Re5%2Fmk4DeaKl8KUrLaSgE9AMq1bZvlXujkOs8AO%2BJCoARcI2pecEJUt%2FdexCI83k2rH0hWLbVmYaudDU9G3nLBVmUoWroIrD5dGMqSfepDq8vBaaIim7JVIOHqeH0ketnACWI2cuzWwuzjn%2BfJqu3ymJ2IJ45NQ6BxQ07WI1HpVqDz0SerXYFIE16GXVBRjCmjbPCBjqkATP4QHQkopGEqus7sX8Ic6QkRHGlnQeAzYudh2BAyuPvesLjgE6gK2P3JJwJRWSWoxuwnjmbbX79%2BOMePmU8b999NcbVoOJmPPJ4JxL39W62CRw%2FhZPfEaeetekjtmz%2FEXd15SFMqgef8%2BPG3R%2FdMFux7feWNFLm%2F4QwcL01ytzkfy3c%2Bo%2B1w31CgHKd6NSJtZGzoPGSSWjZ6SHNihFW8XKH9SaW&X-Amz-Signature=fbf0a1f263dc445aa7088904473f0e4995d097e005877480d8d514ade38a660d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VLAMODS%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T022627Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJIMEYCIQCvLc9dcv7A1KBjQJJhSxvp%2Bq2Rtj9cNDvjxs2YJU5kFQIhAL%2FeOCkG4weSqKpnwaWtTUTs%2B96ceqJIf1K1IfJBtQyPKv8DCCIQABoMNjM3NDIzMTgzODA1IgyxdE0x7q7839HGQ%2BMq3APJUccXtO7LduaTnZ8PT1BQ0CAOm96pkZwTSiBRrRZ0YoUAChFSSiLegYTZiRWElT9DMgXtN%2FmrrlqxOo9EkIVepgZEFmdFuKn%2F37UMcjGjaxKYnmOiZWaU8oHw687QOrEq4PVL6ke%2FC5LthOGN1wOVxDwHlmpEo2M1FvNpbNvoJV2mnCcdWAUCGI6pj3NLeE%2BUnDpJx7H6iz3W6aix%2FN054UD1fiJDKrnWYtLrwpSoCOc82BkMai83CogxhnA8s9MdFDTch35hkNzc2J526TlQteobM8zpuuq15R5ljlfZL9IdfdlfTyvCQejybBn3ZY5lFbJ4JEulzbU0uSZrzMypDFXvOpWzED1Pf5vHxGz9dp2JCmRnOhzZVkxM3OBKtwps6X%2FkI8ZbXKgmVwLRqxmOAcJYUjOjWc8z61T0fZTWLYp58vgu9RtRglIIW28Re5%2Fmk4DeaKl8KUrLaSgE9AMq1bZvlXujkOs8AO%2BJCoARcI2pecEJUt%2FdexCI83k2rH0hWLbVmYaudDU9G3nLBVmUoWroIrD5dGMqSfepDq8vBaaIim7JVIOHqeH0ketnACWI2cuzWwuzjn%2BfJqu3ymJ2IJ45NQ6BxQ07WI1HpVqDz0SerXYFIE16GXVBRjCmjbPCBjqkATP4QHQkopGEqus7sX8Ic6QkRHGlnQeAzYudh2BAyuPvesLjgE6gK2P3JJwJRWSWoxuwnjmbbX79%2BOMePmU8b999NcbVoOJmPPJ4JxL39W62CRw%2FhZPfEaeetekjtmz%2FEXd15SFMqgef8%2BPG3R%2FdMFux7feWNFLm%2F4QwcL01ytzkfy3c%2Bo%2B1w31CgHKd6NSJtZGzoPGSSWjZ6SHNihFW8XKH9SaW&X-Amz-Signature=a1b4464f820ab1a239daa995256403fefc20ae8ab3c867c6dce2e4e263a73f1c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
