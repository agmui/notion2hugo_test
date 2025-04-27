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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MVQQ4AP%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T190059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCP21EWu2%2F%2FQs8XNMHpTptOPq98FWsldi3eAbcy1Ep6pQIhAO%2FLzgIOPxCo0CbdDcsUMIN3T84dR0W%2FDv2%2FnVOc%2BOH5Kv8DCGQQABoMNjM3NDIzMTgzODA1Igyi8hINLPqNaNPjdCkq3APSCPMzEgpZyVHhsvW0zwwT7MPpzjVSmCjU31ys%2F18GgQ%2BBLTw0JDYColtIe9PfOATXjykrvUcVFDx9d%2F4OVSDAuiAy6bfKvqfjQUtb9OocsnL%2BdcVcT1G1QL9Ax7u9xdu1BCbS2DkA08tb%2F3fRCEp5QDs1lvSdn1EdD1qtNU4%2Bc6m4pBE2pijjl0srLVP%2Fcv0v%2BOEZjaeuCknVsY6g96hdpuCnPMsslBUSfvHxz4sPCFHJNAez0eZqfYPRDylfsAYJ89hcZGRtQyRjT3%2FeS811KEkhctnI5%2BpqEEbqHhxoSMf3OK2TYWPgBMo%2Fp1DjZyaZAMPJWHJSBo5Mgueu7HmN9ZHRmqCMa%2FGz4m%2BWUk42%2Fdt1n%2Fp1rX5Dvvk0uaJdTuTGyj3Xe2M6P2P%2Bjl0QhHNy1WiOxjRY6G5UTNAEgyNejWPMwc9BIGvdinmYG844HaPP1ghrAF%2FeqXf4WzGFwQLstt4UVmH4X1IbKLwH8LDkPkuWfxtabJ%2BBRZa2v%2BfS9td2DnpuYiuqHt5wASnVqZubFFQEe0ITmJzlCUGwK1agMUuJhg%2FDT3SGWjf7eBiClNdxfaERUObuezt2nbE4hB296UXNQOHyUCiBEfu6O5oOn84D8sggFLGsvfDftjDa8bnABjqkAf4QlmAQHWrH7SQGloemT%2BiXX%2BQ2Rbc8pwy9xoe2KzWnuqJvtPJ%2FuDBWt2d9%2F6FRtkYX%2BRZMuJP528Ua%2BZ7F5OxniXLNyQ9RLz81xHTjwlf5e9JAVM79klJRWedTd9jmBgLdcyyLMu5Ijd4z%2FYFKTHSs0974kFSUvVJRu0Lg%2BhEv3TPXmn7gti1e%2F5XZi5LeIonoep8684KpGirgzflu07%2FsgNjX&X-Amz-Signature=202194334f03bf9d1d71bf52079614e2f8760d39769cd7c89fc00bd68df100dc&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MVQQ4AP%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T190059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCP21EWu2%2F%2FQs8XNMHpTptOPq98FWsldi3eAbcy1Ep6pQIhAO%2FLzgIOPxCo0CbdDcsUMIN3T84dR0W%2FDv2%2FnVOc%2BOH5Kv8DCGQQABoMNjM3NDIzMTgzODA1Igyi8hINLPqNaNPjdCkq3APSCPMzEgpZyVHhsvW0zwwT7MPpzjVSmCjU31ys%2F18GgQ%2BBLTw0JDYColtIe9PfOATXjykrvUcVFDx9d%2F4OVSDAuiAy6bfKvqfjQUtb9OocsnL%2BdcVcT1G1QL9Ax7u9xdu1BCbS2DkA08tb%2F3fRCEp5QDs1lvSdn1EdD1qtNU4%2Bc6m4pBE2pijjl0srLVP%2Fcv0v%2BOEZjaeuCknVsY6g96hdpuCnPMsslBUSfvHxz4sPCFHJNAez0eZqfYPRDylfsAYJ89hcZGRtQyRjT3%2FeS811KEkhctnI5%2BpqEEbqHhxoSMf3OK2TYWPgBMo%2Fp1DjZyaZAMPJWHJSBo5Mgueu7HmN9ZHRmqCMa%2FGz4m%2BWUk42%2Fdt1n%2Fp1rX5Dvvk0uaJdTuTGyj3Xe2M6P2P%2Bjl0QhHNy1WiOxjRY6G5UTNAEgyNejWPMwc9BIGvdinmYG844HaPP1ghrAF%2FeqXf4WzGFwQLstt4UVmH4X1IbKLwH8LDkPkuWfxtabJ%2BBRZa2v%2BfS9td2DnpuYiuqHt5wASnVqZubFFQEe0ITmJzlCUGwK1agMUuJhg%2FDT3SGWjf7eBiClNdxfaERUObuezt2nbE4hB296UXNQOHyUCiBEfu6O5oOn84D8sggFLGsvfDftjDa8bnABjqkAf4QlmAQHWrH7SQGloemT%2BiXX%2BQ2Rbc8pwy9xoe2KzWnuqJvtPJ%2FuDBWt2d9%2F6FRtkYX%2BRZMuJP528Ua%2BZ7F5OxniXLNyQ9RLz81xHTjwlf5e9JAVM79klJRWedTd9jmBgLdcyyLMu5Ijd4z%2FYFKTHSs0974kFSUvVJRu0Lg%2BhEv3TPXmn7gti1e%2F5XZi5LeIonoep8684KpGirgzflu07%2FsgNjX&X-Amz-Signature=297d736cc52b0aefd23209c72d8ecf49402c647f46cbd8f072920650b7493e8e&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
