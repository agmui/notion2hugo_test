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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WD2F7GV%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T190243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQCfuEPjwptM18eSfl6hPznFQkxVjpVnXQBd0j2Gyw4lcwIgWli5kbfVANIrWhzfPxkjDFBa0eo6otLnpSzBdvf7pvIqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLnrdx5HyKj9z8xYJCrcA2AH9UyXpp%2FGcPZMqrd9wUheujwl%2FTQFTA90flZuKsEhJxngh6AxXDr000rtWLB%2F41OXhvWHXhJXMHsFV3q8uKm%2Bc15xYC3qTml6IbOKyxsIxeCdyfKdmdzJe5HwExrpMnC%2FsT12gCTxQ%2B%2BFwA%2FqUk8UFdi3MmJgCoPuHhMR9uGF%2FeNHthSrzJJilhQstJAhqJukYNEAdCcyq3E42RPrtmQPgQSdWwWGZ9SG1lxyY7GxW8kZxmZGHzV%2FxEY2q3rJUkiQHtrZBJHSM1VSQRHONfj%2Bf1OyYHUprSZ%2F2GudB%2FiljIMhQQUgZwezizUB%2FR1CjJ2GG71LGtyrg3EL3b92F0BaFpQzS7f9vA52Ec5fIXgNSNJlie%2FFIAjb4%2FMHuUizRrwiA7vmH%2BhqrAUZbMsAxTQtNueiaZ0MJZUAuonBuinpwR%2BlSnwv8kiLE4tb%2Bec38ejgiOgcsbK3Koeau1GRtbQrkroxbZTx38Gwjg2WQe%2BM3qQ8OAZlPsnNlWK3C6HIvXyzRucE7H1pJtRMwRXw2HJ0szPWrDDu1jHA0EsrcKh%2Bi3bNRzVsJ6DJz99aiEY08d%2F%2Bq%2FjKQgkimG2vZoVNW6aVMTZI3VPkzquizutvGr6OJWU2sUcBmPHWI%2F9IMKWF8sEGOqUBg7jlj%2BONEUbuMUGF6HNyRJjIX0cI%2B2gRjI9S695t%2F%2FmmBeOJmqv55DwWxVixAcis7v%2FdrmYPX%2FFesEl5sYXabrG3jU6ieYKDGAgIiYVaTzv01MEpZCPbcRJzrjjwgvYeF%2BU64niELKCJ5EqV5Y4dWhn8eYCp3mDLMres%2BNbr3Fgf3ngbN4bZ0zvxt9Iimn2SEP3c06p2ThrbiRNj7%2BeB2axl9%2FEQ&X-Amz-Signature=9edcee44822f48a9f31bfde4cf69d18f66dd2848fecce0adee8097a44583a42c&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WD2F7GV%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T190243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQCfuEPjwptM18eSfl6hPznFQkxVjpVnXQBd0j2Gyw4lcwIgWli5kbfVANIrWhzfPxkjDFBa0eo6otLnpSzBdvf7pvIqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLnrdx5HyKj9z8xYJCrcA2AH9UyXpp%2FGcPZMqrd9wUheujwl%2FTQFTA90flZuKsEhJxngh6AxXDr000rtWLB%2F41OXhvWHXhJXMHsFV3q8uKm%2Bc15xYC3qTml6IbOKyxsIxeCdyfKdmdzJe5HwExrpMnC%2FsT12gCTxQ%2B%2BFwA%2FqUk8UFdi3MmJgCoPuHhMR9uGF%2FeNHthSrzJJilhQstJAhqJukYNEAdCcyq3E42RPrtmQPgQSdWwWGZ9SG1lxyY7GxW8kZxmZGHzV%2FxEY2q3rJUkiQHtrZBJHSM1VSQRHONfj%2Bf1OyYHUprSZ%2F2GudB%2FiljIMhQQUgZwezizUB%2FR1CjJ2GG71LGtyrg3EL3b92F0BaFpQzS7f9vA52Ec5fIXgNSNJlie%2FFIAjb4%2FMHuUizRrwiA7vmH%2BhqrAUZbMsAxTQtNueiaZ0MJZUAuonBuinpwR%2BlSnwv8kiLE4tb%2Bec38ejgiOgcsbK3Koeau1GRtbQrkroxbZTx38Gwjg2WQe%2BM3qQ8OAZlPsnNlWK3C6HIvXyzRucE7H1pJtRMwRXw2HJ0szPWrDDu1jHA0EsrcKh%2Bi3bNRzVsJ6DJz99aiEY08d%2F%2Bq%2FjKQgkimG2vZoVNW6aVMTZI3VPkzquizutvGr6OJWU2sUcBmPHWI%2F9IMKWF8sEGOqUBg7jlj%2BONEUbuMUGF6HNyRJjIX0cI%2B2gRjI9S695t%2F%2FmmBeOJmqv55DwWxVixAcis7v%2FdrmYPX%2FFesEl5sYXabrG3jU6ieYKDGAgIiYVaTzv01MEpZCPbcRJzrjjwgvYeF%2BU64niELKCJ5EqV5Y4dWhn8eYCp3mDLMres%2BNbr3Fgf3ngbN4bZ0zvxt9Iimn2SEP3c06p2ThrbiRNj7%2BeB2axl9%2FEQ&X-Amz-Signature=4db65258da7daa872252a1525cee86730a626d16a0b9089e4535c92856fef0c6&X-Amz-SignedHeaders=host&x-id=GetObject)

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
