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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663H2DQR53%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T070919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCsmE%2F3uKDFFXERYGi4janf9U6f99ZwoKyEAqzF%2Fjs1XQIhAKoDlLQK%2BTpFOVyfHUwOK18gvZjZF3MgAGK7e2IMAwNTKv8DCBAQABoMNjM3NDIzMTgzODA1IgwN9rMBoj8lL%2Fj3BbUq3ANzv3GGO4u6M2e9S3nXNB8VFlWb%2FjXjOuGBiYrHTUA5F%2FDLcqUYB%2FpkKVFoMLCr7g5%2FYn%2Fc%2FyF1NlYqRsZ80SDB3wp933VZbdQvrlTMcp36FrWjmDU15Xcj7nGi5AnpeBz8Tlq17tkftGi%2BLBV7%2BlEasSEmBQ4z9oYC%2BukCTvv1YHYeIcnckqLq2uxU79RPnhcM1YcQWSLGZTUa690jVkNoEq5ogex7hyoYgslaCCo%2B7xCxUd5NEyRdO3irJBucQP1%2BZH5W7MvfksXjFZbqqDS2aO%2FB4YjnJGhiLp9gNXYlXiBSLU8QJWsziUjwqpqct3G5Li8yLsYlVz8k%2FlE9GqGRzNC2BzxvEXk7BTjpMWcWi6OUV6kyUeyfENPPs10mgvxqimgn6ZzMYtMj3S76DQcVpemisQybmtyes85TJQ2FYwIiaXEe%2FyDzKKcZXHx7%2B0UIG9Kz%2BLF2CA37liLECSScr6N1tXNuEJL8zartAfudXHu2xf6wJbznBqqzndsYw%2FvB%2B0zVcDUiTohF5iM1GF%2BLbg5TVUleM%2FT2fi3XcNtkcMEvqlRUSUVAGZnZ%2FCRSAjMzVCJDABfdAS%2BHhfiCmWiXmwNqIc%2B58wIV9F4sE1v2fW7W4EJOFoXirGTn8zC%2F4%2FK%2FBjqkAV9rtEm2OdqbSbvziGwgOQFUaijZYEIlG3tJ84XCVgkLWltUpMuOn7hbLOONmaWw3o%2BpRYlb8jJ3MD8XXvS3EIjaR4ej1zVlBDdogzCLhDqYRDmgn3nPj1XjfnK9yixrVvUzo7rkQQwQJUdceTd83%2BffpIz%2BFse7Vwd194FaJB7CFB876oRNx6nU0nYYVG%2Bfrromd3v42%2Fca8O0VadPolhrxo7%2Bd&X-Amz-Signature=962d2ae3b89139486844866d51d8e40f0e97d9d2783565672882aaaa1b6d57ba&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663H2DQR53%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T070919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCsmE%2F3uKDFFXERYGi4janf9U6f99ZwoKyEAqzF%2Fjs1XQIhAKoDlLQK%2BTpFOVyfHUwOK18gvZjZF3MgAGK7e2IMAwNTKv8DCBAQABoMNjM3NDIzMTgzODA1IgwN9rMBoj8lL%2Fj3BbUq3ANzv3GGO4u6M2e9S3nXNB8VFlWb%2FjXjOuGBiYrHTUA5F%2FDLcqUYB%2FpkKVFoMLCr7g5%2FYn%2Fc%2FyF1NlYqRsZ80SDB3wp933VZbdQvrlTMcp36FrWjmDU15Xcj7nGi5AnpeBz8Tlq17tkftGi%2BLBV7%2BlEasSEmBQ4z9oYC%2BukCTvv1YHYeIcnckqLq2uxU79RPnhcM1YcQWSLGZTUa690jVkNoEq5ogex7hyoYgslaCCo%2B7xCxUd5NEyRdO3irJBucQP1%2BZH5W7MvfksXjFZbqqDS2aO%2FB4YjnJGhiLp9gNXYlXiBSLU8QJWsziUjwqpqct3G5Li8yLsYlVz8k%2FlE9GqGRzNC2BzxvEXk7BTjpMWcWi6OUV6kyUeyfENPPs10mgvxqimgn6ZzMYtMj3S76DQcVpemisQybmtyes85TJQ2FYwIiaXEe%2FyDzKKcZXHx7%2B0UIG9Kz%2BLF2CA37liLECSScr6N1tXNuEJL8zartAfudXHu2xf6wJbznBqqzndsYw%2FvB%2B0zVcDUiTohF5iM1GF%2BLbg5TVUleM%2FT2fi3XcNtkcMEvqlRUSUVAGZnZ%2FCRSAjMzVCJDABfdAS%2BHhfiCmWiXmwNqIc%2B58wIV9F4sE1v2fW7W4EJOFoXirGTn8zC%2F4%2FK%2FBjqkAV9rtEm2OdqbSbvziGwgOQFUaijZYEIlG3tJ84XCVgkLWltUpMuOn7hbLOONmaWw3o%2BpRYlb8jJ3MD8XXvS3EIjaR4ej1zVlBDdogzCLhDqYRDmgn3nPj1XjfnK9yixrVvUzo7rkQQwQJUdceTd83%2BffpIz%2BFse7Vwd194FaJB7CFB876oRNx6nU0nYYVG%2Bfrromd3v42%2Fca8O0VadPolhrxo7%2Bd&X-Amz-Signature=3297251122460623aae11f272e955ec3d931f222eb74f5083493b5a46a060f46&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
