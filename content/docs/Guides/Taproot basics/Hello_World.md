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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTQFINQ7%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T140712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDo2dVZXPRk7OSOzIiQpbDU7lkEnFt8xbvXtEzlGUaLIAiAPSxY%2BEGx8AR7aEaMk2kwH0qRcDcgzu9jjn2Gve%2FO58yr%2FAwgVEAAaDDYzNzQyMzE4MzgwNSIMYUqDFKv9EAXKJ95cKtwD5iQlLt36S1Pvb4hh5Cay6oM3VAA8Br9Fg1y60Mnim%2BAuHbsO9%2Fxw9KHSWSuwo4WNie6XznrAueJDtrmYV0uq038zD822HsvVGv9ZyQwFAe2cKktxPF38e3p2Mekgl8%2BcrGNtduw9pE6v8JsIItKbAVNu4KbEPvf16z1kSRTfmg12a%2BronjoCcrN3ImHO73%2BVWx7X4%2BxHqhcwKafg3jztuzLKwm5AQPZEeSPjPThqvXmEBi5IwrApc6FHi1OmuNbw6HcZ7IqUnPRA4BNS%2Bewug5XDbdNb77CUBj1p%2BH5eBP39RZMbxv%2FkJ1Rm5BRqdapMSSc0udYPRVksH3zrsYOBUt4QB5xrYgjkLzYoxaMxxkZCNNSPKIFPhl7Sh3m%2FSXoKy7Wv4gEbvOvBOJGr%2BH6wNZH40VLjuhvwXnNJMBx8V1%2Bo8TxAjWPryJLR4QS3DSVHnrcMdJ1JaANo2HZdGNV1osoLIbvN%2F%2BlQjLVO9StlzWNEx64n5HECnEpyxH9vW63zZey2xaplOHDrgnp01jD2NjA6zv9C%2Fzp8evNjcFhUXiewS5WhyP8CWFNPLLAA0B%2FzGTj7uql71fSzWtnf1w2aLrtSKbRGOWuPtJ6ISIA28j6CrDjlbqdV0FeBqAAwjMvOwwY6pgGMgF77iHZoz5kdVhMOYi1NhJFjvLxfX2PYGZ4lqufQcRHC60q6PfpCenXvmijBfolH5D6duHsPzGyTal0IoKP%2FGNToys0d3ofLH4rhxx%2BZlFi55J6hfr2ZYCIgm1Y%2FQEyxT28kPQb07nmqpSuxUap6KBqBOqlVHOE26eyIhDdByDOQZRsdRX1Tfa9K97ZFZREhuqgtl75zKI4gas7qJP3rBBJPzAip&X-Amz-Signature=1e92b703bc38bbbdd5eda72d2fe4b5c1b9c13389a15db0db4494a7035f6dfb0e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTQFINQ7%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T140712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDo2dVZXPRk7OSOzIiQpbDU7lkEnFt8xbvXtEzlGUaLIAiAPSxY%2BEGx8AR7aEaMk2kwH0qRcDcgzu9jjn2Gve%2FO58yr%2FAwgVEAAaDDYzNzQyMzE4MzgwNSIMYUqDFKv9EAXKJ95cKtwD5iQlLt36S1Pvb4hh5Cay6oM3VAA8Br9Fg1y60Mnim%2BAuHbsO9%2Fxw9KHSWSuwo4WNie6XznrAueJDtrmYV0uq038zD822HsvVGv9ZyQwFAe2cKktxPF38e3p2Mekgl8%2BcrGNtduw9pE6v8JsIItKbAVNu4KbEPvf16z1kSRTfmg12a%2BronjoCcrN3ImHO73%2BVWx7X4%2BxHqhcwKafg3jztuzLKwm5AQPZEeSPjPThqvXmEBi5IwrApc6FHi1OmuNbw6HcZ7IqUnPRA4BNS%2Bewug5XDbdNb77CUBj1p%2BH5eBP39RZMbxv%2FkJ1Rm5BRqdapMSSc0udYPRVksH3zrsYOBUt4QB5xrYgjkLzYoxaMxxkZCNNSPKIFPhl7Sh3m%2FSXoKy7Wv4gEbvOvBOJGr%2BH6wNZH40VLjuhvwXnNJMBx8V1%2Bo8TxAjWPryJLR4QS3DSVHnrcMdJ1JaANo2HZdGNV1osoLIbvN%2F%2BlQjLVO9StlzWNEx64n5HECnEpyxH9vW63zZey2xaplOHDrgnp01jD2NjA6zv9C%2Fzp8evNjcFhUXiewS5WhyP8CWFNPLLAA0B%2FzGTj7uql71fSzWtnf1w2aLrtSKbRGOWuPtJ6ISIA28j6CrDjlbqdV0FeBqAAwjMvOwwY6pgGMgF77iHZoz5kdVhMOYi1NhJFjvLxfX2PYGZ4lqufQcRHC60q6PfpCenXvmijBfolH5D6duHsPzGyTal0IoKP%2FGNToys0d3ofLH4rhxx%2BZlFi55J6hfr2ZYCIgm1Y%2FQEyxT28kPQb07nmqpSuxUap6KBqBOqlVHOE26eyIhDdByDOQZRsdRX1Tfa9K97ZFZREhuqgtl75zKI4gas7qJP3rBBJPzAip&X-Amz-Signature=ae3184c7bf4a668ccdddac9336e213e2a1caedd3a2c0806e2272ce4fc24fb533&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
