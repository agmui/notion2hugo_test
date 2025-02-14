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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BUFWI3G%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T210245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIBg1jqYEZbNOf2APH5V3zbCdF60g7XQp8gJ%2FQX3ROTFOAiEA2vAlFJHw%2FmDdy7nlI7CuXZqSvdvv8h3voUfwJ62qJ0kq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDMgD0AACWF0rbgLXQSrcAw9TWhOA4z0XQcARuyjv05KK9%2BakfOu%2FuMNaTt22wEC6xdWPOYta3hmVFqInH94OHuHp14lsdChUCVWlldLbqa5xOSFaOLcVcrZW5RKB%2FY1mNuZa9fNmkULcDTF10zIAGC0g%2Bg6j6AS%2FhvCITD%2BgecYQsnO49FSZ8VGB6xLaQLMtGbLYGTYdEADLTEpHUPnaZQNvXMZ2ha1%2Bfaq4FFzyMkkhj2MNkpkFZU%2F%2B2DCz1SyUIdaaFCK5KogBs1XaHIPpP%2FNmPop41pCLGyoQ8RKKEZG%2BWCS4IjX%2F%2FCQi4PvRDmaLIbe6KJpEGxITaGo1VrbidfG77bDNbAVcyHdouFGVKutM142XIm2MfSGJ%2BcXzqgenQzU8%2BQb3lYzy048vnyZobTpTrk7Z6XaSB7vmHOlfZY%2FfmVUZDXQOUu60zkA7IIDxlOW%2B90lYVGCrRSecLRp0S7Oq6M4lZt7drBDGdXXXiJIU%2BloPGxEx5NhEcFR0qU%2Fk0kZf%2BqN9ddfVNpvuU1cjqCnWqz3iK6ps9KKXFO6EVKwOYRXxyJmLo7NWdlMjDi7IvLqTVO3tFWD%2B5TuGmwfAb5qnp6RAzNotpJwEBsvn38cPz%2Fe8nq44W2Tg%2F0iLB2LWJms76PTc4QkS6uR%2FMMvRvr0GOqUBRRBareTLv9%2FmbeJHZ1nT4DfghgSGy0TPQSvCYfsgtG1c0WxS5ucUx%2FeXQsQXopDPft4yvdlpgKNDUwdt3W4oDdCUGaJoHivOMULtNcPhMkAHMB%2BfxvqgXTu8nnsSM%2BqGmEFKnOIf5tNpjUU0AdurHTQ6gWTqXPn%2FmrZx5kidmbZGIX1LF%2B9D8Jkjg%2B6ft96GgraaSqe100HLH2BCRzn%2FlEpxKiRn&X-Amz-Signature=9bafe2e6f0cd95ccee374357cb663320dc51f39617cde468c33b7db6fb09114a&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BUFWI3G%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T210245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIBg1jqYEZbNOf2APH5V3zbCdF60g7XQp8gJ%2FQX3ROTFOAiEA2vAlFJHw%2FmDdy7nlI7CuXZqSvdvv8h3voUfwJ62qJ0kq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDMgD0AACWF0rbgLXQSrcAw9TWhOA4z0XQcARuyjv05KK9%2BakfOu%2FuMNaTt22wEC6xdWPOYta3hmVFqInH94OHuHp14lsdChUCVWlldLbqa5xOSFaOLcVcrZW5RKB%2FY1mNuZa9fNmkULcDTF10zIAGC0g%2Bg6j6AS%2FhvCITD%2BgecYQsnO49FSZ8VGB6xLaQLMtGbLYGTYdEADLTEpHUPnaZQNvXMZ2ha1%2Bfaq4FFzyMkkhj2MNkpkFZU%2F%2B2DCz1SyUIdaaFCK5KogBs1XaHIPpP%2FNmPop41pCLGyoQ8RKKEZG%2BWCS4IjX%2F%2FCQi4PvRDmaLIbe6KJpEGxITaGo1VrbidfG77bDNbAVcyHdouFGVKutM142XIm2MfSGJ%2BcXzqgenQzU8%2BQb3lYzy048vnyZobTpTrk7Z6XaSB7vmHOlfZY%2FfmVUZDXQOUu60zkA7IIDxlOW%2B90lYVGCrRSecLRp0S7Oq6M4lZt7drBDGdXXXiJIU%2BloPGxEx5NhEcFR0qU%2Fk0kZf%2BqN9ddfVNpvuU1cjqCnWqz3iK6ps9KKXFO6EVKwOYRXxyJmLo7NWdlMjDi7IvLqTVO3tFWD%2B5TuGmwfAb5qnp6RAzNotpJwEBsvn38cPz%2Fe8nq44W2Tg%2F0iLB2LWJms76PTc4QkS6uR%2FMMvRvr0GOqUBRRBareTLv9%2FmbeJHZ1nT4DfghgSGy0TPQSvCYfsgtG1c0WxS5ucUx%2FeXQsQXopDPft4yvdlpgKNDUwdt3W4oDdCUGaJoHivOMULtNcPhMkAHMB%2BfxvqgXTu8nnsSM%2BqGmEFKnOIf5tNpjUU0AdurHTQ6gWTqXPn%2FmrZx5kidmbZGIX1LF%2B9D8Jkjg%2B6ft96GgraaSqe100HLH2BCRzn%2FlEpxKiRn&X-Amz-Signature=b006df980a1e9d7afc31027f2f2a70acb5ec33812c0f0029551acebdc10e567a&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
