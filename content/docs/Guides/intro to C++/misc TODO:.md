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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664W3UMVJ7%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T220829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG%2FxEDEMAJ3ZMU9NiC1TR24KCK%2F29QXF3zKmKLiA%2BzGSAiEA2CHqoqEFQKYIpuDLcX7tEFuIi5wIGHZJc0lzf29EX%2BUq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDPJy4F2EUtFFx%2BDhayrcA6BUtiXXkMiBar%2Fz4ljn1neeUiAyoQUndmIePXpNJCK6a6j76qFIobL2FqtWnKD9L%2FWDEz2hOUYcZw0gQZ%2F2RnMcVmVVytpzE2Mz2to%2F1nPQKXwfzoyNSR0eyRVMdgCRGK7cajV6M2Snx00fCCVFQMBSfTdACe%2FBY2fng%2FnkLT%2Be1sVv6z5GjhtXOcKFWjR43pd1W9KFdDMmqm9wJOmwmOse5ugasEt9a4WVl1N0xGKwbkWXs8yqHEvuwPk8r1vYQY2AiQd6Q7Iz1fJGQzO6wWmnmv07cZSfD8%2BKngYL%2F8%2BrC8cp7rn4NZOYTPosmQYXLFq9Nd0Ky2nbT6eBSfd5G3rCPNrJY%2Bacsnf3GpbCfcptcdvYCjrRD8mIjTBcGKJY2oxDlGKJbkRBSvP3G6gW5RqP9IwzT68Ict1r4H3f8s7TEgzYWXOMU3tOpem7OypTCSzQSdyf%2FAwlWvQ%2F0HF2lGRN%2FcktBQJcd6L8yXyuJDJg3tzUItqEbpo5%2F2e7SAtMibnCW5KF7pdjheGqZYQKqaeq%2BCltjS4Ondqkn8rjRPj0It%2BumKDb%2BkiDWs%2B96%2Bqnq1XbjtshZMUq4gF0%2B91GsnA5sOUFJFyWffwjxpRLeRY43ij6tQ2XwcqKQS9JMKTl5MAGOqUBHA0GKNcAJIt0v1oW7Nb1cOT3Pu5JWb%2Fw2uSKjhiGo%2Bb5uFPpew9emIpXgaNOVuxiLLgXI%2BJ7zebFP7IkzAsxcxinvrw%2BFvrQwj%2BzQPDrlcoFixoeP7PVEM56VlMBpn%2BMIIoeSDKu%2BSAoi4us%2B4ISKRMC8ctTMVLmbPATKN8PYdzctXYgkxwHIYTFnAupbMzIy7GxxGANV5Be1uSVVz1raOcw0M44&X-Amz-Signature=a0b834f27e32ddda3aca7c62104dc38900dd44e6b798b2fac23ff69b84ab2a92&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664W3UMVJ7%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T220829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG%2FxEDEMAJ3ZMU9NiC1TR24KCK%2F29QXF3zKmKLiA%2BzGSAiEA2CHqoqEFQKYIpuDLcX7tEFuIi5wIGHZJc0lzf29EX%2BUq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDPJy4F2EUtFFx%2BDhayrcA6BUtiXXkMiBar%2Fz4ljn1neeUiAyoQUndmIePXpNJCK6a6j76qFIobL2FqtWnKD9L%2FWDEz2hOUYcZw0gQZ%2F2RnMcVmVVytpzE2Mz2to%2F1nPQKXwfzoyNSR0eyRVMdgCRGK7cajV6M2Snx00fCCVFQMBSfTdACe%2FBY2fng%2FnkLT%2Be1sVv6z5GjhtXOcKFWjR43pd1W9KFdDMmqm9wJOmwmOse5ugasEt9a4WVl1N0xGKwbkWXs8yqHEvuwPk8r1vYQY2AiQd6Q7Iz1fJGQzO6wWmnmv07cZSfD8%2BKngYL%2F8%2BrC8cp7rn4NZOYTPosmQYXLFq9Nd0Ky2nbT6eBSfd5G3rCPNrJY%2Bacsnf3GpbCfcptcdvYCjrRD8mIjTBcGKJY2oxDlGKJbkRBSvP3G6gW5RqP9IwzT68Ict1r4H3f8s7TEgzYWXOMU3tOpem7OypTCSzQSdyf%2FAwlWvQ%2F0HF2lGRN%2FcktBQJcd6L8yXyuJDJg3tzUItqEbpo5%2F2e7SAtMibnCW5KF7pdjheGqZYQKqaeq%2BCltjS4Ondqkn8rjRPj0It%2BumKDb%2BkiDWs%2B96%2Bqnq1XbjtshZMUq4gF0%2B91GsnA5sOUFJFyWffwjxpRLeRY43ij6tQ2XwcqKQS9JMKTl5MAGOqUBHA0GKNcAJIt0v1oW7Nb1cOT3Pu5JWb%2Fw2uSKjhiGo%2Bb5uFPpew9emIpXgaNOVuxiLLgXI%2BJ7zebFP7IkzAsxcxinvrw%2BFvrQwj%2BzQPDrlcoFixoeP7PVEM56VlMBpn%2BMIIoeSDKu%2BSAoi4us%2B4ISKRMC8ctTMVLmbPATKN8PYdzctXYgkxwHIYTFnAupbMzIy7GxxGANV5Be1uSVVz1raOcw0M44&X-Amz-Signature=2d1ba04a518f9cf007cbce8a2b8a5ab0311bebb97f1f6e633f3d69593615e879&X-Amz-SignedHeaders=host&x-id=GetObject)

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
