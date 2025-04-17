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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4IVN6Y7%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T210742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDMTsqTZGVKHlHsRtD0Oz1BoAEmV46%2BZMFwNqJpjiraDAIgEE%2BqF07roUUK5%2B0zA5rgsBmkR9Go4%2BJPMbN%2FxNWNLHUq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDBUcIYq2IaCn27262CrcA506dg2Luy5Lu7SNXTuxpYkvJuxArmq7qV8RRe7uou9RJfgqJhUoRUUqbkUACO5q20pmJCrrLJVyMojn%2BdRXNXy%2FY8ph41I%2BEamw58UYNzN1ZvE1WjseNCzL%2B2RNGNSCO0qxW8BbTcROjLt9TXrFXydcH2mbvWuER5CzowosWKI27XIz3G6ZNn%2FNEygWnBb2EPycC6nQ%2Bol8wFqGbF3E1QR5vnZIHbdvbzpVdKonKFZ8FKH1qTdrLzdJfS2R3eCn1NdgVPWrn62iBgnZ7aKdxASh6xbOIvP2pM1UAbwOP1zVY%2BPc%2Bri2SQy1WSki8SDBo6Rr6TcqPU%2FvQhRnz1DIgAltvPiVorEWWpjf9Vb%2B6ivXoQc%2FSzqCjKF3VjNr69UgDWHITh9jFBFWWYMWg5AuoRBoH%2FGPGwvIghrXdtqyKzE4JUHTj232GOsDdQmgGE8iFfHG%2FUvL44WRRB%2B9RNtW90v%2Bp4vIbAG217EdxKF6wy2z0Hf1qtENnEg03Ne44GLC0wfH4jJWqOxHNlEJT1FGL4quq7FaN7jd2wj9uhlat0qXyILWb04HhDk%2Bse%2FLRKF0jX5Ia96IO%2FBTleEpfBpfPfCOxqcV0HMsHouLmqP8tLi9vSyXL46QKQRDS5CxMPjQhcAGOqUBICs7PhM0RWL9DpsDZdBA5gl6l3RXyC4Lz5C6u4otzd8e%2BNLBt316DEvK4IVbLN7nJIOBWXlqe%2F8wI9jaKRDZAI1eT17qCMPNo8XY1JXzYmzt808bM51g2hNklZIgluxzSz8SiA5KrMJAvSzZ3CwxcRgTSMaIyePgzkCWBS7iAm1KSKPG9RXMaFmtm8AogkDfwvcKsWHN60e3xVbGyLNBL42RHQe%2F&X-Amz-Signature=ea5c5f6b1ecb18cd76c8f47d0bea6e608d9b35289e1192c88ed89796b19363b0&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4IVN6Y7%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T210742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDMTsqTZGVKHlHsRtD0Oz1BoAEmV46%2BZMFwNqJpjiraDAIgEE%2BqF07roUUK5%2B0zA5rgsBmkR9Go4%2BJPMbN%2FxNWNLHUq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDBUcIYq2IaCn27262CrcA506dg2Luy5Lu7SNXTuxpYkvJuxArmq7qV8RRe7uou9RJfgqJhUoRUUqbkUACO5q20pmJCrrLJVyMojn%2BdRXNXy%2FY8ph41I%2BEamw58UYNzN1ZvE1WjseNCzL%2B2RNGNSCO0qxW8BbTcROjLt9TXrFXydcH2mbvWuER5CzowosWKI27XIz3G6ZNn%2FNEygWnBb2EPycC6nQ%2Bol8wFqGbF3E1QR5vnZIHbdvbzpVdKonKFZ8FKH1qTdrLzdJfS2R3eCn1NdgVPWrn62iBgnZ7aKdxASh6xbOIvP2pM1UAbwOP1zVY%2BPc%2Bri2SQy1WSki8SDBo6Rr6TcqPU%2FvQhRnz1DIgAltvPiVorEWWpjf9Vb%2B6ivXoQc%2FSzqCjKF3VjNr69UgDWHITh9jFBFWWYMWg5AuoRBoH%2FGPGwvIghrXdtqyKzE4JUHTj232GOsDdQmgGE8iFfHG%2FUvL44WRRB%2B9RNtW90v%2Bp4vIbAG217EdxKF6wy2z0Hf1qtENnEg03Ne44GLC0wfH4jJWqOxHNlEJT1FGL4quq7FaN7jd2wj9uhlat0qXyILWb04HhDk%2Bse%2FLRKF0jX5Ia96IO%2FBTleEpfBpfPfCOxqcV0HMsHouLmqP8tLi9vSyXL46QKQRDS5CxMPjQhcAGOqUBICs7PhM0RWL9DpsDZdBA5gl6l3RXyC4Lz5C6u4otzd8e%2BNLBt316DEvK4IVbLN7nJIOBWXlqe%2F8wI9jaKRDZAI1eT17qCMPNo8XY1JXzYmzt808bM51g2hNklZIgluxzSz8SiA5KrMJAvSzZ3CwxcRgTSMaIyePgzkCWBS7iAm1KSKPG9RXMaFmtm8AogkDfwvcKsWHN60e3xVbGyLNBL42RHQe%2F&X-Amz-Signature=7f74058bd645a1ae890fa9ccf09f50ab1572bd380c1252f7b783b6022833f925&X-Amz-SignedHeaders=host&x-id=GetObject)

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
