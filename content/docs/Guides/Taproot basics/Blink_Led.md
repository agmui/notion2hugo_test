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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRX6S3AJ%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T050847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEMVIoH9D76PVwuXVckQQYtW%2Fo1uaeqN86t8YJw4W%2B32AiEA3jA6q5qxcYI8mgZySsHXb7ealJXwX4ImcSW7dMZ%2BvSYq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDGkQ%2F5UQMd1NCQtIOircA4QSPMTNcFhblg8Fz2iPXNNKiUJ3lnirDkA3JVO%2FFJYU8EHfpdPcjiIJTySLTQZ0J3oD%2By0he0yNYn2byNTrI%2FpCCcBRSzAin6IZ%2FPSWzd%2F9ssJP1Y3IiNuxSKl0SsoEyyOBL1N8hCFp4PcJzOYMndpHOD1r1kBE%2Bq935vXRGwCEoMFcqvDYQDtg2uUF%2BWoO1KUbxuQNe0AqDMtJjZ9ZTf1ousTvHlCsdXm6cozNJFiUGiWf1RnFEGoPZ9fUWhDDo47q99DgrTU8DZx3Aha3ASStWzh8jUake5i06lCjPqCqqOhcqBgjNzZtp4u%2B8kQ096Mou96pBZ2qcqKIFdfbz6yQROjQVTSNIT2A7VlhDKPV84rPJbMYOrFa3Wa87t8%2BsM6xKcwSQBKVh2tEwxXchApwkwtR7gzPxv7Y9Z4xzIjlUMLxFvAGTvjhRIuO300Zy1js%2FSOXpXnjMZ6tK2s%2BOiitMS2YMCJrmF1mYqLHB%2FA%2FhcrFSCh483eJqmsgDyNEu3SQv4Dkf6Q%2FYqERPYQsj75KgBLETyoqb3NMhmEBATNOA911qBAv4vREA0OSvN7HRAvnFKUrdOT6k%2BJXGIg7l6iYvd2r26EeS8duy9v57tuuT7JV4xrlfQPLAyu5MM3nqb4GOqUBCBaOylnK%2BAFUXCDA1pzkbfv3DO1Nxn%2BIM4MTRLbBDzXLRWz1iAnylHhq1J9OZQa4pSCONkrQYyNEf4%2Fg3kfdhcE5zlSb7qW4DVllWI7zmpdHScRtNiLjcPr53F6ZrE85GHFvVXI%2FC3KuV6jshJCopzpqmJqyb8z1Ju8UkJF6jDRy7MT%2FaCoUZVbSroTIFIKhGuG5pPomc%2BxCQzDUiV61kIJhll91&X-Amz-Signature=ef89b1c1f2fd37211fb67df153a15e9e32a52e91f0685f80b472aabd26244f9f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDIIIIKB%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T050849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDNpdifaXk2QJvmum%2FvnWO%2BA603Zs8oShU8wLIPRGGzhgIgG31Y1QhtrmvBx49HzRyioy5G7yVKvTb33%2FS%2Fe2%2FyuNUq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDB8rvq%2B7d8p%2BVbx7SyrcA6NaqRtMz%2BNgyAD2BH%2BL5rfx3XU%2F65SLbv7QR%2Fn%2BHrQxnGv9NNIsR2JCVYm5AWutErN2JU7YAGW5f4MbcwYRrLhKu9kAnLuTKKaUR28SAG6JcL5g8LKML4By1ulztWYQx6QtP9Q1ChePlqHejmwizhUsTUdRRu6vGC1iL5z5TmGUC7c4RdL%2F4jCjId4VM5hoaXqgV06v33StudlzgVrnYgF5aV2sIRjHMDBzU9THloHhDJt52bfR3Xa5vshpfYKGO%2BDEdsn1DiiP7JynBFlhVZhrXwl5VPsE2rRuecjPQxxr%2BCMviHYGH2vJy%2Fg%2FqY5p9oB7hT4VVsO%2FHNo2EkixYApsdpapBUd9DATfQd9DZp870dmjpEXXQazZlu7%2BG6eZt%2F%2BqgxqNEfR%2By9tIqTjken41kRaGVlukfAb6PLHRsF4KZQvJvP2NrsZwtgG4htLo6NqPacnqKr3m2k3E1nrYq1FG3C7pp5Nt5B56BHxR96bmdGqmoiqISq6pIPXHPDt5lYex3MB0hfz29SLXSRWNKd4ZVBqGB6AsQvh0GvIR05dVQo0igvRbL3gNIOyw0okraYh2iByjLlAImy5NK6mJWRSWNTRojMMFNdrEr8ItV%2BxoNIuLfDMBxlczZzYbMPbnqb4GOqUB87c5BBP3ddIRTR9rh5d2eZaZr7CT4a4N5jpvb1rqwcreFTnL8A5zUPp5GXHUAgneEtGcT%2FtvhxLTbl1pE5QOZV07z%2Bum8zRGbq4rrKeYoErR7tVi8DcQLW3AJXF14CEXrAcyoz8i%2Bn%2BrYy9HAy91XX6dwHprf%2B4SvpJQsu7yKQL49PH%2Fj6ihWbBtOx6mNMpKtjMssL3Vzo7voVGZPQrj8UekhQcd&X-Amz-Signature=ecaa41362263fbf99489d6489946deb2126901ae6a9e71a86a4e03c19156d3db&X-Amz-SignedHeaders=host&x-id=GetObject)

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
