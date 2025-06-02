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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Y3MBLRQ%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T170919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQCkCQVIzkVHQ%2B12TASyNVDVYlhQUHqJI4l2bM3CooCpCAIhAPUm2wJKL9cqphG0D%2FX0EnA9Nw%2FdjG2H0YtjtUKg4RgjKogECPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzE0FVSkhyfbaIKPpsq3ANSuedInivFnX95NpdqlEXtw5f46YJRqMVJNlrmTFeIDSgc6DOXJ2bPCdHkJNkeIczo4qeIA2M8Aw4IW%2BaCWFI7UyTBeEyiAlfoIW57s9MbKmu%2Fc0W70Hc%2Fkw0b4SdTxffyN%2BwI5eK%2FTlbclkX132Bfz4ntG8FX5VKmZ2ubBduschTWJcQnSi%2BpHPGOLfr7y1bMihv0ca3WjHokEDHawbSHiQmHcJNjdGjgibItrz1whG68PvwuKpft8kh9aChN3zMBXzEUHmbrRPxAHAwyzLyf9EQQ01VT9tNEYyrsvZwhOHW4GzWAkOzPaJDoGQjoO%2FHs075a5xmjcbQun2DLX6BAuu2F4wPtpc9mMle0wk%2F22Z4RbIZz%2FAZ8CtlaCc%2FRrZDdb0rSUQelkwcp1VO5%2FUR3JMVmpkv8MJfQxY6caIPchYrRBbiQA4VOeoeAIboVuUq%2BaCent2Vlj0mKuptzEQChgsZsszQuMSJ3YJQPJM%2FTejCM3hYs21XAkV2BFfIa2s16%2FFeoPYD736IHac2jlJxrdmUKz%2FrzViQwP0OZnR0Fi4JdIUiqEU7BB4hols%2BdCqjsxeaO1ueQmXOuJKfYIpkglxdo00I2mVVi2RyNj4bR5XsCLAZ7GxhX5kDwszDusvfBBjqkAReVTD5eTtOeAZCyB%2BczUJ5K5lKznR34%2FEm2yN8ksywJqM9QuYs%2BpfMlP2ef4WqBuxjYFoYtLjDsuNZteVhQU11grG9NuNn7afk7PhYXMoDYF%2BUwtfcUP4XpOlEq9McpoiW6L47Kcphg0je1yo2fo8cOzZA2YjRUrbk8mtvEvqifipRsYC7QzrkRqQPtRkyEMYeyK63hbl1jZMcSDMqvyQupJQsF&X-Amz-Signature=649524f73b837ba7e92348cae501b5c655bd19aa419fa9cc3c68bac1200086ed&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Y3MBLRQ%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T170919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQCkCQVIzkVHQ%2B12TASyNVDVYlhQUHqJI4l2bM3CooCpCAIhAPUm2wJKL9cqphG0D%2FX0EnA9Nw%2FdjG2H0YtjtUKg4RgjKogECPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzE0FVSkhyfbaIKPpsq3ANSuedInivFnX95NpdqlEXtw5f46YJRqMVJNlrmTFeIDSgc6DOXJ2bPCdHkJNkeIczo4qeIA2M8Aw4IW%2BaCWFI7UyTBeEyiAlfoIW57s9MbKmu%2Fc0W70Hc%2Fkw0b4SdTxffyN%2BwI5eK%2FTlbclkX132Bfz4ntG8FX5VKmZ2ubBduschTWJcQnSi%2BpHPGOLfr7y1bMihv0ca3WjHokEDHawbSHiQmHcJNjdGjgibItrz1whG68PvwuKpft8kh9aChN3zMBXzEUHmbrRPxAHAwyzLyf9EQQ01VT9tNEYyrsvZwhOHW4GzWAkOzPaJDoGQjoO%2FHs075a5xmjcbQun2DLX6BAuu2F4wPtpc9mMle0wk%2F22Z4RbIZz%2FAZ8CtlaCc%2FRrZDdb0rSUQelkwcp1VO5%2FUR3JMVmpkv8MJfQxY6caIPchYrRBbiQA4VOeoeAIboVuUq%2BaCent2Vlj0mKuptzEQChgsZsszQuMSJ3YJQPJM%2FTejCM3hYs21XAkV2BFfIa2s16%2FFeoPYD736IHac2jlJxrdmUKz%2FrzViQwP0OZnR0Fi4JdIUiqEU7BB4hols%2BdCqjsxeaO1ueQmXOuJKfYIpkglxdo00I2mVVi2RyNj4bR5XsCLAZ7GxhX5kDwszDusvfBBjqkAReVTD5eTtOeAZCyB%2BczUJ5K5lKznR34%2FEm2yN8ksywJqM9QuYs%2BpfMlP2ef4WqBuxjYFoYtLjDsuNZteVhQU11grG9NuNn7afk7PhYXMoDYF%2BUwtfcUP4XpOlEq9McpoiW6L47Kcphg0je1yo2fo8cOzZA2YjRUrbk8mtvEvqifipRsYC7QzrkRqQPtRkyEMYeyK63hbl1jZMcSDMqvyQupJQsF&X-Amz-Signature=d662ad380a28c1d7589855ba865a184213aa4d91df568be34d58e18a390f955e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
