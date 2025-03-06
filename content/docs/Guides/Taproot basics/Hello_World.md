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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLLSW5VU%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T081107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCAuvsDm0AHyAw1m7w6Ev%2Fpi39SWtt14brKyXucAhtd4wIhAM4nGIjj4r5kzFlejRN2rdCeJNq4YikEzL%2BlBuDz5CihKv8DCCgQABoMNjM3NDIzMTgzODA1Igz1KbM64NtX1wxoonMq3AOE%2F5hoIw2Ou2zpdRIWEEZyKyOvUE14OSB06hTC%2BFinQTWm%2B8J5lf1nY8dNRFK%2F8F6MaSPy6mJraDpBpHA%2FEdAAZeyOhjpfWgrRZ2A9Ksscvyl3JOjm9g%2FOxTZLjThj%2F0%2BwDvlg82bmjLAbOgUECvmr3qISRoXjzFGnJSWiXXDkUI3%2FVkUjRzLnHk%2F8d%2B8dQ7WUdABi6rzHw9UygbczuHQV%2BlZhWg2UBtkyGntk9cy3WGPY4HdLfQFlno9UTwp4agAy%2FPuDEhS3yCDX%2F3fAzyVUMJ7jFWIsDLeRclvNUp5QofU3ydIQW2Pqm27xJjId%2BBry5yzcN1%2F2Hu%2FXDu3%2FiB%2BPw%2FMYLVvGyuxGyKRmQIpNPpq8bg3MHS5p2Dz5W24d5mAzqJIGa%2BikUoougAz%2FINDKOa8YWgfk6f3%2ByuTamCySTrdSFn09R1Qw6ACoRcE9UbX5CR92DQ%2BEddKZ%2BxJTNEdfT6Zk%2B6dTMh8D4v8H0WEkCZoz21cr2N4z%2FtuEmyIf5iC83RgCAV6HQBuMYVIdzi5%2FKb%2FbVQ3boUYPZloAyUF9R5taYDBl1LV3Zz8ARFFKySkOyxuX%2BirTj4mEMVhbtqWqm4XkxlW7m8JFrYmzNcAqzILI9W49iRjjE1mvAjD%2BlqW%2BBjqkAZDRZIgA1PCJMh6cQuR39ZNhVzm9wlrJxFCgkIMu7TJx3ct8XtJre2zBvXyT%2BzDNKPTJ9k%2FNJvcPWZ2teJtI2BCbJcTKsKcRjWgcKGmE6fWf8VvGlX3GUDfX1t3S4VLVIW3eR4sO38N85AAV8P2MU2V9S%2Fv%2BGkV28SzevocDRMjOlll6M6pyZC6Pu0TU2yediWmkovtSYeA0hJf138p6UJBGOs%2Bt&X-Amz-Signature=7f1e9c4440931766c4bb2951ea7645a75673fb3b7d6a2a499faf34df30065677&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLLSW5VU%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T081107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCAuvsDm0AHyAw1m7w6Ev%2Fpi39SWtt14brKyXucAhtd4wIhAM4nGIjj4r5kzFlejRN2rdCeJNq4YikEzL%2BlBuDz5CihKv8DCCgQABoMNjM3NDIzMTgzODA1Igz1KbM64NtX1wxoonMq3AOE%2F5hoIw2Ou2zpdRIWEEZyKyOvUE14OSB06hTC%2BFinQTWm%2B8J5lf1nY8dNRFK%2F8F6MaSPy6mJraDpBpHA%2FEdAAZeyOhjpfWgrRZ2A9Ksscvyl3JOjm9g%2FOxTZLjThj%2F0%2BwDvlg82bmjLAbOgUECvmr3qISRoXjzFGnJSWiXXDkUI3%2FVkUjRzLnHk%2F8d%2B8dQ7WUdABi6rzHw9UygbczuHQV%2BlZhWg2UBtkyGntk9cy3WGPY4HdLfQFlno9UTwp4agAy%2FPuDEhS3yCDX%2F3fAzyVUMJ7jFWIsDLeRclvNUp5QofU3ydIQW2Pqm27xJjId%2BBry5yzcN1%2F2Hu%2FXDu3%2FiB%2BPw%2FMYLVvGyuxGyKRmQIpNPpq8bg3MHS5p2Dz5W24d5mAzqJIGa%2BikUoougAz%2FINDKOa8YWgfk6f3%2ByuTamCySTrdSFn09R1Qw6ACoRcE9UbX5CR92DQ%2BEddKZ%2BxJTNEdfT6Zk%2B6dTMh8D4v8H0WEkCZoz21cr2N4z%2FtuEmyIf5iC83RgCAV6HQBuMYVIdzi5%2FKb%2FbVQ3boUYPZloAyUF9R5taYDBl1LV3Zz8ARFFKySkOyxuX%2BirTj4mEMVhbtqWqm4XkxlW7m8JFrYmzNcAqzILI9W49iRjjE1mvAjD%2BlqW%2BBjqkAZDRZIgA1PCJMh6cQuR39ZNhVzm9wlrJxFCgkIMu7TJx3ct8XtJre2zBvXyT%2BzDNKPTJ9k%2FNJvcPWZ2teJtI2BCbJcTKsKcRjWgcKGmE6fWf8VvGlX3GUDfX1t3S4VLVIW3eR4sO38N85AAV8P2MU2V9S%2Fv%2BGkV28SzevocDRMjOlll6M6pyZC6Pu0TU2yediWmkovtSYeA0hJf138p6UJBGOs%2Bt&X-Amz-Signature=f78d1856ef2b253557851311bb115746952bafb58653688c4fdd324756c41cd9&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
