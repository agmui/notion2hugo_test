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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIANRZMC%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T181026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH3o4akqP3cbm2AUfk6P0a9JS8Z1Pb8N5S23rspMhP1DAiAHjzeDB9ZaJ0r2XnZgGlvjIITs5zNambvI7BWj55bDwSr%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMvIXhfshj3cV443k2KtwDznov2MaEVwDFo%2FF4XUKtWDlB4zWwIrqXCdqEnf%2B5Ni7uTgt3lrdlOdAbrrynOyBtY2ZWgbXEO8nusUHh%2BGYZ6ryP2wsSrsMqZ%2FGHZ8PwV%2BoS4TcM%2BMCipGSn%2Fof7kRasZzmhVVPc7MwbxEep7nex0nx2bhY14LTad0JRT%2F%2B%2BGjzgFMgy%2BcW4SctZJkZq%2BDI7pqiU2RHQgnHIbzXXe2Zyq09rACssHdsglGN7rDwAn%2BA2v43uBKXm1P9%2B9SD4fXfbnIJI90Gq%2FQCEyxWVNlarQHBq%2B52kM00DPYHo6nAMx%2F1IDOWlWAhSloM%2BbWKP7Syf2Lq9eEPWymrGQtqFAfe9KrqN6fP%2FMZPJTpZwqcGXIt2i0LKA80cHrQV%2FiY38bLhmb4muszL7DY9HVlnzFvpLqJCYevBSv3H3Ak%2BkHC1MgiiwDhMoBg3jALE4oP2WyQsArIVaK172p0E3peHE9gmENIJ2M%2FgM5Awdk%2F3eQUSkyjsKotV26yc%2Fk6De7Ac7VZoV5iCy7OyX3fpJ%2BhA%2FshJMjzH15DQtZWaAsP3PSlMEVL5BFcADoERQ0HhokRlK%2FOFPuxFS28sjWuAm4Cs5mWtUQw3B1YBbWxOZRGpdezGJRG0tX4WqNVgOHFAWMvkwgd%2B4vQY6pgFd0eDrZriNbKiY%2BgThZjzAM4CqYmzibbedNXsegD1DUWPKe5gGqrGpEXo97r37sFEdUSPVeGxC9avAPhEhWmY%2Ff5KuaNaJDW6blBdIUlMstskVTEQ5lEyL0m9s7OLbn3bGzJbYfXGCJqAeMxz3fNcVVfLBcd%2B7vaCiPduDUlhzMqhwOqoD9NigH82kCSgR%2FvH%2FrcNtA%2BWruQOLVqji2KrIJvaRBtAh&X-Amz-Signature=3f60890014b82703f4b09622f93326438d9a0a4428abfea9bd61cd3a8b5f4e79&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIANRZMC%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T181026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH3o4akqP3cbm2AUfk6P0a9JS8Z1Pb8N5S23rspMhP1DAiAHjzeDB9ZaJ0r2XnZgGlvjIITs5zNambvI7BWj55bDwSr%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMvIXhfshj3cV443k2KtwDznov2MaEVwDFo%2FF4XUKtWDlB4zWwIrqXCdqEnf%2B5Ni7uTgt3lrdlOdAbrrynOyBtY2ZWgbXEO8nusUHh%2BGYZ6ryP2wsSrsMqZ%2FGHZ8PwV%2BoS4TcM%2BMCipGSn%2Fof7kRasZzmhVVPc7MwbxEep7nex0nx2bhY14LTad0JRT%2F%2B%2BGjzgFMgy%2BcW4SctZJkZq%2BDI7pqiU2RHQgnHIbzXXe2Zyq09rACssHdsglGN7rDwAn%2BA2v43uBKXm1P9%2B9SD4fXfbnIJI90Gq%2FQCEyxWVNlarQHBq%2B52kM00DPYHo6nAMx%2F1IDOWlWAhSloM%2BbWKP7Syf2Lq9eEPWymrGQtqFAfe9KrqN6fP%2FMZPJTpZwqcGXIt2i0LKA80cHrQV%2FiY38bLhmb4muszL7DY9HVlnzFvpLqJCYevBSv3H3Ak%2BkHC1MgiiwDhMoBg3jALE4oP2WyQsArIVaK172p0E3peHE9gmENIJ2M%2FgM5Awdk%2F3eQUSkyjsKotV26yc%2Fk6De7Ac7VZoV5iCy7OyX3fpJ%2BhA%2FshJMjzH15DQtZWaAsP3PSlMEVL5BFcADoERQ0HhokRlK%2FOFPuxFS28sjWuAm4Cs5mWtUQw3B1YBbWxOZRGpdezGJRG0tX4WqNVgOHFAWMvkwgd%2B4vQY6pgFd0eDrZriNbKiY%2BgThZjzAM4CqYmzibbedNXsegD1DUWPKe5gGqrGpEXo97r37sFEdUSPVeGxC9avAPhEhWmY%2Ff5KuaNaJDW6blBdIUlMstskVTEQ5lEyL0m9s7OLbn3bGzJbYfXGCJqAeMxz3fNcVVfLBcd%2B7vaCiPduDUlhzMqhwOqoD9NigH82kCSgR%2FvH%2FrcNtA%2BWruQOLVqji2KrIJvaRBtAh&X-Amz-Signature=e4480623c661a23d7e0c0f3463e654fa8a6a99c8ad4bd4498c3c625564a3bb10&X-Amz-SignedHeaders=host&x-id=GetObject)

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
