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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFJCX6RS%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T140910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEIpAPvCzEeWHIawnHmgZ9ilb5NHxqO%2BDm6zSOHpd5cVAiA372SQddzycTih8IOVjPmpW7EvM26FTIqzjS%2Fso8gxHiqIBAjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIUZO6kHeGneMVHWyKtwDVpV6DHJ%2F4yiqUVz1ZKUWj2lwSoKpUd64Zl1l4BIwrpYV%2FI1BS%2FI1Hh6Tjj7FI9XwBkQuVQtxbQHYBboW6hyeacsXdnKdqpbizaYWmfVE04uo0sgHig2sntRgqq%2BKBoKfani9v4Xv5ORXjsUczDTJIulp8BFWEFUP4WyM8M%2FPpNw3QHTKEBwh%2BZn4UV%2Bn3UcQi1o%2FdfY48hBIo3PI%2F5kGXfazOAIktjUFHpEgqd5Vd0Rav%2BRF8nKX6%2BmL1FU7Zal92D4%2BlwNlEiMPieSwKgPxJpryuPxeJiXu95hk8i8tp3K1KG0ySz1FYDF6kGbtVjvv7PAi5YmoVLKG83iPEGsV1ni9KrED7dtvVAWtg%2Ft4f8HWQv5odqtjt3r1IwEradOcdG0gwlzbfs7ks7Cw0VCt1IxeQoAcHreJWW3ErFQp1WJjuz%2F9cvV%2FtQIZdzTfqdYAawj1dbxJ69JMTCtAqz8mMFFk%2FjipG2T6uZcE01vlop4e86xBNbG9zI4faZ9uWR0zgmcO6iMKbMisukOBf34c7t2USMfJBZZh3d5PBAzuwazMfvGaeirSSJZ49HMtxxVz%2F%2B2zjzv%2B5xhrtmssjGgC3KEYC3aH%2FLP9dBrzgImFIh2%2BWJvpVK8qd5zmOrcwy%2BaUwwY6pgEe5Z3cu6zMP7ApJ8aeZFH5KTaNWMukmJDBnFWHo%2FLrz98IS5dR%2FxAXmExTT9LyJJrizOhlMNI8mkm53uYqVA80B%2FhjXw%2BPw8DCBtHPA7gSacYWEhXrXZQ4BwdkdzOrdBNpwABZByU2x81pIF1jWWJ7j8p9LQexSmUOcpvQoXofwTtGQks%2BmL2wJ4OmHFOjaMk0BKYBeq9MJNu%2F%2Fe%2FHpAnH4Nr0iqBg&X-Amz-Signature=101725a111752d4a6a65a4c5d23791e0110b2dfece67a8823feee03513141422&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFJCX6RS%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T140910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEIpAPvCzEeWHIawnHmgZ9ilb5NHxqO%2BDm6zSOHpd5cVAiA372SQddzycTih8IOVjPmpW7EvM26FTIqzjS%2Fso8gxHiqIBAjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIUZO6kHeGneMVHWyKtwDVpV6DHJ%2F4yiqUVz1ZKUWj2lwSoKpUd64Zl1l4BIwrpYV%2FI1BS%2FI1Hh6Tjj7FI9XwBkQuVQtxbQHYBboW6hyeacsXdnKdqpbizaYWmfVE04uo0sgHig2sntRgqq%2BKBoKfani9v4Xv5ORXjsUczDTJIulp8BFWEFUP4WyM8M%2FPpNw3QHTKEBwh%2BZn4UV%2Bn3UcQi1o%2FdfY48hBIo3PI%2F5kGXfazOAIktjUFHpEgqd5Vd0Rav%2BRF8nKX6%2BmL1FU7Zal92D4%2BlwNlEiMPieSwKgPxJpryuPxeJiXu95hk8i8tp3K1KG0ySz1FYDF6kGbtVjvv7PAi5YmoVLKG83iPEGsV1ni9KrED7dtvVAWtg%2Ft4f8HWQv5odqtjt3r1IwEradOcdG0gwlzbfs7ks7Cw0VCt1IxeQoAcHreJWW3ErFQp1WJjuz%2F9cvV%2FtQIZdzTfqdYAawj1dbxJ69JMTCtAqz8mMFFk%2FjipG2T6uZcE01vlop4e86xBNbG9zI4faZ9uWR0zgmcO6iMKbMisukOBf34c7t2USMfJBZZh3d5PBAzuwazMfvGaeirSSJZ49HMtxxVz%2F%2B2zjzv%2B5xhrtmssjGgC3KEYC3aH%2FLP9dBrzgImFIh2%2BWJvpVK8qd5zmOrcwy%2BaUwwY6pgEe5Z3cu6zMP7ApJ8aeZFH5KTaNWMukmJDBnFWHo%2FLrz98IS5dR%2FxAXmExTT9LyJJrizOhlMNI8mkm53uYqVA80B%2FhjXw%2BPw8DCBtHPA7gSacYWEhXrXZQ4BwdkdzOrdBNpwABZByU2x81pIF1jWWJ7j8p9LQexSmUOcpvQoXofwTtGQks%2BmL2wJ4OmHFOjaMk0BKYBeq9MJNu%2F%2Fe%2FHpAnH4Nr0iqBg&X-Amz-Signature=c2b9ce716421afceb688ab0d9c532eec57441c10293aad43834ca928d2d16ed3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
