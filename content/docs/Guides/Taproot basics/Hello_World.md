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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDDHURG4%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T121612Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBbZdj4rQmfL1BA1xgtq7%2FOTcgQtFH5hsy5kUda0HMdAAiAWmvJ3hlCVohrWl8VrA8q6SynDdkwL8N2N19VHByn7NyqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQf7NJedFxDJNzwVBKtwDmUbNGMxJEZYTeuid8J9%2FRb2lm387okY3fDQqHw07spl2NkRZ1CDcv31i%2BItjOMS5nD7hMsCh4XIwkwxCm1cHdiO39xj%2BeN2KuMptyyp5WwcIunel3H9ZKsPJc21B7F%2FswQWNsUrTAfxHvB5CTKPnB33a401XC9DbDkT42MVxjvJY7nwIfseG7%2Fzze4iCDBV%2FdnPDVrtHGS6uELP3IywZ%2FI2dlFTXLvnWawoJNp4EWaLf7DTG8h7xKpWnylRidDH72FJSRrV23RaNFkcsSjzDdQgDVmnYeU%2BlY4oviGK2Z436w%2F9HiEAhO7ma5EChNEtWXBXB9u%2F8kkA69v0p%2FLbfg6Ads9aykN6DFiMzqmcfk3LoUN5IdL2ayluZwlRDR9XWD6DhtosGTaretI%2BvvisC3fZgrERqflFyEIPyXO8X%2FyvB3dvng6nEY1MQKm2%2FA%2FDOtDVHfYRr0pA55LabNVjLR8s6VqR%2BH9AMX%2B8tZgv%2BhBGr2svdll%2FbIRJtEvNEKxAjXrxiSqkaR3bG6R4pfuosLIunQ%2BHAN%2FM%2BeJJb8RV5b1zhq%2FAJVLdwCOsrzPZf4gI79jJQMBikyc%2F6hFLvgcdGm77P%2BnLPxL9yihNGw%2B4ABbLE1Y2NM%2BspCNh1LmQw8J2bwgY6pgH5NxgKbNscDn%2BzB8cngnveex2FGTcB9ag7RW%2FaWE2QuqYhP3E07H3XdmnkwDXUEzpfSeFk6TXVPZuLiceGmnSo5BNOGKxgOvzknsDBHs2qqb6CgXSXs24eztvUNOaF3s71brTQq%2FlcRBnAe27dWdLc0sbzTNBF29gZYVovAFDni8aRtmxTKyN4xcxKQz3ArEN%2F9p4aq%2BvgM7Kl5TYTpFlQaFYzTDYw&X-Amz-Signature=f04ac011a7e2684c52490d7e23bd6959549c6083ee00b22ff561d3495b0f3454&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDDHURG4%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T121612Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBbZdj4rQmfL1BA1xgtq7%2FOTcgQtFH5hsy5kUda0HMdAAiAWmvJ3hlCVohrWl8VrA8q6SynDdkwL8N2N19VHByn7NyqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQf7NJedFxDJNzwVBKtwDmUbNGMxJEZYTeuid8J9%2FRb2lm387okY3fDQqHw07spl2NkRZ1CDcv31i%2BItjOMS5nD7hMsCh4XIwkwxCm1cHdiO39xj%2BeN2KuMptyyp5WwcIunel3H9ZKsPJc21B7F%2FswQWNsUrTAfxHvB5CTKPnB33a401XC9DbDkT42MVxjvJY7nwIfseG7%2Fzze4iCDBV%2FdnPDVrtHGS6uELP3IywZ%2FI2dlFTXLvnWawoJNp4EWaLf7DTG8h7xKpWnylRidDH72FJSRrV23RaNFkcsSjzDdQgDVmnYeU%2BlY4oviGK2Z436w%2F9HiEAhO7ma5EChNEtWXBXB9u%2F8kkA69v0p%2FLbfg6Ads9aykN6DFiMzqmcfk3LoUN5IdL2ayluZwlRDR9XWD6DhtosGTaretI%2BvvisC3fZgrERqflFyEIPyXO8X%2FyvB3dvng6nEY1MQKm2%2FA%2FDOtDVHfYRr0pA55LabNVjLR8s6VqR%2BH9AMX%2B8tZgv%2BhBGr2svdll%2FbIRJtEvNEKxAjXrxiSqkaR3bG6R4pfuosLIunQ%2BHAN%2FM%2BeJJb8RV5b1zhq%2FAJVLdwCOsrzPZf4gI79jJQMBikyc%2F6hFLvgcdGm77P%2BnLPxL9yihNGw%2B4ABbLE1Y2NM%2BspCNh1LmQw8J2bwgY6pgH5NxgKbNscDn%2BzB8cngnveex2FGTcB9ag7RW%2FaWE2QuqYhP3E07H3XdmnkwDXUEzpfSeFk6TXVPZuLiceGmnSo5BNOGKxgOvzknsDBHs2qqb6CgXSXs24eztvUNOaF3s71brTQq%2FlcRBnAe27dWdLc0sbzTNBF29gZYVovAFDni8aRtmxTKyN4xcxKQz3ArEN%2F9p4aq%2BvgM7Kl5TYTpFlQaFYzTDYw&X-Amz-Signature=3950318b587ce0b4fd40d9e338ced65c348e08490dabba160fd96d1f38f5f6f4&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
