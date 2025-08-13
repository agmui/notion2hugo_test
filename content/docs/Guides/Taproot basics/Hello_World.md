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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLVVSZFQ%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T024211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDZ7krcuU9ihoWKNUUyYt6K7hnd4DpxbxeEYE%2FSDmfjjwIhAPmUvA7hI2nITBblk5t2EN80Iv%2FYdGjbtF%2BmEkYQSmICKv8DCCMQABoMNjM3NDIzMTgzODA1IgxxAKRMj479ghkLFn8q3AMZ4fNPbVfbav8JNnl1JvARTce9sp%2FhzMjUqDXXqYg%2BFAJAMlkfYDl91RrrQ20kEgknchKtU1Xcd5JBGY9sT9Mq45jFc6HbDHH%2BY3%2B9MM7IvHNBZKQste0seHscDYHiqHoXk0DO8fnGZJLKofBCyKezCEqSE7QMVD2EQsy3XDNNuocgnnXTYaYu0KxuhmF9hqRCPFmrMMv8YxlJ%2FDSJ3btfavKNcXB%2BoVLqUEZsMAuGDy6fUgBFgSccbIAyiThHqDsR%2FPpHwl6q9snehm8DSCzRfDp5Ihu881E3jCfiBaM2q6xWPuKvpiYv8pC0HMKSPXxTwLulLZHhby9MZc6eBmzH5K3tyfuGveHsRqiiNiZTPUujB56ZmpOw%2BORgyoxIauAEZLxPkGEM5YomBsP67rA%2BKNAQ0wEFTysDX52iLPxEsG5geX6gpUHbIAmxMtQN4yk5LVNPGcxr3g4pROjwhN6JcGhiMkBE7wJKR2yiKg%2BKQfu1cO32Rj4IREoUqPwbEpii3Ah0dCISNmfyFBnoDsynZjSm%2BU4zLrHxMo4G6NFaonqHKnDEAZrdodZBjd8Bsj%2FIm5eBEPgvWZaUvU1OyHQ%2FHaT7biw12T2SbmFpUBWpqoCVY8kw6JUhPw%2BCBzDF2u%2FEBjqkAdQqud%2FcVkhOGhqxCmRJI480fETOcM5ZIXHrICX7kzcazg5ZeOH3yX7HB4V08nskXvD8m3CCVLJyi%2FL%2BZcodzGhrQtJfzZxfVHIXvC5djxOBqtEAATlTjZfq4BV%2B8gNttl%2FVIeBD05zwL45ts1lfYbWN9EKYuh6%2BG%2BZKAGHnloteUFG%2BoJEZKxL6%2F5YDx4xh6%2BSDpsQav3Mro6DNbN9Es7nUxbgN&X-Amz-Signature=0ee15600c3f8f02bbdea4ad87e0519ee96d49ffde3c6899693f3f048401e26df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLVVSZFQ%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T024211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDZ7krcuU9ihoWKNUUyYt6K7hnd4DpxbxeEYE%2FSDmfjjwIhAPmUvA7hI2nITBblk5t2EN80Iv%2FYdGjbtF%2BmEkYQSmICKv8DCCMQABoMNjM3NDIzMTgzODA1IgxxAKRMj479ghkLFn8q3AMZ4fNPbVfbav8JNnl1JvARTce9sp%2FhzMjUqDXXqYg%2BFAJAMlkfYDl91RrrQ20kEgknchKtU1Xcd5JBGY9sT9Mq45jFc6HbDHH%2BY3%2B9MM7IvHNBZKQste0seHscDYHiqHoXk0DO8fnGZJLKofBCyKezCEqSE7QMVD2EQsy3XDNNuocgnnXTYaYu0KxuhmF9hqRCPFmrMMv8YxlJ%2FDSJ3btfavKNcXB%2BoVLqUEZsMAuGDy6fUgBFgSccbIAyiThHqDsR%2FPpHwl6q9snehm8DSCzRfDp5Ihu881E3jCfiBaM2q6xWPuKvpiYv8pC0HMKSPXxTwLulLZHhby9MZc6eBmzH5K3tyfuGveHsRqiiNiZTPUujB56ZmpOw%2BORgyoxIauAEZLxPkGEM5YomBsP67rA%2BKNAQ0wEFTysDX52iLPxEsG5geX6gpUHbIAmxMtQN4yk5LVNPGcxr3g4pROjwhN6JcGhiMkBE7wJKR2yiKg%2BKQfu1cO32Rj4IREoUqPwbEpii3Ah0dCISNmfyFBnoDsynZjSm%2BU4zLrHxMo4G6NFaonqHKnDEAZrdodZBjd8Bsj%2FIm5eBEPgvWZaUvU1OyHQ%2FHaT7biw12T2SbmFpUBWpqoCVY8kw6JUhPw%2BCBzDF2u%2FEBjqkAdQqud%2FcVkhOGhqxCmRJI480fETOcM5ZIXHrICX7kzcazg5ZeOH3yX7HB4V08nskXvD8m3CCVLJyi%2FL%2BZcodzGhrQtJfzZxfVHIXvC5djxOBqtEAATlTjZfq4BV%2B8gNttl%2FVIeBD05zwL45ts1lfYbWN9EKYuh6%2BG%2BZKAGHnloteUFG%2BoJEZKxL6%2F5YDx4xh6%2BSDpsQav3Mro6DNbN9Es7nUxbgN&X-Amz-Signature=337f4a4eb4ad44765212d7000b9290988acba19fdfa8cf882c574f5feae6ab35&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
