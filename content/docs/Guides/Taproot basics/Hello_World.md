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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7VBEFFD%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T170151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE2xU%2BriGTr%2BBptc76pYJSrNAlfc3GFo334mIEuBzeHtAiAr74hGOozAjnRX1pskjezF9qlzuymDvsnMXdcBJBzn9CqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9xA1HmO3%2BfL8rjDLKtwDUIFZ%2FJtfQcLMNCfxmx6dc3Ak9CQRC3b8VMoR7WEFzoJi2JNKI0szF13KVRFJcNecdsF5Xz35KesqWup9coxXE2nSs1%2FF%2BN1Bv2n%2FvAIeavqVP0XkWOAQ8udc5yLu%2BYmv6XT5fSyGJWzlqbyy%2Fr8zxYJJcJK8xDOGbq%2Ff%2B6IEHtYpno2SzgPhZMzwfp4n7vhczCXo4kcCYaUhDVLc2Iqdt1z2QaSwYLP4kbvb53nncc6We8hmr8c7%2BEb1nQV31vuwNU2MpJmJlOcbMwr9SyW9fwSscVrBqqklJ%2B7rcqU0aSpt5kNQs7Q5HVtTWwHB15OodiDmNFkjWl4r0p%2FO7KkHEb1GmeXA%2F69SNDchGT3%2FwwrqPH30Bt0%2BpX9pQV55tBpzEkij1sFn4xK4pzjkVKgYOKwtVXyodrGFHQ2LZKPS2EMbRJEttTfPokcsc1vLh01jAGLNVgBVrvMawgK19MtMLVPOIKg1JqBLi91Qjdbtv3ginaFVHXJm%2BOOMmquOcLa6XckhYjIKzX9JRZEz8hjq5yqYvv%2F5hfKn%2BT2mKoNzM1aoKOr6EGNuiuwSu4x7sI4emzr7hAq%2FhDo2ARLIcYzgKXyffRhyGe3hCWIEGldUgFsbuXfbvFOUPbNFlHgwy8r4vAY6pgFU7hER%2Bqmapx0GR0XhWFyyRaaqZOnDZDSt6INdUe0aLIDR8h4e%2BjtsGfszRxUQshYPdFP1MiVT2kzrCQXx7j9gKwMAiW36la2RPSV%2F34F5D2awFYaFaW70e47ozscOi3mcy%2Bs9woIP4iDFj8y7sr3Zkf%2BaTDyvucTI%2F9S7Il7oojXBqd%2FPGgzQ78n0ZA8FFZkgiINb34teeCLjtxM4wUM5GFsl6wKI&X-Amz-Signature=75e4d86844809f0cd9bd8c356df8d03f79a3a93d6a0db5d82ae602b54c0d7d8a&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7VBEFFD%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T170151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE2xU%2BriGTr%2BBptc76pYJSrNAlfc3GFo334mIEuBzeHtAiAr74hGOozAjnRX1pskjezF9qlzuymDvsnMXdcBJBzn9CqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9xA1HmO3%2BfL8rjDLKtwDUIFZ%2FJtfQcLMNCfxmx6dc3Ak9CQRC3b8VMoR7WEFzoJi2JNKI0szF13KVRFJcNecdsF5Xz35KesqWup9coxXE2nSs1%2FF%2BN1Bv2n%2FvAIeavqVP0XkWOAQ8udc5yLu%2BYmv6XT5fSyGJWzlqbyy%2Fr8zxYJJcJK8xDOGbq%2Ff%2B6IEHtYpno2SzgPhZMzwfp4n7vhczCXo4kcCYaUhDVLc2Iqdt1z2QaSwYLP4kbvb53nncc6We8hmr8c7%2BEb1nQV31vuwNU2MpJmJlOcbMwr9SyW9fwSscVrBqqklJ%2B7rcqU0aSpt5kNQs7Q5HVtTWwHB15OodiDmNFkjWl4r0p%2FO7KkHEb1GmeXA%2F69SNDchGT3%2FwwrqPH30Bt0%2BpX9pQV55tBpzEkij1sFn4xK4pzjkVKgYOKwtVXyodrGFHQ2LZKPS2EMbRJEttTfPokcsc1vLh01jAGLNVgBVrvMawgK19MtMLVPOIKg1JqBLi91Qjdbtv3ginaFVHXJm%2BOOMmquOcLa6XckhYjIKzX9JRZEz8hjq5yqYvv%2F5hfKn%2BT2mKoNzM1aoKOr6EGNuiuwSu4x7sI4emzr7hAq%2FhDo2ARLIcYzgKXyffRhyGe3hCWIEGldUgFsbuXfbvFOUPbNFlHgwy8r4vAY6pgFU7hER%2Bqmapx0GR0XhWFyyRaaqZOnDZDSt6INdUe0aLIDR8h4e%2BjtsGfszRxUQshYPdFP1MiVT2kzrCQXx7j9gKwMAiW36la2RPSV%2F34F5D2awFYaFaW70e47ozscOi3mcy%2Bs9woIP4iDFj8y7sr3Zkf%2BaTDyvucTI%2F9S7Il7oojXBqd%2FPGgzQ78n0ZA8FFZkgiINb34teeCLjtxM4wUM5GFsl6wKI&X-Amz-Signature=853083cf18d9fc5633ef1dc2a475053c1abd5860dcdbbc312ff62018e9d1a365&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
