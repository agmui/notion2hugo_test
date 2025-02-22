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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TT6I5XVM%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T131054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDvfEQxa2K9SRVCF20ZBS2anGb5OSJduKH78NkWX%2BkFdgIhALNj%2Feh69WNzTm1dNpk7ygd3pIQWKk6TFb%2B9CeGRl%2BOcKogECOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwPkDKZhPCLjhCO3ugq3AMHnzrEEDoOCEOtGpLlBvJgnBVpbRttwug75Tz31UVkSsmBJZGaOeIbH7pru56OV2XsBLdWtgr2wRSBkBiZF6Dcb1ezCma9lrADidRKXZo5C%2BtsibMU6E39hhecAlt0saKw7cG6cnOV4kHVdR5Vx1wczWGvrDVf5IE2bc2ka8OWKHiPpJHNG2qaHrjoVstgi8Cq2QFkot5%2FRL2cGGuw%2BGHKcI81Moly%2FOUYsq2DQMcZS3e56jFXhKKGDPW%2F51a3YkQcEiUEXt0t9Otg26mlK7%2BSN%2BaMCCNKqq6TtcdKuGA35mQQqKVNGViTzN%2BKjeb0XMI9ieSRgmUJNMYZaLf0PFJPB2iae8R7xXooChNKsmj4xB2voDWr0Wme%2F9a5dChlaYrO8xZCKpWXDkpGNA1PD2kpe%2BwdveH3cjGCcqIUcHJPiO6PQTsJ%2B2d2t9Ow%2B6qW2Wt2CIjV90%2BiMRkJZO0rSm9559aoh5sMT9dJQ7TwvhmHtjOBsPEKY0A22Z%2Fz66hjKEOqq6Kr30L%2FxIsOVopBVznJpWINfSVBWz0gyN62zCZmCeCUHZzgkHJUhzFRrBBLRiS7RFMArZzVmqjVz9V%2BIM1qLVOPH5HmZv5UGSebEOca%2FwKTLah25%2FO4dJiTBjDErea9BjqkARlyVJ6%2BDxW2%2FUYfWPqnU2W86L928fv3026TpRHra29LfGEXMLEJvZ77KF9hd3lXgDip4NwmN5fmde2bmN1AI4qqsNFnwNvjpGO3yNEIad7xoK%2BXPokkwJ5vBN4bbEEshUEkGB7NG0WTlXoDH7OdJWCXUJE%2BG3tUqgVAhS%2FWGl%2BQX3YlklyxlERc5hu3Eo%2FsNQh4ScmjmMgMzryolGZywAknwTKw&X-Amz-Signature=39ccc24052288ea0050826d93185192acacdd2e07859f456188e1b2f576db477&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TT6I5XVM%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T131054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDvfEQxa2K9SRVCF20ZBS2anGb5OSJduKH78NkWX%2BkFdgIhALNj%2Feh69WNzTm1dNpk7ygd3pIQWKk6TFb%2B9CeGRl%2BOcKogECOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwPkDKZhPCLjhCO3ugq3AMHnzrEEDoOCEOtGpLlBvJgnBVpbRttwug75Tz31UVkSsmBJZGaOeIbH7pru56OV2XsBLdWtgr2wRSBkBiZF6Dcb1ezCma9lrADidRKXZo5C%2BtsibMU6E39hhecAlt0saKw7cG6cnOV4kHVdR5Vx1wczWGvrDVf5IE2bc2ka8OWKHiPpJHNG2qaHrjoVstgi8Cq2QFkot5%2FRL2cGGuw%2BGHKcI81Moly%2FOUYsq2DQMcZS3e56jFXhKKGDPW%2F51a3YkQcEiUEXt0t9Otg26mlK7%2BSN%2BaMCCNKqq6TtcdKuGA35mQQqKVNGViTzN%2BKjeb0XMI9ieSRgmUJNMYZaLf0PFJPB2iae8R7xXooChNKsmj4xB2voDWr0Wme%2F9a5dChlaYrO8xZCKpWXDkpGNA1PD2kpe%2BwdveH3cjGCcqIUcHJPiO6PQTsJ%2B2d2t9Ow%2B6qW2Wt2CIjV90%2BiMRkJZO0rSm9559aoh5sMT9dJQ7TwvhmHtjOBsPEKY0A22Z%2Fz66hjKEOqq6Kr30L%2FxIsOVopBVznJpWINfSVBWz0gyN62zCZmCeCUHZzgkHJUhzFRrBBLRiS7RFMArZzVmqjVz9V%2BIM1qLVOPH5HmZv5UGSebEOca%2FwKTLah25%2FO4dJiTBjDErea9BjqkARlyVJ6%2BDxW2%2FUYfWPqnU2W86L928fv3026TpRHra29LfGEXMLEJvZ77KF9hd3lXgDip4NwmN5fmde2bmN1AI4qqsNFnwNvjpGO3yNEIad7xoK%2BXPokkwJ5vBN4bbEEshUEkGB7NG0WTlXoDH7OdJWCXUJE%2BG3tUqgVAhS%2FWGl%2BQX3YlklyxlERc5hu3Eo%2FsNQh4ScmjmMgMzryolGZywAknwTKw&X-Amz-Signature=212af6e6934d69c8c36f2e77d1dcd3c11bf30f891ef1e0fb430665692b01b8fd&X-Amz-SignedHeaders=host&x-id=GetObject)

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
