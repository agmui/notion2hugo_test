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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFRZU23R%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T022757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJGMEQCIA50UpaIS7E7Z9Z4dC4ADETtCm0c40fYnEUUSeoMPVFsAiAfY2C6FI7sATW%2B34JjBSy%2BjHDMjTegSxXrLA%2BJ5TjPByr%2FAwg4EAAaDDYzNzQyMzE4MzgwNSIMeIDonowUsx7y3LAQKtwDM7JKoJI5cZqVkQeRUNsLsao85cmBVgI6UUD2dLoC2toGQha3gKStkxSaxgjv0sMNwU80mVxTaWW%2ByQqNluPsbGnQ1Alc7lCkeUAwW%2BNLETpwlxVl6NgZz%2FOhC0kC9SmE8bemR48%2B1J%2BU0U7Kq0PoVV1858htqFoGfg220R46wglmglJdJi%2BlPunuFS9zezkyAYn9%2FhnxeH9VT9uwGdeddGNvwtu5XSxHNoEswLNjYRT9VzwMIZvUpsQCmZFC7Gv81SPRLaTGmNfP31iYADM0mKDRDZfTYfaucbeSitsLaVCxxM%2BCRdWp1mf7eE3YFVYldyGS0azD8qrGgNIQN%2FRQ8YWDTUkyfoc1vKyeWmW%2FveDdFV6%2FCh1y0K5jaP%2BqVBPdrYUzdC5aTzN0SwkzhiB1nNV%2Fgkm%2BpZuhG9CKytZpXa1or5ecUvo60nM87BBUYpHv21B%2F2gqooDMN5Z2dk7%2FNaa7L3xmDdqLhQLggIL3Afnr318Ebfen6xpPN2zj7OZ6uKHO4qLbs60SZ7z9wARpHmWDIN%2FAPfZWXLggscDti1OLzzann3TrSNS%2BWkaFGxCzgx8c9CdS00svHOPwsm33jKIepvT3M0urmNIzFPaObTlAHEGD%2FshncV46ewkEwpMChwwY6pgHox%2BFm8cGdS2g%2BtljSglTU0n9W97%2By57yey1vvMkRTTZgUIuZAJ4eY7ufzNvWsmucqR2etepQo1xUmJGcDAr4tRb%2F4Hj4Pao6OWN5hrZxT%2FPAy1Fge9XU8o6WuwQqngoD8M7iO4CoJFaRQ19LNkRwd8mRSeNCIDBjkoy9GvLMzMTfqdjI%2F%2BWsrR2y37JKxMLlHrzurHUA2XMYMOZTW4c%2B42Y8Xq%2Br8&X-Amz-Signature=b827da1e18b7baa15cb13d5a506287f9fc742cb8a3287d23edfd2b94bc63e7e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFRZU23R%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T022757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJGMEQCIA50UpaIS7E7Z9Z4dC4ADETtCm0c40fYnEUUSeoMPVFsAiAfY2C6FI7sATW%2B34JjBSy%2BjHDMjTegSxXrLA%2BJ5TjPByr%2FAwg4EAAaDDYzNzQyMzE4MzgwNSIMeIDonowUsx7y3LAQKtwDM7JKoJI5cZqVkQeRUNsLsao85cmBVgI6UUD2dLoC2toGQha3gKStkxSaxgjv0sMNwU80mVxTaWW%2ByQqNluPsbGnQ1Alc7lCkeUAwW%2BNLETpwlxVl6NgZz%2FOhC0kC9SmE8bemR48%2B1J%2BU0U7Kq0PoVV1858htqFoGfg220R46wglmglJdJi%2BlPunuFS9zezkyAYn9%2FhnxeH9VT9uwGdeddGNvwtu5XSxHNoEswLNjYRT9VzwMIZvUpsQCmZFC7Gv81SPRLaTGmNfP31iYADM0mKDRDZfTYfaucbeSitsLaVCxxM%2BCRdWp1mf7eE3YFVYldyGS0azD8qrGgNIQN%2FRQ8YWDTUkyfoc1vKyeWmW%2FveDdFV6%2FCh1y0K5jaP%2BqVBPdrYUzdC5aTzN0SwkzhiB1nNV%2Fgkm%2BpZuhG9CKytZpXa1or5ecUvo60nM87BBUYpHv21B%2F2gqooDMN5Z2dk7%2FNaa7L3xmDdqLhQLggIL3Afnr318Ebfen6xpPN2zj7OZ6uKHO4qLbs60SZ7z9wARpHmWDIN%2FAPfZWXLggscDti1OLzzann3TrSNS%2BWkaFGxCzgx8c9CdS00svHOPwsm33jKIepvT3M0urmNIzFPaObTlAHEGD%2FshncV46ewkEwpMChwwY6pgHox%2BFm8cGdS2g%2BtljSglTU0n9W97%2By57yey1vvMkRTTZgUIuZAJ4eY7ufzNvWsmucqR2etepQo1xUmJGcDAr4tRb%2F4Hj4Pao6OWN5hrZxT%2FPAy1Fge9XU8o6WuwQqngoD8M7iO4CoJFaRQ19LNkRwd8mRSeNCIDBjkoy9GvLMzMTfqdjI%2F%2BWsrR2y37JKxMLlHrzurHUA2XMYMOZTW4c%2B42Y8Xq%2Br8&X-Amz-Signature=4de51e23a2e20e279802d162683da4d1f2105db1d96d7fe1e50f33fc744e943d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
