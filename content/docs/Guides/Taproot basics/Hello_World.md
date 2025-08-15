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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOCNH3EH%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T061348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQCuyvt7SwkxmSDMCXk695RJi0Rh0wP%2BG0KouLbq1k35BAIhAOEXUarUzFI1aZbKfeJ2tLA9dL7VyBQ6%2BGnkhzQYcjYUKv8DCFMQABoMNjM3NDIzMTgzODA1IgzHk0Ff8sjSG0Rs3kMq3AOCCKAYWcyeHmzaOLV141bQVhkWJ%2FyRytjl7j5M3bWXgEOQ%2FvZneIc7gcXs6pO9wROtjcXJpDxrDeg0bU3EYIUzboriCLBVBmJB%2FHeK4V%2B5D9e6Uly9hcgXgDDVo5KR1h%2Bxmf06aHjKAbqQuIHr9h9Qpob%2BZsMcw3R8MbOn%2BQx1er52m42TajHRvvaZw2w5LRRmjWEIAzaN5%2FeDmwUouf%2FZ4NmGaVNj4BIb5pWK8C2NISGu9HRwZ9%2B0Q8rTZ31udA5z844kG5VOn1cAkw67L23%2B28frTPOyarlqmmElbG6zSjTxOErOs4jbh7q6aD1kGWrowwHFMGo3uGYLXQo%2B58kcijee3TNEhdTLkj5jdY1OYNTQEgr7dtJyOjgPeGzem%2B3Xu3w%2BTox8jjgrgOFQYIPECTkzimXtRa3qXfPuapBaVo41s7kCqIVacjCgGLlumJDYW8r8W5TVT54tbpM8Oq6TZCXbTFbELOmanBuVBcVXeHikvCrBDqcDPArwavl7Q3abrOZo3fsBjvmTwVrOW6Xxce7D5PcvwpdOVRaw4e%2FsaJ%2F67XgYErKpX1cgIByHF4e8ErxHl7STvKfmBZKd4pOTpA%2B7vjfqNIw%2BPRLOXeuUGGiknMJQ%2BUriYsSCbjDGo%2FrEBjqkAdxDHCT4e63knCzEcA4%2BbGdWiBvnU%2BTTCtFAAAQdiLIHM%2Fg%2Bl1wb09AJBEdoWSbmcCQmmD3aB2AkvI%2FH78G%2FzC9p4NEQRkheiEvQkr2rKLAz7LZY8MXkcFSYRL7hDKgDnSdhmjCHp3Xg2q4WJjHf86StAWGLwVPiErOl2jLpsZPVnypCoCGyyJpVf6RqZf2eBTPWCu%2BPF7BhMZXY%2F99ta3P%2BbeN1&X-Amz-Signature=54d41360947ac6d5aad74be1dd30c1a394d09a88db88c473bacf8de30cab7178&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOCNH3EH%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T061348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQCuyvt7SwkxmSDMCXk695RJi0Rh0wP%2BG0KouLbq1k35BAIhAOEXUarUzFI1aZbKfeJ2tLA9dL7VyBQ6%2BGnkhzQYcjYUKv8DCFMQABoMNjM3NDIzMTgzODA1IgzHk0Ff8sjSG0Rs3kMq3AOCCKAYWcyeHmzaOLV141bQVhkWJ%2FyRytjl7j5M3bWXgEOQ%2FvZneIc7gcXs6pO9wROtjcXJpDxrDeg0bU3EYIUzboriCLBVBmJB%2FHeK4V%2B5D9e6Uly9hcgXgDDVo5KR1h%2Bxmf06aHjKAbqQuIHr9h9Qpob%2BZsMcw3R8MbOn%2BQx1er52m42TajHRvvaZw2w5LRRmjWEIAzaN5%2FeDmwUouf%2FZ4NmGaVNj4BIb5pWK8C2NISGu9HRwZ9%2B0Q8rTZ31udA5z844kG5VOn1cAkw67L23%2B28frTPOyarlqmmElbG6zSjTxOErOs4jbh7q6aD1kGWrowwHFMGo3uGYLXQo%2B58kcijee3TNEhdTLkj5jdY1OYNTQEgr7dtJyOjgPeGzem%2B3Xu3w%2BTox8jjgrgOFQYIPECTkzimXtRa3qXfPuapBaVo41s7kCqIVacjCgGLlumJDYW8r8W5TVT54tbpM8Oq6TZCXbTFbELOmanBuVBcVXeHikvCrBDqcDPArwavl7Q3abrOZo3fsBjvmTwVrOW6Xxce7D5PcvwpdOVRaw4e%2FsaJ%2F67XgYErKpX1cgIByHF4e8ErxHl7STvKfmBZKd4pOTpA%2B7vjfqNIw%2BPRLOXeuUGGiknMJQ%2BUriYsSCbjDGo%2FrEBjqkAdxDHCT4e63knCzEcA4%2BbGdWiBvnU%2BTTCtFAAAQdiLIHM%2Fg%2Bl1wb09AJBEdoWSbmcCQmmD3aB2AkvI%2FH78G%2FzC9p4NEQRkheiEvQkr2rKLAz7LZY8MXkcFSYRL7hDKgDnSdhmjCHp3Xg2q4WJjHf86StAWGLwVPiErOl2jLpsZPVnypCoCGyyJpVf6RqZf2eBTPWCu%2BPF7BhMZXY%2F99ta3P%2BbeN1&X-Amz-Signature=dedb037ce4aedcfa5248c0ff3b4dce567f7118ec1ea067d22a484338ac893bcf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
