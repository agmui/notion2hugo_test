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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTNIGM2R%2F20260103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260103T014144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIEBHzL2L787Ae4xm0n7dQ9tGFv2dDqqzFtmhCAN4pJ6qAiEAllxbbG5Me%2BP%2BpHM8k2GZx79RDjLaJCYJF3NLf12qrMAq%2FwMIBRAAGgw2Mzc0MjMxODM4MDUiDP%2FWf%2Btb3b15kbEDMyrcA6GuhW81exT055q2%2FkgKp8jYWCrEkmzSfeAabsBpCotsbu6vEATLYaljfoXqzbkR%2FF6fHnSEv08d51Q55IMWNxKyetlnJUcuZamQpQr6f7F4QjLqCQqmL4bl%2Bg8INBYAKBC2%2FugGpNETvvEkEo0RMLTlP%2BwZ4l0dOdGWO9PJKJafxz4Fqi8fRZNQgG1Ns7igg0piqXRMxwIVn1FSfNIftnQPUZA45nh6Cas632ggaS4vW6Ntwast3WbSZu5PmyuPglZKKi0CVt5S3Nhf3vkkYBGV5R4oUtC9XUU0g4fiWNs4N3afiG2ORHR5ax4K%2BhoIKZ96tnmtebaWxEw4QQinEcIvuSOJyjXcVSHM9J%2BpWRNSRCJkTzU3LunVDTV%2B0l0M28KgUp8vL28ro2qixxbQULR71NZhUYqcpXk%2FqqppHJIXMpK35PodzVB5zWFX0F%2BK3Ihxg8W%2FVNLD67tKUiggqnGxMNnAstbn2AOHxH8vqsfPLZBTvcVbylg57fQR6scDqamidifaYTBoZA9c107m0%2FVaumzzKkCrTx7xR3pRSVauZvfHz947%2FvN4%2F0m9id9V8DbrKiIi5tBNG8PIf2WhjyVSEcPEtqUP5O8D4yrW%2FWKK0MfVbAIYOJCXxmpMML7H4MoGOqUBRnXw41mad6ebCVbUdZPqvpA8J%2BTfY8YyujZb5wI%2FsrXGTeSaN5s3jreAGuH6Fbfmm3s2cYT%2BGdO0sZjvr0Ebn%2BENFzGAdVDtst2bynntyxCG66jej8Uk5VzZ04%2B%2BzqWL4v2NS%2BQO8Ggre56ckgOpo0VOZdInTS%2BWCpmlX5fZ8Dmhh%2BeDzCae0nBbcc%2Fjn262Oc99sSEL6Q0QpKlhIN6ZUgAh5O7Q&X-Amz-Signature=d96bb0c7f40f1c1271c221753545bb99d8046217c0f5467487f50c925cd1f31a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTNIGM2R%2F20260103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260103T014144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIEBHzL2L787Ae4xm0n7dQ9tGFv2dDqqzFtmhCAN4pJ6qAiEAllxbbG5Me%2BP%2BpHM8k2GZx79RDjLaJCYJF3NLf12qrMAq%2FwMIBRAAGgw2Mzc0MjMxODM4MDUiDP%2FWf%2Btb3b15kbEDMyrcA6GuhW81exT055q2%2FkgKp8jYWCrEkmzSfeAabsBpCotsbu6vEATLYaljfoXqzbkR%2FF6fHnSEv08d51Q55IMWNxKyetlnJUcuZamQpQr6f7F4QjLqCQqmL4bl%2Bg8INBYAKBC2%2FugGpNETvvEkEo0RMLTlP%2BwZ4l0dOdGWO9PJKJafxz4Fqi8fRZNQgG1Ns7igg0piqXRMxwIVn1FSfNIftnQPUZA45nh6Cas632ggaS4vW6Ntwast3WbSZu5PmyuPglZKKi0CVt5S3Nhf3vkkYBGV5R4oUtC9XUU0g4fiWNs4N3afiG2ORHR5ax4K%2BhoIKZ96tnmtebaWxEw4QQinEcIvuSOJyjXcVSHM9J%2BpWRNSRCJkTzU3LunVDTV%2B0l0M28KgUp8vL28ro2qixxbQULR71NZhUYqcpXk%2FqqppHJIXMpK35PodzVB5zWFX0F%2BK3Ihxg8W%2FVNLD67tKUiggqnGxMNnAstbn2AOHxH8vqsfPLZBTvcVbylg57fQR6scDqamidifaYTBoZA9c107m0%2FVaumzzKkCrTx7xR3pRSVauZvfHz947%2FvN4%2F0m9id9V8DbrKiIi5tBNG8PIf2WhjyVSEcPEtqUP5O8D4yrW%2FWKK0MfVbAIYOJCXxmpMML7H4MoGOqUBRnXw41mad6ebCVbUdZPqvpA8J%2BTfY8YyujZb5wI%2FsrXGTeSaN5s3jreAGuH6Fbfmm3s2cYT%2BGdO0sZjvr0Ebn%2BENFzGAdVDtst2bynntyxCG66jej8Uk5VzZ04%2B%2BzqWL4v2NS%2BQO8Ggre56ckgOpo0VOZdInTS%2BWCpmlX5fZ8Dmhh%2BeDzCae0nBbcc%2Fjn262Oc99sSEL6Q0QpKlhIN6ZUgAh5O7Q&X-Amz-Signature=4d72fd95c760e327433b0afcccd41a3b2b5c168b8c05495e0d82d86f90cdcc3f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
