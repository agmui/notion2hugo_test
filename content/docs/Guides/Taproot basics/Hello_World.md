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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KAHZIKJ%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T200940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCIDdGSrOEyKiAlBIdbTzFmlZ3YgSxPnBWChk%2FuymZ%2BmlcAiAay8x3RRnq6Mpxzt3EQ75rwtQrIpbX2bgt6P8fueNqEiqIBAj1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbN3QFoGomXinaLBHKtwDtPDed6zv2TnmztC2VLaAjHqChYbPbBMCtIP8hHYJnNddMX8OIwwyhixFv4ai4NHM5EpG9f8%2FwtOBQrQxSdz0FBBy5DiuBe54Qqnt7llv57bFV1nIfJpF1zcxXjx3eCASJ2tVd7S9LYzoqqYO8e3skRw9h1phKuev2XyXexDkcmmk8dPOKE6QnnLqyZi9YcRPPHkDVmUlKcA34gT4KkIX9agiID%2FbUHuO%2F%2BZnSX78Bt0XLR358Qgh2ZM0%2FpUV40SVhllHss90Gx9yG3XOX2Z8qMIehl2dOtWwGQIa0CAWfarVQfBGQx76VlZ2gHJAp7ZUmm25WbNcmHdOAGSabCQiZ2xOP34Nippi5x5%2Fpnxf5e81FXWB5QB%2BR0Kl22ezW5gW%2F20EZuqTXimyl4nE1Rg45cjRnlVEVD0RlSxgpMTs9BxWqALYpD4rtPM%2FN462gvQMnNa6OpZXstjS%2BOgH%2BFOpmStPESPie6UEyhfBQcpDiYJdEDcgqsYUKB0k2G0%2FXG4HoVOFXBX%2FRneB3O17Bo2Hv%2FEqZ4jTa7VqXV0xRcodP0dLc%2BQIV8le0TJuWzH11F%2F13oky0oehXuSjqu%2B9SLvRWugDtlV8Aa8VACFhhCXK1BgVpf%2BIcLPwJkAsRhAw0KHDwQY6pgE0pBWIJY0oz4HxGbJNmN1VPIe%2FJtj28%2BJkPw4CxAPCBVInJo2oZkgDoMnBquPfQK8OKRtE8wbnROwtOpJnS%2BC%2FSReRfZY2Ltzw59LUCI1QuYf5fIodugc5HoEzQEGM2jqOjlwnM7bEtKxhR0rj9QYerDkwbCHsphudZ2Ygjz2svOwkgDRnTm3kFGja2FsH2aNz3I8CCQRjPbCnk8%2FGr79qZhM%2Fg26j&X-Amz-Signature=9109f20bfd5a6a758d63da1f793085ee6fa3e961614719f015c22bd409a7b637&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KAHZIKJ%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T200940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCIDdGSrOEyKiAlBIdbTzFmlZ3YgSxPnBWChk%2FuymZ%2BmlcAiAay8x3RRnq6Mpxzt3EQ75rwtQrIpbX2bgt6P8fueNqEiqIBAj1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbN3QFoGomXinaLBHKtwDtPDed6zv2TnmztC2VLaAjHqChYbPbBMCtIP8hHYJnNddMX8OIwwyhixFv4ai4NHM5EpG9f8%2FwtOBQrQxSdz0FBBy5DiuBe54Qqnt7llv57bFV1nIfJpF1zcxXjx3eCASJ2tVd7S9LYzoqqYO8e3skRw9h1phKuev2XyXexDkcmmk8dPOKE6QnnLqyZi9YcRPPHkDVmUlKcA34gT4KkIX9agiID%2FbUHuO%2F%2BZnSX78Bt0XLR358Qgh2ZM0%2FpUV40SVhllHss90Gx9yG3XOX2Z8qMIehl2dOtWwGQIa0CAWfarVQfBGQx76VlZ2gHJAp7ZUmm25WbNcmHdOAGSabCQiZ2xOP34Nippi5x5%2Fpnxf5e81FXWB5QB%2BR0Kl22ezW5gW%2F20EZuqTXimyl4nE1Rg45cjRnlVEVD0RlSxgpMTs9BxWqALYpD4rtPM%2FN462gvQMnNa6OpZXstjS%2BOgH%2BFOpmStPESPie6UEyhfBQcpDiYJdEDcgqsYUKB0k2G0%2FXG4HoVOFXBX%2FRneB3O17Bo2Hv%2FEqZ4jTa7VqXV0xRcodP0dLc%2BQIV8le0TJuWzH11F%2F13oky0oehXuSjqu%2B9SLvRWugDtlV8Aa8VACFhhCXK1BgVpf%2BIcLPwJkAsRhAw0KHDwQY6pgE0pBWIJY0oz4HxGbJNmN1VPIe%2FJtj28%2BJkPw4CxAPCBVInJo2oZkgDoMnBquPfQK8OKRtE8wbnROwtOpJnS%2BC%2FSReRfZY2Ltzw59LUCI1QuYf5fIodugc5HoEzQEGM2jqOjlwnM7bEtKxhR0rj9QYerDkwbCHsphudZ2Ygjz2svOwkgDRnTm3kFGja2FsH2aNz3I8CCQRjPbCnk8%2FGr79qZhM%2Fg26j&X-Amz-Signature=6492ee45d2a1766624844a1d9aa3451058fe3caf6f833a61f8671d45aeada639&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
