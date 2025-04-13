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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BGNMMYT%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T070723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIBKnsyGq9Sm1HuyHbrnI60h6EwrpZkcOdPaHOoBRtyL9AiEA%2BW8%2FJr9LgE6cTopFWNi6shu2eC6BtalLpo04loOwnu4qiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBPLkpKMK0IL3RgbVircA8Y06QjK8%2B%2F4slTvpkRY%2B4n1cu40VAljc58Eb55yIPTAzZdk549RIDNHs1qBM540n9kI39F4qNKsIBUpES0S5SC8dgG9lmmSadGuDLOchVTek1MyJcDGVg8WvDocSm0z%2BRmIRQ3Eto1DUIbbs1NZJpQgTPUmjxK2sBNdkmRB%2FEDDb0lb%2FldpvSm20JIT024YwWiNmXwJ9aoI8JXwtX%2FpSDDOaEK3bUVnOxx%2ByvjizkB%2FzuwBZLkIAjq9WnowEMKtfgm0YuBeDc5uERBfaAIK3TWhoGTQkRY%2F2KuIz3Ei2qOM5vzuUMKWifWiQo1MPENp5%2B0296jGnSwFXldpCl7PaAZ4FnNG4yaGev11Qo4GwD8Ol64Gb%2B57ighWhgI9j4QQLloh%2FPbN3FCBkfuNNc0H0IBq2fn0VWJiYHpwxFisMaSckxs6Ugq4k7d54h2n8r4Zat5d4wXYFlT1SIqsweS78O3tFRdDKe%2FI8aVpoVrH6q6ixf9%2F%2FJPy3zcItIUGPzq65ZITnX1CP2njyuxkkXU0RzU%2FU01JATX3TBxEF6hIO2TaOva4M5OFrcLUeNOwDG1tX5GTCIpErFpxi0f5ORjkpNT6CIHcMSjO1o%2B1fQ3mwHLAPQZDO%2BYk72BPF6zHMOaN7b8GOqUBwK1HLgtCNDUaQ21XO3%2BMJPKmNBqvOSHA8vb%2BcCuNwFlKu7UF3bn7qMUO%2FuInASoVHR0Q9VZlDw2c6E%2FLPCZaaR7OYB1rVvXCKeRJgs%2Fpk0jjGHgFouJgiHpSQQVgdHjHNcGeqp685fRKqdzgN9Zuogyf1kCk9lj%2F9M71v2H990zQBQ35Hvec9rDTHplCptKnxZ1uwWIQxs6YTu3%2BfdQ%2B9T1LZSEQ&X-Amz-Signature=7cef891bc539c87d7aac1831d4fed3d68875e4534624e464290fbb02ddb8056d&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BGNMMYT%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T070723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIBKnsyGq9Sm1HuyHbrnI60h6EwrpZkcOdPaHOoBRtyL9AiEA%2BW8%2FJr9LgE6cTopFWNi6shu2eC6BtalLpo04loOwnu4qiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBPLkpKMK0IL3RgbVircA8Y06QjK8%2B%2F4slTvpkRY%2B4n1cu40VAljc58Eb55yIPTAzZdk549RIDNHs1qBM540n9kI39F4qNKsIBUpES0S5SC8dgG9lmmSadGuDLOchVTek1MyJcDGVg8WvDocSm0z%2BRmIRQ3Eto1DUIbbs1NZJpQgTPUmjxK2sBNdkmRB%2FEDDb0lb%2FldpvSm20JIT024YwWiNmXwJ9aoI8JXwtX%2FpSDDOaEK3bUVnOxx%2ByvjizkB%2FzuwBZLkIAjq9WnowEMKtfgm0YuBeDc5uERBfaAIK3TWhoGTQkRY%2F2KuIz3Ei2qOM5vzuUMKWifWiQo1MPENp5%2B0296jGnSwFXldpCl7PaAZ4FnNG4yaGev11Qo4GwD8Ol64Gb%2B57ighWhgI9j4QQLloh%2FPbN3FCBkfuNNc0H0IBq2fn0VWJiYHpwxFisMaSckxs6Ugq4k7d54h2n8r4Zat5d4wXYFlT1SIqsweS78O3tFRdDKe%2FI8aVpoVrH6q6ixf9%2F%2FJPy3zcItIUGPzq65ZITnX1CP2njyuxkkXU0RzU%2FU01JATX3TBxEF6hIO2TaOva4M5OFrcLUeNOwDG1tX5GTCIpErFpxi0f5ORjkpNT6CIHcMSjO1o%2B1fQ3mwHLAPQZDO%2BYk72BPF6zHMOaN7b8GOqUBwK1HLgtCNDUaQ21XO3%2BMJPKmNBqvOSHA8vb%2BcCuNwFlKu7UF3bn7qMUO%2FuInASoVHR0Q9VZlDw2c6E%2FLPCZaaR7OYB1rVvXCKeRJgs%2Fpk0jjGHgFouJgiHpSQQVgdHjHNcGeqp685fRKqdzgN9Zuogyf1kCk9lj%2F9M71v2H990zQBQ35Hvec9rDTHplCptKnxZ1uwWIQxs6YTu3%2BfdQ%2B9T1LZSEQ&X-Amz-Signature=83a816140133f5136330e2586c6be2aaa71b9b30becf1110b2a446e4a71c0636&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
