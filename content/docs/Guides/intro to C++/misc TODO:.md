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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WX3YKNU%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T181157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQCohxnOQcI2pMyZXhIyVSG5CqA3Wb2NhH6YcMH3W%2BxnuQIhAOIZEmu9X8KNfRZtkY2kwW23WBmgN2PpGWJ%2BqubUUB8XKv8DCDIQABoMNjM3NDIzMTgzODA1Igz7Lw0fR0et9qXxQo8q3AOKBop98Bab2hRyNDYtQ7ggQ3clm79lKcWH9vGAr5VjLPitzJICwEUSqcjf7msj6W6KmrrZAqhZh13ry02DAIVHtissg1fXjI10k6srJF8IeXiEiyQP7M%2BGZsWNrk3yZOK79nJ%2BhRiuozg1UAOtj05mI6j3PJ1K93OBkSc89K%2B%2BbaBCdIEr7xQaVh9VCrCMzw5DyUcn3Fej5S32btHGja1EYOVpJHFakklos18L9eTcuB8Lmtd5QpWrWPKuQ2Cxkyb%2B79P4m40fXk72UgZGv5F6UCSqQ7J%2BNZOwguNUenKNde5tx8%2BDx%2Fbm9%2FRLjyhTxa9k1E0ph1Vf%2FZt2Ru%2Fro17M4xnJuLjNTg%2BXSfLeTdFdu9DJnvj4%2Fn8leFMpYLHWjMEXunM8SCzHl2B6R9tuJvDofRUoh5Ynp%2B7GQmap5LxQkTlKigWzwixsDVYFadXB3BBkObdjR5l04FOqYdaqexd0gMBYAV8oEgREAzcwkgov3gs%2FNF4cIY15WIHYBCDjDGbJtnZfpncz85dW0%2FNgujGGBTSPVx21UykPCM%2FXb%2F0tga7DPeppFiAzOLi0E9ozpZAqa7Zo6JG%2Fb50BTWvr05XUVYADjMZkp4EZHNi1YQcJbZknhGfu7Fd1zY0LBzCfxJjBBjqkAZ1DccbWP6Wgw4ljmIKrbl%2FchiuSzFfqzbkcCYSHJoh%2BHErLOtcO0U31f5Dm1Mx3bcFHETbFyxUZ6ePvYggoOBP%2Bz%2BVXOZ%2FiBQWxeAlB1tlKQSSw4FewLUPqWlQt%2B7fzKeYYK2q1t4xWeM9wmDqo2QmyO9KEHNNaz7e8BeY37EO31Db7jUpCETGA0kAomFOZnkW%2BOdJZoupCuDcvBKC4Z3Ebh6%2FM&X-Amz-Signature=e0f82276d8d8e41cc8cd60c67fdd6a59075c65ee3576ab71324a004c462c02a6&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WX3YKNU%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T181157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQCohxnOQcI2pMyZXhIyVSG5CqA3Wb2NhH6YcMH3W%2BxnuQIhAOIZEmu9X8KNfRZtkY2kwW23WBmgN2PpGWJ%2BqubUUB8XKv8DCDIQABoMNjM3NDIzMTgzODA1Igz7Lw0fR0et9qXxQo8q3AOKBop98Bab2hRyNDYtQ7ggQ3clm79lKcWH9vGAr5VjLPitzJICwEUSqcjf7msj6W6KmrrZAqhZh13ry02DAIVHtissg1fXjI10k6srJF8IeXiEiyQP7M%2BGZsWNrk3yZOK79nJ%2BhRiuozg1UAOtj05mI6j3PJ1K93OBkSc89K%2B%2BbaBCdIEr7xQaVh9VCrCMzw5DyUcn3Fej5S32btHGja1EYOVpJHFakklos18L9eTcuB8Lmtd5QpWrWPKuQ2Cxkyb%2B79P4m40fXk72UgZGv5F6UCSqQ7J%2BNZOwguNUenKNde5tx8%2BDx%2Fbm9%2FRLjyhTxa9k1E0ph1Vf%2FZt2Ru%2Fro17M4xnJuLjNTg%2BXSfLeTdFdu9DJnvj4%2Fn8leFMpYLHWjMEXunM8SCzHl2B6R9tuJvDofRUoh5Ynp%2B7GQmap5LxQkTlKigWzwixsDVYFadXB3BBkObdjR5l04FOqYdaqexd0gMBYAV8oEgREAzcwkgov3gs%2FNF4cIY15WIHYBCDjDGbJtnZfpncz85dW0%2FNgujGGBTSPVx21UykPCM%2FXb%2F0tga7DPeppFiAzOLi0E9ozpZAqa7Zo6JG%2Fb50BTWvr05XUVYADjMZkp4EZHNi1YQcJbZknhGfu7Fd1zY0LBzCfxJjBBjqkAZ1DccbWP6Wgw4ljmIKrbl%2FchiuSzFfqzbkcCYSHJoh%2BHErLOtcO0U31f5Dm1Mx3bcFHETbFyxUZ6ePvYggoOBP%2Bz%2BVXOZ%2FiBQWxeAlB1tlKQSSw4FewLUPqWlQt%2B7fzKeYYK2q1t4xWeM9wmDqo2QmyO9KEHNNaz7e8BeY37EO31Db7jUpCETGA0kAomFOZnkW%2BOdJZoupCuDcvBKC4Z3Ebh6%2FM&X-Amz-Signature=de3c634bcc384a0a6749633062dfade10c8c33ccf6b615e4b1e6d01a863f72c2&X-Amz-SignedHeaders=host&x-id=GetObject)

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
