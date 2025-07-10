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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWS3XNRT%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T061411Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCr1TZ95tr5kNBYGZse7o1WoWWzoxK5Bf3AhpGwknI4PQIgIi6VBlEJv8wPCcs%2FMsF3LXNViHgC9Y3Ux%2FITDYkZwYoqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOPCZGdLzL%2FPyrBQSircAzLXiiafLRcFnl6JNX7jpEWYaTPa5K5v62HiNfXDQlHylRR713km%2BizVlTNBhaGWnvRBNWyKrY3qB11jMeJWhOi10KB5wTlzBNqXyg%2Bz97fABXhJGF9HJ9F6hqVCV%2FD7rc7w54jxmdUZYVrvVsPaJKpuHyLZJ0WhvhuhJQ9WsJr0dDJvp%2FHN8H1HOMV31%2FFyqfrQDKMpnZa4Owz%2BtfEVyLMNjDR56QZ3KfT1QIc0O6lDEBAk%2Bfq%2BJAwitSHfQOE1Yj148WlaPGG6X7kIgc4Ee4P%2BiOrTR01WmCngDIqmnv%2FIql%2BuddzbE7SlMFBr1Df5g0%2BZlt2kOK8P8%2BSGGJ5DuF74MqmWG4kq8K64PxSX3WkdLrd1HUyaGS0Wdqx1WVgbTKIWj2XuHhFUdZQ0Zu55VJx5fQMysXnBJaYvfeSc7LdIoUrAYn4i2hp2%2FI1hZ0PJcPQkApDOzAqTqjX9zE9rWwsVoKlTexrl2o35z%2BkJ%2BTuYcwcmzmVIgiOE2XxL8MxTb7g2jiZTaPHUPHnugREtRlJZDdu40YWwAowTshFqPQOqx30Ld4LXhCwrrmhsy67oT%2Fvmq9B4B0I8SImJ98DFDHwvfoKoxIcRBKjBQV6mckSfLKeUzhzLj1dJtGbvMIqpvcMGOqUBBUC9Bw3LPzvFhDuo01imwzRZlgg%2FgdBTHLF4OEBauMAEA%2B4ja9ALc9ieF6dkIxJV%2FXmJ2Hd%2BLfSFd2RMuHDfeHMHuUVPTUhbn01QHIeXEYIKPduWZCmmlOkrFR971lEW4w6l%2FK3MkQl13E%2B%2FRwjdk%2B3xuTYCsMVV9VRztadTvhmpOMMn%2BJ7KyGU53tTe3RHMI%2Bkj5M9eK6gMpo962naEkffHE28U&X-Amz-Signature=08afd2454061bf18f92fcde8f3ce4bcb7d0412973515d9f5bdbbd81992716046&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWS3XNRT%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T061411Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCr1TZ95tr5kNBYGZse7o1WoWWzoxK5Bf3AhpGwknI4PQIgIi6VBlEJv8wPCcs%2FMsF3LXNViHgC9Y3Ux%2FITDYkZwYoqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOPCZGdLzL%2FPyrBQSircAzLXiiafLRcFnl6JNX7jpEWYaTPa5K5v62HiNfXDQlHylRR713km%2BizVlTNBhaGWnvRBNWyKrY3qB11jMeJWhOi10KB5wTlzBNqXyg%2Bz97fABXhJGF9HJ9F6hqVCV%2FD7rc7w54jxmdUZYVrvVsPaJKpuHyLZJ0WhvhuhJQ9WsJr0dDJvp%2FHN8H1HOMV31%2FFyqfrQDKMpnZa4Owz%2BtfEVyLMNjDR56QZ3KfT1QIc0O6lDEBAk%2Bfq%2BJAwitSHfQOE1Yj148WlaPGG6X7kIgc4Ee4P%2BiOrTR01WmCngDIqmnv%2FIql%2BuddzbE7SlMFBr1Df5g0%2BZlt2kOK8P8%2BSGGJ5DuF74MqmWG4kq8K64PxSX3WkdLrd1HUyaGS0Wdqx1WVgbTKIWj2XuHhFUdZQ0Zu55VJx5fQMysXnBJaYvfeSc7LdIoUrAYn4i2hp2%2FI1hZ0PJcPQkApDOzAqTqjX9zE9rWwsVoKlTexrl2o35z%2BkJ%2BTuYcwcmzmVIgiOE2XxL8MxTb7g2jiZTaPHUPHnugREtRlJZDdu40YWwAowTshFqPQOqx30Ld4LXhCwrrmhsy67oT%2Fvmq9B4B0I8SImJ98DFDHwvfoKoxIcRBKjBQV6mckSfLKeUzhzLj1dJtGbvMIqpvcMGOqUBBUC9Bw3LPzvFhDuo01imwzRZlgg%2FgdBTHLF4OEBauMAEA%2B4ja9ALc9ieF6dkIxJV%2FXmJ2Hd%2BLfSFd2RMuHDfeHMHuUVPTUhbn01QHIeXEYIKPduWZCmmlOkrFR971lEW4w6l%2FK3MkQl13E%2B%2FRwjdk%2B3xuTYCsMVV9VRztadTvhmpOMMn%2BJ7KyGU53tTe3RHMI%2Bkj5M9eK6gMpo962naEkffHE28U&X-Amz-Signature=6d2da312048297fcd1cfbbc55d32fc21c51e591769a0c09a9febd1cbe305955f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
