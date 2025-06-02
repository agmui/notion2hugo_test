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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTWM4FRJ%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T161116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJIMEYCIQDDgLGdEjIcT4%2BO5XGTQLsNqhUU9FBRWflb2oAiJHQbpAIhAKQ1WbhLTxTiCMcpJMye3CBdLvsr2TxZolIvMp6VZ1FRKogECPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxKLaquWcnHzR%2FJhCkq3APh3fZTDLFgRxUapCyD9N%2FsheKWkjVNStcdfZCXePfvg0grLnQi8MS588Vbrof2bJLKb7cI%2BttzbL2B9rHJiPmbZql7bC%2FqiZB1Qnio%2FsXOWSlnEvF3Ttsxit8f5zBCB5Wab3BLAp2gp2oX3dVrZi5QQ%2BDX6FMShq%2Fv%2F8Q6ExnheC%2BIS35WYaUFhxkGa4kElofnwJITJ9jAsf7cwSRBABTSy5WYvw%2F0uQ%2Fq0ex%2FLZ1IIOH954JhdiRsLZHQFQSGDKexdhbSZ%2BXNqkwo9ccEu5dfZdFdTxPe0l0rNiHGtewFergaqNhrCSuJZkZFl3ptddw7Bn6MUny%2BrYV06bwgG4%2BkwH85acGksnezCwPwLQp5u48GobETOmV%2F2GjvHHmke0lkELBm4olJ9Syb8V2uXvtTOjrdkL1uSsq3HLZC7%2FDdOQPmlc6ufn2V2b43Dzy9%2FZTlmyGJmslD2rfGBtBm1MQglEH%2F%2BFYcubqy24gMAg%2B57rMhp3JmLjszFXSY%2B6WWV8F29qfng0H83D7banNjODzJvj5HCrYXjVYOavn8RyfIi3jp%2BCCXHYrDdwWOhiG656r1wtIRowFCCb7nbjPMG0oDMlIiXVdSQLG09eBhE2v%2F9rTb7O%2F73AtiFxstVzCI%2FvbBBjqkAUzV5%2Bw8cg0ImFzLbafg1RkBKsrrO4bUTFjJD2pEOuCgbq0nfbjZdg1LjpOdeIw%2Fg9pV1uDRL4uM%2FPcNMXSNOczqGxA%2BJDPA8TvDfn7Q0hCJBJohnzz8c4I%2FGivGIAhnnDrcEswnLmNeYb4UCR3SkLHf22z6329TKHq2x7ZT%2B0PSA%2BoXNX7MEYR8RAPjKlF2HcbDnahCRqiPBqJCwJTf2efgSgHN&X-Amz-Signature=9ac997953ab4d4f945b4d58f96d500b47c1d8c467c376f91e6acf94d932fd4e8&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTWM4FRJ%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T161116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJIMEYCIQDDgLGdEjIcT4%2BO5XGTQLsNqhUU9FBRWflb2oAiJHQbpAIhAKQ1WbhLTxTiCMcpJMye3CBdLvsr2TxZolIvMp6VZ1FRKogECPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxKLaquWcnHzR%2FJhCkq3APh3fZTDLFgRxUapCyD9N%2FsheKWkjVNStcdfZCXePfvg0grLnQi8MS588Vbrof2bJLKb7cI%2BttzbL2B9rHJiPmbZql7bC%2FqiZB1Qnio%2FsXOWSlnEvF3Ttsxit8f5zBCB5Wab3BLAp2gp2oX3dVrZi5QQ%2BDX6FMShq%2Fv%2F8Q6ExnheC%2BIS35WYaUFhxkGa4kElofnwJITJ9jAsf7cwSRBABTSy5WYvw%2F0uQ%2Fq0ex%2FLZ1IIOH954JhdiRsLZHQFQSGDKexdhbSZ%2BXNqkwo9ccEu5dfZdFdTxPe0l0rNiHGtewFergaqNhrCSuJZkZFl3ptddw7Bn6MUny%2BrYV06bwgG4%2BkwH85acGksnezCwPwLQp5u48GobETOmV%2F2GjvHHmke0lkELBm4olJ9Syb8V2uXvtTOjrdkL1uSsq3HLZC7%2FDdOQPmlc6ufn2V2b43Dzy9%2FZTlmyGJmslD2rfGBtBm1MQglEH%2F%2BFYcubqy24gMAg%2B57rMhp3JmLjszFXSY%2B6WWV8F29qfng0H83D7banNjODzJvj5HCrYXjVYOavn8RyfIi3jp%2BCCXHYrDdwWOhiG656r1wtIRowFCCb7nbjPMG0oDMlIiXVdSQLG09eBhE2v%2F9rTb7O%2F73AtiFxstVzCI%2FvbBBjqkAUzV5%2Bw8cg0ImFzLbafg1RkBKsrrO4bUTFjJD2pEOuCgbq0nfbjZdg1LjpOdeIw%2Fg9pV1uDRL4uM%2FPcNMXSNOczqGxA%2BJDPA8TvDfn7Q0hCJBJohnzz8c4I%2FGivGIAhnnDrcEswnLmNeYb4UCR3SkLHf22z6329TKHq2x7ZT%2B0PSA%2BoXNX7MEYR8RAPjKlF2HcbDnahCRqiPBqJCwJTf2efgSgHN&X-Amz-Signature=83b795adde84953d6b6e986d4a8cc7699ac8c3179a933753c62aa882c7aa286c&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
