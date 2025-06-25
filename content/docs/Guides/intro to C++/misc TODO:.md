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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOD6GPKF%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T200953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIDWcDbpQ%2FliqB3NCzn3%2FAKrLydkcnC9tPv%2FubQGqV8mXAiEArAfqAU%2Bf%2B5nGahzpswotKtG9iOowOz1zL42uh5awoe0q%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDKnS%2FjEaaMdjRz04ySrcA8R%2BRZUEvEqe8goyW5CcOdfZqg8C8ph%2Bf0GW%2F67egE1US2Gj0Vh%2Fx4BPwnkpsoDgjw1tiXOPbIKZDodajhwjqDklliAzfw%2BM4aJV11Fin%2FQ8kXqljUzxND4NfPWuCHxM6rXugxtdhF4KAb5f4MIFDvssLK%2BL4pR1QThpvMXXzXR803w4cBUwgmUorizZj8dy2VW%2FONZOn6kSqAvCp%2FyPghOCIOJ4ukrAyP4jnKzM0geKCL20TOY0LJ802VpwMUtIQyzh3UbYmz6b9UQd27wuFb4HXkntwZNWrGZJC0sHP9R0RIDSwhx0eOLugyfcZ%2BBZa6J8Jvw%2FIN7DGjRGE0kzUZTKeyWEc2SSDi3p95TgGHRu%2BpruO4Or7Eg2JptU51UqWAnmYtd4lJl31QUBVpTricKOe56dIEy7Oe6%2BTIqUSfx2FjJHuniIs0JQ4uURqhe1tnASJERPl%2B23EjOpWbg00BrwxKI90iCBWAReKFOWu14oiGuNYK%2F3NBjgN3ZUfjAFd9eoM%2BOEOTtZw%2FlOLgDnbydRAVQSqS2gIdTO2164NGJr14WtVtccyg8exvRZebIJNFvkPj4sx%2B3kLwzyNE4s6xiY0zCrAlmr3fRdVnjjPq%2F075KWpi%2FXqF3%2FcBazMMeN8cIGOqUBRgYrnGC0OtkGGjt%2BGVlJOkmiocvKCM53pITmOv0E5HouW%2F6qwlyHySiTeXaiw3lDWFY22w2eFQAinGueNL3doVt%2BcMyZYhGfoZlaqSL%2B%2Blr2mi8mAHUy7JmdcUHNQkWd2hqhUCc3Pb0mp82Ubr7dGF1FCzwRP%2B6X4bVjdVxZbJccQNxEV4raFRyH9R2rTED5Gas7K0EjaC%2FUHznCb33ex1%2FHiOK1&X-Amz-Signature=f2ceccbaff1379845043048ca0c558813ef19cd501ba70dd5a85ec3ca91c86db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOD6GPKF%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T200953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIDWcDbpQ%2FliqB3NCzn3%2FAKrLydkcnC9tPv%2FubQGqV8mXAiEArAfqAU%2Bf%2B5nGahzpswotKtG9iOowOz1zL42uh5awoe0q%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDKnS%2FjEaaMdjRz04ySrcA8R%2BRZUEvEqe8goyW5CcOdfZqg8C8ph%2Bf0GW%2F67egE1US2Gj0Vh%2Fx4BPwnkpsoDgjw1tiXOPbIKZDodajhwjqDklliAzfw%2BM4aJV11Fin%2FQ8kXqljUzxND4NfPWuCHxM6rXugxtdhF4KAb5f4MIFDvssLK%2BL4pR1QThpvMXXzXR803w4cBUwgmUorizZj8dy2VW%2FONZOn6kSqAvCp%2FyPghOCIOJ4ukrAyP4jnKzM0geKCL20TOY0LJ802VpwMUtIQyzh3UbYmz6b9UQd27wuFb4HXkntwZNWrGZJC0sHP9R0RIDSwhx0eOLugyfcZ%2BBZa6J8Jvw%2FIN7DGjRGE0kzUZTKeyWEc2SSDi3p95TgGHRu%2BpruO4Or7Eg2JptU51UqWAnmYtd4lJl31QUBVpTricKOe56dIEy7Oe6%2BTIqUSfx2FjJHuniIs0JQ4uURqhe1tnASJERPl%2B23EjOpWbg00BrwxKI90iCBWAReKFOWu14oiGuNYK%2F3NBjgN3ZUfjAFd9eoM%2BOEOTtZw%2FlOLgDnbydRAVQSqS2gIdTO2164NGJr14WtVtccyg8exvRZebIJNFvkPj4sx%2B3kLwzyNE4s6xiY0zCrAlmr3fRdVnjjPq%2F075KWpi%2FXqF3%2FcBazMMeN8cIGOqUBRgYrnGC0OtkGGjt%2BGVlJOkmiocvKCM53pITmOv0E5HouW%2F6qwlyHySiTeXaiw3lDWFY22w2eFQAinGueNL3doVt%2BcMyZYhGfoZlaqSL%2B%2Blr2mi8mAHUy7JmdcUHNQkWd2hqhUCc3Pb0mp82Ubr7dGF1FCzwRP%2B6X4bVjdVxZbJccQNxEV4raFRyH9R2rTED5Gas7K0EjaC%2FUHznCb33ex1%2FHiOK1&X-Amz-Signature=27ea290d788ef89cc6b859b889828015acf2fab433029fddc491d58183538421&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
