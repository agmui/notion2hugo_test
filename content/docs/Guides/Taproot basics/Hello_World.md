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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YP3ISF5C%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T050755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCICpUzqsF%2FAdcqyuloFXiILCcqqMLRXeI7l70yAPy9WcxAiEA7XIXmhOuj%2BrgnABqwhAfHG8CmIp%2BTxnTEsY5gkNBxqAq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDG28SrUmdSNtCZP6dSrcA7ekd4bh3DvUK7XvBwiw924es1sclT3A9hiPBBRqZfAAq1xcD%2Bzs25p0uUtJJvZ3p15MkR4Ub41goRZU6SnQ1M3GIGDZyXaTJaU8b91Qnzwqtm3cwiXQUZEFSvSv8VdTGnQN0IuvVidooP4vxuImH4ZIAcZLAqcu7oeOmlcl%2BcAprMqvsoW8IvDMZTxm83JS4QAQXYj%2FWFmtdAFcB6hGwSaubjbyxe64ggr3NDl7HlSdTRQF4btzkn0YKasXxqVlnUL9uyvYtisvSizi44%2F3vO3j0PotUe5uc6FF9Wz7yhg6aBFdygTLHvflQG%2BwyxaFU5sKbOcj5opO%2B9rW5zZDe1E0UoczG4FdOazlYd8J6DhYU4rxk9tjZ4NsQe%2FEPXVpA%2F0ulZrcGgyGk56HwQVd39ewD%2BTB4b7MNnvozPE4YCpsV4DIdS6X81zh%2Bgm86W94tDCAK66uEx%2BiXz2808u%2Fxsv%2FQUiI0pQzrfjW%2FYagrOQaqbFaOqOC4RltEev5%2FDBy80ARb4kEC%2FB%2ByoQhkPomQS8cZVMFfzgDMebt4MD5fJARltLBtqucWF3QYrAg1rmOfErIEC%2B%2ByUsAhzzaWRdRx7daf68USWRZi9isypglAXpupm4UNtsjlHPtbGIJMLnAhr0GOqUB1FSoq4JxvHQV2lxN2cy9yJjg6jf4REP83BeHbuzATyKbjIH%2FczPIrf9nyqZwST%2FS5NjbrJwnwQehq9Bx%2FtNLWHghUV5Y6uwY%2F5kfdGeqCSXNzGeYmRnfeEuBI%2BHQO%2FNd%2Bf%2FY%2FvphasfaR9RD%2BFsesaDNz5GL8EFkIlPT6RFFfeotzukZeG%2BvJg5LFDdJgllv6xg%2F0KerQgovfBYI5vW7EpOEXqw7&X-Amz-Signature=ee8139c0d7e8f7fe449fe4176f01153ffdafbb7ec890271f2a91fdb855c0ffbd&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YP3ISF5C%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T050755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCICpUzqsF%2FAdcqyuloFXiILCcqqMLRXeI7l70yAPy9WcxAiEA7XIXmhOuj%2BrgnABqwhAfHG8CmIp%2BTxnTEsY5gkNBxqAq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDG28SrUmdSNtCZP6dSrcA7ekd4bh3DvUK7XvBwiw924es1sclT3A9hiPBBRqZfAAq1xcD%2Bzs25p0uUtJJvZ3p15MkR4Ub41goRZU6SnQ1M3GIGDZyXaTJaU8b91Qnzwqtm3cwiXQUZEFSvSv8VdTGnQN0IuvVidooP4vxuImH4ZIAcZLAqcu7oeOmlcl%2BcAprMqvsoW8IvDMZTxm83JS4QAQXYj%2FWFmtdAFcB6hGwSaubjbyxe64ggr3NDl7HlSdTRQF4btzkn0YKasXxqVlnUL9uyvYtisvSizi44%2F3vO3j0PotUe5uc6FF9Wz7yhg6aBFdygTLHvflQG%2BwyxaFU5sKbOcj5opO%2B9rW5zZDe1E0UoczG4FdOazlYd8J6DhYU4rxk9tjZ4NsQe%2FEPXVpA%2F0ulZrcGgyGk56HwQVd39ewD%2BTB4b7MNnvozPE4YCpsV4DIdS6X81zh%2Bgm86W94tDCAK66uEx%2BiXz2808u%2Fxsv%2FQUiI0pQzrfjW%2FYagrOQaqbFaOqOC4RltEev5%2FDBy80ARb4kEC%2FB%2ByoQhkPomQS8cZVMFfzgDMebt4MD5fJARltLBtqucWF3QYrAg1rmOfErIEC%2B%2ByUsAhzzaWRdRx7daf68USWRZi9isypglAXpupm4UNtsjlHPtbGIJMLnAhr0GOqUB1FSoq4JxvHQV2lxN2cy9yJjg6jf4REP83BeHbuzATyKbjIH%2FczPIrf9nyqZwST%2FS5NjbrJwnwQehq9Bx%2FtNLWHghUV5Y6uwY%2F5kfdGeqCSXNzGeYmRnfeEuBI%2BHQO%2FNd%2Bf%2FY%2FvphasfaR9RD%2BFsesaDNz5GL8EFkIlPT6RFFfeotzukZeG%2BvJg5LFDdJgllv6xg%2F0KerQgovfBYI5vW7EpOEXqw7&X-Amz-Signature=f6bada84121c1601542d049c1ca2a11111ea1d375a7834d49be0dba2e3d2b207&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
