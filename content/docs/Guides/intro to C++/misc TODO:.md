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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWBCPWMN%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T040024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDTzo%2BijSP4GP%2BBanJe5a43qS85QcJymW%2BGeIvzooovdwIhAP5sUuKzXkkfDiuZYBF%2FscEou10Y6mfVQhicunnr7c1TKogECMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxIzhKLkd3SmYwL%2FV4q3AMg6XcInR37P3i3iK5KtOFgzZr8DB2605ggw7Hg24PyfvjOiGOsCMFA%2B4MgsWG65xeReEvP67A7HtOzWpalgpqk3nwygBB%2BbkoH4pBfZRsOkOZUa0mG5XwRLI8HDtUmUS79wg%2FJliqJQ%2BQJGWP1X9HDy%2BlCrzXCTYwZPiXpZH4honmrkKvJayRDGunu%2Brb33Gw0N7MhWcFBvloqcoWWDvPncw%2F98CCpYSaSmteuRhcEyqE9cD1huREHv9rpjKjhZ42q4t3hOs%2BtE6RsOJaANryNKv62yO3g9DJYxTQK5QrdjXhcMsnFr2kr9Jb8O2T9Yfs1v3HP%2B9yr5JGIqHjM0zoY5Auf1Z0w3hWp4N%2FfiqJMc1Wa0VEJjfPPBZzSszf4CfPYQEZGduO%2FRRIgGSg8Kb6YNeQSQt%2Bc4FQoW1T6oUQgmQIkXInVBGHXizgyehaCGBhXwYt55FZsE9uJqROTG8AdWdZQ9%2BbGRlmvfx73SlM8heXQpFEuwQZZKzFLLCbYL%2BWpHphDllFUxx93wLRfw5YJ3keWoUE5%2BlQZIyDKJ%2FgQPLi%2FvwnSF6JuFQbZdcspjkXCt55OTbJpXRi3f0V0yeazNqIJyG0W4Tsum97mXN98wOgaRf%2B6%2BzCvqJsKWzCWs9%2FEBjqkAfMKOtdO8ce3nL2hlOhQyOa1rCGNNzoSWtaHWMneZwAj6Q5gFTB%2B4bhyK%2F40RIfHgyesVRpwhNQxBpXPmEIsSLKveNmiIgoJf83Qvm0%2FXjTb8HTmB1Apkdy9%2FQ%2Bx5Yy%2F6gzXWAE7BJhT7YWnVJKqg9wVOws22E7fg4FH9yOKY6PRPX%2FA%2Bqmb6JOlQ7s%2BWXXJ%2BQnz04JWSn2HFHb6iQpgQMfBthSc&X-Amz-Signature=fa7200294ca8e12454e036fd21391050624feae85a4a6d3f3744f744b8392d2c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWBCPWMN%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T040024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDTzo%2BijSP4GP%2BBanJe5a43qS85QcJymW%2BGeIvzooovdwIhAP5sUuKzXkkfDiuZYBF%2FscEou10Y6mfVQhicunnr7c1TKogECMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxIzhKLkd3SmYwL%2FV4q3AMg6XcInR37P3i3iK5KtOFgzZr8DB2605ggw7Hg24PyfvjOiGOsCMFA%2B4MgsWG65xeReEvP67A7HtOzWpalgpqk3nwygBB%2BbkoH4pBfZRsOkOZUa0mG5XwRLI8HDtUmUS79wg%2FJliqJQ%2BQJGWP1X9HDy%2BlCrzXCTYwZPiXpZH4honmrkKvJayRDGunu%2Brb33Gw0N7MhWcFBvloqcoWWDvPncw%2F98CCpYSaSmteuRhcEyqE9cD1huREHv9rpjKjhZ42q4t3hOs%2BtE6RsOJaANryNKv62yO3g9DJYxTQK5QrdjXhcMsnFr2kr9Jb8O2T9Yfs1v3HP%2B9yr5JGIqHjM0zoY5Auf1Z0w3hWp4N%2FfiqJMc1Wa0VEJjfPPBZzSszf4CfPYQEZGduO%2FRRIgGSg8Kb6YNeQSQt%2Bc4FQoW1T6oUQgmQIkXInVBGHXizgyehaCGBhXwYt55FZsE9uJqROTG8AdWdZQ9%2BbGRlmvfx73SlM8heXQpFEuwQZZKzFLLCbYL%2BWpHphDllFUxx93wLRfw5YJ3keWoUE5%2BlQZIyDKJ%2FgQPLi%2FvwnSF6JuFQbZdcspjkXCt55OTbJpXRi3f0V0yeazNqIJyG0W4Tsum97mXN98wOgaRf%2B6%2BzCvqJsKWzCWs9%2FEBjqkAfMKOtdO8ce3nL2hlOhQyOa1rCGNNzoSWtaHWMneZwAj6Q5gFTB%2B4bhyK%2F40RIfHgyesVRpwhNQxBpXPmEIsSLKveNmiIgoJf83Qvm0%2FXjTb8HTmB1Apkdy9%2FQ%2Bx5Yy%2F6gzXWAE7BJhT7YWnVJKqg9wVOws22E7fg4FH9yOKY6PRPX%2FA%2Bqmb6JOlQ7s%2BWXXJ%2BQnz04JWSn2HFHb6iQpgQMfBthSc&X-Amz-Signature=7ee959715b20a43ee552b08b18a1633134737a1879fd76222e45c4ad47de4c34&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
