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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6AQSWEO%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T190104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIFQWpdmgNYy0iHn17E6A6Munrg2xRKuYlZ%2BXGKIi2MAnAiEAimdeA50esEyWkJ3af9ueBTe5Q2%2B%2Bl4svi9A7wlyem2Eq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDLuXu0%2FIDh9S6uGQ%2ByrcAzQO06ybGxOTwR7w7r8OaT9mHK2QL3JKN3dmTJrxITdsqrynNge7FPq3rc8M1J9LL7qKl%2BKnFrG1%2FaOGdUXVfh1RBfV26332h9iC1l9kkiRhnzSBkYLDL6DNYDdcIcp8Zh7WPOGkKV9PPPCpQCIshkk7%2FDzd7cXVMiqNUWlm9xpHxuI1rv2Ob9yNt74RTwxVgjHRN%2BDqRIsM5IKYWybIE%2FS4EEOpOEb8UIaWRcywI7XPhDopszbbSp0ET0hnzuU%2FouHiES%2FaW8VWEruqHihxaJ6m94fyCbZbDnWw03%2FL%2BVvfgWeijS1PRGpYBwhQ36FMiNJ2tfgX8M%2Bs65hbsphsa5I7Sc9ruvQi5DqoVWlYJMQ5%2FhDwaegBUkD2fGWoc8wTn6krR%2FZAljmECA0vRP%2BnqVk9jgKt2k1Mw44dHS5Zpro2dpZQbuVT3FzwZ6%2BQkfdPiPZdwb2M7zOe7r%2F%2BwByv1INHEHzGKpq41iJtDOLYxgh4xozOhtEoh%2FhaBHRfHkiE5fXX91D7iH2XM%2FIT3D8g3SEP2IHP4Mbxa3we6MBjyofMb55lyYMf7L3NJISgroL0hGQquiXrLjiP2ghu3hyYOt7%2BvtQR1Z5SK1k03uGsYaLWp6YFuSG9UsBiK5m7MNG8674GOqUBPTJD9fymYmie5PGapzUkoY%2FB6Rh4pUG6qmvz84suQjNN%2BnGIhHND5Q7j4IufeITuWge9d2XmG4%2Bl1p%2FgM7sYTZ5cs%2F5LtQ%2BFr45cMcVMyhiqRd1f0s03dBV%2BqdakwEGH8BQDbuT8q%2FMU0DAKrsd6bJRkuL0yMJooNDFv4YfFNmgKtUXewryFBjzzC%2FjEGmvQjwkhmd4y6vnlcwHEsq2bZxrctbmc&X-Amz-Signature=6dead53cadd575849d22f05eca098dd847c257a38397a464a9ef4ece4586734c&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6AQSWEO%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T190104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIFQWpdmgNYy0iHn17E6A6Munrg2xRKuYlZ%2BXGKIi2MAnAiEAimdeA50esEyWkJ3af9ueBTe5Q2%2B%2Bl4svi9A7wlyem2Eq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDLuXu0%2FIDh9S6uGQ%2ByrcAzQO06ybGxOTwR7w7r8OaT9mHK2QL3JKN3dmTJrxITdsqrynNge7FPq3rc8M1J9LL7qKl%2BKnFrG1%2FaOGdUXVfh1RBfV26332h9iC1l9kkiRhnzSBkYLDL6DNYDdcIcp8Zh7WPOGkKV9PPPCpQCIshkk7%2FDzd7cXVMiqNUWlm9xpHxuI1rv2Ob9yNt74RTwxVgjHRN%2BDqRIsM5IKYWybIE%2FS4EEOpOEb8UIaWRcywI7XPhDopszbbSp0ET0hnzuU%2FouHiES%2FaW8VWEruqHihxaJ6m94fyCbZbDnWw03%2FL%2BVvfgWeijS1PRGpYBwhQ36FMiNJ2tfgX8M%2Bs65hbsphsa5I7Sc9ruvQi5DqoVWlYJMQ5%2FhDwaegBUkD2fGWoc8wTn6krR%2FZAljmECA0vRP%2BnqVk9jgKt2k1Mw44dHS5Zpro2dpZQbuVT3FzwZ6%2BQkfdPiPZdwb2M7zOe7r%2F%2BwByv1INHEHzGKpq41iJtDOLYxgh4xozOhtEoh%2FhaBHRfHkiE5fXX91D7iH2XM%2FIT3D8g3SEP2IHP4Mbxa3we6MBjyofMb55lyYMf7L3NJISgroL0hGQquiXrLjiP2ghu3hyYOt7%2BvtQR1Z5SK1k03uGsYaLWp6YFuSG9UsBiK5m7MNG8674GOqUBPTJD9fymYmie5PGapzUkoY%2FB6Rh4pUG6qmvz84suQjNN%2BnGIhHND5Q7j4IufeITuWge9d2XmG4%2Bl1p%2FgM7sYTZ5cs%2F5LtQ%2BFr45cMcVMyhiqRd1f0s03dBV%2BqdakwEGH8BQDbuT8q%2FMU0DAKrsd6bJRkuL0yMJooNDFv4YfFNmgKtUXewryFBjzzC%2FjEGmvQjwkhmd4y6vnlcwHEsq2bZxrctbmc&X-Amz-Signature=1fe54ea00be82ad88a93634415e72ba73a06d928809e2130bbf651a413e107ae&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
