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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Z626NBY%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T140651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCDHAK6YQL0LMsettipV1x5wgt7ItPkHqHsFO8udVLNTgIge7Cmp%2B3A0vL41mBmNVI34DGUfR9u2ve2zd2E3BidHuoq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDCt%2BNliQX4wTlGanfyrcA8vs2pNufRrnncFA%2FkLlMJBC6eq%2FEcSkwBgu7sUdQOO%2FantnvIDb%2BZaVFyse5U11FK7EEfeIzii2sXWSDo2unL7BttNVH34M6%2FHzShsX%2B%2BHJVixNfbP4IzuenAj7cJdKLO9QSxoEPn2gY%2F5db9iH19uC8IwlT8aQuAcAFDm3UB35pfI8v13YTbYscHyKWuN4YeVhCeJjC5S0fPwfhBb82ybwT59QSj%2FX7pL5uD3qbi%2FW1kD06I5NEr37qAbbRD9OYg8PquFM3wB2t%2BD%2FH2IAeMlceARhvq%2BFwsMhZxie38YkjUxm9nUqS8sWfFrx%2B3pow4yPf%2BfiZLU598OaQDRwcYHdKl8AbL2QdTZRpNCFr00OLN7BT5WJhZ%2Bytwnj5K%2BCdGTK4s140V8zNfY0%2BhcuCvIMIQ8Uni9%2FcN2z8Z01V%2F36TC49B2TjXyOtTkotc1%2FQKQQioU6bRXrO2tcVAdAklL8rKevsPa4S4p7DnGnXbg8AxvSEcoa6h66Up6dA5WdbX49sBDomXHzU4P5IiC6ZquiY2WqBC1zZtF0NrXEbe%2BswUmoY%2B6V3ZbeYAMlDSBYwlXy6tqwCAt90jydBT7x%2B6m8t8LLWjxzKHs%2BTv1zzI8BSu3ziZo%2FqXamNhTVAMMPMs8AGOqUBGoxvy%2BYinFWtp4rlp9e7gecj5Xzn2y6FcSrauRr6hnOpz3D1XwCM8UWdPPmyaYfzrJvY1er%2BnxdtN206%2Bb%2FYb2O90lwk%2BQjO%2Fnkg84qW%2BlwSwlvHHBBac2LTzLi0U7ai0tpqa8RF0FhkPrqgC4nku9%2Fi6C%2BbREDOd4Vjfa8JQQH6LhJHC%2Bzuu1v%2F24kewDsTzpOpkwTllghJmOfgVNmoqfUOoMWS&X-Amz-Signature=2952bb8c4f57874e60ecc7c15e8956c1467fe28e3cfd20ef187408c261d8ddac&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Z626NBY%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T140651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCDHAK6YQL0LMsettipV1x5wgt7ItPkHqHsFO8udVLNTgIge7Cmp%2B3A0vL41mBmNVI34DGUfR9u2ve2zd2E3BidHuoq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDCt%2BNliQX4wTlGanfyrcA8vs2pNufRrnncFA%2FkLlMJBC6eq%2FEcSkwBgu7sUdQOO%2FantnvIDb%2BZaVFyse5U11FK7EEfeIzii2sXWSDo2unL7BttNVH34M6%2FHzShsX%2B%2BHJVixNfbP4IzuenAj7cJdKLO9QSxoEPn2gY%2F5db9iH19uC8IwlT8aQuAcAFDm3UB35pfI8v13YTbYscHyKWuN4YeVhCeJjC5S0fPwfhBb82ybwT59QSj%2FX7pL5uD3qbi%2FW1kD06I5NEr37qAbbRD9OYg8PquFM3wB2t%2BD%2FH2IAeMlceARhvq%2BFwsMhZxie38YkjUxm9nUqS8sWfFrx%2B3pow4yPf%2BfiZLU598OaQDRwcYHdKl8AbL2QdTZRpNCFr00OLN7BT5WJhZ%2Bytwnj5K%2BCdGTK4s140V8zNfY0%2BhcuCvIMIQ8Uni9%2FcN2z8Z01V%2F36TC49B2TjXyOtTkotc1%2FQKQQioU6bRXrO2tcVAdAklL8rKevsPa4S4p7DnGnXbg8AxvSEcoa6h66Up6dA5WdbX49sBDomXHzU4P5IiC6ZquiY2WqBC1zZtF0NrXEbe%2BswUmoY%2B6V3ZbeYAMlDSBYwlXy6tqwCAt90jydBT7x%2B6m8t8LLWjxzKHs%2BTv1zzI8BSu3ziZo%2FqXamNhTVAMMPMs8AGOqUBGoxvy%2BYinFWtp4rlp9e7gecj5Xzn2y6FcSrauRr6hnOpz3D1XwCM8UWdPPmyaYfzrJvY1er%2BnxdtN206%2Bb%2FYb2O90lwk%2BQjO%2Fnkg84qW%2BlwSwlvHHBBac2LTzLi0U7ai0tpqa8RF0FhkPrqgC4nku9%2Fi6C%2BbREDOd4Vjfa8JQQH6LhJHC%2Bzuu1v%2F24kewDsTzpOpkwTllghJmOfgVNmoqfUOoMWS&X-Amz-Signature=91e72e72600c3d779a46bfe4d25df9ca8483426783d9e80a51ad93bedf82bf83&X-Amz-SignedHeaders=host&x-id=GetObject)

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
