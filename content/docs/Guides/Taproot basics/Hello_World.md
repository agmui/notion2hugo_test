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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCLTLUTB%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T004254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB2Hf2YVkR2RxZggMn4FIE4gaPMSFlUeNP7%2F%2BUv3wtjxAiB72G7%2FCliJ086CKXGrh7Si79q1FElseEu6%2FpzQn9aLRCqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMT2w9puBP3dILh6%2FCKtwDexDyzEip4kBcZgAB048xk1ao586QFMoZZ1%2FHk%2Bip0WzqC7%2BOrFs6cYljSfPETZ4RIBx93aAIV%2F%2BYaAco2MyV5dnrLUU%2FehHF8fnXx%2FZ4I5qrqRPpO%2FCevaDRDsKaKbOAjCsB1q9ri0et3%2FWZyevFNk4XfAAM%2FRRmyLQaeU76DiwhU%2BudrkHQ3wbWkPt0GJo9NwcYx7RWISTUZZjriCyUtFw4dciFBmCQVl39OXR1CQNupUAwogp8jMQcjm8mocM1EWEsA2yPep4P8Aj2QiROKGyUYY0P9YDNCZWpH5RhJjCkvmeGG88zENw5iIrpmO%2Fwp9MIEhjuea6cGJQl1%2BApCP%2FFP88LUbmT%2FPQcY6Q8vAIe8iy1FKtAH3mqEISgCRamaXAnP6wwiGQQGAOFQxgVe8ktY9j3GGs6qkCauXczm%2BAJvl2WW%2BxTOsKXaarsFLfILbrB79N73lwf2HaftkAl90Unpg6VN0YnDjI15DACmKGUx%2F53UMNhArGgDGjzC4xs%2B%2Bkv1h2WR8px68Z3zFL8bYXe78%2B5LOhVkH0bb4cuP%2FWmRKA6wNfwdcG5vWq9VY5Ogt6xR3GTVE9%2FPB%2B3t7l6GElaeANsDZtAXmsk9a7xFO1UM5I2BtmUyOe2wAUwmPSRwwY6pgFwPmtEmAacaNCIi2vNlTgca8MlQEDFl3CYt5R3bGe9ksHUaJTHgLgXwT9AnCahDO8XkhyEp0RilfmnoOAFLF0yiA4vO676bizdDM5CfoJ8kopPga7JXjsjsTXncxTHkhHqO4KPP2%2BwUH4Tl4YabDDfa4gQqAQhIkRQpHifPZNglyjfHioMK5zs89qz0n7Ie43Q1VmfqJIXFs7xjl1p96U%2BmIFdEJf8&X-Amz-Signature=b3ed13f69d8c28f55b02bd8fae7c70fbb2059cf534d504af972c460129482977&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCLTLUTB%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T004254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB2Hf2YVkR2RxZggMn4FIE4gaPMSFlUeNP7%2F%2BUv3wtjxAiB72G7%2FCliJ086CKXGrh7Si79q1FElseEu6%2FpzQn9aLRCqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMT2w9puBP3dILh6%2FCKtwDexDyzEip4kBcZgAB048xk1ao586QFMoZZ1%2FHk%2Bip0WzqC7%2BOrFs6cYljSfPETZ4RIBx93aAIV%2F%2BYaAco2MyV5dnrLUU%2FehHF8fnXx%2FZ4I5qrqRPpO%2FCevaDRDsKaKbOAjCsB1q9ri0et3%2FWZyevFNk4XfAAM%2FRRmyLQaeU76DiwhU%2BudrkHQ3wbWkPt0GJo9NwcYx7RWISTUZZjriCyUtFw4dciFBmCQVl39OXR1CQNupUAwogp8jMQcjm8mocM1EWEsA2yPep4P8Aj2QiROKGyUYY0P9YDNCZWpH5RhJjCkvmeGG88zENw5iIrpmO%2Fwp9MIEhjuea6cGJQl1%2BApCP%2FFP88LUbmT%2FPQcY6Q8vAIe8iy1FKtAH3mqEISgCRamaXAnP6wwiGQQGAOFQxgVe8ktY9j3GGs6qkCauXczm%2BAJvl2WW%2BxTOsKXaarsFLfILbrB79N73lwf2HaftkAl90Unpg6VN0YnDjI15DACmKGUx%2F53UMNhArGgDGjzC4xs%2B%2Bkv1h2WR8px68Z3zFL8bYXe78%2B5LOhVkH0bb4cuP%2FWmRKA6wNfwdcG5vWq9VY5Ogt6xR3GTVE9%2FPB%2B3t7l6GElaeANsDZtAXmsk9a7xFO1UM5I2BtmUyOe2wAUwmPSRwwY6pgFwPmtEmAacaNCIi2vNlTgca8MlQEDFl3CYt5R3bGe9ksHUaJTHgLgXwT9AnCahDO8XkhyEp0RilfmnoOAFLF0yiA4vO676bizdDM5CfoJ8kopPga7JXjsjsTXncxTHkhHqO4KPP2%2BwUH4Tl4YabDDfa4gQqAQhIkRQpHifPZNglyjfHioMK5zs89qz0n7Ie43Q1VmfqJIXFs7xjl1p96U%2BmIFdEJf8&X-Amz-Signature=90c1c2e7d2d611c7d64e09b4aef8d5af1bd971489dc1786cfb9e5b3489c77cba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
