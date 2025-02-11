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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RPZGXVT%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T081034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDjm7X27wT5xFdAV2RJG57NGppizNlWtcVsKstbl4CUzAIhAPkc%2FTgrL2pMqypKqwQWshL9Mp5wrBOUgFpRpWKFPtSYKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzUYpCSQ39bAGE0y2oq3AOdvLBCk%2FbG6FcfQgF0prOl11cboaPOHc9LA%2FPHp43NyAuyFd3flSTDKdkLcI7sP0i9YBkFNdcB963cOIBlCK7p0XCc5NX6z23MPDfln1%2FMXtjguqg%2F6K%2FYb3NBMDWLWW5VcUt%2FMHN1F9rI9FS2ifxMEokCKCo7pa67a0UcQRJiVO8C7KsxXhR2eMMPQszRHkYiYKPnf8ITzjd7gnSwQRpABgjLnLoUd7PDIJcZHxZ4puzKjG9WNqo60yYlALP6LUEO%2BMazCY45x2PtCunq1dZ%2FmKKLmGZFyOwkugeZ%2BvKL2l5Juqo%2BK7XJoOjsbkp%2F7%2FRzR0PgQdaGeWQFldtYbYMlohLqbYH3%2FFjh0DLSX51%2FaoNcPiZHo%2BwruUo0cOMup7aalidp6v45%2FKHV2GuihvBI5fTcu9RqyS%2FPsAbV6TI%2BQBM9X2A6NpODddMhpgZHzyGGskIl8xlzBdemzBY5NdgoDk2aTJghhDJjqoOa3jCgZEZQmzDynnYPXVghxOxt4V3u8ZwWVrTSQRKs3Mw2vy2nMoFhwhooIZDreHDceZCdQBXyr1xcH4yiUgr0FNxIqtzhtM4jtw07FVpu6gjtqVca1ffShh2sMdFH%2F69iqTyZXvh5VtvqoyLO6cZbpzCvgKy9BjqkAWq%2FJBErQVxaU4S366Q7PRk2HN8n2tXbX%2FIlt1O3DNfRUei6Q3DlqlcaiSizcYw7MguB9WgXGdmr7U4z07IOlBgaVElP05fNGwG%2Fdjn%2FZClIC2i14eD50oh0lYRFmKjKlB8Bpnqi163q9UjMzLfaYgQM7pKxk2KTs3%2BAm6PDpKA9l2dOTcx5jq58OHqtSdPj5drhv9w8YgvhCAvBneaVCLluoUKK&X-Amz-Signature=1153974bb4ea4c67fa5c283a27a6a56c2910d34f6718f293687d5cccdda984b9&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RPZGXVT%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T081034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDjm7X27wT5xFdAV2RJG57NGppizNlWtcVsKstbl4CUzAIhAPkc%2FTgrL2pMqypKqwQWshL9Mp5wrBOUgFpRpWKFPtSYKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzUYpCSQ39bAGE0y2oq3AOdvLBCk%2FbG6FcfQgF0prOl11cboaPOHc9LA%2FPHp43NyAuyFd3flSTDKdkLcI7sP0i9YBkFNdcB963cOIBlCK7p0XCc5NX6z23MPDfln1%2FMXtjguqg%2F6K%2FYb3NBMDWLWW5VcUt%2FMHN1F9rI9FS2ifxMEokCKCo7pa67a0UcQRJiVO8C7KsxXhR2eMMPQszRHkYiYKPnf8ITzjd7gnSwQRpABgjLnLoUd7PDIJcZHxZ4puzKjG9WNqo60yYlALP6LUEO%2BMazCY45x2PtCunq1dZ%2FmKKLmGZFyOwkugeZ%2BvKL2l5Juqo%2BK7XJoOjsbkp%2F7%2FRzR0PgQdaGeWQFldtYbYMlohLqbYH3%2FFjh0DLSX51%2FaoNcPiZHo%2BwruUo0cOMup7aalidp6v45%2FKHV2GuihvBI5fTcu9RqyS%2FPsAbV6TI%2BQBM9X2A6NpODddMhpgZHzyGGskIl8xlzBdemzBY5NdgoDk2aTJghhDJjqoOa3jCgZEZQmzDynnYPXVghxOxt4V3u8ZwWVrTSQRKs3Mw2vy2nMoFhwhooIZDreHDceZCdQBXyr1xcH4yiUgr0FNxIqtzhtM4jtw07FVpu6gjtqVca1ffShh2sMdFH%2F69iqTyZXvh5VtvqoyLO6cZbpzCvgKy9BjqkAWq%2FJBErQVxaU4S366Q7PRk2HN8n2tXbX%2FIlt1O3DNfRUei6Q3DlqlcaiSizcYw7MguB9WgXGdmr7U4z07IOlBgaVElP05fNGwG%2Fdjn%2FZClIC2i14eD50oh0lYRFmKjKlB8Bpnqi163q9UjMzLfaYgQM7pKxk2KTs3%2BAm6PDpKA9l2dOTcx5jq58OHqtSdPj5drhv9w8YgvhCAvBneaVCLluoUKK&X-Amz-Signature=0356b2e6f6a496e73438bd928115d4423f68ce7b9182e74116842ceb0027834c&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
