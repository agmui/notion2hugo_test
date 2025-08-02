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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665P47C5PO%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T042500Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBBGVutcDj3e7w1HSOF7gsD4U4MSOu%2F9ZKU55YJZxmC1AiEA7qsbOPpusTk1zMwnz5XDFHrZ2eOCeMwx9s2dVJYl6pIqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP3CZpdBEgp4u25gTircAxSmN6OQzT%2Bmlbe1XpW4ZHMMbfq3TPXyTQa2r6Zps20Ld6%2BELeksWVVD8HN8MfXjTZ5S5EIJ2aC4tLX%2FnPTkN6c7f7jWh5RtOsw0U24fGXVjnrzhZ4UVmxIeSplrDf8XwxIcJ88yRahG7QWirbl%2B4VFvIjHOrYWgDG6X1IOU7qWzKLU9%2BVSmD28HxFe%2BC%2FBOrLlUFTPDDEDFU6mZcqQGx%2FIbSibgaGzxcnJXWNsPJT%2F2ct0xmSc2CyFtnqe61uXRDXAVJgFPOoIOY9KDvxnkK%2Fxp%2BC%2BLucV8TIu49OGXFhvbR0hw0Z59hzB3AhKFyVTmT2QF6Et0Lesq%2BpirmqYuAoxNa6WboUE4gnxmNCvnNi6gvgGlbMc3YtYEVe46cJXxv1jN3GMoy%2FYPNnhVuCLY7r0k1G%2B4Cl85w9cGD488QrzgX4z0Ar4ZzgrCJDc2OEqK2Mqqnf8%2FdNWkHbGinHsAbhbqFp1Vju7%2BWAWCH2FRyCXNeWqOiNhpTzscBV0bnWu3C6KJGFbl6GgU4W7F9e3O6yFBNCMoEtUNLDaUI7%2BRHdRD0r30YGaLIpuyCbn6uqfkPpBrXHF%2Fk7jIb1nQ1kenxbtsJuhUR231f%2FK9dFrr%2FPWupfgNHp2Tm%2FUBEHl0MM2ctsQGOqUBJ%2BOEaE1h7xMBcO0EPH65TG49Dq6PuwkkpeK3zwMuqdzyLLBlFbDGrZin2gLok20ipE8nzN65rXkuuHG9HLr6SAUC1Ih7ffgoWSWpVTG0%2FyxhDbYaC8Pl4rARq6a08tZX%2B%2BFIN1U7fuksczRsLoucDfa1C%2Fx6jaDgiGbzu5q1ivJn6XnXfpXfrTk6cWZuqowMCYiom%2FR5teTf2oukjSlKJTLwqfW5&X-Amz-Signature=40ff47e5de358c015ce151c3b53d6e88f30bcda96c2f0a6e7659ce2538ae8238&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665P47C5PO%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T042500Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBBGVutcDj3e7w1HSOF7gsD4U4MSOu%2F9ZKU55YJZxmC1AiEA7qsbOPpusTk1zMwnz5XDFHrZ2eOCeMwx9s2dVJYl6pIqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP3CZpdBEgp4u25gTircAxSmN6OQzT%2Bmlbe1XpW4ZHMMbfq3TPXyTQa2r6Zps20Ld6%2BELeksWVVD8HN8MfXjTZ5S5EIJ2aC4tLX%2FnPTkN6c7f7jWh5RtOsw0U24fGXVjnrzhZ4UVmxIeSplrDf8XwxIcJ88yRahG7QWirbl%2B4VFvIjHOrYWgDG6X1IOU7qWzKLU9%2BVSmD28HxFe%2BC%2FBOrLlUFTPDDEDFU6mZcqQGx%2FIbSibgaGzxcnJXWNsPJT%2F2ct0xmSc2CyFtnqe61uXRDXAVJgFPOoIOY9KDvxnkK%2Fxp%2BC%2BLucV8TIu49OGXFhvbR0hw0Z59hzB3AhKFyVTmT2QF6Et0Lesq%2BpirmqYuAoxNa6WboUE4gnxmNCvnNi6gvgGlbMc3YtYEVe46cJXxv1jN3GMoy%2FYPNnhVuCLY7r0k1G%2B4Cl85w9cGD488QrzgX4z0Ar4ZzgrCJDc2OEqK2Mqqnf8%2FdNWkHbGinHsAbhbqFp1Vju7%2BWAWCH2FRyCXNeWqOiNhpTzscBV0bnWu3C6KJGFbl6GgU4W7F9e3O6yFBNCMoEtUNLDaUI7%2BRHdRD0r30YGaLIpuyCbn6uqfkPpBrXHF%2Fk7jIb1nQ1kenxbtsJuhUR231f%2FK9dFrr%2FPWupfgNHp2Tm%2FUBEHl0MM2ctsQGOqUBJ%2BOEaE1h7xMBcO0EPH65TG49Dq6PuwkkpeK3zwMuqdzyLLBlFbDGrZin2gLok20ipE8nzN65rXkuuHG9HLr6SAUC1Ih7ffgoWSWpVTG0%2FyxhDbYaC8Pl4rARq6a08tZX%2B%2BFIN1U7fuksczRsLoucDfa1C%2Fx6jaDgiGbzu5q1ivJn6XnXfpXfrTk6cWZuqowMCYiom%2FR5teTf2oukjSlKJTLwqfW5&X-Amz-Signature=a1059e19052ba8610227051dbb5988ddc4c261be88c270a278fc19f508d045f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
