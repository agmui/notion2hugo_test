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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VEYCRBJ%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T190105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQCXiRDFdXC5SGwRyn%2BasT%2BUOxb6KG28WOvPetmnzJmEwAIhAN5j8OogIz%2FaTuNT1HTtb%2Bgz0oBE4f51OrWiJNgPYBn3KogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz36Y18FBczaQRtrFkq3AN1CGeBl8luIGdNMZeEJRRoGHPmWJB%2BcwZgS7m2Qp9uzuMZrL8cjfFNezMEiLycjkINrzSLiFVtZ%2F6siaoy602y5W75Q0KtfLIUWmqqfSmErL9yGQnPNKxj49NGbXzp7%2B2%2BHB%2Bc7fqmSU5A5rm6HWiHe%2FAKTUClNyaqGb2W58je9qMJ0b4YGZuGhO38qTjlWnARKK5vQ5Nj%2BbuTca1tONrTS2mWKvP3qiO4thLm5dQdTZCXbWl4dzmrBUMBA4XHHNFxYQkkWnotR%2BVauQ%2B9lA%2BkVMgkQ6ykhyTcwmXGRLmaStNRgBVwGy3OGYLly17fGfCyDm8MhyqOZ59KRpJxItJ3py%2FnExrsPOohkGFzoFKiYmH3N49pvUQ2NxjSWVPn7fvHreEZSanBuBVNUGay56kg9cQIAIJTvM%2F2G3QKY5ADQsZHMxaGxrWbHQxOGGHhaYOpxzTPJQlsqcWzB0pbxF2yI%2BVmxIwEcsyNTeoTm5WRTHFLPdqTHMPrRs%2FcQvhiXnTa88trCtIC%2FNxw%2BPYp%2FCi0iD0YEzPBbpFpRPRf%2B1rUrr1tV%2F700S1wcXhdkeRKFWZL5opZQhZTeBr9blcktf4MhF%2B5P49J8f6wz5Qhoj68DMBAgE4Ub9D65WHJ4jDhup%2FABjqkAbMHpf2UqR4sYmoS1lD8tH%2FnFI6mICAwrMqrSwoR%2BnCbZy5jWZpNfkc2nESMcte7%2BkkdmSbo49z9XrIsiBTQQnCCPLMME%2FLXwrrnQNg8VDtdI%2B5OG2UwktYsIhk5Yhto%2B4eFsBRfB93Y8WRJylUMojTT0qFrQG0tvggN7PIPnqKW%2BFnzZytBWrZRMT8K9LXoDQbc4UIspXVDgkPjHmPSkuD2qukv&X-Amz-Signature=3880d76c2dff63764bd7bbcf97ef0e2867bd89fb453d281130ab233674414af3&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VEYCRBJ%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T190105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQCXiRDFdXC5SGwRyn%2BasT%2BUOxb6KG28WOvPetmnzJmEwAIhAN5j8OogIz%2FaTuNT1HTtb%2Bgz0oBE4f51OrWiJNgPYBn3KogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz36Y18FBczaQRtrFkq3AN1CGeBl8luIGdNMZeEJRRoGHPmWJB%2BcwZgS7m2Qp9uzuMZrL8cjfFNezMEiLycjkINrzSLiFVtZ%2F6siaoy602y5W75Q0KtfLIUWmqqfSmErL9yGQnPNKxj49NGbXzp7%2B2%2BHB%2Bc7fqmSU5A5rm6HWiHe%2FAKTUClNyaqGb2W58je9qMJ0b4YGZuGhO38qTjlWnARKK5vQ5Nj%2BbuTca1tONrTS2mWKvP3qiO4thLm5dQdTZCXbWl4dzmrBUMBA4XHHNFxYQkkWnotR%2BVauQ%2B9lA%2BkVMgkQ6ykhyTcwmXGRLmaStNRgBVwGy3OGYLly17fGfCyDm8MhyqOZ59KRpJxItJ3py%2FnExrsPOohkGFzoFKiYmH3N49pvUQ2NxjSWVPn7fvHreEZSanBuBVNUGay56kg9cQIAIJTvM%2F2G3QKY5ADQsZHMxaGxrWbHQxOGGHhaYOpxzTPJQlsqcWzB0pbxF2yI%2BVmxIwEcsyNTeoTm5WRTHFLPdqTHMPrRs%2FcQvhiXnTa88trCtIC%2FNxw%2BPYp%2FCi0iD0YEzPBbpFpRPRf%2B1rUrr1tV%2F700S1wcXhdkeRKFWZL5opZQhZTeBr9blcktf4MhF%2B5P49J8f6wz5Qhoj68DMBAgE4Ub9D65WHJ4jDhup%2FABjqkAbMHpf2UqR4sYmoS1lD8tH%2FnFI6mICAwrMqrSwoR%2BnCbZy5jWZpNfkc2nESMcte7%2BkkdmSbo49z9XrIsiBTQQnCCPLMME%2FLXwrrnQNg8VDtdI%2B5OG2UwktYsIhk5Yhto%2B4eFsBRfB93Y8WRJylUMojTT0qFrQG0tvggN7PIPnqKW%2BFnzZytBWrZRMT8K9LXoDQbc4UIspXVDgkPjHmPSkuD2qukv&X-Amz-Signature=334e813a9149aea9f4a5c253c2e86e067504e2140ec2b1754463de53c94d090a&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
