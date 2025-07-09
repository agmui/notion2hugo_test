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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TNSR72A%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T034621Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHEk%2FeNMx21RybLaWapBm9bZmo3YE5%2B4c5Nvfa5ZZTcKAiEApE4o7WL19PfGaWGwvaEwviH4vTvNaxnLBDzbcZypWVcqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLFRnPWGf3aJ8hf2ISrcA5W5n1AWYjscwwBRFcE19S3ucVpvQc3bGFvI0J9vnZ%2BPoteSep4%2FFuHOjuFG3dLmBqGKI9mdadAZdYmvIC3bi2FuCtWmknfxNC%2BIQDxf7NZjGlgjbT%2FsX4OaUcf5WmBVkHFi3LN%2BDXHQQIz9iOz4UzWxjmoJwbARsPd9LUvpodFU%2BBGSL0d2Isib5T%2F0waEiwHKXd9qnFwvHfncglFR4zhhljx9KY4FstxdyGHAGcg7g%2FBn7nFtSrUFbw4xbQKvs7t5PnXWTo%2BAh6IUO5SNnk6u0zbjmAxL%2FmSIoF2SOPFTGAx%2BK9NyVKe%2BpPE6%2BRnJBN8GfnSaZdcMvXTTDU%2FqeYbrNJX3x0P6tgM9weMvyhHVs2FdHSmmAXIalE8XBGunTx5bxF%2Fn5aWU%2FBhzll0yP1aOv2GVD%2F6uQ1cUGbrAUg7zmsHRnM8S2yf%2FVt30TBF5oDKzP2VwkDYUCLKW6E1AIhNQUiwgaT3ckc7y7ZZQUKg9uNQ5UbuLLjJtiFcMozEbKrqgvR4M7p6L484hsnMQ8ExEY03btnThp9lPVNuwBWgWInnm0qWi9kaYE2oek4QvSWLWuViMNEhM0bq8dbXDRx2RHPVXgYoGmtA8LQjoLzafbrNuQIgc0Ak8wWlqlMMLKt8MGOqUBNHYvtqwd1vf2y0VibmooN9ya1gcUzPnQBjMq2EHilfsBX73DlLjQ21oFTeAI9T%2BvOWzWl21qE%2BXVDB%2B31cFo9%2FthZeHn2veA9HOIDk7EG7TRry0EiRxGzLpzCtroBZx9Ka3BP1V52AbcTZ9l56yyToFOI0HfwTI4fenvf0q3wps9oDK8ClD8WN3IM61zwKfSHZy5BEufcStkH%2Bawnz0rWFmiapWy&X-Amz-Signature=2fbf0bfc81cb6c921149a900ad95d6bb90b229eb241fa63b9297d6e864a3fa6f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TNSR72A%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T034621Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHEk%2FeNMx21RybLaWapBm9bZmo3YE5%2B4c5Nvfa5ZZTcKAiEApE4o7WL19PfGaWGwvaEwviH4vTvNaxnLBDzbcZypWVcqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLFRnPWGf3aJ8hf2ISrcA5W5n1AWYjscwwBRFcE19S3ucVpvQc3bGFvI0J9vnZ%2BPoteSep4%2FFuHOjuFG3dLmBqGKI9mdadAZdYmvIC3bi2FuCtWmknfxNC%2BIQDxf7NZjGlgjbT%2FsX4OaUcf5WmBVkHFi3LN%2BDXHQQIz9iOz4UzWxjmoJwbARsPd9LUvpodFU%2BBGSL0d2Isib5T%2F0waEiwHKXd9qnFwvHfncglFR4zhhljx9KY4FstxdyGHAGcg7g%2FBn7nFtSrUFbw4xbQKvs7t5PnXWTo%2BAh6IUO5SNnk6u0zbjmAxL%2FmSIoF2SOPFTGAx%2BK9NyVKe%2BpPE6%2BRnJBN8GfnSaZdcMvXTTDU%2FqeYbrNJX3x0P6tgM9weMvyhHVs2FdHSmmAXIalE8XBGunTx5bxF%2Fn5aWU%2FBhzll0yP1aOv2GVD%2F6uQ1cUGbrAUg7zmsHRnM8S2yf%2FVt30TBF5oDKzP2VwkDYUCLKW6E1AIhNQUiwgaT3ckc7y7ZZQUKg9uNQ5UbuLLjJtiFcMozEbKrqgvR4M7p6L484hsnMQ8ExEY03btnThp9lPVNuwBWgWInnm0qWi9kaYE2oek4QvSWLWuViMNEhM0bq8dbXDRx2RHPVXgYoGmtA8LQjoLzafbrNuQIgc0Ak8wWlqlMMLKt8MGOqUBNHYvtqwd1vf2y0VibmooN9ya1gcUzPnQBjMq2EHilfsBX73DlLjQ21oFTeAI9T%2BvOWzWl21qE%2BXVDB%2B31cFo9%2FthZeHn2veA9HOIDk7EG7TRry0EiRxGzLpzCtroBZx9Ka3BP1V52AbcTZ9l56yyToFOI0HfwTI4fenvf0q3wps9oDK8ClD8WN3IM61zwKfSHZy5BEufcStkH%2Bawnz0rWFmiapWy&X-Amz-Signature=1647ad26a0c41ccd0e4faeb7a0eb94fd6a2fdecf8cd70433ff57254e18572c15&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
