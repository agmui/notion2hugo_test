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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QV43H4XO%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T110845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJIMEYCIQDgaJ%2B%2BjRmwmaeC8oOkkrerxrrFx%2FxRh0GrCncQuLpTYAIhALeHxqiVj6HOveJAl%2FnGrVN%2FpGK9kWB50Or9u3DgDUtEKv8DCEQQABoMNjM3NDIzMTgzODA1IgwaeXmOMfhqmMKGB5sq3APEVQPERv4PnqhPuDt1KkjCBYBo%2B%2BUZKUNzdpuhMUJhD1VHDTNpok%2FkQuqvKxEH%2FdjXvGtP0l4xuuLz9nVH9NBZrZQsEalkC424L4G%2BGJCb02h2SkFT5ezI4yh5pn%2F9iEmOw0ayHOFtxaTp%2FlQ6KjlrhiAGnC%2FIkEwaZnJ9JcIpJppl4vZoGjXan0mwXlNa7RS5iA%2FYP2lsB7z7sWB5YqiUZbg%2BIoxTBgxvEongws8RObPtWI9ua%2FAbarK%2B7NWVmaiIXxXTNELSd5an6if60W%2BIl8AR1CRjCcXKrh38hvqhx8Sm%2FmA7kXNQuaq7UFKXfFiKKcdX3p2ggt%2BwDSR%2BGstN%2BtMzLQcxR9hSc5fZ4rBt1i8Do7qHrpJqwweAzWGX3bSB%2BCx0c%2FdIt6e4%2BfZDGRdIfUo69jKlkau0BPcYRra1BP2k0L6TTpuUpFLVHC4jCVLiN49OJ%2F9kdscOs2S4aw5%2BfVbKYmo5ywRNvW85jofd8vmi66kOt8mymiqL%2Fmd7nnzymi%2BQbfMMXaBEY7qO6ZtsLEitBg1SyQVqutVDx7SIU6lF4KqyEnB%2Bwkcbgm7takH1kSUa7mygAb%2Bfq5VnTgWh8r4224aD15x4j6srfGvtecOtdPNrIsrQXL%2BUoTDR2djDBjqkAeYxefgq%2B%2BDAkQYKn0U3OaHajKrgSErwOGrr%2FpU7odL2L5uV4jxcqTacvcDMBxY0MKnChfS%2FbWQJJUr2C9%2BpBACNV1jcMcf05cyAlMMFjc1ptQlD8NY%2F6cWwdhTzxmVNAf0XhWkzLCQsMFMp91HAcdplcWdmQ%2FYCa2az7pL5wTKqCUeR8SbaO%2BBd6rYpNLXXlW9XDqL2R37UwzxxJlaDtbn8KiT3&X-Amz-Signature=5b01dc45afb4016bdd4487aaaa478b5478876fa98cb3a0a37e2566ab7f985316&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QV43H4XO%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T110845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJIMEYCIQDgaJ%2B%2BjRmwmaeC8oOkkrerxrrFx%2FxRh0GrCncQuLpTYAIhALeHxqiVj6HOveJAl%2FnGrVN%2FpGK9kWB50Or9u3DgDUtEKv8DCEQQABoMNjM3NDIzMTgzODA1IgwaeXmOMfhqmMKGB5sq3APEVQPERv4PnqhPuDt1KkjCBYBo%2B%2BUZKUNzdpuhMUJhD1VHDTNpok%2FkQuqvKxEH%2FdjXvGtP0l4xuuLz9nVH9NBZrZQsEalkC424L4G%2BGJCb02h2SkFT5ezI4yh5pn%2F9iEmOw0ayHOFtxaTp%2FlQ6KjlrhiAGnC%2FIkEwaZnJ9JcIpJppl4vZoGjXan0mwXlNa7RS5iA%2FYP2lsB7z7sWB5YqiUZbg%2BIoxTBgxvEongws8RObPtWI9ua%2FAbarK%2B7NWVmaiIXxXTNELSd5an6if60W%2BIl8AR1CRjCcXKrh38hvqhx8Sm%2FmA7kXNQuaq7UFKXfFiKKcdX3p2ggt%2BwDSR%2BGstN%2BtMzLQcxR9hSc5fZ4rBt1i8Do7qHrpJqwweAzWGX3bSB%2BCx0c%2FdIt6e4%2BfZDGRdIfUo69jKlkau0BPcYRra1BP2k0L6TTpuUpFLVHC4jCVLiN49OJ%2F9kdscOs2S4aw5%2BfVbKYmo5ywRNvW85jofd8vmi66kOt8mymiqL%2Fmd7nnzymi%2BQbfMMXaBEY7qO6ZtsLEitBg1SyQVqutVDx7SIU6lF4KqyEnB%2Bwkcbgm7takH1kSUa7mygAb%2Bfq5VnTgWh8r4224aD15x4j6srfGvtecOtdPNrIsrQXL%2BUoTDR2djDBjqkAeYxefgq%2B%2BDAkQYKn0U3OaHajKrgSErwOGrr%2FpU7odL2L5uV4jxcqTacvcDMBxY0MKnChfS%2FbWQJJUr2C9%2BpBACNV1jcMcf05cyAlMMFjc1ptQlD8NY%2F6cWwdhTzxmVNAf0XhWkzLCQsMFMp91HAcdplcWdmQ%2FYCa2az7pL5wTKqCUeR8SbaO%2BBd6rYpNLXXlW9XDqL2R37UwzxxJlaDtbn8KiT3&X-Amz-Signature=93df727eaf1d5c9cd58120007d7f050a1fa3ceef638cc535678be6273390128f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
