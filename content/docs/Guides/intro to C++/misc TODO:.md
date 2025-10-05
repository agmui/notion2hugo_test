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

| Name     | variables                                           |
| -------- | --------------------------------------------------- |
| Test     | ENV_UNIT_TESTS, PLATFORM_HOSTED, RUN_WITH_PROFILING |
| Sim      | PLATFORM_HOSTED, RUN_WITH_PROFILING                 |
| Hardware | N/A                                                 |

We in <u>Hardware</u> mode so in the `#ifdef` block line 30 will not be included when compiling 

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VEJCSUJ%2F20251005%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251005T013832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCpd5LRF45W6wW3kXkiMvAB9AqmO7FSxQDSAPqFumOjIQIgNLhvGi8S34kuqyg4xWlRkfhD6q0m%2Bnttpq4BVPd6a7Uq%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDEYcfw8bc0sIg2FSZircA9SCk6QjpuIi8K613dsKi9GM%2FiedvnFJYtWKD7Br1h1t9gCRFh28qkyAeZi7Mbg%2BoLC2CfckVGSNoIUeVo2KhsJnx07nH5IbZlWp%2FZ2EQK0Bd4bj%2F9PfpjUXhkWrB6AejTYdiEBC1UaeyRtl5WiTiBjoGab971B2k3GPWtFDkxDjiBj6EmVqf3bots8y3UqAdLbJTfjeja8UOlC9SRgxykRzK10DEa56TGtDPlM2vDfB7a1ee88Ua2VNmlSGzcHmOEbqf3yYeXcSkwOoRfT4MV5kGLqyHO7CuzoZVkml3LJ7qKAD%2FaDhqi0Cv2pJaZNivAAOzNeHHxOSodYY7KiJREH41BfWzf%2B43I8SbSk23EwMdw5s82iOpvfZxTR4qC7LaZWvh4lJbil55dO%2BFoRYOvroZJrhgtCMjl05mG6pWgDd7WfUzvz31is7tjy8uE6eHUvXUIyRXPRstOphLJ8xxlgSCBvpLT2%2Bq3klLPLKwm2es%2FRQ0J7q%2BggxW5OPnu%2F%2Bo9UMmodJGPCJAfLyioD7x%2FbajbEJ0XuOi6ZPF6jRIWbo56F%2BsuLt%2FpsXW2CkEOe7f27HVKI%2FiQ8gacR24bTgLr39LAkBAj5wzMaFC%2BJJDgB5y%2FLH7sLBG0RtIwk7MOD1hscGOqUBvHnu7bi%2Bfuxp%2BzPXmoCY1pJdOnHrYYp%2FnMOreRkSVbdoT%2BrraVGsMJbDNaM9U6%2B4Gdud0DL21Iuw%2F3TF3ekGJaPvQ1f55L0zCR4CYG3awhhPFvEIQq1KSiBHkACpmGO%2FwoCqGZ9JSd0fClSpzp29y9PhxagUsGWlf3LfTxLJmvhlAfXIUKk%2BmyP1c4dcxcvbG6AS1qyZwUpCWPF3VPivo%2FbNToWz&X-Amz-Signature=d605748f9443608168c18b2f67f9ba5298524b3d21b5b971d5d604ac0094008a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VEJCSUJ%2F20251005%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251005T013832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCpd5LRF45W6wW3kXkiMvAB9AqmO7FSxQDSAPqFumOjIQIgNLhvGi8S34kuqyg4xWlRkfhD6q0m%2Bnttpq4BVPd6a7Uq%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDEYcfw8bc0sIg2FSZircA9SCk6QjpuIi8K613dsKi9GM%2FiedvnFJYtWKD7Br1h1t9gCRFh28qkyAeZi7Mbg%2BoLC2CfckVGSNoIUeVo2KhsJnx07nH5IbZlWp%2FZ2EQK0Bd4bj%2F9PfpjUXhkWrB6AejTYdiEBC1UaeyRtl5WiTiBjoGab971B2k3GPWtFDkxDjiBj6EmVqf3bots8y3UqAdLbJTfjeja8UOlC9SRgxykRzK10DEa56TGtDPlM2vDfB7a1ee88Ua2VNmlSGzcHmOEbqf3yYeXcSkwOoRfT4MV5kGLqyHO7CuzoZVkml3LJ7qKAD%2FaDhqi0Cv2pJaZNivAAOzNeHHxOSodYY7KiJREH41BfWzf%2B43I8SbSk23EwMdw5s82iOpvfZxTR4qC7LaZWvh4lJbil55dO%2BFoRYOvroZJrhgtCMjl05mG6pWgDd7WfUzvz31is7tjy8uE6eHUvXUIyRXPRstOphLJ8xxlgSCBvpLT2%2Bq3klLPLKwm2es%2FRQ0J7q%2BggxW5OPnu%2F%2Bo9UMmodJGPCJAfLyioD7x%2FbajbEJ0XuOi6ZPF6jRIWbo56F%2BsuLt%2FpsXW2CkEOe7f27HVKI%2FiQ8gacR24bTgLr39LAkBAj5wzMaFC%2BJJDgB5y%2FLH7sLBG0RtIwk7MOD1hscGOqUBvHnu7bi%2Bfuxp%2BzPXmoCY1pJdOnHrYYp%2FnMOreRkSVbdoT%2BrraVGsMJbDNaM9U6%2B4Gdud0DL21Iuw%2F3TF3ekGJaPvQ1f55L0zCR4CYG3awhhPFvEIQq1KSiBHkACpmGO%2FwoCqGZ9JSd0fClSpzp29y9PhxagUsGWlf3LfTxLJmvhlAfXIUKk%2BmyP1c4dcxcvbG6AS1qyZwUpCWPF3VPivo%2FbNToWz&X-Amz-Signature=9d2429eb3982e4c6dde488a8fcf6e0c91eef3d0033317474ade6d4ff133401a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
