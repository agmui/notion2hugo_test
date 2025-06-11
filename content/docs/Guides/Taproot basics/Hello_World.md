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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GAXQZJV%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T220808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIHsdBrzplxoUQhfnbe85smPGpVPsnuNfrZURP6%2F03EGXAiEA%2BwUImoeoFkQYItqVfHUaH3FKydSPGd3FG8YUm6zithkqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHAD%2BypXFW0lHRDKSircA%2FdH0iYuq6bHcdsEIyo%2FbFSsy5oHcemsW6HcywedZ7KlRCkK5qEwYwbVWRejAPNUj3%2BIPakgg8%2FUnIUERV4Pri%2FhWNr8NsGQFNKh1qr8QQSZhUaEizx6laqiq08qrH2e5CoXoeqm4PY1vf69l0b0WEqRR7l7J5B0lTN1qv8shKMmiXylF4gKAhu48X4L%2FFQuVX1wxuRsvesDvvZR%2FDy8OWnG2hs6P4OENlYBfReXERJlAvjkVpiygbTEhT8Q6tQ7R70mCXXYshCPx6dvGqXwdMq3kmxfq1Tg9yb%2F2uKtdMjHBSPlbBzCWzYvHaJ5El5r6RKS14guCglHaNLrYoQfny%2BcgAqRxgnUQxifuoy%2Bejn79BhwiY%2BukpAvjPqxGiTw2vF2rq9Tcu%2Fz0%2BUHB3tTJrqH05nsNIiBOYax5sfyZlB%2B5dpTB5%2BId7nqK1%2FAS195TT1zNQME%2F4rYajwT%2BL5WkU5QN09VNNMMjI9OmWvyxwwlXGuVhG1bA6wL6BJTvqpbYN6obIVQCRLilb5aZ7DyHqu6DX0b66VdpeT9DT9zELnYB6iueeqPqxNbpDZ0asmq0fZKDxF9N4PIBRCHGkF09AM0WpWF8R16s63kBqgLmPMPqBMiJ%2FEdjSFXBFKFMMHIp8IGOqUBpQRcTfvHGQcChPpf4bDXhfsPxg63rBtTpQR%2FwW4u9K%2F9knFSH42nBJjTY08%2BcTelfT5TDB5x7xWgKVGuEFK7yt%2BxojLnV8aI4LdLqHCYn4kk2%2BNlbdi6YIkQRjskTBXSOX%2BXR3BXWXtmEt0sAhGXt4CJgCmthM31zVkcXCEKh7yuG4xcwgepUqKiLYUj17XF30OkwPjyWcF9C2fKnrFMBLKJxD0t&X-Amz-Signature=d219fa47c0fadaa02b6dd2cad62f57f6586c6ce02e7712f37d67fa6008000421&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GAXQZJV%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T220808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIHsdBrzplxoUQhfnbe85smPGpVPsnuNfrZURP6%2F03EGXAiEA%2BwUImoeoFkQYItqVfHUaH3FKydSPGd3FG8YUm6zithkqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHAD%2BypXFW0lHRDKSircA%2FdH0iYuq6bHcdsEIyo%2FbFSsy5oHcemsW6HcywedZ7KlRCkK5qEwYwbVWRejAPNUj3%2BIPakgg8%2FUnIUERV4Pri%2FhWNr8NsGQFNKh1qr8QQSZhUaEizx6laqiq08qrH2e5CoXoeqm4PY1vf69l0b0WEqRR7l7J5B0lTN1qv8shKMmiXylF4gKAhu48X4L%2FFQuVX1wxuRsvesDvvZR%2FDy8OWnG2hs6P4OENlYBfReXERJlAvjkVpiygbTEhT8Q6tQ7R70mCXXYshCPx6dvGqXwdMq3kmxfq1Tg9yb%2F2uKtdMjHBSPlbBzCWzYvHaJ5El5r6RKS14guCglHaNLrYoQfny%2BcgAqRxgnUQxifuoy%2Bejn79BhwiY%2BukpAvjPqxGiTw2vF2rq9Tcu%2Fz0%2BUHB3tTJrqH05nsNIiBOYax5sfyZlB%2B5dpTB5%2BId7nqK1%2FAS195TT1zNQME%2F4rYajwT%2BL5WkU5QN09VNNMMjI9OmWvyxwwlXGuVhG1bA6wL6BJTvqpbYN6obIVQCRLilb5aZ7DyHqu6DX0b66VdpeT9DT9zELnYB6iueeqPqxNbpDZ0asmq0fZKDxF9N4PIBRCHGkF09AM0WpWF8R16s63kBqgLmPMPqBMiJ%2FEdjSFXBFKFMMHIp8IGOqUBpQRcTfvHGQcChPpf4bDXhfsPxg63rBtTpQR%2FwW4u9K%2F9knFSH42nBJjTY08%2BcTelfT5TDB5x7xWgKVGuEFK7yt%2BxojLnV8aI4LdLqHCYn4kk2%2BNlbdi6YIkQRjskTBXSOX%2BXR3BXWXtmEt0sAhGXt4CJgCmthM31zVkcXCEKh7yuG4xcwgepUqKiLYUj17XF30OkwPjyWcF9C2fKnrFMBLKJxD0t&X-Amz-Signature=8d99949beae257d230081ae174a446b9b1d0003e0cce83a66042c2bc8312b3f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
