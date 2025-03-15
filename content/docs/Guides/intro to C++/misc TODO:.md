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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663S3YAE56%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T121216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC4IGYPnQf5Dd4M813UlSfJmcA5yvp%2FKDTedjCnl77lIAIhANtnR5nwYyO%2FgFOqM%2F5Ah5wZI5qA1DwR%2BwEXFCyKJ1KpKv8DCBUQABoMNjM3NDIzMTgzODA1Igy4aM349socmtEaG1Eq3AOYUJS5Qfb8LqT7k7eFr4sfY1f%2BTIlwYSiDqUMjLFVG%2F7MTE9MJLW8dvgtvd5wA45HvdDvpsPURhYJT1m1SLsGSL64qgzjLLPivTkOu6R1vrcvshZeY6D8KnNMBGHjPE8vyr40lFxjM4UnSa34RNiung5Fn1S7%2BGsVZJ%2F3VbSc07zXXLsCHuguegXlCyqLTczZHeeut48y21ad9QEG1vk5GQbCoR1QmLqOslWu%2FS9C5Wm4WS%2FJakWtYXgswCZTi5YXrkE3FTR6J1HCs4McE9afs7Kdq5ouqCW1Z%2F67%2BwmQ6st9wFxvhYp6O9p%2BgiqVytYkp43YyEWM8D%2Bvek%2FeGV8e2SRHzgoMjCoT6u24WRAUSpCnvVBo79az7bBCSD%2F%2BU0gkZfv8RUQwN6%2BYij83NXqfD3hnmD660kQesRsLyJdt23tRZUEskztbohsLVeULs5NRkA09X9MyR5FxdQITUcejCTEUH7OGX5uBLz%2BVJzuDqDKlJurSnkicCmAc3sWHa5ayUYNnrJvEHv2e6BJNUuRqvyv20GUD5caN5Oan3mOBuesyJbTVG1WESJ%2FACaiYen4%2FqcU5WjproHRWY%2BJ2MDOdOGgnFYujXtV7whtYbfe97EbKLkQn%2BB3B3%2BJn8szD%2F0NW%2BBjqkARVAsCfPZsbutRRphJTnLezW7%2BDm4EHY3aln9%2Bcz65lAad0rOi7%2B%2FTFRJZ0KZr8vWpuHv2zNVwBxOw59UuIygKfdueCpZePwDTJe3RP92lAJQ4ZrC8FqBmY43pBt7nhvh8FXJuYU7wtJNwmsofpDixpVCukdi3yOom%2BU7iN0P9PmthLRKXfg6KsooLFCfOJyDJE3rj9k9CifyDoErMkEpm6GexZe&X-Amz-Signature=d4da0ba92973eb243d59b0e6448b9e116a2f22900df78df3dc9e99ae1b21eebc&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663S3YAE56%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T121216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC4IGYPnQf5Dd4M813UlSfJmcA5yvp%2FKDTedjCnl77lIAIhANtnR5nwYyO%2FgFOqM%2F5Ah5wZI5qA1DwR%2BwEXFCyKJ1KpKv8DCBUQABoMNjM3NDIzMTgzODA1Igy4aM349socmtEaG1Eq3AOYUJS5Qfb8LqT7k7eFr4sfY1f%2BTIlwYSiDqUMjLFVG%2F7MTE9MJLW8dvgtvd5wA45HvdDvpsPURhYJT1m1SLsGSL64qgzjLLPivTkOu6R1vrcvshZeY6D8KnNMBGHjPE8vyr40lFxjM4UnSa34RNiung5Fn1S7%2BGsVZJ%2F3VbSc07zXXLsCHuguegXlCyqLTczZHeeut48y21ad9QEG1vk5GQbCoR1QmLqOslWu%2FS9C5Wm4WS%2FJakWtYXgswCZTi5YXrkE3FTR6J1HCs4McE9afs7Kdq5ouqCW1Z%2F67%2BwmQ6st9wFxvhYp6O9p%2BgiqVytYkp43YyEWM8D%2Bvek%2FeGV8e2SRHzgoMjCoT6u24WRAUSpCnvVBo79az7bBCSD%2F%2BU0gkZfv8RUQwN6%2BYij83NXqfD3hnmD660kQesRsLyJdt23tRZUEskztbohsLVeULs5NRkA09X9MyR5FxdQITUcejCTEUH7OGX5uBLz%2BVJzuDqDKlJurSnkicCmAc3sWHa5ayUYNnrJvEHv2e6BJNUuRqvyv20GUD5caN5Oan3mOBuesyJbTVG1WESJ%2FACaiYen4%2FqcU5WjproHRWY%2BJ2MDOdOGgnFYujXtV7whtYbfe97EbKLkQn%2BB3B3%2BJn8szD%2F0NW%2BBjqkARVAsCfPZsbutRRphJTnLezW7%2BDm4EHY3aln9%2Bcz65lAad0rOi7%2B%2FTFRJZ0KZr8vWpuHv2zNVwBxOw59UuIygKfdueCpZePwDTJe3RP92lAJQ4ZrC8FqBmY43pBt7nhvh8FXJuYU7wtJNwmsofpDixpVCukdi3yOom%2BU7iN0P9PmthLRKXfg6KsooLFCfOJyDJE3rj9k9CifyDoErMkEpm6GexZe&X-Amz-Signature=677af9fbef21be019dd1f2ee2c8360d058bfcd6cd579fc256e92051ec24db2f9&X-Amz-SignedHeaders=host&x-id=GetObject)

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
