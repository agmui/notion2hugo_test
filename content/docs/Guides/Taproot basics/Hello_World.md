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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYN3CMZA%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T150650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIQCaiMuxJiwtR1lxulo8hxf4jV4t2zKrlN9OIGhBu5wsJAIgGFn%2BKHq%2FD3QeTsPcKBhE%2BbTo52DOtCMZ1ouXNTbhqrcqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNOc33gXQ9%2B8y19IJircA9TYpS2YSZfqIn4SM%2Fzm3v1xwY5vDXeIqdEWxQXmisiX6BYcDyjyR%2BwXFsLAL6GctpkCg4ar8Ptj0A65yRjoslYoAoHO53PzTgX8FQNBmaWb%2BsX4ccfzEaafh3%2BGgfX981vA9i1a70CM8UFdmevxTM0XW09W%2FC%2ByjIptbzKcss3Vwp%2B0k5SnSeSby4sd5te%2BzsDVvt6qaccwmcXvShczJ5If0a1XN%2FUG6tbNupplXqpLUT6mObLhQZxpt4g%2FGRoSnvONLFPFi%2BxD2%2B4FcSY%2F8%2BnBoqnlPpaqJllFadnQD%2FT0IPGrjVR9Sk%2FZOzgut9NombmAf4y6zmvJSyml7Sq9cslP90dkInqEn1m7Y%2B5gzby5d%2F%2BTaQ3460PE1UCaaUiKPLy5nVPznh%2BbaNK8F2JBhkBnBD%2Fvug1c%2FYZONqntdk8Q0t1WiY%2Flow8Q2bR1oTx3pQdSPwUeyXEL1IergZAIuY5AHfAryduez1Ohl%2BPfLGxVIcYmv8oCg9fCuFqgR%2BLtTYF0IBHxddIl%2FNNfMQnWyNtAEbqWuhHz4DqlcXhNLfp9ckxbbvOf9MhcEqfkZp8f%2B9Xg7ycGkAuAoA%2FqnotB61oaL87D8VWSmNqbO645ZA%2BPyeG%2BnV18TJ2wIhq7MN7Ak8AGOqUB0F2Cki2sYh19fMxu0i%2BRGMl%2BE6dSV%2F%2BNji1%2FwNHeZ1qYiKDPkRS73rTGyj40N4nfUA%2BiRQZsoounsvoQ3IC6NBaFUqdxKqwqycgOEK1xZnRGf5Kpa51kIRoCBe%2BBEY1R%2Fj6k1rZIOsfDbYK4yWnv7ZxgFyHMpv5XgGp4OcTg66ufxBY6VHjJJMr0Ba6BVkpNY7%2FzW4xfujQgDcBUAVm9UhHW%2BY1k&X-Amz-Signature=1f66ebb3ac532d4e204867349945728a5acf302208fd58b1fc749da2be74170d&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYN3CMZA%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T150650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIQCaiMuxJiwtR1lxulo8hxf4jV4t2zKrlN9OIGhBu5wsJAIgGFn%2BKHq%2FD3QeTsPcKBhE%2BbTo52DOtCMZ1ouXNTbhqrcqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNOc33gXQ9%2B8y19IJircA9TYpS2YSZfqIn4SM%2Fzm3v1xwY5vDXeIqdEWxQXmisiX6BYcDyjyR%2BwXFsLAL6GctpkCg4ar8Ptj0A65yRjoslYoAoHO53PzTgX8FQNBmaWb%2BsX4ccfzEaafh3%2BGgfX981vA9i1a70CM8UFdmevxTM0XW09W%2FC%2ByjIptbzKcss3Vwp%2B0k5SnSeSby4sd5te%2BzsDVvt6qaccwmcXvShczJ5If0a1XN%2FUG6tbNupplXqpLUT6mObLhQZxpt4g%2FGRoSnvONLFPFi%2BxD2%2B4FcSY%2F8%2BnBoqnlPpaqJllFadnQD%2FT0IPGrjVR9Sk%2FZOzgut9NombmAf4y6zmvJSyml7Sq9cslP90dkInqEn1m7Y%2B5gzby5d%2F%2BTaQ3460PE1UCaaUiKPLy5nVPznh%2BbaNK8F2JBhkBnBD%2Fvug1c%2FYZONqntdk8Q0t1WiY%2Flow8Q2bR1oTx3pQdSPwUeyXEL1IergZAIuY5AHfAryduez1Ohl%2BPfLGxVIcYmv8oCg9fCuFqgR%2BLtTYF0IBHxddIl%2FNNfMQnWyNtAEbqWuhHz4DqlcXhNLfp9ckxbbvOf9MhcEqfkZp8f%2B9Xg7ycGkAuAoA%2FqnotB61oaL87D8VWSmNqbO645ZA%2BPyeG%2BnV18TJ2wIhq7MN7Ak8AGOqUB0F2Cki2sYh19fMxu0i%2BRGMl%2BE6dSV%2F%2BNji1%2FwNHeZ1qYiKDPkRS73rTGyj40N4nfUA%2BiRQZsoounsvoQ3IC6NBaFUqdxKqwqycgOEK1xZnRGf5Kpa51kIRoCBe%2BBEY1R%2Fj6k1rZIOsfDbYK4yWnv7ZxgFyHMpv5XgGp4OcTg66ufxBY6VHjJJMr0Ba6BVkpNY7%2FzW4xfujQgDcBUAVm9UhHW%2BY1k&X-Amz-Signature=9d5e805f3865beae4c674f7b627cbf0730f4b6070150d8e07e50cb4ae2eac22f&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
