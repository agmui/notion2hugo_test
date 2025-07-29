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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKT7HD65%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T191236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDZFFmXwJ45B1bZZ6QUrtd7WpwaIJbdfRHv7gycMYsNvAiBRqMEQGav0fd4UbTMzZ22%2BDSy%2FA2tiwFRN2Yrak04%2BvSqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDpAYby%2F%2BenuZc6brKtwDPsAy68eL81gGq7saYLCfiwUv7XVaEFkC6wt3nCT0O%2Bpr349R6tZqbtiiKhtjOJAkUXdowyzKn%2B%2F8gQVjBntwCnekW8eQihW854QJPLh7%2Bdm8Nw7V3AozfQkK8I8C5G0nxVZwNiiQ%2FB2O0I8ypF%2BO%2BKw3yLXZIxRf89ZomGFUkozUMtaWGDFYQYZuqoVsqnZuYFmJu2Q1FoBDNGSuTcR9S%2BvsrQ227DD3ubvpPvW05dW1QD9wWnyveiNswu9psNLXPghJS3X8EgP79sbjVqms2l8liT6IxQgQXbRlEYmitEf7u8p3pDCTmPRhJdoIk7t6hbf4ERfu7nhW0xd77xA1d2xpZm3ar7e%2FDeP9KLvRjVsfrugOSIifa5zvShFF2TM%2Fy5x6L8ZXgzQIrr4d9qC%2BMv5CgcQ%2B5dyCp5Kao1haZhoDgTPj7yJj83EmJ%2BVv5A5%2FcThwUguVixMBctbyXRH3qXn150hXxo4%2FFk9KxzXsA9lI6LsUW%2BzsXUwhY%2FYSfc7IonmbdZNtyrCYn6Ti2780fVNazeQs2I5WTk%2BGprSY8EiNdqy2FS9bfrwIJwMwsxdSkgszMa0Yvt7tCLoYt7HGFgUPSfdwhAJzRYvn7Mh5mFjS8CtQ%2BwyOnb%2BDpLIw5K2kxAY6pgEXKQJda4eMPTC7ryf%2Bc4zNyef7UGUholS97772sKsUArNZV3jtAo9hciQKt1T6kU1vipIN%2F8bNecva49QoU4TTXrCmkXLqUza88rBMabsuHV20HD9ihHfeYaA9Fydpz%2F9WlwoafHG4HDV0NriWOfgyTY2%2BseBUnIAdemjmX4AnP4zW89kDaCXgoX401G%2B0fsWUr4BUFhuQA%2Fz%2BUXAZ7ujsdu8Grokk&X-Amz-Signature=3370b58f9d83ae2c1ddfd92fd4e5dab0e3c757311444c346a5aaea016f88d947&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKT7HD65%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T191236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDZFFmXwJ45B1bZZ6QUrtd7WpwaIJbdfRHv7gycMYsNvAiBRqMEQGav0fd4UbTMzZ22%2BDSy%2FA2tiwFRN2Yrak04%2BvSqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDpAYby%2F%2BenuZc6brKtwDPsAy68eL81gGq7saYLCfiwUv7XVaEFkC6wt3nCT0O%2Bpr349R6tZqbtiiKhtjOJAkUXdowyzKn%2B%2F8gQVjBntwCnekW8eQihW854QJPLh7%2Bdm8Nw7V3AozfQkK8I8C5G0nxVZwNiiQ%2FB2O0I8ypF%2BO%2BKw3yLXZIxRf89ZomGFUkozUMtaWGDFYQYZuqoVsqnZuYFmJu2Q1FoBDNGSuTcR9S%2BvsrQ227DD3ubvpPvW05dW1QD9wWnyveiNswu9psNLXPghJS3X8EgP79sbjVqms2l8liT6IxQgQXbRlEYmitEf7u8p3pDCTmPRhJdoIk7t6hbf4ERfu7nhW0xd77xA1d2xpZm3ar7e%2FDeP9KLvRjVsfrugOSIifa5zvShFF2TM%2Fy5x6L8ZXgzQIrr4d9qC%2BMv5CgcQ%2B5dyCp5Kao1haZhoDgTPj7yJj83EmJ%2BVv5A5%2FcThwUguVixMBctbyXRH3qXn150hXxo4%2FFk9KxzXsA9lI6LsUW%2BzsXUwhY%2FYSfc7IonmbdZNtyrCYn6Ti2780fVNazeQs2I5WTk%2BGprSY8EiNdqy2FS9bfrwIJwMwsxdSkgszMa0Yvt7tCLoYt7HGFgUPSfdwhAJzRYvn7Mh5mFjS8CtQ%2BwyOnb%2BDpLIw5K2kxAY6pgEXKQJda4eMPTC7ryf%2Bc4zNyef7UGUholS97772sKsUArNZV3jtAo9hciQKt1T6kU1vipIN%2F8bNecva49QoU4TTXrCmkXLqUza88rBMabsuHV20HD9ihHfeYaA9Fydpz%2F9WlwoafHG4HDV0NriWOfgyTY2%2BseBUnIAdemjmX4AnP4zW89kDaCXgoX401G%2B0fsWUr4BUFhuQA%2Fz%2BUXAZ7ujsdu8Grokk&X-Amz-Signature=8567ffb68ef1390ac82ca148f048df5d397cc56bce672e2e2d9bf31c4bf89270&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
