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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMRFRJPY%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T230825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIBmy5MLqz43fUmP%2F6So%2BH%2Bc3SYVeE0Yc%2BxVD5c8bJnx0AiEAg82cN3S9K9eZ2LyaaQJtbIR%2FHMA7pz3OP%2FsSomNEeT0q%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDGLYBsw603GR4H6AdyrcA0SEYox%2F%2BSWSWjSU26U%2FlbZPyFJ7HlHYBfz0IkQycv8sJfTRnpSfGJTtioCM%2FTRvDV2ypKmXilAeZzZDn0tQ8AJ1j8jOs3xdRRcVAmYRp3STwaem%2BlldKC23WdePnWf4qwGlR2ekdJSoxT%2BHAnTRni950jSMOS6avdjL4TE3qx0l5qSEIlmVCcCdiOI8YpJWO0rysKwtUKsbCeHr58pqp5G8ECAgKk%2F%2BGmXt6MumI%2BRVZtAQQjqRM1MK%2FSDQjDv2DMtaMK3tAE20El%2Ft9BqqPNQ0W0WKdI76cpihifkDuhtqHGp20IfZaG7cGJk3A%2FnSVQTKx7f5FI3jhQWoasrvZ8A68qh8hcHAdvm1tLNoccTgOTokvzHBXpcKALOWdQBjWnwlXnG%2FiMEMQR2qqB38%2FB6f9HcGvpZlmkQ6dv76XlVZfoqdStRrvRSDPFW%2BaCeVvwFZacxR1MlyR0XPNO2b%2BmpRFfx3TBbwcMKi5ilv5mhEjBC%2F2tf62IzEBYbpNqaVB9ZU5Fr37O3JkWzW3PFjN4iDLWH3EoblUg0T6C14e%2FzVLpSv%2BC0Ub74MczXLa%2BnqeEgzYhc4URFucjpreoxaktZyc2W3IpxqD2ssRfi3M%2BwwX%2F19wqMn4HiffEgVMMvbssIGOqUB%2FHtYiLxQ6BYK2cDrisgBZ6HHVgswPo5YN3qOh2CAuaY9RRzJiYnpAZg395tVQHIxY3maY5WYxytmRowYq3yrspnDQkOjPXyLcCHWfAhEvaxMdbyvZMo424%2BeHpH6ttsBG5a66gqqLPj4L286EdhWb2xPwxxgUp2xq7igsyPqFfOGiNME2UNT4Dw00FbYFdRIe%2Bd6Ju8jSKQczIgCzcu90N8GozTg&X-Amz-Signature=c305aeed91cbf224dcae1b5a3f0f550c13deff56a0020d7dd3592bd570b16826&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMRFRJPY%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T230825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIBmy5MLqz43fUmP%2F6So%2BH%2Bc3SYVeE0Yc%2BxVD5c8bJnx0AiEAg82cN3S9K9eZ2LyaaQJtbIR%2FHMA7pz3OP%2FsSomNEeT0q%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDGLYBsw603GR4H6AdyrcA0SEYox%2F%2BSWSWjSU26U%2FlbZPyFJ7HlHYBfz0IkQycv8sJfTRnpSfGJTtioCM%2FTRvDV2ypKmXilAeZzZDn0tQ8AJ1j8jOs3xdRRcVAmYRp3STwaem%2BlldKC23WdePnWf4qwGlR2ekdJSoxT%2BHAnTRni950jSMOS6avdjL4TE3qx0l5qSEIlmVCcCdiOI8YpJWO0rysKwtUKsbCeHr58pqp5G8ECAgKk%2F%2BGmXt6MumI%2BRVZtAQQjqRM1MK%2FSDQjDv2DMtaMK3tAE20El%2Ft9BqqPNQ0W0WKdI76cpihifkDuhtqHGp20IfZaG7cGJk3A%2FnSVQTKx7f5FI3jhQWoasrvZ8A68qh8hcHAdvm1tLNoccTgOTokvzHBXpcKALOWdQBjWnwlXnG%2FiMEMQR2qqB38%2FB6f9HcGvpZlmkQ6dv76XlVZfoqdStRrvRSDPFW%2BaCeVvwFZacxR1MlyR0XPNO2b%2BmpRFfx3TBbwcMKi5ilv5mhEjBC%2F2tf62IzEBYbpNqaVB9ZU5Fr37O3JkWzW3PFjN4iDLWH3EoblUg0T6C14e%2FzVLpSv%2BC0Ub74MczXLa%2BnqeEgzYhc4URFucjpreoxaktZyc2W3IpxqD2ssRfi3M%2BwwX%2F19wqMn4HiffEgVMMvbssIGOqUB%2FHtYiLxQ6BYK2cDrisgBZ6HHVgswPo5YN3qOh2CAuaY9RRzJiYnpAZg395tVQHIxY3maY5WYxytmRowYq3yrspnDQkOjPXyLcCHWfAhEvaxMdbyvZMo424%2BeHpH6ttsBG5a66gqqLPj4L286EdhWb2xPwxxgUp2xq7igsyPqFfOGiNME2UNT4Dw00FbYFdRIe%2Bd6Ju8jSKQczIgCzcu90N8GozTg&X-Amz-Signature=64ede95b7d7bafe68db30393854f6d01835734cfc5a7c359b67d48f2986770ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
