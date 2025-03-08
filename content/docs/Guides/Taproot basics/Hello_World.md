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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDIWAUFH%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T060827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJGMEQCIBvgbmCeUbuePdkcEQt9dJcMKq11%2B0l%2FC%2F%2BZDFLhBKmXAiB16EfIgbGGKfwFoJEMxaj4kUQ3Fdp%2FrmCT%2BLyI6sTGRCr%2FAwhWEAAaDDYzNzQyMzE4MzgwNSIMyrhSGr9suqBtJrLvKtwDPUEeDmf7tlooxzIM7YdCSm4HgkMC9oTpdlcnLE2BnYkh1f7X8NzjFeScLAIVl3PwWDM8c835OGZmAhYJO72wXWaVkgZ3GopkQPxdtTswCnw7P2PtwSzqv7tTdRoebeWs%2FjkXhmmE%2FPqMvfxyCWR4IcgVD9mSKz3%2BMGGFkGulquujySYiqrjqTe9csrr6pL1%2BHpqyctJyTZjSi4e5x6K53iFPcW1xfOt8KccsCDLxEEG6ZKO5OpnA2QpaVCKsNADF7LfrBcuV2MygqKA%2B020LQt4Jf3LlsAs46Wiqr2SYuKnPf3mNdT%2BU6AQXg0gbsGzMu%2BpW6gYYS8N3mWqrWrtVRCJMUgoaI5fHkJpXadGMCEzAMMMa9K7n%2FFA0lzXxxQM1%2BBRIkMcaCHr6fObrfJ9wFudM8bizGi%2FgVRMkH2XZdr9oF%2Bmkb9oyb5J6D0%2F8Iezb9lm3zdSkVYzvjlFJ2XvSomMJh4mopo6hTRjVKMp62Fr3ap4YKmSXJpzTJIe8h182v1C7Jesee%2F6A5zwrphu%2FWWBqF5LbVCp%2FDquAst%2BRrP9eTCPX2Q%2FnaX4HBd%2FC%2FYZ3biyY3Smfp8kOdRd%2BYkE5VDvP2GSmVnz%2BiYjo2tTslM2%2FBH16LtcEJ8i8h4swo56vvgY6pgHjhgdEYNT7lPZ6OJFtZ%2FXUWDd%2Bm5MDT94weDKtPTCxyzNUq19RS5iLIwFezrnr02ZLg2xUkCpBpaec1EPK6hRBSaf24V9vRzDhdkvD%2B77CmszpARY%2FOhO4hGOs6k9eSc3GzJdT7j%2B5%2F%2BhZkr8Q1NXm0lewSpDPqGOnSogdty8X6QgeLOBL6LRI0uN5cZbFRCLHrnhlO46WUnlPiDSLxM38pUIhpMUX&X-Amz-Signature=91b99ae0bc47f4845c8894e0232b8f3e897fc16d41496cc17c2132eb02806c5d&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDIWAUFH%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T060827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJGMEQCIBvgbmCeUbuePdkcEQt9dJcMKq11%2B0l%2FC%2F%2BZDFLhBKmXAiB16EfIgbGGKfwFoJEMxaj4kUQ3Fdp%2FrmCT%2BLyI6sTGRCr%2FAwhWEAAaDDYzNzQyMzE4MzgwNSIMyrhSGr9suqBtJrLvKtwDPUEeDmf7tlooxzIM7YdCSm4HgkMC9oTpdlcnLE2BnYkh1f7X8NzjFeScLAIVl3PwWDM8c835OGZmAhYJO72wXWaVkgZ3GopkQPxdtTswCnw7P2PtwSzqv7tTdRoebeWs%2FjkXhmmE%2FPqMvfxyCWR4IcgVD9mSKz3%2BMGGFkGulquujySYiqrjqTe9csrr6pL1%2BHpqyctJyTZjSi4e5x6K53iFPcW1xfOt8KccsCDLxEEG6ZKO5OpnA2QpaVCKsNADF7LfrBcuV2MygqKA%2B020LQt4Jf3LlsAs46Wiqr2SYuKnPf3mNdT%2BU6AQXg0gbsGzMu%2BpW6gYYS8N3mWqrWrtVRCJMUgoaI5fHkJpXadGMCEzAMMMa9K7n%2FFA0lzXxxQM1%2BBRIkMcaCHr6fObrfJ9wFudM8bizGi%2FgVRMkH2XZdr9oF%2Bmkb9oyb5J6D0%2F8Iezb9lm3zdSkVYzvjlFJ2XvSomMJh4mopo6hTRjVKMp62Fr3ap4YKmSXJpzTJIe8h182v1C7Jesee%2F6A5zwrphu%2FWWBqF5LbVCp%2FDquAst%2BRrP9eTCPX2Q%2FnaX4HBd%2FC%2FYZ3biyY3Smfp8kOdRd%2BYkE5VDvP2GSmVnz%2BiYjo2tTslM2%2FBH16LtcEJ8i8h4swo56vvgY6pgHjhgdEYNT7lPZ6OJFtZ%2FXUWDd%2Bm5MDT94weDKtPTCxyzNUq19RS5iLIwFezrnr02ZLg2xUkCpBpaec1EPK6hRBSaf24V9vRzDhdkvD%2B77CmszpARY%2FOhO4hGOs6k9eSc3GzJdT7j%2B5%2F%2BhZkr8Q1NXm0lewSpDPqGOnSogdty8X6QgeLOBL6LRI0uN5cZbFRCLHrnhlO46WUnlPiDSLxM38pUIhpMUX&X-Amz-Signature=3d1e5b73db9f8248fb622ae3a1dd857cc72949d45d7b9afbe9dc372565a17d13&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
