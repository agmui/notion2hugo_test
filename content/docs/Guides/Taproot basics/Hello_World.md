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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DTZH6WO%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T160912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJGMEQCIHatlDh5HPXW3Z5AqhiSuSUJGL%2BRg18Ls7rWoJh7TFErAiAcAsgYvFidZ0%2BJ6J0oHPDhw4Z1e1F14jNt1W7FVFKq%2FSr%2FAwheEAAaDDYzNzQyMzE4MzgwNSIM%2FxRpCoEAhMJlMLanKtwD6vrhZ7OylZDcZ9XqnPumAtWVaGD5x60wtUkaVwdiUjAm9vXi%2Fe9qp2bbM8yp2%2Fw3qNqinvLPRwUzoYjp2S2dbzYpHGXwozAr5WsSDD3m1Ut%2FL8CF2WFT2vFahaUTlzymlLsRCeSM1YGi2H5SGQ5ki4KWtnTEreHyuxP%2FiKN2RQ8TVqJBJcjMXGzcQIzKvhtQD9ntXmPI1wldJ67G%2BeuQ%2F85MWy89uCpCOm4QmA3CzgwXPD69z5O8XTrS8BgIUWOBpWqtGXViSLrnYvWpF03MEjeLradyr0xWic8Zmj2JLmc%2FffTc0IkvOwcindp%2FBOsarXNSZxF7ck4nl8CIEprSlwbo93Lalg3T7eMG977zoBP6tTgJ2Ur3SimaK7JXg2deVYyWZYz%2F%2Bxa3EH%2FrSlzxKhQVREtHR7ctfTWXNDc%2Bn%2Fn3I0qBjCQrceJyomcfPniQq4uVi6eHjEfXm5gaU5XF8NPaZwQhTFmyt1H9SrXweh4nE%2BAmwsBgRqe%2Bp9h2XoACQ%2BJX3bpE8Fru0gSWD88eLXN6Q2YV3sFDUEmtCsfz5PkEFTtpp599MosScAzXQvK%2FJVcB9EmuQ7KsOrJJFcN7Ljxd55txrzmFgcTa4MwbCDVHjCEqqAf8EADdkCYw696pwwY6pgHgY7LxVg13Bq7paT4wGretn61dSZjJ4ZtB0cI1%2FWXeFFD7rO96wIRCww6PYO3ipHIUFp3tACBXevfBWXklqxP8yA3Leyp1Eq3B4UkUjF1TCJCLl1jFcbKCOvta98ncHtdpsIyiijZibv1GbMpzzW2t3eTbCZTXgPXj9f4cLWyc5X3tEV%2BBEbMYgp25nMXLYgvs1TXnr%2FWnnZ4bGfOAPUKuwSrT5%2Bbt&X-Amz-Signature=d6debec78dde6da994c84198009062c7345c9b12ec666fd2edcc31503e920ff4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DTZH6WO%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T160912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJGMEQCIHatlDh5HPXW3Z5AqhiSuSUJGL%2BRg18Ls7rWoJh7TFErAiAcAsgYvFidZ0%2BJ6J0oHPDhw4Z1e1F14jNt1W7FVFKq%2FSr%2FAwheEAAaDDYzNzQyMzE4MzgwNSIM%2FxRpCoEAhMJlMLanKtwD6vrhZ7OylZDcZ9XqnPumAtWVaGD5x60wtUkaVwdiUjAm9vXi%2Fe9qp2bbM8yp2%2Fw3qNqinvLPRwUzoYjp2S2dbzYpHGXwozAr5WsSDD3m1Ut%2FL8CF2WFT2vFahaUTlzymlLsRCeSM1YGi2H5SGQ5ki4KWtnTEreHyuxP%2FiKN2RQ8TVqJBJcjMXGzcQIzKvhtQD9ntXmPI1wldJ67G%2BeuQ%2F85MWy89uCpCOm4QmA3CzgwXPD69z5O8XTrS8BgIUWOBpWqtGXViSLrnYvWpF03MEjeLradyr0xWic8Zmj2JLmc%2FffTc0IkvOwcindp%2FBOsarXNSZxF7ck4nl8CIEprSlwbo93Lalg3T7eMG977zoBP6tTgJ2Ur3SimaK7JXg2deVYyWZYz%2F%2Bxa3EH%2FrSlzxKhQVREtHR7ctfTWXNDc%2Bn%2Fn3I0qBjCQrceJyomcfPniQq4uVi6eHjEfXm5gaU5XF8NPaZwQhTFmyt1H9SrXweh4nE%2BAmwsBgRqe%2Bp9h2XoACQ%2BJX3bpE8Fru0gSWD88eLXN6Q2YV3sFDUEmtCsfz5PkEFTtpp599MosScAzXQvK%2FJVcB9EmuQ7KsOrJJFcN7Ljxd55txrzmFgcTa4MwbCDVHjCEqqAf8EADdkCYw696pwwY6pgHgY7LxVg13Bq7paT4wGretn61dSZjJ4ZtB0cI1%2FWXeFFD7rO96wIRCww6PYO3ipHIUFp3tACBXevfBWXklqxP8yA3Leyp1Eq3B4UkUjF1TCJCLl1jFcbKCOvta98ncHtdpsIyiijZibv1GbMpzzW2t3eTbCZTXgPXj9f4cLWyc5X3tEV%2BBEbMYgp25nMXLYgvs1TXnr%2FWnnZ4bGfOAPUKuwSrT5%2Bbt&X-Amz-Signature=564cd74be7a3bd109e66b215f7142e943595cb3d6d44b746fe4d7f9e2dd0dcce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
