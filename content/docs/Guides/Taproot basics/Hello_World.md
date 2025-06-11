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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FBC5UYU%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T051031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCjggnVO5S7HxIFfc7%2FTeoDV8EOZPQdAj%2FtSsTVB3YADAIhAOmqyl7UHepD1UaeUYRwXnl0C6V8iSGHkcad1mEGTeQGKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyHYpKCKbKRGG4AddEq3ANq1kaVSdXW6Q9jN9ljx4GHbkahwOrjHr7u0SpWLFOHQGuCWV%2Bf1bfs1KmI7Cd9SkBwm%2FotDTeKIqA%2Boo2oAiw%2FV%2Bm4TGkh0IFeTexAOtHitWZtcVdS89%2FS56aPiqn5s8qFlyVBsLju2%2F5Vl%2FBEzSj9aDABdbxlwIvFWyAQmclBNp%2B3k28I%2FyNUolJB3VOX%2BICTTHaGcT0%2FB7kbwc6gFApUxkgCDkwuzYI42hZI%2BMnqHJaZBL6OactG5DK9FAvlO6AxsjDsuKcZY0VHN2CuM6jzsoC5P5dw8CH21NXW5bob%2Bj20xa09kpOcZDin4Tw3AJpmN1an4usfZ5JGpeFjOLok68c0lPvl3ScaabHGp9ULz1WNnsd5jJVVWZobSNcwauxiWIzVwejF6%2Bja9Wie%2B4Jp3RikumvXJ2KJqCbJKYUjZJRM5Io2AMvQ0S7CP44OI7LlD1URINKCTHDnARsICSmUFWbZ5VYvNDVUGNDiiV4cQNFe0JxaAPxVqubwiL2K56a%2BR5iK8RyfAfunNk%2Bin6pQ8L%2Budj%2BZoW4w7qOjlfDUBh2cV1%2B4pMzupRaLEh6CCc9fXg%2FN9OiRpgngRHow742J%2BoDY%2BpAbNBt4VtD2U5gRXnhC%2FOxO2%2FclHoa%2BDTDmlqTCBjqkARg%2BCj%2Fl6qnetK78BNT%2FUQrlx6BdLQ9ZeeJ4TT9gmqOdfGmw%2BnNLrmV1NtWkXEZl6zSwDbwqN9bHX5%2FY9hf9505efRGtIBN%2BczwcK0%2F0lpJlCLmX8NvSI2dJ1mGSDN32rMc6Ex2vCXl2M1U4Lqz5I9EYTG3c%2Bt%2FjBma3etZx%2BaPmRsnB58XOF06E627Ukm8dDwlKRZDJ%2Be1S0vpF84NEzcra8czB&X-Amz-Signature=7dede9ad3c6ad1cd4a24695b366363f9288c8894149b7ba65cc1f544c3225381&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FBC5UYU%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T051031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCjggnVO5S7HxIFfc7%2FTeoDV8EOZPQdAj%2FtSsTVB3YADAIhAOmqyl7UHepD1UaeUYRwXnl0C6V8iSGHkcad1mEGTeQGKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyHYpKCKbKRGG4AddEq3ANq1kaVSdXW6Q9jN9ljx4GHbkahwOrjHr7u0SpWLFOHQGuCWV%2Bf1bfs1KmI7Cd9SkBwm%2FotDTeKIqA%2Boo2oAiw%2FV%2Bm4TGkh0IFeTexAOtHitWZtcVdS89%2FS56aPiqn5s8qFlyVBsLju2%2F5Vl%2FBEzSj9aDABdbxlwIvFWyAQmclBNp%2B3k28I%2FyNUolJB3VOX%2BICTTHaGcT0%2FB7kbwc6gFApUxkgCDkwuzYI42hZI%2BMnqHJaZBL6OactG5DK9FAvlO6AxsjDsuKcZY0VHN2CuM6jzsoC5P5dw8CH21NXW5bob%2Bj20xa09kpOcZDin4Tw3AJpmN1an4usfZ5JGpeFjOLok68c0lPvl3ScaabHGp9ULz1WNnsd5jJVVWZobSNcwauxiWIzVwejF6%2Bja9Wie%2B4Jp3RikumvXJ2KJqCbJKYUjZJRM5Io2AMvQ0S7CP44OI7LlD1URINKCTHDnARsICSmUFWbZ5VYvNDVUGNDiiV4cQNFe0JxaAPxVqubwiL2K56a%2BR5iK8RyfAfunNk%2Bin6pQ8L%2Budj%2BZoW4w7qOjlfDUBh2cV1%2B4pMzupRaLEh6CCc9fXg%2FN9OiRpgngRHow742J%2BoDY%2BpAbNBt4VtD2U5gRXnhC%2FOxO2%2FclHoa%2BDTDmlqTCBjqkARg%2BCj%2Fl6qnetK78BNT%2FUQrlx6BdLQ9ZeeJ4TT9gmqOdfGmw%2BnNLrmV1NtWkXEZl6zSwDbwqN9bHX5%2FY9hf9505efRGtIBN%2BczwcK0%2F0lpJlCLmX8NvSI2dJ1mGSDN32rMc6Ex2vCXl2M1U4Lqz5I9EYTG3c%2Bt%2FjBma3etZx%2BaPmRsnB58XOF06E627Ukm8dDwlKRZDJ%2Be1S0vpF84NEzcra8czB&X-Amz-Signature=c16d0a4dcc4f98d1316c24467f02fca2a541d677f7f94afbd1f4a67d98153b64&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
