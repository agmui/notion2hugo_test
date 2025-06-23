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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KWBBN7R%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T210817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIAul21VHe%2B3G4ikLU%2BYokfugxml6wlQXg6505PELa795AiEA%2BUzIJb8j6rdgCJQeDpX%2BlbnWeCSk8idSau4J8JOmjnEq%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDG%2B844jEOKuJZPD%2FxCrcAxuS9eALi7NAAsRs6il82akZvSTvuvF7RMSI1au685z%2BBX1lLhibTjLlFUS9ufMmtMfCIBqSBDcnAXq2HIHTN%2BxjAxp7GQusqlGP%2B09dxdaJr%2BPw68E0aus0mUGKpPKu3XcCeaies%2FzQc7y4TgzD1xLY3Tg0zV38nTDKs1RxopVk%2Fuxjquc5rGZBs54cF7D4gjo3fHAAomiaCvS309U3LsmoMZNZ5IF8ZRe%2FRslpGNnf96ID3TKPz9LuFLVG2GGxXn3BzU2sDb1%2FytoDjG1X1kx5I50Vaa2R%2FpHnWaYf5pbfqFBy3PPjjApHjq5irlhmNHbY5%2FC4l2x6GBsGDlJwa0wEszeOY2I0FDqz5OuC0n8sZzf3rG%2FKSKZ6Sca74AqgMSZ2cPvCsnWF%2FrA3Jt3dKbl07w%2BEYP4Vop%2BaGD%2BGLCDh8cpJiIbPvwK9DqPoVuEmmSOWK74iFFCK8tR49jqV8NOCApqvLsRo6FacWjuaNDQQcXVRSC%2B6KN2UQ9rtOeRNrwbt%2FIoW%2FJ375jebYewKFNqzGrE9aYpPIb4vYvNHUc%2F5REOI00b%2FyrzNAlM%2F3PR%2FEvIOmKUP4J9d3LrMLL88kyHlxckwRP0OdxsWu63J301PNlnDAqVDRm%2BrduXbMKbt5sIGOqUBYkazf1phBBQmoK%2Fyx7smuf3Z1TFUQAk8WhGTUE7FrpbO%2Byfq%2Bl2ewoYqakht2%2BVfPjPzRyV12p4HxsGN4uSYvZE%2FSYfblXnhprWJg7TrDyEU%2BdBj3S2heUy5FvXg9G%2Fa0YoxSaamzho2l6unveF4uiP5QOcXDrDK3nmZv632XCdUyg%2F14Gg%2BxsKAzXd7qhruEWUPL8uY%2BXqFZaVN46ZoDfxCh9IA&X-Amz-Signature=b8aebcfd3c033c210a4e06e06ba6e339c43d921c1c67640c51c9413d5918a3d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KWBBN7R%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T210817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIAul21VHe%2B3G4ikLU%2BYokfugxml6wlQXg6505PELa795AiEA%2BUzIJb8j6rdgCJQeDpX%2BlbnWeCSk8idSau4J8JOmjnEq%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDG%2B844jEOKuJZPD%2FxCrcAxuS9eALi7NAAsRs6il82akZvSTvuvF7RMSI1au685z%2BBX1lLhibTjLlFUS9ufMmtMfCIBqSBDcnAXq2HIHTN%2BxjAxp7GQusqlGP%2B09dxdaJr%2BPw68E0aus0mUGKpPKu3XcCeaies%2FzQc7y4TgzD1xLY3Tg0zV38nTDKs1RxopVk%2Fuxjquc5rGZBs54cF7D4gjo3fHAAomiaCvS309U3LsmoMZNZ5IF8ZRe%2FRslpGNnf96ID3TKPz9LuFLVG2GGxXn3BzU2sDb1%2FytoDjG1X1kx5I50Vaa2R%2FpHnWaYf5pbfqFBy3PPjjApHjq5irlhmNHbY5%2FC4l2x6GBsGDlJwa0wEszeOY2I0FDqz5OuC0n8sZzf3rG%2FKSKZ6Sca74AqgMSZ2cPvCsnWF%2FrA3Jt3dKbl07w%2BEYP4Vop%2BaGD%2BGLCDh8cpJiIbPvwK9DqPoVuEmmSOWK74iFFCK8tR49jqV8NOCApqvLsRo6FacWjuaNDQQcXVRSC%2B6KN2UQ9rtOeRNrwbt%2FIoW%2FJ375jebYewKFNqzGrE9aYpPIb4vYvNHUc%2F5REOI00b%2FyrzNAlM%2F3PR%2FEvIOmKUP4J9d3LrMLL88kyHlxckwRP0OdxsWu63J301PNlnDAqVDRm%2BrduXbMKbt5sIGOqUBYkazf1phBBQmoK%2Fyx7smuf3Z1TFUQAk8WhGTUE7FrpbO%2Byfq%2Bl2ewoYqakht2%2BVfPjPzRyV12p4HxsGN4uSYvZE%2FSYfblXnhprWJg7TrDyEU%2BdBj3S2heUy5FvXg9G%2Fa0YoxSaamzho2l6unveF4uiP5QOcXDrDK3nmZv632XCdUyg%2F14Gg%2BxsKAzXd7qhruEWUPL8uY%2BXqFZaVN46ZoDfxCh9IA&X-Amz-Signature=8960619fe7866cc61daf4cb3754290a7dcb34d2c0422712dbaf4c13d4db77736&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
