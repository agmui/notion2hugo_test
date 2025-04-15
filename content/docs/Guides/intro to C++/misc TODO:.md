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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NKJUPAI%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T160838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDTG301%2BTFhAFGBWVkFRbGPi2E7sIOigMY1SlNtJvORSAIgBt%2BXdcK9l4kZlLiSC20VfkKnHEYkV73pX0mAMMvMle4q%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDASMqsbgqMeEQ73BNyrcA4jD2qz45AhGbxMsUxbMr264FhtAhqplfY%2BeiaUAvo2cTzkqHEWilzo3dKpiQTb9P4M4Wx6ncaEmL4rHNPuWkiJvLPUaLSjQbT8ekNCfYdRvC5q3flq6RN4vpoKHQsZCtvPF%2BwF7INBvzlINMNBWkSb%2F3L3J1kPvT2N5ixaj0DaJN%2BaW55UT6fVn1QSKGQ%2BjEfML8vntdBxudp3XQnbT%2FcjQBTttoOI94oVnz%2FfkHIGuWcvZkLlnjCHSz5IdT65Hj4r6qEwazoI06gxG8nngGguJK%2FVtSmqos%2FosnGw99fb5p%2FfcasSSEZ4E9jXqjL9rpdTqxlJZKuIzOBcsS9aHtCV9IpVAlC34Ao2qRdDr4BgGQUMP6EKkxdjrMdQQKxNqJfqx8KA10NbX184RDoeqsSyqB1AzXtGmTQHJRqDZijw2hIM0T9CoURrWE1HQL4i6HCNy6lf31niLxKeUGumnOSruHRHyfX%2BLhYHhHfSjy5fnukpPHTd5qyJLoVl5hWChoTsYZid9t1gXWh0Bmjle9bjqesCrbIZAwg4HmaNyMec8AYXIT1Z2tGa%2FDFbVs45SOssr2B2QjdRh0l5imRTJNTR0oiQ72Roa8g3HzuHIV2shu271%2F1UJI7CsGbh%2FMN6E%2Br8GOqUB0I%2FSHhTq%2FvRYLpuvpBk0KBY%2B%2FP7Y2K%2FIwId1LkSaFEFXhu%2F2EQI7OojRSOcHXMNuk77HiHC03ILbeCtgrju6%2BiOaUrvtfmJcDJH958NExv0hsQvHo5IiAGYuLwctFbGp%2BcCoEG3FYqa%2FS2UFIbI2QoQdyZjmPV%2BTBDCXyZsvsupk4zS37E3qVBGvZKa0JLRVmoIV5bygjxkyxuRLxMsFx1pznAx%2F&X-Amz-Signature=b6ae4012a78a8146a58c74551a46ac726ef1082517c3ebab7300a14777496418&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NKJUPAI%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T160838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDTG301%2BTFhAFGBWVkFRbGPi2E7sIOigMY1SlNtJvORSAIgBt%2BXdcK9l4kZlLiSC20VfkKnHEYkV73pX0mAMMvMle4q%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDASMqsbgqMeEQ73BNyrcA4jD2qz45AhGbxMsUxbMr264FhtAhqplfY%2BeiaUAvo2cTzkqHEWilzo3dKpiQTb9P4M4Wx6ncaEmL4rHNPuWkiJvLPUaLSjQbT8ekNCfYdRvC5q3flq6RN4vpoKHQsZCtvPF%2BwF7INBvzlINMNBWkSb%2F3L3J1kPvT2N5ixaj0DaJN%2BaW55UT6fVn1QSKGQ%2BjEfML8vntdBxudp3XQnbT%2FcjQBTttoOI94oVnz%2FfkHIGuWcvZkLlnjCHSz5IdT65Hj4r6qEwazoI06gxG8nngGguJK%2FVtSmqos%2FosnGw99fb5p%2FfcasSSEZ4E9jXqjL9rpdTqxlJZKuIzOBcsS9aHtCV9IpVAlC34Ao2qRdDr4BgGQUMP6EKkxdjrMdQQKxNqJfqx8KA10NbX184RDoeqsSyqB1AzXtGmTQHJRqDZijw2hIM0T9CoURrWE1HQL4i6HCNy6lf31niLxKeUGumnOSruHRHyfX%2BLhYHhHfSjy5fnukpPHTd5qyJLoVl5hWChoTsYZid9t1gXWh0Bmjle9bjqesCrbIZAwg4HmaNyMec8AYXIT1Z2tGa%2FDFbVs45SOssr2B2QjdRh0l5imRTJNTR0oiQ72Roa8g3HzuHIV2shu271%2F1UJI7CsGbh%2FMN6E%2Br8GOqUB0I%2FSHhTq%2FvRYLpuvpBk0KBY%2B%2FP7Y2K%2FIwId1LkSaFEFXhu%2F2EQI7OojRSOcHXMNuk77HiHC03ILbeCtgrju6%2BiOaUrvtfmJcDJH958NExv0hsQvHo5IiAGYuLwctFbGp%2BcCoEG3FYqa%2FS2UFIbI2QoQdyZjmPV%2BTBDCXyZsvsupk4zS37E3qVBGvZKa0JLRVmoIV5bygjxkyxuRLxMsFx1pznAx%2F&X-Amz-Signature=6e469459a3ffd3f3985eeab29d0a7195e316f781518ea34302de0b831ee34003&X-Amz-SignedHeaders=host&x-id=GetObject)

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
