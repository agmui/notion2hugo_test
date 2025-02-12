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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQ6V7NFA%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T090809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICINvyILSl%2B3EaCOq7qfNf1rWR6GNDbghJgk9M%2BRdbaoAiEAg2VBOlcmeS7cAhyicndS5I4pG3TZp4zDTQsxFbG6x50qiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKtniFL0Y6NnfAvlqyrcA3IA97CrRgXlfau61k8GzhvwT6nYdlIBTVPMa%2B9prPwK8Qtp5md7hBLCEyq6x3E1EKJcg2jxB4DFo%2FYrR9P58%2FIlFn3Lv5Z071cPc1PK2qGDi6svhxd2E%2BBqTtDES2H5C%2FCZkt%2B%2Flz3UWXTf2lMo%2BSV9PbWHCy4dW7ZR1iE9U1W8iD6vELb0yxWRTUAyPuEF38KtTA9%2BnSVpXRuyHUhoSVunQxYFAc%2BCP%2FmZT6xAvaXL980HNZymUPKmXBCR1dp0Wxeu%2BgEs1MLnwBZIhXVtxyz8Kva0pWhyPAeXi3OnNHEwpbZ6is7SNZkxgzWFKDeDDN%2Fxi2mKF7HVQ4RoVD32%2B1uQJ%2FIp%2BIjvs1Nk1owJ8mXq7nLZfgPyn%2Fm%2Bi4xmWZMujSdWxwL%2BFgr4DdjNMyLONTauf%2BaZseZQXUKmfhDulA0VAZX9loAiGBwGzgpzxEOevYRjJ7LiOHHqNJfbIVNgeF%2FsTHzxFULs3%2Bmqfn385wBRekrZh38wth%2B2i%2BUiQJQ6uv1aMA1JN2xP2jksLSaS88CtWIf7vR8P9DxuvsFQ61tvRSVz4c%2BLkKlgFNqSjZQY8djQsf0J1VV2MuajQBJsaR7%2FK57YEvqWaqd9l2LTdCvAuG%2FOvSVMReWfQ2ceMNWHsb0GOqUBfngLADYKo0UnE1QGx1%2BNkA5d2rbicvvTUOpeyWpzvGHuU8E8rcR15vhNc%2FSrfQQwds%2FrXllCxXp7%2Bh2D16TEfE6GtcCn8LBF8%2FCsf3yYolPJ1IFBjmyXFU1bZYkGifXv3kZomJb9qDvrkrlJSZlhdLZOx80rA7OQLGO7O8yOJiiodCqBj9DMYrxB%2BhCfbuqS3X9iP5mVySkhn4OCZCt8ww7JhmGn&X-Amz-Signature=c8638ea53808db35515bb25caf71c0cabbfdd723dfba31fb12b08380479fa80d&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQ6V7NFA%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T090809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICINvyILSl%2B3EaCOq7qfNf1rWR6GNDbghJgk9M%2BRdbaoAiEAg2VBOlcmeS7cAhyicndS5I4pG3TZp4zDTQsxFbG6x50qiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKtniFL0Y6NnfAvlqyrcA3IA97CrRgXlfau61k8GzhvwT6nYdlIBTVPMa%2B9prPwK8Qtp5md7hBLCEyq6x3E1EKJcg2jxB4DFo%2FYrR9P58%2FIlFn3Lv5Z071cPc1PK2qGDi6svhxd2E%2BBqTtDES2H5C%2FCZkt%2B%2Flz3UWXTf2lMo%2BSV9PbWHCy4dW7ZR1iE9U1W8iD6vELb0yxWRTUAyPuEF38KtTA9%2BnSVpXRuyHUhoSVunQxYFAc%2BCP%2FmZT6xAvaXL980HNZymUPKmXBCR1dp0Wxeu%2BgEs1MLnwBZIhXVtxyz8Kva0pWhyPAeXi3OnNHEwpbZ6is7SNZkxgzWFKDeDDN%2Fxi2mKF7HVQ4RoVD32%2B1uQJ%2FIp%2BIjvs1Nk1owJ8mXq7nLZfgPyn%2Fm%2Bi4xmWZMujSdWxwL%2BFgr4DdjNMyLONTauf%2BaZseZQXUKmfhDulA0VAZX9loAiGBwGzgpzxEOevYRjJ7LiOHHqNJfbIVNgeF%2FsTHzxFULs3%2Bmqfn385wBRekrZh38wth%2B2i%2BUiQJQ6uv1aMA1JN2xP2jksLSaS88CtWIf7vR8P9DxuvsFQ61tvRSVz4c%2BLkKlgFNqSjZQY8djQsf0J1VV2MuajQBJsaR7%2FK57YEvqWaqd9l2LTdCvAuG%2FOvSVMReWfQ2ceMNWHsb0GOqUBfngLADYKo0UnE1QGx1%2BNkA5d2rbicvvTUOpeyWpzvGHuU8E8rcR15vhNc%2FSrfQQwds%2FrXllCxXp7%2Bh2D16TEfE6GtcCn8LBF8%2FCsf3yYolPJ1IFBjmyXFU1bZYkGifXv3kZomJb9qDvrkrlJSZlhdLZOx80rA7OQLGO7O8yOJiiodCqBj9DMYrxB%2BhCfbuqS3X9iP5mVySkhn4OCZCt8ww7JhmGn&X-Amz-Signature=b625f7f80890de47815bd2bbef115e6d46dce0ba4d9440e9aecc3ca738f876cd&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
