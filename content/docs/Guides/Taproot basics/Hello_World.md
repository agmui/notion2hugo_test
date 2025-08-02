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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZ346WZ7%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T190658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFAvVCbO2dgcthVF7NPepRQCt9VG8waLvLb%2BZpULOI5rAiEA4mALZz6q1SFZCaMnF7dZ22HtO0HZFjt8H9RSctKoT7Eq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDDl0CvMlJPNswjDadSrcA0iTAnuMjrdrtg6wLqqfC22iewx1KWGbQKv9nPLY9n8sUz%2Fn882F7G%2FPEsH0dxN7D969PAOkbPa3rj0ouuj70MevGG%2FwQuqDBKFJbaYBGLU2t8xj69WdFtlqwRhRbAfGZkSJM1Bul6FxsblwoXu44qvbOXh%2BZWkDQhzGm5RM1EV32LDUpHIFf6ekU22VeKKLm3p%2FMcMQPNd1wH6sYdeC0tesdf8TfJpYv%2F4paCHhYKZmPLuSyqqP6CIzo%2FXZqIKeEd%2Bn7MAYY4YG4aQ%2FO2D4wUSiRsLiByN06FUat%2FciaMLf4HR4SJDCDcqfZS1Kt967uvLcCqEtusrsMzLKDfKVUsZJat2sv5u%2FqWz0uzuWn3Jyepn4%2BbGrU0hZEjsmOxk%2FOPLdoasdfY%2FsndtwZYRdIy7s8qxt2g%2BLq9nKczfV87pzFxcerJMz17T5RNMJuAqaFGEy0eoJesdbUpQex%2BWDEzcMKfmrQ52E9jzcyfQrbfmEtMedTfd2dw9eQM14ZHTUN6gsLeLIWoe2yB3N5tf7L1%2Fe7lJ5ULCFf11huzyssalW8QzEfRcD%2BUcyY7Su4owPhj5%2Bi52uPFVw5LQWetRm%2FobWwhdx3prGpyocT6z5Gfcwy%2FgqfrQqx%2BvBa9%2BkMJeeucQGOqUB6ZnUQg2qrt44QA%2FIDXDeyzAjqN6Kbr9yHiU6uR4BEDJXGr62fU0yJ3kSeQ25Mack%2BkkgoYkTxD3tnC1fafKrrU3Sf3xn91JfU1JZxYq1q%2FEZTpTwjz5umunp2M6l9rWp%2FuLRvqaj2yd6910%2B5sswErgohzF3C%2BiMMifiQNa4Mgat6w0a734w4NZ4CQtHO7OVASTIjOKfZ15RxNnbQ1TKlF0HG0zN&X-Amz-Signature=886c19d548a1dc99253423479ae0c81dc88d481fca34c4d3141b81bd7495a529&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZ346WZ7%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T190658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFAvVCbO2dgcthVF7NPepRQCt9VG8waLvLb%2BZpULOI5rAiEA4mALZz6q1SFZCaMnF7dZ22HtO0HZFjt8H9RSctKoT7Eq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDDl0CvMlJPNswjDadSrcA0iTAnuMjrdrtg6wLqqfC22iewx1KWGbQKv9nPLY9n8sUz%2Fn882F7G%2FPEsH0dxN7D969PAOkbPa3rj0ouuj70MevGG%2FwQuqDBKFJbaYBGLU2t8xj69WdFtlqwRhRbAfGZkSJM1Bul6FxsblwoXu44qvbOXh%2BZWkDQhzGm5RM1EV32LDUpHIFf6ekU22VeKKLm3p%2FMcMQPNd1wH6sYdeC0tesdf8TfJpYv%2F4paCHhYKZmPLuSyqqP6CIzo%2FXZqIKeEd%2Bn7MAYY4YG4aQ%2FO2D4wUSiRsLiByN06FUat%2FciaMLf4HR4SJDCDcqfZS1Kt967uvLcCqEtusrsMzLKDfKVUsZJat2sv5u%2FqWz0uzuWn3Jyepn4%2BbGrU0hZEjsmOxk%2FOPLdoasdfY%2FsndtwZYRdIy7s8qxt2g%2BLq9nKczfV87pzFxcerJMz17T5RNMJuAqaFGEy0eoJesdbUpQex%2BWDEzcMKfmrQ52E9jzcyfQrbfmEtMedTfd2dw9eQM14ZHTUN6gsLeLIWoe2yB3N5tf7L1%2Fe7lJ5ULCFf11huzyssalW8QzEfRcD%2BUcyY7Su4owPhj5%2Bi52uPFVw5LQWetRm%2FobWwhdx3prGpyocT6z5Gfcwy%2FgqfrQqx%2BvBa9%2BkMJeeucQGOqUB6ZnUQg2qrt44QA%2FIDXDeyzAjqN6Kbr9yHiU6uR4BEDJXGr62fU0yJ3kSeQ25Mack%2BkkgoYkTxD3tnC1fafKrrU3Sf3xn91JfU1JZxYq1q%2FEZTpTwjz5umunp2M6l9rWp%2FuLRvqaj2yd6910%2B5sswErgohzF3C%2BiMMifiQNa4Mgat6w0a734w4NZ4CQtHO7OVASTIjOKfZ15RxNnbQ1TKlF0HG0zN&X-Amz-Signature=ce5600383519f6cdca33b2fe6e4dc4552472d83c534302f9895cc3e065dd9892&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
