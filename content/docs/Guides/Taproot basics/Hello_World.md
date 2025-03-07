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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTWIKHXP%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T003741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCeQpuN31iI7u4sUjo%2BrRRSnwuVIoHhuiB5Q60ZHEJyKgIhAJ8f6Tk1jGWJLMsHjenDMpEiDf%2BghH%2Bb74G0xEvA8YJdKv8DCDgQABoMNjM3NDIzMTgzODA1Igw6hnv%2Fp6P0n7gsSaEq3AOl1yR1gcIoSZKsBY1s%2FOx3AYB%2FQf1cFt5cV%2FH%2BiC1GbdsxaiuDO5EbLzifqhkZOf0btm9wGWZWxHIryNstrhLvzcureMOlcC5U%2BNAo5V4XIoK17xuVeMS%2BfaZUXkmCuzg8kjb8%2F2bq1Cgnr9Rzc4XCP89MDjJ96I6DrsYzqswh3LFNdsUCMfTV6km2hCX2B%2BJkPaeSm2sWuve7Pn%2FbftILuYI4nT1e2%2F4duC03G3afBmaX%2BuqMJq4X8S76rnH0%2BUozKVBOUOAZu8R1AkgqRipx4MYm4LH9ywVvoeCW%2FKqXRtR1w%2FRpRwpcBTzfH%2FYa73ivYe5x5xj61ePtYH3M2IKq74LPSTjZRtJRAQWrTZntCsPRRhRIgp2eQonM8m%2FqASZ5lyrrZIoMl09pVA657MRgCpM91HoPNrgChp2BlBUGZw2xhhVpkpZQG9vL1obNiKZe3qzjLKOhDCY%2By%2Fp%2FUrp3x1HN3Yy5aLXfeUaGzJBSgNFal7YLDlzYRgY3Ys6gc8hwFaJ7zdC%2FwoHeuOD4%2FNPNsr7tjAS6MlO42AT5IuW5Gqmy%2Bkq%2FVEQVTp0ZkIZvMbu8SJNX7u3ti1Wx47ebklPR9CXEx4KPiQIcxrNNA4cvimtNDFS2wShvf0JvWTDiyKi%2BBjqkAQlDLjs27HCraqzwAoMPEEoJaptqxSHs%2Bp04zqceJNTOfP7Dut7xpr1M6XGZNZ5K69JXZwPStonPXcP8DsPmc0ANyV1U6%2Feea%2F2IlE3Wl2XMSGdnxpjwNe%2BoZaAm7CstGDL%2BKKwXNV6%2FntcQSnB9KbiyAe5gmYTW5WR3Ivnm77sp5%2B0QF6GwX%2BMJBOec0NJ0DTlkH%2F8wvyLuzneV9mNs6ke%2BCiWK&X-Amz-Signature=8befbdd9fcdc3de2084a251afb0bf1dad03ee71ed333c61ea7a4aa69bfff6541&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTWIKHXP%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T003741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCeQpuN31iI7u4sUjo%2BrRRSnwuVIoHhuiB5Q60ZHEJyKgIhAJ8f6Tk1jGWJLMsHjenDMpEiDf%2BghH%2Bb74G0xEvA8YJdKv8DCDgQABoMNjM3NDIzMTgzODA1Igw6hnv%2Fp6P0n7gsSaEq3AOl1yR1gcIoSZKsBY1s%2FOx3AYB%2FQf1cFt5cV%2FH%2BiC1GbdsxaiuDO5EbLzifqhkZOf0btm9wGWZWxHIryNstrhLvzcureMOlcC5U%2BNAo5V4XIoK17xuVeMS%2BfaZUXkmCuzg8kjb8%2F2bq1Cgnr9Rzc4XCP89MDjJ96I6DrsYzqswh3LFNdsUCMfTV6km2hCX2B%2BJkPaeSm2sWuve7Pn%2FbftILuYI4nT1e2%2F4duC03G3afBmaX%2BuqMJq4X8S76rnH0%2BUozKVBOUOAZu8R1AkgqRipx4MYm4LH9ywVvoeCW%2FKqXRtR1w%2FRpRwpcBTzfH%2FYa73ivYe5x5xj61ePtYH3M2IKq74LPSTjZRtJRAQWrTZntCsPRRhRIgp2eQonM8m%2FqASZ5lyrrZIoMl09pVA657MRgCpM91HoPNrgChp2BlBUGZw2xhhVpkpZQG9vL1obNiKZe3qzjLKOhDCY%2By%2Fp%2FUrp3x1HN3Yy5aLXfeUaGzJBSgNFal7YLDlzYRgY3Ys6gc8hwFaJ7zdC%2FwoHeuOD4%2FNPNsr7tjAS6MlO42AT5IuW5Gqmy%2Bkq%2FVEQVTp0ZkIZvMbu8SJNX7u3ti1Wx47ebklPR9CXEx4KPiQIcxrNNA4cvimtNDFS2wShvf0JvWTDiyKi%2BBjqkAQlDLjs27HCraqzwAoMPEEoJaptqxSHs%2Bp04zqceJNTOfP7Dut7xpr1M6XGZNZ5K69JXZwPStonPXcP8DsPmc0ANyV1U6%2Feea%2F2IlE3Wl2XMSGdnxpjwNe%2BoZaAm7CstGDL%2BKKwXNV6%2FntcQSnB9KbiyAe5gmYTW5WR3Ivnm77sp5%2B0QF6GwX%2BMJBOec0NJ0DTlkH%2F8wvyLuzneV9mNs6ke%2BCiWK&X-Amz-Signature=1b3306e180cd72d9966639bad5dceece09103617d297757ace875fdf2f214390&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
