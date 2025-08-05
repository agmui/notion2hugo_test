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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662T4XBZ2V%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T170921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQD84SHDjX%2BhWHBOLZRO6JHHKzhdpF58g4sixC3SmShOVwIgcVnuq2PqrKdnmhsVm03YGrArk%2FprcTSPjnh2YsR0uYwq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDH6Vb0deDkoVpn%2FFWSrcA1I5avJxgnJw3xKG%2Bv415rBBDP4FUqkB0YenHdaSy1YqPZiXEUyA2kVo3jFC3weBYzgJPOt3LkCwUbnsEBAZghi0JCXr59sdTPa8gEo28BgNvLbLCG4Z24KJRG%2Bm%2FvjJKYrvJ7FK7cRybBaJGEXPsUPhyeIY%2Ber3NV5aR0PWm6dIENCRaERN0l5lBcudYcz1Uo9FqVEOeOle7kl7GFCnRn6pJKS9oRbPrDjEsIIHlime9otO0W0XIODBbNLiY3q99NdhLxSozfjhPZjUC8156g6EzCrij4pKTAQopGQsPXh0x0kA%2Bm9fIJfc0eueQoMdxwgGSFK2yQuwfifMNWQhJy8GVW1XqRrzGBQxK%2Be6nkVpKNwC27W4Ucg0HcnarUOe81veCw9ncvlAL1IcUcC6eBWrpoX84xMctctkwKhuhQxgy6ikYwRk%2Bj78AqgSPQ4GE3j5uGTCmUN8IdUg3M6kIGDNAkcEMKD8nsu%2FUK24lznhdNNDw%2FKyePNZ1y4b7cT1YTbSfpkPdD7fTivmey%2FXhF1WznEUuR1IYmCIExLDVji774Yz1pknFvsySRUx3l%2F4BRfgQutHmGwsk1vjgyEcUdwNN3fPI%2FzhlwlQlRRXzexkxUaAMlB8608z%2FlJcMIvNyMQGOqUBCfx3dEyKTIAHBxQnlwIkrCr6eBuwhP9IMUNRirDfUM%2Bs%2BhHD64m2X7QHZd9JqL6fSbkeJdmxNc%2Bn1pbhfCa0XYzFBUF620KJaIWO%2FKuBu3GXnER3p1ywMLxkAPgJlaJRQbPywzbejkXFsPaQKiaN0seM7FDL9AJj%2FXfZ1pcKRv4X2SzlqTsleGjDLDgYDhGjscTRIz2gxk9QlZNxwcWBRCyJw82C&X-Amz-Signature=0adb9a2183cbc6ec0b2c5d03db912d56165771444d3282a75c34f2749aaa8226&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662T4XBZ2V%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T170921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQD84SHDjX%2BhWHBOLZRO6JHHKzhdpF58g4sixC3SmShOVwIgcVnuq2PqrKdnmhsVm03YGrArk%2FprcTSPjnh2YsR0uYwq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDH6Vb0deDkoVpn%2FFWSrcA1I5avJxgnJw3xKG%2Bv415rBBDP4FUqkB0YenHdaSy1YqPZiXEUyA2kVo3jFC3weBYzgJPOt3LkCwUbnsEBAZghi0JCXr59sdTPa8gEo28BgNvLbLCG4Z24KJRG%2Bm%2FvjJKYrvJ7FK7cRybBaJGEXPsUPhyeIY%2Ber3NV5aR0PWm6dIENCRaERN0l5lBcudYcz1Uo9FqVEOeOle7kl7GFCnRn6pJKS9oRbPrDjEsIIHlime9otO0W0XIODBbNLiY3q99NdhLxSozfjhPZjUC8156g6EzCrij4pKTAQopGQsPXh0x0kA%2Bm9fIJfc0eueQoMdxwgGSFK2yQuwfifMNWQhJy8GVW1XqRrzGBQxK%2Be6nkVpKNwC27W4Ucg0HcnarUOe81veCw9ncvlAL1IcUcC6eBWrpoX84xMctctkwKhuhQxgy6ikYwRk%2Bj78AqgSPQ4GE3j5uGTCmUN8IdUg3M6kIGDNAkcEMKD8nsu%2FUK24lznhdNNDw%2FKyePNZ1y4b7cT1YTbSfpkPdD7fTivmey%2FXhF1WznEUuR1IYmCIExLDVji774Yz1pknFvsySRUx3l%2F4BRfgQutHmGwsk1vjgyEcUdwNN3fPI%2FzhlwlQlRRXzexkxUaAMlB8608z%2FlJcMIvNyMQGOqUBCfx3dEyKTIAHBxQnlwIkrCr6eBuwhP9IMUNRirDfUM%2Bs%2BhHD64m2X7QHZd9JqL6fSbkeJdmxNc%2Bn1pbhfCa0XYzFBUF620KJaIWO%2FKuBu3GXnER3p1ywMLxkAPgJlaJRQbPywzbejkXFsPaQKiaN0seM7FDL9AJj%2FXfZ1pcKRv4X2SzlqTsleGjDLDgYDhGjscTRIz2gxk9QlZNxwcWBRCyJw82C&X-Amz-Signature=16c458098f1cd0993629879ab445d1c5a9a67bd5fe35aff8cd5ce13801bda0b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
