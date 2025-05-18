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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBE7UR5C%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T033842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB7HU3VVnxywN6sCcJrVlUnra3JTl%2BAxntbhtQdlZ1QyAiEApyabnrR7NFseHvLG0inKxFZ%2Bh99P4EZP8L5X3179mqgq%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDIn1CzedS9Sg%2BwuKGyrcA3%2Bsdwo%2BKVCb7ca6ecfUUyJ1ts8oaUNtcnwnI%2Bji6o6vN2FEIsx%2FMKgkLRaj89ezfecHtue0SFnMwUwtoMaOZbgP5FosOIHXUdyFgRKIbJiFh8dKA2kl6k8wppwJlmh%2FHQ5hAsz26DMSHq5HHFEaWOQU2SYyJf0f0LCVlnNnXwjaH4Uf4ygwlKCqnGk5B7BJRNZH0etg%2FSCO7HNpiS7uGSdiDlNNcLxPEtu5r5DfLCqYq7%2ByXzZOQToFlGJxj2DfTxYQpKBLGbBhH4jDCt7GxnNtJh04H6LTsMQl4ybaFnyStlH1a9bJwTvP8rQynxzVhkW7BdbECunTbqDI4HtfukR27jJIYhdclFs%2Fau4TRtfflKfTRILOWMNr2PUUwETAKs2UwlAIqrCvUk8dQfI9pEGYLo%2F86LiWdGpNOuqa33wlwxnsjTWjA28F%2BJQRfbdEmuBYq%2BqUuSXwchTeSoGXwY%2BObDprTQHfPsoi%2FRM3unTPwvvuqJcd%2BuveceJbA5QZFWlE5o0f5wa%2Bbpf2RNvle3F59Q%2BIoJIOMvllgEvqthBFqn9NkssKr0221duL%2F9kvdQvVgLR2heVpPmMDhmVRgrneoUPaCDotPCFMoHwN7eEkahwuQYFofKmJMvaVMNjXpMEGOqUBS27plhq1HLFCzTCTlfEVK%2FT7Ih%2FKQb93V8lI96ApG5%2B8ra89dP1pA7F8k7Y%2BI3uJu554df%2B4%2B4l8i91DA2%2FJly0pXgYIL0qco46kvyJSwxgvcuICPoDT5oJQZmQ0lBMeFrr96GKeOnDcphuyGRm1hlvP1MSQJeImRPrDIue1salqJlG5uuNL9367NQBDKZqnRkDQHOjWkLd2PAGfWXyydVIeZ1sm&X-Amz-Signature=43d02fcb863df78ba0470eb53d5aa171c631d35e18ab6c5c9cc14acff7b18cda&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBE7UR5C%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T033842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB7HU3VVnxywN6sCcJrVlUnra3JTl%2BAxntbhtQdlZ1QyAiEApyabnrR7NFseHvLG0inKxFZ%2Bh99P4EZP8L5X3179mqgq%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDIn1CzedS9Sg%2BwuKGyrcA3%2Bsdwo%2BKVCb7ca6ecfUUyJ1ts8oaUNtcnwnI%2Bji6o6vN2FEIsx%2FMKgkLRaj89ezfecHtue0SFnMwUwtoMaOZbgP5FosOIHXUdyFgRKIbJiFh8dKA2kl6k8wppwJlmh%2FHQ5hAsz26DMSHq5HHFEaWOQU2SYyJf0f0LCVlnNnXwjaH4Uf4ygwlKCqnGk5B7BJRNZH0etg%2FSCO7HNpiS7uGSdiDlNNcLxPEtu5r5DfLCqYq7%2ByXzZOQToFlGJxj2DfTxYQpKBLGbBhH4jDCt7GxnNtJh04H6LTsMQl4ybaFnyStlH1a9bJwTvP8rQynxzVhkW7BdbECunTbqDI4HtfukR27jJIYhdclFs%2Fau4TRtfflKfTRILOWMNr2PUUwETAKs2UwlAIqrCvUk8dQfI9pEGYLo%2F86LiWdGpNOuqa33wlwxnsjTWjA28F%2BJQRfbdEmuBYq%2BqUuSXwchTeSoGXwY%2BObDprTQHfPsoi%2FRM3unTPwvvuqJcd%2BuveceJbA5QZFWlE5o0f5wa%2Bbpf2RNvle3F59Q%2BIoJIOMvllgEvqthBFqn9NkssKr0221duL%2F9kvdQvVgLR2heVpPmMDhmVRgrneoUPaCDotPCFMoHwN7eEkahwuQYFofKmJMvaVMNjXpMEGOqUBS27plhq1HLFCzTCTlfEVK%2FT7Ih%2FKQb93V8lI96ApG5%2B8ra89dP1pA7F8k7Y%2BI3uJu554df%2B4%2B4l8i91DA2%2FJly0pXgYIL0qco46kvyJSwxgvcuICPoDT5oJQZmQ0lBMeFrr96GKeOnDcphuyGRm1hlvP1MSQJeImRPrDIue1salqJlG5uuNL9367NQBDKZqnRkDQHOjWkLd2PAGfWXyydVIeZ1sm&X-Amz-Signature=27a0a92d57ad78fa14b4ec7ebdb04b68691c162e53bc6fa1b626a6fc63035f2c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
