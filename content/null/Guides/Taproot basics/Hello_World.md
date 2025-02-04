---
sys:
  pageId: "b2ee05fb-e371-436a-9c42-fdfc687f0bf6"
  createdTime: "2024-06-24T23:51:00.000Z"
  lastEditedTime: "2024-10-06T19:58:00.000Z"
  propFilepath: "null/Guides/Taproot basics/Hello_World.md"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5NNLKRK%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T220712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQC%2F%2Brrv2uhP%2By5Hjjv0%2FmPfrmbTplz%2BXrnXEH0644NoVwIgd4fg7Re0DxYwWfRgSUiANjAZsRzEI9M4Jgjvg3LB4fQq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDGK6jbr4rOnxG6QpgCrcA9llqECYCFNJVgG2wtElbrBxDUGwyYswtvSnh%2Bm2GURfe7qfkoufbH0vVITXBOThQ3Nzmx5KXWH2LbH5hGqwrbhpGSiE3tf1fMfnkWa1dkWVgR4SMwQbG%2FQaMLX6nCJlhuilVa6GuIFatxjvPstuP%2FNSJP%2BIHT%2BgucgD9TgPcPDH64nyY8UVMhuBDfG3YZY25SmMlYRtwDz6BBv1v6cFpt6TIkLEKTH4n8k%2B%2FvmcihD13VIZnW9XnlRjMSc9BczbUjBz1vUVWH%2FwIpRQr0ANJ60Uxe%2BGxtsvoq1fpuwCNCRzdvdQ%2BhEsNf0Ud4tSwzWZI2KMGhr1qKqIEFE5%2FbY9U4xSsphpH1UMU0qoqhuZWW1rBFwv6C9IkLbpqjhIomATGkINv3Gjd6%2BI8VGCuN2p8eRPvV5FGYFSNaQoDVTiYK7cxSntibq3sW%2Bjyk8ZmAeW9KnOeFfPkSYqbjHL8GpAAM5Yv5h1CDYXNBQOvHiu%2BfroOFdZNfwaFnmgAqnUVdSesoEIT9N7tchFhDBgmDqYUqwVHli0AuII%2BFGIYOzp25gigw%2F%2BpeDb916jKgfbcr6XYmUXeVnd%2FiXsvooHvRZ5w3ivRXr%2Bu6Nhk4a3WmIVnfTWUPh7poLIQYTHfQtKMMOVir0GOqUBbXCuazIEbtDE7BWc0ijrJL9sZ20zofVrxOg55RpG4hdP7hK6m0lPJ%2FXjfU5PETRK5LbPlQSMRbOnFjMBHtgcnxF8G4f5mAP%2FcZk8fzAmnb419OGkvgYIDiNP0Ca%2FMMdLzaLuj6x3%2BSwAdzodLWUI%2F096SjCjMytDE3ycn4ON%2BRyxYxHA5kprqJ2WQM7gVpJmYX2OSrUr7f45weZvXf2v6JSeD6qO&X-Amz-Signature=bcdca979477c1d2a477e662972d9eb371729728d6ccad0e2c895cce959dde22b&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5NNLKRK%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T220712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQC%2F%2Brrv2uhP%2By5Hjjv0%2FmPfrmbTplz%2BXrnXEH0644NoVwIgd4fg7Re0DxYwWfRgSUiANjAZsRzEI9M4Jgjvg3LB4fQq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDGK6jbr4rOnxG6QpgCrcA9llqECYCFNJVgG2wtElbrBxDUGwyYswtvSnh%2Bm2GURfe7qfkoufbH0vVITXBOThQ3Nzmx5KXWH2LbH5hGqwrbhpGSiE3tf1fMfnkWa1dkWVgR4SMwQbG%2FQaMLX6nCJlhuilVa6GuIFatxjvPstuP%2FNSJP%2BIHT%2BgucgD9TgPcPDH64nyY8UVMhuBDfG3YZY25SmMlYRtwDz6BBv1v6cFpt6TIkLEKTH4n8k%2B%2FvmcihD13VIZnW9XnlRjMSc9BczbUjBz1vUVWH%2FwIpRQr0ANJ60Uxe%2BGxtsvoq1fpuwCNCRzdvdQ%2BhEsNf0Ud4tSwzWZI2KMGhr1qKqIEFE5%2FbY9U4xSsphpH1UMU0qoqhuZWW1rBFwv6C9IkLbpqjhIomATGkINv3Gjd6%2BI8VGCuN2p8eRPvV5FGYFSNaQoDVTiYK7cxSntibq3sW%2Bjyk8ZmAeW9KnOeFfPkSYqbjHL8GpAAM5Yv5h1CDYXNBQOvHiu%2BfroOFdZNfwaFnmgAqnUVdSesoEIT9N7tchFhDBgmDqYUqwVHli0AuII%2BFGIYOzp25gigw%2F%2BpeDb916jKgfbcr6XYmUXeVnd%2FiXsvooHvRZ5w3ivRXr%2Bu6Nhk4a3WmIVnfTWUPh7poLIQYTHfQtKMMOVir0GOqUBbXCuazIEbtDE7BWc0ijrJL9sZ20zofVrxOg55RpG4hdP7hK6m0lPJ%2FXjfU5PETRK5LbPlQSMRbOnFjMBHtgcnxF8G4f5mAP%2FcZk8fzAmnb419OGkvgYIDiNP0Ca%2FMMdLzaLuj6x3%2BSwAdzodLWUI%2F096SjCjMytDE3ycn4ON%2BRyxYxHA5kprqJ2WQM7gVpJmYX2OSrUr7f45weZvXf2v6JSeD6qO&X-Amz-Signature=e57d987462d7738471c2fde110ed1f3ec12a3ad2483a7ff5c44575089dc00d09&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
