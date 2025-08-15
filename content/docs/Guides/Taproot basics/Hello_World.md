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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636RZXYU3%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T091007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIFYdN8ywc47oupLlQLGT8Jl%2FtIo4H5dxdHiIfdJjIzkRAiA2iiq5x%2BGfqsZUATcqQUz5lYS5Ts3izquT6snaLZ4dWyr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMwtrauruuJytQz%2FQYKtwDs%2B73cHs7ZEhTT%2Bg%2FOBslrBdmBSeGjxG0Z7ZurfpjEeCuKjcZzcEwkdmKfxdOyr7HCDeNaGQEPf0tHUOArabR%2FtkS29QXO1yh7z3Qk%2F1huhYiKu0nTbyHCrliLSNaT6fNU1S3RAUJ%2FjeWgAimnGHva8BYmVoBfIHDxuoXMkqx5G%2B6zn7AWtcQ1kPnIU%2FwLMylolxOLVtFN2PYBCmkkIx8DL%2FCMaVfZw1dI7yeowhjoOCdap99jL%2BFt6298ZV1vwYFdubOGUgKYu1mfjhoZKPClQcL6kLe9eEHt9R%2FjCIQIO5uPIMIMOBrmty2d42KIWA7wDghPt%2FOi1iixxWTUPF6fwPrE7Cw27%2F9W2ffuHApYKVyHhttA8TNm6yuaoiRlzmMp5oOPsVhMljU83YCwCywUjGa7PdimyoWUfCoMrlzD2F3g1k1lpBxflxl38deZgiKE%2BsSFZwPTfGYvcUOaAwblWKd%2FN4e8fVObacfdilrmnkXujdJOd1Sj9VDVsMnH95Y6QKrVeJc562AmaeKKfLbB40m3gtoMScVhDPhOzOTD5FS786BwRKXuv7v0c7j%2BEQ0ySNzsJRt97j0gAmSQrPiWCxLdbMTQye4eDAcdx%2FJkKx6eUS1daxkukJUMNowke%2F7xAY6pgHkLZUtG65l%2F9fhFg2jQ2TauX8S0kaVtsZKV%2BVC8M1D59r5s0GKqnImGG3HSr1oXwP0Wo72SXOoCligTdDL%2BnZf1%2Bf%2B0%2B%2BKzXmeZeyVk%2FSTCRxKMGwOYYw7m964vI0IvBVOhHCtLkd5WwSmSECfcu0rvNlFo7cFeTrBvp0MgZW6hAgfPDP9YBttoibePIY%2BaY%2Bq5Sw1HfTrysR3oyFxQcRvFPe44XWy&X-Amz-Signature=2348079756683f92949b84fc8260f5a733201d6a7fb9a3aab612414e59706f92&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636RZXYU3%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T091007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIFYdN8ywc47oupLlQLGT8Jl%2FtIo4H5dxdHiIfdJjIzkRAiA2iiq5x%2BGfqsZUATcqQUz5lYS5Ts3izquT6snaLZ4dWyr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMwtrauruuJytQz%2FQYKtwDs%2B73cHs7ZEhTT%2Bg%2FOBslrBdmBSeGjxG0Z7ZurfpjEeCuKjcZzcEwkdmKfxdOyr7HCDeNaGQEPf0tHUOArabR%2FtkS29QXO1yh7z3Qk%2F1huhYiKu0nTbyHCrliLSNaT6fNU1S3RAUJ%2FjeWgAimnGHva8BYmVoBfIHDxuoXMkqx5G%2B6zn7AWtcQ1kPnIU%2FwLMylolxOLVtFN2PYBCmkkIx8DL%2FCMaVfZw1dI7yeowhjoOCdap99jL%2BFt6298ZV1vwYFdubOGUgKYu1mfjhoZKPClQcL6kLe9eEHt9R%2FjCIQIO5uPIMIMOBrmty2d42KIWA7wDghPt%2FOi1iixxWTUPF6fwPrE7Cw27%2F9W2ffuHApYKVyHhttA8TNm6yuaoiRlzmMp5oOPsVhMljU83YCwCywUjGa7PdimyoWUfCoMrlzD2F3g1k1lpBxflxl38deZgiKE%2BsSFZwPTfGYvcUOaAwblWKd%2FN4e8fVObacfdilrmnkXujdJOd1Sj9VDVsMnH95Y6QKrVeJc562AmaeKKfLbB40m3gtoMScVhDPhOzOTD5FS786BwRKXuv7v0c7j%2BEQ0ySNzsJRt97j0gAmSQrPiWCxLdbMTQye4eDAcdx%2FJkKx6eUS1daxkukJUMNowke%2F7xAY6pgHkLZUtG65l%2F9fhFg2jQ2TauX8S0kaVtsZKV%2BVC8M1D59r5s0GKqnImGG3HSr1oXwP0Wo72SXOoCligTdDL%2BnZf1%2Bf%2B0%2B%2BKzXmeZeyVk%2FSTCRxKMGwOYYw7m964vI0IvBVOhHCtLkd5WwSmSECfcu0rvNlFo7cFeTrBvp0MgZW6hAgfPDP9YBttoibePIY%2BaY%2Bq5Sw1HfTrysR3oyFxQcRvFPe44XWy&X-Amz-Signature=66fc6b5973213338d8663212c11637934b8a222b5a98b88165cf9b8de029d49c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
