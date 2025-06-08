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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRSBYJSH%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T070758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCRRSkFY1dJ1xy8tlbnVM%2BOzZ%2B7xUtszlcctkPaRGApwQIgWbspN89j8GA1LmTZ2BtuILrSHpSCW937ZUBYY4xqdy8qiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJrr6deW7LIOgGTnxircA%2BFzUPD89RldGX3D%2FKGnRQZ9CfPW4ReKlxX2UsOIkhfev5enRWdttjcVTX2PTtg1efj%2FYUAN5LP5nP5TqZ2yxM5KztLpfUNo0I4czAf5er8zcVTt6PNnsWT5mu2sFuKvAEjYh%2Bn2F%2BQ0qiSS%2BtBjEIxG0TykYE4aoO9ryfmwkzKvwSzinbupqhfkiMj7x0oj6CXbz6TQMjjLSmuC2rOxPWD36B4pzjzqVBw%2B6anS2iTU2SRr15uVqWXt808dDcCVhLN1BFknbuKLLfbJ852mVa4093IR%2BuVznmm5M9F65aFTPl7P60qpbS3gPm5rebf2mmcYY9nIx9zfl1XwD9Vqu%2FR%2F%2BN6Jk8j6PLaDy0phmlFffzPsSIzLQGuIbab1v%2Bl1H61iNdBVvPf%2FGpGxAG1dB9%2FaFJ2tJflTOHS5b06TGdu%2Fprt%2F3aT%2BC1JuVTik8UsPGeRlDH4KEpJZl3RYGa3f9gmKeSvfr3Puy1NmFtySswdeX7JiMkNPSmSPGwSa9Emne%2Ft9goFjCgZVfB%2BjyACbMLwOL3IMCq8WttyFHg0pq0yIE5XHyQj0cFjPdAR9qSLRCLwHgLhlAmdJDznxIB06Fdq2n3gd%2FYyOHHCo%2F2Kn13qNkxHpFEKx5BqhA2l3MIyxlMIGOqUBIaA4j%2Bp7uM%2F1Nbp6pevJ713MEdPTkse2%2BnQJaVPRZVCykf6YXsn6q%2BShevwyHDizAVcNCed%2FH%2B%2FIaxmpVi8nDkIcDkKcv56G3iE9o1k14InjAN6D9wmFVaYQvXW%2BWifZ%2BZzJ3Ga54Q5v%2BP7vQ24k5VpLCSbSpycMkAYMBAmsQtz3syCfYfwzwMwVfaJY7FoLqJDhENstSGEGHXKM3g%2Bhq3Xmq%2FQR&X-Amz-Signature=0b864346798b7ac022a7158f223b9caf702497b2857502ab3bf87b8f0d539dac&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRSBYJSH%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T070758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCRRSkFY1dJ1xy8tlbnVM%2BOzZ%2B7xUtszlcctkPaRGApwQIgWbspN89j8GA1LmTZ2BtuILrSHpSCW937ZUBYY4xqdy8qiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJrr6deW7LIOgGTnxircA%2BFzUPD89RldGX3D%2FKGnRQZ9CfPW4ReKlxX2UsOIkhfev5enRWdttjcVTX2PTtg1efj%2FYUAN5LP5nP5TqZ2yxM5KztLpfUNo0I4czAf5er8zcVTt6PNnsWT5mu2sFuKvAEjYh%2Bn2F%2BQ0qiSS%2BtBjEIxG0TykYE4aoO9ryfmwkzKvwSzinbupqhfkiMj7x0oj6CXbz6TQMjjLSmuC2rOxPWD36B4pzjzqVBw%2B6anS2iTU2SRr15uVqWXt808dDcCVhLN1BFknbuKLLfbJ852mVa4093IR%2BuVznmm5M9F65aFTPl7P60qpbS3gPm5rebf2mmcYY9nIx9zfl1XwD9Vqu%2FR%2F%2BN6Jk8j6PLaDy0phmlFffzPsSIzLQGuIbab1v%2Bl1H61iNdBVvPf%2FGpGxAG1dB9%2FaFJ2tJflTOHS5b06TGdu%2Fprt%2F3aT%2BC1JuVTik8UsPGeRlDH4KEpJZl3RYGa3f9gmKeSvfr3Puy1NmFtySswdeX7JiMkNPSmSPGwSa9Emne%2Ft9goFjCgZVfB%2BjyACbMLwOL3IMCq8WttyFHg0pq0yIE5XHyQj0cFjPdAR9qSLRCLwHgLhlAmdJDznxIB06Fdq2n3gd%2FYyOHHCo%2F2Kn13qNkxHpFEKx5BqhA2l3MIyxlMIGOqUBIaA4j%2Bp7uM%2F1Nbp6pevJ713MEdPTkse2%2BnQJaVPRZVCykf6YXsn6q%2BShevwyHDizAVcNCed%2FH%2B%2FIaxmpVi8nDkIcDkKcv56G3iE9o1k14InjAN6D9wmFVaYQvXW%2BWifZ%2BZzJ3Ga54Q5v%2BP7vQ24k5VpLCSbSpycMkAYMBAmsQtz3syCfYfwzwMwVfaJY7FoLqJDhENstSGEGHXKM3g%2Bhq3Xmq%2FQR&X-Amz-Signature=331c12c40a2ae4382cf49e1a8391ae51e659aec8e9bc918d02a7c6479470858a&X-Amz-SignedHeaders=host&x-id=GetObject)

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
