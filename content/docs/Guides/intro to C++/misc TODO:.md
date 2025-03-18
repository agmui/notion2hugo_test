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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPPC67NH%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T110714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJIMEYCIQCG2FFsxJIlOHXLtECoeJLhJMBTdQ6has8ml%2FFpdDzohQIhAIgAEWZwbTB%2BHlagPC5GJIIWXaVT2Xt5caGemAtlJqRDKv8DCFwQABoMNjM3NDIzMTgzODA1IgyRapXLLAjqEYCgyrwq3AO4OAKb6uZpu6ko7E7LrP5mU0E6NiCv6pCXWQxrO4bz7KGKv8u6WN7FD6ELy1lrjkSjIYe8W1Gus0AseFFSp7VtEnbgJUDbWkXYvwiGw5HxPHMg3n77gkIvl1Jf%2BLFewvA4cqNJkV9AM8JGAVDUAV5KOa6r2VbcZwrjePEJZ0515BIBvFe4mgH6Bgh5TfgIcv34VTwGLGNAsz%2FggeyIoQskiiK3YW7V7an2EoKAUo01IOIBCdyHAPk98QjDGodh2hnbDid7S%2FrP2YsmdolETkU7iw%2FswryEUKNCjnyG6%2BnbqQdwJEwWpGZwXge%2ByRrc319VEbp2ftsGZ6P9%2FHqc%2FDHvnLdJHxbrsAQjQb2kopeeZCqNvoi9xAL4CaCbUtWuU8l8TKWbD7KxxZzwhGvtgTmVok79DLhvpcV9PZsLSsGew0oXQrjB8V8VbigJxsDiBFQ7IJsGJEdjpmaVdA24wOHgwiNqEqzDVdUFdhO%2BpzGMPeaoQHuX2viRWY5qk5dT1YD78A4f9Aw9X0ccRfFcaBZqC1o6O2lxPGa%2BaHOx7W7%2BDfe2ekKLUKco%2BXFssS%2B93sVrV%2BCErSUv2xckqh2O4R5VOIXxQ4jQir7BRWE4CHLj%2BGkREmpHZokw6Oxb7TDNleW%2BBjqkAWFjA3B9lTT1o4lrlv8%2F6n3xXZNfsPvVhf7Mt7FZ3KeLUbeFgppVCdmWOyhY7u87p9dJJrXDZKAzEXFlORdSw3KGXWrcGDhjDDeQqkfxsfBafWF%2BSKRlFf5v%2BV1M4w%2BplR5hpUfPCEVCQYHpIFy4OprqKd770GcNS5S%2FO2puihjAKNUDGgczRk41EhqXdkjYEs6UidpeLLs6uX%2FZK%2Bz4ig%2BagHje&X-Amz-Signature=afc504084927fb1030dc8f27d40f246ab369ad88923a4567cb7934d574e748cd&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPPC67NH%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T110714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJIMEYCIQCG2FFsxJIlOHXLtECoeJLhJMBTdQ6has8ml%2FFpdDzohQIhAIgAEWZwbTB%2BHlagPC5GJIIWXaVT2Xt5caGemAtlJqRDKv8DCFwQABoMNjM3NDIzMTgzODA1IgyRapXLLAjqEYCgyrwq3AO4OAKb6uZpu6ko7E7LrP5mU0E6NiCv6pCXWQxrO4bz7KGKv8u6WN7FD6ELy1lrjkSjIYe8W1Gus0AseFFSp7VtEnbgJUDbWkXYvwiGw5HxPHMg3n77gkIvl1Jf%2BLFewvA4cqNJkV9AM8JGAVDUAV5KOa6r2VbcZwrjePEJZ0515BIBvFe4mgH6Bgh5TfgIcv34VTwGLGNAsz%2FggeyIoQskiiK3YW7V7an2EoKAUo01IOIBCdyHAPk98QjDGodh2hnbDid7S%2FrP2YsmdolETkU7iw%2FswryEUKNCjnyG6%2BnbqQdwJEwWpGZwXge%2ByRrc319VEbp2ftsGZ6P9%2FHqc%2FDHvnLdJHxbrsAQjQb2kopeeZCqNvoi9xAL4CaCbUtWuU8l8TKWbD7KxxZzwhGvtgTmVok79DLhvpcV9PZsLSsGew0oXQrjB8V8VbigJxsDiBFQ7IJsGJEdjpmaVdA24wOHgwiNqEqzDVdUFdhO%2BpzGMPeaoQHuX2viRWY5qk5dT1YD78A4f9Aw9X0ccRfFcaBZqC1o6O2lxPGa%2BaHOx7W7%2BDfe2ekKLUKco%2BXFssS%2B93sVrV%2BCErSUv2xckqh2O4R5VOIXxQ4jQir7BRWE4CHLj%2BGkREmpHZokw6Oxb7TDNleW%2BBjqkAWFjA3B9lTT1o4lrlv8%2F6n3xXZNfsPvVhf7Mt7FZ3KeLUbeFgppVCdmWOyhY7u87p9dJJrXDZKAzEXFlORdSw3KGXWrcGDhjDDeQqkfxsfBafWF%2BSKRlFf5v%2BV1M4w%2BplR5hpUfPCEVCQYHpIFy4OprqKd770GcNS5S%2FO2puihjAKNUDGgczRk41EhqXdkjYEs6UidpeLLs6uX%2FZK%2Bz4ig%2BagHje&X-Amz-Signature=4f3cab8c928e859daedb2ddc80c75e565ad9523bfc38f0bd9ead6823b1f871fd&X-Amz-SignedHeaders=host&x-id=GetObject)

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
