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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5O4OIEP%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T100800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB7SM5gxE2E3b1zbMHQn9nNhCY%2BIgxEkUiYjgu9lEA5nAiAkF6bCTP%2FYvff2UidO7vEzuah8z7PG%2B5TK4naH1gqC6SqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5Fab7vuwRnO3F0WQKtwDVmMoKmm3U9ArYZokklMDaCI6aS93iFpj4BoM1mMJzI4uNaL%2FIMk42XJiV9QxL1EXX61r4xzRawpSgeaME5EJNH%2FJTwfallGmnARZFh6SKLhibTf7S529xgqdDJTmrkMXnQE8fKMAWV53lZBSRmzYrulTKOtK7QQOYeapVAkUfksICq2ePIE9Bun1caJvDpHMbA85HNSKhTb%2BU0IS98n5Lq%2BxD2oCIii7vt84KCaxkLofbhBNsven6gBCxC7l2lBCFN0J9g%2BcNlZvawCSJzSamMS60rQVZ%2Bkt%2FApcjmQyHMglry%2FYBkTW%2FiCq6PfjtK34Nll7W3PPrTzjXOm%2Bi%2FSN8sJHhDCyTLgdwWuxlkhFhBic0PT4F7HSRDXLwHHXfekSm6yYDpYQPZJGsndczvw6INKtZjKHusA5HqNqbUjI1sIci00FH9Un45in51as0jH7HS%2FBgA2iixfFCqyWURRuoWycepfwf%2FiOBk59HdoLkf8LRATkdpnLH41SUt7hbVBvg82QeMgwZeP1D3870wbvfWwsVl%2Fz%2FAknpURtPWYgmK8PQUNIRUUMtHVREWtTwownygY0bt7uZfmL4fxXher%2BOnXVeQ5bvmbOKnObHfPDRq6O9Y99Jlz0iuq0N1Ew9oPrwQY6pgGUFfA5d5STGbsD28RBhOZV9pEGqiaUMJIfqKJhKAjL05g7lcYDkYWSI%2FJViHIAtPZfnnPsM%2F92J5Wdo2WpCcEdVUGM%2BDAcM4%2BDCitdoCJ3i%2BgresF1EDDYKXqrO2ax54L75%2BZzuP20%2BdYIMXkqH%2FyZOCRxnccGZNBNG%2FMNw3pt1Io0YV5OZjqBiOekOc7wACwYRHHto3crtt8ZHs5fvje4Pl8%2FMkm6&X-Amz-Signature=27ecbd5bb53383f67a1c625829666fc91c5d44d5b5939311064c01eb749a3a92&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5O4OIEP%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T100800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB7SM5gxE2E3b1zbMHQn9nNhCY%2BIgxEkUiYjgu9lEA5nAiAkF6bCTP%2FYvff2UidO7vEzuah8z7PG%2B5TK4naH1gqC6SqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5Fab7vuwRnO3F0WQKtwDVmMoKmm3U9ArYZokklMDaCI6aS93iFpj4BoM1mMJzI4uNaL%2FIMk42XJiV9QxL1EXX61r4xzRawpSgeaME5EJNH%2FJTwfallGmnARZFh6SKLhibTf7S529xgqdDJTmrkMXnQE8fKMAWV53lZBSRmzYrulTKOtK7QQOYeapVAkUfksICq2ePIE9Bun1caJvDpHMbA85HNSKhTb%2BU0IS98n5Lq%2BxD2oCIii7vt84KCaxkLofbhBNsven6gBCxC7l2lBCFN0J9g%2BcNlZvawCSJzSamMS60rQVZ%2Bkt%2FApcjmQyHMglry%2FYBkTW%2FiCq6PfjtK34Nll7W3PPrTzjXOm%2Bi%2FSN8sJHhDCyTLgdwWuxlkhFhBic0PT4F7HSRDXLwHHXfekSm6yYDpYQPZJGsndczvw6INKtZjKHusA5HqNqbUjI1sIci00FH9Un45in51as0jH7HS%2FBgA2iixfFCqyWURRuoWycepfwf%2FiOBk59HdoLkf8LRATkdpnLH41SUt7hbVBvg82QeMgwZeP1D3870wbvfWwsVl%2Fz%2FAknpURtPWYgmK8PQUNIRUUMtHVREWtTwownygY0bt7uZfmL4fxXher%2BOnXVeQ5bvmbOKnObHfPDRq6O9Y99Jlz0iuq0N1Ew9oPrwQY6pgGUFfA5d5STGbsD28RBhOZV9pEGqiaUMJIfqKJhKAjL05g7lcYDkYWSI%2FJViHIAtPZfnnPsM%2F92J5Wdo2WpCcEdVUGM%2BDAcM4%2BDCitdoCJ3i%2BgresF1EDDYKXqrO2ax54L75%2BZzuP20%2BdYIMXkqH%2FyZOCRxnccGZNBNG%2FMNw3pt1Io0YV5OZjqBiOekOc7wACwYRHHto3crtt8ZHs5fvje4Pl8%2FMkm6&X-Amz-Signature=e6f79e0e5bfbeeea1a8985ba483fd60f4758006245b6390332e0313f823fb77b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
