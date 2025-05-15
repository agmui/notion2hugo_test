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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662X5SM7OR%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T132137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIBt27s%2F4KfUKbLmbxAEVHMdYALWqpfjAy2ar7moidP6XAiEAh2h9sDxAgrFMW1rLiorLWHlnzkB3DS50ozUArAnjHNQq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDE52W9Bcf1Et0TCi%2FyrcAwEuAx1dDKmCgbErr%2FDRCIuj65%2BAQ10%2Fp2EypvqQP1uV%2Bmxq04Y2Y8uHodGqhv1aTV03RYwa%2BeW3E9R%2BlSmASrCLxtaS4WpeelN%2FXKNyIdSEX5xRy4gSJurmBAaZBWYfA2xNvp0vUh6%2FOMOe2AJXu0DBFs5nTD5QFEu7F1IyK8Pr8ah%2FdgxjFlzrCStV0XJMPy6K5kzi3BZGE3fN3oDzFfGBHK0VdcGU4qVxmTZ2E4W3mbGwuiALUC5crGaDUP5BS4cVRHs542uj9vK%2FE8PLk4CTdlj%2BHF07pNAA%2BssqnKOoZ%2Fa0Rxg5pC5t7Fs08mlq%2BBGvhY%2Fymqws63rUtBcVWkVOf4ZOazNN28lfPzfLJ%2FAxicC%2FjDEkX6jOJNt3524dR00wlxgKK5sfZmeSNjbnxe0TIdbYQPJJPRMmbhpI5gVkOzRF26rmBFcAJ%2BdgV2I1vzRmVQFW%2FKqm0NmZxAGKd%2FFnjUJjR9CU6VIGYGnGll6mGnDTFWqt%2FSfOOuJqq4GxE4EKnkohU2VwJxw851Mq69zJsvySHj%2B6pZ0Iyez4jHGuBmx6JgweavIi6SBldLnCJ5pZEK6h2lK3GebOpUdQXdWA%2Fmy6LWs7VXkvi9aVgkOI307RIYoj89N0hm%2BHMKq6l8EGOqUBQIU2VIzvwRL1BkGBh0MvFgEqyRpM91ridtDfvasM3d4cPCe6aRheffAou8SuJPPS70dMncK1kJv0eij%2BbD5sHwfbMAwM2keJFXscj4PtU37rivzmjNrSKyTMX7lfniaf3Vj6J5keJFdsqNVu88wq90ErkrxlMdIXAbknOC7huDRpYnBm7GS9DqP0mLbYrNceH6UTfAaW2U%2F3C%2BcsmPM%2F5DJ7jzcX&X-Amz-Signature=1ace324e537563bf5190198168c54fa7ad9a174b32a458e3d1952f399bea5da1&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662X5SM7OR%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T132137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIBt27s%2F4KfUKbLmbxAEVHMdYALWqpfjAy2ar7moidP6XAiEAh2h9sDxAgrFMW1rLiorLWHlnzkB3DS50ozUArAnjHNQq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDE52W9Bcf1Et0TCi%2FyrcAwEuAx1dDKmCgbErr%2FDRCIuj65%2BAQ10%2Fp2EypvqQP1uV%2Bmxq04Y2Y8uHodGqhv1aTV03RYwa%2BeW3E9R%2BlSmASrCLxtaS4WpeelN%2FXKNyIdSEX5xRy4gSJurmBAaZBWYfA2xNvp0vUh6%2FOMOe2AJXu0DBFs5nTD5QFEu7F1IyK8Pr8ah%2FdgxjFlzrCStV0XJMPy6K5kzi3BZGE3fN3oDzFfGBHK0VdcGU4qVxmTZ2E4W3mbGwuiALUC5crGaDUP5BS4cVRHs542uj9vK%2FE8PLk4CTdlj%2BHF07pNAA%2BssqnKOoZ%2Fa0Rxg5pC5t7Fs08mlq%2BBGvhY%2Fymqws63rUtBcVWkVOf4ZOazNN28lfPzfLJ%2FAxicC%2FjDEkX6jOJNt3524dR00wlxgKK5sfZmeSNjbnxe0TIdbYQPJJPRMmbhpI5gVkOzRF26rmBFcAJ%2BdgV2I1vzRmVQFW%2FKqm0NmZxAGKd%2FFnjUJjR9CU6VIGYGnGll6mGnDTFWqt%2FSfOOuJqq4GxE4EKnkohU2VwJxw851Mq69zJsvySHj%2B6pZ0Iyez4jHGuBmx6JgweavIi6SBldLnCJ5pZEK6h2lK3GebOpUdQXdWA%2Fmy6LWs7VXkvi9aVgkOI307RIYoj89N0hm%2BHMKq6l8EGOqUBQIU2VIzvwRL1BkGBh0MvFgEqyRpM91ridtDfvasM3d4cPCe6aRheffAou8SuJPPS70dMncK1kJv0eij%2BbD5sHwfbMAwM2keJFXscj4PtU37rivzmjNrSKyTMX7lfniaf3Vj6J5keJFdsqNVu88wq90ErkrxlMdIXAbknOC7huDRpYnBm7GS9DqP0mLbYrNceH6UTfAaW2U%2F3C%2BcsmPM%2F5DJ7jzcX&X-Amz-Signature=343c92bb04c4eeab46be440531f3af6acad67106dd31e6d6b519ff21146c1d44&X-Amz-SignedHeaders=host&x-id=GetObject)

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
