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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHVP6N5C%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T160946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBKheSsbiboS5UK0uyzBlidpUkNZu8RJzWiDo%2BU%2FdJxmAiBsjNwFhQtFXV7IztItmt27Tgxbnlg76GSPmnZIkzrRzyqIBAi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMr3mBEuV1Mq7HzdOzKtwD2jUTrpb9oo93I14yqy7%2Bj8zsDax5V1WGtcw313JH4aGGlQ8Vej5n0rD%2BCjZ9DTTVysUKhrO3KbsEYebppPIK2xiV%2FiPA%2FebJ0T1%2B4Bcdpw1rgp7ClJUNioQQpBDzCDSvLEA27jmffnC2a3E1hryjKSbx8GE8HHi26xajWr4hWmRhP4ZDqBuIv4ypkrQkDvkfNT90348AldTiAkkW0PILpQzu6sRfmbKg4zNTLxVh%2BNHDIkf36fSVf7lTUn3hgSoywu3B1Wt7wwpnAL%2FcxbUNFnttCZdqlSAaajsFkmZ6%2BSZRqY5ESupkSThaGRY6O%2Bx82r0u7JQWDDOJEUmzoTUDr7D9L%2FhXmX3LUzhWLSslJX5ScRWVO%2BoR1dmM8%2FLlOnbaUdFa5F%2BZtcQinTw0Hp%2FZwSk%2F%2BdkrPZrOFcKzlN0GiarGJgZsTtKh7qJBH4nIZ4vzoNh1BcTR2vsRgVN5Lg0uteP7RPA7sgKiKoCpb1Sct5EjLOYxQ42eGepKh9FmPJ4BU8DHktbdqMxV9VcptRw9We%2BraqjUoj7rsOTRF8FHagdPZWss%2FazMgFx0T226BvCLak8tO4Z%2BVeOxCP5e6WQwLvXK%2FnJeNXqLOMsDqtg5yyo0qNXgRY0o4uxHoUAw09zzwwY6pgHP98oYoR%2FkgOJ1leG4R5QsdBhdLvG5mYDjSCXrtoWiTLP1YYbHsKagxKZgkpXzzsxwjFPgjz9bLqMiPL5O3eyJwA1npxoKC0a3gSPNA4niqWFZRL2FhzqQmu6f6zOm%2FYCL%2FfSOPhV8vogW0zTGXi%2BeSJp6pRQS6VtI3IKOY9S7ygFSKlCUqI4GCpsrcxKmN18I1s0PsFl%2BNcEv5JVJGNjQTpIZG8bl&X-Amz-Signature=e710b5480a2926c3ac470684672446c357a515b52b5c3658d447bef3c7e9811a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHVP6N5C%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T160946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBKheSsbiboS5UK0uyzBlidpUkNZu8RJzWiDo%2BU%2FdJxmAiBsjNwFhQtFXV7IztItmt27Tgxbnlg76GSPmnZIkzrRzyqIBAi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMr3mBEuV1Mq7HzdOzKtwD2jUTrpb9oo93I14yqy7%2Bj8zsDax5V1WGtcw313JH4aGGlQ8Vej5n0rD%2BCjZ9DTTVysUKhrO3KbsEYebppPIK2xiV%2FiPA%2FebJ0T1%2B4Bcdpw1rgp7ClJUNioQQpBDzCDSvLEA27jmffnC2a3E1hryjKSbx8GE8HHi26xajWr4hWmRhP4ZDqBuIv4ypkrQkDvkfNT90348AldTiAkkW0PILpQzu6sRfmbKg4zNTLxVh%2BNHDIkf36fSVf7lTUn3hgSoywu3B1Wt7wwpnAL%2FcxbUNFnttCZdqlSAaajsFkmZ6%2BSZRqY5ESupkSThaGRY6O%2Bx82r0u7JQWDDOJEUmzoTUDr7D9L%2FhXmX3LUzhWLSslJX5ScRWVO%2BoR1dmM8%2FLlOnbaUdFa5F%2BZtcQinTw0Hp%2FZwSk%2F%2BdkrPZrOFcKzlN0GiarGJgZsTtKh7qJBH4nIZ4vzoNh1BcTR2vsRgVN5Lg0uteP7RPA7sgKiKoCpb1Sct5EjLOYxQ42eGepKh9FmPJ4BU8DHktbdqMxV9VcptRw9We%2BraqjUoj7rsOTRF8FHagdPZWss%2FazMgFx0T226BvCLak8tO4Z%2BVeOxCP5e6WQwLvXK%2FnJeNXqLOMsDqtg5yyo0qNXgRY0o4uxHoUAw09zzwwY6pgHP98oYoR%2FkgOJ1leG4R5QsdBhdLvG5mYDjSCXrtoWiTLP1YYbHsKagxKZgkpXzzsxwjFPgjz9bLqMiPL5O3eyJwA1npxoKC0a3gSPNA4niqWFZRL2FhzqQmu6f6zOm%2FYCL%2FfSOPhV8vogW0zTGXi%2BeSJp6pRQS6VtI3IKOY9S7ygFSKlCUqI4GCpsrcxKmN18I1s0PsFl%2BNcEv5JVJGNjQTpIZG8bl&X-Amz-Signature=0684088115afc075466b40d1ec53b74ba34d11fa0a30b4680f17ee2b9be5d271&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
