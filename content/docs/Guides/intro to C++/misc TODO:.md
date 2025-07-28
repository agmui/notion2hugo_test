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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z35LAWCX%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T133213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQDQ4ntuWcBTUHpYa3TzR6bQsCkOsXx1expeNDfT%2B9BXGQIgCsUVnO8OqP3p3%2FStrd0i12hX0wN7JzQKWji1Um1C6HkqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL%2FJjQonp9U0uGXMEircA9smIstdhq2GqbDMc9pxt0htdQcHo8OfYsAlgb3KT0Cvx5%2B9Bc38%2BphXCs9D6IAGhljGwYFK4VFFNYDUvcnpBsLxblvIwxwmcI5m57g0k16hYzsKmEbzbGOxzvFh20YIlBiDSEK2CoqBgpPdGGcakVjDXavWm1Oo0zWFokQAXuWXPmtVERUtp%2Bh5C2KKJi0lWtU%2BfuDSHjv0mid3UHufnUSQ4jtiyD6XFlZBqz6dRZNZNx2AbGEn3IY1pCghvak%2Bl4Uxk7a%2B4nfjDGsAFuu551SlnCYhoFvr8PRoQtSJ7YQog%2FsmWEA58kujFhbZo0MoJqn00gi%2FCgNdQwQ2Rs8C%2FhJdc0UIuBIA1RfSlhCfKf3GyA7VtPAiNTsmFAnOlL8PL9e0rNoIA%2FHmMywFJ8ktbpalRnyOt5hM%2FCIX%2F9VbyvwxXQfG9gWEWIGcQj9loKwcybMXeOmQu3FFUbi6AFobdFItaC681RBBhtbgHC0XuGmSm%2FYl5nAnt%2F%2F%2FfV2CUBZhQKV%2BT%2BRvoYLIN%2Bfw2727LfpKlCqY5uW3FM4pWfYpRCzADYk9nvuBlyegsrn5x7SFH2PCIiv07CZWerYpLXia%2FKr5ozn%2F4fx1EFrLAbc%2B34Dtsg%2BNbL0LPPsOsE6XMJLXncQGOqUBRn6u4u5mpCGjM1c5I%2FprHJJer5MW2ulsEnw9G4D4OjTeMoOGEay1NQaV9IiKKQcxv3WOvY2HctbVQ%2FTmxZe2NVq3U0CrlyFl8aQK9QmNoPRIdEasBgFV31siuCE7Puhy9QknOEIxo%2BbbZth3w1tfShSMW6LqDctFK%2BA%2ByUShTQ0tbVHCdOx5da9s7efJfpyU2a7oBe5bjluAYtLVlGd0%2F6dnBkiY&X-Amz-Signature=85a144d95c43d8ab96f638700c9226964d730b225cfc3c23bd3df9b352a7f2ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z35LAWCX%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T133213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQDQ4ntuWcBTUHpYa3TzR6bQsCkOsXx1expeNDfT%2B9BXGQIgCsUVnO8OqP3p3%2FStrd0i12hX0wN7JzQKWji1Um1C6HkqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL%2FJjQonp9U0uGXMEircA9smIstdhq2GqbDMc9pxt0htdQcHo8OfYsAlgb3KT0Cvx5%2B9Bc38%2BphXCs9D6IAGhljGwYFK4VFFNYDUvcnpBsLxblvIwxwmcI5m57g0k16hYzsKmEbzbGOxzvFh20YIlBiDSEK2CoqBgpPdGGcakVjDXavWm1Oo0zWFokQAXuWXPmtVERUtp%2Bh5C2KKJi0lWtU%2BfuDSHjv0mid3UHufnUSQ4jtiyD6XFlZBqz6dRZNZNx2AbGEn3IY1pCghvak%2Bl4Uxk7a%2B4nfjDGsAFuu551SlnCYhoFvr8PRoQtSJ7YQog%2FsmWEA58kujFhbZo0MoJqn00gi%2FCgNdQwQ2Rs8C%2FhJdc0UIuBIA1RfSlhCfKf3GyA7VtPAiNTsmFAnOlL8PL9e0rNoIA%2FHmMywFJ8ktbpalRnyOt5hM%2FCIX%2F9VbyvwxXQfG9gWEWIGcQj9loKwcybMXeOmQu3FFUbi6AFobdFItaC681RBBhtbgHC0XuGmSm%2FYl5nAnt%2F%2F%2FfV2CUBZhQKV%2BT%2BRvoYLIN%2Bfw2727LfpKlCqY5uW3FM4pWfYpRCzADYk9nvuBlyegsrn5x7SFH2PCIiv07CZWerYpLXia%2FKr5ozn%2F4fx1EFrLAbc%2B34Dtsg%2BNbL0LPPsOsE6XMJLXncQGOqUBRn6u4u5mpCGjM1c5I%2FprHJJer5MW2ulsEnw9G4D4OjTeMoOGEay1NQaV9IiKKQcxv3WOvY2HctbVQ%2FTmxZe2NVq3U0CrlyFl8aQK9QmNoPRIdEasBgFV31siuCE7Puhy9QknOEIxo%2BbbZth3w1tfShSMW6LqDctFK%2BA%2ByUShTQ0tbVHCdOx5da9s7efJfpyU2a7oBe5bjluAYtLVlGd0%2F6dnBkiY&X-Amz-Signature=2ddf66ef66baaaed5c16ad4697748a41c3f1eda2840a0e2abf51f6bc07f9bf72&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
