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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GCVNVMH%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T050715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDUHqERcbPpCyCSQ31wQVbEO8hAY1prlZbECUELLsCOfQIgb9lX7RdSWGsoOOvRc%2BcvAWJ3AL5j%2Fuw%2FECNa1Ank28sqiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMNK%2Fyn4%2BpzOhhEoYCrcA2Y0G3ke4vBf9xX2Ju5il%2B6dZB59ksHlgohyjtAI2TBGVLnxncG9IBQD6stUahApNbO5RC3X1KfT0dJl2ta4sEMlkwPkhkp7KtF%2FcEdDmn5GevKbykonNGNGTenKhDwqwn14BH5fPKvztUw1OnYHg26NQs7Eg1vMGBhq8vSaSHZm4jc8ZtX5ZnQmT0SB%2FWTwTXAvPA636pi7Ik%2BjaQQwJqx4J6ogiT5UauQnpCZx8EOaaarJoX0eIa8Zn5fb%2FkF%2BXe5YTF8GBv7ftGl7OkttroSqGKNAwj%2BHA3Qsz%2F9uXgnmunTGTebPo5Pum9M9IanHKEXfdVVCCbkDJI7QruNvII1BMxBCCAoHBwGQPA%2FjrEcjEdo9iRYBJhW4pSq2W0ULn0vkjgcaMypdMgzAZOqcqoMSHuEjQKz0oQXWmsk8ezaPJo4I66hq7EwLV9m3BFlsZ4h0KkB7GhsuHO7ipWS1sL1C6xnd7ahXV2yaj%2BcUy30ur9XYFV8hG0BKPUQCoicbi7ZddqZ8BlQEZc7sacYJAgspQzUHNS11naqye6SNRynLmCrSkxyBT5ofsqtm%2BoIbfWiKYc7wNsuenBxvEuI3VK56BAQVKIjRzeRrJvoULpVDu2M0Ho8vC94zVvfhMMaO6r0GOqUBUhT8v4KTm0sR4ndhrE0pGssd%2B%2BdKhvQ1%2F7V55BMCH%2FYSkXbTqFhb%2BgSD9G6fqgdIOidjy%2BMVQQo%2BdIG760jy%2FXGQFaBbF%2FBT1%2F67y3qS4HwsPVG%2FVX94qCRpRRDCqrpow%2F%2BKQX9C%2FsIkVrmRjlBPCw%2FvcPCIiDFqdQraFq%2FN52UPu62oxEEo6nXB6oDEqDJADFdlehUFseQpBM2VO03FWSQIhFCV&X-Amz-Signature=dddd06ba78274dd77aebdb8b2eadd65ef4a99b12c3b819a0cc6104fe62734c78&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GCVNVMH%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T050715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDUHqERcbPpCyCSQ31wQVbEO8hAY1prlZbECUELLsCOfQIgb9lX7RdSWGsoOOvRc%2BcvAWJ3AL5j%2Fuw%2FECNa1Ank28sqiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMNK%2Fyn4%2BpzOhhEoYCrcA2Y0G3ke4vBf9xX2Ju5il%2B6dZB59ksHlgohyjtAI2TBGVLnxncG9IBQD6stUahApNbO5RC3X1KfT0dJl2ta4sEMlkwPkhkp7KtF%2FcEdDmn5GevKbykonNGNGTenKhDwqwn14BH5fPKvztUw1OnYHg26NQs7Eg1vMGBhq8vSaSHZm4jc8ZtX5ZnQmT0SB%2FWTwTXAvPA636pi7Ik%2BjaQQwJqx4J6ogiT5UauQnpCZx8EOaaarJoX0eIa8Zn5fb%2FkF%2BXe5YTF8GBv7ftGl7OkttroSqGKNAwj%2BHA3Qsz%2F9uXgnmunTGTebPo5Pum9M9IanHKEXfdVVCCbkDJI7QruNvII1BMxBCCAoHBwGQPA%2FjrEcjEdo9iRYBJhW4pSq2W0ULn0vkjgcaMypdMgzAZOqcqoMSHuEjQKz0oQXWmsk8ezaPJo4I66hq7EwLV9m3BFlsZ4h0KkB7GhsuHO7ipWS1sL1C6xnd7ahXV2yaj%2BcUy30ur9XYFV8hG0BKPUQCoicbi7ZddqZ8BlQEZc7sacYJAgspQzUHNS11naqye6SNRynLmCrSkxyBT5ofsqtm%2BoIbfWiKYc7wNsuenBxvEuI3VK56BAQVKIjRzeRrJvoULpVDu2M0Ho8vC94zVvfhMMaO6r0GOqUBUhT8v4KTm0sR4ndhrE0pGssd%2B%2BdKhvQ1%2F7V55BMCH%2FYSkXbTqFhb%2BgSD9G6fqgdIOidjy%2BMVQQo%2BdIG760jy%2FXGQFaBbF%2FBT1%2F67y3qS4HwsPVG%2FVX94qCRpRRDCqrpow%2F%2BKQX9C%2FsIkVrmRjlBPCw%2FvcPCIiDFqdQraFq%2FN52UPu62oxEEo6nXB6oDEqDJADFdlehUFseQpBM2VO03FWSQIhFCV&X-Amz-Signature=de6b26fa13bc0877ef5b4087d3f3d86c9fed5b79927fdee8339999395bacbc14&X-Amz-SignedHeaders=host&x-id=GetObject)

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
