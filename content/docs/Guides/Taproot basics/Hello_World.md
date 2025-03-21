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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNAOPYMU%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T032218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJIMEYCIQCHt%2BeGix6cwY4%2FO7YhKoOXmySTjWDsSCsN2oE8jbqhBwIhAPeTGPnGnVUioonW0Ecs5X9Dr8uUeLUPtdrnqjTQNaNrKogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igya7p%2F3iFvnmwuNvH4q3AMfWTf3kYPEpCM4uy%2FEFbj0%2BV4uVpABd0WMCrj7rcl5YBWuzGkUbVwvux7V2Pxn2r1ajZnwzEiLQlibfcbPeepNuVmXkuWw1Fs7oLS9w4FUjXQZWmdg5uv5f740RAPAXWH6gxs9EwfIFW2Qj7ov%2BKFIZGcJOz9RDETQT0c4HNvO2cfxhcUj0M%2BErfeA1ldxMog9HRkvB1gVj%2Fei4poJDCaXiSVQJkRjcwxYJeX25IPT3AvDWstIgMEGv%2Fig3b%2F8IJBkLK9nlhle6Oh4NeYkidf2DJ1PVpZsjYqhxbIRif17dMytLSntDeq96eUwDfBWb8GuOw%2BG4gMg3V0WBiqXc%2BIQZjwZkPXAbrr3ehOQMNc5MyC8XKQT7nTcRSAOK2ru5iuzOuLmKTo4Ni4uXERW8uvTsVrPRAwyYy%2FEVDQOtguAlI9kJqweez3e87830CKbXDVLDeMttICnsSISg4%2BqY4RYcXM3waGXxHl%2BjmW4lXNvbKFsYqgdZ2Ox8lqoDl%2BoTGVCVPG8IArUiUiAEti3GNSBmRGei%2FvU%2BocQOGSztvhrLw%2B%2FLsdU64HWBpGk9FHp4wLfC3BHZrKXARLzSaygjbnsai%2B5YLRzSexQENxNDAwuzae%2BLjxJ34bULjBSgTD1l%2FO%2BBjqkAZGFRfeu%2BIPVY7x6Rn6xUA6UBcCQe41Q85o%2BQEUAD04CngrCrYAC%2FLSUP%2BEzx21egA5B1vV5ex48h3qhQRJ%2BlUwLhdgcL8QYCHpQpcNctzAYaYrK0noZgRJngLauy7Vp8Taf%2B6yV%2BEvnTG7S09GnU%2Bsk8bokhlnjAGMlBnLCVnN975PYNVxeq4pPsldqRGX9ChtqIvCMGTkf%2BAvsdq1TbSrEjVyb&X-Amz-Signature=bb7f67a3c8025ddd7261698e8f67661f16b0ba6635c287611a320def11d88eaa&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNAOPYMU%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T032218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJIMEYCIQCHt%2BeGix6cwY4%2FO7YhKoOXmySTjWDsSCsN2oE8jbqhBwIhAPeTGPnGnVUioonW0Ecs5X9Dr8uUeLUPtdrnqjTQNaNrKogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igya7p%2F3iFvnmwuNvH4q3AMfWTf3kYPEpCM4uy%2FEFbj0%2BV4uVpABd0WMCrj7rcl5YBWuzGkUbVwvux7V2Pxn2r1ajZnwzEiLQlibfcbPeepNuVmXkuWw1Fs7oLS9w4FUjXQZWmdg5uv5f740RAPAXWH6gxs9EwfIFW2Qj7ov%2BKFIZGcJOz9RDETQT0c4HNvO2cfxhcUj0M%2BErfeA1ldxMog9HRkvB1gVj%2Fei4poJDCaXiSVQJkRjcwxYJeX25IPT3AvDWstIgMEGv%2Fig3b%2F8IJBkLK9nlhle6Oh4NeYkidf2DJ1PVpZsjYqhxbIRif17dMytLSntDeq96eUwDfBWb8GuOw%2BG4gMg3V0WBiqXc%2BIQZjwZkPXAbrr3ehOQMNc5MyC8XKQT7nTcRSAOK2ru5iuzOuLmKTo4Ni4uXERW8uvTsVrPRAwyYy%2FEVDQOtguAlI9kJqweez3e87830CKbXDVLDeMttICnsSISg4%2BqY4RYcXM3waGXxHl%2BjmW4lXNvbKFsYqgdZ2Ox8lqoDl%2BoTGVCVPG8IArUiUiAEti3GNSBmRGei%2FvU%2BocQOGSztvhrLw%2B%2FLsdU64HWBpGk9FHp4wLfC3BHZrKXARLzSaygjbnsai%2B5YLRzSexQENxNDAwuzae%2BLjxJ34bULjBSgTD1l%2FO%2BBjqkAZGFRfeu%2BIPVY7x6Rn6xUA6UBcCQe41Q85o%2BQEUAD04CngrCrYAC%2FLSUP%2BEzx21egA5B1vV5ex48h3qhQRJ%2BlUwLhdgcL8QYCHpQpcNctzAYaYrK0noZgRJngLauy7Vp8Taf%2B6yV%2BEvnTG7S09GnU%2Bsk8bokhlnjAGMlBnLCVnN975PYNVxeq4pPsldqRGX9ChtqIvCMGTkf%2BAvsdq1TbSrEjVyb&X-Amz-Signature=b8726aff72bb8dd6b9dc6cb650b51fe6f1f276ba15e357f4ebe5419edd405816&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
