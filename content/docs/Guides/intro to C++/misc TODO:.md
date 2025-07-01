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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XBJGEQP%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T220817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICFem2GqZ7w%2FZmhOc2G4r2ydOrWA5RFpTwdTEYk0BWxbAiEAw1jWjS%2FkTmEe7t%2BjJL5mchxJamn9FSoZB8Ciwb%2FgkYQqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEiyg1YgTo%2BRHmg8ZircA6%2BYIW98S0sgypM3mTpigpgOgr9V8uCrGPMYWpC6Ni9K4kG0N%2FoSOGUt5oV1KjoAxqoDl4Wx5AhX1auJBdBB%2BRKPjk9GZ1U473ZEp9K753qKrHaouR1Z2nO9VR6gvefRdHw5tkpErrckbzX%2BX69n9RY3%2FEnidKRO3K0krW%2BsBIniaapVKNz6CI3av9bYgL5U%2BjIFO98cuIeUS7UuKe7hJzj3XvAXz6fmZAFj7VGyeJq8WQ4zUG47hAZ%2FPbknQrsQpCZgv9y3T2SOV4yrEyjqXf0OnHPxg3XlObTjTQ6GNuPpNj8pFhAWh4MvI9sbvh5OoJ4l0svgDIEoUg5UcYAb0w9uPvhcvdGOitS4mvN5CtfqXdeA7JX%2BGff5eEABftwHIz4bjDQmQybePa6sAt9MqebBVqB8OwlnM5VAhTL8s0DviieZ6go0dAehz7klnucjJ0R%2BTjiVw0SZ2eTS%2FGWdCLk%2FAQ4CUsxlS4V4lZHtQbb2E9C5DC2c9hDho2jIu9QXVMESB6wqD6EH1z9EvS8olBv%2BkadXU0K9fUXFq2XvUmykOYUd1W1AjjknHrQSwy%2F%2F5WhtU8fiNUvY3sRGz9hf6s%2BKWdiAxacTa0HPVd6o1agCrb5g%2FOKs51WkyO2jMJCZkcMGOqUBemZ%2FmKma1zKw1GrU%2FqqraLRX4aG0n9X5qjNBMH2DvNwBvPFFqKlWp%2FLuTxXUDBtMzFjWVeUgrbWn%2FHi%2BEi8kaJtzIcGNYZkTD3%2FwAXS3AdKWoYwQAwOsR98%2FYULVKTHu7NBNQaVQDQiSJOQkvtRR7fqJl3asZW6lDGdToYbxcXqe737Z%2Byr%2F1xtwWYdSlk6h4Zm1t0bzQs16XhRGI1Za%2BJvbMG4y&X-Amz-Signature=f98a0950efbb4b01bccd71cb2767097dbe405c875ade4b3e1b4ded7dc3d611ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XBJGEQP%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T220817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICFem2GqZ7w%2FZmhOc2G4r2ydOrWA5RFpTwdTEYk0BWxbAiEAw1jWjS%2FkTmEe7t%2BjJL5mchxJamn9FSoZB8Ciwb%2FgkYQqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEiyg1YgTo%2BRHmg8ZircA6%2BYIW98S0sgypM3mTpigpgOgr9V8uCrGPMYWpC6Ni9K4kG0N%2FoSOGUt5oV1KjoAxqoDl4Wx5AhX1auJBdBB%2BRKPjk9GZ1U473ZEp9K753qKrHaouR1Z2nO9VR6gvefRdHw5tkpErrckbzX%2BX69n9RY3%2FEnidKRO3K0krW%2BsBIniaapVKNz6CI3av9bYgL5U%2BjIFO98cuIeUS7UuKe7hJzj3XvAXz6fmZAFj7VGyeJq8WQ4zUG47hAZ%2FPbknQrsQpCZgv9y3T2SOV4yrEyjqXf0OnHPxg3XlObTjTQ6GNuPpNj8pFhAWh4MvI9sbvh5OoJ4l0svgDIEoUg5UcYAb0w9uPvhcvdGOitS4mvN5CtfqXdeA7JX%2BGff5eEABftwHIz4bjDQmQybePa6sAt9MqebBVqB8OwlnM5VAhTL8s0DviieZ6go0dAehz7klnucjJ0R%2BTjiVw0SZ2eTS%2FGWdCLk%2FAQ4CUsxlS4V4lZHtQbb2E9C5DC2c9hDho2jIu9QXVMESB6wqD6EH1z9EvS8olBv%2BkadXU0K9fUXFq2XvUmykOYUd1W1AjjknHrQSwy%2F%2F5WhtU8fiNUvY3sRGz9hf6s%2BKWdiAxacTa0HPVd6o1agCrb5g%2FOKs51WkyO2jMJCZkcMGOqUBemZ%2FmKma1zKw1GrU%2FqqraLRX4aG0n9X5qjNBMH2DvNwBvPFFqKlWp%2FLuTxXUDBtMzFjWVeUgrbWn%2FHi%2BEi8kaJtzIcGNYZkTD3%2FwAXS3AdKWoYwQAwOsR98%2FYULVKTHu7NBNQaVQDQiSJOQkvtRR7fqJl3asZW6lDGdToYbxcXqe737Z%2Byr%2F1xtwWYdSlk6h4Zm1t0bzQs16XhRGI1Za%2BJvbMG4y&X-Amz-Signature=d53adf4c8a66d64d52ac19fa853f5d6e9d2146a115978651ef22e6d8ecbc3e95&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
