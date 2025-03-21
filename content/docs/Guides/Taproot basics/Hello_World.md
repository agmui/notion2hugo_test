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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OUQCJP6%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T170722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCIGa16zNeHmxeFbJNcZGkbc8AlH0qFWHAOLP2MLeddUscAiAzwLNbBnOZbAX0JzECTak4bVf1ysdGcthFgPrxKoiUNSqIBAip%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNXxLYOQ81mKomoyZKtwDMH%2B0OQeB9fI1Tvtn9LMNHMfF%2FqqHzokarb50f%2B98eIoyl3jsU5ZrKHxc0JY3ltea5yVbCvUBjKGEyh03aI3BoOW%2Bwv1XbZh3nz3xR7Qhp5nQtw4nPu8r%2Fpg90QGfbtvk5f5wSy9YA08f31SxDVK1IJxGf5f2oM2fTjvHT7RQZcNPxrylh19nV%2B2I229qq2Nb6kvFvGtBDiiOqRdJP9Sinz5%2FW0BuX7y1KxUiZux%2FStUHO9UzWM2M66uCLMuR%2FOznZC2iEQYwnaYHUv1fK3Rfq27ghZFDYJXaFAJOC%2FiTrc90xBzoyP%2BcGvJ6xdzM%2FfmPH5uE27cYpkyT4sZQVN9r%2F7bNEcmSoLUBysSnwfSmKMUcod94FFIjQVHac2kCVjI2qbYUJb0Yj4x9JwytnSLJpZDu%2BvkNxBNX4u0ob6VioEGkAQ%2BmkrSzX1%2FNmB1OfPt7mIBhEEPLb0PwDo%2FbTZylIXeYZqPhM3FllVprwzFUvjUVTu8DiYPyh8%2F3RBILaceszRvHIaC5yXztZa8PwsuliCEhQoWlGGQKvCvEaAoybIRFR%2BnM3rGnKQRNFOvBcrjVbdce8HgQyrCHqMmHiFmScluOUyvisFKAwVHKu1Mqn4TGzIZLZuGqiNCqzfkwjpv2vgY6pgFkm6NCqIUiyFVzUOnVjY6iyCFI0GMSbBH%2BAnm9G4UnjCkf3YZjzl6KQyOr%2FCttRU2VoJBHmw9Xeh5MznjOHrriC4qWGfsv8xliDObAr%2B1b%2BPqefZOwDBgO5JybBEPwdnjT%2FRtmnMnGAC7NrfTJ4Xd1%2FTeOY4Lya0lIXMQFaerDuVyRQDagRYkxVvtfz4x4mThlZCU3VAFaBEsW7wzCky7RIF%2FEWLb6&X-Amz-Signature=5dd7dc6d98787f68e1cd677180e16a24b714d4d4b6de42012f045808c8fb3069&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OUQCJP6%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T170722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCIGa16zNeHmxeFbJNcZGkbc8AlH0qFWHAOLP2MLeddUscAiAzwLNbBnOZbAX0JzECTak4bVf1ysdGcthFgPrxKoiUNSqIBAip%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNXxLYOQ81mKomoyZKtwDMH%2B0OQeB9fI1Tvtn9LMNHMfF%2FqqHzokarb50f%2B98eIoyl3jsU5ZrKHxc0JY3ltea5yVbCvUBjKGEyh03aI3BoOW%2Bwv1XbZh3nz3xR7Qhp5nQtw4nPu8r%2Fpg90QGfbtvk5f5wSy9YA08f31SxDVK1IJxGf5f2oM2fTjvHT7RQZcNPxrylh19nV%2B2I229qq2Nb6kvFvGtBDiiOqRdJP9Sinz5%2FW0BuX7y1KxUiZux%2FStUHO9UzWM2M66uCLMuR%2FOznZC2iEQYwnaYHUv1fK3Rfq27ghZFDYJXaFAJOC%2FiTrc90xBzoyP%2BcGvJ6xdzM%2FfmPH5uE27cYpkyT4sZQVN9r%2F7bNEcmSoLUBysSnwfSmKMUcod94FFIjQVHac2kCVjI2qbYUJb0Yj4x9JwytnSLJpZDu%2BvkNxBNX4u0ob6VioEGkAQ%2BmkrSzX1%2FNmB1OfPt7mIBhEEPLb0PwDo%2FbTZylIXeYZqPhM3FllVprwzFUvjUVTu8DiYPyh8%2F3RBILaceszRvHIaC5yXztZa8PwsuliCEhQoWlGGQKvCvEaAoybIRFR%2BnM3rGnKQRNFOvBcrjVbdce8HgQyrCHqMmHiFmScluOUyvisFKAwVHKu1Mqn4TGzIZLZuGqiNCqzfkwjpv2vgY6pgFkm6NCqIUiyFVzUOnVjY6iyCFI0GMSbBH%2BAnm9G4UnjCkf3YZjzl6KQyOr%2FCttRU2VoJBHmw9Xeh5MznjOHrriC4qWGfsv8xliDObAr%2B1b%2BPqefZOwDBgO5JybBEPwdnjT%2FRtmnMnGAC7NrfTJ4Xd1%2FTeOY4Lya0lIXMQFaerDuVyRQDagRYkxVvtfz4x4mThlZCU3VAFaBEsW7wzCky7RIF%2FEWLb6&X-Amz-Signature=f381e043aec41a8ab4a93e41e32ab61d090bbf01446c760447c50dc1a5a7c05c&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
