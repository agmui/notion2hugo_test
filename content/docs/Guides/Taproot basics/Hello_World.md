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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7NMPQRE%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T230714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIFhvjJCd1i75tVReJoWi%2BuTIc%2Bj95V6iQkierNcN1W6sAiEA0Y2RH2JqA4JswUBduP%2BUjUmJ3Zp%2B8NJ8uu1N0aqWbkEq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDLvSTUuyyU9H0o9m2ircAybYITsYTM8ttUqAsJ3W6LXM2KvDcFR8WJwyLZ5vcOBnI6n1pspx8Ye0sWJgsyE8jRPVMhHNuZyQOaeBmTJioKmRlvqUA9rr7a20hpfmlv%2Bfy9AwJGsd7d1UuH%2BGpUr4Ynsiu1NCWfJkYooqcKlNUoU2ECYewaVnLj94eGJdZgQTt3TI5AyNYAugyBt4APYQxZJNtYFT5dISEuupkNMXd0yAze9e9A9YEeWlDowWCVxJDWSlDkxC5vytoML%2FsTb4tdNuOlBUWT21EuuQXGIXtfIvu%2F6BhkmmNqnxIQBqkgYpgusJCZyX9%2FexpPafh6Rz2mytO7ie7%2FyuBjunAwCs1XuUr95SPZMnkguGSZSiMKhTIVG90mJrMZVDuWfYlOjNd1qHtB8MAawL%2Bs7IcKnGgi2Uz1%2FCgtJjs8AR5cx7iRc2GoVAfUhalkAqVUeUzL6IhIvlsi2cUelqLXQLfkoOFsnHc%2Bj4pONNsk73asIUKNlJMrruqzT8PSD4a3FlG7xIs7I84kYTgcKEoWDf%2FYOnMnOaJ%2Bg1FK9yCXa3md3KjrEZGx6c0Sl10Xmn%2FMDUKsONDCKcXgpI%2BY1eGef29Yh2zSulRtdnZFImnSmhJwlqhI7hlpk%2BFrN3sEf%2FiJyLMIOVhb0GOqUBlatwG200xrrFK%2BKp3dRSNaUiinV0Gr2YL60rI95xrI8hL0Fb6z1AhE4jwmt3vuKlf6lq7oaDc5gMOuTFOd7Tma3Vv1%2FTD5kR4N55tYNaRio8iNnb28NuJMkVzqm4%2BKp6UsA%2BP%2FqzjpaABwM%2BSZkdYHNa%2Frw8rV0s9FbVMAg%2F88qvVvo1RmQBLLQ2%2BYanDZPXQcdtJKhwsB%2Fy066llnhFHWc5QXnM&X-Amz-Signature=60226f447909bac6c18e3521f93a78cc47cf678084b00840881d98a518727599&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7NMPQRE%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T230714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIFhvjJCd1i75tVReJoWi%2BuTIc%2Bj95V6iQkierNcN1W6sAiEA0Y2RH2JqA4JswUBduP%2BUjUmJ3Zp%2B8NJ8uu1N0aqWbkEq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDLvSTUuyyU9H0o9m2ircAybYITsYTM8ttUqAsJ3W6LXM2KvDcFR8WJwyLZ5vcOBnI6n1pspx8Ye0sWJgsyE8jRPVMhHNuZyQOaeBmTJioKmRlvqUA9rr7a20hpfmlv%2Bfy9AwJGsd7d1UuH%2BGpUr4Ynsiu1NCWfJkYooqcKlNUoU2ECYewaVnLj94eGJdZgQTt3TI5AyNYAugyBt4APYQxZJNtYFT5dISEuupkNMXd0yAze9e9A9YEeWlDowWCVxJDWSlDkxC5vytoML%2FsTb4tdNuOlBUWT21EuuQXGIXtfIvu%2F6BhkmmNqnxIQBqkgYpgusJCZyX9%2FexpPafh6Rz2mytO7ie7%2FyuBjunAwCs1XuUr95SPZMnkguGSZSiMKhTIVG90mJrMZVDuWfYlOjNd1qHtB8MAawL%2Bs7IcKnGgi2Uz1%2FCgtJjs8AR5cx7iRc2GoVAfUhalkAqVUeUzL6IhIvlsi2cUelqLXQLfkoOFsnHc%2Bj4pONNsk73asIUKNlJMrruqzT8PSD4a3FlG7xIs7I84kYTgcKEoWDf%2FYOnMnOaJ%2Bg1FK9yCXa3md3KjrEZGx6c0Sl10Xmn%2FMDUKsONDCKcXgpI%2BY1eGef29Yh2zSulRtdnZFImnSmhJwlqhI7hlpk%2BFrN3sEf%2FiJyLMIOVhb0GOqUBlatwG200xrrFK%2BKp3dRSNaUiinV0Gr2YL60rI95xrI8hL0Fb6z1AhE4jwmt3vuKlf6lq7oaDc5gMOuTFOd7Tma3Vv1%2FTD5kR4N55tYNaRio8iNnb28NuJMkVzqm4%2BKp6UsA%2BP%2FqzjpaABwM%2BSZkdYHNa%2Frw8rV0s9FbVMAg%2F88qvVvo1RmQBLLQ2%2BYanDZPXQcdtJKhwsB%2Fy066llnhFHWc5QXnM&X-Amz-Signature=4496aa34b6f82fe2a28114fc25901e57b7574294980d72874a75b9a5e9630576&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
