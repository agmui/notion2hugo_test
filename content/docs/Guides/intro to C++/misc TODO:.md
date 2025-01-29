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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFN3GDPR%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T040943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQDAwFwkjdy3qA9cxT6N3lKxCuxv3Lv5hzRL9pnPcLhjCgIhAMKW5dRAcWCSlX7GB7jS%2FnNuM4tTuvhLiD%2FfcckzXhUpKogECIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igybvv6mPQYDdnHlC7oq3AP6wWb40J6934w6owyvR0Mm91mIAaO7EbuJoXIyVZjQwCLuatT4mboBoGU2mD3nrJnjhnvZwf509VlYinvFzazxKPT7XyxvIZoLscJ7IpJ0Qwbf8QtiFayY3cKqFzl8OMsCpbuTwMmI0G5qJFjXzrAh%2F48v0d%2Ft8Bceksa3F9jsrf7Tu2%2BYZuo4agxegmhSqsiZNa0Du4TI%2FXTlpBeBLGyq0hNb%2FEa7cjp%2F3z%2BNZALISElcurxoppLD%2Fwd%2FjKrWcRuRb3DePW8Xf59jM6eiqGDawYCJfzwKRwzX7jL6xErPyPtb18x0r1uzECuEumV8OaeK8ehJ3z5v2iDgFYongH6Ypawd1VVooNSZs8BUznpDq43PvPQladv2Ku8ZTkUBpegjJXG%2BEx%2FElduXaC7%2FB5LiosdbBOpMg0IJmoKzC1gJnhtce93GFgoIQieRASyDvtjD%2FpqeMub7VNcixKAV6jv1TM5iMJU21kA2erHeub57jNFVPlqILeNxCdV%2FgMOyrNmlvuLGEfxNvhvgpVZEiaKqDcvFBTdHeoy0HHNAFl8KxyYHGGXCU0qQa5w%2B87%2FftR8EyEV2rPvObNkhXtcp0vdJE%2BTcComVS1RzFKxgNKPime4uUmIGYXDYqrDT1DC0vea8BjqkAYuQv1uRZ%2Bxy8b%2BXZzpSF%2FKXSmGBvvnF%2B7zBoNME%2FggKdGAeyBmm35FmvXcSgDNGNaPeZY6O1d0CtkbQLBsm4jv5XwU5woCsAW9bY9M8aho2gPiELti2hnc%2Bbg%2BdgkCdIn0Fbn30MvNW9zyp%2FWxePHpDQDVSl7REThQ5eMIYRm3o566Uwck4KYuAjFwt26tvvnU40TYt2vUuCY%2B%2BmME8QddS5bas&X-Amz-Signature=17b0cb3e6f83923cb5e45dfe033593ce90ec28834f73410b2117756e49ef4109&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFN3GDPR%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T040943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQDAwFwkjdy3qA9cxT6N3lKxCuxv3Lv5hzRL9pnPcLhjCgIhAMKW5dRAcWCSlX7GB7jS%2FnNuM4tTuvhLiD%2FfcckzXhUpKogECIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igybvv6mPQYDdnHlC7oq3AP6wWb40J6934w6owyvR0Mm91mIAaO7EbuJoXIyVZjQwCLuatT4mboBoGU2mD3nrJnjhnvZwf509VlYinvFzazxKPT7XyxvIZoLscJ7IpJ0Qwbf8QtiFayY3cKqFzl8OMsCpbuTwMmI0G5qJFjXzrAh%2F48v0d%2Ft8Bceksa3F9jsrf7Tu2%2BYZuo4agxegmhSqsiZNa0Du4TI%2FXTlpBeBLGyq0hNb%2FEa7cjp%2F3z%2BNZALISElcurxoppLD%2Fwd%2FjKrWcRuRb3DePW8Xf59jM6eiqGDawYCJfzwKRwzX7jL6xErPyPtb18x0r1uzECuEumV8OaeK8ehJ3z5v2iDgFYongH6Ypawd1VVooNSZs8BUznpDq43PvPQladv2Ku8ZTkUBpegjJXG%2BEx%2FElduXaC7%2FB5LiosdbBOpMg0IJmoKzC1gJnhtce93GFgoIQieRASyDvtjD%2FpqeMub7VNcixKAV6jv1TM5iMJU21kA2erHeub57jNFVPlqILeNxCdV%2FgMOyrNmlvuLGEfxNvhvgpVZEiaKqDcvFBTdHeoy0HHNAFl8KxyYHGGXCU0qQa5w%2B87%2FftR8EyEV2rPvObNkhXtcp0vdJE%2BTcComVS1RzFKxgNKPime4uUmIGYXDYqrDT1DC0vea8BjqkAYuQv1uRZ%2Bxy8b%2BXZzpSF%2FKXSmGBvvnF%2B7zBoNME%2FggKdGAeyBmm35FmvXcSgDNGNaPeZY6O1d0CtkbQLBsm4jv5XwU5woCsAW9bY9M8aho2gPiELti2hnc%2Bbg%2BdgkCdIn0Fbn30MvNW9zyp%2FWxePHpDQDVSl7REThQ5eMIYRm3o566Uwck4KYuAjFwt26tvvnU40TYt2vUuCY%2B%2BmME8QddS5bas&X-Amz-Signature=58c377c030196658d21c87f33331f87c0b75c0b4d7dbf4495ec0c1608f1507b4&X-Amz-SignedHeaders=host&x-id=GetObject)

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
