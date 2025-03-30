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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TWMIKQJ%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T100731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIC7muCertN2luJjiL2Rn1AaTRVqfYO0DIruylEvCu8UcAiEA1mSSbfaXhEKS6qTpF9ScRwtUasJoCPiSTJqd8CmTEjcqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMy55ZPBDvHl3kwkSyrcA7lUZqDC1MPalbsrkCZ0pxDWqrqDXg7JRR8qM99G%2Ba2TeMGdowYoEVGW7IJCwlNXg0drO0BRSj69x%2BcCk5HFoW0TME6t9Y%2B5StpaCxDqy8EYMJ4zDAXSoXEqzfHi9g8EO32H7Z3%2FoUN9ZL1acatlc%2FYyvsmqSjKa3BLWgRQmbwl1sSr%2BpE1rSkhg7tiLclp7B%2BRCTpJzIARlJ3s07i94Hxn0Ayvq97wcjqO576C9F0zYBh%2BUX5v7%2FYpVlMQ98LnFD3ldtju6WnVdF5s3TQeDDb9ZWPrlsjUTwCZ6w0a9kFGWdbxLhgptbHL33Pp5LrNguQG9hOBfSW4rX83bEK5kpQzCmGrWxiaL0MRivKrLvep4vNCnfL5Nklp6%2Bztm%2FNKXZbw2xPUBpdT17qw3EnxiLlEqRtndEgEHccNbCsDQmwLoThlJhUoDvpljyK9mleocw%2BY4AXuzyajrv1%2Bisysupp0uWXyU3n%2BhLPir3Z9PWxif0fuaal1grXhkvJZR0k17xUK0%2Ba%2Br%2BuvyXWhXLkvvkdZUQsVR4lINFR%2BQJuf4R8gGPKVwt1PvMHEf4CtzoT4Uqo9Ug%2B%2FvMlMKxaglwdomrJ2o597%2BLf%2FXvoWRMNUkDE93XdyurjE3BMrjWcsJMLnwo78GOqUBYGHh5YuXZ7vtmLmvopKMtutkiQJqwm%2F6%2FjvIWumuGG2x7cJhrNUihf6Fh8d2WG%2FG1omOCZogmzGETiShFXAPCPNSibSF52QmEwoRY2Bl1UyHXOy12qqYuXmuMtbGmckwNW2FD%2BJd6Uh7UnZ14sa3U4AOkUHmm9MJXfU8HCy579xWcZE%2Bwb6zO7S3qDy4VtwgJGUL%2BdJW7ACDHmlIEKDEMX1xZ8vg&X-Amz-Signature=8b66503321d1061b62175c1cd2e2aca1c254a8fd7f2c15d1e90ba741d75c4a64&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TWMIKQJ%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T100731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIC7muCertN2luJjiL2Rn1AaTRVqfYO0DIruylEvCu8UcAiEA1mSSbfaXhEKS6qTpF9ScRwtUasJoCPiSTJqd8CmTEjcqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMy55ZPBDvHl3kwkSyrcA7lUZqDC1MPalbsrkCZ0pxDWqrqDXg7JRR8qM99G%2Ba2TeMGdowYoEVGW7IJCwlNXg0drO0BRSj69x%2BcCk5HFoW0TME6t9Y%2B5StpaCxDqy8EYMJ4zDAXSoXEqzfHi9g8EO32H7Z3%2FoUN9ZL1acatlc%2FYyvsmqSjKa3BLWgRQmbwl1sSr%2BpE1rSkhg7tiLclp7B%2BRCTpJzIARlJ3s07i94Hxn0Ayvq97wcjqO576C9F0zYBh%2BUX5v7%2FYpVlMQ98LnFD3ldtju6WnVdF5s3TQeDDb9ZWPrlsjUTwCZ6w0a9kFGWdbxLhgptbHL33Pp5LrNguQG9hOBfSW4rX83bEK5kpQzCmGrWxiaL0MRivKrLvep4vNCnfL5Nklp6%2Bztm%2FNKXZbw2xPUBpdT17qw3EnxiLlEqRtndEgEHccNbCsDQmwLoThlJhUoDvpljyK9mleocw%2BY4AXuzyajrv1%2Bisysupp0uWXyU3n%2BhLPir3Z9PWxif0fuaal1grXhkvJZR0k17xUK0%2Ba%2Br%2BuvyXWhXLkvvkdZUQsVR4lINFR%2BQJuf4R8gGPKVwt1PvMHEf4CtzoT4Uqo9Ug%2B%2FvMlMKxaglwdomrJ2o597%2BLf%2FXvoWRMNUkDE93XdyurjE3BMrjWcsJMLnwo78GOqUBYGHh5YuXZ7vtmLmvopKMtutkiQJqwm%2F6%2FjvIWumuGG2x7cJhrNUihf6Fh8d2WG%2FG1omOCZogmzGETiShFXAPCPNSibSF52QmEwoRY2Bl1UyHXOy12qqYuXmuMtbGmckwNW2FD%2BJd6Uh7UnZ14sa3U4AOkUHmm9MJXfU8HCy579xWcZE%2Bwb6zO7S3qDy4VtwgJGUL%2BdJW7ACDHmlIEKDEMX1xZ8vg&X-Amz-Signature=c1fce3e49e3517e450ce082b8b2e0a26a9c2f62668528e123ad85e0ad96c11a3&X-Amz-SignedHeaders=host&x-id=GetObject)

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
