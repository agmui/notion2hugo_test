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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EVEHPEC%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T181037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHkYQSxK73C9gSr1JqqJb2FG3tgE7c%2FWH35TzRcg4p15AiAig945s66fd1snvkzSpudrMZ1xDXRyfX8XQYOjA%2FMtuCqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMB16hamE3gTi9lEMaKtwDEGtVDxb8Mmwuz0ppbYlqhTGnLNvNjPfmRbkRwCPVOskBQYbhVptikOKjwMRRXvBexivlAYXcoS56ANfYb7ivqyN%2FDsyunkLX0k0EPwtorVsq8%2FTvaH09F12XHzWl70qcBMF4A0Rpm4yMEXtwHHG8cbXQrtzBYYVurw3ertxRUBOrvfJOFL76fOATEjZXJfS5fJ3SnBHPKfTJ3Mvi%2B2qiAmzC9J6RAquYCcZCaXECNPFX8jq2uis8OQ68r5jYMV%2BpJ0M8OP0VEnk1xSO8rB7e0HhevOh3TTEGApwXoT9DfGh2PyWagnw%2BX9DhlQHtFLuPzgzHnqn3ca1eLBURTZxaS5DoLnglm9pcUqtkWAs1WlgJUlA6vD4L6J0KoM3TL%2FnmrErbO7%2BVo%2Fe%2FkspFTbGBsFJ114Z2ykPcYobyZ3M7aNcC%2BDUwIyySJzYrJIRUwgi%2BQ3mqq9nPUnm2uJ9l21X3v64AHf1NKxKPE5vk9%2BJzJA0U8NPdsVbu%2BtrVkA3ouZ7uYGvvtS9lqDW1s0nHJJ9SHA5bF1z0ocNekd7d6%2FbG3X5roTBvIm71BlNneeWPV3zJ9hqUDa8wKtxe3AToXOWrgb9t%2FT69jaok%2Bgmhz1uaF2plLeS1B8H%2B1LZdT5Iw9vqFwwY6pgGYktDAvh3THSj3MzWr9m5NQcwzI1%2FPFmGbL9XDXElCX68cSendiJcQfGNWYLdaMkSpSD6dDH2LjJJPkdunh5fz%2BOHPX4JhxpHdd1hDHVksSD3Zk8%2BP1nvayH%2FKGq09LRIdGx%2FRRZjJI264YZqnnN2CHV62%2FMzCJtXbDClWH3ozKlOcaT6bC3LFZUlqBaV644geWfDMhNxxSR9ccf7nWhlRFk4LDfFU&X-Amz-Signature=72e81cc8292a5cd61a7a5e8ec889125ad45652ad2a9ae80aaadb8d8099794782&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EVEHPEC%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T181037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHkYQSxK73C9gSr1JqqJb2FG3tgE7c%2FWH35TzRcg4p15AiAig945s66fd1snvkzSpudrMZ1xDXRyfX8XQYOjA%2FMtuCqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMB16hamE3gTi9lEMaKtwDEGtVDxb8Mmwuz0ppbYlqhTGnLNvNjPfmRbkRwCPVOskBQYbhVptikOKjwMRRXvBexivlAYXcoS56ANfYb7ivqyN%2FDsyunkLX0k0EPwtorVsq8%2FTvaH09F12XHzWl70qcBMF4A0Rpm4yMEXtwHHG8cbXQrtzBYYVurw3ertxRUBOrvfJOFL76fOATEjZXJfS5fJ3SnBHPKfTJ3Mvi%2B2qiAmzC9J6RAquYCcZCaXECNPFX8jq2uis8OQ68r5jYMV%2BpJ0M8OP0VEnk1xSO8rB7e0HhevOh3TTEGApwXoT9DfGh2PyWagnw%2BX9DhlQHtFLuPzgzHnqn3ca1eLBURTZxaS5DoLnglm9pcUqtkWAs1WlgJUlA6vD4L6J0KoM3TL%2FnmrErbO7%2BVo%2Fe%2FkspFTbGBsFJ114Z2ykPcYobyZ3M7aNcC%2BDUwIyySJzYrJIRUwgi%2BQ3mqq9nPUnm2uJ9l21X3v64AHf1NKxKPE5vk9%2BJzJA0U8NPdsVbu%2BtrVkA3ouZ7uYGvvtS9lqDW1s0nHJJ9SHA5bF1z0ocNekd7d6%2FbG3X5roTBvIm71BlNneeWPV3zJ9hqUDa8wKtxe3AToXOWrgb9t%2FT69jaok%2Bgmhz1uaF2plLeS1B8H%2B1LZdT5Iw9vqFwwY6pgGYktDAvh3THSj3MzWr9m5NQcwzI1%2FPFmGbL9XDXElCX68cSendiJcQfGNWYLdaMkSpSD6dDH2LjJJPkdunh5fz%2BOHPX4JhxpHdd1hDHVksSD3Zk8%2BP1nvayH%2FKGq09LRIdGx%2FRRZjJI264YZqnnN2CHV62%2FMzCJtXbDClWH3ozKlOcaT6bC3LFZUlqBaV644geWfDMhNxxSR9ccf7nWhlRFk4LDfFU&X-Amz-Signature=5c81c6a81e465978476be7286a6340669d93c81d24adf0c4322f6178c0ea82e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
