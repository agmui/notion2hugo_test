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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VNGBEDL%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T161031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHg8M9NvsYuGLEDhz6UayLL%2B19Swx2hoHprDhstGT981AiAhbN6DG6%2F2LBFoKKXUOfBKs0A%2BbXt2FHp9DG8leGrCmir%2FAwhJEAAaDDYzNzQyMzE4MzgwNSIMKGktgS5RB8%2FN2lhhKtwDaJlkNhIfymTlrgxuh5ZT%2BTyluosYSEE%2F1W0AGIB5XJWubY5EayUvq2zramja3zQBYxAO3JQo%2B6VWXttuMjkQCywAb%2BrAOi%2BzcDfZ2crgT%2FAbSZM%2BqmErFq4ODyMETDOog05PWIV6kraqAYOraPs43%2B9a0lvP%2BcyTuepuNZNd660PzxTtKx%2BTB57MkNGVxrZIu7lXS9IXFKf1A4jahzggy0d4YDxpDNKGG9CJpelyDBOIShcxs8cWGG2%2F38xudgOaDr1YJoCSPL70Z41YCt1TvNcyjkq3SeuXruMmFlLxNf8ukaebmH5HbU3tlBMdL%2Fk6dV7%2FI8TUCbxeEPGgvRyC4ZLNzkv7zX2CnBvwj7VwbtrixIAN2hbAI9pa4YAM9qvpHZJDaK1WIt1idAvme%2F2Jy21v2aOCxZ10i8BKqAtyaUtZBoqTXXLVMlJHEM1EaAdGRTT4qD3alFv6cA3OBzQRzuQGu9mAnP2ugcgmw8uFiRa9oJBeMGTeKBa9wiSiET3a%2Bl2cKXyU22rtDm0SM8toPZEO8gFzKsE2wVEytCSMelSAIeqpW%2BhzjeqNlSv6LVZ8bWb8fyaaoYWxRLW887P8D069vXfljwXOWA%2FU7M%2Bb%2F2XotHq68q6KupN0OrUw3Kv%2FvwY6pgFuF5qwYYDdsNMZehzEum8ObVn1RCkpO9kPGFl7b5qcP7eNrEvR3nx9pCku7eFl103CQvX336jLCoomdbTQrkYYbGbEAz4O0kMA8uasFHoxYaUGGplluZja0xq8VrPpLHbO2%2FaB9xy9da%2FNxiC8XsRPTwxAzG83SnFZTSSJrPUbDHgULAFhEKFynhcA5Jz%2F%2Bb2lmgEV2MYmDQ7kPBtPhXpHnZ8GVROO&X-Amz-Signature=7b8f9ccf9799729b43c607e164bea97e76e01332383af0898547c5e414d61cb1&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VNGBEDL%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T161031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHg8M9NvsYuGLEDhz6UayLL%2B19Swx2hoHprDhstGT981AiAhbN6DG6%2F2LBFoKKXUOfBKs0A%2BbXt2FHp9DG8leGrCmir%2FAwhJEAAaDDYzNzQyMzE4MzgwNSIMKGktgS5RB8%2FN2lhhKtwDaJlkNhIfymTlrgxuh5ZT%2BTyluosYSEE%2F1W0AGIB5XJWubY5EayUvq2zramja3zQBYxAO3JQo%2B6VWXttuMjkQCywAb%2BrAOi%2BzcDfZ2crgT%2FAbSZM%2BqmErFq4ODyMETDOog05PWIV6kraqAYOraPs43%2B9a0lvP%2BcyTuepuNZNd660PzxTtKx%2BTB57MkNGVxrZIu7lXS9IXFKf1A4jahzggy0d4YDxpDNKGG9CJpelyDBOIShcxs8cWGG2%2F38xudgOaDr1YJoCSPL70Z41YCt1TvNcyjkq3SeuXruMmFlLxNf8ukaebmH5HbU3tlBMdL%2Fk6dV7%2FI8TUCbxeEPGgvRyC4ZLNzkv7zX2CnBvwj7VwbtrixIAN2hbAI9pa4YAM9qvpHZJDaK1WIt1idAvme%2F2Jy21v2aOCxZ10i8BKqAtyaUtZBoqTXXLVMlJHEM1EaAdGRTT4qD3alFv6cA3OBzQRzuQGu9mAnP2ugcgmw8uFiRa9oJBeMGTeKBa9wiSiET3a%2Bl2cKXyU22rtDm0SM8toPZEO8gFzKsE2wVEytCSMelSAIeqpW%2BhzjeqNlSv6LVZ8bWb8fyaaoYWxRLW887P8D069vXfljwXOWA%2FU7M%2Bb%2F2XotHq68q6KupN0OrUw3Kv%2FvwY6pgFuF5qwYYDdsNMZehzEum8ObVn1RCkpO9kPGFl7b5qcP7eNrEvR3nx9pCku7eFl103CQvX336jLCoomdbTQrkYYbGbEAz4O0kMA8uasFHoxYaUGGplluZja0xq8VrPpLHbO2%2FaB9xy9da%2FNxiC8XsRPTwxAzG83SnFZTSSJrPUbDHgULAFhEKFynhcA5Jz%2F%2Bb2lmgEV2MYmDQ7kPBtPhXpHnZ8GVROO&X-Amz-Signature=aa325256f862d03acb91e11849ec5a5d3862f5ce887e797cdca65d5b8860da5d&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
