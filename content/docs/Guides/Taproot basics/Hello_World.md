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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHKOLWBH%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T051231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJGMEQCIDnKeoxsRgsHR7AvsVKFdvWxhEJgfQ%2F86ZNiiKzrks1wAiACGw5NTVykCidDMd1volzfjo7rScq2KsbHtp0woX1jJir%2FAwgmEAAaDDYzNzQyMzE4MzgwNSIMgXXq4XzTrabxPylUKtwDYo8bWEStMj2EjCCpZGYfGUBzetjzYY%2BdlcOpx4DqJAGJJWok1tfU60fvsQEEpSBosfUHXQNF%2Bku%2B4samhxt751uLoLjzUsz8EUVwnYWnQHqAzw39xxrwQYBkz528Z%2B5IClGoMbmzBisTz4cXH8xQ7%2B5sfx4AI4ddlLqS4V12RqFlkuPfFZ8ma7Jp5evuZQvN1nZhAniiuuC5FUxagFbyfwqrALNi5I1nsgvNvRYW8rucJe6SDi8Zyo7dCRHK%2BZnCqamVS1NcNETXFzd0I6Rc910KRHHXeZuAQdH7lvPspT3NldyJFra2WfyO1itZ5ap2qmtOJq%2Bg4ShELcMUVQoPfa1w6pNv5AudC0DOA7s6g7eQRCCJr4uCzpEiJHjGNBSg4cxSil8LBTlt0dVSwkQZ3ThAEBpmrXKiANYXHjlONUu2Q3u5RhPtDQaDrFBELDjXLh5gYCclcbeDv4aCg9pXqIMp%2Bl909IKNiyYdUmp5LTlFbgI6iuEb%2BrMowtpOHII28BCNCMkRpQIn2aRlfqh7qTs%2FbVPuAvOOcPF5nDPyG04bqYKof3r%2Byw9U4iXW7ovROkkLLOJFxgTZ3MFzQDSYeMtTC0uE%2F%2FqE1JwdEkKAoAGUkxGFYtPUS0BLtlAwjLadwwY6pgEzuEYZOkV%2FpK4Qxchg6HCw%2BtXf4ZJI9X%2BT%2FjF56ymH7nBL3pDB5qoOJ7UKdfFKYnFrPSGyQDVjHwrWFkAXNglWBSzu%2FEfbGsJHPWtEsDkrmDF%2FBAYdWv%2BUAkK6Gs0PQoShjXMnTpEUJYuS7khMm0uEo%2Fk%2FaqxPAbf9PRnNyImIoRpFwF3VxSW7M9L8Ctu%2BTa55JLxKazN5F12PzAEhRXM%2BFlDvvXoq&X-Amz-Signature=fed887f3ae0c14f7d6df39eabfb2096b199ce5899ff5697cadd70610b194b432&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHKOLWBH%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T051231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJGMEQCIDnKeoxsRgsHR7AvsVKFdvWxhEJgfQ%2F86ZNiiKzrks1wAiACGw5NTVykCidDMd1volzfjo7rScq2KsbHtp0woX1jJir%2FAwgmEAAaDDYzNzQyMzE4MzgwNSIMgXXq4XzTrabxPylUKtwDYo8bWEStMj2EjCCpZGYfGUBzetjzYY%2BdlcOpx4DqJAGJJWok1tfU60fvsQEEpSBosfUHXQNF%2Bku%2B4samhxt751uLoLjzUsz8EUVwnYWnQHqAzw39xxrwQYBkz528Z%2B5IClGoMbmzBisTz4cXH8xQ7%2B5sfx4AI4ddlLqS4V12RqFlkuPfFZ8ma7Jp5evuZQvN1nZhAniiuuC5FUxagFbyfwqrALNi5I1nsgvNvRYW8rucJe6SDi8Zyo7dCRHK%2BZnCqamVS1NcNETXFzd0I6Rc910KRHHXeZuAQdH7lvPspT3NldyJFra2WfyO1itZ5ap2qmtOJq%2Bg4ShELcMUVQoPfa1w6pNv5AudC0DOA7s6g7eQRCCJr4uCzpEiJHjGNBSg4cxSil8LBTlt0dVSwkQZ3ThAEBpmrXKiANYXHjlONUu2Q3u5RhPtDQaDrFBELDjXLh5gYCclcbeDv4aCg9pXqIMp%2Bl909IKNiyYdUmp5LTlFbgI6iuEb%2BrMowtpOHII28BCNCMkRpQIn2aRlfqh7qTs%2FbVPuAvOOcPF5nDPyG04bqYKof3r%2Byw9U4iXW7ovROkkLLOJFxgTZ3MFzQDSYeMtTC0uE%2F%2FqE1JwdEkKAoAGUkxGFYtPUS0BLtlAwjLadwwY6pgEzuEYZOkV%2FpK4Qxchg6HCw%2BtXf4ZJI9X%2BT%2FjF56ymH7nBL3pDB5qoOJ7UKdfFKYnFrPSGyQDVjHwrWFkAXNglWBSzu%2FEfbGsJHPWtEsDkrmDF%2FBAYdWv%2BUAkK6Gs0PQoShjXMnTpEUJYuS7khMm0uEo%2Fk%2FaqxPAbf9PRnNyImIoRpFwF3VxSW7M9L8Ctu%2BTa55JLxKazN5F12PzAEhRXM%2BFlDvvXoq&X-Amz-Signature=93c1c9ad0afc9b1aba6aebc7824026dc0d4ed36b7d1135f9951dc65debef59aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
