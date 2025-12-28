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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6HY4TCF%2F20251228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251228T015512Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCz7zCSa78scVVCVDcg6G0vOEfa%2BNhG5DyDTbXguE2OGwIgGC%2FEWwg6gelK%2Fj47UFj6%2BmJIDjq8r9ttXV7ZHFpI9XYq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDGR%2B2%2FEgNB8tj8XOZCrcA8NbMlpXuhq8QQFAuQH%2BjSn3V9pVhMVkGgm3Ot61l6cr6%2BD54317D6HBuDre6CoD9hVcbOpYVgjcBsUSzut0tWbpbIjxoesbN3GIiVm9GE22gFJHjK1h4Sy002WHSuQVRW%2FO4lsKAHvMiOJd6h5AXiHL3C06%2FK27fnBUlbCXbl7t8UFWpL4NFNs722paopR6QPsQ%2FgxFC48jzrp4pPkJo6u3eC5pQKKTVfICFu8DV06riwabO2jHQQVmtCMc5pBt7Zldqg9lwsbsfIneWXm6XYwB%2B%2B%2FUZl38mxxa%2BpFO%2BgXDFLAH7mHM4JFFz822fLLMCOmctKqV91yceKtHRnqK7s0db%2FMSbHkaT71PoB3OVKcJuQ14Qs4x87AGCB5y9KNEnNzg3PcU96Eq3Ms6sIv01Q0tMzUL%2BSH86jEOFr3q52Eic9wZoHKtqRj8BS6TeV84xl8x0%2Fjzmarn7xV2x%2BXvf5ArBOuO6UQm%2BjEiK%2F08yX%2BM9pjLt7JoQBsY5930cHiszckkzHm1dIdiV%2B1GTY%2BYd5JO970%2FES2lRxSHrq3%2F%2BjnfImJaMxskDBfmuyq24qIla%2ByENOCsto%2BPG2rNSJCKcyUJSpLx5pIS2jJxywmi2%2FejphyQDhC2pF7SU6MKMMj0wcoGOqUB01eOiAqlsrvp8SqN%2FSRaxkWL1OX66BJrvQTCgkh%2BGIFfIZ8sUS1kbw29KnKpXNufF0WkOdiiImBcztCtmCjhUx8YZJ3QmK9ty%2Fluu1q8mBgKxv3IHraZ6eKOzHuxQSY0e7F%2BwSpszdAJv6n%2BEgIaQREB3aeTEBpCgrcfmiFs8VITkzv69LxdKadF8bpYM%2Ff9ejR%2FEeJFbVLNzeWbPnvJUL3OKtD2&X-Amz-Signature=a3bb24242e946326b086079f07ddb2cfdc3682384e44f5adfb6c6147ca3d444c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6HY4TCF%2F20251228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251228T015512Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCz7zCSa78scVVCVDcg6G0vOEfa%2BNhG5DyDTbXguE2OGwIgGC%2FEWwg6gelK%2Fj47UFj6%2BmJIDjq8r9ttXV7ZHFpI9XYq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDGR%2B2%2FEgNB8tj8XOZCrcA8NbMlpXuhq8QQFAuQH%2BjSn3V9pVhMVkGgm3Ot61l6cr6%2BD54317D6HBuDre6CoD9hVcbOpYVgjcBsUSzut0tWbpbIjxoesbN3GIiVm9GE22gFJHjK1h4Sy002WHSuQVRW%2FO4lsKAHvMiOJd6h5AXiHL3C06%2FK27fnBUlbCXbl7t8UFWpL4NFNs722paopR6QPsQ%2FgxFC48jzrp4pPkJo6u3eC5pQKKTVfICFu8DV06riwabO2jHQQVmtCMc5pBt7Zldqg9lwsbsfIneWXm6XYwB%2B%2B%2FUZl38mxxa%2BpFO%2BgXDFLAH7mHM4JFFz822fLLMCOmctKqV91yceKtHRnqK7s0db%2FMSbHkaT71PoB3OVKcJuQ14Qs4x87AGCB5y9KNEnNzg3PcU96Eq3Ms6sIv01Q0tMzUL%2BSH86jEOFr3q52Eic9wZoHKtqRj8BS6TeV84xl8x0%2Fjzmarn7xV2x%2BXvf5ArBOuO6UQm%2BjEiK%2F08yX%2BM9pjLt7JoQBsY5930cHiszckkzHm1dIdiV%2B1GTY%2BYd5JO970%2FES2lRxSHrq3%2F%2BjnfImJaMxskDBfmuyq24qIla%2ByENOCsto%2BPG2rNSJCKcyUJSpLx5pIS2jJxywmi2%2FejphyQDhC2pF7SU6MKMMj0wcoGOqUB01eOiAqlsrvp8SqN%2FSRaxkWL1OX66BJrvQTCgkh%2BGIFfIZ8sUS1kbw29KnKpXNufF0WkOdiiImBcztCtmCjhUx8YZJ3QmK9ty%2Fluu1q8mBgKxv3IHraZ6eKOzHuxQSY0e7F%2BwSpszdAJv6n%2BEgIaQREB3aeTEBpCgrcfmiFs8VITkzv69LxdKadF8bpYM%2Ff9ejR%2FEeJFbVLNzeWbPnvJUL3OKtD2&X-Amz-Signature=94fde4c26e09bd8181edcacaaa39088e608c415e593dd0bd626d9b22a748c3e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
