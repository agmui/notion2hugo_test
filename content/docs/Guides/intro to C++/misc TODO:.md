---
sys:
  pageId: "cbb61f02-1c1c-48b6-9015-9a3b096c1017"
  createdTime: "2024-06-25T02:33:00.000Z"
  lastEditedTime: "2024-09-30T17:08:00.000Z"
  propFilepath: "docs/Guides/intro to C++/misc TODO:.md"
title: "misc TODO:"
date: "2024-09-30T17:08:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 120
toc: false
icon: ""
---

### static_casts/ reinterpret_cast TODO:

 [https://www.learncpp.com/cpp-tutorial/introduction-to-type-conversion-and-static_cast/](https://www.learncpp.com/cpp-tutorial/introduction-to-type-conversion-and-static_cast/)

### [Literals](https://www.learncpp.com/cpp-tutorial/literals/)

```cpp
#include <iostream>

int main(){
    std::cout << 5 << '\n';  // 5 (no suffix) is type int (by default)
    std::cout << 5L << '\n'; // 5L is type long
    std::cout << 5u << '\n'; // 5u is type unsigned int
    
    // basically the same as
    int a = 5;          // ok: types match
    unsigned int b = 6; // ok: compiler will convert int value 6 to unsigned int value 6
    long c = 7;         // ok: compiler will convert int value 7 to long value 7
}
```

{{< table "table-striped table-hover table-responsive" >}}

| **Data type**  | **Suffix**                             | **Meaning**                               |
| -------------- | -------------------------------------- | ----------------------------------------- |
| integral       | u or U                                 | unsigned int                              |
| integral       | l or L                                 | long                                      |
| integral       | ul, uL, Ul, UL, lu, lU, Lu, LU         | unsigned long                             |
| integral       | ll or LL                               | long long                                 |
| integral       | ull, uLL, Ull, ULL, llu, llU, LLu, LLU | unsigned long long                        |
| integral       | z or Z                                 | The signed version of std::size_t (C++23) |
| integral       | uz, uZ, Uz, UZ, zu, zU, Zu, ZU         | std::size_t (C++23)                       |
| floating point | f or F                                 | float                                     |
| floating point | l or L                                 | long double                               |
| string         | s                                      | std::string                               |
| string         | sv                                     | std::string_view                          |

{{< /table >}}

### Const

- `const`
- `constexpr`
- `#define`

### [Enums](https://www.programiz.com/cpp-programming/enumeration)

```cpp
enum season { 
	spring,
	summer,
	autumn,
	winter
};
```

### compiler flags (`#ifdef`)

before compiling we can have some options for what code we want

For example, we can have code only for tests, simulations, or hardware

this is done through `#ifdef`

In Taproot the options are listed here

{{< table "table-striped table-hover table-responsive" >}}

| Name     | variables                                           |
| -------- | --------------------------------------------------- |
| Test     | ENV_UNIT_TESTS, PLATFORM_HOSTED, RUN_WITH_PROFILING |
| Sim      | PLATFORM_HOSTED, RUN_WITH_PROFILING                 |
| Hardware | N/A                                                 |

{{< /table >}}

We in <u>Hardware</u> mode so in the `#ifdef` block line 30 will not be included when compiling 

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SI6G6WXP%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T090924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD4%2FWoshB4CTsCBuE9qw38yIK33JfUjS06FtgCVbkRDHAIhALBcWcNyfFA%2BjsvAod9oLrGi114TP%2FC%2BoHWPsF85i9DTKv8DCCoQABoMNjM3NDIzMTgzODA1IgytjtsKRsXW68mrfmcq3APfc2mNgZwo0XONfzWhFb34zzGWi8ErDA5Qm78wghsiQqsIKL9vTr2TqVUWf%2FWpCZtRnK0ybytSl80sCfVXEKSyHH5TOHTC%2Bo9Qs3D7e3hecgxfP90l6L2OmuyVbS9Irwj%2B6QFOULO4d7CymeTRuV%2FcFf4uJ4Hn8JWHhrT%2FPgUVil%2Fw2M2aaEpUVV38wZpBAxROxnLlXR0XnAdPBxsI9fdqehgJTThfT8puWidiTnYW4XbhPOh%2BC6hWpd%2F4B%2FlyCaAYjs7F8rmk4EKNeZm9PWKYqkF6n%2FFVf53d2ZATXfe1MavL0s3cKrqKZwE9oJugrcUubKvH%2B6OshiCu7N7Z10gKmgzRpWABsYAma9Vvh1RkzepaDpEt1HGya5ym6gZfHFTrZ00Zt%2FAJewIRGijTftkwDtZ6qxr%2FVU%2BMOv4IR3qyL7%2FfLsSPE8Rc9Hs1pMuKh%2BssLEjEGJ64pm2WuF9pnPaD7BxPuH16Mv6uN7F%2BERteZRQ7VVQ9BzmMEDKpTn4dUPm%2BnMRhaX24h9EcyETnRuGeO098fXbgqsPv6E%2Flan4CbHB3swsz7BUb9aKCUN2h5tTxGbm0Y2C1aX722MAss4l%2BkZT%2FS9hngW08DSAuONuDaHS1k7GKc86qPZQkhjDvvbzEBjqkAUdoMrRZo6Y82F4bIlPw4sPPIzo0CsJuWq5%2Bk%2FzDBIpqRTUwuHr%2FY%2FoBmGNzAKrmsC1o76buZDlk4baXgxxL32vlQl%2FrhdfNX5Wn82LVxY5wMsZUNOyKqFvDZg4eA5qX9VmtdZ3Aiv6syIDdKD8uCU7wXYNUs1vKuxNXRG1AGOoWOroay6N6M0kxWQjyyuSBU79XNnyMqZHKBFZVkX7L%2FDCUYa2%2B&X-Amz-Signature=76c409264a6091d3a3e9b24f22a5ae1df8a5792317b4b96085874d4ec1671b98&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SI6G6WXP%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T090924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD4%2FWoshB4CTsCBuE9qw38yIK33JfUjS06FtgCVbkRDHAIhALBcWcNyfFA%2BjsvAod9oLrGi114TP%2FC%2BoHWPsF85i9DTKv8DCCoQABoMNjM3NDIzMTgzODA1IgytjtsKRsXW68mrfmcq3APfc2mNgZwo0XONfzWhFb34zzGWi8ErDA5Qm78wghsiQqsIKL9vTr2TqVUWf%2FWpCZtRnK0ybytSl80sCfVXEKSyHH5TOHTC%2Bo9Qs3D7e3hecgxfP90l6L2OmuyVbS9Irwj%2B6QFOULO4d7CymeTRuV%2FcFf4uJ4Hn8JWHhrT%2FPgUVil%2Fw2M2aaEpUVV38wZpBAxROxnLlXR0XnAdPBxsI9fdqehgJTThfT8puWidiTnYW4XbhPOh%2BC6hWpd%2F4B%2FlyCaAYjs7F8rmk4EKNeZm9PWKYqkF6n%2FFVf53d2ZATXfe1MavL0s3cKrqKZwE9oJugrcUubKvH%2B6OshiCu7N7Z10gKmgzRpWABsYAma9Vvh1RkzepaDpEt1HGya5ym6gZfHFTrZ00Zt%2FAJewIRGijTftkwDtZ6qxr%2FVU%2BMOv4IR3qyL7%2FfLsSPE8Rc9Hs1pMuKh%2BssLEjEGJ64pm2WuF9pnPaD7BxPuH16Mv6uN7F%2BERteZRQ7VVQ9BzmMEDKpTn4dUPm%2BnMRhaX24h9EcyETnRuGeO098fXbgqsPv6E%2Flan4CbHB3swsz7BUb9aKCUN2h5tTxGbm0Y2C1aX722MAss4l%2BkZT%2FS9hngW08DSAuONuDaHS1k7GKc86qPZQkhjDvvbzEBjqkAUdoMrRZo6Y82F4bIlPw4sPPIzo0CsJuWq5%2Bk%2FzDBIpqRTUwuHr%2FY%2FoBmGNzAKrmsC1o76buZDlk4baXgxxL32vlQl%2FrhdfNX5Wn82LVxY5wMsZUNOyKqFvDZg4eA5qX9VmtdZ3Aiv6syIDdKD8uCU7wXYNUs1vKuxNXRG1AGOoWOroay6N6M0kxWQjyyuSBU79XNnyMqZHKBFZVkX7L%2FDCUYa2%2B&X-Amz-Signature=f4ed644048b8c0ca98030185418026dd47095e9acb0b5fb96ab0b4bcd7e94503&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## c++ practice

Using everything you learned try to do these:

- simple ArrayList class (try adding these features one by one)
	- class field should have: size, capacity
	- should use a template and namespace
	- Default size `#define size 4`
	- Constructor should either take an list with values,
	 or nothing and just create an empty array of default size.
	- methods:
		- constructor/deconstructor
		- `get(int index)`
		- `edit(int index, T val)`
		- `double()` doubles the array
		- `append(T val)`
		- `print()`
	- If you want more you can write sample classes for stacks, queues, trees, etc.
