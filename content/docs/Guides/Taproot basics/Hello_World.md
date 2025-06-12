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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPNA3NJM%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T140905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJGMEQCIHiIJ54dYNo%2Bj4WuzwoFA7mrjhsGh14G%2FA8ez4CJQtPpAiAfMzvCxBUK6yLjs2Qs2V9OzbKJemC%2B3zxMwf12WGn%2BPCqIBAjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrtTOlIFcSA0Vw2AwKtwDUtN%2FXSqiN875YKg4GY01IMhEYri199xU5Reko%2BLcvpuY5o%2FK5fSjSMXCCpsfGNJWDKVw%2BrkJTL9%2BK2qdmxzHj3%2BT%2FnGlxIoc4kJuLNqxY96x5vPIAIrRawDaPI%2BkGQN3qVN7icMYy3ralFus1b%2BbJVIX2F0ojQI29H%2FGwNdYzUcocwizD75lTpXuxFOwAzF70eXIOmNx5YtTdNDuNSpmLBOCJxoRLwHbIZQNx5pWvnz7xpOzGAgOly9vJOHeTx%2Bcnl0sETmLA3%2B9zzxuM7WTNi5UeUAdjvislXXyCGbAtHIcbjBxPqh4EfLuqJ9%2BCf8Pm4LQElN1ym5jg0p9tE6ntrBdrTe3DEjQyzNDEX9sqIigvbST0pLXuj9HcoKqsdGL%2Fd5MZ6PMySzHDmsbndomhJWnn24Qh2KYgvgSf8W05dZHtgbjn8jseFrsZjlR15oW5l9ri7gd6XE7Oa%2F8CKn%2B%2BhbEdlCZi60Zn6Jg26NnEJFDxvAqBZaaZhiqAvkX1rdXNNQZZ1C8KbMSW%2F8%2BwWpffDS7tdI1e4JUry5SBz%2FjEMT1qQBwPX%2FlDVfZRt4z9X0SfZI4wXj3f3S4n8GqGtmnZDj2btp6o7xTgddhWAnelfPVVlTSc7ZpHBApokAw%2FqyrwgY6pgGvluX94y51D9ET6iYM4zKBzCY2oQX0dPzfwt3S4PbcX0nMjGTbRjOT1ebdUEbYBy2fybYzz4q7rXu8A3EP5oq9orAXpcqdZpDc8rWOPBwVKujzk2P8n2FAunwzxBLDRsgx%2FIBR4xGWBSPLMOetu18Bln5YNQDzwcxXYmN5hF%2BnBYyWEX7Oe4CFrY%2BL8hbbQ1huDnHdQpKu6sfoVPskBRHGpdGriP1u&X-Amz-Signature=fe024eb54392d5ff685166b381ce555553ca2ab415da339311cc900a59298b48&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPNA3NJM%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T140905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJGMEQCIHiIJ54dYNo%2Bj4WuzwoFA7mrjhsGh14G%2FA8ez4CJQtPpAiAfMzvCxBUK6yLjs2Qs2V9OzbKJemC%2B3zxMwf12WGn%2BPCqIBAjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrtTOlIFcSA0Vw2AwKtwDUtN%2FXSqiN875YKg4GY01IMhEYri199xU5Reko%2BLcvpuY5o%2FK5fSjSMXCCpsfGNJWDKVw%2BrkJTL9%2BK2qdmxzHj3%2BT%2FnGlxIoc4kJuLNqxY96x5vPIAIrRawDaPI%2BkGQN3qVN7icMYy3ralFus1b%2BbJVIX2F0ojQI29H%2FGwNdYzUcocwizD75lTpXuxFOwAzF70eXIOmNx5YtTdNDuNSpmLBOCJxoRLwHbIZQNx5pWvnz7xpOzGAgOly9vJOHeTx%2Bcnl0sETmLA3%2B9zzxuM7WTNi5UeUAdjvislXXyCGbAtHIcbjBxPqh4EfLuqJ9%2BCf8Pm4LQElN1ym5jg0p9tE6ntrBdrTe3DEjQyzNDEX9sqIigvbST0pLXuj9HcoKqsdGL%2Fd5MZ6PMySzHDmsbndomhJWnn24Qh2KYgvgSf8W05dZHtgbjn8jseFrsZjlR15oW5l9ri7gd6XE7Oa%2F8CKn%2B%2BhbEdlCZi60Zn6Jg26NnEJFDxvAqBZaaZhiqAvkX1rdXNNQZZ1C8KbMSW%2F8%2BwWpffDS7tdI1e4JUry5SBz%2FjEMT1qQBwPX%2FlDVfZRt4z9X0SfZI4wXj3f3S4n8GqGtmnZDj2btp6o7xTgddhWAnelfPVVlTSc7ZpHBApokAw%2FqyrwgY6pgGvluX94y51D9ET6iYM4zKBzCY2oQX0dPzfwt3S4PbcX0nMjGTbRjOT1ebdUEbYBy2fybYzz4q7rXu8A3EP5oq9orAXpcqdZpDc8rWOPBwVKujzk2P8n2FAunwzxBLDRsgx%2FIBR4xGWBSPLMOetu18Bln5YNQDzwcxXYmN5hF%2BnBYyWEX7Oe4CFrY%2BL8hbbQ1huDnHdQpKu6sfoVPskBRHGpdGriP1u&X-Amz-Signature=c9f2e8d9321420536bff39971f7fbb7aabe71502423ee679db87aca82f53bc3e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
