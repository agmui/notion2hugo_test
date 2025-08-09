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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WR36VCHE%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T081107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIHuqEhtnFu3rmv5nyRHwM7pc3OIMMcE4rPmwtBJuwuaFAiEAy7fyp4f%2BgisI2shgtynFTWhGlS9kU%2FBigg2G9CitcnUqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKIZmTlag6o9GvOpvSrcA0n7vE5SxNoFYXwJLnggtY%2BlDOHKW5bHPOwiPT9DUFKEqFG5lWQVthjM8BgLGSvkT2F0uoKEj%2FbeuVzTM4u4Zc8uvBTibU9cujZuEpCRSO29Dx4kMdclZ%2FZO6a6CvpAz%2FB3aitFJMgrq1C3ga%2FXcdmgKinuccP%2FizDHCprTV5PS%2FNHIf2UIMXXu4TO%2FN905lKtBy1Icw%2BiQUSDJOVir2KjzmNaHZ%2Fr%2FgFCcx%2F1xHcPUFjpqCVlMYgaqFb06%2FP4T8%2FD3q7TvuTzk2YWOMArP0YlJxZfRe61lUp2oYIDu3g%2BMM4EOVQreebPxyfBlgneZuoQwMKd71rh1%2BbpEKr86V5YAhi85W6Frn7zWRFPY3pjaPXCQGSJH8GPAecqvNRmjCiJx3aPlCsLEo1Qx%2B3coi14KDBk08o0VkrHuuJ85KwHpfUylrGbtqbQa5Syu%2BTnypjbo9ZnnzSSJn83ZrS%2F7KN1QiLb1utW9XHMoACo1Hly7QCYgeXFCAEBxknSO0lteJVcKQqC4N4y2ySTqTG8dk9O9aizOKw0zmHqu%2F7DfPwxqveiAzysiHGcsS5I0gTxeMf6NmYVBiIFEPpl7G7aMuVTSyUwGT4LOaeNm9JLowQBDISu90BmC0KFJskdMlMPDE28QGOqUB0jVRVr1LNd3fIhL%2FDT0zPM9rUrJsOoeLr%2FTbKF7OO3kbgNbTN3EK8HUr%2BuO4YMZtszWwzBd13YvQFMa37nbKP5gFGtCl3DFi3USqFGFBDBVA01AsMJKTC25rwjYzosx37bXDWvQM4iKBdBg4Erm8rTMqNac6CJBQnUKwxhm6z0hjI89gKWPhyYyf6fyAcCm6uk2tHJYBshbeN04pBjK6XChUTJJo&X-Amz-Signature=decded8c267b3b55256b07a99a895c4de8c35090085318bced7f78145cd1cf84&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WR36VCHE%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T081107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIHuqEhtnFu3rmv5nyRHwM7pc3OIMMcE4rPmwtBJuwuaFAiEAy7fyp4f%2BgisI2shgtynFTWhGlS9kU%2FBigg2G9CitcnUqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKIZmTlag6o9GvOpvSrcA0n7vE5SxNoFYXwJLnggtY%2BlDOHKW5bHPOwiPT9DUFKEqFG5lWQVthjM8BgLGSvkT2F0uoKEj%2FbeuVzTM4u4Zc8uvBTibU9cujZuEpCRSO29Dx4kMdclZ%2FZO6a6CvpAz%2FB3aitFJMgrq1C3ga%2FXcdmgKinuccP%2FizDHCprTV5PS%2FNHIf2UIMXXu4TO%2FN905lKtBy1Icw%2BiQUSDJOVir2KjzmNaHZ%2Fr%2FgFCcx%2F1xHcPUFjpqCVlMYgaqFb06%2FP4T8%2FD3q7TvuTzk2YWOMArP0YlJxZfRe61lUp2oYIDu3g%2BMM4EOVQreebPxyfBlgneZuoQwMKd71rh1%2BbpEKr86V5YAhi85W6Frn7zWRFPY3pjaPXCQGSJH8GPAecqvNRmjCiJx3aPlCsLEo1Qx%2B3coi14KDBk08o0VkrHuuJ85KwHpfUylrGbtqbQa5Syu%2BTnypjbo9ZnnzSSJn83ZrS%2F7KN1QiLb1utW9XHMoACo1Hly7QCYgeXFCAEBxknSO0lteJVcKQqC4N4y2ySTqTG8dk9O9aizOKw0zmHqu%2F7DfPwxqveiAzysiHGcsS5I0gTxeMf6NmYVBiIFEPpl7G7aMuVTSyUwGT4LOaeNm9JLowQBDISu90BmC0KFJskdMlMPDE28QGOqUB0jVRVr1LNd3fIhL%2FDT0zPM9rUrJsOoeLr%2FTbKF7OO3kbgNbTN3EK8HUr%2BuO4YMZtszWwzBd13YvQFMa37nbKP5gFGtCl3DFi3USqFGFBDBVA01AsMJKTC25rwjYzosx37bXDWvQM4iKBdBg4Erm8rTMqNac6CJBQnUKwxhm6z0hjI89gKWPhyYyf6fyAcCm6uk2tHJYBshbeN04pBjK6XChUTJJo&X-Amz-Signature=d3c8c5f4c8017d8f608ed0351d6df11001c86799f6b2fb2fb3917cbc839b6362&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
