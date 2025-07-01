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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TW5XJA5V%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T200945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDqaCJCATtyJjr8Ify%2F6oZAFvJ8qy9Skhpn%2BEp0iwL9UAiEA9A139czAZUGxdA7YOhGlj6h1fQX21yK8kj3xhG0NtgoqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD3HH89h3p%2Fl9uHhlCrcAxBbVGdqToDx%2BMhKs3Io4eLuUCtgfzF5%2BtCY3HlMi1fQ6FmxSeiALa7gWrLzeJcZm8m6kF5hnn5Qd4wuODHApE78THL66KDhfAuf6d3CBvkr5tIHT5DrP1%2BBhck5h4Hk5NEalebdcFZV5%2B4SoNSNRY8yBN7KYZfWq82mpBShqaUW53hmYHTT7LgiwCiddpM4nmmUFQwbov1Gy9sB%2B1LZnVbcLHNbYWkG%2B7RL%2B6JmcL9fNVROctVzI36hZhKYyMkasfJlhb47pysJa1Ag9QPa60hMYNo8khsAHebKWkak%2BZdEkb%2FAwyGxAJ2F8dNNpkHxh939T1w%2FML9Kr5SlRG4Az3KTfrbSX5EDey94U0e82ITozLeEz9YAJ8OciugKEOSed9nbIBl9jLRawPXjVzxdiBxfNDaBNJ5UdvRci7Dwt5uxvuBrT70AYsmSn2RKUS6wjZx9mIszC%2B0Nk%2BxKbxqVv7SxgVWrL4wlnUmn7VOuj4oS027PT%2FBbeyadW5FaHGeF65ZmXMybh%2FmRaAngF2YWRzNlWMobvGxF3AAHK6nJlMwDeSStQb%2BrzfJKsQEvO8mYJoIJPPA%2FRMDN70w1%2F4cTBI%2F6JHOkNpNUBCUl2sbVZS4KHkPHIhd6qd%2BlbisUMNHEkMMGOqUBv%2FtWgbx4guYqY49g2o%2BJaSvyDJ%2F3%2BFKTXNV73CIxakAymLt0Qpd0JE5otV4g9KK2CcJagoExrLzgXhIfNCN6h6j1FMQx3U%2BElpJe4AluQavbccSu5cKbqLAFQAIFr%2FEIJBj0mcUfckU8xVAWE42%2Bjh%2Bkh9HpcQM88GqtFWl1YwV3Ff4onkGYWeHq4nYUQkVDA0fb%2BdsccPl5ahT8JyvALuQ7YCEg&X-Amz-Signature=af5383be6173cc3efce5f7e6cbacab47b56472fff02f496095cdde8ae93d11ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TW5XJA5V%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T200945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDqaCJCATtyJjr8Ify%2F6oZAFvJ8qy9Skhpn%2BEp0iwL9UAiEA9A139czAZUGxdA7YOhGlj6h1fQX21yK8kj3xhG0NtgoqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD3HH89h3p%2Fl9uHhlCrcAxBbVGdqToDx%2BMhKs3Io4eLuUCtgfzF5%2BtCY3HlMi1fQ6FmxSeiALa7gWrLzeJcZm8m6kF5hnn5Qd4wuODHApE78THL66KDhfAuf6d3CBvkr5tIHT5DrP1%2BBhck5h4Hk5NEalebdcFZV5%2B4SoNSNRY8yBN7KYZfWq82mpBShqaUW53hmYHTT7LgiwCiddpM4nmmUFQwbov1Gy9sB%2B1LZnVbcLHNbYWkG%2B7RL%2B6JmcL9fNVROctVzI36hZhKYyMkasfJlhb47pysJa1Ag9QPa60hMYNo8khsAHebKWkak%2BZdEkb%2FAwyGxAJ2F8dNNpkHxh939T1w%2FML9Kr5SlRG4Az3KTfrbSX5EDey94U0e82ITozLeEz9YAJ8OciugKEOSed9nbIBl9jLRawPXjVzxdiBxfNDaBNJ5UdvRci7Dwt5uxvuBrT70AYsmSn2RKUS6wjZx9mIszC%2B0Nk%2BxKbxqVv7SxgVWrL4wlnUmn7VOuj4oS027PT%2FBbeyadW5FaHGeF65ZmXMybh%2FmRaAngF2YWRzNlWMobvGxF3AAHK6nJlMwDeSStQb%2BrzfJKsQEvO8mYJoIJPPA%2FRMDN70w1%2F4cTBI%2F6JHOkNpNUBCUl2sbVZS4KHkPHIhd6qd%2BlbisUMNHEkMMGOqUBv%2FtWgbx4guYqY49g2o%2BJaSvyDJ%2F3%2BFKTXNV73CIxakAymLt0Qpd0JE5otV4g9KK2CcJagoExrLzgXhIfNCN6h6j1FMQx3U%2BElpJe4AluQavbccSu5cKbqLAFQAIFr%2FEIJBj0mcUfckU8xVAWE42%2Bjh%2Bkh9HpcQM88GqtFWl1YwV3Ff4onkGYWeHq4nYUQkVDA0fb%2BdsccPl5ahT8JyvALuQ7YCEg&X-Amz-Signature=c4ef2c6d9a52069a145808a1a2b5d1c64c710b1704296eb4621106a74f8359e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
