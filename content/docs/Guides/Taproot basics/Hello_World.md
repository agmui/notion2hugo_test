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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQ2KZJJB%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T140500Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHpwN68j%2BqkVPHfuTrAIi5dr0h2RABCzvqOi0wKclm4sAiEAo8c0B%2B06EpU7fkX6SczpAI5nMfIvZ3cZTFdpks5ZLycq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDFg1OSdQfCgjNTjJ%2ByrcAzwCTPA6tnZEbmvw%2F64dY5ZyrhFAcgkkiEuuOQAHB56tqTuqj5WxqbQoczfpV%2B6kHBgaeb6%2FsdY6T2dX2m%2Brczk%2BaDUUjX6su5QJDmpazv2cSJlTP0itm5Txyb8RTUXmh6p4YZWYFSTzDnayiBJux%2BsKn10qNQdH%2Fep8i6eOIljauvo3W8lvYb%2FZb9wDitjFil4JZE7dWg98oUGPkJqXHlW%2FYAnFi1TepUlHPoG6itto4BdykQ63aR9%2FtjHt0xIayDQOjfZIdz3RO6FUIHVAODcWSGjmWQ0BE%2FFUcp%2BNkxeMVOgDt9Sodziw0q2lX0piW%2Bh9OQvIbh2mZnKbtwu0ZPYzpQy3aPv3B1KD5o8vWpuTpvioTWXAJibkzOITRjXq95WZXcn0Xo1acvqOy%2FOd8p55p%2BvtIgNMKmqeOxJx9W%2F8nfJojq5Dv4wtfFiVYfErpHFkGusvCgZrRlA8btuASsGDavyk2ueJgl5wl6KZ57BRZ5KBwozOzk0yYcViPqmMAS6DtQ%2F4YwkeNZtiZTZZ22QN4QKEbUFR6KwJUmynGmpI7icd1zXBUIFx7CjaTAuLJIhGmy0Oe5jeNf%2BwH5GOEPol9qgcfKR7ujWjhMHiw9uMQXLzeIGTyaaz4YL3MLG7uMAGOqUB4PvlR6MYPNFmqa6r%2B%2BEfuTqdaGka02RovHJZjW5ftQbS21R7jfzcCEgnSwleQICNh7oIlv0SuoiR4gp1G6OHtoSB5Q9eWfEJsGzZlvX1yviFca03BLzPttBJsBdsaqDjP2w3DR8Kzln7lCR6FvUIVvSs6kzM8PZcJb7eiqFCrh%2BPkD68CbLyhkK3SERm9iVctbToQ7CirhzV94kjW0oukrH%2F5Xcl&X-Amz-Signature=e195e1a067f43324861990e960807056676e7a7c612e17bc675a6497db3f967d&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQ2KZJJB%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T140500Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHpwN68j%2BqkVPHfuTrAIi5dr0h2RABCzvqOi0wKclm4sAiEAo8c0B%2B06EpU7fkX6SczpAI5nMfIvZ3cZTFdpks5ZLycq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDFg1OSdQfCgjNTjJ%2ByrcAzwCTPA6tnZEbmvw%2F64dY5ZyrhFAcgkkiEuuOQAHB56tqTuqj5WxqbQoczfpV%2B6kHBgaeb6%2FsdY6T2dX2m%2Brczk%2BaDUUjX6su5QJDmpazv2cSJlTP0itm5Txyb8RTUXmh6p4YZWYFSTzDnayiBJux%2BsKn10qNQdH%2Fep8i6eOIljauvo3W8lvYb%2FZb9wDitjFil4JZE7dWg98oUGPkJqXHlW%2FYAnFi1TepUlHPoG6itto4BdykQ63aR9%2FtjHt0xIayDQOjfZIdz3RO6FUIHVAODcWSGjmWQ0BE%2FFUcp%2BNkxeMVOgDt9Sodziw0q2lX0piW%2Bh9OQvIbh2mZnKbtwu0ZPYzpQy3aPv3B1KD5o8vWpuTpvioTWXAJibkzOITRjXq95WZXcn0Xo1acvqOy%2FOd8p55p%2BvtIgNMKmqeOxJx9W%2F8nfJojq5Dv4wtfFiVYfErpHFkGusvCgZrRlA8btuASsGDavyk2ueJgl5wl6KZ57BRZ5KBwozOzk0yYcViPqmMAS6DtQ%2F4YwkeNZtiZTZZ22QN4QKEbUFR6KwJUmynGmpI7icd1zXBUIFx7CjaTAuLJIhGmy0Oe5jeNf%2BwH5GOEPol9qgcfKR7ujWjhMHiw9uMQXLzeIGTyaaz4YL3MLG7uMAGOqUB4PvlR6MYPNFmqa6r%2B%2BEfuTqdaGka02RovHJZjW5ftQbS21R7jfzcCEgnSwleQICNh7oIlv0SuoiR4gp1G6OHtoSB5Q9eWfEJsGzZlvX1yviFca03BLzPttBJsBdsaqDjP2w3DR8Kzln7lCR6FvUIVvSs6kzM8PZcJb7eiqFCrh%2BPkD68CbLyhkK3SERm9iVctbToQ7CirhzV94kjW0oukrH%2F5Xcl&X-Amz-Signature=d8a07d99a6b4dd3ee6df5a005e9881c05e4ae0fae0fd9fe071b6cf8e51495402&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
