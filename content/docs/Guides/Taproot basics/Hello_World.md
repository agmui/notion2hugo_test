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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WT5UFUOM%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T003846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIQDVpD5eLu6Heu%2BzNfErbcrPAP6c%2FqjMd4j5TeeOstcW%2FQIgbMruqzM1XkpyCH0Iw7GbHZq12lX81xMX0WX6Ndax4gEqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI4B5oYhrRNvxQ5JaircA%2FKFz%2BnJ28VKzNm78sd5Za7VzWrh2dPqZXpFiCdT7Rkvd484Pqh1Gk3crjbLfTW4vZhb1QNAPJqQeEISccQ5CbaPU4W7f3U%2FBO%2F4ukg8AvyoV12nwPUeSyeh119pFujVl0Xcwl%2BhSW59FU%2BgeAzfH1%2Fc8D9ZmVjEtNcFuaCgNVbOGReeZ0cumMuw10G2XXhplv1lSmBbbrJ7sVXZS74mVx7kg%2B%2BlwnhU06UGsT2gY4HQclovYg4Qnu65J4eUH4J7p3ylFoemaC%2BjfzgxL3tHV6yAaBLBfr5VX0ahowVpAQJWikfwGcMIVLKxwqmaZmgj1IdgWUAfrWid9%2BoRq6MH7Sfx9aNZekkE3cqBuADBccNhP7IJZynQO3tVBmeYoCnzYaEMrIMm%2FxdqAF2iRDRPoT%2FASAHZWDvsl%2FKOiOaD9mnaYuF%2FU%2BKkybWgElgaUtj27KLxQNEANKWG9XEGW1HJoVf0ESVBTCSzk%2BB8f%2BlUjYkhCfDPieozD%2BBTG4fAUE4EJGg5rpZW1wTVq%2BZ5SF0OypkGNa47isMLhmLXBE1nwseEEk6PXG%2BxAYOB860n270q6sf3b80VAkp1nGsgBjISw0FH9hHlfFCtsCT69NAgPEjXOT4GLIhPyXSpSwx%2FMKvh1r8GOqUBqwlvCc9ULk4a9g9HpuEnVviZ3LXYcSud%2B%2BaFJBBqYNl3DwtTidg6l8G9ApoLSANBQURpQ3F%2BJPLdqDETTQY5R1bvrvMYXRMhM9iw0tuRjjGvFT3OYS5QoEcbMF8%2FKZ43eYYaIn%2Fi4vd9mDNKrZitPuxKPae9x9cQA2NwsbO9P8XRySjQNrr3gkyFTSpJDlml2AKjELO08HlXjpKX%2B1tLPok6aGOM&X-Amz-Signature=f28d9c815734054ad60b9031caaf710cb01c6af44e6eec23951bd4de2da50257&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WT5UFUOM%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T003846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIQDVpD5eLu6Heu%2BzNfErbcrPAP6c%2FqjMd4j5TeeOstcW%2FQIgbMruqzM1XkpyCH0Iw7GbHZq12lX81xMX0WX6Ndax4gEqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI4B5oYhrRNvxQ5JaircA%2FKFz%2BnJ28VKzNm78sd5Za7VzWrh2dPqZXpFiCdT7Rkvd484Pqh1Gk3crjbLfTW4vZhb1QNAPJqQeEISccQ5CbaPU4W7f3U%2FBO%2F4ukg8AvyoV12nwPUeSyeh119pFujVl0Xcwl%2BhSW59FU%2BgeAzfH1%2Fc8D9ZmVjEtNcFuaCgNVbOGReeZ0cumMuw10G2XXhplv1lSmBbbrJ7sVXZS74mVx7kg%2B%2BlwnhU06UGsT2gY4HQclovYg4Qnu65J4eUH4J7p3ylFoemaC%2BjfzgxL3tHV6yAaBLBfr5VX0ahowVpAQJWikfwGcMIVLKxwqmaZmgj1IdgWUAfrWid9%2BoRq6MH7Sfx9aNZekkE3cqBuADBccNhP7IJZynQO3tVBmeYoCnzYaEMrIMm%2FxdqAF2iRDRPoT%2FASAHZWDvsl%2FKOiOaD9mnaYuF%2FU%2BKkybWgElgaUtj27KLxQNEANKWG9XEGW1HJoVf0ESVBTCSzk%2BB8f%2BlUjYkhCfDPieozD%2BBTG4fAUE4EJGg5rpZW1wTVq%2BZ5SF0OypkGNa47isMLhmLXBE1nwseEEk6PXG%2BxAYOB860n270q6sf3b80VAkp1nGsgBjISw0FH9hHlfFCtsCT69NAgPEjXOT4GLIhPyXSpSwx%2FMKvh1r8GOqUBqwlvCc9ULk4a9g9HpuEnVviZ3LXYcSud%2B%2BaFJBBqYNl3DwtTidg6l8G9ApoLSANBQURpQ3F%2BJPLdqDETTQY5R1bvrvMYXRMhM9iw0tuRjjGvFT3OYS5QoEcbMF8%2FKZ43eYYaIn%2Fi4vd9mDNKrZitPuxKPae9x9cQA2NwsbO9P8XRySjQNrr3gkyFTSpJDlml2AKjELO08HlXjpKX%2B1tLPok6aGOM&X-Amz-Signature=f5c45857e3153dfa2cc1a62e54d7ac725a76748bb6b98ecb28a27db7dbc520e1&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
