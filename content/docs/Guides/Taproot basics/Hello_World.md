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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2DKJP3W%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T220836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC65JQOBmbRiThT3eTel8MLemvVaZnTUT074jxQBc%2FEHwIgENXaqW3LWSnF7Y2sqLaw5fsggRHHU57ol15eJcDTuAQq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDAfqBhol%2Bt8zn7TNYyrcA4%2FsfQa5S%2BK193JIv7fWRKhmaK%2FOK2OTD4v4859a4ZjHTGpCauPjC5i8FNoMizbGVCbNHecfIiGUYNUXFLJo8T83UEjJAs%2B21PzKfduLB2aMUWvSEAa4a2OQLAHFsF8Wpsnp93vwZCnaBbAXoPo1me4J6SSEaqYyjTQW7h5KNC2UmuQHTt7kjRF4dJVonMSBYnUsPaRjpOsdRNx9ava4oifu2aveoA7aTuCN4zp3ZHbJ0qUWg%2Bc9bpq5MWl3EThtNhSaXIQp9X2%2BUj8m%2Fg%2F0xRiyhqbSA7FQdcMARkmyXPVa8n%2Fr3xDI4aTiZcQVgP9J6J00gpJk6Y0pqVgSPwcnlSmwp4FDnbCJFIP9DmA%2BnZaZ4kl491PrA6%2FavAfsn3vPKHlVfpf33%2Bc1iEtIEfu93OCpWQzMBh1Tz1lznqlxuXISppeMz7sU70aePirGL5Zwn126Oc3sFTXMO38513DGRbH1uwx%2BNPOMcjsq7WuG0mFPfYG3eEbU5llWrNU8EaE1kD3v258k0L0J6wmLMt3xFhefUA2NjjKVnDjX%2Fa3sygj99lCmlwlDYnN1QAT44%2FqZLyy%2FEexakuaiGbJ2zF3p%2BoV46EsAI7punC92ws0WVFFDxECFgTEZxyuh8GIUMPeb78AGOqUB%2BnM2J5aSe1nB9ZAfcFCAv32wT%2B748%2B0pj4r%2BCp%2BO9cz%2FJCws6fYxpW0z3cSn0OqgBMYJLLSI41omKWrsikUh%2FPo9p4Z%2BgVM9AhQsLFwBbs3IwV8yyqsGQltv851v%2FNr5TgJq740NQUS8%2FzAJmhoqCiH9QQmfIbNGeyqyyQWzpHwvqdiMLan3%2B1HjhibpzZsEMINCnPVGPRQaQsyG%2FSJJVtSAJNVl&X-Amz-Signature=6010eafeeaf9e52be4c63830d7ff6a4cf1cff4acd86c88cdf94f143e2bdd1e86&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2DKJP3W%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T220836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC65JQOBmbRiThT3eTel8MLemvVaZnTUT074jxQBc%2FEHwIgENXaqW3LWSnF7Y2sqLaw5fsggRHHU57ol15eJcDTuAQq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDAfqBhol%2Bt8zn7TNYyrcA4%2FsfQa5S%2BK193JIv7fWRKhmaK%2FOK2OTD4v4859a4ZjHTGpCauPjC5i8FNoMizbGVCbNHecfIiGUYNUXFLJo8T83UEjJAs%2B21PzKfduLB2aMUWvSEAa4a2OQLAHFsF8Wpsnp93vwZCnaBbAXoPo1me4J6SSEaqYyjTQW7h5KNC2UmuQHTt7kjRF4dJVonMSBYnUsPaRjpOsdRNx9ava4oifu2aveoA7aTuCN4zp3ZHbJ0qUWg%2Bc9bpq5MWl3EThtNhSaXIQp9X2%2BUj8m%2Fg%2F0xRiyhqbSA7FQdcMARkmyXPVa8n%2Fr3xDI4aTiZcQVgP9J6J00gpJk6Y0pqVgSPwcnlSmwp4FDnbCJFIP9DmA%2BnZaZ4kl491PrA6%2FavAfsn3vPKHlVfpf33%2Bc1iEtIEfu93OCpWQzMBh1Tz1lznqlxuXISppeMz7sU70aePirGL5Zwn126Oc3sFTXMO38513DGRbH1uwx%2BNPOMcjsq7WuG0mFPfYG3eEbU5llWrNU8EaE1kD3v258k0L0J6wmLMt3xFhefUA2NjjKVnDjX%2Fa3sygj99lCmlwlDYnN1QAT44%2FqZLyy%2FEexakuaiGbJ2zF3p%2BoV46EsAI7punC92ws0WVFFDxECFgTEZxyuh8GIUMPeb78AGOqUB%2BnM2J5aSe1nB9ZAfcFCAv32wT%2B748%2B0pj4r%2BCp%2BO9cz%2FJCws6fYxpW0z3cSn0OqgBMYJLLSI41omKWrsikUh%2FPo9p4Z%2BgVM9AhQsLFwBbs3IwV8yyqsGQltv851v%2FNr5TgJq740NQUS8%2FzAJmhoqCiH9QQmfIbNGeyqyyQWzpHwvqdiMLan3%2B1HjhibpzZsEMINCnPVGPRQaQsyG%2FSJJVtSAJNVl&X-Amz-Signature=dc72b3dc0ab352f1ee78721f349f67c58aac90d9f8c8d27cb78eaa0f13614d44&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
