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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEBCFJWE%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T040932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIElJ4RfLDcLC4%2FHsOGufm197wgHNJ84LKn1wzFROPpMFAiEAomwl1ZfuRncWIhPXJrN3Rdzhw1dQT2DJY91bDwiIF3AqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDArrEK3spUAN8SQT2SrcAz53HFZ9fgRfVXe9Xxq2ypup%2BWSl3Op%2BnW1rAbF0e38VYZ7oi9umLeBwwKvW2qa7iOMnaRRjxF2j7dRWjPH9mLbFjXzqaNW1pcJua%2BYheZEFnUPBSlZyAb26exxcovubrPLZjhV0%2Fgkj6dNlV1Iq7y%2BGRppMTB%2BFAb18UZXd2uWUKhgO%2FErOd5fu4IrJozBc8AJWLV1vYNxOPVV0vZI3Fs1MsFPiITSyZXsrjhSP%2BMjnzVggY%2FYgdo204rivZQZYcYkkiJ8chisHiR1Z7%2BYiUGYnx4sqkCdtbj%2Bsu%2F2gN4H%2FqN7e8krumQGKIkxYQG%2BJn25bN1IuHLdX4k4Pxvom8aMiDP9OB81kFhRtLWRhDaPkXpgRrs%2Byc66w91xK27zPK%2Br1NLN9GNQUx5sEZF2sImQAtgKuagfkr3kxULnhcwIVVdVFCPAF2uZ70%2FADiWV80K6Z019%2FM%2B6SDG38zdnwKPYhvu3%2F338OCbiJ5129qeCTvo5HLeDoZL4fIFfyH35ylDFolSiMvPApuJTqOgmrmwJZgjN%2Fc2KK%2B%2ByDFpuGc2DBTUsdiSMRgEaL4BxVqhSLNM8nBQPpZdo1xFTt5PlxFHG6aHSiYlIFfppuTBPpX%2B7gpajOt3rhhMWZWL9eMNTo074GOqUBDYlPOcPwpdsFoSYrwvtj2QsYfUbbg1or64Z%2F8h%2BIRv8A2yVy2khnEbERHnl1KoX7OHpfHzxHT%2FwiTCWBsg7XVvCTjeLDvp7z1JmK%2BRYIagpWg%2F2HxZxRlxy5VHAgI9Rh3HTVUaJWZus9Qheh%2BS0TVAWejUpXmNLFy6sEuSz%2BX2t3pgjnIf%2Bmdh0COOB2Bk8kgUu1rE0WSdiQ5MR926K%2BaeYH2BPv&X-Amz-Signature=3cabc09e079cc84f7b81ad59114af57a5a131636f30fd9af2e0a9acbf14ca62d&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEBCFJWE%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T040932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIElJ4RfLDcLC4%2FHsOGufm197wgHNJ84LKn1wzFROPpMFAiEAomwl1ZfuRncWIhPXJrN3Rdzhw1dQT2DJY91bDwiIF3AqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDArrEK3spUAN8SQT2SrcAz53HFZ9fgRfVXe9Xxq2ypup%2BWSl3Op%2BnW1rAbF0e38VYZ7oi9umLeBwwKvW2qa7iOMnaRRjxF2j7dRWjPH9mLbFjXzqaNW1pcJua%2BYheZEFnUPBSlZyAb26exxcovubrPLZjhV0%2Fgkj6dNlV1Iq7y%2BGRppMTB%2BFAb18UZXd2uWUKhgO%2FErOd5fu4IrJozBc8AJWLV1vYNxOPVV0vZI3Fs1MsFPiITSyZXsrjhSP%2BMjnzVggY%2FYgdo204rivZQZYcYkkiJ8chisHiR1Z7%2BYiUGYnx4sqkCdtbj%2Bsu%2F2gN4H%2FqN7e8krumQGKIkxYQG%2BJn25bN1IuHLdX4k4Pxvom8aMiDP9OB81kFhRtLWRhDaPkXpgRrs%2Byc66w91xK27zPK%2Br1NLN9GNQUx5sEZF2sImQAtgKuagfkr3kxULnhcwIVVdVFCPAF2uZ70%2FADiWV80K6Z019%2FM%2B6SDG38zdnwKPYhvu3%2F338OCbiJ5129qeCTvo5HLeDoZL4fIFfyH35ylDFolSiMvPApuJTqOgmrmwJZgjN%2Fc2KK%2B%2ByDFpuGc2DBTUsdiSMRgEaL4BxVqhSLNM8nBQPpZdo1xFTt5PlxFHG6aHSiYlIFfppuTBPpX%2B7gpajOt3rhhMWZWL9eMNTo074GOqUBDYlPOcPwpdsFoSYrwvtj2QsYfUbbg1or64Z%2F8h%2BIRv8A2yVy2khnEbERHnl1KoX7OHpfHzxHT%2FwiTCWBsg7XVvCTjeLDvp7z1JmK%2BRYIagpWg%2F2HxZxRlxy5VHAgI9Rh3HTVUaJWZus9Qheh%2BS0TVAWejUpXmNLFy6sEuSz%2BX2t3pgjnIf%2Bmdh0COOB2Bk8kgUu1rE0WSdiQ5MR926K%2BaeYH2BPv&X-Amz-Signature=94c2bee34fb04049bfb20bb80e40aed5a95cfb722ec93e0c41e46e3e16610ed4&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
