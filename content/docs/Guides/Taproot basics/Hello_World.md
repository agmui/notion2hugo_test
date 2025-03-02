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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RFERB7M%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T180848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDf0q3zaUhprFsot3G97KOAxshpGJP4ccNs5fqykn7mlgIhALVL58VK7riA%2BpaeqaTOJQ8ewUVBcYGi5o1a82AsbWORKogECML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyk0VMbVng6o4BiQh0q3AOZbQ4ijiPF2D4XQEEE6BqLtK7teiS%2FpDe1aDj0hTSUj7Bja81LJ2yguGGJDdnSBO1LaSFecjXdkeigLCvFNAx5ALX4lI%2F%2FTpxKICacEu3w8IjCtkwTW6WnFXC3OCa8vWTCOXMfZlQglO63zFAUxjw6Ntni0AIAUy095gnWgMs0HLWHfnIFj%2FTbeVbSfBsdscvVonWT4iIc7r%2FJOeRwj2nSaxXaB9LlNPVa3FGxHJv9F%2Fz8Uai%2F3FBqVtFDTGLiabQ08eoA15HV58KqfxZGL5Y7vHj%2FijChHaWOARG1M1m3xZRpM0PGiTk84EiKC2qDSk6t9Hl0mtrwg6x7zVj0Kk4pLHO2KMjDHS%2BoQguk8VhOGFdiV1qMKcp8N1ea9PfpsocSmhzM6KWuVmWNoLmZ0zuyLT1EyXcftb%2BJsFtjMH6Qsgni9BzWDZV3TIQMJU8LPLVm0BXGR8BAfFMiGDncDhAJSuFDqSAiLhuNK2xtc8v%2B7Lio5UoHMZsSeqDGgmT4AT2xfea%2FC6yMPYQQOVElzyO%2BLDsEikutiy3CWvHJow8rPdYiNpmuIeO4N8KSt0dkin%2B6g9Lq9j8iScgT9aJbLpgwdnA%2FnZzWEkSZcjimsV343PxGkR89lAIoi5%2FG9DDAlZK%2BBjqkAWA3v5knwP%2BAGrmrKLOn%2BxCMmCZVChEx7YYQ97d%2F3%2FkjoGT6br2P7uiyjmP570MCkngXtwxG2VGiowo0igmbuIX7wkL%2BgZKRq5wv77ukPHWyQ2rZieGr4MYw3ZeKeyQPZ5On9WHdvZRx9BrM%2FKhBdNX5w8P1kZKFB9AgAgI2xBk8M8QWDMDChK0INcaX5wLNimyomymTu0gJYxLh3NyhAQfeLQem&X-Amz-Signature=0b99f7c296edb914519fec50b11ac701818bc88ad13dcacc9c8b5c2295bbbbfe&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RFERB7M%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T180848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDf0q3zaUhprFsot3G97KOAxshpGJP4ccNs5fqykn7mlgIhALVL58VK7riA%2BpaeqaTOJQ8ewUVBcYGi5o1a82AsbWORKogECML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyk0VMbVng6o4BiQh0q3AOZbQ4ijiPF2D4XQEEE6BqLtK7teiS%2FpDe1aDj0hTSUj7Bja81LJ2yguGGJDdnSBO1LaSFecjXdkeigLCvFNAx5ALX4lI%2F%2FTpxKICacEu3w8IjCtkwTW6WnFXC3OCa8vWTCOXMfZlQglO63zFAUxjw6Ntni0AIAUy095gnWgMs0HLWHfnIFj%2FTbeVbSfBsdscvVonWT4iIc7r%2FJOeRwj2nSaxXaB9LlNPVa3FGxHJv9F%2Fz8Uai%2F3FBqVtFDTGLiabQ08eoA15HV58KqfxZGL5Y7vHj%2FijChHaWOARG1M1m3xZRpM0PGiTk84EiKC2qDSk6t9Hl0mtrwg6x7zVj0Kk4pLHO2KMjDHS%2BoQguk8VhOGFdiV1qMKcp8N1ea9PfpsocSmhzM6KWuVmWNoLmZ0zuyLT1EyXcftb%2BJsFtjMH6Qsgni9BzWDZV3TIQMJU8LPLVm0BXGR8BAfFMiGDncDhAJSuFDqSAiLhuNK2xtc8v%2B7Lio5UoHMZsSeqDGgmT4AT2xfea%2FC6yMPYQQOVElzyO%2BLDsEikutiy3CWvHJow8rPdYiNpmuIeO4N8KSt0dkin%2B6g9Lq9j8iScgT9aJbLpgwdnA%2FnZzWEkSZcjimsV343PxGkR89lAIoi5%2FG9DDAlZK%2BBjqkAWA3v5knwP%2BAGrmrKLOn%2BxCMmCZVChEx7YYQ97d%2F3%2FkjoGT6br2P7uiyjmP570MCkngXtwxG2VGiowo0igmbuIX7wkL%2BgZKRq5wv77ukPHWyQ2rZieGr4MYw3ZeKeyQPZ5On9WHdvZRx9BrM%2FKhBdNX5w8P1kZKFB9AgAgI2xBk8M8QWDMDChK0INcaX5wLNimyomymTu0gJYxLh3NyhAQfeLQem&X-Amz-Signature=6789781143e20120c7dfa17fade12324aabf4c61253b6a26fcca22ccf940fb9b&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
