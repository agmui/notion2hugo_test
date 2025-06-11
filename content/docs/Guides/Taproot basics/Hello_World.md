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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJMRLVCG%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T004226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDhZ1Dh7JpP4IhfR9p1goVMh2SAVeKo7Q9FwuCtcE7MJAIgaxy%2F8DWRwxksi3AwhDSPGjQyH8Hl2aeMhwdffUdCiz4qiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMzhDtQUngDCR8edJSrcA2rZngeQ7K%2FWfhmDqndLw%2BPZezkcn2pkqwb688d291K6wSa5TRhm3Zo2hgScQ4XQleTxfaEaD6CvabwHg6%2FrG%2FNOPZfHAo%2BbrJt7zhf9PLJe8kWLWspvguwjlsmVTGzLlpcuJl6GigATRw5VMiWgZClQP%2FLRzvrMPvTmd3Ny%2BUC8fVJoOXyT%2BSHpnqFAYQGYMkvWUYixsJhncSusntd2doCKBncxAtikwDKAwTFA9cjGa9rGzLEtY0bpseI62JRonAJhc4t0pVvA%2B8DVqWLFA2N50JMTpo3DEzG6vaSJzwsaLR82vrk1bvxXewrZlm3Ywt4N5jOYxcVTKHdKa8Ff5Ino%2BJt6%2FxDvwBwH5jcsqhAEIhe9e5BKdJ1gVGo%2Fa%2FRJEA5HOq3WAZ5Vtobuq7YxMQQl8a5mIgfe0ms80325Wlnmt3TTto5DUmRSqPdCzjYYvIV3rxHD0P9wrdY2Opbs887jwTFW9rk0RlwNcWRHVkCw807rhWVrUVHdDY2Pj21DBSm%2F9DJ5LyNAVH6qJz4I2dQkxC9nq7vFmBMj0xurDF%2BO1gGTxJAkL5M97bbIKYgrfjX1Kc%2Bh5nj0Kd3xr6FnqJon%2BTnOl9exA%2Bn4RMcByd699zRSrAiBs3NhXqsSMOTlosIGOqUB6PgLfo9KaDAWi4R%2F5t0EZda%2BogbtpaPbVgM838q%2FwiaewzBxCmnoSwE5z2YCTmYE0OFcnu%2B6YuD9ObVNo%2Fe%2BF23LokFItTZPCAVVbji2iQ4dnvkk%2BL8b%2FSk2vJdoDo6ibpBn05w%2BXwasxEmBGr71XEkjwi8%2BoMupRH7u28fe0fvYHrnpE14BmEhImJJV6h54%2FUrufoULyBZt3A2eRW4oiEltVdhY&X-Amz-Signature=c414769e9a691e5e8b4e41321cab4f0a23c25456f25fb79f16cefc98cb2c372e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJMRLVCG%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T004226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDhZ1Dh7JpP4IhfR9p1goVMh2SAVeKo7Q9FwuCtcE7MJAIgaxy%2F8DWRwxksi3AwhDSPGjQyH8Hl2aeMhwdffUdCiz4qiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMzhDtQUngDCR8edJSrcA2rZngeQ7K%2FWfhmDqndLw%2BPZezkcn2pkqwb688d291K6wSa5TRhm3Zo2hgScQ4XQleTxfaEaD6CvabwHg6%2FrG%2FNOPZfHAo%2BbrJt7zhf9PLJe8kWLWspvguwjlsmVTGzLlpcuJl6GigATRw5VMiWgZClQP%2FLRzvrMPvTmd3Ny%2BUC8fVJoOXyT%2BSHpnqFAYQGYMkvWUYixsJhncSusntd2doCKBncxAtikwDKAwTFA9cjGa9rGzLEtY0bpseI62JRonAJhc4t0pVvA%2B8DVqWLFA2N50JMTpo3DEzG6vaSJzwsaLR82vrk1bvxXewrZlm3Ywt4N5jOYxcVTKHdKa8Ff5Ino%2BJt6%2FxDvwBwH5jcsqhAEIhe9e5BKdJ1gVGo%2Fa%2FRJEA5HOq3WAZ5Vtobuq7YxMQQl8a5mIgfe0ms80325Wlnmt3TTto5DUmRSqPdCzjYYvIV3rxHD0P9wrdY2Opbs887jwTFW9rk0RlwNcWRHVkCw807rhWVrUVHdDY2Pj21DBSm%2F9DJ5LyNAVH6qJz4I2dQkxC9nq7vFmBMj0xurDF%2BO1gGTxJAkL5M97bbIKYgrfjX1Kc%2Bh5nj0Kd3xr6FnqJon%2BTnOl9exA%2Bn4RMcByd699zRSrAiBs3NhXqsSMOTlosIGOqUB6PgLfo9KaDAWi4R%2F5t0EZda%2BogbtpaPbVgM838q%2FwiaewzBxCmnoSwE5z2YCTmYE0OFcnu%2B6YuD9ObVNo%2Fe%2BF23LokFItTZPCAVVbji2iQ4dnvkk%2BL8b%2FSk2vJdoDo6ibpBn05w%2BXwasxEmBGr71XEkjwi8%2BoMupRH7u28fe0fvYHrnpE14BmEhImJJV6h54%2FUrufoULyBZt3A2eRW4oiEltVdhY&X-Amz-Signature=4bb0da149c1ffc59423ef577370f7924153fe7748c3075223e89b9d5ed5f8e7b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
