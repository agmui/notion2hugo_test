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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5KV7PYV%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T210238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJGMEQCIG6I%2FLoPZdYbsZiRUVs1u2%2FIQbzAtlhx0Y%2FADFELQdF4AiBKMP6Xr6Moqmg%2BMq1m0aec70CC1Vvh7SCwvEpjMMbjGCr%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIMiFKK8hkfkNjudNfeKtwDnPBeYZ9Lwr%2F%2FZAAiodVl8yWVQcdK7gI8mTFB9aXGmn%2BaS3uik9hcwzjBMMPBEmUQc7MD6UpnkzUG4xrGcq3khP0JXzyAxHIdFsxv19MM9poZJVOemCDZFVgEsh977mXqdxMOr4kU%2FjqREt%2FrH9O1w3%2Fc%2F4HeeFyei8UW5qk8hL0iyJIw3DpqJmj2F%2FhVKFRhN9MqPshgDY7AE2%2Fx9MyokGfOJjXyy4bEu%2FFANllMR6YLoIAgfeXJnyMrd3qxbkxLzU5gIh7pPbZpF5h7%2BRldMzrr4bHSA7bbUJmArTOHDtbr7HNRnduShM3Ij0kK5kOklKyufnfBgN2%2BQJyYFp1y5s3kgK3qPKqHZlPGnmHqWByCNsSgLMuubOsH2AP0G2Q2OyEmIdVlGlBr66bw3ph14fQ7HIQzPZw5HeJAahjpQOCjnZD1TeMbql0DKMWNAK1iYf80BHF6bju3ki8FdCHSwm%2BUOYNZObsUZxVRCdHiMeNmW1DpfbF6pdGTovVBuDjvVgI%2BqiieRmDRJS6kJPNuyTlfLfQrK4o4sPRIcXNDz8vUw%2F46aiwBWLxck0UYOfkS5Zp71G%2FUW6uYtSao%2BbnSlTnV9UmQtl2dmvGfRI2RphDMhwHIS63JSF8Ltj4wy6bOvQY6pgFN1KhqeZwfvWTh4DVoPGrF9rv6W3ZA1JZNb6jn%2B74ShY9WR8SJWrZLB0wBkp5UYKC7m%2FjX6emdY6pRMfU8bPmsV2kHMp3%2FbLiaR93Z%2F97FikH53EtSZcn%2F3d0fBLRgGYY11C6I3iOP%2Fval3x9xDfuuE9j36xLtCscoc7m9XTUyM66wmNc%2BuHKKyzy4Y5%2BwwtEh39UU5BTBZw6HLKckTsFVVLMAkvUb&X-Amz-Signature=18dae815546865b7101e8826ea188ce76ff85cd25b37c3e2755a9d3c093db730&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5KV7PYV%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T210238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJGMEQCIG6I%2FLoPZdYbsZiRUVs1u2%2FIQbzAtlhx0Y%2FADFELQdF4AiBKMP6Xr6Moqmg%2BMq1m0aec70CC1Vvh7SCwvEpjMMbjGCr%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIMiFKK8hkfkNjudNfeKtwDnPBeYZ9Lwr%2F%2FZAAiodVl8yWVQcdK7gI8mTFB9aXGmn%2BaS3uik9hcwzjBMMPBEmUQc7MD6UpnkzUG4xrGcq3khP0JXzyAxHIdFsxv19MM9poZJVOemCDZFVgEsh977mXqdxMOr4kU%2FjqREt%2FrH9O1w3%2Fc%2F4HeeFyei8UW5qk8hL0iyJIw3DpqJmj2F%2FhVKFRhN9MqPshgDY7AE2%2Fx9MyokGfOJjXyy4bEu%2FFANllMR6YLoIAgfeXJnyMrd3qxbkxLzU5gIh7pPbZpF5h7%2BRldMzrr4bHSA7bbUJmArTOHDtbr7HNRnduShM3Ij0kK5kOklKyufnfBgN2%2BQJyYFp1y5s3kgK3qPKqHZlPGnmHqWByCNsSgLMuubOsH2AP0G2Q2OyEmIdVlGlBr66bw3ph14fQ7HIQzPZw5HeJAahjpQOCjnZD1TeMbql0DKMWNAK1iYf80BHF6bju3ki8FdCHSwm%2BUOYNZObsUZxVRCdHiMeNmW1DpfbF6pdGTovVBuDjvVgI%2BqiieRmDRJS6kJPNuyTlfLfQrK4o4sPRIcXNDz8vUw%2F46aiwBWLxck0UYOfkS5Zp71G%2FUW6uYtSao%2BbnSlTnV9UmQtl2dmvGfRI2RphDMhwHIS63JSF8Ltj4wy6bOvQY6pgFN1KhqeZwfvWTh4DVoPGrF9rv6W3ZA1JZNb6jn%2B74ShY9WR8SJWrZLB0wBkp5UYKC7m%2FjX6emdY6pRMfU8bPmsV2kHMp3%2FbLiaR93Z%2F97FikH53EtSZcn%2F3d0fBLRgGYY11C6I3iOP%2Fval3x9xDfuuE9j36xLtCscoc7m9XTUyM66wmNc%2BuHKKyzy4Y5%2BwwtEh39UU5BTBZw6HLKckTsFVVLMAkvUb&X-Amz-Signature=6672be3a81b1079b6339960b5221e4a31469d5ba7f67ba2a19d5ee8679747118&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
