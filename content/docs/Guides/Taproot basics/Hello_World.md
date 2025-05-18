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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RLFJKE7%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T050841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDeqP6n%2FjObDJGNaQmolmkOGxOzsBkcoAf0yQTvfSDXNAiByUHLc5frEtCDBlNFvcd1WlnDGSo6rE8gWeCTuvm4C%2BSr%2FAwhsEAAaDDYzNzQyMzE4MzgwNSIMehkVwRThRjzekQFYKtwDGwccFn%2FDMkHmedNL%2FhyVXbIYPwluLNuh2p59vb5bdeTqDU3e6%2FUSp91yUFef5xjBKgj2rvqsigQcgOlAy7ZsdYmvKukLeEQoHL1fQlRhGg%2ByOIuITut1TZaLxyMzQUpC%2Bt22qe1hW4cXsuiX%2BCQ276qtvcj2dAfMnRzC%2B2u38gjqncN98ddndgMF7uYGqnf2gSUV%2FGgl3QlLKK%2B2sXRxfU%2FDzkDcTZ9R%2BL1st5RO5TWDVeZgi7riu%2F2rMI1dpfJ2Z9BZlIciFR0IWTXUh70i7mN5I1EpteUcUw5uTbfwoWAnVVmK62RJzcJmgUoz0qd6pqGQVeqi5Tg%2FvE%2Bq9hNd9tgzAvPbC61RLFrxXU9h7DeE3SjHc2cSaEt%2B1xAhAKy8n0e5%2F28wRpZFD9y9K6yDUZAepWovC%2BvTx2%2FYT2DfnmWQuJuFJ1aq6ppfLbWglZEqcBuTFnvB4Zu493XUtxVRgWk8yPUVamiFTIT%2Fzd9P3ES9hsH7GhIeWTZISrftcmXhi8%2BDVXotT5IBat9pHUoo%2B6s059z5SWm59aIW6H54W4HNwb40pYO3i1xKshpKyUxa6un6QQ4QP8NKQvEvPykpYWJtxiURoBGa017%2FAqFG2e3FAwPmzdUi9vL%2Fq%2FAw3IqlwQY6pgGRGiSeyqhBtIdO9pfPN%2FoVBgKAne935YUwNfb62kr59p9Wpc7jFQy%2BY1zu%2F0izX8XrRcc1pMkwLSWx91IDvXA%2FhzMif8q44xDYLunvIJtvqWQ8rkItRSmb0i%2F6iVI9HAotjtGyRezXl%2FxrPthns9pYXl%2BYOl3CVHfUyzPQPg0%2FO59hn%2B9p2QH9aFYAOJ9BDrk6VLRQQWDPFRR233sJey3LQTmrXIuR&X-Amz-Signature=9bef26d59bace7590097fb5dd4c7db86659c6daf85c76f0443b7ca6b396cc4a9&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RLFJKE7%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T050841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDeqP6n%2FjObDJGNaQmolmkOGxOzsBkcoAf0yQTvfSDXNAiByUHLc5frEtCDBlNFvcd1WlnDGSo6rE8gWeCTuvm4C%2BSr%2FAwhsEAAaDDYzNzQyMzE4MzgwNSIMehkVwRThRjzekQFYKtwDGwccFn%2FDMkHmedNL%2FhyVXbIYPwluLNuh2p59vb5bdeTqDU3e6%2FUSp91yUFef5xjBKgj2rvqsigQcgOlAy7ZsdYmvKukLeEQoHL1fQlRhGg%2ByOIuITut1TZaLxyMzQUpC%2Bt22qe1hW4cXsuiX%2BCQ276qtvcj2dAfMnRzC%2B2u38gjqncN98ddndgMF7uYGqnf2gSUV%2FGgl3QlLKK%2B2sXRxfU%2FDzkDcTZ9R%2BL1st5RO5TWDVeZgi7riu%2F2rMI1dpfJ2Z9BZlIciFR0IWTXUh70i7mN5I1EpteUcUw5uTbfwoWAnVVmK62RJzcJmgUoz0qd6pqGQVeqi5Tg%2FvE%2Bq9hNd9tgzAvPbC61RLFrxXU9h7DeE3SjHc2cSaEt%2B1xAhAKy8n0e5%2F28wRpZFD9y9K6yDUZAepWovC%2BvTx2%2FYT2DfnmWQuJuFJ1aq6ppfLbWglZEqcBuTFnvB4Zu493XUtxVRgWk8yPUVamiFTIT%2Fzd9P3ES9hsH7GhIeWTZISrftcmXhi8%2BDVXotT5IBat9pHUoo%2B6s059z5SWm59aIW6H54W4HNwb40pYO3i1xKshpKyUxa6un6QQ4QP8NKQvEvPykpYWJtxiURoBGa017%2FAqFG2e3FAwPmzdUi9vL%2Fq%2FAw3IqlwQY6pgGRGiSeyqhBtIdO9pfPN%2FoVBgKAne935YUwNfb62kr59p9Wpc7jFQy%2BY1zu%2F0izX8XrRcc1pMkwLSWx91IDvXA%2FhzMif8q44xDYLunvIJtvqWQ8rkItRSmb0i%2F6iVI9HAotjtGyRezXl%2FxrPthns9pYXl%2BYOl3CVHfUyzPQPg0%2FO59hn%2B9p2QH9aFYAOJ9BDrk6VLRQQWDPFRR233sJey3LQTmrXIuR&X-Amz-Signature=4d53d400bf1286ef89da6a5ef7bed943be35eadb406e8b224bf8238bc44f2613&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
