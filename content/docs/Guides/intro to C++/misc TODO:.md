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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKMFZBDK%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T071945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIGO0BNyS4yMwOfhZja9erbjDq5l8eybOj0ZnI7XJIX4zAiEArmVpv1AXgaglnlTpjbvSPtk8bZuO5RIPIUV4RQosYvIq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDB7svpcCLrctMF5vwyrcAwhh6Xd7PRPQJhZg%2F3iL8DZS4zxQDAXbdR2EEAwoqBcoFbMCJSy5uL4wiAOgCnQ8wdJSMgFegx6afxzMDjrOr8fqWxK0iBOfumjWbjARp63pX77Eoiu%2F8tZ3Io2bdfP9RG5lhjLbxUnEOH0nilvaxGRpK3skY1jtHjHzfmvoD1YYubiSNjGX1j7LipQbtB0i2B8Rp5ZYgOd07QHaUWMoGlsSLvi%2F2S%2FK8pVJ%2FeeDnyVgRPm0x5GcwDcxFvqUh78H3%2BSdiErGYVEQzjYi6gZEihyXyRKaj5gd1zX9jYDvCtJIqqRkzh1r9jlHmsAVyr4unoUdHxas0cVlcBZ3MtxCrAs%2FxzpCvLEQB9wxhQ7phLT4md6%2BpjmlJLNbAw50fFO1IynCK9Q%2Bz3TgQiJsTIdYo7WVNTv3CrECQtxcKcWReb8l1%2Bktf4JaJBR3JjfZVHHKT4b34rqRd6yTKDHx8RxV1DVoAszMF3CMTCyJyinXTB8io0fzQCln3Fhk6sWu0RtmZO9x8QqzKuT7gnin1myIrm2hqJ6mYSXeKmiKjdIWm1kpAi2THL2WCKatcnqNmfd%2BwsyaU1EUKddNZ%2FZ%2FmCeT787BjCbc9c%2FKtrd0tQXctFwk2e6CO4eDrceq0I2uMMC3wcQGOqUBEMkH7cNkBxhFoGLCuGSF%2FOkdDAMe%2BjV%2Fd%2BO5ktMVB6rjpX%2BRi%2Bwq%2FsAYgJUx9%2BPSa9pGdxEKnJWATFi2RSp7rOFweeCfVDqfMcahaLdEdNLSCiH42obJimgqpBhdK5CU71v12j%2Bmow%2FuXspyzuy%2FKurXYEmrlydBnpvwdLHo7q1vqJfSwHx7RcDO8T4N0W4KzKZrUgQ7hsPLsyzNdYpo2mmKYXgr&X-Amz-Signature=ddb769eeba62a2dda8d9c8577c63ff6f21af326525177a56fa4bf75d367b30e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKMFZBDK%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T071945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIGO0BNyS4yMwOfhZja9erbjDq5l8eybOj0ZnI7XJIX4zAiEArmVpv1AXgaglnlTpjbvSPtk8bZuO5RIPIUV4RQosYvIq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDB7svpcCLrctMF5vwyrcAwhh6Xd7PRPQJhZg%2F3iL8DZS4zxQDAXbdR2EEAwoqBcoFbMCJSy5uL4wiAOgCnQ8wdJSMgFegx6afxzMDjrOr8fqWxK0iBOfumjWbjARp63pX77Eoiu%2F8tZ3Io2bdfP9RG5lhjLbxUnEOH0nilvaxGRpK3skY1jtHjHzfmvoD1YYubiSNjGX1j7LipQbtB0i2B8Rp5ZYgOd07QHaUWMoGlsSLvi%2F2S%2FK8pVJ%2FeeDnyVgRPm0x5GcwDcxFvqUh78H3%2BSdiErGYVEQzjYi6gZEihyXyRKaj5gd1zX9jYDvCtJIqqRkzh1r9jlHmsAVyr4unoUdHxas0cVlcBZ3MtxCrAs%2FxzpCvLEQB9wxhQ7phLT4md6%2BpjmlJLNbAw50fFO1IynCK9Q%2Bz3TgQiJsTIdYo7WVNTv3CrECQtxcKcWReb8l1%2Bktf4JaJBR3JjfZVHHKT4b34rqRd6yTKDHx8RxV1DVoAszMF3CMTCyJyinXTB8io0fzQCln3Fhk6sWu0RtmZO9x8QqzKuT7gnin1myIrm2hqJ6mYSXeKmiKjdIWm1kpAi2THL2WCKatcnqNmfd%2BwsyaU1EUKddNZ%2FZ%2FmCeT787BjCbc9c%2FKtrd0tQXctFwk2e6CO4eDrceq0I2uMMC3wcQGOqUBEMkH7cNkBxhFoGLCuGSF%2FOkdDAMe%2BjV%2Fd%2BO5ktMVB6rjpX%2BRi%2Bwq%2FsAYgJUx9%2BPSa9pGdxEKnJWATFi2RSp7rOFweeCfVDqfMcahaLdEdNLSCiH42obJimgqpBhdK5CU71v12j%2Bmow%2FuXspyzuy%2FKurXYEmrlydBnpvwdLHo7q1vqJfSwHx7RcDO8T4N0W4KzKZrUgQ7hsPLsyzNdYpo2mmKYXgr&X-Amz-Signature=e271243787c1bdbde38499dd4da4be3a22563ff9ed7e74130fb9372b0b57ae19&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
