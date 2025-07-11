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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZM3R34K%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T230905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCuVaRK6GBpXlc65lDQiGAvmWp8csicJAD7pBtvRl8aLwIgPdmGdxBdVU2%2BQLXH32pC08AJF4vLK5JkkLhlyyaptYEqiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDITK4Qm7WmyGKa3%2BcCrcA2m%2FTLVYB1NqJFCBohQOwkrnDclJJo3tgSbd0nAX3EZ72JPc8bAy%2BnhEA%2FgHVoalSS1K4BN4ph%2B73EvhNMWVsRZr9T0s4d%2FU%2FRmjTsmhkdCHaiHZ7L48HP4zos3n2N3JYSDa3x7sWWNl5HOccq5RkKuF4tAeUrLsodWzklGgOtaS0cM%2FmtFGJkHOVcIgIB0oqkIGpVYjUdd67Wzz%2FCkVbuqwr7GJHf%2BQ2ZTPpZc2MMm2Mok9ofbvzJbs2CuHpmq%2Be3CNyVNJvbWFWebE9jAh8nx7QNkGApaHjT4DsFQDWKj%2FLP0p2UFmJJuABnelKTLCMkH%2BRuVLz%2FM4Z48BrIzSmldZyLMcGrSVKPSD5lY9o3PE9Hx16f%2Bn0niQ5nEMIihS8FF6%2FCoGCeJE3XIgOjCXl5gRVOXDMu3IUa4B0bY9enR5YdqQx8YAai0b64NX7HobwUBo3oru%2FsONW5YaoalIybjURCNZkBf7rK4XPaoeXEPqUJYX6qQ9NWqHbWOcGGNWonAAXhH6CmsAzD1hZZJNRdVmnv7yMqWJrR1SPut8RNp6K4NKDDylS7G60iwSShIwMvefWP4LzLYPigbaaFGqm1jefII%2BtTRvwoKoYLfJOHbBVrLs%2FNKuB87TZiXiMPqDxsMGOqUBqVPSUY12sZ%2FZ%2BLEQHoW8ZZu9TKI27NnCy3M2sSbsbTQ4I2RbZ%2Bxjwbd28AbaoIQokC5Om6KANrLQ2fBIyMBNXRQN66WuG9%2BIMvqCJXnniFBqw5uRDY7aZx4lt%2BDfGKU4fiy1SyxNSbnnPUjI7e8yKPrEaXz%2BbK9porrbpqrUegzdGdCKML51z%2FL1Flj6mO5adYre6bxpHYsueBQNqmu0n3eC9xxy&X-Amz-Signature=6427549078ce9c29f7fdfbcdf310d0d243bad506b25aed4e40f373124ae4c547&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZM3R34K%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T230905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCuVaRK6GBpXlc65lDQiGAvmWp8csicJAD7pBtvRl8aLwIgPdmGdxBdVU2%2BQLXH32pC08AJF4vLK5JkkLhlyyaptYEqiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDITK4Qm7WmyGKa3%2BcCrcA2m%2FTLVYB1NqJFCBohQOwkrnDclJJo3tgSbd0nAX3EZ72JPc8bAy%2BnhEA%2FgHVoalSS1K4BN4ph%2B73EvhNMWVsRZr9T0s4d%2FU%2FRmjTsmhkdCHaiHZ7L48HP4zos3n2N3JYSDa3x7sWWNl5HOccq5RkKuF4tAeUrLsodWzklGgOtaS0cM%2FmtFGJkHOVcIgIB0oqkIGpVYjUdd67Wzz%2FCkVbuqwr7GJHf%2BQ2ZTPpZc2MMm2Mok9ofbvzJbs2CuHpmq%2Be3CNyVNJvbWFWebE9jAh8nx7QNkGApaHjT4DsFQDWKj%2FLP0p2UFmJJuABnelKTLCMkH%2BRuVLz%2FM4Z48BrIzSmldZyLMcGrSVKPSD5lY9o3PE9Hx16f%2Bn0niQ5nEMIihS8FF6%2FCoGCeJE3XIgOjCXl5gRVOXDMu3IUa4B0bY9enR5YdqQx8YAai0b64NX7HobwUBo3oru%2FsONW5YaoalIybjURCNZkBf7rK4XPaoeXEPqUJYX6qQ9NWqHbWOcGGNWonAAXhH6CmsAzD1hZZJNRdVmnv7yMqWJrR1SPut8RNp6K4NKDDylS7G60iwSShIwMvefWP4LzLYPigbaaFGqm1jefII%2BtTRvwoKoYLfJOHbBVrLs%2FNKuB87TZiXiMPqDxsMGOqUBqVPSUY12sZ%2FZ%2BLEQHoW8ZZu9TKI27NnCy3M2sSbsbTQ4I2RbZ%2Bxjwbd28AbaoIQokC5Om6KANrLQ2fBIyMBNXRQN66WuG9%2BIMvqCJXnniFBqw5uRDY7aZx4lt%2BDfGKU4fiy1SyxNSbnnPUjI7e8yKPrEaXz%2BbK9porrbpqrUegzdGdCKML51z%2FL1Flj6mO5adYre6bxpHYsueBQNqmu0n3eC9xxy&X-Amz-Signature=cdc40325a9366a550dc16462d3c4b52dbb821140c43c1119269bc6b0ff5c6001&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
