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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFTEX733%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T140710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICIeZiOYx3%2FvvrB6EYvkqnx8i3HPVH%2FS6eEWKNJ5Id5%2FAiEA4cHgh3VGwo%2Fw7EUdEpLyRYnc9ugE%2Fps4vjM5lf9F%2F2YqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCl1bjW64oXE6ufuDircA978FOIKEIFhFnTdcd9gN%2FEzb7hHwC9ly%2B45L%2F1BqZOE8PZeAb261tBYiC0DIK5BfSDl%2BLBbnG3rt8%2FEEgjdPjvjCXu6V5j5nK8E0xAJndOVBejxByuhqs%2FQr%2FItK5TeePpIV5Fw%2Bs7V4ym7oC5I3pa3yHE89sKmYFUyihCBtrCOhbTKuMYTbSlNFVSh23PDr2hDnedSYYc%2F%2B50wXE1g71fI18ycnTjpdgu9I15oWqNyY99CZhUkwuoFi%2BthAtLNBoPimooMFJOPKjNCHeAmlaf25hqNSmMAAlaFTK2P%2F2%2F%2BqfrjkpUPvPDCl0o6v%2BB3p2JxKoxSTVUYgzGFdiGEUuqkfFjEtV9UAsl84rOHZhufIa6Vs%2Bjm7FA0ar3%2BSyi34t%2FQvMkeGauPJ7sWGM7cRtRgbM4bRJtl0o4Qus2CprfIaTc%2BxJen7SSeUWIG2EnT33disvItzstQhwszkyfn4gTpMvAvhImsqfSaL8SLCjMMMGRVkO3pO5GgS6HOSxKfQNlhIxzeDQYn%2FIzzFnBbIzL8hq7iEXVH9uJE%2BUc5odamD%2FepTpZYhqb72%2BqUlIoD%2FSdw3y8kprA%2BTZZ%2FAMx5jVckifizgW6iuT%2BYXedAOMKOZZg8eljOafMdpc18MPjo6LwGOqUBB9v7HnXziq%2FnJo69TVa8LpAW71Ikwo31acY0Gm56ckEbcfvcpR4HrVaK%2FyOuX5wP21zIfixQ5iw%2B9K6mLjWQE0JNR0mBXt%2FhT3DGz7HPJmKiy2fTimt1pIRC9PGq77gJbwIqf2rsOV14Xdv1QrtxSbXUuINH9rZXzerAmwHQW9kTqF9bjrQQHOUctD%2FxPZa5UnTc%2Blapea0iEpDP%2BCXs2QI10Wx9&X-Amz-Signature=3cfa2d090c28408c4d665d7726afe1638b79504ee02bfe479ebc16ce4e323c96&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFTEX733%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T140710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICIeZiOYx3%2FvvrB6EYvkqnx8i3HPVH%2FS6eEWKNJ5Id5%2FAiEA4cHgh3VGwo%2Fw7EUdEpLyRYnc9ugE%2Fps4vjM5lf9F%2F2YqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCl1bjW64oXE6ufuDircA978FOIKEIFhFnTdcd9gN%2FEzb7hHwC9ly%2B45L%2F1BqZOE8PZeAb261tBYiC0DIK5BfSDl%2BLBbnG3rt8%2FEEgjdPjvjCXu6V5j5nK8E0xAJndOVBejxByuhqs%2FQr%2FItK5TeePpIV5Fw%2Bs7V4ym7oC5I3pa3yHE89sKmYFUyihCBtrCOhbTKuMYTbSlNFVSh23PDr2hDnedSYYc%2F%2B50wXE1g71fI18ycnTjpdgu9I15oWqNyY99CZhUkwuoFi%2BthAtLNBoPimooMFJOPKjNCHeAmlaf25hqNSmMAAlaFTK2P%2F2%2F%2BqfrjkpUPvPDCl0o6v%2BB3p2JxKoxSTVUYgzGFdiGEUuqkfFjEtV9UAsl84rOHZhufIa6Vs%2Bjm7FA0ar3%2BSyi34t%2FQvMkeGauPJ7sWGM7cRtRgbM4bRJtl0o4Qus2CprfIaTc%2BxJen7SSeUWIG2EnT33disvItzstQhwszkyfn4gTpMvAvhImsqfSaL8SLCjMMMGRVkO3pO5GgS6HOSxKfQNlhIxzeDQYn%2FIzzFnBbIzL8hq7iEXVH9uJE%2BUc5odamD%2FepTpZYhqb72%2BqUlIoD%2FSdw3y8kprA%2BTZZ%2FAMx5jVckifizgW6iuT%2BYXedAOMKOZZg8eljOafMdpc18MPjo6LwGOqUBB9v7HnXziq%2FnJo69TVa8LpAW71Ikwo31acY0Gm56ckEbcfvcpR4HrVaK%2FyOuX5wP21zIfixQ5iw%2B9K6mLjWQE0JNR0mBXt%2FhT3DGz7HPJmKiy2fTimt1pIRC9PGq77gJbwIqf2rsOV14Xdv1QrtxSbXUuINH9rZXzerAmwHQW9kTqF9bjrQQHOUctD%2FxPZa5UnTc%2Blapea0iEpDP%2BCXs2QI10Wx9&X-Amz-Signature=f12e3892ac96db129570017389c10076bebce47ed9723bf569e40d8ae9827528&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
