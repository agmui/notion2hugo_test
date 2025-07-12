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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCYPKLWC%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T170657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAKTEIL9NwflbhoN5j9blAcG0mCHmMl%2FgaMqR4Pq1c2UAiBKFB%2FL%2FtP%2BTONibOLDoq2zNtpHZ%2BaELoySix4CuwVb%2FyqIBAjy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJS2C9G0fh4mXjZOyKtwDVsBNFT5G55ZlXImLokgdXWTKrN63SwYXo8L96I%2FpcI7SG1KlmIFTb%2Bxmw62PvFmtZkBqk5xmDw6s%2FixTqpF856yWU%2FAUnsSRGluzpKGlbO6F%2FXeYOM7I5ygZlYe8Bu2q%2B7lW3xi%2Bzf1lO6ihDDty0NHeQRS71JvO%2FXPVxstEK4HsuBWeWJwj%2Fvq0Z1IKDCgrCaG%2FaUwmbauzBm104FUwy5LJfEtn%2Bq8tJwPhzxZRy5hAwv1n3rfLgX1aXG3MSI6xEdr0dtuwVwlE2FaIFbH0%2FR%2BaZJZcV85AtdjHyjJRTUtDdA%2BTwUeu%2BQgPjVihZ6elRzse9nW4aOAgw5Qvli7UX%2FgHl97hhCPtdESvc85YFhY%2B8N%2Ftw28AhZMn%2B5ta72LAQG9eSmHImlg%2FTJYG8TGYrIkv%2FHk1PGA%2FCVcNFfHKvpddKSYo3PWiWBr1iBp5zGWnn0CSYrXAt6r5Nj9QN749scNuLTUDDPeodXN%2BeCxF%2FX61UaCYgMSn4USKsVMnd7wVAl1kDsa3LbiH3oMrcwrljyW0kXftQPs6i1pl4%2BBQBrBzsY3UjzChAF8BxXDHj63tiYBwzCETj3KT4Xpb4kkWkeywsVKWtEHLtqMnonUgu40G5GiaSMzABQxquH0wo57KwwY6pgEyjzJK4wlFhQrBsArmCQhH3fhNUx5SVyQdLeG1xfMTKglB2lWmy%2F8GS1rSa0r3qRP6CoOAWa%2FR%2FXMwKM8e1bFx0UoWiqmqEnyqXT%2BpOIeAjrEGXa0uItp%2FGZfviZcKwwuW4E2YWOlb0RePjRgFFugItgsJcU6SPbjwAvulXwFcX26KavdzeTTkJ3YWwSmstp4tXQYDyAF0z%2FrZIEtGZBnCLkbJU3tK&X-Amz-Signature=bdab1982a9af773a554edd4d4063c8caa16dcc63ed79ab4064601374b15fd52f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCYPKLWC%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T170657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAKTEIL9NwflbhoN5j9blAcG0mCHmMl%2FgaMqR4Pq1c2UAiBKFB%2FL%2FtP%2BTONibOLDoq2zNtpHZ%2BaELoySix4CuwVb%2FyqIBAjy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJS2C9G0fh4mXjZOyKtwDVsBNFT5G55ZlXImLokgdXWTKrN63SwYXo8L96I%2FpcI7SG1KlmIFTb%2Bxmw62PvFmtZkBqk5xmDw6s%2FixTqpF856yWU%2FAUnsSRGluzpKGlbO6F%2FXeYOM7I5ygZlYe8Bu2q%2B7lW3xi%2Bzf1lO6ihDDty0NHeQRS71JvO%2FXPVxstEK4HsuBWeWJwj%2Fvq0Z1IKDCgrCaG%2FaUwmbauzBm104FUwy5LJfEtn%2Bq8tJwPhzxZRy5hAwv1n3rfLgX1aXG3MSI6xEdr0dtuwVwlE2FaIFbH0%2FR%2BaZJZcV85AtdjHyjJRTUtDdA%2BTwUeu%2BQgPjVihZ6elRzse9nW4aOAgw5Qvli7UX%2FgHl97hhCPtdESvc85YFhY%2B8N%2Ftw28AhZMn%2B5ta72LAQG9eSmHImlg%2FTJYG8TGYrIkv%2FHk1PGA%2FCVcNFfHKvpddKSYo3PWiWBr1iBp5zGWnn0CSYrXAt6r5Nj9QN749scNuLTUDDPeodXN%2BeCxF%2FX61UaCYgMSn4USKsVMnd7wVAl1kDsa3LbiH3oMrcwrljyW0kXftQPs6i1pl4%2BBQBrBzsY3UjzChAF8BxXDHj63tiYBwzCETj3KT4Xpb4kkWkeywsVKWtEHLtqMnonUgu40G5GiaSMzABQxquH0wo57KwwY6pgEyjzJK4wlFhQrBsArmCQhH3fhNUx5SVyQdLeG1xfMTKglB2lWmy%2F8GS1rSa0r3qRP6CoOAWa%2FR%2FXMwKM8e1bFx0UoWiqmqEnyqXT%2BpOIeAjrEGXa0uItp%2FGZfviZcKwwuW4E2YWOlb0RePjRgFFugItgsJcU6SPbjwAvulXwFcX26KavdzeTTkJ3YWwSmstp4tXQYDyAF0z%2FrZIEtGZBnCLkbJU3tK&X-Amz-Signature=f416b8cb85fb18b9d87859d35195af7c0f33e2ccff51215003d4e490bd02ceb7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
