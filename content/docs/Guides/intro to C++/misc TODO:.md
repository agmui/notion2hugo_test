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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWECW5FI%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T041229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCqBpp3EssPhJbAhwmnHsu8UFVvKMrnuYPM%2FrsvXyF01QIgP%2Bb6hx9Pr%2FwxjesaFDmFcvsSOaSwCzYtQhhVgP6W1wcqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBjmvD2TP%2F2Bj%2BCY7ircA23xHxgwfVqj42yPcI%2F7br6iVn0NdrKsfrUT79r4J9AJCnRZyJJRbQi8fTN%2BWBCNUusuQHxWvp4opz08brdL1PzT08YVCfBbSgQV2DRxQU3ZUna8H2O2NMtV4KYzuqqMm2i39fOuPQxP%2BVCKGG%2FVY%2FvDK6HJYTw1g13CSFDMM4TvbTI5r9bn589mThjc2j%2FnEpUYoWeQFPKR%2BS9Cbuc1Xllk2XjO7yHFHJs48i%2B%2BJz3qI3SDi6xcRyCi0Brq3EVP%2BOUn6WYgmbUMoQLV6CUXaq73hihgn6wuixHi9YyMnkdpbIz6nHVEH%2BVWoT00WX4bsoN5MHbxAg47x8kouaXGWfYiA%2BtyOdZ5QqHN69lhMd9aHYuDvXAJ7Z1gmoQJnjAFNBDHO5%2Fd7hlVAkzDmVsqdRmrBTLG1JSfE%2BxNisswxdaXPFM0mb0jUTzACc%2FyOEL2qMj%2Fg%2F%2FlTFAHMJARnkjQBMw82Ca64bZejqk8YKoqASEkqpVWvWXTduU0de8m7Q0El1MqClw4CnCttwOOY9HPt3%2F1kVkWCwXEWhR7Ho5kp0HQ1LWCinPxRaIb2sjadeG%2FM2WAywx4EFS88SezTOSG%2F3jxEay8GqJznBCEgwUzigbTTkrD9fhPx6dH0nVPMPf99cAGOqUBSu%2BdUqt9tOHB9iHd%2BJbyD8AbdEEARQ2T8%2FnxQQQcwa%2FcMmgTlBt49xszT1ed%2FioKQDx9SxaROyt%2FIHrywZvYuzQkf3v5OCHZndNGX2qbZCY8L35n%2Bi1i%2BEge6k5HpX%2B%2FAsySj12xLv5bSHRWMZCJY%2FgEZw%2BuBsHgb125gutMxwqBVjf%2F%2F90La8t3WSkxCdWnW31PqVk%2Fxmxc9GfHJrSElHPsIeNo&X-Amz-Signature=da8128db7bb99b228244d705ad3bb98b5ff03366fe1050aeee857b911f10cd6a&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWECW5FI%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T041229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCqBpp3EssPhJbAhwmnHsu8UFVvKMrnuYPM%2FrsvXyF01QIgP%2Bb6hx9Pr%2FwxjesaFDmFcvsSOaSwCzYtQhhVgP6W1wcqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBjmvD2TP%2F2Bj%2BCY7ircA23xHxgwfVqj42yPcI%2F7br6iVn0NdrKsfrUT79r4J9AJCnRZyJJRbQi8fTN%2BWBCNUusuQHxWvp4opz08brdL1PzT08YVCfBbSgQV2DRxQU3ZUna8H2O2NMtV4KYzuqqMm2i39fOuPQxP%2BVCKGG%2FVY%2FvDK6HJYTw1g13CSFDMM4TvbTI5r9bn589mThjc2j%2FnEpUYoWeQFPKR%2BS9Cbuc1Xllk2XjO7yHFHJs48i%2B%2BJz3qI3SDi6xcRyCi0Brq3EVP%2BOUn6WYgmbUMoQLV6CUXaq73hihgn6wuixHi9YyMnkdpbIz6nHVEH%2BVWoT00WX4bsoN5MHbxAg47x8kouaXGWfYiA%2BtyOdZ5QqHN69lhMd9aHYuDvXAJ7Z1gmoQJnjAFNBDHO5%2Fd7hlVAkzDmVsqdRmrBTLG1JSfE%2BxNisswxdaXPFM0mb0jUTzACc%2FyOEL2qMj%2Fg%2F%2FlTFAHMJARnkjQBMw82Ca64bZejqk8YKoqASEkqpVWvWXTduU0de8m7Q0El1MqClw4CnCttwOOY9HPt3%2F1kVkWCwXEWhR7Ho5kp0HQ1LWCinPxRaIb2sjadeG%2FM2WAywx4EFS88SezTOSG%2F3jxEay8GqJznBCEgwUzigbTTkrD9fhPx6dH0nVPMPf99cAGOqUBSu%2BdUqt9tOHB9iHd%2BJbyD8AbdEEARQ2T8%2FnxQQQcwa%2FcMmgTlBt49xszT1ed%2FioKQDx9SxaROyt%2FIHrywZvYuzQkf3v5OCHZndNGX2qbZCY8L35n%2Bi1i%2BEge6k5HpX%2B%2FAsySj12xLv5bSHRWMZCJY%2FgEZw%2BuBsHgb125gutMxwqBVjf%2F%2F90La8t3WSkxCdWnW31PqVk%2Fxmxc9GfHJrSElHPsIeNo&X-Amz-Signature=5e13ebd40314eaf11a3a473106729ebc5c88852dc4046f6166e1201871eb2e5d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
