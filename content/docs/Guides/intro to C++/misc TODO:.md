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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBSYLNMS%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T140127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJIMEYCIQDGU3JGkAbexRAxB9VaAp30V86rn0EkgtcOOJrbmN0NSAIhAMOfvlGJyOU8JosBXmEC4zj6LJtbo2FLAtfZVK9HvIFQKv8DCHYQABoMNjM3NDIzMTgzODA1Igyo03W48ye6VtARiXwq3APrD5saVFM6g8kfAjcrKcq%2B7XPYIPdt10O3tSgeLWKShH0N29mrMASF4UaIj4GjUf4bNzOVyun%2BYQM4JnPSNBhuIxfv92gyyVWKGvD4ZIleWmji1uQNopj55RXCV4TrTYajFARWjjzyzjeIh%2BP70IX7RjhMl%2BpuQShry4zTGGBHKxKLXNlAsszjok34Hho%2Fx3pfZZTMoFvkHneBNTj034wicqvh6BzLR02d9rKFzFqcr8Am9El%2FlVLZWXPHad%2FbXlxJk6rdHpyf6AcKnXAhW4OEFWyQEt3KlQ2XtMEQ3QmERvVokxv1iHDUy1RDEvL778jK3fQdySRZ%2FufDPY2EOEe9yGUHaQuhrLg%2BUnD0OBOCoDdjZJM8lDvJiKto1HkzOkIOOAtedN%2BQ4M5fpdFc%2BxFhf0RU49ESSxYBBK9GJr31h86%2BMFw3Fs9gdRGlr6pnpqDzUrim7QAu1m%2BeVl1Dor5Qp2f3bHnpbHv0EQlx7WlUDLvPhyOHviWmftbr45NDNHCOK%2FzQXLS0fNGrzlmvF5drPDpruVb2q%2Bex9paEQlBgTbsvqd4W8AtFsu2WfgvRHzgw%2BhabSlJbURUE5IF2PE5iOTEgs1EeirgOjpaXigFJ6G6FDaPiLO41yLSzwTDkkLa%2BBjqkAeqRjdLXR5r75MFwusHs1VyMtIb20K1Q4ljEeTQKH9OhW2uPqnbrlgQ7o03Ixxk6shjrG2aNwnkakEL0MakhruSmWNK5trCkn9HNKmZ%2BUrrikHY2D2EhuqoDaaokd11QvEXC9Engs0bs1UX1uELagav1%2FjUn93fw78Re4%2F%2FdHAMo%2FpHJ9A%2B520FB%2F%2FqQrj9WqdRZptwl7oxivFsLdT18jMFFqp1E&X-Amz-Signature=1a8ec329e16b0303479c12aa8574bbabb228433f173e4b36817f026cda20ffa2&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBSYLNMS%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T140127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJIMEYCIQDGU3JGkAbexRAxB9VaAp30V86rn0EkgtcOOJrbmN0NSAIhAMOfvlGJyOU8JosBXmEC4zj6LJtbo2FLAtfZVK9HvIFQKv8DCHYQABoMNjM3NDIzMTgzODA1Igyo03W48ye6VtARiXwq3APrD5saVFM6g8kfAjcrKcq%2B7XPYIPdt10O3tSgeLWKShH0N29mrMASF4UaIj4GjUf4bNzOVyun%2BYQM4JnPSNBhuIxfv92gyyVWKGvD4ZIleWmji1uQNopj55RXCV4TrTYajFARWjjzyzjeIh%2BP70IX7RjhMl%2BpuQShry4zTGGBHKxKLXNlAsszjok34Hho%2Fx3pfZZTMoFvkHneBNTj034wicqvh6BzLR02d9rKFzFqcr8Am9El%2FlVLZWXPHad%2FbXlxJk6rdHpyf6AcKnXAhW4OEFWyQEt3KlQ2XtMEQ3QmERvVokxv1iHDUy1RDEvL778jK3fQdySRZ%2FufDPY2EOEe9yGUHaQuhrLg%2BUnD0OBOCoDdjZJM8lDvJiKto1HkzOkIOOAtedN%2BQ4M5fpdFc%2BxFhf0RU49ESSxYBBK9GJr31h86%2BMFw3Fs9gdRGlr6pnpqDzUrim7QAu1m%2BeVl1Dor5Qp2f3bHnpbHv0EQlx7WlUDLvPhyOHviWmftbr45NDNHCOK%2FzQXLS0fNGrzlmvF5drPDpruVb2q%2Bex9paEQlBgTbsvqd4W8AtFsu2WfgvRHzgw%2BhabSlJbURUE5IF2PE5iOTEgs1EeirgOjpaXigFJ6G6FDaPiLO41yLSzwTDkkLa%2BBjqkAeqRjdLXR5r75MFwusHs1VyMtIb20K1Q4ljEeTQKH9OhW2uPqnbrlgQ7o03Ixxk6shjrG2aNwnkakEL0MakhruSmWNK5trCkn9HNKmZ%2BUrrikHY2D2EhuqoDaaokd11QvEXC9Engs0bs1UX1uELagav1%2FjUn93fw78Re4%2F%2FdHAMo%2FpHJ9A%2B520FB%2F%2FqQrj9WqdRZptwl7oxivFsLdT18jMFFqp1E&X-Amz-Signature=cbbece63cf1ff22459472149a4fc39f4136b4e5693b0919fea9a5b3e83473ae8&X-Amz-SignedHeaders=host&x-id=GetObject)

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
