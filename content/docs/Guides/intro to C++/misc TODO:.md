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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIY3YU3K%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T200920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDnhUtt2UCFIojQQRx5IIAFPd%2Bv9LOI48a9WDT5zQGOUgIhAP33fOj8B8dDZaxPamOSn17%2FZi4LhHH4dQMKIxffxO8tKogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxKRSyQUxAWH%2BAybFoq3AP1tmFZclhF2YtQtCcaDowej29IcoVbbW%2BzfXm4kEa2mFeMCN0bkJJprV0iiR5qC2sihr0ZPLFRr2UwSLN4gDojzumSDL9OrxdMn6PHNvb4NZK394VaWMGAIrlOtCWlswi8d2L4Opcc1ZyDVvMVwrF%2B0x9sSpIpf5iWADXOEB3TUgs5K%2BDEnPW8eMAQzJnr2hDLbNN5M4uyoFdQLoAaTGvlkB1HHPQtBxzcWI2El5zPHry68apT2rbEZ5jzL6XQsW7saNFptv7ZlITQRsCGQFqCX%2BHRwCg76T6jMBar%2BxHcfe2xX99sla1IazdmMewsxFaYJqtTRcYvIMsaL164M%2BrYiFIM0n0YN67BtvgfHFaD1vmI57B1Y37HAQV8I8OqQYBhi6Dzz%2BhBC04pZFUehWbhbWauawVltP9YipgmMVJnIKf%2B%2B55XeJ8jMfY0Rrb1tF7QyEayG0xoWoK%2BCCxJS9klAVSoLcXWG5AtxkkrBeNVtuHdMgMWDspsuHrMykZTf8fVJNwYKe2hKEdOfKup6EsOAJUZ8bYNYFtJIoY%2ByF1cSW5eDNVIvZ4sTN2k7De0zGqZzLbEtE5yJJoa7%2FsZZiNAnhI6Fs59fVC1DKcxOJi%2BsTF2IP6ivt1HPUGjyjDH9e%2FDBjqkAaQRHLrBT9Fu6x7QokdxSXJ2G7ToLCP93WRJ015ODKuePBRpkZ4r5Uh8p0K%2FihaI3nNtelfjG4JdYa1Pgs9sQi76OP0nb9Ror359LHIOvF%2FRZF%2F3yabjxMHVlcRdaPzyZIr7hGo3e3QFmbG4BvuS6BxL5BIzQkJkW9ET61C6RG82%2BFDTzfX8%2BZdwnrDzbyxf%2BJIdlHxaUa0Ir1qaOSbfzo0Uetjs&X-Amz-Signature=5e297a721d1244ca0e4f759d811ad3267114ddec256ed6669947c0bbaa512063&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIY3YU3K%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T200920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDnhUtt2UCFIojQQRx5IIAFPd%2Bv9LOI48a9WDT5zQGOUgIhAP33fOj8B8dDZaxPamOSn17%2FZi4LhHH4dQMKIxffxO8tKogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxKRSyQUxAWH%2BAybFoq3AP1tmFZclhF2YtQtCcaDowej29IcoVbbW%2BzfXm4kEa2mFeMCN0bkJJprV0iiR5qC2sihr0ZPLFRr2UwSLN4gDojzumSDL9OrxdMn6PHNvb4NZK394VaWMGAIrlOtCWlswi8d2L4Opcc1ZyDVvMVwrF%2B0x9sSpIpf5iWADXOEB3TUgs5K%2BDEnPW8eMAQzJnr2hDLbNN5M4uyoFdQLoAaTGvlkB1HHPQtBxzcWI2El5zPHry68apT2rbEZ5jzL6XQsW7saNFptv7ZlITQRsCGQFqCX%2BHRwCg76T6jMBar%2BxHcfe2xX99sla1IazdmMewsxFaYJqtTRcYvIMsaL164M%2BrYiFIM0n0YN67BtvgfHFaD1vmI57B1Y37HAQV8I8OqQYBhi6Dzz%2BhBC04pZFUehWbhbWauawVltP9YipgmMVJnIKf%2B%2B55XeJ8jMfY0Rrb1tF7QyEayG0xoWoK%2BCCxJS9klAVSoLcXWG5AtxkkrBeNVtuHdMgMWDspsuHrMykZTf8fVJNwYKe2hKEdOfKup6EsOAJUZ8bYNYFtJIoY%2ByF1cSW5eDNVIvZ4sTN2k7De0zGqZzLbEtE5yJJoa7%2FsZZiNAnhI6Fs59fVC1DKcxOJi%2BsTF2IP6ivt1HPUGjyjDH9e%2FDBjqkAaQRHLrBT9Fu6x7QokdxSXJ2G7ToLCP93WRJ015ODKuePBRpkZ4r5Uh8p0K%2FihaI3nNtelfjG4JdYa1Pgs9sQi76OP0nb9Ror359LHIOvF%2FRZF%2F3yabjxMHVlcRdaPzyZIr7hGo3e3QFmbG4BvuS6BxL5BIzQkJkW9ET61C6RG82%2BFDTzfX8%2BZdwnrDzbyxf%2BJIdlHxaUa0Ir1qaOSbfzo0Uetjs&X-Amz-Signature=53122be818d07d490bde72b4bed9e37638df2f85a8fc375c41e902e582f26e30&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
