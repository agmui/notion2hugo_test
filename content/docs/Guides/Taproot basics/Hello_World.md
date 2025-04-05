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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4PWNH3O%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T070730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEdsKLdnDn%2FkUaOd%2BELLOMAGfjbNIrnQrlPC%2BHSxpE1KAiEA6ngNEnaegg8Uo3RFhkTRi6NpfqDVH%2FncSVlho7LCihIq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDMrNVlLkY1uvlZ3BtSrcA3KOd93i%2BqExsA6hA72sIpKejYmc5twmD81aRA7aFJNHJ5Ieo0NYMxeOcUVOXVHhGv%2BMXP77xOjgi7W2RL5aV0e5IGusJ2SDnCi7LUkVFDHFqiqeHwppv5IQgLHokL3p6QQ2YKJlPPHKMx%2B59o9069W9cp0Zitk4r%2F9fyGfNXo5WLq3765xEt9DHyC7AvqWivT4L3vVmTJAdijzuXr%2B3JZLAAWXAXrZQwGTbPsXFSXBNSX74M4ZGYxJyZwtA9EdO9k2JKotiloI76QPcrd30iF1rq9fgoo%2B%2Fw2%2B4c97rHT7uhbPcldIoJUl%2FgRgC3ccvwg%2FMgRLd1nZSluBcfaRtKo4Nmdqm9FF9%2FV1Qx%2F%2FIrMbRAPyWdum7JGTQ5OuEhdlcR3crk13IiPjpNCkB7p1IfsBazDG81Okm7EuSH5X8YZZFKFYSg1L77wv3xD%2F%2Baqg2uSomLYkhJ65ZBJxkHffjgaHlFbFB%2B6NNweJ7IXWsSpwI9ZpIndLHAUEjkfhQrwqNfowmDPMr8NWeUPfB1wNPHsRyceurAE9wJ3XxlrgkiwPgTDpwQY7Ot1eJF%2FIyXmWh%2FjIGTYt2uFDTkg9UTHTr8B3tRW6S6IhcB8W%2FSE%2FAi3wEMem2Lsj%2BvcYXTKYZMKiiw78GOqUB32rQxPiHpAZc9A3dVW3Alb0y%2FYWVikACc5mwdrVttU4KEgl8BqrBY8rcCGYnBhwMysMFFDET6LuCr2BxkViTq1eFMlL97mRzcil0KsF%2FSgnkLLvz7f8ysRPKYBV%2Bf0wr8FzHmEa944UKQQ6%2Blvh4KL1R6jPnzClMeoe5A9G4WBgpVMZ8tvwn4Z9qfeb6uNSjJjRD4CepEzuRBLcwsxSdfmTTyfrN&X-Amz-Signature=3f325bc0692d5049127d4ab9a0074e9dbae7a82333b4894f5c440328e0496870&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4PWNH3O%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T070730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEdsKLdnDn%2FkUaOd%2BELLOMAGfjbNIrnQrlPC%2BHSxpE1KAiEA6ngNEnaegg8Uo3RFhkTRi6NpfqDVH%2FncSVlho7LCihIq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDMrNVlLkY1uvlZ3BtSrcA3KOd93i%2BqExsA6hA72sIpKejYmc5twmD81aRA7aFJNHJ5Ieo0NYMxeOcUVOXVHhGv%2BMXP77xOjgi7W2RL5aV0e5IGusJ2SDnCi7LUkVFDHFqiqeHwppv5IQgLHokL3p6QQ2YKJlPPHKMx%2B59o9069W9cp0Zitk4r%2F9fyGfNXo5WLq3765xEt9DHyC7AvqWivT4L3vVmTJAdijzuXr%2B3JZLAAWXAXrZQwGTbPsXFSXBNSX74M4ZGYxJyZwtA9EdO9k2JKotiloI76QPcrd30iF1rq9fgoo%2B%2Fw2%2B4c97rHT7uhbPcldIoJUl%2FgRgC3ccvwg%2FMgRLd1nZSluBcfaRtKo4Nmdqm9FF9%2FV1Qx%2F%2FIrMbRAPyWdum7JGTQ5OuEhdlcR3crk13IiPjpNCkB7p1IfsBazDG81Okm7EuSH5X8YZZFKFYSg1L77wv3xD%2F%2Baqg2uSomLYkhJ65ZBJxkHffjgaHlFbFB%2B6NNweJ7IXWsSpwI9ZpIndLHAUEjkfhQrwqNfowmDPMr8NWeUPfB1wNPHsRyceurAE9wJ3XxlrgkiwPgTDpwQY7Ot1eJF%2FIyXmWh%2FjIGTYt2uFDTkg9UTHTr8B3tRW6S6IhcB8W%2FSE%2FAi3wEMem2Lsj%2BvcYXTKYZMKiiw78GOqUB32rQxPiHpAZc9A3dVW3Alb0y%2FYWVikACc5mwdrVttU4KEgl8BqrBY8rcCGYnBhwMysMFFDET6LuCr2BxkViTq1eFMlL97mRzcil0KsF%2FSgnkLLvz7f8ysRPKYBV%2Bf0wr8FzHmEa944UKQQ6%2Blvh4KL1R6jPnzClMeoe5A9G4WBgpVMZ8tvwn4Z9qfeb6uNSjJjRD4CepEzuRBLcwsxSdfmTTyfrN&X-Amz-Signature=69f968b814d870fefa38c05bf4db2ccf5d2982af77c31d244a708fd966e81091&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
