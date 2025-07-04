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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUUVTXTJ%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T150846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIAmmpUP3jKvOrMbDRGazk3mITmIVcrY%2FU2u91SdmGJuZAiEAq2IzlR2uouIf%2Br8AyXeUrCIP060ktu6DQXbMQTNsDE0q%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDI123JK6%2Bvugzke4nyrcAxCyXokeaXeuGoMQZBNboRc4OtJqHfgAnPs3W6nZlHJAHkCQpsJuWxOcWx0hlCwu2nGVbFH2l8Aj9o02VL9IOrwdycMAe01FEkqYf6i4r6hdAfv8Kmuwt%2FshRqH8If0zwDrdKYColbKKZfgPCIdx5BtTu9lgFELPvSO9LCbtePqH8yiK3oQo%2BsfvTaX9c2FC4aRCP15dH5avkj7vaN0d3ecquKljuAGliazqXZuNOXT5YyIXsusFXVcen5sKSRZtuZiIZl61OZOBY5RVr5oizAB2ZXvy%2FXenrdt6F3nXeF3TTqxCHSciY2JCHDB%2FIEqHxGQ%2BecgLhA54Z2FqIBwl3XXaPQcQTqNjyu0BnP8P706B5Hn%2B8Mjup4z02t9S%2BcRxf%2BcJ6XLd4yHhNRYduI0AXEagw5wem%2BsixunGZdqFoU0uaqV1bqqdLim9PaaVA3MZgFft0OO%2FacvXneoabipiPC3spQRQ8iKLyiEDpg6%2BpyEy1d7Ii6N9%2FBecWQHelzLyjuJLBqs6Rf1hZOexkCiDP2senjIa82Pxv%2FCIVSGSLpAUxIix2Jlv3DcExSttxx5JGIbvS%2Fs0RHBSootLucEf%2BTLzKmOsFPtPRtoBiQUmzSAyCspZVfsfMZEMJjKIMO3Dn8MGOqUBoQcysw1lPTNRZjn2xw5HZ%2FqsIvc3bq9wS9UodEaAQzXISS7qiTu%2Bk321C0ePRa3xwxLSjgDGpuvz7km0XLRxaXcsII1rFn4SXdSbNmndqQ5pxhMaYXBie8UyRShgQtpsn8P7g%2BVDjcMxzjoDzmYS1gSmwYLLeBw5CZkx2OWg%2FjCYqw%2FTSWCykX59bDVJJjSA%2BgenjMy2r8VFD7NgWYLFIfsNjb%2F%2F&X-Amz-Signature=8b94863a25e7fbf23ca21e5c5b4bf368a4932fb469a6cbca3cdf7b73b5c51177&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUUVTXTJ%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T150846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIAmmpUP3jKvOrMbDRGazk3mITmIVcrY%2FU2u91SdmGJuZAiEAq2IzlR2uouIf%2Br8AyXeUrCIP060ktu6DQXbMQTNsDE0q%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDI123JK6%2Bvugzke4nyrcAxCyXokeaXeuGoMQZBNboRc4OtJqHfgAnPs3W6nZlHJAHkCQpsJuWxOcWx0hlCwu2nGVbFH2l8Aj9o02VL9IOrwdycMAe01FEkqYf6i4r6hdAfv8Kmuwt%2FshRqH8If0zwDrdKYColbKKZfgPCIdx5BtTu9lgFELPvSO9LCbtePqH8yiK3oQo%2BsfvTaX9c2FC4aRCP15dH5avkj7vaN0d3ecquKljuAGliazqXZuNOXT5YyIXsusFXVcen5sKSRZtuZiIZl61OZOBY5RVr5oizAB2ZXvy%2FXenrdt6F3nXeF3TTqxCHSciY2JCHDB%2FIEqHxGQ%2BecgLhA54Z2FqIBwl3XXaPQcQTqNjyu0BnP8P706B5Hn%2B8Mjup4z02t9S%2BcRxf%2BcJ6XLd4yHhNRYduI0AXEagw5wem%2BsixunGZdqFoU0uaqV1bqqdLim9PaaVA3MZgFft0OO%2FacvXneoabipiPC3spQRQ8iKLyiEDpg6%2BpyEy1d7Ii6N9%2FBecWQHelzLyjuJLBqs6Rf1hZOexkCiDP2senjIa82Pxv%2FCIVSGSLpAUxIix2Jlv3DcExSttxx5JGIbvS%2Fs0RHBSootLucEf%2BTLzKmOsFPtPRtoBiQUmzSAyCspZVfsfMZEMJjKIMO3Dn8MGOqUBoQcysw1lPTNRZjn2xw5HZ%2FqsIvc3bq9wS9UodEaAQzXISS7qiTu%2Bk321C0ePRa3xwxLSjgDGpuvz7km0XLRxaXcsII1rFn4SXdSbNmndqQ5pxhMaYXBie8UyRShgQtpsn8P7g%2BVDjcMxzjoDzmYS1gSmwYLLeBw5CZkx2OWg%2FjCYqw%2FTSWCykX59bDVJJjSA%2BgenjMy2r8VFD7NgWYLFIfsNjb%2F%2F&X-Amz-Signature=99268e8cc103db912510df056ee8704fd31c455569e180cf29d265169fde700b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
