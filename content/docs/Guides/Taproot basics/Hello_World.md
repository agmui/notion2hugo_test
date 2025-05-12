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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BXCV7VF%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T004335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJHMEUCIQCjRspbxqdvp3AmEBwpTikLkbW0KbD6ZeUUR4yQHRUYGgIgVlN0YqNDfAmu7fRbQUaNVQoZCSIIWsIlZiAkS9XY5twqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDBLuRKf0e0eK8ryfircAyzTsMQ57PW6XnNvHcq0ajV9W%2BvWzyvjjRIrmNcDLOJ%2FiPgqi2Jmp8ic64rBV87ReDLgzmwQMPYB3eKjmT63eova%2BSUyZ%2BD6CVNfNeBXTCvgay%2FaPEwsTPW8S9ANnOtaKCX1YnGpX%2BIQZF7bq2zE08ctuE%2FgJj1FcxDCKLbRsCTr4FIarOL3pJUuK4%2BpziCjCk%2B6KArkg0oqDrEVH7MR4tioDcuv3cvSSZrk09EOWpu%2Bbxq5rwRal2WVPN1bK8tazFvSGV8tK89NCjS6Jv5YpBNKR6dsV0LvjJNqi19sG9q%2FEEjs99wjFX8WTEYsCzlRTWKFuZjROIWhd1FqfkvFfMPP3eRGMx6rMe2UbmkWsddWqQKwfv6pWK1fEfMaXaiD4JcGRYGw8wkG0VDQVg5bFXt1W%2F05qY0Zg3zwil37HRyifDlx4tuSOxCoNbYch4E%2BvekRY%2BpxWOGFS6p4n435HHaclyROo%2BtxAe%2BENVhte9x1hnnlwsNmY%2BGJ0wMfj2A54xrV%2Fhmb6%2F%2BpqE25NbEsu0r1cNDc8CylSXTUw4p0g7Y8TL0Z7UULALfhwIK69jtQ4195kxcnl9l6d1849k3B7sFp0bczK68HCZuPbJTq1O7M1PSHtH0usx9SQ1cgMPOEhcEGOqUBlTZnbrfWsGxKpZ6pGL1z0kkMn5Fsm5g%2FzIhcuY1Xlc%2BaaRoUhKzmecoPWIc68k0o4q471lzdgKEfgoV%2FdHJIcxWEZpvOkBfwvLX3bpUsn6hExL0bXcizmZss2rlkfKhDWTnXBnh2vuDAu9vtjyqgPitjT8OhFiHeZhb5KcrWQI8%2FRW7SdhEaI9DIvJRTVoA%2F%2FEGiYoPuFnW5cPk2vx2ibZasEon7&X-Amz-Signature=a9803f0faca552a5b8bfeba84567e58e03ccf84a1c4f6101ba6df54b161b275c&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BXCV7VF%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T004335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJHMEUCIQCjRspbxqdvp3AmEBwpTikLkbW0KbD6ZeUUR4yQHRUYGgIgVlN0YqNDfAmu7fRbQUaNVQoZCSIIWsIlZiAkS9XY5twqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDBLuRKf0e0eK8ryfircAyzTsMQ57PW6XnNvHcq0ajV9W%2BvWzyvjjRIrmNcDLOJ%2FiPgqi2Jmp8ic64rBV87ReDLgzmwQMPYB3eKjmT63eova%2BSUyZ%2BD6CVNfNeBXTCvgay%2FaPEwsTPW8S9ANnOtaKCX1YnGpX%2BIQZF7bq2zE08ctuE%2FgJj1FcxDCKLbRsCTr4FIarOL3pJUuK4%2BpziCjCk%2B6KArkg0oqDrEVH7MR4tioDcuv3cvSSZrk09EOWpu%2Bbxq5rwRal2WVPN1bK8tazFvSGV8tK89NCjS6Jv5YpBNKR6dsV0LvjJNqi19sG9q%2FEEjs99wjFX8WTEYsCzlRTWKFuZjROIWhd1FqfkvFfMPP3eRGMx6rMe2UbmkWsddWqQKwfv6pWK1fEfMaXaiD4JcGRYGw8wkG0VDQVg5bFXt1W%2F05qY0Zg3zwil37HRyifDlx4tuSOxCoNbYch4E%2BvekRY%2BpxWOGFS6p4n435HHaclyROo%2BtxAe%2BENVhte9x1hnnlwsNmY%2BGJ0wMfj2A54xrV%2Fhmb6%2F%2BpqE25NbEsu0r1cNDc8CylSXTUw4p0g7Y8TL0Z7UULALfhwIK69jtQ4195kxcnl9l6d1849k3B7sFp0bczK68HCZuPbJTq1O7M1PSHtH0usx9SQ1cgMPOEhcEGOqUBlTZnbrfWsGxKpZ6pGL1z0kkMn5Fsm5g%2FzIhcuY1Xlc%2BaaRoUhKzmecoPWIc68k0o4q471lzdgKEfgoV%2FdHJIcxWEZpvOkBfwvLX3bpUsn6hExL0bXcizmZss2rlkfKhDWTnXBnh2vuDAu9vtjyqgPitjT8OhFiHeZhb5KcrWQI8%2FRW7SdhEaI9DIvJRTVoA%2F%2FEGiYoPuFnW5cPk2vx2ibZasEon7&X-Amz-Signature=62158fa91e5fd85c3a05dad2347940c85bec48840dc847ecfc796d7b13c7fe05&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
