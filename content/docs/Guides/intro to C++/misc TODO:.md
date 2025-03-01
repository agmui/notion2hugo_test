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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5KBVXHW%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T220239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQCwvTgbb9IjoXbA4ZTTdGAGg6Jemaewu1oYcxskwIrp6wIhALsu%2BJI11xOMOvzFKOmoyE9Gr1CtcgW7LldIhCbhcnduKogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw7dOFYl%2B85SidQevUq3AOdx%2Bl8Bd4OdRWRljM%2BlqhghBLLpDjh0%2FUXJQba5kw0ubJYvh2E1gKlXwWuY9t8x4RJSEFeFxj16i0fgrKhSKR6rRGNl7bU9PbuNMkMDGIUALvP%2FwOETuXvKWotmiwcCvhMEZy6l7XApL1lDzp13nfjzQLJ2pHIbBQgTQVrbNbaXNxwSw2dWqqYEcCNyCmiw5HYDtgBfvR0vGVpgrb3n68CJQjWRcwvUy34BZ2OANAW291jV9SnHSXoGpKUNMlcIU4sEw%2FfsOWVaNQDmxhT5UReRxvMWULWRw42Ea3xJ3YyBXGBvuqpMseNBUVQyI2g8whfu4TiWt1PlauS7%2FOwGu4ADlX3APsFYQL3hZ3ayGn3ML%2FKV0SvjPYPyeuf3vVl8DpCb4cAg%2FO8E%2BSznis6gweCbn7pLMvK6hLpIBDISD4eYJt3RUna%2BLQkeX3IWZC2zpVI4SvSPdMPpaASi%2FkgkoUNo4DuW%2FHtizKA%2Fu0QeZsIcu%2Fwv%2BUGVx2qgxOLheIPW7VHUWe%2BUwkuWWEeHtBOdxbeUD4nLSNtJfmbwuW4AWxgFaCFcYVqrCamH0%2FPvmdpcRoo7CNenqXP71qpAwxfGr9e5p6nuqJzus3JrDOUFC%2BMDCfcCV%2F7BffF0SlTZDC7x42%2BBjqkAdiMcI5IIdD3FkizO%2BNpv0jXs2K%2Bk03Bo4PUniy%2FgZ6K%2FadkhnHjHcfgzh664KGdc2xs2hu1bPvzCXYojKRnGpANWcA%2FjWrDdetsMCk%2Bk17PiY%2FYqAjE%2FahSqNR8mErfr3PsV%2Fv%2FDuXoVs8f0yP5zs1CLlHDByoOFzQXfXbf3yZZIaZtcgBwD%2BrrBMqhminwaSqkcb76bHJAN7iyY2CLzDr9C%2Bqz&X-Amz-Signature=d04c2d62ce267b71c2fa10200dd9f0e308b96f0526bd3f19526bf4d7d1045fce&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5KBVXHW%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T220239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQCwvTgbb9IjoXbA4ZTTdGAGg6Jemaewu1oYcxskwIrp6wIhALsu%2BJI11xOMOvzFKOmoyE9Gr1CtcgW7LldIhCbhcnduKogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw7dOFYl%2B85SidQevUq3AOdx%2Bl8Bd4OdRWRljM%2BlqhghBLLpDjh0%2FUXJQba5kw0ubJYvh2E1gKlXwWuY9t8x4RJSEFeFxj16i0fgrKhSKR6rRGNl7bU9PbuNMkMDGIUALvP%2FwOETuXvKWotmiwcCvhMEZy6l7XApL1lDzp13nfjzQLJ2pHIbBQgTQVrbNbaXNxwSw2dWqqYEcCNyCmiw5HYDtgBfvR0vGVpgrb3n68CJQjWRcwvUy34BZ2OANAW291jV9SnHSXoGpKUNMlcIU4sEw%2FfsOWVaNQDmxhT5UReRxvMWULWRw42Ea3xJ3YyBXGBvuqpMseNBUVQyI2g8whfu4TiWt1PlauS7%2FOwGu4ADlX3APsFYQL3hZ3ayGn3ML%2FKV0SvjPYPyeuf3vVl8DpCb4cAg%2FO8E%2BSznis6gweCbn7pLMvK6hLpIBDISD4eYJt3RUna%2BLQkeX3IWZC2zpVI4SvSPdMPpaASi%2FkgkoUNo4DuW%2FHtizKA%2Fu0QeZsIcu%2Fwv%2BUGVx2qgxOLheIPW7VHUWe%2BUwkuWWEeHtBOdxbeUD4nLSNtJfmbwuW4AWxgFaCFcYVqrCamH0%2FPvmdpcRoo7CNenqXP71qpAwxfGr9e5p6nuqJzus3JrDOUFC%2BMDCfcCV%2F7BffF0SlTZDC7x42%2BBjqkAdiMcI5IIdD3FkizO%2BNpv0jXs2K%2Bk03Bo4PUniy%2FgZ6K%2FadkhnHjHcfgzh664KGdc2xs2hu1bPvzCXYojKRnGpANWcA%2FjWrDdetsMCk%2Bk17PiY%2FYqAjE%2FahSqNR8mErfr3PsV%2Fv%2FDuXoVs8f0yP5zs1CLlHDByoOFzQXfXbf3yZZIaZtcgBwD%2BrrBMqhminwaSqkcb76bHJAN7iyY2CLzDr9C%2Bqz&X-Amz-Signature=93d2193fc1ee45da933f0fd6589057884f3716bdba5b74ef03fafe66f879e236&X-Amz-SignedHeaders=host&x-id=GetObject)

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
