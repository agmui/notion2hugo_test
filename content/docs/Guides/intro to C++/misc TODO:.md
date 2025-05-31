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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QM2UUAXZ%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T150720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDC43g6zyvPdm5DRBi2WG9DmKvcT9ficLT8%2BWPXvX3cCAIgUpK1UrGLxe23TNJkWMX%2BwANjN5dm67QZgBJpC2HDWb4qiAQIu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEQ5%2B5Pdkj4vBW%2FGqyrcA0%2BbWf7QRL%2FZZNUj1Rs6ygnt9CHb4AsSdkkGxoQ93obu8de9UR7FAxkBFd0uRCVpUll2k%2BIFSLq%2BSWVFLY05KnmAGppSZ3fAEysocD91o5YzrhMBaDfWelMLMToZ%2BAPoE9WdlrtaLJWXubwtVqsF0LqBEbj6yc40%2BzRGVhsrZ7UK9tctVlmy9Y94u1s%2FjLUF0rVrgkYlJD7KYJZSWDlLsmtzcbXVQrKWxdHjlOfpHjkpUImXyALCov5%2FYGlpdpnEWOQ50t5qB%2FErJ7rsezEhuS40F1fXVdhbt7hbp38iFdU2HR5pQEZv2wYiJO8MM6t2bOfE7WasIEL%2Fk14IpS1gWgWFv2d5ZNV1SLB803AUm3MpQjrhRjcaLYlwc%2BJrK%2BbpwKK9u8U%2FY14lvWgHZ6CgEIVwq%2FJf9XDRfTa71zGbmhXvRG8crK5R8UZeZ%2BU64Um5u8uxwEMwByaES8tzuwbEasVhsKS4TEvZ18iG7rrNSCgmt8RyJw%2FKemzGb%2BJ5OPvmpijR9OZi8kx85bbBgUz7ldCTpRQ8YqGWi1ejvhqjE064tZ8ycCzVwMa5gfeViWFs%2BiPo4zaDtgEX5RtOrNjyesagqkKTc7%2B949kCtFzD255qZ1XHylvfutpwQV1OMOCr68EGOqUB4HPEcpak5MJIhM%2BDsMcze2z%2F8zlJlxTcigD5IdTquGcNYby%2FvUULdUR%2B0l0OJs4iIu087g6ezPmUods5y1aQZmKuGu1jqtmt%2Fvt08OWSGtSD1d0Gf7uh%2B8raEsx3a%2FxvpOFGqjsTv7jG%2FZoJnn1MEWF9TzUtbzoAzJ4ma61H6kL9PjpPP%2Fg%2BTPp%2B6CGrmpcf%2Fqr2%2Fcsq5MgXBnZ%2F30RTMiCNGJ5r&X-Amz-Signature=b4feac3b83542636f919a0b7f8c22af96880543ced94ed7234d190530844b7e5&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QM2UUAXZ%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T150720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDC43g6zyvPdm5DRBi2WG9DmKvcT9ficLT8%2BWPXvX3cCAIgUpK1UrGLxe23TNJkWMX%2BwANjN5dm67QZgBJpC2HDWb4qiAQIu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEQ5%2B5Pdkj4vBW%2FGqyrcA0%2BbWf7QRL%2FZZNUj1Rs6ygnt9CHb4AsSdkkGxoQ93obu8de9UR7FAxkBFd0uRCVpUll2k%2BIFSLq%2BSWVFLY05KnmAGppSZ3fAEysocD91o5YzrhMBaDfWelMLMToZ%2BAPoE9WdlrtaLJWXubwtVqsF0LqBEbj6yc40%2BzRGVhsrZ7UK9tctVlmy9Y94u1s%2FjLUF0rVrgkYlJD7KYJZSWDlLsmtzcbXVQrKWxdHjlOfpHjkpUImXyALCov5%2FYGlpdpnEWOQ50t5qB%2FErJ7rsezEhuS40F1fXVdhbt7hbp38iFdU2HR5pQEZv2wYiJO8MM6t2bOfE7WasIEL%2Fk14IpS1gWgWFv2d5ZNV1SLB803AUm3MpQjrhRjcaLYlwc%2BJrK%2BbpwKK9u8U%2FY14lvWgHZ6CgEIVwq%2FJf9XDRfTa71zGbmhXvRG8crK5R8UZeZ%2BU64Um5u8uxwEMwByaES8tzuwbEasVhsKS4TEvZ18iG7rrNSCgmt8RyJw%2FKemzGb%2BJ5OPvmpijR9OZi8kx85bbBgUz7ldCTpRQ8YqGWi1ejvhqjE064tZ8ycCzVwMa5gfeViWFs%2BiPo4zaDtgEX5RtOrNjyesagqkKTc7%2B949kCtFzD255qZ1XHylvfutpwQV1OMOCr68EGOqUB4HPEcpak5MJIhM%2BDsMcze2z%2F8zlJlxTcigD5IdTquGcNYby%2FvUULdUR%2B0l0OJs4iIu087g6ezPmUods5y1aQZmKuGu1jqtmt%2Fvt08OWSGtSD1d0Gf7uh%2B8raEsx3a%2FxvpOFGqjsTv7jG%2FZoJnn1MEWF9TzUtbzoAzJ4ma61H6kL9PjpPP%2Fg%2BTPp%2B6CGrmpcf%2Fqr2%2Fcsq5MgXBnZ%2F30RTMiCNGJ5r&X-Amz-Signature=3173eada9c985fb5a634c349116cd2783057455f46f96d64c6fb76e455ce0ced&X-Amz-SignedHeaders=host&x-id=GetObject)

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
