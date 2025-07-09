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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYGAP6AM%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T181224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDrrBWlN2jnZJPkrFf4bRv0lGzcoRbv9g4jdGIF264hZAiBy9JT%2Fzc3mfljrLYgdlkMcngLDyyCwRsMTiSzWNX%2BmDiqIBAiq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQ7DUK1VAX1OjYJnFKtwDItFlW3nw7%2Ba0fkR4yeiE4Bh0XoNC5brJYvrAcF61fVjqziWhbs0%2BBQao4aU1tZ30%2FcaA7Ypr0L9fG%2BugOLkTlQ9oTKZwcdpMBb61eKPTIzYzoHNyhH5OYo5u8b7NzEOGB8SSQIv13s%2BiaxjXMQQEtwGT2ti%2BH%2BIUomJa9vV7%2FBZbJ%2F8UMCjj%2Fp052ld6iD6jWN28LPbdRKzEKxUjJIwRxQgWGaTraqykQy2L%2BAcmzC%2BJ1XLNFI90T4i%2BBAm0BmS0hVDn1%2BNQQLhbRyZag866dq2wodLaWaR75tOr75zqCm9CbskEZohFEPLB%2BFxtN0hAv1eV7%2FA18kk3Tk9EGTK4yMLsp6%2BsWy5Bf3HpAedlnd6NjpYKsOckAllVIXAEZWnCO2l%2BSD6KimnMv%2F6VIPJkWemnSh0ZKFHWSrw5xFRU%2Fn5GarqPdEmdcfla09YvQMIW9rC%2B%2Fe9Os4%2F0DWBRBgd%2F87l%2Bj38aNnELlU401pE2grqDpayue1hg9lCETUeq5DHtV3uSGjanXFrEC2Jm7znuVhsvYd9FsJb%2F1wZ%2FFNDjWNHP8pjlexv8L6vkV5ZGhZcN0AURff%2FXJxzOb6fvpbEYy6%2Bfd6F6aAIpHwLPVGbMxvXa%2BO7mt%2BLrC8iSzCwwxsW6wwY6pgGgPBo6TcXbw2f0XiE7NnuxkOMQlbwwi1FNlxkrHcjp90eG4bUl1YldCtJr9easPAfTsHe3uu3CygHjVSRoAnwuzFWbgYuZvfjyZuL8IvvQTQaWGQM2bhxiznt4d2Ylj3uCaG2D1d1a14%2BeDKwqtYWClFB1%2Fl2i892ykGX3tPUBwEG7YST1k0qS1M1Fx4alU06qo%2FQJ5YWeKSoBgyuGHjTkq2csDyiT&X-Amz-Signature=a6b9f86921a7db58027acc83a5339b4147c7a0e3b754f035d566be0e340f9c4f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYGAP6AM%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T181224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDrrBWlN2jnZJPkrFf4bRv0lGzcoRbv9g4jdGIF264hZAiBy9JT%2Fzc3mfljrLYgdlkMcngLDyyCwRsMTiSzWNX%2BmDiqIBAiq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQ7DUK1VAX1OjYJnFKtwDItFlW3nw7%2Ba0fkR4yeiE4Bh0XoNC5brJYvrAcF61fVjqziWhbs0%2BBQao4aU1tZ30%2FcaA7Ypr0L9fG%2BugOLkTlQ9oTKZwcdpMBb61eKPTIzYzoHNyhH5OYo5u8b7NzEOGB8SSQIv13s%2BiaxjXMQQEtwGT2ti%2BH%2BIUomJa9vV7%2FBZbJ%2F8UMCjj%2Fp052ld6iD6jWN28LPbdRKzEKxUjJIwRxQgWGaTraqykQy2L%2BAcmzC%2BJ1XLNFI90T4i%2BBAm0BmS0hVDn1%2BNQQLhbRyZag866dq2wodLaWaR75tOr75zqCm9CbskEZohFEPLB%2BFxtN0hAv1eV7%2FA18kk3Tk9EGTK4yMLsp6%2BsWy5Bf3HpAedlnd6NjpYKsOckAllVIXAEZWnCO2l%2BSD6KimnMv%2F6VIPJkWemnSh0ZKFHWSrw5xFRU%2Fn5GarqPdEmdcfla09YvQMIW9rC%2B%2Fe9Os4%2F0DWBRBgd%2F87l%2Bj38aNnELlU401pE2grqDpayue1hg9lCETUeq5DHtV3uSGjanXFrEC2Jm7znuVhsvYd9FsJb%2F1wZ%2FFNDjWNHP8pjlexv8L6vkV5ZGhZcN0AURff%2FXJxzOb6fvpbEYy6%2Bfd6F6aAIpHwLPVGbMxvXa%2BO7mt%2BLrC8iSzCwwxsW6wwY6pgGgPBo6TcXbw2f0XiE7NnuxkOMQlbwwi1FNlxkrHcjp90eG4bUl1YldCtJr9easPAfTsHe3uu3CygHjVSRoAnwuzFWbgYuZvfjyZuL8IvvQTQaWGQM2bhxiznt4d2Ylj3uCaG2D1d1a14%2BeDKwqtYWClFB1%2Fl2i892ykGX3tPUBwEG7YST1k0qS1M1Fx4alU06qo%2FQJ5YWeKSoBgyuGHjTkq2csDyiT&X-Amz-Signature=ae14702c0166dd71cbfa2559bfff8eacc0047f4e939fe3cb7ececb2f1a36e77f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
