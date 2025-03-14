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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZLUVXSO%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T170656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDurdh871zMb2qrPvSLBw%2FJ2foBl9oUz7XkbfaeetCvaAiAWQLdY1sPdbbN4fibf9Puhj9sELKTDd9OBFkBDkfcq7SqIBAjy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjmP6q5c1L0gr7afTKtwDTJLBsqm8MVCYGD1BrSV%2F29UL%2BvCTe0fnJcobKs1nV61J%2FXghwhKj%2B50bsgaSCp7GsTiIrYK4DoL0VztTo7aHBdP3r2FZnptrtP1XNpzwrEBpTnW61BNKbEp7apJwfXtnE06%2BZfhYk2ipgIWJBDJ98jbElEPeMJFdu%2F0MJ6krnegnCvG2wrjiQFBV3XBBFQEh2xyagPK2j5lJ88coLHUw5LdXOKAPF9ARkw%2BJvmiUcUA5EDTPojFdIVjmEeA9lpOFxQ3FWRdcO1OfkwWxVvGhYk82rDAk7eEwT%2BOqON0Q%2FcuW4JiUZHKsjaQLloFrwy434Bz71%2BIqSCeXpDNmcwuTqx9gQ2ZY6Zw9%2F9Pl3UxxWRw8%2B%2Bo0b3BnxWF%2FSFQoKXftvCL%2B6KNlGi%2Fio%2BRD0e1oes127vyiiEessf6VOgJC906sUciDE7vIU1QGUeMEweyBmuqu5hfTYthNl0VfiwTXbKotPPIP%2FRBGJH9csmvUsqZ%2BN3%2F%2B2vkHrNKTMxMUPqeOw8%2BP9M8ifkmX%2BELUF5fSM8XgveKbjyF%2FQnEP%2FqliaXfdM2rZp1t%2BBHqNhi9g1aSTJBqmv3calp3%2BJr%2FxyWxRYDJjag7d0I5dA9FLmjb81lRXwFlwpVm1bkC7rScwnsDRvgY6pgGxqVKQHV1eCVkMNiFoOkhnE6oGQXwbKFcYpAmP4lslEs6LgqhfzEAioC4EulE8gPn%2FGBqQNP3KR4sGI4gqdPky0AZZS3of2R7iWZMZhMFwElUsXkWSGGFjMvDUGqY4NoALPFUbSY4MYGfDq0DlTbfcmIlncGcWcPqsvZCTYyQT69Joya0p%2FJbTdmfDqPd3ZwMP%2BEL6K2uHQtGTsyNj3F7SLZs1BiPn&X-Amz-Signature=90101ddcedb6c25d1a73e30c71787a9cb8d5750f271b7afe2bdfcee220301ea1&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZLUVXSO%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T170656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDurdh871zMb2qrPvSLBw%2FJ2foBl9oUz7XkbfaeetCvaAiAWQLdY1sPdbbN4fibf9Puhj9sELKTDd9OBFkBDkfcq7SqIBAjy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjmP6q5c1L0gr7afTKtwDTJLBsqm8MVCYGD1BrSV%2F29UL%2BvCTe0fnJcobKs1nV61J%2FXghwhKj%2B50bsgaSCp7GsTiIrYK4DoL0VztTo7aHBdP3r2FZnptrtP1XNpzwrEBpTnW61BNKbEp7apJwfXtnE06%2BZfhYk2ipgIWJBDJ98jbElEPeMJFdu%2F0MJ6krnegnCvG2wrjiQFBV3XBBFQEh2xyagPK2j5lJ88coLHUw5LdXOKAPF9ARkw%2BJvmiUcUA5EDTPojFdIVjmEeA9lpOFxQ3FWRdcO1OfkwWxVvGhYk82rDAk7eEwT%2BOqON0Q%2FcuW4JiUZHKsjaQLloFrwy434Bz71%2BIqSCeXpDNmcwuTqx9gQ2ZY6Zw9%2F9Pl3UxxWRw8%2B%2Bo0b3BnxWF%2FSFQoKXftvCL%2B6KNlGi%2Fio%2BRD0e1oes127vyiiEessf6VOgJC906sUciDE7vIU1QGUeMEweyBmuqu5hfTYthNl0VfiwTXbKotPPIP%2FRBGJH9csmvUsqZ%2BN3%2F%2B2vkHrNKTMxMUPqeOw8%2BP9M8ifkmX%2BELUF5fSM8XgveKbjyF%2FQnEP%2FqliaXfdM2rZp1t%2BBHqNhi9g1aSTJBqmv3calp3%2BJr%2FxyWxRYDJjag7d0I5dA9FLmjb81lRXwFlwpVm1bkC7rScwnsDRvgY6pgGxqVKQHV1eCVkMNiFoOkhnE6oGQXwbKFcYpAmP4lslEs6LgqhfzEAioC4EulE8gPn%2FGBqQNP3KR4sGI4gqdPky0AZZS3of2R7iWZMZhMFwElUsXkWSGGFjMvDUGqY4NoALPFUbSY4MYGfDq0DlTbfcmIlncGcWcPqsvZCTYyQT69Joya0p%2FJbTdmfDqPd3ZwMP%2BEL6K2uHQtGTsyNj3F7SLZs1BiPn&X-Amz-Signature=95dfcf3afa68c8518db99639dfef49fc18cc7618b5cb7d98aa6327ebf3d0c73d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
