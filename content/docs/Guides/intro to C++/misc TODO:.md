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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NDHC6QW%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T061116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCmNxWzv8PQ8tFtFT770K0cPvQEX3a4FAiwD93ACTcG%2FQIgEBk7HjZV6oZ1XtBPZlhcj2OWVWhl%2BzMtZ%2B6vyiNCscoq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDFEGaZCJf%2F8CJicLvircAzDY%2BAzt2o0Huw1lXPBdJoR2HqWYnr%2FA8xAZXv9MnuETGFZf7%2FbVLYXwKUIgxRvuQNn8YsCwTnJqYJUl2q3KFvsQpoLLviyc6vPPUbBOZyHQAbcNO8DV86pvhLPcaAEYUsWw5ZujRpRCmxyxscv9%2BLKUEo9ommBJi2J3zJgVUplYKiywjEGIwzzRaD%2B5Kve6hHNg2pMGc0J7jDlJMRITsn7cTbjsxSNQUIp4tiRpF4d2IEVcnJ6bH1aqHdmg%2BV0MsDQMogFL7Dlp78ozAAF%2BVrD6Ket6SPxQ%2F4OLl8Nj76SAPVNbWTYOzOXuuPiTQTdpAKtH%2BmI78b7jyiMCf0SKU7qocwoRQzmprAgZpXxatKxUuyWvGvfuVDbAT1jINJumMtvfL3rmlpLj6iBa0goKoBlDqaUqngQA5fGLJK1HkXPbBLRqtt8QRc88KqOd9VZ0fr%2B9DlB0oWv46YONYZJv5S6ZuU%2FjyKiC8B7LBvKCdRKp%2F%2B%2Bl1lIa7V1Nngqsw38%2BSpCe5IdSxw7HnGyEGzlpDo6zS8Ra%2B8%2BQEznzCA5WcepIns%2F3g1nHW90vAZugOPknyeAX6atgebseXeSqX96DSs0BPAmHO6Ny2UzlbrjllWXmuJHRkymHvAUKPMrFMNnDoMEGOqUBF8GOaW7QfRtHMFO3%2Bx2BmT4nOKKHBBlUkZiHHy6xV3R2BV3xHEz2ikzEGeK9BzO3S6RyjVVpwth8kn3qeq4Dcq42U1dlWXhWJlKoNBP1BgZHHRS8ZKFNx4Yp4zRiIg2mSCw6BRdTfnxDs%2BswcoZuuH1s32R6VqKDXHSwB4vYNb%2BbGsDJs4cAKchjoh8cl%2BGp1xO4oQLXtmaDiUGNZkm7kWlhwd8b&X-Amz-Signature=ee5670055fafc683ac2430bb5fac280da16f770462228ccd49df6eba2ed6fb52&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NDHC6QW%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T061116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCmNxWzv8PQ8tFtFT770K0cPvQEX3a4FAiwD93ACTcG%2FQIgEBk7HjZV6oZ1XtBPZlhcj2OWVWhl%2BzMtZ%2B6vyiNCscoq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDFEGaZCJf%2F8CJicLvircAzDY%2BAzt2o0Huw1lXPBdJoR2HqWYnr%2FA8xAZXv9MnuETGFZf7%2FbVLYXwKUIgxRvuQNn8YsCwTnJqYJUl2q3KFvsQpoLLviyc6vPPUbBOZyHQAbcNO8DV86pvhLPcaAEYUsWw5ZujRpRCmxyxscv9%2BLKUEo9ommBJi2J3zJgVUplYKiywjEGIwzzRaD%2B5Kve6hHNg2pMGc0J7jDlJMRITsn7cTbjsxSNQUIp4tiRpF4d2IEVcnJ6bH1aqHdmg%2BV0MsDQMogFL7Dlp78ozAAF%2BVrD6Ket6SPxQ%2F4OLl8Nj76SAPVNbWTYOzOXuuPiTQTdpAKtH%2BmI78b7jyiMCf0SKU7qocwoRQzmprAgZpXxatKxUuyWvGvfuVDbAT1jINJumMtvfL3rmlpLj6iBa0goKoBlDqaUqngQA5fGLJK1HkXPbBLRqtt8QRc88KqOd9VZ0fr%2B9DlB0oWv46YONYZJv5S6ZuU%2FjyKiC8B7LBvKCdRKp%2F%2B%2Bl1lIa7V1Nngqsw38%2BSpCe5IdSxw7HnGyEGzlpDo6zS8Ra%2B8%2BQEznzCA5WcepIns%2F3g1nHW90vAZugOPknyeAX6atgebseXeSqX96DSs0BPAmHO6Ny2UzlbrjllWXmuJHRkymHvAUKPMrFMNnDoMEGOqUBF8GOaW7QfRtHMFO3%2Bx2BmT4nOKKHBBlUkZiHHy6xV3R2BV3xHEz2ikzEGeK9BzO3S6RyjVVpwth8kn3qeq4Dcq42U1dlWXhWJlKoNBP1BgZHHRS8ZKFNx4Yp4zRiIg2mSCw6BRdTfnxDs%2BswcoZuuH1s32R6VqKDXHSwB4vYNb%2BbGsDJs4cAKchjoh8cl%2BGp1xO4oQLXtmaDiUGNZkm7kWlhwd8b&X-Amz-Signature=623d6db89152447b076bca36457ff7ba9d31f16da5f9d373fe1c165e871fa24f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
