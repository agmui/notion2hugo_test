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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQAQWLMC%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T033957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCOc%2FDIu40AKNdKLde2wSLFNNOQe8S%2BLSl382wepef2SgIgaRMxJFarDYf5KtO2AuuTigZ%2BXH4E1t96kAStmGxzY1sqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN2gs8W3IDvpEL4O1SrcA8EEDmuVKowrcZbtkx%2BZI0XLC0a0UDUah6Foh%2Bf3n4PcwdYj%2FkYCUItzuD%2FxhWsB%2BXOskDhFsNyah1nKIWC9AxkFWcEj7eIW186IGT0Dgy2%2FP95rLJgZkbvrVvG81oI0Ufx%2F5Jx7R0kj8nS6GtEFpyp2IG2h6BnthollyE5w3q9M1z43YyJaMka%2FfbN61i9vbHngCM19SzBq8VqNWwNMLHI4mdS9kXqT4ZkbREQjlHpDyOVJC3wB2gB9CzCz86mj86fIJNAMnDl84l%2FPoxjZ16St6iGH%2FqpvFpFxYuke3Dw5MFYI3sxungcG1GdOmNFezCwQFqYR6AZe%2BSN1KI6aPyCPZW2bd8YgdHhZClzeLXUBSulzpASgC9WUFT%2BuX3kWsXSqtJ3zYLzOsaOyi6OP1HVAO9nve7MXP%2BL91vNmc2HcJ5xqkpMXVsYgNHUJjAkeDtBpi0iwoorXEYhS1FJRD9M%2B%2FMkY%2BGnxURM0A%2Fu6wVKMCihfPBj2uzKuDriRjs4jL%2BzUnT80dz%2BMDOQoeeG9bIP84o9kdpMUs9zXA%2B4a7BZkwb6sjqEbNSuXCARnQBznz9tFyPdQM4neveNN4xOgzVE%2F%2FgHkpzE2ROvaQKnkfPDiNEsEgnJ5zrHpkpRtMLSO08IGOqUB3xrs5qlolb%2BJW9433wYVg7N%2BnZoYbkvZaxP4U38QK2oUasksLzJMJhkD%2BAaD5p9qOKymbNaFkr0p2TubsJ0bzpVC4QG9vcr0upPdRO4QGX4MThPof8kJqIA1Ly%2B%2F2OGl5Sm3RHri%2FwaW2kqBEeAGu302rYAAz6RuXztO4zb9cOBGdC3G12eHTM93xcYuOVgfabx8hJXB9xxdfkR597ryAQ2p4%2By3&X-Amz-Signature=c124b2b99460b27935e7736a768f7abf34a9eefe64bdd138dc537b79aad7d05a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQAQWLMC%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T033957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCOc%2FDIu40AKNdKLde2wSLFNNOQe8S%2BLSl382wepef2SgIgaRMxJFarDYf5KtO2AuuTigZ%2BXH4E1t96kAStmGxzY1sqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN2gs8W3IDvpEL4O1SrcA8EEDmuVKowrcZbtkx%2BZI0XLC0a0UDUah6Foh%2Bf3n4PcwdYj%2FkYCUItzuD%2FxhWsB%2BXOskDhFsNyah1nKIWC9AxkFWcEj7eIW186IGT0Dgy2%2FP95rLJgZkbvrVvG81oI0Ufx%2F5Jx7R0kj8nS6GtEFpyp2IG2h6BnthollyE5w3q9M1z43YyJaMka%2FfbN61i9vbHngCM19SzBq8VqNWwNMLHI4mdS9kXqT4ZkbREQjlHpDyOVJC3wB2gB9CzCz86mj86fIJNAMnDl84l%2FPoxjZ16St6iGH%2FqpvFpFxYuke3Dw5MFYI3sxungcG1GdOmNFezCwQFqYR6AZe%2BSN1KI6aPyCPZW2bd8YgdHhZClzeLXUBSulzpASgC9WUFT%2BuX3kWsXSqtJ3zYLzOsaOyi6OP1HVAO9nve7MXP%2BL91vNmc2HcJ5xqkpMXVsYgNHUJjAkeDtBpi0iwoorXEYhS1FJRD9M%2B%2FMkY%2BGnxURM0A%2Fu6wVKMCihfPBj2uzKuDriRjs4jL%2BzUnT80dz%2BMDOQoeeG9bIP84o9kdpMUs9zXA%2B4a7BZkwb6sjqEbNSuXCARnQBznz9tFyPdQM4neveNN4xOgzVE%2F%2FgHkpzE2ROvaQKnkfPDiNEsEgnJ5zrHpkpRtMLSO08IGOqUB3xrs5qlolb%2BJW9433wYVg7N%2BnZoYbkvZaxP4U38QK2oUasksLzJMJhkD%2BAaD5p9qOKymbNaFkr0p2TubsJ0bzpVC4QG9vcr0upPdRO4QGX4MThPof8kJqIA1Ly%2B%2F2OGl5Sm3RHri%2FwaW2kqBEeAGu302rYAAz6RuXztO4zb9cOBGdC3G12eHTM93xcYuOVgfabx8hJXB9xxdfkR597ryAQ2p4%2By3&X-Amz-Signature=832d582aaf7e8d875a3d2f3b7d74c0432d555fb7f2d33217b2a944ab82294d86&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
