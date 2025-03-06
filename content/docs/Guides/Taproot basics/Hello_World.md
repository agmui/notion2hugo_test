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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HB2TWIK%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T230809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHenyfzZR%2FUeyA62gTk7PHH0Q2sCugIacqul2NWYnN1dAiEA4G5h5kO7V%2BOKfLT9jE26cIvyR0chIFqxDcrgw%2Ftksv4q%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDKpjs%2BjYAORbCbK4qyrcA5auZ8BFlz6tjoTp275WTZbkq4fGWEFyASaxp5GsfAgxHls37Kn74TZjUx%2F2mbZcDRsKaiAkAyVeyUjtgr84FF2zhWH4kW1yABPDuqF2nbLSruBo4Y4OWvA%2FF8%2B3QPBztG6xSzeb8K%2FC%2FrusqR7cNUhOKBnTUk9HmHZF54Kk0rDxyfqjqX0Men%2FCA1S1cIF1nvKGnePydtJoa3qLtJaDEVPw5%2F%2BEBS5uIQaKHfkDjSz8rqrF9iCanevIONADP1%2FgJeUVpzSL%2BSiwZYu6KUDulTHb5EUoflg1xVtoApNTmzHYnTJ%2F9THRhamowSbLpp7eeEH%2FoAJPn6%2BwgZGHFlIcynpEQZmdMBOr7RVQ%2BurXHOf4G6LYOSCotj%2FwYdMlUKn0qivoYpz9cZp4SXwB0TRRmCas27hgDwJiilAwGJZPYo3dgOrgaazzyju0txf%2B83cv2Rp9%2FNGG0n3RzaCUrMlkI8fXsn2lqnDDZ%2FOmG9rcPVxFIBtTdC7pszYY7GNSC8aEptqvdNnrwBMsKxngJz1G%2B7i1n0fgQ%2BckbQSsCtsd9d5c%2FTmG%2FJ7kisSL%2BGkQNLRP4IMmIwwWH%2F6zgOSgqTHCiZxzPxlEV375itYh8ArLvZYVY5HOloB%2F94JcdClxMNnIqL4GOqUB51vMEON%2FJWj6BzQjrJvzmCFW6v%2BuNkV%2FP78hAS%2FIrXRDBC%2B8oo%2BEp9vq4I%2FEc7w1YkPR1FtwO%2F48vuYL4mHuAMQk4TKILbFbFOX6RaSKusNNe3FVv%2FzHZd8QFa8%2FtnfmUQThgIkAZSNy2Gg300MZCyuj6j62UGPsX5GCY3dOJFXknsE5XbV9XJs6lMbQw8e4mK0eG1lRUzhgQo8GO1oDfzoGV2zj&X-Amz-Signature=b177e310beb3f8f2749277757227b2f3b1ded544d33a870a80ecb4704a435df6&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HB2TWIK%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T230809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHenyfzZR%2FUeyA62gTk7PHH0Q2sCugIacqul2NWYnN1dAiEA4G5h5kO7V%2BOKfLT9jE26cIvyR0chIFqxDcrgw%2Ftksv4q%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDKpjs%2BjYAORbCbK4qyrcA5auZ8BFlz6tjoTp275WTZbkq4fGWEFyASaxp5GsfAgxHls37Kn74TZjUx%2F2mbZcDRsKaiAkAyVeyUjtgr84FF2zhWH4kW1yABPDuqF2nbLSruBo4Y4OWvA%2FF8%2B3QPBztG6xSzeb8K%2FC%2FrusqR7cNUhOKBnTUk9HmHZF54Kk0rDxyfqjqX0Men%2FCA1S1cIF1nvKGnePydtJoa3qLtJaDEVPw5%2F%2BEBS5uIQaKHfkDjSz8rqrF9iCanevIONADP1%2FgJeUVpzSL%2BSiwZYu6KUDulTHb5EUoflg1xVtoApNTmzHYnTJ%2F9THRhamowSbLpp7eeEH%2FoAJPn6%2BwgZGHFlIcynpEQZmdMBOr7RVQ%2BurXHOf4G6LYOSCotj%2FwYdMlUKn0qivoYpz9cZp4SXwB0TRRmCas27hgDwJiilAwGJZPYo3dgOrgaazzyju0txf%2B83cv2Rp9%2FNGG0n3RzaCUrMlkI8fXsn2lqnDDZ%2FOmG9rcPVxFIBtTdC7pszYY7GNSC8aEptqvdNnrwBMsKxngJz1G%2B7i1n0fgQ%2BckbQSsCtsd9d5c%2FTmG%2FJ7kisSL%2BGkQNLRP4IMmIwwWH%2F6zgOSgqTHCiZxzPxlEV375itYh8ArLvZYVY5HOloB%2F94JcdClxMNnIqL4GOqUB51vMEON%2FJWj6BzQjrJvzmCFW6v%2BuNkV%2FP78hAS%2FIrXRDBC%2B8oo%2BEp9vq4I%2FEc7w1YkPR1FtwO%2F48vuYL4mHuAMQk4TKILbFbFOX6RaSKusNNe3FVv%2FzHZd8QFa8%2FtnfmUQThgIkAZSNy2Gg300MZCyuj6j62UGPsX5GCY3dOJFXknsE5XbV9XJs6lMbQw8e4mK0eG1lRUzhgQo8GO1oDfzoGV2zj&X-Amz-Signature=73aec0a45d145df07f4b4e742e22b935f481f86e4bdc7a23e784efd0e3a86600&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
