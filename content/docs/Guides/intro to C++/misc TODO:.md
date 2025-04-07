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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBABA6HB%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T100954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICLco%2ByHnmRV45pdozL9qXJOYrcSQHr%2Fz0jsiGYomErtAiEA1EXtgQU8ag%2BS8E0%2Bw8XI3xHi1GAqMpEbZDQHNamf5QMq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDIae66eEcVy%2FmtFMJCrcAwqmTiVHC51JxVElOMdK2vck%2BVAZ7wrm8Mc2riN6MB%2BjoX76fDpY1v8NtGA%2FMce%2B2wKXf%2BiA2AqlzKjI7bLLjpQXrPcvSmNZl62mK7WLazHoiGneNFwglqpJr%2BJKwUnyZpwz%2FlBk%2FPT5mAL5PJOfZuOSErhqwLtYc87FYtcGCdykCZ2n90F3vkNCqtQsIpvV7Sj%2FtNDZT2Vp5euCzdLQz8jGmuu4lIyoBoK4n758hrDQnP32vyIr%2FBtfF1FfZwpYV0yftHvgeMKj1uRTLCK1T8NTXlAAZSOZBr4WdfIL1ktScXFPEh5m4A9xeNQ0%2ByttiI5yzMOOUYW3Y470Ux8Ot34NKhWdvZZPRQH18nCWuxxZc7GtwBBkEX5JVJdo2IbRDu6dE4tcQq6hGswWrrgP8T5dv0vp%2B%2FUBsAo%2BvIkH7UR5WmGdcUMmRNuxzydmYWwc1bkzYiUbX5ATD45BXHLnVxXt2mfPV6jwP3UaWr0WvgCsmtufv91nLyaxszqmjXWOm%2FMIQpXtrMBljcZrcolOo3S4yZY9YI0u6w3MXwoZFPN5WqA%2FMmryC2L0TuaMI2W2woOaB7zJIULew9bAs2wOI4XuLNloqhlJlE1KsYJwHdhBogk9Rvj0hkSkUMPoMKy6zr8GOqUBJ2exLdNxFQFjV%2F1%2BarZ%2BP6uBwkwlsrXIYPRe3TLfj7r56eppz2n3CGre2X58lZVe6cgB%2B%2Bx6WSGXVr8vkCgePun4WCi7JaJ9IE%2BOD1dVHkCxThrFVmM7k3WulTbpExtvPLr06v7R4SPw%2FImfL7zk%2BvGA3H84kItvY8%2FRSLe3JYH1rxOzGV%2Fk%2FB1QzU4bj5zFKB5vOcC948YC52NoHjEwps9BZTXY&X-Amz-Signature=2c509dd467899291bb16b7e5f685a729a0b3334a8a3b196904ea562af1a0e7ad&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBABA6HB%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T100954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICLco%2ByHnmRV45pdozL9qXJOYrcSQHr%2Fz0jsiGYomErtAiEA1EXtgQU8ag%2BS8E0%2Bw8XI3xHi1GAqMpEbZDQHNamf5QMq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDIae66eEcVy%2FmtFMJCrcAwqmTiVHC51JxVElOMdK2vck%2BVAZ7wrm8Mc2riN6MB%2BjoX76fDpY1v8NtGA%2FMce%2B2wKXf%2BiA2AqlzKjI7bLLjpQXrPcvSmNZl62mK7WLazHoiGneNFwglqpJr%2BJKwUnyZpwz%2FlBk%2FPT5mAL5PJOfZuOSErhqwLtYc87FYtcGCdykCZ2n90F3vkNCqtQsIpvV7Sj%2FtNDZT2Vp5euCzdLQz8jGmuu4lIyoBoK4n758hrDQnP32vyIr%2FBtfF1FfZwpYV0yftHvgeMKj1uRTLCK1T8NTXlAAZSOZBr4WdfIL1ktScXFPEh5m4A9xeNQ0%2ByttiI5yzMOOUYW3Y470Ux8Ot34NKhWdvZZPRQH18nCWuxxZc7GtwBBkEX5JVJdo2IbRDu6dE4tcQq6hGswWrrgP8T5dv0vp%2B%2FUBsAo%2BvIkH7UR5WmGdcUMmRNuxzydmYWwc1bkzYiUbX5ATD45BXHLnVxXt2mfPV6jwP3UaWr0WvgCsmtufv91nLyaxszqmjXWOm%2FMIQpXtrMBljcZrcolOo3S4yZY9YI0u6w3MXwoZFPN5WqA%2FMmryC2L0TuaMI2W2woOaB7zJIULew9bAs2wOI4XuLNloqhlJlE1KsYJwHdhBogk9Rvj0hkSkUMPoMKy6zr8GOqUBJ2exLdNxFQFjV%2F1%2BarZ%2BP6uBwkwlsrXIYPRe3TLfj7r56eppz2n3CGre2X58lZVe6cgB%2B%2Bx6WSGXVr8vkCgePun4WCi7JaJ9IE%2BOD1dVHkCxThrFVmM7k3WulTbpExtvPLr06v7R4SPw%2FImfL7zk%2BvGA3H84kItvY8%2FRSLe3JYH1rxOzGV%2Fk%2FB1QzU4bj5zFKB5vOcC948YC52NoHjEwps9BZTXY&X-Amz-Signature=e0f6d9b94c44a3f44d7f86b9325adf025e103e07e7beeedae0882590a54628f0&X-Amz-SignedHeaders=host&x-id=GetObject)

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
