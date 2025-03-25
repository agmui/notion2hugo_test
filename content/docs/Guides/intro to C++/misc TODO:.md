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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667H2QDBVE%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T081137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDP69il3BlntzyVkrFBtyMTlMB0MWO4hCkwi4VHyJtYdwIgJ1aIL1yAMdWwXX2KkYWAjqVaX3axY6Gk%2FjWlQ8AY4F8q%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDA1ZXg8NvGHhth7RdCrcA2fgYNkPJq5jEGwQFHeBUKCnip9arG3S1zetjcU%2BVinBid%2B%2BDlCurOot7sudtdvQHENe%2B7qXiUQAn6YpgWNhOFEH8atVYgNFugemFChl2Bd8NWacIERq0vpbaN%2B47Jq%2BW%2FCo0fWNHSVPXIAEOyOx%2F4j0J76CL45aiztzV52F%2FCki3M27N5GttQ%2BbPI7hFB185tEBSB9c8SWfHXODJGRwQJhR9iuh31AwGWAwA58m0b2fPGIZ9i0bkQpbKF8xciuo11pNzpdcvi9rEveSxagcrkth4fSH6KsR1vgrDlXeo4nA0hDoWUj3lD9r2%2BcfMW3JI7mD6xXEKvoXkm8Qp3Ct7K3hPlIUtsn0lZEvLYdYMA7IMG%2FvmbF781pKjXlpXOaKRnwsyV7IN%2BmrtR8WQisjQvdsNnfaOdHEA6PpbVaaxCftENpq2%2B1nsrj1967Yde7Kpne%2FozMXyYTRhsADBuWq2d7XIYEnZzLj2O7uCxXS3gUOTIn57YpXNA%2BHd%2Bw6pJKbXP7SxR4TfY7fjOPR7B9GISB2ex6uBA%2FW9mr%2FxWD548z5avxi3g7gn%2FXpZOt%2BOZSpnm3YnKo8kP8AJXttTHNVjPXSkWkI0a4Mb1kDJg0v8TQh%2FD3aDLv%2F9bDUw8yBMKeuib8GOqUBvjmMN4l4s9PYpuFOQR1%2FHgdY3RWdOJzaihypS%2B3eqcMYPz1CydOlxOJwnN4YsTdRccJ9xGj77J8nduGCGDXX%2BBnyIL0dCgCmS1%2B0Ud3QjjWmv0qgP08CxgsYbPDiB81RAbB%2Bkgj2f0W4cFpFN4QYAw3YHwDWx4xrsYILWIg6vz79OIEGfZXL2Qo0YkWy3wGwidJ4JUMTUNLuOOWeq%2B0tny%2FbTWl%2F&X-Amz-Signature=e15e99aea112d5610b14c67f10857735dc3ccd2163ece0a0c5800ba5062ec70d&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667H2QDBVE%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T081137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDP69il3BlntzyVkrFBtyMTlMB0MWO4hCkwi4VHyJtYdwIgJ1aIL1yAMdWwXX2KkYWAjqVaX3axY6Gk%2FjWlQ8AY4F8q%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDA1ZXg8NvGHhth7RdCrcA2fgYNkPJq5jEGwQFHeBUKCnip9arG3S1zetjcU%2BVinBid%2B%2BDlCurOot7sudtdvQHENe%2B7qXiUQAn6YpgWNhOFEH8atVYgNFugemFChl2Bd8NWacIERq0vpbaN%2B47Jq%2BW%2FCo0fWNHSVPXIAEOyOx%2F4j0J76CL45aiztzV52F%2FCki3M27N5GttQ%2BbPI7hFB185tEBSB9c8SWfHXODJGRwQJhR9iuh31AwGWAwA58m0b2fPGIZ9i0bkQpbKF8xciuo11pNzpdcvi9rEveSxagcrkth4fSH6KsR1vgrDlXeo4nA0hDoWUj3lD9r2%2BcfMW3JI7mD6xXEKvoXkm8Qp3Ct7K3hPlIUtsn0lZEvLYdYMA7IMG%2FvmbF781pKjXlpXOaKRnwsyV7IN%2BmrtR8WQisjQvdsNnfaOdHEA6PpbVaaxCftENpq2%2B1nsrj1967Yde7Kpne%2FozMXyYTRhsADBuWq2d7XIYEnZzLj2O7uCxXS3gUOTIn57YpXNA%2BHd%2Bw6pJKbXP7SxR4TfY7fjOPR7B9GISB2ex6uBA%2FW9mr%2FxWD548z5avxi3g7gn%2FXpZOt%2BOZSpnm3YnKo8kP8AJXttTHNVjPXSkWkI0a4Mb1kDJg0v8TQh%2FD3aDLv%2F9bDUw8yBMKeuib8GOqUBvjmMN4l4s9PYpuFOQR1%2FHgdY3RWdOJzaihypS%2B3eqcMYPz1CydOlxOJwnN4YsTdRccJ9xGj77J8nduGCGDXX%2BBnyIL0dCgCmS1%2B0Ud3QjjWmv0qgP08CxgsYbPDiB81RAbB%2Bkgj2f0W4cFpFN4QYAw3YHwDWx4xrsYILWIg6vz79OIEGfZXL2Qo0YkWy3wGwidJ4JUMTUNLuOOWeq%2B0tny%2FbTWl%2F&X-Amz-Signature=8d3276cd2bff6ba4e994ea124959783cbf3b2cd09422adbe26bbd4dd752b93ec&X-Amz-SignedHeaders=host&x-id=GetObject)

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
