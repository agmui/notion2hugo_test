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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3G7M7QL%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T100942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQCcjT0g0oJTjkKvgpYGnb1gei4gD%2BgLosHPXNNinsr62AIgQWpZGJxrDDJeucOOeoOvLL%2FNT9dw308pOoyGrMPhkogqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDC6lxZFSbz36UbZeyrcA8nYQX6grBRAIwzGN8GmPugzDRdhXRGFKS%2FrK13tEwRO0SC6wm1WSZODQOHtzAJj3%2FsWdYFQPaxrSKbBdDVTt2GVNX49UczCJ2kztCq049RTFXAFbG1zSZjpBXbpwI928J41GHf%2FxIp6RN5DVrTU5NBbxVs%2FVo%2BZ%2BrmsgBiH6h4BB8mzaXzCGaGJAgHbLbEO7TfMIG%2BWC6bt%2FzALWAHxEhyTonuPZ8pJMxsPDo5EOBLU%2BHUbG%2FDlt4qf28QCnVaM6XqYl545wrpGp02sg2%2B7GqYVj3RtcHF71jtu3zjNQ5cKdd1D0U8CdO35mySftND%2FpoaCpiGFT%2BmKeyu6RkB2Z4ISK1e76cKqqeZC7bLglnMFd%2FrYyxL4YgRBpBOSHsDFUTJgwi9%2FIsK%2B%2F2k25naQQ0w5eWgvE2Z93ArUdmD%2FHz38sb%2FOILsAIl%2B9DwZElB8KF37HV2oZ3adHMG71zvNpSIVA134uv4CFMDxu2OXlXtXhR3OOGZ35bsqJhNOqb6JpPADJTOiqu9OZTPaMuD9VckuxZOUuWtQBnlrduXTrE4xewZZgjRQ0Gn0Jd4LEkXLqdvMepaNmMlPgE%2Fr6vIhTvMftzR4mE0gfjepz99%2F8RV11osnRjIAUjGbadv5tMOG2tsEGOqUBRrz714WfKBCCXQB0lHrNgR8W4hWyD6UKrE0Ht2fY3Q9f1P93u%2B61OpVNwNljs7V5VgzlIvbH%2FgBezuMzRbkxSHxEewvGL%2B7wEsz25ZID1Twunzzylpv6UWrOJ9V7LgHV6t0FSf1si31CmsoXwergcODeiV5wxYoBKoWNHCkW8fn%2BirrvMEV8fWLD3KkJMXnRQIGa1kfy3uNByOxCjaK8ciAfP9OE&X-Amz-Signature=4de664c51db628669a5fe199525c444c9e58c7082e8c0f87a054199ffdff9885&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3G7M7QL%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T100942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQCcjT0g0oJTjkKvgpYGnb1gei4gD%2BgLosHPXNNinsr62AIgQWpZGJxrDDJeucOOeoOvLL%2FNT9dw308pOoyGrMPhkogqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDC6lxZFSbz36UbZeyrcA8nYQX6grBRAIwzGN8GmPugzDRdhXRGFKS%2FrK13tEwRO0SC6wm1WSZODQOHtzAJj3%2FsWdYFQPaxrSKbBdDVTt2GVNX49UczCJ2kztCq049RTFXAFbG1zSZjpBXbpwI928J41GHf%2FxIp6RN5DVrTU5NBbxVs%2FVo%2BZ%2BrmsgBiH6h4BB8mzaXzCGaGJAgHbLbEO7TfMIG%2BWC6bt%2FzALWAHxEhyTonuPZ8pJMxsPDo5EOBLU%2BHUbG%2FDlt4qf28QCnVaM6XqYl545wrpGp02sg2%2B7GqYVj3RtcHF71jtu3zjNQ5cKdd1D0U8CdO35mySftND%2FpoaCpiGFT%2BmKeyu6RkB2Z4ISK1e76cKqqeZC7bLglnMFd%2FrYyxL4YgRBpBOSHsDFUTJgwi9%2FIsK%2B%2F2k25naQQ0w5eWgvE2Z93ArUdmD%2FHz38sb%2FOILsAIl%2B9DwZElB8KF37HV2oZ3adHMG71zvNpSIVA134uv4CFMDxu2OXlXtXhR3OOGZ35bsqJhNOqb6JpPADJTOiqu9OZTPaMuD9VckuxZOUuWtQBnlrduXTrE4xewZZgjRQ0Gn0Jd4LEkXLqdvMepaNmMlPgE%2Fr6vIhTvMftzR4mE0gfjepz99%2F8RV11osnRjIAUjGbadv5tMOG2tsEGOqUBRrz714WfKBCCXQB0lHrNgR8W4hWyD6UKrE0Ht2fY3Q9f1P93u%2B61OpVNwNljs7V5VgzlIvbH%2FgBezuMzRbkxSHxEewvGL%2B7wEsz25ZID1Twunzzylpv6UWrOJ9V7LgHV6t0FSf1si31CmsoXwergcODeiV5wxYoBKoWNHCkW8fn%2BirrvMEV8fWLD3KkJMXnRQIGa1kfy3uNByOxCjaK8ciAfP9OE&X-Amz-Signature=eadb575c25f975c7c09af1e4c5fc365ba96710ffca2f536b1cf833e9e98024c3&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
