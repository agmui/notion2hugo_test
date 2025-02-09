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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TELKMV4N%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T180843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDt9g%2Ff5m0ZJQnLgG3uyWUYEhIjLfDe6%2BfFu%2Fe9dYAxKwIhANfV2n5vA6jHLV%2B1MD3AneVguHW0%2Bc%2BzmgzqWEGwJbCjKogECKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxir75irDo6XCYds8cq3AMLY5xvQaYK4XN%2BFvVpSex7nDcl%2BrwmRjp4bSzf5jc6AwvKOI02yBCM3lCfzxwtNdPLIjxMEE4z7T39SvuuiNvb8nDD4u%2FSNRyD%2BvrT0C0eYqJ2GiRmtjhDHscQapggpLXeTlP1BoDsf5I714BYS%2F6jZBSDDMSRi9TLJmZxFz%2FnDYWwJuhYMKnwfXq7O9T1VO6H5IfCBqREj%2FhUGpY%2Bd0IUFv94qntd0GVzapD5%2FRW5U9jxLir%2BVUUBzoqPDLFb%2FycMKub26V5rC8sP5WFoJSh4D0t50eKFQvtBJuy19Qdde18L8D57ynX7s%2F4b6t4PzdolgJoUqH%2FwFlAmdc56fZZKURcCBD7S5K5uY34S9w%2FhA0xqJZW%2BGkr4riX%2FcaE9h02zul0tzxAW1aonN9yun6xd82pwh6R7Tui5LjBpV%2Byc6UfdfBpO%2FoibCRbwiGd5ygUct6kvrJ3eqqlFSBMVOKBe2Nv0vCLRXMFAbhzx5CTLBGIXy69fuq0UFTkzZEZVViuum%2BusZX06Ls3q6Ypvf28s9J4xWGbaapMZX3uEJ8jZLzhuTKj57X8IPOU3Lp%2FfnpHIySV3JxgbaOz8zDOZkMwjTT%2FjhZh1BbTUmGIQv%2FVrRXwgg6J%2Bzzjvv%2FwFDjDihKO9BjqkAaAQS1TA73oKgS76jQIbx7LFCX4nf%2F%2B863NfqMlNWo5Nyw6lGzmUVSFvpL4z%2FLCX%2BFe8zBiPJHFm5VmQSH7AyGFInin40SDUWeWtbsN%2B1y6H9ZLOcbvYyy5FWCXmqD9HTk9LOeRYx6%2FwZQuyHMQsSFZE1LyQmUn2yV%2FOg82qDMfK8kGVLQGudnIctT40TaqQ8ZmdR1iB%2BU7u75PCvW%2B6BGsRve5p&X-Amz-Signature=5b11e41be79f2c4cff4926e4d3c0bfa02100270fce012cdb41d16c312b6224d7&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TELKMV4N%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T180843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDt9g%2Ff5m0ZJQnLgG3uyWUYEhIjLfDe6%2BfFu%2Fe9dYAxKwIhANfV2n5vA6jHLV%2B1MD3AneVguHW0%2Bc%2BzmgzqWEGwJbCjKogECKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxir75irDo6XCYds8cq3AMLY5xvQaYK4XN%2BFvVpSex7nDcl%2BrwmRjp4bSzf5jc6AwvKOI02yBCM3lCfzxwtNdPLIjxMEE4z7T39SvuuiNvb8nDD4u%2FSNRyD%2BvrT0C0eYqJ2GiRmtjhDHscQapggpLXeTlP1BoDsf5I714BYS%2F6jZBSDDMSRi9TLJmZxFz%2FnDYWwJuhYMKnwfXq7O9T1VO6H5IfCBqREj%2FhUGpY%2Bd0IUFv94qntd0GVzapD5%2FRW5U9jxLir%2BVUUBzoqPDLFb%2FycMKub26V5rC8sP5WFoJSh4D0t50eKFQvtBJuy19Qdde18L8D57ynX7s%2F4b6t4PzdolgJoUqH%2FwFlAmdc56fZZKURcCBD7S5K5uY34S9w%2FhA0xqJZW%2BGkr4riX%2FcaE9h02zul0tzxAW1aonN9yun6xd82pwh6R7Tui5LjBpV%2Byc6UfdfBpO%2FoibCRbwiGd5ygUct6kvrJ3eqqlFSBMVOKBe2Nv0vCLRXMFAbhzx5CTLBGIXy69fuq0UFTkzZEZVViuum%2BusZX06Ls3q6Ypvf28s9J4xWGbaapMZX3uEJ8jZLzhuTKj57X8IPOU3Lp%2FfnpHIySV3JxgbaOz8zDOZkMwjTT%2FjhZh1BbTUmGIQv%2FVrRXwgg6J%2Bzzjvv%2FwFDjDihKO9BjqkAaAQS1TA73oKgS76jQIbx7LFCX4nf%2F%2B863NfqMlNWo5Nyw6lGzmUVSFvpL4z%2FLCX%2BFe8zBiPJHFm5VmQSH7AyGFInin40SDUWeWtbsN%2B1y6H9ZLOcbvYyy5FWCXmqD9HTk9LOeRYx6%2FwZQuyHMQsSFZE1LyQmUn2yV%2FOg82qDMfK8kGVLQGudnIctT40TaqQ8ZmdR1iB%2BU7u75PCvW%2B6BGsRve5p&X-Amz-Signature=5b617e2fef961ba3902564c4e85295e0e4fb4364261dedde22b27b6b958813ad&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
