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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWJTJKQW%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T131538Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDWCVa%2BaMu6RRaGT9YeGSLOI1T%2BiXyaXUw%2FJEh7y9nMMQIhAJmJr9wbV2Un50tXfdua1%2FSBpWzVkJ2DvhcxnXnAO06YKv8DCFwQABoMNjM3NDIzMTgzODA1IgyjY5jc%2FbmoKEQLgPAq3AMI8ik7cVbngAlGpwRJGuiyWuFr4UrZTEp4EsZc0UtBooh1LYQOxhkr81UCAE8zJoODOU0KAXTeZFdgoYPewFs%2BE98jWgKZH7oVmqKFMQccd3TkYp%2BmSjGRzrs%2BquT79E4niFqGdB7eCunXQCjoFq167Rb08X%2FjbFMunok74hJWpOSc%2B%2BbACLMG7KX5TfJC3X%2FRNaqdUxQ8zBT1esOsHducgObx4gi4GWRrxGqjFSjMoVWAkE7vR8b5K9DbmHpUd3Z141tSHBSZyxPe8TWnNAaENjiVnre9nuQRB5ELBefPIFKDUCED%2BrkZPOdy4SqtYccLULekyMTy9kC9Q5jcEEMf%2F2ymIv0QgcyMuYzS1J9HzDgUssuFFYH3SZfbzQ9VX1LsaJk3Fvz0fjAeOaM5GToLkCbsBESw6rPGyBur3nZ2boDe7p4o6fbRVkcjRSeZDD99YIxuEfXn8e38ZIwCFjJW6tUNchEB8gPsU%2BOOY4zck0Zv3OhZZZ2%2FI2J%2BYPqWsi3yD%2FqugT4O9NBYkm6Y1ujYsFd28R%2BVqROiTF9ZJk%2BDXzYnURXJyfhBTsyx1%2Fjw053eF%2FcWcmPzSqf29b1wHF9SOTo54gKg1IWs%2Bpc3VC%2FkA9Byr3E7K4f7XCrwETD5i7jABjqkAYD8EIS0rGlpgjDHq0bi1JsEczxs%2BW9B2luS%2F0lGfYabnMRFeJoSihdXg%2FgemhSjpl9xe%2FjHHzrhIuub%2FAcHJGUNOFBP44bDhyk3ElhQY%2FduE7oaZuYOlPISjCUkh3bVPuoL6ICRo2mdEOMchy%2FOk06Jjy44rESAUAFm1QYYLYxbtE99fa36fd4X1SmCIbUUBxj9t6BhyGohhHX3Mv2KbxT98ZCz&X-Amz-Signature=e88c377a4093b69efecc435b6bf0def40f0f2e2507f1080afaed821cc3c70696&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWJTJKQW%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T131538Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDWCVa%2BaMu6RRaGT9YeGSLOI1T%2BiXyaXUw%2FJEh7y9nMMQIhAJmJr9wbV2Un50tXfdua1%2FSBpWzVkJ2DvhcxnXnAO06YKv8DCFwQABoMNjM3NDIzMTgzODA1IgyjY5jc%2FbmoKEQLgPAq3AMI8ik7cVbngAlGpwRJGuiyWuFr4UrZTEp4EsZc0UtBooh1LYQOxhkr81UCAE8zJoODOU0KAXTeZFdgoYPewFs%2BE98jWgKZH7oVmqKFMQccd3TkYp%2BmSjGRzrs%2BquT79E4niFqGdB7eCunXQCjoFq167Rb08X%2FjbFMunok74hJWpOSc%2B%2BbACLMG7KX5TfJC3X%2FRNaqdUxQ8zBT1esOsHducgObx4gi4GWRrxGqjFSjMoVWAkE7vR8b5K9DbmHpUd3Z141tSHBSZyxPe8TWnNAaENjiVnre9nuQRB5ELBefPIFKDUCED%2BrkZPOdy4SqtYccLULekyMTy9kC9Q5jcEEMf%2F2ymIv0QgcyMuYzS1J9HzDgUssuFFYH3SZfbzQ9VX1LsaJk3Fvz0fjAeOaM5GToLkCbsBESw6rPGyBur3nZ2boDe7p4o6fbRVkcjRSeZDD99YIxuEfXn8e38ZIwCFjJW6tUNchEB8gPsU%2BOOY4zck0Zv3OhZZZ2%2FI2J%2BYPqWsi3yD%2FqugT4O9NBYkm6Y1ujYsFd28R%2BVqROiTF9ZJk%2BDXzYnURXJyfhBTsyx1%2Fjw053eF%2FcWcmPzSqf29b1wHF9SOTo54gKg1IWs%2Bpc3VC%2FkA9Byr3E7K4f7XCrwETD5i7jABjqkAYD8EIS0rGlpgjDHq0bi1JsEczxs%2BW9B2luS%2F0lGfYabnMRFeJoSihdXg%2FgemhSjpl9xe%2FjHHzrhIuub%2FAcHJGUNOFBP44bDhyk3ElhQY%2FduE7oaZuYOlPISjCUkh3bVPuoL6ICRo2mdEOMchy%2FOk06Jjy44rESAUAFm1QYYLYxbtE99fa36fd4X1SmCIbUUBxj9t6BhyGohhHX3Mv2KbxT98ZCz&X-Amz-Signature=843332dea45c08d3300922318402887b11bfdeef0887dd48cc6fa0ce03aa83d5&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
