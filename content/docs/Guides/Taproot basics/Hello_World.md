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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLPEICL7%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T040745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJIMEYCIQCETataFwkmvdcIKnajx74Uv%2B%2FI4i%2FZZvIdUULsUalrrgIhAIQHdRevFdAYqvqJDLRcjN1XP7tQqRi5DsC1Qumy%2B2WCKv8DCFUQABoMNjM3NDIzMTgzODA1IgyQNhiSrjsVOn%2Fq4GYq3APoeD1Ad1dW%2BDCSwFzn097BirrTDqT%2B35cTba3kV%2Fx4gWsB%2BDHCbMPcSx4K6x4WlBDHeiiyNOJqoO8a73AxYA%2Bf4J98r%2F82OEHjqx64fiTDO4OOBUw2HxW4XOobPcKyZxhkG80ctvgrWHfWRnk2PXqzaI74rNPnNTF2AVv6%2B6EGlwsWWB5K5inHto%2BxK%2FrP0t0fjDTyX2lmxfcDJDxG%2B4CxTnSE%2BUfjcRCu%2F3QOIp8aNY300SjdP82urr27djDcfSQm1VlLscU%2BzTjX%2Fzxuc44oTvLW4ZE7sXx%2FgNjprBdOHkl3LjVTjP%2F6b67%2BB4tzmsGMRGhpQltkQwIyer9Nxuub94m0PUMHsELbyTobvFLIAq5o7G%2BM07uFJN6oUa9eNVaNK0x5XcuU8EpiY%2Ftzg5Elgu5bZLA3nXwvtU8CgdxENJKduGSCyrNRqg3tj2FYZBZpc6woVmn0TPVGh7aAI1aO%2Be48cdmW4kEOAIfkwxv6lwmjfRwGEwxlL4udPItjD6A5B0oFoL3%2FP1zMUfG2ULfhQFb3NxUIyQtWtBoCjjl%2B6ExDU4Cfgge0ZrgLF%2FF9%2FXy160Rs1NrMylg5dl6SH%2FZX0SOSfKYXfaSjUdQl2%2FMtbcqPtVV5CwXzh7GgfTCV%2B66%2BBjqkAW0q1kgqHgR6BiIsf%2B6kgrYzVl8x%2FgeLlG%2BIbt%2Bq0V6tQG%2FtTdIAdQ4ba1CvpkJ8oOHRAhKQCho%2FZzqY4V33ATgqq8guIhpx7apB0WGMxO3FXGHvFR%2B6d0L5prLvWEUgQfge2NMUivWiZvz4iFFnn6mZUKYi%2BgrQnhdAyHxjSHMDB7Z%2BWPyBIhWmMzXAXBZSNgNfr3UjaXHgMStWzdz3yxZNTkgg&X-Amz-Signature=a6a997bb4c7c131f6aa139f393f9323dbb2298b84bac16cee36c4b452ac1f72d&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLPEICL7%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T040745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJIMEYCIQCETataFwkmvdcIKnajx74Uv%2B%2FI4i%2FZZvIdUULsUalrrgIhAIQHdRevFdAYqvqJDLRcjN1XP7tQqRi5DsC1Qumy%2B2WCKv8DCFUQABoMNjM3NDIzMTgzODA1IgyQNhiSrjsVOn%2Fq4GYq3APoeD1Ad1dW%2BDCSwFzn097BirrTDqT%2B35cTba3kV%2Fx4gWsB%2BDHCbMPcSx4K6x4WlBDHeiiyNOJqoO8a73AxYA%2Bf4J98r%2F82OEHjqx64fiTDO4OOBUw2HxW4XOobPcKyZxhkG80ctvgrWHfWRnk2PXqzaI74rNPnNTF2AVv6%2B6EGlwsWWB5K5inHto%2BxK%2FrP0t0fjDTyX2lmxfcDJDxG%2B4CxTnSE%2BUfjcRCu%2F3QOIp8aNY300SjdP82urr27djDcfSQm1VlLscU%2BzTjX%2Fzxuc44oTvLW4ZE7sXx%2FgNjprBdOHkl3LjVTjP%2F6b67%2BB4tzmsGMRGhpQltkQwIyer9Nxuub94m0PUMHsELbyTobvFLIAq5o7G%2BM07uFJN6oUa9eNVaNK0x5XcuU8EpiY%2Ftzg5Elgu5bZLA3nXwvtU8CgdxENJKduGSCyrNRqg3tj2FYZBZpc6woVmn0TPVGh7aAI1aO%2Be48cdmW4kEOAIfkwxv6lwmjfRwGEwxlL4udPItjD6A5B0oFoL3%2FP1zMUfG2ULfhQFb3NxUIyQtWtBoCjjl%2B6ExDU4Cfgge0ZrgLF%2FF9%2FXy160Rs1NrMylg5dl6SH%2FZX0SOSfKYXfaSjUdQl2%2FMtbcqPtVV5CwXzh7GgfTCV%2B66%2BBjqkAW0q1kgqHgR6BiIsf%2B6kgrYzVl8x%2FgeLlG%2BIbt%2Bq0V6tQG%2FtTdIAdQ4ba1CvpkJ8oOHRAhKQCho%2FZzqY4V33ATgqq8guIhpx7apB0WGMxO3FXGHvFR%2B6d0L5prLvWEUgQfge2NMUivWiZvz4iFFnn6mZUKYi%2BgrQnhdAyHxjSHMDB7Z%2BWPyBIhWmMzXAXBZSNgNfr3UjaXHgMStWzdz3yxZNTkgg&X-Amz-Signature=6007045aa37af69247e9f51629067475d47a070fa57a9cb4da55f7b9631016a4&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
