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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TA54XLT7%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T210832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCSp02iaWN0f213lU6cKgLZy2uZTFSx%2BDAuJ%2FMxAcn9JQIgIa4EpjrI01tQM%2BkMpaNo6DZXhdGp%2FVukbIYIdxuatP4q%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDOYjzTAyWfQ2FSy53SrcAz%2BOqqsPS3kwBiCCqVPXruLA6pnz23H3QirLFRA0tOfwlw%2F01IRXMF50jTJpLTs%2BqX0eo%2Fp5DUVYlBHcfcG8tk7dO96Gk7jobpamD6dQpgqQJZRW954I6G35e%2FK6JfsuMs1duH%2FCs%2FY6tgYBQYdTu40zH86%2F0KDBt41ZKzyMG72yv2onWJ9AZFbXQrxc%2BxGd2tsF9dULJfHWbdDKdlAyHs%2B4Ks7sniTTomiPHAd4DscIoLQXFc%2B3a7rZFHiBF0MRk%2F86ggGhkeNAJxZE9OA0qgKyl42%2ByNEjj4lrZZcir8iqkp5e56g02vJ430seI900Io0LXlsPj1ikvFynWKRvJs3KRUNBnasYx7niHyLbiYL4IqX7%2B8NyFHAcAA8cU%2Fou6Cfk%2F04FnoHPQVmi%2F2j0g8G1TLFfyDGCyn4CEQzSm2jMRj9kmxTZ%2F3tFwpemI7seOPJYtwnu1Ha3hgPs2tuX7n%2BWdf8nTCCzjBXjh4HTBDYf5aknTN%2BZDQ5hgOiAIujh38yzQKABcS2108LzD06rYVSffsO27K71MpbNPb5QDxvFc49EBkaRfiPDL2Vn2Tl10b5BsIOlvCaFgHSl1gnMxqgDbioZp1EEakVvO4Fz0%2BD1Q2FxRmQCJH%2FXry7YML%2BJx8IGOqUBIo9Lk0kKn0o%2B1Z8Xs18Ag86XLQN%2Ff5UzSfc6W5tES5RLUkBwOPwkjLRMeuis6EzDLyWHAPl64RUISP%2F5YDuMec6GqkKkG%2B2S3b18wV8Xuh2xKqEVX28iRdZWjmO%2Fc8PKa8JGrdeLneUiUZo4SsSxBV4heDYrBgkWs8fP2sb%2FCfF81oTVzNT5IwStMhR21avyCNsOZIREnq1d2PbtbFJLLDojA4Pn&X-Amz-Signature=40a8c7325945222bf490e119d931175cb82da46e38073a30de6fd819c261bcd8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TA54XLT7%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T210832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCSp02iaWN0f213lU6cKgLZy2uZTFSx%2BDAuJ%2FMxAcn9JQIgIa4EpjrI01tQM%2BkMpaNo6DZXhdGp%2FVukbIYIdxuatP4q%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDOYjzTAyWfQ2FSy53SrcAz%2BOqqsPS3kwBiCCqVPXruLA6pnz23H3QirLFRA0tOfwlw%2F01IRXMF50jTJpLTs%2BqX0eo%2Fp5DUVYlBHcfcG8tk7dO96Gk7jobpamD6dQpgqQJZRW954I6G35e%2FK6JfsuMs1duH%2FCs%2FY6tgYBQYdTu40zH86%2F0KDBt41ZKzyMG72yv2onWJ9AZFbXQrxc%2BxGd2tsF9dULJfHWbdDKdlAyHs%2B4Ks7sniTTomiPHAd4DscIoLQXFc%2B3a7rZFHiBF0MRk%2F86ggGhkeNAJxZE9OA0qgKyl42%2ByNEjj4lrZZcir8iqkp5e56g02vJ430seI900Io0LXlsPj1ikvFynWKRvJs3KRUNBnasYx7niHyLbiYL4IqX7%2B8NyFHAcAA8cU%2Fou6Cfk%2F04FnoHPQVmi%2F2j0g8G1TLFfyDGCyn4CEQzSm2jMRj9kmxTZ%2F3tFwpemI7seOPJYtwnu1Ha3hgPs2tuX7n%2BWdf8nTCCzjBXjh4HTBDYf5aknTN%2BZDQ5hgOiAIujh38yzQKABcS2108LzD06rYVSffsO27K71MpbNPb5QDxvFc49EBkaRfiPDL2Vn2Tl10b5BsIOlvCaFgHSl1gnMxqgDbioZp1EEakVvO4Fz0%2BD1Q2FxRmQCJH%2FXry7YML%2BJx8IGOqUBIo9Lk0kKn0o%2B1Z8Xs18Ag86XLQN%2Ff5UzSfc6W5tES5RLUkBwOPwkjLRMeuis6EzDLyWHAPl64RUISP%2F5YDuMec6GqkKkG%2B2S3b18wV8Xuh2xKqEVX28iRdZWjmO%2Fc8PKa8JGrdeLneUiUZo4SsSxBV4heDYrBgkWs8fP2sb%2FCfF81oTVzNT5IwStMhR21avyCNsOZIREnq1d2PbtbFJLLDojA4Pn&X-Amz-Signature=3dd14d30a72dfd938f2fd229be995149e451e2d95fd8aab508c8a74d56227227&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
