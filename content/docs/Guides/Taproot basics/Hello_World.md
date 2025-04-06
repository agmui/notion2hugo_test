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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKBDVWWG%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T150654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE%2BobkseErypFV4egw5hjm3g80QoZ%2B9MoNvxsho%2BKkg2AiAHwC%2BBJv4KPSL%2BpIsQOI5Hvwgi7t0L6afVqNQlBjIhXSr%2FAwhFEAAaDDYzNzQyMzE4MzgwNSIMsybFKpOmIe6R08WTKtwDeC7TaMCBkVcWmEN0IUnAzY03us65T1tWXG%2B30jDk2K3D50R8EkbnbY2C64WJRpN%2FWi1zve4hqExQo8yVPlKBctvrBURY8gxrcK1FtiANike0RJk6GKzhIX7A6h7%2Fzs5LzvfZ7fy91hVr16LzCwiHFyJNdqbz3lBm3XcF5GTeN1m8eZMXhXB87a6bpp4yvX1qYz8f6uiaZVg%2FsFRq1W8d%2B78R0T6JKaWxMkYjUFQCry2AkZqKwPnE5L1QkZPOFQ6nd62Mv8KcIMJHy3hT7WHgahDIfCSQPuC7JCVXEMzV4gXuql7fr5OtSZBolaK7%2B806%2F6LDXINIZ%2F6qJB1EVfizukord7yr2FezJScSsQRgD4UtSK8Z0EAj7WnIWarX7Wonf%2Bsq0L15CORfLjyb7t5qHGinaBe8ivJbOLn7BnsdcJu3JROskQl45IoMn2g3dZygp7rYMvxKpgT00RF469b0df1O2EtSncfsQMZIy3F0fE7zbX4s3U0F%2BQhqxSfDCg6pAfQOUaDCAnNt64LGePzgL%2Fh4fLANyJJr0EOiuf2ZYLyRAIMspL%2BlT7jJJh6ZyZOv018KXr6BGZfyQMQF3AhI2T18jI5DdsPhTNFkHce3NlH29DY%2Fz1K4dQRrN%2Bowi87JvwY6pgHMjgO2XCTAbSX7Bc8fboDoSnRQdMZu0Y1BF8FIA1iOVwZbFmu%2FBmp7yPwrn3SHQ19auy%2FA9HVOBWMEoR3ENwaenWhL4kCEXswPFYkGBsyc53bIbfO0oZLPIeGQXfeULVdnfsM76ImURxd%2B8oF9Y3ViNe4d7IA1fjwhXZV%2BIWj8KGeb8QNBcifzQsr8cJxLNYxgpfsAINz5Mf2LenChlN7fH1KAsUEw&X-Amz-Signature=366837ca6ac0800b8390136e32d2b1b3269129ba1861509ffae6b3ec1ee9b8da&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKBDVWWG%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T150654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE%2BobkseErypFV4egw5hjm3g80QoZ%2B9MoNvxsho%2BKkg2AiAHwC%2BBJv4KPSL%2BpIsQOI5Hvwgi7t0L6afVqNQlBjIhXSr%2FAwhFEAAaDDYzNzQyMzE4MzgwNSIMsybFKpOmIe6R08WTKtwDeC7TaMCBkVcWmEN0IUnAzY03us65T1tWXG%2B30jDk2K3D50R8EkbnbY2C64WJRpN%2FWi1zve4hqExQo8yVPlKBctvrBURY8gxrcK1FtiANike0RJk6GKzhIX7A6h7%2Fzs5LzvfZ7fy91hVr16LzCwiHFyJNdqbz3lBm3XcF5GTeN1m8eZMXhXB87a6bpp4yvX1qYz8f6uiaZVg%2FsFRq1W8d%2B78R0T6JKaWxMkYjUFQCry2AkZqKwPnE5L1QkZPOFQ6nd62Mv8KcIMJHy3hT7WHgahDIfCSQPuC7JCVXEMzV4gXuql7fr5OtSZBolaK7%2B806%2F6LDXINIZ%2F6qJB1EVfizukord7yr2FezJScSsQRgD4UtSK8Z0EAj7WnIWarX7Wonf%2Bsq0L15CORfLjyb7t5qHGinaBe8ivJbOLn7BnsdcJu3JROskQl45IoMn2g3dZygp7rYMvxKpgT00RF469b0df1O2EtSncfsQMZIy3F0fE7zbX4s3U0F%2BQhqxSfDCg6pAfQOUaDCAnNt64LGePzgL%2Fh4fLANyJJr0EOiuf2ZYLyRAIMspL%2BlT7jJJh6ZyZOv018KXr6BGZfyQMQF3AhI2T18jI5DdsPhTNFkHce3NlH29DY%2Fz1K4dQRrN%2Bowi87JvwY6pgHMjgO2XCTAbSX7Bc8fboDoSnRQdMZu0Y1BF8FIA1iOVwZbFmu%2FBmp7yPwrn3SHQ19auy%2FA9HVOBWMEoR3ENwaenWhL4kCEXswPFYkGBsyc53bIbfO0oZLPIeGQXfeULVdnfsM76ImURxd%2B8oF9Y3ViNe4d7IA1fjwhXZV%2BIWj8KGeb8QNBcifzQsr8cJxLNYxgpfsAINz5Mf2LenChlN7fH1KAsUEw&X-Amz-Signature=b9c52c8e349c808fee2410a0ae8a1ec027a1e4f45501b64c43f078f9cf12485b&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
