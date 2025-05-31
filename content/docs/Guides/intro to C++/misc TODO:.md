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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7ZX6DQN%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T033441Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHSPI8IICoArkU5yXgbbkJJyt27AAxyjz1EKYDsQKSXIAiEAz5Fy8Cj%2BGjIyppW6OBHjPlS1lixYTeLu6S4%2B2p5N3kkqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOsKGTDqEmBwv9mvJyrcA%2BHchbOW%2BbonmQHt0ikOakznwEqhtM2j8V06uiN2UIjeE6HOTe57XssPZ1AgqiUsMzB2BeZBi2U8kGJTVKxR58Pox4PYwdPqot7LPJUzfgVjPYpdJ0A3TqkAYZPdiPkwJS2ANypXae7L7BB87Cz5XQd8NZIPnFojTcBOG6487EVRmQbkoTZrCB1zVWX2oA4yRCSXnMSJkJYOB6F8wKuhMGXUydGzTwcZ6Yr79XqXpW6ZYZoKhZhiKNcNORcLr2fN1tZJDxux8ZmU7X6D46IfVPtqhBlb%2FDI2XQ8%2BKTJhRBYudG73pPiHzBWJgw9XaX2cSrMTdF1YFxJ8FtwPk9ODM62fsmxGh5r1hJHwVyeBFWimp48fA%2FDxeIrK8AEJaozOEw0CNiYoNYkAtMAI2dC%2B6Ss9Wt%2FWIp4aaMwsUJcFuInjqx1dzJsSELtweR3WFV0Bv4DmBzaHFLBaa%2B3DvbvV44QCama8juKTRgap%2Fx89tEa4KXha9Z7cB8LgYg7LXHbMJX55VygnuZk3l6IwdCZb8Zl5aakbFUSQ1E9ii2qu1PQbTBT33mCRTeBKHD9g0RZIPJ9fzNZODldLE0rgZcEp%2BdqyTyvwFIs0%2BUgWhXrvBNJ60RspT8cBgtyYYsF9MMLl6cEGOqUBb5F5L9IcNavJxxNmZSbbq5sOR4iVNl%2FQBUnQrYHn0ics5RMorhvSI4DWAUClYmeQ%2BFzx8AEgKqy9umOQGX9AKYnI29GkBiVGIPu%2BBYpxJBJ7LMcWPD8xMrPWQPlKOZ%2Bst7MfScwAdorIis03R%2B0YCdhhZlCKfq6oJvv4WQH6Ail%2FlhA7CM937haQm1vc4OqwR%2FzqvSU9YA68w5Bt25XCkAxiCGvO&X-Amz-Signature=a2054219a1d283ba7f6c4255441a1047603a145580385ebc11689b3d1a1456fb&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7ZX6DQN%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T033441Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHSPI8IICoArkU5yXgbbkJJyt27AAxyjz1EKYDsQKSXIAiEAz5Fy8Cj%2BGjIyppW6OBHjPlS1lixYTeLu6S4%2B2p5N3kkqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOsKGTDqEmBwv9mvJyrcA%2BHchbOW%2BbonmQHt0ikOakznwEqhtM2j8V06uiN2UIjeE6HOTe57XssPZ1AgqiUsMzB2BeZBi2U8kGJTVKxR58Pox4PYwdPqot7LPJUzfgVjPYpdJ0A3TqkAYZPdiPkwJS2ANypXae7L7BB87Cz5XQd8NZIPnFojTcBOG6487EVRmQbkoTZrCB1zVWX2oA4yRCSXnMSJkJYOB6F8wKuhMGXUydGzTwcZ6Yr79XqXpW6ZYZoKhZhiKNcNORcLr2fN1tZJDxux8ZmU7X6D46IfVPtqhBlb%2FDI2XQ8%2BKTJhRBYudG73pPiHzBWJgw9XaX2cSrMTdF1YFxJ8FtwPk9ODM62fsmxGh5r1hJHwVyeBFWimp48fA%2FDxeIrK8AEJaozOEw0CNiYoNYkAtMAI2dC%2B6Ss9Wt%2FWIp4aaMwsUJcFuInjqx1dzJsSELtweR3WFV0Bv4DmBzaHFLBaa%2B3DvbvV44QCama8juKTRgap%2Fx89tEa4KXha9Z7cB8LgYg7LXHbMJX55VygnuZk3l6IwdCZb8Zl5aakbFUSQ1E9ii2qu1PQbTBT33mCRTeBKHD9g0RZIPJ9fzNZODldLE0rgZcEp%2BdqyTyvwFIs0%2BUgWhXrvBNJ60RspT8cBgtyYYsF9MMLl6cEGOqUBb5F5L9IcNavJxxNmZSbbq5sOR4iVNl%2FQBUnQrYHn0ics5RMorhvSI4DWAUClYmeQ%2BFzx8AEgKqy9umOQGX9AKYnI29GkBiVGIPu%2BBYpxJBJ7LMcWPD8xMrPWQPlKOZ%2Bst7MfScwAdorIis03R%2B0YCdhhZlCKfq6oJvv4WQH6Ail%2FlhA7CM937haQm1vc4OqwR%2FzqvSU9YA68w5Bt25XCkAxiCGvO&X-Amz-Signature=5331a4ae8d7cf9816524bfd9c3c06d3b4c89b201a0226cafffb90d01c4ad8f24&X-Amz-SignedHeaders=host&x-id=GetObject)

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
