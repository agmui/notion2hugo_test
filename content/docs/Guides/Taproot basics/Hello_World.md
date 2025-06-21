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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QH3XR7K5%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T210653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDeAfwHD%2FxkmmyNBKgig7qH2ROq5KD9Iz23uvsK9%2BC5TAIhANRb%2BHMzBZddFF8jaE6aAt00cAyFbAve%2FB14M2%2BNt%2BXkKogECN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy6jrjuTA1G8wzgiS0q3AMnxbTMMojdrvlezBhTPx9Nt679xArwPdgavwd32JEUMrG0IHNhEzc3i06sGv89qWAmRb5rVXYZJuuzDlsqZR8uNb9lPc3afjvV62iLEV9JCMyoCrVNLT614SJVifEsJ2LpJk%2BWGzflLI%2BeTQZBMwa6DdNOuBatBW1j0AeSmU3yfIkKKr46isDolrflasvwCU6B7ZOJf3X9sz30YgJI6MhbiP%2Bo4%2FIwMy0gM6m3sSoIJp64912amH2IJSjmTX9cnUoiWiVBt2uK5tiuGMoPscYmseg6QKDk4o65elk22IaTj6bUzdiWmOsEtIpXxhaZM41VQAAsT%2FlFDOQ0cYRv5IFA8ErN21r9liY%2B8JPKZrhUcFsyi35wRSVsBVpAwpVuvEa4sY2PS67ux8dS9m%2BB%2Bf8KE9K%2Ba0CRHsr2dJYpCNFZW%2BN%2BmKmwC7Qy6N%2Btq6IpsBEjd%2BXbjrRD%2B1d6LNeMWo5J6YqW%2Fk9eTiSDAcUkw2CERuk8l8v1D9MFMM8i1OiRpFFX4qRHKYLJZxvF4uOYMavrgfikL6LAS7pgdBIaQ3nSrn%2FMh9Oe2xLYy821zhhvPEVn4qr8zLL8ssVNqbVUsdGnP8qxvDcXShxLsawWlBRl2vtsr2WZj3qHFo8W3jDksdzCBjqkAXGvtLVN98dWHBs8S%2BI%2F2LpC32g7Dz7piF324WL4ftYwCi2H02CKtbAX3PN1MCprQGGt9x6Hl2ESQfXr74SDUyNeE3KgNeCbn8GzrjYKDKLtAvmx4RRHmoU32takyLTRez30Pel%2FzCQjx6tYyk4kl%2BSyjhNx%2B4o5vOycjFc6Gd2ZsgcPv6LggiNu7l2C7AXF8f%2FxYsWnilfTDKCMaUBvYXybIjbY&X-Amz-Signature=b1d7581a5c1a4b7de8d248d114352a05c18eec528c5d3900c453716620d756fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QH3XR7K5%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T210653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDeAfwHD%2FxkmmyNBKgig7qH2ROq5KD9Iz23uvsK9%2BC5TAIhANRb%2BHMzBZddFF8jaE6aAt00cAyFbAve%2FB14M2%2BNt%2BXkKogECN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy6jrjuTA1G8wzgiS0q3AMnxbTMMojdrvlezBhTPx9Nt679xArwPdgavwd32JEUMrG0IHNhEzc3i06sGv89qWAmRb5rVXYZJuuzDlsqZR8uNb9lPc3afjvV62iLEV9JCMyoCrVNLT614SJVifEsJ2LpJk%2BWGzflLI%2BeTQZBMwa6DdNOuBatBW1j0AeSmU3yfIkKKr46isDolrflasvwCU6B7ZOJf3X9sz30YgJI6MhbiP%2Bo4%2FIwMy0gM6m3sSoIJp64912amH2IJSjmTX9cnUoiWiVBt2uK5tiuGMoPscYmseg6QKDk4o65elk22IaTj6bUzdiWmOsEtIpXxhaZM41VQAAsT%2FlFDOQ0cYRv5IFA8ErN21r9liY%2B8JPKZrhUcFsyi35wRSVsBVpAwpVuvEa4sY2PS67ux8dS9m%2BB%2Bf8KE9K%2Ba0CRHsr2dJYpCNFZW%2BN%2BmKmwC7Qy6N%2Btq6IpsBEjd%2BXbjrRD%2B1d6LNeMWo5J6YqW%2Fk9eTiSDAcUkw2CERuk8l8v1D9MFMM8i1OiRpFFX4qRHKYLJZxvF4uOYMavrgfikL6LAS7pgdBIaQ3nSrn%2FMh9Oe2xLYy821zhhvPEVn4qr8zLL8ssVNqbVUsdGnP8qxvDcXShxLsawWlBRl2vtsr2WZj3qHFo8W3jDksdzCBjqkAXGvtLVN98dWHBs8S%2BI%2F2LpC32g7Dz7piF324WL4ftYwCi2H02CKtbAX3PN1MCprQGGt9x6Hl2ESQfXr74SDUyNeE3KgNeCbn8GzrjYKDKLtAvmx4RRHmoU32takyLTRez30Pel%2FzCQjx6tYyk4kl%2BSyjhNx%2B4o5vOycjFc6Gd2ZsgcPv6LggiNu7l2C7AXF8f%2FxYsWnilfTDKCMaUBvYXybIjbY&X-Amz-Signature=1c1f0af5c0f3f7cbffd8efa844c65b345e29878c95096afe22ec1589d2c194f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
