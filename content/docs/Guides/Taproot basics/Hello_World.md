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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HVCLRKT%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T201034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD9oay6Ze2t2AcvjIlbtinvWt3RI%2BuGF1qy1F%2FOkwoTgAIhAPhQ7QK7jsydyni6zOqTF8%2BMqfeMeRF0qxCuVDLHuIAsKogECMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxPu9ChUULC0%2FpbNFkq3AN1kXwxNiaNq5t2A4Vq%2FSwpzThztJZZizCAlu8N7vjGCyMLkqzxmNjI4whIJknUQQ3rw5ACcofSlle3krwFDu%2BiYQCXKE9Rs95IHfb2j5gU79gdfPzARyQ2iYTQg%2FdhAk3okbXaxGWpTH4W%2F7Xz66UhRDwQqRHaWP%2BQDkOoa7df5IZh0hg7CN87eO8HslBII1xrQf9m7m0FbKM4La4tIIjl%2FKuUL6wSkMPVzpyykBjse%2B3jKLaPZrF5TBelcgCpgKAVV2TFj9%2FZsRGKAV921ruskJgN7fpW9Oxn%2BGQJpmhZYlXuZfTaG9D6mCfUwoYMs3uqv2woxNAysGfw4voeOGJTucs8b34ZbImQXdWE1YbxrMz5%2Fa8D4NEHKb9ptmTTG1wNp6U91CBqxOjOLZmqQM%2FrOP53%2BvKWyqKu4co8fDT7eLVRu%2FdpTvnrmhX2DdLiRH5A%2FcLCZiEPNOvgGCI2wS5mhNUb3DPnf9Kkg9ukQVj7GtNPsrE6577XVeMNw2F%2B%2FNEbr4p8fOMGAWKEGwDqE2ABOAK9P3gHc033CWmY1izjUWg%2Bf9P%2BzdV0huxP59gG3%2FG%2BG9FslYKDwl6tPJbtfVX8L8T%2BavQqjDOwWGi4z%2BOt9FmU4ZJaR3ch0RZfsDCNi6LCBjqkAZI3g%2Ft1QwbXVkJIRLJ9zxtzwDMCVybY0deR1FnW4ujA1yh6B%2Bjy3jT4X7LsZgUJbLFEz233UnYszyNeQCUqSL0wVXnTvhnVQMQak32ZCMN0ZaWho%2FVkytQaCXyRpAAp0p0vf6mZ04Vr6nrA7osM8IKa1V0YgVknX08jRD2D6gyOjxXISsZOjmdLKpymQZYoKT5F4SfBQnJRIuj8qZYtDXiafq7S&X-Amz-Signature=f9510163e0de174d16eb89d2cfce5d9a37cd36c425a0e9757e633821d74afd8a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HVCLRKT%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T201034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD9oay6Ze2t2AcvjIlbtinvWt3RI%2BuGF1qy1F%2FOkwoTgAIhAPhQ7QK7jsydyni6zOqTF8%2BMqfeMeRF0qxCuVDLHuIAsKogECMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxPu9ChUULC0%2FpbNFkq3AN1kXwxNiaNq5t2A4Vq%2FSwpzThztJZZizCAlu8N7vjGCyMLkqzxmNjI4whIJknUQQ3rw5ACcofSlle3krwFDu%2BiYQCXKE9Rs95IHfb2j5gU79gdfPzARyQ2iYTQg%2FdhAk3okbXaxGWpTH4W%2F7Xz66UhRDwQqRHaWP%2BQDkOoa7df5IZh0hg7CN87eO8HslBII1xrQf9m7m0FbKM4La4tIIjl%2FKuUL6wSkMPVzpyykBjse%2B3jKLaPZrF5TBelcgCpgKAVV2TFj9%2FZsRGKAV921ruskJgN7fpW9Oxn%2BGQJpmhZYlXuZfTaG9D6mCfUwoYMs3uqv2woxNAysGfw4voeOGJTucs8b34ZbImQXdWE1YbxrMz5%2Fa8D4NEHKb9ptmTTG1wNp6U91CBqxOjOLZmqQM%2FrOP53%2BvKWyqKu4co8fDT7eLVRu%2FdpTvnrmhX2DdLiRH5A%2FcLCZiEPNOvgGCI2wS5mhNUb3DPnf9Kkg9ukQVj7GtNPsrE6577XVeMNw2F%2B%2FNEbr4p8fOMGAWKEGwDqE2ABOAK9P3gHc033CWmY1izjUWg%2Bf9P%2BzdV0huxP59gG3%2FG%2BG9FslYKDwl6tPJbtfVX8L8T%2BavQqjDOwWGi4z%2BOt9FmU4ZJaR3ch0RZfsDCNi6LCBjqkAZI3g%2Ft1QwbXVkJIRLJ9zxtzwDMCVybY0deR1FnW4ujA1yh6B%2Bjy3jT4X7LsZgUJbLFEz233UnYszyNeQCUqSL0wVXnTvhnVQMQak32ZCMN0ZaWho%2FVkytQaCXyRpAAp0p0vf6mZ04Vr6nrA7osM8IKa1V0YgVknX08jRD2D6gyOjxXISsZOjmdLKpymQZYoKT5F4SfBQnJRIuj8qZYtDXiafq7S&X-Amz-Signature=5793ddb711802f78bc395d3686ad51b257599439cc57900d6a9dfb1213ee4748&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
