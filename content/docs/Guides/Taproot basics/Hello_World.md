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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V63S22SX%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T170238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJGMEQCIAutMz2qaaMmsQHstzlbabuP%2Bbvka%2BqjY5Nvmgb4w1eBAiBKrgCKMmHFGqOwwIoSK8X4mi6Uf5FLml48M4fyVmNkcSr%2FAwgaEAAaDDYzNzQyMzE4MzgwNSIMSgEaOSApKdvkA0XEKtwDCoFT%2F7ldOyptyqaSaJBLONg3qvYDWY0lW%2BDlo%2Fansh0bH1o1j6%2Fx0akC%2BIvTUPeKvH8OAiKrHL8GQYSBsnj8DtDW3ubgEyyXn0QqwrkKYJGf%2BO0LOUsTB7gaMeJuKace3W0xWZMN2273VM%2Bm0a5KhOaBe9Fus0G9p1t52VMT8c3ipf6DFQ6EVsQIAEMh8DegVuE52a9RgJ8bbHIb1kqQYC5gYw1Rh2wGbeTOPHlaeDtZTCpVfRQtpofy8cfKS3Z5tQH6WId4si4wrxQuvE1P7GkySxSt357GMBH44iRKny1tHdYJuIsy%2FcQCqxnoHYaKGyrXbefp87gm96VzZ9rOiS030fRWQ2PjwlxRGYie9YXVdO3QhnZ0hZ8lHniBn3ah3Eo5deEQUeGefbPtNC0erDVOgLcRzB9nxprP54u0giLWHThlb7nHewY24vv3rHe48nozaXwscTIB1X8S2%2BUChUNLRKHrUEuPaO6hmLQCFNcG%2BaqgwGVFTSdmTnVgQBfW%2FKDl1dFE2gnIz%2BGvHBovOn%2BMU8HRDU4GDPQfu5Ih4POpsh28reT9DKmJVqG4ZR4jIy4a%2FXw%2FDk8fSov8N9KvIMmt57191Eo9krKyWoRxEQP1hWMd%2BrmIO3yZJAYwnezHwQY6pgGPkZjCiDnAlMcU8meKtHOVIM0vuq5cU2yARx9lrpr1C72sc8Y1u9U3ovUPBzGxUuTTpie7s6JVHRNd6Z%2BIFzjw9AKOL6GDSSKiN7xhFW8eCrg5mA8d9vzgDZW4tn7%2Fs3MgEFFM6HvuSa534n%2FsaKci58DRE85ByYpWDnduvXXHFrHcKvHYYxtuxnQYXQMDZEkOMYTsx6t2IPuj%2B4IblYILvfs1d%2BWH&X-Amz-Signature=3fbe8a4d53aec6d6aca17e78fe51f2e5031153566a750cef8cb76b246cc5cc43&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V63S22SX%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T170238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJGMEQCIAutMz2qaaMmsQHstzlbabuP%2Bbvka%2BqjY5Nvmgb4w1eBAiBKrgCKMmHFGqOwwIoSK8X4mi6Uf5FLml48M4fyVmNkcSr%2FAwgaEAAaDDYzNzQyMzE4MzgwNSIMSgEaOSApKdvkA0XEKtwDCoFT%2F7ldOyptyqaSaJBLONg3qvYDWY0lW%2BDlo%2Fansh0bH1o1j6%2Fx0akC%2BIvTUPeKvH8OAiKrHL8GQYSBsnj8DtDW3ubgEyyXn0QqwrkKYJGf%2BO0LOUsTB7gaMeJuKace3W0xWZMN2273VM%2Bm0a5KhOaBe9Fus0G9p1t52VMT8c3ipf6DFQ6EVsQIAEMh8DegVuE52a9RgJ8bbHIb1kqQYC5gYw1Rh2wGbeTOPHlaeDtZTCpVfRQtpofy8cfKS3Z5tQH6WId4si4wrxQuvE1P7GkySxSt357GMBH44iRKny1tHdYJuIsy%2FcQCqxnoHYaKGyrXbefp87gm96VzZ9rOiS030fRWQ2PjwlxRGYie9YXVdO3QhnZ0hZ8lHniBn3ah3Eo5deEQUeGefbPtNC0erDVOgLcRzB9nxprP54u0giLWHThlb7nHewY24vv3rHe48nozaXwscTIB1X8S2%2BUChUNLRKHrUEuPaO6hmLQCFNcG%2BaqgwGVFTSdmTnVgQBfW%2FKDl1dFE2gnIz%2BGvHBovOn%2BMU8HRDU4GDPQfu5Ih4POpsh28reT9DKmJVqG4ZR4jIy4a%2FXw%2FDk8fSov8N9KvIMmt57191Eo9krKyWoRxEQP1hWMd%2BrmIO3yZJAYwnezHwQY6pgGPkZjCiDnAlMcU8meKtHOVIM0vuq5cU2yARx9lrpr1C72sc8Y1u9U3ovUPBzGxUuTTpie7s6JVHRNd6Z%2BIFzjw9AKOL6GDSSKiN7xhFW8eCrg5mA8d9vzgDZW4tn7%2Fs3MgEFFM6HvuSa534n%2FsaKci58DRE85ByYpWDnduvXXHFrHcKvHYYxtuxnQYXQMDZEkOMYTsx6t2IPuj%2B4IblYILvfs1d%2BWH&X-Amz-Signature=f9c490f5cc7901785bf6d9ad4d927917a961a1a7f9659e1df630e5ac0fd506e3&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
