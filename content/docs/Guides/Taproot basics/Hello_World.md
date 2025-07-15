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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQVZDZ4D%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T035329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJIMEYCIQCSJ4ODwfC%2F0BXg0TcDkuLbjiF%2BoG3YWAN0ec%2FgRfBJNwIhAOT2hzooemRIpu9nXOP5wb5e7jOO2Dz6IBNSCbUqwAocKv8DCDwQABoMNjM3NDIzMTgzODA1IgxpQVwOr9iIEazdE0kq3AM%2FYXiHV51kQD8YBBM1IXDmJyqv6aHBsobFQ9Ut4H1NhYk1ra3GMl7HCVDqdlAiFJXskcSNNIj7dYx5RFcH8dSGwSnlfnPBgwVS7o2m5JWKWNX8k44Bwk4mPSy%2FoR8AiAApUDqfRsmSDUJT2KkYVZl%2FS4eLSv%2BrXFgVrKqn48IJT0g1wFOXGfwqz3ncgwlWibjqATgmrNpBAZfwyrM2l0cU6gmp%2B1lpcRUB5kJhoHokPVEZi%2F2QBXkR95rtuAIXBaKPUgYcVUhUHtXLlZiPl8SrMwabkO9nt1SaMcGZtODE5WKxiF8C%2BJNrWSFKE6qJiA8gdauHjLcmKYEufUOjv5f4kVYVHnpiU6rcM1XEnpsKsXniE8kFN1eGojJ3Aupw8pEcVZBk0EcMp9hwG%2BJLf%2BmjubmS7JLs3qA%2BCOcE170jeaOHO%2BMwMSl1IOKG93%2FBqDA4duMoNWMQaL91Tby7gsL90Eur1Zsg3QSMMphZ6P%2B63KmZqra8p4b4FtDcHUeoqr1axlTojz1XEHGFIFr1gTzrcDDS1g65AtE14kxdE%2Fu45DvfF2rL%2BMszkvA54Ee%2Bo3Rca7Zy5AWNvo5hDXwofS6GZs35D0I5nuIvhNiUYm2rLDKh94DSNqePljc7DDC3%2FdbDBjqkAWNEgjk0tvb5JksjraBbYyoawygtnhuydr1xOgqqpONJODvlidEHlvUqVx9fhaZLB%2FDM4EJOb5ywP%2BWBnyGtO6qHlMnn6wU%2BqFmjqKQQ25LW5ccbyY95eFoPywIOFnEcwRymZIXiA0gEOECvUWt3Y2dNyfoasyacao1fiMJe46Dpk01v78H0QHLPmVA1v4q4HxD44sVEezpp9dq8afXgPE2skgAv&X-Amz-Signature=8436d3eca34b5ef8e2bc15eb00a0a5f6f44e435897d07446b8c9fde76fc31170&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQVZDZ4D%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T035329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJIMEYCIQCSJ4ODwfC%2F0BXg0TcDkuLbjiF%2BoG3YWAN0ec%2FgRfBJNwIhAOT2hzooemRIpu9nXOP5wb5e7jOO2Dz6IBNSCbUqwAocKv8DCDwQABoMNjM3NDIzMTgzODA1IgxpQVwOr9iIEazdE0kq3AM%2FYXiHV51kQD8YBBM1IXDmJyqv6aHBsobFQ9Ut4H1NhYk1ra3GMl7HCVDqdlAiFJXskcSNNIj7dYx5RFcH8dSGwSnlfnPBgwVS7o2m5JWKWNX8k44Bwk4mPSy%2FoR8AiAApUDqfRsmSDUJT2KkYVZl%2FS4eLSv%2BrXFgVrKqn48IJT0g1wFOXGfwqz3ncgwlWibjqATgmrNpBAZfwyrM2l0cU6gmp%2B1lpcRUB5kJhoHokPVEZi%2F2QBXkR95rtuAIXBaKPUgYcVUhUHtXLlZiPl8SrMwabkO9nt1SaMcGZtODE5WKxiF8C%2BJNrWSFKE6qJiA8gdauHjLcmKYEufUOjv5f4kVYVHnpiU6rcM1XEnpsKsXniE8kFN1eGojJ3Aupw8pEcVZBk0EcMp9hwG%2BJLf%2BmjubmS7JLs3qA%2BCOcE170jeaOHO%2BMwMSl1IOKG93%2FBqDA4duMoNWMQaL91Tby7gsL90Eur1Zsg3QSMMphZ6P%2B63KmZqra8p4b4FtDcHUeoqr1axlTojz1XEHGFIFr1gTzrcDDS1g65AtE14kxdE%2Fu45DvfF2rL%2BMszkvA54Ee%2Bo3Rca7Zy5AWNvo5hDXwofS6GZs35D0I5nuIvhNiUYm2rLDKh94DSNqePljc7DDC3%2FdbDBjqkAWNEgjk0tvb5JksjraBbYyoawygtnhuydr1xOgqqpONJODvlidEHlvUqVx9fhaZLB%2FDM4EJOb5ywP%2BWBnyGtO6qHlMnn6wU%2BqFmjqKQQ25LW5ccbyY95eFoPywIOFnEcwRymZIXiA0gEOECvUWt3Y2dNyfoasyacao1fiMJe46Dpk01v78H0QHLPmVA1v4q4HxD44sVEezpp9dq8afXgPE2skgAv&X-Amz-Signature=cb1d824cc02342656cac85333548df076448adac7a0b0633dd9ccd38cceb79ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
