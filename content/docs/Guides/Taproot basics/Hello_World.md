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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JFP67Q5%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T140411Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJGMEQCID%2B%2FAIPSVi69%2BdYsr92tx%2FMJalKBQI1oEW7AeKfDwMD1AiB1bpTVPGedl7Vh6drEYOxNWzIBAtCqQkYosNmapho5PSr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMPSjzx7oY6ipiFTT7KtwDW8NdA5YWdn96eSfkOYj4dTixCOVDFoKdbRRYZNe57qdmv8LwlzgeZZr4811KHpHUorcswq0pYlbMTB%2F1JnUGtfxageRz%2BQ8NnJuQL0iYdZnbiJm9QbzeCLJPu4pnNI1IL5wIk4gLvXnt7YzmKLh40hMu5UC3QbNffw1p5cEmKAy0K6bjdIs%2FLffJu7l3l3503yJK3LCMPs42DPhOXKzKKXSYnwa0JXYsDcuKcfKmG4EOsFWJs6zUpTm0lZL6XDHT7l6VA03NTJLfjnWMmxjKiS0IrtsHRLfYlFCxnqkACgBG9tpjlpVJQQgUS71GuTJl4%2BrHwGY9KKTV3MmmKdxalUo9P0mLiUaW8rbArgKMskspy2SIjedxEfbGCxDqQEwUvJlsOeNqhXszE%2BbtzyUGH9cGRbKa%2FmWA5r7ob2Q%2F6AZmlf1q0P%2FL%2BLUxAD4a8C5jD8sLhuKBdELdkpIhjMRP78N0gb%2BFM4iJp6cdLxtphdd5hVCfVD%2B7GNtnO9MM8KG6BoLfx9fgFzIinEApl7adA%2BLEuPtwYd%2FcVQR59q7VBpRVpoYqw3yfd8YKtKNHZdKB0jRODZCJxK5TlWsdn5P%2BI8lgZLwrUDMK6JUWGSbk89bwA9ROszewWRVoq0UwzrWfvwY6pgGUttkcDP%2B4gu4W2nLV3t%2FzD5xTl0O0HQkkpjjQkPQysTKomY725SNnnnjfF%2FU2VCnmQCiB0tvPsd1NW6Hza3MIM9eboTwvKkn0hRBgsbL0%2BXC1mHJYPXNjy4YdRSdmR%2BJh5COQBDnaF4ZnOdnQakcTQZ9exE%2FAuSYdMemuEAEl0pVszuB3L7ZENYijj7drNyZmACzqf2VK9YaeV%2F9W9bPStAG9hdCN&X-Amz-Signature=37d7f6d518b17ea9937c0a4efae1d819e1d60976b53a4d1b50585a0581170f68&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JFP67Q5%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T140411Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJGMEQCID%2B%2FAIPSVi69%2BdYsr92tx%2FMJalKBQI1oEW7AeKfDwMD1AiB1bpTVPGedl7Vh6drEYOxNWzIBAtCqQkYosNmapho5PSr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMPSjzx7oY6ipiFTT7KtwDW8NdA5YWdn96eSfkOYj4dTixCOVDFoKdbRRYZNe57qdmv8LwlzgeZZr4811KHpHUorcswq0pYlbMTB%2F1JnUGtfxageRz%2BQ8NnJuQL0iYdZnbiJm9QbzeCLJPu4pnNI1IL5wIk4gLvXnt7YzmKLh40hMu5UC3QbNffw1p5cEmKAy0K6bjdIs%2FLffJu7l3l3503yJK3LCMPs42DPhOXKzKKXSYnwa0JXYsDcuKcfKmG4EOsFWJs6zUpTm0lZL6XDHT7l6VA03NTJLfjnWMmxjKiS0IrtsHRLfYlFCxnqkACgBG9tpjlpVJQQgUS71GuTJl4%2BrHwGY9KKTV3MmmKdxalUo9P0mLiUaW8rbArgKMskspy2SIjedxEfbGCxDqQEwUvJlsOeNqhXszE%2BbtzyUGH9cGRbKa%2FmWA5r7ob2Q%2F6AZmlf1q0P%2FL%2BLUxAD4a8C5jD8sLhuKBdELdkpIhjMRP78N0gb%2BFM4iJp6cdLxtphdd5hVCfVD%2B7GNtnO9MM8KG6BoLfx9fgFzIinEApl7adA%2BLEuPtwYd%2FcVQR59q7VBpRVpoYqw3yfd8YKtKNHZdKB0jRODZCJxK5TlWsdn5P%2BI8lgZLwrUDMK6JUWGSbk89bwA9ROszewWRVoq0UwzrWfvwY6pgGUttkcDP%2B4gu4W2nLV3t%2FzD5xTl0O0HQkkpjjQkPQysTKomY725SNnnnjfF%2FU2VCnmQCiB0tvPsd1NW6Hza3MIM9eboTwvKkn0hRBgsbL0%2BXC1mHJYPXNjy4YdRSdmR%2BJh5COQBDnaF4ZnOdnQakcTQZ9exE%2FAuSYdMemuEAEl0pVszuB3L7ZENYijj7drNyZmACzqf2VK9YaeV%2F9W9bPStAG9hdCN&X-Amz-Signature=524dd1d37e7197d00dc0d847dc1be5fe78fe12cf5ce6c722d7f42cc515c6e6d6&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
