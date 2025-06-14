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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z33XU2SR%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T160845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJGMEQCID%2BJ00tb32egFV6HTsleDnnVi58OMyodA3febcnk%2B6TyAiBEdpxs8A6%2FgK8EYy6%2B6preRYqX69lEZ9gh5SF7%2BgUpGCr%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIM0orKmsz0%2F2wbAfBgKtwDmfCN4E7F6OVwm9cBlLJurLMQjo5HtdKQWS3mJZnZAM6SJjbu%2FnJAS3S%2FAxe1OfTwFQdrtDSoJdeUqvF9BCkqAUyZ9SiFOuNnbB7O5QH3wo9bD1PUQwll1avnEaBcbAHrlCWhCp0f67Y1DyfUAOXbEPocBuilogML5PTNHL7iM0Nt%2BuwjlfjsdWL5bd0qcwLC0uWItQrrLdWcdsfTtZQtpgS4%2Bt%2FyqwTpXmjNYskb2p21fWcrhlOzjY8RT5Sze54FGloa9DeipxmBLiG5bwpzJQyvxZF%2FecjTNy2Mw2FgRaiGZfTZ4%2BTvLFOfIhIO4HL4caBDQoQGWFXA70SJMOvNyhT90v5pJU55YOOicMWZ9VqQyd7rwQ0sCpe6J%2FVG%2BPAYHOv3cXmNGfDACkyEtKiIa1be8k%2FpMRI5ZgRUCbZmx67CsTYXadsw9fNl0y48cUR9N7jWddvUgLiLtcD7j%2Bm8qwPUivJ%2FEHvvteTtSd5KgntScjyE81z7l5Bb2UexQB6yMHMxR8UpuSPoD6JTHE825DX0GLETIc6amzFwHlXG3Ww0PGMXuBN2Q65UeBUVvvSe1JASC6e%2BpYVjTPRknEQZhJ%2FKm6l15aj3vFZ2DNiMfEFjqls2Eeom75yL%2FV8wyrq2wgY6pgGEqmylu7F%2BgxS9T2R8ZdF4B6WGyCiPYtTJbtbbsmuZhlDLc6s1%2B00KZhcnfbMhoL56AbYtnFozqWT9Mqi9WyxKFaRtrU20NVEawLcW%2BDgky%2B5HSep4UXDme%2FQ4ed2hMwUC%2FeOvbbl6q0UKLR1Hizyscl8xgoo%2BoV20gCzamZaMtshEWEGepCML7rEhoYmmX7QyEqQ4yZWRTMz4jOUF1cCWC9uNNFlY&X-Amz-Signature=a0d0c09fb36896af50c640800769b5b9e527be70b65cd1f339d8c5821dabf67c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z33XU2SR%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T160845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJGMEQCID%2BJ00tb32egFV6HTsleDnnVi58OMyodA3febcnk%2B6TyAiBEdpxs8A6%2FgK8EYy6%2B6preRYqX69lEZ9gh5SF7%2BgUpGCr%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIM0orKmsz0%2F2wbAfBgKtwDmfCN4E7F6OVwm9cBlLJurLMQjo5HtdKQWS3mJZnZAM6SJjbu%2FnJAS3S%2FAxe1OfTwFQdrtDSoJdeUqvF9BCkqAUyZ9SiFOuNnbB7O5QH3wo9bD1PUQwll1avnEaBcbAHrlCWhCp0f67Y1DyfUAOXbEPocBuilogML5PTNHL7iM0Nt%2BuwjlfjsdWL5bd0qcwLC0uWItQrrLdWcdsfTtZQtpgS4%2Bt%2FyqwTpXmjNYskb2p21fWcrhlOzjY8RT5Sze54FGloa9DeipxmBLiG5bwpzJQyvxZF%2FecjTNy2Mw2FgRaiGZfTZ4%2BTvLFOfIhIO4HL4caBDQoQGWFXA70SJMOvNyhT90v5pJU55YOOicMWZ9VqQyd7rwQ0sCpe6J%2FVG%2BPAYHOv3cXmNGfDACkyEtKiIa1be8k%2FpMRI5ZgRUCbZmx67CsTYXadsw9fNl0y48cUR9N7jWddvUgLiLtcD7j%2Bm8qwPUivJ%2FEHvvteTtSd5KgntScjyE81z7l5Bb2UexQB6yMHMxR8UpuSPoD6JTHE825DX0GLETIc6amzFwHlXG3Ww0PGMXuBN2Q65UeBUVvvSe1JASC6e%2BpYVjTPRknEQZhJ%2FKm6l15aj3vFZ2DNiMfEFjqls2Eeom75yL%2FV8wyrq2wgY6pgGEqmylu7F%2BgxS9T2R8ZdF4B6WGyCiPYtTJbtbbsmuZhlDLc6s1%2B00KZhcnfbMhoL56AbYtnFozqWT9Mqi9WyxKFaRtrU20NVEawLcW%2BDgky%2B5HSep4UXDme%2FQ4ed2hMwUC%2FeOvbbl6q0UKLR1Hizyscl8xgoo%2BoV20gCzamZaMtshEWEGepCML7rEhoYmmX7QyEqQ4yZWRTMz4jOUF1cCWC9uNNFlY&X-Amz-Signature=40213d117fed10b9ff7dfd8d6bc3da09af6e70d9840ea57622f235ec989ad43e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
