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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQQBZ35G%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T050923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIGJ3xWnUQsY9FuaNQlo3Rq7OzDEYbAjdst3kSb5nYHTRAiEAjp0eRhhBV9vwPvi2DRvEf7qrtF8pbbEAWEmAAaZqe3gqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF%2BRRoIn71C%2FXNsffyrcAxSqCNN5svzGf044QWKa186y%2F9p0W8Qko5rWcB79BmB29eTzoYLJu3lwYb%2FUYbabZKZNkT7f9C35Zd4jTiX3kA4xRCSM0%2FmS1u8P0QhEhCZeW36LkTMUT77KuYKo%2FAdUVcyGnPvt%2F4LCWmUQKeYF71J%2FFVz43C6o%2BfS3uc3wg3yZPbtITWN9E4htQybYLs4ni6LXrsLejRuH%2Fh%2BuBavIxx9NmZ6Wc92Yc%2BRGA71HmhzlI4mU3OIdhOwAEPT4BRMMu%2BpBAxtmxbdAUyLUaCggDF47mbt%2FtP8e6jS%2Bc9N2HohfozbwzVHbCbftHbbGpBibRsHrV6mgJ%2FkHWT%2BEF2YshltIKS9dv1IRE5gNDX2vWNbqLELXG4O3vLNasZCUsitwIokNV2T8OLFKRe9FouEbph3Qy6kQZ7MH4zoN4u1DQkocSHp4Lchrqwj5dxnVbc10uZwDP%2B1eAmZAqpoUgcdFoVHn12UlSV5ViMa1w3TUqdtMYFxHEqltRfJxQlmjgmULKaU%2BzHcwdhCqpuRlauE2VPs12Mf80lQBICTLPeTqcOX1DMOIF3fYWgav%2Fm%2B%2BDeW90xjKJMe6Q5yN41cZaZt4HJNQm4SURMXWw6vTXOBN%2Bfxm07HjWPazk1H4jxIzMNWKs78GOqUBVVX3F9ljYd%2BNID%2FzlmsUWpTKTJ5q1jd0EFkW%2FbEZuCKRfYveLEavAbClRxGN80GrSmfC%2F2%2Bfz015STVX6Dd6%2BZp%2BPew1FygM4h8%2Frfr6ly0ewe4NkFv4SaZOFy5%2BTyD2rI676C0yJ%2Bqf3CfHkzbHM%2F1vET8I4d6tuR0W21o4odxpZ%2BKpS1vsnzR5bcTEnsdSE4BcmNEOY6hqozqTLfIKAEBSmlIn&X-Amz-Signature=88e772892800cd5707a19743864d80164ade7e7bfda6d991f3eb3a63b4782a7a&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQQBZ35G%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T050923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIGJ3xWnUQsY9FuaNQlo3Rq7OzDEYbAjdst3kSb5nYHTRAiEAjp0eRhhBV9vwPvi2DRvEf7qrtF8pbbEAWEmAAaZqe3gqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF%2BRRoIn71C%2FXNsffyrcAxSqCNN5svzGf044QWKa186y%2F9p0W8Qko5rWcB79BmB29eTzoYLJu3lwYb%2FUYbabZKZNkT7f9C35Zd4jTiX3kA4xRCSM0%2FmS1u8P0QhEhCZeW36LkTMUT77KuYKo%2FAdUVcyGnPvt%2F4LCWmUQKeYF71J%2FFVz43C6o%2BfS3uc3wg3yZPbtITWN9E4htQybYLs4ni6LXrsLejRuH%2Fh%2BuBavIxx9NmZ6Wc92Yc%2BRGA71HmhzlI4mU3OIdhOwAEPT4BRMMu%2BpBAxtmxbdAUyLUaCggDF47mbt%2FtP8e6jS%2Bc9N2HohfozbwzVHbCbftHbbGpBibRsHrV6mgJ%2FkHWT%2BEF2YshltIKS9dv1IRE5gNDX2vWNbqLELXG4O3vLNasZCUsitwIokNV2T8OLFKRe9FouEbph3Qy6kQZ7MH4zoN4u1DQkocSHp4Lchrqwj5dxnVbc10uZwDP%2B1eAmZAqpoUgcdFoVHn12UlSV5ViMa1w3TUqdtMYFxHEqltRfJxQlmjgmULKaU%2BzHcwdhCqpuRlauE2VPs12Mf80lQBICTLPeTqcOX1DMOIF3fYWgav%2Fm%2B%2BDeW90xjKJMe6Q5yN41cZaZt4HJNQm4SURMXWw6vTXOBN%2Bfxm07HjWPazk1H4jxIzMNWKs78GOqUBVVX3F9ljYd%2BNID%2FzlmsUWpTKTJ5q1jd0EFkW%2FbEZuCKRfYveLEavAbClRxGN80GrSmfC%2F2%2Bfz015STVX6Dd6%2BZp%2BPew1FygM4h8%2Frfr6ly0ewe4NkFv4SaZOFy5%2BTyD2rI676C0yJ%2Bqf3CfHkzbHM%2F1vET8I4d6tuR0W21o4odxpZ%2BKpS1vsnzR5bcTEnsdSE4BcmNEOY6hqozqTLfIKAEBSmlIn&X-Amz-Signature=6385ea6ad3da4907b32f467dd2b1317c54b9efa30dce1858f8bd58cd3cf8251f&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
