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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LBQVV7O%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T090919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG%2FtAQzcUrUY9LfhGcGyEIig%2Bm5AHZlpJATBarVrk%2B6tAiEA%2BqXWKkXXocdffouTEI8%2B8aQh%2B%2By3cBBMf%2F2WQmF2qWEq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDHHWiz5v%2BtqFEBNAtircAytljXx%2BSmtRKqkWSi4zJXluYc6gNYuYgDOce9iQD0F0ZZzOkDnwovXFHvwb06lNJN8BBNEGLVzEHaN3U2crRIw%2BNY%2FvD%2BReYw4vM9Pfusi1z%2BwfBu5i7WppwEbRNQxO7tyzLZypPGS0fvriJ%2F1M4tDYAaChooJ3vjxQwtruruKeRvJKoDHulMYUgk1%2F5eEuPWFKIsgSLk8onNuH0cOdKJrpFaG5LtQE4frm0FIvvSCRZQjAqGS27EWAPI%2B5fj0Z1ErC%2Br3%2B8QtkVUnYl2unC%2FTuOFWICcrZds%2BZ6ufV31MAITeFxgou1kRMWzzr1ZzkAGiiRN%2BpzZIuLSnfDcLm0BPgLBdEzBcDhk8IAst1yEJk5y9aqY7itP1SdPSgV8srRJmXVNNFfooKo2WL%2B3gcml51xFKvVgAP0flVRqV4fc%2FuT1mlXzLhiE4%2B7uvM3dBexIPCY0Hta6cDteT49kwILAPz9W6W5lORiVr%2FMHAfBlRqyI3hcLDpg0bG05v3QikRbbHSLjKxyNREr2zxUa0YAKa0Clog2jo0fspB%2FD7TLYmAc5jJ4YgSKUzP3PDQpPEe%2FaDYbax66Myn6u8rLLyEqW%2FvuKauroCq79L1IiQ2nKCNx8Men5JIffT3N7hXMMSbrcAGOqUBVVfLyj7ffe9Nply9v0ayMUhxdJfU7XysNTIhnI0YGYl3yo6eVABPNTL3MLnL11%2FN467AXRqWZv8zng1NMggsIbk8o%2FMtMo7VxTU9isrLxsKYovamqhqCGJSCjkarEGKMv6k4A%2FfCsVaQ5fFxV7Jt2QYv3w%2BEKkViV%2B7fKZz90EInLfYJSfArkqJ2O4xgput0F%2B%2ByRTeyphR7o7qHE4rXtuozykUE&X-Amz-Signature=6113d5308b911364a72ea9c4a0aaf1f27365334bbddb7593cb970ecaf6ea503b&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LBQVV7O%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T090919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG%2FtAQzcUrUY9LfhGcGyEIig%2Bm5AHZlpJATBarVrk%2B6tAiEA%2BqXWKkXXocdffouTEI8%2B8aQh%2B%2By3cBBMf%2F2WQmF2qWEq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDHHWiz5v%2BtqFEBNAtircAytljXx%2BSmtRKqkWSi4zJXluYc6gNYuYgDOce9iQD0F0ZZzOkDnwovXFHvwb06lNJN8BBNEGLVzEHaN3U2crRIw%2BNY%2FvD%2BReYw4vM9Pfusi1z%2BwfBu5i7WppwEbRNQxO7tyzLZypPGS0fvriJ%2F1M4tDYAaChooJ3vjxQwtruruKeRvJKoDHulMYUgk1%2F5eEuPWFKIsgSLk8onNuH0cOdKJrpFaG5LtQE4frm0FIvvSCRZQjAqGS27EWAPI%2B5fj0Z1ErC%2Br3%2B8QtkVUnYl2unC%2FTuOFWICcrZds%2BZ6ufV31MAITeFxgou1kRMWzzr1ZzkAGiiRN%2BpzZIuLSnfDcLm0BPgLBdEzBcDhk8IAst1yEJk5y9aqY7itP1SdPSgV8srRJmXVNNFfooKo2WL%2B3gcml51xFKvVgAP0flVRqV4fc%2FuT1mlXzLhiE4%2B7uvM3dBexIPCY0Hta6cDteT49kwILAPz9W6W5lORiVr%2FMHAfBlRqyI3hcLDpg0bG05v3QikRbbHSLjKxyNREr2zxUa0YAKa0Clog2jo0fspB%2FD7TLYmAc5jJ4YgSKUzP3PDQpPEe%2FaDYbax66Myn6u8rLLyEqW%2FvuKauroCq79L1IiQ2nKCNx8Men5JIffT3N7hXMMSbrcAGOqUBVVfLyj7ffe9Nply9v0ayMUhxdJfU7XysNTIhnI0YGYl3yo6eVABPNTL3MLnL11%2FN467AXRqWZv8zng1NMggsIbk8o%2FMtMo7VxTU9isrLxsKYovamqhqCGJSCjkarEGKMv6k4A%2FfCsVaQ5fFxV7Jt2QYv3w%2BEKkViV%2B7fKZz90EInLfYJSfArkqJ2O4xgput0F%2B%2ByRTeyphR7o7qHE4rXtuozykUE&X-Amz-Signature=75b9cca8118153d51e546ff254a557dd1387d71f982745127df920156d22a722&X-Amz-SignedHeaders=host&x-id=GetObject)

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
