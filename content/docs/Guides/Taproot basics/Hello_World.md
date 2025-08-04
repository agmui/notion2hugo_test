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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GCYNALU%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T081441Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJIMEYCIQDfbarWF6H1vCpnzV1C%2BC%2BMZU0uzfOZkr%2B8w5l0M4qd%2BQIhAKPof2%2FXs6BduTRvjCcd0%2BLOoYJIVDrbQzmW2156dubzKv8DCEAQABoMNjM3NDIzMTgzODA1IgyXrRHrv4aCz%2FdqezEq3AMaopo0ZG%2ByJoH3DiFDwmqza8QRb%2BYUhNdZt00NbCCPpOhu9EhcZSekxmm8BpbtjtfNtRk6HVWnLp%2Bj0QAq2jQHHJHC8P46HDIBXe1PZGdE%2Fmr7vj0D9kjmYFDQLMeXeusUf7gTi8p3TkhJQKxoPgAzgzXblSQ%2BEzkYA9y9Z1kVN90cFaXbwGCODT12RkQPJryBJuCOEEziyLdiKu%2BkKYVVeyjqoRt22mnPqdPmgAYpTcMT%2BtR3OqnTrKNlD%2BXbUO2Tezq%2BQMRlwl%2BYP22mnDg56mloEsmaaRyI%2Bi6FmZO2ROvpZynIC3N%2Fg6elRQlQYBh9A%2BfDySCQO9GYO8%2FUiHDCEYMMsXeNu5T4AbC7jIwVJCFWqWBXihJecCp%2BgxzxTehmp9rL9obZfQlwiWa6moLCODtJa3kXgCm8JPWyPeouAmBwjHKAa9mW0DyLliPgqeWlJv7A0R7STjFnW9cZYtPCGOI88St4vA9KDa7N699NyJyRMmmMpt4yZpSAMQ%2Bd9IOivCmf1ihf44TJahMfiKbusyetVJaKKJuyfzZ7g%2Fw9u%2BcZVDAikH01BjgTxl1qrbMAR%2FClfRwOJhltrG%2BWzEClOex9GMElalbJz7dnFydBCCF93FtkFDVze9UmPjCzuMHEBjqkAWw6K8rDHGMxqDsIZhAGSV4m4EKZysEHtq%2BxI0tEIDcgl4NMOO42HMvad%2BIzuMS%2BSsKH6DkWm0JKAF4%2FtXDyTLN8L7aOx7xW7tqwRn9jEbSkfvxUe%2FD3Zf6xrBFV85qB7LE8mAg5RqDb2l4TalxH2Rywkfua45THIV0wvk8gRWheVKd1YvvZ44L0DKbpT6Akw3Gk02HdRtPozQpinatg3Z9yY4P%2F&X-Amz-Signature=9cd87cf5511c6a8673ca821cecd832a006f3c67290896bb729baab4babb06019&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GCYNALU%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T081441Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJIMEYCIQDfbarWF6H1vCpnzV1C%2BC%2BMZU0uzfOZkr%2B8w5l0M4qd%2BQIhAKPof2%2FXs6BduTRvjCcd0%2BLOoYJIVDrbQzmW2156dubzKv8DCEAQABoMNjM3NDIzMTgzODA1IgyXrRHrv4aCz%2FdqezEq3AMaopo0ZG%2ByJoH3DiFDwmqza8QRb%2BYUhNdZt00NbCCPpOhu9EhcZSekxmm8BpbtjtfNtRk6HVWnLp%2Bj0QAq2jQHHJHC8P46HDIBXe1PZGdE%2Fmr7vj0D9kjmYFDQLMeXeusUf7gTi8p3TkhJQKxoPgAzgzXblSQ%2BEzkYA9y9Z1kVN90cFaXbwGCODT12RkQPJryBJuCOEEziyLdiKu%2BkKYVVeyjqoRt22mnPqdPmgAYpTcMT%2BtR3OqnTrKNlD%2BXbUO2Tezq%2BQMRlwl%2BYP22mnDg56mloEsmaaRyI%2Bi6FmZO2ROvpZynIC3N%2Fg6elRQlQYBh9A%2BfDySCQO9GYO8%2FUiHDCEYMMsXeNu5T4AbC7jIwVJCFWqWBXihJecCp%2BgxzxTehmp9rL9obZfQlwiWa6moLCODtJa3kXgCm8JPWyPeouAmBwjHKAa9mW0DyLliPgqeWlJv7A0R7STjFnW9cZYtPCGOI88St4vA9KDa7N699NyJyRMmmMpt4yZpSAMQ%2Bd9IOivCmf1ihf44TJahMfiKbusyetVJaKKJuyfzZ7g%2Fw9u%2BcZVDAikH01BjgTxl1qrbMAR%2FClfRwOJhltrG%2BWzEClOex9GMElalbJz7dnFydBCCF93FtkFDVze9UmPjCzuMHEBjqkAWw6K8rDHGMxqDsIZhAGSV4m4EKZysEHtq%2BxI0tEIDcgl4NMOO42HMvad%2BIzuMS%2BSsKH6DkWm0JKAF4%2FtXDyTLN8L7aOx7xW7tqwRn9jEbSkfvxUe%2FD3Zf6xrBFV85qB7LE8mAg5RqDb2l4TalxH2Rywkfua45THIV0wvk8gRWheVKd1YvvZ44L0DKbpT6Akw3Gk02HdRtPozQpinatg3Z9yY4P%2F&X-Amz-Signature=dfc6f2c748c0e07a63d5ef486e1435edbd579dcf7b4bbaeabed7308071dde697&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
