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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656KH3X57%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T210822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDCr3fXYPv5tV9m97N%2FmdfF8nDqTl%2Fnuq0W2zhqkVyHjgIgc0DwTGJtoJlZeJ%2By3PcR32O7%2B%2BTBdgJK7CCKi1kVHgkqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBA1ZFzOKR5AyUGqhSrcA5yhN0fccmrfH4imF13b9RQz07UvqR9L7xuUpp5epX7YqxtiiPMHQmdjsu6YIVJ80JHWTYLGsNQojFhnN3bLhRs2Srs1g7SxvUEGRmkpSNTZvWPFn6QVSfaWAuteKPztNAMCHBMe%2B6AxiD61jSdx2t0rVfBFbxc0QOAvsJC1lEIP3gmB5NxfaWSlb0JnwyNCZBBFiZtCUvOWGkEvqg3p6q7jd0wSlzGKiA0J%2FLsUv1JbMUwL%2FGzVt2xxKtZvJnniv7KaU%2FtAIY%2BGsbphOOAOM8CkJgOvRxsAuHGpymisYihdLAPeXB5sy7w8k%2B7UpZ93bScLBy80xvGLGE25cUdokIs%2B7pFhoeAw8wx55aiKPS9pUSTtJVCcm%2Fy3rVpBiAxwCzduYOAv3qWwDXN2DuNLRTjZ6wM9Wzv7tTPFqzSniQY9QBva12smRu%2BBPw7VTxjxMeyP9ntwgwFgc2gs5Q2QrWvyOcaFWvXplYmmWOyCWUCyQjTAiNWkbS45108aib40jxo%2BNXMYgzgNJnJ3CrSB6g8CF%2F1Fw3RHJipWIA3cCTagavTNEiRQoGaPwMloENRCaB4%2BsfmCkRE6UwSIj6rENSOY2Vhzq8SV%2BAGWlKDfZDo3IF1IW20pH2T4eQVIMM%2FW%2BsMGOqUBS7Tpt7ncuNjSIDA7Q2ip2S4Pv8EtYJL6%2B9%2F1tYW1hqjKCT%2F7FZN9ySqkw%2BUylEsYHRV7NKt2OtzZ%2BglKLHGStwoUvTOqEP%2BeFX2OYFfRF8QKMmm5Y%2B6rvJguY9CV4NKMTtLG1FoC4w9r0PiVQY5AGC%2FY5mz%2FFOZVk26ZS5WTgtdAGJWLAn5n%2Fp06X%2B8t3fTN6qf2YvWRnOZj4KmS0U3%2FVx8XuyTr&X-Amz-Signature=0a99d9e37cecc22bd1c10d080cd2010538bbd01e67d95879071962d2ca71fcd8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656KH3X57%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T210822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDCr3fXYPv5tV9m97N%2FmdfF8nDqTl%2Fnuq0W2zhqkVyHjgIgc0DwTGJtoJlZeJ%2By3PcR32O7%2B%2BTBdgJK7CCKi1kVHgkqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBA1ZFzOKR5AyUGqhSrcA5yhN0fccmrfH4imF13b9RQz07UvqR9L7xuUpp5epX7YqxtiiPMHQmdjsu6YIVJ80JHWTYLGsNQojFhnN3bLhRs2Srs1g7SxvUEGRmkpSNTZvWPFn6QVSfaWAuteKPztNAMCHBMe%2B6AxiD61jSdx2t0rVfBFbxc0QOAvsJC1lEIP3gmB5NxfaWSlb0JnwyNCZBBFiZtCUvOWGkEvqg3p6q7jd0wSlzGKiA0J%2FLsUv1JbMUwL%2FGzVt2xxKtZvJnniv7KaU%2FtAIY%2BGsbphOOAOM8CkJgOvRxsAuHGpymisYihdLAPeXB5sy7w8k%2B7UpZ93bScLBy80xvGLGE25cUdokIs%2B7pFhoeAw8wx55aiKPS9pUSTtJVCcm%2Fy3rVpBiAxwCzduYOAv3qWwDXN2DuNLRTjZ6wM9Wzv7tTPFqzSniQY9QBva12smRu%2BBPw7VTxjxMeyP9ntwgwFgc2gs5Q2QrWvyOcaFWvXplYmmWOyCWUCyQjTAiNWkbS45108aib40jxo%2BNXMYgzgNJnJ3CrSB6g8CF%2F1Fw3RHJipWIA3cCTagavTNEiRQoGaPwMloENRCaB4%2BsfmCkRE6UwSIj6rENSOY2Vhzq8SV%2BAGWlKDfZDo3IF1IW20pH2T4eQVIMM%2FW%2BsMGOqUBS7Tpt7ncuNjSIDA7Q2ip2S4Pv8EtYJL6%2B9%2F1tYW1hqjKCT%2F7FZN9ySqkw%2BUylEsYHRV7NKt2OtzZ%2BglKLHGStwoUvTOqEP%2BeFX2OYFfRF8QKMmm5Y%2B6rvJguY9CV4NKMTtLG1FoC4w9r0PiVQY5AGC%2FY5mz%2FFOZVk26ZS5WTgtdAGJWLAn5n%2Fp06X%2B8t3fTN6qf2YvWRnOZj4KmS0U3%2FVx8XuyTr&X-Amz-Signature=d3dd1648b0447743092bb06a252cd02be177dbe28bd6adeca85b3f7dcfc4a652&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
