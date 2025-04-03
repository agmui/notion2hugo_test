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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URE6ND4O%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T140829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD4t6pp3XQ3FgL7cLFGo10d86wuvrHkzqJqjXZnfE%2BIwAIhAOCWjgHk%2FVNhT7plvF%2Ff%2BxkK7O1uFe%2FcDmE1YnEG1waDKogECO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxXO%2B%2FNVNKXYyyTHzgq3APQNwKc2zoJwzxZpIOSGhzHDBHTEMpc64LepPcuTl56%2BQ2KaSoGVa0KSQwbTFXvS9RiXRIo0wFHbNoQeoZ8bK%2FHFih27XSTY5AwSVfzIGz2NX80QjxJnp18k9nHPg2mh2c2aPD%2F%2Fynm5eClJ04yuj71Sm0%2BHB%2Fl95zlxcKZgHC8d8gNrnz2XdYNWz4V1o%2FG47xn0Es9lH2sS8t4xwXq9knYJ2XnUT63dUWE6ceM9xuViApJrhBKLNt3Yx3keU3Q%2FJ41DyzF7aj8aBkmTJq%2BDIT4bAkC57wjmtCNh6pGccd1jHCjhZm6MeX4Hudqdxqv10nDA%2Fsy4u921ovvTIgICKiFbRtAXOFJ%2FKNt9qVSyhQrF9B3Tou%2FhDUBbKbxpcEb7A5hMpFxKL%2BtIiIQwoqAfgk8xllPdq31TQeo3GqQtrm9C1pssuQHqTlASWoue4HOIEAYisvc9XOHnycumdTJRNg4DmC1Ov3XJEGruDGKwjHvscxNi6EnYCiL%2BZrSjWJiPwdMJWaxYj8hHvwBzaxrBcdUKzG9HlXTSJdD%2Bj03ILvgnRjcleB7jy5gsEmBept7TQ56o86RvucDzWJHmvasiaaQ5r%2FDD4nnmWQM5oS9GNe3u%2BQlIZVOjZ3f5b6TGDCCl7q%2FBjqkAQLIG7u5aMoR%2F8wsoaWM7wFEmsPZ4enzYWkRWZYlkDk3tIBj5oIO9IkDcdk8DpPr9p7ISy44HvgpS09lcP9Sj3o61X2%2B5O%2FMYe20RBtko2t4edRPeDGTJJq5XGkyrh4C7hcehZGufaW6Z02akwDmCgt2DyIbH52vVVn723wYjIyRJX1SibLwpV4bs2xN4q9PNu6KBG9hMbSYiul334tes%2F%2BYkmSr&X-Amz-Signature=06c8ae444d2a0b98b30d7ba400ae918d733e86157c2f8b6bd4c6f2409f37d4c1&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URE6ND4O%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T140829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD4t6pp3XQ3FgL7cLFGo10d86wuvrHkzqJqjXZnfE%2BIwAIhAOCWjgHk%2FVNhT7plvF%2Ff%2BxkK7O1uFe%2FcDmE1YnEG1waDKogECO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxXO%2B%2FNVNKXYyyTHzgq3APQNwKc2zoJwzxZpIOSGhzHDBHTEMpc64LepPcuTl56%2BQ2KaSoGVa0KSQwbTFXvS9RiXRIo0wFHbNoQeoZ8bK%2FHFih27XSTY5AwSVfzIGz2NX80QjxJnp18k9nHPg2mh2c2aPD%2F%2Fynm5eClJ04yuj71Sm0%2BHB%2Fl95zlxcKZgHC8d8gNrnz2XdYNWz4V1o%2FG47xn0Es9lH2sS8t4xwXq9knYJ2XnUT63dUWE6ceM9xuViApJrhBKLNt3Yx3keU3Q%2FJ41DyzF7aj8aBkmTJq%2BDIT4bAkC57wjmtCNh6pGccd1jHCjhZm6MeX4Hudqdxqv10nDA%2Fsy4u921ovvTIgICKiFbRtAXOFJ%2FKNt9qVSyhQrF9B3Tou%2FhDUBbKbxpcEb7A5hMpFxKL%2BtIiIQwoqAfgk8xllPdq31TQeo3GqQtrm9C1pssuQHqTlASWoue4HOIEAYisvc9XOHnycumdTJRNg4DmC1Ov3XJEGruDGKwjHvscxNi6EnYCiL%2BZrSjWJiPwdMJWaxYj8hHvwBzaxrBcdUKzG9HlXTSJdD%2Bj03ILvgnRjcleB7jy5gsEmBept7TQ56o86RvucDzWJHmvasiaaQ5r%2FDD4nnmWQM5oS9GNe3u%2BQlIZVOjZ3f5b6TGDCCl7q%2FBjqkAQLIG7u5aMoR%2F8wsoaWM7wFEmsPZ4enzYWkRWZYlkDk3tIBj5oIO9IkDcdk8DpPr9p7ISy44HvgpS09lcP9Sj3o61X2%2B5O%2FMYe20RBtko2t4edRPeDGTJJq5XGkyrh4C7hcehZGufaW6Z02akwDmCgt2DyIbH52vVVn723wYjIyRJX1SibLwpV4bs2xN4q9PNu6KBG9hMbSYiul334tes%2F%2BYkmSr&X-Amz-Signature=6c5468912ed52c91894adea533fb940bdf776d14a9dba3e3feb8ca595e9a6d3b&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
