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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VKWOSU4%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T230705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGE7UwVT6jiQnHss%2FDA1T1xktW16uUgY5HwX4VgLvYxEAiAq2mb8IibKFrYlq2oMwIi48P2gqFubHK5sFNXo%2F%2F6brir%2FAwgfEAAaDDYzNzQyMzE4MzgwNSIM9Vc8bokCwxskLvXOKtwDefZ1MYtWOK8t8IkCnHIzkMdqRdMemuxd12321v7TbdlsUCPxeyU0Z3fvD1l%2BpA6B5tKwgc%2BfhxfnyRcHRKiumzKOhK8G2FwSrqEM4XbX4BHNNoGPeT%2FewMfrHJGjmWvrdJkPHLS7lxVDJH0MKQYT0vadR6JbrPoskNiTN6kmDE5jRxm2mOVzjdrcagoRbayyq0gDcLZtLRJBHdhdhu2B%2FF2vyKEVNsLWKLynYsMnjUJ0vgfp3Io9b86nBe8D0z4y7ITURy0uUqZ%2BPiYLgCJ3l%2B6%2FF2EAMVGRppUHcgPHaV4LqKCrwRdFgOhq4l8zImnV187vpCwkGmCMHAfjVnqZ9iXRVd5DVJC%2FUeq06rTSNViF11DiMm%2F1wxuc5F5DgpiQfjc%2FIzYlsNuKijTAhhtwDzQ%2B70j46HM3oHIYf8nzylC%2FsTzQGJ%2BRvo%2F%2BaVLXzy5cJgCB1AmvO01qZqV5C%2BqbMdp1z8ooLDkPNI4I6TwLEnWmtOJ0HoBrXdIrFAzfWSfAt1IAsl3Qlb8hAOOqfaWW8KIRCbAnkd7K2J%2BtmJwdR85%2Bp2pDaZQPiv4cwmIAiu0XXJP6eEnuM7y7rvWKwg5fGwXYw3b4%2BhYw7nqGrZuB8N7UzJj9WXDMVRKcY7Uwt6%2FuvQY6pgEJHw1HgUkySsqmKXnJCPmE7zfpf88BafQXi%2Fd%2BLncC%2FYDxI1c9qgq2ZBV%2F%2BumUx07MUzmKJYSoM63yptFdCPSmFXPqZrij5iraGeYRHfzd5AhJEFKY0tyYIm%2BgKFQ08tS%2Bb56A5uygQQMkAZsKSNEso7fFS4XO5pYByITISxmDPXt2axHRGDQkbsltkQvlK%2FwPUUEd4%2FK6zMaGW71IyUx7%2BdtUedXV&X-Amz-Signature=24e49dadf84ce8183668e0d2e81cfd33638a0268e623ab7f760976cb8a401c20&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VKWOSU4%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T230705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGE7UwVT6jiQnHss%2FDA1T1xktW16uUgY5HwX4VgLvYxEAiAq2mb8IibKFrYlq2oMwIi48P2gqFubHK5sFNXo%2F%2F6brir%2FAwgfEAAaDDYzNzQyMzE4MzgwNSIM9Vc8bokCwxskLvXOKtwDefZ1MYtWOK8t8IkCnHIzkMdqRdMemuxd12321v7TbdlsUCPxeyU0Z3fvD1l%2BpA6B5tKwgc%2BfhxfnyRcHRKiumzKOhK8G2FwSrqEM4XbX4BHNNoGPeT%2FewMfrHJGjmWvrdJkPHLS7lxVDJH0MKQYT0vadR6JbrPoskNiTN6kmDE5jRxm2mOVzjdrcagoRbayyq0gDcLZtLRJBHdhdhu2B%2FF2vyKEVNsLWKLynYsMnjUJ0vgfp3Io9b86nBe8D0z4y7ITURy0uUqZ%2BPiYLgCJ3l%2B6%2FF2EAMVGRppUHcgPHaV4LqKCrwRdFgOhq4l8zImnV187vpCwkGmCMHAfjVnqZ9iXRVd5DVJC%2FUeq06rTSNViF11DiMm%2F1wxuc5F5DgpiQfjc%2FIzYlsNuKijTAhhtwDzQ%2B70j46HM3oHIYf8nzylC%2FsTzQGJ%2BRvo%2F%2BaVLXzy5cJgCB1AmvO01qZqV5C%2BqbMdp1z8ooLDkPNI4I6TwLEnWmtOJ0HoBrXdIrFAzfWSfAt1IAsl3Qlb8hAOOqfaWW8KIRCbAnkd7K2J%2BtmJwdR85%2Bp2pDaZQPiv4cwmIAiu0XXJP6eEnuM7y7rvWKwg5fGwXYw3b4%2BhYw7nqGrZuB8N7UzJj9WXDMVRKcY7Uwt6%2FuvQY6pgEJHw1HgUkySsqmKXnJCPmE7zfpf88BafQXi%2Fd%2BLncC%2FYDxI1c9qgq2ZBV%2F%2BumUx07MUzmKJYSoM63yptFdCPSmFXPqZrij5iraGeYRHfzd5AhJEFKY0tyYIm%2BgKFQ08tS%2Bb56A5uygQQMkAZsKSNEso7fFS4XO5pYByITISxmDPXt2axHRGDQkbsltkQvlK%2FwPUUEd4%2FK6zMaGW71IyUx7%2BdtUedXV&X-Amz-Signature=dd4966d31f8fcd84b5c0f9d76c415681e6233b6ff7ce5b3f46118a13d6986174&X-Amz-SignedHeaders=host&x-id=GetObject)

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
