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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667N3WDNUT%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T181214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC545sBmHFdOZRyNpykGjuO%2B%2BPreBnOchCIIF6eIcbwvQIgc%2BzferqfDh8PumgvpjfSZG5s776laIZ8y8G1nz3kA7Qq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDMqqxUtGfsIJ04mWnircA56erSP3gS6enJYhexvRr5YDn6HNmRfUYosxKZpChinsFtklNnYBb5xcbhjX49Wt5XWqrJFM5OeZJLw7DPFmxqqMjfUokbGKI%2B1LPYMi1D2QDZ%2B%2F7Hy57mrZFrnB%2Bk41vrg%2Bic9iR5XE6Kop5J%2BDoMnZUc09XC1LFXj6JMYjL%2F2CNl%2FHR%2BA6WcQpkhDTusLOVoSi1pX59Efiwd6%2B%2Bpf5ZtHG15ZRB5s2xaa93WIByhoF92evE1hSWwcCLVK%2F1ni8jKGugEWpVMuZ0BZGkeYKB97RcFKEHI4GtcAe87t4ccoZHAdI5WcC1M%2BvHOQqrDyV%2BIP8fR%2FNmaozBt103yKg9ZVqY8CwryKZBYBc6VRR30AGXOnM%2Feqxl%2F5MkvUlL%2BQ5tJlHxx8410sLHWd%2Byjz0QG1XObm%2FmKbDLTawysofUZgJNQMJxpdNG8xECEaiMkCF0Ny1Ecl8UlYj7uTPlreKDjYSsta76I%2FJc0dHcEDyk84h2%2BGfz%2FaNco75uK%2BccmrOvqm6cGIFwL6%2FRnwHZYWqJj%2B3JkQvRJYwXD7yFhk0RH05CX6cgYuqG3WY31zqiAsQZLhIG4Pc1ccImfySsaA4f4Q6wLpYoNRB57OTmX5iXgY%2Bt0BQt8NWYeEL347tMLS57sAGOqUBCRQgSby0oMoh6UYkuJzgU2J5e97jyoES048UCprPUEjO3gpyVaKq4L%2F6%2B1Pj4PAsnRhoDWJIxm7LhXTuaI3aRSoCfm99eVb78awwi%2BtvBQAzKzo6Nm9t8sDc%2BV2ot5cBjl5%2FsvRudBjVFOiipteoCpfLxQEtlALp3GPETDG3uisOthXr0XVNXNZcfTUtZFZFXSSeLnyrNTrkkMn5MxQr96e7ubOx&X-Amz-Signature=b25711a68ea548d3e168b40e748afdcdd7e5242362cfd7a190e348b69a741cfe&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667N3WDNUT%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T181214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC545sBmHFdOZRyNpykGjuO%2B%2BPreBnOchCIIF6eIcbwvQIgc%2BzferqfDh8PumgvpjfSZG5s776laIZ8y8G1nz3kA7Qq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDMqqxUtGfsIJ04mWnircA56erSP3gS6enJYhexvRr5YDn6HNmRfUYosxKZpChinsFtklNnYBb5xcbhjX49Wt5XWqrJFM5OeZJLw7DPFmxqqMjfUokbGKI%2B1LPYMi1D2QDZ%2B%2F7Hy57mrZFrnB%2Bk41vrg%2Bic9iR5XE6Kop5J%2BDoMnZUc09XC1LFXj6JMYjL%2F2CNl%2FHR%2BA6WcQpkhDTusLOVoSi1pX59Efiwd6%2B%2Bpf5ZtHG15ZRB5s2xaa93WIByhoF92evE1hSWwcCLVK%2F1ni8jKGugEWpVMuZ0BZGkeYKB97RcFKEHI4GtcAe87t4ccoZHAdI5WcC1M%2BvHOQqrDyV%2BIP8fR%2FNmaozBt103yKg9ZVqY8CwryKZBYBc6VRR30AGXOnM%2Feqxl%2F5MkvUlL%2BQ5tJlHxx8410sLHWd%2Byjz0QG1XObm%2FmKbDLTawysofUZgJNQMJxpdNG8xECEaiMkCF0Ny1Ecl8UlYj7uTPlreKDjYSsta76I%2FJc0dHcEDyk84h2%2BGfz%2FaNco75uK%2BccmrOvqm6cGIFwL6%2FRnwHZYWqJj%2B3JkQvRJYwXD7yFhk0RH05CX6cgYuqG3WY31zqiAsQZLhIG4Pc1ccImfySsaA4f4Q6wLpYoNRB57OTmX5iXgY%2Bt0BQt8NWYeEL347tMLS57sAGOqUBCRQgSby0oMoh6UYkuJzgU2J5e97jyoES048UCprPUEjO3gpyVaKq4L%2F6%2B1Pj4PAsnRhoDWJIxm7LhXTuaI3aRSoCfm99eVb78awwi%2BtvBQAzKzo6Nm9t8sDc%2BV2ot5cBjl5%2FsvRudBjVFOiipteoCpfLxQEtlALp3GPETDG3uisOthXr0XVNXNZcfTUtZFZFXSSeLnyrNTrkkMn5MxQr96e7ubOx&X-Amz-Signature=457f1b74a7fe6ebd66d2e4f98aa9e950f0404bc9a8fe84ae45f2acfd60197fbf&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
