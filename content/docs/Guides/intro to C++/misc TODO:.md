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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZIIBFTH%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T100603Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCk%2BxS7eVzDV9Ww8gIuCPbrZyIqDDFxwVXN7Ts0LpKttgIhANlOS5csF10m1Le%2FwCTPzHmQhsFJg7dyD60hT7OMVucrKogECOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxbbdB3rfrwhkiOV8Yq3APkA0QLCMr%2FtDunIkgf7TvCMNkPo5nCJcvGzLj20KAdj75%2Ber7a1AwzRgLp1Gapp5dZTiTIVP2k%2FKytCnq2UVGT5gH%2FlBfoz5TPKGTosCsc7nYjJiWSZvgX1CHC1xanCf2pDsdsY0XeaK%2FdXI4UX7EjFfjkuptVrdUd9ch61mHYMxb7ONFIMoPGuwvUSUfdBUzot%2FvJUfDVTWVQtcUEcZ59IM30cTX6E2yGEqK2a157qbpE5%2F7Ecg1VWQjtFeZ%2BGqYtKnD6uzH0f4mm%2B%2FnGsgtINZFOpFY5bvzLtb3QzcgnKFn0JzFKbfS87aaaiEf6Wb2CZ0QKqX2ckQaDn5qDmoBJHYH%2FkrV7lbyWlKyTRM07hcaAVGS5wyQYjsqTokpxkFRwXkTjkbF0VWM8T9aIBoP2HViQTt3N7FSBsXdqc1ApOpNvtCrqT%2FSWQynA25jLMYPdUHQBbXFgmNn1OIkIZlPtgm19k5PVU40V7Hq27j%2FgQbrcbYt7fxp858tbE%2F7TMVehIxCh5HuKrR1d%2FwElxXHdPG6JqFrTOHlhgQVyoKWkqXuJQMEiXOPgQO%2FH7GwRrAvW5uUTfdTxMwv8MXbBTyUQ1ubHz3E6e14hlkkW0k8k4PPfh%2F%2F3cwX4kGF%2F0zCQyOW9BjqkAV4gTQd%2FkeAtekzZPb6cYsashlhb%2BBGE4VkTklVzS1Qp9WjuAVC0%2B0N7VsLKYVv9VKwDSCY%2BSvucSBtFdCFp2rMIPGcKIdUubOAXNVoIPTng42eJMYmlgVTs0VYZ4OU9%2BnHz17HRDNh1h52rRbcrs3g2%2BTWnLyDvMsmQoaw6B1cDvbmYrfjEOa0es4VCR3jobclvAinid%2Fu2nN6hHwnwSPHJ%2BRc7&X-Amz-Signature=3eb22ef7527dffbc9a812a983623dff31e282e061c955e8edc251d448b0db1ae&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZIIBFTH%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T100603Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCk%2BxS7eVzDV9Ww8gIuCPbrZyIqDDFxwVXN7Ts0LpKttgIhANlOS5csF10m1Le%2FwCTPzHmQhsFJg7dyD60hT7OMVucrKogECOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxbbdB3rfrwhkiOV8Yq3APkA0QLCMr%2FtDunIkgf7TvCMNkPo5nCJcvGzLj20KAdj75%2Ber7a1AwzRgLp1Gapp5dZTiTIVP2k%2FKytCnq2UVGT5gH%2FlBfoz5TPKGTosCsc7nYjJiWSZvgX1CHC1xanCf2pDsdsY0XeaK%2FdXI4UX7EjFfjkuptVrdUd9ch61mHYMxb7ONFIMoPGuwvUSUfdBUzot%2FvJUfDVTWVQtcUEcZ59IM30cTX6E2yGEqK2a157qbpE5%2F7Ecg1VWQjtFeZ%2BGqYtKnD6uzH0f4mm%2B%2FnGsgtINZFOpFY5bvzLtb3QzcgnKFn0JzFKbfS87aaaiEf6Wb2CZ0QKqX2ckQaDn5qDmoBJHYH%2FkrV7lbyWlKyTRM07hcaAVGS5wyQYjsqTokpxkFRwXkTjkbF0VWM8T9aIBoP2HViQTt3N7FSBsXdqc1ApOpNvtCrqT%2FSWQynA25jLMYPdUHQBbXFgmNn1OIkIZlPtgm19k5PVU40V7Hq27j%2FgQbrcbYt7fxp858tbE%2F7TMVehIxCh5HuKrR1d%2FwElxXHdPG6JqFrTOHlhgQVyoKWkqXuJQMEiXOPgQO%2FH7GwRrAvW5uUTfdTxMwv8MXbBTyUQ1ubHz3E6e14hlkkW0k8k4PPfh%2F%2F3cwX4kGF%2F0zCQyOW9BjqkAV4gTQd%2FkeAtekzZPb6cYsashlhb%2BBGE4VkTklVzS1Qp9WjuAVC0%2B0N7VsLKYVv9VKwDSCY%2BSvucSBtFdCFp2rMIPGcKIdUubOAXNVoIPTng42eJMYmlgVTs0VYZ4OU9%2BnHz17HRDNh1h52rRbcrs3g2%2BTWnLyDvMsmQoaw6B1cDvbmYrfjEOa0es4VCR3jobclvAinid%2Fu2nN6hHwnwSPHJ%2BRc7&X-Amz-Signature=724ba9ea98e89a2d358091505ed57231b433d128d48e4373678daa43bf8da778&X-Amz-SignedHeaders=host&x-id=GetObject)

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
