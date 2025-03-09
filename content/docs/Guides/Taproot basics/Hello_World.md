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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652WAXK3E%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T080859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJGMEQCIGYweiLl%2FWJKHyRmxK0jLbv5DYh8bI6fctVA5TY%2Bxee%2FAiA%2BKGg2n02EZqT2jNGtCHL3ybocGBsenIjAaxzGPpyWNyr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMkWjcieHoVWOYlEDTKtwD5omYKEk6Ls3%2Ba8rxzLXc3GzcUh6CvEx0ZeEzchRiyU5FFyP%2ByD%2Bo8fJBGq%2FE2Xtkxixc7w4Yg4P7X9gk3TZL9LNqRBvSNALQ0BJUj6s7erSSi3iSAovxUfhAnsatGkErhsUgrR3bq6t%2BkIe4UPzRM31TbpYWG59H1jB8Fxmn%2FYyKsBEX5aaQIjJMbhmh6NXNbjmhtYMytCL4udfFwb78yp0uKXBg6ludZ0HJYQYQVLim8ZA%2FRgS%2FDDhAnsfWWE70wjqsj5T4WtkzKYQXKpIVFwafdI4X1D%2BxXEJnPWq4luBGYylIz6Q36%2B34%2BZTA5kuVd2pbZQ6jtetlW6S8DEaStn8is87VPRSuKyi7TAAiQ9sDktgL5fOnqwXq4yKkPVg1YuKOD59P6AT9wrh9uhUP4V9kJBAcB4hOYLojyDx8%2BbbGszXHRsTdpPhogQJEF69m9vBKSSmLJQ7a6nzSdVzGITMfyIk7HON65yMeOONoh35jkBVvsg4EiEQtNEuXtOzNf5t9D1PJ6f85YqWbNbbdHUWsakjyHOqoERkeHbo5DVkQJt8EAWDsNYVeBrg728mrJcvzTXWBqmggFWThBH1EaLUT1mJXwcDElBKoRWC838AGZeD4XhOzsn5WSuww3uu0vgY6pgGZ8wuToTNebfVAPly5%2FVJhmqwkttu1wEJrT%2BjLpDp3n264ceP7OoqIdjRPqIUcrwc35eUaBqvh5Tuea3KJhc3vMAkjpptleT18lw1vrx0vD5pnvMl0vrlb0WyxRJ4hnjfrbe7V5vIk9j%2FexDYSUbRhld%2Bmkdb9SXjRBftXb05gwQsViZ8RxN3U9MdnWaCSob4Fcsvc%2FgQzmmeatdB0IRts%2BXZUKxGR&X-Amz-Signature=878576097d65d9c544616ae6c4bffab54a921396365e34f46da1b6cdb4cc92e1&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652WAXK3E%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T080859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJGMEQCIGYweiLl%2FWJKHyRmxK0jLbv5DYh8bI6fctVA5TY%2Bxee%2FAiA%2BKGg2n02EZqT2jNGtCHL3ybocGBsenIjAaxzGPpyWNyr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMkWjcieHoVWOYlEDTKtwD5omYKEk6Ls3%2Ba8rxzLXc3GzcUh6CvEx0ZeEzchRiyU5FFyP%2ByD%2Bo8fJBGq%2FE2Xtkxixc7w4Yg4P7X9gk3TZL9LNqRBvSNALQ0BJUj6s7erSSi3iSAovxUfhAnsatGkErhsUgrR3bq6t%2BkIe4UPzRM31TbpYWG59H1jB8Fxmn%2FYyKsBEX5aaQIjJMbhmh6NXNbjmhtYMytCL4udfFwb78yp0uKXBg6ludZ0HJYQYQVLim8ZA%2FRgS%2FDDhAnsfWWE70wjqsj5T4WtkzKYQXKpIVFwafdI4X1D%2BxXEJnPWq4luBGYylIz6Q36%2B34%2BZTA5kuVd2pbZQ6jtetlW6S8DEaStn8is87VPRSuKyi7TAAiQ9sDktgL5fOnqwXq4yKkPVg1YuKOD59P6AT9wrh9uhUP4V9kJBAcB4hOYLojyDx8%2BbbGszXHRsTdpPhogQJEF69m9vBKSSmLJQ7a6nzSdVzGITMfyIk7HON65yMeOONoh35jkBVvsg4EiEQtNEuXtOzNf5t9D1PJ6f85YqWbNbbdHUWsakjyHOqoERkeHbo5DVkQJt8EAWDsNYVeBrg728mrJcvzTXWBqmggFWThBH1EaLUT1mJXwcDElBKoRWC838AGZeD4XhOzsn5WSuww3uu0vgY6pgGZ8wuToTNebfVAPly5%2FVJhmqwkttu1wEJrT%2BjLpDp3n264ceP7OoqIdjRPqIUcrwc35eUaBqvh5Tuea3KJhc3vMAkjpptleT18lw1vrx0vD5pnvMl0vrlb0WyxRJ4hnjfrbe7V5vIk9j%2FexDYSUbRhld%2Bmkdb9SXjRBftXb05gwQsViZ8RxN3U9MdnWaCSob4Fcsvc%2FgQzmmeatdB0IRts%2BXZUKxGR&X-Amz-Signature=725ec30663203c52bf3d4046949b0b77adf79bfd548cb270eed01c5aa0a02b87&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
