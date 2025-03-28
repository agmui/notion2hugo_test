---
sys:
  pageId: "dc03b680-5e9e-4779-a140-dd2523ca6202"
  createdTime: "2024-06-24T23:51:00.000Z"
  lastEditedTime: "2024-10-06T19:34:00.000Z"
  propFilepath: "docs/Guides/Taproot basics/Blink_Led.md"
title: "Blink_Led"
date: "2024-10-06T19:34:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 123
toc: false
icon: ""
---

> Note: These examples are mainly for the type-c

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQLIHM3Z%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T170742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDT1%2FqLTDnD%2BW8elkSOUkH5XH78ES0fq7BhWIbKc7SN%2FgIhAMU4HStadAmjDB7B3jJpVlr2jwQSCRpl4qmDKYXQT27cKv8DCGIQABoMNjM3NDIzMTgzODA1IgxD83mSTudv4Wb6wBsq3AO5SuWHTomxp6FUcuw5Lq7c5hhw53LcewkqDgn2Z8Jyv4aXOP8WZTWZHBVWgw%2F7UkKAJesrqOzNR4jimcZF%2FQSdxJvxyOrBQeR%2BRAw5QHRb0AAwm7aOXgtszbL36kdx6zkdL1awqMErDDTVrhRiSlp6d9ET%2F%2F%2BHr6oJzL%2F65q3%2BeUswfGsaP2u21EIMxkAlFIrNOmvRPS1PfBJsCY0w2h8sJoQdxZG67hEKIoas6y2%2B63kkZzfKPQDRx62XGGLpSmnX8PNImbTRpIQmAV6CmJLA9XaVhoxNxxgml5ohhaGTRMN%2B0XtqUi25PN7i2TjXpRqklrQjqI%2BhaMDS4ddNSepKYXV%2BqmBFBOZRBV5JlI7Rny9rXQEv%2B%2B3HxrNlQCM8%2BymUIiVkMn8j74pHJUrunKkVUMCN0P%2B%2FMDEhmFCs3slN5UKxWMSvhN4Pl2AezEwPdawv3NsRhQzaVWO2XFiUTPuvfLjKXvbdt6NKSox3p4B9qz4zEjkXkzfmLdbMnOOxzE2s7AW91sHS0qqqsYK33F1mR4qxOnsvvpHmEzolBwBpnUwFu2G3Nsj3BXuViJZnjFIIJlhbkfi0FChzmV6jjj5W4sHBv8eu0GfytH1onPmneEcy4cv997gRvgta2jD8pZu%2FBjqkAXIjCI7ohMpj5UkZl8zZu1BEFRH7E%2BvQsJGHKDWCWPJrekaItPfymj9uZydAPxr2RxbzkzH4goQkTPpGhe40sy8j8ehXdpUOepjV8Aha%2B%2BWyOUOS1jlmXIecWrFk98p%2FLVeAgKxfSC%2B6x%2F%2BygeOrra4SAUWEpODwf5zPZ0ZMzaroz5vjoMRwpa7T2nRXaIpf0oGtzDEkW5Mksp%2F0plU71Jo%2FNl2g&X-Amz-Signature=bafe945b78f00abed0ff4f3c30320b97e482bc082e020d553565639e69482cd1&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RL6UOT4G%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T170742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCg7nGPqTtBsv6mMDsETCiRxVECAGliHdDIUCNetRpxEQIhAP9ItQnVh%2FNA%2BlnHkWF8mvaF2MeWpoHQSo7eBfBF1EE7Kv8DCGIQABoMNjM3NDIzMTgzODA1IgyR7Qtzap4PxXxW5bgq3ANP1pxd9oPtKzxHHw8rGuYkZYbQVFirJitSo3por5t3S6zgSQo%2BtXPg4Zou1nujV4rY7tBhYZmKKX4xt1JqgLQcS4%2BwtYYda2oxLh8%2F%2FFQTQ2wbEskrpZgMDr2LZjilgCjqGnjeVYRtgCZsTJnmRLnvIhhseqp5jtFFVDY3J%2FN6uThYPejaAgzZu7heTm5ZblOzzZF0k5v89Otd5iBwdCrXrfcuT0JbGwb0Lk2MlCDFzRtQrAT0IbAkXHbzLnN2PmmRqsZFVbBA4WUR%2Bdg5L58mdxq%2FBEu3o5XjgcL8Hsb36EjwAa1TfesioxN57ikdvyfu5DjY0qOSXt%2B5ilII0%2BBmKyZ9sv1Rw%2BlCpo01ASLH0Q2nfwI55rHzN27osB6g%2B71fA71KNrvwcf0yXUZSMC19u5ycXVEWVsp7WjywatlDyYZKM6vgtsrk4cdAgFQUg14B%2Br55ACyi97%2FWpt1jDfpLYz%2BqVKuRbppJ3ttbPKE1BdJVkKZh5y5MYIsgv77PB13rc3EIe2nzGYlcpcqR1SxooCMO%2BOuY6bN%2Fi1L%2F1yE24GcZCLbvMhv0C6eKhWbA1Ae3l1ZL%2B9ylv5BNp8PxDBSXam5F3C58Q9aZCzpkeAcuBFR9TeNPyEJi7vU5NDDMpZu%2FBjqkAWfob1uyN5ei70f2EAplMcZwWt3Cb67M1zFaghqvtmn2UoU67v0IyHvC8%2BaO6lmvfSwr5Tbqi7gOtL2NN9MJD1lS2jOKoOvFegGcz%2BBSdCATcDtDMVsjLtwVXEu0HP0u8rfsw%2B7KOw3x0VmyeWaW1ApRx08ImAALvL0sKpgkHpkIT1iJ3avsGCLYb1ZnZkjNbY2u6zT81Eb6KCzuH2ymE4TSIHWk&X-Amz-Signature=c98127908b339b3ec7ca2f291ff3058ecc43c9e94fab28eef51d9e78253943b6&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

imports all the libraries that will be used

```cpp
#include "tap/board/board.hpp"     // import board specific settings
#include "drivers_singleton.hpp"   // import taproot
```

The drivers object in taproot is king and basically controls all aspects of the type-c.

To get it we call `src::DoNotUse_getDrivers()`.

it says not to use it but what it means is only to use it once.

```cpp
src::Drivers *drivers = src::DoNotUse_getDrivers();     // gets the driver object
```

initialization

```cpp
Board::initialize();     // initialize the whole board
drivers->leds.init();    // initialize the led
```

Turn On LED to red

```cpp
drivers->leds.set(tap::gpio::Leds::Red, true);     // Turn On LED
```

Turn Off LED

```cpp
drivers->leds.set(tap::gpio::Leds::Red, false);    // Turn Off LED
```

sleep for 500 ms

```cpp
modm::delay_ms(500);
```

### Code:

```cpp
#include "tap/board/board.hpp"     // import board specific settings
#include "drivers_singleton.hpp"   // import taproot

int main(){
    src::Drivers *drivers = src::DoNotUse_getDrivers(); // get the driver object
    
    Board::initialize();     // intalize the whole board
    drivers->leds.init();    // initalize the led
    
    while(true){
        drivers->leds.set(tap::gpio::Leds::Red, true);     // Turn On LED
        modm::delay_ms(500);
        drivers->leds.set(tap::gpio::Leds::Red, false);     // Turn On LED
        modm::delay_ms(500);
    }
}
```

{{< alert context="info" text="to upload to the type-c press `ctrl+shift+B`" />}}
