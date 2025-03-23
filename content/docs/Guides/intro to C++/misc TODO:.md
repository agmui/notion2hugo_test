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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z452XREU%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T140242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQCAa6jwgwOqU30vd42yInnQf1JFQrKepW4DUb2EwgkStAIgdA8rALTveqAhVc1zMUIxWBMgGNoojB3qeXYbvUoleS4qiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAjtQ%2F1YuqsgBbYriyrcAzd0T42vSIcUoYrHJPDgjZJCfo5khWgAdz5vSrFrjQmuO%2BdJSh7BCaRh84cHJxdALoElxDbS4Zpnzh6G03JSUVPLB7QL4nEqgdSqttpPr7YXlyeTIke2FvMjQAcwrIeSGWF7pey8oPW5moaRK7Qtlwm8Qgn%2FgfyOkVOZHOlCVibUohsTSy%2BDgCiEpgWPhraNQvzu3lw%2Fg%2B%2Bff%2BzN41RgTBb75SR%2FCXTNgkPXCNI6j6WCQX6bJwzcvFuTlBX58xgzRMgeRh6F4GgCpo7mbYhGaO4O%2FIvR4yP5l2wJXXGjxB%2FUpuS6PrMoGrUy%2Bw2UwmZtEkRu5oTQJbSF0Y5rZrO%2BGy6o52Xh695xkHvB%2FfzCbtJ2bsBJjZJeu4g9VDMJdm1ntu7I2sEEus2UKwL%2BIZhtOZyLNGH8kXy3OQjFQ1zJDV%2BJkYFVRcDFBZ%2BS8%2BtxtkTYNc9PCvZ1wP%2BKgFOuxsUhaeFUYyqdvw%2FisEaykZZLg5H0DWWQSezS0WjlMqWIrZwfeBlFyiBEDq2SU8Uhv2gZA6qAcLXqEDdG0HDwecoHOchc1MMWklpu5RD2eR9QG%2B3B7umG3uVZcS5W9AlIXb73UxALJ7yHFMKC%2BYmD7utA1ASOPWXLHSJhewYUgrXJMLnM%2F74GOqUBBFZol%2FxP%2BgFHtRhha3dlf6FdPNHpf%2BS7JJOHexoztpfVbQSqwqj7NLverUa4Y3GR2hfTkKgks9dWqg6c6chQ8SftuX9%2BLakd68HXygRtLHyWPeBWliLTjDobpf9tfEHUgjSX%2BC7BxWOAo4%2F8rzXt1ZbRQ3ID2Za2BwD8qK9JYPHQ2Tlui0QujiwyAwZg8Lf%2FsKRoHReBcVokChX6du%2BXO6r9CBjK&X-Amz-Signature=dc9a2fcab1c493e5edf2919fbf7a5f9dd714288e4fcf6f6befcc129d311a8105&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z452XREU%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T140242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQCAa6jwgwOqU30vd42yInnQf1JFQrKepW4DUb2EwgkStAIgdA8rALTveqAhVc1zMUIxWBMgGNoojB3qeXYbvUoleS4qiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAjtQ%2F1YuqsgBbYriyrcAzd0T42vSIcUoYrHJPDgjZJCfo5khWgAdz5vSrFrjQmuO%2BdJSh7BCaRh84cHJxdALoElxDbS4Zpnzh6G03JSUVPLB7QL4nEqgdSqttpPr7YXlyeTIke2FvMjQAcwrIeSGWF7pey8oPW5moaRK7Qtlwm8Qgn%2FgfyOkVOZHOlCVibUohsTSy%2BDgCiEpgWPhraNQvzu3lw%2Fg%2B%2Bff%2BzN41RgTBb75SR%2FCXTNgkPXCNI6j6WCQX6bJwzcvFuTlBX58xgzRMgeRh6F4GgCpo7mbYhGaO4O%2FIvR4yP5l2wJXXGjxB%2FUpuS6PrMoGrUy%2Bw2UwmZtEkRu5oTQJbSF0Y5rZrO%2BGy6o52Xh695xkHvB%2FfzCbtJ2bsBJjZJeu4g9VDMJdm1ntu7I2sEEus2UKwL%2BIZhtOZyLNGH8kXy3OQjFQ1zJDV%2BJkYFVRcDFBZ%2BS8%2BtxtkTYNc9PCvZ1wP%2BKgFOuxsUhaeFUYyqdvw%2FisEaykZZLg5H0DWWQSezS0WjlMqWIrZwfeBlFyiBEDq2SU8Uhv2gZA6qAcLXqEDdG0HDwecoHOchc1MMWklpu5RD2eR9QG%2B3B7umG3uVZcS5W9AlIXb73UxALJ7yHFMKC%2BYmD7utA1ASOPWXLHSJhewYUgrXJMLnM%2F74GOqUBBFZol%2FxP%2BgFHtRhha3dlf6FdPNHpf%2BS7JJOHexoztpfVbQSqwqj7NLverUa4Y3GR2hfTkKgks9dWqg6c6chQ8SftuX9%2BLakd68HXygRtLHyWPeBWliLTjDobpf9tfEHUgjSX%2BC7BxWOAo4%2F8rzXt1ZbRQ3ID2Za2BwD8qK9JYPHQ2Tlui0QujiwyAwZg8Lf%2FsKRoHReBcVokChX6du%2BXO6r9CBjK&X-Amz-Signature=5af7e9ddedb9b49d9189bb88865c1c897c8de4549ce8bc72343a04653f71d24f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
