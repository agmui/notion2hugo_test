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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZX7MMEER%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T101050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD05N747ZxY%2FnJ1Oy8XEHI2kPyyS0aBCnLRRd3kKrrdfwIgFrEXmpyMfLFTc9XD6qYSd8vhOpJ27DA6F8lsOtASgeIqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIzV5Ec%2Bfsitst5VyircA3nYb5EXYzgh2%2B6w3nrFA7H9ZyA0QCsG0jqF6NHn8%2Fat9P8BuZl34CTpTG2KYnQi8X256%2FSdiwMPLj5YlkHtZ48zBPOCWFfz812SFei8HqrcV1i86Oqc8NtX4Kn7Gyw7mrwK%2BaIBQIafhkyr5HqvBCqtU9pO3U%2FioFoHu8jRgnKZ6ZNM6%2BWOTJiZQ5ney5TgzvKL1aPFXQwz5Kf73ZNy6c%2BjGPChcncc2iJwUnhhSpYNVZJXkknseLn4oVl5ufaJNz%2BQbxVkVOCf7oI8v8L1TzxWjUH21TsPzakK%2Fodq7eBRA3SgHm1qALR5w9Nlu5Tu%2BfPKg6EwR1Rua5CQ26uF1JBzIJyep6BbJpKHOB9NYvrk5SkL3q4z3vnp1lmfwd3psjUf%2Fi2hMc%2Bi5IcSvQauLH0EOSeGbbSpjqZjUJM0LwPaYIckZQHuh%2F2oKEQerBtAtS22qteNhvAF8aBQCC8Gq%2FRIYEF8oiobyRhbhSQ2h3jKSn2%2B37oxY4%2FDLiZh%2FbIWmPdIpDvFx7Ktsh8fKtqEY4%2BWUnohClwj6mTzogYdDuupAvrwycY2ddqp7Y3qf5Tfb%2F3w7Jsw1Bxj%2Fs%2FvMOyBK1O3q4YY6w3dbWJy7khbhtfGdadisKMABdGxX6u5MI6O%2BMMGOqUB0ubQeYTMjuJ%2BsE1SY5vE9annqzSlvEZ%2B22iiXzfT2zcGtwJ4o81%2F1SV9qwiA%2FA0b3qbuL6ra7BDvgRl8RWVWA6j%2Fuq63UTMMrXHrLLB5SxrXRYKW9DMY2uI%2Btu%2BM5CfazCkab%2FAKaaAeRDJqbYWd0yIQunSpTjvI5W5KjsIbkrEfe1BU4L%2Byr%2BAMZK%2FzMXhcqULpe3XznxvkfkIpq3z8bqHmRQee&X-Amz-Signature=d8ae1275b45d2abcc368bea6970834794f26245013f43589b22a8aba83b1d0af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZX7MMEER%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T101050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD05N747ZxY%2FnJ1Oy8XEHI2kPyyS0aBCnLRRd3kKrrdfwIgFrEXmpyMfLFTc9XD6qYSd8vhOpJ27DA6F8lsOtASgeIqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIzV5Ec%2Bfsitst5VyircA3nYb5EXYzgh2%2B6w3nrFA7H9ZyA0QCsG0jqF6NHn8%2Fat9P8BuZl34CTpTG2KYnQi8X256%2FSdiwMPLj5YlkHtZ48zBPOCWFfz812SFei8HqrcV1i86Oqc8NtX4Kn7Gyw7mrwK%2BaIBQIafhkyr5HqvBCqtU9pO3U%2FioFoHu8jRgnKZ6ZNM6%2BWOTJiZQ5ney5TgzvKL1aPFXQwz5Kf73ZNy6c%2BjGPChcncc2iJwUnhhSpYNVZJXkknseLn4oVl5ufaJNz%2BQbxVkVOCf7oI8v8L1TzxWjUH21TsPzakK%2Fodq7eBRA3SgHm1qALR5w9Nlu5Tu%2BfPKg6EwR1Rua5CQ26uF1JBzIJyep6BbJpKHOB9NYvrk5SkL3q4z3vnp1lmfwd3psjUf%2Fi2hMc%2Bi5IcSvQauLH0EOSeGbbSpjqZjUJM0LwPaYIckZQHuh%2F2oKEQerBtAtS22qteNhvAF8aBQCC8Gq%2FRIYEF8oiobyRhbhSQ2h3jKSn2%2B37oxY4%2FDLiZh%2FbIWmPdIpDvFx7Ktsh8fKtqEY4%2BWUnohClwj6mTzogYdDuupAvrwycY2ddqp7Y3qf5Tfb%2F3w7Jsw1Bxj%2Fs%2FvMOyBK1O3q4YY6w3dbWJy7khbhtfGdadisKMABdGxX6u5MI6O%2BMMGOqUB0ubQeYTMjuJ%2BsE1SY5vE9annqzSlvEZ%2B22iiXzfT2zcGtwJ4o81%2F1SV9qwiA%2FA0b3qbuL6ra7BDvgRl8RWVWA6j%2Fuq63UTMMrXHrLLB5SxrXRYKW9DMY2uI%2Btu%2BM5CfazCkab%2FAKaaAeRDJqbYWd0yIQunSpTjvI5W5KjsIbkrEfe1BU4L%2Byr%2BAMZK%2FzMXhcqULpe3XznxvkfkIpq3z8bqHmRQee&X-Amz-Signature=d0133800a93f243f5bddfb0e01af128df77e7ffa9ff14336c6e8264aa9e33265&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
