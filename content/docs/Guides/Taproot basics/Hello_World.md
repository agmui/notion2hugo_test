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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZUBXBIV%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T121343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEfmSpS4VSA%2BsTUGo6sdFWij9D0u52MSnXBciICopaIsAiAEs%2BOeDJQuCGw%2FvSeD8WCQO3pIx9Csb2TzF%2F%2FcHm1cAiqIBAjo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbNkzdH0N1IuZZmYUKtwD6p8X2dTvYXOoUmB1s3Z7xHo2DXnodiSH5%2B8esn2SQcCXsm%2FeSjEYjLdBupWCS8vLtBC53w0R0nouFXvTJDIuHCE5MiEAEhsXnfqKcgWnFlZ%2FqbiAV2lBS9E%2FkRVdWmY70rT39SXHbiKTqRbJYfhxtEUWwb%2B%2FcNfeWC98K4HD1YkXN4rM0CIqNbiFZjiXjRZQFl5AQVML2KoDPRURq6ICgTkmxdnYvp02PRYoSFJm6veRun0PJ1Q1XYBKbO2HOQB%2BCvcDfJpHfK8NUOkSxRC48%2FVxHtSiQRk8X8lRcRSBcya9GJQrPLPolfB2ChJyURTHUGc5SKHWlAtUHf058xT0w4tF8TZl7O4uGltLb9z6ZnlIMc7pRFqbNYWWx4AZYER3Y9VjDeJqZFVUMMLGdJHAI3v%2FZTkNGIwg0%2F4BnDKn%2B3Qltw61XJVFkcFz2Zk2tPCHJwAJpEjEPJjv%2BnQ%2FrjVa6YDKDAmZQ%2Fo8TanigI1vwG7TcbNUjcOLXglSX4xRVvtNffYuhbwWl8EmpvgJZ6RD4mc8ZFQt3JG%2FJLWYQC%2FitACALFAbkGZftzwCEq2HHcKxhdhLCZob7OwHXh2X%2Fa%2FURRhK%2BlWp%2FjQVJwoFUum%2BuVc4gpaF089et3xgOKow%2FI2xvQY6pgHamOfZjcMHMvrK7OIaHbbT1dQNQBa1IO7tom9SYrWy7fHr38pfm6mOunTRllrlUJb7RkexoH%2F5HNWMt0N%2Fazorbv56z1DjMbd36T22nuIzcqpN3aUtP70HlLjn%2FX6PqGyqOfy1j5GUC4G9x8ywMz6djfq8o02dS56UzYCfipQLI0M6sRQc2konofHaWEsmhpV%2BlF%2FJLIPoqxOn%2BS54bx01MzII7jq7&X-Amz-Signature=ba3e6a4d01d0a38711ccc9f73928dc66c8a91e360bbd210f5d0a30e4e8d04a89&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZUBXBIV%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T121343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEfmSpS4VSA%2BsTUGo6sdFWij9D0u52MSnXBciICopaIsAiAEs%2BOeDJQuCGw%2FvSeD8WCQO3pIx9Csb2TzF%2F%2FcHm1cAiqIBAjo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbNkzdH0N1IuZZmYUKtwD6p8X2dTvYXOoUmB1s3Z7xHo2DXnodiSH5%2B8esn2SQcCXsm%2FeSjEYjLdBupWCS8vLtBC53w0R0nouFXvTJDIuHCE5MiEAEhsXnfqKcgWnFlZ%2FqbiAV2lBS9E%2FkRVdWmY70rT39SXHbiKTqRbJYfhxtEUWwb%2B%2FcNfeWC98K4HD1YkXN4rM0CIqNbiFZjiXjRZQFl5AQVML2KoDPRURq6ICgTkmxdnYvp02PRYoSFJm6veRun0PJ1Q1XYBKbO2HOQB%2BCvcDfJpHfK8NUOkSxRC48%2FVxHtSiQRk8X8lRcRSBcya9GJQrPLPolfB2ChJyURTHUGc5SKHWlAtUHf058xT0w4tF8TZl7O4uGltLb9z6ZnlIMc7pRFqbNYWWx4AZYER3Y9VjDeJqZFVUMMLGdJHAI3v%2FZTkNGIwg0%2F4BnDKn%2B3Qltw61XJVFkcFz2Zk2tPCHJwAJpEjEPJjv%2BnQ%2FrjVa6YDKDAmZQ%2Fo8TanigI1vwG7TcbNUjcOLXglSX4xRVvtNffYuhbwWl8EmpvgJZ6RD4mc8ZFQt3JG%2FJLWYQC%2FitACALFAbkGZftzwCEq2HHcKxhdhLCZob7OwHXh2X%2Fa%2FURRhK%2BlWp%2FjQVJwoFUum%2BuVc4gpaF089et3xgOKow%2FI2xvQY6pgHamOfZjcMHMvrK7OIaHbbT1dQNQBa1IO7tom9SYrWy7fHr38pfm6mOunTRllrlUJb7RkexoH%2F5HNWMt0N%2Fazorbv56z1DjMbd36T22nuIzcqpN3aUtP70HlLjn%2FX6PqGyqOfy1j5GUC4G9x8ywMz6djfq8o02dS56UzYCfipQLI0M6sRQc2konofHaWEsmhpV%2BlF%2FJLIPoqxOn%2BS54bx01MzII7jq7&X-Amz-Signature=229671e6c13bddd2c380e18c3c032777444367cf1e9d2f1d604ad64d80caf94b&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
