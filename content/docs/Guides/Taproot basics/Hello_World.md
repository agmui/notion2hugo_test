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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T347WJ6T%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T161008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJIMEYCIQCFEsJlfU2JoK9a1wsPjhucDxyRudmbpsJ8JPM5E1OkpgIhAILvHQLpqMuys2H%2BKN7mKQz0AJORvhSg62Gy4SyY9GYjKv8DCBkQABoMNjM3NDIzMTgzODA1IgwOfeirUNStP6DwC8Uq3AMXXVNII8Y13MUBcT4vIqc%2BgEGPVy9fSxy2tgGWAgu05E2oYrQ%2BaGR63Y1wVdYGeIpU2T7KqvIJ7mdX9yDQkL1KrBTb4chx5lETflfvASCxBhmuKBTYpwktxXfyll0fA43Ax1ZE9UyQTg8yXtych9QB202oxFF4XjbEMmI%2FAOAoaZOZMJMkT52ZZtvNm5h23T%2BTP%2BbASfX6JpXwATSdfjLnVOnJS8NiXYN6wUEs8wVLeF%2BXCWgWtzl%2FYIOduNK5KCzhYRJ%2BZ%2Bd0w5%2B3KJBcN2LZdmIKFHFINCNzbLBVlhqK3bJcnUi8QNU0TaDQ%2BhhIsTSjbjFWSaHrq6gjo4RedGmztKt%2FqUfXlEccopz7N68UrRNsyeQuxj0S4YDV9CXcqnzYD742dN5DT0ht8z1f3uqJDmprA6pwCPa38rUf4b%2FVXONvJCLbzKEUsqXsqHsU%2FYjAa%2F221jw90qFqIWqAPyDQc3m%2BMYyodhmqz3jAvv52hFKSmI1GkZXwY3merhYSq0UuH%2BZU21Wz%2FDBZ%2F%2BisDtE%2BBBK6KpR%2BDWEt%2FQzwlX8VKspSGOrtuxu5bbbuMa12JI8OKdRsy0dcVcPfCRX9Hq3v6wGtXmDDIC1T3fPDuUzU92zpKO%2BnP9WiU%2BFmKjC6l7HCBjqkAeOKDklOliQFXMGs3DlZRrdu2KkdtKOu0an2Fl8ww5WhzjQSP4CF67w7rKrJXYEuh8Es67UZI1MbHtC1gwF%2Fzh9wKiJ9NO9e5mPnd70H03fYe1FE3MmfHBcoFSQ6un2W57XGAKjmdBdUn9TTNgfIqLpIUe1KDJ1K9gVje4WScAePRPUOY2tM%2Bu4Fr0MrjQvG1ZK7m%2F8GsYV8NVfp2p9EbmdtcA3S&X-Amz-Signature=2a865bfd3f157b05291d6c15f40999a00e96f73cf25a34e896b694dd3d860173&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T347WJ6T%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T161008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJIMEYCIQCFEsJlfU2JoK9a1wsPjhucDxyRudmbpsJ8JPM5E1OkpgIhAILvHQLpqMuys2H%2BKN7mKQz0AJORvhSg62Gy4SyY9GYjKv8DCBkQABoMNjM3NDIzMTgzODA1IgwOfeirUNStP6DwC8Uq3AMXXVNII8Y13MUBcT4vIqc%2BgEGPVy9fSxy2tgGWAgu05E2oYrQ%2BaGR63Y1wVdYGeIpU2T7KqvIJ7mdX9yDQkL1KrBTb4chx5lETflfvASCxBhmuKBTYpwktxXfyll0fA43Ax1ZE9UyQTg8yXtych9QB202oxFF4XjbEMmI%2FAOAoaZOZMJMkT52ZZtvNm5h23T%2BTP%2BbASfX6JpXwATSdfjLnVOnJS8NiXYN6wUEs8wVLeF%2BXCWgWtzl%2FYIOduNK5KCzhYRJ%2BZ%2Bd0w5%2B3KJBcN2LZdmIKFHFINCNzbLBVlhqK3bJcnUi8QNU0TaDQ%2BhhIsTSjbjFWSaHrq6gjo4RedGmztKt%2FqUfXlEccopz7N68UrRNsyeQuxj0S4YDV9CXcqnzYD742dN5DT0ht8z1f3uqJDmprA6pwCPa38rUf4b%2FVXONvJCLbzKEUsqXsqHsU%2FYjAa%2F221jw90qFqIWqAPyDQc3m%2BMYyodhmqz3jAvv52hFKSmI1GkZXwY3merhYSq0UuH%2BZU21Wz%2FDBZ%2F%2BisDtE%2BBBK6KpR%2BDWEt%2FQzwlX8VKspSGOrtuxu5bbbuMa12JI8OKdRsy0dcVcPfCRX9Hq3v6wGtXmDDIC1T3fPDuUzU92zpKO%2BnP9WiU%2BFmKjC6l7HCBjqkAeOKDklOliQFXMGs3DlZRrdu2KkdtKOu0an2Fl8ww5WhzjQSP4CF67w7rKrJXYEuh8Es67UZI1MbHtC1gwF%2Fzh9wKiJ9NO9e5mPnd70H03fYe1FE3MmfHBcoFSQ6un2W57XGAKjmdBdUn9TTNgfIqLpIUe1KDJ1K9gVje4WScAePRPUOY2tM%2Bu4Fr0MrjQvG1ZK7m%2F8GsYV8NVfp2p9EbmdtcA3S&X-Amz-Signature=b2dec520b05b18942eb1fcf0d27e0c02ed0eb0ab3202374a45487c168f40c661&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
