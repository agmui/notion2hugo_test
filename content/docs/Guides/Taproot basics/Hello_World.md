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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPXNUFB4%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T061220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIF6e6kQZFl9b3pRkKotH7oKu1kGyLcjhNrFROsUUga0sAiEAvvvzchyyhrqPP3F9QE957RqdCBxkhGJ%2FObaoKyXgAykq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDATd5HMqykNLmgb4oircA0E6ZsbnyE7XGCiDPGi99v7deDM2VtTfCk0Oc6vUS82fS8TtJf7XYifavn%2By3awgWNtJg8%2BaO3%2F5oI3Bjbbjvv6GTaE8QU3K0TDPF1ReQpcI4Nu%2BY67RivpcfhNY4eBcGnlgrN0yzAyGR55dcdSyefLayK6b%2FIxbE9iCLTBLamQU14mW5gHTmjrilKN%2BOf9bq5zND%2ByYby2ig1K5vK8iFBGgkwb7JafmOZNtuLFOGXFMHD%2F65hKMeR6js%2FZ4EFqck09NlMRS7qKvkVD8vYWCgdN5fkP5aY6%2FqfJnw6ZeRn9KcxoQknVxzChzE7oE6tO5F6sgUfQZCTJzvhIh9rFY8uzxWnvycPzZhhSyn9XFRPMpUzJOfRzGD4Nl33fYWeQZUSdKAl0loo0BvPl52sGEkqyiw4Tqcm8KEyaihSX0%2BRcQMnjt1eUWnxFDT3WnU%2B4SXhCAn3wQEiiLM4UHScQQ4UQecaDT%2FOGaQi4O5BilNsrhuuJoe%2FZPaDV4ImmF0kp65a%2FTjWqHQez6dpqf7DDlUg7JCEwpDXxGNAExVLQKMVB5IkUIVipXzQgK4%2BDLSgiq9EOxIYl%2BpfoBnYy4fV2N4Q%2FC%2BpGWQtco4dnEeJs3eJPYgl7zPqFto1DqKlKcMOXikcQGOqUBjj0JlShMdrmlbgVMYcqfqug8ZmP7ZPTe%2ByBtGlYe6pB7T5%2FQvVbwRGLncRgoNlBeD6SkVxREiqrDQwHhg7WGwcKVHxR4f9QfDgeAVGuZPTmoYrW%2Fxn3jXIok3t1RwxJtEhoOMUxA0eGqxrtaOYnrcbrEkQpWAwbtIN0uN%2BnCUr7CGPkxgyXiDCrbAGNbGEnWtkfGJyfzzXwDw76l4Dp5dHoghVfG&X-Amz-Signature=0c2295e8d8b7021e658dbbdc5c7dd8b10928c9ab6196cd16e795364021569b1e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPXNUFB4%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T061220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIF6e6kQZFl9b3pRkKotH7oKu1kGyLcjhNrFROsUUga0sAiEAvvvzchyyhrqPP3F9QE957RqdCBxkhGJ%2FObaoKyXgAykq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDATd5HMqykNLmgb4oircA0E6ZsbnyE7XGCiDPGi99v7deDM2VtTfCk0Oc6vUS82fS8TtJf7XYifavn%2By3awgWNtJg8%2BaO3%2F5oI3Bjbbjvv6GTaE8QU3K0TDPF1ReQpcI4Nu%2BY67RivpcfhNY4eBcGnlgrN0yzAyGR55dcdSyefLayK6b%2FIxbE9iCLTBLamQU14mW5gHTmjrilKN%2BOf9bq5zND%2ByYby2ig1K5vK8iFBGgkwb7JafmOZNtuLFOGXFMHD%2F65hKMeR6js%2FZ4EFqck09NlMRS7qKvkVD8vYWCgdN5fkP5aY6%2FqfJnw6ZeRn9KcxoQknVxzChzE7oE6tO5F6sgUfQZCTJzvhIh9rFY8uzxWnvycPzZhhSyn9XFRPMpUzJOfRzGD4Nl33fYWeQZUSdKAl0loo0BvPl52sGEkqyiw4Tqcm8KEyaihSX0%2BRcQMnjt1eUWnxFDT3WnU%2B4SXhCAn3wQEiiLM4UHScQQ4UQecaDT%2FOGaQi4O5BilNsrhuuJoe%2FZPaDV4ImmF0kp65a%2FTjWqHQez6dpqf7DDlUg7JCEwpDXxGNAExVLQKMVB5IkUIVipXzQgK4%2BDLSgiq9EOxIYl%2BpfoBnYy4fV2N4Q%2FC%2BpGWQtco4dnEeJs3eJPYgl7zPqFto1DqKlKcMOXikcQGOqUBjj0JlShMdrmlbgVMYcqfqug8ZmP7ZPTe%2ByBtGlYe6pB7T5%2FQvVbwRGLncRgoNlBeD6SkVxREiqrDQwHhg7WGwcKVHxR4f9QfDgeAVGuZPTmoYrW%2Fxn3jXIok3t1RwxJtEhoOMUxA0eGqxrtaOYnrcbrEkQpWAwbtIN0uN%2BnCUr7CGPkxgyXiDCrbAGNbGEnWtkfGJyfzzXwDw76l4Dp5dHoghVfG&X-Amz-Signature=1488f63e8147334d13138bfcaa2bf9c8a0c53a67cf8030b02aa6d37ab5c81271&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
