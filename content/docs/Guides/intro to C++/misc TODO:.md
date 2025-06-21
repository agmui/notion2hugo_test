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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DLJSVKO%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T200847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAuigc1SR%2FL7jJDNWvEEbd0w6rfDhu4Cl8m3g5NcIIv1AiBW0myUX0mNbRQbURCPe5M31c40TVqjOsmp7IIwoxerhCqIBAjY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQklMMZ4tx%2Fpk488%2FKtwDninbYSjMbGbLRBa48SY6lnfzbeO2Q7NF3jAneXOh%2F4quioQZdexD8tTXxOjTuNOQGRZwt8i1DkTo7JrPBLSbHseapfBVmHMYeBsUZsgeZCeTpj5DXIQFSZsNJLfLtxg1lWbnABQrVau9syuwwczevokK1a2xNzz7eC4r24z76oe6yuphyXhX9oL2gFi9OjpDjbnvlYy5K2nxuwfOtFB%2BXHmLqMKiaoqTgPTYKYOZy%2FrwBdH%2BPSwB5kt%2F4azukSOSO40aLwt6IKzZ%2FmducwSUMAK0QdvQz8vqT%2FH9ZMNTbscCGbjfrHJfmlloN2caRKYHtgIUavNoSO7d2Lqywfo2hMPxDqbzBeVQ2UcwSkywVxLTb3Pm4PFk2yZM8VjIMqdZW%2FH5UwHyiTyoKGNy0FtA4WH9g8y8v2r8%2BdHOdcz7QEpXT6xtnUxZgKSPDdIpN8y02RK2LC4fbHhpdSFDZeesuX7ACc3uKFCssBmYuYLIoR2%2BdQ%2FOnlPd8mxj7UT%2BouXiLb1YJl9mbRxyE81eIozJMFiZIsMopLjBAXHTc9pCWy21GD1N1svNKO2r3LOqUjW4AEpUf2disE%2F8KfIckmHTEiA1VREatHbsvVFYqEsgKHkPpxic2sxABXn6S3swro%2FbwgY6pgFqqHLgUaNXn8cb4T3Qv12EIPBEksDarY4qHBMtWBPPTgK8CsyHmkQ4lhrRdTC11z%2FuCI9phW1hR6zim0EuGBqq5D7xgQUlnR7BCEXI36Ba1GxCyB4LgdCb8cuv%2BlPlgVQyqWqkTexEa58%2BX6GPH93SsgaFB%2F7pKuX4K6nvn5MtMk4wdth1F1YAtjC9vFgbHHECAPVhBtjroL4rDs2FJfusibXoni5y&X-Amz-Signature=090b487c3a22d3c9e4fd0392f8ba21949885145259808e6d905a81875d77fc75&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DLJSVKO%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T200846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAuigc1SR%2FL7jJDNWvEEbd0w6rfDhu4Cl8m3g5NcIIv1AiBW0myUX0mNbRQbURCPe5M31c40TVqjOsmp7IIwoxerhCqIBAjY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQklMMZ4tx%2Fpk488%2FKtwDninbYSjMbGbLRBa48SY6lnfzbeO2Q7NF3jAneXOh%2F4quioQZdexD8tTXxOjTuNOQGRZwt8i1DkTo7JrPBLSbHseapfBVmHMYeBsUZsgeZCeTpj5DXIQFSZsNJLfLtxg1lWbnABQrVau9syuwwczevokK1a2xNzz7eC4r24z76oe6yuphyXhX9oL2gFi9OjpDjbnvlYy5K2nxuwfOtFB%2BXHmLqMKiaoqTgPTYKYOZy%2FrwBdH%2BPSwB5kt%2F4azukSOSO40aLwt6IKzZ%2FmducwSUMAK0QdvQz8vqT%2FH9ZMNTbscCGbjfrHJfmlloN2caRKYHtgIUavNoSO7d2Lqywfo2hMPxDqbzBeVQ2UcwSkywVxLTb3Pm4PFk2yZM8VjIMqdZW%2FH5UwHyiTyoKGNy0FtA4WH9g8y8v2r8%2BdHOdcz7QEpXT6xtnUxZgKSPDdIpN8y02RK2LC4fbHhpdSFDZeesuX7ACc3uKFCssBmYuYLIoR2%2BdQ%2FOnlPd8mxj7UT%2BouXiLb1YJl9mbRxyE81eIozJMFiZIsMopLjBAXHTc9pCWy21GD1N1svNKO2r3LOqUjW4AEpUf2disE%2F8KfIckmHTEiA1VREatHbsvVFYqEsgKHkPpxic2sxABXn6S3swro%2FbwgY6pgFqqHLgUaNXn8cb4T3Qv12EIPBEksDarY4qHBMtWBPPTgK8CsyHmkQ4lhrRdTC11z%2FuCI9phW1hR6zim0EuGBqq5D7xgQUlnR7BCEXI36Ba1GxCyB4LgdCb8cuv%2BlPlgVQyqWqkTexEa58%2BX6GPH93SsgaFB%2F7pKuX4K6nvn5MtMk4wdth1F1YAtjC9vFgbHHECAPVhBtjroL4rDs2FJfusibXoni5y&X-Amz-Signature=04655ab0ea9377b8001e311398e4aedd69994803d7d997d207d455de17b0b4f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
