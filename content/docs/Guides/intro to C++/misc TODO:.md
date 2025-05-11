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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666737SKMY%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T033558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJGMEQCIQCTQOAb%2F09OeYGM%2Fv4w6EhSpNarvaRVtDS9txXjTC3NLQIfFiKLt5VgNjuCuGWjH61far%2Fjsl%2BF%2FqBoZ0GRGdUmaCqIBAi0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMSwDo2k0Sq3vOv9KKtwDJWxRtQKltZsccmVOeH4ahjIgTOg01lXoUyqhdJ9A%2F3lIuUjeL73DFOKJXkV%2BQkbE5s3Ql6%2FD4a4USw8L1tFM2oT8UctwdyVXFiCFZUev797cBEcaSwuQ17TRepMfbB7f42W5xtEvOqhBLOtNMqsSncIpdiUK%2BYa9BSf3Z0qyILIqEaHJ6hMMSe645%2FqLLx7NnW%2B%2BFox%2BkKgYjzCUnsLPxvj5nGbehRni6wJTkh0sV1JHlxTnBOhXc9mS6VuOTMnArX5g9wyz%2Fd43m8U%2BAGn78aftpxrUD9R6XpuxZUTK4GsocpaNmTdHLL%2BEW%2BA75n2ZZDHAowkUSC3TEeMrGuRXSDoGj3qpwHp6KzFqFTVc0YFAB3QxlYD9xdgMVI%2BnShrFxYTppNci63BVFEBXr6hl3iAPQzLoCTmUCjzNRR02hGWKsR9NxfKlr4ZN64AchbP6vACXNGtgEOWnyb2Bt5PXFT5hJ0%2BPsdvpUKsPstuOcJqatpIUWh6wFZoHwz%2BBw1c%2F2dtiS2YoxQwe0z%2Ft9ymqAjBs1WeWmJu9%2Fm359bI65%2F2CMnBCrlMH7dDmBO8cgMC4LhGuFg44pkcHWIyMwiEKv0%2BRTxtNcGrHqO3nht0cpqp%2FmRdHTROH5C55nW8wiZ6AwQY6pgHYsrWBk%2FkxKhwVzuJliaxM47ki6QoYrovUm0ymgdpRI0YOx9elIPIYErmjhzGSQRmyO8SbvWWKQPjzRKk800ZqouohTTsmcP9%2FGVbqI1IVNr%2Bc0iRQPmCr%2F4JDEaB0jlTBAhH9hm2ipiAhnkE93k6jtZHq6Vu7u3%2BArWEd9aZ7ZQRz2IJ0DmZpr1q13%2BoITBlI88A%2FLuqu56DFFETLb0wHQGJoTYrM&X-Amz-Signature=d5ec029f6321e2c9be46e9176d8adee17a3e027594b713b647b9f98b0060989d&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666737SKMY%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T033558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJGMEQCIQCTQOAb%2F09OeYGM%2Fv4w6EhSpNarvaRVtDS9txXjTC3NLQIfFiKLt5VgNjuCuGWjH61far%2Fjsl%2BF%2FqBoZ0GRGdUmaCqIBAi0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMSwDo2k0Sq3vOv9KKtwDJWxRtQKltZsccmVOeH4ahjIgTOg01lXoUyqhdJ9A%2F3lIuUjeL73DFOKJXkV%2BQkbE5s3Ql6%2FD4a4USw8L1tFM2oT8UctwdyVXFiCFZUev797cBEcaSwuQ17TRepMfbB7f42W5xtEvOqhBLOtNMqsSncIpdiUK%2BYa9BSf3Z0qyILIqEaHJ6hMMSe645%2FqLLx7NnW%2B%2BFox%2BkKgYjzCUnsLPxvj5nGbehRni6wJTkh0sV1JHlxTnBOhXc9mS6VuOTMnArX5g9wyz%2Fd43m8U%2BAGn78aftpxrUD9R6XpuxZUTK4GsocpaNmTdHLL%2BEW%2BA75n2ZZDHAowkUSC3TEeMrGuRXSDoGj3qpwHp6KzFqFTVc0YFAB3QxlYD9xdgMVI%2BnShrFxYTppNci63BVFEBXr6hl3iAPQzLoCTmUCjzNRR02hGWKsR9NxfKlr4ZN64AchbP6vACXNGtgEOWnyb2Bt5PXFT5hJ0%2BPsdvpUKsPstuOcJqatpIUWh6wFZoHwz%2BBw1c%2F2dtiS2YoxQwe0z%2Ft9ymqAjBs1WeWmJu9%2Fm359bI65%2F2CMnBCrlMH7dDmBO8cgMC4LhGuFg44pkcHWIyMwiEKv0%2BRTxtNcGrHqO3nht0cpqp%2FmRdHTROH5C55nW8wiZ6AwQY6pgHYsrWBk%2FkxKhwVzuJliaxM47ki6QoYrovUm0ymgdpRI0YOx9elIPIYErmjhzGSQRmyO8SbvWWKQPjzRKk800ZqouohTTsmcP9%2FGVbqI1IVNr%2Bc0iRQPmCr%2F4JDEaB0jlTBAhH9hm2ipiAhnkE93k6jtZHq6Vu7u3%2BArWEd9aZ7ZQRz2IJ0DmZpr1q13%2BoITBlI88A%2FLuqu56DFFETLb0wHQGJoTYrM&X-Amz-Signature=f5a8d145daa4a4d0f3520b3fcbd374d43e09f24436274a7cbffe3694c9cb6c9b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
