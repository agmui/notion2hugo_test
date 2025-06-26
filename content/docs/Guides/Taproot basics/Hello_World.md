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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVX3JIBP%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T091022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJIMEYCIQCojiTngZAj350UcPYXHpy7hjzGwCd9qPKZJ6VC06RNIwIhAOocGzCO5HnbAaeOoHuf2DdgUtLQJ04wxNR4fqA3V7eGKv8DCFoQABoMNjM3NDIzMTgzODA1IgziKt2%2BqU4bokUNA54q3APUfUwdfqbjmX5z2i4BumKD7dmipwm5ygA0XkORuK6uiSPLHYEPIXJrx0Eku2jUnP9%2BFgMlf6Gqs5%2BGu1wnigLrFM0EtkBUXlrXvbgN6KyhL2C%2BVj%2BHQH2iuckS3jKCXypfuDPLUW%2FjEQ2FhA907dF2BsbL2RBU2uV3yzvOuod2HgISCE7KB7oLkf4gPGUlK5hoBxBxbeO61%2FW0COkKVmHe5JIJB%2B%2FvF%2FtSBHOrV8mz%2Bkn5Y1u4FvhmukblopuW6nJDOxZMb1B7snDX4fJVKVBywuo7m5yx6cS%2F2qhc8o8YuMBFxkWzjS%2FB8Vrp7nODh93A4zQWi2Uk4QkxbAEZOylPQ1bC163FjEK5hClnZn9pdiIyfFjakdzcS91%2BfS8PDpLBRb2ekx4eKGscUr4w1CvLvw6CbMzTc2041jiiyG5WUHHXWkJ6S7AkH5lGrenKkY3YkUFvmH7xxHYtw3XaMl8x76UbGxmJgs1%2FTTnUAsJF04FaXtiWHh1VZG4iMvUBmTQxs5fw1wgyS5CvP%2BMsqhvD%2FQjNu%2FZp9LIGPCtn2tUp2F06TSlBtxSzCb3h3Z7%2Fhc3hNpJANK6R87czDkGNxK1YpGby3gzyHaeX97Zps7MH4wWkiHK5eZdOc01HGDCZlvTCBjqkASRiaYVVoi4T4gRdslISXn2vc4QtX7JKshBY8wcbuM9tiycVzg59jTRQvvC82kNX3vnFgIihBZ9E3%2BK35hpewKppoDEZmqLRento5Wcp9L2hToqAXFwh9IeFYzHWiNywgUo%2FOYPtniMFYWKp7ldFBPFzd1Zn8XWSYOVwySR2yOmVehQeEFG8rlinXK39OXk1KyMcza5SxoJzJI%2ByGDz8QFiYs34B&X-Amz-Signature=886f527ff62fe59e93a02fcbd51db63d4de35d75622402141df60aa050c6afb5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVX3JIBP%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T091022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJIMEYCIQCojiTngZAj350UcPYXHpy7hjzGwCd9qPKZJ6VC06RNIwIhAOocGzCO5HnbAaeOoHuf2DdgUtLQJ04wxNR4fqA3V7eGKv8DCFoQABoMNjM3NDIzMTgzODA1IgziKt2%2BqU4bokUNA54q3APUfUwdfqbjmX5z2i4BumKD7dmipwm5ygA0XkORuK6uiSPLHYEPIXJrx0Eku2jUnP9%2BFgMlf6Gqs5%2BGu1wnigLrFM0EtkBUXlrXvbgN6KyhL2C%2BVj%2BHQH2iuckS3jKCXypfuDPLUW%2FjEQ2FhA907dF2BsbL2RBU2uV3yzvOuod2HgISCE7KB7oLkf4gPGUlK5hoBxBxbeO61%2FW0COkKVmHe5JIJB%2B%2FvF%2FtSBHOrV8mz%2Bkn5Y1u4FvhmukblopuW6nJDOxZMb1B7snDX4fJVKVBywuo7m5yx6cS%2F2qhc8o8YuMBFxkWzjS%2FB8Vrp7nODh93A4zQWi2Uk4QkxbAEZOylPQ1bC163FjEK5hClnZn9pdiIyfFjakdzcS91%2BfS8PDpLBRb2ekx4eKGscUr4w1CvLvw6CbMzTc2041jiiyG5WUHHXWkJ6S7AkH5lGrenKkY3YkUFvmH7xxHYtw3XaMl8x76UbGxmJgs1%2FTTnUAsJF04FaXtiWHh1VZG4iMvUBmTQxs5fw1wgyS5CvP%2BMsqhvD%2FQjNu%2FZp9LIGPCtn2tUp2F06TSlBtxSzCb3h3Z7%2Fhc3hNpJANK6R87czDkGNxK1YpGby3gzyHaeX97Zps7MH4wWkiHK5eZdOc01HGDCZlvTCBjqkASRiaYVVoi4T4gRdslISXn2vc4QtX7JKshBY8wcbuM9tiycVzg59jTRQvvC82kNX3vnFgIihBZ9E3%2BK35hpewKppoDEZmqLRento5Wcp9L2hToqAXFwh9IeFYzHWiNywgUo%2FOYPtniMFYWKp7ldFBPFzd1Zn8XWSYOVwySR2yOmVehQeEFG8rlinXK39OXk1KyMcza5SxoJzJI%2ByGDz8QFiYs34B&X-Amz-Signature=628716016cadc8c36e5285d29b19ff7bcf9090e3d44c13768087b54474b811df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
