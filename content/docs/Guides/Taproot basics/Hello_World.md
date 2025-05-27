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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTPSJSBA%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T081226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCdE5wSaSAweoTFrbA%2BpUqcpBujzHrJ8U1kOE8PkDh4nQIhAPadIFOiscjGqrhWT9BzCvVsa7p7I%2F8gip4quWU0spJFKv8DCFkQABoMNjM3NDIzMTgzODA1IgylWtXNXJo%2FaK%2BGZt8q3APyD5QaTh0pzxmYstWclygiY%2FxLh9y24yH7bRUJQozXVib9eKpho0sDMeHPiyOf0M0DPBrxtQRi8xbKbDqHZkwpl257C0VXrgrkI8RThRwd8GnHOVakLMxPE2W57Uw73Brg%2BWOLQ26EUp7rFhejhpxYHNg6jf8lgCEM3P68SkowJ8rdY%2BttHtYB9l7SHN%2FD9XnpyQFpOsABVyB4TYZ3pnXiLfO4LXfICaKm7Ya8E14IEvT5WxUB9dq2s0ivocKva54el8fMhWzzNNkzOtL1X9HDTRKbkJUXf8aAnfQqYIduOBxuO%2F8uCdH0AqS%2FXQv34efQlsH7cDWYN5w1Z4l2rJfOQF9TvoK6AvUFgWp8j21iQxcoCDc45hTGOxWNj8wguG7YJ5hpS539B9nGY%2FIw3C1DrHYUsu1G5O4EUXsQoegaTbl5v7wFeIniSabNCFeXtSjja%2FTFG7aN%2Btzful%2Fgh53RfIqYPuqaxqpKbH7Cb7gJvoKyna5x8LHH1uVXuc4xLkhhTa8FPUt9X2BaLOZRH%2BxFULvZVUM2nVNi3kV2Tf3R12zbiLpeV9k0AUdCPeQ0%2F3lJspwjyd5VrA0QF2nZK3pr1FcojKVYa1Ro22Zc0o8fC%2BdWjfcL8oVz7FO0aTDE2tXBBjqkAaJfs0FnraKboQYCZQPEB6BIK67CuDef%2Bxazzc1O6OgW32Ac7IKpXuI%2BkfhvUEkQHNDIUDXMnAOaQoaSwKlv3XcGZIpoqIpPLsSxroWBoKTogMf7%2FbTUHXxyP8iApE7PbjYla6P4RjtdiuU9giBjR4jJW6Guzjxo7wwbw1lv89QITiyiAxgxuyoSJJW5J7h%2FCS2VdxXS3dso4QKHBwLVYHHVyCzy&X-Amz-Signature=b2a2be3967507dbbb0666cf5e0647695773eceb498d41bf665f046342e04ac73&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTPSJSBA%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T081226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCdE5wSaSAweoTFrbA%2BpUqcpBujzHrJ8U1kOE8PkDh4nQIhAPadIFOiscjGqrhWT9BzCvVsa7p7I%2F8gip4quWU0spJFKv8DCFkQABoMNjM3NDIzMTgzODA1IgylWtXNXJo%2FaK%2BGZt8q3APyD5QaTh0pzxmYstWclygiY%2FxLh9y24yH7bRUJQozXVib9eKpho0sDMeHPiyOf0M0DPBrxtQRi8xbKbDqHZkwpl257C0VXrgrkI8RThRwd8GnHOVakLMxPE2W57Uw73Brg%2BWOLQ26EUp7rFhejhpxYHNg6jf8lgCEM3P68SkowJ8rdY%2BttHtYB9l7SHN%2FD9XnpyQFpOsABVyB4TYZ3pnXiLfO4LXfICaKm7Ya8E14IEvT5WxUB9dq2s0ivocKva54el8fMhWzzNNkzOtL1X9HDTRKbkJUXf8aAnfQqYIduOBxuO%2F8uCdH0AqS%2FXQv34efQlsH7cDWYN5w1Z4l2rJfOQF9TvoK6AvUFgWp8j21iQxcoCDc45hTGOxWNj8wguG7YJ5hpS539B9nGY%2FIw3C1DrHYUsu1G5O4EUXsQoegaTbl5v7wFeIniSabNCFeXtSjja%2FTFG7aN%2Btzful%2Fgh53RfIqYPuqaxqpKbH7Cb7gJvoKyna5x8LHH1uVXuc4xLkhhTa8FPUt9X2BaLOZRH%2BxFULvZVUM2nVNi3kV2Tf3R12zbiLpeV9k0AUdCPeQ0%2F3lJspwjyd5VrA0QF2nZK3pr1FcojKVYa1Ro22Zc0o8fC%2BdWjfcL8oVz7FO0aTDE2tXBBjqkAaJfs0FnraKboQYCZQPEB6BIK67CuDef%2Bxazzc1O6OgW32Ac7IKpXuI%2BkfhvUEkQHNDIUDXMnAOaQoaSwKlv3XcGZIpoqIpPLsSxroWBoKTogMf7%2FbTUHXxyP8iApE7PbjYla6P4RjtdiuU9giBjR4jJW6Guzjxo7wwbw1lv89QITiyiAxgxuyoSJJW5J7h%2FCS2VdxXS3dso4QKHBwLVYHHVyCzy&X-Amz-Signature=08af8753684001dc872003ada47cd702efe14ff42ad88932d65305e640dfe351&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
