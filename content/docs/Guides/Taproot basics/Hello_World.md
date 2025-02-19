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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643X4IMZM%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T070753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIQDlR1Qy5Ysa3VtIdkq7%2BtOGQ6RYIaKe6pJ2sTRTr8Yv6QIgKoeHjCd%2BIUX7DhyBCp%2F4c%2FPUUh4oCQEuHhZIQwzKi7IqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDDa1RafELnHGy%2Bk2yrcA%2BeaMhMUm2oKxEaBnDFnAoIjLQHH12L4W7m4yGViA4kn2jV0tfQOh3c8cPg9MKgLTZzBkzWt0%2BNZCxvLFiYMPavYkzG0YFj4nFQtB0Pl1Fi3hlTuV1qvY9BbzpGj%2FsMMkXhgPaTimR4gU%2BWYO7hMZ3uxNHI7HW3UUxrvOSKxpXvFOleuR9TxHXvhpVLjmW%2FvuArDJoFR%2BN0loAiLbM1BO6cBWV8WhdZFZFaJLtKBmC5Z%2FQ7QVs1TtiJSaG3SEuHo7JkNeXWRFGZJELTIFewH8yCVB2LFR2OZT62H35y%2BPknvbp18bjfIfC%2BNoHgS4Quwg%2F8qXW9C6K%2Bw2xwMItiqsQ45BlmtnmkodglCyyCOWvnAQJvb4smldTRCgMr64kWoWSGWvOOzH20zlDRFCmpYv3a3s69lFb9%2BXRftlyrO7yU%2BpeecVZkKcaD11Eg2ZtEMPi1nBTjy1chv2%2BU3S8s8C3OFZxkyqO3w11yMbVJOVSym6Oa6Gt1QreIZHZwdG3ACHDPFKJeYZ3j%2BRZQWHpzfBYsj1j9f6iCk5S%2FWfSshGksjeqvGKPjh%2BfXVZmyjZCdhOifkpjsc%2BxApZ97zyt%2FDUev%2FwvcJD%2FsGMne7vDeV0dToPofE7qS34f5fG1OZMKT%2B1b0GOqUB54qMHBz0x52EI9WhGLy5Cv3mnmX7opA0yzLGKdYeYcbKtPJlWXXX4VdHAKzkujeGJWL2hrc5Hw4TWelmMTTkj4DEyDGJ39z9O16sgq3IZYJ9FsOM%2BRVCuhgfOGc08G6ThhRGASkZai6pDjwEHVGhtk7IfgdkIsz6BVhQGTbqw6S2geDGDxMMa%2FNDbx%2FcyZMNg0DKS6VD84%2F%2FxMCa%2BtTY5SKvTPPQ&X-Amz-Signature=5a7ba6121438048e9f5a49576c33595d97da05c230acc17b2dacd4189055f20d&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643X4IMZM%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T070753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIQDlR1Qy5Ysa3VtIdkq7%2BtOGQ6RYIaKe6pJ2sTRTr8Yv6QIgKoeHjCd%2BIUX7DhyBCp%2F4c%2FPUUh4oCQEuHhZIQwzKi7IqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDDa1RafELnHGy%2Bk2yrcA%2BeaMhMUm2oKxEaBnDFnAoIjLQHH12L4W7m4yGViA4kn2jV0tfQOh3c8cPg9MKgLTZzBkzWt0%2BNZCxvLFiYMPavYkzG0YFj4nFQtB0Pl1Fi3hlTuV1qvY9BbzpGj%2FsMMkXhgPaTimR4gU%2BWYO7hMZ3uxNHI7HW3UUxrvOSKxpXvFOleuR9TxHXvhpVLjmW%2FvuArDJoFR%2BN0loAiLbM1BO6cBWV8WhdZFZFaJLtKBmC5Z%2FQ7QVs1TtiJSaG3SEuHo7JkNeXWRFGZJELTIFewH8yCVB2LFR2OZT62H35y%2BPknvbp18bjfIfC%2BNoHgS4Quwg%2F8qXW9C6K%2Bw2xwMItiqsQ45BlmtnmkodglCyyCOWvnAQJvb4smldTRCgMr64kWoWSGWvOOzH20zlDRFCmpYv3a3s69lFb9%2BXRftlyrO7yU%2BpeecVZkKcaD11Eg2ZtEMPi1nBTjy1chv2%2BU3S8s8C3OFZxkyqO3w11yMbVJOVSym6Oa6Gt1QreIZHZwdG3ACHDPFKJeYZ3j%2BRZQWHpzfBYsj1j9f6iCk5S%2FWfSshGksjeqvGKPjh%2BfXVZmyjZCdhOifkpjsc%2BxApZ97zyt%2FDUev%2FwvcJD%2FsGMne7vDeV0dToPofE7qS34f5fG1OZMKT%2B1b0GOqUB54qMHBz0x52EI9WhGLy5Cv3mnmX7opA0yzLGKdYeYcbKtPJlWXXX4VdHAKzkujeGJWL2hrc5Hw4TWelmMTTkj4DEyDGJ39z9O16sgq3IZYJ9FsOM%2BRVCuhgfOGc08G6ThhRGASkZai6pDjwEHVGhtk7IfgdkIsz6BVhQGTbqw6S2geDGDxMMa%2FNDbx%2FcyZMNg0DKS6VD84%2F%2FxMCa%2BtTY5SKvTPPQ&X-Amz-Signature=0fc1fe9ae4fe32d3fc6499e74aba94216efc67ab373c70111ef2b9e5dcd4f22f&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
