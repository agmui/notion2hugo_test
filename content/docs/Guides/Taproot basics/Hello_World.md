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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTSG46B4%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T140750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICEusBg9m9TyXb9vJaRwvy9Huz%2BneBnrApVCXrljrFWaAiEAnWJFdRwxbCCKTYpqsb%2Fzao8KLCfoGEJaIbKegV5DMMkq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDDc5WEhwEuPJA4D2vircA2EBz62%2Bcb9jDB20%2BHNIdPliw4Kja9iP7aE5XR8WOXYPjF73OOMaiUiCtlvUwyNfg5V7a0pOE3vAa%2Bukp9eJK8ZSb%2BWYeJazPgHDd%2F4nVv%2Bg%2BlEeeowe%2FxryfRH%2FN9CwIrtdrinV2fVJFuEPBOmINq1JfAkulooZuPk07H8MBgsWALQJkT2hC%2F9edSSzEvviWYKXTmIVI%2FGh6Vn1VFRRr%2Fbrfsi%2FGLKPyTy0UTeM5ODLaNPGGnzvQzfpgz%2FN5QgCVMK9aShduUUdaRl4y28ITo47ESF7vL0OarPcUCiuTUq9TX54uLjM5bcEvSFBMTettIkAl0nN2YCEED72xKNkc4KVMUxj8HSCpE9UOEiA533ZAwHUdlAviKhiZnn2IG7C%2F%2BYRbn%2FreyF5Uc%2B%2BFAzheXqCbtsa7ze9vx1Mtl%2BrtDBkU3idTxw5y%2Bj9cJ%2FTXiplyWSs2oIDq4QM6M5iX1pMFDhEvF%2B5cmzkZ%2B%2BMRXXVyivUJM%2Fg%2BwSlyWh5vvgEkYW6oKqHmvR%2FjpwQDV1YRPvHMyvNUdua6wHk467VrDwqPtku4bnimc3fhxJht9vgQgxarc9BrQ0j1oAnu%2FRLvCczS4ML94G2GP3EX%2BZ4I4PU89DeiMO7%2BfHBsI7xjv3DML%2FSvcQGOqUB7L96T0NXYGj6rAUxS2ZKmpb3XiCGCywb6G2d5IckWIyGQ6%2FTPpIm6etkxRZ9%2FheYDlKps8GikiqlhfHXrqyIzz5PkGP1CCicEnFWhIn9CUXVqrYk32Anx3ACn8%2FNcPGTcAX%2BHXCvtFv57mX6My9Uze0H5A%2BxvjwwjFZoOT1pojstxA8NQPlUiyNLVym0E3k8h3i%2BkzMXLeJht788PG%2BgQ%2B1yWMAv&X-Amz-Signature=319a5112533702e7abb83241f5ca16fe96c6f9f8df6fdb2be5d847337c5f9184&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTSG46B4%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T140750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICEusBg9m9TyXb9vJaRwvy9Huz%2BneBnrApVCXrljrFWaAiEAnWJFdRwxbCCKTYpqsb%2Fzao8KLCfoGEJaIbKegV5DMMkq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDDc5WEhwEuPJA4D2vircA2EBz62%2Bcb9jDB20%2BHNIdPliw4Kja9iP7aE5XR8WOXYPjF73OOMaiUiCtlvUwyNfg5V7a0pOE3vAa%2Bukp9eJK8ZSb%2BWYeJazPgHDd%2F4nVv%2Bg%2BlEeeowe%2FxryfRH%2FN9CwIrtdrinV2fVJFuEPBOmINq1JfAkulooZuPk07H8MBgsWALQJkT2hC%2F9edSSzEvviWYKXTmIVI%2FGh6Vn1VFRRr%2Fbrfsi%2FGLKPyTy0UTeM5ODLaNPGGnzvQzfpgz%2FN5QgCVMK9aShduUUdaRl4y28ITo47ESF7vL0OarPcUCiuTUq9TX54uLjM5bcEvSFBMTettIkAl0nN2YCEED72xKNkc4KVMUxj8HSCpE9UOEiA533ZAwHUdlAviKhiZnn2IG7C%2F%2BYRbn%2FreyF5Uc%2B%2BFAzheXqCbtsa7ze9vx1Mtl%2BrtDBkU3idTxw5y%2Bj9cJ%2FTXiplyWSs2oIDq4QM6M5iX1pMFDhEvF%2B5cmzkZ%2B%2BMRXXVyivUJM%2Fg%2BwSlyWh5vvgEkYW6oKqHmvR%2FjpwQDV1YRPvHMyvNUdua6wHk467VrDwqPtku4bnimc3fhxJht9vgQgxarc9BrQ0j1oAnu%2FRLvCczS4ML94G2GP3EX%2BZ4I4PU89DeiMO7%2BfHBsI7xjv3DML%2FSvcQGOqUB7L96T0NXYGj6rAUxS2ZKmpb3XiCGCywb6G2d5IckWIyGQ6%2FTPpIm6etkxRZ9%2FheYDlKps8GikiqlhfHXrqyIzz5PkGP1CCicEnFWhIn9CUXVqrYk32Anx3ACn8%2FNcPGTcAX%2BHXCvtFv57mX6My9Uze0H5A%2BxvjwwjFZoOT1pojstxA8NQPlUiyNLVym0E3k8h3i%2BkzMXLeJht788PG%2BgQ%2B1yWMAv&X-Amz-Signature=a572886483ecb31a46bf06818b40e520deeafa4de37c16f603f8770782532c16&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
