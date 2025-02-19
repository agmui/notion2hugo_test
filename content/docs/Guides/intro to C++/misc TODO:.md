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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MIDJWKH%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T200839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCr7sVCXTU3Y0WLr5JYtzm9NzUPjCF5fmKfgt%2FcI6avDQIgApVgZpljdkG%2FQ2o%2BCzKaEb%2B%2FMy5HVyTm35Jn7%2Fp%2FIJYqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEUs%2FcCqLJC4yb12YyrcA4M6obTqtqijwnwZafikvgEnEvPBjjzEQ1nB8UiSVM9zCHkLUQeRscZ4F3n80PLKkEHnpnvJYMCzmK7Dx07e8tMJXJBpNO8hNyMfDPiDnkf4y8di8pSKNojFQO0CGqGVYX9Kv0mI1rVdLEU9B9lbjozWOnIhzAIi%2BfgYi%2BMmQeYlnB1Hf%2Bd1Wd3SKzFrRkDeLj9NnbRj7os9AEl%2FWHiXZtcthpBDBxZv%2Fr6lLr13Zm9ZQtB5sOF3vbntQaOd1pp9z8a5UzHUzFSn4gGVWBB9aoqDTsr%2BlWhqcQANMJHDexEHsjf1v5Cd21Cq6UooJjF%2Bo9r0W759BtYUHe5zHvv80RwgNQevDz%2BtA6y%2BkdAyyYY4%2BWVF4j9C7FB9TwC3Hm6nPafNe9oibAmvKZsRvT93UcJRQms%2Be05iyG24FLlUytkW%2B1DxUVEcXKXbECxJe4j273gVEIwuITvpjmGB6LQydp1Kb7xGB0WO4e9uOg79UMu5QOFEtzYpDP%2FU9UY%2F136XdQXklZnOdk7oJ54GxlQnu9ncxNSYtnpHuaW7lv3rV%2Bt6wi5H2GKF0TK2NzF2OSmpKi2wnUvWkRY7uMX2hmroxkkWC4ONjBMKAOG305ClTTnLjaMOS%2BOrVphW4o5RMNnu2L0GOqUBk47htqkHSiDF9prcT%2FhzvIatRvzsJXQQNebll8mMKSOtvBJmNdm%2FxfsCvJrlDC7lgrGSl4FM%2Fdg%2FIFF1YQmfbn9QZ1un6a%2B4w3VG40%2BPb1nnkQSUUuiBGcn2INvqAoLDE51A4%2Fr7kgFEWG92B5vCiVVOCFKEQi2rk2x1tA2LsEqaFzFl38DJ7XgktsIqzNc3BETkLhYrcm8kCMDDt%2BuwX%2Fe4d5F0&X-Amz-Signature=bf0a2ba37d10ce54e5ac1b761519b7f3c3f318ef04143aec3d76c715a2c912d0&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MIDJWKH%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T200839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCr7sVCXTU3Y0WLr5JYtzm9NzUPjCF5fmKfgt%2FcI6avDQIgApVgZpljdkG%2FQ2o%2BCzKaEb%2B%2FMy5HVyTm35Jn7%2Fp%2FIJYqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEUs%2FcCqLJC4yb12YyrcA4M6obTqtqijwnwZafikvgEnEvPBjjzEQ1nB8UiSVM9zCHkLUQeRscZ4F3n80PLKkEHnpnvJYMCzmK7Dx07e8tMJXJBpNO8hNyMfDPiDnkf4y8di8pSKNojFQO0CGqGVYX9Kv0mI1rVdLEU9B9lbjozWOnIhzAIi%2BfgYi%2BMmQeYlnB1Hf%2Bd1Wd3SKzFrRkDeLj9NnbRj7os9AEl%2FWHiXZtcthpBDBxZv%2Fr6lLr13Zm9ZQtB5sOF3vbntQaOd1pp9z8a5UzHUzFSn4gGVWBB9aoqDTsr%2BlWhqcQANMJHDexEHsjf1v5Cd21Cq6UooJjF%2Bo9r0W759BtYUHe5zHvv80RwgNQevDz%2BtA6y%2BkdAyyYY4%2BWVF4j9C7FB9TwC3Hm6nPafNe9oibAmvKZsRvT93UcJRQms%2Be05iyG24FLlUytkW%2B1DxUVEcXKXbECxJe4j273gVEIwuITvpjmGB6LQydp1Kb7xGB0WO4e9uOg79UMu5QOFEtzYpDP%2FU9UY%2F136XdQXklZnOdk7oJ54GxlQnu9ncxNSYtnpHuaW7lv3rV%2Bt6wi5H2GKF0TK2NzF2OSmpKi2wnUvWkRY7uMX2hmroxkkWC4ONjBMKAOG305ClTTnLjaMOS%2BOrVphW4o5RMNnu2L0GOqUBk47htqkHSiDF9prcT%2FhzvIatRvzsJXQQNebll8mMKSOtvBJmNdm%2FxfsCvJrlDC7lgrGSl4FM%2Fdg%2FIFF1YQmfbn9QZ1un6a%2B4w3VG40%2BPb1nnkQSUUuiBGcn2INvqAoLDE51A4%2Fr7kgFEWG92B5vCiVVOCFKEQi2rk2x1tA2LsEqaFzFl38DJ7XgktsIqzNc3BETkLhYrcm8kCMDDt%2BuwX%2Fe4d5F0&X-Amz-Signature=96cbd39014dfa4288f028dd805e098e6822bcac86de13201d4c5c4cc44b8c58e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
