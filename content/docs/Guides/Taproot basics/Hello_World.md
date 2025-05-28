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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664F5YL4UG%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T190704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBc7aYjrdog2hZXM5hZg%2F6Vtv026JJ5IdrAo1vehx%2Bv8AiEA4TApAWOtBzkLUwSu5pFdFEE4Km06jKQwWsaHAKjWLtMq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDFfXRAkdnwkLymcueSrcA0io8OXD%2FM3GYIVHOIxmOyGFc1tH6sqiL88mNJVbA3G%2FPDZimlKlag0xfR2aU096ttM1yLgcS0ZcXarCEcXimJKhqZRGldpsarQ%2BZuVImWT7Gn%2BTAeTTvPXDYcIdnxijb%2Bsj%2BDVnSH9wk8gUBhlzbX8zaZFDVE%2BFA9fHVyAUu5T%2FTtqsA6F1Uownd07%2BlIOsQF7lGy3aiMswe7fc5jbR6rQ69rtHCg7pCwMuqUcNn%2BcT4IAN%2B4hUDM%2BkR2KioNBl%2BtCZVl0TZRD9qTxIIhz73cZvN3x7etqgoav9LyQkMFOpMvpwyMxiWj19TZiCIYcds5GwnxIj57HlDHtxXg307ysgnu1j7KptB1kwsFfUrbczdNjiou53QYsyLtD1kTiHxfNOi4FtfClQHwFyhUEf4fS%2B6yEPD5ruvMTZL9Z%2FG3RzWOMmCYQFSqBHA8k17jBI5zwOVl%2FsaBbFHLj9o2fVQz0UOE6k2ScE77V88yF1YFq1L%2FG2w1IhTfUQvcTcikm7IhfY5Jy5AStQSq6Vl0luB3X%2B7La16s97UPJReLC4nEa3vk7T0a%2B6QWLGNgqzRjlfh19G77TDsE0tc4Qml%2B0fI%2BO%2F0aq%2BMNRZ6hF5SdPRIYoeihZD9pcX62tCC3JNMP333MEGOqUBaricb2CwOwPIzRFfNzGOIbLeKZMqJZ2DzWusWTJ8U8kIk1tBYb8iWqahXqjp2oqsOJ%2BtWXRSWDPvQnutlp8XknKzC3hjLcrvoFM%2FIYFdZ%2F%2B9QcYGVC7Ue8ZJtJzALXAqDOPD1oi2kBjh%2BW2wz43BnCycnn%2B3xZgI1RzEDzM4tfV2BQ5XvTDbZfpK7CZYFn88yVQU%2BQN%2BxN29x6BQPSP%2B3Q0Bjxa7&X-Amz-Signature=5459475d902744a6140548912a80083b3cc94d023f75b9c20c9c23000dfdaf7e&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664F5YL4UG%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T190704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBc7aYjrdog2hZXM5hZg%2F6Vtv026JJ5IdrAo1vehx%2Bv8AiEA4TApAWOtBzkLUwSu5pFdFEE4Km06jKQwWsaHAKjWLtMq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDFfXRAkdnwkLymcueSrcA0io8OXD%2FM3GYIVHOIxmOyGFc1tH6sqiL88mNJVbA3G%2FPDZimlKlag0xfR2aU096ttM1yLgcS0ZcXarCEcXimJKhqZRGldpsarQ%2BZuVImWT7Gn%2BTAeTTvPXDYcIdnxijb%2Bsj%2BDVnSH9wk8gUBhlzbX8zaZFDVE%2BFA9fHVyAUu5T%2FTtqsA6F1Uownd07%2BlIOsQF7lGy3aiMswe7fc5jbR6rQ69rtHCg7pCwMuqUcNn%2BcT4IAN%2B4hUDM%2BkR2KioNBl%2BtCZVl0TZRD9qTxIIhz73cZvN3x7etqgoav9LyQkMFOpMvpwyMxiWj19TZiCIYcds5GwnxIj57HlDHtxXg307ysgnu1j7KptB1kwsFfUrbczdNjiou53QYsyLtD1kTiHxfNOi4FtfClQHwFyhUEf4fS%2B6yEPD5ruvMTZL9Z%2FG3RzWOMmCYQFSqBHA8k17jBI5zwOVl%2FsaBbFHLj9o2fVQz0UOE6k2ScE77V88yF1YFq1L%2FG2w1IhTfUQvcTcikm7IhfY5Jy5AStQSq6Vl0luB3X%2B7La16s97UPJReLC4nEa3vk7T0a%2B6QWLGNgqzRjlfh19G77TDsE0tc4Qml%2B0fI%2BO%2F0aq%2BMNRZ6hF5SdPRIYoeihZD9pcX62tCC3JNMP333MEGOqUBaricb2CwOwPIzRFfNzGOIbLeKZMqJZ2DzWusWTJ8U8kIk1tBYb8iWqahXqjp2oqsOJ%2BtWXRSWDPvQnutlp8XknKzC3hjLcrvoFM%2FIYFdZ%2F%2B9QcYGVC7Ue8ZJtJzALXAqDOPD1oi2kBjh%2BW2wz43BnCycnn%2B3xZgI1RzEDzM4tfV2BQ5XvTDbZfpK7CZYFn88yVQU%2BQN%2BxN29x6BQPSP%2B3Q0Bjxa7&X-Amz-Signature=a42611f9fd695a865d85c810ebcd1d7e6c581d4dae6e45903f5812a28c7582c9&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
