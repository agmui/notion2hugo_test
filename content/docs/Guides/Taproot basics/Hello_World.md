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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TINFTFG3%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T161022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDIeObJKY%2FqY%2FRhoJLLOK0esYIe%2Fi4DD5VzqaU8xTAfcwIgdsBbNTi3kVEQt1cjWrGTnOxgH3rXjOwh8fGutExHaygq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDLtTZkgW436Nfor3mCrcA8Lhw5dvKcnjcI3LbwN6%2FfoIauAZyKza9SqJRZqUJh7JUFSCODt7KINlKTYw8SSyfrxcXuPNyUJLpL%2BA287RsZhzdPBWAqPK3Bvg2QUv0VHELGSZiZg1Zc%2FkNPP2GH7r0pWCGk%2Fnh0N69s4Tp5UebTqyQYqXWPa%2F8qGMKNaycgkIjZp70sIbnlU35Xe0Mwmjbp%2FNAyE4iWqTjtwPq6RzNicA8gamronf%2Fh8ZxngDDW8BmlNCD4MQD2K9S1Snb5IRmbjK8ahmzYX4FggAliE6JuuOVaResueGgArJGXApg9AnGEcNLPdFrezpS48KneePXu4p6wFJ9fKU1vJhKSHvkUmz92JO%2BPkKcxO%2FVB0xRvQtihkMRRg9%2BHiv0UOMjjlo%2BJ%2FfNVgUgG%2B9jy0wXjgFkKQPpdd4fjE67YnNfiVBepsRd6gciUMp5LDX4R%2FwFCuFbYqklRV1FD4V%2B3alJ1Fa9n3JqC7kp4NMeQZkjL4x3eehwelg7L6s2aIVr8f4HRDuRBwQRv%2Bh63cGw6etURzgtTlnSNZp5XFF4l9hhQYs9SJdmyf3XagPPlnzg7aozcFdWcqAVdO4k9CuMDGX6nfstZFEokTHXMcB60Z4Fx9r10Eba2pTt1q5hRx%2BovJ1MMvm6MAGOqUBimn4x%2BfUCwbIYTUhkNSZRQ94tOp%2FvWqQhk5Wcb0PtiuP%2FQ8RY5g97ysF062KkIl0xmZGX1UTQ7X6sxc8EycVmy4%2Fab3Yd4QH%2B81si6xwQ8YzV2gbD5FDtKvrdiwe1m2Vu9w0vtKvzAgA5TPwSm18Q%2BUDE7dF0qUhzeyNiTs4UTMHx%2FRGTzS%2FNPDGb6CO%2BnTpc2yPQxDuetyeLZQbRVohQHy0%2BHPH&X-Amz-Signature=d8e7cb5c9eb14d6e48cd6e83f62f42666e12b6b825f258153c54cf7d8a443466&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TINFTFG3%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T161022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDIeObJKY%2FqY%2FRhoJLLOK0esYIe%2Fi4DD5VzqaU8xTAfcwIgdsBbNTi3kVEQt1cjWrGTnOxgH3rXjOwh8fGutExHaygq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDLtTZkgW436Nfor3mCrcA8Lhw5dvKcnjcI3LbwN6%2FfoIauAZyKza9SqJRZqUJh7JUFSCODt7KINlKTYw8SSyfrxcXuPNyUJLpL%2BA287RsZhzdPBWAqPK3Bvg2QUv0VHELGSZiZg1Zc%2FkNPP2GH7r0pWCGk%2Fnh0N69s4Tp5UebTqyQYqXWPa%2F8qGMKNaycgkIjZp70sIbnlU35Xe0Mwmjbp%2FNAyE4iWqTjtwPq6RzNicA8gamronf%2Fh8ZxngDDW8BmlNCD4MQD2K9S1Snb5IRmbjK8ahmzYX4FggAliE6JuuOVaResueGgArJGXApg9AnGEcNLPdFrezpS48KneePXu4p6wFJ9fKU1vJhKSHvkUmz92JO%2BPkKcxO%2FVB0xRvQtihkMRRg9%2BHiv0UOMjjlo%2BJ%2FfNVgUgG%2B9jy0wXjgFkKQPpdd4fjE67YnNfiVBepsRd6gciUMp5LDX4R%2FwFCuFbYqklRV1FD4V%2B3alJ1Fa9n3JqC7kp4NMeQZkjL4x3eehwelg7L6s2aIVr8f4HRDuRBwQRv%2Bh63cGw6etURzgtTlnSNZp5XFF4l9hhQYs9SJdmyf3XagPPlnzg7aozcFdWcqAVdO4k9CuMDGX6nfstZFEokTHXMcB60Z4Fx9r10Eba2pTt1q5hRx%2BovJ1MMvm6MAGOqUBimn4x%2BfUCwbIYTUhkNSZRQ94tOp%2FvWqQhk5Wcb0PtiuP%2FQ8RY5g97ysF062KkIl0xmZGX1UTQ7X6sxc8EycVmy4%2Fab3Yd4QH%2B81si6xwQ8YzV2gbD5FDtKvrdiwe1m2Vu9w0vtKvzAgA5TPwSm18Q%2BUDE7dF0qUhzeyNiTs4UTMHx%2FRGTzS%2FNPDGb6CO%2BnTpc2yPQxDuetyeLZQbRVohQHy0%2BHPH&X-Amz-Signature=ce1627fed1d3e0e4d86d9cf19a4fd338384274523aad2982a66a38b05424ccf5&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
