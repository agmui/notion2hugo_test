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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IA246HJ%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T160957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIQDyB%2FxJRK8uc9uW%2B07H3Wf6RVuTm1US%2F%2FD3ROP7r5UorgIgeWGFXcZvXndpnWl8xZLmO3zsO%2FqM4Bn8DD8o2YJdy6kqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHLfdPQVrulaCeR%2B4SrcAxlmrHFIFG7gJF4dDN5r%2FYA2jHZ30N6%2Fqz84Fx7fdGjJwhIsqTWRPg5gJVEGDelWKTdvHScUWjSuTO%2B98D4phIN0LaFYP5HRBEjhHwp37s1RfC2vrkIyEWa4M%2FUyFRpGXGJUILubC6Pu%2FLa0Xy5%2BpopRuT0mDh6not%2BYE2IRRnyNKhU6J2T3y228wG370QbF2fh9Y2fwFg2by8z2md%2BLWhneh4X66TfVfOxaIuyr1z8GnwUEylJQtziuJP1REi8jgF1cMzDDFUf6jrCJMg2ribXSQncA%2Bvk2c7AdcLXooFbnO2bhHmSpHMsGRkHl91Dn%2F9j1hvq8Llk%2BdkcZBUQogaL8BqXarF8ylAFK4CHXTmsKrs%2BsP5CQe3o8dD0WGQtO3btz6QCgQgwpLkTRaZpHtCAf%2FqNuA9Q%2BM1Tp6ZkOAl8ASsmp3MrdY8ibWRnx6tbBcBHyly60buPbDxUCwGc5AKNeyMch9LKOtsoiPalMGAZt%2B%2BoJuPMqOsIUPVc1VRn76fz7Xg072wTQSGqPKBV6RQu%2Blvl%2BhnPB%2FgYUlYpNN3ZNRdo%2BzsZIcd0ZX70n6jHt0ZEe14GBiOqSL4GIHvquBHb0%2BpNXc%2BZrD1hHbwo3wNn%2Ffi5dImtzXO4j%2FjKaMLfgxr4GOqUBUfPm0ISKtUSKCRZ6voFgxUnQt2L2GBw863bIqnB6PGCvZe8gycinKQUKFX7oAui3qquQYLiJJpNNr%2FCnRY659ImNYEYSiGL4%2FChsfJvv33zpWwnde0ebtqjSR1m36yoDTk3qMffVtb6AcnezCnP2zNb9BBSGOZrnuNnmNLg%2Fv3fBkueb%2FeIgHU01u4KuSRTaDw6l1WTiXtD7qWWHSzEEnEzWcEoK&X-Amz-Signature=7e6622cdca97c8eabdc24cf37aabc8662bfad50ecfd5bc2676481663881b6012&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IA246HJ%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T160957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIQDyB%2FxJRK8uc9uW%2B07H3Wf6RVuTm1US%2F%2FD3ROP7r5UorgIgeWGFXcZvXndpnWl8xZLmO3zsO%2FqM4Bn8DD8o2YJdy6kqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHLfdPQVrulaCeR%2B4SrcAxlmrHFIFG7gJF4dDN5r%2FYA2jHZ30N6%2Fqz84Fx7fdGjJwhIsqTWRPg5gJVEGDelWKTdvHScUWjSuTO%2B98D4phIN0LaFYP5HRBEjhHwp37s1RfC2vrkIyEWa4M%2FUyFRpGXGJUILubC6Pu%2FLa0Xy5%2BpopRuT0mDh6not%2BYE2IRRnyNKhU6J2T3y228wG370QbF2fh9Y2fwFg2by8z2md%2BLWhneh4X66TfVfOxaIuyr1z8GnwUEylJQtziuJP1REi8jgF1cMzDDFUf6jrCJMg2ribXSQncA%2Bvk2c7AdcLXooFbnO2bhHmSpHMsGRkHl91Dn%2F9j1hvq8Llk%2BdkcZBUQogaL8BqXarF8ylAFK4CHXTmsKrs%2BsP5CQe3o8dD0WGQtO3btz6QCgQgwpLkTRaZpHtCAf%2FqNuA9Q%2BM1Tp6ZkOAl8ASsmp3MrdY8ibWRnx6tbBcBHyly60buPbDxUCwGc5AKNeyMch9LKOtsoiPalMGAZt%2B%2BoJuPMqOsIUPVc1VRn76fz7Xg072wTQSGqPKBV6RQu%2Blvl%2BhnPB%2FgYUlYpNN3ZNRdo%2BzsZIcd0ZX70n6jHt0ZEe14GBiOqSL4GIHvquBHb0%2BpNXc%2BZrD1hHbwo3wNn%2Ffi5dImtzXO4j%2FjKaMLfgxr4GOqUBUfPm0ISKtUSKCRZ6voFgxUnQt2L2GBw863bIqnB6PGCvZe8gycinKQUKFX7oAui3qquQYLiJJpNNr%2FCnRY659ImNYEYSiGL4%2FChsfJvv33zpWwnde0ebtqjSR1m36yoDTk3qMffVtb6AcnezCnP2zNb9BBSGOZrnuNnmNLg%2Fv3fBkueb%2FeIgHU01u4KuSRTaDw6l1WTiXtD7qWWHSzEEnEzWcEoK&X-Amz-Signature=6c136fc8cd40b9000758712ac52639a262ef0ee49e0f351af4fdc04e6ba73a8b&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
