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

| Name     | variables                                           |
| -------- | --------------------------------------------------- |
| Test     | ENV_UNIT_TESTS, PLATFORM_HOSTED, RUN_WITH_PROFILING |
| Sim      | PLATFORM_HOSTED, RUN_WITH_PROFILING                 |
| Hardware | N/A                                                 |

We in <u>Hardware</u> mode so in the `#ifdef` block line 30 will not be included when compiling 

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CPPMGKN%2F20251128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251128T012826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICOlDvDhSlccYxx2hx%2FyzSCaAvb8qb2xzcC%2FwEMU4iPqAiEAr9kKf5CmGoVY7P3JUiulexHQSvVXRoN9H1CcXFEgmDgqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLLYRfVgn8VzIMIpCSrcA2RLuVgFvDxUqJmPxLpPk9pwFClUNgSMrUhlo%2FE1K7gGDzY8GAJsL8gY9TFyVbqMRpXShBKvJ8aia9HB4OAhcl0XfMaZgRgE0z6MRdCbpbSxqqoQ4DBQIYM8rXS6e0%2BuAA%2BcBDF8fCbMBHUQ%2ByC1i8i7VjNjKDBlYtBCTmNRDmeC7fCkrd66Osy%2F4RgPW2ZUspBTzZfwL8RrKb1KXcWwYwTvSq0DJllyZJAIM%2FhsyFCaYsz%2FwGm2i2yBzOBPOXEHLDJubyNnICGqafrjgW3CYnGS7ddyZJdfyVYfyK6HaatN6y%2F6%2BO1Ove1TVW3aaiuY02%2BFVTWFHivM4rmMPrV3pY%2FzkbL9CBQHTREGa5LHIF7v3jOZVx%2FmgUzeCDAYF3yM4r26xy%2BoDPBJPep78gsAK%2Fs1UnqYCIi%2BkWQd%2BaJbhb4OL8OFC%2BkGMCAzBh6%2BSaAkQK7houm1aPOe0ZrwBcB1pnRDibznCeSHhqOPwBloXlxnVPowKr5PHGCbYvEDmplUZKrBrMsj082O5vAAjL%2FPrSYQKFufWC2WAZyFT36esw8ziVENG49TbrssJMHeGqDdChukuwRe7zublo8NMag%2B4sjh4wRq4tkRGDeDsso36nZjL3S1%2BvkNaUvDk1V7MM7Oo8kGOqUB57fwzEm5iSzDtKQX%2BNE0dCLw05CQEJ6akCBQ%2FxnPLwAyRpNhK%2Bu7bSv54RHHDUQYYFFDwgHkKLBM89TIprlDq3vPHD9PSMTyRJrCT4S%2FXGYFdjyU4RvytJkwenEIv3V0xDYUm0FR9taF6PmLPbU66XUuw7MV122AATmnDeJMwpmof5%2FDMkc%2FeT4vmeLSzNOJvPqWak00SfCTDFH1ZDF0n%2Fz9BdJf&X-Amz-Signature=9084f6c70cb0bf36e83d4faeb967d3bcab1732c532eac5eb989b90203db4f01d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CPPMGKN%2F20251128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251128T012826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICOlDvDhSlccYxx2hx%2FyzSCaAvb8qb2xzcC%2FwEMU4iPqAiEAr9kKf5CmGoVY7P3JUiulexHQSvVXRoN9H1CcXFEgmDgqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLLYRfVgn8VzIMIpCSrcA2RLuVgFvDxUqJmPxLpPk9pwFClUNgSMrUhlo%2FE1K7gGDzY8GAJsL8gY9TFyVbqMRpXShBKvJ8aia9HB4OAhcl0XfMaZgRgE0z6MRdCbpbSxqqoQ4DBQIYM8rXS6e0%2BuAA%2BcBDF8fCbMBHUQ%2ByC1i8i7VjNjKDBlYtBCTmNRDmeC7fCkrd66Osy%2F4RgPW2ZUspBTzZfwL8RrKb1KXcWwYwTvSq0DJllyZJAIM%2FhsyFCaYsz%2FwGm2i2yBzOBPOXEHLDJubyNnICGqafrjgW3CYnGS7ddyZJdfyVYfyK6HaatN6y%2F6%2BO1Ove1TVW3aaiuY02%2BFVTWFHivM4rmMPrV3pY%2FzkbL9CBQHTREGa5LHIF7v3jOZVx%2FmgUzeCDAYF3yM4r26xy%2BoDPBJPep78gsAK%2Fs1UnqYCIi%2BkWQd%2BaJbhb4OL8OFC%2BkGMCAzBh6%2BSaAkQK7houm1aPOe0ZrwBcB1pnRDibznCeSHhqOPwBloXlxnVPowKr5PHGCbYvEDmplUZKrBrMsj082O5vAAjL%2FPrSYQKFufWC2WAZyFT36esw8ziVENG49TbrssJMHeGqDdChukuwRe7zublo8NMag%2B4sjh4wRq4tkRGDeDsso36nZjL3S1%2BvkNaUvDk1V7MM7Oo8kGOqUB57fwzEm5iSzDtKQX%2BNE0dCLw05CQEJ6akCBQ%2FxnPLwAyRpNhK%2Bu7bSv54RHHDUQYYFFDwgHkKLBM89TIprlDq3vPHD9PSMTyRJrCT4S%2FXGYFdjyU4RvytJkwenEIv3V0xDYUm0FR9taF6PmLPbU66XUuw7MV122AATmnDeJMwpmof5%2FDMkc%2FeT4vmeLSzNOJvPqWak00SfCTDFH1ZDF0n%2Fz9BdJf&X-Amz-Signature=65841e7f08088b0e6f1e5ebe9237627e7707f941349eb721f2d074919bdb71da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
