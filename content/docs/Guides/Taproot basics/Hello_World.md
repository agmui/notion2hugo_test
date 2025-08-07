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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QU72XOIN%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T191205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJGMEQCIBaDdI0jCWOrRdmL6pRZ5NAIgEN0lNWY2Kh%2BDVuVfhayAiB%2F1qSTFP2iHUmipPnUevtcv2dnP8p6bl0jvXaTdxOeziqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3CpTiYHkTnHmbnB2KtwDi%2Fa0FUpBwsGx7nm2PTd8ilAdjvSjz2nME8jKvC95ZZLb976Q9MlBwyho9HQRZYOSX2qQU9q4bixFBN8vJMPlMVI0%2BK3U0p4GzknVv8rj%2FNwD8HX9Be1Nz7fJmDiaet7Hx0FTFl9q9vTFJkL9n80SMggFtPX2B5tMY0H%2FZlSAuBdVM0X91KtEAhvcedZXAycmJpBLXgj1B%2F%2FsbJ%2F4vuTHw4LGwzFhCgurn%2B1qaUSlaoqeg8wvp37SSmlsbLkr%2BkhgdOVGPQXdytNgxFwrYzBZ2GxteN0aqVjJEl3qhaTkgJlzmPPxUHcggbocdzK7Sqvp45a%2FvU7I%2BBC576Lj6bZsBAe8pY3I4ANtElh5qidaG%2FstDbuILzXwIhEs0ZF0XRo%2FP27TUMUPJ275rYnQXqWM%2BfUv4PsDZKk8D%2BMw7arskKIlFujSqMEVxwv8m4owlnpjr9JjjKtW9PHlH%2BGuuF5Q8joGfKMvn3uJ%2Bv7XmAvkn1Js9khyZJmeEbFGfCtFUaaizD2g28sJqHK3U9Gp33Ok4W%2BFzaQGe2LT4XLb36%2FQnhzgK%2FGqa6OONc0NXiwx4k%2BUdk4Lp5yH0%2BTcmu6VZ%2BBr2jXNkfk5Z5fJkMGv2lUONK2rQ5BrJQChhcUKQM0w7u3TxAY6pgGS6963lp%2F7p2olowqAnQ1lVSSfslzOIw5Kk4%2FF1uUuHWHx3URjn6nIjsU80sGAx87Mk9h3qq8%2FZmrE8jgJjGtC4E6JKtrKbGKjIPVvqiIHa0mTUPKV39Wb0ZQhjOsDjtcxOxzp8THxknwqLDmE2RYDB3hiMHc4rb2ZbCg8P%2F966WT%2Fzun%2BUN0nrWXtH%2FKwQXry6vkzvVq5F%2BOk61uOopqunkwKVo5B&X-Amz-Signature=b0c7d830a4c06bff2c7348b200d4ec586e19a62890d9cbb7ac3ba2f0c3076c18&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QU72XOIN%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T191205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJGMEQCIBaDdI0jCWOrRdmL6pRZ5NAIgEN0lNWY2Kh%2BDVuVfhayAiB%2F1qSTFP2iHUmipPnUevtcv2dnP8p6bl0jvXaTdxOeziqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3CpTiYHkTnHmbnB2KtwDi%2Fa0FUpBwsGx7nm2PTd8ilAdjvSjz2nME8jKvC95ZZLb976Q9MlBwyho9HQRZYOSX2qQU9q4bixFBN8vJMPlMVI0%2BK3U0p4GzknVv8rj%2FNwD8HX9Be1Nz7fJmDiaet7Hx0FTFl9q9vTFJkL9n80SMggFtPX2B5tMY0H%2FZlSAuBdVM0X91KtEAhvcedZXAycmJpBLXgj1B%2F%2FsbJ%2F4vuTHw4LGwzFhCgurn%2B1qaUSlaoqeg8wvp37SSmlsbLkr%2BkhgdOVGPQXdytNgxFwrYzBZ2GxteN0aqVjJEl3qhaTkgJlzmPPxUHcggbocdzK7Sqvp45a%2FvU7I%2BBC576Lj6bZsBAe8pY3I4ANtElh5qidaG%2FstDbuILzXwIhEs0ZF0XRo%2FP27TUMUPJ275rYnQXqWM%2BfUv4PsDZKk8D%2BMw7arskKIlFujSqMEVxwv8m4owlnpjr9JjjKtW9PHlH%2BGuuF5Q8joGfKMvn3uJ%2Bv7XmAvkn1Js9khyZJmeEbFGfCtFUaaizD2g28sJqHK3U9Gp33Ok4W%2BFzaQGe2LT4XLb36%2FQnhzgK%2FGqa6OONc0NXiwx4k%2BUdk4Lp5yH0%2BTcmu6VZ%2BBr2jXNkfk5Z5fJkMGv2lUONK2rQ5BrJQChhcUKQM0w7u3TxAY6pgGS6963lp%2F7p2olowqAnQ1lVSSfslzOIw5Kk4%2FF1uUuHWHx3URjn6nIjsU80sGAx87Mk9h3qq8%2FZmrE8jgJjGtC4E6JKtrKbGKjIPVvqiIHa0mTUPKV39Wb0ZQhjOsDjtcxOxzp8THxknwqLDmE2RYDB3hiMHc4rb2ZbCg8P%2F966WT%2Fzun%2BUN0nrWXtH%2FKwQXry6vkzvVq5F%2BOk61uOopqunkwKVo5B&X-Amz-Signature=5a4853330cca1766414db24fd47aa78f4b50b20bab0e09e47a46b41832440c97&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
