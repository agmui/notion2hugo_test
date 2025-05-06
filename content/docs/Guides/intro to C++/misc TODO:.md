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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NZ3LJF3%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T151057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDX64xxgxKTWfAQ0K6aXqAI91Em6MeoPvFvCcBp%2FJCkBwIgNPNixWwhl3zq83Lgd0uaiaKnrq85HK6sDO%2FTFq%2FGY0Mq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDH49vcD%2BX57qRnCsLyrcAz3S2LaqVWpqZXaOE0WrwSX93G2Ulw6zewtf9gxyPibtF570IcduJBAiwz8y5rUf2pjH4ZJDac3lp4Cp4K6yymA%2Fm0WGf%2FKH6ykTy0E2O%2FqKM%2FJQC3pCTKYC%2FLTz9IA0jphZluzlIuHvOMhPWPvDYKtLlCqZapg0lFIvmbhH02DSGGL5fhqCuCUsSVvWad8ZKRJ%2BJsNiFDcdOQL%2F1h6n9uhKmoaEh91gq6OV399QcEkoGgYqFTvHCS5Q6qzLUZZGqZqIwxCQQrIPNKM5wHytIh8gJKILRTgtfSUp2PFgcDs8RPIQpe9N2EKXc5scnZGNOPi%2FzcF24GrEdyXKQYvxDjPij4PMOGIyZI9sEctnIiF5LqddUaWhAO7YZqc9be11Mnafd%2F4EqGQrsAUXTDdc0XisuQabkgzpb06d7WDWhOOpuPA2PJeIZGJ0xEs0WJY8aI37pj%2Bka0f2z5DR4ButZud5h1BJbaMXef38SMJQk%2FK%2BvTgIgyDw%2FH19o0BfdCvHWzv8%2B84DBrDA5oV1QGITx6hpqwbiqcjvBqZiRm%2BoLpmE6tJzFWKCfJUtgCM4UujvTIC%2B%2BTtTKBs%2FiowJhf%2BkdbPcAuS3cbqjSffFcEYFYmgGnrGgmvsVbgt0QACVMPWy6MAGOqUBkKO%2BVl1GX0rGXpMKjouyl1XOQ%2BW9irr5w8jC62z1CxZg6GtuqfS2mNzhj6BTg14ZDIyJtodh%2F9acQYMJd3cRg9juQqq8w6%2B%2Bd42CBM7w%2B0R7Nvk6JiO1qiJIXV%2BM8bVeh2bG0s%2Bqa0EhoQraA9JMCyjvFBCGQtPjea50wmtI%2FEPtXqTvEtt5P%2FKvZZ0KcEucpVWyN9TJKAGuV3OsoIauDMLtdETK&X-Amz-Signature=c3848f3f8eff7a9f8009ab418dc3c5ab497d8f32e8ee5f544b3c023e1d8e7e43&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NZ3LJF3%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T151057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDX64xxgxKTWfAQ0K6aXqAI91Em6MeoPvFvCcBp%2FJCkBwIgNPNixWwhl3zq83Lgd0uaiaKnrq85HK6sDO%2FTFq%2FGY0Mq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDH49vcD%2BX57qRnCsLyrcAz3S2LaqVWpqZXaOE0WrwSX93G2Ulw6zewtf9gxyPibtF570IcduJBAiwz8y5rUf2pjH4ZJDac3lp4Cp4K6yymA%2Fm0WGf%2FKH6ykTy0E2O%2FqKM%2FJQC3pCTKYC%2FLTz9IA0jphZluzlIuHvOMhPWPvDYKtLlCqZapg0lFIvmbhH02DSGGL5fhqCuCUsSVvWad8ZKRJ%2BJsNiFDcdOQL%2F1h6n9uhKmoaEh91gq6OV399QcEkoGgYqFTvHCS5Q6qzLUZZGqZqIwxCQQrIPNKM5wHytIh8gJKILRTgtfSUp2PFgcDs8RPIQpe9N2EKXc5scnZGNOPi%2FzcF24GrEdyXKQYvxDjPij4PMOGIyZI9sEctnIiF5LqddUaWhAO7YZqc9be11Mnafd%2F4EqGQrsAUXTDdc0XisuQabkgzpb06d7WDWhOOpuPA2PJeIZGJ0xEs0WJY8aI37pj%2Bka0f2z5DR4ButZud5h1BJbaMXef38SMJQk%2FK%2BvTgIgyDw%2FH19o0BfdCvHWzv8%2B84DBrDA5oV1QGITx6hpqwbiqcjvBqZiRm%2BoLpmE6tJzFWKCfJUtgCM4UujvTIC%2B%2BTtTKBs%2FiowJhf%2BkdbPcAuS3cbqjSffFcEYFYmgGnrGgmvsVbgt0QACVMPWy6MAGOqUBkKO%2BVl1GX0rGXpMKjouyl1XOQ%2BW9irr5w8jC62z1CxZg6GtuqfS2mNzhj6BTg14ZDIyJtodh%2F9acQYMJd3cRg9juQqq8w6%2B%2Bd42CBM7w%2B0R7Nvk6JiO1qiJIXV%2BM8bVeh2bG0s%2Bqa0EhoQraA9JMCyjvFBCGQtPjea50wmtI%2FEPtXqTvEtt5P%2FKvZZ0KcEucpVWyN9TJKAGuV3OsoIauDMLtdETK&X-Amz-Signature=f0a99f09c524d228e71bb20b0105a5c3dd58bdb4cf3fd6269833302b91c454b5&X-Amz-SignedHeaders=host&x-id=GetObject)

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
