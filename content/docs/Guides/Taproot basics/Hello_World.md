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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6E2RRJW%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T220658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE%2FZbuz%2BPcVjb4GC4bWfv0I1vOAq4dqWnYxRmqWiUYDnAiEAnKkNFhZJamuZ1AynfA%2BQtybqiOMxxoji7CUZF0xzP3UqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPFhJ26TLGoNXBFssSrcA03z41kHbBjyTpoF1QIIVZ6OBQRUKYaEW%2BaEviNucCtyfLeGe7N1j2isyQEdXKJqxvMAYrlmz5WRGxrYMW0nKXCCzGij3ZDQeAUGkeX33lEFdiTEIQC3ystYESRemQqAdlSjEHCK99FAAOsmf4ynyGgcucmJsWcaEQ53Benrj%2BDThZ21T2C36QDB7inm5Odx66tkeo%2B1Lh1rb%2BH9v%2F1jvri1%2FKRAtCE8GKVrgpXbjhKfgB5uUEUKmC6miWfsoBij95DX0Y%2BHr9ujOliTw%2B8e8O9MTgxCUTpzEeWMumiSSUHsNnJJYxpk9nbJWILNrsvgLPBfWmgEB3af%2FzybRjDtgWNkGDK11XgtHlTo4T9j1oCasiNYtgdoPs1BsGb0Xl%2FiKi2pTaSBrN1Ys0MmFeT4brX8a2Y%2Ft2REVW9VXEVa8SczkNNh1YVmzcdclEjj4qZIp3RU%2B9sOlIMYQZPKCHXngWB9aLWzbMrDjCvVtkYTRgZwME7Pi9XstrL0CJ%2Bb%2Bxn65MAxkogLV0tx3mdYR32jSplTHYGgrQTaloo1D9gaOgJ%2F1cWBAM3g4yrf0035r4JnVfSAXcPGiQxAh%2BLn0tBeDWJbVf%2FQG24NZIq5FOG53bVTCRRkVyM%2BUV6LBywlMJ%2BUzb4GOqUBFqPuFiDCrpcruhZ9TR7OYL1wljCAgv%2BmHs5sx6SCHcNM%2Fx32qfSw73ZhIiy2%2B1BQakm3%2FqROQWArzD7SEq1%2FTRc0XMQsUJRS%2BW7v%2BUW1vJtWJcAR1HpVoq3x7EZjrxHRw8cK2aK6fPsLIIWtAcgJOZNLpHt4BgnK2Qaz28w%2BCMBdlpagZ194MRilqYJyFqrSCpKU6rs6x2mSnsz5eQ%2Bca4bQhSkC&X-Amz-Signature=1cfff84998157fe3e0a73bf890f07adb1cfef05b2ec441b49dfe089d651782db&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6E2RRJW%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T220658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE%2FZbuz%2BPcVjb4GC4bWfv0I1vOAq4dqWnYxRmqWiUYDnAiEAnKkNFhZJamuZ1AynfA%2BQtybqiOMxxoji7CUZF0xzP3UqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPFhJ26TLGoNXBFssSrcA03z41kHbBjyTpoF1QIIVZ6OBQRUKYaEW%2BaEviNucCtyfLeGe7N1j2isyQEdXKJqxvMAYrlmz5WRGxrYMW0nKXCCzGij3ZDQeAUGkeX33lEFdiTEIQC3ystYESRemQqAdlSjEHCK99FAAOsmf4ynyGgcucmJsWcaEQ53Benrj%2BDThZ21T2C36QDB7inm5Odx66tkeo%2B1Lh1rb%2BH9v%2F1jvri1%2FKRAtCE8GKVrgpXbjhKfgB5uUEUKmC6miWfsoBij95DX0Y%2BHr9ujOliTw%2B8e8O9MTgxCUTpzEeWMumiSSUHsNnJJYxpk9nbJWILNrsvgLPBfWmgEB3af%2FzybRjDtgWNkGDK11XgtHlTo4T9j1oCasiNYtgdoPs1BsGb0Xl%2FiKi2pTaSBrN1Ys0MmFeT4brX8a2Y%2Ft2REVW9VXEVa8SczkNNh1YVmzcdclEjj4qZIp3RU%2B9sOlIMYQZPKCHXngWB9aLWzbMrDjCvVtkYTRgZwME7Pi9XstrL0CJ%2Bb%2Bxn65MAxkogLV0tx3mdYR32jSplTHYGgrQTaloo1D9gaOgJ%2F1cWBAM3g4yrf0035r4JnVfSAXcPGiQxAh%2BLn0tBeDWJbVf%2FQG24NZIq5FOG53bVTCRRkVyM%2BUV6LBywlMJ%2BUzb4GOqUBFqPuFiDCrpcruhZ9TR7OYL1wljCAgv%2BmHs5sx6SCHcNM%2Fx32qfSw73ZhIiy2%2B1BQakm3%2FqROQWArzD7SEq1%2FTRc0XMQsUJRS%2BW7v%2BUW1vJtWJcAR1HpVoq3x7EZjrxHRw8cK2aK6fPsLIIWtAcgJOZNLpHt4BgnK2Qaz28w%2BCMBdlpagZ194MRilqYJyFqrSCpKU6rs6x2mSnsz5eQ%2Bca4bQhSkC&X-Amz-Signature=a6f88a821f2b56e8ab3cd75483a36460bd274d7dde96c65382e5aee3c025ce9c&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
