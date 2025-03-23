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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HLWBVMR%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T210318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDg02jFHqFtqPK0T7dLNTNSJBYcQPWS3PppXBx9KsanpQIgMpy8Zfm1w90bY4PSkq8tfVk4H7Z%2FrT%2BOS7%2BtdOYJ4REqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGcivz8QNfvuMkS9nircA0yxHzju%2BnCRhzU9P6LtrGCWmVfdVwV9fPa6Dyh1JB4p9ifOEPdcuKdTgBztew%2BWTtxZZUxms27Zs2NkAt7lvCMu2fs8D4PuLW%2B6doOzJStYn6Rueqohou15EKjCuHSQCUMa8uHT%2BLW4Rwi%2FZ4rbrZ0YQXtrZo4ySvs4Vau9sJ64Mt9cBPyjIQa95kHq7AxUtzeVyRj%2Bjf1x5EynMUR47%2Bvf6JX%2B5i5m%2FxEr3Cc7qITIY4FV4o93wgSZyaCPbvlc%2BQlexz5vWnBhJAUrfoVAQa4tGHVnbtPeITVXLZHCQ%2BErCoVDblENmtuUShDPef1jjAH2MA%2FU5GbhGHx0k6Llda05Ce9Z3Ha6kGRYtVrAk2UrYbvs7haM%2BXkUAqjwpk52pzJ5MaQkKYwLAJNWkPUHqIgHfKXcecUpAdFMBTKo2idzq6FYHL7lK44aiP208Lc566Wsw8MTBUYpZeCPd587C0nGJbSVSLViP7d0GDcAjkjPww7rdH8LZVQHNFBcffNWd9dXCTMu8bk53eDzPWzIcoB61aEwygiAe6ZH9oGC6hE6f7lQUmigZ8GFwkVywlEvPtVkFlpPgkjIaN6IpL7cqF1k%2BZHOP9RWJK25a7cmz3hfRm%2FN7YN%2BD14EmTfSMM%2FKgb8GOqUB6Dk5cRda%2BMHU7Vr75AQYWxPDjkHuGNnec7ZWndKyKpfpchurUmk4N03xDrgvL%2BTS1%2FbakoXFSUdQclDVC9Yk8ris5GDoTSXdNTJOiiht6uldlsx1Hkcb3QABm6U0kmR3ePNWAahRpsUyMFpCDeKY9ugJSDkcevFnqu30oxSd2TLUJgxgoFSHQHGvcclEkDX9zA53ru0mooVYrkBxXOfQciNn319A&X-Amz-Signature=8a1c405ba87bc12d318e6a69ef98a055e2c83b11ccb1ef6bfed3d4ab892d0959&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HLWBVMR%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T210318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDg02jFHqFtqPK0T7dLNTNSJBYcQPWS3PppXBx9KsanpQIgMpy8Zfm1w90bY4PSkq8tfVk4H7Z%2FrT%2BOS7%2BtdOYJ4REqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGcivz8QNfvuMkS9nircA0yxHzju%2BnCRhzU9P6LtrGCWmVfdVwV9fPa6Dyh1JB4p9ifOEPdcuKdTgBztew%2BWTtxZZUxms27Zs2NkAt7lvCMu2fs8D4PuLW%2B6doOzJStYn6Rueqohou15EKjCuHSQCUMa8uHT%2BLW4Rwi%2FZ4rbrZ0YQXtrZo4ySvs4Vau9sJ64Mt9cBPyjIQa95kHq7AxUtzeVyRj%2Bjf1x5EynMUR47%2Bvf6JX%2B5i5m%2FxEr3Cc7qITIY4FV4o93wgSZyaCPbvlc%2BQlexz5vWnBhJAUrfoVAQa4tGHVnbtPeITVXLZHCQ%2BErCoVDblENmtuUShDPef1jjAH2MA%2FU5GbhGHx0k6Llda05Ce9Z3Ha6kGRYtVrAk2UrYbvs7haM%2BXkUAqjwpk52pzJ5MaQkKYwLAJNWkPUHqIgHfKXcecUpAdFMBTKo2idzq6FYHL7lK44aiP208Lc566Wsw8MTBUYpZeCPd587C0nGJbSVSLViP7d0GDcAjkjPww7rdH8LZVQHNFBcffNWd9dXCTMu8bk53eDzPWzIcoB61aEwygiAe6ZH9oGC6hE6f7lQUmigZ8GFwkVywlEvPtVkFlpPgkjIaN6IpL7cqF1k%2BZHOP9RWJK25a7cmz3hfRm%2FN7YN%2BD14EmTfSMM%2FKgb8GOqUB6Dk5cRda%2BMHU7Vr75AQYWxPDjkHuGNnec7ZWndKyKpfpchurUmk4N03xDrgvL%2BTS1%2FbakoXFSUdQclDVC9Yk8ris5GDoTSXdNTJOiiht6uldlsx1Hkcb3QABm6U0kmR3ePNWAahRpsUyMFpCDeKY9ugJSDkcevFnqu30oxSd2TLUJgxgoFSHQHGvcclEkDX9zA53ru0mooVYrkBxXOfQciNn319A&X-Amz-Signature=aaafaeac9ca36a17654c66755f362ac1d56739aec7920396d9600fbe42b5b1c8&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
