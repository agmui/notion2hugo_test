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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZ3I7E2C%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T121500Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIATumPDxy7%2FiURptv7acxwPR2r5P9LdLvckOLFK3vC7lAiEA0FBD559oBi72RgLqi%2FM%2FDKfomsakzJgOKYkN64knvmIqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDie1SSR5UK7uwwPjCrcAxEWEq6e45oWsYwrwYA4rsR1ZXVapGbuh68GrEppQFdrgzU2QGFhlapokKEVT%2Ffmc%2B2xUssfNC0xImbeZYtMPl%2FYBhMYu0ywiiv2aPsfumc5MzMl00qYIm5mhorr1scVpfpPIWIOYnTpInEJ%2F3SBr2y6oDzTMs410PdDpSAxo9MvhkNOLTmIpHfUbg8ClZoftxIjWrPJ2hrcH5AQ%2Facbk%2FM1ko9zdrbjIdqx2%2Fq5H18s1yXCNCjAnIhqlIBU9ju6y5AeZgNmCUrRC0GvD6aQb4ClXve3GnJ9NJPq8SoxTRmeP1adJdVIg20SAwJj1garfAwXehtrYUabJQnGbIFim%2BtxDsri%2BrWO5fLigVziRwyISc%2B%2BU2LlqqQ0V8uMYoEngrX8lhRZ1lyUuEEjtQo6XPe6p2CzEVXc3lXVkIztVAhTd03MwldG4CNy36%2B8thARzU1ghuoNu73UI%2Bt4KcrobdczuDjI%2FFjvFnC4mDvS7xnPL405tEK7edsiwPCTWw9GJb0S0L68hGguu%2FrgOXYJocz7tWEKMnXRBaeS8Pq6PUI0bl7Yrs4xuizaiz7UR5Mqy61JXobZtQQRnzv5hP8kEnnq%2BLXnuBk%2BgzNmrZ7WpeQlVNA57xJXlskN7WKwMPOfo8AGOqUBL1nMkQkVhzTm8lS1%2FLl5tIVJYKh0u8z6c0WTzBWDZL104F1e7ZHNODsSTvaXkBPP46uy1%2BkD5iXOFPmepdGFmGcbDtwEdQdelWxAu9y1BfqXqF6pLDGbDK5D3pKDpD5A5uRoAv6pSGj8SN6AstD1jsOjU81Cj5i%2F97MxIA67awQOac%2FmjVU31t0OrdO5YEzwoDWc8dBGd7UjGzyrgWlR7mKHnHID&X-Amz-Signature=c2c16ccacba2bec2c1e7f163d84adf534eb17535d64c37f9055ca913ce99c868&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZ3I7E2C%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T121500Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIATumPDxy7%2FiURptv7acxwPR2r5P9LdLvckOLFK3vC7lAiEA0FBD559oBi72RgLqi%2FM%2FDKfomsakzJgOKYkN64knvmIqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDie1SSR5UK7uwwPjCrcAxEWEq6e45oWsYwrwYA4rsR1ZXVapGbuh68GrEppQFdrgzU2QGFhlapokKEVT%2Ffmc%2B2xUssfNC0xImbeZYtMPl%2FYBhMYu0ywiiv2aPsfumc5MzMl00qYIm5mhorr1scVpfpPIWIOYnTpInEJ%2F3SBr2y6oDzTMs410PdDpSAxo9MvhkNOLTmIpHfUbg8ClZoftxIjWrPJ2hrcH5AQ%2Facbk%2FM1ko9zdrbjIdqx2%2Fq5H18s1yXCNCjAnIhqlIBU9ju6y5AeZgNmCUrRC0GvD6aQb4ClXve3GnJ9NJPq8SoxTRmeP1adJdVIg20SAwJj1garfAwXehtrYUabJQnGbIFim%2BtxDsri%2BrWO5fLigVziRwyISc%2B%2BU2LlqqQ0V8uMYoEngrX8lhRZ1lyUuEEjtQo6XPe6p2CzEVXc3lXVkIztVAhTd03MwldG4CNy36%2B8thARzU1ghuoNu73UI%2Bt4KcrobdczuDjI%2FFjvFnC4mDvS7xnPL405tEK7edsiwPCTWw9GJb0S0L68hGguu%2FrgOXYJocz7tWEKMnXRBaeS8Pq6PUI0bl7Yrs4xuizaiz7UR5Mqy61JXobZtQQRnzv5hP8kEnnq%2BLXnuBk%2BgzNmrZ7WpeQlVNA57xJXlskN7WKwMPOfo8AGOqUBL1nMkQkVhzTm8lS1%2FLl5tIVJYKh0u8z6c0WTzBWDZL104F1e7ZHNODsSTvaXkBPP46uy1%2BkD5iXOFPmepdGFmGcbDtwEdQdelWxAu9y1BfqXqF6pLDGbDK5D3pKDpD5A5uRoAv6pSGj8SN6AstD1jsOjU81Cj5i%2F97MxIA67awQOac%2FmjVU31t0OrdO5YEzwoDWc8dBGd7UjGzyrgWlR7mKHnHID&X-Amz-Signature=52fb278bf1a90eaeb978d7a9333c86187ddfc27f14fa53c82f145ae53ecc14d8&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
