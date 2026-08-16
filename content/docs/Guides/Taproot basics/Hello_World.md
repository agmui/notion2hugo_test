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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZ5OKV4J%2F20260816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260816T011742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQCo7m4qfGe80EJjfK6rxrriiuteLKvkRNfTcl%2BwKWXiegIhAIkkXOmHaimvgoeVHF3ZJL%2BjEN70IbIGFKZ7i9WW5T19Kv8DCCAQABoMNjM3NDIzMTgzODA1IgzSSnj4bo059GP%2B93gq3AOjwrIpwnSwIoVNDTM8Jb34uJ8YJpNSxfPlXDPfpg0IDkWBbNf6mTotulUobc%2F1vidt8%2FoIY%2FLj%2BkRF9p89qka6tAOY9G94LI1hGx7m%2FFpE0NXZzfeQRxDERRmaj4vB18MKGxDcOYZQLzNA%2FbsQbe01t7Wmf3ob0QaKxS6NBJeegdZk0SIPTOn8ZRX39LlNdROCociCrEvAoijXBQvw3a5tlBqwBUo5jNIiw2lGvlLmn%2Fiersn9%2Fr1yuXGVNGj7Wmbq%2Bkrn%2BktDbNOfltZpVeZB4vbJ7s7M73Hp%2FY%2Bca4ZdkTZ2NiZ5X%2F0cEqGPNp4vOmiAZ0GEQOGDwFPtexb8PmgG86gd97ESulqdbaorlyZ89SFSoQsojTbJiTghDYsXTWmbRNqxTt80lfpT6MnW%2Fc3Kjqm8r1C5GVJjc69afoDMAv6xoi4d1%2B4dERpq78z%2FeV4gVGEVYjcTRCwkrR5%2BxM8oLnlZWYNr8ao9bBqAz2OX6Ci1CnEnNr39hrgt06MDNE6%2F1UASyWkolTpSR78uMFSfH9bbufsUczYiL1KZA5J77S%2FQntGAE8W%2FApjjl0fJABn%2BQbLLMeqS3PDnUkij%2BlMS4Re2nMzpu33kjhCysFSzKadf2B89twzKH1FjYTCB7IPUBjqkAUfGtvT%2Fc0zt1zzAQbci6MKa4C46f6iZt%2FWnrJEj2z35qR9qasGqleqOnxVd5dVqLrH1rPAy3MBfeq%2BksUsd1I5l%2BXV1F6A%2FSAjjP7D4ZfwKSXlzviUb3Xp4MGx9LiN03NN8mI2kYwrPnV09ijSb%2FhZU48WxsoPrK3H74PHtXBULJVePhtABaVJzNebjvgrHiCYuTePtgKpgSY0KPBsQpCDAr4Ry&X-Amz-Signature=7807ddc4a24a120da079fd65581f5606cad4ccdff5648cc25c5d959fd994a9fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZ5OKV4J%2F20260816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260816T011742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQCo7m4qfGe80EJjfK6rxrriiuteLKvkRNfTcl%2BwKWXiegIhAIkkXOmHaimvgoeVHF3ZJL%2BjEN70IbIGFKZ7i9WW5T19Kv8DCCAQABoMNjM3NDIzMTgzODA1IgzSSnj4bo059GP%2B93gq3AOjwrIpwnSwIoVNDTM8Jb34uJ8YJpNSxfPlXDPfpg0IDkWBbNf6mTotulUobc%2F1vidt8%2FoIY%2FLj%2BkRF9p89qka6tAOY9G94LI1hGx7m%2FFpE0NXZzfeQRxDERRmaj4vB18MKGxDcOYZQLzNA%2FbsQbe01t7Wmf3ob0QaKxS6NBJeegdZk0SIPTOn8ZRX39LlNdROCociCrEvAoijXBQvw3a5tlBqwBUo5jNIiw2lGvlLmn%2Fiersn9%2Fr1yuXGVNGj7Wmbq%2Bkrn%2BktDbNOfltZpVeZB4vbJ7s7M73Hp%2FY%2Bca4ZdkTZ2NiZ5X%2F0cEqGPNp4vOmiAZ0GEQOGDwFPtexb8PmgG86gd97ESulqdbaorlyZ89SFSoQsojTbJiTghDYsXTWmbRNqxTt80lfpT6MnW%2Fc3Kjqm8r1C5GVJjc69afoDMAv6xoi4d1%2B4dERpq78z%2FeV4gVGEVYjcTRCwkrR5%2BxM8oLnlZWYNr8ao9bBqAz2OX6Ci1CnEnNr39hrgt06MDNE6%2F1UASyWkolTpSR78uMFSfH9bbufsUczYiL1KZA5J77S%2FQntGAE8W%2FApjjl0fJABn%2BQbLLMeqS3PDnUkij%2BlMS4Re2nMzpu33kjhCysFSzKadf2B89twzKH1FjYTCB7IPUBjqkAUfGtvT%2Fc0zt1zzAQbci6MKa4C46f6iZt%2FWnrJEj2z35qR9qasGqleqOnxVd5dVqLrH1rPAy3MBfeq%2BksUsd1I5l%2BXV1F6A%2FSAjjP7D4ZfwKSXlzviUb3Xp4MGx9LiN03NN8mI2kYwrPnV09ijSb%2FhZU48WxsoPrK3H74PHtXBULJVePhtABaVJzNebjvgrHiCYuTePtgKpgSY0KPBsQpCDAr4Ry&X-Amz-Signature=a1b10ddc5edf8d05889d0c99cf989c8b4ab754ab0fa0db5fd4624c957fe44c18&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
