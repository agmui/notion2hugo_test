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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHFNOS5R%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T200829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQCiM7hG98RdFwJV8nl2jDwIKRt6tSG6OPmaQcTFMFZBhgIgDKSWr5Yt37eoJvZS0CqMIwGjq0ZF45UzIE9ZUuMCXNoq%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDCQzEWKAkoEdemGRtSrcA18TRtYqLsimOw78X8HlT5Eev7wMwuDGx91ek%2Bj0rGBP9%2B5W3XdB3ra2zKRttd9LWmnEaqhTqiyQ8e6Uwap7Haa8n5H%2BdQK4yE9RlIhjE6Ttr3Q4cTLPKgcSJL00LlDc6GOsIC0ios6M7Uq8V8aofrCG9oeoC0mS7%2BRtDBBtFmVoSSBGuRtOxPMdOS0PnrU%2Bc3ZVQoYrBITqMhqCxPcsaRbPq0eDflF9nL86SXjXeS2p1lbiYmTsrxO%2BykOsb%2BRpqV%2F0vIykFKxNJ7psyEO%2BE1RsWyviUdNiLcBTwM6IFVwfdDK87%2FDgSXE%2FPjtxVgGEsy2LLujSVDPKmyexbQwtT6c4iA26hf8NKRtc7RmswYYVxnOKcuGrwFho%2FsCUb2henLaUEnG38DC7hDg02DYZJqo5CW308Nq2Gcc2tJaNRh4GdPtSix8gffjrwYZK6FeorOsLZCkz1N9lXQJ1Oe%2FPvn93u%2BpI%2FljCHwjrSvl6X%2FoQS1zIXacIV0iiBVA4%2FLqS4KJM%2FK74eUxlAIPWUTgH3YKeW8t4o5Ic8Z9np3hjVR%2FDHNP4qXrUKBiXqOkEe27KSQYgsio1MQU1t9N7xDCUDLJUFJb21BGq9fONJGIGZYouZZE0XFGFdI6sVfP7MIq8m8MGOqUBwxd9jFC6oAWDGU4lGNE7cE5aIj0NHWwOLyYuh0ZhGHtPhB6dJ8D7jpTh0NC%2BgNS1iuneukjoa%2Bg4KbH8ZlNlqAdN%2BGy2p1woaLlZuoKYLWR67p7a7E2WJC9uJ0Cgd2fRdpaYuvQpuRdSdK6T1N%2Fc8VyLAGp6HURKhM4fO2cPvXyqiLdnEG5kfKHpFAKw1cqA6ij7wvUBKlqk3EXlhGMgkzIXr0SC&X-Amz-Signature=c9247206125349f19174c22a8f65a0d56062a669577a7feb10a7831d505a62ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHFNOS5R%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T200829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQCiM7hG98RdFwJV8nl2jDwIKRt6tSG6OPmaQcTFMFZBhgIgDKSWr5Yt37eoJvZS0CqMIwGjq0ZF45UzIE9ZUuMCXNoq%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDCQzEWKAkoEdemGRtSrcA18TRtYqLsimOw78X8HlT5Eev7wMwuDGx91ek%2Bj0rGBP9%2B5W3XdB3ra2zKRttd9LWmnEaqhTqiyQ8e6Uwap7Haa8n5H%2BdQK4yE9RlIhjE6Ttr3Q4cTLPKgcSJL00LlDc6GOsIC0ios6M7Uq8V8aofrCG9oeoC0mS7%2BRtDBBtFmVoSSBGuRtOxPMdOS0PnrU%2Bc3ZVQoYrBITqMhqCxPcsaRbPq0eDflF9nL86SXjXeS2p1lbiYmTsrxO%2BykOsb%2BRpqV%2F0vIykFKxNJ7psyEO%2BE1RsWyviUdNiLcBTwM6IFVwfdDK87%2FDgSXE%2FPjtxVgGEsy2LLujSVDPKmyexbQwtT6c4iA26hf8NKRtc7RmswYYVxnOKcuGrwFho%2FsCUb2henLaUEnG38DC7hDg02DYZJqo5CW308Nq2Gcc2tJaNRh4GdPtSix8gffjrwYZK6FeorOsLZCkz1N9lXQJ1Oe%2FPvn93u%2BpI%2FljCHwjrSvl6X%2FoQS1zIXacIV0iiBVA4%2FLqS4KJM%2FK74eUxlAIPWUTgH3YKeW8t4o5Ic8Z9np3hjVR%2FDHNP4qXrUKBiXqOkEe27KSQYgsio1MQU1t9N7xDCUDLJUFJb21BGq9fONJGIGZYouZZE0XFGFdI6sVfP7MIq8m8MGOqUBwxd9jFC6oAWDGU4lGNE7cE5aIj0NHWwOLyYuh0ZhGHtPhB6dJ8D7jpTh0NC%2BgNS1iuneukjoa%2Bg4KbH8ZlNlqAdN%2BGy2p1woaLlZuoKYLWR67p7a7E2WJC9uJ0Cgd2fRdpaYuvQpuRdSdK6T1N%2Fc8VyLAGp6HURKhM4fO2cPvXyqiLdnEG5kfKHpFAKw1cqA6ij7wvUBKlqk3EXlhGMgkzIXr0SC&X-Amz-Signature=03ae6a4e253d2557a653fa193493609850896dbf8ddb0ae1f04448f644bfa238&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
