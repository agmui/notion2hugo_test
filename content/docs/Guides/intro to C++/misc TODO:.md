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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TE4NHXND%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T210716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIQDAO2TiDnyA5RDh2HzzBi3jTQJMUKwMGAv2J2LfkFsERwIgMFViQ9nAkunL2UAsB9Iu%2Bnw4vIFn3ELlv8LrEtm4vBQq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDN7AZ8VoF3wysW5jbCrcA0uF9ZxoLuVXNmpJ0AKn7kzlCt2CXLDjxQ5ySyBotDomFPtFzR9wYP3ZTBh9SHoc92pUqgdEGbFXZfhm1jm2mI5u18v3QO%2FRjFpzE2NWA1ZBBScjRKcGVj0hK8FH%2FXXYw9gaNiS45gWz%2BGGitbIpVNO3xpBIRmoAFe9QHnr%2FnQ%2BrH7DKEtsmcBHw4NIPh8hg4AJE5PFibCLH1V5WXf9fkPAlTIdhYGJyamk6eX%2FseCXOHAAd4bnRUX4TC2CQBNhKqaBmQDPeVcBYQXE2fs8U8RKyhxTCTYuNIXxcO15Lvw1HRYAGuB6fouY2O%2F8igXMI1eQh1hTapQq3BwHDHW%2FagBtjoJrTnjBxImuugaMyqVKH3AIdijbv2wYcXMZMFLQ57yhioCPhSxW4Vr374JG87eP3d90kazj4kMZdzM9w%2BqFL0l3nrPd4OpXECX7jkIi0zmQ2Elu99ChdIFZW5%2BDYvj9%2BtqOnDwbyLIDetJ6dS3SHPijWUWCAl5x9jwtGCj8Q4TjS2OGzot8yrD0aP7j%2FUrNNhdvNa6oQPZhrmvyRY%2Fmzr1L3BSPVdBlwcQLcddIMLBfgaB217fK%2FUUFqzbSX2k0Lvxc%2BNwKjtO9oz8BizDKU4XdS02jPlNMnVNTvMOH0zcEGOqUBAweX0j7cItRd3DxK9FqJXAqKexnq1RAWSDVi6ddpo4dg4OKVTqFCLap5CQsDnokRf77x3O2dliMSZWTiy8GJ1j4qOf33Sk%2BEK0irjfMu2SgEJ6UFEO%2BcdytUdLjRLDbwZvV1%2BYz39YCnk8LbNQHRF5%2Fs2TCwI561FVqQ4N2UU8of02WkDUFXJsxEBEXx%2BXrbfxa%2FgRziauVAZr%2Fl2bBNOkcJ6hXK&X-Amz-Signature=19e0172f6e169ed9de119a891a58efdce057ad4f76ea2c91dc96ba4a56d36726&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TE4NHXND%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T210716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIQDAO2TiDnyA5RDh2HzzBi3jTQJMUKwMGAv2J2LfkFsERwIgMFViQ9nAkunL2UAsB9Iu%2Bnw4vIFn3ELlv8LrEtm4vBQq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDN7AZ8VoF3wysW5jbCrcA0uF9ZxoLuVXNmpJ0AKn7kzlCt2CXLDjxQ5ySyBotDomFPtFzR9wYP3ZTBh9SHoc92pUqgdEGbFXZfhm1jm2mI5u18v3QO%2FRjFpzE2NWA1ZBBScjRKcGVj0hK8FH%2FXXYw9gaNiS45gWz%2BGGitbIpVNO3xpBIRmoAFe9QHnr%2FnQ%2BrH7DKEtsmcBHw4NIPh8hg4AJE5PFibCLH1V5WXf9fkPAlTIdhYGJyamk6eX%2FseCXOHAAd4bnRUX4TC2CQBNhKqaBmQDPeVcBYQXE2fs8U8RKyhxTCTYuNIXxcO15Lvw1HRYAGuB6fouY2O%2F8igXMI1eQh1hTapQq3BwHDHW%2FagBtjoJrTnjBxImuugaMyqVKH3AIdijbv2wYcXMZMFLQ57yhioCPhSxW4Vr374JG87eP3d90kazj4kMZdzM9w%2BqFL0l3nrPd4OpXECX7jkIi0zmQ2Elu99ChdIFZW5%2BDYvj9%2BtqOnDwbyLIDetJ6dS3SHPijWUWCAl5x9jwtGCj8Q4TjS2OGzot8yrD0aP7j%2FUrNNhdvNa6oQPZhrmvyRY%2Fmzr1L3BSPVdBlwcQLcddIMLBfgaB217fK%2FUUFqzbSX2k0Lvxc%2BNwKjtO9oz8BizDKU4XdS02jPlNMnVNTvMOH0zcEGOqUBAweX0j7cItRd3DxK9FqJXAqKexnq1RAWSDVi6ddpo4dg4OKVTqFCLap5CQsDnokRf77x3O2dliMSZWTiy8GJ1j4qOf33Sk%2BEK0irjfMu2SgEJ6UFEO%2BcdytUdLjRLDbwZvV1%2BYz39YCnk8LbNQHRF5%2Fs2TCwI561FVqQ4N2UU8of02WkDUFXJsxEBEXx%2BXrbfxa%2FgRziauVAZr%2Fl2bBNOkcJ6hXK&X-Amz-Signature=7d4c795d36072387059440d07eea1b8e4c73e32833ec31427866deae26d92686&X-Amz-SignedHeaders=host&x-id=GetObject)

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
