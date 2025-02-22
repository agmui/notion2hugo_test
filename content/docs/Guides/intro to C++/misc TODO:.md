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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QHTMDTH%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T220231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCsF27uy3HsGvdeO6POzJmTeAaSLBqynCuPRNLXZd23HgIgJSzBrdjBBN35%2Bu%2BYxnqznIqXQLjCnedDtL6erpolBhMqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFuUMCTGPkrzg%2FsivyrcAwwwBPGeqqHm3nc7pb4NWbUo2UozT4emhbCI8ZzfBGvWGAAhRn8B3J6uifxBcbn%2FRUEoOiuY6OUVg6Tyf8JenrLlZmohB2bvOxwAtdHAl0pLnKGpCgVYJlQyEL0eyZzCur44tcy1DY70WaHFu3gmKO4kgsChsXYkHeAUxgHNdcf97iB4yQrDn1PdVSZRiTnSBFD6i%2FVzaYFESdKYSGVWjMrEUmMJFe7QHpK%2FD%2FnKpU35EqdcCB0cg2yGhr7VHrXxznnC3pNCgpO1Vc5pCa78pLyFwtavR%2FzboLj%2BrAGB0CyVXbjPG14Ilv4MbsgQ1igLAPEUhRGWJh3fR9yyJrnm7K1DNqdRxmoNcWxSVuAdURLf8mEeWFkjN9JKui7CXhihzds67rgykaUKzO9OkCwsXrWEwQJaOE%2F%2BDaa%2FT4hl%2FDMPsvm%2BF7Lo5KgehU%2FgVT2jRpDsr44Pi0EZpdbtNYaohBYSX8x2Bj18%2Fi%2BbFAhnJAxtdI2H5AloC43%2BK5Fib5PgjgSv0EgnqUbJVyt4VAj%2Fbq0MK0K9qZgY%2BgpSz5c9lL3YqOP5DeUlTvoycbuVu1pBdMyXhewYp%2BEsGz1O1Wxw9AwEeqiwYCqPTLTSzLCK%2FZxz0aVbECH%2BFjxB%2FhjKMKmI6L0GOqUBs6ZQMAOzOiYuL1imoLrJkUiTis%2BFb1LTYHWX4kERVU1%2BWiDsRAoEA1KTFb0tMiT2UUeS6M%2FWUhmuxyvN5%2Br9Nx1flaQ5C7tJTo899%2B%2FnUR5PyfSPz%2Fud3BCS5DWYvZWTC0%2By2J1Q%2BNP3C7EwiresiU2QDzOE7g3lrMY1Fn99qkRd4TnYMT49YwrS3lT30vTJsaaHkuLdeN61iVX7yov0K9raXC3A&X-Amz-Signature=7568dfc95e987630d2cea4881bc2a0c9ef15411ffc5c605151d38fe95c11a98b&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QHTMDTH%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T220231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCsF27uy3HsGvdeO6POzJmTeAaSLBqynCuPRNLXZd23HgIgJSzBrdjBBN35%2Bu%2BYxnqznIqXQLjCnedDtL6erpolBhMqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFuUMCTGPkrzg%2FsivyrcAwwwBPGeqqHm3nc7pb4NWbUo2UozT4emhbCI8ZzfBGvWGAAhRn8B3J6uifxBcbn%2FRUEoOiuY6OUVg6Tyf8JenrLlZmohB2bvOxwAtdHAl0pLnKGpCgVYJlQyEL0eyZzCur44tcy1DY70WaHFu3gmKO4kgsChsXYkHeAUxgHNdcf97iB4yQrDn1PdVSZRiTnSBFD6i%2FVzaYFESdKYSGVWjMrEUmMJFe7QHpK%2FD%2FnKpU35EqdcCB0cg2yGhr7VHrXxznnC3pNCgpO1Vc5pCa78pLyFwtavR%2FzboLj%2BrAGB0CyVXbjPG14Ilv4MbsgQ1igLAPEUhRGWJh3fR9yyJrnm7K1DNqdRxmoNcWxSVuAdURLf8mEeWFkjN9JKui7CXhihzds67rgykaUKzO9OkCwsXrWEwQJaOE%2F%2BDaa%2FT4hl%2FDMPsvm%2BF7Lo5KgehU%2FgVT2jRpDsr44Pi0EZpdbtNYaohBYSX8x2Bj18%2Fi%2BbFAhnJAxtdI2H5AloC43%2BK5Fib5PgjgSv0EgnqUbJVyt4VAj%2Fbq0MK0K9qZgY%2BgpSz5c9lL3YqOP5DeUlTvoycbuVu1pBdMyXhewYp%2BEsGz1O1Wxw9AwEeqiwYCqPTLTSzLCK%2FZxz0aVbECH%2BFjxB%2FhjKMKmI6L0GOqUBs6ZQMAOzOiYuL1imoLrJkUiTis%2BFb1LTYHWX4kERVU1%2BWiDsRAoEA1KTFb0tMiT2UUeS6M%2FWUhmuxyvN5%2Br9Nx1flaQ5C7tJTo899%2B%2FnUR5PyfSPz%2Fud3BCS5DWYvZWTC0%2By2J1Q%2BNP3C7EwiresiU2QDzOE7g3lrMY1Fn99qkRd4TnYMT49YwrS3lT30vTJsaaHkuLdeN61iVX7yov0K9raXC3A&X-Amz-Signature=dc512c17ff24bf815450762fab59342f65370edf5cfc77c1082a70e86a7febbe&X-Amz-SignedHeaders=host&x-id=GetObject)

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
