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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UF5XB52A%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T024730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJIMEYCIQDItFTpET%2FjqaXuG7pX58rhkzTURAhUedXKXgNeONHqBgIhAJK3MH2slV6VcztJKOEgExxnzYSGckhNMPpuw%2B5JG1ezKv8DCGkQABoMNjM3NDIzMTgzODA1IgxExcsIL2gCklnxfFUq3AMAK4Xe%2FKSrQN0xv8rTsTS00OpMr7Ki6vKn%2FQNMvUkeO94lXOihaS2IDL%2FQpASZcvLIxc1juSBsmZHwaA5LVnoL7g6epoFjYTSBY01SNb37XIgyQCq4K4RXBEasNQR1uKJCDiQj2eZgpCDtwXzfw7Gj%2BbJ5zLaeWPcyQm5FA1AJDyh13n0NqbvIfqHRdKrEZXTc4GuZUz4FQukf7EnSSzzO49QpJytYBUNnK6T1C1B4cCf9Pi1tAc%2F5j0qHbSwjPdW%2BUF4IF9gYY%2Be%2FEJgNtc7gSs9Np5WI5vkvInqDE%2FF%2FF%2FCO%2BGio6XZ%2BWXPsdIFyuh8IIobV4vdGY%2FHrN6Q3L7dZ4ZyxMfZLQBSr8ktG1KYeDQK3q0C8iZ7V4z%2BBDo1uIR8ltpDRk9aVtHZV0WIDibCzQw29rLUx1rRZ5JBJqdeCBIheSxKlBIBTgi%2FKhxT4x1j%2FO%2BgYgmHFiPJD5ro9BRvvAhvOKQ5ZwTpTo5%2FFb8A5%2FpXT1KMNmZepdQMCMV0ZtUYzzUikWxjx7trWl8kcU8pb7s5kNDlU2CHrrmI5sUVQ6o%2FH1V6wnN3jQHcHmNkEhgHCdGj6ljyjpITNSmq%2FTy8PeHwWitwSmbrquOlWt5Xo0GZzR31wl9FxsrehsTCdi6zDBjqkAQX88yDJJJBIw9Pq%2Bytn3GWYQcoIJe6xDAkse89wJOGu%2ByjYRrSk%2BjYCdLIPjYEAvdmYZByaqcHo6f2sR%2F2DJQZvh4vhIuKcsFhpqCpOxYJulHkiNrnOJhvWC9fUare4BGhrEi7ECFfe%2F6xtxcDVqQ5yEgICjc7pgYMK%2F0N2FB80tacYvDNgJOfh7vpeO0jrvSdHlypBvSgGLNB54z5nUEUXq58u&X-Amz-Signature=9b787e0b5b9d37f7dc567190f80845f4340bcd0a3dae502a3241d004aa462a55&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UF5XB52A%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T024730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJIMEYCIQDItFTpET%2FjqaXuG7pX58rhkzTURAhUedXKXgNeONHqBgIhAJK3MH2slV6VcztJKOEgExxnzYSGckhNMPpuw%2B5JG1ezKv8DCGkQABoMNjM3NDIzMTgzODA1IgxExcsIL2gCklnxfFUq3AMAK4Xe%2FKSrQN0xv8rTsTS00OpMr7Ki6vKn%2FQNMvUkeO94lXOihaS2IDL%2FQpASZcvLIxc1juSBsmZHwaA5LVnoL7g6epoFjYTSBY01SNb37XIgyQCq4K4RXBEasNQR1uKJCDiQj2eZgpCDtwXzfw7Gj%2BbJ5zLaeWPcyQm5FA1AJDyh13n0NqbvIfqHRdKrEZXTc4GuZUz4FQukf7EnSSzzO49QpJytYBUNnK6T1C1B4cCf9Pi1tAc%2F5j0qHbSwjPdW%2BUF4IF9gYY%2Be%2FEJgNtc7gSs9Np5WI5vkvInqDE%2FF%2FF%2FCO%2BGio6XZ%2BWXPsdIFyuh8IIobV4vdGY%2FHrN6Q3L7dZ4ZyxMfZLQBSr8ktG1KYeDQK3q0C8iZ7V4z%2BBDo1uIR8ltpDRk9aVtHZV0WIDibCzQw29rLUx1rRZ5JBJqdeCBIheSxKlBIBTgi%2FKhxT4x1j%2FO%2BgYgmHFiPJD5ro9BRvvAhvOKQ5ZwTpTo5%2FFb8A5%2FpXT1KMNmZepdQMCMV0ZtUYzzUikWxjx7trWl8kcU8pb7s5kNDlU2CHrrmI5sUVQ6o%2FH1V6wnN3jQHcHmNkEhgHCdGj6ljyjpITNSmq%2FTy8PeHwWitwSmbrquOlWt5Xo0GZzR31wl9FxsrehsTCdi6zDBjqkAQX88yDJJJBIw9Pq%2Bytn3GWYQcoIJe6xDAkse89wJOGu%2ByjYRrSk%2BjYCdLIPjYEAvdmYZByaqcHo6f2sR%2F2DJQZvh4vhIuKcsFhpqCpOxYJulHkiNrnOJhvWC9fUare4BGhrEi7ECFfe%2F6xtxcDVqQ5yEgICjc7pgYMK%2F0N2FB80tacYvDNgJOfh7vpeO0jrvSdHlypBvSgGLNB54z5nUEUXq58u&X-Amz-Signature=a1386e683677b257cae688980199c55917bea3da9a214c7e0e3c88f9160afafd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
