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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644MLE6AO%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T040854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDOUrX%2BlsVaXZFJKG0PWuB0d9A%2Bl4Vdm4gYBknjcjgjvwIhAJFn108CQp1DLKRtSxeC5zhSsbQBx8oF8u1wSeyMREt9KogECMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyei2x2PvnrkEwrkDoq3AMro%2FOr5NX3rOTyxsMZEBcFvIe1PsINSeDK7DOdNthEHO6guXyJdnxze%2Bd9fJQ0r6UY3UhX0wrArFyGWpMv%2FhuL0SwRLfAuDN5fP208Ph5ibbzx8Wy26K%2FF8BHUOhrh7wMuSxqxdQdd%2FQVoxDsh%2F8o%2Fr5HdnE%2BsiNN5FFt9qrgXfufa92xoxXjm8abuNMW0UEO5Rh4ee327bx2VI1Rm1pWArigREuKpIgr90QWcq6%2BWADLxbT4EFK%2FP2x2rRQM42d%2B55GgmlAeCtfMNYiKaHdJVCyO97q%2BDc8Y8bcNUL1ZJvku%2FSBk4pytoZrQU8n0nrbH%2BcUwrA8cn9skCOeCDCC3cxx4XQWp0v0dzrOvmP2aK2sjNaxp4eHcFS%2FeNW9XGhHbNL0Vv8kEI0TlKe142gry2Um5R29U%2BvbUIRrJ2BnUf7PAhkrpj1Nsus3s3ewvPGyKqsz0nisU2zACU2IuuiKu7iNOwsG5h3mj8JzysRdN6ag7a7xbRvH7ilm%2BZYFQ84Krq%2BRwW42hHFGVyXPscloMyaDZXAGL5OtCqsDvuB89RBbRS%2FFiDRiJ6Wze7vLQT4W%2FcirFZkOnWGBM3lHrUykyMs4llpytSvkO0WEZEQEBAL7sZTc%2FYsdt0CBEZ3jDdpva8BjqkAQEa8AHaQkzg24BVZdR0aDOYXSMOClQGm2HVbJ6PKX3XsXTS8zuB7SJDQIiUQMfc7SFrTXzED6yv%2B69148vHR%2BQXZi3Le2MycnnK3CCM17thuPCPwfqUJuJX4lAJnUiXjuGk%2BnSmg%2FvB6LiQr5KD2tDfA9AgR%2FfkBQUxUvVxvbOeQQtfCRKcSqquIdfWiSfaJmOx%2BjP4UFd1SNIaJW%2Bfmb1l74iO&X-Amz-Signature=3163e0d9bad5fa7024117ace5e2e590877eaac8efe28eefcf5d3b3a2b1164e0a&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644MLE6AO%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T040854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDOUrX%2BlsVaXZFJKG0PWuB0d9A%2Bl4Vdm4gYBknjcjgjvwIhAJFn108CQp1DLKRtSxeC5zhSsbQBx8oF8u1wSeyMREt9KogECMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyei2x2PvnrkEwrkDoq3AMro%2FOr5NX3rOTyxsMZEBcFvIe1PsINSeDK7DOdNthEHO6guXyJdnxze%2Bd9fJQ0r6UY3UhX0wrArFyGWpMv%2FhuL0SwRLfAuDN5fP208Ph5ibbzx8Wy26K%2FF8BHUOhrh7wMuSxqxdQdd%2FQVoxDsh%2F8o%2Fr5HdnE%2BsiNN5FFt9qrgXfufa92xoxXjm8abuNMW0UEO5Rh4ee327bx2VI1Rm1pWArigREuKpIgr90QWcq6%2BWADLxbT4EFK%2FP2x2rRQM42d%2B55GgmlAeCtfMNYiKaHdJVCyO97q%2BDc8Y8bcNUL1ZJvku%2FSBk4pytoZrQU8n0nrbH%2BcUwrA8cn9skCOeCDCC3cxx4XQWp0v0dzrOvmP2aK2sjNaxp4eHcFS%2FeNW9XGhHbNL0Vv8kEI0TlKe142gry2Um5R29U%2BvbUIRrJ2BnUf7PAhkrpj1Nsus3s3ewvPGyKqsz0nisU2zACU2IuuiKu7iNOwsG5h3mj8JzysRdN6ag7a7xbRvH7ilm%2BZYFQ84Krq%2BRwW42hHFGVyXPscloMyaDZXAGL5OtCqsDvuB89RBbRS%2FFiDRiJ6Wze7vLQT4W%2FcirFZkOnWGBM3lHrUykyMs4llpytSvkO0WEZEQEBAL7sZTc%2FYsdt0CBEZ3jDdpva8BjqkAQEa8AHaQkzg24BVZdR0aDOYXSMOClQGm2HVbJ6PKX3XsXTS8zuB7SJDQIiUQMfc7SFrTXzED6yv%2B69148vHR%2BQXZi3Le2MycnnK3CCM17thuPCPwfqUJuJX4lAJnUiXjuGk%2BnSmg%2FvB6LiQr5KD2tDfA9AgR%2FfkBQUxUvVxvbOeQQtfCRKcSqquIdfWiSfaJmOx%2BjP4UFd1SNIaJW%2Bfmb1l74iO&X-Amz-Signature=c7f7fe746977885103678477442f48613dd2311129842c92fb447f7dca1cfd6b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
