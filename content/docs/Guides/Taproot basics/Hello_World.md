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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ABRC5IL%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T100827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDRB3VD5u3%2FgN6CeXefcfYlVXNseVwMcimZ2xSgY7D82gIhAKLU37a%2Fp%2BwxcF1BwzScrdljVE0unrpH6AkwRXGRZ98RKv8DCBMQABoMNjM3NDIzMTgzODA1IgwMK8SL7B21EJJ4Opoq3AOhXVifYRFjwmZfyg%2FcpUC%2FECRVlInRVmVqdOCOV2WUILUmlTMDpwJZKjV1vj%2F4p4Zdq7P0VwPlwsHZ8rBkyPXYGybvxR5kJfkziD3hAyOH9RGW2ifXagmbsquAtWRKjGPlZA7pt8mgS1LctSCPlvnW8KhutIuOV28oikcGZDujVQhMdDqsvh5qJK%2Bx6WJGk8Fe%2BPUcG5%2FHnTqOwkMy1pjr6BOi02BG47Z3CiVQvsCbzKYLOpYkGdR%2FdlCfriiJo7J%2BtHNeqPh2mOvQvPN9he%2BxllJf6S9UK019PIYZk0xhtm8JUW%2BR1%2F9Red4H%2FOnRgrCgiprZ%2FnXkqV5XfjBc8nbNb2xS8potM9Vv2ouPQ9Xm98Icx9ATpxt%2B%2BJG7xO48IAYf2VgN%2Bt21lLRlvZW2aCDnnNma1ucHrXSxCM2HQIfFt1HgWZ3xyPrUbseKxeNpU8JTScArEekk%2Brvy2EcFXO658dxbvcoJx45gNrkuvMsJCBSGtqdMdB4%2FcGXlm7%2B0HLReg0oX6ocfj3gZCp%2BHhyDcco4UGSNl1xMAl9Vy%2Ft7ZEq8Ee3YPAlK5aXw2itDRC1UqRwsJUNmykp5UIP2EEQTqtx6ZVy09EVQuUC%2B1toaPdZCfa7fvpPqDfZ73pTCohre9BjqkATc286xV4KAxlQm1unFrvPnkEsA3sJZJwgLHI16G6BK6PPick%2FIrRQ4VnbRScmqcD3D%2FKQQQ87mrtVoXFD7FpEdr4SFSZ%2BeuzacXjsDHYAepR20zbKScwuChh0EjeW8TU4BPAZokMO3eD%2BR1zmsp4X2HebYufz1TnwH3G1UbEqI67aMtgOcGPrXKNQYYBaGaSTgsb0qYO30TmfYSdwe2G0FU5kqC&X-Amz-Signature=b0027f7f6ea71df5367b7af99039ce7cea67543fb5d31c312680e313e5d1770a&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ABRC5IL%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T100827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDRB3VD5u3%2FgN6CeXefcfYlVXNseVwMcimZ2xSgY7D82gIhAKLU37a%2Fp%2BwxcF1BwzScrdljVE0unrpH6AkwRXGRZ98RKv8DCBMQABoMNjM3NDIzMTgzODA1IgwMK8SL7B21EJJ4Opoq3AOhXVifYRFjwmZfyg%2FcpUC%2FECRVlInRVmVqdOCOV2WUILUmlTMDpwJZKjV1vj%2F4p4Zdq7P0VwPlwsHZ8rBkyPXYGybvxR5kJfkziD3hAyOH9RGW2ifXagmbsquAtWRKjGPlZA7pt8mgS1LctSCPlvnW8KhutIuOV28oikcGZDujVQhMdDqsvh5qJK%2Bx6WJGk8Fe%2BPUcG5%2FHnTqOwkMy1pjr6BOi02BG47Z3CiVQvsCbzKYLOpYkGdR%2FdlCfriiJo7J%2BtHNeqPh2mOvQvPN9he%2BxllJf6S9UK019PIYZk0xhtm8JUW%2BR1%2F9Red4H%2FOnRgrCgiprZ%2FnXkqV5XfjBc8nbNb2xS8potM9Vv2ouPQ9Xm98Icx9ATpxt%2B%2BJG7xO48IAYf2VgN%2Bt21lLRlvZW2aCDnnNma1ucHrXSxCM2HQIfFt1HgWZ3xyPrUbseKxeNpU8JTScArEekk%2Brvy2EcFXO658dxbvcoJx45gNrkuvMsJCBSGtqdMdB4%2FcGXlm7%2B0HLReg0oX6ocfj3gZCp%2BHhyDcco4UGSNl1xMAl9Vy%2Ft7ZEq8Ee3YPAlK5aXw2itDRC1UqRwsJUNmykp5UIP2EEQTqtx6ZVy09EVQuUC%2B1toaPdZCfa7fvpPqDfZ73pTCohre9BjqkATc286xV4KAxlQm1unFrvPnkEsA3sJZJwgLHI16G6BK6PPick%2FIrRQ4VnbRScmqcD3D%2FKQQQ87mrtVoXFD7FpEdr4SFSZ%2BeuzacXjsDHYAepR20zbKScwuChh0EjeW8TU4BPAZokMO3eD%2BR1zmsp4X2HebYufz1TnwH3G1UbEqI67aMtgOcGPrXKNQYYBaGaSTgsb0qYO30TmfYSdwe2G0FU5kqC&X-Amz-Signature=43f6822b1c195507d6f252aad1793cd387679564f09571abdb8ed3359db8656a&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
