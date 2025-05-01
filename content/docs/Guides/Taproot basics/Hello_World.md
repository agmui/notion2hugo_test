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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HOUOAG4%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T181139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIQC0pV93rJGWDeaPUPalv37pjUiKep1h%2B8w3crYNON%2FqCAIgRmim6jBI234khhC6FS6g8gL%2BQtw5rg%2FW%2FD7LGdQ9KikqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIs7nq%2BEW8NxauEpWCrcA6T0GmJxFEyv4NQYDSTGEBr7MUYC4vq%2FckBtyiyI0ARh7wnTfOt5si%2BJlahhzRhNs54KrnEWwJLrgkuHePXKuqjFyVc9So9VqIvWFiALCdJgdTXQhpUHm03ok%2Fh9kouUKLncTMN2dTuS0L3znV1dzuBErOb%2FVK5iX1klrvgIWeRF6MoA2ev1KmONu5BSh6Fgz38akAm%2BdvQHHSwFVgM7kflPFHXE3dRrlsnbdINdh%2B5s0rKFzF2pLCF0OUC6TpU%2FK94U%2BH%2FPNROa69j2Uc%2FbjIBK1iGteCj1EqeepxjRnb%2F9iZyi%2FI%2FWBFlX21J%2FwgS6v%2B5ly%2FQtszueVkdcg38DOxH3bs3l%2BUSEhSpkmZgy%2Be%2BkCGPZohCWIjJzHPJ3nqpbc6S0eBlUo5vsxNqCs9yV6fcXADwOstgFCPc6OszxOQPyGMNE9vvYt0FU5NxaLQe73mRw75IIEC2y5rmUkSlt%2FQr3uoNHRb1pWHkpKPXYsWcT8x8EM1dY6djmuauTDpKIk9qylfdlQmc%2F2ssRYcTNzwHFya6IMgfgw6XJb3WnZYYpepOiBNYESFr7xmg7KxoFyfTTJjZ5JH5n8yqqJytDgquNZlNOwt4i19TXsFBleO3H7u1s6DQ2VXjHz%2Ft3MNnYzsAGOqUBK%2FOhxL%2F6qTGm6G7J12kjHprEHTViJ%2FuNnI%2Fby1jdNOL2QFnLUNn111YUz6S3da0WUL1C%2Bj3h%2FBWM6f5%2BQejuVEHr%2BTmZJpXbHRtkMFP%2BaO94vwwwcHOXhK9pa4YSU3rNsMdtBjV5t3XMcdmf9V45xlQWxLStMYHLEvw4kL2nPWM%2FHGudS4M6xUaoiKY4cpm0Q00cBTii3WS8%2Fd4EWios0byXD%2BMl&X-Amz-Signature=8bae5bf806cbb1283cbf90862290bbacd75bab479224c3e69836f2b79318b195&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HOUOAG4%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T181139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIQC0pV93rJGWDeaPUPalv37pjUiKep1h%2B8w3crYNON%2FqCAIgRmim6jBI234khhC6FS6g8gL%2BQtw5rg%2FW%2FD7LGdQ9KikqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIs7nq%2BEW8NxauEpWCrcA6T0GmJxFEyv4NQYDSTGEBr7MUYC4vq%2FckBtyiyI0ARh7wnTfOt5si%2BJlahhzRhNs54KrnEWwJLrgkuHePXKuqjFyVc9So9VqIvWFiALCdJgdTXQhpUHm03ok%2Fh9kouUKLncTMN2dTuS0L3znV1dzuBErOb%2FVK5iX1klrvgIWeRF6MoA2ev1KmONu5BSh6Fgz38akAm%2BdvQHHSwFVgM7kflPFHXE3dRrlsnbdINdh%2B5s0rKFzF2pLCF0OUC6TpU%2FK94U%2BH%2FPNROa69j2Uc%2FbjIBK1iGteCj1EqeepxjRnb%2F9iZyi%2FI%2FWBFlX21J%2FwgS6v%2B5ly%2FQtszueVkdcg38DOxH3bs3l%2BUSEhSpkmZgy%2Be%2BkCGPZohCWIjJzHPJ3nqpbc6S0eBlUo5vsxNqCs9yV6fcXADwOstgFCPc6OszxOQPyGMNE9vvYt0FU5NxaLQe73mRw75IIEC2y5rmUkSlt%2FQr3uoNHRb1pWHkpKPXYsWcT8x8EM1dY6djmuauTDpKIk9qylfdlQmc%2F2ssRYcTNzwHFya6IMgfgw6XJb3WnZYYpepOiBNYESFr7xmg7KxoFyfTTJjZ5JH5n8yqqJytDgquNZlNOwt4i19TXsFBleO3H7u1s6DQ2VXjHz%2Ft3MNnYzsAGOqUBK%2FOhxL%2F6qTGm6G7J12kjHprEHTViJ%2FuNnI%2Fby1jdNOL2QFnLUNn111YUz6S3da0WUL1C%2Bj3h%2FBWM6f5%2BQejuVEHr%2BTmZJpXbHRtkMFP%2BaO94vwwwcHOXhK9pa4YSU3rNsMdtBjV5t3XMcdmf9V45xlQWxLStMYHLEvw4kL2nPWM%2FHGudS4M6xUaoiKY4cpm0Q00cBTii3WS8%2Fd4EWios0byXD%2BMl&X-Amz-Signature=ebbc42c765d90860819d720bb277a1bfd6388b94a8f35d47e7a8d25698bad698&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
