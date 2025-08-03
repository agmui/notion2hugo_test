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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OVK3XZC%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T161001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAXoGdkkYVvfNqZ29gvK3aclrW5jS8iyS6Oqh%2F4fL0YyAiEA0BYVJ0qFREgiT7I%2Fe4Otb4vv1YC2I8ddlfHIvzIUYyIq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDG9bnlwHhzL0ZFwYECrcA58NAad3EZrfgI8beRkj23EPGYN3Qyzu38glD6%2FjaDf6fKK0bgLqqR2cfdyldRelTRCsrrRZCvO71I6LAX8yQmtydvR8d3oWEOT3XgYqF0GJa8tMXbM6Iyr3FIyDz%2BDcNCHbApaCto3oXFq%2BZfPMqYX5Bdkmg7sfvScnrcUx8wfCUXFnIyFvXbbJgAxvlxq59iGkoW7oYT5WJZz2HanFihuzwjceb5629csVcABIZ9b1h1ellbt4EVNeW%2F0frT9UtRg03BqIm9lTe3KYwO80iH3amzmqgcJmKWAgBSe4BBD4wKgXWsFEmlsJTvxECF0dFTNMhmMMS3GiXZnPv5mTIy%2B0IXKxeCUDQZiVQw5e9fovv4zGO2Yf8Tr8mAFkSMB6Xy57pve7jTmiaiacFbW%2FFclYRzBwyBr2lcqvi2faoSq2UJf9lb5g3jxT20%2FkqyGxaGtjdPL1bPvxMmi9RMVyx%2B4eQCoaBdasT7PPZchRa7MzWs%2FHZnc2evoo7Fs%2F4UjzMWU%2BwuKLdrDtyh4xH9yPQ98w2kZVQAHQqBK4fhWK2GqBwXS0M7u9EXq6gmuGL%2Bv4QRc639eqF%2Bd29tVpkGnONIrFyTAGgsSJ0s35tbQZifql%2FNCBi%2FUNx3zw461QMMfSvcQGOqUBKg7a3GdDAnACJVV0Fwoy0N6SqxFWkQ%2BtgbiB0sIJLBffVWHpUp71TUDIE0Vk8HtrLCzzr6hCiZ0vY4hErFeNvBMRafwiYYueHWMogPHJTkzpv5PZw3YRRTF60%2Bw0ecnLzHQAhUdLpWLLOPwvbQ8RAxiud%2BNxEg7ffOROulGGC8aA3nNENHkZwMWMiwBaTb0hVrSPib1y1BAbgyUplJ26xQuQaGIr&X-Amz-Signature=cf80fb324c55702682552a1ddf104910b2a7aaa505e6cca7fc9731c8bbad2d11&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OVK3XZC%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T161001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAXoGdkkYVvfNqZ29gvK3aclrW5jS8iyS6Oqh%2F4fL0YyAiEA0BYVJ0qFREgiT7I%2Fe4Otb4vv1YC2I8ddlfHIvzIUYyIq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDG9bnlwHhzL0ZFwYECrcA58NAad3EZrfgI8beRkj23EPGYN3Qyzu38glD6%2FjaDf6fKK0bgLqqR2cfdyldRelTRCsrrRZCvO71I6LAX8yQmtydvR8d3oWEOT3XgYqF0GJa8tMXbM6Iyr3FIyDz%2BDcNCHbApaCto3oXFq%2BZfPMqYX5Bdkmg7sfvScnrcUx8wfCUXFnIyFvXbbJgAxvlxq59iGkoW7oYT5WJZz2HanFihuzwjceb5629csVcABIZ9b1h1ellbt4EVNeW%2F0frT9UtRg03BqIm9lTe3KYwO80iH3amzmqgcJmKWAgBSe4BBD4wKgXWsFEmlsJTvxECF0dFTNMhmMMS3GiXZnPv5mTIy%2B0IXKxeCUDQZiVQw5e9fovv4zGO2Yf8Tr8mAFkSMB6Xy57pve7jTmiaiacFbW%2FFclYRzBwyBr2lcqvi2faoSq2UJf9lb5g3jxT20%2FkqyGxaGtjdPL1bPvxMmi9RMVyx%2B4eQCoaBdasT7PPZchRa7MzWs%2FHZnc2evoo7Fs%2F4UjzMWU%2BwuKLdrDtyh4xH9yPQ98w2kZVQAHQqBK4fhWK2GqBwXS0M7u9EXq6gmuGL%2Bv4QRc639eqF%2Bd29tVpkGnONIrFyTAGgsSJ0s35tbQZifql%2FNCBi%2FUNx3zw461QMMfSvcQGOqUBKg7a3GdDAnACJVV0Fwoy0N6SqxFWkQ%2BtgbiB0sIJLBffVWHpUp71TUDIE0Vk8HtrLCzzr6hCiZ0vY4hErFeNvBMRafwiYYueHWMogPHJTkzpv5PZw3YRRTF60%2Bw0ecnLzHQAhUdLpWLLOPwvbQ8RAxiud%2BNxEg7ffOROulGGC8aA3nNENHkZwMWMiwBaTb0hVrSPib1y1BAbgyUplJ26xQuQaGIr&X-Amz-Signature=cdadb5bcd2328e9f75fc09791688535cf28d6dbced51703677d77f57ba4456d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
