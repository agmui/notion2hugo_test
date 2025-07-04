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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7WSRLEP%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T132338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCIF5zhNlux7rhoLdBUHJ%2FrdyvLGTNktQvqGvgIfT4sVinAiA5%2BIJJ1Xwn7PyDyy6b8VjJT9k8rfmiJ8y3%2BhKsc7YBWSr%2FAwguEAAaDDYzNzQyMzE4MzgwNSIMq4dL1O8nnf3P7iv0KtwDG%2Fecdhha1UiAQqk8Feea7d9xwyHLj%2FsbuxAF7K90%2FHqPw2cUIHL6EqkYAm3JlLRW3JXumatdL0%2F7kSlrOG%2BUQvondVXm1fcf%2B23sFS59EiOnKN2Dskjdn8ULlFPyjuV%2F98zya9%2B%2B4SB%2FaVVl48DpFpUQzvfytnS4cJrp2Z7t2b2xjYc09yHaEvpuByN5jdFZSQptTaFHfNH%2Fho%2F9h2pTkcGd8uLY4W2fLQN2n0ASSetUiDfqALpHMye5gi6sqUv8HkWRrU3%2FN1rEFc8nnNN04ygQNAI7vLkZCcsUGfITUmr1G%2FjQqF%2BIxpxt8wF87FoXO4tUQaOWjx7equketgM6FhqnCcDwKC5v1UqBFGd2VHRMpFtHfgARaqAPPDTeGqIV8%2BESqClzpGTK3kZ4tSBvkQAnFGvTgw2DA%2B%2Bz9%2By%2F6ZUmcU0w4w6IOnO3gyhx1HGqO5RzQBg9ErUjRhuWZAeioxw1aaIWhZBc5YhcgKshWH%2Fmm2nxbYDnKDyodAQ4xr2Ejsl142LqlVtg4prg5br17%2BJAv2uhdhBiIPzaQKGA%2B5E4KKTUiMgg5kjn32lPPeApxKuCtNGiSCFpLUX99PXlM%2F9ZR4kaPEt23zEZSpBiw%2Fy%2F2ZITHcUd3yqKCYwwupyfwwY6pgHRDBcJnp%2BO2M11AfHsOlLe6CzQ5ZL%2F85ErgFw2NKOkG6FfSrkUJ%2FTpPGv4ufqAKnkkAHqbc5GR4rlp9BbRaqHH%2Boq0n%2FMRYUmh%2FQTk45VSmHEmAdsq1U3Xdrp8omxjwrGDrfoRMOLksWD%2FgJXbtLVwhg1decKZ4Nce6gMVZAyJ%2F4%2FeS5W1TpJjfAGmdmc8jQkcnIZwqq%2FGvN2vDnHhr4vqSAeVKxKz&X-Amz-Signature=5596bd90bfed913cc1dc76f192f0497e86b83191c8dcbd4b77164b0f2d86d95d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7WSRLEP%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T132338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCIF5zhNlux7rhoLdBUHJ%2FrdyvLGTNktQvqGvgIfT4sVinAiA5%2BIJJ1Xwn7PyDyy6b8VjJT9k8rfmiJ8y3%2BhKsc7YBWSr%2FAwguEAAaDDYzNzQyMzE4MzgwNSIMq4dL1O8nnf3P7iv0KtwDG%2Fecdhha1UiAQqk8Feea7d9xwyHLj%2FsbuxAF7K90%2FHqPw2cUIHL6EqkYAm3JlLRW3JXumatdL0%2F7kSlrOG%2BUQvondVXm1fcf%2B23sFS59EiOnKN2Dskjdn8ULlFPyjuV%2F98zya9%2B%2B4SB%2FaVVl48DpFpUQzvfytnS4cJrp2Z7t2b2xjYc09yHaEvpuByN5jdFZSQptTaFHfNH%2Fho%2F9h2pTkcGd8uLY4W2fLQN2n0ASSetUiDfqALpHMye5gi6sqUv8HkWRrU3%2FN1rEFc8nnNN04ygQNAI7vLkZCcsUGfITUmr1G%2FjQqF%2BIxpxt8wF87FoXO4tUQaOWjx7equketgM6FhqnCcDwKC5v1UqBFGd2VHRMpFtHfgARaqAPPDTeGqIV8%2BESqClzpGTK3kZ4tSBvkQAnFGvTgw2DA%2B%2Bz9%2By%2F6ZUmcU0w4w6IOnO3gyhx1HGqO5RzQBg9ErUjRhuWZAeioxw1aaIWhZBc5YhcgKshWH%2Fmm2nxbYDnKDyodAQ4xr2Ejsl142LqlVtg4prg5br17%2BJAv2uhdhBiIPzaQKGA%2B5E4KKTUiMgg5kjn32lPPeApxKuCtNGiSCFpLUX99PXlM%2F9ZR4kaPEt23zEZSpBiw%2Fy%2F2ZITHcUd3yqKCYwwupyfwwY6pgHRDBcJnp%2BO2M11AfHsOlLe6CzQ5ZL%2F85ErgFw2NKOkG6FfSrkUJ%2FTpPGv4ufqAKnkkAHqbc5GR4rlp9BbRaqHH%2Boq0n%2FMRYUmh%2FQTk45VSmHEmAdsq1U3Xdrp8omxjwrGDrfoRMOLksWD%2FgJXbtLVwhg1decKZ4Nce6gMVZAyJ%2F4%2FeS5W1TpJjfAGmdmc8jQkcnIZwqq%2FGvN2vDnHhr4vqSAeVKxKz&X-Amz-Signature=4b2765083cdc597bb91e9c9f087763bc94e46785980c39aef28cf8d1b2ac6eb1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
