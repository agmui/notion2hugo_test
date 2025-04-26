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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EFZDX2H%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T061039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDdenFkD1rqk9KwoXitjtctm0sKx95qHot92Fkznw%2BoGwIgcebGxlxoB1z%2F4e43SVzP2Ai13JwXWqrtF35DGoQ%2FMLYq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDA7XCzAHwiKFUad68yrcA%2BIJ2yDvSpOt5%2BYVaLx5uWQyIUNauBYvVSm6zUI9MpP2ed7Ti3tnNueNk7vvpvPEyej%2FfeObE4JuCJMCjXEVVXDy9oPCIyU%2BfCnC7vTATmVYbvFdks88iWQer2kEmGldWEW%2BlBZUhRnF%2By1QcIjVn2KCasIBHr8cmANx3hXxypNr0x6rHB9n3SGde02XqPpufyg5PbUfIxjMta0lS0s3QEpXJZldwgvJmwxrYm0z7eQ1IKEqLpdg1uegVCgu7rlqTlhW60VTfazUQicvYMdRXS4EXYHlNVi4q7zHiVow2WpJaetoHY9%2BqiD5MfRJYQsE5afohNDVyczJjA5%2Fu%2F7nabhr7X%2BJzoJrdj7NGJg6rD19Tcanit%2BW%2FrZhHUUERuoqci2k1U2gg5yZEfqGwW4rAKUlWImAmOtAga1KhLESyxqLXkaLUVIJdoWTAYbtO9RrpiKqATUqJk6ntgc%2Bj962c84A8VkQuLaOSRPs5QHxJzSr5mYZLurGUV0dxdT1G373iKnYFeNpvrlbyV4y9GfEK7nCxnR5VnLeUfPoYj2mi2BlcaykAA4rexNrruGupL%2FZ0p1bzt3Vu7%2B6UFY3YlyCY2BFB8U3o7nl34rBWlmv1Yl2C1KVBOFfVy3fpLh2MJzkscAGOqUBWnFn7c1W0z0sf6rJv9DZ7%2FywPAT%2FsG10BU34aJlgkJM%2ByFRRxDAC1AI0ww2VuO9e8wk%2FQ%2FOnbroolKYDSlR0TfMKz6vCBlNg4yl6%2Bqj30avYVRu%2BwndcSlI0IZc%2Fr8v53mRzit%2B6QCb%2Fd%2F3vONuYr7lYM1XL5ZXOgn62BnMG43tGXzv4upaMjN4o8zq7heWPPobfDEZkYDUdk2%2FX%2F3bsBFXBuEaE&X-Amz-Signature=ae75bef950f1bca17c514bdd6a6ccbdb3e44b45782100677986b055e9b5270ae&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EFZDX2H%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T061039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDdenFkD1rqk9KwoXitjtctm0sKx95qHot92Fkznw%2BoGwIgcebGxlxoB1z%2F4e43SVzP2Ai13JwXWqrtF35DGoQ%2FMLYq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDA7XCzAHwiKFUad68yrcA%2BIJ2yDvSpOt5%2BYVaLx5uWQyIUNauBYvVSm6zUI9MpP2ed7Ti3tnNueNk7vvpvPEyej%2FfeObE4JuCJMCjXEVVXDy9oPCIyU%2BfCnC7vTATmVYbvFdks88iWQer2kEmGldWEW%2BlBZUhRnF%2By1QcIjVn2KCasIBHr8cmANx3hXxypNr0x6rHB9n3SGde02XqPpufyg5PbUfIxjMta0lS0s3QEpXJZldwgvJmwxrYm0z7eQ1IKEqLpdg1uegVCgu7rlqTlhW60VTfazUQicvYMdRXS4EXYHlNVi4q7zHiVow2WpJaetoHY9%2BqiD5MfRJYQsE5afohNDVyczJjA5%2Fu%2F7nabhr7X%2BJzoJrdj7NGJg6rD19Tcanit%2BW%2FrZhHUUERuoqci2k1U2gg5yZEfqGwW4rAKUlWImAmOtAga1KhLESyxqLXkaLUVIJdoWTAYbtO9RrpiKqATUqJk6ntgc%2Bj962c84A8VkQuLaOSRPs5QHxJzSr5mYZLurGUV0dxdT1G373iKnYFeNpvrlbyV4y9GfEK7nCxnR5VnLeUfPoYj2mi2BlcaykAA4rexNrruGupL%2FZ0p1bzt3Vu7%2B6UFY3YlyCY2BFB8U3o7nl34rBWlmv1Yl2C1KVBOFfVy3fpLh2MJzkscAGOqUBWnFn7c1W0z0sf6rJv9DZ7%2FywPAT%2FsG10BU34aJlgkJM%2ByFRRxDAC1AI0ww2VuO9e8wk%2FQ%2FOnbroolKYDSlR0TfMKz6vCBlNg4yl6%2Bqj30avYVRu%2BwndcSlI0IZc%2Fr8v53mRzit%2B6QCb%2Fd%2F3vONuYr7lYM1XL5ZXOgn62BnMG43tGXzv4upaMjN4o8zq7heWPPobfDEZkYDUdk2%2FX%2F3bsBFXBuEaE&X-Amz-Signature=dbc9e35494793f14eb05282f34d673832c73ed34ef2bd6265385a328ccb368d1&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
