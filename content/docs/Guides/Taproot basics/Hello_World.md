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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYTCVWUK%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T050824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCom7ZvetHTxNvVag7srRr9VJwq95UZlhnwpqIm0GSXDAIgemKPlxjF6KNbiLTMQ0i4UR254zDh6f1hEP4Nacy%2Bj6AqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJgqz4ZT%2BrY3twUmMircA%2BdHRYSMwutC1KHEGaMFJ5AxIxYFBqoDFkWCNX4VDBuI5H5TEAr3HXZhcuRsfgQj2sDbjq4SOWj09QpDHXVvY8D2dASdIPhdJJlu55LIcRy7YHNLO1iHTiCwXuDRSBVu8Aqu2pS484jg%2BfZJFkyBu36TvbqM6w5S6WUBALTxRCUtZCtdTP9GQ7LtCWtYMEktZ7Epi4V2r9pNIEkGTx7g8ieq8VE5XTtM0pFQeCjij4AOLArwoxmE6%2BdpXf09m2LlqSXpCynJqyN9AaoyAe80F6Ml2wzJZbk5D6l%2FR%2Bgh%2BAO8wMqtC8Cicp3wWqDBemTnZ%2Fn5VIPLZFwt9z6ILR6BmcwI72jGNuG%2B%2FRXGZQ0%2B5VHXtC2iwXsz8DuzWnzJaYoI2vLWDQbvTbQNaefuBZX9Ey8JxhDJ4DTUkVqp9CQT9H8kQvMTaFumNQ6w8bWtO0yrWu8uwar1or5cNAF51wZc6A3OcbyZ8vh%2BST1BqZx%2B7yi%2FilmI4ScuqKFu6NIce%2BCTi01cQ5DeIxpYy%2FVNzLicCDtLCezKGTF8kttCodKJhz5AISqQzWjpyeGdOFW8k2hNm2VgATW%2BciqYXVnrRs0KDoSu0ve84waTZ%2Bkaxhx5uPUFY4j9T4AhBvtGLHacMKX4mL4GOqUBzL7zcVNjLQG6osPHowpybUi0t%2BtN1m5ItNQTXvd8ZZp78CV1ZVCoy0JZEOVE%2FPw%2FgSwO4sx2f9UCidp1WjNNNvT1GM3Mhl86DJ6HPSBZiogh%2FdBtpLsx0df%2BNC8mAprwYhC%2FngyeI5xg5mdkrv4qSYIU7zX%2BeWbJhHiKEJ0MCas1lh8En%2Fel23CAm%2BkJepkkFlQNAkNiCk%2FfxT97LMOZPPOE8zjm&X-Amz-Signature=15d9429163e7525686fa14679718fa8e71611d3dacf43d0f8c2c9b86c4825bde&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYTCVWUK%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T050824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCom7ZvetHTxNvVag7srRr9VJwq95UZlhnwpqIm0GSXDAIgemKPlxjF6KNbiLTMQ0i4UR254zDh6f1hEP4Nacy%2Bj6AqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJgqz4ZT%2BrY3twUmMircA%2BdHRYSMwutC1KHEGaMFJ5AxIxYFBqoDFkWCNX4VDBuI5H5TEAr3HXZhcuRsfgQj2sDbjq4SOWj09QpDHXVvY8D2dASdIPhdJJlu55LIcRy7YHNLO1iHTiCwXuDRSBVu8Aqu2pS484jg%2BfZJFkyBu36TvbqM6w5S6WUBALTxRCUtZCtdTP9GQ7LtCWtYMEktZ7Epi4V2r9pNIEkGTx7g8ieq8VE5XTtM0pFQeCjij4AOLArwoxmE6%2BdpXf09m2LlqSXpCynJqyN9AaoyAe80F6Ml2wzJZbk5D6l%2FR%2Bgh%2BAO8wMqtC8Cicp3wWqDBemTnZ%2Fn5VIPLZFwt9z6ILR6BmcwI72jGNuG%2B%2FRXGZQ0%2B5VHXtC2iwXsz8DuzWnzJaYoI2vLWDQbvTbQNaefuBZX9Ey8JxhDJ4DTUkVqp9CQT9H8kQvMTaFumNQ6w8bWtO0yrWu8uwar1or5cNAF51wZc6A3OcbyZ8vh%2BST1BqZx%2B7yi%2FilmI4ScuqKFu6NIce%2BCTi01cQ5DeIxpYy%2FVNzLicCDtLCezKGTF8kttCodKJhz5AISqQzWjpyeGdOFW8k2hNm2VgATW%2BciqYXVnrRs0KDoSu0ve84waTZ%2Bkaxhx5uPUFY4j9T4AhBvtGLHacMKX4mL4GOqUBzL7zcVNjLQG6osPHowpybUi0t%2BtN1m5ItNQTXvd8ZZp78CV1ZVCoy0JZEOVE%2FPw%2FgSwO4sx2f9UCidp1WjNNNvT1GM3Mhl86DJ6HPSBZiogh%2FdBtpLsx0df%2BNC8mAprwYhC%2FngyeI5xg5mdkrv4qSYIU7zX%2BeWbJhHiKEJ0MCas1lh8En%2Fel23CAm%2BkJepkkFlQNAkNiCk%2FfxT97LMOZPPOE8zjm&X-Amz-Signature=5ca869714d0548166ea4f0145e55a287ac6b8ed760aa3eb4ea6aafc2909062f1&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
