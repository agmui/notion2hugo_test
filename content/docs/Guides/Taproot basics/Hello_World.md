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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664A65PD5D%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T131803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDUwpwU8owF8Gh5CYq6oSMLcBaHMrmDKvkU0WPXsVosXwIhAONRJg5Q8HAmx5Zu5R2uEKLQHzEzREqj7U0hYpmctlUaKv8DCHUQABoMNjM3NDIzMTgzODA1IgyDXu44LPi1MJigpsMq3AMrDNAf0aw6NFbVncO22XxbXTHqI12P2eqFKAoBxr%2B%2FT7%2FXqYKxTi1Q8%2BgaD0%2B7SmzwKOk%2B1G2Z5fWcuP6QmJyN5%2BmQMToyFzuPir%2Fi2yCI9YG3o2fszRhd1wJaWdEy0nZeHsJ9b7RU5y%2BL0ck5EK%2FvpIlGoEtjSQVFsKRmQRtodggOsDl6Rb87P1TiCFlA9iRGDGv3CGPqKvcWqc5sOZKzva0rYsp4uBnsO5jZpAFQq73iJxXoSvyCZ%2FBj98kwXBbDRKlQ59NPivQm5ju3h9OJwn1WVj0tMhBj%2F%2Fd93U%2F3jH8H5f6A0JpuI7A2ubpjfoQAba%2BTaS6fFoEYc0F42FsaZ%2B0tSknzu91ge%2Foty%2BwZOZMdtYsiho%2BZIR9L22ek%2FWLfiREPs%2F7y9shqsZsa5wwDwHeFmhfGhOuOIul1fudgmTLw1iyvLgDCJEp7S%2FGDVbrWIleT8%2FAZNrKDg0hwzTa2zRsrMrafRJ2gmndVhOD6HxLYQthMDAlNhRPcThYKIZliIP3AO5R%2Fja7bv2yY93RZV%2F3soEAxcEuOWX66%2BfXuIwDvnnA2fNkAyla63rb6zjsphCPnyKRDqSFhozCOGWsy2DQkIvlR%2FWLQkQe4Z3GYGM3KwDpqnb7zHaXn5TDWw5DCBjqkAZLyc%2BkpXkGOitgg63VrNaBnu113M6%2FTIt%2FmBEBaYuFpOki0deE4hwLM3ZfAzYXG4SWA5roFIrm09fOrwRYTeImySELU%2BZiIFEpmEmamYVgQpWb%2F41T0WKFS67bH3CNayxXBtpLuPsk%2BSDCe4COstkclODoLesUbiMowGO4M2%2FqDDxqRgZano7cWzTo9MToPa2M87wXCsLnTvUlOTFMS69PtF%2B0F&X-Amz-Signature=60075de88c7b319fa111087dd87d26c71f0a73b5a6ab78a786a888d6bc361801&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664A65PD5D%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T131803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDUwpwU8owF8Gh5CYq6oSMLcBaHMrmDKvkU0WPXsVosXwIhAONRJg5Q8HAmx5Zu5R2uEKLQHzEzREqj7U0hYpmctlUaKv8DCHUQABoMNjM3NDIzMTgzODA1IgyDXu44LPi1MJigpsMq3AMrDNAf0aw6NFbVncO22XxbXTHqI12P2eqFKAoBxr%2B%2FT7%2FXqYKxTi1Q8%2BgaD0%2B7SmzwKOk%2B1G2Z5fWcuP6QmJyN5%2BmQMToyFzuPir%2Fi2yCI9YG3o2fszRhd1wJaWdEy0nZeHsJ9b7RU5y%2BL0ck5EK%2FvpIlGoEtjSQVFsKRmQRtodggOsDl6Rb87P1TiCFlA9iRGDGv3CGPqKvcWqc5sOZKzva0rYsp4uBnsO5jZpAFQq73iJxXoSvyCZ%2FBj98kwXBbDRKlQ59NPivQm5ju3h9OJwn1WVj0tMhBj%2F%2Fd93U%2F3jH8H5f6A0JpuI7A2ubpjfoQAba%2BTaS6fFoEYc0F42FsaZ%2B0tSknzu91ge%2Foty%2BwZOZMdtYsiho%2BZIR9L22ek%2FWLfiREPs%2F7y9shqsZsa5wwDwHeFmhfGhOuOIul1fudgmTLw1iyvLgDCJEp7S%2FGDVbrWIleT8%2FAZNrKDg0hwzTa2zRsrMrafRJ2gmndVhOD6HxLYQthMDAlNhRPcThYKIZliIP3AO5R%2Fja7bv2yY93RZV%2F3soEAxcEuOWX66%2BfXuIwDvnnA2fNkAyla63rb6zjsphCPnyKRDqSFhozCOGWsy2DQkIvlR%2FWLQkQe4Z3GYGM3KwDpqnb7zHaXn5TDWw5DCBjqkAZLyc%2BkpXkGOitgg63VrNaBnu113M6%2FTIt%2FmBEBaYuFpOki0deE4hwLM3ZfAzYXG4SWA5roFIrm09fOrwRYTeImySELU%2BZiIFEpmEmamYVgQpWb%2F41T0WKFS67bH3CNayxXBtpLuPsk%2BSDCe4COstkclODoLesUbiMowGO4M2%2FqDDxqRgZano7cWzTo9MToPa2M87wXCsLnTvUlOTFMS69PtF%2B0F&X-Amz-Signature=5b56ce50dca33a4b71b7243c464244314cc67e6f5084922bbc1ab7e60670a0c1&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
