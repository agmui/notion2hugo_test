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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KBF5BQX%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T110721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCk6UrNhey6S%2BDTgs8aJXy6hOswvY5NSP56qpmUjsagBgIgQhxY3rqme%2BHid%2BeZeig9Ed2lH6L%2BRqmoR9vWeEKTYIEqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEzYWrnLzLhrEzpoqCrcAz303o0hZMi96jg35JCZW1t4J19Qzc0Oh1EaJImSaZJ9VomGoLuQpn0tfHgdG%2BGgDjDQA2H42v4KUJ5mhoiTtmjjz0IKV1nS3YO4SLLxeFRmHtXAqm8cxN3XXN4Uqza4wtli6sV269hYfMVJdEtaUOgzqKbIjYalgzDNG%2FmdDJAWVf%2BQN2WdUfD2lChwmW2w7pHRSJm2WCM7S5%2BL%2FdTE2DVjP3eQhtsm6CKDRqFagMRcAtZLLBuCht8KvpWbLu%2BpTM5ekFaQVDZipCJ31gIl7x9O85bSPym%2BJJ3kQ39%2FFZaptusn58EbqJFFq%2Bef1h6oGhIhcthiIxPvDEgLUr9BsEHes5%2BOC4xDLBu4aKva5OJtbb2dIKI1OrbaIMvLcTaldAuprstvFCaMUAzDzWq%2BN5n3%2FD6n5bUq%2BlvoRiO4glU4wjmkG%2F7dZ512SVe%2Fs2CVrRvYCpOPZWX0WzwZcaoSpQoVtQTHk4Oha%2FF4JjseQt4df9qvHyAxBG0X5IuUKyjk6m7sCXNhyIrWClVIAmjpY50pspm9BUyVyCLObviF7Nrr2JXeAZ5NPcjddvN4HuaR5pipTx5wZNcKk8%2FXI8F3gR0D%2B2X2jiNjcpJbSj%2BYYCn0rvjCZ1il0Lao%2BWRPMLf8yMMGOqUBGHQR9pJ7Fm5aF51h90j%2FejuxfAwTdi3uqcZ5ymmDapu2AeDiwrl8c3ldJsk%2BQSpMbHUNuIoBBsCHKYJ4spsnsTPniMlABA%2B%2BxP7qiOVOM6FPmUHyikUtlq9yDjWUuE45nsJw2BaOWT2wwLbGy97AeV8xwqsjDv%2FwXv%2BOpn44qV4QJlxF4%2FSpoFb8zxhIpXbK2UL8e1Lw3lPjG%2FtbzdOumxNAJu5W&X-Amz-Signature=09a2fa907b5a5b716e63f500805ce57aff8b6e638577f65784bace7446a65424&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KBF5BQX%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T110721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCk6UrNhey6S%2BDTgs8aJXy6hOswvY5NSP56qpmUjsagBgIgQhxY3rqme%2BHid%2BeZeig9Ed2lH6L%2BRqmoR9vWeEKTYIEqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEzYWrnLzLhrEzpoqCrcAz303o0hZMi96jg35JCZW1t4J19Qzc0Oh1EaJImSaZJ9VomGoLuQpn0tfHgdG%2BGgDjDQA2H42v4KUJ5mhoiTtmjjz0IKV1nS3YO4SLLxeFRmHtXAqm8cxN3XXN4Uqza4wtli6sV269hYfMVJdEtaUOgzqKbIjYalgzDNG%2FmdDJAWVf%2BQN2WdUfD2lChwmW2w7pHRSJm2WCM7S5%2BL%2FdTE2DVjP3eQhtsm6CKDRqFagMRcAtZLLBuCht8KvpWbLu%2BpTM5ekFaQVDZipCJ31gIl7x9O85bSPym%2BJJ3kQ39%2FFZaptusn58EbqJFFq%2Bef1h6oGhIhcthiIxPvDEgLUr9BsEHes5%2BOC4xDLBu4aKva5OJtbb2dIKI1OrbaIMvLcTaldAuprstvFCaMUAzDzWq%2BN5n3%2FD6n5bUq%2BlvoRiO4glU4wjmkG%2F7dZ512SVe%2Fs2CVrRvYCpOPZWX0WzwZcaoSpQoVtQTHk4Oha%2FF4JjseQt4df9qvHyAxBG0X5IuUKyjk6m7sCXNhyIrWClVIAmjpY50pspm9BUyVyCLObviF7Nrr2JXeAZ5NPcjddvN4HuaR5pipTx5wZNcKk8%2FXI8F3gR0D%2B2X2jiNjcpJbSj%2BYYCn0rvjCZ1il0Lao%2BWRPMLf8yMMGOqUBGHQR9pJ7Fm5aF51h90j%2FejuxfAwTdi3uqcZ5ymmDapu2AeDiwrl8c3ldJsk%2BQSpMbHUNuIoBBsCHKYJ4spsnsTPniMlABA%2B%2BxP7qiOVOM6FPmUHyikUtlq9yDjWUuE45nsJw2BaOWT2wwLbGy97AeV8xwqsjDv%2FwXv%2BOpn44qV4QJlxF4%2FSpoFb8zxhIpXbK2UL8e1Lw3lPjG%2FtbzdOumxNAJu5W&X-Amz-Signature=59edbac455734728a8ef2a59516e786e0bbe89906ad050aaec2e2450bef69478&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
