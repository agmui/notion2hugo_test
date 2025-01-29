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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667R6VFM74%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T210253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFqiqr58z%2FjBnXOxg79VKRB7o3chgW54m1qVT%2FSnZuzNAiAHNb6zpRLCLbCbc1r18zfJ9x8vLUuknk7LVBLYlnrRcyqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIKfs0R6xiFe4R1AMKtwDnADrNDtpR9uA%2FAQ8J%2Fml%2BFD%2B99sJfCrUG8hAoXz%2FurVjesCIfc6GoJqMzDWUPu3fqReAR5LYLS0WMZ0aQXGk9Ud6fmTwy6M3mqfXfM2%2FnwDqnRpjCG43YY5wv0j2yF9VnBcqTMbJkt5fXHp7Ha5eLJZnRUUF3iE1J1f4GIsIaKhDygbj6%2B5Z8FOmco5w4nDMWtWobCllYHnFTrt7lVAbs9y6aL54p%2Fb0Dz6IYABRc1CdeLeTev%2FvURgCdortOMXvgJJlVmxs%2BDyqhINzdOzdzJR1jsfv9H%2F7w%2BNs71INDjZEKrZhKgi01ytUrfDvA79%2BZVD0gyU7ic%2FbmySO%2Fy4gml4tgHBKemxrrBgUGWfipO%2FB%2FgSqkzCu2pAcj5DyOj7Ziy216Ce3HqQZgOa%2Fj148brZW5Qwd2lnEJsCZ%2F%2FpqtZo%2BeYHrDf%2BIu3bUKSRdoLNcpAVZ1hL4ac6Vw%2BovLdOZvqYOmb%2F%2BZBUc%2FoSi7OW3Mutm%2BU5I%2Br2xVbI4h22rCkgAYeqo8JeJVih07lbdom0Iy1kDp%2B6nF03NuNePwKhU4TU44qnQ%2B2oP9FBtbuj0nicI0dAHqXB3o2cD4tfVoTbRgzip3plqq1mhrk0HffheF9YGBPvhiO7W9ppo%2FmIw%2FKnqvAY6pgGtBXI2CmOuhTd0Jx4rJmjNy08C1pCoG5xiDUXSMG6XA20ueOxRvrJ%2Bv1nN6snOptj6mvfoZm%2BUlfME58L6D4bV%2FDjoKQbNXiu0WSIXeYsbqQb08NHx1i0hrAO54y3g18vBCeJC0lz5Vgbvdk7dtiWGkwrVfXj%2BCCvrj81j64v3Zc3WQJIrwhM3X%2BuyfxSN6m9PznKwdsOLcTYaQe%2BH%2F6%2Fr8udz%2FAdx&X-Amz-Signature=f1f82e823ed1e3589afa40f43a14a2bfe75c940d65ee7c0fb5d635aedc9a1403&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667R6VFM74%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T210253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFqiqr58z%2FjBnXOxg79VKRB7o3chgW54m1qVT%2FSnZuzNAiAHNb6zpRLCLbCbc1r18zfJ9x8vLUuknk7LVBLYlnrRcyqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIKfs0R6xiFe4R1AMKtwDnADrNDtpR9uA%2FAQ8J%2Fml%2BFD%2B99sJfCrUG8hAoXz%2FurVjesCIfc6GoJqMzDWUPu3fqReAR5LYLS0WMZ0aQXGk9Ud6fmTwy6M3mqfXfM2%2FnwDqnRpjCG43YY5wv0j2yF9VnBcqTMbJkt5fXHp7Ha5eLJZnRUUF3iE1J1f4GIsIaKhDygbj6%2B5Z8FOmco5w4nDMWtWobCllYHnFTrt7lVAbs9y6aL54p%2Fb0Dz6IYABRc1CdeLeTev%2FvURgCdortOMXvgJJlVmxs%2BDyqhINzdOzdzJR1jsfv9H%2F7w%2BNs71INDjZEKrZhKgi01ytUrfDvA79%2BZVD0gyU7ic%2FbmySO%2Fy4gml4tgHBKemxrrBgUGWfipO%2FB%2FgSqkzCu2pAcj5DyOj7Ziy216Ce3HqQZgOa%2Fj148brZW5Qwd2lnEJsCZ%2F%2FpqtZo%2BeYHrDf%2BIu3bUKSRdoLNcpAVZ1hL4ac6Vw%2BovLdOZvqYOmb%2F%2BZBUc%2FoSi7OW3Mutm%2BU5I%2Br2xVbI4h22rCkgAYeqo8JeJVih07lbdom0Iy1kDp%2B6nF03NuNePwKhU4TU44qnQ%2B2oP9FBtbuj0nicI0dAHqXB3o2cD4tfVoTbRgzip3plqq1mhrk0HffheF9YGBPvhiO7W9ppo%2FmIw%2FKnqvAY6pgGtBXI2CmOuhTd0Jx4rJmjNy08C1pCoG5xiDUXSMG6XA20ueOxRvrJ%2Bv1nN6snOptj6mvfoZm%2BUlfME58L6D4bV%2FDjoKQbNXiu0WSIXeYsbqQb08NHx1i0hrAO54y3g18vBCeJC0lz5Vgbvdk7dtiWGkwrVfXj%2BCCvrj81j64v3Zc3WQJIrwhM3X%2BuyfxSN6m9PznKwdsOLcTYaQe%2BH%2F6%2Fr8udz%2FAdx&X-Amz-Signature=70a0bd275642ee774532a602b8b21080f220c8f776f8e9dbc442c57d9ad77ed3&X-Amz-SignedHeaders=host&x-id=GetObject)

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
