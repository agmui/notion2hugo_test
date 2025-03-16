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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X43MMCBA%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T210215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCMYVzz9GOMOgPG2lvNFFCd4p2D9kIhK4fLg93H43bPfQIhAJPDN9gS1GzOG%2BozC6ZBN3PuL56JuUijIhBnagH9CBSSKv8DCDUQABoMNjM3NDIzMTgzODA1Igyd5kGW6yiDTGmO8lIq3AP9Od5ch%2FwtTHEi5OvTfInPMLH6U8yckRzQ8ta5o6OiDXYJVrouOr070O%2FWXO5qzfYGHmMcfW4FQVJj4RyPZznYpWFlqBmaSmvxYxJFxqPMN9NbSVVnADJGAXXxCNLOmHiELu8S54rnUrG8%2BT3vyAoq7TDmb2%2BuiYacj2FAgIzYo1Y67Mp61UFzv0VoxePkUdJvOcTVwWWc%2BwTeYNnxj%2F26JQnx9lJdXhvmiK1Ba5umb4PrazURA8r%2BdqwaeMTRwacbBYoTdverOl%2Bvkiir4bN8MzXmzba9lyga9%2BiqZ5DKDfcVc1a%2FQs5pepB381t74%2BGF%2B0%2B5JyCw75ZInWkWY3Z1q5McYJODnmJ7mxR%2BhUgHfKUSv6ENyFT%2BqlvsJLbklDS4Br75TtA8TGMKvPTdseRQC5tpUvTX%2FiEjDozklRhJv4JsTyZuYy1GGXQxxO2XXKcMv2ozws5dtJH4iyia4OWZKxjsSQNjH6rBYJsPuRd4Z9mACTFYL92XXnBtGhUzlHnrhZOJ0Jq9Dyd6GSBg73xov2U6BgInPdxW80RxYMil1g8ONKV3vTKcpu5qOq6jwVem7zERkVfmN1l2ftaccMwlDwnEwP5hbj7A26U4Tz%2FGS%2BiPHWKJ1qYuJ3UqgzCC3Ny%2BBjqkASAGablBF5Psumj2b5ysNTHN485S7GAJaP9l4VyJIXaiC%2BRm2pzGBz%2FEXoFQEMxPzTyyUeJ%2Fppvtc4oR%2F36KSaAnhVqnofWwo19aquEQL%2BP%2FDjUyTBetGJF120m0wxeLwuaxGkjSTUyKRB2aNeVNrnZGAzpFY37QwtMjO9h7m4xaYkHdsrK%2BN1%2FGLgClR0MkVhJGN6IPfRRl0HhXk5z3UTAXpe%2FA&X-Amz-Signature=374f8a285c43413e1a60f02764f03916ced54d641178f52a960554898fe8c3f1&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X43MMCBA%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T210215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCMYVzz9GOMOgPG2lvNFFCd4p2D9kIhK4fLg93H43bPfQIhAJPDN9gS1GzOG%2BozC6ZBN3PuL56JuUijIhBnagH9CBSSKv8DCDUQABoMNjM3NDIzMTgzODA1Igyd5kGW6yiDTGmO8lIq3AP9Od5ch%2FwtTHEi5OvTfInPMLH6U8yckRzQ8ta5o6OiDXYJVrouOr070O%2FWXO5qzfYGHmMcfW4FQVJj4RyPZznYpWFlqBmaSmvxYxJFxqPMN9NbSVVnADJGAXXxCNLOmHiELu8S54rnUrG8%2BT3vyAoq7TDmb2%2BuiYacj2FAgIzYo1Y67Mp61UFzv0VoxePkUdJvOcTVwWWc%2BwTeYNnxj%2F26JQnx9lJdXhvmiK1Ba5umb4PrazURA8r%2BdqwaeMTRwacbBYoTdverOl%2Bvkiir4bN8MzXmzba9lyga9%2BiqZ5DKDfcVc1a%2FQs5pepB381t74%2BGF%2B0%2B5JyCw75ZInWkWY3Z1q5McYJODnmJ7mxR%2BhUgHfKUSv6ENyFT%2BqlvsJLbklDS4Br75TtA8TGMKvPTdseRQC5tpUvTX%2FiEjDozklRhJv4JsTyZuYy1GGXQxxO2XXKcMv2ozws5dtJH4iyia4OWZKxjsSQNjH6rBYJsPuRd4Z9mACTFYL92XXnBtGhUzlHnrhZOJ0Jq9Dyd6GSBg73xov2U6BgInPdxW80RxYMil1g8ONKV3vTKcpu5qOq6jwVem7zERkVfmN1l2ftaccMwlDwnEwP5hbj7A26U4Tz%2FGS%2BiPHWKJ1qYuJ3UqgzCC3Ny%2BBjqkASAGablBF5Psumj2b5ysNTHN485S7GAJaP9l4VyJIXaiC%2BRm2pzGBz%2FEXoFQEMxPzTyyUeJ%2Fppvtc4oR%2F36KSaAnhVqnofWwo19aquEQL%2BP%2FDjUyTBetGJF120m0wxeLwuaxGkjSTUyKRB2aNeVNrnZGAzpFY37QwtMjO9h7m4xaYkHdsrK%2BN1%2FGLgClR0MkVhJGN6IPfRRl0HhXk5z3UTAXpe%2FA&X-Amz-Signature=b63ceadca83d2a82df8ee8ee50489fbfbc7b10306c7eb06544ef26fd569a64ed&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
