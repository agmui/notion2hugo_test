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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGCCXHQB%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T100900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCQpDpd5FfAXPS5qZHkiwBWvl0Mxm7uKOQM3FXnujZLwgIhAMU3eOlsEXljZM1heYNloH1RZR%2FC7Pu2uJPhAARoB8ikKogECNL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy44hivEmo5LP5XO9wq3AMiBmTPFhgKHOf6xWjPhs20x6SyE%2F9zUTvMgEx2cKFO0AIJn9Mph1F2r2M9xMI%2Bx8ASoNOL5dm2hBF9lSSbWKPrRWUFnSzFAeqr6Wk7D%2FbKBJe5tn4JAOgHj6QHGUOz26KrtY8DqkzHEpsk36hRkS3L5IHtld%2FnN5tYzOpbDkArpWMDVL53gzc1D%2BtDmTvBZ5O3RDVAMoah8se1LfE3ltWlp%2BrZzimAJdJ6%2F5vdxZ%2BTY8sNsPg9%2FhG5wZWEBg7anQhzrGSaDBIAfyLQkDwAiRUAfajYKvyx2WdYnJK2J%2BqQhxS9gf0axJ64g0RvlDOGDUGc%2BAebxNp%2BEfaNIo7Rh5iEF54z%2BZyk8dTaT0By3jTWHlkd4%2FVzR%2BJvGL0%2B36v20YjeYVKGTO6GZfvCuexZQdzV5C8Bql68HzOIAAWxOWlw8xaZFGi4NFAR4grUo3wIzSPF1NtuxqpGOUYljzDTbP0TPUbZCjyg1zKoPJ44TjbiOiUON%2FoSxGklWcDCw7j64yrDxutN355nJr7ubcUnaQgKjzQo5PefQA%2FpZyoeoqrJm9o0egFJS3ED0gh%2F5J6%2BdAeQFQwgqold7%2BXIWXRb3y4HUQznZPVZCVoC18uoO00s8H9mk72Z89soqyzbHzCSwcq%2BBjqkAcaV74N0HlyHGHnGKtbz9mu4mEBK%2BMzZIsA0pAa9GSDYp%2BUSryqC3iUQErIUSORee3wAv4ijcbR%2Bg%2F9BPBoeXJXuR%2BNyPo3iXkiA6A8DpNce71uWsevUjDe5lx29z9J5wM16ukgjTNkxdHnpVVcJ9utsfFI9arNQkt9tqRcOPJqe5m7w2qEBxEoW8MlyD0e%2BAY9s%2FgzBpsyY4LDoXJS7qN5U6Aj2&X-Amz-Signature=5d5e038e7a9bcddc7f9c583212f357d36023fdcea5ea57b0cbd53dcf181286bd&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGCCXHQB%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T100900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCQpDpd5FfAXPS5qZHkiwBWvl0Mxm7uKOQM3FXnujZLwgIhAMU3eOlsEXljZM1heYNloH1RZR%2FC7Pu2uJPhAARoB8ikKogECNL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy44hivEmo5LP5XO9wq3AMiBmTPFhgKHOf6xWjPhs20x6SyE%2F9zUTvMgEx2cKFO0AIJn9Mph1F2r2M9xMI%2Bx8ASoNOL5dm2hBF9lSSbWKPrRWUFnSzFAeqr6Wk7D%2FbKBJe5tn4JAOgHj6QHGUOz26KrtY8DqkzHEpsk36hRkS3L5IHtld%2FnN5tYzOpbDkArpWMDVL53gzc1D%2BtDmTvBZ5O3RDVAMoah8se1LfE3ltWlp%2BrZzimAJdJ6%2F5vdxZ%2BTY8sNsPg9%2FhG5wZWEBg7anQhzrGSaDBIAfyLQkDwAiRUAfajYKvyx2WdYnJK2J%2BqQhxS9gf0axJ64g0RvlDOGDUGc%2BAebxNp%2BEfaNIo7Rh5iEF54z%2BZyk8dTaT0By3jTWHlkd4%2FVzR%2BJvGL0%2B36v20YjeYVKGTO6GZfvCuexZQdzV5C8Bql68HzOIAAWxOWlw8xaZFGi4NFAR4grUo3wIzSPF1NtuxqpGOUYljzDTbP0TPUbZCjyg1zKoPJ44TjbiOiUON%2FoSxGklWcDCw7j64yrDxutN355nJr7ubcUnaQgKjzQo5PefQA%2FpZyoeoqrJm9o0egFJS3ED0gh%2F5J6%2BdAeQFQwgqold7%2BXIWXRb3y4HUQznZPVZCVoC18uoO00s8H9mk72Z89soqyzbHzCSwcq%2BBjqkAcaV74N0HlyHGHnGKtbz9mu4mEBK%2BMzZIsA0pAa9GSDYp%2BUSryqC3iUQErIUSORee3wAv4ijcbR%2Bg%2F9BPBoeXJXuR%2BNyPo3iXkiA6A8DpNce71uWsevUjDe5lx29z9J5wM16ukgjTNkxdHnpVVcJ9utsfFI9arNQkt9tqRcOPJqe5m7w2qEBxEoW8MlyD0e%2BAY9s%2FgzBpsyY4LDoXJS7qN5U6Aj2&X-Amz-Signature=0b02651794ec6924f70698763c9e99a190d53d6c9d31dccc22107c377296c7d0&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
