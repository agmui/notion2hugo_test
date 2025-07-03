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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVWNSBWD%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T061345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIQDlyJWyYHzHt1IjVTde3UvjTPWhfjQKhheXM7kj01ELEAIgTcZzBzeC8Jyi%2FUdEuHMpNm%2Fzhi5plhtyhhTJKO5mJOMqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMnAE%2FLXEzsoGf0hXSrcA0QYTlSdttmcWDcQdTNPX5OsvrwlKaDfkSNCND7Z4GLya%2BxqkHeF1VSx96%2FolWg1GvWnRdybzrSCW7VHhJ%2B8DAAARStP6rLKFBnwMGqlq93R7xCFyxdPp50ygen1cdY%2BVb%2FlPnxPhgvHc3b3kmlaPpS%2BiW%2FS%2FQAGIhiOlNXC2oOilToypYppD50WtLkbJPFrJRS3RY2SfTHU06zNfVw%2FGGG7y5EPJpbJkRrlLcbtxg9l2DWfoMvFYORp43nfn%2BEb4LOeotuNtri4nJ4aCJ8juk7Rwcr7UGZpp%2BPaC0%2FTFXx%2BBvj15Ynk7mYh1%2FI0BpP41iKuKrJyv8ZybPn5OABBi3tMyojFP%2FCa0AuDyi4KVs1L6bzuccYU5EZtneGo9wSzkxlTd5k4EuqTUjydbna4%2BmegFYABVjkkuClYV1dNblBcJnucuy0f5jw0eQ0cX0fih47rh8nuZo7MT44kd%2FUk2iN5TILbS2Evy70h0yzK4s1COi6Fdfowf8cmwET5aLCIltjUDPobBJCia%2F3j4VdsOTlr7MHDxmOo44r7FTdWIBvTo1tg1Ni6d%2BA3isbTs0WdGPPCZa2XfCnhVXWI4hYHx1EcJi4A2Io5QeI%2BC2ur8DdbewFDyk6AQWFqAOWkMNGvmMMGOqUBLecqPwlRKN3fLT46oC%2BVRA%2BhSFZV2Asq5ZzM%2Fs%2FSuysXSP76liBWsNrvSTzdWuLECGzgny9GmQZgOGM63iXgmljYIWg0kbU7f8fHlBCJBZF922Epa5KzNVUubVfcB1E0TTof1KxIY6w%2FnbkP6yjQF6PaEkb0tYgxR6xXaycAL0E7XhEpFviVNK1geReD18BEkgxQBGjGKGy%2BsvvH376ZlDnULZTS&X-Amz-Signature=2e3fe0c3dafdeb7488a8d92f4b67a672a487cbe6b44ff86a45484ffb8c32f6c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVWNSBWD%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T061345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIQDlyJWyYHzHt1IjVTde3UvjTPWhfjQKhheXM7kj01ELEAIgTcZzBzeC8Jyi%2FUdEuHMpNm%2Fzhi5plhtyhhTJKO5mJOMqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMnAE%2FLXEzsoGf0hXSrcA0QYTlSdttmcWDcQdTNPX5OsvrwlKaDfkSNCND7Z4GLya%2BxqkHeF1VSx96%2FolWg1GvWnRdybzrSCW7VHhJ%2B8DAAARStP6rLKFBnwMGqlq93R7xCFyxdPp50ygen1cdY%2BVb%2FlPnxPhgvHc3b3kmlaPpS%2BiW%2FS%2FQAGIhiOlNXC2oOilToypYppD50WtLkbJPFrJRS3RY2SfTHU06zNfVw%2FGGG7y5EPJpbJkRrlLcbtxg9l2DWfoMvFYORp43nfn%2BEb4LOeotuNtri4nJ4aCJ8juk7Rwcr7UGZpp%2BPaC0%2FTFXx%2BBvj15Ynk7mYh1%2FI0BpP41iKuKrJyv8ZybPn5OABBi3tMyojFP%2FCa0AuDyi4KVs1L6bzuccYU5EZtneGo9wSzkxlTd5k4EuqTUjydbna4%2BmegFYABVjkkuClYV1dNblBcJnucuy0f5jw0eQ0cX0fih47rh8nuZo7MT44kd%2FUk2iN5TILbS2Evy70h0yzK4s1COi6Fdfowf8cmwET5aLCIltjUDPobBJCia%2F3j4VdsOTlr7MHDxmOo44r7FTdWIBvTo1tg1Ni6d%2BA3isbTs0WdGPPCZa2XfCnhVXWI4hYHx1EcJi4A2Io5QeI%2BC2ur8DdbewFDyk6AQWFqAOWkMNGvmMMGOqUBLecqPwlRKN3fLT46oC%2BVRA%2BhSFZV2Asq5ZzM%2Fs%2FSuysXSP76liBWsNrvSTzdWuLECGzgny9GmQZgOGM63iXgmljYIWg0kbU7f8fHlBCJBZF922Epa5KzNVUubVfcB1E0TTof1KxIY6w%2FnbkP6yjQF6PaEkb0tYgxR6xXaycAL0E7XhEpFviVNK1geReD18BEkgxQBGjGKGy%2BsvvH376ZlDnULZTS&X-Amz-Signature=25b15ce05499d8322d8913c1ffb747ebfe6696a47c0450a0cdf8d071cbd62c94&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
