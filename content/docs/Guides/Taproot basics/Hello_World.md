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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJI7QOQJ%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T110758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIE23rHoqrZnvfKILE84jKnKvuVleYpEZMp6ohJ00%2FUEHAiEAxSxGbl2UeVDl%2F2%2BhcxXKZjKr1dUkjP9I1Pm7I60c9UYqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCfJ2bf8yPyREYHz7yrcAzqjZaP4ND39HbuPEkKFJpMgBo6Bjb%2Bp5BokxC7dT%2FOLQi1Ip4hkNCRWXGRPfDoBpM0ZeHmU8jRo%2BzidVy80ZePMNPUKtGqOHj5LQ%2BvK29JHJBujMWrDa2ki2PLTEOrODD%2FZP8%2Fm4Z8q6BdYcj1AkBk4b4k2GejNjW4sXEfkityoy%2FuhsdILJ%2FI4yhGw12ms%2Be44FpAjwepEP5I7wJ3t7pmvXVAYnYk3ZWEm0rvOGw0nnRnT%2F6bYg8QcEostIQjpkuCCX7STGR1KEPfLI4erMgOwvio8OGVej%2FEvfuiUcVj0OfXIWNZYspow5uNYU7FVm0lComI2RLLa9RNRmWMGDroAtqTUACcFLKh8Bdg%2FGtzzTzoE9sePT2avK2EKSf9iCtMz3afdRBkPIq%2BzrooBMncvz4N0N6TgYXr6RkfwxjSgi62sQLP7iVe5q8b0S0nfUTtIE0v6DSCnWECjLfQpkRuGp55TkF3JA2xKCQjad%2Fr32aaS9b3u%2Bugs%2BYzYZdS3VpLa%2FJpZVn7CW933N5STnGoO2x9h9R9Su92S3S%2BA6EG%2BoOozkHbXXUWZjFzJvFOWojtpzNYIVP%2BtdqbK2Zoq0kcFImXA3QJVjhS7NMwTz7eQJFo3YTtQ9c71rXgTML%2F6u8EGOqUBh1E1xT7hWeeyt5hHbhhFC8WJK1wjxaQOQWEwMfJQ0KH6dRJIRlPVKYglxU8OnkpHP6%2FwjqmjbTWYQzNWLYgkSMydBEGWVwS2b5wyJ2JAOR5laYjt3jBT8mbRDtAP%2F0AJ%2BoZGYtws6ukkfeLFBMj4vPp%2FqNjNDLPQsv%2FzKYhBFKg%2BUTuf7EdbvVuhMZLiB09CAXPpLcAwSMpvb95jHWgIydIttDQM&X-Amz-Signature=1ae6f4b52e05f61798258ed3253151ca749c06d7856ca228c64240bf5c1ccc27&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJI7QOQJ%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T110758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIE23rHoqrZnvfKILE84jKnKvuVleYpEZMp6ohJ00%2FUEHAiEAxSxGbl2UeVDl%2F2%2BhcxXKZjKr1dUkjP9I1Pm7I60c9UYqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCfJ2bf8yPyREYHz7yrcAzqjZaP4ND39HbuPEkKFJpMgBo6Bjb%2Bp5BokxC7dT%2FOLQi1Ip4hkNCRWXGRPfDoBpM0ZeHmU8jRo%2BzidVy80ZePMNPUKtGqOHj5LQ%2BvK29JHJBujMWrDa2ki2PLTEOrODD%2FZP8%2Fm4Z8q6BdYcj1AkBk4b4k2GejNjW4sXEfkityoy%2FuhsdILJ%2FI4yhGw12ms%2Be44FpAjwepEP5I7wJ3t7pmvXVAYnYk3ZWEm0rvOGw0nnRnT%2F6bYg8QcEostIQjpkuCCX7STGR1KEPfLI4erMgOwvio8OGVej%2FEvfuiUcVj0OfXIWNZYspow5uNYU7FVm0lComI2RLLa9RNRmWMGDroAtqTUACcFLKh8Bdg%2FGtzzTzoE9sePT2avK2EKSf9iCtMz3afdRBkPIq%2BzrooBMncvz4N0N6TgYXr6RkfwxjSgi62sQLP7iVe5q8b0S0nfUTtIE0v6DSCnWECjLfQpkRuGp55TkF3JA2xKCQjad%2Fr32aaS9b3u%2Bugs%2BYzYZdS3VpLa%2FJpZVn7CW933N5STnGoO2x9h9R9Su92S3S%2BA6EG%2BoOozkHbXXUWZjFzJvFOWojtpzNYIVP%2BtdqbK2Zoq0kcFImXA3QJVjhS7NMwTz7eQJFo3YTtQ9c71rXgTML%2F6u8EGOqUBh1E1xT7hWeeyt5hHbhhFC8WJK1wjxaQOQWEwMfJQ0KH6dRJIRlPVKYglxU8OnkpHP6%2FwjqmjbTWYQzNWLYgkSMydBEGWVwS2b5wyJ2JAOR5laYjt3jBT8mbRDtAP%2F0AJ%2BoZGYtws6ukkfeLFBMj4vPp%2FqNjNDLPQsv%2FzKYhBFKg%2BUTuf7EdbvVuhMZLiB09CAXPpLcAwSMpvb95jHWgIydIttDQM&X-Amz-Signature=8a1b23cfd24da0eaeac04e631636728f54ae05cd76325cc88a4933c63f3422eb&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
