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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645BXE5FP%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T220635Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFrp7BGtwb1bsBtw290YN%2FyYycbVAAUyfqNfsfb2Z3gqAiBx1Xi3iF2T2jnZkkPgoGruKv56Eohf05n2AQ3YLAREgSqIBAiX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2EC7%2BkAz5yxtyQ20KtwDHfDDYL1hFFSsi%2F7Wr8w09SsFMK%2FhRd9MoWlEPRHA4G5NyavEVr%2FrA24tu%2B2Ye6%2FrrwFqwFdXA%2FK8ez2TGidgTR953%2BdZR5xgI4ADJ5VoxULfywK%2FurfzgOIQzCcQA%2FsHE3Q3jUtDO3n9H96LRUE1skJp%2FMnppZc9Jh62ezdvJPBd5CGgLiN53RtQHfiAetiV0RrSYrl8lg3FYGGeUOfbF1aBsVIeT4F2Ws4K%2FRLFaUErD62rUl2PQqUKv2dJHLbqFZRAzRb6Z1FkYOxeOyI%2BQnJ75Cdwd2DjEIskcfRfGFDt%2FRSEDetMP7nZweh%2B%2F8k7jxn7RFrWAXasUH%2BMJDxxCGbKs2bZGKMgCmGjltd77surrVHzagHZlFFp2KyaBn71Hbc%2Brlb9lhRr6PxV9gAi3iJyLWVjMdNM%2FWaSDDCSjLnI7KYNAmbauxqOi%2F%2BRxwlX2h42g4bv4FsKSWFHTRlL6fFMRqY%2BAgv7PbDhDJie7nVHV3Wv7DdXClp4jJ6QNd1HhuhkpVfPRNgZDVDoApR33ZzUgjVv%2FPCjUCFR0h43iZgCvNlErO6TE%2Bb%2Ba3PUkaCIvpTBbiaaZcLmQee4n6W3MupMCbSnBdYsfp%2BfELiv8QlQCE%2FF2QHIzO%2Fwl80w7MbqvAY6pgHa36FZ%2F8AhbrEQM2907zrs8DG%2FEgq1kGpuqi3j6Ix7z5mv7ETcAWJs52rcPfLL3yw73CGTMFb5Tzg69SYl8x4DBNuPeiVbyrm8KOuntFpS2n2GM06Myvr3dBQ5Ld4qFNbSHRV6CHy%2FNNIB22QRClbcxrAIIuTDFuj9nDciELuxnE8y17apXdVuAXJZCledlKfPZ2KAJ2P%2BAe8G%2Fgui0%2B2GFixnLVOQ&X-Amz-Signature=ff45c14a13895213a869749615931f4f5fa511e4b30cc2e41d2ca3dc24cdec01&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645BXE5FP%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T220635Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFrp7BGtwb1bsBtw290YN%2FyYycbVAAUyfqNfsfb2Z3gqAiBx1Xi3iF2T2jnZkkPgoGruKv56Eohf05n2AQ3YLAREgSqIBAiX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2EC7%2BkAz5yxtyQ20KtwDHfDDYL1hFFSsi%2F7Wr8w09SsFMK%2FhRd9MoWlEPRHA4G5NyavEVr%2FrA24tu%2B2Ye6%2FrrwFqwFdXA%2FK8ez2TGidgTR953%2BdZR5xgI4ADJ5VoxULfywK%2FurfzgOIQzCcQA%2FsHE3Q3jUtDO3n9H96LRUE1skJp%2FMnppZc9Jh62ezdvJPBd5CGgLiN53RtQHfiAetiV0RrSYrl8lg3FYGGeUOfbF1aBsVIeT4F2Ws4K%2FRLFaUErD62rUl2PQqUKv2dJHLbqFZRAzRb6Z1FkYOxeOyI%2BQnJ75Cdwd2DjEIskcfRfGFDt%2FRSEDetMP7nZweh%2B%2F8k7jxn7RFrWAXasUH%2BMJDxxCGbKs2bZGKMgCmGjltd77surrVHzagHZlFFp2KyaBn71Hbc%2Brlb9lhRr6PxV9gAi3iJyLWVjMdNM%2FWaSDDCSjLnI7KYNAmbauxqOi%2F%2BRxwlX2h42g4bv4FsKSWFHTRlL6fFMRqY%2BAgv7PbDhDJie7nVHV3Wv7DdXClp4jJ6QNd1HhuhkpVfPRNgZDVDoApR33ZzUgjVv%2FPCjUCFR0h43iZgCvNlErO6TE%2Bb%2Ba3PUkaCIvpTBbiaaZcLmQee4n6W3MupMCbSnBdYsfp%2BfELiv8QlQCE%2FF2QHIzO%2Fwl80w7MbqvAY6pgHa36FZ%2F8AhbrEQM2907zrs8DG%2FEgq1kGpuqi3j6Ix7z5mv7ETcAWJs52rcPfLL3yw73CGTMFb5Tzg69SYl8x4DBNuPeiVbyrm8KOuntFpS2n2GM06Myvr3dBQ5Ld4qFNbSHRV6CHy%2FNNIB22QRClbcxrAIIuTDFuj9nDciELuxnE8y17apXdVuAXJZCledlKfPZ2KAJ2P%2BAe8G%2Fgui0%2B2GFixnLVOQ&X-Amz-Signature=ec2ebf05d15c53fce078e79ef515f27aaa168c760c4d4dede65567b85753efff&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
