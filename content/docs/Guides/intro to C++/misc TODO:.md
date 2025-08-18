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

| Name     | variables                                           |
| -------- | --------------------------------------------------- |
| Test     | ENV_UNIT_TESTS, PLATFORM_HOSTED, RUN_WITH_PROFILING |
| Sim      | PLATFORM_HOSTED, RUN_WITH_PROFILING                 |
| Hardware | N/A                                                 |

We in <u>Hardware</u> mode so in the `#ifdef` block line 30 will not be included when compiling 

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJRGAG5P%2F20250818%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250818T014923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIQC5FOf%2BDXI1AB43yUSDvCv%2FX6aE47VvzxsBxZOBcBbHdgIgHxrTFseia8jT56rg19qTUwGBjyU4o6c3U4KrctOQUOgqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM1qwX%2FI%2FzRkss%2FjdSrcA3DtznZ3%2B%2BFnnkUy2sebcggdivuUCraiF3rzQbDjg1y7yyH4vvIgvJXACmAQNB1fPlPDE%2BT6f6fJzkCHTAWBBB5CAhTlHQqWTxPUqDh5lG7kOnfKHK5Jfm9u3ecBH313%2BGrHAIYBukrefigfbiCmX%2FPJjM69A0Lo6mSnriN1sy9hcKdAnuKwhSJoBYepJCmgV2si299WeBtY6CcVFAP02Zij6wp4RV2DQtkYSYkYytceo1CxjR4877j4Ww1784KjM%2BmjlBhivI6CxWc8PGTw35PMp8GEC5pdQK75I1U0kBHSQEo%2F%2BLyrEflDu0NJbJ3ZheQIR0Z3YKNPcWotQx2N3K2%2FeIoHVm2YMDayPZCRVuOzgObUOuj3Op8soWiXgObEUpoCQYk5dTwQp7%2FHemqrJcxbfFlkLKqgEj1TKvh4UQgWtMRZLNZrGzYpk1G2nvtaMTrEpFVC04migEyH%2BDjCezchEK4BHlByu5VBjDJVFRxekl%2B2AgOH%2BWkDToM5apgGM2yyEVQoGbjGb51lQ%2FGBbgQAddQeglpKo0%2F%2FpyUDO9GG7fNEIJMKrpcCYbAcEh%2FkJIOWqTBzAEQc%2Bbq002yrc08NjAAbFnizwv4Mvi0vnmR5Ms11Km4swLRIlxpLMPbqicUGOqUBo0Eex6gZ%2BVX191vtiHNjRsUoA70U5W71XKcIFjdA4KsAOxBglJD6mXg04Dq0KBqJE%2BKKnJ6o1hdWG%2FGmCYvSIgGEczr7jYqyKdA%2Bi%2FLxw103JmY5hrgG2wlQxryNR4iOifXBifCLug3plhOjaWlLZAMSn3vr6bSed7N9jpItgMHtbBbF3BSP9Flf4yiE0spynwENdWwO6A0dO9QWbnm8AVD33%2Bo5&X-Amz-Signature=d6cc01cec7186bbaf3a84156f93a0df170b5f0078eb8c577ecb44f983e635745&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJRGAG5P%2F20250818%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250818T014923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIQC5FOf%2BDXI1AB43yUSDvCv%2FX6aE47VvzxsBxZOBcBbHdgIgHxrTFseia8jT56rg19qTUwGBjyU4o6c3U4KrctOQUOgqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM1qwX%2FI%2FzRkss%2FjdSrcA3DtznZ3%2B%2BFnnkUy2sebcggdivuUCraiF3rzQbDjg1y7yyH4vvIgvJXACmAQNB1fPlPDE%2BT6f6fJzkCHTAWBBB5CAhTlHQqWTxPUqDh5lG7kOnfKHK5Jfm9u3ecBH313%2BGrHAIYBukrefigfbiCmX%2FPJjM69A0Lo6mSnriN1sy9hcKdAnuKwhSJoBYepJCmgV2si299WeBtY6CcVFAP02Zij6wp4RV2DQtkYSYkYytceo1CxjR4877j4Ww1784KjM%2BmjlBhivI6CxWc8PGTw35PMp8GEC5pdQK75I1U0kBHSQEo%2F%2BLyrEflDu0NJbJ3ZheQIR0Z3YKNPcWotQx2N3K2%2FeIoHVm2YMDayPZCRVuOzgObUOuj3Op8soWiXgObEUpoCQYk5dTwQp7%2FHemqrJcxbfFlkLKqgEj1TKvh4UQgWtMRZLNZrGzYpk1G2nvtaMTrEpFVC04migEyH%2BDjCezchEK4BHlByu5VBjDJVFRxekl%2B2AgOH%2BWkDToM5apgGM2yyEVQoGbjGb51lQ%2FGBbgQAddQeglpKo0%2F%2FpyUDO9GG7fNEIJMKrpcCYbAcEh%2FkJIOWqTBzAEQc%2Bbq002yrc08NjAAbFnizwv4Mvi0vnmR5Ms11Km4swLRIlxpLMPbqicUGOqUBo0Eex6gZ%2BVX191vtiHNjRsUoA70U5W71XKcIFjdA4KsAOxBglJD6mXg04Dq0KBqJE%2BKKnJ6o1hdWG%2FGmCYvSIgGEczr7jYqyKdA%2Bi%2FLxw103JmY5hrgG2wlQxryNR4iOifXBifCLug3plhOjaWlLZAMSn3vr6bSed7N9jpItgMHtbBbF3BSP9Flf4yiE0spynwENdWwO6A0dO9QWbnm8AVD33%2Bo5&X-Amz-Signature=b84443093e6f14165e0cb00cbd316ed4e2ab1d10de10fe6659559c7b4c3b7cb4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
