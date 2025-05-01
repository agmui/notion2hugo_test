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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVDSDYVV%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T070909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCIDU4Z%2FPq4R1vRhKw9nE4K4OO3t7FiXOJlYMHbunRJ2qkAiBryJxGSESTrL6pz1pVOCIYVmM%2BZcs%2BS71S%2Bsv2zkMv2SqIBAi4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMX%2FMz0oegl44ClDONKtwDSpRGltmfZrpRu61JyzsZKBWc2inUp9E6LW7AIWr8QmxkQeu%2FaAryqBnSLVwevfpSPhWzR%2F5ZBgfn1zyoHlpkpGF1aqVY2coPYT2iae4yztsa1CvbNb75PtEaWeAxVM1wXYI7N3FZoQh6gjyjb%2F5dUGLcbR1%2BBhccArE5oHrkT8OkcNqQdAvqpnX3EWlwMUMojcQaNIzjIdRAMpu01RySmiUVbTbjcR0WJHhJgBqtnqLPPawZKoMvVRi3K8RPvtqzbFM39tcbrDvuyrp3AdV3Zq3e2ODBu2wj0FI2Ar6DjIHE2PoYzx0GMyPhBjO4qtPqTjzwKN8k8Etiu4fFxo3hEUpF4CNhaJnrYzV2l8e3sbrxxQOYHbXQWXKRXNPC6tULRQqRoHCJyb5WYB708VC7FeLslU%2BgVDuxUMQNZQ6V9bF8tVoUvZwHdOg0cd4jzifuaevjf9TLy05%2FHTOCoMzxcFb%2FVmWtgdDU7xkbj92MefCwBuFhyRT1TxSM%2BH0AUivdND1m7hPNEC1fwof%2Fb2St43Orq6YGVG6PL813lAR9h8HdMsz5DrNAiCRfTV1KNlhuPvAx6%2BZgJrAVJEgHLTx6xubhfJE6I5H7xCT%2B7FiGMwok3Wu0p2VqUx1fxWswubHMwAY6pgGzHVRwqckSDkN6KUCgVezCFAsv3fJivdTSoZBxz4UrN4QTOIuQ3fXW6p9ZuVQHAVAv3DMWfJt4tMVz0%2BcdRnlMn25oTcjpt8vTWHCtyy0tlcMgY0Cv%2BAjOpJ%2B0sMZ2yTTKD0BgFSRErLkPtpMFBiexUn159ldhbGXvSjM3v18wpfam%2FdQ%2BFEAZ708AKUXd5zr2aSuWI90v15mzCQWWMZ46SYS4ekVy&X-Amz-Signature=05bd83c55d4ae7c2c5966090f67b588f167a9763a34aa0db70017ab372a5a26c&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVDSDYVV%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T070909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCIDU4Z%2FPq4R1vRhKw9nE4K4OO3t7FiXOJlYMHbunRJ2qkAiBryJxGSESTrL6pz1pVOCIYVmM%2BZcs%2BS71S%2Bsv2zkMv2SqIBAi4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMX%2FMz0oegl44ClDONKtwDSpRGltmfZrpRu61JyzsZKBWc2inUp9E6LW7AIWr8QmxkQeu%2FaAryqBnSLVwevfpSPhWzR%2F5ZBgfn1zyoHlpkpGF1aqVY2coPYT2iae4yztsa1CvbNb75PtEaWeAxVM1wXYI7N3FZoQh6gjyjb%2F5dUGLcbR1%2BBhccArE5oHrkT8OkcNqQdAvqpnX3EWlwMUMojcQaNIzjIdRAMpu01RySmiUVbTbjcR0WJHhJgBqtnqLPPawZKoMvVRi3K8RPvtqzbFM39tcbrDvuyrp3AdV3Zq3e2ODBu2wj0FI2Ar6DjIHE2PoYzx0GMyPhBjO4qtPqTjzwKN8k8Etiu4fFxo3hEUpF4CNhaJnrYzV2l8e3sbrxxQOYHbXQWXKRXNPC6tULRQqRoHCJyb5WYB708VC7FeLslU%2BgVDuxUMQNZQ6V9bF8tVoUvZwHdOg0cd4jzifuaevjf9TLy05%2FHTOCoMzxcFb%2FVmWtgdDU7xkbj92MefCwBuFhyRT1TxSM%2BH0AUivdND1m7hPNEC1fwof%2Fb2St43Orq6YGVG6PL813lAR9h8HdMsz5DrNAiCRfTV1KNlhuPvAx6%2BZgJrAVJEgHLTx6xubhfJE6I5H7xCT%2B7FiGMwok3Wu0p2VqUx1fxWswubHMwAY6pgGzHVRwqckSDkN6KUCgVezCFAsv3fJivdTSoZBxz4UrN4QTOIuQ3fXW6p9ZuVQHAVAv3DMWfJt4tMVz0%2BcdRnlMn25oTcjpt8vTWHCtyy0tlcMgY0Cv%2BAjOpJ%2B0sMZ2yTTKD0BgFSRErLkPtpMFBiexUn159ldhbGXvSjM3v18wpfam%2FdQ%2BFEAZ708AKUXd5zr2aSuWI90v15mzCQWWMZ46SYS4ekVy&X-Amz-Signature=c05bc17c2e421ee96d9b37ecc8aaaf8610c7d05cd20aa9a0a73a869ba79756a5&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
