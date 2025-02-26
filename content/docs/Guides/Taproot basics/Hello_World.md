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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSSMXMSV%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T081054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCICG4IwkqZ6CG6G%2FfnkpHh1uV4egpJG4AUr5H3PIL75LpAiAv1nPneKt2lam%2BoI6sHp60k%2Faudbsvq15qFE5V%2B3%2F0SCr%2FAwhYEAAaDDYzNzQyMzE4MzgwNSIMKmD6j0jr%2FXkZHxzsKtwD8IhyM6OMvgZXm5Dm1GZC1MIWwSddZtxK1IRwnOxz3mwN3waGtRr0rLZ1p7E7Ez2nfIQVedRZyOatneQ%2F4sznczSM9QGQBXwLJTV8uitpnWCBklfWS%2Bo%2F9CjWesEPB15UsHSWtH4Tr6MP8oLqUN5RiwxEAnC93yBoLAGRabnJgZGiBpvUplmKK8TiUZ6AuKLQKDxCZPpHlpNItv67P9lQnMZxTPO%2FjUjRBI7Cy9f0w0WbkfAeH5qgPkE6yLQKVoBB%2BtihpI%2FFpVtf3KPmsejuGWoRe4uMboe%2FWw%2FGRebkY5N0Mu%2B58%2BHxvqyerPVWVV231s4jUBMJMuRRNCoAo4%2FfmqGLRSXnTto9tR0rEG2MoxsrWbCk7t736xpa6sBdbUfn0gqsQmWqINGNCtpFDSHDO3rOqeSk%2FWF6fK50ln3hDfyVuU%2BuCgNHYv5i8YI%2FabUkIzh7UvyQEksZvoM9iJYlIYUuRAUiI51uvDXHVhTZILcbSVCrUjHu2J2slSRZGMEwNhr6IZeJ%2FZVC8dMfpQGyIDK2lfeq23q3gBwwsnWOLz0QWErQDuQSFI5DKtiTnaV7LYjGfTVEOaPQ%2F%2B%2BLxTKW0XtggM1QaBrfGnAK47Nr2fKQy9WZlRa4qvsruSkwlID7vQY6pgFN6mGNj34p51hLyz%2BLFP1Q5Xd5J4lL3DqGjTjsX%2FSAiePwXxNM7Y6fjXB%2Fgz59Z45LIsNIb%2BYOLUHuBO59P0xR2apIhJLSQumebcA1xKgWwRjkScK2twymN7UYaBGnR4PHTzvzNLXTtoXIVBIL4wq12VBY64C9AjNRWSAOhSqych0l0nM7GfrU%2FudJzA5u%2FqiIvutvX4f3uyakqQkZum4KLzl6CD%2BZ&X-Amz-Signature=caea48102d580de9a83bd523aaac6584e47b38da29b30257d27177d355f8752a&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSSMXMSV%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T081054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCICG4IwkqZ6CG6G%2FfnkpHh1uV4egpJG4AUr5H3PIL75LpAiAv1nPneKt2lam%2BoI6sHp60k%2Faudbsvq15qFE5V%2B3%2F0SCr%2FAwhYEAAaDDYzNzQyMzE4MzgwNSIMKmD6j0jr%2FXkZHxzsKtwD8IhyM6OMvgZXm5Dm1GZC1MIWwSddZtxK1IRwnOxz3mwN3waGtRr0rLZ1p7E7Ez2nfIQVedRZyOatneQ%2F4sznczSM9QGQBXwLJTV8uitpnWCBklfWS%2Bo%2F9CjWesEPB15UsHSWtH4Tr6MP8oLqUN5RiwxEAnC93yBoLAGRabnJgZGiBpvUplmKK8TiUZ6AuKLQKDxCZPpHlpNItv67P9lQnMZxTPO%2FjUjRBI7Cy9f0w0WbkfAeH5qgPkE6yLQKVoBB%2BtihpI%2FFpVtf3KPmsejuGWoRe4uMboe%2FWw%2FGRebkY5N0Mu%2B58%2BHxvqyerPVWVV231s4jUBMJMuRRNCoAo4%2FfmqGLRSXnTto9tR0rEG2MoxsrWbCk7t736xpa6sBdbUfn0gqsQmWqINGNCtpFDSHDO3rOqeSk%2FWF6fK50ln3hDfyVuU%2BuCgNHYv5i8YI%2FabUkIzh7UvyQEksZvoM9iJYlIYUuRAUiI51uvDXHVhTZILcbSVCrUjHu2J2slSRZGMEwNhr6IZeJ%2FZVC8dMfpQGyIDK2lfeq23q3gBwwsnWOLz0QWErQDuQSFI5DKtiTnaV7LYjGfTVEOaPQ%2F%2B%2BLxTKW0XtggM1QaBrfGnAK47Nr2fKQy9WZlRa4qvsruSkwlID7vQY6pgFN6mGNj34p51hLyz%2BLFP1Q5Xd5J4lL3DqGjTjsX%2FSAiePwXxNM7Y6fjXB%2Fgz59Z45LIsNIb%2BYOLUHuBO59P0xR2apIhJLSQumebcA1xKgWwRjkScK2twymN7UYaBGnR4PHTzvzNLXTtoXIVBIL4wq12VBY64C9AjNRWSAOhSqych0l0nM7GfrU%2FudJzA5u%2FqiIvutvX4f3uyakqQkZum4KLzl6CD%2BZ&X-Amz-Signature=989fa8125b5af52d0503598794ac7a21d66c3f3485a6ff16f5b0ecb4406d0de1&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
