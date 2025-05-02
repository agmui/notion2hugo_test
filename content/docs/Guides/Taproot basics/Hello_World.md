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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WPW6KK3%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T070902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJIMEYCIQCTHXCA82aW1qr%2FE%2BmjAP66FqvrJ42p16WaelLjsE9JxwIhAJV2mAmtvqc2eA1vzrqT%2Fqk3Kst1eA6XT9K6M7RasT0EKogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxNMGaYj6faNSjX8VYq3AOh70DIQnADDMAEwVQem2oD4JyV75%2BzE4AxGjRi7NIm0YNzmrXeaaOD9TOeac%2B9tft71CPemaCVvUzmyVrvG7n5hXQ52GnWBkll5o%2FIkN8XZzLaiN6VKPCIyItL6oyuBUP2Jpk74Em69xW1W717pwqtYH3y%2Bqg3Qb%2BLLTtbti0w8FlYDB%2FZzWM5IKbpavkqIJ%2Bio2lj6g%2FJr1xCy2%2Bl2zMcH3p7Jw6mc1EbdxbRUpYp9oNr9OtwgdQEATu1r8BpV%2Bxp7vzagX3mf4Ce7N71qR2pAJ%2BqFgEMXcJlJDxa1%2Fjt91fSaQ%2Fnqkvx1xNNw5J9aLjrxhUQ8vRd0PzRH2ITdNnWK%2BMo4zxWalETeWWSrp6jAe56O%2BkBZWSX2c8GkUE7kKVr5zTmfPRDIyLByZoNS4EQ4KJ9Dw4PKhR4MtkfcptKo76RlpDi64UbQrZ5GdEtU3XO%2BnOlOZ09CsiuGlUUJ5ZQNvnql6OcoYGVU65qrAAfGHefeeOOSshR6P3yEGwD9tMpymJrbbMF7%2B7UyJKn4BZ5BdbWoF5LEV3OT7LS%2BQTTAavtxg7L531oXmiCkPGKIV%2Bk9HYNyzNRBl0KgkBty2qGW%2BXt6KceeuzBjxTKll8Mku4E4fKmRJMFyh%2FSUjDF3dHABjqkAeh3lZuhkRd%2F53eU3IRxIZ9%2F29PFIUCFBQQYnYBbB%2BFXcAHMSn9RfYhE%2B%2BfykzCDtD%2FpcpWiIYm4c8tXRxr8hj6E%2FGnhnHurcFgha6UIBCQe30HDv28CJvcwmiqFrao7bb8eWE%2BUYh9eOjlHKwe4Fu7motQmEbgY85HnsDpnqzBzyxYmrVo%2B0Va%2BWQePg18S0CSZcxGaHglklntW0VULG1MpxRMD&X-Amz-Signature=966a2abea2c46ad5891c8ce5781beb96f638cb5523b07235490d58feaaf6b1f7&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WPW6KK3%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T070902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJIMEYCIQCTHXCA82aW1qr%2FE%2BmjAP66FqvrJ42p16WaelLjsE9JxwIhAJV2mAmtvqc2eA1vzrqT%2Fqk3Kst1eA6XT9K6M7RasT0EKogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxNMGaYj6faNSjX8VYq3AOh70DIQnADDMAEwVQem2oD4JyV75%2BzE4AxGjRi7NIm0YNzmrXeaaOD9TOeac%2B9tft71CPemaCVvUzmyVrvG7n5hXQ52GnWBkll5o%2FIkN8XZzLaiN6VKPCIyItL6oyuBUP2Jpk74Em69xW1W717pwqtYH3y%2Bqg3Qb%2BLLTtbti0w8FlYDB%2FZzWM5IKbpavkqIJ%2Bio2lj6g%2FJr1xCy2%2Bl2zMcH3p7Jw6mc1EbdxbRUpYp9oNr9OtwgdQEATu1r8BpV%2Bxp7vzagX3mf4Ce7N71qR2pAJ%2BqFgEMXcJlJDxa1%2Fjt91fSaQ%2Fnqkvx1xNNw5J9aLjrxhUQ8vRd0PzRH2ITdNnWK%2BMo4zxWalETeWWSrp6jAe56O%2BkBZWSX2c8GkUE7kKVr5zTmfPRDIyLByZoNS4EQ4KJ9Dw4PKhR4MtkfcptKo76RlpDi64UbQrZ5GdEtU3XO%2BnOlOZ09CsiuGlUUJ5ZQNvnql6OcoYGVU65qrAAfGHefeeOOSshR6P3yEGwD9tMpymJrbbMF7%2B7UyJKn4BZ5BdbWoF5LEV3OT7LS%2BQTTAavtxg7L531oXmiCkPGKIV%2Bk9HYNyzNRBl0KgkBty2qGW%2BXt6KceeuzBjxTKll8Mku4E4fKmRJMFyh%2FSUjDF3dHABjqkAeh3lZuhkRd%2F53eU3IRxIZ9%2F29PFIUCFBQQYnYBbB%2BFXcAHMSn9RfYhE%2B%2BfykzCDtD%2FpcpWiIYm4c8tXRxr8hj6E%2FGnhnHurcFgha6UIBCQe30HDv28CJvcwmiqFrao7bb8eWE%2BUYh9eOjlHKwe4Fu7motQmEbgY85HnsDpnqzBzyxYmrVo%2B0Va%2BWQePg18S0CSZcxGaHglklntW0VULG1MpxRMD&X-Amz-Signature=0a9bc76eec85703c47042de2781a41188b327bdc300dceae23fd7f4d2d051df9&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
