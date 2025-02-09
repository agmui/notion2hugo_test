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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663N76OSOJ%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T050705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQClgjzhd%2By%2FxneKnVr7mGPnvlI6wFaoMWErqtbmh8%2BIUgIhANQmMN0CopHmc6sKLRuCznWV%2FLfpOtNrIU8EUr4dvkrrKogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy6YoE8RG5XWx3u5iwq3ANM0%2FFoRO8nGdwoJGMsxwoK%2BzgjqIoLqEhg19uioCSCQEhSIz0imakdEQCGbpbEoXUx4azPyHut2k8OltCMjGWhS4Cv5intolg8GnqXO5tEHCd3Mq3PFajtW0oYJrcGIDEqT3EXSQ1O45dYm5YYpQj5mBhyuFUX9H6slcLA0Pk4AiwPv0DnZOMj%2BpVKRFRMII9PjY1c1pOJvZP94iOgHjjr9xvD9ZkA0Ze40%2BwyZ1RIvQQ8g9ZziQS%2ByZwViqKJWpyrC1E7cki8jEfrfjTc5sgP7UmurRNs%2BTqAsrYOUe3vlxDqVa8oiA2rWA2O9YqZEy%2BmEx6Je3qDkr10eIshgfq9gdaI13bWbQcZgUDAJ31nkY7NmwRUbuw%2ByY3J9JEZqwoXfUHlsrjOB%2Fx4ZmkZeuGd%2BdsqA%2FIjuBF65VjuVtBtB1qhUv7dr%2FzV88BJ8pQxxDnMQ4O5m%2ByQB0ga5psY18t3V0kJ1FHPYuH5cGcJdRagdz8qARtuchjHG7VQ4I7Ih%2BlsLSRSbbeHW6JL3VYjHGQaWlK8bDsXVEZvxIDfv8GfCxTNK5VwWeKLgm9qZA%2Bk7T5AIGXDCKhM9UAa0uxlOWAsKuFMVqsKEFC6ctZVa8%2BLFRfQXKJDY578rwrQUzDEv6C9BjqkAa%2FvDCp0KedJEGWbKUQmAJTu7nUhl6cCdr7mo7dHSx%2BX1UY4taDuvV8cmCPnXZMTK2tF2cQB6vRPNrgfajBQaKJ5cbzqEdZS6zQWAG1s2RMLSo03DF0eExvVA5ri%2B2VFULPPEfDL3Y6D%2BU83NCd%2F1jlOQ%2FE%2Bdv6OIiBY1FWjEpcwVscTM0FjJuzSTnD3i8YQgj%2BNi7fmDfQMUE3UBVf4Il3XTh0a&X-Amz-Signature=5bd95816ce47df7d7fd446a4753a46a9a5b6dbf1c186dd1257df5d8b3315e685&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663N76OSOJ%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T050705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQClgjzhd%2By%2FxneKnVr7mGPnvlI6wFaoMWErqtbmh8%2BIUgIhANQmMN0CopHmc6sKLRuCznWV%2FLfpOtNrIU8EUr4dvkrrKogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy6YoE8RG5XWx3u5iwq3ANM0%2FFoRO8nGdwoJGMsxwoK%2BzgjqIoLqEhg19uioCSCQEhSIz0imakdEQCGbpbEoXUx4azPyHut2k8OltCMjGWhS4Cv5intolg8GnqXO5tEHCd3Mq3PFajtW0oYJrcGIDEqT3EXSQ1O45dYm5YYpQj5mBhyuFUX9H6slcLA0Pk4AiwPv0DnZOMj%2BpVKRFRMII9PjY1c1pOJvZP94iOgHjjr9xvD9ZkA0Ze40%2BwyZ1RIvQQ8g9ZziQS%2ByZwViqKJWpyrC1E7cki8jEfrfjTc5sgP7UmurRNs%2BTqAsrYOUe3vlxDqVa8oiA2rWA2O9YqZEy%2BmEx6Je3qDkr10eIshgfq9gdaI13bWbQcZgUDAJ31nkY7NmwRUbuw%2ByY3J9JEZqwoXfUHlsrjOB%2Fx4ZmkZeuGd%2BdsqA%2FIjuBF65VjuVtBtB1qhUv7dr%2FzV88BJ8pQxxDnMQ4O5m%2ByQB0ga5psY18t3V0kJ1FHPYuH5cGcJdRagdz8qARtuchjHG7VQ4I7Ih%2BlsLSRSbbeHW6JL3VYjHGQaWlK8bDsXVEZvxIDfv8GfCxTNK5VwWeKLgm9qZA%2Bk7T5AIGXDCKhM9UAa0uxlOWAsKuFMVqsKEFC6ctZVa8%2BLFRfQXKJDY578rwrQUzDEv6C9BjqkAa%2FvDCp0KedJEGWbKUQmAJTu7nUhl6cCdr7mo7dHSx%2BX1UY4taDuvV8cmCPnXZMTK2tF2cQB6vRPNrgfajBQaKJ5cbzqEdZS6zQWAG1s2RMLSo03DF0eExvVA5ri%2B2VFULPPEfDL3Y6D%2BU83NCd%2F1jlOQ%2FE%2Bdv6OIiBY1FWjEpcwVscTM0FjJuzSTnD3i8YQgj%2BNi7fmDfQMUE3UBVf4Il3XTh0a&X-Amz-Signature=5ad78b73e8ac8c04bd9373745f54290f1669cd5eeea4986e9f272832397e7c35&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
