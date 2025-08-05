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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RJRLW56%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T052021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJIMEYCIQDnLk7ydoNx8OsziN6rZwLLFt3fC4Z6aYyAeILCLnf44AIhAPZoR%2Bbv5NOM06a1cbJ6HwSvS9isTGqK%2BufdyZK%2B9yiWKv8DCFUQABoMNjM3NDIzMTgzODA1Igy3AawDLnDTLyjIpnwq3AOlXJ3OIeTsMnGaB3WoV%2Bl55GVUQQpo%2F58RXdQ5iNJqR3GZvMTZvGjI9sJvowMVId4LD7Cw2VKc6B2YXZfw1dG0CVW0Ga%2BqB%2BLLwbht53KnSfWBzMb0CArWDR5GBC7bqjaQU61VtearT531zCiGCZ2nNGuOtiM%2FC3vNFt38G05qFpaD9Em8g8FfUdQW9XNORSVBNgVJ829M7%2BBs1tN0QNfkICFVWChr2s3nEn%2FL0yCiDWdAf2FTx51SRMzhRWJuLLNiU8EU2iPtXLoUZj7YsxRbCSLnYN1qdxe55nhDjMIyv9UCfim3RNcCgZSoP%2Fiy2cvyum%2BM3iiOspwan56YekNcZgiiurrP4QJXirV4PR1hI6tXMfJHixQyZOOrIjqWSW2FmOJcs9Mg4JSK2YE4LOwDW9c8P310eaLwo3tqx9Cep6QkDTXuf49V6nOg7YopnpLXz1X438p7yK%2FlKlfdVgSWcjviVBU6VQoe7qxPKFp72u8adoklkY5%2FxC4EwZGAtNjZZgGW1JNhOeEDMS7gn6RtlOm04TxW8wIporpSBuS0CyEGDV%2BthQf8teCPu8aZW6bnZuVbiwIssZLGXn4PynVwvxJf4BCcSfMgasgBDC20pEaivolWCwulK09cwDDBjMbEBjqkAaH96OGKtw8VGmznRdcjSCWH4pbVLt%2BRRaC8J%2BiJboIukzuLlt0sQa5Djbc%2FyO1U6yVeu9zkB95NEfCRy9CUMabObBgKiIH4TKPJqiR5%2FkfKEEvYiX5woqzFRabX%2B5Nw%2BTstJWtlbqH1O%2F9T%2F%2Bc5xYTE5ZMgKh2bXvbZ7HJQx3EEht%2BLWunxeYb9GMulnomAO0qam%2F0BH1Kd0HvRzejY%2B7T6noIQ&X-Amz-Signature=30bb150d6f399d9dd35dfc73cb2aa14b565d0bef2104828e6cab2189e3ded90b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RJRLW56%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T052021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJIMEYCIQDnLk7ydoNx8OsziN6rZwLLFt3fC4Z6aYyAeILCLnf44AIhAPZoR%2Bbv5NOM06a1cbJ6HwSvS9isTGqK%2BufdyZK%2B9yiWKv8DCFUQABoMNjM3NDIzMTgzODA1Igy3AawDLnDTLyjIpnwq3AOlXJ3OIeTsMnGaB3WoV%2Bl55GVUQQpo%2F58RXdQ5iNJqR3GZvMTZvGjI9sJvowMVId4LD7Cw2VKc6B2YXZfw1dG0CVW0Ga%2BqB%2BLLwbht53KnSfWBzMb0CArWDR5GBC7bqjaQU61VtearT531zCiGCZ2nNGuOtiM%2FC3vNFt38G05qFpaD9Em8g8FfUdQW9XNORSVBNgVJ829M7%2BBs1tN0QNfkICFVWChr2s3nEn%2FL0yCiDWdAf2FTx51SRMzhRWJuLLNiU8EU2iPtXLoUZj7YsxRbCSLnYN1qdxe55nhDjMIyv9UCfim3RNcCgZSoP%2Fiy2cvyum%2BM3iiOspwan56YekNcZgiiurrP4QJXirV4PR1hI6tXMfJHixQyZOOrIjqWSW2FmOJcs9Mg4JSK2YE4LOwDW9c8P310eaLwo3tqx9Cep6QkDTXuf49V6nOg7YopnpLXz1X438p7yK%2FlKlfdVgSWcjviVBU6VQoe7qxPKFp72u8adoklkY5%2FxC4EwZGAtNjZZgGW1JNhOeEDMS7gn6RtlOm04TxW8wIporpSBuS0CyEGDV%2BthQf8teCPu8aZW6bnZuVbiwIssZLGXn4PynVwvxJf4BCcSfMgasgBDC20pEaivolWCwulK09cwDDBjMbEBjqkAaH96OGKtw8VGmznRdcjSCWH4pbVLt%2BRRaC8J%2BiJboIukzuLlt0sQa5Djbc%2FyO1U6yVeu9zkB95NEfCRy9CUMabObBgKiIH4TKPJqiR5%2FkfKEEvYiX5woqzFRabX%2B5Nw%2BTstJWtlbqH1O%2F9T%2F%2Bc5xYTE5ZMgKh2bXvbZ7HJQx3EEht%2BLWunxeYb9GMulnomAO0qam%2F0BH1Kd0HvRzejY%2B7T6noIQ&X-Amz-Signature=5080088514a6bb13f7fc4e1212cf921aa1d414969f7d9545f56c7c903737788b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
