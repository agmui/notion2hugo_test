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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VA7CB4W%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T031655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDrg66WF5jq%2BLzOB54%2BoGGPoFMnSt7nAwNSFRrqqMTtBgIhALC46hXAnFhdCWRm%2B2y%2B7PU2ITrJZpdc5lBQ592jM0d%2BKv8DCCEQABoMNjM3NDIzMTgzODA1IgzJMLO9mZBA6SiuauYq3APTKcKW9muddhQgTdb1QiTLY4D%2F0Obp2nncl8DyIdJ%2BtKNJl5nMssuggm%2BtR%2BQzPuekb3aBCDT6F1H9BOK4M%2Fd3HXgNZicI%2BQG32VoSabzfuIvnD%2FkxdecqAomL1PUTMlIg7RB4%2FfpxUJuiBRzNElhq7GliHyo81SB%2ByZRojzNXsbMlcruh6dmaLtXcRBjKu4NlX9h3bRkgswjfWke0SQImjccaoHmSAXP8B0rmNHPog%2FVQQYI70jG9Hm2odSeef9vpVkERWoD%2Fx7JmBtanr2sT7M8F1KYqGpzm0%2BdgMNyqiXG7XuFoqqbvyQC72QmENqT23adxni6uWMUd81S4y6oQtJPt7y13BSXO6JNv9Qj0G7MtZ9OKkpdZjcLeJfxOfvfuDcv3DZ7NIzL9xYE5ACsTeBNTZXM3EFeCJrNtFQ5PGzb0OjMiWEIBrMABeeTCYuy30e1oE3MtZGDToEU02qvLy2%2Bk8hED1nNLS%2FbhHpwQl%2Btz3wYCynQx9qHdvsiH%2B2xRFMKjMMS9WI5Q3VWxoquVwlKud8S8Fh2tFZIVDAz%2BqNtHBqEeUqGTQSvhauhEjbRGX%2FdoZvdCe6NdPXaBl3iP%2BPEXgDfHb0a5kxqgc%2FLnPFG0coxH1icqh%2FGfwTDb8e69BjqkARP%2FiOp%2FG%2FFkukE0f58FrBchbMZ2n%2FjFfcF48CxtipvjSs7uvh%2FcR7%2F3zaGTFVh8yO7hXoE%2B0AhGfJKANHPmfqblElR6zQA8%2FhEgHo92cyyIMA2OiMw1aoOQH%2FVbpMNj6QUQDhCXpfnteStD7fhr66WLNgcYG18dCBuc%2FYPNsCpfAnMpSDoDfBUUU0do3LfmtEA41NoL33RLvGaKE0yRx6p9PDmg&X-Amz-Signature=3280a15905bd1015b9ddbdfb043de878a7262bbf997d9ccdf4aa512e214f035d&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VA7CB4W%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T031655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDrg66WF5jq%2BLzOB54%2BoGGPoFMnSt7nAwNSFRrqqMTtBgIhALC46hXAnFhdCWRm%2B2y%2B7PU2ITrJZpdc5lBQ592jM0d%2BKv8DCCEQABoMNjM3NDIzMTgzODA1IgzJMLO9mZBA6SiuauYq3APTKcKW9muddhQgTdb1QiTLY4D%2F0Obp2nncl8DyIdJ%2BtKNJl5nMssuggm%2BtR%2BQzPuekb3aBCDT6F1H9BOK4M%2Fd3HXgNZicI%2BQG32VoSabzfuIvnD%2FkxdecqAomL1PUTMlIg7RB4%2FfpxUJuiBRzNElhq7GliHyo81SB%2ByZRojzNXsbMlcruh6dmaLtXcRBjKu4NlX9h3bRkgswjfWke0SQImjccaoHmSAXP8B0rmNHPog%2FVQQYI70jG9Hm2odSeef9vpVkERWoD%2Fx7JmBtanr2sT7M8F1KYqGpzm0%2BdgMNyqiXG7XuFoqqbvyQC72QmENqT23adxni6uWMUd81S4y6oQtJPt7y13BSXO6JNv9Qj0G7MtZ9OKkpdZjcLeJfxOfvfuDcv3DZ7NIzL9xYE5ACsTeBNTZXM3EFeCJrNtFQ5PGzb0OjMiWEIBrMABeeTCYuy30e1oE3MtZGDToEU02qvLy2%2Bk8hED1nNLS%2FbhHpwQl%2Btz3wYCynQx9qHdvsiH%2B2xRFMKjMMS9WI5Q3VWxoquVwlKud8S8Fh2tFZIVDAz%2BqNtHBqEeUqGTQSvhauhEjbRGX%2FdoZvdCe6NdPXaBl3iP%2BPEXgDfHb0a5kxqgc%2FLnPFG0coxH1icqh%2FGfwTDb8e69BjqkARP%2FiOp%2FG%2FFkukE0f58FrBchbMZ2n%2FjFfcF48CxtipvjSs7uvh%2FcR7%2F3zaGTFVh8yO7hXoE%2B0AhGfJKANHPmfqblElR6zQA8%2FhEgHo92cyyIMA2OiMw1aoOQH%2FVbpMNj6QUQDhCXpfnteStD7fhr66WLNgcYG18dCBuc%2FYPNsCpfAnMpSDoDfBUUU0do3LfmtEA41NoL33RLvGaKE0yRx6p9PDmg&X-Amz-Signature=eb01e6c40d2d928c15f3a849da037c4b1526f61cdd70c23ff30d2a8d760371ef&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
