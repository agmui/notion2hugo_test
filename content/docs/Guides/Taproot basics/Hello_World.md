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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCLDKASG%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T061558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJGMEQCIHuUHdthl1CPuPtDPa7iYHO7nsB3yqO8QoejPtBAZ1B%2FAiBNZi3rpcqtu7mB1GNfuDpAXxERjqwq%2BWlOREQDgZPpqSqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMC9GeYNjuTbTr8VQHKtwD%2FyC9TvO%2FUvzDjBB2o07UQ9IFTw%2BcG3UM2aemU5FhhgVcNno%2FWOCwfM0VLUtvmOvbuBxvxm8kcpiSz87zZw7jY1eptxeOel5T0iaotL7Fd7aDigyp556%2Ff%2BiTGyfGOXgehqLt5o50bUsZNNduSnDxvyH3qicTTC6hJ4PByo6vsIgWMo9QRwH5k5p3DBki0X%2FliAmeYIw4LdKbBnwnVGyb3RyATGSkO21Tc%2F9Sz%2Fv5jtflaABopSb2s3kBnW7KttlVKZMtnW91SG7iVxkKTh8GHg0ZuVoDniXnfLot2%2Bn9GSmb%2F5ubLQ2VCh2d4kw3U0hGEiuyrOK33%2FsiyNr7J9UnXyCt8Vek9zKiDmHecB9L2xc%2FxYHA5J%2BvCfb75GQRpf51cKvNXNow%2FvinnC8Da7bGBE2Kif7AeNvdWifDPmuNspgshSZSKBTij9R7yDggh45bYfllrQEzZ9L5nI2pOQN949DPqnm7QZYGNBn%2B9frUnRLrgjHTSFlDaRPKZrYrsn6Vaqq6v7CQO5VQgbiUFb3JnNtwjWjwYcIs8c724%2FO29k%2BdZKYECFeUzOYvpzEIPL6wUh%2FyF4xwX%2BjZhRz045IR%2FeeIuXA33Ma5AmasO45wuACYX8STNhytwL8Wr0Iwl%2B3QxAY6pgER7N5pskm02DBub247yasMCp%2BIEFBSIB%2BVgwWmapKz3k4e71QZc%2FBRN%2FIJs4XV3vLmRMNHvVUNK2MtzmaGweIFSCJzsf9QKKQu4j17XxEgpV29yuBLyAdqlOKFeo6BWCKnzm0YojtXy9%2BasmLcMNKR0PJMu8QXYJQCxxhL8Fq3orZ9SD62QyKP8PiQwrsQJKnDBcKcOB2WJ4XJkd7u6E9h8av%2BuvJJ&X-Amz-Signature=e7ff2edcfc432ec63778eae704fbabf710045ab1e39bd3b2ef0de2efd110457d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCLDKASG%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T061558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJGMEQCIHuUHdthl1CPuPtDPa7iYHO7nsB3yqO8QoejPtBAZ1B%2FAiBNZi3rpcqtu7mB1GNfuDpAXxERjqwq%2BWlOREQDgZPpqSqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMC9GeYNjuTbTr8VQHKtwD%2FyC9TvO%2FUvzDjBB2o07UQ9IFTw%2BcG3UM2aemU5FhhgVcNno%2FWOCwfM0VLUtvmOvbuBxvxm8kcpiSz87zZw7jY1eptxeOel5T0iaotL7Fd7aDigyp556%2Ff%2BiTGyfGOXgehqLt5o50bUsZNNduSnDxvyH3qicTTC6hJ4PByo6vsIgWMo9QRwH5k5p3DBki0X%2FliAmeYIw4LdKbBnwnVGyb3RyATGSkO21Tc%2F9Sz%2Fv5jtflaABopSb2s3kBnW7KttlVKZMtnW91SG7iVxkKTh8GHg0ZuVoDniXnfLot2%2Bn9GSmb%2F5ubLQ2VCh2d4kw3U0hGEiuyrOK33%2FsiyNr7J9UnXyCt8Vek9zKiDmHecB9L2xc%2FxYHA5J%2BvCfb75GQRpf51cKvNXNow%2FvinnC8Da7bGBE2Kif7AeNvdWifDPmuNspgshSZSKBTij9R7yDggh45bYfllrQEzZ9L5nI2pOQN949DPqnm7QZYGNBn%2B9frUnRLrgjHTSFlDaRPKZrYrsn6Vaqq6v7CQO5VQgbiUFb3JnNtwjWjwYcIs8c724%2FO29k%2BdZKYECFeUzOYvpzEIPL6wUh%2FyF4xwX%2BjZhRz045IR%2FeeIuXA33Ma5AmasO45wuACYX8STNhytwL8Wr0Iwl%2B3QxAY6pgER7N5pskm02DBub247yasMCp%2BIEFBSIB%2BVgwWmapKz3k4e71QZc%2FBRN%2FIJs4XV3vLmRMNHvVUNK2MtzmaGweIFSCJzsf9QKKQu4j17XxEgpV29yuBLyAdqlOKFeo6BWCKnzm0YojtXy9%2BasmLcMNKR0PJMu8QXYJQCxxhL8Fq3orZ9SD62QyKP8PiQwrsQJKnDBcKcOB2WJ4XJkd7u6E9h8av%2BuvJJ&X-Amz-Signature=325469270a298e9c5dd2c9eb32e89c52a563b314676bf07846fb29ea2b69c097&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
