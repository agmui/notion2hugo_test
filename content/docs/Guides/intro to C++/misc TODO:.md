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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6SQNUZ6%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T200946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC3e7L7SaNnLt7DPwnpAf4aw3Q9kxcbvvi%2FQjdjCPI4FAIgRX9QZ7z9p9h4dem5ZI%2B3RNlPxwmnYRRqp8ExLIDoF2Eq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDKz8tj4FpkojdP6xUCrcA581HS02IviTbVa9jSwtLdyY%2BTUzfwSniULNoO9FvlRbOKmlp2a9BiQDdJCGKOiLmQgn9gv0UCXzWPjF6BZR3HSo2XwoJ8SZ3BN%2F5kwpO3y0tBgS%2B2Q2xoBW2ACp940YK5gVr663Q%2BGxrwEJMAXYAsIQMAaThICzDpzFFF5KjmfAA%2FTwrYAB2K0Lv0R5jie76ouGjrOG6RfY%2F3UbYLAdIubPzON2SnHfsE%2FP3AGF77zticVUhh6WysqAq9cuu2mZeoB%2FWW2kpGUt0XNlmPus8QlVjaJ4ZI1rafVVMbpR6tl7sQhPAb19LznP483rlzo34jbX31BZtDRqL%2B6pJDCDRQZlsx4N%2BgGClOWxIFLMVcpsbp%2FG6gRAjeJsZofPHWnOD7xpyNEFYb7QrzyXTimg0Df9VtCICJVi3jjIPYpZoshmO8U%2BOv4L26%2BAu%2FiJUskubpUISD16D2aOk9E7xUBeU8AZvKa2uQkKl33qzD5iVVN8oJJMS53VX0Y8jahzm41Jyn4prLYc5PIndTbMkxF03yQtw%2F6l9Lqao32ntnRcOCbPeo9L02kWftoeeePlLido1wyjQ1acCn0kZneje7Umelqkj%2FcLmZbQZesLQVkd6CMqb%2B3914QSku730NocMM3p7sAGOqUBnLxGATKXvDePT2Ubeqi4R%2B4BJY0bMpqxYlhufmWGC8EF7Jg4qZlwxix0KFufarytEXHxsC2r3J3TyuDX3cViziA%2BkyUNQqxus5h09DO7UvWOqFHL%2B7Ga2M8chHhJBANSW%2FconK1kTx%2F3oX9wp%2BX%2FyRJtCLcJ4bTh%2FKWYC7m6vdzw5bdB8IGriX2o9CcC1fH0s385d%2FbJLY%2Fvqppe%2BCYlYkqBVCTe&X-Amz-Signature=2763d70791542a40819d2ad166905615dc46af5e3e919176e5c76afd31ffcd31&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6SQNUZ6%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T200946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC3e7L7SaNnLt7DPwnpAf4aw3Q9kxcbvvi%2FQjdjCPI4FAIgRX9QZ7z9p9h4dem5ZI%2B3RNlPxwmnYRRqp8ExLIDoF2Eq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDKz8tj4FpkojdP6xUCrcA581HS02IviTbVa9jSwtLdyY%2BTUzfwSniULNoO9FvlRbOKmlp2a9BiQDdJCGKOiLmQgn9gv0UCXzWPjF6BZR3HSo2XwoJ8SZ3BN%2F5kwpO3y0tBgS%2B2Q2xoBW2ACp940YK5gVr663Q%2BGxrwEJMAXYAsIQMAaThICzDpzFFF5KjmfAA%2FTwrYAB2K0Lv0R5jie76ouGjrOG6RfY%2F3UbYLAdIubPzON2SnHfsE%2FP3AGF77zticVUhh6WysqAq9cuu2mZeoB%2FWW2kpGUt0XNlmPus8QlVjaJ4ZI1rafVVMbpR6tl7sQhPAb19LznP483rlzo34jbX31BZtDRqL%2B6pJDCDRQZlsx4N%2BgGClOWxIFLMVcpsbp%2FG6gRAjeJsZofPHWnOD7xpyNEFYb7QrzyXTimg0Df9VtCICJVi3jjIPYpZoshmO8U%2BOv4L26%2BAu%2FiJUskubpUISD16D2aOk9E7xUBeU8AZvKa2uQkKl33qzD5iVVN8oJJMS53VX0Y8jahzm41Jyn4prLYc5PIndTbMkxF03yQtw%2F6l9Lqao32ntnRcOCbPeo9L02kWftoeeePlLido1wyjQ1acCn0kZneje7Umelqkj%2FcLmZbQZesLQVkd6CMqb%2B3914QSku730NocMM3p7sAGOqUBnLxGATKXvDePT2Ubeqi4R%2B4BJY0bMpqxYlhufmWGC8EF7Jg4qZlwxix0KFufarytEXHxsC2r3J3TyuDX3cViziA%2BkyUNQqxus5h09DO7UvWOqFHL%2B7Ga2M8chHhJBANSW%2FconK1kTx%2F3oX9wp%2BX%2FyRJtCLcJ4bTh%2FKWYC7m6vdzw5bdB8IGriX2o9CcC1fH0s385d%2FbJLY%2Fvqppe%2BCYlYkqBVCTe&X-Amz-Signature=815889ec5c0d879a851f333269f89338821f1abf77213d1ed32dede2fb3f8308&X-Amz-SignedHeaders=host&x-id=GetObject)

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
