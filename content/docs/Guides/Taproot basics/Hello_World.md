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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466454RRMAL%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T140229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIQC%2B2UpEksQX2pY0F7vCo7iEaqQ6MXxWHkroDU2%2FZhCZiQIgBgOJGar%2FRHDBBkC7G%2FSANI%2BSI%2F5lu629Xt6lMtgz4aEqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI3k0yom2z3SDuxZ7ircA3AD793%2F191Iu433zaOs%2FVYiWVwDNacLzCSpa4L8cPybtlb%2BBXSLmZCeVUL1tAee81JN2uhOF1jUuI0l4TD6bzFsEom8MRa28%2BGzGur%2Fzeg8vGXXipzuZk8g6jFbhvbQ0RYLlVt06uC1ZFUi0vARqINzsbhuwZV0gRya06XjDpgNinxyQn%2BWe0e8o1rdyPxiFQtLVGCJ4ZYpE72EwakYxoqjqxHLcnidGqf8h2pJpo5AyNP%2FoYgUQ4NAV%2B%2FHX2fXSDk416jRU1qqZqcyi8zQ%2FX9s5lAs%2FG%2BFcWgPBC13T%2FyAgKZZ5MmGuu9HgywYqMAipqHe3Vw3S2iNRSo0nxdQm9c3u8zJRJ4mQaEjSmr7C8tJ%2B%2BOd0A7usGGJosRA4OkbpO5mw3ehZtHJk4YX7UKgoOcSCQLFE3g39Xy82Qmf0JExTr9ouI1nGQr%2BTq8P7fnOLJmuPYR6p7tfbTObwhDcTzP58URqGVxeRDsO0%2F9CQpjr0fdd49LLpAyGgV%2FeBGlzUergqtXEtFGQLQ4Uep%2FxSW5eweetcZxPb%2BpRySHz5%2FMIha7NHpE6JpBTCIq5dlE412Q%2BzEZkkLVxQMxwLboagcbopc1WOv8NtZJ9R%2BUN99UNE%2FAsahpCiKSfZ7LOMPSLpb8GOqUBI5mZXiH3gDH1nFGBLRnlg7uAcX%2Fac42ZhHosN8Cd1N%2FlzK2zXhj7%2FsPNiJy2x89EwU2Pjf2FWqMOsm5DSSIY9kHqplz2uux9TessqwR6XX9m1Ls5aFHw0cwGa7O6OxoexrLso1TUWf71AKepZMTxyzFQPp2bwFxE1jV%2BEYToJfQPBrnwfKAujNnWL%2F25vop66X1scKARMoIVQ5VgDMPF5qfsieBa&X-Amz-Signature=b93835a3ea745202068a4c83f32e9c5c399cc4cb80587c27dfee3f38aa60ca18&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466454RRMAL%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T140229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIQC%2B2UpEksQX2pY0F7vCo7iEaqQ6MXxWHkroDU2%2FZhCZiQIgBgOJGar%2FRHDBBkC7G%2FSANI%2BSI%2F5lu629Xt6lMtgz4aEqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI3k0yom2z3SDuxZ7ircA3AD793%2F191Iu433zaOs%2FVYiWVwDNacLzCSpa4L8cPybtlb%2BBXSLmZCeVUL1tAee81JN2uhOF1jUuI0l4TD6bzFsEom8MRa28%2BGzGur%2Fzeg8vGXXipzuZk8g6jFbhvbQ0RYLlVt06uC1ZFUi0vARqINzsbhuwZV0gRya06XjDpgNinxyQn%2BWe0e8o1rdyPxiFQtLVGCJ4ZYpE72EwakYxoqjqxHLcnidGqf8h2pJpo5AyNP%2FoYgUQ4NAV%2B%2FHX2fXSDk416jRU1qqZqcyi8zQ%2FX9s5lAs%2FG%2BFcWgPBC13T%2FyAgKZZ5MmGuu9HgywYqMAipqHe3Vw3S2iNRSo0nxdQm9c3u8zJRJ4mQaEjSmr7C8tJ%2B%2BOd0A7usGGJosRA4OkbpO5mw3ehZtHJk4YX7UKgoOcSCQLFE3g39Xy82Qmf0JExTr9ouI1nGQr%2BTq8P7fnOLJmuPYR6p7tfbTObwhDcTzP58URqGVxeRDsO0%2F9CQpjr0fdd49LLpAyGgV%2FeBGlzUergqtXEtFGQLQ4Uep%2FxSW5eweetcZxPb%2BpRySHz5%2FMIha7NHpE6JpBTCIq5dlE412Q%2BzEZkkLVxQMxwLboagcbopc1WOv8NtZJ9R%2BUN99UNE%2FAsahpCiKSfZ7LOMPSLpb8GOqUBI5mZXiH3gDH1nFGBLRnlg7uAcX%2Fac42ZhHosN8Cd1N%2FlzK2zXhj7%2FsPNiJy2x89EwU2Pjf2FWqMOsm5DSSIY9kHqplz2uux9TessqwR6XX9m1Ls5aFHw0cwGa7O6OxoexrLso1TUWf71AKepZMTxyzFQPp2bwFxE1jV%2BEYToJfQPBrnwfKAujNnWL%2F25vop66X1scKARMoIVQ5VgDMPF5qfsieBa&X-Amz-Signature=60a353e3f207bad4aa5e31462bbedb9ff4aeeb9debdf9d61e0f5c9e088be3e14&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
