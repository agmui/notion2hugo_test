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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BW6YC4E%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T210240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDOh0797zQm8byFCd6vxu6Gr6BFkP7%2F0Jibw3EizA9GQQIgECLyb9ZdObkZXFJDjnHh%2FOQJ3Ags2z7ecMaO8eUdZaIqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEWWK%2FPNwPNf73nWRCrcA71Gl9PEXuPUKhG07WPHUHNXQz8%2FvF5bQx0GE3MqcgM2CsQ12hJHyCG7IB%2FrA3aNGJ2kg7ZkJ2tBb3MSLrU89p2UyURsmlBPJ%2FyX0U0D8ha%2FJI8TqCZkJF58Bd%2BrsDeEnYLqJ4lHLiWH%2Fu04lXZ%2ByEw4%2FxEaML5UMeX8yQ5Lzke60OZNNZiovshoyRZybxHqw4KXlGtmUDhnSZeynOKfYKKwoZ4cmAH93mXxpd2cho0GpoKa5%2FHGAZCld1sqI4aoxqnmI42atIH5IPRBDfDj8nF0nKOENGqVH7Aa91cdx4EIvGl8ttkae8cRDkRyf9OVaDk6poMadCX4pZEATO1U0BqKJLuPkaLUuBPFVfsppn1IFDMwkf%2FXp1LsjabPDwMOtc8dorms3kyCiE6ZG%2Bxg%2Bl8am09PUL6vq4BFveEOZE%2FT97ELk2L2BsBco%2Fyme02MfCyAcCqtWk%2FF6h5RqunjoaCj58jJm84Q0umhOrY%2FdaV7inz%2Bf6iPEk3Pcywl95NnfujDm1Y%2BkIM9%2Fm7ORRmaNYvflvkb0elZoNedeE0UTnaXY3Q0jFb%2FBRey0K%2Bm4OdvuUlj1fYXXKEYuwrqI7MJFyRiC3GGtnnVl72QHjnXblLBvW2xoizQv1PBbt%2FaMKaakr4GOqUBehqSmpZq0Z8P0fXCVCVR6XqXKqTv62oMoDOvetttmbTOp%2FP6CI2b14jESIHcJx88GRC1ziCSKASfEL9xzCmJzpoerO1HcA5JaWNb2hA1o6KjOn4%2F2Luch8%2B0L8xx0YA%2BBpd%2BhOflHIUgSnOpFNQslvLL8NQ%2BlYHG7Qw1i61miUKhj3%2Bj4NjmTdiNpv%2FWAWHqgCnI1AtR4L99Ju%2BA7JQHZ25%2BFEL8&X-Amz-Signature=36dde4a50cbe97648f509804a96ee9b701fba0e8c2f01d5153d2506010ca73c7&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BW6YC4E%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T210240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDOh0797zQm8byFCd6vxu6Gr6BFkP7%2F0Jibw3EizA9GQQIgECLyb9ZdObkZXFJDjnHh%2FOQJ3Ags2z7ecMaO8eUdZaIqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEWWK%2FPNwPNf73nWRCrcA71Gl9PEXuPUKhG07WPHUHNXQz8%2FvF5bQx0GE3MqcgM2CsQ12hJHyCG7IB%2FrA3aNGJ2kg7ZkJ2tBb3MSLrU89p2UyURsmlBPJ%2FyX0U0D8ha%2FJI8TqCZkJF58Bd%2BrsDeEnYLqJ4lHLiWH%2Fu04lXZ%2ByEw4%2FxEaML5UMeX8yQ5Lzke60OZNNZiovshoyRZybxHqw4KXlGtmUDhnSZeynOKfYKKwoZ4cmAH93mXxpd2cho0GpoKa5%2FHGAZCld1sqI4aoxqnmI42atIH5IPRBDfDj8nF0nKOENGqVH7Aa91cdx4EIvGl8ttkae8cRDkRyf9OVaDk6poMadCX4pZEATO1U0BqKJLuPkaLUuBPFVfsppn1IFDMwkf%2FXp1LsjabPDwMOtc8dorms3kyCiE6ZG%2Bxg%2Bl8am09PUL6vq4BFveEOZE%2FT97ELk2L2BsBco%2Fyme02MfCyAcCqtWk%2FF6h5RqunjoaCj58jJm84Q0umhOrY%2FdaV7inz%2Bf6iPEk3Pcywl95NnfujDm1Y%2BkIM9%2Fm7ORRmaNYvflvkb0elZoNedeE0UTnaXY3Q0jFb%2FBRey0K%2Bm4OdvuUlj1fYXXKEYuwrqI7MJFyRiC3GGtnnVl72QHjnXblLBvW2xoizQv1PBbt%2FaMKaakr4GOqUBehqSmpZq0Z8P0fXCVCVR6XqXKqTv62oMoDOvetttmbTOp%2FP6CI2b14jESIHcJx88GRC1ziCSKASfEL9xzCmJzpoerO1HcA5JaWNb2hA1o6KjOn4%2F2Luch8%2B0L8xx0YA%2BBpd%2BhOflHIUgSnOpFNQslvLL8NQ%2BlYHG7Qw1i61miUKhj3%2Bj4NjmTdiNpv%2FWAWHqgCnI1AtR4L99Ju%2BA7JQHZ25%2BFEL8&X-Amz-Signature=412949abf57f815780ae36e3a4bcc4a349d75e7be21a458a70842ecc85bb1e11&X-Amz-SignedHeaders=host&x-id=GetObject)

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
