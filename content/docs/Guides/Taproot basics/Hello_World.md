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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKFPGIO4%2F20260821%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260821T011645Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA1Yt4BWJZYvYcaCtHJ2T%2FFrLP3S7yQTEoljD0HIYRRuAiEAmLmmMmLqsMBbLEIo8sSf1JOyRWiYBt4SLhBIzDA6OJAqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNHPPBn5munudwIVuircA5YSoQC9sL6V4rfGKayJotc%2FKu%2F5PZqAUSuPib5wiYffT2OSa03rWeVPrb7la7Jsq4lqnZfHf6mVXueWG8HmeofuI7jACxs3SrsknCAbq8O8RyMyvJNrrlgh%2B04sabK7MkxKFuJnw%2FG8Dr4vwH%2F95ZHKb5mY7laaXAWic6QT915WX9qNvrpG4Fa2bsXz2%2FkbcZ5maknnjYpTGzMZ1nm3mSqmdPCKpqSBBDCKIi1SXTTkSQrs9zzQLRufTyf9%2BVRWjNGbO3WW%2BFvpKn6fY6Pvo5yiYtzRb0mC%2Fdg6mPJCttQVJbNTnv7qwUU3taszmy7DOts4t%2BMz%2FKHoFaBktk1tGxkp%2FUacnDeIw8VCTQjqX2C48QHQrf9Cvke%2Fde6TB0ey11%2Bg57oe%2FSdo2PV3YrWjDjhhZLsBk0oI2Ru0vGzGXDftPA%2Fi2UITgK0F5V3OdzC9w2vxVQyFH53PJXgoFWbm6KD3C%2Bh%2BvY%2BQT3p3C7rR0I5lAKNdPnAJnbsnVQHM2hY4GpxQL%2FYBXKOATDsGtuvpAlByuYFKwWJHIgvv10tMmzi7mll58BbZfoW2YlOd6AZr502njSVWNPNOwp8CqrvsnKy4b5Z10NeMqMBemeWsp6DqvysRr%2BTadK5N78j5MIqtntQGOqUB9%2FRNUzjRQ4vMUNLnUNMuaKwE5KeqbM3LN38Pt7WQDVu7ir4nm8AvIbqPJ4JXg%2FOtWGG%2FmE%2BAX%2FBdY9%2BsrJ6HT1mjRGNfcoa8kxbw9LC3HP%2FrRDG6s908JKq7oRfhQOU55Q1lZ1Vi7iQFiEQRIfabkDbykXbdLlx3C8k%2BV300FfyZBP1%2BeAql0BkVh8so11zMU%2BIXKTQTDVA%2B1xlp%2B6GS0oc2CNAH&X-Amz-Signature=412a28a25cf421e4d8e1c1d8dc23b67b3b8a3477fb4d21511f7538ac7bccf749&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKFPGIO4%2F20260821%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260821T011645Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA1Yt4BWJZYvYcaCtHJ2T%2FFrLP3S7yQTEoljD0HIYRRuAiEAmLmmMmLqsMBbLEIo8sSf1JOyRWiYBt4SLhBIzDA6OJAqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNHPPBn5munudwIVuircA5YSoQC9sL6V4rfGKayJotc%2FKu%2F5PZqAUSuPib5wiYffT2OSa03rWeVPrb7la7Jsq4lqnZfHf6mVXueWG8HmeofuI7jACxs3SrsknCAbq8O8RyMyvJNrrlgh%2B04sabK7MkxKFuJnw%2FG8Dr4vwH%2F95ZHKb5mY7laaXAWic6QT915WX9qNvrpG4Fa2bsXz2%2FkbcZ5maknnjYpTGzMZ1nm3mSqmdPCKpqSBBDCKIi1SXTTkSQrs9zzQLRufTyf9%2BVRWjNGbO3WW%2BFvpKn6fY6Pvo5yiYtzRb0mC%2Fdg6mPJCttQVJbNTnv7qwUU3taszmy7DOts4t%2BMz%2FKHoFaBktk1tGxkp%2FUacnDeIw8VCTQjqX2C48QHQrf9Cvke%2Fde6TB0ey11%2Bg57oe%2FSdo2PV3YrWjDjhhZLsBk0oI2Ru0vGzGXDftPA%2Fi2UITgK0F5V3OdzC9w2vxVQyFH53PJXgoFWbm6KD3C%2Bh%2BvY%2BQT3p3C7rR0I5lAKNdPnAJnbsnVQHM2hY4GpxQL%2FYBXKOATDsGtuvpAlByuYFKwWJHIgvv10tMmzi7mll58BbZfoW2YlOd6AZr502njSVWNPNOwp8CqrvsnKy4b5Z10NeMqMBemeWsp6DqvysRr%2BTadK5N78j5MIqtntQGOqUB9%2FRNUzjRQ4vMUNLnUNMuaKwE5KeqbM3LN38Pt7WQDVu7ir4nm8AvIbqPJ4JXg%2FOtWGG%2FmE%2BAX%2FBdY9%2BsrJ6HT1mjRGNfcoa8kxbw9LC3HP%2FrRDG6s908JKq7oRfhQOU55Q1lZ1Vi7iQFiEQRIfabkDbykXbdLlx3C8k%2BV300FfyZBP1%2BeAql0BkVh8so11zMU%2BIXKTQTDVA%2B1xlp%2B6GS0oc2CNAH&X-Amz-Signature=ecf2724bd45ccbb0c5c07576b4c4c081377d10e7d8070d89b3a83e762f4f97f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
