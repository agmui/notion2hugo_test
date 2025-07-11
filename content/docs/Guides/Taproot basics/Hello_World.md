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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUKRG2FA%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T091047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA668jdyZln0g6qgwPMTXnnTDMyTkfHs5GDeOfvmxuuyAiB%2B0VCOLfBwBDasxNDIBwDKkhoAiDJVs6X4d5gKUh5htyqIBAjS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7ftAiRZVu%2BLohnjiKtwDRzUGYom%2FYq16ZcjMmCAiH6Kt1tkCb%2Fk4ON2sdv%2BFZIXmhNw%2F576wWSiXW8wKYjOCAr4BiwMXEe2MXvXtOIyfN2qf09X2yks5M7ipk1DFLQG9BIXJ2l%2BAL5E%2BPCNTP%2BJlNxuuVpvV6FUmUAhBxG1zbbNEandZnxVspu8rEwLUyIPvgZqGvuA8yIjCQnuDK08YlKZyaZIgt6MAIACbu7H%2B9WaK8Nf4OpzMD%2FBO7yYqF16GA0yyp6pxaA4epTfZm4bJ936J9pKare30Jnlv0%2Bqz%2BuwuyeWk0vs4WWmgkCphSvF43mUcTW%2FOwdHbYoWl%2BoewJ46v9SNI%2FtvNWMXHGzkM%2Bpz%2BcIl1rcxOmuizc8oipn%2F9adv36rZ3GWSDIMQDjgU7hrb2k7nfy4gLFyfGWu1KOWR%2BLzuVeRZRyTJVw8YZsvsJqpTo%2BR79nwudYICj5PK0Y1j9%2BHPA1D%2BDSaoCNX7lSrFVVpcepY9rSlSKaRKcmlvin42wUtZhKydDHZ%2BgZXZMeMVer%2FPtFgB1tiywuIXIkhyVxXVrOGPlHhhZ%2FpZOhJe7mWBxkz3WWVmccXXDahbNHnmaYSwJesZmKK%2BPpJ3YpCkYza3%2B6pn0AYYBzLS34KUsACljKxSJXQHugOQwtajDwwY6pgGDpemd1MunFCF0aYqYcmS7YuLSIpG0%2B3FR0oxyA7vy7ryKuZruRxoq2U58dujcV653nJe%2Fj628q7vgyE8OM4jprITfn%2Bdrgh60uMDgTuiFhwVtptxso4EbWVDKYe0bEijiHWdtX%2B9ob37vNR5G8HFVVUjDntM8yTbTIpGUQWrdFuIZeI3xfFG%2Bm6QyMoqBP924Dbms9rIyDEHZTmR0IST9ywTMgQgv&X-Amz-Signature=314d27e8932e06b913abeb2aa5f9b38b5c4c8e44bba7cab6871c85883f6796ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUKRG2FA%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T091047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA668jdyZln0g6qgwPMTXnnTDMyTkfHs5GDeOfvmxuuyAiB%2B0VCOLfBwBDasxNDIBwDKkhoAiDJVs6X4d5gKUh5htyqIBAjS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7ftAiRZVu%2BLohnjiKtwDRzUGYom%2FYq16ZcjMmCAiH6Kt1tkCb%2Fk4ON2sdv%2BFZIXmhNw%2F576wWSiXW8wKYjOCAr4BiwMXEe2MXvXtOIyfN2qf09X2yks5M7ipk1DFLQG9BIXJ2l%2BAL5E%2BPCNTP%2BJlNxuuVpvV6FUmUAhBxG1zbbNEandZnxVspu8rEwLUyIPvgZqGvuA8yIjCQnuDK08YlKZyaZIgt6MAIACbu7H%2B9WaK8Nf4OpzMD%2FBO7yYqF16GA0yyp6pxaA4epTfZm4bJ936J9pKare30Jnlv0%2Bqz%2BuwuyeWk0vs4WWmgkCphSvF43mUcTW%2FOwdHbYoWl%2BoewJ46v9SNI%2FtvNWMXHGzkM%2Bpz%2BcIl1rcxOmuizc8oipn%2F9adv36rZ3GWSDIMQDjgU7hrb2k7nfy4gLFyfGWu1KOWR%2BLzuVeRZRyTJVw8YZsvsJqpTo%2BR79nwudYICj5PK0Y1j9%2BHPA1D%2BDSaoCNX7lSrFVVpcepY9rSlSKaRKcmlvin42wUtZhKydDHZ%2BgZXZMeMVer%2FPtFgB1tiywuIXIkhyVxXVrOGPlHhhZ%2FpZOhJe7mWBxkz3WWVmccXXDahbNHnmaYSwJesZmKK%2BPpJ3YpCkYza3%2B6pn0AYYBzLS34KUsACljKxSJXQHugOQwtajDwwY6pgGDpemd1MunFCF0aYqYcmS7YuLSIpG0%2B3FR0oxyA7vy7ryKuZruRxoq2U58dujcV653nJe%2Fj628q7vgyE8OM4jprITfn%2Bdrgh60uMDgTuiFhwVtptxso4EbWVDKYe0bEijiHWdtX%2B9ob37vNR5G8HFVVUjDntM8yTbTIpGUQWrdFuIZeI3xfFG%2Bm6QyMoqBP924Dbms9rIyDEHZTmR0IST9ywTMgQgv&X-Amz-Signature=3e04df782e05ff80d1803b149ca498b8925d433e8eb775ef009a224f52dd8e00&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
