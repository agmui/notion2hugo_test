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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665J4IWEL2%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T004259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGFOoyPOhHcpvG%2BGIp4YxL9iasn%2FF%2BOehliOJm1Jvc8eAiEA1EUo%2Bl0eVxNnEqktPhPg2TdGvT1X8pPFXZwgguvmAhIqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDxz%2BrBtWXvfzuvgEyrcA0WJPjirSsQs4N9L7vfd98PJlzP%2Fc7upw6BBm979XFyYuj1ywTkDsuwyB3xjBWadJF0brxUqX3s%2B3e5lKqyLPFMOqmRMs0%2BJEeRJvE7dUK%2FsVTANjY1mB262jXGiAQp7rJS5mSOm21GTpor2g7FWpS%2BJHBiT%2FHXoEms%2B3%2FeLyGU3iNwdZQjT5btf81aKG0ZlweDGxvr%2B%2FBgvryS3iSm3UT8A9hIYbAlXBEZWaLUyDig8vfg7oHbT2wI3u6Zm3LnJllPBZAauET9SralaMAXM3cbRWW2e1gQ%2FdNU3ynYvv5FJSz8E0pS9jAn1N8aZt%2B78UYjO1s3JxR%2F93LZ5cHiYobkPxB1%2F6m9kstv6iRNr%2BPkDGozjD0ri%2BCYONTOAVw2UBT2xX%2FdiOzi6%2F2i%2BWpnafiLZfCyn6IPgGkMDoo8%2BRkZjvpvmhABn4De6N98PIZHxXQv6XoCvulVcvUZ5lFp2CU1sM8xvmkdvVz9H1HBTNTofOTAX7s705fUgCLTt9ISueJcwhrpY1dg40%2F95cJ%2BCawd9N0MsyEXCYMWxnFw9iUFPcVcM6r0%2BZe2IOZYCheslmIdn5KOwOUlGd%2FcTz1YYnDaMF6FlHGIicQfWa3W7ujpTNMW4ZdQNTRZb3HENMPrrx8IGOqUB6bOgVTxvfyaF5ZR2h%2BaeCSw47vfueLIn8%2B5FBD2QjLhpwihdTd478cq0JZfkjv5oY3JsK9%2FcEegRtKaH%2B0VZ%2BiztgzSts%2B2XIGvXWr6spP4tCGBd9BA9AlaVqM1udG8c36ZXQvsoWQJGKB8r5ZKT3CXi7o%2BlZx6tupRmoK9puozLBsTP0Qzh8SVO%2FnsJ1APHjZgbRN273YChLN953Wu%2FWit6As2%2B&X-Amz-Signature=6f9583588fa6a1589cc99bc0f77a26d59614e56a90a76a70cf4fe76ebe2e33c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665J4IWEL2%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T004259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGFOoyPOhHcpvG%2BGIp4YxL9iasn%2FF%2BOehliOJm1Jvc8eAiEA1EUo%2Bl0eVxNnEqktPhPg2TdGvT1X8pPFXZwgguvmAhIqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDxz%2BrBtWXvfzuvgEyrcA0WJPjirSsQs4N9L7vfd98PJlzP%2Fc7upw6BBm979XFyYuj1ywTkDsuwyB3xjBWadJF0brxUqX3s%2B3e5lKqyLPFMOqmRMs0%2BJEeRJvE7dUK%2FsVTANjY1mB262jXGiAQp7rJS5mSOm21GTpor2g7FWpS%2BJHBiT%2FHXoEms%2B3%2FeLyGU3iNwdZQjT5btf81aKG0ZlweDGxvr%2B%2FBgvryS3iSm3UT8A9hIYbAlXBEZWaLUyDig8vfg7oHbT2wI3u6Zm3LnJllPBZAauET9SralaMAXM3cbRWW2e1gQ%2FdNU3ynYvv5FJSz8E0pS9jAn1N8aZt%2B78UYjO1s3JxR%2F93LZ5cHiYobkPxB1%2F6m9kstv6iRNr%2BPkDGozjD0ri%2BCYONTOAVw2UBT2xX%2FdiOzi6%2F2i%2BWpnafiLZfCyn6IPgGkMDoo8%2BRkZjvpvmhABn4De6N98PIZHxXQv6XoCvulVcvUZ5lFp2CU1sM8xvmkdvVz9H1HBTNTofOTAX7s705fUgCLTt9ISueJcwhrpY1dg40%2F95cJ%2BCawd9N0MsyEXCYMWxnFw9iUFPcVcM6r0%2BZe2IOZYCheslmIdn5KOwOUlGd%2FcTz1YYnDaMF6FlHGIicQfWa3W7ujpTNMW4ZdQNTRZb3HENMPrrx8IGOqUB6bOgVTxvfyaF5ZR2h%2BaeCSw47vfueLIn8%2B5FBD2QjLhpwihdTd478cq0JZfkjv5oY3JsK9%2FcEegRtKaH%2B0VZ%2BiztgzSts%2B2XIGvXWr6spP4tCGBd9BA9AlaVqM1udG8c36ZXQvsoWQJGKB8r5ZKT3CXi7o%2BlZx6tupRmoK9puozLBsTP0Qzh8SVO%2FnsJ1APHjZgbRN273YChLN953Wu%2FWit6As2%2B&X-Amz-Signature=7eb99ed487132dbf4326732c04ce036101c4ca812b557c21d272b6784e816eee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
