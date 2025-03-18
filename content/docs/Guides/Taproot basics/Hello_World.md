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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVJH2WXG%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T090851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJIMEYCIQDQpajS4Ov1zdQ9fgssw95NJLdFTtxQ%2BE4VJP39xQOLXQIhALCXZDoGmIdMDsSA0tThqVprOQoGW4aKlmJS3Ako7iILKv8DCFkQABoMNjM3NDIzMTgzODA1IgzsVa5gAVBX16fMDcIq3APipUxMm8ug4MbijcfuePSquajIgXJhBCqTF0qpHmaTYmSRcqdQGvau%2BkQ2slF%2F%2F0%2BOe2rS8y04d76hLCtCtrWv%2FJmshluhwZFJz2nvEa0cXdVTBWwYApJNdvEKLo8o4VfWBvgdTpu2OHgk6mjvxjkJF9r3Y2oTqc4X0t4ivpBJprjv15UPHgJzCfTgTusUHxcFVL%2FZmIh3QJ1ZNkMaXcwXCpFwI4ZHfKftVWo8OzcfUquBZrujtmMXEA1Y0An1F2cBsOkSlTccmjn4Q8AQ4hZYpKzdMARp4TsTKwML8%2BmksfjfWY6%2F8ffNQZEYiOoRkdGoFGn%2FLq8NZxu6uzmYGzd8xEmIxe3Y2MsMqcVGe5d%2BNc4wU8ycmZauy0Opxod0zL%2BZ%2BVpH0m1w57gzCy1UfmwOU5aMvrT58k5yCtUNfqJPcsTTcmS6H0%2B%2F9kwmkvt5rON2H4tLcaIanY%2BN6460h9wmscNxN43F2LUqLFjh3SiGdKc8BSRFhWMWW9IhNgBPyRfxpqeGaKZOyyMzJ4ORTrqx102egIkCyEclid14IBrqaxOdvGu3SJsJmsEt5rbEVe05UsyMFvOLUxO3kZKWMJS8utH3UIZGwsV5dNk8sEruRXoTG1qhtsw0H3vMpTDn1uS%2BBjqkATIAoILbPZPUjes3twD%2FFIy3q1%2BU2rJd1jWid0jyLnYw3TrTvvQql4H%2B7a0UUK9xEHbAU4pjWkIunYy43IrtqvmSJguX%2FEgiRYUh4qbL8gtPLiQu3DjOwrkaUwPT0i73%2FCTeccBSUcA4HzQWElioRafrAyPPW1bMWTVRuNYq6s9AzF2XgGPwuMtAsd91ENbyC7sdno5EJfMVJ4Jtb0LHNR2I2QJ9&X-Amz-Signature=5b8f7183ddc9a4f05b3275f92553589e2e4d3a79b0992e67fdc461008fa4751f&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVJH2WXG%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T090851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJIMEYCIQDQpajS4Ov1zdQ9fgssw95NJLdFTtxQ%2BE4VJP39xQOLXQIhALCXZDoGmIdMDsSA0tThqVprOQoGW4aKlmJS3Ako7iILKv8DCFkQABoMNjM3NDIzMTgzODA1IgzsVa5gAVBX16fMDcIq3APipUxMm8ug4MbijcfuePSquajIgXJhBCqTF0qpHmaTYmSRcqdQGvau%2BkQ2slF%2F%2F0%2BOe2rS8y04d76hLCtCtrWv%2FJmshluhwZFJz2nvEa0cXdVTBWwYApJNdvEKLo8o4VfWBvgdTpu2OHgk6mjvxjkJF9r3Y2oTqc4X0t4ivpBJprjv15UPHgJzCfTgTusUHxcFVL%2FZmIh3QJ1ZNkMaXcwXCpFwI4ZHfKftVWo8OzcfUquBZrujtmMXEA1Y0An1F2cBsOkSlTccmjn4Q8AQ4hZYpKzdMARp4TsTKwML8%2BmksfjfWY6%2F8ffNQZEYiOoRkdGoFGn%2FLq8NZxu6uzmYGzd8xEmIxe3Y2MsMqcVGe5d%2BNc4wU8ycmZauy0Opxod0zL%2BZ%2BVpH0m1w57gzCy1UfmwOU5aMvrT58k5yCtUNfqJPcsTTcmS6H0%2B%2F9kwmkvt5rON2H4tLcaIanY%2BN6460h9wmscNxN43F2LUqLFjh3SiGdKc8BSRFhWMWW9IhNgBPyRfxpqeGaKZOyyMzJ4ORTrqx102egIkCyEclid14IBrqaxOdvGu3SJsJmsEt5rbEVe05UsyMFvOLUxO3kZKWMJS8utH3UIZGwsV5dNk8sEruRXoTG1qhtsw0H3vMpTDn1uS%2BBjqkATIAoILbPZPUjes3twD%2FFIy3q1%2BU2rJd1jWid0jyLnYw3TrTvvQql4H%2B7a0UUK9xEHbAU4pjWkIunYy43IrtqvmSJguX%2FEgiRYUh4qbL8gtPLiQu3DjOwrkaUwPT0i73%2FCTeccBSUcA4HzQWElioRafrAyPPW1bMWTVRuNYq6s9AzF2XgGPwuMtAsd91ENbyC7sdno5EJfMVJ4Jtb0LHNR2I2QJ9&X-Amz-Signature=d19850193fadffe0897b95518398d79c1f70ccaa09bb7fbcbdbb3a3c6779226f&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
