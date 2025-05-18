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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWP7Z4B2%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T081010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3to2Dnc3L9mGOke4EyI3uJx%2FrKrbjDrwRd%2FduLkvMggIhAP2YocoZcSwPchxzYdeHT9jc46OU9XbMJNqecGKRQtWCKv8DCG8QABoMNjM3NDIzMTgzODA1Igz0a0V7alku6B3SCIoq3APicwpDdoPOKANAplTTXjqBFnkWBXvcAhnkKcsA05Pk2T4rKBVdSRJlwna4McGfdxFzDM4PAoV3lgnmZwhjqoacKYCk6pm581BGGQaWO527ox3hXw%2Buo1lELToPcPxFZasX7Hpb6qWzmLCqtzFn1SM%2BC%2FmlUjMYr7VQCEpqgZ9XLDGVJY1Hr%2BvkHjO4GgNpG3bvWcSd9ltcGsclpyCSfV5y2FU%2FQSDTCRBgNc90S8M%2FtZpAH5H4ODvISVYauRIBgKwaa3tvOxrICNDCqKK4VZL53RDDnUjAZUaisxS%2Bo6sAvsJfBu04tn%2FP6OvXeVtrlMz%2FKBYsH8%2B7IaY8clwsqJFCsjze6R38STYQrH%2FB9CgPzyiCLc6YKWsTSRRJ0k6ZgolN7Ezii8V4tmZIKLD9FD2A0E5Yz2oXaFxdx18O5rnw9LvBWL6PUAgkH%2BncSgQkaqS%2Fk8YGTFOMqIGC54qjUEBK5YNSDlT7hK5GcepJmhpMoQsrg6MCk9B9Qjef0IOiEJHqlisPEQlR%2FKbg7tHen1j3R9wcr7D365xLm4KPTpIdURGHhFDTfCwtd7%2FyPtH22UN09a9bHwJGrRzZBsLZBhyqPKFxS%2F6mA%2FBgF7nFU%2FQ1ljFr4iID3pAGSa8OvTCi%2BKXBBjqkAf5IUcVUHJJhwJq6L6GiQWbhA2BuN2nVEh5olzIY%2FMFmsqnSFiGBCSvzcuLiNk%2B8mM%2FkfgrTvP%2FsfOGgxmLwNOUnRZTH9Vb%2FAqrXsE%2BvoaMjdvVP%2FImqa9F1Y4mA17bEjqqhGT6Ni7uBPAni70Y9lu4BP70eb6rmemkq51T97Cdhl%2BTgOvrJivc58e0co7%2B%2BhHOZmBEXLVaG0TiGUHxJyKHM08pm&X-Amz-Signature=2ca55e074e1de283af602987dbabbc5592741ff29356e32b525e9e2ab0125d4e&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWP7Z4B2%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T081010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3to2Dnc3L9mGOke4EyI3uJx%2FrKrbjDrwRd%2FduLkvMggIhAP2YocoZcSwPchxzYdeHT9jc46OU9XbMJNqecGKRQtWCKv8DCG8QABoMNjM3NDIzMTgzODA1Igz0a0V7alku6B3SCIoq3APicwpDdoPOKANAplTTXjqBFnkWBXvcAhnkKcsA05Pk2T4rKBVdSRJlwna4McGfdxFzDM4PAoV3lgnmZwhjqoacKYCk6pm581BGGQaWO527ox3hXw%2Buo1lELToPcPxFZasX7Hpb6qWzmLCqtzFn1SM%2BC%2FmlUjMYr7VQCEpqgZ9XLDGVJY1Hr%2BvkHjO4GgNpG3bvWcSd9ltcGsclpyCSfV5y2FU%2FQSDTCRBgNc90S8M%2FtZpAH5H4ODvISVYauRIBgKwaa3tvOxrICNDCqKK4VZL53RDDnUjAZUaisxS%2Bo6sAvsJfBu04tn%2FP6OvXeVtrlMz%2FKBYsH8%2B7IaY8clwsqJFCsjze6R38STYQrH%2FB9CgPzyiCLc6YKWsTSRRJ0k6ZgolN7Ezii8V4tmZIKLD9FD2A0E5Yz2oXaFxdx18O5rnw9LvBWL6PUAgkH%2BncSgQkaqS%2Fk8YGTFOMqIGC54qjUEBK5YNSDlT7hK5GcepJmhpMoQsrg6MCk9B9Qjef0IOiEJHqlisPEQlR%2FKbg7tHen1j3R9wcr7D365xLm4KPTpIdURGHhFDTfCwtd7%2FyPtH22UN09a9bHwJGrRzZBsLZBhyqPKFxS%2F6mA%2FBgF7nFU%2FQ1ljFr4iID3pAGSa8OvTCi%2BKXBBjqkAf5IUcVUHJJhwJq6L6GiQWbhA2BuN2nVEh5olzIY%2FMFmsqnSFiGBCSvzcuLiNk%2B8mM%2FkfgrTvP%2FsfOGgxmLwNOUnRZTH9Vb%2FAqrXsE%2BvoaMjdvVP%2FImqa9F1Y4mA17bEjqqhGT6Ni7uBPAni70Y9lu4BP70eb6rmemkq51T97Cdhl%2BTgOvrJivc58e0co7%2B%2BhHOZmBEXLVaG0TiGUHxJyKHM08pm&X-Amz-Signature=3c89108e9bfc4582a9533a054783be82caa5ecdef42435b592ace64edef3b0ed&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
