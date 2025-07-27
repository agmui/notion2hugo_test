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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QB7GMVLQ%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T190737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQDcPVCWrTxrAxhlUZEzi%2BTv7GSKOdmNNUegNpLxf%2BUauAIgQZy5FBaP87V7ipfzrJmaITAMaFKqD3XaNEMFutTD70Yq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDNBTwNDwIwaQ1NuyxSrcA44qVa6SC16KMv9ZkdPMEyQuYepJN7Avn1wse6MOoU5qzd3ja7uiwV1nacxXEq4pDbVMT2VqzdiDk%2FpQbszFAW%2F1HWd%2F1VLsXGSbaxIpSM1SFlfd4URFjpAmIXMur0WWfXbeh3%2FR3XJdPC1dd%2BPPFzl%2BnENBfqzg9Qma5qEfumUJ1gaKt%2FLDIRTv1A1z1Ui%2BpRvuyBRYabFKtwUqw7JFDnk4np%2F8knZ0bo%2By3k5dS6xgkswighbHlqBggrh%2BJi7tBQjLHYEYgkGBmUnD8v%2BcIFYFCX2GAn%2Bogf9CYCnlkUDSVoGfyuuPnTEt3ax3YRKAzkHADTmCiEvCHLG%2FG5DreXyN7FriAHRXsXWzJugwnbIC5l3K4OXLoMIKlCm1kRfrArnvZn8XleNDoauxF8j1IWYf8sPLQISrcrf53z2a5WSpAFWiP989yMSLwJC62O6xPBXHtuD3b%2FaiQO%2B%2FTG8rIhabnpdRSpOV9U6hgGCEC%2Bb8oNo3POWfYVAAVwI9ADprQi3d1K7RRnFhwtIH1bCAX4h94Fw7Z16EpW0s4HJBt%2FXP6sg1DYtSnwajVrF%2F%2BVBJloAtF%2FAB5ByHoyyFcJ5V11aqucWb1Cr%2F%2BxUeXqEP4%2FxH3XSGMiorLDn7d9enMIyBmcQGOqUBEkGrEd494F%2BiEw%2ByRhZP9%2FWwtLx9BgAU5%2BGcGnjlhfw6sxzx8EzzevTiSf1OceqEgfclvrCDKbpaHwfSFLyL96ElmtQx0as%2BxqcCyL92OTQ3QpQvYaGomZflbTWnFzv4UxYOYkMhTZJ2Dg9XOV03fpbqdItsDd3taLzcOkwYSMJRdhPWMapZEVzrFC45ZSB8Mjv8DC2EK0E81HUpBT1iZkfiYf9l&X-Amz-Signature=c8f135e2c59a2fbae368f962efc954bb2ad2d266d14e6b829edffb328f1e18de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QB7GMVLQ%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T190737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQDcPVCWrTxrAxhlUZEzi%2BTv7GSKOdmNNUegNpLxf%2BUauAIgQZy5FBaP87V7ipfzrJmaITAMaFKqD3XaNEMFutTD70Yq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDNBTwNDwIwaQ1NuyxSrcA44qVa6SC16KMv9ZkdPMEyQuYepJN7Avn1wse6MOoU5qzd3ja7uiwV1nacxXEq4pDbVMT2VqzdiDk%2FpQbszFAW%2F1HWd%2F1VLsXGSbaxIpSM1SFlfd4URFjpAmIXMur0WWfXbeh3%2FR3XJdPC1dd%2BPPFzl%2BnENBfqzg9Qma5qEfumUJ1gaKt%2FLDIRTv1A1z1Ui%2BpRvuyBRYabFKtwUqw7JFDnk4np%2F8knZ0bo%2By3k5dS6xgkswighbHlqBggrh%2BJi7tBQjLHYEYgkGBmUnD8v%2BcIFYFCX2GAn%2Bogf9CYCnlkUDSVoGfyuuPnTEt3ax3YRKAzkHADTmCiEvCHLG%2FG5DreXyN7FriAHRXsXWzJugwnbIC5l3K4OXLoMIKlCm1kRfrArnvZn8XleNDoauxF8j1IWYf8sPLQISrcrf53z2a5WSpAFWiP989yMSLwJC62O6xPBXHtuD3b%2FaiQO%2B%2FTG8rIhabnpdRSpOV9U6hgGCEC%2Bb8oNo3POWfYVAAVwI9ADprQi3d1K7RRnFhwtIH1bCAX4h94Fw7Z16EpW0s4HJBt%2FXP6sg1DYtSnwajVrF%2F%2BVBJloAtF%2FAB5ByHoyyFcJ5V11aqucWb1Cr%2F%2BxUeXqEP4%2FxH3XSGMiorLDn7d9enMIyBmcQGOqUBEkGrEd494F%2BiEw%2ByRhZP9%2FWwtLx9BgAU5%2BGcGnjlhfw6sxzx8EzzevTiSf1OceqEgfclvrCDKbpaHwfSFLyL96ElmtQx0as%2BxqcCyL92OTQ3QpQvYaGomZflbTWnFzv4UxYOYkMhTZJ2Dg9XOV03fpbqdItsDd3taLzcOkwYSMJRdhPWMapZEVzrFC45ZSB8Mjv8DC2EK0E81HUpBT1iZkfiYf9l&X-Amz-Signature=026a590521c255d599349450d03d84a339f436075a544412f53dfee0e17fe26d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
