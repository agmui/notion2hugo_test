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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQECH347%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T140210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQCX5SbxZYK207iIwgzy34ma0%2FoOWmP1HgCIfm%2BuyMavGgIgHaMDzmZ4awMTyQd9jTgAxl4ZaWQSQYBQpxeU2F6Eo14q%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDLvYuWE9QEcqYJWCTCrcA15vd6WepJ5jhVlqX3XOVZxLzI2yJiEp64ZPODBAe%2BM%2BRajSZZc4Uj0opORvys7L2HFAuwtMgoWoqc2OtsJzfwpMMSjZvGAol0glFGSRpqbPM09yGHoS5bYcDGBeka45Pm%2BhifeiYJgDMULY1CGXCOHDFFTwS4POhZTqaVy9GK%2FViWufCDik6bbZvvftn9271tPiBEyiCouwmNvPGKwvp9%2FXuTF4%2FostorofeCK1Fm1MX4xLAtYw0z%2F%2FD8OpwsFuDCt8lLyb0N5BXMrpE1famHmdSdTwT9b2a9sS0sIHNB%2FP1qBGTCCeHWsl%2Fzlj%2FUv2MuIXGaYpmUcqw5tLhcAIU47POefaqA%2FUTCpENdEv%2Bwm38JHf5GmWhlmrLvfeLMYGH0Pf8utnMoPbVS2BQAf6PzoVdMGfiNif5gA4Q2kys5S2IHpUM4DXdu61twFEGPGpFO1YyZpvhIUd1I0ehuKZPy5A6nlSci1H3oyTItKfooHRgP6yYIQm058pVX0e0%2B9EsveTX9bzX6k3ae3%2FNes2glFGr5yK0SRUF%2FetM9HVNZUa3rD4wxYnj2kMOEShl%2Fe9N6sq%2FaTmxA4cYv6YwJBY1duKmsUi0qOvrbIiH2sVv29PBPp6S2nzHdFbkenTMPic9cIGOqUBxeeZaiTwq0m5u0AGLKBVv2%2F9%2FGx4FCygIA2UHOXyfOkO7UoKQ80G0JDFM4GZsGuJvlsvYMdQE%2F3MYpPhrRsLyNzE4%2BBY%2Bj14lXNhWwfce25CQO6RPA%2B1ibIHbxqyc39WEmSJYDIg4pCcRRRDfxBjkgfucpAjPFbVcoLwsabKvo7tjldswLmGyWdbRXt70qStnXO%2F%2BXNUD%2B9mZ%2Fnx3ivFdagJaUFr&X-Amz-Signature=0a80a1bddd1ad861676e739e306ffd61482c6c02eb072166bc91e70e83e1870f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQECH347%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T140210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQCX5SbxZYK207iIwgzy34ma0%2FoOWmP1HgCIfm%2BuyMavGgIgHaMDzmZ4awMTyQd9jTgAxl4ZaWQSQYBQpxeU2F6Eo14q%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDLvYuWE9QEcqYJWCTCrcA15vd6WepJ5jhVlqX3XOVZxLzI2yJiEp64ZPODBAe%2BM%2BRajSZZc4Uj0opORvys7L2HFAuwtMgoWoqc2OtsJzfwpMMSjZvGAol0glFGSRpqbPM09yGHoS5bYcDGBeka45Pm%2BhifeiYJgDMULY1CGXCOHDFFTwS4POhZTqaVy9GK%2FViWufCDik6bbZvvftn9271tPiBEyiCouwmNvPGKwvp9%2FXuTF4%2FostorofeCK1Fm1MX4xLAtYw0z%2F%2FD8OpwsFuDCt8lLyb0N5BXMrpE1famHmdSdTwT9b2a9sS0sIHNB%2FP1qBGTCCeHWsl%2Fzlj%2FUv2MuIXGaYpmUcqw5tLhcAIU47POefaqA%2FUTCpENdEv%2Bwm38JHf5GmWhlmrLvfeLMYGH0Pf8utnMoPbVS2BQAf6PzoVdMGfiNif5gA4Q2kys5S2IHpUM4DXdu61twFEGPGpFO1YyZpvhIUd1I0ehuKZPy5A6nlSci1H3oyTItKfooHRgP6yYIQm058pVX0e0%2B9EsveTX9bzX6k3ae3%2FNes2glFGr5yK0SRUF%2FetM9HVNZUa3rD4wxYnj2kMOEShl%2Fe9N6sq%2FaTmxA4cYv6YwJBY1duKmsUi0qOvrbIiH2sVv29PBPp6S2nzHdFbkenTMPic9cIGOqUBxeeZaiTwq0m5u0AGLKBVv2%2F9%2FGx4FCygIA2UHOXyfOkO7UoKQ80G0JDFM4GZsGuJvlsvYMdQE%2F3MYpPhrRsLyNzE4%2BBY%2Bj14lXNhWwfce25CQO6RPA%2B1ibIHbxqyc39WEmSJYDIg4pCcRRRDfxBjkgfucpAjPFbVcoLwsabKvo7tjldswLmGyWdbRXt70qStnXO%2F%2BXNUD%2B9mZ%2Fnx3ivFdagJaUFr&X-Amz-Signature=f4872b460831e3cdc4f4465d831cf981d18adc89f90d7913b856877b5a1d71c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
