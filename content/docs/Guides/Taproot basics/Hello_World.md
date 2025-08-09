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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466622L3B25%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T200902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCgcz7yP73U2jiZ4QAYiwu%2BTSlQ576sqPngvQw3DLQc1QIgZtwtvdIeXJWi8QCl5L1FJNpnxbhtAlVW5kYf%2FzVduIoqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDICaEoVnnw5sTsXx0yrcA%2FU8s11uXo2NsJA8T8eZpedfww3Nl6A%2BAP7Uk7LxZ7RsxOjBJadnxBt3Hjf820guAr1JDYR8REgDY6E7b3FKQVnCq91xQ9gKOtwA3Rk68PBStCywMwUN4qPsKFvkkGXDxz1ssLgYqyYF%2FKxbDCzG4AbHufZ0JsFIOGoOPTcAecU2mHQ2LHQhNiHgtFo%2BuAZv%2BjiBPQegZgjL%2F4CAIRFe688GPhkg1tyR8GJZM2WokJMncFOTbDnRdpBPrT%2B5NVyQ6iwPtl%2F%2Fmiw4YU8Eg%2B5lYSqcAnrodwSZAmn7Nxohnfib8557tSZctYvzL8FkQe%2FviNvBO7FYNKjncrnhaYrCwkXvOJ4uT93jxYHp0FSPqfu2oy8D4v%2BRULiT0jdWlyaxSbLVj9i12tk93KgUgt%2FqwL%2FpzSs%2FhrlCKuVHXMhGaRbJu7zk5jtBHilnP6uDpbuDK141TFH7P5GWOHfGIH0zBt%2BViADPCD9cKOGPecbkMHetj0M2BAo6JDjoD6q2zY7nA8YitHCVDim5M8TqBXwEY%2Fy5pPbZINLr90D365aIEgATYH92KTcn7RAs%2FuU7o6Kj%2BJT5NL7K5Q9xwMvUDdodaiXuJPxAUI%2BuPSd2OmA4w70pG0tZQAGXPghUiieVMJXD3sQGOqUBQGzUakxrQWIjk%2FIwQUqtOaPjrJ5pg5reF3vdrdMhx%2FHQRy83BvjxSieIqR%2BTnMvivkbnfTBy1hrhX0oTauO6qqcAVNun9eyvjOR6s5aBLLwu37d53o9InnUtt%2Ffkxa76dcA9O9iCy%2FQuS0sN0lhOj6xccSCppPfwpTSnT933DiIvuKGEZDddWGup19L41Eyl9VwuG35a6enmZJWPbGIRpj9zmSCj&X-Amz-Signature=6dfc9cf793b7c585645cc39b6e7d6dd6232cbfb01ffa79ee39441e57408ff3e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466622L3B25%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T200902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCgcz7yP73U2jiZ4QAYiwu%2BTSlQ576sqPngvQw3DLQc1QIgZtwtvdIeXJWi8QCl5L1FJNpnxbhtAlVW5kYf%2FzVduIoqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDICaEoVnnw5sTsXx0yrcA%2FU8s11uXo2NsJA8T8eZpedfww3Nl6A%2BAP7Uk7LxZ7RsxOjBJadnxBt3Hjf820guAr1JDYR8REgDY6E7b3FKQVnCq91xQ9gKOtwA3Rk68PBStCywMwUN4qPsKFvkkGXDxz1ssLgYqyYF%2FKxbDCzG4AbHufZ0JsFIOGoOPTcAecU2mHQ2LHQhNiHgtFo%2BuAZv%2BjiBPQegZgjL%2F4CAIRFe688GPhkg1tyR8GJZM2WokJMncFOTbDnRdpBPrT%2B5NVyQ6iwPtl%2F%2Fmiw4YU8Eg%2B5lYSqcAnrodwSZAmn7Nxohnfib8557tSZctYvzL8FkQe%2FviNvBO7FYNKjncrnhaYrCwkXvOJ4uT93jxYHp0FSPqfu2oy8D4v%2BRULiT0jdWlyaxSbLVj9i12tk93KgUgt%2FqwL%2FpzSs%2FhrlCKuVHXMhGaRbJu7zk5jtBHilnP6uDpbuDK141TFH7P5GWOHfGIH0zBt%2BViADPCD9cKOGPecbkMHetj0M2BAo6JDjoD6q2zY7nA8YitHCVDim5M8TqBXwEY%2Fy5pPbZINLr90D365aIEgATYH92KTcn7RAs%2FuU7o6Kj%2BJT5NL7K5Q9xwMvUDdodaiXuJPxAUI%2BuPSd2OmA4w70pG0tZQAGXPghUiieVMJXD3sQGOqUBQGzUakxrQWIjk%2FIwQUqtOaPjrJ5pg5reF3vdrdMhx%2FHQRy83BvjxSieIqR%2BTnMvivkbnfTBy1hrhX0oTauO6qqcAVNun9eyvjOR6s5aBLLwu37d53o9InnUtt%2Ffkxa76dcA9O9iCy%2FQuS0sN0lhOj6xccSCppPfwpTSnT933DiIvuKGEZDddWGup19L41Eyl9VwuG35a6enmZJWPbGIRpj9zmSCj&X-Amz-Signature=5eef5eafad9569b71db8ab223547ae884eecce73adbdfa460dd269f2e0debde6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
