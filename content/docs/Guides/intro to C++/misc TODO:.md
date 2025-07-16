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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LQ5QX2K%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T071246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJIMEYCIQCEklncEQGpwJutrbsboutiT%2Fr8XMwpX%2FZ3uvD49KxpoAIhAJ6aM6tgWYkJ3pJoIt5Fpj%2B%2BGcxPYU5oVq1lw749TBliKv8DCFgQABoMNjM3NDIzMTgzODA1Igw6qs4MteZX1YWrECEq3APfhCFQWNaMz%2Bepa8JPXHNB%2B82H9VLwOwL20XDj%2Flh4kjMdeIrz7RGyhrAVZJYAamaL0X7iEza5BWUZvNrYbVKK9LhL3A5JhkDcXvm8lSbq%2FAumXyjHK6iBVO9Xc6bWdz0VnOTDjCRHP83SQVUgvFC2zGEyEyfMgYEtNB4sHAPJFTxY3PtN%2BpF68ECswjfe2slzId8cVA7qV5Um3seFUA5yHyRGKl8MxpAxdtqA5rG23oOz8SWLqCfmOdbjbuo6Iv1QLoShu%2FRXxGaA7Jc6yEInZdVvGdP%2FOhSy9rzXu8bqILtB6ULhIJx7xqkCg2VtDjpFwEZVTHkJqgwiSgM6YGBev2ufvBxnY207h8h67JHfbFbCLDUqjHIjfvBR0I5%2FvgfA4pKEA1wG%2BW71cGFKmL27hVNVvNFi3Mtj4%2FXCv%2BCy5DGYlQFWmmZgZy%2FsA3ylzR8xMA5J69TYJWQiaVHSEWsidMYBaEKML3iZS4cw%2FowXpL6Toi6lrLyOYqqEgN6iNaoISnjRaL8N5B25q7cM%2F5gbYBCpJpUEwWgBNgqfZZj%2BtBuJej8Qmk%2Fpoyp3uTB81xVqAeOwRX564Zjn8N1d2Mmsel2n7%2BHFzskeQkJRdwrV5wtkC06sqtFwb%2FfKIDDwkN3DBjqkAZ5tRwmx3cVX%2BFCkbF6Ninc6%2BbD5bFwH0mgskRVOMjTb3ppITSww9%2F806GHvmmX1g9apg64mKXRgxNNgsHKIpHIfE4xYhJTdq0yFOarsPh34uoRP2DWQ7EQWJ8O4%2B2abyR6SvW%2BzUbZhVsaHUAKmgpOtWkXHcuqtOuhE91N4bh2O7BldedhT1yuLJI4ZLuiaYb7TheFoE%2B31NwlLHDfpfAMNR4dp&X-Amz-Signature=1d6cf1cc36cc1b19e8655404bebdb1d7b4f71c06660fa62881d228b580ca35b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LQ5QX2K%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T071246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJIMEYCIQCEklncEQGpwJutrbsboutiT%2Fr8XMwpX%2FZ3uvD49KxpoAIhAJ6aM6tgWYkJ3pJoIt5Fpj%2B%2BGcxPYU5oVq1lw749TBliKv8DCFgQABoMNjM3NDIzMTgzODA1Igw6qs4MteZX1YWrECEq3APfhCFQWNaMz%2Bepa8JPXHNB%2B82H9VLwOwL20XDj%2Flh4kjMdeIrz7RGyhrAVZJYAamaL0X7iEza5BWUZvNrYbVKK9LhL3A5JhkDcXvm8lSbq%2FAumXyjHK6iBVO9Xc6bWdz0VnOTDjCRHP83SQVUgvFC2zGEyEyfMgYEtNB4sHAPJFTxY3PtN%2BpF68ECswjfe2slzId8cVA7qV5Um3seFUA5yHyRGKl8MxpAxdtqA5rG23oOz8SWLqCfmOdbjbuo6Iv1QLoShu%2FRXxGaA7Jc6yEInZdVvGdP%2FOhSy9rzXu8bqILtB6ULhIJx7xqkCg2VtDjpFwEZVTHkJqgwiSgM6YGBev2ufvBxnY207h8h67JHfbFbCLDUqjHIjfvBR0I5%2FvgfA4pKEA1wG%2BW71cGFKmL27hVNVvNFi3Mtj4%2FXCv%2BCy5DGYlQFWmmZgZy%2FsA3ylzR8xMA5J69TYJWQiaVHSEWsidMYBaEKML3iZS4cw%2FowXpL6Toi6lrLyOYqqEgN6iNaoISnjRaL8N5B25q7cM%2F5gbYBCpJpUEwWgBNgqfZZj%2BtBuJej8Qmk%2Fpoyp3uTB81xVqAeOwRX564Zjn8N1d2Mmsel2n7%2BHFzskeQkJRdwrV5wtkC06sqtFwb%2FfKIDDwkN3DBjqkAZ5tRwmx3cVX%2BFCkbF6Ninc6%2BbD5bFwH0mgskRVOMjTb3ppITSww9%2F806GHvmmX1g9apg64mKXRgxNNgsHKIpHIfE4xYhJTdq0yFOarsPh34uoRP2DWQ7EQWJ8O4%2B2abyR6SvW%2BzUbZhVsaHUAKmgpOtWkXHcuqtOuhE91N4bh2O7BldedhT1yuLJI4ZLuiaYb7TheFoE%2B31NwlLHDfpfAMNR4dp&X-Amz-Signature=fe0a84eab5ee9f5e0e45456f7badb70b0ba963fb7feef940a2fc2ed5f6121343&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
