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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5Z6D6KR%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T170753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDVS5HsvL0cRrBkESJQMsU7qj2Fwtgc%2Ff84yxD%2B1y7eMwIgDyrujwddK8ATwaIQX77woXlOwwzp7dT1Wa1Rgxo9Ky4qiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCQ3ryMFAHdjdmuz2ircA43WpJCd7gA9VXW7L9A82JkiGhBGewULoJEA4hy6rLSaIyT%2FOWycJNf%2Fv%2FxnzAKZlQ%2BBrNrlkJK6IvrqncLWgV7qcM%2FGglZnbxHm2D%2F2KTEMv9PwaEaitfSrQC56RNDbCx6bQqj8DFHTgZJmU0AfhyomVNLaosMajNuQQ4scmf8RaaxiVTX%2FxIiDp8Qf7SF182dUOtjM%2FqUHn6QdPtps23q6yKWg9mo9HHmOsCOnOcELnMQNC%2F%2BcrI5DVLkSDiMJCYcdSus8LJ2ToRTfpLopoCAMG50iDqtMF61LImZl0dUQb2O%2Bvd3ZBZGmA4m2VIFSaOVxw0EJfoP3JJ1V1zyn%2BTx%2Brr3rCx9nyRvRVfVxmU4XrpYQYYahmjZn2%2B0%2BeN2ouP1NDNkAP32HrQV1ViDrUXBe1yrU1InPT9bhWG9YMJUsz%2Fxsi5tuqBxjGxVMl%2FklwLQquZtcC3xMjPc7L8eQLx6GTEX9yTT7dCfI%2BS4w8SngFTOKTnHCzWE7hbCBKznNzRbAydcpvny85nneDCMI63KtOTZA7JqowLszC8qvjr2fktPjvY0zTAtUtn3QxY8zaLQGcSK74toPH5bSSq5d%2FB0aq6OMkALpw77zSDKnGxOVGaOiZNH%2FaNJ2J8LaMJ%2By4cEGOqUBqM%2F53sor9iTfjlUcXUbIBpz%2BGOXXD3gxiKdTWDqF3mDIjsmn5eBsSTT9VKVUZ09%2BlD6Vz9%2BtMWsOuEkPzyoZ%2FEneUQKOHlb7EtY6EuyHWYprGRKCZCsLMo7ukA7OpkV4LsURKTrrziys%2BQz383J1%2BCfNWcW2S%2BZ79SirTKxOs9cLcydHuIVkL6etdUmv3Vxut%2By7OFqU%2F5HySojX1HW5aVsVsSrD&X-Amz-Signature=8a6250875c37d084eb4ab1e187905f8bc631f54c0a5e18154e02ecc490c22835&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5Z6D6KR%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T170753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDVS5HsvL0cRrBkESJQMsU7qj2Fwtgc%2Ff84yxD%2B1y7eMwIgDyrujwddK8ATwaIQX77woXlOwwzp7dT1Wa1Rgxo9Ky4qiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCQ3ryMFAHdjdmuz2ircA43WpJCd7gA9VXW7L9A82JkiGhBGewULoJEA4hy6rLSaIyT%2FOWycJNf%2Fv%2FxnzAKZlQ%2BBrNrlkJK6IvrqncLWgV7qcM%2FGglZnbxHm2D%2F2KTEMv9PwaEaitfSrQC56RNDbCx6bQqj8DFHTgZJmU0AfhyomVNLaosMajNuQQ4scmf8RaaxiVTX%2FxIiDp8Qf7SF182dUOtjM%2FqUHn6QdPtps23q6yKWg9mo9HHmOsCOnOcELnMQNC%2F%2BcrI5DVLkSDiMJCYcdSus8LJ2ToRTfpLopoCAMG50iDqtMF61LImZl0dUQb2O%2Bvd3ZBZGmA4m2VIFSaOVxw0EJfoP3JJ1V1zyn%2BTx%2Brr3rCx9nyRvRVfVxmU4XrpYQYYahmjZn2%2B0%2BeN2ouP1NDNkAP32HrQV1ViDrUXBe1yrU1InPT9bhWG9YMJUsz%2Fxsi5tuqBxjGxVMl%2FklwLQquZtcC3xMjPc7L8eQLx6GTEX9yTT7dCfI%2BS4w8SngFTOKTnHCzWE7hbCBKznNzRbAydcpvny85nneDCMI63KtOTZA7JqowLszC8qvjr2fktPjvY0zTAtUtn3QxY8zaLQGcSK74toPH5bSSq5d%2FB0aq6OMkALpw77zSDKnGxOVGaOiZNH%2FaNJ2J8LaMJ%2By4cEGOqUBqM%2F53sor9iTfjlUcXUbIBpz%2BGOXXD3gxiKdTWDqF3mDIjsmn5eBsSTT9VKVUZ09%2BlD6Vz9%2BtMWsOuEkPzyoZ%2FEneUQKOHlb7EtY6EuyHWYprGRKCZCsLMo7ukA7OpkV4LsURKTrrziys%2BQz383J1%2BCfNWcW2S%2BZ79SirTKxOs9cLcydHuIVkL6etdUmv3Vxut%2By7OFqU%2F5HySojX1HW5aVsVsSrD&X-Amz-Signature=d8cbb69c598240dccc8a9b0352e3048e56850e50e8a768f19941fba160310a79&X-Amz-SignedHeaders=host&x-id=GetObject)

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
