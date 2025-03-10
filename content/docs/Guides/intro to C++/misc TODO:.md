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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBFL5BRG%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T121443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIGUpypurt9O0EpQednGi8YZPt46SarSqfZGqcHkTgXybAiEA6KOsq4FCT1FtiG2GeneSof7hR4WMZoI3rvPEeFv7f1cqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDECe1HQcM8cc38YG0ircA7gnHOa3gNOHJv1bcFMv%2FjGVtvP6s%2BK%2B%2BWSxlHndKMcbUBs%2BO3ofTWdCWOHB9OuDuKaedxfx%2BDXyChxLsLyZ8xnsM2BNlIXML1ecR1fyljdFFEIkpRpHcE5gjTVPDJiKMZu44EW1E3Pb2e8vrjJj%2B2D%2BSpGsSjIJK9REUATl7mZRStcGxqswjZU2xglwMbk8ebYKcalxiSb8myPIJhJnFeb7OJdYkVoyhnqs4j6oNqNHyw8duOaUflDhN2GQ0EgJIaHYl3PJjMSRzlxgBVC0%2FTShOPAU8c2tKMCxfBi9qVG3dEm433Hs%2BoQZFMglpCvroGmtlzC%2BJaNiwdzm9f0PBYd1gX%2BzmSaQDxoOnhdNc%2BR9Z0l1lk10HcckX5eF8yQE8311ZGPZHIQJ1ueySrJ2iRkimnHPm6fAjPblDcpkLMzUR2Ph5p4PoqFhKiSkoJRAHvOuSY5MEl3X7iz1tvA0q3i21Uv4bOlvWybpn%2Bvdv2%2F2%2FHemxX7WYymdLWAgf%2F%2BJri%2BtUhbBtzmVFCxPWBETEjnwq4WVKWBd7UhuH7jotpoW77kqEtTegClfd6dlPKGHMKcie%2BVbny2SwIB03PpFqWWeo%2FRu6dFvuxqYx603P7um9oppg4M8jAl113eSMMGpu74GOqUBOvfw2JWQb0vOrSSCAMenTcJuI0aNNtakaPNrlprbiN6zHZxrhSY2uggKYqTinBrTUi9M7a1KcZSsEDOA1IXOJmTaKAQth%2B5NVaVllPUCthY3TT80%2BQrcPJGDopKyYNhCj6Zq9%2FJ5EdLRBymH0j5%2BMkv9j%2FfjnFmsG8%2BJzBtbqWEF7Vhm9QccKp%2BQwPgXuMnxOhU41tS%2F20uQmAJ7gB4oDwlSRZPR&X-Amz-Signature=15892b2724ff5a8274f42a5011b7730d3165d82698abd7ebe4d4cc91527cda24&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBFL5BRG%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T121443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIGUpypurt9O0EpQednGi8YZPt46SarSqfZGqcHkTgXybAiEA6KOsq4FCT1FtiG2GeneSof7hR4WMZoI3rvPEeFv7f1cqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDECe1HQcM8cc38YG0ircA7gnHOa3gNOHJv1bcFMv%2FjGVtvP6s%2BK%2B%2BWSxlHndKMcbUBs%2BO3ofTWdCWOHB9OuDuKaedxfx%2BDXyChxLsLyZ8xnsM2BNlIXML1ecR1fyljdFFEIkpRpHcE5gjTVPDJiKMZu44EW1E3Pb2e8vrjJj%2B2D%2BSpGsSjIJK9REUATl7mZRStcGxqswjZU2xglwMbk8ebYKcalxiSb8myPIJhJnFeb7OJdYkVoyhnqs4j6oNqNHyw8duOaUflDhN2GQ0EgJIaHYl3PJjMSRzlxgBVC0%2FTShOPAU8c2tKMCxfBi9qVG3dEm433Hs%2BoQZFMglpCvroGmtlzC%2BJaNiwdzm9f0PBYd1gX%2BzmSaQDxoOnhdNc%2BR9Z0l1lk10HcckX5eF8yQE8311ZGPZHIQJ1ueySrJ2iRkimnHPm6fAjPblDcpkLMzUR2Ph5p4PoqFhKiSkoJRAHvOuSY5MEl3X7iz1tvA0q3i21Uv4bOlvWybpn%2Bvdv2%2F2%2FHemxX7WYymdLWAgf%2F%2BJri%2BtUhbBtzmVFCxPWBETEjnwq4WVKWBd7UhuH7jotpoW77kqEtTegClfd6dlPKGHMKcie%2BVbny2SwIB03PpFqWWeo%2FRu6dFvuxqYx603P7um9oppg4M8jAl113eSMMGpu74GOqUBOvfw2JWQb0vOrSSCAMenTcJuI0aNNtakaPNrlprbiN6zHZxrhSY2uggKYqTinBrTUi9M7a1KcZSsEDOA1IXOJmTaKAQth%2B5NVaVllPUCthY3TT80%2BQrcPJGDopKyYNhCj6Zq9%2FJ5EdLRBymH0j5%2BMkv9j%2FfjnFmsG8%2BJzBtbqWEF7Vhm9QccKp%2BQwPgXuMnxOhU41tS%2F20uQmAJ7gB4oDwlSRZPR&X-Amz-Signature=30da59a04a24598168ef65e7105794faa7edc339c0933e13434cd67fcaf33355&X-Amz-SignedHeaders=host&x-id=GetObject)

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
