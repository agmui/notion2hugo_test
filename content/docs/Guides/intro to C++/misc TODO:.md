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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644MH5U3S%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T150732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJIMEYCIQD47s020uzR0edFt3N73QOuSwqlTSYcetXPAlBdJoASbgIhALu8YTyEn8TI8F6jcrQg9rxY0B11DL80B4yKTOHHAIG3KogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxvlpp4zcEFV8rHg6wq3AP8eQtf%2FRgCcFZPkck2PAuH4BrN%2BbvrWygfPBTYUWAg8y7LI5ihradIXFTFxuAckEJjl%2FtII6%2FxBvC7U5XzKo7Z4lQxGdZIeCfA4kW71ixpkKcunOxfFRWyPBazNBaTX%2BC75hvmwXyno5xSErbKv0nHG0eyN%2B1RSwFfkFtZVSg8tHsj3ZCRbqv0ZSsH2kgrr%2BZt2VeW%2BT%2BlyTaHcgAF%2Bx8hkX43a9GI2SX91js%2FMjL2nGFGWj72FiiScmjsvss%2FPLNk%2Fvytr538PBqo6LG2M0upurRZdsGsA0dCz1BAeWCZUKakYK8WWvGRHFK3frckOqTlNkJIcJlSaFm6Wq6b0%2Fk3%2Fpii1NAUjoV9MGjFcr0WjJxU6LTpORbYS52t9qW2V0HGzF7jx%2FsFZp0pMa06pA6X1Us2aCIfwUnkis6T6M5AAGnT%2FLh%2BCmgMlXhe1ILfRkE4Jo%2F1QO9OPaCZkFuOd4bbs2BDY9%2BysNybSW5nEH9zI6XZPDK%2Fj7oGt5C3dOuWrdGoiTdGK%2FSeFxzZm12rbvVFMazUpTsYc2CJd0urIE2IQ%2FjzU6klfj9dnf7fD%2FQ6yQcjVKuPudV9U5umGi7uTmc84NAZGP9yJR6Vh1X%2BkbH0NWrzt7lcIOR4B4T1ajDH3%2FDBBjqkATeqhWwir6naPY7B3mvHWW6cFv6RDoKTB7abNAAdAijIZciIQIxggLfJfO7hAbyB8eSgLHGKemJxvSE9wuFHKpeVl2f0Af%2B6GIIFZ%2BpKW51sAc4ipm%2FCJ%2FD1JOjOwA%2Fu4QQCt%2FFqAHNnMQu%2By3lxW93c0rG%2FeVPQig1gICjxWHE9Yb9HGziEuAOXdtomqu6fdT%2BWQyMZr4P4mF0ixZcj07Bf3%2B5M&X-Amz-Signature=8985fabe92fb770c35ff0283a2fbd81f3d8ccf19b15fcd258316e38b1230c6b0&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644MH5U3S%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T150732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJIMEYCIQD47s020uzR0edFt3N73QOuSwqlTSYcetXPAlBdJoASbgIhALu8YTyEn8TI8F6jcrQg9rxY0B11DL80B4yKTOHHAIG3KogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxvlpp4zcEFV8rHg6wq3AP8eQtf%2FRgCcFZPkck2PAuH4BrN%2BbvrWygfPBTYUWAg8y7LI5ihradIXFTFxuAckEJjl%2FtII6%2FxBvC7U5XzKo7Z4lQxGdZIeCfA4kW71ixpkKcunOxfFRWyPBazNBaTX%2BC75hvmwXyno5xSErbKv0nHG0eyN%2B1RSwFfkFtZVSg8tHsj3ZCRbqv0ZSsH2kgrr%2BZt2VeW%2BT%2BlyTaHcgAF%2Bx8hkX43a9GI2SX91js%2FMjL2nGFGWj72FiiScmjsvss%2FPLNk%2Fvytr538PBqo6LG2M0upurRZdsGsA0dCz1BAeWCZUKakYK8WWvGRHFK3frckOqTlNkJIcJlSaFm6Wq6b0%2Fk3%2Fpii1NAUjoV9MGjFcr0WjJxU6LTpORbYS52t9qW2V0HGzF7jx%2FsFZp0pMa06pA6X1Us2aCIfwUnkis6T6M5AAGnT%2FLh%2BCmgMlXhe1ILfRkE4Jo%2F1QO9OPaCZkFuOd4bbs2BDY9%2BysNybSW5nEH9zI6XZPDK%2Fj7oGt5C3dOuWrdGoiTdGK%2FSeFxzZm12rbvVFMazUpTsYc2CJd0urIE2IQ%2FjzU6klfj9dnf7fD%2FQ6yQcjVKuPudV9U5umGi7uTmc84NAZGP9yJR6Vh1X%2BkbH0NWrzt7lcIOR4B4T1ajDH3%2FDBBjqkATeqhWwir6naPY7B3mvHWW6cFv6RDoKTB7abNAAdAijIZciIQIxggLfJfO7hAbyB8eSgLHGKemJxvSE9wuFHKpeVl2f0Af%2B6GIIFZ%2BpKW51sAc4ipm%2FCJ%2FD1JOjOwA%2Fu4QQCt%2FFqAHNnMQu%2By3lxW93c0rG%2FeVPQig1gICjxWHE9Yb9HGziEuAOXdtomqu6fdT%2BWQyMZr4P4mF0ixZcj07Bf3%2B5M&X-Amz-Signature=3b83bb7a93d32fb1f72d4e4602ad502dad37d1d5e8acc1a40b228ef359c7091b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
