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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZPHM46A%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T150854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIQDwdstnIhkRsj%2BZdOtTJn7lZNhjVq6kCRwyjyagRuCXFQIgK6Qn9834qUvyfkunkJcImlDy3kLcf0OW%2B3gp96NFAqIqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPejpFXcNNTRcxWujyrcA74h9e5slW7MD1Xiz4fzajIfR%2FihgN7pmnBdq81yN1MrDCT3aItu7TMd3aJK6Zw9X3d%2FLhgkcCEpO4629WeNCkdPewURIXUxt88SXk8RscjSDu5Da%2B7jr44xbIbl6X8Cfe%2BBWQxr0SsiaSlN3%2BuSCjXCXpdKkd7u8IUD%2BdBXHw0X1ccSH0Kl93Hr5jTPFdpm4C%2BB5TsAL2jSwTxi0oydo9g8uA5epw5HKCpKg1IH9LM7nRr60%2B6skA1UZI3blccBnkMR2ZWrqvPpJWDrRPH1P3LgLhsJKkcw6wZa1crERWGEYTflp4cHhHGBcffED4nxyXhKnjtmaPpR9gCzfpLZRyf%2FPA1H1NwwSRnyYs%2FXNbW3Tfj0UohpDc9fSuLCzKIR2ftTQnmC372QGm5HEBUZF2%2BjgVlepxfXeiC22EbGHwEsVFZSkuPyQJOrEDr45%2FDuiurtu1jf%2BXAVJheMoFjwhABlz2Y657zwPIyDgL0wzWGSx%2Bv3tDZPWF%2FNhsJrTxWiCSR3a8LCKB8wmiPSUfERUBs9hRCWx5pBSClpFCgV9ARny7SfbDx2p4XpCPAKjaJGGAPYYsIPgnbSvScTGa%2B%2FYqHyl4UYMJb2CpbpKCXcOp333nhR0hyXzeUqpA0%2FMMrsr78GOqUBP%2FkA0LjqIoVZnaJCXR42SwbBMvbPUN9%2BMXyY7%2BlmHpKR9sFZKge0Hgs68m1AtNmkrJRl%2BusgLZ4kEBtpiGTDC%2Ffxr5Yet4T%2BfH%2FYi%2Bcyrq949pax9H7WO1%2BKUErqH0e1u3KsLheozwvlXMEIKCYBXroki40YpOlr877maw0Tio2ocjv5VdON33n9h3Fan4xSR8YGp77%2BRSUGXT7KFi%2BChlFEFv%2F4&X-Amz-Signature=a84000d058f696c5320bd45104925fbfe89158eb5847914292b68f1d82ea783f&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZPHM46A%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T150854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIQDwdstnIhkRsj%2BZdOtTJn7lZNhjVq6kCRwyjyagRuCXFQIgK6Qn9834qUvyfkunkJcImlDy3kLcf0OW%2B3gp96NFAqIqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPejpFXcNNTRcxWujyrcA74h9e5slW7MD1Xiz4fzajIfR%2FihgN7pmnBdq81yN1MrDCT3aItu7TMd3aJK6Zw9X3d%2FLhgkcCEpO4629WeNCkdPewURIXUxt88SXk8RscjSDu5Da%2B7jr44xbIbl6X8Cfe%2BBWQxr0SsiaSlN3%2BuSCjXCXpdKkd7u8IUD%2BdBXHw0X1ccSH0Kl93Hr5jTPFdpm4C%2BB5TsAL2jSwTxi0oydo9g8uA5epw5HKCpKg1IH9LM7nRr60%2B6skA1UZI3blccBnkMR2ZWrqvPpJWDrRPH1P3LgLhsJKkcw6wZa1crERWGEYTflp4cHhHGBcffED4nxyXhKnjtmaPpR9gCzfpLZRyf%2FPA1H1NwwSRnyYs%2FXNbW3Tfj0UohpDc9fSuLCzKIR2ftTQnmC372QGm5HEBUZF2%2BjgVlepxfXeiC22EbGHwEsVFZSkuPyQJOrEDr45%2FDuiurtu1jf%2BXAVJheMoFjwhABlz2Y657zwPIyDgL0wzWGSx%2Bv3tDZPWF%2FNhsJrTxWiCSR3a8LCKB8wmiPSUfERUBs9hRCWx5pBSClpFCgV9ARny7SfbDx2p4XpCPAKjaJGGAPYYsIPgnbSvScTGa%2B%2FYqHyl4UYMJb2CpbpKCXcOp333nhR0hyXzeUqpA0%2FMMrsr78GOqUBP%2FkA0LjqIoVZnaJCXR42SwbBMvbPUN9%2BMXyY7%2BlmHpKR9sFZKge0Hgs68m1AtNmkrJRl%2BusgLZ4kEBtpiGTDC%2Ffxr5Yet4T%2BfH%2FYi%2Bcyrq949pax9H7WO1%2BKUErqH0e1u3KsLheozwvlXMEIKCYBXroki40YpOlr877maw0Tio2ocjv5VdON33n9h3Fan4xSR8YGp77%2BRSUGXT7KFi%2BChlFEFv%2F4&X-Amz-Signature=061062a5aa7ed06ea28e65d7b91a6a03c49c34013ea0b414058e5ec40574d42b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
