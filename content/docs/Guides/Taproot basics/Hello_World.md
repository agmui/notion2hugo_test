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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNZY6FSO%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T081107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCID6PFDnHJ7AYNR%2FFdH9mQb%2Fy2cAjfcwvqMdTSmD8aWarAiEAieY0xegtjzPLODkKgBqjXhbaMpltysuNUya1jyoNb50qiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP7bNZs1%2BahuVDdMoircAwPF152iBpnp3Idlu3KwGaWiXHsozGudWjulKWOjy6WofQXt2cLI293T9YWXLSjNiNFTktg7iEbPMEtkN%2BT3q94XxlLYr5jjC%2BGSzBUREYZ41F%2FZ8N8IZKxGoGGCsa1QasNVJQJOdBYIIMEMawMcHkHWi3d4OImW0zZRUduhdihe2aOfGAh61M8bp3d2KvkYkWRtvWDeeviRcbRHRa%2B2HRLgXdfJ3csLumSejZTfbn%2FOtZx7l3DVeHSBxk0VNahJoT9BVx7eHGUiJ8NV4BAaSAIQlaW9NJ3scbP%2Bmeobm%2Fk4Fh85Qn%2BDYQGw%2Fl65wreE%2BV3IUjBxZ5Z0bXdMJN4eHwNbiRMJLVkYLmqiucHtJpe7jwJztn570sIb7xWElOox7Nyjm75HLPjIhHY4jMDyPhCpw8CWPasnUUuoKlS5WSWE%2Bkaq7u6dH4lahgIO57EevKtUVCJmRsnkYY9fE6hdDx1vlT5pDqd7Nm4o53Y92yOMCOq1bkESM8IOkWw7gXxkhWUlXVDQkQxurZpkk57VwQcWOYWZXfbOtkH8nCf5meIuVJwOQlNtDzYiTMQv2b6a%2F4JZXrldNkjaRFywUycc%2FHqvbgLUUNNqy0XceGkVWvVzZDUBCKDiKVEHxWt9MLfRv74GOqUBsFt4egfUolUXDIEytMa8GL4UnBZ7lpxTNEJEe6ztrAshBquf%2BsONAR0kY%2FEq%2FfwEnMSGqc2S7ptU%2F%2Fxqj7A9uFpOs9HjyDtorwjFSqc8iSPXZczFL3YMIW83hWIBY%2BolSNgtN6kOs2BOkLOKtndVnwuF8gmFkV49MOkgEWmalayQat1KkcLyc3JSvDz26AvcPK%2FXq148Rx96%2FRJJI%2Fe0sv2JC7ab&X-Amz-Signature=9a2a861d46df9820202ae6bad9961069f3abd70c6f1bf58bd78b7493981b73ef&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNZY6FSO%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T081107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCID6PFDnHJ7AYNR%2FFdH9mQb%2Fy2cAjfcwvqMdTSmD8aWarAiEAieY0xegtjzPLODkKgBqjXhbaMpltysuNUya1jyoNb50qiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP7bNZs1%2BahuVDdMoircAwPF152iBpnp3Idlu3KwGaWiXHsozGudWjulKWOjy6WofQXt2cLI293T9YWXLSjNiNFTktg7iEbPMEtkN%2BT3q94XxlLYr5jjC%2BGSzBUREYZ41F%2FZ8N8IZKxGoGGCsa1QasNVJQJOdBYIIMEMawMcHkHWi3d4OImW0zZRUduhdihe2aOfGAh61M8bp3d2KvkYkWRtvWDeeviRcbRHRa%2B2HRLgXdfJ3csLumSejZTfbn%2FOtZx7l3DVeHSBxk0VNahJoT9BVx7eHGUiJ8NV4BAaSAIQlaW9NJ3scbP%2Bmeobm%2Fk4Fh85Qn%2BDYQGw%2Fl65wreE%2BV3IUjBxZ5Z0bXdMJN4eHwNbiRMJLVkYLmqiucHtJpe7jwJztn570sIb7xWElOox7Nyjm75HLPjIhHY4jMDyPhCpw8CWPasnUUuoKlS5WSWE%2Bkaq7u6dH4lahgIO57EevKtUVCJmRsnkYY9fE6hdDx1vlT5pDqd7Nm4o53Y92yOMCOq1bkESM8IOkWw7gXxkhWUlXVDQkQxurZpkk57VwQcWOYWZXfbOtkH8nCf5meIuVJwOQlNtDzYiTMQv2b6a%2F4JZXrldNkjaRFywUycc%2FHqvbgLUUNNqy0XceGkVWvVzZDUBCKDiKVEHxWt9MLfRv74GOqUBsFt4egfUolUXDIEytMa8GL4UnBZ7lpxTNEJEe6ztrAshBquf%2BsONAR0kY%2FEq%2FfwEnMSGqc2S7ptU%2F%2Fxqj7A9uFpOs9HjyDtorwjFSqc8iSPXZczFL3YMIW83hWIBY%2BolSNgtN6kOs2BOkLOKtndVnwuF8gmFkV49MOkgEWmalayQat1KkcLyc3JSvDz26AvcPK%2FXq148Rx96%2FRJJI%2Fe0sv2JC7ab&X-Amz-Signature=e81a62df567de35b72d0e48e269ee29716728e3fe6d8f35de8ea0dfefbd1a6f5&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
