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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUZBL4F4%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T003747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAtNWcajgS7zp5sDktZPO2HHC3NqiXfUScqCZBlMTT45AiEA6H88Rusr1ZlTSkCrhpqoAcH28jKkOLoeoOf%2BOmYqYdMq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDMTD50oGs4%2FHt1pYsSrcA%2B0SAf08T2dGqd%2B9mT8LcQ1qBK7QAagBUJuydiT%2BfZUU8QhtlfEWinjJYegIinL4Gort%2FD9goVK4shuhHw0Umbt807lwYJDvBx1QiyP17SLYGt89itelzk%2F4j9Vro4L8HUUd3ufNzjrOkB6e0ncwQLRq74kIsy1jT2Z8mp%2Brh4EAu4l09qEZcmoeDvFwPzmv2Jya8cl6UPyCw%2BfLefva%2B%2BY03u2bZIdUpISeoZ7iQV8Idtk2lUkPz4awFRDVAGpPpPlNbZSvsD8%2BF8I5usVh08hInoX5YmDLG348bGUBHg5L5zj3uKrjtLkXENssBWSqSJmuSYG1pHRdV54XA8zId5dBDxnzDg6KzvzBWW%2BWn7Ztdx4nLIG7RMvjBjxhD%2Bc84HeOeHvYMnXEqomVY42RT7hdc6LVhln1Ji92G2HNFOpV5dq8SKRcBEDqVgO2NQ33ZBYrAqWbQmDus4MN9%2F%2FtNxoD6P1TmCh4X3QtMU75Ohw23N9UZN4m6uPCmuoLlZ013eLBOOoBaXa4NPPL%2F9U0m83ksKS25yLRgygioz7eXolyCTzPt4%2FeM4rIZctrO%2BxxEqriqPxXXpi79KDQV2pK03t6aM%2BKGYe7%2FawXOINtZ4qqxcAbKTUJhvR5oUVCMLrx7r0GOqUBwTF1ZvXh5YTBwASHRjH2FZH67j9euZrgj9z8zdhJxMZIEIHyTc8Aq%2BBwfbj18U3k57Sk035kB9AxLNoEJzZ2v%2F%2BKsCvFeeZspbzExt3DsPRt%2FhmDpxX3qh3N6VRmm%2B71%2FcFGtXoCt2%2FGj1l9ehVF8ZQ4L47RlKqOi0Q9sLod26lcg%2BoID0gd64rwLb4TZHi%2BLNgYELCj1WvgU1abhs03JhhNTU8W&X-Amz-Signature=b3d37c31a235eaed8dbe98fa51fe04ca4a73a46414967b31b9dbdf8e18657cfb&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUZBL4F4%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T003747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAtNWcajgS7zp5sDktZPO2HHC3NqiXfUScqCZBlMTT45AiEA6H88Rusr1ZlTSkCrhpqoAcH28jKkOLoeoOf%2BOmYqYdMq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDMTD50oGs4%2FHt1pYsSrcA%2B0SAf08T2dGqd%2B9mT8LcQ1qBK7QAagBUJuydiT%2BfZUU8QhtlfEWinjJYegIinL4Gort%2FD9goVK4shuhHw0Umbt807lwYJDvBx1QiyP17SLYGt89itelzk%2F4j9Vro4L8HUUd3ufNzjrOkB6e0ncwQLRq74kIsy1jT2Z8mp%2Brh4EAu4l09qEZcmoeDvFwPzmv2Jya8cl6UPyCw%2BfLefva%2B%2BY03u2bZIdUpISeoZ7iQV8Idtk2lUkPz4awFRDVAGpPpPlNbZSvsD8%2BF8I5usVh08hInoX5YmDLG348bGUBHg5L5zj3uKrjtLkXENssBWSqSJmuSYG1pHRdV54XA8zId5dBDxnzDg6KzvzBWW%2BWn7Ztdx4nLIG7RMvjBjxhD%2Bc84HeOeHvYMnXEqomVY42RT7hdc6LVhln1Ji92G2HNFOpV5dq8SKRcBEDqVgO2NQ33ZBYrAqWbQmDus4MN9%2F%2FtNxoD6P1TmCh4X3QtMU75Ohw23N9UZN4m6uPCmuoLlZ013eLBOOoBaXa4NPPL%2F9U0m83ksKS25yLRgygioz7eXolyCTzPt4%2FeM4rIZctrO%2BxxEqriqPxXXpi79KDQV2pK03t6aM%2BKGYe7%2FawXOINtZ4qqxcAbKTUJhvR5oUVCMLrx7r0GOqUBwTF1ZvXh5YTBwASHRjH2FZH67j9euZrgj9z8zdhJxMZIEIHyTc8Aq%2BBwfbj18U3k57Sk035kB9AxLNoEJzZ2v%2F%2BKsCvFeeZspbzExt3DsPRt%2FhmDpxX3qh3N6VRmm%2B71%2FcFGtXoCt2%2FGj1l9ehVF8ZQ4L47RlKqOi0Q9sLod26lcg%2BoID0gd64rwLb4TZHi%2BLNgYELCj1WvgU1abhs03JhhNTU8W&X-Amz-Signature=4694b0c1daef52c775018f7f1fc62919748d3b3b66534f9427459ceb9d0353d9&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
