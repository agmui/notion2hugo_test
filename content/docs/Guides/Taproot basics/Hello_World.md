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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZETVAQIA%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T061051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQDx9NXN%2F2lBM%2Bz3kpVfahGFhGvkaQYDKylkvgXu1xoWAwIgcSezf8LB4e%2Fwke%2FoU57sejRz4HGIiGncevgcb6u0evYqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCHdBP%2FzRe3kr22oDSrcAx%2FQb8scwc7OadzNSfZLMinJ4JHm6w34OqwhtJ1pjp0zvYNmm1efZUsV6Z6vxzeykev%2B6mvEMVSf%2Bj%2FHC9R5800WQy0fXV1KGq56y%2FMyaEg1n0ftI7GVnrjdbrgSvr5Ag7vwbPzpqg7FBg%2B2sKCJp6KwnFCawnEo9sFgHH3Jn0DqG16UGx6tz1oaoS8t5C9THcKBZghhE7uPK2FZfxF6WmbJ88dWPkfLqqSEr9gt%2Fhkqw%2FlytnlsybTL0NkAsya02j%2FGDTj86gj5O3PGnD3dCfgXlx90NbQ9Mj%2B66lKMxnZVRXsGWDtOh5qlqvXyE2e8bvy0iQ%2FIhJCeNVADWYKpp5dwhok4fUVTwHwnVx7H270Za9bysoxGMwzAE7rwgSBCOTXbsjcI8UlTT1VZ8VQALfXAUPqcEDfLPrCt7qtaddelVssvNtgaeGKHVEQwkQCNT8eDe%2Fm3iwI61U4BZKqQ5eAF6B3rIJybWtEU7y80Igt%2Bv3pGyTOgObABYoKGqNFfoIxFXWvvw3rYG%2BSNm07iL7PKTIr0eRqXiAxn8jHs2%2Bb%2FMYDgR8WjGvsn7eIGApz6fRTBYbxZ9dWGYRaCY0k2gBSSfjDc65El9q%2F7q7aIx090NAAFmWHZe5tpCLkEMKOq0L0GOqUBMmfr43UARx2rOsqAxGMmHV8roOyjqnus68L3%2F2NEj90VsEf5GSspfUxPnQovSK4C9eeA0ub0OH4UR5ieIgptHlc6EbpNSY3%2Fe3hZ1LDjn9ncHst0pwRpU6uSjyknjbX%2FnKcz%2FmquALk5Jw03lzndS5V8XfRLi40R674z9jMYhmwIISkFd8Uc%2Fkqv%2B9%2BqLZATUyPZTZ1aSclhnOLKpvDM9u97imxi&X-Amz-Signature=f5b047126b1d4cd50cd66e6070f873b078eb714aa9c5081146b1ad0f5af7cac7&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZETVAQIA%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T061051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQDx9NXN%2F2lBM%2Bz3kpVfahGFhGvkaQYDKylkvgXu1xoWAwIgcSezf8LB4e%2Fwke%2FoU57sejRz4HGIiGncevgcb6u0evYqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCHdBP%2FzRe3kr22oDSrcAx%2FQb8scwc7OadzNSfZLMinJ4JHm6w34OqwhtJ1pjp0zvYNmm1efZUsV6Z6vxzeykev%2B6mvEMVSf%2Bj%2FHC9R5800WQy0fXV1KGq56y%2FMyaEg1n0ftI7GVnrjdbrgSvr5Ag7vwbPzpqg7FBg%2B2sKCJp6KwnFCawnEo9sFgHH3Jn0DqG16UGx6tz1oaoS8t5C9THcKBZghhE7uPK2FZfxF6WmbJ88dWPkfLqqSEr9gt%2Fhkqw%2FlytnlsybTL0NkAsya02j%2FGDTj86gj5O3PGnD3dCfgXlx90NbQ9Mj%2B66lKMxnZVRXsGWDtOh5qlqvXyE2e8bvy0iQ%2FIhJCeNVADWYKpp5dwhok4fUVTwHwnVx7H270Za9bysoxGMwzAE7rwgSBCOTXbsjcI8UlTT1VZ8VQALfXAUPqcEDfLPrCt7qtaddelVssvNtgaeGKHVEQwkQCNT8eDe%2Fm3iwI61U4BZKqQ5eAF6B3rIJybWtEU7y80Igt%2Bv3pGyTOgObABYoKGqNFfoIxFXWvvw3rYG%2BSNm07iL7PKTIr0eRqXiAxn8jHs2%2Bb%2FMYDgR8WjGvsn7eIGApz6fRTBYbxZ9dWGYRaCY0k2gBSSfjDc65El9q%2F7q7aIx090NAAFmWHZe5tpCLkEMKOq0L0GOqUBMmfr43UARx2rOsqAxGMmHV8roOyjqnus68L3%2F2NEj90VsEf5GSspfUxPnQovSK4C9eeA0ub0OH4UR5ieIgptHlc6EbpNSY3%2Fe3hZ1LDjn9ncHst0pwRpU6uSjyknjbX%2FnKcz%2FmquALk5Jw03lzndS5V8XfRLi40R674z9jMYhmwIISkFd8Uc%2Fkqv%2B9%2BqLZATUyPZTZ1aSclhnOLKpvDM9u97imxi&X-Amz-Signature=a7d5851e215e40a55a9362786f3c24ab5bd1ac4feeb5ae0a1be6fef21c31ceaf&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
