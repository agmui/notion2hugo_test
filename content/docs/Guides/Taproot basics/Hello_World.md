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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7NCB4MA%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T220717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD56ugZoXJyylf4MKMgZBC8YZ1usIuoPfFeno%2BrXI6z9gIhANbB2NKoF8HJNibK03Htoj4yJ4LRtbpXkU89Xuo0ziaEKv8DCDMQABoMNjM3NDIzMTgzODA1IgzoYfH7ovl50INJ1YQq3ANWc5hLfEuahaWtBeqMvs8U1iyFLxs0YTzdmIoWnMtsPcULRc9ZTWTm01asQk%2FXCzuKqU%2BODTYJL2Ss2t71MWhXhmKhsSolgCUD36DkhA7lo9qb%2F05KnNCYsDqZwmIFjCpyvaHQeX%2FF3yXQjzIQ8Y2td5%2Bqg%2Bm2KSqKWetti%2F6YtWgKdwizY55AAm43K6Dx222Lb8ySBWSQ8JCn8DVQw4KkPn7NBfRgCPeCw8dViudwx1%2BUUVM4Jls1hB0QQpTxkvw1ShjHIWGn6VHieiacH9iQw4kC9CQY%2FUb3qeQHIAwY8m97Y9tXCP3%2BLmiTWnhA7aEk18%2FGsdsCyxlT2Ke57kmwmKU3A%2FOXVNzlwasaSRgNb3svwE64OSfVTqIE5eY4XaABto5WSgC4HZ5lw5VdrXz6xaHM76Rsfc3Z03YVAiI5KSi%2B8IsygONSIqvnPZmOrgG9YjZtmc4AtqHNnUn7sYxjaxBmEvyRIl%2BEW7s9OBI%2BZu9Z4LvFUuMYLa4NYlvupczNPQCS%2Bjf%2BNumaIBcodtE1kSFJFJZ6Jml%2BqsB30rWydGam1tsKA3VnSLrwgxQHEF4Tmc19rNCFEZcLspDj7YZZAFPAMiKfQSiHxtB4WcTBVneCQ%2Fjpx8pYXfRrLzCHzqe%2BBjqkActWVumzGNBWk1fDemNHWqMbhtBJaJbBRZABO3RS1RI3dZArJcW%2BINMsMFlZjtEVwyfduQo0iR6p%2B3X0K6qc1UAhJIpzxTHM6w491b89KqVi%2BF11r7F8dCve9X%2BCOsEG4MkUzjvNUhw7dvkLrhmtSj4TcNZeCSdr1AeLzm2B2AT9Ay5FQ0AqL6229NxisQC579FI18uhvxIlf6hRGhAAq33Jqsa%2F&X-Amz-Signature=6333592de280710d3f9a5a225ed66243c249b69769e6e8afce0e970afb7dd98b&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7NCB4MA%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T220717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD56ugZoXJyylf4MKMgZBC8YZ1usIuoPfFeno%2BrXI6z9gIhANbB2NKoF8HJNibK03Htoj4yJ4LRtbpXkU89Xuo0ziaEKv8DCDMQABoMNjM3NDIzMTgzODA1IgzoYfH7ovl50INJ1YQq3ANWc5hLfEuahaWtBeqMvs8U1iyFLxs0YTzdmIoWnMtsPcULRc9ZTWTm01asQk%2FXCzuKqU%2BODTYJL2Ss2t71MWhXhmKhsSolgCUD36DkhA7lo9qb%2F05KnNCYsDqZwmIFjCpyvaHQeX%2FF3yXQjzIQ8Y2td5%2Bqg%2Bm2KSqKWetti%2F6YtWgKdwizY55AAm43K6Dx222Lb8ySBWSQ8JCn8DVQw4KkPn7NBfRgCPeCw8dViudwx1%2BUUVM4Jls1hB0QQpTxkvw1ShjHIWGn6VHieiacH9iQw4kC9CQY%2FUb3qeQHIAwY8m97Y9tXCP3%2BLmiTWnhA7aEk18%2FGsdsCyxlT2Ke57kmwmKU3A%2FOXVNzlwasaSRgNb3svwE64OSfVTqIE5eY4XaABto5WSgC4HZ5lw5VdrXz6xaHM76Rsfc3Z03YVAiI5KSi%2B8IsygONSIqvnPZmOrgG9YjZtmc4AtqHNnUn7sYxjaxBmEvyRIl%2BEW7s9OBI%2BZu9Z4LvFUuMYLa4NYlvupczNPQCS%2Bjf%2BNumaIBcodtE1kSFJFJZ6Jml%2BqsB30rWydGam1tsKA3VnSLrwgxQHEF4Tmc19rNCFEZcLspDj7YZZAFPAMiKfQSiHxtB4WcTBVneCQ%2Fjpx8pYXfRrLzCHzqe%2BBjqkActWVumzGNBWk1fDemNHWqMbhtBJaJbBRZABO3RS1RI3dZArJcW%2BINMsMFlZjtEVwyfduQo0iR6p%2B3X0K6qc1UAhJIpzxTHM6w491b89KqVi%2BF11r7F8dCve9X%2BCOsEG4MkUzjvNUhw7dvkLrhmtSj4TcNZeCSdr1AeLzm2B2AT9Ay5FQ0AqL6229NxisQC579FI18uhvxIlf6hRGhAAq33Jqsa%2F&X-Amz-Signature=efabd02b8633f4eb84a41e9a06d94fd174091e86ff8d375a5bb78906c3613b47&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
