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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPPBCPVB%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T061152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCIDap6WqsevySM%2BFQgp4IwNweYH0YcIDie5%2F%2FGp%2BS71XgAiEAhFaOmtjUtAr6GC%2BT21o5weq2Dfr7osRWvAtA8gxuISUqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKxyGnXkFjcZ37EW4CrcAz9LfAShk08VOmya7RoA4NMKOI1Q5wBnSSUaJLtR6S1kPn6I5VOqkkN22Vm7LOnXzVe8fn4bg60Grcx0tMAeaYGRZRprFk8pRGQD1W7ljq3zkZga9%2BR0RRjZ19lieSfUOjqMa%2BajQkcR2ENsnVLCsTacJ3wWciZe4by%2BcKK0KJ8PhDIoNQg8eL9l4e5lvpw3vot0RzlXNdbFWQtstRkP%2FXs3Py3DLUkIXyEOsJEQd7Yg0NkshyAFvqDwZNkA8gdSQCYFzvVTLIW8D0Z5MJ5i%2Ftxk59ZvfFUdKg4vZ8oiBjB%2BlIFY7xFBf%2B6HMK0YINGJ94GUSzgV41wxOEPqhL0MZd%2B0ZH6n8t0FEeb9JayTutLvg8QYr4PsrhRZcQyADjBIgMyPN%2FUQIb7r1MI3AaydDcPYZ9nDvyw%2F8PDoFDbfRZjyx5hUjtM5OKTcbamlX7nKP9bk%2BaS8FnyjFPA3E9Rrc40hEUh%2BJYZsRLF6%2Ft%2FuKnRFYaBR9426Ikt3Xp1Tbj8sHP773CQ%2FylMFjhICfCntf608FWly8uRv%2FteadCE4TUGxdkcwUFGoZya2HLI9jT6le4i6mSxF6wi953VmaB5NwPUM1nHlnLna1IFs0UcqIsUCpsoWRutUHttBuwpWMJaPv74GOqUBb0i%2BiqVT5sLFvyWbo9AI0i3AzFbKm5WZrkySDQ9HVpj%2FvES8aS7AZ6gvKlJoo9pmn753FeJLNbBrUNtHKKhp92FyDERlAaOgKb3UhgY72tYXsup8vBggQ6TWNUvOS3PzUyqB%2Bl%2B4nIi3DjUast2P01RcK%2BADRKSHB7fRxBUqjLxnDkZr1irPdTL6zKpVTE8Dly924NiO44QamNIqToytwAvEuwUO&X-Amz-Signature=ca136e0d0ff4bb1667510123e177d79115421d8097e1e80eb2a9efa552b42514&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPPBCPVB%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T061152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCIDap6WqsevySM%2BFQgp4IwNweYH0YcIDie5%2F%2FGp%2BS71XgAiEAhFaOmtjUtAr6GC%2BT21o5weq2Dfr7osRWvAtA8gxuISUqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKxyGnXkFjcZ37EW4CrcAz9LfAShk08VOmya7RoA4NMKOI1Q5wBnSSUaJLtR6S1kPn6I5VOqkkN22Vm7LOnXzVe8fn4bg60Grcx0tMAeaYGRZRprFk8pRGQD1W7ljq3zkZga9%2BR0RRjZ19lieSfUOjqMa%2BajQkcR2ENsnVLCsTacJ3wWciZe4by%2BcKK0KJ8PhDIoNQg8eL9l4e5lvpw3vot0RzlXNdbFWQtstRkP%2FXs3Py3DLUkIXyEOsJEQd7Yg0NkshyAFvqDwZNkA8gdSQCYFzvVTLIW8D0Z5MJ5i%2Ftxk59ZvfFUdKg4vZ8oiBjB%2BlIFY7xFBf%2B6HMK0YINGJ94GUSzgV41wxOEPqhL0MZd%2B0ZH6n8t0FEeb9JayTutLvg8QYr4PsrhRZcQyADjBIgMyPN%2FUQIb7r1MI3AaydDcPYZ9nDvyw%2F8PDoFDbfRZjyx5hUjtM5OKTcbamlX7nKP9bk%2BaS8FnyjFPA3E9Rrc40hEUh%2BJYZsRLF6%2Ft%2FuKnRFYaBR9426Ikt3Xp1Tbj8sHP773CQ%2FylMFjhICfCntf608FWly8uRv%2FteadCE4TUGxdkcwUFGoZya2HLI9jT6le4i6mSxF6wi953VmaB5NwPUM1nHlnLna1IFs0UcqIsUCpsoWRutUHttBuwpWMJaPv74GOqUBb0i%2BiqVT5sLFvyWbo9AI0i3AzFbKm5WZrkySDQ9HVpj%2FvES8aS7AZ6gvKlJoo9pmn753FeJLNbBrUNtHKKhp92FyDERlAaOgKb3UhgY72tYXsup8vBggQ6TWNUvOS3PzUyqB%2Bl%2B4nIi3DjUast2P01RcK%2BADRKSHB7fRxBUqjLxnDkZr1irPdTL6zKpVTE8Dly924NiO44QamNIqToytwAvEuwUO&X-Amz-Signature=0177b839e61e3cb8e644facc515f0094f47eb7c6d9ab4b73f0e1be214b1172f3&X-Amz-SignedHeaders=host&x-id=GetObject)

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
