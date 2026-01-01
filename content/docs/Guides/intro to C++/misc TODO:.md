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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJRKICDE%2F20260101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260101T015617Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQD%2By9rRdakig3S3u7U7xgLVOPF8NFpAFDLEWnRlMHYreAIhAJlZU21ZUdVEHh6Q8foPxeVZPawFyHc8Z%2Bu4TImzBKjFKogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxWgCGVyeVQ48KNtsMq3AOXO%2B6RQwNbtPr4I7DmzqSMXefQOjnu4h4GjMonwipekUpqhlCWcppXC5f5bb%2BacXhEjnL6Oc52Cyo%2FFokHUAkyQngcCLzUcbLAT1n8uD9L4SwUfddEB4RFCJ9Kle7fEFrGzbyZdaWkNKM7pGd8AdLstJJ96bAKMeg0NIu0v8TvDhdHbFbG4ertwdz78xD91fzYRtaG5FPeC%2FB6CLeWSglrVpxEHLNdHFxHuX62K%2FiQi5Nk%2BfxUypO8wlcHVNdbkY8OE%2FLz56i2sgtnzY090xtGK15FSLqjAy1Qtlwe5FGO1jJOqIQmlryUJ8mxSJns4r0dJo3tbMDlWbPbzZkA9%2Ft43JlgNhnJcE3yQkZ5whkVqqtKJgTNDctCJt5MAa%2B%2F7AoO%2FhPavrF%2FOdfMikrpeNBoDi9sGi99dlpSv692sv8JFSqzabbnR6XUuVVNX4bVcLqVdP%2FnEjEeCyh%2BIYAdnrd866qCZ4Xn9iOo8MHoGTrYFeNPBAcsla1N1Kba%2Fj0UpkKvW9xw6ktc2FAstjmVx24XKBjJ%2B6m3zmGGcoL8NNs5FJzkkZLaUQG%2BasRBbvHWUZIpj1yiHyBmBEGT937vtDhW8QBfqsVNOXBOaePdDi%2B4A1uofsBfzYK%2BB4NO3TCdj9fKBjqkAYKj5t2zLmojn4VRf58ycua6UTYUiu1Ry8uNKBgV2x7S2CUDgydeRqto7p1ryt%2FVsZdMLshqiBrtepbYfJm43QpTAkWX9JPLhkITQDnrpN7ckW8tLsJzlRzMCvQaP%2BIqr25u9smnSX8Y2RUcUXoz2dzMj9s%2Bb8BoCq5jOHCKvSeCVbJNcCCx%2FsupplhQq5UUU6U11A77hqsdlnOiu7PKAPQyoz0x&X-Amz-Signature=f4798eb931b3cf51b02e8e3178ce720b68bb2c32e2cfcf1bf351e842cadfaf8e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJRKICDE%2F20260101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260101T015617Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQD%2By9rRdakig3S3u7U7xgLVOPF8NFpAFDLEWnRlMHYreAIhAJlZU21ZUdVEHh6Q8foPxeVZPawFyHc8Z%2Bu4TImzBKjFKogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxWgCGVyeVQ48KNtsMq3AOXO%2B6RQwNbtPr4I7DmzqSMXefQOjnu4h4GjMonwipekUpqhlCWcppXC5f5bb%2BacXhEjnL6Oc52Cyo%2FFokHUAkyQngcCLzUcbLAT1n8uD9L4SwUfddEB4RFCJ9Kle7fEFrGzbyZdaWkNKM7pGd8AdLstJJ96bAKMeg0NIu0v8TvDhdHbFbG4ertwdz78xD91fzYRtaG5FPeC%2FB6CLeWSglrVpxEHLNdHFxHuX62K%2FiQi5Nk%2BfxUypO8wlcHVNdbkY8OE%2FLz56i2sgtnzY090xtGK15FSLqjAy1Qtlwe5FGO1jJOqIQmlryUJ8mxSJns4r0dJo3tbMDlWbPbzZkA9%2Ft43JlgNhnJcE3yQkZ5whkVqqtKJgTNDctCJt5MAa%2B%2F7AoO%2FhPavrF%2FOdfMikrpeNBoDi9sGi99dlpSv692sv8JFSqzabbnR6XUuVVNX4bVcLqVdP%2FnEjEeCyh%2BIYAdnrd866qCZ4Xn9iOo8MHoGTrYFeNPBAcsla1N1Kba%2Fj0UpkKvW9xw6ktc2FAstjmVx24XKBjJ%2B6m3zmGGcoL8NNs5FJzkkZLaUQG%2BasRBbvHWUZIpj1yiHyBmBEGT937vtDhW8QBfqsVNOXBOaePdDi%2B4A1uofsBfzYK%2BB4NO3TCdj9fKBjqkAYKj5t2zLmojn4VRf58ycua6UTYUiu1Ry8uNKBgV2x7S2CUDgydeRqto7p1ryt%2FVsZdMLshqiBrtepbYfJm43QpTAkWX9JPLhkITQDnrpN7ckW8tLsJzlRzMCvQaP%2BIqr25u9smnSX8Y2RUcUXoz2dzMj9s%2Bb8BoCq5jOHCKvSeCVbJNcCCx%2FsupplhQq5UUU6U11A77hqsdlnOiu7PKAPQyoz0x&X-Amz-Signature=8a4e7b1a77bb591c7d85555ab6f1bf7b9760d7e851d90b1b4bc60cd57cb365fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
