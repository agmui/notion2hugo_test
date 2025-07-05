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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VR6QNOHE%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T200827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQCnubLlCT7eaHwG0bZZ%2FTajppkFzixJHpiAZVcyG5WuLQIhAIVkfdazrK4EJkbduZXEjPtw9pqlWFaYCJzBeZsdshvYKv8DCEwQABoMNjM3NDIzMTgzODA1Igyiux%2BvTN0sB9zxsQ8q3ANxoFnBBb0iyFPjQSNIHJq1OO3Fz8LA0C9ISD4lMR4wwkKZRcQ721wn%2FvrHvS0L6Xu3n76gmKYyjxtZOSDLApzkXZUBvJu0SE0CF2kG2EGzC5rxvGYqvBm9F7lvX5Ff%2BPZnmr%2BLkWA0LaxBJrJKQaJcRLxGtiiQU612b9%2Bs2zU4Q6MnolpMVgJUd1MgYziacoLzb9XobyU9%2BC3S7rjz%2BWl4%2FNalbid%2B2CAh8uUPnhw1qYZVUlQzGtXSxO7TFzO2b6RAfJqVHaKsbhYuwHVGTFpcNdgH329ZJNorjmC3kiS8JeS5Weo5wqe5H%2Fr%2BEsZ1JNEHQ5lj0rO5Z9aPjUm6mzbhqcqZ%2BZ0FXsbng8ay%2Fqn%2B64ogZKAsiAq40rsHNhhi%2BTN4xp0SB%2BllM2szQHx9QaFCprRH2hpCHmHmZQdsf%2FRFmUyFGaoJ0H%2BfMXWOciM1FByOfpWQ7ABl7CBhAA1JVsvZJMB5WPL2jXwCVTLR3eYL07kPV4UNKrujsiY7iwKwFUAK%2FAdV6E%2BDJ6oC%2FXWVK3cqkLFJ91zs2JiQgm386CKGCtsgMRRZEGnAQCejSwE30QRTSbrtDqRIRyWvtR%2FPSgm1NA%2F0n3xXy1coQgC7G4iVV1Pu9L4nh8VkFVTiazCM8qXDBjqkAfEHF8uloOvBsxSuDZMEeXj6jUOkmscHq%2B%2FckmE8cUWWqoHscXflENqdqh4v00xmzYQuzq0aE7wTT%2BXlo5V85W1RwLbOvVjL%2Bs%2BeL7ESqCrczfzbrD%2Bal%2FsED1jghPviey8cZDSMWgiDzUlVpvJgAIoc4cEWiKwzPQjwTOuleOeOdByOFgRYz3CH2sjUXdnC%2BnEl2ZGUt06FuTuY4IDD48NSv3WF&X-Amz-Signature=62a62b89cdb7749b5948772d0f059be1d7ecc51cd9f0e0a451ba9659d6a73863&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VR6QNOHE%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T200827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQCnubLlCT7eaHwG0bZZ%2FTajppkFzixJHpiAZVcyG5WuLQIhAIVkfdazrK4EJkbduZXEjPtw9pqlWFaYCJzBeZsdshvYKv8DCEwQABoMNjM3NDIzMTgzODA1Igyiux%2BvTN0sB9zxsQ8q3ANxoFnBBb0iyFPjQSNIHJq1OO3Fz8LA0C9ISD4lMR4wwkKZRcQ721wn%2FvrHvS0L6Xu3n76gmKYyjxtZOSDLApzkXZUBvJu0SE0CF2kG2EGzC5rxvGYqvBm9F7lvX5Ff%2BPZnmr%2BLkWA0LaxBJrJKQaJcRLxGtiiQU612b9%2Bs2zU4Q6MnolpMVgJUd1MgYziacoLzb9XobyU9%2BC3S7rjz%2BWl4%2FNalbid%2B2CAh8uUPnhw1qYZVUlQzGtXSxO7TFzO2b6RAfJqVHaKsbhYuwHVGTFpcNdgH329ZJNorjmC3kiS8JeS5Weo5wqe5H%2Fr%2BEsZ1JNEHQ5lj0rO5Z9aPjUm6mzbhqcqZ%2BZ0FXsbng8ay%2Fqn%2B64ogZKAsiAq40rsHNhhi%2BTN4xp0SB%2BllM2szQHx9QaFCprRH2hpCHmHmZQdsf%2FRFmUyFGaoJ0H%2BfMXWOciM1FByOfpWQ7ABl7CBhAA1JVsvZJMB5WPL2jXwCVTLR3eYL07kPV4UNKrujsiY7iwKwFUAK%2FAdV6E%2BDJ6oC%2FXWVK3cqkLFJ91zs2JiQgm386CKGCtsgMRRZEGnAQCejSwE30QRTSbrtDqRIRyWvtR%2FPSgm1NA%2F0n3xXy1coQgC7G4iVV1Pu9L4nh8VkFVTiazCM8qXDBjqkAfEHF8uloOvBsxSuDZMEeXj6jUOkmscHq%2B%2FckmE8cUWWqoHscXflENqdqh4v00xmzYQuzq0aE7wTT%2BXlo5V85W1RwLbOvVjL%2Bs%2BeL7ESqCrczfzbrD%2Bal%2FsED1jghPviey8cZDSMWgiDzUlVpvJgAIoc4cEWiKwzPQjwTOuleOeOdByOFgRYz3CH2sjUXdnC%2BnEl2ZGUt06FuTuY4IDD48NSv3WF&X-Amz-Signature=24734fad24efbe6f26d0b83b0bb6a5aa6ee94a558f80689037d98ecf243f2f4a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
