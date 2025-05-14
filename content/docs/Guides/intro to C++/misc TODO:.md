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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUAGKHRK%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T170851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJIMEYCIQDLeJM5OoVaEVpQuk72mlTEwrEwrKFqS%2FegEw8OGoNvYQIhAIF7AokKFJIclJySE6T84ytmF1j4ktlcOByvTnr9SbftKv8DCBoQABoMNjM3NDIzMTgzODA1IgwlU5hSuuLrCfrg8Bsq3ANXj988gDjlGd21yw6cudPWdo40Uv4qdn%2BM6cTVhfCau273RCf7EZywCFB0L6FSB0097Ylsu4LiHhg5RHEmEyMiv%2FIJ2uWdARJw7aRpjm1ycd%2BUz0FR%2BBV%2FpZcawLaL%2Fs68KZnDktvJmlw0FCKpBZfweiAQ%2FAEYP0NS0sYUG%2F3VZM%2FVK1FLbWltYaAYd2OrqBIrU5VLdWQQIe0q77%2FhKD3oo7cNQAatHPCNOYwRhV1DIVDKqPNzlnA0AOkBUdnICRZ459Fk%2FkU9fO3gFu45Sxw3%2FYoo6x04QbgKkzk1uy3H28f0uHOHB1QFa4QstjflxriL%2Bdfwr4NR3Ukdyn1MM211cqzXA7ebz2X8ShedV1RQqzjk4kzmVKXgYNBv4Gn83SkDfcgRX70njRCmJOOU53g2vddpSRCN2I%2BAyRyCFUSXYM7G3wNlyajw8EsyAFwt%2F5lagpV%2FC2PyB2hwpwSKfdDQKoOPKkL1adS1GwOa%2FA5sb9718wvXAaTwpxOauduUZYhSPa5HIG1YyPcKcRS%2BA%2FtO8QL8TbENeXX5Rg%2BtIEDzEMcssdr1fAcW0Xk%2FxOPPD%2BOrBf1MfXMEqDy0SiMKp1%2BjV%2FSJ4jfb0S%2FGjVZegBTTu8xXptJmxeZ%2F7F9BqTDSiJPBBjqkAf5rDkPdeMfLZsN1x2Ip8%2BqibwBW%2BxIGcBxYFKvxAH6jrZZmyVVirO26TVQ4YqmXz4w2g3WSx9GEdb1mfgniyiTcOPWwIEL0FcfHlGnUjCP2h1l%2FB22D%2BiFAV7NfvlQ%2BmzelUn%2FExxRBGol7uxSscUcCTN4WXCPZQkvXg7WisKbGsZMPfSBaj2KFJVPv%2BM3Agqt8kF0BRtU2o8B%2BIitqwduHjpAM&X-Amz-Signature=f80d1b9fa2dd3d64dfaedcb03c03a0e06bb2a4c9bbf249d340389853e86de8af&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUAGKHRK%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T170851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJIMEYCIQDLeJM5OoVaEVpQuk72mlTEwrEwrKFqS%2FegEw8OGoNvYQIhAIF7AokKFJIclJySE6T84ytmF1j4ktlcOByvTnr9SbftKv8DCBoQABoMNjM3NDIzMTgzODA1IgwlU5hSuuLrCfrg8Bsq3ANXj988gDjlGd21yw6cudPWdo40Uv4qdn%2BM6cTVhfCau273RCf7EZywCFB0L6FSB0097Ylsu4LiHhg5RHEmEyMiv%2FIJ2uWdARJw7aRpjm1ycd%2BUz0FR%2BBV%2FpZcawLaL%2Fs68KZnDktvJmlw0FCKpBZfweiAQ%2FAEYP0NS0sYUG%2F3VZM%2FVK1FLbWltYaAYd2OrqBIrU5VLdWQQIe0q77%2FhKD3oo7cNQAatHPCNOYwRhV1DIVDKqPNzlnA0AOkBUdnICRZ459Fk%2FkU9fO3gFu45Sxw3%2FYoo6x04QbgKkzk1uy3H28f0uHOHB1QFa4QstjflxriL%2Bdfwr4NR3Ukdyn1MM211cqzXA7ebz2X8ShedV1RQqzjk4kzmVKXgYNBv4Gn83SkDfcgRX70njRCmJOOU53g2vddpSRCN2I%2BAyRyCFUSXYM7G3wNlyajw8EsyAFwt%2F5lagpV%2FC2PyB2hwpwSKfdDQKoOPKkL1adS1GwOa%2FA5sb9718wvXAaTwpxOauduUZYhSPa5HIG1YyPcKcRS%2BA%2FtO8QL8TbENeXX5Rg%2BtIEDzEMcssdr1fAcW0Xk%2FxOPPD%2BOrBf1MfXMEqDy0SiMKp1%2BjV%2FSJ4jfb0S%2FGjVZegBTTu8xXptJmxeZ%2F7F9BqTDSiJPBBjqkAf5rDkPdeMfLZsN1x2Ip8%2BqibwBW%2BxIGcBxYFKvxAH6jrZZmyVVirO26TVQ4YqmXz4w2g3WSx9GEdb1mfgniyiTcOPWwIEL0FcfHlGnUjCP2h1l%2FB22D%2BiFAV7NfvlQ%2BmzelUn%2FExxRBGol7uxSscUcCTN4WXCPZQkvXg7WisKbGsZMPfSBaj2KFJVPv%2BM3Agqt8kF0BRtU2o8B%2BIitqwduHjpAM&X-Amz-Signature=9dd0cb36b93f45ef4afde450215a2879d8617cd2f32dc66444d52e68bca76702&X-Amz-SignedHeaders=host&x-id=GetObject)

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
