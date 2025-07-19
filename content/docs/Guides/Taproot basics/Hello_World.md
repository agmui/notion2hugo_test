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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466675CGPED%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T042048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCsXv2nANH4%2BQXM%2Bj11BOQgFDZkmYYU5ie0qnPlkkWlBQIgLGXU6Rsjyujt9QiLMfvYFkV9zjt164megcHaR4yfg%2F0qiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPt7SY9seJbzf7%2Ba9yrcA%2Fu26Rm5SR2VyUU629pQM%2Bhn3iRXwv1S0zMGv2Mtb9lwdzmckPN2nAxvzAwJiHlc891Po59gQV%2BJ%2FczSEa2YPLMeqXEKF1LbJClR%2BLYonIozYz2xn83lKJPjU2DoWAEv74au81RbsYH5%2FqzFCZfdEFCG%2F9L45Yf7%2BdGkWd8WfyLHqow4T4aOggq7xfEcFQ5qkZXpEZNYSxZFO0sNH8%2B2zfBGUVDW2SifCt%2FfS%2F6pSAI9PLFSjJO6On2ndYax4YJ%2BHRiunY%2BbdnnC%2BhRZSvjSFAJu2Okfd4wKZsD8PhOjgAuN1PvnxhoQO3tQUIBe5Eg0iZH7SWbT2xuu%2BZSf1lbNodNreyE%2Fq3rNtbozc3Y5qdmyHXqqB0Ycb1XMle9Il8%2BrXKpNAPxdhgoPqbERkHqA%2BTNqeOJ4LMo6XToeB7%2B1HEchQpr2IHXGz0Est9xERbBOO0P5Wmdbb9qb7Nr83WNE1NszU1yan53nrkZ%2Bl5e2rer8L5x7U2thzE7%2Bpwr3%2Fk2JVodaIAcDvZ9VHmMJQs8r1GyDCjwi8RZ47jTHdMqHXZ%2B8bX5DbiSziI42IEDZ8w5E3o8bZzQE8vmMAW%2FmDV8p4PyjmW2d9A%2FllKKfyNCnA25eOKqVAOj5B2wv5eg6MLOg7MMGOqUBdKHLlnSjohboVfHYn3Pwq2MAGkoAr%2B6bbune%2BJPT7EOJr1MxGTdSPqC%2FcbaIzP2JpEOPV%2BYlCBH%2Fp7bs5%2B%2BsI2PreRXB0LUjcx0w1BrXhzFDu%2B6iWohyyXV7aOni%2FXI%2Fsi%2BfmnRyd1OVwG19eSrup1EXbWFekaBEgUyPGURnQ9iaAqxxKdJu9LQIFEewkUy6kDwNzlfYXBUH1lVvRIaWx6%2BUx9%2B1&X-Amz-Signature=a7a210c1d09cbf05fa2be7755bf83bb1e4f4cf7b7395eed06f70e4bc79a86dbf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466675CGPED%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T042048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCsXv2nANH4%2BQXM%2Bj11BOQgFDZkmYYU5ie0qnPlkkWlBQIgLGXU6Rsjyujt9QiLMfvYFkV9zjt164megcHaR4yfg%2F0qiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPt7SY9seJbzf7%2Ba9yrcA%2Fu26Rm5SR2VyUU629pQM%2Bhn3iRXwv1S0zMGv2Mtb9lwdzmckPN2nAxvzAwJiHlc891Po59gQV%2BJ%2FczSEa2YPLMeqXEKF1LbJClR%2BLYonIozYz2xn83lKJPjU2DoWAEv74au81RbsYH5%2FqzFCZfdEFCG%2F9L45Yf7%2BdGkWd8WfyLHqow4T4aOggq7xfEcFQ5qkZXpEZNYSxZFO0sNH8%2B2zfBGUVDW2SifCt%2FfS%2F6pSAI9PLFSjJO6On2ndYax4YJ%2BHRiunY%2BbdnnC%2BhRZSvjSFAJu2Okfd4wKZsD8PhOjgAuN1PvnxhoQO3tQUIBe5Eg0iZH7SWbT2xuu%2BZSf1lbNodNreyE%2Fq3rNtbozc3Y5qdmyHXqqB0Ycb1XMle9Il8%2BrXKpNAPxdhgoPqbERkHqA%2BTNqeOJ4LMo6XToeB7%2B1HEchQpr2IHXGz0Est9xERbBOO0P5Wmdbb9qb7Nr83WNE1NszU1yan53nrkZ%2Bl5e2rer8L5x7U2thzE7%2Bpwr3%2Fk2JVodaIAcDvZ9VHmMJQs8r1GyDCjwi8RZ47jTHdMqHXZ%2B8bX5DbiSziI42IEDZ8w5E3o8bZzQE8vmMAW%2FmDV8p4PyjmW2d9A%2FllKKfyNCnA25eOKqVAOj5B2wv5eg6MLOg7MMGOqUBdKHLlnSjohboVfHYn3Pwq2MAGkoAr%2B6bbune%2BJPT7EOJr1MxGTdSPqC%2FcbaIzP2JpEOPV%2BYlCBH%2Fp7bs5%2B%2BsI2PreRXB0LUjcx0w1BrXhzFDu%2B6iWohyyXV7aOni%2FXI%2Fsi%2BfmnRyd1OVwG19eSrup1EXbWFekaBEgUyPGURnQ9iaAqxxKdJu9LQIFEewkUy6kDwNzlfYXBUH1lVvRIaWx6%2BUx9%2B1&X-Amz-Signature=a13729505031cfb4809fadc3b03767503aac2e435ddcaf0e58d4c19a3430f1ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
