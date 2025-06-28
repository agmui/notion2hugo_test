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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFJ4LPRQ%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T041230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCzFBnrE7p3A1Z%2B4XWNuzdiQ0dznSbrw7GXsTZDInjnmwIgNGvgGPwnc1f56UiS%2FI3JoAEVC4gwU7eyyLAtmsgL01AqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGPXbFWrSgwD3XosMSrcA8jnFx7lI%2FHI%2FDkQMagd8DHpO8qCnBvlKdgmqFjK5vZ4AQ%2FDDg7K4cIUlawkRMNYi32FaXlfoBKmojkRHb%2FNE6jwfAFUIifJTlEkaQz%2FvHAzhmli2JWlKyGZFratn3e6pMGec4axhw1Vjbi8%2FiNpTD85Ly16AK0%2BVlFjPjFm7yEG5LqXH2IBtAhcAB0BsIeJXDwIXY7gmEkkC1qMLQEBWbUtNwFrs82YaR5c%2BuyXZJk7o9RQqueK%2BG3SN7XOx8YStRQSekYNqlXHSNdwWZTiF4VJ1rXjwNiHAQ%2FBN%2Bf%2FIU1iT9tF6vJYKNQWbv76%2FJeHDjl%2FMLZhx3xH7Mr3G%2B3FDy7R0QGeZCpvgn9YoVaaV4FzOWTc2WEuK6VLhkdy7u1Rl3pnOtU%2BGPMvrn9285gxNe2Zeyn1LDlTz%2BINcw6q3glOWOA2xWs4CdssHiqJxm4JevC%2FHmUQKS8khxqfuCgRiUljpmIoPn0Bc%2BNovUtX1HG4%2FjiKblc%2Fbn2u5krtfXo3vmoLujk9oGyGomFEr6V8Aput83%2FI0LnxSXK38nnMjpwND5iOCAUIxKpKkMuDdf7f6jJzbUJ3eqz49u8jU4kET6I9m6GPdYSat%2F5lX4v%2B2A%2BxciggscVyQW22xI1nMJvS%2FcIGOqUBw5eiyNv3tVKhER7j9tlDH2X4zRZ43KywnKhdLlCzJN62m5ZnbWa8SpsBjpYpjMFylntcEc5cDdmR9TvyIeMiC1kB%2B5%2F1JXgQ3p%2Bn6CJTU%2Bgct2xrmOjNAO37OOkSR8ZFJj03%2FBMRbp0tH%2BXOFtK0JJhiyv2BoP8SZUwopx3SV3gf9kTJK8aR9HcNWUVzwc4jhQFD8dsEEjkN7n3uPQ%2FUiLUUlr1f&X-Amz-Signature=bce31889d349ee9b69cd57b38b7089f0e662f16201895a04535f8a614ae9cfe3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFJ4LPRQ%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T041230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCzFBnrE7p3A1Z%2B4XWNuzdiQ0dznSbrw7GXsTZDInjnmwIgNGvgGPwnc1f56UiS%2FI3JoAEVC4gwU7eyyLAtmsgL01AqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGPXbFWrSgwD3XosMSrcA8jnFx7lI%2FHI%2FDkQMagd8DHpO8qCnBvlKdgmqFjK5vZ4AQ%2FDDg7K4cIUlawkRMNYi32FaXlfoBKmojkRHb%2FNE6jwfAFUIifJTlEkaQz%2FvHAzhmli2JWlKyGZFratn3e6pMGec4axhw1Vjbi8%2FiNpTD85Ly16AK0%2BVlFjPjFm7yEG5LqXH2IBtAhcAB0BsIeJXDwIXY7gmEkkC1qMLQEBWbUtNwFrs82YaR5c%2BuyXZJk7o9RQqueK%2BG3SN7XOx8YStRQSekYNqlXHSNdwWZTiF4VJ1rXjwNiHAQ%2FBN%2Bf%2FIU1iT9tF6vJYKNQWbv76%2FJeHDjl%2FMLZhx3xH7Mr3G%2B3FDy7R0QGeZCpvgn9YoVaaV4FzOWTc2WEuK6VLhkdy7u1Rl3pnOtU%2BGPMvrn9285gxNe2Zeyn1LDlTz%2BINcw6q3glOWOA2xWs4CdssHiqJxm4JevC%2FHmUQKS8khxqfuCgRiUljpmIoPn0Bc%2BNovUtX1HG4%2FjiKblc%2Fbn2u5krtfXo3vmoLujk9oGyGomFEr6V8Aput83%2FI0LnxSXK38nnMjpwND5iOCAUIxKpKkMuDdf7f6jJzbUJ3eqz49u8jU4kET6I9m6GPdYSat%2F5lX4v%2B2A%2BxciggscVyQW22xI1nMJvS%2FcIGOqUBw5eiyNv3tVKhER7j9tlDH2X4zRZ43KywnKhdLlCzJN62m5ZnbWa8SpsBjpYpjMFylntcEc5cDdmR9TvyIeMiC1kB%2B5%2F1JXgQ3p%2Bn6CJTU%2Bgct2xrmOjNAO37OOkSR8ZFJj03%2FBMRbp0tH%2BXOFtK0JJhiyv2BoP8SZUwopx3SV3gf9kTJK8aR9HcNWUVzwc4jhQFD8dsEEjkN7n3uPQ%2FUiLUUlr1f&X-Amz-Signature=f343a10cf895e9fedfa33d16b7921ca04047873cc1538966cdd22cb97423bbd1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
