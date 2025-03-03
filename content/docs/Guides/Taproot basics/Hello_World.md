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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQQCHHGZ%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T170713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDLjHc805LNBgxMu3FxtVCTiM6mgR8G0OoNZ577HsFudAiEAk6yynLmI%2BI%2B8B2eMcu40JUxfQrru2kPQhtk8C4SmMKYqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKb7kh0EZL4XLVsaiSrcAzHTmCNtXRotVJXMLbXwV6Bl8ohUEhyItTjVR2IdJNO8lFYaW0G0PvrW69ZeIyghyDQL0jiltFtGNB6uLurgjsGEFRY4lYUi3EobolBWEpobh42lXYva1NKJ51qEa8I1Di9oheWgz%2BBPAIDgbxIegHozj119%2B04KGj2PLkPoJcsAarzIfT4DIPAhs48lUrWsLxe3ZL0irg3Y2LSwyABelVmM9zUj58e4Qxa2v0jBEWiu4%2BxTQIYjYQ6E%2BwZEXCbC3kxG%2FSrCHy02onezcGcKvn%2Buo7SJBsCsiic5I4u78h1zuqkBLnh5tcdFqGZVOtcwKf3zKcD7g80QOWn6A3vo%2FLZ%2BDVZdwDxTGoSIqXsTXRHeUWJyY4M4ZhywZHVpjCg0BmkoUAINR65QKxGrcIo5%2FnmYvnmiKZ5DVi78%2ByrP6bCD1OGymGq5ZAp4F2YMtFpgu6me1tpiB%2Fm2VpEGqaCJDfeTGs%2BVrt0fqDDV6Y1QSzUjLvded7OmykGc3DrqYNYNzyQ7foErVSTQ9K7%2FqI%2F8LYru4bYHof%2FtdhQDJwYYkMNReXIk%2FHrgczp35SB%2B50OwtnrSS3%2Fdh2cYBciTbcaHTzuqwrOFVqegh%2FPFl7bwiXKlr2hz0hSp%2BDXYjXvoMK68l74GOqUBnNrYiq0Da23QZNEL8R86f6L%2FbB3r7zgCmZXGbl42aBukC5AbAGI2tdmKfXBfkLDmdXY%2Bjfv1cAXCV9ywyIiyYbud%2FeQI0aEJHvb65VLSgfDHS8aMUJuEm0LHA0x%2B%2Fz%2BlXkUGiESZ86OTZ3O5iEUzIkCMHAbkXq9AuzSRoMs%2BlS7YJ3Hnd7%2B4ryuM%2F%2B9nfaCZbSKGxq2Uwgdl0DOwBQ%2BM5b5I3g4I&X-Amz-Signature=0bc2876f3e67e434d7b4848d65e9ff1cb578165b18b613e6088b7438ddc07768&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQQCHHGZ%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T170713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDLjHc805LNBgxMu3FxtVCTiM6mgR8G0OoNZ577HsFudAiEAk6yynLmI%2BI%2B8B2eMcu40JUxfQrru2kPQhtk8C4SmMKYqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKb7kh0EZL4XLVsaiSrcAzHTmCNtXRotVJXMLbXwV6Bl8ohUEhyItTjVR2IdJNO8lFYaW0G0PvrW69ZeIyghyDQL0jiltFtGNB6uLurgjsGEFRY4lYUi3EobolBWEpobh42lXYva1NKJ51qEa8I1Di9oheWgz%2BBPAIDgbxIegHozj119%2B04KGj2PLkPoJcsAarzIfT4DIPAhs48lUrWsLxe3ZL0irg3Y2LSwyABelVmM9zUj58e4Qxa2v0jBEWiu4%2BxTQIYjYQ6E%2BwZEXCbC3kxG%2FSrCHy02onezcGcKvn%2Buo7SJBsCsiic5I4u78h1zuqkBLnh5tcdFqGZVOtcwKf3zKcD7g80QOWn6A3vo%2FLZ%2BDVZdwDxTGoSIqXsTXRHeUWJyY4M4ZhywZHVpjCg0BmkoUAINR65QKxGrcIo5%2FnmYvnmiKZ5DVi78%2ByrP6bCD1OGymGq5ZAp4F2YMtFpgu6me1tpiB%2Fm2VpEGqaCJDfeTGs%2BVrt0fqDDV6Y1QSzUjLvded7OmykGc3DrqYNYNzyQ7foErVSTQ9K7%2FqI%2F8LYru4bYHof%2FtdhQDJwYYkMNReXIk%2FHrgczp35SB%2B50OwtnrSS3%2Fdh2cYBciTbcaHTzuqwrOFVqegh%2FPFl7bwiXKlr2hz0hSp%2BDXYjXvoMK68l74GOqUBnNrYiq0Da23QZNEL8R86f6L%2FbB3r7zgCmZXGbl42aBukC5AbAGI2tdmKfXBfkLDmdXY%2Bjfv1cAXCV9ywyIiyYbud%2FeQI0aEJHvb65VLSgfDHS8aMUJuEm0LHA0x%2B%2Fz%2BlXkUGiESZ86OTZ3O5iEUzIkCMHAbkXq9AuzSRoMs%2BlS7YJ3Hnd7%2B4ryuM%2F%2B9nfaCZbSKGxq2Uwgdl0DOwBQ%2BM5b5I3g4I&X-Amz-Signature=a4bbfecb0746b02ca9c3155d647beb4e2063b1ecf41925f0c7603adf17b7019e&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
