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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXJJW3P5%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T190123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIHQet1gPqFHyOOr3vhegpX%2Fqj%2BroH5UtMQ4YFXze0Hn5AiEA4XB6YhNp732jaea4Kns8Udq3a5S0ODYe1g3jn%2Bu6pJkq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDIlxOA3qTV3X%2FtOo2SrcA8K66%2Fee0xsJVJcq19hBVI7Ts%2FzdTHFks5UclHUMrn5l8ZT8H%2F7nRLn8zfa682KCCUxSZCstGr7aE00UTGrWa4mkbUcFrDazc6dCE%2FBRups%2F1XCSKuivhGuNHbfRyBtUUF%2B4M0EL5Gs9OR5I99r4fv9%2FumdXuBXIvV4CY23%2F1aELd4LvfEBVaN9hMezFnEAryHW9QHz0HfEZ20RgraKV6EWLBIfulbbaHQk4oANEtILr4lpH9e%2BRkXEoxFyIHfc95WDMBXXcBHn8XCCgBTMAQOwIK2HhqGxkeORT1VmkZ1VWn8qB%2BJNUUF340oj9V7rr8RqA7wov5ByeNEi0XssyqMCZ04UzUgf3GbiJGfAljjjcjLI3oDfjNHQy81jTCEa5es%2BHCm7ZUW0ec4jmpnv2SwXo%2BdOK6DTHJ6o0Tu0oRdcHrPEjruhvY0ipNoDWaQqWd%2FgYw2nYki%2BibaUHPC0Bh4Q2ZKKkcAajP0P%2Fc1i%2B%2FmluQfAedcD1NFjnL1BNvH%2FYiE8GbA0BpGhd%2FriOpjW%2Fn%2BHJLye0S4CqHIFtnYypaxMyPwWzipYHTFWtTd5uTsQpGnnkFTVlS3HGgWzm7XcIRMHEF5wuY92lLyEPgsPj9YFzR8boEaIidpsXc1vyMISDsr4GOqUBE2UKsyYgOh3CbOMXJqdFgjZMNWza14caWlijwezVjzyAq3pRy0vHfr9QWAKX3DDUqzMued6TDskp7o4J%2FSKbswBSeeyuBy849Ow2FFuoYz%2F5MW95BXJCCWtRbSKH5OL8RdQDGrLhjMOPjInE3QLQXQkAek%2BHFwJbnRWg4KUjN90vfFsloWaUDELHH7bWQcg%2BnLi7ZK%2FTItIYCoAeWj7uW8cD3rif&X-Amz-Signature=c2ec180d98d05ea385e2f3adb9bf02da25174a396627544096f34db56f31b3ce&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXJJW3P5%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T190123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIHQet1gPqFHyOOr3vhegpX%2Fqj%2BroH5UtMQ4YFXze0Hn5AiEA4XB6YhNp732jaea4Kns8Udq3a5S0ODYe1g3jn%2Bu6pJkq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDIlxOA3qTV3X%2FtOo2SrcA8K66%2Fee0xsJVJcq19hBVI7Ts%2FzdTHFks5UclHUMrn5l8ZT8H%2F7nRLn8zfa682KCCUxSZCstGr7aE00UTGrWa4mkbUcFrDazc6dCE%2FBRups%2F1XCSKuivhGuNHbfRyBtUUF%2B4M0EL5Gs9OR5I99r4fv9%2FumdXuBXIvV4CY23%2F1aELd4LvfEBVaN9hMezFnEAryHW9QHz0HfEZ20RgraKV6EWLBIfulbbaHQk4oANEtILr4lpH9e%2BRkXEoxFyIHfc95WDMBXXcBHn8XCCgBTMAQOwIK2HhqGxkeORT1VmkZ1VWn8qB%2BJNUUF340oj9V7rr8RqA7wov5ByeNEi0XssyqMCZ04UzUgf3GbiJGfAljjjcjLI3oDfjNHQy81jTCEa5es%2BHCm7ZUW0ec4jmpnv2SwXo%2BdOK6DTHJ6o0Tu0oRdcHrPEjruhvY0ipNoDWaQqWd%2FgYw2nYki%2BibaUHPC0Bh4Q2ZKKkcAajP0P%2Fc1i%2B%2FmluQfAedcD1NFjnL1BNvH%2FYiE8GbA0BpGhd%2FriOpjW%2Fn%2BHJLye0S4CqHIFtnYypaxMyPwWzipYHTFWtTd5uTsQpGnnkFTVlS3HGgWzm7XcIRMHEF5wuY92lLyEPgsPj9YFzR8boEaIidpsXc1vyMISDsr4GOqUBE2UKsyYgOh3CbOMXJqdFgjZMNWza14caWlijwezVjzyAq3pRy0vHfr9QWAKX3DDUqzMued6TDskp7o4J%2FSKbswBSeeyuBy849Ow2FFuoYz%2F5MW95BXJCCWtRbSKH5OL8RdQDGrLhjMOPjInE3QLQXQkAek%2BHFwJbnRWg4KUjN90vfFsloWaUDELHH7bWQcg%2BnLi7ZK%2FTItIYCoAeWj7uW8cD3rif&X-Amz-Signature=c951ed1740c4160036ecb8f75a5f6f968a927d16ded35aa98898cc360b19008d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
