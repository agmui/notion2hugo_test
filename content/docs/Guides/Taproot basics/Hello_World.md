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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KGHXMT2%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T031207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCJmudTGVdiI8wyFWMQgqUjvQU%2FCNYcxQ0CYIKS6iGuygIhAOVBaiMoOsYV7kf3s5wTkEVJIavIJPriEiFMOWSzAJFbKogECPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxXsdFp4iZBNTBoQzkq3APY1Xx%2B%2BEEmuaytSW2tTB9N86yqM2fmxqeccC1Ln8kDBq75YsrTHjQHaydyStRU0FpMXD72W9s7vrZWQQUtP7bV9VIBGEFjPaS2jChtdL9fHEQvfOh2apoRej4jRuSXI%2FbAiiRIMWY%2BrJIhXo0eshqP4vs50ltlD0vBmK3RmqdZug4z%2Fhu7DXvCSiN%2F0TDblQDVVyTA7mQ326%2Fz37nSourg8ozEEbX%2BcyVk5Bia4r67xoykCkA7VIEXL2Jm%2FRNHPEX4WWDJvK5KsVZTwwPGZX9USTNnRBzP%2BuKhx9fsVmsJqizRFjZ93hLpPivHvU6FSxqz%2FX8zhO7MQ0TFVt%2BuHuSMO3M0zoRuLaYapRVlrlFmge%2FXibphRWgUWZ2HUXiihXayL%2BJxOgEWQPd0PzSdp7BJXHGjLAJmXb12Joko7lyX5rzuMpkSS5jhHrdw9Dq2ZPLJcoRY37GnaaslyWEEopkyhJ8vNE0Qxx9dV3Ngy8sIpR8YXFFwMzgYYaPkeONd74iL1kdWvrIFWjJQBjVSzLR9OGelsRDZkAUbKVHtK2%2FHOUiRFg5opBDZg482thDagXM3AbSR1puaUqGGUMsjIlDLGTCeQWpUHecdk5DXqnLla2lpscT3pe5%2FFgb8szDkwYC9BjqkAfZL8MEP0bMTGlSGiPIi6Pkv4JHUn80k%2B2bLAEwVEws%2BXXub1OkNGI7%2FUui%2BJkKNDrc1OWJ4AvwXWCcK6b87dfNdnbIkaAOMWiPNym9oXAI8QrOwfisOOwbRk7dLmHRx4B8BXdBorDTTOkiaP4E0jt5WgC3q%2FahzCWsRiyQ9daXvbO5bFGzlufYmN3t2RvNAAFf7YKyNJp22p0jB4Blb3lEf%2BMjk&X-Amz-Signature=ceb766d0095d6cc3b89ba6cebbc99800f163903627fb22a2d414bc676822906c&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KGHXMT2%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T031207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCJmudTGVdiI8wyFWMQgqUjvQU%2FCNYcxQ0CYIKS6iGuygIhAOVBaiMoOsYV7kf3s5wTkEVJIavIJPriEiFMOWSzAJFbKogECPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxXsdFp4iZBNTBoQzkq3APY1Xx%2B%2BEEmuaytSW2tTB9N86yqM2fmxqeccC1Ln8kDBq75YsrTHjQHaydyStRU0FpMXD72W9s7vrZWQQUtP7bV9VIBGEFjPaS2jChtdL9fHEQvfOh2apoRej4jRuSXI%2FbAiiRIMWY%2BrJIhXo0eshqP4vs50ltlD0vBmK3RmqdZug4z%2Fhu7DXvCSiN%2F0TDblQDVVyTA7mQ326%2Fz37nSourg8ozEEbX%2BcyVk5Bia4r67xoykCkA7VIEXL2Jm%2FRNHPEX4WWDJvK5KsVZTwwPGZX9USTNnRBzP%2BuKhx9fsVmsJqizRFjZ93hLpPivHvU6FSxqz%2FX8zhO7MQ0TFVt%2BuHuSMO3M0zoRuLaYapRVlrlFmge%2FXibphRWgUWZ2HUXiihXayL%2BJxOgEWQPd0PzSdp7BJXHGjLAJmXb12Joko7lyX5rzuMpkSS5jhHrdw9Dq2ZPLJcoRY37GnaaslyWEEopkyhJ8vNE0Qxx9dV3Ngy8sIpR8YXFFwMzgYYaPkeONd74iL1kdWvrIFWjJQBjVSzLR9OGelsRDZkAUbKVHtK2%2FHOUiRFg5opBDZg482thDagXM3AbSR1puaUqGGUMsjIlDLGTCeQWpUHecdk5DXqnLla2lpscT3pe5%2FFgb8szDkwYC9BjqkAfZL8MEP0bMTGlSGiPIi6Pkv4JHUn80k%2B2bLAEwVEws%2BXXub1OkNGI7%2FUui%2BJkKNDrc1OWJ4AvwXWCcK6b87dfNdnbIkaAOMWiPNym9oXAI8QrOwfisOOwbRk7dLmHRx4B8BXdBorDTTOkiaP4E0jt5WgC3q%2FahzCWsRiyQ9daXvbO5bFGzlufYmN3t2RvNAAFf7YKyNJp22p0jB4Blb3lEf%2BMjk&X-Amz-Signature=22cf816c3ddc287c786a84a035ca0c54850aa544f3069f4413c6b499a1d40ed8&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
