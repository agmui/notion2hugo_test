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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHSRGWD6%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T090832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCXmiwR87AWYLfrMfekuSvBZ2qq6zInzlox1dY%2B%2FKMiQwIhAOyD2DlT0PhLfNrGE4uI9z5vwjcT7H4zvTGLAV6Bw5vFKogECOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw80snauO3c79o76xMq3APH%2Bwi4P22kQsAQllVkAUYHvmtHYjxmpLYimoN2j0IDZ6wo2Kmuv9f3BW3eZqL%2BBsWoSOWqdwlgOmovlCel3ySEVxZXBV0v3vV%2Ffe4SXLm6kw%2FRPmbZjn7e8e7O3UIpJajghor2Z2%2BLSm7VbAFNXOzSjLNTbIRHxU7w9u7vbXtyJjx15SoMMdj1XLFvyOXu8nA%2FpUSq4m9N1XgbGkDwqsDWJnkLyRu9dQyDYJzrz1dWR%2BoO80XYEdhQ%2FYr25eJbQoxLzhCg0MLBjCuQfA%2B8slBKj861ScmJ4yR1WqEdkwtkdoccd1V2UKyEOj2MJD1LqTVPsGWfBYi1p1dK7UXwEH5I9jwPhy%2FNdpl1r%2FBlBReA3gzyp%2BCL5aTZFa8WJJdj3Kd81ut2RMjqRbVPf1u9d%2FkAXxtGLhQ0nqpUfZaW%2FVFkwfECdxGYYt4FdWRTkxfz1IZQVjq8rcdj4Io6ldKN5412NbUeYkYXy6hVHYavN6NhTfma%2FId9jVHNkUo61a1rsUNEIIBLEGybdQadnQFfBsEGPurOnW2TWxeUl%2B9EcHbMYV%2BbT0ltDA5dP3aIMpnS49kpAc2J2bIFaHh%2FzR00RmKK8rPpeMZGGBccpp2ZtSPX6Wgwwi1FMXk6bEmTeDD4xc%2B%2BBjqkAWeGECmUZ%2FmUWOSR9pi6gY6wjMHm6Hw4oEOdjZj28zgdHDK72kYRKtrHr05aN3Ylzb1LLSDTXJKNjbbKaEEjbRZk6NCiY5o4E7LRoIbR3EAyxm68eDM%2FrMrNufcAIY7AM6PlhmTpfEkWsKeI5Wlc4e5n4h13zfcMuaQRfn78kA17z6bkc1lNZZjM9mi4UzGU7k7d0J713gbdTKHcDVrj%2BRVXvoXu&X-Amz-Signature=88479b90311be3f75970bfadaf7b50f8e04d46782f9b73cf16acfc52f1a4372b&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHSRGWD6%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T090832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCXmiwR87AWYLfrMfekuSvBZ2qq6zInzlox1dY%2B%2FKMiQwIhAOyD2DlT0PhLfNrGE4uI9z5vwjcT7H4zvTGLAV6Bw5vFKogECOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw80snauO3c79o76xMq3APH%2Bwi4P22kQsAQllVkAUYHvmtHYjxmpLYimoN2j0IDZ6wo2Kmuv9f3BW3eZqL%2BBsWoSOWqdwlgOmovlCel3ySEVxZXBV0v3vV%2Ffe4SXLm6kw%2FRPmbZjn7e8e7O3UIpJajghor2Z2%2BLSm7VbAFNXOzSjLNTbIRHxU7w9u7vbXtyJjx15SoMMdj1XLFvyOXu8nA%2FpUSq4m9N1XgbGkDwqsDWJnkLyRu9dQyDYJzrz1dWR%2BoO80XYEdhQ%2FYr25eJbQoxLzhCg0MLBjCuQfA%2B8slBKj861ScmJ4yR1WqEdkwtkdoccd1V2UKyEOj2MJD1LqTVPsGWfBYi1p1dK7UXwEH5I9jwPhy%2FNdpl1r%2FBlBReA3gzyp%2BCL5aTZFa8WJJdj3Kd81ut2RMjqRbVPf1u9d%2FkAXxtGLhQ0nqpUfZaW%2FVFkwfECdxGYYt4FdWRTkxfz1IZQVjq8rcdj4Io6ldKN5412NbUeYkYXy6hVHYavN6NhTfma%2FId9jVHNkUo61a1rsUNEIIBLEGybdQadnQFfBsEGPurOnW2TWxeUl%2B9EcHbMYV%2BbT0ltDA5dP3aIMpnS49kpAc2J2bIFaHh%2FzR00RmKK8rPpeMZGGBccpp2ZtSPX6Wgwwi1FMXk6bEmTeDD4xc%2B%2BBjqkAWeGECmUZ%2FmUWOSR9pi6gY6wjMHm6Hw4oEOdjZj28zgdHDK72kYRKtrHr05aN3Ylzb1LLSDTXJKNjbbKaEEjbRZk6NCiY5o4E7LRoIbR3EAyxm68eDM%2FrMrNufcAIY7AM6PlhmTpfEkWsKeI5Wlc4e5n4h13zfcMuaQRfn78kA17z6bkc1lNZZjM9mi4UzGU7k7d0J713gbdTKHcDVrj%2BRVXvoXu&X-Amz-Signature=e1240af32fde965a21b0a1cb9f0b78acecf5685dff7070304f4626c2bc8912c9&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
