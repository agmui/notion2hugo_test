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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQYN47X4%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T132535Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID%2B0bLrqvx%2F4bBZH6nBTQxErk%2Fu0EAyx4C8l6r2NVsYLAiAJZZ7phOOfxvyLM9VboMzYVDRVAu3UAodMevJzwnfT0yqIBAjW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvvdQNkMpRHXJehQpKtwDoWlCIQWONZq8HjGSVC7GO%2BL43tPk2OmB7wGiGQJw%2Fd6p47V7QXmrxtJg5Fn%2B59GjfV97ySS0%2FtHG%2FNzLvfk0KwY4fCixuUBTfTYPUh6XQzAk7M8VtNGWVrEAOf5OjQCyjv2iRuYJihp%2FkwYZ6zk2ihxgETGu9mB7m27wo7qi8pZ4FbxqnQ1BE2YTg%2FwhRGI7BDOulQQ%2FtkXl7O0ces8Ljcrk5EN2DRVvxEb2qpHolr8pMEsT%2FEN9DPRa2oN3oVghJiteU0VibImhV8dXCyAfn9ZLkd6Ka4KsIE1Dc0JHcFC0iNOkYJKW5qQ%2B%2BZDFTfoSB%2FYvDXW752qr8ErJ15TyWVvGuNIQys9qseL2ayx9LakMn3PSLJkKwfQvMcjqlSzk2DcxBOjfe4Pdf466NMmPEb2%2BtaQWl9tnA%2BFoKyoVGPeagxpBO8OGg7bpa1%2FMdEQEjaiNQbpn2CvHOd4HRpVhEafRQ%2Fdb8DZgQjy%2BeOldoPa8AhUGAh8Hg7l%2FAc53c98VralkOSUQFYGLeAwdj5EuMvKyZekvl8Lpjms%2BYP6sBK%2BPAryo7ffguOIz6NguTgPcI0Yni4HKWMLPBGpoV%2BxvN8RG8NhL2FSFYH2pHf39Tzg9jXYj7GtdmcVcE%2FQwgu%2BlwgY6pgHg6NXaJ17XnjH6YHlwYKVSUP0mBt9Z0d7OZZsp0LQNGunI8TWj%2FXMlBhSsyT677ARqqp%2Fz0syE07Jji5mdKw0EzU9xo1gOTxD3U%2B%2FST9wmamE7%2F1g8v%2BzSOoVnziunfseHgDISQxZa%2BPW2Fhpy9lAZlLzUKh1bkY%2BCRY9RJSu6SSrOctUKWNaUAFNJsOZZjQei8KjVIrBsFROLlu1WBpklzf3ILvAL&X-Amz-Signature=bfabfc32aa04fdca62275dc681b04dcde772542251a7b862cd9960f34e672e8e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQYN47X4%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T132535Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID%2B0bLrqvx%2F4bBZH6nBTQxErk%2Fu0EAyx4C8l6r2NVsYLAiAJZZ7phOOfxvyLM9VboMzYVDRVAu3UAodMevJzwnfT0yqIBAjW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvvdQNkMpRHXJehQpKtwDoWlCIQWONZq8HjGSVC7GO%2BL43tPk2OmB7wGiGQJw%2Fd6p47V7QXmrxtJg5Fn%2B59GjfV97ySS0%2FtHG%2FNzLvfk0KwY4fCixuUBTfTYPUh6XQzAk7M8VtNGWVrEAOf5OjQCyjv2iRuYJihp%2FkwYZ6zk2ihxgETGu9mB7m27wo7qi8pZ4FbxqnQ1BE2YTg%2FwhRGI7BDOulQQ%2FtkXl7O0ces8Ljcrk5EN2DRVvxEb2qpHolr8pMEsT%2FEN9DPRa2oN3oVghJiteU0VibImhV8dXCyAfn9ZLkd6Ka4KsIE1Dc0JHcFC0iNOkYJKW5qQ%2B%2BZDFTfoSB%2FYvDXW752qr8ErJ15TyWVvGuNIQys9qseL2ayx9LakMn3PSLJkKwfQvMcjqlSzk2DcxBOjfe4Pdf466NMmPEb2%2BtaQWl9tnA%2BFoKyoVGPeagxpBO8OGg7bpa1%2FMdEQEjaiNQbpn2CvHOd4HRpVhEafRQ%2Fdb8DZgQjy%2BeOldoPa8AhUGAh8Hg7l%2FAc53c98VralkOSUQFYGLeAwdj5EuMvKyZekvl8Lpjms%2BYP6sBK%2BPAryo7ffguOIz6NguTgPcI0Yni4HKWMLPBGpoV%2BxvN8RG8NhL2FSFYH2pHf39Tzg9jXYj7GtdmcVcE%2FQwgu%2BlwgY6pgHg6NXaJ17XnjH6YHlwYKVSUP0mBt9Z0d7OZZsp0LQNGunI8TWj%2FXMlBhSsyT677ARqqp%2Fz0syE07Jji5mdKw0EzU9xo1gOTxD3U%2B%2FST9wmamE7%2F1g8v%2BzSOoVnziunfseHgDISQxZa%2BPW2Fhpy9lAZlLzUKh1bkY%2BCRY9RJSu6SSrOctUKWNaUAFNJsOZZjQei8KjVIrBsFROLlu1WBpklzf3ILvAL&X-Amz-Signature=ed0029cd09bf506402ae9928ba49685e339113c50818191a174471a9697bad36&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
