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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466763IFBV6%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T050833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQCkGX6Q2YzZCR9CTnizEpp9ulncsHkp0ORI01AZAFMvRgIgN7sGmzEZJJtY%2FKJLKRr%2BsmVkkPGxxUM1suxvwqun6ToqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMA74U9esFeuUvqMLCrcA9tK9955WcTYtG%2FDPIVG%2FIBw6wNGcE6NfmVoB0hewvgNGC57TpWA3n5LTt%2F4akaKsOA9Yde%2FESDyDuF%2FNRLS5FKb%2B1eqZmjBHDzuMjfyuLbkjGN7SfJiDfCpQwDWAr%2Bfko%2FnrBo5VgYhwZGUMWNxVvKnNOkD4ORDotVxM0DT%2B33PvcTyob1X10jKb4YPF%2BpwglQ8AQFINYJ6I7Moqu9dY8s9qkFkkmaO3P1rsRIIVT6NHuvIs2YzOEYD7jkzsoO6GUti6OL7b1FV8CQDYe7FAL0TSki0PYhiNLPaHCPxnKKXOaanRJej89nMcADOOR0RE8dB67ZOOu8U84wb2wT3YESFkQZwcXzeT9ebPxVBRg5g5lAYAMxpo11l6bJ4cvsSCikb2f1uhmtDcczWD2t4Txexuj8sHiYzCmc9Z9wTkIKwzkwgi9ULXCf3Ot5oyresJX%2BKK%2FTHm54aCrRMzmVD6W%2F9CrAl0NAuSyU10VjJNw9cSnoCELLp1f8%2BkcGfRLCJw%2FW8Glv5rUc18gF5LdvVoUCwRRYxKwkHqLKc1l6ZNtoJdgXZgVxID%2BLMBXc0Sn1GrimUNDx8o4Jr%2BHTHR3RNiGvoVvWcpdHu3Ykv1x0pdexjHM3bCASAqaHrPIn6MKbr28AGOqUBrpHf%2FlGu5JeUcJJRjGVI4AWCwQeSN8Y03YB979ZGpFnVWyNoYRYFWPJ0FjDdnA69dHxF5vlmN8vTpynEbNLLHs%2BWKKjnkAZIqLs46u4IFZsowhwfUb6OsrAvl9UH299IPwdDQW7HE2ZQwBeFQlq0FR2BRjZH28n9Ih0I0MVrEAP%2FK%2Bo%2BZU6dvRpdMV5rBCSKfM86wp5%2FQnNxIatGyxNb5vkeBu1t&X-Amz-Signature=95db16ef3466b38c77fb46a132f7d355992fb469adf67a3bbcf482903fac75d0&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466763IFBV6%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T050833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQCkGX6Q2YzZCR9CTnizEpp9ulncsHkp0ORI01AZAFMvRgIgN7sGmzEZJJtY%2FKJLKRr%2BsmVkkPGxxUM1suxvwqun6ToqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMA74U9esFeuUvqMLCrcA9tK9955WcTYtG%2FDPIVG%2FIBw6wNGcE6NfmVoB0hewvgNGC57TpWA3n5LTt%2F4akaKsOA9Yde%2FESDyDuF%2FNRLS5FKb%2B1eqZmjBHDzuMjfyuLbkjGN7SfJiDfCpQwDWAr%2Bfko%2FnrBo5VgYhwZGUMWNxVvKnNOkD4ORDotVxM0DT%2B33PvcTyob1X10jKb4YPF%2BpwglQ8AQFINYJ6I7Moqu9dY8s9qkFkkmaO3P1rsRIIVT6NHuvIs2YzOEYD7jkzsoO6GUti6OL7b1FV8CQDYe7FAL0TSki0PYhiNLPaHCPxnKKXOaanRJej89nMcADOOR0RE8dB67ZOOu8U84wb2wT3YESFkQZwcXzeT9ebPxVBRg5g5lAYAMxpo11l6bJ4cvsSCikb2f1uhmtDcczWD2t4Txexuj8sHiYzCmc9Z9wTkIKwzkwgi9ULXCf3Ot5oyresJX%2BKK%2FTHm54aCrRMzmVD6W%2F9CrAl0NAuSyU10VjJNw9cSnoCELLp1f8%2BkcGfRLCJw%2FW8Glv5rUc18gF5LdvVoUCwRRYxKwkHqLKc1l6ZNtoJdgXZgVxID%2BLMBXc0Sn1GrimUNDx8o4Jr%2BHTHR3RNiGvoVvWcpdHu3Ykv1x0pdexjHM3bCASAqaHrPIn6MKbr28AGOqUBrpHf%2FlGu5JeUcJJRjGVI4AWCwQeSN8Y03YB979ZGpFnVWyNoYRYFWPJ0FjDdnA69dHxF5vlmN8vTpynEbNLLHs%2BWKKjnkAZIqLs46u4IFZsowhwfUb6OsrAvl9UH299IPwdDQW7HE2ZQwBeFQlq0FR2BRjZH28n9Ih0I0MVrEAP%2FK%2Bo%2BZU6dvRpdMV5rBCSKfM86wp5%2FQnNxIatGyxNb5vkeBu1t&X-Amz-Signature=58553b30fea61b2cdf23ee9006ca02cd57680f311bf738472893c71dabd75446&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
