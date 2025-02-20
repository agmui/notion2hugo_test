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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2O3ELP4%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T150817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBcxdt9XyRT2gxlXuHr5SltYulKqEVdcVzT2ugKHTSQZAiBHfZBHRloBeQR2vxe12%2B3PiNyGKQbbxaq%2BFE1LM7tWFiqIBAjA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLUdsnvl%2BrDZpYc1BKtwDLR4simBWLC2k3KFB5t6MtlGZFddc%2BRHHnmgHNbuMcYB71b0FR6ZojqCva8aTlW5sew%2BoVoWek1Lrsb916US1t%2FemKN0lDKja4fzMA1Cnui72XbQjQEyV8xvmDBwJfxUr3hm%2B8XIuzdXt57hSN00oaTI9pgNLEwhogTBLmII7KuemTrg4THJlYsXkF4w%2Fu%2F7lq%2BXBxpCxv0snyUH%2FJKDO1OU6aqf31C5nAmFVE5uL2PV8XGnCGeMdSPBKAeS5vI1UeWJgtnmEiJwyx9uy9kryZn%2Bla5mbtwdwvnv4w4gEw8PSSnlk%2BVxzDuYJtvP0NAEdXJH36KNLgvpmyYC2qpsk6oFZ%2FqIQRL6uO5s5HRbX9gU7pStvCui8mJEgBWg0GVtwrrbgR9qP%2F%2FWeeBEJnKURUqc2xP6K9iy2J53Ikt9AVzpxEp4RzveqXgF7pk%2BYDAJPN4toORDd4IJ%2BP0rBvlWJ%2B8ZubnZNiNLODLshMi19af9K6gRSnRmcIuayow4ymUjnKnNeIx6cbUBX%2FxZ%2BGCpv%2ByAFGZDEk8RgBjXt6pr9Xe2T%2Be1WGoFMrOPtVHZnz%2BMrNLZZCs93UjSyRSdJR6vyWWa%2FREkXeFpjjWPDQ45YDHJZ5IrRqEKS%2BzJkoXEwvvjcvQY6pgGcTus7WFOAL3rZLglBp5FKmMslo6psC8MDdMfSKl5wAf3BCBad7TyTfPI6QKOPyhyYrZ0bC0zakrRD8lxdXf7TUEwGhhBclSDU%2BWEjHHzLIT3%2BlbVgJbwzyIX8jZL1ZJ%2FkGxn%2BHWBpy5xLKgJAtkxcS%2FLESs25ZZMsO9ALNizdwQhCKwPWiZOwM%2F6gpQJGsq4h2ictJ7KXCZ59ASBaYSS7QiJ77ncE&X-Amz-Signature=f965912fb391c484afe99eb227266f674996d8a2887163fdb36ffe6f3e1cf846&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2O3ELP4%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T150817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBcxdt9XyRT2gxlXuHr5SltYulKqEVdcVzT2ugKHTSQZAiBHfZBHRloBeQR2vxe12%2B3PiNyGKQbbxaq%2BFE1LM7tWFiqIBAjA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLUdsnvl%2BrDZpYc1BKtwDLR4simBWLC2k3KFB5t6MtlGZFddc%2BRHHnmgHNbuMcYB71b0FR6ZojqCva8aTlW5sew%2BoVoWek1Lrsb916US1t%2FemKN0lDKja4fzMA1Cnui72XbQjQEyV8xvmDBwJfxUr3hm%2B8XIuzdXt57hSN00oaTI9pgNLEwhogTBLmII7KuemTrg4THJlYsXkF4w%2Fu%2F7lq%2BXBxpCxv0snyUH%2FJKDO1OU6aqf31C5nAmFVE5uL2PV8XGnCGeMdSPBKAeS5vI1UeWJgtnmEiJwyx9uy9kryZn%2Bla5mbtwdwvnv4w4gEw8PSSnlk%2BVxzDuYJtvP0NAEdXJH36KNLgvpmyYC2qpsk6oFZ%2FqIQRL6uO5s5HRbX9gU7pStvCui8mJEgBWg0GVtwrrbgR9qP%2F%2FWeeBEJnKURUqc2xP6K9iy2J53Ikt9AVzpxEp4RzveqXgF7pk%2BYDAJPN4toORDd4IJ%2BP0rBvlWJ%2B8ZubnZNiNLODLshMi19af9K6gRSnRmcIuayow4ymUjnKnNeIx6cbUBX%2FxZ%2BGCpv%2ByAFGZDEk8RgBjXt6pr9Xe2T%2Be1WGoFMrOPtVHZnz%2BMrNLZZCs93UjSyRSdJR6vyWWa%2FREkXeFpjjWPDQ45YDHJZ5IrRqEKS%2BzJkoXEwvvjcvQY6pgGcTus7WFOAL3rZLglBp5FKmMslo6psC8MDdMfSKl5wAf3BCBad7TyTfPI6QKOPyhyYrZ0bC0zakrRD8lxdXf7TUEwGhhBclSDU%2BWEjHHzLIT3%2BlbVgJbwzyIX8jZL1ZJ%2FkGxn%2BHWBpy5xLKgJAtkxcS%2FLESs25ZZMsO9ALNizdwQhCKwPWiZOwM%2F6gpQJGsq4h2ictJ7KXCZ59ASBaYSS7QiJ77ncE&X-Amz-Signature=b6d033826bcb3227c4bf1f5ef80b3c072bdf430d57e9a15fad41b61ea3d52b2f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
