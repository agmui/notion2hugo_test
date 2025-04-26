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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZU5QZ4IB%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T121257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJlyj3UQcn1UzF58JH5hlU3OB1DuMJZodCeN8%2BdREy2gIhAJSjZNfJbGwP2ol5EiE3dDtEO67q7pR%2BSZl8H4UwnD6pKv8DCEAQABoMNjM3NDIzMTgzODA1IgwKqQHoCdZO%2BcrUHcwq3ANH4aWumVHGwLWAfrxVnxRv0RqhXrTfXJLLFdspdU1h0LU%2BDgFDWgMeSmXW7VmKS4QzcEBsaCLsoXP9fusOPa8FGkDbqC9VHEwzUI33k%2BkwCsKUZODvPs2w7nlQcOAgyywGiN4lKYsXz%2BYfBLBKFCHxCyx68f0oIvB91wI16QJliBh4xBXm2FGrOpzsFKIqP%2F5gx77mNkyn7A5TnjrwQiWjGOe%2F%2BUnqIyA4KD4%2B%2Bxu%2F4Rr5ONMxUeY74Bfhz8%2Fpx7OLpurhxOEmdIUAy78G6YqDdsh4ZRPPnv8D9T%2FPu4pr%2BROCO9te9bFNwP%2FYl1WXU70DvSJHBezK%2BLGQ2g%2FCUp14wuAckgkzBwkvSDKBDG4Fh9Us6IwVsDJ0azYz%2BTfnZHl2Lz34lvhLyJlu%2BIkkgcYaUcvqNenUK7km4XdyfRdrdIuOXeGq1QTo3Xgex%2Bn76y3BLvQNC%2FH5k3EaFKCaX2%2BJDjDxTETSiDZlw%2B8WlPmIoQOOQkt9r0c75s5sx7GHANCNlMfkJj2sd6rbywJZNrSSJoRvtmdVEz3PPUVKIh781rNImk8gsqON4wVZN1psuyCPc4%2F58rFtbp0z8K2o8NXkUGhhzcwsvjcTgMvDaphx%2FDB4lzXpXvyJSHSDVTCKhLLABjqkAeBu%2FMhQUQfvUQ%2FPjM%2FqW2S9Tfb7C%2BkY1Ri33giS1tIQ6Y%2BAM0WpTm9xiA3oHAwwMo5b%2FF9rfuuU0SkD9K8nfWRswfyPTvF%2FjnfP3ATAy6Xs0eVfMlbGTbwKObGdXPzw1u4i%2F7BTdASqSx7UJXzyYZqk9N%2FFiE2iuOR3OD9ZR0zyQfwgV93ATfzKULnJ8uOhy58ihoPluEK0ygATUTmCgH%2FxBhXl&X-Amz-Signature=cec5fdd1f50101c44a5ddf0a2f27c7b9cf629c7c758af83510ad94f00a693205&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZU5QZ4IB%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T121257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJlyj3UQcn1UzF58JH5hlU3OB1DuMJZodCeN8%2BdREy2gIhAJSjZNfJbGwP2ol5EiE3dDtEO67q7pR%2BSZl8H4UwnD6pKv8DCEAQABoMNjM3NDIzMTgzODA1IgwKqQHoCdZO%2BcrUHcwq3ANH4aWumVHGwLWAfrxVnxRv0RqhXrTfXJLLFdspdU1h0LU%2BDgFDWgMeSmXW7VmKS4QzcEBsaCLsoXP9fusOPa8FGkDbqC9VHEwzUI33k%2BkwCsKUZODvPs2w7nlQcOAgyywGiN4lKYsXz%2BYfBLBKFCHxCyx68f0oIvB91wI16QJliBh4xBXm2FGrOpzsFKIqP%2F5gx77mNkyn7A5TnjrwQiWjGOe%2F%2BUnqIyA4KD4%2B%2Bxu%2F4Rr5ONMxUeY74Bfhz8%2Fpx7OLpurhxOEmdIUAy78G6YqDdsh4ZRPPnv8D9T%2FPu4pr%2BROCO9te9bFNwP%2FYl1WXU70DvSJHBezK%2BLGQ2g%2FCUp14wuAckgkzBwkvSDKBDG4Fh9Us6IwVsDJ0azYz%2BTfnZHl2Lz34lvhLyJlu%2BIkkgcYaUcvqNenUK7km4XdyfRdrdIuOXeGq1QTo3Xgex%2Bn76y3BLvQNC%2FH5k3EaFKCaX2%2BJDjDxTETSiDZlw%2B8WlPmIoQOOQkt9r0c75s5sx7GHANCNlMfkJj2sd6rbywJZNrSSJoRvtmdVEz3PPUVKIh781rNImk8gsqON4wVZN1psuyCPc4%2F58rFtbp0z8K2o8NXkUGhhzcwsvjcTgMvDaphx%2FDB4lzXpXvyJSHSDVTCKhLLABjqkAeBu%2FMhQUQfvUQ%2FPjM%2FqW2S9Tfb7C%2BkY1Ri33giS1tIQ6Y%2BAM0WpTm9xiA3oHAwwMo5b%2FF9rfuuU0SkD9K8nfWRswfyPTvF%2FjnfP3ATAy6Xs0eVfMlbGTbwKObGdXPzw1u4i%2F7BTdASqSx7UJXzyYZqk9N%2FFiE2iuOR3OD9ZR0zyQfwgV93ATfzKULnJ8uOhy58ihoPluEK0ygATUTmCgH%2FxBhXl&X-Amz-Signature=eb1e32e8023bad90eec76a13c792f523e9b5710bf7c08e1108ee068ad325cb08&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
