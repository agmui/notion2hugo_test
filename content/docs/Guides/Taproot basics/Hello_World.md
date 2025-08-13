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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BCMCLTX%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T210816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwytvqKaWXtn56Oglaw6fGIwsfuhFRK5uJgoSeDkfAiQIgQDdjFnwMivxfFGo8vmt5p282XzhkiQh2nfdt%2FOiFvCoq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDEn9YoenDbUyQYIzmircA1lUcINkTGgnH5%2FJiimLa5S0hoBncFQ0otExwRWjbeVf7TGWTji5VUEEU8r%2BVMyc00LnpvRTy1AnUjI5rZOoJbemvt2ewnKkRQhSvk7g5Ke%2B3CGvldmi8fVMPjifeShN0JG16ARXQbDWJImGbN%2FuETUom6cpozJF5e%2Bjarw0zwz0eEyASWWGKCGCyEvCqgx%2B7hhu72wGtOAe6DhXgRBhTu3wQw3YdcCjWMm5bmgxTTbLNDaGKNIeFUMayFj%2BqBSbKzyAzqeMdLJ5lpPYFUwEIJ%2BEDdqGBkBmkBMAbFG8i05jP0IFO8xG98hQ%2F5l70c%2FYx5w1eoOl%2FwEt8MJPawkqrlnpLhK6w%2BThtF6OHojEgD%2BrZAPQjwzDf2s8c1XR6hhEGezNl7spRqWIvUE1ISg7ztrx7Me%2B%2B6Ce5iAN7Jvy6txWXaSusdxdpDXsUAdtBz078uI%2BDYeqYcdU3DXs%2BUWnFfkdT5t6o3CksA2ArCQbahLohyZctyqXY62ioaYVkBC%2FYVgE2%2BVaCmIYEVrXxF13ji5z6M82TmJZsCb2ahpZ2Sq5Uij1DmLbaJiYoMGILSTY%2BtUr%2Bj0chz5MAPBOULGM5CQyBRDFCNUJvMCQXPASXmEoNpa80eSXGj2BA7KBMO7q88QGOqUBoQDOXkmSryuvzOqDZXzf7MyAAbud5fxahaR8%2FrzlxiS1AVTchONNyIrDru3xR1pgrQjoPyxeLcmfkZBalFWhccgOFtbr1B8KGRXZqCl8htpiRrahCyCV2iutEnn1GWT66C%2FgM2ixV34ZaRxaw%2BmeLGHfYOg2OJK5lUh4iyfJrNrNFHpBSF84X8O5b1D%2FyiEScrzb9yKRZFIHcm%2B7XqvPotbKGpFN&X-Amz-Signature=cc45aa0fae4595642990d2000b37755301991a189f5e57072806e920b509586b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BCMCLTX%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T210816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwytvqKaWXtn56Oglaw6fGIwsfuhFRK5uJgoSeDkfAiQIgQDdjFnwMivxfFGo8vmt5p282XzhkiQh2nfdt%2FOiFvCoq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDEn9YoenDbUyQYIzmircA1lUcINkTGgnH5%2FJiimLa5S0hoBncFQ0otExwRWjbeVf7TGWTji5VUEEU8r%2BVMyc00LnpvRTy1AnUjI5rZOoJbemvt2ewnKkRQhSvk7g5Ke%2B3CGvldmi8fVMPjifeShN0JG16ARXQbDWJImGbN%2FuETUom6cpozJF5e%2Bjarw0zwz0eEyASWWGKCGCyEvCqgx%2B7hhu72wGtOAe6DhXgRBhTu3wQw3YdcCjWMm5bmgxTTbLNDaGKNIeFUMayFj%2BqBSbKzyAzqeMdLJ5lpPYFUwEIJ%2BEDdqGBkBmkBMAbFG8i05jP0IFO8xG98hQ%2F5l70c%2FYx5w1eoOl%2FwEt8MJPawkqrlnpLhK6w%2BThtF6OHojEgD%2BrZAPQjwzDf2s8c1XR6hhEGezNl7spRqWIvUE1ISg7ztrx7Me%2B%2B6Ce5iAN7Jvy6txWXaSusdxdpDXsUAdtBz078uI%2BDYeqYcdU3DXs%2BUWnFfkdT5t6o3CksA2ArCQbahLohyZctyqXY62ioaYVkBC%2FYVgE2%2BVaCmIYEVrXxF13ji5z6M82TmJZsCb2ahpZ2Sq5Uij1DmLbaJiYoMGILSTY%2BtUr%2Bj0chz5MAPBOULGM5CQyBRDFCNUJvMCQXPASXmEoNpa80eSXGj2BA7KBMO7q88QGOqUBoQDOXkmSryuvzOqDZXzf7MyAAbud5fxahaR8%2FrzlxiS1AVTchONNyIrDru3xR1pgrQjoPyxeLcmfkZBalFWhccgOFtbr1B8KGRXZqCl8htpiRrahCyCV2iutEnn1GWT66C%2FgM2ixV34ZaRxaw%2BmeLGHfYOg2OJK5lUh4iyfJrNrNFHpBSF84X8O5b1D%2FyiEScrzb9yKRZFIHcm%2B7XqvPotbKGpFN&X-Amz-Signature=f34a2aa82fd9a10f22ca8f9bfd34883ad0573221fb58a328458f762c85a96749&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
