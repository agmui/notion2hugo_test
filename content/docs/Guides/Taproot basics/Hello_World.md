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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKW6INLB%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T201009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQCk3TdonMwbM4pbxtYSZf2XPMzz%2Be7Canj%2Fb%2BUMdTrsyAIhANm32G7AETXXyswv2s6bLkoDyTik3KHfyr8UXr28qsH%2BKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx4uVJBAyOqIJMIr30q3AOqbMwmX9ZZ9hyB2OVijrsIYvNEN5X0%2FHrsonPce5pCZ5CYaP32lPABi4UWbIsTo%2F7eYtiwV1poT7eUsajsL5NMNav17KPX3Tlk3wUxH6H%2BWdsbuXu%2BVWENLjHziYk7kf2gLnceFI2IRSC6%2Fhbk9Qv4Kmjn3wVPzyGkSyi8i5QGzfeYgrUjekELzuGtFe5GTfrlPHCN7ttRTJaViUO7j6WUb5A4JbuwH7CqX2xD4EgH0FzBHgaF%2BLi6pIAG66oa8p6PgW6FxuOo%2BkDcZF3gPwmR1rW6x1Z5hax0mgYeAywlhdRa0V9x6ohBv473jmK5xP20lTNxPbi8uPv8NzDa1d4gfCpebC32jzocglw2qRS6EaMLE0zCPbAIEQpMS8OV0MrvlIebY%2FTIsQQNSaHtgsYicMhVki3Ot7ASLvF6zqPwKvzqSPhtjHDxnYtxC7dyXHwd%2BlQfqpPK89E6Uq%2F5sv9kbIXwUjrIwNRLu3jvNAVhNVwdXCGb6u5YEPXy8H3kq6qZHJYt%2BJ7ke74zMe3IRq3ZRfw7vuot2q7pkg162L%2FLlZ6HbzlN3PscAWlqRABNfn3RUCikVswV%2BsgKs6M4iXehZFV80%2FUuX284V2py%2B5obvxVcDUherbqv%2FTqVBzC6ktnEBjqkAWrQs74RBwwaBfiVK92ZrJyvJfrwrUc8%2Bs552R7alTwg3T5Dppy7gZY6iG3ppchIjdZhjka4l1tAe0qttCxkXOEY%2FSSv84Z3FZCBKv106wVMm%2BBzjf9eIyDnuzWB2%2BoGR8wbf%2FtP9XSMfCiI4jDpO7O9hoOZML1M%2BupA7%2B8%2Fo37lACFAh6SmwRRwkK6oU5rb4UGQoHl%2B6ZtekF4u%2BsrDmKzI%2BBJj&X-Amz-Signature=b3c789dabacd761599edc994ba6abeb965e91000d1f17bfb6b50323e404adf9a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKW6INLB%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T201009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQCk3TdonMwbM4pbxtYSZf2XPMzz%2Be7Canj%2Fb%2BUMdTrsyAIhANm32G7AETXXyswv2s6bLkoDyTik3KHfyr8UXr28qsH%2BKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx4uVJBAyOqIJMIr30q3AOqbMwmX9ZZ9hyB2OVijrsIYvNEN5X0%2FHrsonPce5pCZ5CYaP32lPABi4UWbIsTo%2F7eYtiwV1poT7eUsajsL5NMNav17KPX3Tlk3wUxH6H%2BWdsbuXu%2BVWENLjHziYk7kf2gLnceFI2IRSC6%2Fhbk9Qv4Kmjn3wVPzyGkSyi8i5QGzfeYgrUjekELzuGtFe5GTfrlPHCN7ttRTJaViUO7j6WUb5A4JbuwH7CqX2xD4EgH0FzBHgaF%2BLi6pIAG66oa8p6PgW6FxuOo%2BkDcZF3gPwmR1rW6x1Z5hax0mgYeAywlhdRa0V9x6ohBv473jmK5xP20lTNxPbi8uPv8NzDa1d4gfCpebC32jzocglw2qRS6EaMLE0zCPbAIEQpMS8OV0MrvlIebY%2FTIsQQNSaHtgsYicMhVki3Ot7ASLvF6zqPwKvzqSPhtjHDxnYtxC7dyXHwd%2BlQfqpPK89E6Uq%2F5sv9kbIXwUjrIwNRLu3jvNAVhNVwdXCGb6u5YEPXy8H3kq6qZHJYt%2BJ7ke74zMe3IRq3ZRfw7vuot2q7pkg162L%2FLlZ6HbzlN3PscAWlqRABNfn3RUCikVswV%2BsgKs6M4iXehZFV80%2FUuX284V2py%2B5obvxVcDUherbqv%2FTqVBzC6ktnEBjqkAWrQs74RBwwaBfiVK92ZrJyvJfrwrUc8%2Bs552R7alTwg3T5Dppy7gZY6iG3ppchIjdZhjka4l1tAe0qttCxkXOEY%2FSSv84Z3FZCBKv106wVMm%2BBzjf9eIyDnuzWB2%2BoGR8wbf%2FtP9XSMfCiI4jDpO7O9hoOZML1M%2BupA7%2B8%2Fo37lACFAh6SmwRRwkK6oU5rb4UGQoHl%2B6ZtekF4u%2BsrDmKzI%2BBJj&X-Amz-Signature=6db8b488d0ec66899f99d494a61c625125fa4dbd74eb6abba64a060198174ce1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
