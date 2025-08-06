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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YWKOLPY%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T230919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJIMEYCIQCSEIQe4IqKaKHFgbvprcYAAHfJP22CjM2Tc%2FBSmcaKTQIhAKlikUUjuZoPcoI7daESc%2FbkFKK3h6iEdXGIDY5WkyP9KogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwjSdTrLdp41IUbMQQq3ANxk7kXq%2BJ6AMV64mENYwZm54gvvKstNQkNJWqUc%2Bs4Ix%2BaPPIhtOTKowJfzU9CSBtiZUdeMhA2t5WPHUgAfWTueLBXlbQK3Gr2bP%2BufVgb9C5L1f6FvY38X4v0492hNUPIAbTfmnV0KKedwC5rAnCKKBjcBU%2FkGMjayU5UzW8H98DrYCk7uuRq198DLlq6WvSKsNvKw9WyF5FfBgzI7MMZYcFp3FlegcAM5nJBL1%2BjGtzi%2BykJZtGorSV2mJdPu5WqjOKazAddi%2B5fxRAzPt1a4N3Ey1uGx%2FLkwvmwhsdq85PMGvyUPhDsU%2FGfJR5n2LrLIXIQhOiks2KZ3%2FawOzINQNden%2F2TNjxrBF9dysttQInvIeaw%2F2Kb0eNUPY3skw10NNdIcR0INUe049xon0GJvojRi7Up3D6e1tnqqiruE9TTOTH8j1U7LFAlyL7bbTbSrFrHJuN34zgssMcPmklzkCLbxdslCmbYP8NvsQls0mhf4nW9yWig3L9fTWXYft0de1OuhQpJmQhkteuVUtX1b%2FkHt9wk5EqIptfhVNBQaTpX4cE2vUU5GfpPpER8oKkc7bVscz%2FqGtdvQudQzn8L5VGdg940EJrYka4nGFMChMisB4r2FLxYhIzNGDCrs8%2FEBjqkAQ5RQdXUyMu%2Boh7ZBLglozTgUSW57zTnETxvo6yOpQPGjSlzRPSpYcvB43ckwpiv%2B7gtoTMg7g%2BCChtYsld%2FEU4km3N08GXsZjLE6HOCok8fic70CxeemPsiBSPkiKjIzN%2FD1Jtz%2BxsMjbpli8uvuYm5EyrTIydk0JFRZ1UEAnt7QEsu3vH9cRKpKbs0KK8B2lv8tshmZ6p0430KE03tRplXf3Yw&X-Amz-Signature=c76702fec62ab69e80ecdcd7c0166359ba3dc4cea90099902e8dcd1cd857d2a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YWKOLPY%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T230919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJIMEYCIQCSEIQe4IqKaKHFgbvprcYAAHfJP22CjM2Tc%2FBSmcaKTQIhAKlikUUjuZoPcoI7daESc%2FbkFKK3h6iEdXGIDY5WkyP9KogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwjSdTrLdp41IUbMQQq3ANxk7kXq%2BJ6AMV64mENYwZm54gvvKstNQkNJWqUc%2Bs4Ix%2BaPPIhtOTKowJfzU9CSBtiZUdeMhA2t5WPHUgAfWTueLBXlbQK3Gr2bP%2BufVgb9C5L1f6FvY38X4v0492hNUPIAbTfmnV0KKedwC5rAnCKKBjcBU%2FkGMjayU5UzW8H98DrYCk7uuRq198DLlq6WvSKsNvKw9WyF5FfBgzI7MMZYcFp3FlegcAM5nJBL1%2BjGtzi%2BykJZtGorSV2mJdPu5WqjOKazAddi%2B5fxRAzPt1a4N3Ey1uGx%2FLkwvmwhsdq85PMGvyUPhDsU%2FGfJR5n2LrLIXIQhOiks2KZ3%2FawOzINQNden%2F2TNjxrBF9dysttQInvIeaw%2F2Kb0eNUPY3skw10NNdIcR0INUe049xon0GJvojRi7Up3D6e1tnqqiruE9TTOTH8j1U7LFAlyL7bbTbSrFrHJuN34zgssMcPmklzkCLbxdslCmbYP8NvsQls0mhf4nW9yWig3L9fTWXYft0de1OuhQpJmQhkteuVUtX1b%2FkHt9wk5EqIptfhVNBQaTpX4cE2vUU5GfpPpER8oKkc7bVscz%2FqGtdvQudQzn8L5VGdg940EJrYka4nGFMChMisB4r2FLxYhIzNGDCrs8%2FEBjqkAQ5RQdXUyMu%2Boh7ZBLglozTgUSW57zTnETxvo6yOpQPGjSlzRPSpYcvB43ckwpiv%2B7gtoTMg7g%2BCChtYsld%2FEU4km3N08GXsZjLE6HOCok8fic70CxeemPsiBSPkiKjIzN%2FD1Jtz%2BxsMjbpli8uvuYm5EyrTIydk0JFRZ1UEAnt7QEsu3vH9cRKpKbs0KK8B2lv8tshmZ6p0430KE03tRplXf3Yw&X-Amz-Signature=3ab7b4ec7f12a8f376d3e33ffa35eac562a7d634fb7fe98906a5feab2ff7ddfd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
