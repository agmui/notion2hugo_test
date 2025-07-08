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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TV7TI2SH%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T150912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDLzyYFXTlRRMca%2FyOQBNNp1crG0o1X3te8VFPK30Df0wIgEW0%2FFxieN4ZG8B%2BatByHfrMAnmj%2F7Pp8eFumMA9X6VcqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOSe%2F7qQXjcXXeA4ICrcA1aS%2FafKxpCbdLgkTRm23Hxdu9ZeESYbMwS46uB87QQJPUfjgOKHtfyoK9moHIPSJdRg%2B0yLroleHc7nUvc52izDOK81RbBSorNeauF7IczSuLJOuamFC1Oft0JOgW%2BV%2B8nVtCQ09chACRNd82PWCg9WfleiQkc3h8gLMQCKMt1fd86F7Ci5vmbag7xDlNZsm3Nd4NKjjoXm1o81x5R2zDzXCifeEoeFrlFyyCpigelaZQMRWSB%2FF%2BdhbwJ9Ue9eZoG%2FIwdCQMxWb0XPJsQRBUO6w1FAd0Ka%2BzyB103309JFcHU2Fsh%2FvpGC8a9N5034%2BKLP384YqODEj7rw8joRBuGeSk4DxUS0cdwW8nwnqmvMhJXnFBKWSCT3Cgn7NcIMhVFFYxU3EwDs5tHZ8zd6FcKoUghJyAyWH%2Ffi2LzVeTInej9tkn9a%2BDgGXSPZyNomAZX6rEd2WfIOopw27Mcp2ld9FWNIbAzn%2B%2BhkUoWpoeIXvKVTLih%2BWQx%2BiwH9Or491p7GRmylvcJGJYvtlu%2FUHAHUSwPUa0M6UgCajSqsguYwVuYt55BLwpQZmbiSWGbe4t5utW%2FVJwVs7Rh60O02NVJNCVi4rNEYES75tYL31qGW2TEC4jyRagTTj5f8MITUtMMGOqUBIgamrkUAhOC28wGHHUZHI%2F0embIfHq4qQdp2MENtF9TTegMPS53MZR4FiEVlB2HxhCkrdlGt%2FZJrEyQAlEH0hCNXLuHBk51j%2BfKCej9ZQF34VldNHrgh%2BrQlwrar1zf%2FSAHqfFfVBStShgV8jXAwMvAGzeCEzLUEFKKUxpriV40VBeCVvWuadtU1ZisHWjljhhuP7p0Ll88gQMPNeMF8Zt%2FhCmSW&X-Amz-Signature=4c5d2bd36b201b3d234637fdf723330b693f5706d974292ed6aae53249aded82&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TV7TI2SH%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T150912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDLzyYFXTlRRMca%2FyOQBNNp1crG0o1X3te8VFPK30Df0wIgEW0%2FFxieN4ZG8B%2BatByHfrMAnmj%2F7Pp8eFumMA9X6VcqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOSe%2F7qQXjcXXeA4ICrcA1aS%2FafKxpCbdLgkTRm23Hxdu9ZeESYbMwS46uB87QQJPUfjgOKHtfyoK9moHIPSJdRg%2B0yLroleHc7nUvc52izDOK81RbBSorNeauF7IczSuLJOuamFC1Oft0JOgW%2BV%2B8nVtCQ09chACRNd82PWCg9WfleiQkc3h8gLMQCKMt1fd86F7Ci5vmbag7xDlNZsm3Nd4NKjjoXm1o81x5R2zDzXCifeEoeFrlFyyCpigelaZQMRWSB%2FF%2BdhbwJ9Ue9eZoG%2FIwdCQMxWb0XPJsQRBUO6w1FAd0Ka%2BzyB103309JFcHU2Fsh%2FvpGC8a9N5034%2BKLP384YqODEj7rw8joRBuGeSk4DxUS0cdwW8nwnqmvMhJXnFBKWSCT3Cgn7NcIMhVFFYxU3EwDs5tHZ8zd6FcKoUghJyAyWH%2Ffi2LzVeTInej9tkn9a%2BDgGXSPZyNomAZX6rEd2WfIOopw27Mcp2ld9FWNIbAzn%2B%2BhkUoWpoeIXvKVTLih%2BWQx%2BiwH9Or491p7GRmylvcJGJYvtlu%2FUHAHUSwPUa0M6UgCajSqsguYwVuYt55BLwpQZmbiSWGbe4t5utW%2FVJwVs7Rh60O02NVJNCVi4rNEYES75tYL31qGW2TEC4jyRagTTj5f8MITUtMMGOqUBIgamrkUAhOC28wGHHUZHI%2F0embIfHq4qQdp2MENtF9TTegMPS53MZR4FiEVlB2HxhCkrdlGt%2FZJrEyQAlEH0hCNXLuHBk51j%2BfKCej9ZQF34VldNHrgh%2BrQlwrar1zf%2FSAHqfFfVBStShgV8jXAwMvAGzeCEzLUEFKKUxpriV40VBeCVvWuadtU1ZisHWjljhhuP7p0Ll88gQMPNeMF8Zt%2FhCmSW&X-Amz-Signature=1589ebe8cb8b1cb4bc24d64cc921766a77ca6c23fd36c2def18dd7d8b219af15&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
