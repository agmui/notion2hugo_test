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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V32K4LPI%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T200936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIGz%2Fv%2FIbSo8OqtNtJGxFOMxMUKjMLfsgBK9Gk3%2FkMo0eAiEA5B9%2B8QYFfkvJDF4Jc0fE1pRZvLumvpwdU6%2FSidqNj8sqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB8FmuDE8jRA7ZyGYCrcA4%2FmGdtGLPx736xIk5Igs2akRGLvZ1yEbkuSBESH4mLC5SoVxktCVWS8zsv44eCqUcewiuQboE76CpQup%2BqS4pxIgIcozJSi0YhdMh6w5VtdX1V2jaY8lB3RQVQ5F7VTcG9zWlCewIaIl1VLJBXmSH%2B7VvnejUcSsSk3krZlGJBQQAXe2I9cOULUFW1noxvNguJcX3Ekz5f0zxglSjOtuRFH6T%2FqrFOLbbLg5Wt6JZzrautgwFysAV6XJf99w8x05dQVscnIBucfh9jZRIRPuc%2FeGtnlqvsCWbHx1l8dM9mlvHG92dnJJfhCm9ZUnzKPOuxkW%2FtDXag0QNYPe5pE%2Bp%2BJ0HGMbTne97M7Q4YUL8Ef7Me2Za%2B3gKZqUA%2BFNiwPL%2B397yZozMxQ1xF0pMV43xRGkekqot7zslD08bd371gisQqXHNJkuA%2FTkpXSnVcLV7VtIXkI0%2FhpBoEeFnrDsVtMXEjz8rtmlnPpPkMmIGpcARmrF7IoX4T5Ss1dbkJcZii9cvI83qeA%2Fc0KtHhavPSf9GH%2BNsI5J14WKdTrOjVMgEnadoxAbZAWZ%2FuhUOkdLgshkC3zM2lrcESh%2FFqbGuUOaxoMel2uwn3cCJJIrc3fZQuqu4uSQ1UNPhKrMN25q78GOqUB6BqtcxoJYZ1L1if74MYEfvvwR11OfvYJZngJWF1IuCNsuzCZCkOSCCTYwpjCU5s5rrTQZ5a%2BQqu316aGEHxzFTFBHdClpgXjccQcRS10sSQvq9%2Ba4AaUOf1S5U4el011vx4oFj5hyzLtlhMhLEkdxTQB0RIZqJUE0w9%2FCco2AP1XV9Kis0QUD%2F3r5Lh0psBXH6F94m7KH81jl%2BsKGFzSG80NAzJu&X-Amz-Signature=55129c021080798b4f86dd15c1ec0e9dd36b3660e70c73548482d15fcebbf324&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V32K4LPI%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T200936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIGz%2Fv%2FIbSo8OqtNtJGxFOMxMUKjMLfsgBK9Gk3%2FkMo0eAiEA5B9%2B8QYFfkvJDF4Jc0fE1pRZvLumvpwdU6%2FSidqNj8sqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB8FmuDE8jRA7ZyGYCrcA4%2FmGdtGLPx736xIk5Igs2akRGLvZ1yEbkuSBESH4mLC5SoVxktCVWS8zsv44eCqUcewiuQboE76CpQup%2BqS4pxIgIcozJSi0YhdMh6w5VtdX1V2jaY8lB3RQVQ5F7VTcG9zWlCewIaIl1VLJBXmSH%2B7VvnejUcSsSk3krZlGJBQQAXe2I9cOULUFW1noxvNguJcX3Ekz5f0zxglSjOtuRFH6T%2FqrFOLbbLg5Wt6JZzrautgwFysAV6XJf99w8x05dQVscnIBucfh9jZRIRPuc%2FeGtnlqvsCWbHx1l8dM9mlvHG92dnJJfhCm9ZUnzKPOuxkW%2FtDXag0QNYPe5pE%2Bp%2BJ0HGMbTne97M7Q4YUL8Ef7Me2Za%2B3gKZqUA%2BFNiwPL%2B397yZozMxQ1xF0pMV43xRGkekqot7zslD08bd371gisQqXHNJkuA%2FTkpXSnVcLV7VtIXkI0%2FhpBoEeFnrDsVtMXEjz8rtmlnPpPkMmIGpcARmrF7IoX4T5Ss1dbkJcZii9cvI83qeA%2Fc0KtHhavPSf9GH%2BNsI5J14WKdTrOjVMgEnadoxAbZAWZ%2FuhUOkdLgshkC3zM2lrcESh%2FFqbGuUOaxoMel2uwn3cCJJIrc3fZQuqu4uSQ1UNPhKrMN25q78GOqUB6BqtcxoJYZ1L1if74MYEfvvwR11OfvYJZngJWF1IuCNsuzCZCkOSCCTYwpjCU5s5rrTQZ5a%2BQqu316aGEHxzFTFBHdClpgXjccQcRS10sSQvq9%2Ba4AaUOf1S5U4el011vx4oFj5hyzLtlhMhLEkdxTQB0RIZqJUE0w9%2FCco2AP1XV9Kis0QUD%2F3r5Lh0psBXH6F94m7KH81jl%2BsKGFzSG80NAzJu&X-Amz-Signature=329c2fe2a282eb5939fd5cc8fcf809e5201cf927af775040d3e864e022fdfca5&X-Amz-SignedHeaders=host&x-id=GetObject)

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
