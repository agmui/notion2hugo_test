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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y66TCAKP%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T051458Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD709p3Bq16Jbql7LVDM0zW5S9PFoEPraZjlR9L48xwxwIhAJgG%2BcBTpenl09Y6J2s0PNzpbiBWfk4uAAriwRtWuUnXKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwHReN%2FN%2FbWHxqN6Qoq3ANv4me%2BgH4yZk%2FZt5LwQ0lwkA8CRhVx47PgUwDOXvvzaeiLyQJoc6a%2BcaAnGvZxg%2BVISsiPvaSDUrcorH8T0g2TVjR3hl%2BvjqXE57CBzptG5OqlYMsbP9FSO2Qk7j%2BcTPPFBkM48NP38fxLa%2F1h0ViKzXCVhTsLmEw9O4M3dWWmzmxBmZ4nrKmzz42zzV1HxPMDydZt0GgIC4Gsehr4K02ha9z1cicbmnTYtRi3FRITPEo6Euu1nTHUgx3agkhOytzaJ8kAlt68S654CieWpxZDA%2FLejtrdBdQS7zZWcFkFu9r0uUJLZx0K9%2BkiwCJ3shM8SOS6x%2FV5RG3lQldVjWwbqlzMbIbKPt8egAnkxv4ZV1NeSMaiywnDXFzfKhZBhgxZDnQOo1Lxa9nZNcn9Vjv6f2anDf92Nkxw19g8AWNh8pizAuJYZ5de%2BiFMlq1t7EC016Z2jFmKNv7XWiRHrP1%2BPnyUPLi2y9r1wEShJsoN%2FX9kWlU4q%2FqANtQ77zRTaoluqpfnD3OmB%2BAd2HjkDxYhmVNOoL8g5GUG6uFBVWHQp1bfbuIxRZ0mr%2F42%2FsqoMVMfhxAV7NQAZrz209uIxZjUznXVsHtjc8f3DuMJKUpuXUfSYddISGlfnMXfGzC00eDEBjqkARYNp0LcxvLSQb%2FXAYxUZzmT%2F7y%2FWKJh0bV8CaYYkORorJNJ2pAHVJFCma7D6Y4oHivkNPdJcJ%2BJjtmWSRzYCh0TPpEE7wI9gnEyAfSpxYVWkUbud5uvR%2BHx4kyhEnU7cCT0ZPf%2F6P0O3EQ3CmXAysI%2FpPuesBIeTdNgPqGRwG%2Ff37967iLK%2F8VfvSd2kPHweVLJd4FAtB82AXmJVUSN%2BkPJWxdL&X-Amz-Signature=8ca748cbac297fcae87fba5c0264dc327efe371454f1b1743ed4780374887d61&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y66TCAKP%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T051458Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD709p3Bq16Jbql7LVDM0zW5S9PFoEPraZjlR9L48xwxwIhAJgG%2BcBTpenl09Y6J2s0PNzpbiBWfk4uAAriwRtWuUnXKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwHReN%2FN%2FbWHxqN6Qoq3ANv4me%2BgH4yZk%2FZt5LwQ0lwkA8CRhVx47PgUwDOXvvzaeiLyQJoc6a%2BcaAnGvZxg%2BVISsiPvaSDUrcorH8T0g2TVjR3hl%2BvjqXE57CBzptG5OqlYMsbP9FSO2Qk7j%2BcTPPFBkM48NP38fxLa%2F1h0ViKzXCVhTsLmEw9O4M3dWWmzmxBmZ4nrKmzz42zzV1HxPMDydZt0GgIC4Gsehr4K02ha9z1cicbmnTYtRi3FRITPEo6Euu1nTHUgx3agkhOytzaJ8kAlt68S654CieWpxZDA%2FLejtrdBdQS7zZWcFkFu9r0uUJLZx0K9%2BkiwCJ3shM8SOS6x%2FV5RG3lQldVjWwbqlzMbIbKPt8egAnkxv4ZV1NeSMaiywnDXFzfKhZBhgxZDnQOo1Lxa9nZNcn9Vjv6f2anDf92Nkxw19g8AWNh8pizAuJYZ5de%2BiFMlq1t7EC016Z2jFmKNv7XWiRHrP1%2BPnyUPLi2y9r1wEShJsoN%2FX9kWlU4q%2FqANtQ77zRTaoluqpfnD3OmB%2BAd2HjkDxYhmVNOoL8g5GUG6uFBVWHQp1bfbuIxRZ0mr%2F42%2FsqoMVMfhxAV7NQAZrz209uIxZjUznXVsHtjc8f3DuMJKUpuXUfSYddISGlfnMXfGzC00eDEBjqkARYNp0LcxvLSQb%2FXAYxUZzmT%2F7y%2FWKJh0bV8CaYYkORorJNJ2pAHVJFCma7D6Y4oHivkNPdJcJ%2BJjtmWSRzYCh0TPpEE7wI9gnEyAfSpxYVWkUbud5uvR%2BHx4kyhEnU7cCT0ZPf%2F6P0O3EQ3CmXAysI%2FpPuesBIeTdNgPqGRwG%2Ff37967iLK%2F8VfvSd2kPHweVLJd4FAtB82AXmJVUSN%2BkPJWxdL&X-Amz-Signature=f6714fbca4eaa6b227e011d1d2bb7f5d58b40b7567ec2b40964c340556ce60a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
