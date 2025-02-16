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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZD6H4QBY%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T180843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJGMEQCIDvPox%2B98TKYjaFlizkWyjw1fUvNZ06TQdy00tw1HmlpAiBuAS7r3TJl2%2BWOvUfQcOhUI74c%2FjG7JckcI%2BxEBSopXir%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIMPEqbIE8BCBSpMlVJKtwDDAK0G%2BBUyH1hYJlgKWiQvxdZb3SEJ9lvSBprVg8yX%2BwLTcCuJ1zW3zfOLvtoANAlt6yBj8LkxBUzBdiOgwXL%2FZ%2Fwo%2FnJDc%2BPLkkTeJOnNeS4mYdThDbtXHP%2FSsVQk5YYqnAK7%2B6u0jSq%2BYp3Ma2cYyjJxaEWrLYB1bfks%2F%2BDxbLYtl6tcGVVQmmqSa5ow9lpFW6tBlTdEtETtUdyOLywFNMTulaKJIPXZUcaWzWh%2B6DeojUH2dZuYUxZOLxEWn%2FLSRonrlzNUwotkglpsEa4HV9RdlLUYZVr83yMRp442xzH%2BQ9v8RlahL8SN0PfT%2B5QOkn6q%2BkrQP6LHiqRh5py1WqW%2FKl0PyCLCeR9SqQyk1srvEPZ2bfutJwoEhPnGagEohIZSvCxtRHFJql0vMZPNcYMSb44dZCSdyl9cGnH9T1FHs88ixafTv6uz5nJSN8PFcHCP64MS7s9j9vRntER%2FRex3o3NxVlqOgH8wKggcS0DjPLkMbAZbtx6gYi51gXjYjIf0Vc9HUV%2BWHfadFqhXMoPixHNxdmDYLk2XcY0DFp2XSdzq8MA%2Fw8uC4T45yDgN1V9fBUjD2qPEF4yE2i42OG31oGD%2BxCGypoEc8qHwfE7quylaBGxED3zXNIwlsHIvQY6pgHbn0936VGOw7kiaYnpYHRFBU1YfKb633dEBxt5BE%2F9xKjnMhS2e2QbwYL4d0QFxi1zhXN8oxp2DKY4gw38GRPtW5JI532Ei5QzHbEklGt8xJCjnei%2BDlOIANHjU8slKzTTocGbgcl4tCYtiGoQ0DuVHBhkXax1kUZfSNutZmmSIzsso45urgtzesRe3cytOd5Gqvg3k%2FB%2Fiem%2BYv6Kh%2BeKe6Jw3u%2Be&X-Amz-Signature=4df7c8da3359541425cf577979478b6cb0e2ebd05f78fec29030e2c1e1a708db&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZD6H4QBY%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T180843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJGMEQCIDvPox%2B98TKYjaFlizkWyjw1fUvNZ06TQdy00tw1HmlpAiBuAS7r3TJl2%2BWOvUfQcOhUI74c%2FjG7JckcI%2BxEBSopXir%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIMPEqbIE8BCBSpMlVJKtwDDAK0G%2BBUyH1hYJlgKWiQvxdZb3SEJ9lvSBprVg8yX%2BwLTcCuJ1zW3zfOLvtoANAlt6yBj8LkxBUzBdiOgwXL%2FZ%2Fwo%2FnJDc%2BPLkkTeJOnNeS4mYdThDbtXHP%2FSsVQk5YYqnAK7%2B6u0jSq%2BYp3Ma2cYyjJxaEWrLYB1bfks%2F%2BDxbLYtl6tcGVVQmmqSa5ow9lpFW6tBlTdEtETtUdyOLywFNMTulaKJIPXZUcaWzWh%2B6DeojUH2dZuYUxZOLxEWn%2FLSRonrlzNUwotkglpsEa4HV9RdlLUYZVr83yMRp442xzH%2BQ9v8RlahL8SN0PfT%2B5QOkn6q%2BkrQP6LHiqRh5py1WqW%2FKl0PyCLCeR9SqQyk1srvEPZ2bfutJwoEhPnGagEohIZSvCxtRHFJql0vMZPNcYMSb44dZCSdyl9cGnH9T1FHs88ixafTv6uz5nJSN8PFcHCP64MS7s9j9vRntER%2FRex3o3NxVlqOgH8wKggcS0DjPLkMbAZbtx6gYi51gXjYjIf0Vc9HUV%2BWHfadFqhXMoPixHNxdmDYLk2XcY0DFp2XSdzq8MA%2Fw8uC4T45yDgN1V9fBUjD2qPEF4yE2i42OG31oGD%2BxCGypoEc8qHwfE7quylaBGxED3zXNIwlsHIvQY6pgHbn0936VGOw7kiaYnpYHRFBU1YfKb633dEBxt5BE%2F9xKjnMhS2e2QbwYL4d0QFxi1zhXN8oxp2DKY4gw38GRPtW5JI532Ei5QzHbEklGt8xJCjnei%2BDlOIANHjU8slKzTTocGbgcl4tCYtiGoQ0DuVHBhkXax1kUZfSNutZmmSIzsso45urgtzesRe3cytOd5Gqvg3k%2FB%2Fiem%2BYv6Kh%2BeKe6Jw3u%2Be&X-Amz-Signature=8508754a0dd34e32b90a1dcf531a01df616eb0f4f51be3a379a5f151e70d45c7&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
