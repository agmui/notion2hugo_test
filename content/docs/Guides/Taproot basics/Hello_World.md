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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662A6N25J5%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T004142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIQDK69iooKhjd7fBXg6svrLPTfAtm53R%2B3qx1jhA0XuqPwIgHjSJ3Zd0HCi8Ko62mIp1MChgEmMQiCdnUSDDQrjydVkqiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJGBOf%2FYGO%2FrFowhMSrcA8ywM5ys%2Fq8kjHtkN7Nics31PVKMasK01pnIyWRH3ThuZ6x2bkcFeSVeAGh%2BGHj7boThxnBVLAh4ta8xyEwBU53pW6kNotyU7CLqGckkXd9exijk79CVjE0v%2FmTZdFBBYljrTKMrND5Ov5S0a%2Fbhc7zjpZIis9FG7F%2FZ5lcgjG5UJibIyWjy1vxSaIVYGwB7RRRr%2F5oD4%2Btohln5f8Mefrkx%2BjP1KqchX03slivtpbac6DNruTEmoioc2ySizrwtW%2FzPFEdnRP3HEgE8gYxn70aIVFyn6V4I%2B4%2FYRWTVTb6JY58BlN4opMPgaDigYg2Rr9wdc3Nopi9tM%2BrdiomYgb5R1mK4bNcWZ8rNb4vusA6Kn5jgQ9OZ4ZfaPlXn%2FiMikl9ccL4xKaYUxXAQBt9esGCzK%2FKC6SRWRUIG%2FOub8h4olPLMvRjGaicio%2Bvyuw92k48UX9aQEmlZoNG%2FpK8p%2F%2BA%2F0seb%2FoVnVAN0iKQtf%2BSgEAAPolVVDcg8bYqPBKc%2BzA4M%2B79jy5rXWj4K6w8lzPe7Eb4Fg%2BfTiZXK6onX8%2BOCpoD24g892VF%2BvQ3rVntl5bPzA0bqto%2F%2Fx9x9DQFki0PVNfCFwl6k7ro%2FLzwHQ3sdtoBNgRUGyYlXjyOSMPbJvsEGOqUB7%2BwZxpSSrM%2B8v8nre%2BF88LsjqIWp1NzZ7J%2F4ug9n8fwKqDX2pIT2q0PQbdEbWjTxgaNSyg5Gj7RRfT5mQAYJf2n22r%2BoqdP4diVSIQ34%2FEJJblT%2FoVbgVXti1INqcENE7UpBnQKEAtRxGUNopgbPoI%2FEanTUEuNmdEj8coe2oD%2Fw4y4IGXckWH2hqARfut%2Fk0A2fCy9NWrSmsyxvUyh%2BgXtD4wNp&X-Amz-Signature=4ea1d23fbe64d97181b02f5878688a5ad47dc2052c82fbf609b9cdc430f414cb&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662A6N25J5%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T004142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIQDK69iooKhjd7fBXg6svrLPTfAtm53R%2B3qx1jhA0XuqPwIgHjSJ3Zd0HCi8Ko62mIp1MChgEmMQiCdnUSDDQrjydVkqiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJGBOf%2FYGO%2FrFowhMSrcA8ywM5ys%2Fq8kjHtkN7Nics31PVKMasK01pnIyWRH3ThuZ6x2bkcFeSVeAGh%2BGHj7boThxnBVLAh4ta8xyEwBU53pW6kNotyU7CLqGckkXd9exijk79CVjE0v%2FmTZdFBBYljrTKMrND5Ov5S0a%2Fbhc7zjpZIis9FG7F%2FZ5lcgjG5UJibIyWjy1vxSaIVYGwB7RRRr%2F5oD4%2Btohln5f8Mefrkx%2BjP1KqchX03slivtpbac6DNruTEmoioc2ySizrwtW%2FzPFEdnRP3HEgE8gYxn70aIVFyn6V4I%2B4%2FYRWTVTb6JY58BlN4opMPgaDigYg2Rr9wdc3Nopi9tM%2BrdiomYgb5R1mK4bNcWZ8rNb4vusA6Kn5jgQ9OZ4ZfaPlXn%2FiMikl9ccL4xKaYUxXAQBt9esGCzK%2FKC6SRWRUIG%2FOub8h4olPLMvRjGaicio%2Bvyuw92k48UX9aQEmlZoNG%2FpK8p%2F%2BA%2F0seb%2FoVnVAN0iKQtf%2BSgEAAPolVVDcg8bYqPBKc%2BzA4M%2B79jy5rXWj4K6w8lzPe7Eb4Fg%2BfTiZXK6onX8%2BOCpoD24g892VF%2BvQ3rVntl5bPzA0bqto%2F%2Fx9x9DQFki0PVNfCFwl6k7ro%2FLzwHQ3sdtoBNgRUGyYlXjyOSMPbJvsEGOqUB7%2BwZxpSSrM%2B8v8nre%2BF88LsjqIWp1NzZ7J%2F4ug9n8fwKqDX2pIT2q0PQbdEbWjTxgaNSyg5Gj7RRfT5mQAYJf2n22r%2BoqdP4diVSIQ34%2FEJJblT%2FoVbgVXti1INqcENE7UpBnQKEAtRxGUNopgbPoI%2FEanTUEuNmdEj8coe2oD%2Fw4y4IGXckWH2hqARfut%2Fk0A2fCy9NWrSmsyxvUyh%2BgXtD4wNp&X-Amz-Signature=9e5e89e289c4d5362122e2206b07c5c59694ddbc5d704b4b7611cc350acb10ac&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
