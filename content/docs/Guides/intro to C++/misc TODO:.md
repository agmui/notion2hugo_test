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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3R34RZR%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T190201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIQDk6oERXbZqyRXkwxluGgSzyXKcYPDMu1MqOazhZ15LxwIgFooUJoXRddjGH33EWK30ecVDpIxwY%2BbpAySLYL1akEIqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGISLvwjVFMULtT8wCrcA1%2BRs57hjQ5PKTGu4xt04tEzRyfAzEqf4%2Fz4jIvAIVZoBXEyVPgC7v43gTFZEAEFTWFFiiBcr%2FmwAn9OImxtdcYvSDCirBMVBt9gQRwvfHq%2BRGOIP0klFtQvA3ElMse%2FqUzdFya1iUUPO8mjCLCxZXNaHWH%2FTVMUthECfKLzF0wrkKiENmYharAz80UJm%2FjOjUeFDjx%2FSZXH14Y2H3%2BmhnHejxYmZerh58jGrRc1otiraZ7%2FTUOXAVYxpUN9yXioZxsi%2F9bh995BhmSv1o7O6pWdI4QsoF3PGyk2rvv%2FIiX1uIeJEJCAGLnHV8GzqWx51vGz%2Bp%2FG8ZFrBu89Y%2BQvppOI9VyM6ps53zSNuBUFIUIXIuaFR%2BXK85fVKxBUz3ySuObvn%2BiC0q8i0sne87aLER3tA5f60KwnezwNPaQiTMzT253dpXwiOQbMoBtUshkz151L3tEShuPlzGznJXGdqDnubxrG%2BA7dDbQkQKXbGXJyWpD5TsD4Pd1GDX5sWzJk%2FRfkLXl1RBU6%2BlQXG2Q74JMOIuVTSb50uFZGkdzS48RpnhXoIG0MJU6PeO2O99tatCrBPtf50eg7yUB0au8PXjwVJSd0S1wtYKoKBBwdC0Ru5RROuyyrINonOBOeMPm6%2FsAGOqUBMUUY1mJ5Uq5vRN4tGF%2F7CRrsCnmhKvjC%2FcofrBi0KvgieEL2X9qhB30CoqUmg%2B%2F4P8TL0JT8WdKR9mYDNC8MhYLhHHqy9bMfw9Q8Oa1gDJ4%2FPHABXyT4jcjlU0alex5Ui4czJ2%2BnWk3UW11im91EqWLI8anvTFHMsIKld3vkDdUQiIlIZoH8qdTQAVlZ%2BVPjLIl%2BZEkPU2k9eIBs%2BkmhorbCJpzO&X-Amz-Signature=7abf856b63918f8ba412ea6ef82ce3abf602ef533e3f8bab6e9335fb14a50601&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3R34RZR%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T190201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIQDk6oERXbZqyRXkwxluGgSzyXKcYPDMu1MqOazhZ15LxwIgFooUJoXRddjGH33EWK30ecVDpIxwY%2BbpAySLYL1akEIqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGISLvwjVFMULtT8wCrcA1%2BRs57hjQ5PKTGu4xt04tEzRyfAzEqf4%2Fz4jIvAIVZoBXEyVPgC7v43gTFZEAEFTWFFiiBcr%2FmwAn9OImxtdcYvSDCirBMVBt9gQRwvfHq%2BRGOIP0klFtQvA3ElMse%2FqUzdFya1iUUPO8mjCLCxZXNaHWH%2FTVMUthECfKLzF0wrkKiENmYharAz80UJm%2FjOjUeFDjx%2FSZXH14Y2H3%2BmhnHejxYmZerh58jGrRc1otiraZ7%2FTUOXAVYxpUN9yXioZxsi%2F9bh995BhmSv1o7O6pWdI4QsoF3PGyk2rvv%2FIiX1uIeJEJCAGLnHV8GzqWx51vGz%2Bp%2FG8ZFrBu89Y%2BQvppOI9VyM6ps53zSNuBUFIUIXIuaFR%2BXK85fVKxBUz3ySuObvn%2BiC0q8i0sne87aLER3tA5f60KwnezwNPaQiTMzT253dpXwiOQbMoBtUshkz151L3tEShuPlzGznJXGdqDnubxrG%2BA7dDbQkQKXbGXJyWpD5TsD4Pd1GDX5sWzJk%2FRfkLXl1RBU6%2BlQXG2Q74JMOIuVTSb50uFZGkdzS48RpnhXoIG0MJU6PeO2O99tatCrBPtf50eg7yUB0au8PXjwVJSd0S1wtYKoKBBwdC0Ru5RROuyyrINonOBOeMPm6%2FsAGOqUBMUUY1mJ5Uq5vRN4tGF%2F7CRrsCnmhKvjC%2FcofrBi0KvgieEL2X9qhB30CoqUmg%2B%2F4P8TL0JT8WdKR9mYDNC8MhYLhHHqy9bMfw9Q8Oa1gDJ4%2FPHABXyT4jcjlU0alex5Ui4czJ2%2BnWk3UW11im91EqWLI8anvTFHMsIKld3vkDdUQiIlIZoH8qdTQAVlZ%2BVPjLIl%2BZEkPU2k9eIBs%2BkmhorbCJpzO&X-Amz-Signature=81aaccf58a7fd6ae0ec460427803ded2724d7370a8e5f982f49e4a23e641c099&X-Amz-SignedHeaders=host&x-id=GetObject)

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
