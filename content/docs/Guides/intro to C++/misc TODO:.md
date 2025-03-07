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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBF7YPBJ%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T003745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG87tKMwc8k44GQV3n%2FKMsCjNfNP%2FkoZNcONVVWYiw7eAiA3FgRNK3Zhk%2Bj3qmcxun8k%2Fx%2FBzUdom31TDmJTjhKaeir%2FAwg4EAAaDDYzNzQyMzE4MzgwNSIMHv2ucMVUzTFTV5nYKtwDE%2FbYYelUs%2Be36v9MNPtqRsC0o%2BaO%2FzKELIOV8Kcsfeo7pL00sYVg5dJGNFkyf%2FOvWTv2HamFuwrmDXNykFogu6KyGmRnEW1EIgCxSSzGrlNOxTuEc6cSrqnyHy0GrnxaR%2BwLte9tJUReObDExtl0%2FvLQn2DiAUIZg8A0hC3%2FroG1IdgPiQeIXqGNiGX2Tp8qaxJFk2I3g4f1M0O1%2BMM9WZxjhSuUE3FSEK8yl%2BK49N%2BnqEVIpJxU7Sy4VNQiDihGPhfemacgFOqaRE1yTkPzl6J2qpecinCJGmC%2FuVtTsQVUMHfc9QQnCy8eQc3uG4tqIDPGg6ZpLHDtEw0Mj58PeOQxalMK8rghvspjn%2BS%2FhbYBU4UHPqT%2BVAhjXNuOicaNSp7KYsBcyCQCVDcFtwCUC%2B6JdigZi7BrogxmxpH21f3cbiSnnrX0MpP9CAilJuzYhjIbsiXnjrgry6I8K8mAh7FDpjzgHwvIeetZhraEhJMQZS%2F0jlWsr2gQ5mO30l9e7LbRbbSjvd5eTJZNyMz%2Bd%2F0NbkwwlEjNSdv9WK5SxhdKWg4t9V1yiXfbn3iFzG5ZWwcX9ToTgz4KFmG26xufIF2pva1IeAU8fMEZMp9wluocF1CLSpSIr%2BBow%2BEw4ciovgY6pgFDITvDeXjQt%2F0fxp6DpMeTxj00haK6LzO60x7r0j%2FOdMlOt53%2BzteiKtZdJLBPoxCy1T8IQEkIzV3PByyH3xbwJDmBwh56Z7RVEX9OkDUcaJJCRFC8SuidVlmgxsFzNwfjP%2FXT4crH%2Bt3glDnEJFKmO1plvWBA8zkwEY%2F%2B0RKugF1qwZ%2FqgI2RHRL3NnmzqIoiBjo1uV%2FzfuicakbOCduJNQpSvYgW&X-Amz-Signature=26b5a35f5057309cdef67b26f7b8dd0b3518b923a1a3b0fb004daf05b365ae49&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBF7YPBJ%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T003745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG87tKMwc8k44GQV3n%2FKMsCjNfNP%2FkoZNcONVVWYiw7eAiA3FgRNK3Zhk%2Bj3qmcxun8k%2Fx%2FBzUdom31TDmJTjhKaeir%2FAwg4EAAaDDYzNzQyMzE4MzgwNSIMHv2ucMVUzTFTV5nYKtwDE%2FbYYelUs%2Be36v9MNPtqRsC0o%2BaO%2FzKELIOV8Kcsfeo7pL00sYVg5dJGNFkyf%2FOvWTv2HamFuwrmDXNykFogu6KyGmRnEW1EIgCxSSzGrlNOxTuEc6cSrqnyHy0GrnxaR%2BwLte9tJUReObDExtl0%2FvLQn2DiAUIZg8A0hC3%2FroG1IdgPiQeIXqGNiGX2Tp8qaxJFk2I3g4f1M0O1%2BMM9WZxjhSuUE3FSEK8yl%2BK49N%2BnqEVIpJxU7Sy4VNQiDihGPhfemacgFOqaRE1yTkPzl6J2qpecinCJGmC%2FuVtTsQVUMHfc9QQnCy8eQc3uG4tqIDPGg6ZpLHDtEw0Mj58PeOQxalMK8rghvspjn%2BS%2FhbYBU4UHPqT%2BVAhjXNuOicaNSp7KYsBcyCQCVDcFtwCUC%2B6JdigZi7BrogxmxpH21f3cbiSnnrX0MpP9CAilJuzYhjIbsiXnjrgry6I8K8mAh7FDpjzgHwvIeetZhraEhJMQZS%2F0jlWsr2gQ5mO30l9e7LbRbbSjvd5eTJZNyMz%2Bd%2F0NbkwwlEjNSdv9WK5SxhdKWg4t9V1yiXfbn3iFzG5ZWwcX9ToTgz4KFmG26xufIF2pva1IeAU8fMEZMp9wluocF1CLSpSIr%2BBow%2BEw4ciovgY6pgFDITvDeXjQt%2F0fxp6DpMeTxj00haK6LzO60x7r0j%2FOdMlOt53%2BzteiKtZdJLBPoxCy1T8IQEkIzV3PByyH3xbwJDmBwh56Z7RVEX9OkDUcaJJCRFC8SuidVlmgxsFzNwfjP%2FXT4crH%2Bt3glDnEJFKmO1plvWBA8zkwEY%2F%2B0RKugF1qwZ%2FqgI2RHRL3NnmzqIoiBjo1uV%2FzfuicakbOCduJNQpSvYgW&X-Amz-Signature=ad38238000bd2d10a6bba092fb4561dff496a6e0caf235ff5e8a4efaf9f93da4&X-Amz-SignedHeaders=host&x-id=GetObject)

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
