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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WO73YLOI%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T020645Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGkPB6Uc2Zfb1Brh5bjPGYrS%2Fa30IzNMty6rwpVXaMaiAiEAonI5l9B6A5a7J%2FHUf4Rio3jXIFF5mMkriuyGUB11ZAEqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMQ%2FAveo3stzKYIlWircA4NzQtnsX20sqjtm53svU9ty9E%2FU%2FD%2F2F5VWdr6aY3tY6VV37AjCaoJQ%2FzY6V0TdK8rH6ypVDHQs%2FaYDAMF0a50q3MIBUQUFXwxyeRAvRTJFao0TI%2F12J9bK5K48joIkNdk81foxIjpN7gNCgZFmwcXSLQ1r9%2Fg8YU%2F3OELmtso1W08WDU2W8DHr1icsXzmCeStb6Rz%2FSYk%2BB8aE3d57kMhmUsYBqs5jwkkzbY6XQ0t3CLWNV5qrRj2Omi%2BGqgzQytocMKNbNihJbMIB5dipyTXqxArQS7durXlVBqJVzonK8Np9pHk4YlvvDBULjXeeinRIVFd2x65Jt54Dh%2B%2FdJk52CKr8COPSScVu400naIKV23mzJT1rzT5ev03z%2Bx9Gf%2B1NwfREyxX5b8t0ucbxHocZlnkH4sab76A4Khg5gV39S86wBD0SkN%2BgXji2p33J9WNDsPlooE3%2BZOo70z8o31sUhkSlQFZbiygquWKPGyqM8GoO6IMWLGpfNmxBc2Hc3d6FXOPxWnWMs1PyM3oFCP%2Fx1Ud8JMI3uuLUjMErqgmANKiegq5IuP%2BOEL0yEzVQDzTVkMJTd%2FUbDQ8S%2FdRvfaIJPM7wLIKv3ftFvvC0yc%2Fp%2FH6ppgp89zWvMOqpMPXR8LwGOqUBW98JDxJGHgmzZM%2F%2BY4TxfmCP13lBMY8SSc%2Bhhai1Y%2BfGRFXn1yV1J4lZgkNadoB1b7oIBubG4dztWeg5bkcZ9moxKUT%2Bxql%2BUk%2BapN6x7nYIozX1zpd0c%2Fjuh7As8glcVEudJcqiamY%2BwSz0VUrmWhPEJGDjfBMy2ia1zX8XKG0TSJb84SzfBy95q1AVCS%2BR1G0TvTjplcbAWwF9NjFT1G4mJJoL&X-Amz-Signature=d4d4421a536521bfa07d68706b833e2d1831aa836475a459ffca04cdd7f382fb&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WO73YLOI%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T020645Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGkPB6Uc2Zfb1Brh5bjPGYrS%2Fa30IzNMty6rwpVXaMaiAiEAonI5l9B6A5a7J%2FHUf4Rio3jXIFF5mMkriuyGUB11ZAEqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMQ%2FAveo3stzKYIlWircA4NzQtnsX20sqjtm53svU9ty9E%2FU%2FD%2F2F5VWdr6aY3tY6VV37AjCaoJQ%2FzY6V0TdK8rH6ypVDHQs%2FaYDAMF0a50q3MIBUQUFXwxyeRAvRTJFao0TI%2F12J9bK5K48joIkNdk81foxIjpN7gNCgZFmwcXSLQ1r9%2Fg8YU%2F3OELmtso1W08WDU2W8DHr1icsXzmCeStb6Rz%2FSYk%2BB8aE3d57kMhmUsYBqs5jwkkzbY6XQ0t3CLWNV5qrRj2Omi%2BGqgzQytocMKNbNihJbMIB5dipyTXqxArQS7durXlVBqJVzonK8Np9pHk4YlvvDBULjXeeinRIVFd2x65Jt54Dh%2B%2FdJk52CKr8COPSScVu400naIKV23mzJT1rzT5ev03z%2Bx9Gf%2B1NwfREyxX5b8t0ucbxHocZlnkH4sab76A4Khg5gV39S86wBD0SkN%2BgXji2p33J9WNDsPlooE3%2BZOo70z8o31sUhkSlQFZbiygquWKPGyqM8GoO6IMWLGpfNmxBc2Hc3d6FXOPxWnWMs1PyM3oFCP%2Fx1Ud8JMI3uuLUjMErqgmANKiegq5IuP%2BOEL0yEzVQDzTVkMJTd%2FUbDQ8S%2FdRvfaIJPM7wLIKv3ftFvvC0yc%2Fp%2FH6ppgp89zWvMOqpMPXR8LwGOqUBW98JDxJGHgmzZM%2F%2BY4TxfmCP13lBMY8SSc%2Bhhai1Y%2BfGRFXn1yV1J4lZgkNadoB1b7oIBubG4dztWeg5bkcZ9moxKUT%2Bxql%2BUk%2BapN6x7nYIozX1zpd0c%2Fjuh7As8glcVEudJcqiamY%2BwSz0VUrmWhPEJGDjfBMy2ia1zX8XKG0TSJb84SzfBy95q1AVCS%2BR1G0TvTjplcbAWwF9NjFT1G4mJJoL&X-Amz-Signature=1f7793e7e4d555bdbcf88f314b78c4f33489fd91ee0eef8371bde51ce83b2291&X-Amz-SignedHeaders=host&x-id=GetObject)

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
