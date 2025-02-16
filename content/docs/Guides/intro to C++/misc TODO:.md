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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYBEDEBD%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T100659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIHufuO25xP4eJ9bmaWfkjiO6tOfahrTrUPJunQZxmozRAiEAmo%2B7R1%2BD9mvsBkvA3hmOBml2spBUpOpHiERsn%2BeSVHcq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDIBQgSf01b%2FkTgNvEyrcA9fuqGyqNGRYOihsZb6WLEGGL%2BtQrt3XTn%2B5OqgxNeeNMdgUiP%2FZRt7tnAoVnXm1Vx%2F%2FDgLL3sqtaQmMp%2FqIt7sypVBnkZ9X0SSf2Qjx%2BOrpFG8HitBlow%2B2gQmL5yN52EvTcq6BBuRJT%2FtvxKVEU28msIMj7RZ%2B6hqL8nu8vIJkFMwg0SGuV31Wtaob8Y1BWsojW5S1bHk7X%2BJJq8jIzZPy3Q41tBwHO%2F6zpj8y6GavquzouSwyvR094dEvZp9YSqL39BVlHffm3xaAbsrWlcj6neVIt1nd8YmZIYsdlhCNkJPiuv5CMvhpBQEGfiT0qnIhlZKFivFkJy3zyimjb%2FJlZGwJYPmhA8FBux0s9eDTsdo7lg2gSrz68SxzumD0nGqbR9ODTII9fHKZ9HZwJfGODfB8u26rz%2BKTIGlHcRbIX3Ur%2FA0fZx5dXuVRRT82kLN7E0Z0aD6d8NBqrw%2Fq3EeDws1SQzBt%2BhFGYVOl79pI6jbLYUQme4ch65thmsgxvGFgrRDmTYGxgDSMrZnyr%2F9K%2BUhZUr1RpdWzctp6f44RjDU4gI5pzslWWOFiw%2B84AYf5iIU9XmpXMYtzjQO%2Bx20vDQ7YPGjZzetOnmi9yu2OO%2BIez0Z1gDtp7ZISMMb%2Bxb0GOqUBgq6JwM4jmOx%2F9TfnKsbe4nY1mLA6qbIs14KxMco1DQ9%2FevUND54f28HJKPbFKg9CMSw2Z%2FaqezpTMK6bn2h%2Bk2PJ%2F0odwgz6IkhChSYOChqmGCwS4rpWyAWw3Jr0tXoVHnX0IN%2BEO6zXUnvnYo4%2B335XqTqpMm8h3aBq%2F0ZPkBnx6rvqq%2F8zh9dpJcR%2BelqopwCWCkBLWpPJPpmOm8Ltg5hUcFkB&X-Amz-Signature=de2276be9ada656e47209db9434874f5a4bb55f7d072615788455282f02b7207&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYBEDEBD%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T100659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIHufuO25xP4eJ9bmaWfkjiO6tOfahrTrUPJunQZxmozRAiEAmo%2B7R1%2BD9mvsBkvA3hmOBml2spBUpOpHiERsn%2BeSVHcq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDIBQgSf01b%2FkTgNvEyrcA9fuqGyqNGRYOihsZb6WLEGGL%2BtQrt3XTn%2B5OqgxNeeNMdgUiP%2FZRt7tnAoVnXm1Vx%2F%2FDgLL3sqtaQmMp%2FqIt7sypVBnkZ9X0SSf2Qjx%2BOrpFG8HitBlow%2B2gQmL5yN52EvTcq6BBuRJT%2FtvxKVEU28msIMj7RZ%2B6hqL8nu8vIJkFMwg0SGuV31Wtaob8Y1BWsojW5S1bHk7X%2BJJq8jIzZPy3Q41tBwHO%2F6zpj8y6GavquzouSwyvR094dEvZp9YSqL39BVlHffm3xaAbsrWlcj6neVIt1nd8YmZIYsdlhCNkJPiuv5CMvhpBQEGfiT0qnIhlZKFivFkJy3zyimjb%2FJlZGwJYPmhA8FBux0s9eDTsdo7lg2gSrz68SxzumD0nGqbR9ODTII9fHKZ9HZwJfGODfB8u26rz%2BKTIGlHcRbIX3Ur%2FA0fZx5dXuVRRT82kLN7E0Z0aD6d8NBqrw%2Fq3EeDws1SQzBt%2BhFGYVOl79pI6jbLYUQme4ch65thmsgxvGFgrRDmTYGxgDSMrZnyr%2F9K%2BUhZUr1RpdWzctp6f44RjDU4gI5pzslWWOFiw%2B84AYf5iIU9XmpXMYtzjQO%2Bx20vDQ7YPGjZzetOnmi9yu2OO%2BIez0Z1gDtp7ZISMMb%2Bxb0GOqUBgq6JwM4jmOx%2F9TfnKsbe4nY1mLA6qbIs14KxMco1DQ9%2FevUND54f28HJKPbFKg9CMSw2Z%2FaqezpTMK6bn2h%2Bk2PJ%2F0odwgz6IkhChSYOChqmGCwS4rpWyAWw3Jr0tXoVHnX0IN%2BEO6zXUnvnYo4%2B335XqTqpMm8h3aBq%2F0ZPkBnx6rvqq%2F8zh9dpJcR%2BelqopwCWCkBLWpPJPpmOm8Ltg5hUcFkB&X-Amz-Signature=033e5f4541c5156471e9e87d0c830c09c956aee9607320ef956b23a12a809b07&X-Amz-SignedHeaders=host&x-id=GetObject)

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
