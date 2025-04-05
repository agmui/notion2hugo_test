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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XVGPBDK%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T180925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDzKbsJI%2FPU8eLaJhxxkntkvhinCxesjSlnV0UI%2BYsrrgIhAIB%2F5IQYkcE9w%2Faj6ZYRWkYe0zevNWi0JU07V309ruZgKv8DCDIQABoMNjM3NDIzMTgzODA1IgxI6X0zk%2F9F76fHhDIq3AMpHoymUsg5Jig%2FBzhdoRRtwItTPXbVSybiYFbQM3wuc%2FAxdeDqZ6NGzgHQ8fzaDD1cNb4Wz1csuduOLQTB9NhrgXN8cXLFpU5faKyV0xng58NNJagdCe5NYx5P%2FcJmfnjuKweMs0vfye8XkmRVQHESw1FuVgCEyw0M5SgHc7WzwrXqQY3JWVKWsAwU1A7DK969Ypeck79XbUx9Yv2%2Buf8Icg1NX4FMLsSol7EUjkZ1DWCF8qWu9DPrp0V0Xj%2BWp8sSkZKtA%2FTP5hHBUq1YiFSvH8mLHG8rIdt9ClYk2dRpl35EH1uKgMSEQvLRrEjGYcqdb3BuJ%2BONf1P9w3hgKD7j3wfobLLwSYl6V0in%2BRn%2BFkMzDuxxQnvzKU5q5ck%2BnPF79KYob2E90NTDB1RU%2BNVQ2RnBXOLA9boTJCI5QQa%2FdtZaTod5WSWkisTIq9Jp8pv1wFRMgYlEpQH5y0g3B%2BBp0W9lj8xyj3zB%2BAHz%2FHKVIioGa1BHzGsTwJHo49pSmrJUDLXFUyH9WlCi48Yh3VZ9UzjQOsbfY01%2Fh33LMRZZr9t%2BvnL0tcxH5CVkkcACaoWYVa2GjUdP9DSNsARIMpaPL1A5KvoucFwSDt%2BGDlTg80dwrczWihZu2T47LjDcx8W%2FBjqkAYyp5BTvVHjhC5ke4xVBDDnj8SNcmOIW%2FvAkhS8ajsSTx%2B8lOqgR8J0rQRFiDnJpw09Q5nKsj0KZBKe5%2F2wMEPyboHloNfAQvLhEafuyCdZQ9MWPF4r%2BOVt%2FYO4hY%2BFd1Gz64hWLbdiBwhzqXPNtUOrvDDyZwlPhXQG1s8PINYweW5W4hU3%2BPt%2FdJ33TH5omtHAfV9kWdwiQoakoBQ850OcLSqw5&X-Amz-Signature=06810cd42d57d9618667a0970eb64e9341798dd49fb3b19beb6d79b851357353&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XVGPBDK%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T180925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDzKbsJI%2FPU8eLaJhxxkntkvhinCxesjSlnV0UI%2BYsrrgIhAIB%2F5IQYkcE9w%2Faj6ZYRWkYe0zevNWi0JU07V309ruZgKv8DCDIQABoMNjM3NDIzMTgzODA1IgxI6X0zk%2F9F76fHhDIq3AMpHoymUsg5Jig%2FBzhdoRRtwItTPXbVSybiYFbQM3wuc%2FAxdeDqZ6NGzgHQ8fzaDD1cNb4Wz1csuduOLQTB9NhrgXN8cXLFpU5faKyV0xng58NNJagdCe5NYx5P%2FcJmfnjuKweMs0vfye8XkmRVQHESw1FuVgCEyw0M5SgHc7WzwrXqQY3JWVKWsAwU1A7DK969Ypeck79XbUx9Yv2%2Buf8Icg1NX4FMLsSol7EUjkZ1DWCF8qWu9DPrp0V0Xj%2BWp8sSkZKtA%2FTP5hHBUq1YiFSvH8mLHG8rIdt9ClYk2dRpl35EH1uKgMSEQvLRrEjGYcqdb3BuJ%2BONf1P9w3hgKD7j3wfobLLwSYl6V0in%2BRn%2BFkMzDuxxQnvzKU5q5ck%2BnPF79KYob2E90NTDB1RU%2BNVQ2RnBXOLA9boTJCI5QQa%2FdtZaTod5WSWkisTIq9Jp8pv1wFRMgYlEpQH5y0g3B%2BBp0W9lj8xyj3zB%2BAHz%2FHKVIioGa1BHzGsTwJHo49pSmrJUDLXFUyH9WlCi48Yh3VZ9UzjQOsbfY01%2Fh33LMRZZr9t%2BvnL0tcxH5CVkkcACaoWYVa2GjUdP9DSNsARIMpaPL1A5KvoucFwSDt%2BGDlTg80dwrczWihZu2T47LjDcx8W%2FBjqkAYyp5BTvVHjhC5ke4xVBDDnj8SNcmOIW%2FvAkhS8ajsSTx%2B8lOqgR8J0rQRFiDnJpw09Q5nKsj0KZBKe5%2F2wMEPyboHloNfAQvLhEafuyCdZQ9MWPF4r%2BOVt%2FYO4hY%2BFd1Gz64hWLbdiBwhzqXPNtUOrvDDyZwlPhXQG1s8PINYweW5W4hU3%2BPt%2FdJ33TH5omtHAfV9kWdwiQoakoBQ850OcLSqw5&X-Amz-Signature=12d14b9748de74e57614aaa8c205e1f372d375678ce8f80cc03f35061f818fbc&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
