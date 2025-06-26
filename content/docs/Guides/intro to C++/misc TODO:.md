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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCKZCTIZ%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T061325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIQD3NOJwgiUZwtbWG036nnUW0SPGWFDiRONx%2BzWWM5vlKwIgJAx1nlauBTLu5k%2FwftRgp8C0R2T48CsEP3JA8t9krsoq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDE4uIwMEHtvOW5mmXSrcA340HvFgcgz8BAEjBhf6NvMTHEDcZYOrPd1dVhnVUsC41AC2JfArpN10Mp1GeqQHcmaQVE7Y7TdcREnYLo1rGVBgofhGqeyQpJSeZnumxMp0U2UfjjZhnXxsOoPkR5gO%2FlG4iCOvAOSzV%2FOwADwSHTCwf3fknx1vlA0O%2Bi0c4Muqp4I8ZoX5nScDQchqSLDB60A%2B7vPSKi%2Bhk3FKbc1Qj%2BMGL1f6StttEM%2Fg%2FwP76nwGYgQcWh6iOpWPGcBF43WWIMenB5K2QaQXtCoHGh0oWAHX4G%2FYZr8Bt9fUJXX15efe6Q3EPtldqwSUztVVmhvJMK%2FuxnatcNetoC%2BqTnLsEA2X66cyufB7c8oTOliJGjgYYkLtGrpFVLa1qbC2d79EQIxAUjUkHpSZKZAEj3YUiIPEYBKjwdcMG9Oyt%2FbekedBGZ4%2FGhM%2FdSQWeDTGhPAaE9J8tpvwYDI9%2FlRwyhiTOfDYTidL6exqqW1nhZC4QbCesB9rLm%2BNiQa67ULrjtXzoX%2FYOm7pJzxzHtdCHuosqsDHNTJRsgBEweZMlk5vXh3Z4zrXwCN%2FkQMA77%2F5FVrduHbGobI8%2FuYrQd6ziWVygsOFSvC%2FLjB3yT3MpITc8vBmjvC6%2FztKZ4%2Bpfa5yMICy88IGOqUBatFWJqM%2BaONE7c%2BHxUPyZO96Ej56f66i5cXVTEDClFz1kWLjkGsV0E2cQG%2Fk2w4glcKXVLOob7qBr%2FU1O3MnpwKGnuaFT99yajAN2AKQOGe5%2FWFN4ysYD4u5yGEed2Cy%2BkLxIEJEFAxEcWm9wBgPzI%2FXGN%2Fo5%2FwmvSWw1cssc6mnHf40MB5JB49bps%2BbG1kSuQKPetUi2Eqb0rYngndjZPvs6ayw&X-Amz-Signature=928a0a26a5a4e64c00d33fbb08955e8d3540c3638ddd373ad477034bbae58312&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCKZCTIZ%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T061325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIQD3NOJwgiUZwtbWG036nnUW0SPGWFDiRONx%2BzWWM5vlKwIgJAx1nlauBTLu5k%2FwftRgp8C0R2T48CsEP3JA8t9krsoq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDE4uIwMEHtvOW5mmXSrcA340HvFgcgz8BAEjBhf6NvMTHEDcZYOrPd1dVhnVUsC41AC2JfArpN10Mp1GeqQHcmaQVE7Y7TdcREnYLo1rGVBgofhGqeyQpJSeZnumxMp0U2UfjjZhnXxsOoPkR5gO%2FlG4iCOvAOSzV%2FOwADwSHTCwf3fknx1vlA0O%2Bi0c4Muqp4I8ZoX5nScDQchqSLDB60A%2B7vPSKi%2Bhk3FKbc1Qj%2BMGL1f6StttEM%2Fg%2FwP76nwGYgQcWh6iOpWPGcBF43WWIMenB5K2QaQXtCoHGh0oWAHX4G%2FYZr8Bt9fUJXX15efe6Q3EPtldqwSUztVVmhvJMK%2FuxnatcNetoC%2BqTnLsEA2X66cyufB7c8oTOliJGjgYYkLtGrpFVLa1qbC2d79EQIxAUjUkHpSZKZAEj3YUiIPEYBKjwdcMG9Oyt%2FbekedBGZ4%2FGhM%2FdSQWeDTGhPAaE9J8tpvwYDI9%2FlRwyhiTOfDYTidL6exqqW1nhZC4QbCesB9rLm%2BNiQa67ULrjtXzoX%2FYOm7pJzxzHtdCHuosqsDHNTJRsgBEweZMlk5vXh3Z4zrXwCN%2FkQMA77%2F5FVrduHbGobI8%2FuYrQd6ziWVygsOFSvC%2FLjB3yT3MpITc8vBmjvC6%2FztKZ4%2Bpfa5yMICy88IGOqUBatFWJqM%2BaONE7c%2BHxUPyZO96Ej56f66i5cXVTEDClFz1kWLjkGsV0E2cQG%2Fk2w4glcKXVLOob7qBr%2FU1O3MnpwKGnuaFT99yajAN2AKQOGe5%2FWFN4ysYD4u5yGEed2Cy%2BkLxIEJEFAxEcWm9wBgPzI%2FXGN%2Fo5%2FwmvSWw1cssc6mnHf40MB5JB49bps%2BbG1kSuQKPetUi2Eqb0rYngndjZPvs6ayw&X-Amz-Signature=a16e45f9bfc51f261cc9e4d432deee8c5fbd37c7ca3b41c976f1bba1c06e875b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
