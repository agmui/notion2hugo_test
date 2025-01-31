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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4BT5MC5%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T131340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2BhbycAXLXjPoucnpyMhkdWY4yfyMT%2BP2VuGDRXQ2NvQIhAOdhWywZdqhvHqipgHiA0Nm9YTu6%2Fpo0mpqLmpTLd9t9KogECL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwu2AY3FTflqvIpHrYq3AOfZ95qngznH%2FPTq5QPPjARl%2BImt3eMluKu8fsoUFnAjb%2BkiC3MJmKRihZ415Pn6YN3Oe3o4d0Ay5bXRV21C3OrKwqCsheM6gu3SleV3fpCF9oStAEm04M85QiIvJ6KLGBxr10og1h5VYQh6NHQ4deP%2F80r05fwHk5F5e2UVTIkOPsHPWd1mjHALnOgQc5nRGYtYJRVAsZRmnXoy4ZDXEGA6QqnMFJIkxQ3AVkI2LV5lA1eaYgi1FcjTLJrnUoVsmc%2BiCg4rvmoWYBZrLaYt0KV9XQNbWCO4R2R6V5TAYMRK73O4Xgc5gLnYsvA9TvFZiB5XvRq6QGPFmh3axpxmTZSSaXIIrueMDwYNfRI06KmiPzBxaUNsBwrjyb7i%2B7qYHm%2BTJfPv%2B2zUR%2BwHrJDqj5lipsN7d3zMo02iadcxHy88Uurpka9Tdop%2BQ%2Fr1K89Ph%2Fj9Sx8FySNRYZMo4L55kudAfHX4qXIGkVEV45SxaesvOwVyoIakDg2aPSeqt4LIv1Z7WOhbEeuXXD3BgaoueXwlpeHFasY4alYuwhBo6ym%2F%2FzT7lnkQ9Q0rt2R38Kll3gIievlzYBQjYZp5WVWSpvn7wMg1C6TicCT%2F27bpTwHpx3Fh8DPVqEgU6IRUjC%2BkfO8BjqkAa%2FmcRFR53eQ7aZR1rhZK7C33UwdcDmWE5lty96bgHo5SvLeeSoR%2BLArWTf4TxQoPi5rmhWtjOmBlscdKjdS23LBm9RM7pc10ATaIEJrLXZfxXmCOVUIfHkUYs6ZBrLoRb9tfmnUj4aidMAKUXW2v8xLxp0x4QfN8rlOIwB6aX9EqQ4EorgblFLj3%2FI674TZxK5uOTS%2BM8Js47CMMOdJhQ2xGuAz&X-Amz-Signature=b6bc537c7a334511e81574966d81f5f4d2acae06728a6f3b4360aadcf2ac77e7&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4BT5MC5%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T131340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2BhbycAXLXjPoucnpyMhkdWY4yfyMT%2BP2VuGDRXQ2NvQIhAOdhWywZdqhvHqipgHiA0Nm9YTu6%2Fpo0mpqLmpTLd9t9KogECL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwu2AY3FTflqvIpHrYq3AOfZ95qngznH%2FPTq5QPPjARl%2BImt3eMluKu8fsoUFnAjb%2BkiC3MJmKRihZ415Pn6YN3Oe3o4d0Ay5bXRV21C3OrKwqCsheM6gu3SleV3fpCF9oStAEm04M85QiIvJ6KLGBxr10og1h5VYQh6NHQ4deP%2F80r05fwHk5F5e2UVTIkOPsHPWd1mjHALnOgQc5nRGYtYJRVAsZRmnXoy4ZDXEGA6QqnMFJIkxQ3AVkI2LV5lA1eaYgi1FcjTLJrnUoVsmc%2BiCg4rvmoWYBZrLaYt0KV9XQNbWCO4R2R6V5TAYMRK73O4Xgc5gLnYsvA9TvFZiB5XvRq6QGPFmh3axpxmTZSSaXIIrueMDwYNfRI06KmiPzBxaUNsBwrjyb7i%2B7qYHm%2BTJfPv%2B2zUR%2BwHrJDqj5lipsN7d3zMo02iadcxHy88Uurpka9Tdop%2BQ%2Fr1K89Ph%2Fj9Sx8FySNRYZMo4L55kudAfHX4qXIGkVEV45SxaesvOwVyoIakDg2aPSeqt4LIv1Z7WOhbEeuXXD3BgaoueXwlpeHFasY4alYuwhBo6ym%2F%2FzT7lnkQ9Q0rt2R38Kll3gIievlzYBQjYZp5WVWSpvn7wMg1C6TicCT%2F27bpTwHpx3Fh8DPVqEgU6IRUjC%2BkfO8BjqkAa%2FmcRFR53eQ7aZR1rhZK7C33UwdcDmWE5lty96bgHo5SvLeeSoR%2BLArWTf4TxQoPi5rmhWtjOmBlscdKjdS23LBm9RM7pc10ATaIEJrLXZfxXmCOVUIfHkUYs6ZBrLoRb9tfmnUj4aidMAKUXW2v8xLxp0x4QfN8rlOIwB6aX9EqQ4EorgblFLj3%2FI674TZxK5uOTS%2BM8Js47CMMOdJhQ2xGuAz&X-Amz-Signature=5c680b3bd1e1d9d3f912846ae341f3782adb997136179609277772c8eae9572a&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
