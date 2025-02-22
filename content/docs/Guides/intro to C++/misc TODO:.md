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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VM22GVL%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T060942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD2ZneuoC1E%2Bk9hMw%2BscSdyMwY9b2xrwqAr6OaKbFMdcQIgCia%2BtJwmadsQosG4bjREY4Ml8YfClW24LCGKtdTsnEoqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFFpaEJRR51zidt89SrcA3%2F%2B74yAME0I08FhxxjKKMihXmvU6swewebcdtKqCChLrRajnZbOX5FA6UMwYUvtk3dbehtWejZd56mLvxdHpBMP%2Bqr3PjPqVrHa3t8ZrjI5h4hwGFJd89VIx0oOx23KGBoe5%2Bf9oYsQ6HEqGanDFGeeotX8wbZmGJLww%2BtcOrzMpY%2BpiulBTX88Cat0pkqoZemfr3p1anRlC1LujClmrodVmGWOp8LwwxtUnNPpmgGs54zHrU%2B38p%2FwEJfQ6QhI%2F2l49iW622qFSyMZq1ZkgrtHchB2BAM4JFXZm0AgPP%2FXHEX0K%2FlX18uolk3fBdKwK4sFuYhPoFNGsm%2FxaHldm0k5MLfetdD1bEszrv7WfEUKlrPlp4gPvAXz3EJOe5uL14reRMTy696fEK1zVCLputf3UuvswP%2BM%2B7G%2FiQ6Eb2uFRxXEE8Y1ywj649p%2Ba5vy%2FsAAPfWkEV3dw%2BaoIwMy2H4SSVPGMi1Vp9z9IimDjTcw7t0FGeVSNlHcTGpvZeuMnrjVinfNLVkmQJpL6bdZtegJyB9HhgeF08S8GuytKC6%2FKnPOcjkjn7B%2F8TpXRllPA4jR1%2FFVbeakzZzwxJIqzFsocUODyCsXg6FnSK90oPXmF8zgQE1HKjlcLsyjMJvI5b0GOqUB3wbDGikBVNwcfxUpWPPQxoSzdDvO4ZrfcE%2BnjKcYafOE6CVvg%2Fj%2ByDBTGlQhEMRwNrS%2BaDuG%2Bl%2BX6r24ngSN68JA2TItI%2FC4lDydk5yhBnGUd%2BnHm4rgGdLPuSiGrVDwDfQDNLTVjNVXVu8SPplndi6Z75%2FVXJLlP0QirGqsFvyPehmmne8Fc%2F%2BEidg1CvlsO1pQLt4D5UoVDGzTfRCs3HCtwpMs&X-Amz-Signature=93d611ba88c915e40b6b8a8943fb661a75d8fc9b0a3e7b658d835cdb199e6737&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VM22GVL%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T060942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD2ZneuoC1E%2Bk9hMw%2BscSdyMwY9b2xrwqAr6OaKbFMdcQIgCia%2BtJwmadsQosG4bjREY4Ml8YfClW24LCGKtdTsnEoqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFFpaEJRR51zidt89SrcA3%2F%2B74yAME0I08FhxxjKKMihXmvU6swewebcdtKqCChLrRajnZbOX5FA6UMwYUvtk3dbehtWejZd56mLvxdHpBMP%2Bqr3PjPqVrHa3t8ZrjI5h4hwGFJd89VIx0oOx23KGBoe5%2Bf9oYsQ6HEqGanDFGeeotX8wbZmGJLww%2BtcOrzMpY%2BpiulBTX88Cat0pkqoZemfr3p1anRlC1LujClmrodVmGWOp8LwwxtUnNPpmgGs54zHrU%2B38p%2FwEJfQ6QhI%2F2l49iW622qFSyMZq1ZkgrtHchB2BAM4JFXZm0AgPP%2FXHEX0K%2FlX18uolk3fBdKwK4sFuYhPoFNGsm%2FxaHldm0k5MLfetdD1bEszrv7WfEUKlrPlp4gPvAXz3EJOe5uL14reRMTy696fEK1zVCLputf3UuvswP%2BM%2B7G%2FiQ6Eb2uFRxXEE8Y1ywj649p%2Ba5vy%2FsAAPfWkEV3dw%2BaoIwMy2H4SSVPGMi1Vp9z9IimDjTcw7t0FGeVSNlHcTGpvZeuMnrjVinfNLVkmQJpL6bdZtegJyB9HhgeF08S8GuytKC6%2FKnPOcjkjn7B%2F8TpXRllPA4jR1%2FFVbeakzZzwxJIqzFsocUODyCsXg6FnSK90oPXmF8zgQE1HKjlcLsyjMJvI5b0GOqUB3wbDGikBVNwcfxUpWPPQxoSzdDvO4ZrfcE%2BnjKcYafOE6CVvg%2Fj%2ByDBTGlQhEMRwNrS%2BaDuG%2Bl%2BX6r24ngSN68JA2TItI%2FC4lDydk5yhBnGUd%2BnHm4rgGdLPuSiGrVDwDfQDNLTVjNVXVu8SPplndi6Z75%2FVXJLlP0QirGqsFvyPehmmne8Fc%2F%2BEidg1CvlsO1pQLt4D5UoVDGzTfRCs3HCtwpMs&X-Amz-Signature=5fddf343dc21fc80cdf1d4ee95da20430c2d1639948694a718c1d540db732a32&X-Amz-SignedHeaders=host&x-id=GetObject)

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
