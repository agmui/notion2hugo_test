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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AXR5TBV%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T110720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFU1TNsVSsEslOCNr5WW4MBwtjNc8IjRxJkD8rOQYizLAiEAmbkMrRbpO5%2Bi00VMoHlTV3aGzuqm0TQeGQySjxdcxRsqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBIMOa6Uh2JvmkfpKircAzCh3QNSot6KvCjL0fepAz%2F9qawtLujpj6me8ubvMB8EbZVBucyNOvj1LsMjCpotRCTXVdjOI4CRUeSlt%2FxNz8geimLjr9YgLFli6hTnYXNSpgXQYMNNjpImEZFNHFL6PBm4N%2FBLbR0JfXRsN8ymhYUDGiNbuYFRFclCJuST3A12%2FalU2AkXj0Mlytxil1aKh%2FpGSYxuSUhomiCz6aAj4RUUcdZ88BZrAvSzwLpTTPV%2BKWN4qliYGFM7IJMHEs04mVhujDkau45L01DIvLCjrR9XGaJ0dVUQLrLYgGRylLnEfhsKq%2By%2F3MROkd%2BhOm6bX2b0aXu9KsnPj%2FeFRHDngbyRym51f3AmpF8ncKJZ9MAuAYJjS%2BVIkXFj0d8wUr311qOfRUyDEdjGA0EfMs6c6JPemMU9qQ3507QxywAl%2Bw%2BSPZgNRF9mNSaY3qQWd1vQO6kV73CUmLb%2FwDvwJJ0L4QbnwRThBWzFEyDALvcqxitTeW3g9wsExqHQlT6dn%2Fk36cnwF8cC456uiPqtYBmMtkfaQwtWV71Kr2HUxYpHEhw89dgq5wdUDHBPHJ6%2Fv44hYNfnAMYvKOKcNOJYzfnSa5B2HK3ZqarPl%2FvkhaGpAjeQO5roRdPmJzAaxnSVMJKt98AGOqUBhrfpxlCs9SdEuzbgVqYATvlV5HzivJbtf%2BPQPDufZUqwDMVX4J7bPz1iLPEgttXQsPMOmngQXyvtIlJtPbfDhWs32FPPtOn3GfgSQ1p9b1XeFIllblExvNtkzarNFN%2FkiiD09RmBAbC%2Fkf6qGsrAipxaX%2FHQmHGIr1ni1C%2BgZQ%2FnvpSJCixPPHlK65bV%2BxizhS53FlMXqrVc26cjegrXMr8UcXKu&X-Amz-Signature=46f1622bc63d7c203ee82be73a9f4dfbd0f3bf47942891434fb96508359ef55a&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AXR5TBV%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T110720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFU1TNsVSsEslOCNr5WW4MBwtjNc8IjRxJkD8rOQYizLAiEAmbkMrRbpO5%2Bi00VMoHlTV3aGzuqm0TQeGQySjxdcxRsqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBIMOa6Uh2JvmkfpKircAzCh3QNSot6KvCjL0fepAz%2F9qawtLujpj6me8ubvMB8EbZVBucyNOvj1LsMjCpotRCTXVdjOI4CRUeSlt%2FxNz8geimLjr9YgLFli6hTnYXNSpgXQYMNNjpImEZFNHFL6PBm4N%2FBLbR0JfXRsN8ymhYUDGiNbuYFRFclCJuST3A12%2FalU2AkXj0Mlytxil1aKh%2FpGSYxuSUhomiCz6aAj4RUUcdZ88BZrAvSzwLpTTPV%2BKWN4qliYGFM7IJMHEs04mVhujDkau45L01DIvLCjrR9XGaJ0dVUQLrLYgGRylLnEfhsKq%2By%2F3MROkd%2BhOm6bX2b0aXu9KsnPj%2FeFRHDngbyRym51f3AmpF8ncKJZ9MAuAYJjS%2BVIkXFj0d8wUr311qOfRUyDEdjGA0EfMs6c6JPemMU9qQ3507QxywAl%2Bw%2BSPZgNRF9mNSaY3qQWd1vQO6kV73CUmLb%2FwDvwJJ0L4QbnwRThBWzFEyDALvcqxitTeW3g9wsExqHQlT6dn%2Fk36cnwF8cC456uiPqtYBmMtkfaQwtWV71Kr2HUxYpHEhw89dgq5wdUDHBPHJ6%2Fv44hYNfnAMYvKOKcNOJYzfnSa5B2HK3ZqarPl%2FvkhaGpAjeQO5roRdPmJzAaxnSVMJKt98AGOqUBhrfpxlCs9SdEuzbgVqYATvlV5HzivJbtf%2BPQPDufZUqwDMVX4J7bPz1iLPEgttXQsPMOmngQXyvtIlJtPbfDhWs32FPPtOn3GfgSQ1p9b1XeFIllblExvNtkzarNFN%2FkiiD09RmBAbC%2Fkf6qGsrAipxaX%2FHQmHGIr1ni1C%2BgZQ%2FnvpSJCixPPHlK65bV%2BxizhS53FlMXqrVc26cjegrXMr8UcXKu&X-Amz-Signature=46c6531c51f8d3f957ecb64a3c080c571ed5f2bbfeb32f89df35803a626f37c3&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
