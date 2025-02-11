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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRHRGWJ5%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T020932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCIB5qZhVPd6486QXq41cpxJP%2FTW%2B1nq5UAmSLZdvqlhgIgSO37wOU5NqUy7E1Fl3WD7fmVJrp3DsdRhcfinBUW49IqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPZ5ETvoNtFsnC9rBircA0L0UtB15AArdzjOWiWggMF8U5RltsJJsaabdyJqsUtZZlhF2CMdit2%2F%2Fpibm8i6Q%2BKM07ORMvrGvzFnEIoEGsYwnrdW5eA3F6wWDatZxsxceh7yNSJ%2Bxg1OoPh8IlLeQVHW5JWos%2FAQcetbw1Y2BOmGD2%2FdIRG%2FUgB1eDvAi9MtJ4Vj8v32%2BBVWSX%2Fr0CZMpCI7Pbk1GaG5OdAPoAuAULCw%2BpXhcxWnbfOjn20JeZezzNeO8YE4pza6IVCaH5FMKMJIV3woSck10oD7ggqyV3W%2BeTt8%2FkANzoZDfRDdNQnxIHTXi2cMcGQ0vk10o4B5qtdxK0ZNvt5KSay0a7gccySw5sRftFl6ZJjZqJMV%2Bx6RyeRBLDnWtGV4N83oa%2BdJn7lMnFNfBA0DEs3izZZHej%2FVxbt3i1LQemxsuy86Pe59B7zIcZcLfUFwQvfl7pdxZQpMSITmdQFi6nIfDV5bj1wOarmpyWbWv%2B1Dta9mNPl5HUGYnD7y4x6bmwvLyyKJExtA1gyVQXtPfW65jE8Dgu2Ox0n3fCKypTT1NISA6gmi1wFLBTUcwWbRNJTFsn30c2%2B6siqPX9hfesLqwHQnJ42opRJjbFwCQ%2FEHBLJR1dPEEGcxvDJPQBE5zYvKMP%2Fbqr0GOqUBvsyKbVWTsKpb0UQH7HgRa81MB0zC2AIR8qtMFMZ1M7pcWbW5ldNREezPR%2Bp%2Bkab94q6O3zIIeZfD2fTUhds3Z82bEWH6%2BwzKzIfMDuThBhBMY3ElVHZFXM3GdrVtaTg45HoXJyQ%2BuMv17SDfNUdomIVmxjOU8q4ssTvxxIcgdKwpLWGoOJJ77MO0alz1nVtnwME5Gl3iK%2Bd3%2FCD9t%2FYOI4s%2FRSM9&X-Amz-Signature=c525f727d2fc0ba57ce12b3eaff90454f265755f081a90737b05dff5d89a1412&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRHRGWJ5%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T020932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCIB5qZhVPd6486QXq41cpxJP%2FTW%2B1nq5UAmSLZdvqlhgIgSO37wOU5NqUy7E1Fl3WD7fmVJrp3DsdRhcfinBUW49IqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPZ5ETvoNtFsnC9rBircA0L0UtB15AArdzjOWiWggMF8U5RltsJJsaabdyJqsUtZZlhF2CMdit2%2F%2Fpibm8i6Q%2BKM07ORMvrGvzFnEIoEGsYwnrdW5eA3F6wWDatZxsxceh7yNSJ%2Bxg1OoPh8IlLeQVHW5JWos%2FAQcetbw1Y2BOmGD2%2FdIRG%2FUgB1eDvAi9MtJ4Vj8v32%2BBVWSX%2Fr0CZMpCI7Pbk1GaG5OdAPoAuAULCw%2BpXhcxWnbfOjn20JeZezzNeO8YE4pza6IVCaH5FMKMJIV3woSck10oD7ggqyV3W%2BeTt8%2FkANzoZDfRDdNQnxIHTXi2cMcGQ0vk10o4B5qtdxK0ZNvt5KSay0a7gccySw5sRftFl6ZJjZqJMV%2Bx6RyeRBLDnWtGV4N83oa%2BdJn7lMnFNfBA0DEs3izZZHej%2FVxbt3i1LQemxsuy86Pe59B7zIcZcLfUFwQvfl7pdxZQpMSITmdQFi6nIfDV5bj1wOarmpyWbWv%2B1Dta9mNPl5HUGYnD7y4x6bmwvLyyKJExtA1gyVQXtPfW65jE8Dgu2Ox0n3fCKypTT1NISA6gmi1wFLBTUcwWbRNJTFsn30c2%2B6siqPX9hfesLqwHQnJ42opRJjbFwCQ%2FEHBLJR1dPEEGcxvDJPQBE5zYvKMP%2Fbqr0GOqUBvsyKbVWTsKpb0UQH7HgRa81MB0zC2AIR8qtMFMZ1M7pcWbW5ldNREezPR%2Bp%2Bkab94q6O3zIIeZfD2fTUhds3Z82bEWH6%2BwzKzIfMDuThBhBMY3ElVHZFXM3GdrVtaTg45HoXJyQ%2BuMv17SDfNUdomIVmxjOU8q4ssTvxxIcgdKwpLWGoOJJ77MO0alz1nVtnwME5Gl3iK%2Bd3%2FCD9t%2FYOI4s%2FRSM9&X-Amz-Signature=26daf390476587befa59bb788244eab75ba876517beb6c49b059dbf760a96272&X-Amz-SignedHeaders=host&x-id=GetObject)

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
