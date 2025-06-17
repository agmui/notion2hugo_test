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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AOIKGJE%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T121655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCiBRA18xz%2FR15AqQlc7hkwPBNJtD0V1gn0nqozBkS0YgIgFkOVGw7I9d7DOTuZNQCqewgKjBWXrpSD1L8HTXEZsgcq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDFaJN%2FDIrgjU6hm9WCrcAzHEALpzkF7nsaqdZGeA1GIrTnKCOFbVwF4Jqg5ilzX9yPYTFnjdf2vlCTAv0HBFhmXDZ5lFNEOnM0lLcNH0vr9izMRj6U1DAENnbWFZBEksmUmlhkUZcTQJi1SNtdYXmtMJwCYCrkCR0NVex2ZQMl1bdG11ip%2FGUVpkxFK6w52YsPKYr9G2bMS7kWfDh35XRBx8zNeTnIk4Snr4aGQDN%2FlbJRdkB2UkDsW9IEt7czNDnPcIJD0Dafzn3t4a0XI1Ro1xLDjxW4rCAESg%2BZgLeU6JewW8ZPU93gngn0fQe1K7ZGAOg5IOE%2FPbC7u4v%2FhL%2FvkhjfYVBc5KKFQ%2Fydn3oPKvmJP47f3yqwSYqmCmWK9HNRpnyW15zhwy0HjDLf%2B5c11YfJrb%2BA7l9x%2BD1k72gQKzVMaoSNJSkiWkoCNEEcFwZ5CGeFrNcq1trgQ01iERCutfSBcJg%2FKZhoESxY%2BS5zNoqq%2FtZPOD1mjs%2BWtz099n3or6xrfs0AlB5tmUqjkkSvsyop7AUfAqTvXjOdMndOFJ4UqBgomWZUJI3cGkFJA4l3wjylyXmFVv9fCJ8ZKfIEnlaUwWZzSpl%2FB5k1Hw3ULYsCq2NKeaT2oB9BUX0rESR4xuZhRXW%2FnsoFZCMIOnxcIGOqUBY3I%2FLtcspC4e6vLzYCGcOl9Vaf7%2F33uKMxzB8ujaunmZLeSnRR3HWWh%2FQTvQDLQ5aW97p%2B5yOp5IsfSD1hOXB3yqvBQ9edRunUgwlu9LrNFFlMEozMe5w%2Bk6UQlAW3I3sY00LIg%2F76fPEOiiZjnz2pJgnc9LRmzabCm9ZzffsgKlETp1yPTH9KwbeRNyA2qIqjjkRMKQBz%2Fvcew5hBPLiDXHWfGg&X-Amz-Signature=95588a14a7245e3058050e8c36818c4b70ec0116c07f63cae411e746e2814bbb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AOIKGJE%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T121655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCiBRA18xz%2FR15AqQlc7hkwPBNJtD0V1gn0nqozBkS0YgIgFkOVGw7I9d7DOTuZNQCqewgKjBWXrpSD1L8HTXEZsgcq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDFaJN%2FDIrgjU6hm9WCrcAzHEALpzkF7nsaqdZGeA1GIrTnKCOFbVwF4Jqg5ilzX9yPYTFnjdf2vlCTAv0HBFhmXDZ5lFNEOnM0lLcNH0vr9izMRj6U1DAENnbWFZBEksmUmlhkUZcTQJi1SNtdYXmtMJwCYCrkCR0NVex2ZQMl1bdG11ip%2FGUVpkxFK6w52YsPKYr9G2bMS7kWfDh35XRBx8zNeTnIk4Snr4aGQDN%2FlbJRdkB2UkDsW9IEt7czNDnPcIJD0Dafzn3t4a0XI1Ro1xLDjxW4rCAESg%2BZgLeU6JewW8ZPU93gngn0fQe1K7ZGAOg5IOE%2FPbC7u4v%2FhL%2FvkhjfYVBc5KKFQ%2Fydn3oPKvmJP47f3yqwSYqmCmWK9HNRpnyW15zhwy0HjDLf%2B5c11YfJrb%2BA7l9x%2BD1k72gQKzVMaoSNJSkiWkoCNEEcFwZ5CGeFrNcq1trgQ01iERCutfSBcJg%2FKZhoESxY%2BS5zNoqq%2FtZPOD1mjs%2BWtz099n3or6xrfs0AlB5tmUqjkkSvsyop7AUfAqTvXjOdMndOFJ4UqBgomWZUJI3cGkFJA4l3wjylyXmFVv9fCJ8ZKfIEnlaUwWZzSpl%2FB5k1Hw3ULYsCq2NKeaT2oB9BUX0rESR4xuZhRXW%2FnsoFZCMIOnxcIGOqUBY3I%2FLtcspC4e6vLzYCGcOl9Vaf7%2F33uKMxzB8ujaunmZLeSnRR3HWWh%2FQTvQDLQ5aW97p%2B5yOp5IsfSD1hOXB3yqvBQ9edRunUgwlu9LrNFFlMEozMe5w%2Bk6UQlAW3I3sY00LIg%2F76fPEOiiZjnz2pJgnc9LRmzabCm9ZzffsgKlETp1yPTH9KwbeRNyA2qIqjjkRMKQBz%2Fvcew5hBPLiDXHWfGg&X-Amz-Signature=074f269cd7f5cd21ae915900a58d03a4e2aa7e9bf66dc91050187199519a56c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
