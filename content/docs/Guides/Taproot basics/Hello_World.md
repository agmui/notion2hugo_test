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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TU2HGVT%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T170835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCIGQyvZT3%2FxAOMr9DNJansumMtgkG5t7Ju9SIeCs9Y1OFAiBDokmo%2B8oGk2i%2Bw%2BZHZjihrsBv7JwmozHJPXPsINX5MSqIBAjy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDbW%2F8PdjI%2BsT3doUKtwD6KgJIdrLtZgcVfgAOd4bbWarsD1f2NjdeSDvIM5CmRge4eD7Yat9yy6Bkq2kDynhTgrdz0bpaTznbwdh8v7t84juNJ%2FratLGK3%2F2HDnqWYHd232GqUUya6zM0OU%2FqMfBuAkwv6ztzgbDRtIMG8AoOEh1WmKzMteA5mh9WLwi7EfkKlnBPJxIs2pe7lNgLn%2BMR0HXJmKM23z783vIRMxFfB3i4Z7BlePU7bs%2BP4GpEpfQuPToT26dXSWwdGuxl%2F5DrwtZ6opsfcc2OAZxaZXSR%2BW6L74XLT0UxkzOewnw8Rmv%2FCcVCEqEKzRTnxs%2FqmWU10er7yzmwLr9VL6fS10OKcgDR5THWpT8MigkelBQjuN%2ByEcAO%2B2%2FP7g%2FNE8HoBvcNBczwHPruJ0%2FO1Yx8NwoEfyLYuN4Ij5L%2BxJT0GC7x1biudyvIUKCSjWO6c7VNHfACW7CMYpx6hkEDSAnP%2FZ4tgKgjG5mzg4TA9poeggt8PjZyT2947h4BP8BN60aYyEksNaMx9vJN1Y0eh1ykdc64JCGS2DIgS2IXcjhQAt4BJNdMbwhzsctgl3y%2FCkIrPR8s6W7MyySnwHG0iftz5%2FGILrUyZEaObinLVkLgjlrZlbOFJg3O%2BkTcr33rL0wo5CswgY6pgGdSyEtz3w7qvOV024e%2FOPx3MLN5qYxb7s2Cf52X0e3d8fPWjhFsNeoghJV7u3c%2F6evJe8LUe0UIAEHvsSHomj4pw819hak3ITzzwTIcEO5tkqd8ng%2B%2F6SYF4%2BIhBctM%2BSQoQf0tGaA4%2F3phYzBt3B7Ne2DCOZWsCYC1GtXhwHWu%2BhdKRS%2FC3c3w4vSLRu3gEJjn2AuRmOJUcwCqxUxuS8L8jpD%2BnoI&X-Amz-Signature=883e133adb140cf563f9294467eef1c908bd10df347fde642d4c3e63421059d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TU2HGVT%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T170835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCIGQyvZT3%2FxAOMr9DNJansumMtgkG5t7Ju9SIeCs9Y1OFAiBDokmo%2B8oGk2i%2Bw%2BZHZjihrsBv7JwmozHJPXPsINX5MSqIBAjy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDbW%2F8PdjI%2BsT3doUKtwD6KgJIdrLtZgcVfgAOd4bbWarsD1f2NjdeSDvIM5CmRge4eD7Yat9yy6Bkq2kDynhTgrdz0bpaTznbwdh8v7t84juNJ%2FratLGK3%2F2HDnqWYHd232GqUUya6zM0OU%2FqMfBuAkwv6ztzgbDRtIMG8AoOEh1WmKzMteA5mh9WLwi7EfkKlnBPJxIs2pe7lNgLn%2BMR0HXJmKM23z783vIRMxFfB3i4Z7BlePU7bs%2BP4GpEpfQuPToT26dXSWwdGuxl%2F5DrwtZ6opsfcc2OAZxaZXSR%2BW6L74XLT0UxkzOewnw8Rmv%2FCcVCEqEKzRTnxs%2FqmWU10er7yzmwLr9VL6fS10OKcgDR5THWpT8MigkelBQjuN%2ByEcAO%2B2%2FP7g%2FNE8HoBvcNBczwHPruJ0%2FO1Yx8NwoEfyLYuN4Ij5L%2BxJT0GC7x1biudyvIUKCSjWO6c7VNHfACW7CMYpx6hkEDSAnP%2FZ4tgKgjG5mzg4TA9poeggt8PjZyT2947h4BP8BN60aYyEksNaMx9vJN1Y0eh1ykdc64JCGS2DIgS2IXcjhQAt4BJNdMbwhzsctgl3y%2FCkIrPR8s6W7MyySnwHG0iftz5%2FGILrUyZEaObinLVkLgjlrZlbOFJg3O%2BkTcr33rL0wo5CswgY6pgGdSyEtz3w7qvOV024e%2FOPx3MLN5qYxb7s2Cf52X0e3d8fPWjhFsNeoghJV7u3c%2F6evJe8LUe0UIAEHvsSHomj4pw819hak3ITzzwTIcEO5tkqd8ng%2B%2F6SYF4%2BIhBctM%2BSQoQf0tGaA4%2F3phYzBt3B7Ne2DCOZWsCYC1GtXhwHWu%2BhdKRS%2FC3c3w4vSLRu3gEJjn2AuRmOJUcwCqxUxuS8L8jpD%2BnoI&X-Amz-Signature=3e271f073326cd53b854d9a2c4a39e934f599ee47531bfa96ae8ae5502ddbd5a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
