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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNOQE6T3%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T041155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIDuSv7IAO%2BSauJRyVWE1oJ0hzzn7KWbxML8%2Fw6%2BmsAkQAiEA0wfyR8cQkPrRzS6IhL8TuuZ5gCSfc6SVMCxzAWaqDogqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKnCQOUSmnJZ5xeq%2ByrcAxPsGaHJGCcpoh4iwPwHxBAzwOAeQ7tfdw1nNyg96Pv%2FuelddHNhh7cUYpcInFgNlmFfXsz4Td6amSrxIoVvKW%2FUqlA1J5UZJasqow6zhVaTjJSBUeLehMch%2B%2FmVJ4xooCpPQ5SzkZy0MTTgl8HCUblzFiiwB0ouSDKJ%2BSxdOsRf%2BJxGnsR9nBXhC1nnxVNa8BhDO1eq3HYade50L%2FYlCWNy0Ef2mGm%2B6nbfwF7caLv8%2F%2BRuH6pIb5N49Z4ocofUXtJ%2F%2B8jUgIgDFjV3fnLmywe2zAoOr%2FgGIbI5xENG1SHTZkAK%2F6ITz229eyhTHeQPNtLnjkw44ADhngbRFOV8sWGYMqpshAJU3pKEoJz9VGpNNb2Bey%2Bj2om3ApjFMGXIEEp6ltJ834kvPY4uI%2B5aFrx4Zy8Lk5YrnyGRQsJoAl%2BXPuoK5X4AxfRiPo1%2BjxQw9hhRORnRxSN3rdZY9Ycb%2FBvqb%2FkkERkqiYi4FLLvlxDBQ8DHpZZEyRjF8xi3Phj%2FStC4%2FYpgG7OEKjaWIBVcHceN5MLCPWkGlBQcfjD%2BcGrc6FMzzgF4VWuikuwYPvu5%2BJmyhl9lHvRuU6Mr%2F59hnFZFXxIRvpC4JyChHJJTJc4Wy5tR9cfgaVQn%2FdE0MNHDgMEGOqUBK6H9zuDanPh9feqrA%2Fb3ZWZVfwI5TucVLUoYslW1quP%2FQJKvv9CaQzRFRkJjLzbbmkH9%2FwqwH9Iu3bjdr3MEm%2BEkv52MkCMRF9cinNbsDGysazZ3CApwhE85wDKfP32ushHnAFp8xzIfEFyNaIJ9e0jkbNZdQ6cTjQg8qr1bBImoeZ65aSJqoycXM836wDlWYahyz7dyqwLk1fV9rxrhS9Pg2Z5W&X-Amz-Signature=d936138fb5d7479136af9bb25b90855d5426461317d5548405d02bcac852ea16&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNOQE6T3%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T041155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIDuSv7IAO%2BSauJRyVWE1oJ0hzzn7KWbxML8%2Fw6%2BmsAkQAiEA0wfyR8cQkPrRzS6IhL8TuuZ5gCSfc6SVMCxzAWaqDogqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKnCQOUSmnJZ5xeq%2ByrcAxPsGaHJGCcpoh4iwPwHxBAzwOAeQ7tfdw1nNyg96Pv%2FuelddHNhh7cUYpcInFgNlmFfXsz4Td6amSrxIoVvKW%2FUqlA1J5UZJasqow6zhVaTjJSBUeLehMch%2B%2FmVJ4xooCpPQ5SzkZy0MTTgl8HCUblzFiiwB0ouSDKJ%2BSxdOsRf%2BJxGnsR9nBXhC1nnxVNa8BhDO1eq3HYade50L%2FYlCWNy0Ef2mGm%2B6nbfwF7caLv8%2F%2BRuH6pIb5N49Z4ocofUXtJ%2F%2B8jUgIgDFjV3fnLmywe2zAoOr%2FgGIbI5xENG1SHTZkAK%2F6ITz229eyhTHeQPNtLnjkw44ADhngbRFOV8sWGYMqpshAJU3pKEoJz9VGpNNb2Bey%2Bj2om3ApjFMGXIEEp6ltJ834kvPY4uI%2B5aFrx4Zy8Lk5YrnyGRQsJoAl%2BXPuoK5X4AxfRiPo1%2BjxQw9hhRORnRxSN3rdZY9Ycb%2FBvqb%2FkkERkqiYi4FLLvlxDBQ8DHpZZEyRjF8xi3Phj%2FStC4%2FYpgG7OEKjaWIBVcHceN5MLCPWkGlBQcfjD%2BcGrc6FMzzgF4VWuikuwYPvu5%2BJmyhl9lHvRuU6Mr%2F59hnFZFXxIRvpC4JyChHJJTJc4Wy5tR9cfgaVQn%2FdE0MNHDgMEGOqUBK6H9zuDanPh9feqrA%2Fb3ZWZVfwI5TucVLUoYslW1quP%2FQJKvv9CaQzRFRkJjLzbbmkH9%2FwqwH9Iu3bjdr3MEm%2BEkv52MkCMRF9cinNbsDGysazZ3CApwhE85wDKfP32ushHnAFp8xzIfEFyNaIJ9e0jkbNZdQ6cTjQg8qr1bBImoeZ65aSJqoycXM836wDlWYahyz7dyqwLk1fV9rxrhS9Pg2Z5W&X-Amz-Signature=f77314d73ac9dfa447dd40ed8732debc17fd3685e79b2122f3651abab8335c90&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
