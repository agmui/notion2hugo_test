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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5MWDYS4%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T230314Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCeUYSbChSP%2Fch098jsMeV8phqii1YlGKdN79mbzH%2FM5AIhAJPBITet6KhUjqMlE9i%2FSi6d8wsKyrY4fv2FTTelz9psKogECJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyMEQC3Rds32p8WvkMq3AO6X%2FHefly4CyDhqvxK6wsox9FEhvmWQkuZwPX%2BKPuZVgBRqDbZb7WIjVYel5hQIPSMtxl59y7ui0fuoF63V6zqfsu%2BOZZMOrsBnLM5PdTdSD76o6f1rmmar8wZrr2YJoPujMaGpqsoY0lqPdJy9s%2FzT9pBcvkhnB1mee3OB09TU8bEAP4Slxdzi%2B5Wd4%2FZNpdzkkXGMEftHMVIjz8gGrViz0KLb%2FZVoOolwTTctCj6pxBerNySx3GR89CJ0CPhM6PmYdxJstk6TUUfz7bU3Gabf1iZiRSari%2FaaMnCZqiHcmPsEMIJ1ENb%2FrH2qXLUTbnphFd%2FDtK60yAMBVyDWUfxOsKmAvUfKuX%2Bb%2FVkjjrpmc0pD9XOcELUkhMoe8irTy3ygxlvSwIqywPRBVXnb17AR%2BYgxALlkdKdGLHL2GjfvZwIwpQY2QY%2FvK8dN%2BPxHrCAvcqfli%2BIPMIDgE8XtBoVHPzzz8U7zRvhuGNZqJiGWYLPQLswoAofTdXRPXmmfjqAZwifG0N63W8nOOvPl0iCZb60qHHuiS9uablTRKixv8AV%2FPpNHv4wpGiXB0Bdipm3XPzCTsgHm1h92cGA0S%2BnaVMtRmAgcum4T4AFaFLDlGkX1nwEc%2BcKyToMPzDqsuPBBjqkAR9wvQzXgIw8WLqA%2BPmwg8kkhPjoUcYjP8Y1IJ7jHS6YT%2B2xiCTzKaBTfOpVjTDuXmy3iM%2FZewdBlfq8rw9wLlN%2B%2FjaX88AzbCBxEzf7m%2BO%2B5blINSmQ6uPAw3s1XYQ2yLlmUaw37sDj3MdgCot%2FizsbkGBbd0FeHyeB9jS2kimTsxjIRNclYhtULIxye6iUMpxD20lPmaUOIEbP6cvBI2iY7KXA&X-Amz-Signature=01bae8d5f5bed784ce436bc562ca9bca059b7a26693b253ec3642d81a6c8e639&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5MWDYS4%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T230314Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCeUYSbChSP%2Fch098jsMeV8phqii1YlGKdN79mbzH%2FM5AIhAJPBITet6KhUjqMlE9i%2FSi6d8wsKyrY4fv2FTTelz9psKogECJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyMEQC3Rds32p8WvkMq3AO6X%2FHefly4CyDhqvxK6wsox9FEhvmWQkuZwPX%2BKPuZVgBRqDbZb7WIjVYel5hQIPSMtxl59y7ui0fuoF63V6zqfsu%2BOZZMOrsBnLM5PdTdSD76o6f1rmmar8wZrr2YJoPujMaGpqsoY0lqPdJy9s%2FzT9pBcvkhnB1mee3OB09TU8bEAP4Slxdzi%2B5Wd4%2FZNpdzkkXGMEftHMVIjz8gGrViz0KLb%2FZVoOolwTTctCj6pxBerNySx3GR89CJ0CPhM6PmYdxJstk6TUUfz7bU3Gabf1iZiRSari%2FaaMnCZqiHcmPsEMIJ1ENb%2FrH2qXLUTbnphFd%2FDtK60yAMBVyDWUfxOsKmAvUfKuX%2Bb%2FVkjjrpmc0pD9XOcELUkhMoe8irTy3ygxlvSwIqywPRBVXnb17AR%2BYgxALlkdKdGLHL2GjfvZwIwpQY2QY%2FvK8dN%2BPxHrCAvcqfli%2BIPMIDgE8XtBoVHPzzz8U7zRvhuGNZqJiGWYLPQLswoAofTdXRPXmmfjqAZwifG0N63W8nOOvPl0iCZb60qHHuiS9uablTRKixv8AV%2FPpNHv4wpGiXB0Bdipm3XPzCTsgHm1h92cGA0S%2BnaVMtRmAgcum4T4AFaFLDlGkX1nwEc%2BcKyToMPzDqsuPBBjqkAR9wvQzXgIw8WLqA%2BPmwg8kkhPjoUcYjP8Y1IJ7jHS6YT%2B2xiCTzKaBTfOpVjTDuXmy3iM%2FZewdBlfq8rw9wLlN%2B%2FjaX88AzbCBxEzf7m%2BO%2B5blINSmQ6uPAw3s1XYQ2yLlmUaw37sDj3MdgCot%2FizsbkGBbd0FeHyeB9jS2kimTsxjIRNclYhtULIxye6iUMpxD20lPmaUOIEbP6cvBI2iY7KXA&X-Amz-Signature=8bed52941d19607b833aedebbd83591256e02c1430a44e7838ab85ac722a4123&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
