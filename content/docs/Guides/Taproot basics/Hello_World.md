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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RY7GFCRH%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T170736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIEtJS8sI1dOlPkmhvIAH49zRNEzFOMu%2BSXlm29w4sHADAiEAipUcxCp9VkwF7co7fqzr2DERQtp6a0DejUGGVPJhIicqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBp64Rv8wjNaij9P8CrcA3GgOjJ8qQfeLMI9bBmB5cHmhoVCSSCSXBbmFstxqpofQZAKyHlfcxBiOcesnUGLV75hHjwo6qLihYf9ANdXNJRlTFAC0XFNtfkP0h3%2BvCjuHT7%2B%2FMVU%2FxC490SDNZGCICi69F3ijjtbSlHrRnalJDuWPrq%2B12Z0v3WygFYf5fbkU88biWvJjnBHCm4aqtVs41nAQ22JgY9r8B2tIwc2L%2BPbj4hE8oIsKG75XeRElh7DlK5MQmOduXO2XtGGSQy9%2Fzox4XIES5voX9JWRNGd4EK2Ojb%2B9ZpazAIsDVNX4p5asUNgsnhbwN2lbw8ljjQ5jcY4Ry%2BQL0hm5qf6UPx3C%2BRADx7S1gnJzXy1HcDI11kevCZlPdMCAHPw1c93Yk5Xq%2FqgJHZrdux4MB%2FTlMgM6xZ1nO7XcCVf1jz91AlMS2d6RB4Rhmb7f51ghGVoWOw7DMvj%2BBzY4ZgzqFnXZ68KFx9Kr9OXDShPtwWn%2B6LNEuPQIeeWc5%2FLZlI%2BKxGiWlTUQO5jL0jOnBP2pPOI7yAy4ce72mBEFdSQJ6pmcz%2BnAR0RPVCYTwJeCYk%2F%2FW9vnTctrWEiOZEY9b8Tu5mP%2BDr668wB2sxszrd2c6IoI5mO%2FEwh8drPHw3%2FHd3GzTvbMIvhvMEGOqUBYTUq6btsdHEvZe%2FXyHbqikkJV%2BBPBj4fn7wKN4mDn8S%2Bgdk%2FcxZNoxf1CYEfI6NrZA3oBl8mUf5Rn2KRKreiBsQ6sbeGrf0jpi8NHenfYZayjQiJBQ6p%2B8lqtsWGPXNmq3M7YC1YwpVUVVvBfsCtvjkrev%2BDSrhbrHFpcILNYoRDGUzOoEnUiFeA38pALHWId3gZ9Bz7dSTl3il3Ol46CzI30yJu&X-Amz-Signature=e96ecfce6571536086ebeca993cddd299a354bb526ba6b343df6e36d0c2c1a7f&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RY7GFCRH%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T170736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIEtJS8sI1dOlPkmhvIAH49zRNEzFOMu%2BSXlm29w4sHADAiEAipUcxCp9VkwF7co7fqzr2DERQtp6a0DejUGGVPJhIicqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBp64Rv8wjNaij9P8CrcA3GgOjJ8qQfeLMI9bBmB5cHmhoVCSSCSXBbmFstxqpofQZAKyHlfcxBiOcesnUGLV75hHjwo6qLihYf9ANdXNJRlTFAC0XFNtfkP0h3%2BvCjuHT7%2B%2FMVU%2FxC490SDNZGCICi69F3ijjtbSlHrRnalJDuWPrq%2B12Z0v3WygFYf5fbkU88biWvJjnBHCm4aqtVs41nAQ22JgY9r8B2tIwc2L%2BPbj4hE8oIsKG75XeRElh7DlK5MQmOduXO2XtGGSQy9%2Fzox4XIES5voX9JWRNGd4EK2Ojb%2B9ZpazAIsDVNX4p5asUNgsnhbwN2lbw8ljjQ5jcY4Ry%2BQL0hm5qf6UPx3C%2BRADx7S1gnJzXy1HcDI11kevCZlPdMCAHPw1c93Yk5Xq%2FqgJHZrdux4MB%2FTlMgM6xZ1nO7XcCVf1jz91AlMS2d6RB4Rhmb7f51ghGVoWOw7DMvj%2BBzY4ZgzqFnXZ68KFx9Kr9OXDShPtwWn%2B6LNEuPQIeeWc5%2FLZlI%2BKxGiWlTUQO5jL0jOnBP2pPOI7yAy4ce72mBEFdSQJ6pmcz%2BnAR0RPVCYTwJeCYk%2F%2FW9vnTctrWEiOZEY9b8Tu5mP%2BDr668wB2sxszrd2c6IoI5mO%2FEwh8drPHw3%2FHd3GzTvbMIvhvMEGOqUBYTUq6btsdHEvZe%2FXyHbqikkJV%2BBPBj4fn7wKN4mDn8S%2Bgdk%2FcxZNoxf1CYEfI6NrZA3oBl8mUf5Rn2KRKreiBsQ6sbeGrf0jpi8NHenfYZayjQiJBQ6p%2B8lqtsWGPXNmq3M7YC1YwpVUVVvBfsCtvjkrev%2BDSrhbrHFpcILNYoRDGUzOoEnUiFeA38pALHWId3gZ9Bz7dSTl3il3Ol46CzI30yJu&X-Amz-Signature=0d17a7ed6dca1067d3d2f422b66c7276af0d15545dbe2159404bdf25f8dd7638&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
