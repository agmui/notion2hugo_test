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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUPL4QCZ%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T200815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQC1XK%2FbW%2FKwo%2F%2Bj1Uug2bkgBPrHUX0KtgmKB3snqckn5gIgR6Bx7%2F%2B3DSBZNRv3tdrSRX6zqy3IiBitOR2yPXFSiAUq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDIFjQ9c1ZGombNbr4ircA1xBA1TC2RoufaGtCxGXM817lk45R82ifSSfoJKHhTgRRHPgi7qZvUmwheU9Ex%2BAtIRFoCpUJNGsZlSRkPc38kWhHIoNmw02GaLpEZZJIGzpB1Uk1%2FDiOLv43AjaJtrT8xCPQuVCUIUOK51moRHl1vH8X05J%2FCOeZqgDYAFzsL%2B9hk2KOg4uiyShnC1UvWM0kg%2BBjwgrYkmbHfWDihsOvYrMriXtBt7utktlehI4Std44ws5xMZj5VHNUrkRxZjnmZr%2FSq2c%2FOf9KD23O811TdwrkcuVUrDCDC%2BbejpZAf9lIV0iQz37Mng1yN3e3yO%2F2YkYU6xXP9ZIFgk8bGEO4JAHct5Mvxj9FCP0hucNkgZcajy5e6hH8eveeXg87GQckUeAzf2Cr0lA%2FYutUYuEEtVdxuMhWSwgJ%2FE7hIEolEMiEexE0PC4IP37UkpF6nM53B3%2FrJRD6ePChRJPro%2B%2BYCLuUehJzMZ12NEhbgvHAbObdEk6b36sA1SMEZdrElfkHo9bWYKgb5AhdLab8uXd1CpIO8FwAi2jh2STIsG6wd4yD9pQO9qVUeYOBUQj6RUZo%2Fu4L7GFCm0uBgIzZziDGxs%2FkkgMTCpXXXrYP6M4POXD2t62g%2BpPCn9OzjLrMIvRk8EGOqUB4IvlHC8JvmSZpzkPbzrEs8Hlvn4imuhzt6nLmzILwd31p6tlDlz9TogzXEJKKcIJQjjEzPBLncKAvo0YXVGSNd6%2BOayO%2F1P3kHCWvwmY3%2FrJDLxPVUjvGXQcjb2PucCnGYt3oodQmhPCKs7HLFG3w2hOjaCYk6o3j%2FNfhjnmG24Zis1M8LQq8deBlDexhZO0P4r1gdfHrFLexMOlRUYEra2elvce&X-Amz-Signature=b82d4ab72b07c13f697ff54b0cadc7879ef81fa89ef70e788f7a2331538f5fb3&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUPL4QCZ%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T200815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQC1XK%2FbW%2FKwo%2F%2Bj1Uug2bkgBPrHUX0KtgmKB3snqckn5gIgR6Bx7%2F%2B3DSBZNRv3tdrSRX6zqy3IiBitOR2yPXFSiAUq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDIFjQ9c1ZGombNbr4ircA1xBA1TC2RoufaGtCxGXM817lk45R82ifSSfoJKHhTgRRHPgi7qZvUmwheU9Ex%2BAtIRFoCpUJNGsZlSRkPc38kWhHIoNmw02GaLpEZZJIGzpB1Uk1%2FDiOLv43AjaJtrT8xCPQuVCUIUOK51moRHl1vH8X05J%2FCOeZqgDYAFzsL%2B9hk2KOg4uiyShnC1UvWM0kg%2BBjwgrYkmbHfWDihsOvYrMriXtBt7utktlehI4Std44ws5xMZj5VHNUrkRxZjnmZr%2FSq2c%2FOf9KD23O811TdwrkcuVUrDCDC%2BbejpZAf9lIV0iQz37Mng1yN3e3yO%2F2YkYU6xXP9ZIFgk8bGEO4JAHct5Mvxj9FCP0hucNkgZcajy5e6hH8eveeXg87GQckUeAzf2Cr0lA%2FYutUYuEEtVdxuMhWSwgJ%2FE7hIEolEMiEexE0PC4IP37UkpF6nM53B3%2FrJRD6ePChRJPro%2B%2BYCLuUehJzMZ12NEhbgvHAbObdEk6b36sA1SMEZdrElfkHo9bWYKgb5AhdLab8uXd1CpIO8FwAi2jh2STIsG6wd4yD9pQO9qVUeYOBUQj6RUZo%2Fu4L7GFCm0uBgIzZziDGxs%2FkkgMTCpXXXrYP6M4POXD2t62g%2BpPCn9OzjLrMIvRk8EGOqUB4IvlHC8JvmSZpzkPbzrEs8Hlvn4imuhzt6nLmzILwd31p6tlDlz9TogzXEJKKcIJQjjEzPBLncKAvo0YXVGSNd6%2BOayO%2F1P3kHCWvwmY3%2FrJDLxPVUjvGXQcjb2PucCnGYt3oodQmhPCKs7HLFG3w2hOjaCYk6o3j%2FNfhjnmG24Zis1M8LQq8deBlDexhZO0P4r1gdfHrFLexMOlRUYEra2elvce&X-Amz-Signature=4f0fffe002a793e05b0ee94c4d7c0d925d2c51aea3ce4c5f9eb7f33f9e19f196&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
