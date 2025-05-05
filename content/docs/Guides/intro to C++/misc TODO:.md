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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UC26G6LT%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T140850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAHgvlIkZl%2FD6wZq4%2FFifjCLkVmyUbR%2BDri3hS5GtjSiAiEAiJvwVh%2BxBDxw4cY3yYilyn%2F0IPKKyiLrKHps6atE91Eq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDGGypX1ntsOpd2zb9SrcAxfpHgT8dhf3H1QzkpoF%2BAC%2FtnM7A6Hncx9RUvXkSOU9lb2WIjiv5%2BAKSOveG8FeZiqnMKcLeetg94Z0CvYyz7qpqHOcv0K2IG9aFQ930A4VJKv8DJXF7A7MGgMqxMiGpdsmw6ue5ynpHPAR%2FED0jvOYzA7Hamf0aD72sxSzzKQ0KjZte41RXkM2thuG1fOUShz4cIesoURCpTBkKftRxPN26Xm3%2F5HrBfM0k3PC7s%2B%2BxPQyHXYhu2WeQkwJJN041biPpznauHb9wI7LW3bZY4yv6I%2Bm0LqCP0EAoFGDDZJR9jrg3tZuLpO11IBiegs7g0D6GQbOoygB2znjElYs%2B67e0goqkyOSwPDDsqpg0xwrdB%2BCIDVgkaYB0DBItpQD3uvWEwZM095hql11kLnz04CJyS%2FtdcIiimnTfAJDmX1l90Kt0fp2oXIMMDViYiIcvWES7I4Vvz%2B2mHWUBqRdb3RbhgSpNYsDEJLSAbgmJvMJJOY2H%2Bgqb0JLxarRWRI6WZNhPUh5xIXRa0mPK9RkEvifWhmX3dUgSOR6HYgwAXeRIos5vGMnI6XsPG4%2FXi7Cz85CPjh1uXRpBtbvwXWFbhMwY5Kvg%2BUBYNONHJK1UNOobBESA3pE9FkHKcFNMKj%2F4sAGOqUBsgchowzlUlF1VLZGz1RyvIJCC8Y6MQM0R7YKjKOh54qLAtZuzr4aYgcLXYWimKZg7wwn4loLHkjnIaZD1Uye07WEQZmJgWRWr5a9TJ7kJDomXDuu5HhGhlzMy0wdRxKhcBJT0aOBS%2FiigtqGzSv8ToeCZjgZF6m9501v%2BXnu543uUjK8nNVz0sWBbfna18HcZ%2BHSvFBq5eEyVpyRLtjua6BT8Skv&X-Amz-Signature=f0a71b5db3a049931f1457e9a1e8951c9285fb01117d01190eb9249b1468dfcd&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UC26G6LT%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T140850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAHgvlIkZl%2FD6wZq4%2FFifjCLkVmyUbR%2BDri3hS5GtjSiAiEAiJvwVh%2BxBDxw4cY3yYilyn%2F0IPKKyiLrKHps6atE91Eq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDGGypX1ntsOpd2zb9SrcAxfpHgT8dhf3H1QzkpoF%2BAC%2FtnM7A6Hncx9RUvXkSOU9lb2WIjiv5%2BAKSOveG8FeZiqnMKcLeetg94Z0CvYyz7qpqHOcv0K2IG9aFQ930A4VJKv8DJXF7A7MGgMqxMiGpdsmw6ue5ynpHPAR%2FED0jvOYzA7Hamf0aD72sxSzzKQ0KjZte41RXkM2thuG1fOUShz4cIesoURCpTBkKftRxPN26Xm3%2F5HrBfM0k3PC7s%2B%2BxPQyHXYhu2WeQkwJJN041biPpznauHb9wI7LW3bZY4yv6I%2Bm0LqCP0EAoFGDDZJR9jrg3tZuLpO11IBiegs7g0D6GQbOoygB2znjElYs%2B67e0goqkyOSwPDDsqpg0xwrdB%2BCIDVgkaYB0DBItpQD3uvWEwZM095hql11kLnz04CJyS%2FtdcIiimnTfAJDmX1l90Kt0fp2oXIMMDViYiIcvWES7I4Vvz%2B2mHWUBqRdb3RbhgSpNYsDEJLSAbgmJvMJJOY2H%2Bgqb0JLxarRWRI6WZNhPUh5xIXRa0mPK9RkEvifWhmX3dUgSOR6HYgwAXeRIos5vGMnI6XsPG4%2FXi7Cz85CPjh1uXRpBtbvwXWFbhMwY5Kvg%2BUBYNONHJK1UNOobBESA3pE9FkHKcFNMKj%2F4sAGOqUBsgchowzlUlF1VLZGz1RyvIJCC8Y6MQM0R7YKjKOh54qLAtZuzr4aYgcLXYWimKZg7wwn4loLHkjnIaZD1Uye07WEQZmJgWRWr5a9TJ7kJDomXDuu5HhGhlzMy0wdRxKhcBJT0aOBS%2FiigtqGzSv8ToeCZjgZF6m9501v%2BXnu543uUjK8nNVz0sWBbfna18HcZ%2BHSvFBq5eEyVpyRLtjua6BT8Skv&X-Amz-Signature=da3e52a6c5b9a60af939f1565732d0d4c2a2d6cfd5e5d27e57f12116b0b132dc&X-Amz-SignedHeaders=host&x-id=GetObject)

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
