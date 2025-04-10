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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YFBTK2L%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T181112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJIMEYCIQDvmw%2FqlwIvgIztBPuSwJwLSWTu4LdyLujVejxsT2RsrwIhALMG6gOEPaZW8bRWTeVfHqPskA8CT84x%2BwGw4YgcNiiOKogECKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igydv7URgCDZ1LhPyG4q3ANSznjHuAlV40Mz%2B1CJoPn%2FaEBmwfX8yiyHd4S7SqG8AJpsoLvIELEB5hYk6ryCxqVV7c1u2rRoQY4TC2eQoDI9W525ozx8I4kEucPGFJVy0DknurS80SRqT1tTc7eZ51zXnLODGxqsUemHc00Jq2fCrJroJecv2hPaFZudf%2BvS8UWAE7oh2Epmopem6S9cuDGDldOrlOkLjvQcwTAR8LhQb87uyX43l%2FxqcXrsSOcnW4LbvocwFYaTsxuGkieei%2F0EZgxJhNbZ0K4zE8I06%2FX6XdiHE6BckvNYAorpS6D0pzA2s1KvPUS%2F7E1Xfio3t%2B7fP3HG3oka%2B%2FnORpReIcP8XCmCRP1kQGT%2FfBCgLXo7n%2Fi9in%2BmEN9b2lZDyTA34lACJPKTmvM1Iw77unXeRzBJ3pV8VYzY9kMXWSEXvO6acgy7HNzjhn3Al025MzQ2ZCfD4N9UA%2FrLj1VKiglL5RW94AOIOTqh0NQlNCg7qHG2%2F3Gzx6eicJKWwEOqcFCBdbK8J0TxGlqJksxZnkNTKtI9tDMF3SYUOwFnAhCHbwnzHP597jvX4HH2lKhS0mvIBQPbuupABMmRltfQ99sTsbE0qv0x6HKnmVvtdk%2BfDl3Y7no2XACXo8xwTmpOtDCwh%2BC%2FBjqkAWcB2%2FLchccJdpTvecO8pxXQ%2B8s1lQyc8IhaBcnCoucR38cxEPn%2FmfUQppgx6ye%2BUlO4XXCjhy3dSJT9WGSxEeOMTJbgcdFKLN3tjqSxRUPTi57ixZ0F2TVs146rW%2Blx0s56FgEj0QzCh2etrPdjPkuyAVvdwmgB4ex15iFqjyIle8HQQy%2Bqn8yj%2FnU%2BgeE96JuD5C8Yqj1WsFySa5GWbAmkt7YR&X-Amz-Signature=984dd739801429b5d58af097204cc9206ed22b2862f7f40ff5548be27fb5ee65&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YFBTK2L%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T181112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJIMEYCIQDvmw%2FqlwIvgIztBPuSwJwLSWTu4LdyLujVejxsT2RsrwIhALMG6gOEPaZW8bRWTeVfHqPskA8CT84x%2BwGw4YgcNiiOKogECKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igydv7URgCDZ1LhPyG4q3ANSznjHuAlV40Mz%2B1CJoPn%2FaEBmwfX8yiyHd4S7SqG8AJpsoLvIELEB5hYk6ryCxqVV7c1u2rRoQY4TC2eQoDI9W525ozx8I4kEucPGFJVy0DknurS80SRqT1tTc7eZ51zXnLODGxqsUemHc00Jq2fCrJroJecv2hPaFZudf%2BvS8UWAE7oh2Epmopem6S9cuDGDldOrlOkLjvQcwTAR8LhQb87uyX43l%2FxqcXrsSOcnW4LbvocwFYaTsxuGkieei%2F0EZgxJhNbZ0K4zE8I06%2FX6XdiHE6BckvNYAorpS6D0pzA2s1KvPUS%2F7E1Xfio3t%2B7fP3HG3oka%2B%2FnORpReIcP8XCmCRP1kQGT%2FfBCgLXo7n%2Fi9in%2BmEN9b2lZDyTA34lACJPKTmvM1Iw77unXeRzBJ3pV8VYzY9kMXWSEXvO6acgy7HNzjhn3Al025MzQ2ZCfD4N9UA%2FrLj1VKiglL5RW94AOIOTqh0NQlNCg7qHG2%2F3Gzx6eicJKWwEOqcFCBdbK8J0TxGlqJksxZnkNTKtI9tDMF3SYUOwFnAhCHbwnzHP597jvX4HH2lKhS0mvIBQPbuupABMmRltfQ99sTsbE0qv0x6HKnmVvtdk%2BfDl3Y7no2XACXo8xwTmpOtDCwh%2BC%2FBjqkAWcB2%2FLchccJdpTvecO8pxXQ%2B8s1lQyc8IhaBcnCoucR38cxEPn%2FmfUQppgx6ye%2BUlO4XXCjhy3dSJT9WGSxEeOMTJbgcdFKLN3tjqSxRUPTi57ixZ0F2TVs146rW%2Blx0s56FgEj0QzCh2etrPdjPkuyAVvdwmgB4ex15iFqjyIle8HQQy%2Bqn8yj%2FnU%2BgeE96JuD5C8Yqj1WsFySa5GWbAmkt7YR&X-Amz-Signature=1a91d1cfd2e6d19611f5c46ebd5062009d4b31152742f0fc69691d4df2305c40&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
