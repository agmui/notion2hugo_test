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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5VBIR7Z%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T170148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIEtPRDMGMw%2FwGcQsjzaL4EYXx41Ouv28CwcTkLNIxl5SAiEA1c0JrUjpBxaL7NvxdeG4yA7SmWq7RNPscXVkCAZvduUq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDLB4CMCM%2BD3S6d9CgircAw27idnb2lDHaudPObeJY2yb2WxzJzz3S3a6%2FjVw6EBtj%2BtVMhEQxDE7k7sjAW5qKvPVNwAmQS7DOiRKh8MP1KzAF5j48p5CTZsvsJVw8qpwITERk3ORse0Kg0zgQcekERSQhDLn6UP%2BQ1mMd4kjnDzuqudUfrS9FAynsxiM7cRq5bAyS97Vkc%2B9%2BhiJ2%2BbUtLKeSHzSyXmYRbTW7jw%2F%2FQB%2FKc3AIGGcD1YoAs1ZADecOUicJwYyCk9JsnK0PFoyND%2BgYDCBDgUGF0%2Fc11W2K%2BRgn68%2BucqJp8tym7Z7kTfQ91SMQRrxjYptrnf7WEfAXUvqPRGNN0AM31IUVOOQbOZnrrjct8WmjsbzUr57e7qijBd75prF3GSW1ivivs36aG5%2BtDn5CjoqgAMwkRznOBhE%2FtD4JJHIojKNs6GBoT9tht%2FYPH%2F67svSQQSGIMbCJ9Cw6FhEyQFLOoZXmo6lmWps2lY8cv8CdIGiaweHP%2Fr%2FTbTY1O2RU8Fp3Y5CmH91NKE8ofQxjX%2B554YRR2e%2BSta7I2waDyxDgVofE9b%2FzrM70cHwXSxC6s5wJ2En113l%2BzTa6yWXziu%2F1CldD27R%2FBx98JwjaxildnxOuXqwtuITYkwmlqltWO2WPcq5MO%2FFwr0GOqUBKtNXv6u5jYD5zEFD1Wo9XLyvzLfjLmVylpLBhflFlcR8NNL0FtiozFKTbNA5c4cyhx6INlAhoUprJ0XSbpagzIiufxtbFgUDOMsuzagVR2g3n6QchZ%2FirfrRMtVtOcFn%2FQguD%2B7HyHXOEqroCevJ2QNszxbll56SsUhrm%2BklxPnzxt5LR4c3kCJL9j3l2CeA1ooKb6ZFl2qr20lVPmE62QqvAUgl&X-Amz-Signature=0f54f4179075df65b83858553ddaf891bbf2ab2efe23ce8f119d805589db00fa&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5VBIR7Z%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T170148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIEtPRDMGMw%2FwGcQsjzaL4EYXx41Ouv28CwcTkLNIxl5SAiEA1c0JrUjpBxaL7NvxdeG4yA7SmWq7RNPscXVkCAZvduUq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDLB4CMCM%2BD3S6d9CgircAw27idnb2lDHaudPObeJY2yb2WxzJzz3S3a6%2FjVw6EBtj%2BtVMhEQxDE7k7sjAW5qKvPVNwAmQS7DOiRKh8MP1KzAF5j48p5CTZsvsJVw8qpwITERk3ORse0Kg0zgQcekERSQhDLn6UP%2BQ1mMd4kjnDzuqudUfrS9FAynsxiM7cRq5bAyS97Vkc%2B9%2BhiJ2%2BbUtLKeSHzSyXmYRbTW7jw%2F%2FQB%2FKc3AIGGcD1YoAs1ZADecOUicJwYyCk9JsnK0PFoyND%2BgYDCBDgUGF0%2Fc11W2K%2BRgn68%2BucqJp8tym7Z7kTfQ91SMQRrxjYptrnf7WEfAXUvqPRGNN0AM31IUVOOQbOZnrrjct8WmjsbzUr57e7qijBd75prF3GSW1ivivs36aG5%2BtDn5CjoqgAMwkRznOBhE%2FtD4JJHIojKNs6GBoT9tht%2FYPH%2F67svSQQSGIMbCJ9Cw6FhEyQFLOoZXmo6lmWps2lY8cv8CdIGiaweHP%2Fr%2FTbTY1O2RU8Fp3Y5CmH91NKE8ofQxjX%2B554YRR2e%2BSta7I2waDyxDgVofE9b%2FzrM70cHwXSxC6s5wJ2En113l%2BzTa6yWXziu%2F1CldD27R%2FBx98JwjaxildnxOuXqwtuITYkwmlqltWO2WPcq5MO%2FFwr0GOqUBKtNXv6u5jYD5zEFD1Wo9XLyvzLfjLmVylpLBhflFlcR8NNL0FtiozFKTbNA5c4cyhx6INlAhoUprJ0XSbpagzIiufxtbFgUDOMsuzagVR2g3n6QchZ%2FirfrRMtVtOcFn%2FQguD%2B7HyHXOEqroCevJ2QNszxbll56SsUhrm%2BklxPnzxt5LR4c3kCJL9j3l2CeA1ooKb6ZFl2qr20lVPmE62QqvAUgl&X-Amz-Signature=1eb6d0cf755fb13160a24795f820c8338a040938250eb3835fce6b44cea2f524&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
