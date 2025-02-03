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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GDVUEFG%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T170249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIQDrPC4rwqt6epIiHAf5mZuCdqW1CBlQb4vVQAR1FIr4UQIgCCM%2FxkBDGTAQL3RsL%2Bz9AhjdEsYuSRp6kLb7Wfj4yEAq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDDvT%2Fto4%2FLQoX%2B%2FxfSrcA7fUbAr8%2BnGaPEwd42h2P1NCjbe600F%2B2Gebnz9o0NtRBwhuTyxFvtXGKJEVtNXi6Udf9wBmq1cA%2BYZenOfxX8hWjnxfeYNN3m%2FftteTlqdkSj8J0Mv2wqD2kN0E3Fw%2FEzXRQblokUf3LB%2FdLkcIr35iIX2Klcax80JEKyLtWjXpW%2FBq8n5Y%2BiJHeDnjyISl%2Bz9fSCOdJEfuIjHVFbzGIgyE2Mw0OP%2FSG%2Bku8B9zrTrdgLGzAOHcOt2EX%2FZ%2FyAvqYX1FjQHKdFSGtqTv8R7msDj8G%2FEuYarnraCOAlzJhA17E2l8wXaYZGg3dWsYJumFewpyfFtdYEAhdWh4IcR3E7GwDVRL6vzt8ubjMZ6Jbaw4CBWcpUxcQJDAHt748YypmwkdW%2BAVxoKq8u2bAl2KGD%2FGNZ6d9iJ2CUllp6ROSUbW1g7R7HEmCIDJAZC97MdsyQpsb3PjkcLKh9zTWUa2W4BqjpSNrk1G%2F9CTKSwb3WiYx2Rj960ZpkrMdcUsVRBHsJ31cDEIPSct6dh6yLRZw4MZWevLc1Ll8iu6QEEKWKSa2u9hkUEm54dFcbkWPwy9br3S%2Fi6ipcFsWzvj2cqU662eYewIqki6jYx9NkMjAt%2FeJxToIeA0tvCII977MMbng70GOqUBPw4q%2F0piKHylJY6%2FpYo7L9Ns1tgSuTGXZff38pYpEyLo8NsLy0NoIMmUMO5uoNcGS7TI9sj1YMh%2F5IrSP3FrSyf8ng5Ekv%2B39Q3AWmmh3DF2PQwk3iwlgnh%2Fj48JkbUxbBi3ZYOOjNmd%2Fcl8EKLpe2Gb6A9TH156%2Fq%2BmKWfMDaamfBPNoI8iHGKXx031JKFSErOB6Dd2cWCL8%2B7QywbyV9WJaamG&X-Amz-Signature=b278401ca6a41a57a5976f7673be99ef5a25d7d50c3604d40414d7bbed873940&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GDVUEFG%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T170249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIQDrPC4rwqt6epIiHAf5mZuCdqW1CBlQb4vVQAR1FIr4UQIgCCM%2FxkBDGTAQL3RsL%2Bz9AhjdEsYuSRp6kLb7Wfj4yEAq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDDvT%2Fto4%2FLQoX%2B%2FxfSrcA7fUbAr8%2BnGaPEwd42h2P1NCjbe600F%2B2Gebnz9o0NtRBwhuTyxFvtXGKJEVtNXi6Udf9wBmq1cA%2BYZenOfxX8hWjnxfeYNN3m%2FftteTlqdkSj8J0Mv2wqD2kN0E3Fw%2FEzXRQblokUf3LB%2FdLkcIr35iIX2Klcax80JEKyLtWjXpW%2FBq8n5Y%2BiJHeDnjyISl%2Bz9fSCOdJEfuIjHVFbzGIgyE2Mw0OP%2FSG%2Bku8B9zrTrdgLGzAOHcOt2EX%2FZ%2FyAvqYX1FjQHKdFSGtqTv8R7msDj8G%2FEuYarnraCOAlzJhA17E2l8wXaYZGg3dWsYJumFewpyfFtdYEAhdWh4IcR3E7GwDVRL6vzt8ubjMZ6Jbaw4CBWcpUxcQJDAHt748YypmwkdW%2BAVxoKq8u2bAl2KGD%2FGNZ6d9iJ2CUllp6ROSUbW1g7R7HEmCIDJAZC97MdsyQpsb3PjkcLKh9zTWUa2W4BqjpSNrk1G%2F9CTKSwb3WiYx2Rj960ZpkrMdcUsVRBHsJ31cDEIPSct6dh6yLRZw4MZWevLc1Ll8iu6QEEKWKSa2u9hkUEm54dFcbkWPwy9br3S%2Fi6ipcFsWzvj2cqU662eYewIqki6jYx9NkMjAt%2FeJxToIeA0tvCII977MMbng70GOqUBPw4q%2F0piKHylJY6%2FpYo7L9Ns1tgSuTGXZff38pYpEyLo8NsLy0NoIMmUMO5uoNcGS7TI9sj1YMh%2F5IrSP3FrSyf8ng5Ekv%2B39Q3AWmmh3DF2PQwk3iwlgnh%2Fj48JkbUxbBi3ZYOOjNmd%2Fcl8EKLpe2Gb6A9TH156%2Fq%2BmKWfMDaamfBPNoI8iHGKXx031JKFSErOB6Dd2cWCL8%2B7QywbyV9WJaamG&X-Amz-Signature=801f0a41f623e4350def5ecd6996bd43c3e077f280e13c5380c2175a702aceac&X-Amz-SignedHeaders=host&x-id=GetObject)

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
