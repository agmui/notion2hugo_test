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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4YABSTB%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T170334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQDYMZq6UFnlmmnwed7MFLQU6%2BZ0g9xi9zuNHSjzLOtrTAIgdmz8sJsk2LkNClhh0SIZ91MFHATEJZV4yTQonpyLCAAqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOczcCLN3UMQW1UvjircA%2BI7sCk%2FVT1ykOmVo5ZlePH8wyod4MMdZTr9vWkS8BG835UBNO9CRqJEJIwqEVkNB%2FnbGqVTT7FOJGGwqI3HTtCDkaqO%2BCR%2B%2FvdTsnFkTZYmLwcG3zIOgPcdU13Jn9tjP8JQQ9EQRPdZdzjEcVXRgTSKOSpkadbj4thxoZtEPClbhhRSASxGnT%2Bk3AWR1IxUAZtoTsvFP3DFf0JEPkIRK60sVkuR23YBbKtSduYeccURZY6O81Jx1tpImgyYRK2Y0Hpg6rJxonb76jmRcAv2TYZnpvaMYlkNcrgwmOwAhnCLMVQQ1MgkxnLJj%2BSZM1YTHgLQNxShWLqejlLRIv2NvzssTtnp%2FXpkPzNDHYyAsFSpUhYqu5Giy0ijUPCCRUwPJb5p0dRbuw6rhHd7fC8bMEXak28o7agbvJr350l1LA0%2F2poyZZkBTm0vBv0SFKYFWlQbe2TnDRaheJujkqM93%2BmP41ADdopvqNHr4JOce1Dl8XpmCv8CDc%2FibX0RkFTBQTULkJGsaLWrReteZ2UWqnxyAVxumpTuP2cDd4oBn58eigUmsOzJM8cr4XA5EXSZkClxyTozi6%2BKZBkjU704GBNdVdIfxPhH2E%2FyqS5VFoGL%2F2%2FmN%2BYi1ZOznh4IMIu97r8GOqUBTaJ%2BV9NhLullAUqM2ahhMi34RGRn2vZuOt6qmjeNw8EC5xDxgDgj8UsUJKGWb2Uf7X2X2FuV5644ESRzhK04TbR%2FTAFowj%2F808VFsCbnASSEpHRGarGufpy6YKzD5zX3YIqIkHBwojubX1ydh305OMwsHySLRr%2FbH568TlCepFuuPcSYNqcj0A83TXFIRh50DPeXY%2BsuNv5B4B9YmO9Ge8a%2FqdmM&X-Amz-Signature=b125ea33a824b0dc33df1dfabdbef2bcd8ab5e5f2bc9ebf9ab7030be2d97cbe8&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4YABSTB%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T170334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQDYMZq6UFnlmmnwed7MFLQU6%2BZ0g9xi9zuNHSjzLOtrTAIgdmz8sJsk2LkNClhh0SIZ91MFHATEJZV4yTQonpyLCAAqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOczcCLN3UMQW1UvjircA%2BI7sCk%2FVT1ykOmVo5ZlePH8wyod4MMdZTr9vWkS8BG835UBNO9CRqJEJIwqEVkNB%2FnbGqVTT7FOJGGwqI3HTtCDkaqO%2BCR%2B%2FvdTsnFkTZYmLwcG3zIOgPcdU13Jn9tjP8JQQ9EQRPdZdzjEcVXRgTSKOSpkadbj4thxoZtEPClbhhRSASxGnT%2Bk3AWR1IxUAZtoTsvFP3DFf0JEPkIRK60sVkuR23YBbKtSduYeccURZY6O81Jx1tpImgyYRK2Y0Hpg6rJxonb76jmRcAv2TYZnpvaMYlkNcrgwmOwAhnCLMVQQ1MgkxnLJj%2BSZM1YTHgLQNxShWLqejlLRIv2NvzssTtnp%2FXpkPzNDHYyAsFSpUhYqu5Giy0ijUPCCRUwPJb5p0dRbuw6rhHd7fC8bMEXak28o7agbvJr350l1LA0%2F2poyZZkBTm0vBv0SFKYFWlQbe2TnDRaheJujkqM93%2BmP41ADdopvqNHr4JOce1Dl8XpmCv8CDc%2FibX0RkFTBQTULkJGsaLWrReteZ2UWqnxyAVxumpTuP2cDd4oBn58eigUmsOzJM8cr4XA5EXSZkClxyTozi6%2BKZBkjU704GBNdVdIfxPhH2E%2FyqS5VFoGL%2F2%2FmN%2BYi1ZOznh4IMIu97r8GOqUBTaJ%2BV9NhLullAUqM2ahhMi34RGRn2vZuOt6qmjeNw8EC5xDxgDgj8UsUJKGWb2Uf7X2X2FuV5644ESRzhK04TbR%2FTAFowj%2F808VFsCbnASSEpHRGarGufpy6YKzD5zX3YIqIkHBwojubX1ydh305OMwsHySLRr%2FbH568TlCepFuuPcSYNqcj0A83TXFIRh50DPeXY%2BsuNv5B4B9YmO9Ge8a%2FqdmM&X-Amz-Signature=ddd407286c39d8fec6207247a2cded1226eb9b948ef6847ad1921a1a5c38460b&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
