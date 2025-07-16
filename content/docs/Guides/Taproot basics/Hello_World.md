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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VP5JW3DT%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T150938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIHfQFlwwXrGBTImCAwd7GGKrkwEv1QOxLoPQBfEkYuT5AiEA8mLAlfe%2FThMSha9INLhFNRaAsen%2BwXfjTxnf22FTqtQq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDMze8TGTCHQf9Int%2FSrcA9Jqh990gE%2FetDsqxGXrT36nlQW1aAO3sIRaZ3Z7qhJvySfoqd%2Bilqz5SukCu8aAP%2FmsXjsGOMaYmy05pAwmcbSiL80WJCQ%2FO01Apj5G%2BC66%2Fq81mZCoyTvaei6Jog4FO2Hn56aw%2F2sxKRWXHGloIlWtIjEzlmeX6DZqgMrtJe5ro4bXXmL%2B0hGrG%2B1dB%2FyxZecGMatOaeaGRK5dPDqEEsFlOv3qeVu3%2BFPfJLU%2FBKRI%2FaWrUt2l%2BwBpzC4PeRCySdSA76%2Fxw21NEWSeWqGqf06KiOZVvkvzSBeo6QbRAOcCiO%2FolkTMtY6o4ha4%2BdNvs4QIncIl65DwSUlR5iH7RK5DVdUFvRgnRMNTC1eIQJ1iiszGn5ymAq9xOZLifVOYXj1nYr5V1OHB%2BPKKHqbXJH2azp%2BJsam5MQZS3kG5srAMkuF%2FDobZ08o7H8pBkGDUq4DR7VygUBErWoCT2uLkyB%2FzfUWRetrPv%2Fr2wEW3NLCfqxpNb0pS9pKYtoR1zDGRNgecd%2FvXLJ9r5Rw%2Bl1OzV4JfZCJTggsLamL5%2FBu6KQ14r0oFl03UxY6qGaaa7nBF%2BPIcmPRhhQIPim%2BD3mXJCujMuanXKc%2B%2FnLMxBY6jxZnaHJBhhzfH%2FgUWkQb3MIGT3sMGOqUBw37WUSuBK%2Be3GpPVxdXD7bXMRZ92SPINtuXVFwU5mYdgmzag%2BYJ0DVHzRmx5EAyiXoBASNmfWMNp4SCytxyL%2B2vg9OXLJaYQtQrfpiN4sN82dX%2BbuH6K7R5BiA7Ms3jq2ANYP%2Fx2Mn3ZJUNnOfTxAGtpbhIVnJqHm4mwBEOWKEIzbP4lUBZR8flvlklkWSdRR0LK6wUAv1Y6KBsBgVHyNd%2BRZMkJ&X-Amz-Signature=f0d60fd7f1d8fef1bd8b48d85662617535f62144e175645cac5a0e89256b8bbf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VP5JW3DT%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T150938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIHfQFlwwXrGBTImCAwd7GGKrkwEv1QOxLoPQBfEkYuT5AiEA8mLAlfe%2FThMSha9INLhFNRaAsen%2BwXfjTxnf22FTqtQq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDMze8TGTCHQf9Int%2FSrcA9Jqh990gE%2FetDsqxGXrT36nlQW1aAO3sIRaZ3Z7qhJvySfoqd%2Bilqz5SukCu8aAP%2FmsXjsGOMaYmy05pAwmcbSiL80WJCQ%2FO01Apj5G%2BC66%2Fq81mZCoyTvaei6Jog4FO2Hn56aw%2F2sxKRWXHGloIlWtIjEzlmeX6DZqgMrtJe5ro4bXXmL%2B0hGrG%2B1dB%2FyxZecGMatOaeaGRK5dPDqEEsFlOv3qeVu3%2BFPfJLU%2FBKRI%2FaWrUt2l%2BwBpzC4PeRCySdSA76%2Fxw21NEWSeWqGqf06KiOZVvkvzSBeo6QbRAOcCiO%2FolkTMtY6o4ha4%2BdNvs4QIncIl65DwSUlR5iH7RK5DVdUFvRgnRMNTC1eIQJ1iiszGn5ymAq9xOZLifVOYXj1nYr5V1OHB%2BPKKHqbXJH2azp%2BJsam5MQZS3kG5srAMkuF%2FDobZ08o7H8pBkGDUq4DR7VygUBErWoCT2uLkyB%2FzfUWRetrPv%2Fr2wEW3NLCfqxpNb0pS9pKYtoR1zDGRNgecd%2FvXLJ9r5Rw%2Bl1OzV4JfZCJTggsLamL5%2FBu6KQ14r0oFl03UxY6qGaaa7nBF%2BPIcmPRhhQIPim%2BD3mXJCujMuanXKc%2B%2FnLMxBY6jxZnaHJBhhzfH%2FgUWkQb3MIGT3sMGOqUBw37WUSuBK%2Be3GpPVxdXD7bXMRZ92SPINtuXVFwU5mYdgmzag%2BYJ0DVHzRmx5EAyiXoBASNmfWMNp4SCytxyL%2B2vg9OXLJaYQtQrfpiN4sN82dX%2BbuH6K7R5BiA7Ms3jq2ANYP%2Fx2Mn3ZJUNnOfTxAGtpbhIVnJqHm4mwBEOWKEIzbP4lUBZR8flvlklkWSdRR0LK6wUAv1Y6KBsBgVHyNd%2BRZMkJ&X-Amz-Signature=44a5a8e9f472504e0c865d0adcfc32398b46fe4dd574dcbd73ca3ec9462a8c8e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
