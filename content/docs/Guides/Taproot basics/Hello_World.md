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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643EAKGDP%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T210841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCID2P3L5QDCn9hwmrWMpoKPUeHFUgIlIwpXhGC3OM%2FDLvAiEAqbRMrXmK4BULkTFoNe4JamywB35O7nmLj0WOR%2FkEAlIqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOrI%2BewHbDUbZJM08CrcA3FAwbOK98oaA%2BLrCGL2eabqc73SpXRlbP8dym4v0k90bPEn%2FXtCntsYW4%2BL9s63jxuR75U2maPZ0McWGL2hbmfPvZDNtTDyvohwfb%2FEwC%2BZvOe1Tt6mlEggR71R%2BmTS3fL8ba4kXMVTFwQHbHTN1m1gLDbiqm7cVz%2FdG2x1m%2FLsu2swZ4fbZS%2Bd6MAHfKnu3vZC7%2FUUR7Ghuw%2Bzm753yRo%2BfFo3UpQmYjw2i%2BLB28IbDdXFtwlU40aHlvJHL9gQk8pm6%2B%2FvJE%2BkmZvj2h32MZjfQkqV7gflmn0IZ1O1LNFOxf2iLSgpYKcq7TVTdIY7O0IiUrF4LtjqKqL31Jj8b3qf5bnbGPFlWJ9lpV06zy%2BXLJB8SQsqBNypUJoZgbgPwr1AqA5bRB2q%2B%2Fi2Bfq2aSHxrbXtb8IoXVlyEzXYjTDvxUxuTsTwq9m9YePZV%2FTtfxIzhRU9aUIBuqX5gHK%2Fr%2BkYVq7GMyUc%2BfCNGIeK51RsUtoruUV7QbWcKpbJM6lXfc2Od%2B0HvLvGGi7%2B9G4fjw951uS3IkCjSZ4zmsShaPvkT1HGN8hYfxdYfzeMfNY1drFCqXLJ3Ia1RxZl8vzOhjnKa%2BW5VL5ZWXBoEBt7LGEAgXppcSBOZI%2Fj5QGeMNOQrMIGOqUBoHmrF8YWBnm%2FxNHFy0mCuIoz6tqjN2CqNzzqack5s9I5XbkcUp2m5O%2F860RNby7HICKIZxEJpO2%2F6Rs7XLfX4fNpB9U7EWS%2FxkO6NnIVLY%2FC%2F4qh4GjYcD72HK1OD77rUvVcYm6Lft7cCUpHNfPBvq8UPtKfwdasSR1MS%2FwTkgtH%2F8eDyH53fk9B0pn3ONGUW3a%2BOESGXXkiTc549Zzf%2BwVEGT1l&X-Amz-Signature=2957f3e3d23d8f92cb1015d5b4970d062aa46085817f2d58732b8056d61c0a29&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643EAKGDP%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T210841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCID2P3L5QDCn9hwmrWMpoKPUeHFUgIlIwpXhGC3OM%2FDLvAiEAqbRMrXmK4BULkTFoNe4JamywB35O7nmLj0WOR%2FkEAlIqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOrI%2BewHbDUbZJM08CrcA3FAwbOK98oaA%2BLrCGL2eabqc73SpXRlbP8dym4v0k90bPEn%2FXtCntsYW4%2BL9s63jxuR75U2maPZ0McWGL2hbmfPvZDNtTDyvohwfb%2FEwC%2BZvOe1Tt6mlEggR71R%2BmTS3fL8ba4kXMVTFwQHbHTN1m1gLDbiqm7cVz%2FdG2x1m%2FLsu2swZ4fbZS%2Bd6MAHfKnu3vZC7%2FUUR7Ghuw%2Bzm753yRo%2BfFo3UpQmYjw2i%2BLB28IbDdXFtwlU40aHlvJHL9gQk8pm6%2B%2FvJE%2BkmZvj2h32MZjfQkqV7gflmn0IZ1O1LNFOxf2iLSgpYKcq7TVTdIY7O0IiUrF4LtjqKqL31Jj8b3qf5bnbGPFlWJ9lpV06zy%2BXLJB8SQsqBNypUJoZgbgPwr1AqA5bRB2q%2B%2Fi2Bfq2aSHxrbXtb8IoXVlyEzXYjTDvxUxuTsTwq9m9YePZV%2FTtfxIzhRU9aUIBuqX5gHK%2Fr%2BkYVq7GMyUc%2BfCNGIeK51RsUtoruUV7QbWcKpbJM6lXfc2Od%2B0HvLvGGi7%2B9G4fjw951uS3IkCjSZ4zmsShaPvkT1HGN8hYfxdYfzeMfNY1drFCqXLJ3Ia1RxZl8vzOhjnKa%2BW5VL5ZWXBoEBt7LGEAgXppcSBOZI%2Fj5QGeMNOQrMIGOqUBoHmrF8YWBnm%2FxNHFy0mCuIoz6tqjN2CqNzzqack5s9I5XbkcUp2m5O%2F860RNby7HICKIZxEJpO2%2F6Rs7XLfX4fNpB9U7EWS%2FxkO6NnIVLY%2FC%2F4qh4GjYcD72HK1OD77rUvVcYm6Lft7cCUpHNfPBvq8UPtKfwdasSR1MS%2FwTkgtH%2F8eDyH53fk9B0pn3ONGUW3a%2BOESGXXkiTc549Zzf%2BwVEGT1l&X-Amz-Signature=32daef40e13e498f913d90ec5ae9bf4e457890b9fb6e50c738e0bae14387250f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
