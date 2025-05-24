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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UVTNAD5%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T210710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIQCMiRItrztsBTNfxxTy98gdY%2FvY4ien3Hb2svnkn87k2AIgfeClXZkNjQO09Rym9qd9OKbZFv7pQN90dS8eCqMkoOIq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDPo0Z9sE9phIIYVrjircAx2EzmYy13AXf8f5r%2FJ5qJv4H3SDOhcz4ceJLzE3aZ%2Bti9%2BImI26Y1osC4L0YMRtlc0gCGNauyIZQ40QPfBK2C4KB0T9DUqAz7yNssYw5wA82ro18My31JmK4Nnd%2BifB%2FuMD0EotEURkNaonZ5aB3aY3EeLysg4eRdgEOyV3TjWSAiT1Y0rYYWKgWNpL%2B8ZiBaewCVTVA8oZOFxULr6z1j69wfnvzBxPWzbBFYJgCqTGtg8d12PEK0j0XjKZcUt%2FON5%2F%2FdOuYAB%2BRMpfXZQyBov8uWaGTei5OnNBDiJEMSVPHKfNlvY3Au3wXWLApRWbE9dMBzJ2BJoD9F8Rf4U19u0I4dR1Y8FXyaeWFEVPVIKrJ%2BSNfVSnYQPykNjYcMMfIQ1Wxg2B%2BBh043xT2VXpmo5r6MOP7%2BIUy6Y0n2Fb%2F%2FbnxMiceXn9%2FwBvn0ij%2FZDKUgT6dvzWLKMWC%2BfflTTeR00rLLldQQJr08iUjo8Mxg%2FBe268fzPoyd5zoMES8FjdfYmWUYcNUoz7Fy4w46yELfWBvihpH1ehwDdnZUqx5d4rLvDbqqGbuDhxu9TZVOes3bWWnfxnWUPoilHM5YX79rRrcNI0P1XcdXOFqY6q08jKxaRA8mOFdPTh6FO0MP6VyMEGOqUBxIEN4gTHnIXa9Q97c2R9xxZJ1qTxFXn%2BvNFSXh30X5I2%2BFYOIri0AdzTRBGctJkgqaObU6Ng5WOFRhzvhNnl4vbdJTERWVdHece81WXWA6YUST8fdHOaKuT3k8abpKbFkTFmGutMWGowUFLTCFm%2FZnrzml981V7yveE6znVCwg5HzYlnKY%2Bb6HQ1Dppv9%2BBLZoj1y3uY3XBAyBgwS3%2BR5e8SrFAw&X-Amz-Signature=d9575ad8f3be63702b1fdc4d8f0d18bdd19c9614ff0221f3cbc075ee9d82bea8&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UVTNAD5%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T210710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIQCMiRItrztsBTNfxxTy98gdY%2FvY4ien3Hb2svnkn87k2AIgfeClXZkNjQO09Rym9qd9OKbZFv7pQN90dS8eCqMkoOIq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDPo0Z9sE9phIIYVrjircAx2EzmYy13AXf8f5r%2FJ5qJv4H3SDOhcz4ceJLzE3aZ%2Bti9%2BImI26Y1osC4L0YMRtlc0gCGNauyIZQ40QPfBK2C4KB0T9DUqAz7yNssYw5wA82ro18My31JmK4Nnd%2BifB%2FuMD0EotEURkNaonZ5aB3aY3EeLysg4eRdgEOyV3TjWSAiT1Y0rYYWKgWNpL%2B8ZiBaewCVTVA8oZOFxULr6z1j69wfnvzBxPWzbBFYJgCqTGtg8d12PEK0j0XjKZcUt%2FON5%2F%2FdOuYAB%2BRMpfXZQyBov8uWaGTei5OnNBDiJEMSVPHKfNlvY3Au3wXWLApRWbE9dMBzJ2BJoD9F8Rf4U19u0I4dR1Y8FXyaeWFEVPVIKrJ%2BSNfVSnYQPykNjYcMMfIQ1Wxg2B%2BBh043xT2VXpmo5r6MOP7%2BIUy6Y0n2Fb%2F%2FbnxMiceXn9%2FwBvn0ij%2FZDKUgT6dvzWLKMWC%2BfflTTeR00rLLldQQJr08iUjo8Mxg%2FBe268fzPoyd5zoMES8FjdfYmWUYcNUoz7Fy4w46yELfWBvihpH1ehwDdnZUqx5d4rLvDbqqGbuDhxu9TZVOes3bWWnfxnWUPoilHM5YX79rRrcNI0P1XcdXOFqY6q08jKxaRA8mOFdPTh6FO0MP6VyMEGOqUBxIEN4gTHnIXa9Q97c2R9xxZJ1qTxFXn%2BvNFSXh30X5I2%2BFYOIri0AdzTRBGctJkgqaObU6Ng5WOFRhzvhNnl4vbdJTERWVdHece81WXWA6YUST8fdHOaKuT3k8abpKbFkTFmGutMWGowUFLTCFm%2FZnrzml981V7yveE6znVCwg5HzYlnKY%2Bb6HQ1Dppv9%2BBLZoj1y3uY3XBAyBgwS3%2BR5e8SrFAw&X-Amz-Signature=fc48fc3757625a1ac92b4dfee9817ce32b175d1482635b832c991c74724e04f9&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
