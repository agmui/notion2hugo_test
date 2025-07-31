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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYIKYGMX%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T035736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEeNOLsVi9gTQNFW3DpTBOqqncDrw%2FRxUQwmZaqULDu6AiEAyata8Tj%2FZlDyPdaEuCquH7cRtLKapqm31XYluo8xP5kqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPRMw0KS0f4ODW8jISrcA8pmfrE92If%2BGlDTKvs83sD492hdPdk0P64Cim5k1SaW7VwB%2ByU0RKvBu3tNzhkAI9%2B%2Be1u4MKI1gN%2FKTxhzwb6siKou9Xgyj%2B4Flo68U13Pfsh5njw28sq4GWUJUCfb2J8N4xkvWA%2Bk2INixADc66Kl3dqJ2XHhHU70q4DJIvQN8jF9Ti63Esdn1uM066Jrkfw%2F%2BPfQJpBLeg4mcmJEWvLcPejrGRRPiJnvP8fcuwVMKFRTbkCwqLFpl5Ik0qEi8jab9GziFdU%2BPAcIXIkUnnuleCek7XtRuXCH3mmSi8YOIfMPBz2%2FqP2Hbo5%2FtV1%2FhNNZYNW73FIbEKqr95jWX5pA%2FEiBfr9xn8rwOnax14BNNBjV3x%2B073Au9A86f%2ByERd2LAU3oqhnhGGslwP%2FOsMyfDxMp3Ylt3FpSQjRQfoCzoHAH0Wr4A6GBb5V%2F9t5Th6sk%2FviqTLDuR5MmouA9HXfoEk%2BYIrgke5sKK%2FrQsRcZQGTvYyddnpFPR9YdboLdQkIdI5MqteRp%2FQtlMA9%2F1XbdGUCtUC85NJKhWu6lsy94bpdOhnWYwPWhiU5MS3487KqBWL7F4Y%2F4JofcDPcF1kAz0tfuoWL5uMflQ6a6V69%2BD3WkK%2FP7iLZzZup1MOTKq8QGOqUBg8EUp5EKz8isINBdz59g96amlO4YvrAMgQI2DAyesckobKKHyG0sfFjDUj3crKXuM977mgduAyh8UE7CJ3ne41jnPpOBb2UgozQaPHJsPfUXuavr3Gb68bLSijWsdLbylBWjD8%2BqEUQPU%2BRekN%2F5nMM9MwgNdCQ1axyfXk2G%2BosFDfVgnESlRngkyBgW6W6cI0adMoVHt5xquNm5uGcQoTnX199i&X-Amz-Signature=dec58c56a66f655002f6d0471b594e7d950ea02d8662726cdce458f9d90b4647&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYIKYGMX%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T035736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEeNOLsVi9gTQNFW3DpTBOqqncDrw%2FRxUQwmZaqULDu6AiEAyata8Tj%2FZlDyPdaEuCquH7cRtLKapqm31XYluo8xP5kqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPRMw0KS0f4ODW8jISrcA8pmfrE92If%2BGlDTKvs83sD492hdPdk0P64Cim5k1SaW7VwB%2ByU0RKvBu3tNzhkAI9%2B%2Be1u4MKI1gN%2FKTxhzwb6siKou9Xgyj%2B4Flo68U13Pfsh5njw28sq4GWUJUCfb2J8N4xkvWA%2Bk2INixADc66Kl3dqJ2XHhHU70q4DJIvQN8jF9Ti63Esdn1uM066Jrkfw%2F%2BPfQJpBLeg4mcmJEWvLcPejrGRRPiJnvP8fcuwVMKFRTbkCwqLFpl5Ik0qEi8jab9GziFdU%2BPAcIXIkUnnuleCek7XtRuXCH3mmSi8YOIfMPBz2%2FqP2Hbo5%2FtV1%2FhNNZYNW73FIbEKqr95jWX5pA%2FEiBfr9xn8rwOnax14BNNBjV3x%2B073Au9A86f%2ByERd2LAU3oqhnhGGslwP%2FOsMyfDxMp3Ylt3FpSQjRQfoCzoHAH0Wr4A6GBb5V%2F9t5Th6sk%2FviqTLDuR5MmouA9HXfoEk%2BYIrgke5sKK%2FrQsRcZQGTvYyddnpFPR9YdboLdQkIdI5MqteRp%2FQtlMA9%2F1XbdGUCtUC85NJKhWu6lsy94bpdOhnWYwPWhiU5MS3487KqBWL7F4Y%2F4JofcDPcF1kAz0tfuoWL5uMflQ6a6V69%2BD3WkK%2FP7iLZzZup1MOTKq8QGOqUBg8EUp5EKz8isINBdz59g96amlO4YvrAMgQI2DAyesckobKKHyG0sfFjDUj3crKXuM977mgduAyh8UE7CJ3ne41jnPpOBb2UgozQaPHJsPfUXuavr3Gb68bLSijWsdLbylBWjD8%2BqEUQPU%2BRekN%2F5nMM9MwgNdCQ1axyfXk2G%2BosFDfVgnESlRngkyBgW6W6cI0adMoVHt5xquNm5uGcQoTnX199i&X-Amz-Signature=3a32ff95698623f66f47277ac5fc62076a026a30abe5d45611ab2bdd0ec38ef5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
