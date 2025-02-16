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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466236R5K46%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T180848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJGMEQCICW4Y31QACbakHV4hseCYMBKGCDf0chRGAk0wxIxTU2bAiBncpoMKmUVGejACrRsy5PsNLXeKRaumRhfSN7DlA1M9ir%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIM%2FqLhbUwZGq4d%2FfZoKtwDCgXMFCDFj%2FxR5G3jmnZpTyIHOq4SW9AMWO%2BG0%2F6hmUHppzmjfBVMEy58k4Jn05Z6Js4dUrjgLxuCm9OjZmLS88H2LUoRJCOOLfz%2B3VMcZpUFknKtFyEWGztLPpf3LQxaOn%2Fbv4%2Bz%2Fo7g0UEfMsgPS5ycXaW48NGk1e%2F1R6Gx6T1kRwx%2Bx%2BKX1KdZgWZdaD3GYMWJYiMKJVtbtzX13cf%2FFRse0tNdyNvYBASYrmqNKY%2FAjucUrnLELQVedtNYiQeE3z6%2Bby8jjBJ89SpA9DgwolrgoMRBMC6Sxye4AMr3wywgLgEC2C7NmYeP%2BN0dSwYuk7TMIx4jK%2BmYaZHQ8iONCq2mTuYshXuLJgQSCptb9l%2BAJtsNhESJME4Phg0zQ5onaACSK0N8Ubg1FddtScpmHkgzceg%2BevvkWDSxRhLGVlCx6jE4dhhHI3efpJFVRTgTRtAaQ6QUwpqt1aZgW2ph6%2BBb8GRja54fiPk%2BE3Q67aYfv4Uc8gtaOcmxluV8eGl0HGrd%2BibRMgWUxi8HD7sKHcP%2FhKSSCO33dXq33PnGgwQxtMsYHGiH1kTZ8TT12fZSBN3zJRBvS3gsoxystvBwdE9in9XfbxAoE%2BoPGkzird%2Fc%2FZzdkoRAoHY%2BQygw%2BsDIvQY6pgEK1c2yl7HaX7%2BALZ5%2FTZv7%2BtUJT5jdvkUa69Br7x15iv1BHWFQ4i3Jreb5vLJLE1EVDbj7SOLqV1TDhJaLuezyfb1Cpcm%2BW2fomspBvkNO6FKghscOwmGBqrw%2F7zDnS%2BP0tJR%2BYMM0MGAJucX%2F78Uh59hxWwpwlL87jZ2wqQ%2BgECGEgF2MmyKzriK90F0YXNySfrMKDwusALXnPLMIjTexJZJp%2Fx7h&X-Amz-Signature=65a5ef4fe1dcd4a567fb1e6ae09bb70066c30657d5a1212b7f34e3977c07b885&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466236R5K46%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T180848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJGMEQCICW4Y31QACbakHV4hseCYMBKGCDf0chRGAk0wxIxTU2bAiBncpoMKmUVGejACrRsy5PsNLXeKRaumRhfSN7DlA1M9ir%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIM%2FqLhbUwZGq4d%2FfZoKtwDCgXMFCDFj%2FxR5G3jmnZpTyIHOq4SW9AMWO%2BG0%2F6hmUHppzmjfBVMEy58k4Jn05Z6Js4dUrjgLxuCm9OjZmLS88H2LUoRJCOOLfz%2B3VMcZpUFknKtFyEWGztLPpf3LQxaOn%2Fbv4%2Bz%2Fo7g0UEfMsgPS5ycXaW48NGk1e%2F1R6Gx6T1kRwx%2Bx%2BKX1KdZgWZdaD3GYMWJYiMKJVtbtzX13cf%2FFRse0tNdyNvYBASYrmqNKY%2FAjucUrnLELQVedtNYiQeE3z6%2Bby8jjBJ89SpA9DgwolrgoMRBMC6Sxye4AMr3wywgLgEC2C7NmYeP%2BN0dSwYuk7TMIx4jK%2BmYaZHQ8iONCq2mTuYshXuLJgQSCptb9l%2BAJtsNhESJME4Phg0zQ5onaACSK0N8Ubg1FddtScpmHkgzceg%2BevvkWDSxRhLGVlCx6jE4dhhHI3efpJFVRTgTRtAaQ6QUwpqt1aZgW2ph6%2BBb8GRja54fiPk%2BE3Q67aYfv4Uc8gtaOcmxluV8eGl0HGrd%2BibRMgWUxi8HD7sKHcP%2FhKSSCO33dXq33PnGgwQxtMsYHGiH1kTZ8TT12fZSBN3zJRBvS3gsoxystvBwdE9in9XfbxAoE%2BoPGkzird%2Fc%2FZzdkoRAoHY%2BQygw%2BsDIvQY6pgEK1c2yl7HaX7%2BALZ5%2FTZv7%2BtUJT5jdvkUa69Br7x15iv1BHWFQ4i3Jreb5vLJLE1EVDbj7SOLqV1TDhJaLuezyfb1Cpcm%2BW2fomspBvkNO6FKghscOwmGBqrw%2F7zDnS%2BP0tJR%2BYMM0MGAJucX%2F78Uh59hxWwpwlL87jZ2wqQ%2BgECGEgF2MmyKzriK90F0YXNySfrMKDwusALXnPLMIjTexJZJp%2Fx7h&X-Amz-Signature=c38b1584ee956b234d8e5a8ba7ad78db22bb43c55230d5876a973d73de3172e1&X-Amz-SignedHeaders=host&x-id=GetObject)

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
