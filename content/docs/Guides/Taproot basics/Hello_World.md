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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMKKKFYD%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T131827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQCDG%2BNsz668ykzrP8c9iXKAOznzI8%2Ff2pSh7GH3Iql7OwIhAIgIk5DDgaxurVC3tHHaNep1G3R5G75fFfYLrGF3AxT6Kv8DCC0QABoMNjM3NDIzMTgzODA1IgwfcUUGbi4hkwaJK4Aq3AM1U55L8VnFCTBCAdQYG3R7yhIAuOkn5QhNkJjieemXi9pJE8zG6EK8M99M6spYUS9V%2FzMWAkvR0B6V0Rfhbut15Nufcj6MLfsb8KXBhFnAwHwlqvSA61LLNd30ueGWy9rRM%2FDU5aG8UOmmHQICS1uB%2F1hZO23eJGWov%2BHUVvkPFtEXRVLXOPN%2FMT80yYDkLP6e9OeLNU3hHq3LRqmASRU2W7o8mQfRJVoGRDbX9zofThoWnlu%2BbRyrXw4Os2CdgwK45LEpnpSpB%2BiwDKj4st7aHdbjZK%2B9cG3V%2FPYH%2FdZBYSPd%2FVpGwsNPJYQHpWuAec%2FcbO7zPJ%2BRhBCtnpHfD8HoxlRQ%2Fkm%2F5vrUxZtfafdYd7qLkSyEz16JZR2m4MYiRFEB0Z0T%2F7b0paupGSTdNfJdPYnWSl%2FwfBZUIhZDnE8BkzrnZBuknNJwbNk1rus6YEs4HY5dKt7FIYsI0913RkIUc8CG4n6UX3%2FZAef8Oq3TX4XJsYykm9WjNe1hl%2BTvXiZKcK%2FLyL3q5aBVsY5gI3TS0FDwXKjSkDtdrnPgzM8yTAHpNUTa0rMCS4Aa8ouDpqbxe0ahdufQifsNUGNsiUGrOxWHspNV2iYvN9AYZKbPg0yltLxu647d1aN9jDCCwrXCBjqkATr9qO3fmwY69%2F0KTFr7ACpYbFL2njYrGLsMCr80D4aCJ70Z7ny%2FdF6dzMi%2BzNepjdpCfhO3sEKRpx%2BL%2BAAU9UGDnqfCQNf5lVH5ZVDgac2ko6WmHCHoTW0NDSeueIDZ9KHyZWUkma5nemZqWo6GCjrXP6sFFuJieUSzH6SR9CHGYzWKmKmwxeD5GXWWa3T16ATHKjlIOxyXBueoKgin55Gbi2sH&X-Amz-Signature=116748a8a9536c84405268891402c31228cc99f090027fab20e316dd198527cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMKKKFYD%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T131827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQCDG%2BNsz668ykzrP8c9iXKAOznzI8%2Ff2pSh7GH3Iql7OwIhAIgIk5DDgaxurVC3tHHaNep1G3R5G75fFfYLrGF3AxT6Kv8DCC0QABoMNjM3NDIzMTgzODA1IgwfcUUGbi4hkwaJK4Aq3AM1U55L8VnFCTBCAdQYG3R7yhIAuOkn5QhNkJjieemXi9pJE8zG6EK8M99M6spYUS9V%2FzMWAkvR0B6V0Rfhbut15Nufcj6MLfsb8KXBhFnAwHwlqvSA61LLNd30ueGWy9rRM%2FDU5aG8UOmmHQICS1uB%2F1hZO23eJGWov%2BHUVvkPFtEXRVLXOPN%2FMT80yYDkLP6e9OeLNU3hHq3LRqmASRU2W7o8mQfRJVoGRDbX9zofThoWnlu%2BbRyrXw4Os2CdgwK45LEpnpSpB%2BiwDKj4st7aHdbjZK%2B9cG3V%2FPYH%2FdZBYSPd%2FVpGwsNPJYQHpWuAec%2FcbO7zPJ%2BRhBCtnpHfD8HoxlRQ%2Fkm%2F5vrUxZtfafdYd7qLkSyEz16JZR2m4MYiRFEB0Z0T%2F7b0paupGSTdNfJdPYnWSl%2FwfBZUIhZDnE8BkzrnZBuknNJwbNk1rus6YEs4HY5dKt7FIYsI0913RkIUc8CG4n6UX3%2FZAef8Oq3TX4XJsYykm9WjNe1hl%2BTvXiZKcK%2FLyL3q5aBVsY5gI3TS0FDwXKjSkDtdrnPgzM8yTAHpNUTa0rMCS4Aa8ouDpqbxe0ahdufQifsNUGNsiUGrOxWHspNV2iYvN9AYZKbPg0yltLxu647d1aN9jDCCwrXCBjqkATr9qO3fmwY69%2F0KTFr7ACpYbFL2njYrGLsMCr80D4aCJ70Z7ny%2FdF6dzMi%2BzNepjdpCfhO3sEKRpx%2BL%2BAAU9UGDnqfCQNf5lVH5ZVDgac2ko6WmHCHoTW0NDSeueIDZ9KHyZWUkma5nemZqWo6GCjrXP6sFFuJieUSzH6SR9CHGYzWKmKmwxeD5GXWWa3T16ATHKjlIOxyXBueoKgin55Gbi2sH&X-Amz-Signature=1788f86bfc796b96f8940060dd15c6146141a614278e26edcdaa1a1fdf00143e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
