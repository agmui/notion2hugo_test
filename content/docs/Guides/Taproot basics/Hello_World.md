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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QD5W6BJ%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T181136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBQF4upWPmH9qhqyuqksD7lMdGB1hAb3EKEMq9GGp%2BtiAiEAng426tQ3zFF7DKZDE%2FuXZ7p14OjLRWmewX7ZxcD%2BeEkqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDArviUzXVyZXHUeT6yrcAzmNZsvgQiW%2FSlA1FdK8dW%2FmHhj6aEvXJDWXUc8qZzDgE2kGFGCY5nTyFixZmt8n9QaPQrY9P0WMX8%2B4AG2xr8sxowEaGkMZ1c%2BQzXcEjyFF%2F1zm1B6krG%2B7zVQNVV%2Bjg2Wy4w80JI1DIfP%2BsjsBdjHr6kP79BjwA6SIAnH8wAUYF7vfkiDhKxbyCsw0HfaEsHpw7gsgEWpxIVoNHW7SWSBZAEoq6TkLmRQT%2FPpgtcQVY811Oo%2Fm0i6CzZrldLgyxiQGId5z92ArwA2XSrmf98F6GlQRz9GaThsl0RoWkmG4UDVIhjoJ0mdWklDfRXRJJLHHqK9prtk45E9HVUzTowTByRJKa9u8L1FrHplUfXKRKj%2FLkaAyULA1uLwdiaGlnTcxArdXkzK%2BJ1oXIFnxyS6QGs67LXMckIO52eX11i2VFeHmaW4i74OIJEtQwAd6ysn382DwiahL5TBy9rU5BYr7rPOm6B%2B4KPAFWYDPH3%2B2zsq945qJ1D1a%2Fh8p3qqsygE4R8JzqNj5CU6UyKkVGOOtLsmgJ8Lyae%2Bol0XkXmWzYWwf%2Fbiw38rh9l8gRWKMazYUHpgJ362jKBAKZglEyVA5UXdEH0dOF4lypbHZEbANFP6aAhgRwT05WuUBMIfw%2BMAGOqUBx6NRkUadoBh4iecWoRLsd%2FzCwEtWLa2N1NzTOnC7OPjvsWntT8b59nHErxOHriC9dWzewAvicwlPLbPbpz2PS5QRgzOtXC2DY8l8hGauUMBNlsUa9HJzYoJ5y4Or281rtWprCvQ8Z9lUVocg9kC0qO32yV1I%2BtWWDfglkuuqsQcOnp3R1asaXazdIeKhxKoklJgCY%2FKkiCtM7Clc0s02xdYoK0YU&X-Amz-Signature=7a3bb1074aa6d641263a6bebc4301ecfa904b60cc50ea697285449984aa1c83d&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QD5W6BJ%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T181136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBQF4upWPmH9qhqyuqksD7lMdGB1hAb3EKEMq9GGp%2BtiAiEAng426tQ3zFF7DKZDE%2FuXZ7p14OjLRWmewX7ZxcD%2BeEkqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDArviUzXVyZXHUeT6yrcAzmNZsvgQiW%2FSlA1FdK8dW%2FmHhj6aEvXJDWXUc8qZzDgE2kGFGCY5nTyFixZmt8n9QaPQrY9P0WMX8%2B4AG2xr8sxowEaGkMZ1c%2BQzXcEjyFF%2F1zm1B6krG%2B7zVQNVV%2Bjg2Wy4w80JI1DIfP%2BsjsBdjHr6kP79BjwA6SIAnH8wAUYF7vfkiDhKxbyCsw0HfaEsHpw7gsgEWpxIVoNHW7SWSBZAEoq6TkLmRQT%2FPpgtcQVY811Oo%2Fm0i6CzZrldLgyxiQGId5z92ArwA2XSrmf98F6GlQRz9GaThsl0RoWkmG4UDVIhjoJ0mdWklDfRXRJJLHHqK9prtk45E9HVUzTowTByRJKa9u8L1FrHplUfXKRKj%2FLkaAyULA1uLwdiaGlnTcxArdXkzK%2BJ1oXIFnxyS6QGs67LXMckIO52eX11i2VFeHmaW4i74OIJEtQwAd6ysn382DwiahL5TBy9rU5BYr7rPOm6B%2B4KPAFWYDPH3%2B2zsq945qJ1D1a%2Fh8p3qqsygE4R8JzqNj5CU6UyKkVGOOtLsmgJ8Lyae%2Bol0XkXmWzYWwf%2Fbiw38rh9l8gRWKMazYUHpgJ362jKBAKZglEyVA5UXdEH0dOF4lypbHZEbANFP6aAhgRwT05WuUBMIfw%2BMAGOqUBx6NRkUadoBh4iecWoRLsd%2FzCwEtWLa2N1NzTOnC7OPjvsWntT8b59nHErxOHriC9dWzewAvicwlPLbPbpz2PS5QRgzOtXC2DY8l8hGauUMBNlsUa9HJzYoJ5y4Or281rtWprCvQ8Z9lUVocg9kC0qO32yV1I%2BtWWDfglkuuqsQcOnp3R1asaXazdIeKhxKoklJgCY%2FKkiCtM7Clc0s02xdYoK0YU&X-Amz-Signature=50c18c271837c2be75452a0fa4dd9659ca7f26a6a5c01d7b9d26cc5c7a5a37e3&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
