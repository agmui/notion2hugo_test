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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBDHII6X%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T200817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCiNE7wWI72cBhxK%2F7fTSPmWLOLvdWku23EPZTLHH%2FaKAIgY%2Fo%2FLzNIICrsugIfuRe1f8wOLWNUp2cu3jgCw0J3gaMqiAQI3P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMCefLcSc8ciJZvp2ircA1MmLCHgdPHRquECHZFQmq9vABV3IzwyVP1PSi4C2m1Qpe5Nc%2BEZzsS85gDtk8MvGrXKdBa5%2FQ3%2Bdgfo9wN8oeSvwJyS9UEVTgCOe2eA5iw4vLYOi6rkRWafqN1rLuibeRxm4MykokLaAwgo5Y0e8OfDyTFqHbAXZcNmylqcDEOl%2Ftj%2BmaZFz4BzvTfTI0ZjgDvZ22CQcQK1SscwyExKkGZKM2Su06WvwBFm%2FPCFCAm4ROUirgt3MUd3RgblxxkiA5cvXAAuc0cLQ1%2BGl7lyg4OkLxHRJhSG1deQM2%2B%2FTnK0qOLr9Kz911MZfNpNAHp6pVfjO8wrag5VAXTPAdoD49w9W0x52wCCmXXUDEUKh3fmKQ48xwD84YTFzhdgVQ%2FsKYVc3f3Ltp3fLld2RA3l6Nj9C9CPcu31%2BpNIPIE9gR15kTvQiX6QwVtutB%2BalyprCHhUgUrp8m%2FwaBdTaLYI3eXoScHwYq7avw%2BVmCOvdSi1SLmN6v%2FiVBkkpWgqZjpzalGusICd8%2Fg0Rq5h%2BeFivijoxSSwSlh%2F9d3uZql1e7ZC6NC%2F9RJcIhZ7ajFHdEZtdpKdIXiVvGtTT%2Fo3GfICR8p%2FlCxBYfmFGMN2wTRa%2FfIYA%2FjtlGI1uHiLm6CRMMWe470GOqUBLcgD3F0ehjbHB1jULoNY7Wr4s2BXl6yFWAY%2Bhxw4du8%2BcQsYs0B8I%2FaScnWDOd4PWejXuYZCaxyjZIKC3LUS7BRG5aNihrOGc%2B8xKEOi1VBgFZHQwMVDITeZjK03T8BYpeYq%2BKXPjMZCJCDKLCGgk4CPvSsFMiuKW2jo6lg%2FOs01AECQqFFOKVOB8Zk25Ye7GEGKRsPyb0WJ9psZ3iYb7fJGNXSu&X-Amz-Signature=3ca1f6ffc37a938c5ea7125843da02444f6fe24456ca711295b320ed8abcec13&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBDHII6X%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T200817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCiNE7wWI72cBhxK%2F7fTSPmWLOLvdWku23EPZTLHH%2FaKAIgY%2Fo%2FLzNIICrsugIfuRe1f8wOLWNUp2cu3jgCw0J3gaMqiAQI3P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMCefLcSc8ciJZvp2ircA1MmLCHgdPHRquECHZFQmq9vABV3IzwyVP1PSi4C2m1Qpe5Nc%2BEZzsS85gDtk8MvGrXKdBa5%2FQ3%2Bdgfo9wN8oeSvwJyS9UEVTgCOe2eA5iw4vLYOi6rkRWafqN1rLuibeRxm4MykokLaAwgo5Y0e8OfDyTFqHbAXZcNmylqcDEOl%2Ftj%2BmaZFz4BzvTfTI0ZjgDvZ22CQcQK1SscwyExKkGZKM2Su06WvwBFm%2FPCFCAm4ROUirgt3MUd3RgblxxkiA5cvXAAuc0cLQ1%2BGl7lyg4OkLxHRJhSG1deQM2%2B%2FTnK0qOLr9Kz911MZfNpNAHp6pVfjO8wrag5VAXTPAdoD49w9W0x52wCCmXXUDEUKh3fmKQ48xwD84YTFzhdgVQ%2FsKYVc3f3Ltp3fLld2RA3l6Nj9C9CPcu31%2BpNIPIE9gR15kTvQiX6QwVtutB%2BalyprCHhUgUrp8m%2FwaBdTaLYI3eXoScHwYq7avw%2BVmCOvdSi1SLmN6v%2FiVBkkpWgqZjpzalGusICd8%2Fg0Rq5h%2BeFivijoxSSwSlh%2F9d3uZql1e7ZC6NC%2F9RJcIhZ7ajFHdEZtdpKdIXiVvGtTT%2Fo3GfICR8p%2FlCxBYfmFGMN2wTRa%2FfIYA%2FjtlGI1uHiLm6CRMMWe470GOqUBLcgD3F0ehjbHB1jULoNY7Wr4s2BXl6yFWAY%2Bhxw4du8%2BcQsYs0B8I%2FaScnWDOd4PWejXuYZCaxyjZIKC3LUS7BRG5aNihrOGc%2B8xKEOi1VBgFZHQwMVDITeZjK03T8BYpeYq%2BKXPjMZCJCDKLCGgk4CPvSsFMiuKW2jo6lg%2FOs01AECQqFFOKVOB8Zk25Ye7GEGKRsPyb0WJ9psZ3iYb7fJGNXSu&X-Amz-Signature=14f8562b5f9459f809cd01396971c14e9cb6bd578716fe5c376d9f0a65df507c&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
