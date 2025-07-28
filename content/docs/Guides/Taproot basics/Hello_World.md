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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WG77YCIL%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T040320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQC3ZPpI9equEMU6oEZIJtQfTpb9FciMtUkfwPqpZDLRRQIhALVCgHZu%2BOyHI3RnViuGuFOdmr8PbtHyYe33ep%2BODJ%2BWKogECIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzPKxZLoYK3soeoEegq3AN7%2F5LEANsHYk6m89gbo0azmPQ04%2BthL2BEXw40VJfDeleHtZZqbbRszeuqSUuPE%2Feh2qoW0%2FJtqknfRIC8MZ%2Fm87YIGJGDFFgVulehxnld38U8A7olTUon13%2BJ38AXfgbCWSAwEsNaeKC%2BP0JwPgf9Hb69NgQj1i53rKuVXkO5WC%2Frhdo4oS8YzjEoSUWbRMYjHG86AvmNsRzKsSEU4tpobU18MUJL%2F%2FcK62GpFsFEXo8G7WWFWo1xj7i0aN5WSGD87tPSR61ZLfpQnvLZxrGjyWuu8rIW4iPoFdIECfFXmlK4AYA3SdxtVj72cxYZ4D%2Bt1uH1Tyv4s8vXhpkB0LTPstYupm1n2u4P5R8%2BHINSsiz7gv63KbgXHhIMf8cQU3tlxG0U0RVmrvOhcg1FzBgL2DMSG1SaLvdsLAwmTGJXWrdTptOG0Kuj0o35OyH9OAW7U7t2R7DygL2mNgHEW6C6jdwIwPmtBINqnyGr%2FaGeFz6e3hfXmQwKv5XDOoLZTv10OlcgpltqOe8dDDuUO8%2Bctg%2Bg5mz4qsm9eG9znY9Fp0PygDLYcIInZjSzEVQWFbzP2Tarr5HR8kE6OgUhMZNKdaA4jhSB82EWcJL%2F8%2F9Qnai8eCUWVT5j3SQ7hTCukpvEBjqkARNrSm8sFUcICliY75lsWSycEB7Z8TPVI31XxsnNY%2B8be6Va7S39X68nZlRvucNGMavVrBirhQ%2B1Mhdz1VUNBHhPLJy82wVWX%2FKJflFQzp3yfSBCbZpVD8kDZ1HkzsZUHV3%2FCMrRgUPy65dwq1vo%2Bh%2BYqw8okeovcKMyHL3hdoGFsmmuK8lJBydZicjFMHljBF7PYdAcnYmKnxYUM2kM%2B7qXlTtQ&X-Amz-Signature=663fed9742396bf7d08362dfecb2779771bc4d0ff754ceeb35ab6a963ee8c00c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WG77YCIL%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T040320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQC3ZPpI9equEMU6oEZIJtQfTpb9FciMtUkfwPqpZDLRRQIhALVCgHZu%2BOyHI3RnViuGuFOdmr8PbtHyYe33ep%2BODJ%2BWKogECIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzPKxZLoYK3soeoEegq3AN7%2F5LEANsHYk6m89gbo0azmPQ04%2BthL2BEXw40VJfDeleHtZZqbbRszeuqSUuPE%2Feh2qoW0%2FJtqknfRIC8MZ%2Fm87YIGJGDFFgVulehxnld38U8A7olTUon13%2BJ38AXfgbCWSAwEsNaeKC%2BP0JwPgf9Hb69NgQj1i53rKuVXkO5WC%2Frhdo4oS8YzjEoSUWbRMYjHG86AvmNsRzKsSEU4tpobU18MUJL%2F%2FcK62GpFsFEXo8G7WWFWo1xj7i0aN5WSGD87tPSR61ZLfpQnvLZxrGjyWuu8rIW4iPoFdIECfFXmlK4AYA3SdxtVj72cxYZ4D%2Bt1uH1Tyv4s8vXhpkB0LTPstYupm1n2u4P5R8%2BHINSsiz7gv63KbgXHhIMf8cQU3tlxG0U0RVmrvOhcg1FzBgL2DMSG1SaLvdsLAwmTGJXWrdTptOG0Kuj0o35OyH9OAW7U7t2R7DygL2mNgHEW6C6jdwIwPmtBINqnyGr%2FaGeFz6e3hfXmQwKv5XDOoLZTv10OlcgpltqOe8dDDuUO8%2Bctg%2Bg5mz4qsm9eG9znY9Fp0PygDLYcIInZjSzEVQWFbzP2Tarr5HR8kE6OgUhMZNKdaA4jhSB82EWcJL%2F8%2F9Qnai8eCUWVT5j3SQ7hTCukpvEBjqkARNrSm8sFUcICliY75lsWSycEB7Z8TPVI31XxsnNY%2B8be6Va7S39X68nZlRvucNGMavVrBirhQ%2B1Mhdz1VUNBHhPLJy82wVWX%2FKJflFQzp3yfSBCbZpVD8kDZ1HkzsZUHV3%2FCMrRgUPy65dwq1vo%2Bh%2BYqw8okeovcKMyHL3hdoGFsmmuK8lJBydZicjFMHljBF7PYdAcnYmKnxYUM2kM%2B7qXlTtQ&X-Amz-Signature=f2a7daafd3361855f60f1ff3fce126d5d9a7f813dec63503a40f946f3b543835&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
