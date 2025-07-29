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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWMMZ77A%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T005201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJGMEQCIAoMVXHCfzqnLbfM1o%2FjhjzJ2TpsVt4VmHJcCt%2FNuvJUAiBdpKgwkhhTyg1ynWFlhXTJffz7japPc8E%2B9wJMAo1DSiqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWRtVHIIG342HujjrKtwDrnqGUS7QWfoFM2y%2FLFHb1bJ6qQwLCTgwSxO0R6Bm42sBM8oR7PZq%2FhlfH7%2Fml8aTEZuIULJMxlpVRtkPS4aNUOaVsMnD66EBhPieQ2K8CUagIJn%2BuiQV%2F%2BD56RPO63UmTtXxk3k%2FhzM9JzcKMA7huuX1Z5glJDlslhbIfZbw2i7LATNtxEE2f3ANUb%2FKZi96Ga%2B7xMmYTinupc%2B7y85LfqEmNhVfV7Ky2wKRyub%2BxV0KQt2tzXqQy0b6z9p043UdCwHnkifpFaa0%2FJyxoosRrh4XRmZo41h2F5KhxLokOc8IoZ0NneHS3N5r84BSSXitWPyRBZ8Pz7iB%2BWlKULEqSqv1VK5m2Gy0gaHpGdcJ4o3tf73yZNuVNb4iT5IDCIT%2FWtdJ1EifxEKu4FF7rLJOT21HdKrFvqWV5X3HevD1rkbHl66WqhzRNpo1g%2FZbur8NQ01wOfTC9%2FCWtsMysDsKGsvsct%2FmyT%2BUrkH4TQQgzHjvc5xeU%2FilIA2V0%2F%2B2U7WJx2nZ5V%2Fol9bTB%2BrcDjYfVAY%2FNUgming42S%2BEhHQThfRB7tBoxSsm%2BEhSZdq29WNx1KGHWR1xqj9vaEmmquRazi8kNFMBpSNURUObTnFp5hxiPg4KWIsap9pK298wuZ%2BgxAY6pgGsqtZXjCvfI02y%2BF48Vm290WSHjQ9EcjT1Baz0al5Ag3u18LjvPQEP51RfJvNKS1ergFRhxPK9AnbLTt0m4DyL1xZZZqGdBdzTPix3WJNiBmSyjLtvvhVT0q1h%2FVsR90SwPtJR1sX0ISEP7uecHPQFlCiZiVQtqPzpy9EfyKDMomgrwF4Iy%2FfFhNO%2B0uu3%2BTN02uCfnDBe6HQNKgiJiFVB1d435Xkh&X-Amz-Signature=61a79ef0adf2546c91702356e0ee4a09d1b2d000c8bc4b98b7abee3f0851d00a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWMMZ77A%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T005201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJGMEQCIAoMVXHCfzqnLbfM1o%2FjhjzJ2TpsVt4VmHJcCt%2FNuvJUAiBdpKgwkhhTyg1ynWFlhXTJffz7japPc8E%2B9wJMAo1DSiqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWRtVHIIG342HujjrKtwDrnqGUS7QWfoFM2y%2FLFHb1bJ6qQwLCTgwSxO0R6Bm42sBM8oR7PZq%2FhlfH7%2Fml8aTEZuIULJMxlpVRtkPS4aNUOaVsMnD66EBhPieQ2K8CUagIJn%2BuiQV%2F%2BD56RPO63UmTtXxk3k%2FhzM9JzcKMA7huuX1Z5glJDlslhbIfZbw2i7LATNtxEE2f3ANUb%2FKZi96Ga%2B7xMmYTinupc%2B7y85LfqEmNhVfV7Ky2wKRyub%2BxV0KQt2tzXqQy0b6z9p043UdCwHnkifpFaa0%2FJyxoosRrh4XRmZo41h2F5KhxLokOc8IoZ0NneHS3N5r84BSSXitWPyRBZ8Pz7iB%2BWlKULEqSqv1VK5m2Gy0gaHpGdcJ4o3tf73yZNuVNb4iT5IDCIT%2FWtdJ1EifxEKu4FF7rLJOT21HdKrFvqWV5X3HevD1rkbHl66WqhzRNpo1g%2FZbur8NQ01wOfTC9%2FCWtsMysDsKGsvsct%2FmyT%2BUrkH4TQQgzHjvc5xeU%2FilIA2V0%2F%2B2U7WJx2nZ5V%2Fol9bTB%2BrcDjYfVAY%2FNUgming42S%2BEhHQThfRB7tBoxSsm%2BEhSZdq29WNx1KGHWR1xqj9vaEmmquRazi8kNFMBpSNURUObTnFp5hxiPg4KWIsap9pK298wuZ%2BgxAY6pgGsqtZXjCvfI02y%2BF48Vm290WSHjQ9EcjT1Baz0al5Ag3u18LjvPQEP51RfJvNKS1ergFRhxPK9AnbLTt0m4DyL1xZZZqGdBdzTPix3WJNiBmSyjLtvvhVT0q1h%2FVsR90SwPtJR1sX0ISEP7uecHPQFlCiZiVQtqPzpy9EfyKDMomgrwF4Iy%2FfFhNO%2B0uu3%2BTN02uCfnDBe6HQNKgiJiFVB1d435Xkh&X-Amz-Signature=d85ec51ffa979d39204a38a6b9d8cba276ae3b7efb7190e50d462f0d9dd82a1b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
