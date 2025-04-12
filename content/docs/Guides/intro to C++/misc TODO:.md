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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7L7HIAZ%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T090755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIBqnirkrczGDbw%2BdB3%2FyREAXP68oaSHm3Af8oyV%2BVnc8AiBDRSL%2Bj1AYXmLV7NuE1X0j6oZ3UpWg40%2B4a3HDds42fyqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVkBVWJ56sNIzTCoWKtwD1ghvULngHWYRO97gqqS7GRIRC%2FYTBSRcthl70nJgj%2BCSzE%2F%2FVXoXJEpMQcFs8OvEpUEoHGeecs9%2BJsbjnrgE95L10vogPME%2FKJ%2F3hJ9gZBf1kcHkAW9xK3KqDdqmaHWKQQKsuXuQdRNHPDhnBhGBsVXZ36DePfoBCQ9dM08HGB6sCpkVEmB6KkY9z%2Fmhj3dk58zjqVnqHNyz3sXHIRSQKzeM8im776EP1cMTcNwWqupJbBoyAfWljoi%2BhFTrcim%2Fg8mbjGdNT1xk%2Fbnp9Ycs0W8jKNknIraSx5%2BQd6XRcrVml11QuzSH2ejT6WctLyyCxknr8w9Ah8ivc4Fh8z%2BOv0ptdeuHIruLa2qrhdECeCD00KNIj3AwonifbdPDi5ULyTXHCaOymxGVLy%2B6V64TrSLCVjJyKDWchulIeWzbaeo%2B085wRYGLxbbTMtJUiIuHTcJ%2BmGUfVkVsYaoaWMbmMDj6nOB1KhrPFCsVPGoiPsndbRPT4UuRiExD7WNS4vWr%2BhE1cch5BpWvmXY1DW204PQ0Bjd31vZkR%2FvAiIKlOUl7JKcmBVU9wgAMtCmnpDfwHuQ89kqimc5R%2FAkXBvKIsnEkjU7YMlbwVZAK4FbdHj9dg5F6KTwRFCQRfq0w6afovwY6pgHOTP7gVyPtqSvOQ1EE%2FeY9R9j1Qw5LaQCNhHCfDOCBpWoT6SqVLunImphJtTiIsitXI5xNjrdWcFUvE9ATzgyUhZqSZ9%2FcZwDedkYQthMU1OFnz9erQdGYZI6uwGAWaVHe3Czu1NI2eyLkEGR2MYMAuTR2DH0JlaCyN5shh1CUj6bvQSwktkjhTKATcCCMHvpLEVaI3FbU5Wy25zbRqJ59AVP1CGS3&X-Amz-Signature=2dc0d5d7cac49e9cca1b04a52f38cbe9eb7277161455215ac87f49073b551c90&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7L7HIAZ%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T090755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIBqnirkrczGDbw%2BdB3%2FyREAXP68oaSHm3Af8oyV%2BVnc8AiBDRSL%2Bj1AYXmLV7NuE1X0j6oZ3UpWg40%2B4a3HDds42fyqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVkBVWJ56sNIzTCoWKtwD1ghvULngHWYRO97gqqS7GRIRC%2FYTBSRcthl70nJgj%2BCSzE%2F%2FVXoXJEpMQcFs8OvEpUEoHGeecs9%2BJsbjnrgE95L10vogPME%2FKJ%2F3hJ9gZBf1kcHkAW9xK3KqDdqmaHWKQQKsuXuQdRNHPDhnBhGBsVXZ36DePfoBCQ9dM08HGB6sCpkVEmB6KkY9z%2Fmhj3dk58zjqVnqHNyz3sXHIRSQKzeM8im776EP1cMTcNwWqupJbBoyAfWljoi%2BhFTrcim%2Fg8mbjGdNT1xk%2Fbnp9Ycs0W8jKNknIraSx5%2BQd6XRcrVml11QuzSH2ejT6WctLyyCxknr8w9Ah8ivc4Fh8z%2BOv0ptdeuHIruLa2qrhdECeCD00KNIj3AwonifbdPDi5ULyTXHCaOymxGVLy%2B6V64TrSLCVjJyKDWchulIeWzbaeo%2B085wRYGLxbbTMtJUiIuHTcJ%2BmGUfVkVsYaoaWMbmMDj6nOB1KhrPFCsVPGoiPsndbRPT4UuRiExD7WNS4vWr%2BhE1cch5BpWvmXY1DW204PQ0Bjd31vZkR%2FvAiIKlOUl7JKcmBVU9wgAMtCmnpDfwHuQ89kqimc5R%2FAkXBvKIsnEkjU7YMlbwVZAK4FbdHj9dg5F6KTwRFCQRfq0w6afovwY6pgHOTP7gVyPtqSvOQ1EE%2FeY9R9j1Qw5LaQCNhHCfDOCBpWoT6SqVLunImphJtTiIsitXI5xNjrdWcFUvE9ATzgyUhZqSZ9%2FcZwDedkYQthMU1OFnz9erQdGYZI6uwGAWaVHe3Czu1NI2eyLkEGR2MYMAuTR2DH0JlaCyN5shh1CUj6bvQSwktkjhTKATcCCMHvpLEVaI3FbU5Wy25zbRqJ59AVP1CGS3&X-Amz-Signature=1304d64564946ea3797466b0c6c30f81179b86f3fc372f897586529589ac6766&X-Amz-SignedHeaders=host&x-id=GetObject)

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
