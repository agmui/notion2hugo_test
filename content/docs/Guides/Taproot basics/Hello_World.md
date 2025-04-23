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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCQAEG6I%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T110722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIH8U4OTrLQ%2Bc04n5RywFUbtmkLsUf022eNZrWDm8yaT1AiBfnKXZ%2FOk%2BAXVY7ZNZZZ7fE1WdLKgGi1dAojVpW%2FxpWyqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8hyx%2FBSYKNAYTjKdKtwD%2B8OIZB7iS4ZC19NxbIjGPXR9OLis9CaovCPQGEfZuK%2BQnfgtDcYy7QY9Wu6fMYl1H%2BLkUO0UtSrFC1lI9j45YGSIIMGzWR5OAtlbfsyO7gZFmXEVr%2FKtENsvyttLF3jsHNc4bKEEWnI2at5XWw2tMLFKileS%2Foiu7hFYio8h1Uq881dQbmhr5DM7D%2FSUvdtNAHcFhJvwGCTflrHQeUjAjbRTBYmC%2BHlVhGqn%2FTKHfAO%2BpQL3PoMnpb6JjHWZpTKYY2HezkVQtqZmXnJhpdf%2BOZrX4v2Si0gVT9XUHhM1HTczehoZr7%2Bdlp6fIty%2BAUFc1%2BMi1%2FHzau14bgIDYh5S7xSFOzDl711OxWOCIYBMr3eYtBK1ShycD5UhWqtcdtycdEajSNQiMHEK6Wqn3EC8iVn7sIw4Qk%2B4OzDDuKC7zvzt%2BR955RLJ8HyIi9Wk8MksD3%2Bxu2oFsirS%2Bo1cYeQcpqpWXMeR00fUzDuakurMSsKNTeDWcS9FTKzKXKG14henR1Iowxu8ngO5l%2BudoVdM%2Bkx3Lr7FReBfPGYwTb9%2B82mPO4CMOVTYRDSdIGmfj8t%2F12XvswBAGpWQnbmNrpwPANya6QIsVVuKG72kouuJ7vm6TA0j2S%2BGzdh6gTIw9YOjwAY6pgFjF46zBmPNmyjs%2FHlaajoWmbKHn2e6EYhssabzGtDc9jppgPQl9L2QPbBzTIxBcdx0Mwmgw89aKuhuWrQ6CwhAL4uELEDiFWSzM%2B3r72sUmHgpcNKqwnjgZkiZfISoa70RFQkcnZ7rYxm6c2%2B2%2FhD072gXruur1xCtdVCld2hX4dWfGcPFY9n3X1Hz6d2JpU%2BFbjvPzMDNsBMNHE8IlrK3l9Q95bsW&X-Amz-Signature=00fadcbdf90fc0b80b538ddc2a668ca9dda858c4663a11bea115596b89958106&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCQAEG6I%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T110722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIH8U4OTrLQ%2Bc04n5RywFUbtmkLsUf022eNZrWDm8yaT1AiBfnKXZ%2FOk%2BAXVY7ZNZZZ7fE1WdLKgGi1dAojVpW%2FxpWyqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8hyx%2FBSYKNAYTjKdKtwD%2B8OIZB7iS4ZC19NxbIjGPXR9OLis9CaovCPQGEfZuK%2BQnfgtDcYy7QY9Wu6fMYl1H%2BLkUO0UtSrFC1lI9j45YGSIIMGzWR5OAtlbfsyO7gZFmXEVr%2FKtENsvyttLF3jsHNc4bKEEWnI2at5XWw2tMLFKileS%2Foiu7hFYio8h1Uq881dQbmhr5DM7D%2FSUvdtNAHcFhJvwGCTflrHQeUjAjbRTBYmC%2BHlVhGqn%2FTKHfAO%2BpQL3PoMnpb6JjHWZpTKYY2HezkVQtqZmXnJhpdf%2BOZrX4v2Si0gVT9XUHhM1HTczehoZr7%2Bdlp6fIty%2BAUFc1%2BMi1%2FHzau14bgIDYh5S7xSFOzDl711OxWOCIYBMr3eYtBK1ShycD5UhWqtcdtycdEajSNQiMHEK6Wqn3EC8iVn7sIw4Qk%2B4OzDDuKC7zvzt%2BR955RLJ8HyIi9Wk8MksD3%2Bxu2oFsirS%2Bo1cYeQcpqpWXMeR00fUzDuakurMSsKNTeDWcS9FTKzKXKG14henR1Iowxu8ngO5l%2BudoVdM%2Bkx3Lr7FReBfPGYwTb9%2B82mPO4CMOVTYRDSdIGmfj8t%2F12XvswBAGpWQnbmNrpwPANya6QIsVVuKG72kouuJ7vm6TA0j2S%2BGzdh6gTIw9YOjwAY6pgFjF46zBmPNmyjs%2FHlaajoWmbKHn2e6EYhssabzGtDc9jppgPQl9L2QPbBzTIxBcdx0Mwmgw89aKuhuWrQ6CwhAL4uELEDiFWSzM%2B3r72sUmHgpcNKqwnjgZkiZfISoa70RFQkcnZ7rYxm6c2%2B2%2FhD072gXruur1xCtdVCld2hX4dWfGcPFY9n3X1Hz6d2JpU%2BFbjvPzMDNsBMNHE8IlrK3l9Q95bsW&X-Amz-Signature=0eea545ee6208fa03b4b19ecaa2a4e83962fb609f7ca346ec8380dc7d2be5b5d&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
