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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667H2ULOV7%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T140416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIQDEBzdR6SqoWuON59tBignJfG%2F9pPCx0heC%2BFEKxt%2FeCQIgQtP0q4tDRNtMT2b98i4Y1QOl0LY68n8MvWRL20vl7%2BYq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDJdGSS%2FUv6YsOyI6EircA068%2BtToW7s108gq1ey4WoE7WTZ%2F5QZ8Ei0KN4Hzh4KY5yaxp51BecKZMI5Ebk2eaQy2sgFC%2BKK8vNFwP63elGtRT%2FmhiGYA%2FBzQrVQDSjesR113nnvsgM%2BUyxn9Eu2Acn23fYSs%2FETKCq7FbFtXO5S6k25fAYdlyINvFnI35LUMj39vkMzOLSvSnqGJjMnLKYrJc6rUpL2ZKJ7Vmy4gsi5pbZDA6P4AW7Hs2ymWQNRcmJ13MuIrJRU0ZOpiMFsDX%2F56t2hZk1CXtmZVgsY2NIEJb7GhdBKw7ilz%2B6DxE5sqCDQP1rgYpr%2BHI0CDOtY1efPv0%2F%2Fa1Qb5dNpQP5KWPY3jtBxLHAqUnxmTHV%2BuidsUEoqNFgHe%2F3HCjglA2CPiNovkieWHtbR2MWxlAWXY3CW2w6hUj1rZ3XKreMCYzXfzXN0H8%2Ba7yzcF7qShXWWWgXeOVLVoPx99f7Z2xZWa1GE44cGhdeqyg%2FY8ZftbgicmhMsKl03SVKgBJ%2Bn%2BxarU0eotf9UXXvzPblckqNWnm7BKogkwlMvGypimlbJVg%2FUQLZEZXvuaqtNiDdsHimw%2FD2Oq7tOL2kI6FNOr3ZjmIx4HQVoGc40ouBxqbvaNrKy%2BWPaHXDBBaLoVg6AjMI61n78GOqUBMDiq%2BvrleuLjKWjxPy2l3NdhnEhmzXqdEhSD8pyUnV1ZTi4y%2B0shwfIkFQmC4JIc5EamE22TKSSQDS%2F5CSlL4kht0SWDKZKSZFKDuLhagkURmhFwMMIxQI2ySkVoImHQQ2vwRAerGzeIh2lDZkL7QYwHYN4dnxGgQehrJx2%2FqIcG53QwtBENREb%2B1k0naqWLaH6y%2BarRGyW7JGhATjntoNU9XQKq&X-Amz-Signature=21a1c83b1ae302fa78c62f78356e2ebabf7038351256ca6fa90ccec1b4950661&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667H2ULOV7%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T140416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIQDEBzdR6SqoWuON59tBignJfG%2F9pPCx0heC%2BFEKxt%2FeCQIgQtP0q4tDRNtMT2b98i4Y1QOl0LY68n8MvWRL20vl7%2BYq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDJdGSS%2FUv6YsOyI6EircA068%2BtToW7s108gq1ey4WoE7WTZ%2F5QZ8Ei0KN4Hzh4KY5yaxp51BecKZMI5Ebk2eaQy2sgFC%2BKK8vNFwP63elGtRT%2FmhiGYA%2FBzQrVQDSjesR113nnvsgM%2BUyxn9Eu2Acn23fYSs%2FETKCq7FbFtXO5S6k25fAYdlyINvFnI35LUMj39vkMzOLSvSnqGJjMnLKYrJc6rUpL2ZKJ7Vmy4gsi5pbZDA6P4AW7Hs2ymWQNRcmJ13MuIrJRU0ZOpiMFsDX%2F56t2hZk1CXtmZVgsY2NIEJb7GhdBKw7ilz%2B6DxE5sqCDQP1rgYpr%2BHI0CDOtY1efPv0%2F%2Fa1Qb5dNpQP5KWPY3jtBxLHAqUnxmTHV%2BuidsUEoqNFgHe%2F3HCjglA2CPiNovkieWHtbR2MWxlAWXY3CW2w6hUj1rZ3XKreMCYzXfzXN0H8%2Ba7yzcF7qShXWWWgXeOVLVoPx99f7Z2xZWa1GE44cGhdeqyg%2FY8ZftbgicmhMsKl03SVKgBJ%2Bn%2BxarU0eotf9UXXvzPblckqNWnm7BKogkwlMvGypimlbJVg%2FUQLZEZXvuaqtNiDdsHimw%2FD2Oq7tOL2kI6FNOr3ZjmIx4HQVoGc40ouBxqbvaNrKy%2BWPaHXDBBaLoVg6AjMI61n78GOqUBMDiq%2BvrleuLjKWjxPy2l3NdhnEhmzXqdEhSD8pyUnV1ZTi4y%2B0shwfIkFQmC4JIc5EamE22TKSSQDS%2F5CSlL4kht0SWDKZKSZFKDuLhagkURmhFwMMIxQI2ySkVoImHQQ2vwRAerGzeIh2lDZkL7QYwHYN4dnxGgQehrJx2%2FqIcG53QwtBENREb%2B1k0naqWLaH6y%2BarRGyW7JGhATjntoNU9XQKq&X-Amz-Signature=9d6855311873034f99952fe31e9b8b68035675023b43380b396e082aac00156b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
