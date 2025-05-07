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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UV7Y6QYD%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T132458Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID2cTjWrPK8Vh9tc3du7POnOWTHSwtybvqvweowfbf75AiEA4vEoyO0imhLdk%2F2h25rMEMvXgrOMlIiHNlKAGss0ZZ0q%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDFhwqAehiNik%2B2mJYyrcA3ZFSKUtY9nNNY5H8B%2FffztnIanzFZJD1r4lKNQV%2FIpZE0kx5ig3A36OqopIojDCBKcKh8v%2Fm2AK1oYzC9umw7%2FSCfxZ8l%2F%2Fyc4AaNNezNewdYe%2FVc7LkFznVTUWlRXoD2f6FfS1bH1Dg97hc%2BNfcWk%2BCFfBA%2BZR26yRHKVasOBAKbTUhkwdVgeVD%2Fn4i3OEbScMqTTxu7NSnCYFqzV7LXqhmfbThyaLPiikiXG0qmgHWPnUtb0ncXyTcic6jEeem8hGhpotkGIyRXjOJQssDX0ungkSj3%2FDYy6PgYg7u%2B31EBEtq5DDrHyGeV0Kda7F3dnAFjrrv5OL8atYPADbwANtJqh48T4X0l0pYyk0C4aWFpVCo4uliQ1gRbm%2BdkIk954WkVFHlxTYKYCgli6zXqRMYCFqi9uPG9ylAYel5Zlrni5xndvUka%2FvoMXpJ6WDrHVFDM68PSYee6iJs2i8uZ%2FWcznJ5WXUtXfG97mRsNBgnYATVZuz7dcN2DNPYyWlsC6uyu7M2qfQ8MvsXifOLhpl2ngBLwa3D98%2BqZ1YqsA0c4pQRkRwbb%2F6UZvNiYPuE5NArdtJoqpGei7d2NQ6bRrQMVSycdywgBbiT%2FqS9cL7zYArLLz41l9Rg5fzMO2z7cAGOqUBmfESVlo%2FqEU2%2BcyWZ3iPdewWxD1lh4Wq1Rqf3GnjEZ2rBtj2h871z%2FNOIL5jaYZ0vQ%2BmXdw1Hwf3QqnWGZWj2nY6ppkuacHsG0h2BBUnbpJ2VOMOyfOtRopwSvX6POoocBMFQ1RBNmS%2Bzq%2FBSVkec3zgKxvtmXwvMeh0fDrEPTMGBW7lr%2BeyAWGVYtj5QPYw7S3y%2Bg9f5yYOWXb%2Biz3G9b0YYMZ8&X-Amz-Signature=38ed01b5d54b50b929df79c1c53f42fec8f78a306952942830dfe75ad0ef4cd6&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UV7Y6QYD%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T132458Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID2cTjWrPK8Vh9tc3du7POnOWTHSwtybvqvweowfbf75AiEA4vEoyO0imhLdk%2F2h25rMEMvXgrOMlIiHNlKAGss0ZZ0q%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDFhwqAehiNik%2B2mJYyrcA3ZFSKUtY9nNNY5H8B%2FffztnIanzFZJD1r4lKNQV%2FIpZE0kx5ig3A36OqopIojDCBKcKh8v%2Fm2AK1oYzC9umw7%2FSCfxZ8l%2F%2Fyc4AaNNezNewdYe%2FVc7LkFznVTUWlRXoD2f6FfS1bH1Dg97hc%2BNfcWk%2BCFfBA%2BZR26yRHKVasOBAKbTUhkwdVgeVD%2Fn4i3OEbScMqTTxu7NSnCYFqzV7LXqhmfbThyaLPiikiXG0qmgHWPnUtb0ncXyTcic6jEeem8hGhpotkGIyRXjOJQssDX0ungkSj3%2FDYy6PgYg7u%2B31EBEtq5DDrHyGeV0Kda7F3dnAFjrrv5OL8atYPADbwANtJqh48T4X0l0pYyk0C4aWFpVCo4uliQ1gRbm%2BdkIk954WkVFHlxTYKYCgli6zXqRMYCFqi9uPG9ylAYel5Zlrni5xndvUka%2FvoMXpJ6WDrHVFDM68PSYee6iJs2i8uZ%2FWcznJ5WXUtXfG97mRsNBgnYATVZuz7dcN2DNPYyWlsC6uyu7M2qfQ8MvsXifOLhpl2ngBLwa3D98%2BqZ1YqsA0c4pQRkRwbb%2F6UZvNiYPuE5NArdtJoqpGei7d2NQ6bRrQMVSycdywgBbiT%2FqS9cL7zYArLLz41l9Rg5fzMO2z7cAGOqUBmfESVlo%2FqEU2%2BcyWZ3iPdewWxD1lh4Wq1Rqf3GnjEZ2rBtj2h871z%2FNOIL5jaYZ0vQ%2BmXdw1Hwf3QqnWGZWj2nY6ppkuacHsG0h2BBUnbpJ2VOMOyfOtRopwSvX6POoocBMFQ1RBNmS%2Bzq%2FBSVkec3zgKxvtmXwvMeh0fDrEPTMGBW7lr%2BeyAWGVYtj5QPYw7S3y%2Bg9f5yYOWXb%2Biz3G9b0YYMZ8&X-Amz-Signature=9905f625d4252fee358dbf9a9b4e839dc034e1ada5302fa98bf48fde1025997c&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
