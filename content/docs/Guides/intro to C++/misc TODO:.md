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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CVB7PCU%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T003921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIQC%2Fx2sFdEWP5WCxNQxSs5OO7pRKQWfJWuPXkeowHkKkGgIgfn1uyZl%2F92T%2F289LHZBxdWQSPHVzH0cSsiEDd3QQ4VgqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDwJte%2B12Bi6CfLksircA7XTh2rfGxGpRrpc%2BTJcsH8w%2B%2Bs9WkgMtcLBvByb%2Bt8UB4pRLYh0xYUMdlzzXeF43SP7zcr0DKjYMlwWoxdi0beQgudI0RkJrdBduzmOGMI9i8PM8AKFzkmy8o8LZOYDh%2FFz1iftJ5UEZs9Oxzm8tnXSBWsWDG6IGAbZntSc9Lv59%2B%2F4z7l%2Fyw288mwJHbWWoxtaU4DeIgEJCFplDawKnRTV7z5MJ06yBXV7HMu1mVQ0xbWEt41TTODpjdLAQs9YKz9rw290%2B16KD5UirxR2h%2FELihWXW%2FEg1Uyv1RsebQ3%2BXBEe5%2B5Pb5B%2FvJkPdjxKaf5Ea%2FI%2Fbye2CsD3t58ajsTjw2VtHJwaE8cR3U9Pfamz68YJ1%2BDPjtbTQE8r3Cg5PjegCw%2Bc1PK9x8Q4us1FS8K32XpeF9Pg2K%2FogWOKIWX0FGUtgyDq8AoQASP2R2aJGwjfwsGYt8WmFvc%2BWGq8NDhCS25TUs4tqzcZ2C6QLdb3BU%2FhjkBE0ic8B83Set%2FbQknzDe00ABGkEjDz2PwQ%2FAsYBjkSmCWKO1ZHE%2FR2CKNU0JFAtOQ35ouy%2FFT4sqAgBt%2BL0XrVpBS1snVAFBwFbqFAOXY7iqa%2F0ugbN8L7pJh8roD%2B2lgE%2FwantdVYMN%2B%2F1cAGOqUB6tcq2FJNKM0GSf6UG0t8kK1ZEeiEYIYad%2BS06yO%2Bu1Fohb6HNiwhtunuv%2FWl7k42b1u%2BhlUcf%2FkkYN5y2HOSikLWze2BortjQYVf3XhHdfwb%2Bmu%2Bdhm3XSzE1bLN84Oc0phTc6SXp%2FIdBVSX2Y2F72IlbyuIWHdFY6Vx3nhJdAaMv%2BpSJZCQchVz4kZpXM3mby0Qei8fUQ6hgzPyXoukAR%2BzucAS&X-Amz-Signature=cd9547550422bf5f29a89bdffbb84944eb4cd8c5de3a20c4e8e46fd6c2dcf9fa&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CVB7PCU%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T003921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIQC%2Fx2sFdEWP5WCxNQxSs5OO7pRKQWfJWuPXkeowHkKkGgIgfn1uyZl%2F92T%2F289LHZBxdWQSPHVzH0cSsiEDd3QQ4VgqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDwJte%2B12Bi6CfLksircA7XTh2rfGxGpRrpc%2BTJcsH8w%2B%2Bs9WkgMtcLBvByb%2Bt8UB4pRLYh0xYUMdlzzXeF43SP7zcr0DKjYMlwWoxdi0beQgudI0RkJrdBduzmOGMI9i8PM8AKFzkmy8o8LZOYDh%2FFz1iftJ5UEZs9Oxzm8tnXSBWsWDG6IGAbZntSc9Lv59%2B%2F4z7l%2Fyw288mwJHbWWoxtaU4DeIgEJCFplDawKnRTV7z5MJ06yBXV7HMu1mVQ0xbWEt41TTODpjdLAQs9YKz9rw290%2B16KD5UirxR2h%2FELihWXW%2FEg1Uyv1RsebQ3%2BXBEe5%2B5Pb5B%2FvJkPdjxKaf5Ea%2FI%2Fbye2CsD3t58ajsTjw2VtHJwaE8cR3U9Pfamz68YJ1%2BDPjtbTQE8r3Cg5PjegCw%2Bc1PK9x8Q4us1FS8K32XpeF9Pg2K%2FogWOKIWX0FGUtgyDq8AoQASP2R2aJGwjfwsGYt8WmFvc%2BWGq8NDhCS25TUs4tqzcZ2C6QLdb3BU%2FhjkBE0ic8B83Set%2FbQknzDe00ABGkEjDz2PwQ%2FAsYBjkSmCWKO1ZHE%2FR2CKNU0JFAtOQ35ouy%2FFT4sqAgBt%2BL0XrVpBS1snVAFBwFbqFAOXY7iqa%2F0ugbN8L7pJh8roD%2B2lgE%2FwantdVYMN%2B%2F1cAGOqUB6tcq2FJNKM0GSf6UG0t8kK1ZEeiEYIYad%2BS06yO%2Bu1Fohb6HNiwhtunuv%2FWl7k42b1u%2BhlUcf%2FkkYN5y2HOSikLWze2BortjQYVf3XhHdfwb%2Bmu%2Bdhm3XSzE1bLN84Oc0phTc6SXp%2FIdBVSX2Y2F72IlbyuIWHdFY6Vx3nhJdAaMv%2BpSJZCQchVz4kZpXM3mby0Qei8fUQ6hgzPyXoukAR%2BzucAS&X-Amz-Signature=e19a215fdd9fc489271c3461eaee9fcfbac4ebc498941b5e60fed24d765bbe94&X-Amz-SignedHeaders=host&x-id=GetObject)

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
