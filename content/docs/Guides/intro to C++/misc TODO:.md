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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DGAAYL6%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T181104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQDiAB8HXFaH9mgKxxNJOBQNvo8UwEIwriJFhM7VqVDdFgIgYBHwwnc2GFpq3eHZMKYqziyZVcO47flzvW5WG2%2B7p0cqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMChX13HbaqPA9I0SyrcAwotI3iucmLS4Flgv%2FVwohOLBQAqxnMevdY%2FlcOx5d%2F8mDQrspOdwVb77yRpP1vz6d53MTkhBSegBrC6mTThSTLTJfBi3SAFEJNN6s2ZQ%2FqGZSubQ7OLkU7N%2FxBJExxcxiOtZ9dcCa6BBFboiLLAUEpBQWqm0uhVw3cdXNagqQwjU8xr758W4Wiw1cJ4vf6wrcOcKCVirfanJUa2hVIsOX10kuSPgAnLleu9lxfFRHxmpT3tvtBeNrsvgNZQr%2BZ8%2BYoQWuXejaHuVm%2BghhruhlHIiB7vUKL50CRvTO9mAnOpGBQ9UXKtlBKBRIJtQtau3SKLsRZ4GIzI4VMegnyXY6vi6BPjPnT7A1AGYSj%2FfVcFOv0nZmwVz6R9vnLYcLKstkZEOaLXdMY9q5%2Fz0INDspVOYJDM3usH3qbrGN%2FFnNmKnD8Awgm0rqbsCLngnsC1ojGZZbDi1KY0e%2BedNbcmaDfjtT7zbsb60CWdXDoJ%2BAt7QpleJvPpG%2BFNyLUzFtspf4kVNLp9qg%2FHqvpK6m5sMxuLSwCrGJ4RRQWQYrpV7Q5tiaXjfevv3riFY4SsfGWHnAoxReAeSPQfOEH9s%2Fqi0sL8A%2FXzUJaZAZkarKf77IAgrGEwY02nn3FFDYsPMLXzwb4GOqUBPV8NRfmstLFB69yYA%2FwjEQ81x00JZJUqWS%2F2PVLNdusHPd72SNmDJfOv5r9hlHHK5CsyQWuT8ouwCbZl8AthJzb2cZM2xmrBi7pFgrLDBh9On2lbOV2bJVjgeR2TVT1cVVzNNNlhnvigUrmJFvOCI7xWDn6Y7v3FAI0J4zwcAeNDoAVoRglFyj7LXAaqiHq5oLARH59dtiZkDEowOQYmCi0Rafr4&X-Amz-Signature=06975c98d90867ca56cee8fd3f9aacae3397d9b8e1b5e00c636a9d6c415c23dd&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DGAAYL6%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T181104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQDiAB8HXFaH9mgKxxNJOBQNvo8UwEIwriJFhM7VqVDdFgIgYBHwwnc2GFpq3eHZMKYqziyZVcO47flzvW5WG2%2B7p0cqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMChX13HbaqPA9I0SyrcAwotI3iucmLS4Flgv%2FVwohOLBQAqxnMevdY%2FlcOx5d%2F8mDQrspOdwVb77yRpP1vz6d53MTkhBSegBrC6mTThSTLTJfBi3SAFEJNN6s2ZQ%2FqGZSubQ7OLkU7N%2FxBJExxcxiOtZ9dcCa6BBFboiLLAUEpBQWqm0uhVw3cdXNagqQwjU8xr758W4Wiw1cJ4vf6wrcOcKCVirfanJUa2hVIsOX10kuSPgAnLleu9lxfFRHxmpT3tvtBeNrsvgNZQr%2BZ8%2BYoQWuXejaHuVm%2BghhruhlHIiB7vUKL50CRvTO9mAnOpGBQ9UXKtlBKBRIJtQtau3SKLsRZ4GIzI4VMegnyXY6vi6BPjPnT7A1AGYSj%2FfVcFOv0nZmwVz6R9vnLYcLKstkZEOaLXdMY9q5%2Fz0INDspVOYJDM3usH3qbrGN%2FFnNmKnD8Awgm0rqbsCLngnsC1ojGZZbDi1KY0e%2BedNbcmaDfjtT7zbsb60CWdXDoJ%2BAt7QpleJvPpG%2BFNyLUzFtspf4kVNLp9qg%2FHqvpK6m5sMxuLSwCrGJ4RRQWQYrpV7Q5tiaXjfevv3riFY4SsfGWHnAoxReAeSPQfOEH9s%2Fqi0sL8A%2FXzUJaZAZkarKf77IAgrGEwY02nn3FFDYsPMLXzwb4GOqUBPV8NRfmstLFB69yYA%2FwjEQ81x00JZJUqWS%2F2PVLNdusHPd72SNmDJfOv5r9hlHHK5CsyQWuT8ouwCbZl8AthJzb2cZM2xmrBi7pFgrLDBh9On2lbOV2bJVjgeR2TVT1cVVzNNNlhnvigUrmJFvOCI7xWDn6Y7v3FAI0J4zwcAeNDoAVoRglFyj7LXAaqiHq5oLARH59dtiZkDEowOQYmCi0Rafr4&X-Amz-Signature=2ed6131166e4de821b06f073315ae6e9fcfbee5efa15826cae68477fc0da95fe&X-Amz-SignedHeaders=host&x-id=GetObject)

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
