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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2CEFYLK%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T004241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIQDoa8INZxMhuYJ6tpB3eXKxyXgusKzVpF3yYhbc%2Bgx2pQIge7yonxsjrV5V1zvTW2d%2BjI9myfpNO%2F00373MeOGXeaoq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDN0rCBBfpBtDSqB7yCrcA91WAgIopSa%2BpIEKAUoL%2Fd6iM1bnieNOE6XI%2ByH9UIv1Mypk8iCqWrLKv6o9ksB2r3PpPaZXsbvSilRkL4yRNBk8XKsmSs7n22lLz18IvP2LswR1ogxhN%2FO186K1a3ND4jp9kcfTt2JYw67v%2B2HqpEDGJX80ByzvWIq3FLsfBmls5pPRrvpm8VNgnHGGC6DkH63lfOAxX6wLHtUggJzrzER4WWlJvX2tuX7XTgKwLMA0WfuHxMnfkzuCvThJYNfrchF5IaQqb2L6XT7hC7PMst1aRf%2BERJficzCcnLICJm6X68majBImrU8mNqv%2BB2lY%2B5t3mwRlmfpE5vpHpRpauqWV1jUduECib%2BXDWkjDUrYCsMuo9PH2OP4w7IiVoBu6evPlU%2Bc5BH2OOnIDNT2F4d1iIjYbr2VOaRr6qqSAx6dzwiGpPVrNiUPYAOHc%2Ff%2FKJ8QkFhiHCOtR3Nz0c7m5i78ur4VuB%2FnfPwZg%2BsFLE5iPU%2Ft44LKzWObSxqnGjL%2BAxD5wr6ru0JXQXKpZuyEWgE3hJj57vIu%2B3Ecq%2Bi2Hg1To%2F1RclMyBkNNX9Vx2vzQKc9QJ%2B%2B8TPVlxg4JGueZiO5MxusMzn9irTakXjM6P40OGAmBj0BpKXKJlYCgRMKS4nMMGOqUB0Fq7bUm4zf0FleeUd5cXSGMDXWG6tSlvEn6mFuWiHptV1QnPJILDUWGK25s6F6xdCG9HCT8xXN8LqZH2JlPNkUL6u%2FAGf5EHNpEvzf4zqgl3CVORvlsP3p4pxh%2BHOKnjyUrFSPenIUvBQkpvuWKv4NW8U53ofM9lrtlqmriTCR9oZCoao4aE1TxBwDmgX%2FtXjAmGlda0jAP9P3k7LqtRX213Eg7X&X-Amz-Signature=1b340908cc57ab4786d90b159aa930b8a483928f279d5b9ef8457dbe943028ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2CEFYLK%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T004241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIQDoa8INZxMhuYJ6tpB3eXKxyXgusKzVpF3yYhbc%2Bgx2pQIge7yonxsjrV5V1zvTW2d%2BjI9myfpNO%2F00373MeOGXeaoq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDN0rCBBfpBtDSqB7yCrcA91WAgIopSa%2BpIEKAUoL%2Fd6iM1bnieNOE6XI%2ByH9UIv1Mypk8iCqWrLKv6o9ksB2r3PpPaZXsbvSilRkL4yRNBk8XKsmSs7n22lLz18IvP2LswR1ogxhN%2FO186K1a3ND4jp9kcfTt2JYw67v%2B2HqpEDGJX80ByzvWIq3FLsfBmls5pPRrvpm8VNgnHGGC6DkH63lfOAxX6wLHtUggJzrzER4WWlJvX2tuX7XTgKwLMA0WfuHxMnfkzuCvThJYNfrchF5IaQqb2L6XT7hC7PMst1aRf%2BERJficzCcnLICJm6X68majBImrU8mNqv%2BB2lY%2B5t3mwRlmfpE5vpHpRpauqWV1jUduECib%2BXDWkjDUrYCsMuo9PH2OP4w7IiVoBu6evPlU%2Bc5BH2OOnIDNT2F4d1iIjYbr2VOaRr6qqSAx6dzwiGpPVrNiUPYAOHc%2Ff%2FKJ8QkFhiHCOtR3Nz0c7m5i78ur4VuB%2FnfPwZg%2BsFLE5iPU%2Ft44LKzWObSxqnGjL%2BAxD5wr6ru0JXQXKpZuyEWgE3hJj57vIu%2B3Ecq%2Bi2Hg1To%2F1RclMyBkNNX9Vx2vzQKc9QJ%2B%2B8TPVlxg4JGueZiO5MxusMzn9irTakXjM6P40OGAmBj0BpKXKJlYCgRMKS4nMMGOqUB0Fq7bUm4zf0FleeUd5cXSGMDXWG6tSlvEn6mFuWiHptV1QnPJILDUWGK25s6F6xdCG9HCT8xXN8LqZH2JlPNkUL6u%2FAGf5EHNpEvzf4zqgl3CVORvlsP3p4pxh%2BHOKnjyUrFSPenIUvBQkpvuWKv4NW8U53ofM9lrtlqmriTCR9oZCoao4aE1TxBwDmgX%2FtXjAmGlda0jAP9P3k7LqtRX213Eg7X&X-Amz-Signature=23e07725a3e00383bd25509a94404339f1e884c24d1f91c519c8b33c701d0ac9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
