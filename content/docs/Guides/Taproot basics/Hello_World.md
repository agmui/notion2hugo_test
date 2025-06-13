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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JRUPVMP%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T050932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQDPUggIBqAo7E60rSYJ4WM3H7HSOChDzH1xJEuvSoODrAIgb7JMnNw%2FftKgth2VJqHqvQ1LdD44vUCKVOHVWGmfoTQqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCawfkVGXCPJCbFQgircA6UWNbWqoeFfakkf9zdNvHhuGeknIMlFa%2BVALO%2FCjqgH9cHOPZqnekop0i2WdYhwFLkn7b%2BSZcSEmIAnXUdjt2sQX1dJeSgF%2FPDh5ngvozm8c99YNigmDcwc1fHvhCg7l6yY%2B4sPg%2BfS3zKk4Cd7sHYm9tYKRLveg46Uaswo%2Bx75MP9ADo2RGH8sGygVvgetDhjWEjbKg9DoF1HGMrA50T5N7Fhkv%2B2QCb7Xjtb2phU5mR2GrcAcnlEFAxV5Ch%2BlUDBf1E57SYxOxOCkTNen2NeVOeF22NxlLnVIqMjxkCEZcAQL5e4vx9M%2BAxtj40Gb6am9Qu9%2BUMK2%2BYoFWDouU0qopJd1ZfDMsV0galGFD%2BSZUw34O8g4CptGt6krbkqSQlT0Lt%2BX09bT9Ytr%2BdBDNLM5phGSP8vqlnUowVx%2Be7i7tOX28VoaWxHUJaaEtM29ZXNcinesPZKrpZd3AWidz4tdtaKOUhSQZCwbpuFv2SRst785UkLeB7XW0XHkcwbiAif7STKoijjaNyznFNnZgucj%2Bnz6q%2FbsdtVneOn3mykDfVG7fjlh2kmDdvkxCZ0Fi7%2FFyjBLfG3jMd4O2wfTy%2FEAzjOIGqeOL0VUdz6pbsQAc%2F7auR8Rv98BCaAPMO%2FbrsIGOqUBNw4ajy2sNMVCL8G7E7NZErTnCUURf7Q6WWid0JClUGbBcQ3LAeE95wBmLgCls7z0qQRHANhI1n4gXNZxOGjO9fpUfgXXEt3jWXALgKmiiKglKw%2FC0pq9%2BhX4VltYTX5dffK%2BIY2FOuhutMbJltUhgcnMax340oSgYwf288s%2BKHHR60H0clUym49p9TJgy6PW%2Bd5r4zvh00mi%2FwPnoVo%2FZhQCEN4%2B&X-Amz-Signature=33ff6dec2d4591a5d50ac71a8100acfd665a3c83d4e4acb3917b5c8b3c0b4e6e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JRUPVMP%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T050932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQDPUggIBqAo7E60rSYJ4WM3H7HSOChDzH1xJEuvSoODrAIgb7JMnNw%2FftKgth2VJqHqvQ1LdD44vUCKVOHVWGmfoTQqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCawfkVGXCPJCbFQgircA6UWNbWqoeFfakkf9zdNvHhuGeknIMlFa%2BVALO%2FCjqgH9cHOPZqnekop0i2WdYhwFLkn7b%2BSZcSEmIAnXUdjt2sQX1dJeSgF%2FPDh5ngvozm8c99YNigmDcwc1fHvhCg7l6yY%2B4sPg%2BfS3zKk4Cd7sHYm9tYKRLveg46Uaswo%2Bx75MP9ADo2RGH8sGygVvgetDhjWEjbKg9DoF1HGMrA50T5N7Fhkv%2B2QCb7Xjtb2phU5mR2GrcAcnlEFAxV5Ch%2BlUDBf1E57SYxOxOCkTNen2NeVOeF22NxlLnVIqMjxkCEZcAQL5e4vx9M%2BAxtj40Gb6am9Qu9%2BUMK2%2BYoFWDouU0qopJd1ZfDMsV0galGFD%2BSZUw34O8g4CptGt6krbkqSQlT0Lt%2BX09bT9Ytr%2BdBDNLM5phGSP8vqlnUowVx%2Be7i7tOX28VoaWxHUJaaEtM29ZXNcinesPZKrpZd3AWidz4tdtaKOUhSQZCwbpuFv2SRst785UkLeB7XW0XHkcwbiAif7STKoijjaNyznFNnZgucj%2Bnz6q%2FbsdtVneOn3mykDfVG7fjlh2kmDdvkxCZ0Fi7%2FFyjBLfG3jMd4O2wfTy%2FEAzjOIGqeOL0VUdz6pbsQAc%2F7auR8Rv98BCaAPMO%2FbrsIGOqUBNw4ajy2sNMVCL8G7E7NZErTnCUURf7Q6WWid0JClUGbBcQ3LAeE95wBmLgCls7z0qQRHANhI1n4gXNZxOGjO9fpUfgXXEt3jWXALgKmiiKglKw%2FC0pq9%2BhX4VltYTX5dffK%2BIY2FOuhutMbJltUhgcnMax340oSgYwf288s%2BKHHR60H0clUym49p9TJgy6PW%2Bd5r4zvh00mi%2FwPnoVo%2FZhQCEN4%2B&X-Amz-Signature=537bad2803795c228727799757f7953fcdba86371c11f4c1d4a7f2b5015ab7e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
