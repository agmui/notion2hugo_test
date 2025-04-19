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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VL5IVSNH%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T180922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJGMEQCIC3JQ21SlvjL6y5BApQx2pX1QrfwnXLywrQCYPPgTzTOAiB8xr1VQTGVZrB3jMBdDqXDPgOTZ89xSKfpgws4BWr1AyqIBAiS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnjb9toIGRixk0fO9KtwDM0F8eJfa3uy0zZ%2BqnSt8xDya43jvjQS5gU5jcVv6SuXTSNGdaubqsJBPcrgV2dmawwemvPrpKMVdcdzlhMixUjnQqrkmiQqGb7CwIOjYh4fBkMFokZ22uaETWkIPreGDImtXSDVfwLhin7wbiludKVqh62GZAmSe3e%2BIZ%2B4jh14jeSZRcrZO80Ra2V3RSPKeOj34Amt5lWAxGCvtQ8KcolJLUzl%2BO1J6TAMyYkZ85tZJwWZpyXLuz6T6r7sUTXG29HFs57jv55d8JyQi%2Fv70%2BgXEseCFzgFxWihnu9h%2FxsopYi5iK3Cof67h45ILgKUBKgAc%2Fv%2BI20WfhqRlEA6DMRwpXEZa0VBDhv8%2FvYkl8ziQVsbT9y%2FDhaqbAYJ1k3Tm8jVRg0uV1PLuJK1kSzFHLP5%2Fs3X09W2e1YpUnB1aA48NTxbnV3LY5i9z8ZfJcY7l9u1w5fsXFxrrDZwaUWcocwfAWo2Kd7qIFtlAt8Ij4ZTbPGcRjaBJfn28AoeZrBbUpkqjkFSST46XOKrEt7%2FiD5FOXW%2FCO0QpF%2BguRitKYSPygSi0EEjz8%2B4OEYmkp8D8%2FrPchLo8ZTiyR8xkAE2oesQsM6DKKrT6rmZDXdeLb9SJVzAr6IuHfE9pDGIwwKCPwAY6pgErEMZErkm0mgt8lKqlBRZ70Ege0zj6tujyihfXZERy5whPpV2ySTbX6TasTco4gf7DVMPIMP%2F9rJ1omZOGt39bw9Gkk3eQ%2BoJ8RQtWO29XBrkBGnQ7%2BMin%2FY9HvIQnKCWWJe7SjGlpVNN7iEdEJXLKRURJA6hF2vZ6IQBQmNzicJnrEI%2B5veECLb%2B97%2FpBXRoZdoWt%2F1QEd%2BcvpkvnMTEL5WmhLYTO&X-Amz-Signature=9f83406f1dd17d0a841e859274135587e701d7b91e84f38bb2842df7110fd451&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VL5IVSNH%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T180922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJGMEQCIC3JQ21SlvjL6y5BApQx2pX1QrfwnXLywrQCYPPgTzTOAiB8xr1VQTGVZrB3jMBdDqXDPgOTZ89xSKfpgws4BWr1AyqIBAiS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnjb9toIGRixk0fO9KtwDM0F8eJfa3uy0zZ%2BqnSt8xDya43jvjQS5gU5jcVv6SuXTSNGdaubqsJBPcrgV2dmawwemvPrpKMVdcdzlhMixUjnQqrkmiQqGb7CwIOjYh4fBkMFokZ22uaETWkIPreGDImtXSDVfwLhin7wbiludKVqh62GZAmSe3e%2BIZ%2B4jh14jeSZRcrZO80Ra2V3RSPKeOj34Amt5lWAxGCvtQ8KcolJLUzl%2BO1J6TAMyYkZ85tZJwWZpyXLuz6T6r7sUTXG29HFs57jv55d8JyQi%2Fv70%2BgXEseCFzgFxWihnu9h%2FxsopYi5iK3Cof67h45ILgKUBKgAc%2Fv%2BI20WfhqRlEA6DMRwpXEZa0VBDhv8%2FvYkl8ziQVsbT9y%2FDhaqbAYJ1k3Tm8jVRg0uV1PLuJK1kSzFHLP5%2Fs3X09W2e1YpUnB1aA48NTxbnV3LY5i9z8ZfJcY7l9u1w5fsXFxrrDZwaUWcocwfAWo2Kd7qIFtlAt8Ij4ZTbPGcRjaBJfn28AoeZrBbUpkqjkFSST46XOKrEt7%2FiD5FOXW%2FCO0QpF%2BguRitKYSPygSi0EEjz8%2B4OEYmkp8D8%2FrPchLo8ZTiyR8xkAE2oesQsM6DKKrT6rmZDXdeLb9SJVzAr6IuHfE9pDGIwwKCPwAY6pgErEMZErkm0mgt8lKqlBRZ70Ege0zj6tujyihfXZERy5whPpV2ySTbX6TasTco4gf7DVMPIMP%2F9rJ1omZOGt39bw9Gkk3eQ%2BoJ8RQtWO29XBrkBGnQ7%2BMin%2FY9HvIQnKCWWJe7SjGlpVNN7iEdEJXLKRURJA6hF2vZ6IQBQmNzicJnrEI%2B5veECLb%2B97%2FpBXRoZdoWt%2F1QEd%2BcvpkvnMTEL5WmhLYTO&X-Amz-Signature=154f7ddda4dfaf83a01e792c2c48d5fe86792df38719db2d2cb5654e07ba1fd4&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
