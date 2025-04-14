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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XAJPKGIO%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T033059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCmvFlLsCcWVSLRvbG08mbe37w4gLiVvNz2ZarpOl4xEgIgRK%2BoDR06159FSuTpDNkPE0E9pxOdklBL30AOqDz3lr0qiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPTnJ20O4i7XAh3UbyrcA%2FD7h%2Fx4lNoe%2FANcImalLUJqPT5XbMXJta97GxFjWN87VsAIR6DGEIKtfJo4npQpeToMfdgY%2BNG2aDvzy%2Bu6l2fk98CkVE6eKAgAlLCUjcNhySvvSndSSMojrPXQxBSup4R1nksO%2BldcF0i1uipzG75ERwVBYcwqj5R0F9PBIYPzy0nKknW84CiercgnWDcy2f0K1r5YtwSriXkamGXZ90waSmPI7kg%2FGgVQeSsknDQ1b%2FkIlLpTrUFfU7ClhxLDkM5rlqc8auNX4XmnJ%2FSRwQtsGIV%2BUtFvB%2Bw8%2FQGu1LzaCdswl1G6tHoztnkKJKFSpc%2BOILL1uH3xMqBbYn15OR2DGwJYG8dv4P8sGm%2Fq9FsU8G3I0307UBU22C9FXpMs4X09%2FetdamT8CWwydSePdrp%2BMob%2F7WEJbFtA2LM5Dx9t2loyUzZKoGEf3rrMY5X8Lv%2F44HkoHCIA6u7UGSymjW9zd9h%2Ffvt5COZ3ar374ir%2Fl8kEhKHOYnvuN18xrQnt0PTkzByojbFgoL1VkIkiC%2BXHiBlY07b9ksiYdjVeLWX7430IVJ3A0C%2FO2lq1ILYO2wCPLjvxBVddhYJHu%2Bmb5XH6cYmVAeK%2F%2FR1yXVx25vXzLp7xOfE37syYrNXqMNm58b8GOqUBk9U3EBHFSSwotyUuvo53RlNeCnl08dFJqjxRxJXjqP7A3wC0M17Y93YhRR4xU3EVJdB6Dbk14NAqAYG2A46GyYotrNF6uuNCslkMCdiS6cWO7%2FU%2FlxGgeLCUgVPi%2Buon3i4VJCSuWZj87nvihHZ5rQiM9ivy8EonqF2CD%2BUzH9ixoPvTDsTqJ3QTNMrAHFCzyV3XvteiY6um4XCpI%2FxQtZYPXdDq&X-Amz-Signature=defadc5c0f4b26b744968fe4f7ce5693a3d902c3ca19767521af42d05f5508a2&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XAJPKGIO%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T033059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCmvFlLsCcWVSLRvbG08mbe37w4gLiVvNz2ZarpOl4xEgIgRK%2BoDR06159FSuTpDNkPE0E9pxOdklBL30AOqDz3lr0qiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPTnJ20O4i7XAh3UbyrcA%2FD7h%2Fx4lNoe%2FANcImalLUJqPT5XbMXJta97GxFjWN87VsAIR6DGEIKtfJo4npQpeToMfdgY%2BNG2aDvzy%2Bu6l2fk98CkVE6eKAgAlLCUjcNhySvvSndSSMojrPXQxBSup4R1nksO%2BldcF0i1uipzG75ERwVBYcwqj5R0F9PBIYPzy0nKknW84CiercgnWDcy2f0K1r5YtwSriXkamGXZ90waSmPI7kg%2FGgVQeSsknDQ1b%2FkIlLpTrUFfU7ClhxLDkM5rlqc8auNX4XmnJ%2FSRwQtsGIV%2BUtFvB%2Bw8%2FQGu1LzaCdswl1G6tHoztnkKJKFSpc%2BOILL1uH3xMqBbYn15OR2DGwJYG8dv4P8sGm%2Fq9FsU8G3I0307UBU22C9FXpMs4X09%2FetdamT8CWwydSePdrp%2BMob%2F7WEJbFtA2LM5Dx9t2loyUzZKoGEf3rrMY5X8Lv%2F44HkoHCIA6u7UGSymjW9zd9h%2Ffvt5COZ3ar374ir%2Fl8kEhKHOYnvuN18xrQnt0PTkzByojbFgoL1VkIkiC%2BXHiBlY07b9ksiYdjVeLWX7430IVJ3A0C%2FO2lq1ILYO2wCPLjvxBVddhYJHu%2Bmb5XH6cYmVAeK%2F%2FR1yXVx25vXzLp7xOfE37syYrNXqMNm58b8GOqUBk9U3EBHFSSwotyUuvo53RlNeCnl08dFJqjxRxJXjqP7A3wC0M17Y93YhRR4xU3EVJdB6Dbk14NAqAYG2A46GyYotrNF6uuNCslkMCdiS6cWO7%2FU%2FlxGgeLCUgVPi%2Buon3i4VJCSuWZj87nvihHZ5rQiM9ivy8EonqF2CD%2BUzH9ixoPvTDsTqJ3QTNMrAHFCzyV3XvteiY6um4XCpI%2FxQtZYPXdDq&X-Amz-Signature=cf3078fc3e93b35126b12a3f7cdfd41078b93b002ad7c83f06796ecabeef5cac&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
