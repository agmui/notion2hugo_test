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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZOXYP25%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T020926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIEXEtYTtLKWxsytqWsQvzz6o%2FQ9ZHsZwiU6BckX0iGwdAiEAhr4i%2F%2BwBNu7Gol%2B2jwrxTTG6JJdH2SEQqBQmC4H0UiAqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL4CIuwFkEx99tXU5CrcA1Yk2rbKOuQtiL%2Fs0488C2b3PkouyRxCKJq6WKnYUonoQNT06y6fb%2F4qWbFdYk6uEZH%2B6Moup939ZUIvCtrEQUmUBg6y4RelNAyHAi1iZvRziMWrq45YOYMUcRQQxOWwOkgY5nQA%2BKFLEVS7XyGYgUAHp9NhDD%2B30fjf5UERoZos%2FjQ1QnGL0M0B29NY5mAfpxZBf6x1g5KpzqX2x0ZzcwYP%2BRnQ2EPn9fI6Aas5qC8NRb7PPMvj6gPilD2DBY85Ckq%2Bv2h8v36Etb%2B%2Fu2PwD0z%2BoVSqQLy3gGT9OXBsgitc%2Fx2LKWI1PpnnnoG6kLhdJk1EoYG6tGDQ3%2F18doPbqaG8%2F5FRpeCitreBG3nnAKoqH7zO1Jh%2B1dK%2Fi08IRBb6Sug60nBjqkLCydxFuO4oyFUkzzPph5NJRbOXmI5NtggLIl7TwtDUKB3%2BtmUwfEkMtJokTMZ%2B5EJ8LDxGBK8DEXFbM33RMJ%2FWEB2kH%2BCblH3Y0YuRUlx00dpHKzUzL8JnmRisMCT7K1t%2BIi6VsW1d%2Fam5v7Hx6Bw6Jj7rEMJ%2FUzPGfl9%2BdhtiVWBTYQDAJw26JHuwKbuyAgDW7xcIN%2Ffd1nm8a3%2BBrexznNrQ8QjKhdmT0AiiqIS%2BtETL3SpDMMXo1L0GOqUB1h9FOHMAuKdi0N8ltoT8sovBXhVSLyEXqkTgFuSA3KTX7JzEyTzts1uy2g26Ijc3xRG9nleaZDHWDX9pcapyVYx5Q71DRD0H4a2lYkreBxrC75e79EsS80VLZPjAlZyi4xjSuSJ8GSNxvCN1j3gXSjZKwkZR0jGRn2Jstf2gtgx5QjYRoV33Y66eb8WhfSXdeoDIQyQrd9z1DALZoQpdJEf4NAeA&X-Amz-Signature=9f3b26df494f3bb492665420466f569b2d601a10a2e6965a719e126db70bf3de&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZOXYP25%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T020926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIEXEtYTtLKWxsytqWsQvzz6o%2FQ9ZHsZwiU6BckX0iGwdAiEAhr4i%2F%2BwBNu7Gol%2B2jwrxTTG6JJdH2SEQqBQmC4H0UiAqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL4CIuwFkEx99tXU5CrcA1Yk2rbKOuQtiL%2Fs0488C2b3PkouyRxCKJq6WKnYUonoQNT06y6fb%2F4qWbFdYk6uEZH%2B6Moup939ZUIvCtrEQUmUBg6y4RelNAyHAi1iZvRziMWrq45YOYMUcRQQxOWwOkgY5nQA%2BKFLEVS7XyGYgUAHp9NhDD%2B30fjf5UERoZos%2FjQ1QnGL0M0B29NY5mAfpxZBf6x1g5KpzqX2x0ZzcwYP%2BRnQ2EPn9fI6Aas5qC8NRb7PPMvj6gPilD2DBY85Ckq%2Bv2h8v36Etb%2B%2Fu2PwD0z%2BoVSqQLy3gGT9OXBsgitc%2Fx2LKWI1PpnnnoG6kLhdJk1EoYG6tGDQ3%2F18doPbqaG8%2F5FRpeCitreBG3nnAKoqH7zO1Jh%2B1dK%2Fi08IRBb6Sug60nBjqkLCydxFuO4oyFUkzzPph5NJRbOXmI5NtggLIl7TwtDUKB3%2BtmUwfEkMtJokTMZ%2B5EJ8LDxGBK8DEXFbM33RMJ%2FWEB2kH%2BCblH3Y0YuRUlx00dpHKzUzL8JnmRisMCT7K1t%2BIi6VsW1d%2Fam5v7Hx6Bw6Jj7rEMJ%2FUzPGfl9%2BdhtiVWBTYQDAJw26JHuwKbuyAgDW7xcIN%2Ffd1nm8a3%2BBrexznNrQ8QjKhdmT0AiiqIS%2BtETL3SpDMMXo1L0GOqUB1h9FOHMAuKdi0N8ltoT8sovBXhVSLyEXqkTgFuSA3KTX7JzEyTzts1uy2g26Ijc3xRG9nleaZDHWDX9pcapyVYx5Q71DRD0H4a2lYkreBxrC75e79EsS80VLZPjAlZyi4xjSuSJ8GSNxvCN1j3gXSjZKwkZR0jGRn2Jstf2gtgx5QjYRoV33Y66eb8WhfSXdeoDIQyQrd9z1DALZoQpdJEf4NAeA&X-Amz-Signature=2e85b418857f2a6c18231515d79b10056279cb74c7fd00a3db0c1488161fdf10&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
