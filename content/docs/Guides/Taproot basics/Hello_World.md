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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZALC7NGD%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T210738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJGMEQCIB6%2BIgRwP5SvNZ7ZCWzr1Z6dhMhC4FEXxuLV6%2BnZbULgAiA%2BzncdNCJ9CBkSIE58HmL81%2BwdtQkmSCdrzagQkLeW8yr%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMiVVZsGO%2Bpuh7EdkHKtwDZ%2BlQTqB1hp4Hd8k6UX0Q8YiopJkFQm7ytAkHw6H%2FZaOpjxaH%2BF3trvy0r1kBiCcRYNYgwZH4yvw95M8K9ExzIzk18cAdchrXbCSK9%2FUWeD0nB5Md7X4h97xzcY%2BJHxVmguC94ZL%2Fpbnfjc29azQzPKZdaHY6nfWWLxwvgc9q5gpljvuNkXW67j5P4gpzNh8j0XT6eSfs7KFFusQ71IscglW%2FO893BDZ0e9VBTAIWgfnHF78pMKhH6KIOQudCYU56IpEQ2UGq7B%2BzB%2FhwNAc95aj5hv0W1kSJgRb71vAHDB%2B3QzfGh4waUbXpXCE%2FK1S4D0ThmdJS8atJuXbzFwsnEf4Q1YGXi%2FkjQ7ItFQl80ZH7LhITeszmsBLrVVPXL09KjegVMkyNJu9tkvAFC%2FYB7mVmzibmYTioe7aaynb5I5Elmrf9Zcq%2BwDPO%2FJ2E3DdbjfHEQjnBlt72yhWoVuI3bIMEhqBcjBBOf%2FLCoDLVxsbEpUHmbCZX%2BomjYNhoxM%2BgHjKZVtLYxOs4IpV%2Fcz4thjHwAje7P4kFUoK6WZNgBF84Zp2vR4NXTu5HYHz%2FWMH%2FTZ5Jg7ZKvOA3j7bQA1WJPUyeYed%2BZNUYDtNAi8m98jUAj6xe52CCbn%2B%2B8Xowp%2F%2BUxAY6pgHqPAfP8ztQryvSjLYsbX%2FCtAywas1ZCH3k4Uo4wLxTwixDDanARjigPiNsexNVgznX3T2xrM2JJwqGWsdQ%2F3Nn8Gqey3oU89Xsb7pWYIUqPnUcp4bko%2BVsv8scpOIIzPM6t%2FQzFf9kjQnrvZnfjpAwMa2YvZGHBRHgsVtHTgyEiRMPV9KXeX%2BKEiBhQw4BHRxhpgM2zRlk4DNsQSKbUVDx%2FVWA0JKb&X-Amz-Signature=58d1e85c770f16deb22e6822ecea730f727ec41ff08f7cde870b6beb9938215c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZALC7NGD%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T210738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJGMEQCIB6%2BIgRwP5SvNZ7ZCWzr1Z6dhMhC4FEXxuLV6%2BnZbULgAiA%2BzncdNCJ9CBkSIE58HmL81%2BwdtQkmSCdrzagQkLeW8yr%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMiVVZsGO%2Bpuh7EdkHKtwDZ%2BlQTqB1hp4Hd8k6UX0Q8YiopJkFQm7ytAkHw6H%2FZaOpjxaH%2BF3trvy0r1kBiCcRYNYgwZH4yvw95M8K9ExzIzk18cAdchrXbCSK9%2FUWeD0nB5Md7X4h97xzcY%2BJHxVmguC94ZL%2Fpbnfjc29azQzPKZdaHY6nfWWLxwvgc9q5gpljvuNkXW67j5P4gpzNh8j0XT6eSfs7KFFusQ71IscglW%2FO893BDZ0e9VBTAIWgfnHF78pMKhH6KIOQudCYU56IpEQ2UGq7B%2BzB%2FhwNAc95aj5hv0W1kSJgRb71vAHDB%2B3QzfGh4waUbXpXCE%2FK1S4D0ThmdJS8atJuXbzFwsnEf4Q1YGXi%2FkjQ7ItFQl80ZH7LhITeszmsBLrVVPXL09KjegVMkyNJu9tkvAFC%2FYB7mVmzibmYTioe7aaynb5I5Elmrf9Zcq%2BwDPO%2FJ2E3DdbjfHEQjnBlt72yhWoVuI3bIMEhqBcjBBOf%2FLCoDLVxsbEpUHmbCZX%2BomjYNhoxM%2BgHjKZVtLYxOs4IpV%2Fcz4thjHwAje7P4kFUoK6WZNgBF84Zp2vR4NXTu5HYHz%2FWMH%2FTZ5Jg7ZKvOA3j7bQA1WJPUyeYed%2BZNUYDtNAi8m98jUAj6xe52CCbn%2B%2B8Xowp%2F%2BUxAY6pgHqPAfP8ztQryvSjLYsbX%2FCtAywas1ZCH3k4Uo4wLxTwixDDanARjigPiNsexNVgznX3T2xrM2JJwqGWsdQ%2F3Nn8Gqey3oU89Xsb7pWYIUqPnUcp4bko%2BVsv8scpOIIzPM6t%2FQzFf9kjQnrvZnfjpAwMa2YvZGHBRHgsVtHTgyEiRMPV9KXeX%2BKEiBhQw4BHRxhpgM2zRlk4DNsQSKbUVDx%2FVWA0JKb&X-Amz-Signature=97a06a2b560430a60980008104181bfb74f1f3bac18e2bed024008f32fef96fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
