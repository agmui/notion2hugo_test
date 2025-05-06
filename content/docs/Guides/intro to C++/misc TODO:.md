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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQX6SQYL%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T061235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDEwkGc24PtgfngRzYuNldJDGpvGA6IKFXr6xdtlxDGEQIgZje7SieWjKcpNZ7AZJRvGi8fhVBolkIllW6dnf7ppWQq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDA1bGvl3nBwLvhw8oCrcA1IC0nWVMXW6laBMjB64UOb5MiQZDX84CIFEZcYmWG2Q4S1QU9bn%2BXDXn6e%2Be%2FV1Lxxei29KD6XrBSCw6QzagxkMFe%2F8HJCO1saF0CnddxOHsQ43p4jIp1BfTNk%2FPLVdQKX4ICwYZjFG4MxIKcg%2FNfXlv6pC922%2B0HzBL%2BJo%2B%2FVW28e0N%2B2fzMegqaXGj25ZMRwekKb74h0kZehyD2LZ38QC7FjrfJItYob0buJ8UaPU7ArHW7mZ6OI%2FMPNIxxTtJ9P%2BbIbzbmDY99CGDlxyxhTRjWckXJHyj3wn5ehQGJEistzQ8k3kRycNLoBvZwxlprEB1W6U5OXHmSxXO8arordUtELMnw36T9vET5hTvyOU%2BWqLVUpmxIlydv3vvFogIuWPFGTtV2L3OSSDJJpZvdNR5oEQekJRRHXVr9XwESOq4pGprNNe4kzBEyqUxGNTRyw%2FYkbmIjVTXmnmJM8vIZI6sm0H8Um4FoUDkhDf5MZKmGtdIbp8YVUg%2BamjF%2B31UFZxreKHINcw9UUFmfwxJ1LnTYfivk7Mudp73LIJPwoMTEQJZx1QfIzUsUSBCboSkqBaxrR%2B61pY7DJbIJlqwrsBm1i0b0s1vWxJ42V3HqlMCBmHWjfRWbW6SZBkMIKx5sAGOqUBtXWiAY5Fwa1ZjITEuS7nGdE9itiPmI8KUB%2BrJXLApKBogwYquk1wHoQug0q0UTrnuNQafDZ3CfP4ee32%2BKTBFzuKh8A0Kek49uh%2FXd0rGR4MYcQg2kQ0%2F8qHGIOUoOhzXRfX5rghpdoRqLmjcRnPLfPWCfs8x7JGATT3C9RTHbj1M3DOOTWxGWihT%2Fj3q8QfcmyMwmHzEt1AIvDSCol%2B9ZlvU8MQ&X-Amz-Signature=63d673993dc55cd672720d727cde9ae36c356edc931a504b01d4f1326db207ba&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQX6SQYL%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T061235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDEwkGc24PtgfngRzYuNldJDGpvGA6IKFXr6xdtlxDGEQIgZje7SieWjKcpNZ7AZJRvGi8fhVBolkIllW6dnf7ppWQq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDA1bGvl3nBwLvhw8oCrcA1IC0nWVMXW6laBMjB64UOb5MiQZDX84CIFEZcYmWG2Q4S1QU9bn%2BXDXn6e%2Be%2FV1Lxxei29KD6XrBSCw6QzagxkMFe%2F8HJCO1saF0CnddxOHsQ43p4jIp1BfTNk%2FPLVdQKX4ICwYZjFG4MxIKcg%2FNfXlv6pC922%2B0HzBL%2BJo%2B%2FVW28e0N%2B2fzMegqaXGj25ZMRwekKb74h0kZehyD2LZ38QC7FjrfJItYob0buJ8UaPU7ArHW7mZ6OI%2FMPNIxxTtJ9P%2BbIbzbmDY99CGDlxyxhTRjWckXJHyj3wn5ehQGJEistzQ8k3kRycNLoBvZwxlprEB1W6U5OXHmSxXO8arordUtELMnw36T9vET5hTvyOU%2BWqLVUpmxIlydv3vvFogIuWPFGTtV2L3OSSDJJpZvdNR5oEQekJRRHXVr9XwESOq4pGprNNe4kzBEyqUxGNTRyw%2FYkbmIjVTXmnmJM8vIZI6sm0H8Um4FoUDkhDf5MZKmGtdIbp8YVUg%2BamjF%2B31UFZxreKHINcw9UUFmfwxJ1LnTYfivk7Mudp73LIJPwoMTEQJZx1QfIzUsUSBCboSkqBaxrR%2B61pY7DJbIJlqwrsBm1i0b0s1vWxJ42V3HqlMCBmHWjfRWbW6SZBkMIKx5sAGOqUBtXWiAY5Fwa1ZjITEuS7nGdE9itiPmI8KUB%2BrJXLApKBogwYquk1wHoQug0q0UTrnuNQafDZ3CfP4ee32%2BKTBFzuKh8A0Kek49uh%2FXd0rGR4MYcQg2kQ0%2F8qHGIOUoOhzXRfX5rghpdoRqLmjcRnPLfPWCfs8x7JGATT3C9RTHbj1M3DOOTWxGWihT%2Fj3q8QfcmyMwmHzEt1AIvDSCol%2B9ZlvU8MQ&X-Amz-Signature=b39b95acef724750c6862b1410ae0c216e357e7a7fb7a8c489d61c5100af9c8f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
