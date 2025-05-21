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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAVS3SPO%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T022749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD2Rvx%2BAutMQ9Pv3sKndEDM8BW9chxMecZWOv9Ab9R%2FBwIgQoKaDpgug8biJ80haFQ%2BEhu45oWK79TfIyUyuDRWkskqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNdMScsEqVYm5k63MCrcAycyj9DSDqID7m3cTB0VLoYbMyQRQ7zBizm2u0FVtg1u2oh9vSDXweAXwCeet9sIp5AaAAMjioEtKxN9PSC1sYfhu2kpewRS4R5Df6IEfTHIOw%2F6Q%2BPmhstNXTbLGpIJLNDAlF3kEBLRHom4A1cVOqixyh2n5E0EtWSGvaSydmS7lj5XyC5u%2BlBNfBox4Zhm%2FMeQTZULAXPVk5EYUntcpYdU%2F3VUORXlahQr%2BouHC2YfzJGKiCyhIYm2FhFh1Sllz8eGI1zNgKO1%2B1gglUXEhf2T0GCVfHUTn%2BxkbgdN8xIXLAC1tYE4XsKtq9q3tGQXX88GGBjCZOTFPtmiXLS2O6F3bZHQ7R7Z%2FYcCv9XV%2Fc7x2NjlP2V1X5u2E681Bbu8YTxZR3BFNX2ywGEeD%2FtgGLmehsIUjsci%2FCL54f%2Bp%2B1sAQy5SQdjhfdfwFXg0t1F1w7oO%2F1brnzlYUuLqEsoAe91B1xXII8Nm9M6PtrEwvJ0c%2FqIoYK%2FAAgcYwJ0wviAui2YpOxObXXdKxyi5iGn3%2BJpkJAlN0beRLMH5fOXPr5ajWKKopsibPvex%2F6p2BaesH1OFYpg6EgOwSWhK9TeoWBHI%2FjbBUveTtTIowEoJeIzEX%2BRqHWtGVFI%2FHVrHMMWitMEGOqUBXRkH6UK%2FmGDZkOLhxChBfbD%2FodQ5eLa1k96sud7LoXu867VoIyIYCj3HHuYf5OEMo45H0zlLuK0qNw557kQz0jeIhom%2BBjDSVf18i8PSNi23BGDYf0iU%2F4U9a03khzMtpE7iVdA0aR6V9M6vJsnZ6z6iiW85RU3%2FO40Sa9T5%2FZ1aWDi5Y9HY%2FNsgrat17NJZzTvxccgniXOTAecKX1CbX0EbyqlE&X-Amz-Signature=ba0ba0377e868e4854a180fa50231cfab60adbb70370099b07d6b382db4e3005&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAVS3SPO%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T022749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD2Rvx%2BAutMQ9Pv3sKndEDM8BW9chxMecZWOv9Ab9R%2FBwIgQoKaDpgug8biJ80haFQ%2BEhu45oWK79TfIyUyuDRWkskqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNdMScsEqVYm5k63MCrcAycyj9DSDqID7m3cTB0VLoYbMyQRQ7zBizm2u0FVtg1u2oh9vSDXweAXwCeet9sIp5AaAAMjioEtKxN9PSC1sYfhu2kpewRS4R5Df6IEfTHIOw%2F6Q%2BPmhstNXTbLGpIJLNDAlF3kEBLRHom4A1cVOqixyh2n5E0EtWSGvaSydmS7lj5XyC5u%2BlBNfBox4Zhm%2FMeQTZULAXPVk5EYUntcpYdU%2F3VUORXlahQr%2BouHC2YfzJGKiCyhIYm2FhFh1Sllz8eGI1zNgKO1%2B1gglUXEhf2T0GCVfHUTn%2BxkbgdN8xIXLAC1tYE4XsKtq9q3tGQXX88GGBjCZOTFPtmiXLS2O6F3bZHQ7R7Z%2FYcCv9XV%2Fc7x2NjlP2V1X5u2E681Bbu8YTxZR3BFNX2ywGEeD%2FtgGLmehsIUjsci%2FCL54f%2Bp%2B1sAQy5SQdjhfdfwFXg0t1F1w7oO%2F1brnzlYUuLqEsoAe91B1xXII8Nm9M6PtrEwvJ0c%2FqIoYK%2FAAgcYwJ0wviAui2YpOxObXXdKxyi5iGn3%2BJpkJAlN0beRLMH5fOXPr5ajWKKopsibPvex%2F6p2BaesH1OFYpg6EgOwSWhK9TeoWBHI%2FjbBUveTtTIowEoJeIzEX%2BRqHWtGVFI%2FHVrHMMWitMEGOqUBXRkH6UK%2FmGDZkOLhxChBfbD%2FodQ5eLa1k96sud7LoXu867VoIyIYCj3HHuYf5OEMo45H0zlLuK0qNw557kQz0jeIhom%2BBjDSVf18i8PSNi23BGDYf0iU%2F4U9a03khzMtpE7iVdA0aR6V9M6vJsnZ6z6iiW85RU3%2FO40Sa9T5%2FZ1aWDi5Y9HY%2FNsgrat17NJZzTvxccgniXOTAecKX1CbX0EbyqlE&X-Amz-Signature=0b8a91ec165061afa818840ef21a16c8822b29126c7ef12294e8b0aaf37831ec&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
