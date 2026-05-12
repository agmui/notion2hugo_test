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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4F2OATW%2F20260512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260512T032153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJGMEQCIF%2FAscCfqjifHf43sqI7Do5Ob2VLmDJkoqLotMVHGr1uAiBEZ0HFLKaDRRbpZdSCrYOufLK163kWlh4lB3ei122J6ir%2FAwgjEAAaDDYzNzQyMzE4MzgwNSIM%2FhYkaHqkXijiAbO%2FKtwDVz4%2Fq82XfhQiZZ4TEP8OQyn9OZHPmll1CnNUSJ7NA%2FsCudVOud8WayA65rqtdTp%2B7zEc%2Fz%2Bsip1a3CK3dJ1jkXqJ9zv%2FNkJlxfZ0oesFzt9X%2FBYlkwe8ER186wTWTMrcQZblW7KrhPpS%2FSQdgYI6j4GfH2bQ0kqnk2ntrbseIBViHWrdu0En2E%2BDeIJ8uq9tfyhLlfWZK%2FPx9tkoc%2FfuItWCjjNRQJ9HuoGlhioMYLFKveIeNo7EzQq6KuFez%2B9cUhRwn6MyGLmshOFZkj1lZBwDucwXGtgZEnrNY%2BIgWZ3rs1Dt5Z3G6wAS6Uez0ya%2F7B9YM0zNY3xhIwu5OVV1NkdWpyVDeX2WsA%2BHzc6FJDPds7ZNM2HMLCJWl9oSDVWbbU8G9LNx1YVxW3YQfYcGbxiX%2FmrqR%2BloCkhRoFelGB5SzpfkmQwXi8X6K1Au6QUGED%2BByPsU4M4E6oE6cPn1NvmYRgEI5hwMpZAHiPVAaQ%2BxrpmDrO0RdB4CH3GlbAF2q2%2BzGPm7x745I6b9NVpLX%2BvzEXF0Ocjvknd0NYRLVTvG14egx3eR%2B0uGU%2FxI6WCJXBiUgbPfHeoFHz9DYl7NojCs6GGUyjr64S1ounajeG1Mjmj4h%2FHZvWsgycIw7J6K0AY6pgEuHWl0CdYLiYno4RdRNjKIYOdgBDeG5qhAPMn24TL0MPdrPdnygrDzFMAzRtoti81ElPaSxH86nnBsAfU0%2F3RDGgOjbhKsnam5CUVK%2FDu3620b2eZX944LBLy748xqo6hAm5eKwFa8w2VwXriW9Iwn1LEMVX87yVt9SuVqIojiMKiTAENeOCXG5rfZBz5errV56VLBx0MCvTljRdRSJGaCdwnhGfaO&X-Amz-Signature=b577956f84796c0a830ab3b6fd5b624190266dd97c080303844e87ec4b73924b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4F2OATW%2F20260512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260512T032153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJGMEQCIF%2FAscCfqjifHf43sqI7Do5Ob2VLmDJkoqLotMVHGr1uAiBEZ0HFLKaDRRbpZdSCrYOufLK163kWlh4lB3ei122J6ir%2FAwgjEAAaDDYzNzQyMzE4MzgwNSIM%2FhYkaHqkXijiAbO%2FKtwDVz4%2Fq82XfhQiZZ4TEP8OQyn9OZHPmll1CnNUSJ7NA%2FsCudVOud8WayA65rqtdTp%2B7zEc%2Fz%2Bsip1a3CK3dJ1jkXqJ9zv%2FNkJlxfZ0oesFzt9X%2FBYlkwe8ER186wTWTMrcQZblW7KrhPpS%2FSQdgYI6j4GfH2bQ0kqnk2ntrbseIBViHWrdu0En2E%2BDeIJ8uq9tfyhLlfWZK%2FPx9tkoc%2FfuItWCjjNRQJ9HuoGlhioMYLFKveIeNo7EzQq6KuFez%2B9cUhRwn6MyGLmshOFZkj1lZBwDucwXGtgZEnrNY%2BIgWZ3rs1Dt5Z3G6wAS6Uez0ya%2F7B9YM0zNY3xhIwu5OVV1NkdWpyVDeX2WsA%2BHzc6FJDPds7ZNM2HMLCJWl9oSDVWbbU8G9LNx1YVxW3YQfYcGbxiX%2FmrqR%2BloCkhRoFelGB5SzpfkmQwXi8X6K1Au6QUGED%2BByPsU4M4E6oE6cPn1NvmYRgEI5hwMpZAHiPVAaQ%2BxrpmDrO0RdB4CH3GlbAF2q2%2BzGPm7x745I6b9NVpLX%2BvzEXF0Ocjvknd0NYRLVTvG14egx3eR%2B0uGU%2FxI6WCJXBiUgbPfHeoFHz9DYl7NojCs6GGUyjr64S1ounajeG1Mjmj4h%2FHZvWsgycIw7J6K0AY6pgEuHWl0CdYLiYno4RdRNjKIYOdgBDeG5qhAPMn24TL0MPdrPdnygrDzFMAzRtoti81ElPaSxH86nnBsAfU0%2F3RDGgOjbhKsnam5CUVK%2FDu3620b2eZX944LBLy748xqo6hAm5eKwFa8w2VwXriW9Iwn1LEMVX87yVt9SuVqIojiMKiTAENeOCXG5rfZBz5errV56VLBx0MCvTljRdRSJGaCdwnhGfaO&X-Amz-Signature=fec13706af5b19de1e307193754aadcdb303207973bf12e13c0ae420ce8ddd07&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
