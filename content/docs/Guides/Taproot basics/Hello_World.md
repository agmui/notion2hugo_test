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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJ337ZJP%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T110147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA1GMuWUgA1zwOsv36toVijiKCmZS0Ww63euo0gHbM73AiAML%2B5Nb9nFuf6cjQVpAo8zNl9xVUflJJKEyqv6SMLa4ir%2FAwgsEAAaDDYzNzQyMzE4MzgwNSIMEWCAgbAWKVsZK2NWKtwDKw4fMQN92aiUvzdv9QcIS1vLI2IpWxOYN5qu92AQ6zDcOd03fDVNfM1NGyT9AjuOQkbghcqZmeUFEK5LIFkGKAFsqt2%2Bfzgz%2BRKbUS3oISxSPOD7Amkck4CxlEnmIaKJjSVga3ITrIwEGa8r1blITjGL3xa16ye5CuCbW9yQqItxNgUjhUqgGDrWWdT7A1WxkvCSRwOQxq3qSx3ktKYnT8kQ7T8tqzyP%2F47%2FKFxwcqt8ys0BhFcJfDRBfwjS6aLvHphpNdcj6Hd4BIBLTnt8uoqsK7nOyDyzfCR5YGTlwNzUZisahZdePJzoOVvGFW7hZixyIMc1dc79IMwGR3gL7eQvHTsp%2BAiEsT5Lg903FGYrdNWFlcJ5uwk4yNtjSe2KosRpW7bo6LTLkAe4sS%2BkaLb42sSnIEKES5mvJb2X8VRmbfWeiTafKawUEBIr0hlDzkLfigxo5aeLb7VmfzSy0gfekIG6N8dbxQQ%2FxNiTgRO8vxqZO7Z1eK1oCKwFgmTnn4VFqu05AR9zmx%2BSr9Fz9f%2BeaS21Rb7mlnt4YGVQYPLr0q4c8fGfOdDLALzrxb68zALt%2FvJ%2BqIX1%2FI9zdJcPyWsMPkJ1XApW7vz0WT3vf1Stuf7DWcHPqF1HqZ0wvdjavgY6pgGVGq2YBjmOWmYiahvYIUTS18fZcRN0EYyo1vKXosrdki8En2JJs8fOOqI5ifdqqx9%2FgzjD8QCR6CSqRzGO%2BHVG%2FNPwiCXq7Z71qTrIjzEe5QHaaHO0uws5nQ6SEO3gXZDvU4PcagJQ41%2BudjSUdo0e0ZKAho224gJOOatmfu5pEaNxKVEvjr76bHl2EdOhVtdsx%2FzxKLDQDJjaHq49o%2BK9qRfuU5CS&X-Amz-Signature=a3c258fd919e405a8b7aab3caabbc73dfb0c1bb224cda4665b89501d1790081e&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJ337ZJP%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T110147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA1GMuWUgA1zwOsv36toVijiKCmZS0Ww63euo0gHbM73AiAML%2B5Nb9nFuf6cjQVpAo8zNl9xVUflJJKEyqv6SMLa4ir%2FAwgsEAAaDDYzNzQyMzE4MzgwNSIMEWCAgbAWKVsZK2NWKtwDKw4fMQN92aiUvzdv9QcIS1vLI2IpWxOYN5qu92AQ6zDcOd03fDVNfM1NGyT9AjuOQkbghcqZmeUFEK5LIFkGKAFsqt2%2Bfzgz%2BRKbUS3oISxSPOD7Amkck4CxlEnmIaKJjSVga3ITrIwEGa8r1blITjGL3xa16ye5CuCbW9yQqItxNgUjhUqgGDrWWdT7A1WxkvCSRwOQxq3qSx3ktKYnT8kQ7T8tqzyP%2F47%2FKFxwcqt8ys0BhFcJfDRBfwjS6aLvHphpNdcj6Hd4BIBLTnt8uoqsK7nOyDyzfCR5YGTlwNzUZisahZdePJzoOVvGFW7hZixyIMc1dc79IMwGR3gL7eQvHTsp%2BAiEsT5Lg903FGYrdNWFlcJ5uwk4yNtjSe2KosRpW7bo6LTLkAe4sS%2BkaLb42sSnIEKES5mvJb2X8VRmbfWeiTafKawUEBIr0hlDzkLfigxo5aeLb7VmfzSy0gfekIG6N8dbxQQ%2FxNiTgRO8vxqZO7Z1eK1oCKwFgmTnn4VFqu05AR9zmx%2BSr9Fz9f%2BeaS21Rb7mlnt4YGVQYPLr0q4c8fGfOdDLALzrxb68zALt%2FvJ%2BqIX1%2FI9zdJcPyWsMPkJ1XApW7vz0WT3vf1Stuf7DWcHPqF1HqZ0wvdjavgY6pgGVGq2YBjmOWmYiahvYIUTS18fZcRN0EYyo1vKXosrdki8En2JJs8fOOqI5ifdqqx9%2FgzjD8QCR6CSqRzGO%2BHVG%2FNPwiCXq7Z71qTrIjzEe5QHaaHO0uws5nQ6SEO3gXZDvU4PcagJQ41%2BudjSUdo0e0ZKAho224gJOOatmfu5pEaNxKVEvjr76bHl2EdOhVtdsx%2FzxKLDQDJjaHq49o%2BK9qRfuU5CS&X-Amz-Signature=774c2f3c0bae5d938f82ebb0ae2149afea08c3ad39e385a91c70ca02f6bd4cd6&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
