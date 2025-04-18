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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673RYDZ6G%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T210704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICoM2Z2mFBEjrvgaFfm%2BUfCVR1OpTLMYbOJvi7vkT%2FNuAiALWLb7PGiZxBt9opYWU871goZBR7PAtoL%2FmxGBBGe7bir%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIMhLrf4zd8WDcEiJtRKtwDFt%2BCcnYNugxmoTBVaagUlOKRT6chmOp%2FLo1F1HohHL0mPy0UuJyXlmiUqAvnb4Uv29WnA59YelOkFtVrvl02j5zTpjfQBxAnZIds1bXpRjN5gtwmppyjHJA1yTItrCy7py0xrTXMQ8jr0cw1EavcqOJuHDhnaS%2BKwK%2BigXTtWw5y26bCJ26OIe%2FWJydjyjeGsegPARH6hag4BEz39hlkPVZuUQvEZkpaiSyBFN93BeWi5NMBYq7DbjxFaRqf%2B%2FhRr2hZaRrnCCW8qD03m%2BsiQbYOfiJdZl4P8K9lgCOvNUc%2F1ZeA4S5TY1ChgOh9Lm552tMsrf9sGHWJccGXAaTa41aYU0iGOEQ7pgLyR9Up3x7IFwYshI4LNE3VPB34U6oUvI%2BAbZcNXu6QnpuImlAQ4ny9GQkoog6eHSt2SJKcvtOkvi4%2BVxmomNJGmLAUsOTvwjbYxjclCBY9kmlAeuC72lWrMw8RG1JbAJYUH1E8TrJOk7gcrptget3PHZACxxqZtgPNzNqzFpcTKCDhUJeBO51Gjr11bAcpzMbWwClMX08VReKAuT0Pjenv4V%2BQmf%2FMGW7aGdwEsMhbS7Cn7%2FbRIFDv8QZlGyGyMA%2BDO5dqGCc5GzWNrSxR3tQ5ZxMw2uSKwAY6pgF2IWezxrMY2WJmWgxqrJDlNfwGXJzpB5Ia4wvlzV3SLtNo7u%2Bb6GjCVVjFV2NsKazeYjxwyUqjXaMV%2BdhdLYgSMATcARANo2VrvfyUUiOVPL%2B4flniOKUzNQOCh02P0YdSFhPKbAqRx2VagO2byAEuxt29Z6cRYN7UVDLlmeuyQoOEhirSdyaYSOOmw9%2F6rZFygROcGYbGJLQ%2FojdW0vNWDqhw84t3&X-Amz-Signature=42e23828b67f88126aa4676f32fcb74c66a82ea6e881f25e07d15468568152fe&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673RYDZ6G%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T210704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICoM2Z2mFBEjrvgaFfm%2BUfCVR1OpTLMYbOJvi7vkT%2FNuAiALWLb7PGiZxBt9opYWU871goZBR7PAtoL%2FmxGBBGe7bir%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIMhLrf4zd8WDcEiJtRKtwDFt%2BCcnYNugxmoTBVaagUlOKRT6chmOp%2FLo1F1HohHL0mPy0UuJyXlmiUqAvnb4Uv29WnA59YelOkFtVrvl02j5zTpjfQBxAnZIds1bXpRjN5gtwmppyjHJA1yTItrCy7py0xrTXMQ8jr0cw1EavcqOJuHDhnaS%2BKwK%2BigXTtWw5y26bCJ26OIe%2FWJydjyjeGsegPARH6hag4BEz39hlkPVZuUQvEZkpaiSyBFN93BeWi5NMBYq7DbjxFaRqf%2B%2FhRr2hZaRrnCCW8qD03m%2BsiQbYOfiJdZl4P8K9lgCOvNUc%2F1ZeA4S5TY1ChgOh9Lm552tMsrf9sGHWJccGXAaTa41aYU0iGOEQ7pgLyR9Up3x7IFwYshI4LNE3VPB34U6oUvI%2BAbZcNXu6QnpuImlAQ4ny9GQkoog6eHSt2SJKcvtOkvi4%2BVxmomNJGmLAUsOTvwjbYxjclCBY9kmlAeuC72lWrMw8RG1JbAJYUH1E8TrJOk7gcrptget3PHZACxxqZtgPNzNqzFpcTKCDhUJeBO51Gjr11bAcpzMbWwClMX08VReKAuT0Pjenv4V%2BQmf%2FMGW7aGdwEsMhbS7Cn7%2FbRIFDv8QZlGyGyMA%2BDO5dqGCc5GzWNrSxR3tQ5ZxMw2uSKwAY6pgF2IWezxrMY2WJmWgxqrJDlNfwGXJzpB5Ia4wvlzV3SLtNo7u%2Bb6GjCVVjFV2NsKazeYjxwyUqjXaMV%2BdhdLYgSMATcARANo2VrvfyUUiOVPL%2B4flniOKUzNQOCh02P0YdSFhPKbAqRx2VagO2byAEuxt29Z6cRYN7UVDLlmeuyQoOEhirSdyaYSOOmw9%2F6rZFygROcGYbGJLQ%2FojdW0vNWDqhw84t3&X-Amz-Signature=473cf2f2340219d3929c2b82ebe436db7aff8d46192c1fb70694a363a7dcbd1f&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
