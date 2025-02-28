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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIWL7PJT%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T003646Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJIMEYCIQCsiA%2FCBrhr9CYG92yQZI42T7ljW2YZkbqnMvdgiVyoNwIhAINNTTEKhH8ELEieZ%2FTlBE58qHLuY5irGkyMzTsnoM0eKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxUFw0EGmQ7mI1fQQAq3ANSyuEWgmsLlr7NKljPfmO1KvbuKqzTsjnOWxt2QFW5t5sXUrf1baCriTD9iTTuxCMMcYr2MWuRK%2BerbHFrZL25uPnj7xBw9GhOX2kM6BQgOWKih0zSm%2BjezArtx3fsKHZxT1ggxv2t9wqmbG7Jgi273LGxLqMPKq4rii1UsXFTWVRCvcdVdU2hJ%2FxjPPfuASAxKqGmAgJl21zOmjcvnffM3%2BnfnRxKZBCHGIm%2FznWlvgpub%2FtaMD2322LK2ElQtortWQLiqa4NuQVB1h%2FZWEcflnbUnvzOqZzNDH56QaxiWBLfI0BWtHRzNybLMu2Ga1J3cdyl0YHcJu%2BQhFIwIj9Rh4il%2BCI7VwnIIAiwvHLyIf9c17%2FY2lU9LP4ehCg3mAI5trfLJodHgbGJj0%2B04QwBWplRO8B%2B%2Fkhm3Fvh3QQvo0%2F82JFe6BZ3mgnEr5XRNl979VMl%2BOoonlwGXdA6kYc%2FwTVaed8pOkNLEG2hRg3eADu39W76pYpYtnMiXfoA96tHT6YyMOEqas90Y5AR02d76DetkZ3%2F5SgLqJdffjuf2qOseWUpWKHNC1jzPuUIzaXsFMfgCWkjyrCAFBaSF2wYhnVoOE0GDhQed7imiN228goFSMQC6qNHQdOacjCg9oO%2BBjqkAeGL0JHEAi3xnlOloEGUaX%2ByO0adWKtji1qhoNbMO73elaVm8Nq0r5IOx12ktsFvqIFg1sJ2zsOdhg8JyZszPP7Sz6skJ4ZxZyBhpzeeSPPmyL6agnpFWq1PFu%2F7m1RFGrcKykpdvjl3ucvDUQxBjNlE05zBSxJ7JlrCk3QSjcavRNNibjJZFGjL3k7F4CQ49BdunYhm75GqKHaLkKXxYoBY%2Fjvg&X-Amz-Signature=22a6633874edc7fe86040da5aeffaf501ceedafc46491d9314eb7a75e8b9b1bc&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIWL7PJT%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T003646Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJIMEYCIQCsiA%2FCBrhr9CYG92yQZI42T7ljW2YZkbqnMvdgiVyoNwIhAINNTTEKhH8ELEieZ%2FTlBE58qHLuY5irGkyMzTsnoM0eKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxUFw0EGmQ7mI1fQQAq3ANSyuEWgmsLlr7NKljPfmO1KvbuKqzTsjnOWxt2QFW5t5sXUrf1baCriTD9iTTuxCMMcYr2MWuRK%2BerbHFrZL25uPnj7xBw9GhOX2kM6BQgOWKih0zSm%2BjezArtx3fsKHZxT1ggxv2t9wqmbG7Jgi273LGxLqMPKq4rii1UsXFTWVRCvcdVdU2hJ%2FxjPPfuASAxKqGmAgJl21zOmjcvnffM3%2BnfnRxKZBCHGIm%2FznWlvgpub%2FtaMD2322LK2ElQtortWQLiqa4NuQVB1h%2FZWEcflnbUnvzOqZzNDH56QaxiWBLfI0BWtHRzNybLMu2Ga1J3cdyl0YHcJu%2BQhFIwIj9Rh4il%2BCI7VwnIIAiwvHLyIf9c17%2FY2lU9LP4ehCg3mAI5trfLJodHgbGJj0%2B04QwBWplRO8B%2B%2Fkhm3Fvh3QQvo0%2F82JFe6BZ3mgnEr5XRNl979VMl%2BOoonlwGXdA6kYc%2FwTVaed8pOkNLEG2hRg3eADu39W76pYpYtnMiXfoA96tHT6YyMOEqas90Y5AR02d76DetkZ3%2F5SgLqJdffjuf2qOseWUpWKHNC1jzPuUIzaXsFMfgCWkjyrCAFBaSF2wYhnVoOE0GDhQed7imiN228goFSMQC6qNHQdOacjCg9oO%2BBjqkAeGL0JHEAi3xnlOloEGUaX%2ByO0adWKtji1qhoNbMO73elaVm8Nq0r5IOx12ktsFvqIFg1sJ2zsOdhg8JyZszPP7Sz6skJ4ZxZyBhpzeeSPPmyL6agnpFWq1PFu%2F7m1RFGrcKykpdvjl3ucvDUQxBjNlE05zBSxJ7JlrCk3QSjcavRNNibjJZFGjL3k7F4CQ49BdunYhm75GqKHaLkKXxYoBY%2Fjvg&X-Amz-Signature=6da8bec1dba63f465c1e07b42ad3993b8873a8c57d2f0e92937e32f91381bc4e&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
