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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XF65JD4%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T080937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC7eYqBo54A%2FMQpkBVKgKFnD8SiXGLQtCjWa6qPN4yOSgIgW5WkLZG2pNAiOOHPpcCnAmFHnpSTXNDkhZRjsS5RAwgqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJd%2Bzp46gF3HqWvuoyrcA07M8THYhlLhAw9z%2BwPRhAi7NfWslNhri0Kh2SbI7Ts92GlVnxtRYi8ULdCXgf4oPy4srCGUiJV6mZDRaesOnNQZ27lxbNadGndu8t8Zz6nr8aIy8M3QVRJl%2FjVqjlAckygkfeQmb4czxTDVW4FNRlu5H%2F5YYL0zv%2Fam0rahVHYRJPFeFYlojzPj8hQgdprhf1h2Qfi2cNsZ%2F5uFdozKctl%2F%2Fd42H%2BnMO1UCrB9%2FrHinaJlkXX%2BSZFOjafTAVJUTL6tjm4UBFE3fW5A%2F8UmVbnyb0n9fcyPbHxfe5VK%2FNm86rp8tk60mNO9y9ODscIdmXzA%2Bqlk1htn8vNRkqT81ks8C1IZPF3OErSUUts2qBw2DBj4yEuRJj1AVU1TFLzNijqU8M4055%2BAaS%2BpkDLdttxCg6mM%2BX9GVTSIbLQZMYTviivcC2fubLekDseF6SgeiIJWrwg9s5MiboZw%2BWMkIAhbk1Ao3JcASvSVEVwiSfbyN2zgKm6ymrZazkErOpwVuQwtCFGCAhBn8yqaW0RGlKlApdMLQ%2FBuIcLyIk24LGHt%2FEGG2R7R0UHd%2FfmX7AIoCslsyDHeCzLX2FTDz%2BzHuDKDGkBycuLPe2Sz2GjgrEMpTcvyZDYE4%2F8QbhlVfMIX8jMAGOqUBZI3A%2BSjpgWw1WO6RUAib3w84b%2Bib0JQH0fpQs6RW2%2FIj6uZxoagD0qEPEkYQ8%2B2zQyuESiSovWGiO7iybjuFL7NMnTsQaltu6yP93pcl67Xw5pnNiKqWqMUiVCPhADRKXmtJBF06zvCCWKeUtkZRvGo8rWdTuFrYTv5NHIhkVzxSa%2BfxMQNg5d0dRUTtqiX%2B1OFxPbI0xsfapDXKc%2F7OKPMmTy9%2F&X-Amz-Signature=f3e1a408239d7370003c4512f2e3ba33aa1e7a59b89b2a1af254d296bcef1e1b&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XF65JD4%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T080937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC7eYqBo54A%2FMQpkBVKgKFnD8SiXGLQtCjWa6qPN4yOSgIgW5WkLZG2pNAiOOHPpcCnAmFHnpSTXNDkhZRjsS5RAwgqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJd%2Bzp46gF3HqWvuoyrcA07M8THYhlLhAw9z%2BwPRhAi7NfWslNhri0Kh2SbI7Ts92GlVnxtRYi8ULdCXgf4oPy4srCGUiJV6mZDRaesOnNQZ27lxbNadGndu8t8Zz6nr8aIy8M3QVRJl%2FjVqjlAckygkfeQmb4czxTDVW4FNRlu5H%2F5YYL0zv%2Fam0rahVHYRJPFeFYlojzPj8hQgdprhf1h2Qfi2cNsZ%2F5uFdozKctl%2F%2Fd42H%2BnMO1UCrB9%2FrHinaJlkXX%2BSZFOjafTAVJUTL6tjm4UBFE3fW5A%2F8UmVbnyb0n9fcyPbHxfe5VK%2FNm86rp8tk60mNO9y9ODscIdmXzA%2Bqlk1htn8vNRkqT81ks8C1IZPF3OErSUUts2qBw2DBj4yEuRJj1AVU1TFLzNijqU8M4055%2BAaS%2BpkDLdttxCg6mM%2BX9GVTSIbLQZMYTviivcC2fubLekDseF6SgeiIJWrwg9s5MiboZw%2BWMkIAhbk1Ao3JcASvSVEVwiSfbyN2zgKm6ymrZazkErOpwVuQwtCFGCAhBn8yqaW0RGlKlApdMLQ%2FBuIcLyIk24LGHt%2FEGG2R7R0UHd%2FfmX7AIoCslsyDHeCzLX2FTDz%2BzHuDKDGkBycuLPe2Sz2GjgrEMpTcvyZDYE4%2F8QbhlVfMIX8jMAGOqUBZI3A%2BSjpgWw1WO6RUAib3w84b%2Bib0JQH0fpQs6RW2%2FIj6uZxoagD0qEPEkYQ8%2B2zQyuESiSovWGiO7iybjuFL7NMnTsQaltu6yP93pcl67Xw5pnNiKqWqMUiVCPhADRKXmtJBF06zvCCWKeUtkZRvGo8rWdTuFrYTv5NHIhkVzxSa%2BfxMQNg5d0dRUTtqiX%2B1OFxPbI0xsfapDXKc%2F7OKPMmTy9%2F&X-Amz-Signature=27e9776092dc04630a1494fc005f759a56eaca9867b60d7a38ed0cf8b481e09f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
