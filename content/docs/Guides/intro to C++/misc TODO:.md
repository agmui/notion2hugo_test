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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THVRLZCJ%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T121434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHBcOyMvaFozhEyfRuIFBTOBVsjuu%2ByCBWxnDHSErdLzAiEAlbZO7Vpq%2B%2BKMN9Zw8bqqlEA6zAnfv0RYevAKrMHNO4EqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB6tURMLXufzG5hVDyrcAyqs5qNmZiSOyfcMaheBSEO7oTwpKmxXLx8RULR6SOFXlWtkPsQLfgUQ9e%2FxbXiPp%2FD52inyX%2BEnfFQ47T0mgd19TwKLTDS9NmwTKGm4ycsPJqEEtbNX4qzw23QZtNr16M31iWdT1YUsKegClxpTysvSfeHJK0hpAlhp0L2nc6Kpg9YztS%2FcqjJPXbF0fvIy%2BzJ6rJsUZnqQZtVOLUZ9%2F7NW3K1%2FgaNunzJ93lfiAbnl38kLON0ZH7D8N4Dm%2BJGvu6mQ5OlNSIafXeJChojpg38RGH4Dij7x7euM81C5tOBIn1l5CGX06HT49c0lLVEMS755eBKpsxyxHdIobkUlFfgLM8A6ay35IvGnNPc%2BQBu6LepFZ%2FuDYiITNoteXC5wGs6b98zttEvawF7%2FBZWqQsZurxWUauKfxu%2B%2Bl2qp6wCnblhcawv8KwvxJuxXvI27kZmDOUzYSPXjdBsSTgVfu9RTDurtbaiU1l97wWjAKHV%2FG2lB6uF0BJI41PISS1P7bBnrG3BEkm40y07URKB8oOUC3Kkn%2BeW%2BX4laERCqP%2BakpGW%2BtIbxVWUZWUfLviqTPn%2FX83Esb4wNdcngbS36YGZDfd9r%2FuZGi%2FTm0%2BLYL0EN%2Fb6Ja8KWuOZgBF7AMM7Byr4GOqUBGF2BXoJEwu%2BS6Tp4T2xJiYqQ1SRPSDHFJ%2FuD3I5xr4u1MlMXP6r7%2Be79CdzUWbJ3Vfeq9mDEgTAd%2FKXrQH667otgaI%2Fu9p0M%2BP5MjhnF0p2P2rGxoW8Zv7TwS6wvLUG9g0LibGHWJbrNfD08IZuqZStnDDxdVqjMBISVd5W9tzj2am3CrNhY8wOU60FaE0cZzsBrNA0R71P44f72i8tvkUHl9yLP&X-Amz-Signature=9c119223d5a5e5a131a56a2e46e4dff4a0e1342af445bd16d226b2cd8273e5ac&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THVRLZCJ%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T121434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHBcOyMvaFozhEyfRuIFBTOBVsjuu%2ByCBWxnDHSErdLzAiEAlbZO7Vpq%2B%2BKMN9Zw8bqqlEA6zAnfv0RYevAKrMHNO4EqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB6tURMLXufzG5hVDyrcAyqs5qNmZiSOyfcMaheBSEO7oTwpKmxXLx8RULR6SOFXlWtkPsQLfgUQ9e%2FxbXiPp%2FD52inyX%2BEnfFQ47T0mgd19TwKLTDS9NmwTKGm4ycsPJqEEtbNX4qzw23QZtNr16M31iWdT1YUsKegClxpTysvSfeHJK0hpAlhp0L2nc6Kpg9YztS%2FcqjJPXbF0fvIy%2BzJ6rJsUZnqQZtVOLUZ9%2F7NW3K1%2FgaNunzJ93lfiAbnl38kLON0ZH7D8N4Dm%2BJGvu6mQ5OlNSIafXeJChojpg38RGH4Dij7x7euM81C5tOBIn1l5CGX06HT49c0lLVEMS755eBKpsxyxHdIobkUlFfgLM8A6ay35IvGnNPc%2BQBu6LepFZ%2FuDYiITNoteXC5wGs6b98zttEvawF7%2FBZWqQsZurxWUauKfxu%2B%2Bl2qp6wCnblhcawv8KwvxJuxXvI27kZmDOUzYSPXjdBsSTgVfu9RTDurtbaiU1l97wWjAKHV%2FG2lB6uF0BJI41PISS1P7bBnrG3BEkm40y07URKB8oOUC3Kkn%2BeW%2BX4laERCqP%2BakpGW%2BtIbxVWUZWUfLviqTPn%2FX83Esb4wNdcngbS36YGZDfd9r%2FuZGi%2FTm0%2BLYL0EN%2Fb6Ja8KWuOZgBF7AMM7Byr4GOqUBGF2BXoJEwu%2BS6Tp4T2xJiYqQ1SRPSDHFJ%2FuD3I5xr4u1MlMXP6r7%2Be79CdzUWbJ3Vfeq9mDEgTAd%2FKXrQH667otgaI%2Fu9p0M%2BP5MjhnF0p2P2rGxoW8Zv7TwS6wvLUG9g0LibGHWJbrNfD08IZuqZStnDDxdVqjMBISVd5W9tzj2am3CrNhY8wOU60FaE0cZzsBrNA0R71P44f72i8tvkUHl9yLP&X-Amz-Signature=b2a77c8c0f6d5b4f54066c68579b840c52cc9e566ce03110d926c698bd8d9ec1&X-Amz-SignedHeaders=host&x-id=GetObject)

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
