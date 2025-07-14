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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZX32HNPU%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T121709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQCUGiVmxaTU3zg9CmGsrtRcp2lNBfrQ7qy8DQDxzxKQuAIgQg6COwJZib0NNB5cpb2QZk1zQ%2F3WwdnB1kGosXxprAsq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDDeO3Sa%2FQYVfU5vtfCrcA89aWD4Lo0eaG86Gyzh6HEwlNgFw9pO4y%2FtUIhEScR7jAoMnX3P8EI4rMnMLXEnbBVTOav3hYd8l6GHoDkpmV9hbp5UbVC1OQACIU2%2BskMj%2FiBZibgr8ZYydQKUjDwiqJcZiK4I1lMH%2BsEaZS3PKboqidJcJD8arY9IQFK3fkSbB8vgM5HFT3ncsht2jjy8t3Em2MR%2FP3Tvdy7IZ9T0xCLSbHWU9L%2BoteoVtgL88hhv2a8X4DaAiHrF822KVJg9MEFeRG9MPSFTNd3XRfA6x8I97j6CnZcLra4AyeVeAz4xgZwwy2SuD1VcvIUgkr4SWD3ZRNUtQ6gu6hfjOkpvGwZnls2wVrCQUFr7zypDRxOu6rddUvTgGOn4pjV8vOXb7UlklHfqhkpZy7z0RI%2FJIqqftZCPzawZGHB6Phg3pxUikCZCUQuxC0YVVNXqQHPrAdCtlaeo87XCp%2F7uXLZq93DZBTsoqU3kE0oUTin1BySLC7zTMnRCfxYNPBq%2FZqnTdghwf9qQQuX%2BSk4vprUSIibLFRDrUkwiqocXVJZ8pDAqtyS2BGKlC5N%2BuSbgInpMJiPydQ9iEtc9FWYjbBQWOUnmd1YqiWq8B1yJeUkh6zMHhOtG2uB%2Bs7w7fERrhMPfb08MGOqUBpWkIrhGff06MTfdOo9nUaQfJLefZ8uS0KUMi5pZzNgBk8gsxGgT7viRuuYbB0hYiimedzzI91zLNJAPlfez8qXr4rwkwtv6JTYx%2BuMFHGVtDMMEl39b7WAnN3k48dA3H6UPoX5Y3uaKUyvuKlciBLhcNtvg41tfrLtg%2Bqu2P9o%2BYdVKqhY8%2Bpj7SsusTfJHw%2Fb7Nej5HLe9%2BaLTJCLqsU4TSEDTC&X-Amz-Signature=ae2295f2763ddef2c4fefbb4b8a7502d377a7ee041700c3719a12e31ef8f5048&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZX32HNPU%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T121709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQCUGiVmxaTU3zg9CmGsrtRcp2lNBfrQ7qy8DQDxzxKQuAIgQg6COwJZib0NNB5cpb2QZk1zQ%2F3WwdnB1kGosXxprAsq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDDeO3Sa%2FQYVfU5vtfCrcA89aWD4Lo0eaG86Gyzh6HEwlNgFw9pO4y%2FtUIhEScR7jAoMnX3P8EI4rMnMLXEnbBVTOav3hYd8l6GHoDkpmV9hbp5UbVC1OQACIU2%2BskMj%2FiBZibgr8ZYydQKUjDwiqJcZiK4I1lMH%2BsEaZS3PKboqidJcJD8arY9IQFK3fkSbB8vgM5HFT3ncsht2jjy8t3Em2MR%2FP3Tvdy7IZ9T0xCLSbHWU9L%2BoteoVtgL88hhv2a8X4DaAiHrF822KVJg9MEFeRG9MPSFTNd3XRfA6x8I97j6CnZcLra4AyeVeAz4xgZwwy2SuD1VcvIUgkr4SWD3ZRNUtQ6gu6hfjOkpvGwZnls2wVrCQUFr7zypDRxOu6rddUvTgGOn4pjV8vOXb7UlklHfqhkpZy7z0RI%2FJIqqftZCPzawZGHB6Phg3pxUikCZCUQuxC0YVVNXqQHPrAdCtlaeo87XCp%2F7uXLZq93DZBTsoqU3kE0oUTin1BySLC7zTMnRCfxYNPBq%2FZqnTdghwf9qQQuX%2BSk4vprUSIibLFRDrUkwiqocXVJZ8pDAqtyS2BGKlC5N%2BuSbgInpMJiPydQ9iEtc9FWYjbBQWOUnmd1YqiWq8B1yJeUkh6zMHhOtG2uB%2Bs7w7fERrhMPfb08MGOqUBpWkIrhGff06MTfdOo9nUaQfJLefZ8uS0KUMi5pZzNgBk8gsxGgT7viRuuYbB0hYiimedzzI91zLNJAPlfez8qXr4rwkwtv6JTYx%2BuMFHGVtDMMEl39b7WAnN3k48dA3H6UPoX5Y3uaKUyvuKlciBLhcNtvg41tfrLtg%2Bqu2P9o%2BYdVKqhY8%2Bpj7SsusTfJHw%2Fb7Nej5HLe9%2BaLTJCLqsU4TSEDTC&X-Amz-Signature=4ce773b16e65cb6451d06bd3dbd8e7b216a5ad927d304cbf1979644f5c42f61f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
