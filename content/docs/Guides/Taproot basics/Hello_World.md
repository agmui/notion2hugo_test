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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAA2S7AH%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T170733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDFCMaCrnjMtVUJZ4pHKm84TKqIQ9vciSD7Pr%2FFw7FYWwIgao1gzlii13HSLDeV4r%2BuJokntq2PWPRZ1Cu1kWb%2BEKgq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDJs24mvETL1jIEcv5SrcAynbtfFcIs0lbB55pwx39ViWhE%2Bi8Mm%2FXH6W2JJAQqi3kwJGwzCBBkHdnWchOGMkbr4oRlS70IE9LdXRiZglFP2UiaZCl5tZIN0YzQ8wtPGkOepyvuEZVUCRI%2FRhnzCUGcB86W2oowiVPe8OtSxhJg56R%2FYtPsl0b76YHa4EBlJGb5ePdGG2I3bDxnUr6GdgLlYVUWopcImR4HmMnJJ7yZMmGgbPcSFAHT5BgUWqQNWz6Fm%2Bj7YM3R06YM4a4nPpy5xW%2BNcjWTeVW%2B%2FFxxHx1cM4a5Pvc6dUFK6ESC69LY6umlaJLQSCT6dgUyKeev9lWvKlpxDawdpMY3q0ABNCBXt8EImroe7%2B49UEw580RqQQ%2F6quRHgs95hFGEgA6%2FNQ0xxZ0umwL14OL4PgjLFODiwP8go0cOucRbQl3s4VLGevHlfp8xz4C20nX%2BBAeY9lxQ0D9li5medshx9%2BDbMuo0XKYFHYt3RXNElENt2TnL9UcH3E%2FL5gRvxwMOGQftnHX3Vwnr4ieJu58q5sh5GjviYbCwDLEygCP%2Bu%2FKfvLM6Rgq1GrWIClAlNN0UW%2FDV3XNaaUFdb6ZrXZ80siBlGIz8I24rHnE0Qw%2FeXTppP7yHl83u8YUAZxGks5nwxDMIamm78GOqUB62uJ8hiqiDccXyQYuMnN%2F6ZTd%2FqaGldXztsWMjc7Q11XCeSRr89NoS%2FA4M%2BlAVNhTbCe8wjZbVeyWA0XpCvj9XTkDAlgtK%2BIYY1xOPGSViuzY%2FgW4WCj2ABoksdPbAMlI1d1ub1VyC9wtv5BkPyuHxaFrr7V1sy0dDPJv1XFqITzvcK%2BZKKtDbZj9VI6JQpIrwc9hVqrGKDdApL0wqXd53cAmza%2F&X-Amz-Signature=b0f5e7c4cc89f4e72b2f4d0763a1472868c863d000aedd28a900bdad0eb11208&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAA2S7AH%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T170733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDFCMaCrnjMtVUJZ4pHKm84TKqIQ9vciSD7Pr%2FFw7FYWwIgao1gzlii13HSLDeV4r%2BuJokntq2PWPRZ1Cu1kWb%2BEKgq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDJs24mvETL1jIEcv5SrcAynbtfFcIs0lbB55pwx39ViWhE%2Bi8Mm%2FXH6W2JJAQqi3kwJGwzCBBkHdnWchOGMkbr4oRlS70IE9LdXRiZglFP2UiaZCl5tZIN0YzQ8wtPGkOepyvuEZVUCRI%2FRhnzCUGcB86W2oowiVPe8OtSxhJg56R%2FYtPsl0b76YHa4EBlJGb5ePdGG2I3bDxnUr6GdgLlYVUWopcImR4HmMnJJ7yZMmGgbPcSFAHT5BgUWqQNWz6Fm%2Bj7YM3R06YM4a4nPpy5xW%2BNcjWTeVW%2B%2FFxxHx1cM4a5Pvc6dUFK6ESC69LY6umlaJLQSCT6dgUyKeev9lWvKlpxDawdpMY3q0ABNCBXt8EImroe7%2B49UEw580RqQQ%2F6quRHgs95hFGEgA6%2FNQ0xxZ0umwL14OL4PgjLFODiwP8go0cOucRbQl3s4VLGevHlfp8xz4C20nX%2BBAeY9lxQ0D9li5medshx9%2BDbMuo0XKYFHYt3RXNElENt2TnL9UcH3E%2FL5gRvxwMOGQftnHX3Vwnr4ieJu58q5sh5GjviYbCwDLEygCP%2Bu%2FKfvLM6Rgq1GrWIClAlNN0UW%2FDV3XNaaUFdb6ZrXZ80siBlGIz8I24rHnE0Qw%2FeXTppP7yHl83u8YUAZxGks5nwxDMIamm78GOqUB62uJ8hiqiDccXyQYuMnN%2F6ZTd%2FqaGldXztsWMjc7Q11XCeSRr89NoS%2FA4M%2BlAVNhTbCe8wjZbVeyWA0XpCvj9XTkDAlgtK%2BIYY1xOPGSViuzY%2FgW4WCj2ABoksdPbAMlI1d1ub1VyC9wtv5BkPyuHxaFrr7V1sy0dDPJv1XFqITzvcK%2BZKKtDbZj9VI6JQpIrwc9hVqrGKDdApL0wqXd53cAmza%2F&X-Amz-Signature=6d1e0dbcd305624a1c0785e80d606067825ee2234bdcabec69d057a121179b9e&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
