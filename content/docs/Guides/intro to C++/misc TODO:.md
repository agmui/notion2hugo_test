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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636EGUH6T%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T081251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIBl%2F3vKp8eqEFkSJ%2BMElfBGe47oYkqnlq1oyZnztI6hfAiEAy7pVrKyVz3rzNWcd9DPXEg0V7ky1C3EvVa7hS8ScC1oq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDPZ0ncfdqjcPI91eSircA8FlmH7DKXzY3QkH%2FBPstDkXSw6G2qACcSE83PH7MpmkKCig912f%2FVjyLxCZP3xEMOK6adB71bZpCuTcP5CXyK%2BReKsgLdEGEEB92acSa%2BDdl5UDAZXUFm0OJc3KP31qgk%2FMihZq2fIAOj%2FGf6pcAtAvlseycqsmfXE0aLBA24OncRVwaCF3Zr0muwxeOM4z1jnAp%2F3pAD9OF008pxJRpaRB4fzgRcwZD5o50G3En3Z9u0BuDV%2BN5gj2PFfAmKSixXGEZcsWamGFtJsYpJ9S3PPLrBFxS4emrmj1cPS6qQg3vQPX2SkZnD7CHXp5ESI1leJj99G%2FOSZPORPUD2wwrOyZ1cUWhanAbzrO96PhIp7mRa6CSfbijo8aUOU4e%2FEd4BZ3JcEnOkZgzqI4GZdL170BYJ9jDOaAvP85oarZREzfRlq7lxxaPeweYn45cE0dVho0nzMG3gjc6Rl55b5YNLXbjQELH8S0L7ESUohLghrh5We2VJQIxdF6zZ4K%2Bdrmexb1FnXpcQ3TEtappcLGbTmOBlto74Jj97hARSnzUGMiS%2BXOYhK%2B4Q15hdU1Q6IScf1C8Visaz6QsPD6B1A8fRKG4uoVJ2IH647BXH2l7CAh%2B5So%2B%2FAn%2BmbcSm8WML%2FemMMGOqUBpHkle5EXirsZ%2FlQM2B3WFh0f4AZUxZSw5El73BnzzcD1LXDxUXSmA8RtE2mHOdeobFVNGSoUkCTuX3IdtPsZILpFvHJ8SAHX5AnQ1iieNwN0CYx4OP1%2BZgrPbfN%2Fajpng%2F0gggp%2FdqRvYdKlIGjTzxVjy6xPJ99K13rvwcMHTs0naecHmQa%2Bh%2F%2BuUuKqLLpndeKCNXpNGRiIp2XuY58sOJIebVeI&X-Amz-Signature=dc0cdfcc8aec1aebca16332d6a9d5866cd4a85204542df66c5ea2d3c433cb680&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636EGUH6T%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T081251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIBl%2F3vKp8eqEFkSJ%2BMElfBGe47oYkqnlq1oyZnztI6hfAiEAy7pVrKyVz3rzNWcd9DPXEg0V7ky1C3EvVa7hS8ScC1oq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDPZ0ncfdqjcPI91eSircA8FlmH7DKXzY3QkH%2FBPstDkXSw6G2qACcSE83PH7MpmkKCig912f%2FVjyLxCZP3xEMOK6adB71bZpCuTcP5CXyK%2BReKsgLdEGEEB92acSa%2BDdl5UDAZXUFm0OJc3KP31qgk%2FMihZq2fIAOj%2FGf6pcAtAvlseycqsmfXE0aLBA24OncRVwaCF3Zr0muwxeOM4z1jnAp%2F3pAD9OF008pxJRpaRB4fzgRcwZD5o50G3En3Z9u0BuDV%2BN5gj2PFfAmKSixXGEZcsWamGFtJsYpJ9S3PPLrBFxS4emrmj1cPS6qQg3vQPX2SkZnD7CHXp5ESI1leJj99G%2FOSZPORPUD2wwrOyZ1cUWhanAbzrO96PhIp7mRa6CSfbijo8aUOU4e%2FEd4BZ3JcEnOkZgzqI4GZdL170BYJ9jDOaAvP85oarZREzfRlq7lxxaPeweYn45cE0dVho0nzMG3gjc6Rl55b5YNLXbjQELH8S0L7ESUohLghrh5We2VJQIxdF6zZ4K%2Bdrmexb1FnXpcQ3TEtappcLGbTmOBlto74Jj97hARSnzUGMiS%2BXOYhK%2B4Q15hdU1Q6IScf1C8Visaz6QsPD6B1A8fRKG4uoVJ2IH647BXH2l7CAh%2B5So%2B%2FAn%2BmbcSm8WML%2FemMMGOqUBpHkle5EXirsZ%2FlQM2B3WFh0f4AZUxZSw5El73BnzzcD1LXDxUXSmA8RtE2mHOdeobFVNGSoUkCTuX3IdtPsZILpFvHJ8SAHX5AnQ1iieNwN0CYx4OP1%2BZgrPbfN%2Fajpng%2F0gggp%2FdqRvYdKlIGjTzxVjy6xPJ99K13rvwcMHTs0naecHmQa%2Bh%2F%2BuUuKqLLpndeKCNXpNGRiIp2XuY58sOJIebVeI&X-Amz-Signature=59f582d7f756b6f36c6cef10e5165650f6cc93909ea73d50aece67fa35e4eece&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
