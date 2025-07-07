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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R46GPYDT%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T100957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIFH7xG3LFQAC5grY7g%2BSemwf7M9BcTpX%2Fk6mK9rO4dZEAiBDxxdNFC33SrWTCp1Yd6gC7nllqDWlaxQby%2FaYhosgGir%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMB5ljkk3WoOivOLnoKtwDa%2BubS6mvSlJy5ReVCKRRgdCo37kqXqwGEeVXHj%2FNuIPXAzfNJA1ce%2BYDZox6s2P3HHl1Rt6NfEVuBa8qgdAXOBkRSH1So%2BMNwu03ZuaIeVOMFSPdui9jYW5c9EvFhUH6K8FBgy%2Bbpp0rFcMYrjMAdg3aMBL6CZxBBEk658H0q4%2BCfQ3rhsFr%2BzfYVXmWptoF4AUCdLMo7F%2FEzWUKxpoWvBZk15HCgEsV5dOtIGGiOElaIS7jouTpCNIYNe7ccYGyG5JVZ2mE39sH7ewno4YMwfSAMWFmiqNoL2qki3hs95tBmsWXfRS4iM5Avn1jXh6E9unNwB8SP3i7gKy27IfWGN6y0meEfL2WhvqL3Z1Wv%2Fl7BcMl%2F8vfcPFjnDrbJ0j%2BYtth8fHguce%2FNDXDKbUBBJUAFfkp%2BcLU2oKCRfvgGVuVqjPAdHEI08keFWS%2Bb7busUTBLPmUH3wp%2F4uBbxBm2AwDfhVsX14%2BSVC4kLiDQ3wcgX%2B8R%2BpDxpVCaisQg4W13YjNyIN2N%2B0GtIK0E9w3%2FSLusCqE9%2FGFunXpZ60kMPj3zEYlr3LXjm%2Fb6DfNM1lMYRaCVlOoZZd8CyFJ%2FKHM8GuXLSbb0Dc6J%2B5YcmCcIF2vTlJMsWeF69%2BEqY8wnriuwwY6pgG94qFJOKDfjqhnPiGNXtmtMzb%2BKYD%2FU5bQzlaC9XWJrKtz%2FTZ8IXT18u%2FCiANwDjdyZmJzJc%2BYAxGsQ5R9EdlxrIrLRw3Zu55FJW7NJK5ahN6PTPGIIRPmtN4FEI655%2FboFQ99Wf47aEyCBZEwPDQaBPlMFJr7XWZ8hZWPo64r1wRgIBUa4e3xUhbL%2FNTFQHK6Ez%2FbHpT7lU5r2pWrkXkigLAO8yuj&X-Amz-Signature=ee5257edfa61422af91543fe8ff46455979862fea2d658871a3dde3e000e6054&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R46GPYDT%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T100957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIFH7xG3LFQAC5grY7g%2BSemwf7M9BcTpX%2Fk6mK9rO4dZEAiBDxxdNFC33SrWTCp1Yd6gC7nllqDWlaxQby%2FaYhosgGir%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMB5ljkk3WoOivOLnoKtwDa%2BubS6mvSlJy5ReVCKRRgdCo37kqXqwGEeVXHj%2FNuIPXAzfNJA1ce%2BYDZox6s2P3HHl1Rt6NfEVuBa8qgdAXOBkRSH1So%2BMNwu03ZuaIeVOMFSPdui9jYW5c9EvFhUH6K8FBgy%2Bbpp0rFcMYrjMAdg3aMBL6CZxBBEk658H0q4%2BCfQ3rhsFr%2BzfYVXmWptoF4AUCdLMo7F%2FEzWUKxpoWvBZk15HCgEsV5dOtIGGiOElaIS7jouTpCNIYNe7ccYGyG5JVZ2mE39sH7ewno4YMwfSAMWFmiqNoL2qki3hs95tBmsWXfRS4iM5Avn1jXh6E9unNwB8SP3i7gKy27IfWGN6y0meEfL2WhvqL3Z1Wv%2Fl7BcMl%2F8vfcPFjnDrbJ0j%2BYtth8fHguce%2FNDXDKbUBBJUAFfkp%2BcLU2oKCRfvgGVuVqjPAdHEI08keFWS%2Bb7busUTBLPmUH3wp%2F4uBbxBm2AwDfhVsX14%2BSVC4kLiDQ3wcgX%2B8R%2BpDxpVCaisQg4W13YjNyIN2N%2B0GtIK0E9w3%2FSLusCqE9%2FGFunXpZ60kMPj3zEYlr3LXjm%2Fb6DfNM1lMYRaCVlOoZZd8CyFJ%2FKHM8GuXLSbb0Dc6J%2B5YcmCcIF2vTlJMsWeF69%2BEqY8wnriuwwY6pgG94qFJOKDfjqhnPiGNXtmtMzb%2BKYD%2FU5bQzlaC9XWJrKtz%2FTZ8IXT18u%2FCiANwDjdyZmJzJc%2BYAxGsQ5R9EdlxrIrLRw3Zu55FJW7NJK5ahN6PTPGIIRPmtN4FEI655%2FboFQ99Wf47aEyCBZEwPDQaBPlMFJr7XWZ8hZWPo64r1wRgIBUa4e3xUhbL%2FNTFQHK6Ez%2FbHpT7lU5r2pWrkXkigLAO8yuj&X-Amz-Signature=72c420db86b7c9f5c89aa2c4cc3d2d3b171216ca73a66b77b160a8d70d5de6c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
