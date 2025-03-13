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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643L3T4QX%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T032023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEpFaMbfnmDYdRTO%2Fmwr%2FDpUmKtt%2B6adr%2F9IGzDJVktGAiBjiAIdDxVUw96UaWcpQq9e%2FBi6E7H%2FpKjC9umtNMq5ESqIBAjM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfYw29waCvFWX8Go1KtwDaYo4GtG7suCDj64bnS1AdCIkoo%2FfuZl%2FHJMrArqKjRGB93mJHjGPY9eJJrE9pZEFuCqSkNv3AKazVWCOS%2Fo7mVllEjnKbUkYOVybrDYc8k8uwwbUSnV6f9YAyaX3oC44q73xlmqEJrZdLGBvb5pVCUJBk4lOIsBsDE8Powm5y4FZUVzo%2FiWCqnRx0RP9MoE%2BWNaGDx%2FVfF14VWB%2BkFg9%2FWOFwA4zFEo%2BnAyYuL%2B2B5nRxOf0nahhF14y763BVqx00nk2h%2B6PaFpiH%2BaLubUyOZuayLHm4e8DVELC4sXG7mjFu9gfJFyP987XvC081Oj0l13eojpZGYLUWH5L0TNQZoy0RvnWMWHGk4Q8TMLe%2FjxZbvRmoelZ3ZWQ5EJqSTCU0EdJgR5ItOR33SXJJlqaQNSkD9M8MNjr2TB9n0VzfmJ3S7zFNvltDp2E0yX2CzxjGmmzjLC0VbYFd13rY%2FB59v94I0oCD%2B6nFXxiPa%2BFTz6rBIsGUz9gTLd9LZxAqqOOHkQscB7zZlc5kG%2BdmMGRmshX0%2F5OeK21TNmSb8oqfWgnr80vZQTuFCnuuTnQo2YPFkVjzPl5LWnkDu2HG6LSPZiRwsNlBddq1Qhsp0CDXG86l6BSBl%2FyBDqro30wpobJvgY6pgEi5VU5IaTzm8lzqbcUf14MgIwpMC72x98C36IBvh35ytp%2BUiuyAKCKV7CE1YcPjCVI7hDwqz2AExNv5%2BUdP8%2F5wrl97Ja7v2%2FAzXCAGkjQqlDZnRbxmiCreCGccaV2frF1CgQJVWzw4x3h3ViCEA28brMKJbKqukrmJ2i%2Blr9NOYobCJ6p%2BRlAiv%2BtDXYNheDH3I4OvkyF7wibJAjp3yBI%2FaWf4Bs6&X-Amz-Signature=18f15bca37e63f3443490df1bd50e3bd7bff4ae611207f081cc9bd4589ab92cc&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643L3T4QX%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T032023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEpFaMbfnmDYdRTO%2Fmwr%2FDpUmKtt%2B6adr%2F9IGzDJVktGAiBjiAIdDxVUw96UaWcpQq9e%2FBi6E7H%2FpKjC9umtNMq5ESqIBAjM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfYw29waCvFWX8Go1KtwDaYo4GtG7suCDj64bnS1AdCIkoo%2FfuZl%2FHJMrArqKjRGB93mJHjGPY9eJJrE9pZEFuCqSkNv3AKazVWCOS%2Fo7mVllEjnKbUkYOVybrDYc8k8uwwbUSnV6f9YAyaX3oC44q73xlmqEJrZdLGBvb5pVCUJBk4lOIsBsDE8Powm5y4FZUVzo%2FiWCqnRx0RP9MoE%2BWNaGDx%2FVfF14VWB%2BkFg9%2FWOFwA4zFEo%2BnAyYuL%2B2B5nRxOf0nahhF14y763BVqx00nk2h%2B6PaFpiH%2BaLubUyOZuayLHm4e8DVELC4sXG7mjFu9gfJFyP987XvC081Oj0l13eojpZGYLUWH5L0TNQZoy0RvnWMWHGk4Q8TMLe%2FjxZbvRmoelZ3ZWQ5EJqSTCU0EdJgR5ItOR33SXJJlqaQNSkD9M8MNjr2TB9n0VzfmJ3S7zFNvltDp2E0yX2CzxjGmmzjLC0VbYFd13rY%2FB59v94I0oCD%2B6nFXxiPa%2BFTz6rBIsGUz9gTLd9LZxAqqOOHkQscB7zZlc5kG%2BdmMGRmshX0%2F5OeK21TNmSb8oqfWgnr80vZQTuFCnuuTnQo2YPFkVjzPl5LWnkDu2HG6LSPZiRwsNlBddq1Qhsp0CDXG86l6BSBl%2FyBDqro30wpobJvgY6pgEi5VU5IaTzm8lzqbcUf14MgIwpMC72x98C36IBvh35ytp%2BUiuyAKCKV7CE1YcPjCVI7hDwqz2AExNv5%2BUdP8%2F5wrl97Ja7v2%2FAzXCAGkjQqlDZnRbxmiCreCGccaV2frF1CgQJVWzw4x3h3ViCEA28brMKJbKqukrmJ2i%2Blr9NOYobCJ6p%2BRlAiv%2BtDXYNheDH3I4OvkyF7wibJAjp3yBI%2FaWf4Bs6&X-Amz-Signature=1332fa3848ce1f1710615362ffae54ea70a2b096524fa46823d43c53e865129e&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
