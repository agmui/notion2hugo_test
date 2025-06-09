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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHPR5K55%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T051101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDEodfDwrYKDEmkhwu9eCt0CrnoqKskDVg7ymb4LrWPXAiAsOBCFbhV7YOirEXTUtWzX5WzoN6qC%2FIOrdK0smWxwviqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2Bpm3o1uCIQuDZWGAKtwDAXJ6D8pnwiqAF6oK8fmzDJIqpYpojPBjJemIxj9pGYapcvaOu2kNi%2BmnmLhk9CczBB12gAfMnrrHjBKk6ZUpxohC19V3%2BmFL%2Fq0PoqejIgFOA%2BRiTo%2FmlEBgo2CmRwngymgOL3uoGwtLoR0cEfMrpUoUqhfeMu6hP4nWrPIkqUIF%2FoaQgwibCG2YwlHsMq66cANKG%2FeM39wedcKzv8x7Cs9xTv9WBEjvVTzO5Vjf7lVBojgZQrp819naoaT8G1WXBUUJhPyrBbn4SA8itGspaW7EnZyxlQ0HxrEjo2nSpDQrN%2B5%2Bz%2FjCh7cIFzoROSybXKR22nC5HO%2BX2TLqtL6zgbIoy4Wx93BZg7iRaYWb3ZH2ZUqyK19UKFsel%2Br2kp9vhuS1iGQaoRtrL9l7QvYnWb%2BImwghQ5FPm5wtAlr8yDLDvELUz%2FQd5t%2BgnRCNkgRHAkSURp08nwush7633JjDke%2Fs4S4mYwuFw2PbwQrP1LzyG6eNE95AcOx6bOxlK6GfeZNtEtKmlpHEkeDkGRiU08qFlNcMG92%2F1Hu%2BocpzeIprN176tAia0v6pd%2BflxjGReCGpSrtBYv99Fn%2FAnwPZL7ok2RsqLMELkZ6VB2xcTn9VNyS%2FAJfVGKLQQG4wyO6YwgY6pgG8oEkJTiQQXi%2BIGQOhpHXg9TT1g0nQXUH43kuz%2FZC3gVlwwTovve7U2vDZ1A2%2F%2BWaYrhwUjyfwoxQVst8IidewHpdYCgE3K%2BPj2BOJ9WkWEMPvfRngPQcyaC8ppfZHnb%2Fe56RE7IsbTwudTBzWfl2sWEZNj9E9C9NdHlIAnGmZXLbzy%2BIecRUpH5n47tAH56l%2Fm0ePBkH2x%2FGiSMIeoWB8mY8Ivw5F&X-Amz-Signature=4d62ed86626d14e48ac5a77a546d8d434bed2700ee8beda68ee9622810a7b24e&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHPR5K55%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T051101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDEodfDwrYKDEmkhwu9eCt0CrnoqKskDVg7ymb4LrWPXAiAsOBCFbhV7YOirEXTUtWzX5WzoN6qC%2FIOrdK0smWxwviqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2Bpm3o1uCIQuDZWGAKtwDAXJ6D8pnwiqAF6oK8fmzDJIqpYpojPBjJemIxj9pGYapcvaOu2kNi%2BmnmLhk9CczBB12gAfMnrrHjBKk6ZUpxohC19V3%2BmFL%2Fq0PoqejIgFOA%2BRiTo%2FmlEBgo2CmRwngymgOL3uoGwtLoR0cEfMrpUoUqhfeMu6hP4nWrPIkqUIF%2FoaQgwibCG2YwlHsMq66cANKG%2FeM39wedcKzv8x7Cs9xTv9WBEjvVTzO5Vjf7lVBojgZQrp819naoaT8G1WXBUUJhPyrBbn4SA8itGspaW7EnZyxlQ0HxrEjo2nSpDQrN%2B5%2Bz%2FjCh7cIFzoROSybXKR22nC5HO%2BX2TLqtL6zgbIoy4Wx93BZg7iRaYWb3ZH2ZUqyK19UKFsel%2Br2kp9vhuS1iGQaoRtrL9l7QvYnWb%2BImwghQ5FPm5wtAlr8yDLDvELUz%2FQd5t%2BgnRCNkgRHAkSURp08nwush7633JjDke%2Fs4S4mYwuFw2PbwQrP1LzyG6eNE95AcOx6bOxlK6GfeZNtEtKmlpHEkeDkGRiU08qFlNcMG92%2F1Hu%2BocpzeIprN176tAia0v6pd%2BflxjGReCGpSrtBYv99Fn%2FAnwPZL7ok2RsqLMELkZ6VB2xcTn9VNyS%2FAJfVGKLQQG4wyO6YwgY6pgG8oEkJTiQQXi%2BIGQOhpHXg9TT1g0nQXUH43kuz%2FZC3gVlwwTovve7U2vDZ1A2%2F%2BWaYrhwUjyfwoxQVst8IidewHpdYCgE3K%2BPj2BOJ9WkWEMPvfRngPQcyaC8ppfZHnb%2Fe56RE7IsbTwudTBzWfl2sWEZNj9E9C9NdHlIAnGmZXLbzy%2BIecRUpH5n47tAH56l%2Fm0ePBkH2x%2FGiSMIeoWB8mY8Ivw5F&X-Amz-Signature=b789591e77a0ed579d211e343fa38b0c3ac59b11bce50d33d7300f66eb4a8100&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
