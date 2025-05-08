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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V53PHJRL%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T121522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE858b0irV%2BOwo9048iH8FNhDqPgVXn6Li1a%2BY%2FuPLqUAiAk41MKCw5qs%2BCPD2%2B7fU3RS6B3VUHeHrx8yNfvXDPLhSr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIM9PbeG%2Bctrqljh%2FLCKtwDXN5icaEjBbsTHGFPwdKUDIKVYPjCFoV3Yj%2BdRYI6ujik5nuXQfZrm8EghhE32%2FnFTFUWJQMtSd5Wu9apXpIoUVEp0HwvM0Nrx06xI9o1LKdtIfCVW3HkgXKQhUKk3%2F0XYwvO8st%2BYTG94rUhW4EftavEOdHwkbCG8vBElojC2j%2FBvtDNzeWapsBfiWrtc6ZEP19YFR%2FqprO1ca5CV32k776slVw0s28c3YdsElpzrsNZFuGrTbJqmV0BMGdjhjNXH5v2tARL24F6tL6%2FHCH%2FZeIBfhx2rHeIGxFw3Dbnhdb4Whc0XYxirX8NNXhJIe7gEU4zcY2Ov8U%2FBc%2B%2BinGT7ih2dkZ4jw2zq%2Bdg%2FWInTynNWe5S5%2F088YBjXwQMN3cSpSUu3bEPKU6BJEIh%2B8MB6JFXuuEZnI1umow9TzzIzveAS8bP018MR17nsmEWBZFEjg1qJbmlpAthU8e8XgR965QWGLjTKSnjRnybFhZ5a8VtbDj%2Bji9cR2wE2Nv9VDnzFuIKLQS7CuMHfp6mti1Nkr4Mc9wYikx32jn6wZLVpDXxpBJ%2FTI76YUeoqu%2FYl3BzwPab%2FsO6yCmi%2B1%2BA4l%2FgK5fi3Z6Otv8gSUUXj%2FG%2BUQzYhfMV%2BTTzpCDnsbEw9rDywAY6pgGOrQGhn2J4iAC5dTA7IZKKsfKdhGGyScAZNBPCpbDhD5yEqvpACjrpPCxlwXyXAeSdtBk9LcUKhOUjHyIfpjWoI1xOdf%2F%2FtHeblgSdEsLsogksZ7Vb0egH58mybSP%2BWLoK11Imdi91OtS86UMpOOI%2F1qRQfRL8s%2Bk9rQs9MV4ReiCjlj12etAieaKO4CgpbXP1V2itJXvXo%2Fxnl8j8cUkXA9Rbbriw&X-Amz-Signature=da9e13bd8c754f82ca51196ed8e87ef693024bd6dec9c62917c38dc6a1656391&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V53PHJRL%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T121522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE858b0irV%2BOwo9048iH8FNhDqPgVXn6Li1a%2BY%2FuPLqUAiAk41MKCw5qs%2BCPD2%2B7fU3RS6B3VUHeHrx8yNfvXDPLhSr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIM9PbeG%2Bctrqljh%2FLCKtwDXN5icaEjBbsTHGFPwdKUDIKVYPjCFoV3Yj%2BdRYI6ujik5nuXQfZrm8EghhE32%2FnFTFUWJQMtSd5Wu9apXpIoUVEp0HwvM0Nrx06xI9o1LKdtIfCVW3HkgXKQhUKk3%2F0XYwvO8st%2BYTG94rUhW4EftavEOdHwkbCG8vBElojC2j%2FBvtDNzeWapsBfiWrtc6ZEP19YFR%2FqprO1ca5CV32k776slVw0s28c3YdsElpzrsNZFuGrTbJqmV0BMGdjhjNXH5v2tARL24F6tL6%2FHCH%2FZeIBfhx2rHeIGxFw3Dbnhdb4Whc0XYxirX8NNXhJIe7gEU4zcY2Ov8U%2FBc%2B%2BinGT7ih2dkZ4jw2zq%2Bdg%2FWInTynNWe5S5%2F088YBjXwQMN3cSpSUu3bEPKU6BJEIh%2B8MB6JFXuuEZnI1umow9TzzIzveAS8bP018MR17nsmEWBZFEjg1qJbmlpAthU8e8XgR965QWGLjTKSnjRnybFhZ5a8VtbDj%2Bji9cR2wE2Nv9VDnzFuIKLQS7CuMHfp6mti1Nkr4Mc9wYikx32jn6wZLVpDXxpBJ%2FTI76YUeoqu%2FYl3BzwPab%2FsO6yCmi%2B1%2BA4l%2FgK5fi3Z6Otv8gSUUXj%2FG%2BUQzYhfMV%2BTTzpCDnsbEw9rDywAY6pgGOrQGhn2J4iAC5dTA7IZKKsfKdhGGyScAZNBPCpbDhD5yEqvpACjrpPCxlwXyXAeSdtBk9LcUKhOUjHyIfpjWoI1xOdf%2F%2FtHeblgSdEsLsogksZ7Vb0egH58mybSP%2BWLoK11Imdi91OtS86UMpOOI%2F1qRQfRL8s%2Bk9rQs9MV4ReiCjlj12etAieaKO4CgpbXP1V2itJXvXo%2Fxnl8j8cUkXA9Rbbriw&X-Amz-Signature=a7a20c3f648be10fc939c70b55722621fab490bd3fb19d5ba9c3ddea8393e068&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
