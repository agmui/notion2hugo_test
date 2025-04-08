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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666S6DKRF3%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T110720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAjlL0Gnc1KJkRDCYF4MZJbEwX%2FyEjCIBUYLFPyZGSkOAiBqJzzMmqXB2F1bDCLkFEJpVpPBQRHJh3u3RNthXA%2BaWCr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMVqjmvltvNed7KMgdKtwDIb14fLWzX7t3GXneZOBWrAN80w4SSW2fsJzUO3KRfHqaHX%2BQVdIpURkXPA5I1SFYhLKkJ3nXqLgOhpLfY%2BmtcaLGAWE464AFY5zaMQDJwvWG9KhXXZAaZywDUsA4qfFLgInxQplbnqmLw8FK7brjN5N%2Boo%2F6%2B9nOBNrg1ICAd9PLywLA7S2%2BTgov%2BGirFdVHkBnXq%2BKdZbZdHhXXnUJYP2iT7%2BeRSLorT8nPvEqMk1De%2F%2FIACWGp48hNaKs8SZBPN9kecFJ%2BRnGdQo51dxDGzKOc7sHfAcsqa0tul7iDkwRLtEt9MMAuyBcz4dtQkXJ2%2BAReBaKZDJIPJ0oJPc%2B6WoRAaY3tzGYsh9jUknXJxu%2Fu0TmiCRtQjxw3rUk%2ByyPkn%2FVHLexGuISZVYLTHU2Jvy3%2FirmP86Zd4Ls1EzoK%2BjBYEObyqPQwldNHZlduG%2FWiV28uHIC6DT%2F18PPMnaAsCdb4jAlGSCa%2FczSBce7e72ad631yt7v7f2efk%2FwLi%2BjJ4lEEPBRdmyBcVggMQ7%2FS%2B5uoNR%2F%2Ba%2Ba9fzoVBNkhgnTY%2BvUen3JV1YJWAplV0fDGDSdBFEbou1J%2BchagegTpRFoEaIuvcz1N7FCa8SedB4WyEyuKhnBv7rJaNhIw%2FvDTvwY6pgGHcnYXkx5fGV9PHQDhPKF65B978vKpkmVjY6d%2BoD1NF0rUvoGDBPxPf7zF8ZMtLsfxLheiXev14RvGccGkaLXF4CRXEtkc18riV0hqj0GX1wEE0ZhVjpdA5LfshdS9cq7pkb9vMw%2BM208WofnucNhzfBVKinbcxbhgTeEBPBu%2Bxb34zDEDKTKldTD%2Fk6sNB2557w0unW1ggLDseizz2f%2Bv3soRSTma&X-Amz-Signature=aeb05f3b60f0b20fa152e79be02c3c0bc8f8395ac82b77b0eeab4dcc9dfa1096&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666S6DKRF3%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T110720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAjlL0Gnc1KJkRDCYF4MZJbEwX%2FyEjCIBUYLFPyZGSkOAiBqJzzMmqXB2F1bDCLkFEJpVpPBQRHJh3u3RNthXA%2BaWCr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMVqjmvltvNed7KMgdKtwDIb14fLWzX7t3GXneZOBWrAN80w4SSW2fsJzUO3KRfHqaHX%2BQVdIpURkXPA5I1SFYhLKkJ3nXqLgOhpLfY%2BmtcaLGAWE464AFY5zaMQDJwvWG9KhXXZAaZywDUsA4qfFLgInxQplbnqmLw8FK7brjN5N%2Boo%2F6%2B9nOBNrg1ICAd9PLywLA7S2%2BTgov%2BGirFdVHkBnXq%2BKdZbZdHhXXnUJYP2iT7%2BeRSLorT8nPvEqMk1De%2F%2FIACWGp48hNaKs8SZBPN9kecFJ%2BRnGdQo51dxDGzKOc7sHfAcsqa0tul7iDkwRLtEt9MMAuyBcz4dtQkXJ2%2BAReBaKZDJIPJ0oJPc%2B6WoRAaY3tzGYsh9jUknXJxu%2Fu0TmiCRtQjxw3rUk%2ByyPkn%2FVHLexGuISZVYLTHU2Jvy3%2FirmP86Zd4Ls1EzoK%2BjBYEObyqPQwldNHZlduG%2FWiV28uHIC6DT%2F18PPMnaAsCdb4jAlGSCa%2FczSBce7e72ad631yt7v7f2efk%2FwLi%2BjJ4lEEPBRdmyBcVggMQ7%2FS%2B5uoNR%2F%2Ba%2Ba9fzoVBNkhgnTY%2BvUen3JV1YJWAplV0fDGDSdBFEbou1J%2BchagegTpRFoEaIuvcz1N7FCa8SedB4WyEyuKhnBv7rJaNhIw%2FvDTvwY6pgGHcnYXkx5fGV9PHQDhPKF65B978vKpkmVjY6d%2BoD1NF0rUvoGDBPxPf7zF8ZMtLsfxLheiXev14RvGccGkaLXF4CRXEtkc18riV0hqj0GX1wEE0ZhVjpdA5LfshdS9cq7pkb9vMw%2BM208WofnucNhzfBVKinbcxbhgTeEBPBu%2Bxb34zDEDKTKldTD%2Fk6sNB2557w0unW1ggLDseizz2f%2Bv3soRSTma&X-Amz-Signature=f58a61eacd3dbe8920d6fe95c8e90b4ee800cb14db7115a3d9607acc499c21c9&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
