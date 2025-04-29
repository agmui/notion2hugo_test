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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BMEYJ55%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T022351Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCcS5vG1hgB5lyugPafgqlKezCwxlT1wOlKr2LqYELQ5AIhAOnydM82kIfGvLY1SYJjcsDPzqsp6fL2n3nsUv%2FZ99aWKogECIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyd6fESQ%2BEbggNV%2FSsq3ANFiI5y%2Bgg9sba8vY0jo1wWOwGQBZ0xKxJGmVNK%2FFAZMyXLTPVvLaKeJl306Pd0j5UiktNWr%2BA1uuIHpSS%2BxBzf19bZBNt%2FXzFYHLYG%2BDrbmFW44KiAah08%2BMMmt8FhZHEmoG0Nt7Mi6LN0taUFkCgGp24CFQnmby%2BFr1%2FtXUjuz7qbBpO4mvgjzgPA9KcoiPWDwZZ5t5XCiLEGAkK2k4a5riJRBG3aSFNcHwBgdacZfL7uxzKuFMZHNYQ93oBaa2LqKbcishb8Kc1R9O%2FNwxPYQVOe7sbn7w3skW6C%2BSav5th%2B6IgzNQFdl4MKCwQOZlNTNb2IDE8Hz%2FcILHjAEUQdWnn%2BSTouoVIwQf4EvreFBAlDW7%2B0d1j8ECXyy8RAinTblB1bGQiwlymoWqa99fJoxno4SMMabXKNlYoe5UUH1Z%2BMENxCdjNtMHVgxVv5USxf4lYs9RIYHYx9cgBMngoQKWDN1igL6L1p0%2FlYOVbtV%2F%2FG50xG4szeo0pD3xnrdaeKcqIJjBuN5Zag6kZCjRPHb%2BjXAjB2cnFTeSeTfg1kOUT6EvGubcNL%2FE4vMqAAhS%2F33GcWjFSlKEH3NuejvDwClSZzGAEcCAy13GmfRpt5%2F0UrMM5WTx1o6ReK9TCbv8DABjqkAVmjal2MtYvR3DL686JGnVGtED2MGI2dXzVdJKPkeieoKVY83AsdPEV7cmrnWlq1ddb6n3WdLkIrgdRIk7rdM6ZoW3qCBe2jMQtWdN0O0FujwjHgbkdYDuBNJ6AJZ7%2BqTze2INiqLNimOq0zoPT0NADOYFpSdfzeOLlToGiiTk6v4Q43R48qwDnO%2BaFNKsQVa8s1ZyREGJ2gaPir8jnAy4w%2Ff8hJ&X-Amz-Signature=baabd90ce8ab122deeda0767dbfe5bd72331c1abecfaa78bff826a174d476b5d&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BMEYJ55%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T022351Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCcS5vG1hgB5lyugPafgqlKezCwxlT1wOlKr2LqYELQ5AIhAOnydM82kIfGvLY1SYJjcsDPzqsp6fL2n3nsUv%2FZ99aWKogECIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyd6fESQ%2BEbggNV%2FSsq3ANFiI5y%2Bgg9sba8vY0jo1wWOwGQBZ0xKxJGmVNK%2FFAZMyXLTPVvLaKeJl306Pd0j5UiktNWr%2BA1uuIHpSS%2BxBzf19bZBNt%2FXzFYHLYG%2BDrbmFW44KiAah08%2BMMmt8FhZHEmoG0Nt7Mi6LN0taUFkCgGp24CFQnmby%2BFr1%2FtXUjuz7qbBpO4mvgjzgPA9KcoiPWDwZZ5t5XCiLEGAkK2k4a5riJRBG3aSFNcHwBgdacZfL7uxzKuFMZHNYQ93oBaa2LqKbcishb8Kc1R9O%2FNwxPYQVOe7sbn7w3skW6C%2BSav5th%2B6IgzNQFdl4MKCwQOZlNTNb2IDE8Hz%2FcILHjAEUQdWnn%2BSTouoVIwQf4EvreFBAlDW7%2B0d1j8ECXyy8RAinTblB1bGQiwlymoWqa99fJoxno4SMMabXKNlYoe5UUH1Z%2BMENxCdjNtMHVgxVv5USxf4lYs9RIYHYx9cgBMngoQKWDN1igL6L1p0%2FlYOVbtV%2F%2FG50xG4szeo0pD3xnrdaeKcqIJjBuN5Zag6kZCjRPHb%2BjXAjB2cnFTeSeTfg1kOUT6EvGubcNL%2FE4vMqAAhS%2F33GcWjFSlKEH3NuejvDwClSZzGAEcCAy13GmfRpt5%2F0UrMM5WTx1o6ReK9TCbv8DABjqkAVmjal2MtYvR3DL686JGnVGtED2MGI2dXzVdJKPkeieoKVY83AsdPEV7cmrnWlq1ddb6n3WdLkIrgdRIk7rdM6ZoW3qCBe2jMQtWdN0O0FujwjHgbkdYDuBNJ6AJZ7%2BqTze2INiqLNimOq0zoPT0NADOYFpSdfzeOLlToGiiTk6v4Q43R48qwDnO%2BaFNKsQVa8s1ZyREGJ2gaPir8jnAy4w%2Ff8hJ&X-Amz-Signature=61972233f8c2de83daeaafb36cf35791e1d0e4929daa3d4c8f0c92b7b11b560d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
