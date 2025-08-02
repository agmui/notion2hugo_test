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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627O4LYTE%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T170752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICLTdSkiW2Z2n%2BkDSvI%2BTFYqTJIpLIvgaYZY3EGmvmJDAiEA23XmwRhrYvLAurI2CrnB5s43cKcc5dbEkPiFEQKqLS0q%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDHG1ahxLys3ByHH02ircA%2FI7E8oRMnLOF02%2BB3OfWuQebVBBHNe5k82UhclpKQnGlJWU73ei%2B7GvBk1xWznr5TS7YkglPjRgUtrJtCFhVi9vHEPVsPefsidbFY9%2FcvW5F8bQpw2I%2FqiPyW6UK1fiyx7kKczb5ZnVtpiYiWP3vm7PDsg8xUx5Ahx28IzyPtW2%2FlOn7vsFJUtkP27yKn8gIWiMAo8DRpUIZOuiQKZE0tKywmrDEOH%2BlSXiIWxg61dHmdEkYgij3%2F8NAVer52DKN9vomrqlC76efelpdB%2BZP5TN%2F2HQ6PH9uzXs7k83Hu3cM8IjRZm3CSd6LetIhfoGYeYCtS%2B240DmomWRvwSTQ8M9ptwMUy%2FKoMHVVXtq3J8d4nlfVHICnGIgeivHsMsmDqk0FqSE0tqzoNzB9S47BtWMrsWKJauZY%2BehrhWS6Q%2Fw71wxhgVzwGN5iCIYqcIFIMrQ%2BkCzB1YBf2FIA3OuWWf0sNyKyUptA%2BT4wvQT%2FKSK93L%2BeiOOav7vNIF6ZJGDIk0dyHtQ7BEIa21098ar3wRV7%2FvWQnN4JBgvZe8V16Eon2cjld%2B9QJctO5qJvtsJVugAlJlGfbfnqWX%2FJlcfM590ebj%2FxTAooMERfFDYhfRrDVatVdgZkOI3L%2BYHMJ%2BOuMQGOqUBx8vMJRJMBh42lLQxkuwRDOb%2BeQUg3AEoWhVbOiMr85YTsVpViG9%2Fwm50M5yOhdKMoKW4HBOfrVX3C2NdtkAHhYTb2e1dOdnXiQ4Q1NqcVpIwtuizfyUrmS2Z1n26ASIsukzBac%2FaGL5REovU%2BNX2%2BiseDbn74EyySUZzuYeiGF%2FMSbNha4DSo%2BAhyO1%2FhXBOJKR%2BPG9iBn26Ps5GuG930HcfSQ%2FA&X-Amz-Signature=faab253119de2dc8b2491f763f6c4b56487467353f8d14a685d7342875900f26&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627O4LYTE%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T170752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICLTdSkiW2Z2n%2BkDSvI%2BTFYqTJIpLIvgaYZY3EGmvmJDAiEA23XmwRhrYvLAurI2CrnB5s43cKcc5dbEkPiFEQKqLS0q%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDHG1ahxLys3ByHH02ircA%2FI7E8oRMnLOF02%2BB3OfWuQebVBBHNe5k82UhclpKQnGlJWU73ei%2B7GvBk1xWznr5TS7YkglPjRgUtrJtCFhVi9vHEPVsPefsidbFY9%2FcvW5F8bQpw2I%2FqiPyW6UK1fiyx7kKczb5ZnVtpiYiWP3vm7PDsg8xUx5Ahx28IzyPtW2%2FlOn7vsFJUtkP27yKn8gIWiMAo8DRpUIZOuiQKZE0tKywmrDEOH%2BlSXiIWxg61dHmdEkYgij3%2F8NAVer52DKN9vomrqlC76efelpdB%2BZP5TN%2F2HQ6PH9uzXs7k83Hu3cM8IjRZm3CSd6LetIhfoGYeYCtS%2B240DmomWRvwSTQ8M9ptwMUy%2FKoMHVVXtq3J8d4nlfVHICnGIgeivHsMsmDqk0FqSE0tqzoNzB9S47BtWMrsWKJauZY%2BehrhWS6Q%2Fw71wxhgVzwGN5iCIYqcIFIMrQ%2BkCzB1YBf2FIA3OuWWf0sNyKyUptA%2BT4wvQT%2FKSK93L%2BeiOOav7vNIF6ZJGDIk0dyHtQ7BEIa21098ar3wRV7%2FvWQnN4JBgvZe8V16Eon2cjld%2B9QJctO5qJvtsJVugAlJlGfbfnqWX%2FJlcfM590ebj%2FxTAooMERfFDYhfRrDVatVdgZkOI3L%2BYHMJ%2BOuMQGOqUBx8vMJRJMBh42lLQxkuwRDOb%2BeQUg3AEoWhVbOiMr85YTsVpViG9%2Fwm50M5yOhdKMoKW4HBOfrVX3C2NdtkAHhYTb2e1dOdnXiQ4Q1NqcVpIwtuizfyUrmS2Z1n26ASIsukzBac%2FaGL5REovU%2BNX2%2BiseDbn74EyySUZzuYeiGF%2FMSbNha4DSo%2BAhyO1%2FhXBOJKR%2BPG9iBn26Ps5GuG930HcfSQ%2FA&X-Amz-Signature=922049464ae559b37a37de4272abd5c507589243e67099d51a8e6abe4ba1bbf1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
