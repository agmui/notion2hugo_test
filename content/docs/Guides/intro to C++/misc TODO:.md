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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSWN5F4D%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T150928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIFwde5AuzSzxKdgxCKf8Myqp8yrJVp6tPUCyVak15pnKAiAMp%2FJeexQ03xPUYO9V3FjIrJ%2F5Z70EpH1lFyN3Oj885yqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIaKUQstz%2Fk%2B6Ap%2FjKtwDQeqS%2FSBu1YxVrgUnEfQkGngjGi7Ec4fRtH2TddLzf3hLcWu6EjVLx4VqRT4SAUDlA5FVMK%2FCgdbygzwQwtrtGkWPZwgFn%2FsrNawjAYojmZZXxnmjwJMc4Gf%2BHrc5QI03DO%2Fi1v2DEw7h0okxRTlY4KYnGCTIDBjUIWHZ6P5flevQqrsjNPMfyKe4ZDMq2IZ5cT44LCrvH4SeLjEIxIYv4ZPudeE3bkB5GF9AVug8oBRTKEHzD%2FfrKMJvH%2FZZ5JRE7MFSNHtaMJTZT6bwG2Dav6u0VOtw%2FMlPA5DSw8EkoJi%2F%2FoNgp4%2FcVvPK0YvF8DilPeJieWZxioyGPhnrune4GFc%2BcpuODH5WQwxQYzjgjdR%2FTD%2FkWGLzrZb2S9mivXsgg7psw%2Fcs3ap1YkFhnSSher37VjyCrsqfYj8y97RBvyOklppNTQNNtVlVqBkDlh%2BT1IWH0IyWdiiBVRcN0W13Co1TyeACiB9rTeHDYQ410Ha2eeKeCcDYfvqz7kFyjAJ67JYOHRGcOWqWpVyIrrThPEWaAemdKSMjkBC1t5OqWzoLeIhpZfOz%2FMSa%2BR8F0E%2BDO00TcPizMoyc9Bp9NZXlgXow4SMzyCAxugS9x6zDjoHnm8c0WhJZVxXcTaEwqoSIwQY6pgEIZOCk6GWymygY18yEZh08n8SeaydpLfvspNVckDnwKtoVYs7Nn7nzPYiHM%2BYl5auehfEv7mIexWKcfTyuH0gLxfFWDEdGGEXkptopGnDnbdBSZSRBmxTIX4FrTU3AshF0XtpQU5CehyTqAmSrPKhndRvOU%2B2y4yRTdRDoFbEniQW0TgGN6ME8aQufiFGnqIl6mfcUSNJvkYX%2BvVIKNhbGQWmIAiIU&X-Amz-Signature=3785d993c5f28638d314711e2d6274fbf17b55091e16d983ad05770d580c5cb5&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSWN5F4D%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T150928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIFwde5AuzSzxKdgxCKf8Myqp8yrJVp6tPUCyVak15pnKAiAMp%2FJeexQ03xPUYO9V3FjIrJ%2F5Z70EpH1lFyN3Oj885yqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIaKUQstz%2Fk%2B6Ap%2FjKtwDQeqS%2FSBu1YxVrgUnEfQkGngjGi7Ec4fRtH2TddLzf3hLcWu6EjVLx4VqRT4SAUDlA5FVMK%2FCgdbygzwQwtrtGkWPZwgFn%2FsrNawjAYojmZZXxnmjwJMc4Gf%2BHrc5QI03DO%2Fi1v2DEw7h0okxRTlY4KYnGCTIDBjUIWHZ6P5flevQqrsjNPMfyKe4ZDMq2IZ5cT44LCrvH4SeLjEIxIYv4ZPudeE3bkB5GF9AVug8oBRTKEHzD%2FfrKMJvH%2FZZ5JRE7MFSNHtaMJTZT6bwG2Dav6u0VOtw%2FMlPA5DSw8EkoJi%2F%2FoNgp4%2FcVvPK0YvF8DilPeJieWZxioyGPhnrune4GFc%2BcpuODH5WQwxQYzjgjdR%2FTD%2FkWGLzrZb2S9mivXsgg7psw%2Fcs3ap1YkFhnSSher37VjyCrsqfYj8y97RBvyOklppNTQNNtVlVqBkDlh%2BT1IWH0IyWdiiBVRcN0W13Co1TyeACiB9rTeHDYQ410Ha2eeKeCcDYfvqz7kFyjAJ67JYOHRGcOWqWpVyIrrThPEWaAemdKSMjkBC1t5OqWzoLeIhpZfOz%2FMSa%2BR8F0E%2BDO00TcPizMoyc9Bp9NZXlgXow4SMzyCAxugS9x6zDjoHnm8c0WhJZVxXcTaEwqoSIwQY6pgEIZOCk6GWymygY18yEZh08n8SeaydpLfvspNVckDnwKtoVYs7Nn7nzPYiHM%2BYl5auehfEv7mIexWKcfTyuH0gLxfFWDEdGGEXkptopGnDnbdBSZSRBmxTIX4FrTU3AshF0XtpQU5CehyTqAmSrPKhndRvOU%2B2y4yRTdRDoFbEniQW0TgGN6ME8aQufiFGnqIl6mfcUSNJvkYX%2BvVIKNhbGQWmIAiIU&X-Amz-Signature=910889771c12937136cd80389cbbd05d8792b6d7c69ae4e092262e849502009c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
