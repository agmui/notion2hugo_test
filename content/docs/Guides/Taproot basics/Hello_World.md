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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IQQY2S3%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T100828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIBmoO%2FAgYTIe4XHqZDAAMcGx%2Fth6ihU9KumY%2BQO9gryNAiEAkpGe0Tg8Esx0DJ30uzIM1lMAJgNxSiehWGKuh41pT5IqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM2SMFw0J7jySv%2BZBircA5rKXKfVW7ca9aorb%2BE7MBx3reEA47%2BxOiRnhKu39IPNw77BoGCOtaDs59yvR%2F3b4bKXWRFsbrJOMYIsVeD8DqhKurq1oXH5lFdW046tdsNMOiOgC3zoO8onEmVxdlkbj1e74ZkRg9Kh10wJMrqhuboJli%2FQm6yXYK0lxTdNxXC8tB8RvN9jk3s0Izy3lpsluyoZGN4%2FBd6qTQF%2FEeENf4e4pPdkwnk6rcqZfTY4leDneOnPUpLIZ5silqY%2B9m9rcTW2%2F%2Bkbso1FaCIVjC6y%2FIurlhvVtdjF%2BMLanoIa%2Fh74UG5o%2FjGSjnDK00jfsglvP6rWk6sN1ZQR4lfbLsN8Ra7fjfsLAWOwSKySJPWkFCtDOsby84UyKXMs4ArjID%2FAGMFQS29LRG1x8wUF4Hpg%2BL2L6hG1MI8vigT27tkt%2FBO0BdXEyPb0E8vHDvTN4hEn1usDBZcpJVVSI5MzhuQon%2Fj6q9PglV2401jJm1WHlbF1Dnrn7u9Ldpzs3jKMziDCgYjL%2B%2BkBG9685ihb2U1WlVtqREg3InZ8l%2FWCWmJtTWbXWKQ3Xe2r6tab6bE4Dlo%2F3QbDrbQRpT8LiyUTxHcYEuqmuue8PDID3cJwZUCOrDBbgnMLO2lXAj2kpMNDMJecxb4GOqUBJ%2BWrwwpptFL9QIzNF56KjZWpbtLALx0sj2ei0arFj3O8r6HEB8p9SC%2Fy93tgKwoLVjQC4BrA4peWxzmV1bgAA8jXlIfvRJmLRE5mdkzJD6EEuYYZGXNs302rSf92kSqbxkOCuvzhvC5W2rSf8BS1ANDJAIh2jgBQzrW9yi3G1udj3EtiyaN0GKb0mg%2BGrjFrE%2FMGR%2B2ChZt81hDapmBgmAiRVK21&X-Amz-Signature=7469e6aee1c857fcc43b4a130c8205df02df5d04598eb7083012cefb1eb44b22&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IQQY2S3%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T100828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIBmoO%2FAgYTIe4XHqZDAAMcGx%2Fth6ihU9KumY%2BQO9gryNAiEAkpGe0Tg8Esx0DJ30uzIM1lMAJgNxSiehWGKuh41pT5IqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM2SMFw0J7jySv%2BZBircA5rKXKfVW7ca9aorb%2BE7MBx3reEA47%2BxOiRnhKu39IPNw77BoGCOtaDs59yvR%2F3b4bKXWRFsbrJOMYIsVeD8DqhKurq1oXH5lFdW046tdsNMOiOgC3zoO8onEmVxdlkbj1e74ZkRg9Kh10wJMrqhuboJli%2FQm6yXYK0lxTdNxXC8tB8RvN9jk3s0Izy3lpsluyoZGN4%2FBd6qTQF%2FEeENf4e4pPdkwnk6rcqZfTY4leDneOnPUpLIZ5silqY%2B9m9rcTW2%2F%2Bkbso1FaCIVjC6y%2FIurlhvVtdjF%2BMLanoIa%2Fh74UG5o%2FjGSjnDK00jfsglvP6rWk6sN1ZQR4lfbLsN8Ra7fjfsLAWOwSKySJPWkFCtDOsby84UyKXMs4ArjID%2FAGMFQS29LRG1x8wUF4Hpg%2BL2L6hG1MI8vigT27tkt%2FBO0BdXEyPb0E8vHDvTN4hEn1usDBZcpJVVSI5MzhuQon%2Fj6q9PglV2401jJm1WHlbF1Dnrn7u9Ldpzs3jKMziDCgYjL%2B%2BkBG9685ihb2U1WlVtqREg3InZ8l%2FWCWmJtTWbXWKQ3Xe2r6tab6bE4Dlo%2F3QbDrbQRpT8LiyUTxHcYEuqmuue8PDID3cJwZUCOrDBbgnMLO2lXAj2kpMNDMJecxb4GOqUBJ%2BWrwwpptFL9QIzNF56KjZWpbtLALx0sj2ei0arFj3O8r6HEB8p9SC%2Fy93tgKwoLVjQC4BrA4peWxzmV1bgAA8jXlIfvRJmLRE5mdkzJD6EEuYYZGXNs302rSf92kSqbxkOCuvzhvC5W2rSf8BS1ANDJAIh2jgBQzrW9yi3G1udj3EtiyaN0GKb0mg%2BGrjFrE%2FMGR%2B2ChZt81hDapmBgmAiRVK21&X-Amz-Signature=42dc86bfdfcb5324066740906e5268d6ea66399fd6a517d131b19956b540b7eb&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
