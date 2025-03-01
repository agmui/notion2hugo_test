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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2ZYYOLK%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T061019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIQD0Jys6NjPGSFxokuPZQjGnSOpKmK6WlG8rBTEouH%2FVgQIgFcIly1%2FcpVL7D7RWMNWuWbuTacKLj7%2BRrsQkm%2FX89tIqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJmmrkDpP%2BdILaEg7SrcAw2r7qQks26FNOFiGffyzBy4UfYdtIqzB6vdCJwKWSv6mBKS%2B946uKJTtCOo4ENuIQGlmYKSg00uQr33zxjD3bFTda764XxHYz2%2Bf9KYxATS9gpZT3ncazG4%2Fl80PI3kftFIBjid1Nm%2BTcV%2FfQNiHRnZOB1YR2RNt9kvFo3aQbnR1l%2FnHi1Y%2FloBvPCpv0YplypqHH%2B9oK%2FYxsi8a12zl%2FUQnCAQSvdSOEVVIxl4BL%2BQ1sTHRoIhHeQZmwPxWNMOtXOwO7fp7Ln7gyQP3Xuh6T3qYmsmkRXXL7bganmeLQ2Pf2ZTPF3ZPXF%2BcR8gFs16fa57g0RUlclpFrNQ2Z7aTqy3jffs1NQaLqQ%2BiyJEYxfraJ29nLKLx2iESezA0g4t1mEb%2FgfFFzNBMVABTl86zXC7AOa2nw1fy%2BISVogaNR76yAw%2F3Efm922D9t59NXJPmZ%2BP%2FfkwVbu1A%2BBXd%2BJJVLh9Kjg%2FcogF35xWBuKouZMM3dB01AYR7mVc4O21%2Fi5xmrZAdu6mCA4Ink35wPIHMHNGiLBnCTrQCKGC4eVw9czFMvzEqUBThXcRh5NQMgBX7tga8H1H%2FoxWOTTIVZSOQjU6Fq0LFDz0DYoJNqQhAythzJLxPU6dYHAZc5ZKMPWQir4GOqUBmop7Fj2iUHMKZ5DUvovobHzDZGkfjELULc9nC63M7LHurCAuAP1qpGWWcelu5NNdbNwfoJiVuqQAr6my7LfvtRR2k0UERHHcjjpJHNYVoIMXUaWnbvoDxmOYe5bPDNbJQ7y4nCrns1ciqi%2BGol%2BDhf4jV8aBGFvDlAv0qi2KoSjGSI5LMAA0v9Jmi9aspPRGkcD%2BeLQmEvtwBA6eDB5ieeaH6imH&X-Amz-Signature=367675dfc6b969a4cd0cde9867d7afbcc22ff12cb53425036db05caade0049be&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2ZYYOLK%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T061019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIQD0Jys6NjPGSFxokuPZQjGnSOpKmK6WlG8rBTEouH%2FVgQIgFcIly1%2FcpVL7D7RWMNWuWbuTacKLj7%2BRrsQkm%2FX89tIqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJmmrkDpP%2BdILaEg7SrcAw2r7qQks26FNOFiGffyzBy4UfYdtIqzB6vdCJwKWSv6mBKS%2B946uKJTtCOo4ENuIQGlmYKSg00uQr33zxjD3bFTda764XxHYz2%2Bf9KYxATS9gpZT3ncazG4%2Fl80PI3kftFIBjid1Nm%2BTcV%2FfQNiHRnZOB1YR2RNt9kvFo3aQbnR1l%2FnHi1Y%2FloBvPCpv0YplypqHH%2B9oK%2FYxsi8a12zl%2FUQnCAQSvdSOEVVIxl4BL%2BQ1sTHRoIhHeQZmwPxWNMOtXOwO7fp7Ln7gyQP3Xuh6T3qYmsmkRXXL7bganmeLQ2Pf2ZTPF3ZPXF%2BcR8gFs16fa57g0RUlclpFrNQ2Z7aTqy3jffs1NQaLqQ%2BiyJEYxfraJ29nLKLx2iESezA0g4t1mEb%2FgfFFzNBMVABTl86zXC7AOa2nw1fy%2BISVogaNR76yAw%2F3Efm922D9t59NXJPmZ%2BP%2FfkwVbu1A%2BBXd%2BJJVLh9Kjg%2FcogF35xWBuKouZMM3dB01AYR7mVc4O21%2Fi5xmrZAdu6mCA4Ink35wPIHMHNGiLBnCTrQCKGC4eVw9czFMvzEqUBThXcRh5NQMgBX7tga8H1H%2FoxWOTTIVZSOQjU6Fq0LFDz0DYoJNqQhAythzJLxPU6dYHAZc5ZKMPWQir4GOqUBmop7Fj2iUHMKZ5DUvovobHzDZGkfjELULc9nC63M7LHurCAuAP1qpGWWcelu5NNdbNwfoJiVuqQAr6my7LfvtRR2k0UERHHcjjpJHNYVoIMXUaWnbvoDxmOYe5bPDNbJQ7y4nCrns1ciqi%2BGol%2BDhf4jV8aBGFvDlAv0qi2KoSjGSI5LMAA0v9Jmi9aspPRGkcD%2BeLQmEvtwBA6eDB5ieeaH6imH&X-Amz-Signature=21a0d929458ff26398588b7dbc802343267a2ce36943ff14f045c6f1e18a9af1&X-Amz-SignedHeaders=host&x-id=GetObject)

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
