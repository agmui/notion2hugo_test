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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEAZRZ54%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T040936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCIkPTIX3sbtCdAyAFBnl3kSHQBB6jTgTskSnZJKPtANQIhALjYmIeo1qekIYB5%2Bl8oxXPQmH1pOL6k13ZyYTRt7HoMKv8DCCQQABoMNjM3NDIzMTgzODA1IgwFe7EOgo0CBTTfPioq3AP91D9PMe%2FaqmSEvAfUiNDoSAHJ%2FuKR%2FyvDCkt8%2Fy7EscdubbkM1dfHxKvMYVyY7aNXzRt%2Br8IZAj6ow71WmDVyT438mHzEdRHArADYhdvOaeo00O%2ByvpHmvke1FIvjpHh2LDVMHEVUu4Mt0iH58WEgAm%2BdXiZ7zH8uZOf8VQFZfm2iZ8TjpzCPrPp7oc8jIB0K2ntn7D9LoFMdwNus1o3WWhxE4B08%2F%2BQtNHymsRpQBv4CCI5569L5GQ3NOLClJSH85IylXZnr3J3hTO1eoLjwe9Q3A%2FWC54Xzh6oix%2BgvpXpLw555pAr5JSWNpe8hN0AwSRW6xDh%2FgGdXbN%2FcyAQvTeNrsILOnu7l11fi8Kmip8RctsUQLHEep%2FUty2Oa4TxyPKWoPQMGVWAG0Bx3DA2VIGGlqn4MTISJQtyDIZY%2B1kBYOYhenQQQENBY%2Fegdbpo1QEjaLw07tyOMtZnr06UnK5re7DDIXiEQiRxCm5N8oyDjrwZjYx8Dbv%2Fs7nfyHIG%2FaBdLY7Zwgm%2Bo6zv141JNye%2B5ZNfVLkPhnnY6nri%2FAXqVOaYzakeTXCI%2BTRzQUI9gt5NxTfvEXr2eXmC67MCD8PowaLxL7%2FjPwXVONe%2FnvtyQytc934qT4Ugc4DDE6rq9BjqkASXWjfEq9czEzjXlrmNiCjNriqzhhqBG6HBmS%2BLPL%2FbEb%2F3xEaEAVIhKKwqsPCm%2FZ5uavIbJdEKte1ADlRS6Uc%2BGUJn1uqw2jnuk8az9Iw4DJtlEZpcB95CDYoZNT%2FUJxWLVIKE9n4YkpH9nCk2WxT3kMKhVYsso5OzYgY0iamyW7RcKPXFwgD2PXQ5DO%2BbwnAPMguDGxEXKEXx%2BRY%2FSfhDfuELK&X-Amz-Signature=1cd884a8ce6c8088acc3d660ff4cea360b77b01a8062596454dbf666daa95be7&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEAZRZ54%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T040936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCIkPTIX3sbtCdAyAFBnl3kSHQBB6jTgTskSnZJKPtANQIhALjYmIeo1qekIYB5%2Bl8oxXPQmH1pOL6k13ZyYTRt7HoMKv8DCCQQABoMNjM3NDIzMTgzODA1IgwFe7EOgo0CBTTfPioq3AP91D9PMe%2FaqmSEvAfUiNDoSAHJ%2FuKR%2FyvDCkt8%2Fy7EscdubbkM1dfHxKvMYVyY7aNXzRt%2Br8IZAj6ow71WmDVyT438mHzEdRHArADYhdvOaeo00O%2ByvpHmvke1FIvjpHh2LDVMHEVUu4Mt0iH58WEgAm%2BdXiZ7zH8uZOf8VQFZfm2iZ8TjpzCPrPp7oc8jIB0K2ntn7D9LoFMdwNus1o3WWhxE4B08%2F%2BQtNHymsRpQBv4CCI5569L5GQ3NOLClJSH85IylXZnr3J3hTO1eoLjwe9Q3A%2FWC54Xzh6oix%2BgvpXpLw555pAr5JSWNpe8hN0AwSRW6xDh%2FgGdXbN%2FcyAQvTeNrsILOnu7l11fi8Kmip8RctsUQLHEep%2FUty2Oa4TxyPKWoPQMGVWAG0Bx3DA2VIGGlqn4MTISJQtyDIZY%2B1kBYOYhenQQQENBY%2Fegdbpo1QEjaLw07tyOMtZnr06UnK5re7DDIXiEQiRxCm5N8oyDjrwZjYx8Dbv%2Fs7nfyHIG%2FaBdLY7Zwgm%2Bo6zv141JNye%2B5ZNfVLkPhnnY6nri%2FAXqVOaYzakeTXCI%2BTRzQUI9gt5NxTfvEXr2eXmC67MCD8PowaLxL7%2FjPwXVONe%2FnvtyQytc934qT4Ugc4DDE6rq9BjqkASXWjfEq9czEzjXlrmNiCjNriqzhhqBG6HBmS%2BLPL%2FbEb%2F3xEaEAVIhKKwqsPCm%2FZ5uavIbJdEKte1ADlRS6Uc%2BGUJn1uqw2jnuk8az9Iw4DJtlEZpcB95CDYoZNT%2FUJxWLVIKE9n4YkpH9nCk2WxT3kMKhVYsso5OzYgY0iamyW7RcKPXFwgD2PXQ5DO%2BbwnAPMguDGxEXKEXx%2BRY%2FSfhDfuELK&X-Amz-Signature=8484679d7692cb16a560308015c29f8b08f9283c6e08f33e02948af8c166bc62&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
