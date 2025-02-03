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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URBIPHAI%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T090853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD8bCjCB38wjNeOFm%2BEnnrHrP84%2FM1M3jtT4Sdt7fpeGAIhAIEJ7Xf1hrL196m4cN2abpg3tu6b%2Bt0NIhdFvN5mU6Y5Kv8DCBEQABoMNjM3NDIzMTgzODA1IgzsDdUdnUhBjyFvsOgq3AMuVl7Z1xKdSnx%2Frkrcrsck6elPSWqxUkn482j2D5mVoVH2SULPFUVGopI07deAqc2sCfMddOsj2Ri0m3fMFgvZPYt0ma58Is%2FqKJxcQpPBtK2SRlVsB6j4fYxwkC7ZsbKuLs559EhRpQ7UlmLOJN02OtYyerTnCKExMXZCqMDObSvE8%2BVpr599RZNJ9mEG6anCyLusYdSomsoy2apIkxuuXczwZxLsjonxYcHh3Ul0M1smj8taJAsnv9ACJLHYjgBXYKt%2Fv%2FcIeRPxkMqpKklZ2NrqqEqcv3K5XroshBXO7zpH5S47XJpzuvkWZUe8L0D4pIC7RXOBYzFCjmhd0lF%2FECwtLeQxlQWhTwk192BcUfRxBc6iXsdoy2IzPOT8ZO%2FE%2BIkdp52ycuwNMXpu%2B7X4pgvYd3%2Fc5bo%2Fk0uPRNYoWDq2fV1qwig7Sw3lso%2B%2FxZN4L9VwRx1pPQH7uLdd7WHHE7h%2BY3WJqc0KmrF2SK3IYPuuY7yNiEZ9oqusc7q164wLjGyaCwWQzVvQxU2RvijhX%2BqJsz3VeC4NA4Khh8vXIg%2BtbFcJvTot5XLOBJaipbW3wWqo0gEymoY%2FPE96KvxBVA3RjVNQ1FFs%2BmqQyTptAsu9IgiiB4w40wq2%2FjCs9IG9BjqkAR4xAagHmS2%2Bx4bHLKyD%2B2cwvq8KxyYix2kNjCqxI1FTpcOg0I8mjLUl66ay1MG08V3j4iixZ%2FYOAAq%2F2RsRVqtplnVqLIohs2MeHpRnu9%2FRTeuY5gblJvCyYtNU3221Hsdm7hyskFtUsqu%2B6NfrGAZOEX%2B8YxzLdmy%2F2kJd3Pn%2BqmJVzwTpAmgYl9XUeseQGcXqM2ZSOYe%2B3yT8x1ZT3El60ty1&X-Amz-Signature=f1b8eaf79e24ba83003664a853de6575474252f374a3dd55f2cd2a1d79a667a5&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URBIPHAI%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T090853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD8bCjCB38wjNeOFm%2BEnnrHrP84%2FM1M3jtT4Sdt7fpeGAIhAIEJ7Xf1hrL196m4cN2abpg3tu6b%2Bt0NIhdFvN5mU6Y5Kv8DCBEQABoMNjM3NDIzMTgzODA1IgzsDdUdnUhBjyFvsOgq3AMuVl7Z1xKdSnx%2Frkrcrsck6elPSWqxUkn482j2D5mVoVH2SULPFUVGopI07deAqc2sCfMddOsj2Ri0m3fMFgvZPYt0ma58Is%2FqKJxcQpPBtK2SRlVsB6j4fYxwkC7ZsbKuLs559EhRpQ7UlmLOJN02OtYyerTnCKExMXZCqMDObSvE8%2BVpr599RZNJ9mEG6anCyLusYdSomsoy2apIkxuuXczwZxLsjonxYcHh3Ul0M1smj8taJAsnv9ACJLHYjgBXYKt%2Fv%2FcIeRPxkMqpKklZ2NrqqEqcv3K5XroshBXO7zpH5S47XJpzuvkWZUe8L0D4pIC7RXOBYzFCjmhd0lF%2FECwtLeQxlQWhTwk192BcUfRxBc6iXsdoy2IzPOT8ZO%2FE%2BIkdp52ycuwNMXpu%2B7X4pgvYd3%2Fc5bo%2Fk0uPRNYoWDq2fV1qwig7Sw3lso%2B%2FxZN4L9VwRx1pPQH7uLdd7WHHE7h%2BY3WJqc0KmrF2SK3IYPuuY7yNiEZ9oqusc7q164wLjGyaCwWQzVvQxU2RvijhX%2BqJsz3VeC4NA4Khh8vXIg%2BtbFcJvTot5XLOBJaipbW3wWqo0gEymoY%2FPE96KvxBVA3RjVNQ1FFs%2BmqQyTptAsu9IgiiB4w40wq2%2FjCs9IG9BjqkAR4xAagHmS2%2Bx4bHLKyD%2B2cwvq8KxyYix2kNjCqxI1FTpcOg0I8mjLUl66ay1MG08V3j4iixZ%2FYOAAq%2F2RsRVqtplnVqLIohs2MeHpRnu9%2FRTeuY5gblJvCyYtNU3221Hsdm7hyskFtUsqu%2B6NfrGAZOEX%2B8YxzLdmy%2F2kJd3Pn%2BqmJVzwTpAmgYl9XUeseQGcXqM2ZSOYe%2B3yT8x1ZT3El60ty1&X-Amz-Signature=79062358a8d3a835773a32229e608cb6ad5e527262baaba0c6564898f6aa0d84&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
