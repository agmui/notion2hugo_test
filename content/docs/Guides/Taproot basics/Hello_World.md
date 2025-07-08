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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IW3GFBU%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T034348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQDNRH4WyBMcaPPQ2GPR1XXbmPwgYQbOCIyK5eFDIXadvwIhAIkg%2Fy3N6Ynx8gUPnkMNI%2BloO4mMHORpReK3UgqXH%2FwOKogECIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxLyUVerrxkk7IMDScq3AOi0Orno8CApJKeyOo%2BDH5%2BJZDK8YfuDdVZk7ZO6GtuBUmj19QTpr98D%2FKLu8Xj5CQbSTNhZ%2BE3k9VHOydKNuWxpoTZUgr%2FD0rGfFQPFxkKBj69AcVzb9y9Cd2I2BUJciZ11WMuyAuLvjpL3TLhe%2BZON1d1kDL5GVvBIOq%2FRwAwxaGMCG9O%2B6Lkq6LNzGqzTtC596e8nM0vjX%2BLpEtoaw21hczRLqxqZmYZ84Ckv9pcL%2F1gXSyWL7C5YBGVg1I6iukVkzVKfyupOjFRMccQAxnLTjt%2FnDHwP174LyElNcTulHAWLXeOHyqiZLdyWLr%2B8l%2B5VMpF3Ky4%2BzdgniaiuOOnXXotvTPYKL4eGriJiVP4dDrbRL7vePaBgPJL5BeqHAh6ZMc4BgAnh58OAvjK0PZvaLf%2BhvS8vqvaiL%2FyO8fCOsVrF3hN6Sb3pwUeT0%2BCt4KVM2IGPFbQrZllGA4ZFgHzFtNErLq7dyJtTRyjdJhbzRonIsXoXxRL2Oo7PhcYO12C0sYOHEpCvrLyQ8F1TUHmwjW5FCIC%2FA%2FkwnMjKv0TGcMC6ZptiwTyYaz%2BrVxeeECtxYU53JjAg5bGS8kXbW5aXSiqw6XEK6d7uL%2FU8bkGWQgT7SYOWnS8tRza%2BTCOhLLDBjqkASqUrey8WfxgAAzd8QEUPRZfH0m2mJZtdhx2XhcToE4ZHH1c86wd0XVIWpkvKyRriK8yMXSAtxS0Gdk7555C7Y3K1vwhfxbTSK4d82Oi6Uy0MT54k3NdUWjKo6jObk3BNNHytB1LCbwlpQ5TvCX2s6X%2F9hAx9h1YyuRzETu%2Fyg6AmCwBKE12qC7XKPJ7Vpz5Ob%2FOz3Ow%2BSoDjsa%2BTFDRaExAjNoK&X-Amz-Signature=dd8114b554db040da732b829324721836ce26c0ace34d63977de6609ec2a3015&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IW3GFBU%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T034348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQDNRH4WyBMcaPPQ2GPR1XXbmPwgYQbOCIyK5eFDIXadvwIhAIkg%2Fy3N6Ynx8gUPnkMNI%2BloO4mMHORpReK3UgqXH%2FwOKogECIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxLyUVerrxkk7IMDScq3AOi0Orno8CApJKeyOo%2BDH5%2BJZDK8YfuDdVZk7ZO6GtuBUmj19QTpr98D%2FKLu8Xj5CQbSTNhZ%2BE3k9VHOydKNuWxpoTZUgr%2FD0rGfFQPFxkKBj69AcVzb9y9Cd2I2BUJciZ11WMuyAuLvjpL3TLhe%2BZON1d1kDL5GVvBIOq%2FRwAwxaGMCG9O%2B6Lkq6LNzGqzTtC596e8nM0vjX%2BLpEtoaw21hczRLqxqZmYZ84Ckv9pcL%2F1gXSyWL7C5YBGVg1I6iukVkzVKfyupOjFRMccQAxnLTjt%2FnDHwP174LyElNcTulHAWLXeOHyqiZLdyWLr%2B8l%2B5VMpF3Ky4%2BzdgniaiuOOnXXotvTPYKL4eGriJiVP4dDrbRL7vePaBgPJL5BeqHAh6ZMc4BgAnh58OAvjK0PZvaLf%2BhvS8vqvaiL%2FyO8fCOsVrF3hN6Sb3pwUeT0%2BCt4KVM2IGPFbQrZllGA4ZFgHzFtNErLq7dyJtTRyjdJhbzRonIsXoXxRL2Oo7PhcYO12C0sYOHEpCvrLyQ8F1TUHmwjW5FCIC%2FA%2FkwnMjKv0TGcMC6ZptiwTyYaz%2BrVxeeECtxYU53JjAg5bGS8kXbW5aXSiqw6XEK6d7uL%2FU8bkGWQgT7SYOWnS8tRza%2BTCOhLLDBjqkASqUrey8WfxgAAzd8QEUPRZfH0m2mJZtdhx2XhcToE4ZHH1c86wd0XVIWpkvKyRriK8yMXSAtxS0Gdk7555C7Y3K1vwhfxbTSK4d82Oi6Uy0MT54k3NdUWjKo6jObk3BNNHytB1LCbwlpQ5TvCX2s6X%2F9hAx9h1YyuRzETu%2Fyg6AmCwBKE12qC7XKPJ7Vpz5Ob%2FOz3Ow%2BSoDjsa%2BTFDRaExAjNoK&X-Amz-Signature=bf4db3238649b42233b4720eff4cb9dd44f0dfdd5f4ddade97bb68264aa4be66&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
