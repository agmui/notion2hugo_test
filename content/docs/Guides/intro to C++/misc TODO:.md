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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WOB45DH%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T041045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCIHnaiQVgJkZlmKcIi5Mm4fd0wSJ7Oay33kO3c%2FiTdv%2BbAiAhO6coRSIOFFAjkpOVZ5f3aneKTnLZDmGsdcAP91U89yqIBAj9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BW%2Fx2SYEENQEly1SKtwDVuQbjm7tOBwWx%2BtQZHscdOmqE5JtFXuZEOlJxZiAknwQ%2BZwo%2BCrzaMpJstG7TK%2BEx8RrFvBqUFBok1hGe6IgyPavid8ZnYgc6lpbSyGfQ6Nsbj8eSKRhMLXrpNbFHt5gpHmLY8Ly1PEK9zP9eqBMahENiRcxv6CWWlTXbZyFk%2FsuTbYkEAbXTalRqozcbwTviOeqvEhkyAVvscmKF%2BpLMhV2KXLBMuYmeHHZIjF3Squ4jyd2869IEBIBUWQBSv3YlxTjXk57jJfQ%2BUedGsf1CJv3ozu%2Fc4qzUevN1som%2BGkaRWqj9XR%2FVcnf9uHOX5N8uvZvjRt2e%2BFh2YRyQKfwYBE9PPK4eU8S8BNl0o744cWY%2BTHlemGT6apze58%2FeJR%2BvC%2BbGM3FZ5Td3SRmvk5SSKbaNI%2FsxPs1aBSvm%2FvP7xnbYi0zZFLHwYvlPMM8inEZHg4EXRB8F0M%2FVW9fRb4CJni%2FZHcYFx9xGu3slZwE8o1m2PTn3mwwtfPFbOidhbco3xTsb0zR8kFva3nXD6%2FQJlgDMzTuZHgPYKMEeQEHdCEHe%2FYu4d8pMGP4u1NESQUvxhCZJyRsLtnZkn2Bodigp%2B5gHllFWjfvyGzvxwHwutgk%2Fl9Vcf%2BUnhqZT%2F8w9OWmwAY6pgH9e1ZDDOCWjpTIVq8NYWGsLhieBnHd1KEbz6nZUC2Vgc%2FERr1Y%2FXvIk8hpTVMrk5q7KinifiK95W%2BkTc9TamzP9T568gXgGpf76RRi5dHootCFwVwE8CN4sReHgzVctXvhFcsfeayTI5XZx9kNie5QFn7bkW%2Fht8kis%2B2KhFkwFdQPZ7MktvMFfjReNpR4IoPZ5UeowrN6DchrD9bV3dSo%2Bxyp3QCh&X-Amz-Signature=4370dfbd23d7ea6a6644ecee214a42b5b5f516e898efff6f0bfa70151e5125a0&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WOB45DH%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T041045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCIHnaiQVgJkZlmKcIi5Mm4fd0wSJ7Oay33kO3c%2FiTdv%2BbAiAhO6coRSIOFFAjkpOVZ5f3aneKTnLZDmGsdcAP91U89yqIBAj9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BW%2Fx2SYEENQEly1SKtwDVuQbjm7tOBwWx%2BtQZHscdOmqE5JtFXuZEOlJxZiAknwQ%2BZwo%2BCrzaMpJstG7TK%2BEx8RrFvBqUFBok1hGe6IgyPavid8ZnYgc6lpbSyGfQ6Nsbj8eSKRhMLXrpNbFHt5gpHmLY8Ly1PEK9zP9eqBMahENiRcxv6CWWlTXbZyFk%2FsuTbYkEAbXTalRqozcbwTviOeqvEhkyAVvscmKF%2BpLMhV2KXLBMuYmeHHZIjF3Squ4jyd2869IEBIBUWQBSv3YlxTjXk57jJfQ%2BUedGsf1CJv3ozu%2Fc4qzUevN1som%2BGkaRWqj9XR%2FVcnf9uHOX5N8uvZvjRt2e%2BFh2YRyQKfwYBE9PPK4eU8S8BNl0o744cWY%2BTHlemGT6apze58%2FeJR%2BvC%2BbGM3FZ5Td3SRmvk5SSKbaNI%2FsxPs1aBSvm%2FvP7xnbYi0zZFLHwYvlPMM8inEZHg4EXRB8F0M%2FVW9fRb4CJni%2FZHcYFx9xGu3slZwE8o1m2PTn3mwwtfPFbOidhbco3xTsb0zR8kFva3nXD6%2FQJlgDMzTuZHgPYKMEeQEHdCEHe%2FYu4d8pMGP4u1NESQUvxhCZJyRsLtnZkn2Bodigp%2B5gHllFWjfvyGzvxwHwutgk%2Fl9Vcf%2BUnhqZT%2F8w9OWmwAY6pgH9e1ZDDOCWjpTIVq8NYWGsLhieBnHd1KEbz6nZUC2Vgc%2FERr1Y%2FXvIk8hpTVMrk5q7KinifiK95W%2BkTc9TamzP9T568gXgGpf76RRi5dHootCFwVwE8CN4sReHgzVctXvhFcsfeayTI5XZx9kNie5QFn7bkW%2Fht8kis%2B2KhFkwFdQPZ7MktvMFfjReNpR4IoPZ5UeowrN6DchrD9bV3dSo%2Bxyp3QCh&X-Amz-Signature=c3a4a6e13f6ff40208600b6df51d2b07aea46c0d7fe89b5130980da24fbc9ffe&X-Amz-SignedHeaders=host&x-id=GetObject)

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
