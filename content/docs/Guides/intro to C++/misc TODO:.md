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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6IMDKEL%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T170208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQCTIo9%2FeXq0gkygOBErKwHc5ritfEMd9wA2JZNrkJosWgIgX2K2Ro6oCgAjB5RvJomj%2B4B%2BwYb9qnHPcPxhkKolSl0qiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL2SRP7NcTRGIUrXyircA611QXdSwzbur9fXWwB8lsJG8U0%2Bj1%2Bn03dV%2BaBcL7Yc8SFF86NWBDIYyBsHYE%2BfFFfCuwmDf3EGkXU0JIHpTsv%2B6%2FAGDOItQCUaj%2F1DLoZoZPOmUspPLA6B6oG6xpJYbnaqC0%2F2V6A5c64CW4RZL3%2BO46DTemerYHXaeEV5WzveL%2FkSZ5f8BV51JAODYFpylfs0bx0iCuAAVdbBiSwVNRxQmjVodAIQGAKZzhE1qEvdgFe%2FMBd3f0Y5kJD1tDB0ehUXOeFxmXKsw4PFFbdUAb95cfr%2BuwmV55BM56TNFTKc3DJzV6CPjHySF8kjufOej2t6uYEkQ0ibvV3kfdVQ3mHrsHfQJLYFI3zW4ZilQIAIC0KOYkPWQyrLmB8W4f15wtWmTfZjLAdlTi13lZF%2Bm2Ld791XJiKSkbFRR4m3nAc8%2FTuN1bvOSlCwLTsSh%2BaoxRdnmk2mIAF8GtMaLkUGdPjGiXo6F%2FdZwHQhQgTQwcuigpEmk0Mp6gFuFGom%2ByUTtkt%2FqaRxnpJcuPSgr38Lt2H%2BU62AkCDVNxSowbD5zjA5RO8RLzMTNZiYvDDaG4klzEHkee9hhB72YrP9lTosv7%2BCW2qlF%2B7ai1qqZqX6SSJWjiNB2%2F6Q2xyd5tR7MJmHnb0GOqUBTIkI%2BaZ1OjQ%2FzxeppZrqkMA2%2BviZB3ZzoaNypaW0cfZ4jRVV8RFJMzsfCUdVwKoOgSXVSVPQsu4jET5ht0ucPw0pK8RoWstVm1TIdssw58izr2f9EB6G18kJk%2BP3JtD3wHRDnfsYGwWZWw4liihb9ObY4gDQgvZ8pRz0b%2F0T8QC9AQj%2FCmYC%2B5gsdjnNfo3Z0qsws6ndDuVUFIJUfBW0UkpJ7Ovl&X-Amz-Signature=e604ce1c13c7cfc9abddb2a88fb36c625fae2a02fb57462104d56ee9dfe0da38&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6IMDKEL%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T170208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQCTIo9%2FeXq0gkygOBErKwHc5ritfEMd9wA2JZNrkJosWgIgX2K2Ro6oCgAjB5RvJomj%2B4B%2BwYb9qnHPcPxhkKolSl0qiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL2SRP7NcTRGIUrXyircA611QXdSwzbur9fXWwB8lsJG8U0%2Bj1%2Bn03dV%2BaBcL7Yc8SFF86NWBDIYyBsHYE%2BfFFfCuwmDf3EGkXU0JIHpTsv%2B6%2FAGDOItQCUaj%2F1DLoZoZPOmUspPLA6B6oG6xpJYbnaqC0%2F2V6A5c64CW4RZL3%2BO46DTemerYHXaeEV5WzveL%2FkSZ5f8BV51JAODYFpylfs0bx0iCuAAVdbBiSwVNRxQmjVodAIQGAKZzhE1qEvdgFe%2FMBd3f0Y5kJD1tDB0ehUXOeFxmXKsw4PFFbdUAb95cfr%2BuwmV55BM56TNFTKc3DJzV6CPjHySF8kjufOej2t6uYEkQ0ibvV3kfdVQ3mHrsHfQJLYFI3zW4ZilQIAIC0KOYkPWQyrLmB8W4f15wtWmTfZjLAdlTi13lZF%2Bm2Ld791XJiKSkbFRR4m3nAc8%2FTuN1bvOSlCwLTsSh%2BaoxRdnmk2mIAF8GtMaLkUGdPjGiXo6F%2FdZwHQhQgTQwcuigpEmk0Mp6gFuFGom%2ByUTtkt%2FqaRxnpJcuPSgr38Lt2H%2BU62AkCDVNxSowbD5zjA5RO8RLzMTNZiYvDDaG4klzEHkee9hhB72YrP9lTosv7%2BCW2qlF%2B7ai1qqZqX6SSJWjiNB2%2F6Q2xyd5tR7MJmHnb0GOqUBTIkI%2BaZ1OjQ%2FzxeppZrqkMA2%2BviZB3ZzoaNypaW0cfZ4jRVV8RFJMzsfCUdVwKoOgSXVSVPQsu4jET5ht0ucPw0pK8RoWstVm1TIdssw58izr2f9EB6G18kJk%2BP3JtD3wHRDnfsYGwWZWw4liihb9ObY4gDQgvZ8pRz0b%2F0T8QC9AQj%2FCmYC%2B5gsdjnNfo3Z0qsws6ndDuVUFIJUfBW0UkpJ7Ovl&X-Amz-Signature=c933478da3baa63027c5c7491db47cfc1c6df6e8c6215d1b8215ca322e103eb2&X-Amz-SignedHeaders=host&x-id=GetObject)

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
