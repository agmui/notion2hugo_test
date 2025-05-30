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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVFVF2IO%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T041330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDXN6CTj5edzaLw5Son91Zl2poUPb5KscFjV3fE5NXCagIhAIohe3bXE4rlgAkFeldjaGqP8WkQ9E3zFtINa5f9szRTKogECJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyPYHjDaCPl7VJUMpcq3APhvgxq6VsI5ltYV0AHrFvSYHtvdAZuzZO6m92Q%2B1VF9GA%2BfPrkPFeY0saHF7uEC6q5gS55bPo8vye9vS5qcfNBOVzJ%2BKC3s30ItEsLKWrPCxpvtaBLlHUzNRBobrd2oowMubxYrdrn7Cgzaisa%2Bfg3bQKdkp7xcQ3sCltJzGRST2Fmn5%2BvP4M6PZfx3ZB1i%2FTYRfljRcHXZdtdo3%2FhTSZJJTjDJJHzOWC%2BzgKZftf%2BkVMoEClT6HzplIM8hzmty%2BWpLy7HtznDH29X3ylaEJkSEm6cYKpZZQi3ORnpnuzrlKSja7Q6mygkMwj%2FLbpIm4wcmGlr7p%2FQ8YVzqiN1%2FIZ%2BXPJ6UYhHTia7UX%2FNbKU5o0RH3lXX1YGAksOsy%2BbYK12LwrsbUhf2u9D6YV6h4Yq8A9E71CghOk6mtZ5N%2FT4%2F6CAK1iMDgiUDDPlmdy4Ww741%2FS4NX5B7cRinAHsIoggQthuSHzrXwic0y7T6k2Npc07rOWRMqAA8TokHL7e%2BXAR1U7DX%2F4LzdRV6yvgsnXdg7VBlCC5DTKXUS5Ss61Joj5ibbNlX4OGoN6bTAXTY1%2FPlWwD9ZwAX0u4e27ziQdtRzWe39uQCbW1M1JXrrSsnnBUXb%2BYG8hg3%2BcH0MTDJ3eTBBjqkAQR52NCWSsDuoppmLr9tC9ViOC%2F0kvJqhHn1EvtMN3S7QUUBembbcPU0dFw4fcXP%2BdX0g6bhOsjpYGLFAPlRna1Bbx65pU0NRU9Qwi1v76Uj8IG7bySU%2BYRqAuOdBeXVPf91yTcjcnUtWWlXPXiVJmtebiMrxa4BvqIY9P0Icl9MNMuBf4e8E7QMnd3DZVbifsJau%2Fo5mX2mJmlGJz1u1HzCPrPJ&X-Amz-Signature=f6d8be6a7c4b0c545379260a5ad28d11984dfc82b3bef488d4f58873424ba2b3&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVFVF2IO%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T041330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDXN6CTj5edzaLw5Son91Zl2poUPb5KscFjV3fE5NXCagIhAIohe3bXE4rlgAkFeldjaGqP8WkQ9E3zFtINa5f9szRTKogECJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyPYHjDaCPl7VJUMpcq3APhvgxq6VsI5ltYV0AHrFvSYHtvdAZuzZO6m92Q%2B1VF9GA%2BfPrkPFeY0saHF7uEC6q5gS55bPo8vye9vS5qcfNBOVzJ%2BKC3s30ItEsLKWrPCxpvtaBLlHUzNRBobrd2oowMubxYrdrn7Cgzaisa%2Bfg3bQKdkp7xcQ3sCltJzGRST2Fmn5%2BvP4M6PZfx3ZB1i%2FTYRfljRcHXZdtdo3%2FhTSZJJTjDJJHzOWC%2BzgKZftf%2BkVMoEClT6HzplIM8hzmty%2BWpLy7HtznDH29X3ylaEJkSEm6cYKpZZQi3ORnpnuzrlKSja7Q6mygkMwj%2FLbpIm4wcmGlr7p%2FQ8YVzqiN1%2FIZ%2BXPJ6UYhHTia7UX%2FNbKU5o0RH3lXX1YGAksOsy%2BbYK12LwrsbUhf2u9D6YV6h4Yq8A9E71CghOk6mtZ5N%2FT4%2F6CAK1iMDgiUDDPlmdy4Ww741%2FS4NX5B7cRinAHsIoggQthuSHzrXwic0y7T6k2Npc07rOWRMqAA8TokHL7e%2BXAR1U7DX%2F4LzdRV6yvgsnXdg7VBlCC5DTKXUS5Ss61Joj5ibbNlX4OGoN6bTAXTY1%2FPlWwD9ZwAX0u4e27ziQdtRzWe39uQCbW1M1JXrrSsnnBUXb%2BYG8hg3%2BcH0MTDJ3eTBBjqkAQR52NCWSsDuoppmLr9tC9ViOC%2F0kvJqhHn1EvtMN3S7QUUBembbcPU0dFw4fcXP%2BdX0g6bhOsjpYGLFAPlRna1Bbx65pU0NRU9Qwi1v76Uj8IG7bySU%2BYRqAuOdBeXVPf91yTcjcnUtWWlXPXiVJmtebiMrxa4BvqIY9P0Icl9MNMuBf4e8E7QMnd3DZVbifsJau%2Fo5mX2mJmlGJz1u1HzCPrPJ&X-Amz-Signature=67b8ff7cb147d88a7a5acac3749a329fa8878ac9b0b77ebfae445cf8d778a14e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
