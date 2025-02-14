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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KFP336R%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T061040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2FyKwOILnWZS5%2F1dBmUW5Ua2S54VRvWzmr2c9b7LPL6gIgeSA1tIEw7MsUwrqsSrkUZDTrKqlARq6yVAULfmi6d9kq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDIJl4HJ7T2zkXS%2BBtircA4g8ySb0qypDaaM6WCNZWaWtTwfi9klKoZScVu%2F1bXFPx6xlsQgsOJ9iZNen1wGeBZOVrqFdfe1qAh0x4mdp%2B5Tgj5mvgbETLEX087Uvn%2Ba48u4UhmwNKXJceQaEYTkAuLXleCoEXfrw7nWIJxOGOZvyUphHdChav4Yk7PlEeJnai4ZCBXh8uCnnTxpNCVgByQ7pgZmMllXDtXI%2BQw11%2B0F2qeBIz%2FmKO%2B9%2FKcxAF90jrijk9eiBow3uwaYfZLcnGpfQ4Ya3JzGs2uQttKNu31icoJEpxwoFYQ6v12QkMRE7qVqPCUoJuy8i9kVqQZGOtAfzPTtCU1X3LGbI8ARl7DyLnbHUu5Bc8ZmHGLt%2FNGPfLJPvfcrjuqqeUiSNriEpFBCsb0wxaLHbPiET4s3s%2BiUd%2B38F3Nqtxv9E0Na%2FutuiK8hLesV4Uve8yQ3440grSRsuqr7ngra9LV%2Bu0Y7yOGDGrJe3U0JEiyL4quVC97K1mJiVkbqqAETdIpgWtErDo6UG15%2Fy8lopLUIR%2FP6IYYfSr3y2f4l4zdLRVtZj0fVbGEiI0aDJ9qHYqdW4sAhvg8DtcYOYTkR6gb1%2Bt%2FAkVLaJoA%2Bv2qhNtiF1VUsTPMnO0eaMZW4tidK9HBLjMPyqu70GOqUB7uiPbjSCOI0KCjysxRKQQXtWpyrwmcE5QNbAWFHu22qGxhxIFC8S3LhF5iDRwMe6DDElPp5xQXRHQX7eYPtsT5OIwqBBeXlsAV65whlvFNGowmwZZ0oLhFmUpIjN64IuhBgRunsOfrOxeM%2F9s2PhKGN8H9hY8%2BZgMeg9FyqpmVTWxsH2jFT2TcC6WUJMHvDqUQ51YPoJERuWKdsfksgbd29DB3Tu&X-Amz-Signature=d3b7af98cce920864218a51c1337bae5782492e2d2616944ae23d2795b19fe47&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KFP336R%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T061040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2FyKwOILnWZS5%2F1dBmUW5Ua2S54VRvWzmr2c9b7LPL6gIgeSA1tIEw7MsUwrqsSrkUZDTrKqlARq6yVAULfmi6d9kq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDIJl4HJ7T2zkXS%2BBtircA4g8ySb0qypDaaM6WCNZWaWtTwfi9klKoZScVu%2F1bXFPx6xlsQgsOJ9iZNen1wGeBZOVrqFdfe1qAh0x4mdp%2B5Tgj5mvgbETLEX087Uvn%2Ba48u4UhmwNKXJceQaEYTkAuLXleCoEXfrw7nWIJxOGOZvyUphHdChav4Yk7PlEeJnai4ZCBXh8uCnnTxpNCVgByQ7pgZmMllXDtXI%2BQw11%2B0F2qeBIz%2FmKO%2B9%2FKcxAF90jrijk9eiBow3uwaYfZLcnGpfQ4Ya3JzGs2uQttKNu31icoJEpxwoFYQ6v12QkMRE7qVqPCUoJuy8i9kVqQZGOtAfzPTtCU1X3LGbI8ARl7DyLnbHUu5Bc8ZmHGLt%2FNGPfLJPvfcrjuqqeUiSNriEpFBCsb0wxaLHbPiET4s3s%2BiUd%2B38F3Nqtxv9E0Na%2FutuiK8hLesV4Uve8yQ3440grSRsuqr7ngra9LV%2Bu0Y7yOGDGrJe3U0JEiyL4quVC97K1mJiVkbqqAETdIpgWtErDo6UG15%2Fy8lopLUIR%2FP6IYYfSr3y2f4l4zdLRVtZj0fVbGEiI0aDJ9qHYqdW4sAhvg8DtcYOYTkR6gb1%2Bt%2FAkVLaJoA%2Bv2qhNtiF1VUsTPMnO0eaMZW4tidK9HBLjMPyqu70GOqUB7uiPbjSCOI0KCjysxRKQQXtWpyrwmcE5QNbAWFHu22qGxhxIFC8S3LhF5iDRwMe6DDElPp5xQXRHQX7eYPtsT5OIwqBBeXlsAV65whlvFNGowmwZZ0oLhFmUpIjN64IuhBgRunsOfrOxeM%2F9s2PhKGN8H9hY8%2BZgMeg9FyqpmVTWxsH2jFT2TcC6WUJMHvDqUQ51YPoJERuWKdsfksgbd29DB3Tu&X-Amz-Signature=129efb947cf2e26c8800a258eb7dd4f0a9b6332997eaf8ddebd0fa8e0bbc7979&X-Amz-SignedHeaders=host&x-id=GetObject)

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
