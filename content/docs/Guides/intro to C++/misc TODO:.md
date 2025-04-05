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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UAWWKDE%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T070736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC%2FrxrWjR32%2F1%2FlMJNXEiO5NxSFPFG3ewQnkMcF%2FnzFmAiEAwvs3GwLW7471vZC7%2FMFDGbXaC%2Bb57xMrIbwX1CwESSYq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDEQj%2BrSvKX%2BjfT92PyrcA5Ylg%2BrCeeV1D9z2I96BkTaOLiC0Z7NT8ddGv3OEmsOSulGAm2jrpcEK7ItAlYF2nMOzUUKh1KtXQYm%2BsUCUTDeSwxrka32CvzgDUr76H9rU8crEgD0LYw4iiIaGO8VqW131TFDDTwbSaY3Y2XXsM2HSWYMiZO0HQ48Yl5fOEIi%2FcN7evxyyyd3ynQE6S49vuvAjTjrgP%2FO%2F%2FDhfKst40kuhS%2B6zzlQPVYl74zxFQqDCNeBQVZJmLvGxpF3qA%2FRg7el92NRrPCWNz6LpGTdK4CtrFEsPkk8JlFOPKzeAMLlkS8YFQDiaVJijL0hou7gDbD%2BBbhVZoyXEUoohRMeRj4rdqU5NM8Q6YXeL9fZj%2BpWZVp1nQ4BxaZWuvjiYp1QqOmjankfE3z%2FHKZjn1BWb8FolRE789gnw907lBuYAFYmDi4L5I8%2FXj4U6EBNOWUuRkee%2FKJ5HipaoPSCDntN%2BscsizeLBmljfuV7eTw5yq0fm9MmU4Bk%2FE9f6Slch1aMec1BySIB6eCvlE3cPnPyZ4Hc0Uzube27t3Tx4HdbOXgGa2fn3NzuJgmYRx6IqQTyFhBFF%2BAG7fBMzCk9qswjeXRXbwD7XtcxosyPo3V6CGNJWj5oHFGA2otoWtnkaMNehw78GOqUB%2F5JEXWSCvc4sMSNkoVkDsIy%2FEDbxfk5%2FwqLQOqSr4mgBNV3A4261A24qjcOS0aB6yMsLKRjHH04vLklvSwkb3gp5X8ZX0gGQIqzQEOnB%2BtibDSdEiXKTSVv6BGiRk%2Fm52DYqutwNTIA%2B7N%2Bj2zMT18WRfct0e4u%2BuRGxXR%2Box1%2FyA2Bgh1Xqmq6Lm6b5%2B77vyPWTPk%2F2HfXW20Jlezo59LNtjg5F&X-Amz-Signature=b5801dcd7903aea2a179dd42bd332a92a58e1afd3ffef778c4c179268b349e3f&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UAWWKDE%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T070736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC%2FrxrWjR32%2F1%2FlMJNXEiO5NxSFPFG3ewQnkMcF%2FnzFmAiEAwvs3GwLW7471vZC7%2FMFDGbXaC%2Bb57xMrIbwX1CwESSYq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDEQj%2BrSvKX%2BjfT92PyrcA5Ylg%2BrCeeV1D9z2I96BkTaOLiC0Z7NT8ddGv3OEmsOSulGAm2jrpcEK7ItAlYF2nMOzUUKh1KtXQYm%2BsUCUTDeSwxrka32CvzgDUr76H9rU8crEgD0LYw4iiIaGO8VqW131TFDDTwbSaY3Y2XXsM2HSWYMiZO0HQ48Yl5fOEIi%2FcN7evxyyyd3ynQE6S49vuvAjTjrgP%2FO%2F%2FDhfKst40kuhS%2B6zzlQPVYl74zxFQqDCNeBQVZJmLvGxpF3qA%2FRg7el92NRrPCWNz6LpGTdK4CtrFEsPkk8JlFOPKzeAMLlkS8YFQDiaVJijL0hou7gDbD%2BBbhVZoyXEUoohRMeRj4rdqU5NM8Q6YXeL9fZj%2BpWZVp1nQ4BxaZWuvjiYp1QqOmjankfE3z%2FHKZjn1BWb8FolRE789gnw907lBuYAFYmDi4L5I8%2FXj4U6EBNOWUuRkee%2FKJ5HipaoPSCDntN%2BscsizeLBmljfuV7eTw5yq0fm9MmU4Bk%2FE9f6Slch1aMec1BySIB6eCvlE3cPnPyZ4Hc0Uzube27t3Tx4HdbOXgGa2fn3NzuJgmYRx6IqQTyFhBFF%2BAG7fBMzCk9qswjeXRXbwD7XtcxosyPo3V6CGNJWj5oHFGA2otoWtnkaMNehw78GOqUB%2F5JEXWSCvc4sMSNkoVkDsIy%2FEDbxfk5%2FwqLQOqSr4mgBNV3A4261A24qjcOS0aB6yMsLKRjHH04vLklvSwkb3gp5X8ZX0gGQIqzQEOnB%2BtibDSdEiXKTSVv6BGiRk%2Fm52DYqutwNTIA%2B7N%2Bj2zMT18WRfct0e4u%2BuRGxXR%2Box1%2FyA2Bgh1Xqmq6Lm6b5%2B77vyPWTPk%2F2HfXW20Jlezo59LNtjg5F&X-Amz-Signature=42392e978545a1afe9d5e12b7c93d673219350628762d582e15e74ca48b9e3f7&X-Amz-SignedHeaders=host&x-id=GetObject)

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
