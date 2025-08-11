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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2DHGQ3C%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T081455Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCIVuo%2FwIg9lOJHKEPck6Zygv8d%2F8bQZ%2FxvmnK03cI5NQIgJOivitE%2FkS4DLBDgr11jGtrAfwZPpupQ%2BgWN4n%2B4k9kqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPOG99JroeM86tvikircA9E0BeqEBTTYk2aJp2DEXLXWSQRwjKiGaR5SRE6oB9G8k0yWVB%2BaSNSQ2qK74iyDfFQtRLNNFWs7E4fVIe%2FEbKSTcDlmYEYzsxsVLQP3xShm2bq6TY9ciOhnmlOTzmFPzHtT7Rt2Z3NF4iUHO4Vq%2FutrztIMLNJ2b2fgHk3vJms0wi2uBdV6FMSRcy17ypx%2FnczePDT5xC6sQjxVs0%2BIJjY1B8q2Qy9jWpLUXSXTvTkLgNSsjoWzxL2m%2BgjRTPpJanJvLs0woMDTGrh1Bp2AqNccsJDSDTAw4BEGZejcZ38I%2BRDzAa3RAJE8PZDHWTO9PxW%2FXE1etYbHNvA4EBrub%2BqeWgqDPIvKa4kTDkPOCCZ%2F2Xe3%2B1iE0qsizOteT1EzqOjyONEVU3NCYvl8cUU18ujDbn6Ui440XHSb2t41SyxFbalrBYa%2FhD2%2BF4%2FyxHxF2HEGNY6XqSdLfSUFPcLPdrxUyTbVpW72H8uFuOijtoEaxJPfG3ECwZP7ZMtebyvjTTBySuKJWGTNzdSIcNKB05M8Td13oklHhQFFsuyw7Njk0voKVBhAcekQxMkd0NyMH3RXQwk1CceKal0FLjtMyodV2jD70MWlTkUl8fcO2PgSJTu8o2OCe%2B9G9yENMO6s5sQGOqUBU45loWimSpdqKrvCGlFqR3BMBGCdKKwZeAHz7vrzLWgiXt1Rfu2Uai%2Fa4rlQs8qPDbrCeeAz5eMnHLeh0SSAJOYGMTa31JdHHGyBjkf2ZVYs4jT3lOkT24jc2cHxzgnTTjlCtkFFuJO%2BYR9jNg%2B%2BGfbt2Rt3TFvkoP%2FWAE8RCeiCZN8b3EDT5nax8nYWeCdNqrsVdo%2FMZxgEZXkQhv94E42bqMrA&X-Amz-Signature=e8d2cc03dc80dc1a065557ae1b5d60d1c9b8a0b4b4ede042914f28a64d1bac7a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2DHGQ3C%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T081455Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCIVuo%2FwIg9lOJHKEPck6Zygv8d%2F8bQZ%2FxvmnK03cI5NQIgJOivitE%2FkS4DLBDgr11jGtrAfwZPpupQ%2BgWN4n%2B4k9kqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPOG99JroeM86tvikircA9E0BeqEBTTYk2aJp2DEXLXWSQRwjKiGaR5SRE6oB9G8k0yWVB%2BaSNSQ2qK74iyDfFQtRLNNFWs7E4fVIe%2FEbKSTcDlmYEYzsxsVLQP3xShm2bq6TY9ciOhnmlOTzmFPzHtT7Rt2Z3NF4iUHO4Vq%2FutrztIMLNJ2b2fgHk3vJms0wi2uBdV6FMSRcy17ypx%2FnczePDT5xC6sQjxVs0%2BIJjY1B8q2Qy9jWpLUXSXTvTkLgNSsjoWzxL2m%2BgjRTPpJanJvLs0woMDTGrh1Bp2AqNccsJDSDTAw4BEGZejcZ38I%2BRDzAa3RAJE8PZDHWTO9PxW%2FXE1etYbHNvA4EBrub%2BqeWgqDPIvKa4kTDkPOCCZ%2F2Xe3%2B1iE0qsizOteT1EzqOjyONEVU3NCYvl8cUU18ujDbn6Ui440XHSb2t41SyxFbalrBYa%2FhD2%2BF4%2FyxHxF2HEGNY6XqSdLfSUFPcLPdrxUyTbVpW72H8uFuOijtoEaxJPfG3ECwZP7ZMtebyvjTTBySuKJWGTNzdSIcNKB05M8Td13oklHhQFFsuyw7Njk0voKVBhAcekQxMkd0NyMH3RXQwk1CceKal0FLjtMyodV2jD70MWlTkUl8fcO2PgSJTu8o2OCe%2B9G9yENMO6s5sQGOqUBU45loWimSpdqKrvCGlFqR3BMBGCdKKwZeAHz7vrzLWgiXt1Rfu2Uai%2Fa4rlQs8qPDbrCeeAz5eMnHLeh0SSAJOYGMTa31JdHHGyBjkf2ZVYs4jT3lOkT24jc2cHxzgnTTjlCtkFFuJO%2BYR9jNg%2B%2BGfbt2Rt3TFvkoP%2FWAE8RCeiCZN8b3EDT5nax8nYWeCdNqrsVdo%2FMZxgEZXkQhv94E42bqMrA&X-Amz-Signature=8bf62689594fc0fed849ff7c19f22c13659202fa740720d39961bbd4ccc6a8fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
