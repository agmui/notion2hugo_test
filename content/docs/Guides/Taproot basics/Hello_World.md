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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCNGS3D5%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T140745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJHMEUCICzaKIGOJNfysW0KyMJTIatBCO0aqOFtkhr3vRnotYdIAiEApcLxIpxJnUlczXQ1lu73lGb1PcyR89MWDY%2BP6LEj1OsqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFWYU2r4ekW7eaKUyyrcA7DyuCRjRmNwRzoViIlkAfbOaT6ksyoQgqDHcB9peIYfvs0cKcRy3te7nzjkwvlWS5XZiouBoSXAHxaoZGDBWDo3GIQvSU9lLeaFuXvPw9qBUli5Yw2e%2BBEB1ps4hl6FsAZmBfeKimW1xNX0ZjjIuZcQfm6IIF1xKB6yr8rTsK8oH6Yt7xzQlnfvzg%2FGTI%2FLrMmDlyFKxu20Lh%2FrtiLMzI0zrE%2F%2B8owTD5U4FSt2ZSGsi7tw50lkzvXfz6T4IuqU5G1s2xfQ7VcQhlKuftFSBRnJs8jCkLKjRQ7Sh9LTOZib%2BCXBE0qGmV78fs4ApDRzZIy9Fy1dZ6VVGVf2HV5zO9kHPtcWYydsm3JlXVWrDoqQrToEmuG6bKwzPzwJnxAIvq1ZrN0OmJ1LwGb6qEohyDuOKV2sLnBtq%2FKlg82ZzfCiY7JybKEeHqC%2FHdzN5auZaGj7sPV5QMDD8HF743bFt5Z60yBn5wfa3U4wzMNO5kNDRGu9YkMr3fPPUAYFyUt4Me7DJ5uDnqQlezxGHNnWcWobtLyNdQ0I7snyJZEHrsKN3nJA4qBbcsOC78hcVbTI5Rer0ybSgMPHWhdcJpSaibi%2BEPAj9w4EiAiKy6azBiMujawm%2F4TLlPDWjPlFMJLa9b4GOqUBHvuy0WTJBoqscVtxpcAljI1b5KpznOKdbio%2BUd4wWpGcZvkrWOmH%2BUoJqB9o1Co%2F2GQ8cM5czdfmpo4ZOKCGqMvKvl7DY5TiVK%2FZOhMqIN0G6lN9KWAWlir0PTRVgQ7DEQGlQdXBO%2FmcGSAAFfGh0lwtutoMtxAN%2FmERn7xz5CM3F7Jb1VW%2Ftwgn83gQRhRNt7x4NrmWYLySVYef3DRcmkf2SQCB&X-Amz-Signature=2ac86a5531f024701bfbb3a13433af59653c01c6830d15dfa8af37854a070e74&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCNGS3D5%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T140745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJHMEUCICzaKIGOJNfysW0KyMJTIatBCO0aqOFtkhr3vRnotYdIAiEApcLxIpxJnUlczXQ1lu73lGb1PcyR89MWDY%2BP6LEj1OsqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFWYU2r4ekW7eaKUyyrcA7DyuCRjRmNwRzoViIlkAfbOaT6ksyoQgqDHcB9peIYfvs0cKcRy3te7nzjkwvlWS5XZiouBoSXAHxaoZGDBWDo3GIQvSU9lLeaFuXvPw9qBUli5Yw2e%2BBEB1ps4hl6FsAZmBfeKimW1xNX0ZjjIuZcQfm6IIF1xKB6yr8rTsK8oH6Yt7xzQlnfvzg%2FGTI%2FLrMmDlyFKxu20Lh%2FrtiLMzI0zrE%2F%2B8owTD5U4FSt2ZSGsi7tw50lkzvXfz6T4IuqU5G1s2xfQ7VcQhlKuftFSBRnJs8jCkLKjRQ7Sh9LTOZib%2BCXBE0qGmV78fs4ApDRzZIy9Fy1dZ6VVGVf2HV5zO9kHPtcWYydsm3JlXVWrDoqQrToEmuG6bKwzPzwJnxAIvq1ZrN0OmJ1LwGb6qEohyDuOKV2sLnBtq%2FKlg82ZzfCiY7JybKEeHqC%2FHdzN5auZaGj7sPV5QMDD8HF743bFt5Z60yBn5wfa3U4wzMNO5kNDRGu9YkMr3fPPUAYFyUt4Me7DJ5uDnqQlezxGHNnWcWobtLyNdQ0I7snyJZEHrsKN3nJA4qBbcsOC78hcVbTI5Rer0ybSgMPHWhdcJpSaibi%2BEPAj9w4EiAiKy6azBiMujawm%2F4TLlPDWjPlFMJLa9b4GOqUBHvuy0WTJBoqscVtxpcAljI1b5KpznOKdbio%2BUd4wWpGcZvkrWOmH%2BUoJqB9o1Co%2F2GQ8cM5czdfmpo4ZOKCGqMvKvl7DY5TiVK%2FZOhMqIN0G6lN9KWAWlir0PTRVgQ7DEQGlQdXBO%2FmcGSAAFfGh0lwtutoMtxAN%2FmERn7xz5CM3F7Jb1VW%2Ftwgn83gQRhRNt7x4NrmWYLySVYef3DRcmkf2SQCB&X-Amz-Signature=30d6c86e9f7d8080042118e3ee289599ad5a572da20733a50793865d34c1c599&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
