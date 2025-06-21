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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SXR5P67%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T181012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGyIsOUYAVgadPoFoYzv9O3ESNIlZGc6wstrdhkE8oZEAiA9xl1znsKtrdCY9PBWAW%2FID1%2BffLvOyXbRR1NHZTklWSqIBAjY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMREtWRm5jQHilVAV2KtwD8G3zPeRh%2BYTyCYWLUPtijz45gE6L6tE0Vr4balFcE6mHxGLIG2grXEFURsc8x8NiqCQNHgTJ7LlsfjbJUkCIWDJZZiZCUEF8Si5plIDeHGu19tA4%2Fr0VuOQ8%2F4PD4SE%2Fp1DkWjtjR18oOJ5q%2FwuX28Lwl5S6M2WJrAMUEelLfDMariKrQbYkCh9kl%2BvpvE5h7QmI6A%2F4SpyrjtmD192t0M5HeOxam7kgKcoZGQiu0n8jE6S%2FFkrZ82zLMDS9m03CbLjzBz9fz1vWXSrwentzmtiV61W8l3KjxUaGHsn48WgxHo%2BKmdLR2v8Wwj6TyWqmTTUN4Mn5GX1%2BWouTjDOdTH%2BykpJ6I8XYnbAM8QxoHgrJe99yDcxni7NapF0H4V9mGqd48nzy2nk9po%2FJ8j%2BomIb6zcesYVGjLITZn2%2BEVdM3dk9OfaWW%2BicoWPSzZqnqzGKuL2tDKMo%2FllN8Syzhvj5fk7QIipUQAJjJz0AWoiBubalU%2FbpeeS6ylh5sM5YJIWR7aXbaSvGhf%2BjTjidSrEyiuhuityf6K0eM4nT41WJaVcr5aPxA8LrdrWCbxxZ2eYnWvhbEo0n5uVDGmdpuUMWPkUT5g66t5%2BfFWoOA4MMxf99K623SRTIYimcw5o%2FbwgY6pgEqxjmx3cx3kEMGj9QL4Auzx28Dx7VOWkU1L%2BBHIWE6qZkRrxiSEZ4eQ5nPZtxGx0tp1EcLs5rItymAo1pglfgkupcEnE1U9WlZQlJB7A8dlOO6eLJ2O8%2B0r30q4udzq1mXNu31eN%2Bme55SqMJouxerDju9k705FWKRrEaMyW87TLrGbGwTVDkq9ZJiRtQaBEs7CbQNuGuuXDkATO1IS5qInj0Ai7iq&X-Amz-Signature=1b333d6ac3fda33d0875c702fe322d23f4f8c1af035ba6500a49c7b6d36b2cb5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SXR5P67%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T181012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGyIsOUYAVgadPoFoYzv9O3ESNIlZGc6wstrdhkE8oZEAiA9xl1znsKtrdCY9PBWAW%2FID1%2BffLvOyXbRR1NHZTklWSqIBAjY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMREtWRm5jQHilVAV2KtwD8G3zPeRh%2BYTyCYWLUPtijz45gE6L6tE0Vr4balFcE6mHxGLIG2grXEFURsc8x8NiqCQNHgTJ7LlsfjbJUkCIWDJZZiZCUEF8Si5plIDeHGu19tA4%2Fr0VuOQ8%2F4PD4SE%2Fp1DkWjtjR18oOJ5q%2FwuX28Lwl5S6M2WJrAMUEelLfDMariKrQbYkCh9kl%2BvpvE5h7QmI6A%2F4SpyrjtmD192t0M5HeOxam7kgKcoZGQiu0n8jE6S%2FFkrZ82zLMDS9m03CbLjzBz9fz1vWXSrwentzmtiV61W8l3KjxUaGHsn48WgxHo%2BKmdLR2v8Wwj6TyWqmTTUN4Mn5GX1%2BWouTjDOdTH%2BykpJ6I8XYnbAM8QxoHgrJe99yDcxni7NapF0H4V9mGqd48nzy2nk9po%2FJ8j%2BomIb6zcesYVGjLITZn2%2BEVdM3dk9OfaWW%2BicoWPSzZqnqzGKuL2tDKMo%2FllN8Syzhvj5fk7QIipUQAJjJz0AWoiBubalU%2FbpeeS6ylh5sM5YJIWR7aXbaSvGhf%2BjTjidSrEyiuhuityf6K0eM4nT41WJaVcr5aPxA8LrdrWCbxxZ2eYnWvhbEo0n5uVDGmdpuUMWPkUT5g66t5%2BfFWoOA4MMxf99K623SRTIYimcw5o%2FbwgY6pgEqxjmx3cx3kEMGj9QL4Auzx28Dx7VOWkU1L%2BBHIWE6qZkRrxiSEZ4eQ5nPZtxGx0tp1EcLs5rItymAo1pglfgkupcEnE1U9WlZQlJB7A8dlOO6eLJ2O8%2B0r30q4udzq1mXNu31eN%2Bme55SqMJouxerDju9k705FWKRrEaMyW87TLrGbGwTVDkq9ZJiRtQaBEs7CbQNuGuuXDkATO1IS5qInj0Ai7iq&X-Amz-Signature=6304f3253827407b4ac1b9269aa36a213356edfff0aa4e1f85715ff02a6fa628&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
