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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVVEVO7T%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T201001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICHCYhhZm7uC3d0ZC6ezVQXq%2FM1Oj5cwZA%2BsnUNc8omSAiEA7OS1qzo98I3jidurHpUaCyqbmjW8H27e8vi3CoTh8a4qiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKGexQBKfpy1tJYlhyrcA9hUP7b%2BqKdZ4m52Ps%2FXn7ORW0onVOE%2FkUQb0DbrnTBDVAoEChzmpEj94aq1hmZejpy%2BprtBh4kqp4%2FJS4Wndo3bEYgjOGi9n4shza%2BWPW3rxyrCxrlWH4SIsP2THN6LuS2yP%2FC9lfoz2OGPbO%2FDGPbCbuFr4SOhmTqfNgNbTFzJ3orBiRkzYPUFuBFvNrUHV5jU4TFzDbFnwp%2BJ3w60obW%2BKua%2Bwelth%2B8pd4I5Nde45JNF8LkCgFmcesu7ukqo5GFyVb6ufGaokLXBJObDFWWN41wmUz836kOZj9PupkfSa3eki8jLcHUE1p4QjvaVE38I%2FYnFVn3ssN01t2MKCCpFR2qt6dIVsZ96bcqK2xVW2w8Wd5FaIt5gV3DHsaJMSmHqFREGa5mT%2Bz%2BXqDPniaoRptaFscQqshWDDZ0X2m7RdZ%2Bi%2F0ZiLXIr8aAd7%2BC0FQadwPvgyJOCl3EreUJUXl%2FYIk9l2EyCDKAl9dlBhz7a3fl93bive8PvlpR78dkce6GcEdMLPH8HoHZ4trg8MTiwvASknS85XBGgqKnxpHAPNMrcelm8kZXBdf8WphWKfFeXsX6YIZx31JQAAP4Auc8lqP7ev7EHsRyUssDuiFNgUC5xGwnDOv5Lge%2BfMMPVxcMGOqUBIbJCuv%2BkEHajQyOQI1R%2FI9grU8dQuR%2BZtH6XAiJ2vcl2oOa%2FqCFyHBBLF8WQRRNy%2F6eE72IsajOFsdrCaoPZILASjmu6x%2BWWKz%2FiGa96GjeBieIFURggsbt67tv94Ie7sP6HlBtsSLaltGOWI6jstAtOJGOvWP3I8aazBRubLdgjXfW5Bia9gpACxu9JGA84wRUYAaYWMVnapObONnui1uNGU6Jo&X-Amz-Signature=e5cad140608700e7b3e3b12c754eb4d6b3999697a991fb53159942d635e25493&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVVEVO7T%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T201001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICHCYhhZm7uC3d0ZC6ezVQXq%2FM1Oj5cwZA%2BsnUNc8omSAiEA7OS1qzo98I3jidurHpUaCyqbmjW8H27e8vi3CoTh8a4qiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKGexQBKfpy1tJYlhyrcA9hUP7b%2BqKdZ4m52Ps%2FXn7ORW0onVOE%2FkUQb0DbrnTBDVAoEChzmpEj94aq1hmZejpy%2BprtBh4kqp4%2FJS4Wndo3bEYgjOGi9n4shza%2BWPW3rxyrCxrlWH4SIsP2THN6LuS2yP%2FC9lfoz2OGPbO%2FDGPbCbuFr4SOhmTqfNgNbTFzJ3orBiRkzYPUFuBFvNrUHV5jU4TFzDbFnwp%2BJ3w60obW%2BKua%2Bwelth%2B8pd4I5Nde45JNF8LkCgFmcesu7ukqo5GFyVb6ufGaokLXBJObDFWWN41wmUz836kOZj9PupkfSa3eki8jLcHUE1p4QjvaVE38I%2FYnFVn3ssN01t2MKCCpFR2qt6dIVsZ96bcqK2xVW2w8Wd5FaIt5gV3DHsaJMSmHqFREGa5mT%2Bz%2BXqDPniaoRptaFscQqshWDDZ0X2m7RdZ%2Bi%2F0ZiLXIr8aAd7%2BC0FQadwPvgyJOCl3EreUJUXl%2FYIk9l2EyCDKAl9dlBhz7a3fl93bive8PvlpR78dkce6GcEdMLPH8HoHZ4trg8MTiwvASknS85XBGgqKnxpHAPNMrcelm8kZXBdf8WphWKfFeXsX6YIZx31JQAAP4Auc8lqP7ev7EHsRyUssDuiFNgUC5xGwnDOv5Lge%2BfMMPVxcMGOqUBIbJCuv%2BkEHajQyOQI1R%2FI9grU8dQuR%2BZtH6XAiJ2vcl2oOa%2FqCFyHBBLF8WQRRNy%2F6eE72IsajOFsdrCaoPZILASjmu6x%2BWWKz%2FiGa96GjeBieIFURggsbt67tv94Ie7sP6HlBtsSLaltGOWI6jstAtOJGOvWP3I8aazBRubLdgjXfW5Bia9gpACxu9JGA84wRUYAaYWMVnapObONnui1uNGU6Jo&X-Amz-Signature=a618b036867333f1166dd6e61a4cb04a5192efbcf7d2eadf1f7217057279c725&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
