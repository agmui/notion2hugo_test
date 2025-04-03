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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNJ52GMZ%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T170741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC6aoCpWBgCT1Lg2HVk3XBIMbnydrjNv%2BDgdIxlvuMSuQIgbf9UKMKrzlOiNg097D21M5GZ9SpEnJOrHnLfi4Geq64qiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGNieii9go25rL8f3CrcAwSp0QL%2BEhVkQSZXbpKkqT0SqxDbzyhWWTfShafjoTyYlJCjBHPl2jGpHn7UgsM83tCxwX6Kw6l2YT9eZXqgHT92HSRBPMRH7JJEIMct%2F5KJOHr%2Ff3KtpuJSEzdGEMlBTJf5ND%2B9rwNGPOsoewcStuaG6XI%2Fvqtpj2h8L0VYvISh9A%2BjiW89jz3z%2B%2FP%2FU74XSZKzdzln%2FlO4KOuLW76kgNf4r71Y7qJbpdX1vieWSiICWk2lpNLEMEeJGmYvwsaBeVKohOY5NggYy0TjoA3D9XD5hR7gontUHqL9xWOfjq3BRdqqH70JNUgmQcfClBGNlw0%2Bw07%2FKIefQJ1Atth4zHUvVW%2BKM3OEK6IiWD%2BVI0Jzadxw6u2og7vjMGap%2FWt8Saa5f8mGjR7kzcAWJbYvMoJI%2FpqrNiexutEW6wv2pKjpbL5BCxXEOBiISPRtiGaBaMtWRvEtxn%2FI5W6rmhsTrMAh5EUJu24gvbb3megZWq1FWzWgYsoivC%2Bvz5JfQmNzEPR%2FPjlaxkOP1Nnx%2FcFZpmV7HPRGOH0FZZPDKbQu2%2BWHvjjOUAQlgjDNX9PBOJ0XRxTwDQGY1XHEEbi%2BTtHrFJG9Daialihx5rj46X%2FYFHEoVS%2FB6tvdPliHYYv3MILpur8GOqUBm%2BXzxl%2FRlIWfKEJSH9CToKfSEMtmwl5CQ7qays%2BxLVIwnU1etg5c3%2FAZ1xOWzKhcAUnbwCQfxZGxPkC7AXNMlkrEp8cfp4Rxq1%2B3bjEeHoF4Mf5ESLxeWrxmwzNmvs4xfSEVp9Ed04c5Qh4APA62IMD5PW5hL8YXfFXhrWYf%2BjUBePI3aiQ3jJHosFaXvuSW4hsAIFoNBjzhkwdmgr9Whd6Fl82O&X-Amz-Signature=0dd9d6102346bf8e93e156f04d6fedf7d62bcea75b99c8111eaf8a7f27bad0c1&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNJ52GMZ%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T170741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC6aoCpWBgCT1Lg2HVk3XBIMbnydrjNv%2BDgdIxlvuMSuQIgbf9UKMKrzlOiNg097D21M5GZ9SpEnJOrHnLfi4Geq64qiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGNieii9go25rL8f3CrcAwSp0QL%2BEhVkQSZXbpKkqT0SqxDbzyhWWTfShafjoTyYlJCjBHPl2jGpHn7UgsM83tCxwX6Kw6l2YT9eZXqgHT92HSRBPMRH7JJEIMct%2F5KJOHr%2Ff3KtpuJSEzdGEMlBTJf5ND%2B9rwNGPOsoewcStuaG6XI%2Fvqtpj2h8L0VYvISh9A%2BjiW89jz3z%2B%2FP%2FU74XSZKzdzln%2FlO4KOuLW76kgNf4r71Y7qJbpdX1vieWSiICWk2lpNLEMEeJGmYvwsaBeVKohOY5NggYy0TjoA3D9XD5hR7gontUHqL9xWOfjq3BRdqqH70JNUgmQcfClBGNlw0%2Bw07%2FKIefQJ1Atth4zHUvVW%2BKM3OEK6IiWD%2BVI0Jzadxw6u2og7vjMGap%2FWt8Saa5f8mGjR7kzcAWJbYvMoJI%2FpqrNiexutEW6wv2pKjpbL5BCxXEOBiISPRtiGaBaMtWRvEtxn%2FI5W6rmhsTrMAh5EUJu24gvbb3megZWq1FWzWgYsoivC%2Bvz5JfQmNzEPR%2FPjlaxkOP1Nnx%2FcFZpmV7HPRGOH0FZZPDKbQu2%2BWHvjjOUAQlgjDNX9PBOJ0XRxTwDQGY1XHEEbi%2BTtHrFJG9Daialihx5rj46X%2FYFHEoVS%2FB6tvdPliHYYv3MILpur8GOqUBm%2BXzxl%2FRlIWfKEJSH9CToKfSEMtmwl5CQ7qays%2BxLVIwnU1etg5c3%2FAZ1xOWzKhcAUnbwCQfxZGxPkC7AXNMlkrEp8cfp4Rxq1%2B3bjEeHoF4Mf5ESLxeWrxmwzNmvs4xfSEVp9Ed04c5Qh4APA62IMD5PW5hL8YXfFXhrWYf%2BjUBePI3aiQ3jJHosFaXvuSW4hsAIFoNBjzhkwdmgr9Whd6Fl82O&X-Amz-Signature=6c091920fb7b05903bfc4994c5a31ad3375c4f810ba417f72fb7e497567cdd75&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
