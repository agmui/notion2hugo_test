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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YU3F4OUN%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T170208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQC5UtczMRYXNhLieGzYmhkQI6I3%2BNBYve92CGEfcmzyJwIgZCS1KaROaIsO%2FW8L9o5UHAuCgfB9lwJL3bMM1gJ3W0Uq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDCPmw685kVt7ygt1fyrcAxZmk7zBhtcDSvrtf1dm%2FSvv%2B7P3fzAuB9cl0%2BnedwIaoLkyRhrPivD%2BrWzD0CsOj29hVLD9Qj1ovA%2FuXybHLa%2By0w656Ei0ShNtcL44vELg7X1RBCiEg62c6GPsSOpLqKKW%2BVAAjaMvxGhHSNRoiRnkVG0JyVdF3P6pMw9gpIm%2B56cUUHyhDGSVXO2Uw3cCWN9TFcuc9yNVGAMIJ0ZASaImKVbchvgmcr1qarRWUN0ff%2FR9nO6%2FgSelM9bBXSbxLMln7YGwO5GqhuTW60cDP1NP9QFKo5hmLzEkERZ6JA5mdBpepxNS%2BG8F%2BulJhiWyTH%2BGzYrCFkEwJn8zn1lN8u61cmNiGAkW8Yq%2BDks1LGVP22wrK%2BEQntwSV97z3s5sLzgzEmBu9rG2KJ9ytu3QTsU%2Fy0X8ZuMOFf3sEjUCVQANOtdoeSbpu505Ca5jybySCHYhGJNVG4WzTlXE0XbbsUyJrnuRMhZzWgHs%2BgAozGH9veSLdR9e6uyGKS9rK00GUgs%2B6RIjGknWtItQPH7iLE75u5TeD0IHx9OYXIVEXWfedEOsO%2BIj3T0hnQIndGJV%2BNb9Rsp%2F%2BGtPAx%2BFAt90vLRb29fLrTgO4%2BfXsob06rasXI%2FC2Hqhkj8fl3CRMJyFh8IGOqUBAfQzktwDY7ySvd4xkGc7Ec9Gf3K6vkGD3xuYa8jkybY8NYx63T0qHjo%2FjikXgxOdbNvr4tOSC5UntbrE%2FzRXp1a9DcOJOMkbIVj%2BjnPgAkfG3Ug3taz420caKGuvb6SWyrPa%2B1JyIpe%2B7W4UVqdwaHVqmC2mqx%2BIS7Fe1u9LSNU4SHMaSigx8qiap0J4FIIcX1sorMUoIXEqsVcf%2BPcDswYd6FSp&X-Amz-Signature=dd6960fc21a79f7e32c420a6e4c27f6e7ad1802091414e0e71cbd0fd9f21e35b&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YU3F4OUN%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T170208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQC5UtczMRYXNhLieGzYmhkQI6I3%2BNBYve92CGEfcmzyJwIgZCS1KaROaIsO%2FW8L9o5UHAuCgfB9lwJL3bMM1gJ3W0Uq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDCPmw685kVt7ygt1fyrcAxZmk7zBhtcDSvrtf1dm%2FSvv%2B7P3fzAuB9cl0%2BnedwIaoLkyRhrPivD%2BrWzD0CsOj29hVLD9Qj1ovA%2FuXybHLa%2By0w656Ei0ShNtcL44vELg7X1RBCiEg62c6GPsSOpLqKKW%2BVAAjaMvxGhHSNRoiRnkVG0JyVdF3P6pMw9gpIm%2B56cUUHyhDGSVXO2Uw3cCWN9TFcuc9yNVGAMIJ0ZASaImKVbchvgmcr1qarRWUN0ff%2FR9nO6%2FgSelM9bBXSbxLMln7YGwO5GqhuTW60cDP1NP9QFKo5hmLzEkERZ6JA5mdBpepxNS%2BG8F%2BulJhiWyTH%2BGzYrCFkEwJn8zn1lN8u61cmNiGAkW8Yq%2BDks1LGVP22wrK%2BEQntwSV97z3s5sLzgzEmBu9rG2KJ9ytu3QTsU%2Fy0X8ZuMOFf3sEjUCVQANOtdoeSbpu505Ca5jybySCHYhGJNVG4WzTlXE0XbbsUyJrnuRMhZzWgHs%2BgAozGH9veSLdR9e6uyGKS9rK00GUgs%2B6RIjGknWtItQPH7iLE75u5TeD0IHx9OYXIVEXWfedEOsO%2BIj3T0hnQIndGJV%2BNb9Rsp%2F%2BGtPAx%2BFAt90vLRb29fLrTgO4%2BfXsob06rasXI%2FC2Hqhkj8fl3CRMJyFh8IGOqUBAfQzktwDY7ySvd4xkGc7Ec9Gf3K6vkGD3xuYa8jkybY8NYx63T0qHjo%2FjikXgxOdbNvr4tOSC5UntbrE%2FzRXp1a9DcOJOMkbIVj%2BjnPgAkfG3Ug3taz420caKGuvb6SWyrPa%2B1JyIpe%2B7W4UVqdwaHVqmC2mqx%2BIS7Fe1u9LSNU4SHMaSigx8qiap0J4FIIcX1sorMUoIXEqsVcf%2BPcDswYd6FSp&X-Amz-Signature=78805d2c53f4f52dc38e049679e390566cd4c4e8380ae7e8bc6bf0910f7045b8&X-Amz-SignedHeaders=host&x-id=GetObject)

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
