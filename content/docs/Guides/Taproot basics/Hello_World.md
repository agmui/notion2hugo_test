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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VR6QZ62H%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T210342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIF49Q9Zyh%2FrcjOk66uFgbnRbMlVZBwsyM1xgojETXlGmAiEAkwubqsMhC2mTT66ikp2i0Kum7fofZ%2BW7NB0LwDfAaYgq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDJjeiGJNmDeQ35EvQSrcA38o1Hwo0CiR6QCFmDexB0IaOE5FTXEXH48lHUJrabK0nwesZdyTmQX8UJRWSEdvyE78OV3j3ynKs15UWmw9983jeTOT03o525RuFbBcipZav18nanl8dV8Ak5iayTAhtdfg2dkD%2FRDmJ3ivSIAXAdTTRj%2FdqTAcYOCBHtKwy5axFhYyjC3b52YBfbkIEMU0%2BUujBO%2Ft%2FxdhBZTWbzK7flz2JAGi8BKzDAuCp9BRzSILu4C8AHXR2WP5KN6bHrgbm3GrL4zWo0WStkE1K%2FJgoFNYq1VYdn1z3IN88guGAihSsZmiTexjklq7N4QemBsbyruIzcrY%2BQJaVzUCKVrxVU%2F3sg8TxHIrK%2FE8sU4kn9zxM3lN9QzVz4DGMSaFJb3dOiOLiL%2F%2BJNZYmtNcLTm5%2FC0jj2d%2FfXIwVFcSaeqKA56wSLQCAEgVssKhJiYjCX0RPXCJTTJyDA6RKcx8EhLojsAqr6qszUnVoVBIuoWF1hSEwNBJJl%2Bdx0hd2IRmn1xc4KZYZnn1ExjHfj1IgbDamtNDTwVVzOnqFLjji9Ubw11FwZQalkzeQMVH1dJ%2BJfNzP6CIx9J5%2FzS7pYIFTevOQxCib7Vpey1pVyHVcd9swfMSJ%2FGqXHrn9jgRTQcfMNbUgsIGOqUBKyLHfwpvOInGJ7igQKUiK%2B0p7Jo6H2TTouLuBlT8L0mynAtBheEcclCzvt0P5vxn7EEAMcR9KydhNzItrM47SgfbyrkInuwCHgqt6OF%2F4Hl401QmXMZyzxik3JIj5%2B14SsIZHIudDIjTmRcUMIvzUew%2B5TrbWloQR3web4XYNbN%2F8TzKoVz9X%2B1Q%2BiiOM7k3WNkgKaJgjcrz4IWwfLpefWkag%2F9d&X-Amz-Signature=3c2db685b35d085170d55d8b3b3fae638dd55ad9c381bf4ca811294bb313d0bd&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VR6QZ62H%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T210342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIF49Q9Zyh%2FrcjOk66uFgbnRbMlVZBwsyM1xgojETXlGmAiEAkwubqsMhC2mTT66ikp2i0Kum7fofZ%2BW7NB0LwDfAaYgq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDJjeiGJNmDeQ35EvQSrcA38o1Hwo0CiR6QCFmDexB0IaOE5FTXEXH48lHUJrabK0nwesZdyTmQX8UJRWSEdvyE78OV3j3ynKs15UWmw9983jeTOT03o525RuFbBcipZav18nanl8dV8Ak5iayTAhtdfg2dkD%2FRDmJ3ivSIAXAdTTRj%2FdqTAcYOCBHtKwy5axFhYyjC3b52YBfbkIEMU0%2BUujBO%2Ft%2FxdhBZTWbzK7flz2JAGi8BKzDAuCp9BRzSILu4C8AHXR2WP5KN6bHrgbm3GrL4zWo0WStkE1K%2FJgoFNYq1VYdn1z3IN88guGAihSsZmiTexjklq7N4QemBsbyruIzcrY%2BQJaVzUCKVrxVU%2F3sg8TxHIrK%2FE8sU4kn9zxM3lN9QzVz4DGMSaFJb3dOiOLiL%2F%2BJNZYmtNcLTm5%2FC0jj2d%2FfXIwVFcSaeqKA56wSLQCAEgVssKhJiYjCX0RPXCJTTJyDA6RKcx8EhLojsAqr6qszUnVoVBIuoWF1hSEwNBJJl%2Bdx0hd2IRmn1xc4KZYZnn1ExjHfj1IgbDamtNDTwVVzOnqFLjji9Ubw11FwZQalkzeQMVH1dJ%2BJfNzP6CIx9J5%2FzS7pYIFTevOQxCib7Vpey1pVyHVcd9swfMSJ%2FGqXHrn9jgRTQcfMNbUgsIGOqUBKyLHfwpvOInGJ7igQKUiK%2B0p7Jo6H2TTouLuBlT8L0mynAtBheEcclCzvt0P5vxn7EEAMcR9KydhNzItrM47SgfbyrkInuwCHgqt6OF%2F4Hl401QmXMZyzxik3JIj5%2B14SsIZHIudDIjTmRcUMIvzUew%2B5TrbWloQR3web4XYNbN%2F8TzKoVz9X%2B1Q%2BiiOM7k3WNkgKaJgjcrz4IWwfLpefWkag%2F9d&X-Amz-Signature=9eb18223141d91ee7c1c931ff0377ad03e4b2fad90d17bdc6f82a76bda2ef49f&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
