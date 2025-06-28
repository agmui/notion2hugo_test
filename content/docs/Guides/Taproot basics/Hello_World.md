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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSKRPCT5%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T131856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCuwaEQU2oOHW%2FfkIrH3UoAy4G2JQWEA3BbXC8cBBxutwIgcNJLqrJeSecPA1%2FT%2B9wpWknrHYiU6%2FSGzcch0g%2FRA5EqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGkEZ84SrqAym7XAsSrcA9fvbrFBnCDcAVTIybEarXVAMRtAJd7JQfXjB%2FQaODr0EAv5tDUZVD%2FXpf3juw1MrPs4TpDY2ixZIqoeLT3rO%2B9K7wrVeYFVpUF3pBmp0bYmtJcWQLkzdq0OJhRTQnVZqpJAQwZPmEddzZHdrpPco71oWsLB3mHR9J22uNs%2F5HKu1acJ68kLnWttLzNvWUtYfbMbBktL%2F0lAw1cA3ZjftqzysTQLzL1h822BirB9FIqI%2BpqcN5g82esQqZ3OGNKZ8P7b9%2BKNn7gVb3AZN3BVqld8aexmn4xFBwEFqgDYZN7owD8Hkb1xHqT18rj8wAnWB9Hf096GU0u%2BjsYkRXkF1M7ODrJUrY1lLIY46f0861x%2BPApa54NpwhJKS4GWbEWCuxMQS5rVLbDn%2FZSl06pvntZ9RR0EF6x7MJyjf6FbFHn0EZxlqYfietV9yr0TSeowupibIx6jaKTeEKiYWlqUCTp92JQRitkKptElAIUQ4T8EvOqjUkZ%2FyGDIOs7icEWNiGRDjRYh1UuBjtSKWizzoL7JBK4Nxo22h3lmhxAwxotXN8w1oC2Gw95u9dpgG6qIYrViRXOO9BJwK4sRRdo8n950kOoVFYuFmxgEU9H191tEBwzrMXW0d8ENKXsbMIWQ%2F8IGOqUBvSH5a8dfd4n5iSvq8f3A6gTqcSw9eVxg0xa%2FzOzr0D7fL2FFsjqJ00Z1sW3ZQ5dlnjBNTVxfPB4vg2DtDjHlrwOAvdE1oUD8HVF1kHiWrjonmmGnudf84uFabedRE39gtlvGlerbGQngx3s5m68vpPnGeRHvKpiUuSwkgBWlZeTx%2FfNOOclFCFmZjN7TGiwrAs39%2B1WKpzQUxezhp6gMQ7%2BPUZi1&X-Amz-Signature=f5ee407d5f88f7d379ecff4df92fbb43d79cf8f064f0057d4f725b6fce5a1f84&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSKRPCT5%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T131856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCuwaEQU2oOHW%2FfkIrH3UoAy4G2JQWEA3BbXC8cBBxutwIgcNJLqrJeSecPA1%2FT%2B9wpWknrHYiU6%2FSGzcch0g%2FRA5EqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGkEZ84SrqAym7XAsSrcA9fvbrFBnCDcAVTIybEarXVAMRtAJd7JQfXjB%2FQaODr0EAv5tDUZVD%2FXpf3juw1MrPs4TpDY2ixZIqoeLT3rO%2B9K7wrVeYFVpUF3pBmp0bYmtJcWQLkzdq0OJhRTQnVZqpJAQwZPmEddzZHdrpPco71oWsLB3mHR9J22uNs%2F5HKu1acJ68kLnWttLzNvWUtYfbMbBktL%2F0lAw1cA3ZjftqzysTQLzL1h822BirB9FIqI%2BpqcN5g82esQqZ3OGNKZ8P7b9%2BKNn7gVb3AZN3BVqld8aexmn4xFBwEFqgDYZN7owD8Hkb1xHqT18rj8wAnWB9Hf096GU0u%2BjsYkRXkF1M7ODrJUrY1lLIY46f0861x%2BPApa54NpwhJKS4GWbEWCuxMQS5rVLbDn%2FZSl06pvntZ9RR0EF6x7MJyjf6FbFHn0EZxlqYfietV9yr0TSeowupibIx6jaKTeEKiYWlqUCTp92JQRitkKptElAIUQ4T8EvOqjUkZ%2FyGDIOs7icEWNiGRDjRYh1UuBjtSKWizzoL7JBK4Nxo22h3lmhxAwxotXN8w1oC2Gw95u9dpgG6qIYrViRXOO9BJwK4sRRdo8n950kOoVFYuFmxgEU9H191tEBwzrMXW0d8ENKXsbMIWQ%2F8IGOqUBvSH5a8dfd4n5iSvq8f3A6gTqcSw9eVxg0xa%2FzOzr0D7fL2FFsjqJ00Z1sW3ZQ5dlnjBNTVxfPB4vg2DtDjHlrwOAvdE1oUD8HVF1kHiWrjonmmGnudf84uFabedRE39gtlvGlerbGQngx3s5m68vpPnGeRHvKpiUuSwkgBWlZeTx%2FfNOOclFCFmZjN7TGiwrAs39%2B1WKpzQUxezhp6gMQ7%2BPUZi1&X-Amz-Signature=8b05655aa72c155364d7282e5023999a1b2ed54a5c174ff4ffafb675109f012e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
