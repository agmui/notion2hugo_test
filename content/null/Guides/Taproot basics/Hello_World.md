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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5R2UKKH%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T050805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCICIXETVz7xyoFvB8Bt%2B8%2FJieAnIECn%2FsaR7xHqj2C2fIAiEAljhBq0CfX0dSTT0ppZYFG9IriR9yHfpSa7lbKFFs4u4q%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDMNWdhh6jGMG5F6vwCrcA2U0e%2FlhWH4LdWh4LG1SCk92BLHHDVDUgGyPXsxc%2FVeCfvWaQl4XHpHGE3OalHLsbl%2FuqTdViL1aMDQU4PGs4%2BUFPCX%2BwSIl3bPtwacQEDSjvXxSEsJE4GA2gVFqLWjsOLrWaVEPR%2B539b29McMxSqi97Z7mdS1Ol9RLfDJL1gmBpQRpQBrkqtPNBk%2FtcNwHAb47W2BkEy9QhbxoBqEuRGMLy0IfGZQTXW1RT70VYuP1RpCOD3jE%2BXxm0n3%2BYXKtTAam7LNSulVuE5cdkLs5krjpTmvKQn6oDF8Oqa7MewT4LJ%2BvD33JXbjD7T0IdIXmCja0zzHme7L%2B2zCNHJk4lN1fuMUZ8lPYTFu%2FSH6xwxTdmyXiIFGEDHbx8lk5wlR5Lv20xqK64%2Fg%2Fbzp8mLFUgZnCdzQWcsp7WRfepsNqwRiK7Y4Ql0rNOwRU5k31AGQQAMI6%2BGFVdR0TewW2bEKFfa0%2BNFdq2jw1tBCNu74zeWpViDqaKK4oKoJQBmO2gWlC0z7j8aSkU6Yl7SM99PFzKmDRyjYxmcVGiZiEUtkY7eiFdcVf024O669AzW361RvibMQjCfGWFVAbRIyx4vVvTszwu5PHTfH1sGN8fez5LZ9KKuYeWN2DTtcWz%2B%2BrMP3ei70GOqUBhxriL5Cz6yTDKfoRQiDcRDrAtKMng6nu997OTXnPOtVsyENWcoZkfCwyWTDohfGTRa90%2FQYxPUKxZNOu23DxwEZ10RuAEn%2B5RgRIENJSrnjy7Jk9aMYmKwI2zCPcF5D3zJIY2fB0x0OMFXAUeDSRT8alQUgKGpgDE0fCy0N4fmdRcMuY%2BJZqALOT0VNJ%2FqUUBHIwGwr%2FDjEY6GY%2F3jSNvpvKP41w&X-Amz-Signature=298f31b3d036c2858ff8eeda6be3a844677556c12379e38e68c0fdf184a1524c&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5R2UKKH%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T050805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCICIXETVz7xyoFvB8Bt%2B8%2FJieAnIECn%2FsaR7xHqj2C2fIAiEAljhBq0CfX0dSTT0ppZYFG9IriR9yHfpSa7lbKFFs4u4q%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDMNWdhh6jGMG5F6vwCrcA2U0e%2FlhWH4LdWh4LG1SCk92BLHHDVDUgGyPXsxc%2FVeCfvWaQl4XHpHGE3OalHLsbl%2FuqTdViL1aMDQU4PGs4%2BUFPCX%2BwSIl3bPtwacQEDSjvXxSEsJE4GA2gVFqLWjsOLrWaVEPR%2B539b29McMxSqi97Z7mdS1Ol9RLfDJL1gmBpQRpQBrkqtPNBk%2FtcNwHAb47W2BkEy9QhbxoBqEuRGMLy0IfGZQTXW1RT70VYuP1RpCOD3jE%2BXxm0n3%2BYXKtTAam7LNSulVuE5cdkLs5krjpTmvKQn6oDF8Oqa7MewT4LJ%2BvD33JXbjD7T0IdIXmCja0zzHme7L%2B2zCNHJk4lN1fuMUZ8lPYTFu%2FSH6xwxTdmyXiIFGEDHbx8lk5wlR5Lv20xqK64%2Fg%2Fbzp8mLFUgZnCdzQWcsp7WRfepsNqwRiK7Y4Ql0rNOwRU5k31AGQQAMI6%2BGFVdR0TewW2bEKFfa0%2BNFdq2jw1tBCNu74zeWpViDqaKK4oKoJQBmO2gWlC0z7j8aSkU6Yl7SM99PFzKmDRyjYxmcVGiZiEUtkY7eiFdcVf024O669AzW361RvibMQjCfGWFVAbRIyx4vVvTszwu5PHTfH1sGN8fez5LZ9KKuYeWN2DTtcWz%2B%2BrMP3ei70GOqUBhxriL5Cz6yTDKfoRQiDcRDrAtKMng6nu997OTXnPOtVsyENWcoZkfCwyWTDohfGTRa90%2FQYxPUKxZNOu23DxwEZ10RuAEn%2B5RgRIENJSrnjy7Jk9aMYmKwI2zCPcF5D3zJIY2fB0x0OMFXAUeDSRT8alQUgKGpgDE0fCy0N4fmdRcMuY%2BJZqALOT0VNJ%2FqUUBHIwGwr%2FDjEY6GY%2F3jSNvpvKP41w&X-Amz-Signature=1f1654c23493180e38cf871a9aaf97d65b343ac89f4b23afd562718613479b2d&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
