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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLIFJZAE%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T061428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJGMEQCID5yV770OsYa4%2BDFTECashfxXCUxIlgNSbSE4SwMScn7AiBS11Sm8V05Xu9aAzGTJlwauBXKXvfB5aQ7cxCQUW0lpCr%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIM5WSWxQt8uiMUq1eQKtwDZ7TtvWSaEmbDBUUJm81CZxxxFtlBwu0gkHbcjPK%2FbHA64PH096kklqPYwiXil2YNl%2Fd9PSgK72DfupgQQt%2B2OtWOyqcrby%2FOH%2BjVOzoV1zdAkvk2155uioZJmU8TancP5ryT03p94o7RvZVLEcRN%2Bz94NvwR68DVpBuh7sXoF%2FmHMOBKZoepz4Lq7%2FuOy4qAzpQSi%2FRLVklW78geNi00Ck4DE9CNzQtIYK8TsrbA6%2BrifzojLXj71PgIYRsAnMDwdr2EwZTd4uFq4HyDmfRNc7ajTYS4laJI1sNWkmMU1ooSSt5oeoETwuOeowJmNXxCv00sseVtZiGYS2k3Qr%2BWf6%2F7nQVZ49KlQk6PeaKUUMlb8aZt7HfDuAiY51APUe1rcyrRDagccWbJcEh4lqUpAbT5bzWs%2BXtLoI7WSEZqNTzNmUwomGWMSQe4SxAoVX9xELJTnOkrD6kPq7LXmBOBTJyUURVtoroB16FcDeV0UzrIEJvSH3pCtRM7O7s3DMBkENlZmh7zAQBZSvFt5nqrOgWGn7Tr6QXzW9Dv6jHDlY5t%2F3IP%2BEUPM6Q4oR4lTyzu6CBcpa8xvbGyBf3XX4J5MkIynA6WUP%2BEGQKMrEWf%2FDOzQ40sDoe76NCck6YwndTXwwY6pgHsKw%2BnecjsrsQC1VvMGlYwfW9i3FyX2YjbZArVF7712yKpKQz8ugHSLOLPOtV2qp%2FuYy%2BEw4t3kUEDGsFFufov9VOYdb2UwcCJodkTQ4bZsttzFANnkwKHe4U11zZnDWAdG%2Fn0bE7xPm9fXfIYEGfwR7h%2FolHk3JVItF4QXXd2vUsa4lHm4A2wJXjCALfmFyUHwqTYBGgleW%2FwFJrj%2BMQpm4TlUkf0&X-Amz-Signature=08c26cf4eb0737843cee9468fe8d2f7dae0edc5cf38ddef003aa74d3feb54f89&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLIFJZAE%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T061428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJGMEQCID5yV770OsYa4%2BDFTECashfxXCUxIlgNSbSE4SwMScn7AiBS11Sm8V05Xu9aAzGTJlwauBXKXvfB5aQ7cxCQUW0lpCr%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIM5WSWxQt8uiMUq1eQKtwDZ7TtvWSaEmbDBUUJm81CZxxxFtlBwu0gkHbcjPK%2FbHA64PH096kklqPYwiXil2YNl%2Fd9PSgK72DfupgQQt%2B2OtWOyqcrby%2FOH%2BjVOzoV1zdAkvk2155uioZJmU8TancP5ryT03p94o7RvZVLEcRN%2Bz94NvwR68DVpBuh7sXoF%2FmHMOBKZoepz4Lq7%2FuOy4qAzpQSi%2FRLVklW78geNi00Ck4DE9CNzQtIYK8TsrbA6%2BrifzojLXj71PgIYRsAnMDwdr2EwZTd4uFq4HyDmfRNc7ajTYS4laJI1sNWkmMU1ooSSt5oeoETwuOeowJmNXxCv00sseVtZiGYS2k3Qr%2BWf6%2F7nQVZ49KlQk6PeaKUUMlb8aZt7HfDuAiY51APUe1rcyrRDagccWbJcEh4lqUpAbT5bzWs%2BXtLoI7WSEZqNTzNmUwomGWMSQe4SxAoVX9xELJTnOkrD6kPq7LXmBOBTJyUURVtoroB16FcDeV0UzrIEJvSH3pCtRM7O7s3DMBkENlZmh7zAQBZSvFt5nqrOgWGn7Tr6QXzW9Dv6jHDlY5t%2F3IP%2BEUPM6Q4oR4lTyzu6CBcpa8xvbGyBf3XX4J5MkIynA6WUP%2BEGQKMrEWf%2FDOzQ40sDoe76NCck6YwndTXwwY6pgHsKw%2BnecjsrsQC1VvMGlYwfW9i3FyX2YjbZArVF7712yKpKQz8ugHSLOLPOtV2qp%2FuYy%2BEw4t3kUEDGsFFufov9VOYdb2UwcCJodkTQ4bZsttzFANnkwKHe4U11zZnDWAdG%2Fn0bE7xPm9fXfIYEGfwR7h%2FolHk3JVItF4QXXd2vUsa4lHm4A2wJXjCALfmFyUHwqTYBGgleW%2FwFJrj%2BMQpm4TlUkf0&X-Amz-Signature=af45feac72fde219afcef4458075a1f273a9c7f5964191fca79c13a9720aee73&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
