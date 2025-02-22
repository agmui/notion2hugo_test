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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBLCSQDB%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T140106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEeab3cHbgKknQMZ6IYIC%2BWuZR5Txd74mDhrjkfmqZYsAiEA8k8Vx9dw8U%2B6pUum2CZzt8tjEsgx7v1hYeFAdcI7hVAqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDzcv3oh0%2FVj%2F7ucbircAyAos0aCv7gn8ouu%2BHXCiusEuRVg63isq29FfBCFAXCZuRQnFwLeFWHJvZ%2Bal3gr7X2YjiDVfGPB8lW4LoWj2MPLX2NZCChxDl%2F0HJnvHWUT8lWSQGglPV7xFfGK349Fk9PmHjwj%2BPOW66dL3p9WfA1bpc5Zi17jNMtyIo7oyW53wHromx4caaZLplyMfLotzsP7pi3QzRvqe3WCX1ETE1ZRLgDQm%2FgUycysL9yxAlUDm7ukgkjiIfIbkDhI%2B5HGkXSuQhgK3733MUaZY9EprUJM%2FUIMMlqTyCJinm9i9R7jalixafhXxejYuv6qvA1nTbEt7FSg%2FLCAcnkAlMwGQO0kkDVdloIKoUdacDxfKAw%2BAZ8k%2BUUghBSC90OSRDTas1hjrQEW6i8MywnvBdMrQLg0iZYKqcgiGGrAXTjqmc6YvPqtbZSgtY%2Fuz%2BbVrtwIb0dgm6dEVsEggKyfcfiV%2F8gq8pQO85KK3wVJoslcyizj30AC1fYgQBNbpyLsImqERXXVtmqREvqZPL11u%2Be5UeTrdiZ5Q8ma0yso%2F%2BVFD5%2FBWw2mzYzPDnZN5w3QyM8%2Bpe7vLuNr1hUtaEZFHSQyy5EzJtWdjI7LHbK1a73dFPQD1o8BEmEOHp2thfKlMOfm5r0GOqUBKzIzGoR5RRNJQO1VDsZ%2B1MNOOA7Qk4STxX99g8XoEQgP%2BnUmdMGE888Eb2OA6kDJzhM8vTLgGY9%2Fqbbnid98sh3ylIqfl8X%2BvzZSS5tmnW1JCa5Z%2FOxavrJzTCFifyFVbw1bSghH%2F3pASBYDwRTW8m5xQ23XvwxlxNaNvss1La08I%2FnBf6NIKagF6hQR%2BW0pzLI0bp748BW0%2F51FYGqybIEDt2%2FS&X-Amz-Signature=6f87d337165445cac9e6b8dd6b792eaa0934cd85db6a5597573325defd9128ac&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBLCSQDB%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T140106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEeab3cHbgKknQMZ6IYIC%2BWuZR5Txd74mDhrjkfmqZYsAiEA8k8Vx9dw8U%2B6pUum2CZzt8tjEsgx7v1hYeFAdcI7hVAqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDzcv3oh0%2FVj%2F7ucbircAyAos0aCv7gn8ouu%2BHXCiusEuRVg63isq29FfBCFAXCZuRQnFwLeFWHJvZ%2Bal3gr7X2YjiDVfGPB8lW4LoWj2MPLX2NZCChxDl%2F0HJnvHWUT8lWSQGglPV7xFfGK349Fk9PmHjwj%2BPOW66dL3p9WfA1bpc5Zi17jNMtyIo7oyW53wHromx4caaZLplyMfLotzsP7pi3QzRvqe3WCX1ETE1ZRLgDQm%2FgUycysL9yxAlUDm7ukgkjiIfIbkDhI%2B5HGkXSuQhgK3733MUaZY9EprUJM%2FUIMMlqTyCJinm9i9R7jalixafhXxejYuv6qvA1nTbEt7FSg%2FLCAcnkAlMwGQO0kkDVdloIKoUdacDxfKAw%2BAZ8k%2BUUghBSC90OSRDTas1hjrQEW6i8MywnvBdMrQLg0iZYKqcgiGGrAXTjqmc6YvPqtbZSgtY%2Fuz%2BbVrtwIb0dgm6dEVsEggKyfcfiV%2F8gq8pQO85KK3wVJoslcyizj30AC1fYgQBNbpyLsImqERXXVtmqREvqZPL11u%2Be5UeTrdiZ5Q8ma0yso%2F%2BVFD5%2FBWw2mzYzPDnZN5w3QyM8%2Bpe7vLuNr1hUtaEZFHSQyy5EzJtWdjI7LHbK1a73dFPQD1o8BEmEOHp2thfKlMOfm5r0GOqUBKzIzGoR5RRNJQO1VDsZ%2B1MNOOA7Qk4STxX99g8XoEQgP%2BnUmdMGE888Eb2OA6kDJzhM8vTLgGY9%2Fqbbnid98sh3ylIqfl8X%2BvzZSS5tmnW1JCa5Z%2FOxavrJzTCFifyFVbw1bSghH%2F3pASBYDwRTW8m5xQ23XvwxlxNaNvss1La08I%2FnBf6NIKagF6hQR%2BW0pzLI0bp748BW0%2F51FYGqybIEDt2%2FS&X-Amz-Signature=fd9c9b34d2bb8e1c052fddbdab9f4e2455a6627afc866b2ed74f0476f6ff76a6&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
